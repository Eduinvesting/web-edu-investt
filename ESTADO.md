# ESTADO.md — Estado del proyecto

_Última actualización: 18 de noviembre de 2026._

## Resumen en una línea

La web está publicada y funcionando con el formulario real de Beehiiv. Hay una versión de prueba con el diseño de Mercury **pendiente de que el usuario la apruebe** para pasarla a la web principal.

## Enlaces

- Web publicada: https://eduinvesting.github.io/web-edu-investt/
- Versión de prueba (Mercury): https://eduinvesting.github.io/web-edu-investt/preview-mercury.html
- Repositorio: https://github.com/Eduinvesting/web-edu-investt (rama `claude/wizardly-cannon-nz73cm`)
- Pull request abierta: https://github.com/Eduinvesting/web-edu-investt/pull/1

## Hecho

| Fecha | Qué | Commit |
|---|---|---|
| Nov 2026 | Landing completa según el documento de especificaciones (navbar, hero, 3 pilares, maqueta + formulario, footer con disclaimer) | `49fe481` |
| Nov 2026 | Sección de artículos + artículo completo #01 "Por qué el oro no es solo un activo refugio" (modal lector) | `0c79256` |
| Nov 2026 | Sección "Sobre mí" con foto, cita y biografía | `540ba49`, `e5b1374` |
| 3 sep 2026* | **(usuario)** Formulario conectado a Beehiiv; se eliminó la validación JS propia | `cd8f657`, `6df4e60` |
| 16 nov 2026 | Búsqueda de referentes de diseño (competencia y webs fintech) | — |
| 16 nov 2026 | Análisis de mercury.com y creación de `preview-mercury.html` | `77d2f7c` |
| 18 nov 2026 | Archivos de traspaso: `CLAUDE.md`, `ESTADO.md`, `docs/`, skills | (este commit) |

\* Fecha del commit tal como aparece en git.

## Pendiente (por prioridad)

1. **Revisión del usuario de `preview-mercury.html`.** Esperando su opinión: ¿le gusta?, ¿cambia colores, textos u orden de secciones?
2. **Pasar el formato Mercury a `index.html`** una vez aprobado:
   - Mantener el **embed de Beehiiv** (no el formulario píldora simulado de la prueba). Opciones: poner el embed en el hero y/o en el CTA final, y ajustar su estilo desde el panel de Beehiiv.
   - Conservar el modal del artículo del oro, la sección Sobre mí, el aviso de privacidad y el disclaimer literal.
   - Quitar `noindex` (la prueba lo tiene) y decidir si se borra `preview-mercury.html` después.
3. **Corregir cifras del artículo del oro** (`index.html`, caja de datos del `#modal-oro`, ~línea 1920). Probablemente incorrectas:
   - "+68 % subida del oro en 2020" → el oro subió en torno a un **25 %** en 2020.
   - "−28 % caída del oro en 2022" → en 2022 cerró **prácticamente plano** (≈0 %).
   - "−0,82 correlación con TIPS 10Y" → plausible, pero **verificar** con fuente.
   - Verificar con una fuente antes de cambiar (el entorno cloud tiene acceso a `finance.yahoo.com`, `investing.com`, `federalreserve.gov`, `reuters.com`…) y avisar al usuario.
4. **Páginas legales.** Los enlaces `#politica-privacidad` y `#aviso-legal` **no llevan a ningún sitio** (no existen esas secciones). Para una web española que recoge emails hacen falta Política de Privacidad (RGPD) y Aviso Legal (LSSI). Crear páginas (`privacidad.html`, `aviso-legal.html`) con los datos que dé el usuario (titular, email de contacto…). No inventar datos personales.
5. **Ediciones #02 y #03** (ahora "Próximamente"). Usar la skill `nuevo-articulo`:
   - #02 "La ilusión del depósito bancario: lo que el 3 % no te cuenta" (inflación, ahorro, coste de no hacer nada).
   - #03 "Curva de tipos invertida: el indicador que casi siempre acierta" (renta fija, recesión, Fed).
6. **Pasar a `main`:** fusionar la PR #1 y cambiar GitHub Pages para que publique desde `main` (Settings → Pages). Solo cuando el usuario lo pida.
7. **Mejoras menores:**
   - Comprimir la foto (1,8 MB PNG → WebP de unos 150-250 KB) para que la web cargue más rápido.
   - Renombrar la foto sin espacios (p. ej. `edu-trading.png`) y actualizar las rutas en ambos HTML.
   - Etiquetas Open Graph (vista previa al compartir en WhatsApp/redes) y favicon.
   - El botón ✕ que cierra el artículo (`.modal-close`) mide 36 px; el mínimo táctil del documento es 48 px.
8. **Trabajar en el ordenador del usuario.** El usuario quiere usar Claude en su ordenador local. La sesión cloud no tenía carpetas compartidas. Opciones: app de escritorio de Claude (Configuración → Claude Code → Remote Control) o abrir una sesión directamente en su ordenador con este repositorio clonado.

## Decisiones tomadas

- **Un único archivo HTML** con CSS y JS dentro, sin frameworks (requisito del documento original: rendimiento y facilidad de integración).
- **GitHub Pages desde la rama de trabajo** (no desde `main`) porque `main` está protegida y el usuario quería ver la web ya. El repo se hizo público para poder usar Pages gratis.
- **Rediseños como página aparte** (`preview-*.html`) hasta que el usuario los apruebe.
- **Formulario = embed de Beehiiv** (decisión del usuario). No construir envíos propios a Beehiiv (exigiría una API key expuesta).
- **Inspiración de diseño:** al usuario le parecieron "muy simplistas" las webs de newsletters de la competencia (Substack) y eligió **Mercury** como referente. Se copia el formato y el estilo, nunca textos, imágenes ni código de terceros.
- En la prueba Mercury, la "foto a pantalla completa con cita" sustituye a los testimonios de Mercury: **no inventar testimonios** de clientes.

## Referentes estudiados

- Competencia directa (newsletters de finanzas en español): FGA Macro / Mestral Invest, Finanza Honesta, DSInvesting, Newsletter de Dinero y Bolsa, Inversor Inteligente. Casi todas en Substack, con un diseño básico.
- Referentes de interfaz: **Mercury (elegido)**, Stripe, Linear, Ramp, Robinhood, Revolut, Koyfin, Milk Road, Morning Brew, Finimize.
- Galerías de inspiración: Lapa Ninja (fintech), Awwwards, Godly.

## Entorno cloud de Claude

- Entorno "email" (personal). Red limitada: gestores de paquetes y una lista de webs financieras/oficiales (BLS, Fed, BCE, BdE, INE, CNMV, Reuters, Yahoo Finance, Investing, Expansión, Cinco Días, elEconomista…) más `mercury.com` (añadido para analizar su diseño).
- Chromium y Playwright vienen preinstalados en el entorno cloud (no reinstalar).
