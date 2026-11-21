// Capturas de verificación para la web de @eduinvest.
// Uso: node .claude/skills/verificar-web/capturas.js [archivo.html] [carpeta-salida]
const path = require('path');
const fs = require('fs');
const os = require('os');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..', '..', '..');
const file = path.resolve(root, process.argv[2] || 'index.html');
const out = path.resolve(process.argv[3] || path.join(os.tmpdir(), 'capturas'));

if (!fs.existsSync(file)) {
  console.error('No existe el archivo:', file);
  process.exit(1);
}
fs.mkdirSync(out, { recursive: true });
const url = 'file://' + file;

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  async function run(label, contextOpts, step, prefix) {
    const page = await (await browser.newContext(contextOpts)).newPage();
    page.on('pageerror', e => errors.push(`${label} pageerror: ${e.message}`));
    page.on('console', m => { if (m.type() === 'error') errors.push(`${label} console: ${m.text()}`); });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3500);
    await page.screenshot({ path: path.join(out, `${prefix}00.png`) });
    const height = await page.evaluate(() => document.body.scrollHeight);
    let i = 1;
    for (let y = step; y < height; y += step, i++) {
      await page.evaluate(yy => window.scrollTo(0, yy), y);
      await page.waitForTimeout(1300);
      await page.screenshot({ path: path.join(out, `${prefix}${String(i).padStart(2, '0')}.png`) });
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    let smallTargets = [];
    if (contextOpts.isMobile) {
      smallTargets = await page.evaluate(() =>
        [...document.querySelectorAll('a, button, input, select, textarea')]
          .filter(el => {
            const r = el.getBoundingClientRect();
            const s = getComputedStyle(el);
            if (s.display === 'none' || s.visibility === 'hidden' || r.width === 0) return false;
            if (el.type === 'checkbox' || el.type === 'radio') return false; // su <label> amplía la zona táctil
            if (el.closest('p, li, .footer-links, .legal')) return false;    // enlaces dentro de texto
            return r.height < 44;
          })
          .slice(0, 15)
          .map(el => `${el.tagName.toLowerCase()} "${(el.innerText || el.placeholder || el.getAttribute('aria-label') || '').trim().slice(0, 30)}" ${Math.round(el.getBoundingClientRect().height)}px`)
      );
    }
    console.log(`${label}: altura ${height}px, ${i} capturas, scroll horizontal ${overflow}px`);
    if (smallTargets.length) console.log(`${label}: objetivos táctiles < 44px →\n  ` + smallTargets.join('\n  '));
  }

  await run('escritorio', { viewport: { width: 1440, height: 900 } }, 800, 'd');
  await run('movil', { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }, 1600, 'm');

  console.log('errores', JSON.stringify(errors));
  console.log('capturas en', out);
  await browser.close();
})();
