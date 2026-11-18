---
name: verificar-web
description: Comprueba visualmente una página de la web de @eduinvest (index.html o preview-*.html) haciendo capturas en escritorio y móvil, y detectando errores de JavaScript y scroll horizontal. Úsala siempre antes de dar por terminado un cambio de diseño o contenido.
---

# Verificar la web

## Ejecutar

```bash
node .claude/skills/verificar-web/capturas.js index.html
# o
node .claude/skills/verificar-web/capturas.js preview-mercury.html /ruta/de/salida
```

- 1.º argumento: archivo HTML del proyecto (por defecto `index.html`).
- 2.º argumento: carpeta de salida. Por defecto, `capturas/` dentro del directorio temporal del sistema. En Claude Code, mejor usar la carpeta scratchpad de la sesión.
- **Entorno cloud de Claude:** Chromium y Playwright ya vienen instalados; `require('playwright')` funciona. **No ejecutes `playwright install`.**
- **En un ordenador local** sin Playwright: `npm i -D playwright && npx playwright install chromium` (una sola vez).

## Qué hace

1. Escritorio 1440×900: captura del primer pantallazo y luego cada 800 px de scroll (`d00.png`, `d01.png`…).
2. Móvil 390×844 (táctil): capturas cada 1.600 px (`m00.png`…).
3. Informa de: altura de la página, **scroll horizontal** (debe ser 0), **errores de JS/consola** (debe ser `[]`) y **objetivos táctiles de menos de 48 px en móvil**.

## Qué revisar en las capturas

Lee las imágenes con la herramienta Read y comprueba:
- Que no haya texto tapando caras o elementos importantes (foto de Edu).
- Que no haya contenido desbordado de su tarjeta o panel (sobre todo en móvil).
- Que no aparezca "NaN", "undefined" ni texto de ejemplo.
- Que las animaciones `.reveal` hayan aparecido (las capturas esperan 1,3 s tras cada scroll).
- Que el contraste sea correcto en las secciones claras (el verde de texto sobre claro es `#00894A`, no `#00E676`).

## Interacciones

Para probar formularios, acordeones o modales, añade pasos al script o escribe uno temporal en el scratchpad con `page.click(...)`, `page.fill(...)` y `page.textContent(...)`. Ejemplo: abrir el artículo con `page.click('[onclick*="openArticle(\'oro\')"]')` y hacer una captura.

## Falsos positivos conocidos

- `Failed to load resource: net::ERR_TUNNEL_CONNECTION_FAILED`: es el script de Beehiiv (`subscribe-forms.beehiiv.com`) bloqueado por la red del entorno cloud. El hueco del formulario aparecerá vacío en la captura; no es un fallo de la web.
- El logo `@eduinvest` (28 px) y el botón "Leer" (16 px, `aria-hidden`) de las tarjetas de artículo: toda la tarjeta es clicable, así que no son fallos.
- El botón ✕ del modal mide 36 px: sí es un fallo pendiente (ver `ESTADO.md`).
