# ESTADO.md — Estado del proyecto

_Última actualización: 20 de noviembre de 2026 (traspaso al chat madre)._

## Resumen en una línea

La web está publicada y funcionando con el formulario real de Beehiiv. Hay una versión de prueba con el diseño de Mercury **pendiente de que el usuario la apruebe** para pasarla a la web principal. Desde el 20/11/2026 el proyecto lo lleva el **chat madre** en el ordenador de Edu; el historial y el contexto completos están en **`docs/TRASPASO.md`**.

## Enlaces

- Web publicada: https://eduinvesting.github.io/web-edu-investt/
- Versión de prueba (Mercury): https://eduinvesting.github.io/web-edu-investt/preview-mercury.html
- Repositorio: https://github.com/Eduinvesting/web-edu-investt (rama `claude/wizardly-cannon-nz73cm`)
- Pull request abierta: https://github.com/Eduinvesting/web-edu-investt/pull/1

## Hecho

| Fecha (git) | Qué | Commit |
|---|---|---|
| 23/06/2026 | Landing completa según el documento de especificaciones (navbar, hero, 3 pilares, maqueta + formulario, footer con disclaimer) | `49fe481` |
| 24/06/2026 | Sección de artículos + artículo completo #01 «Por qué el oro no es solo un activo refugio» (modal lector) | `0c79256` |
| 24/06/2026 | Sección «Sobre mí» con foto, cita y biografía (la foto la subió el usuario) | `540ba49`, `07a3309`, `e5b1374` |
| 03/09/2026 | **(usuario)** Formulario conectado a Beehiiv; se eliminó la validación JS propia y la casilla de privacidad | `01eab8c`, `af789a8`, `cd8f657`, `6df4e60` |
| 16/11/2026 | Búsqueda de referentes de diseño (competencia y webs fintech); el usuario elige Mercury | — |
| 16/11/2026 | Análisis de mercury.com y creación de `preview-mercury.html` | `77d2f7c` |
| 18/11/2026 | Archivos de traspaso: `CLAUDE.md`, `ESTADO.md`, `docs/DISENO-MERCURY.md`, skills; ZIP del proyecto enviado al usuario | `b2e5641` |
| 20/11/2026 | `docs/TRASPASO.md` y este ESTADO actualizado para el chat madre | `2d2067c` |
| 20/11/2026 | Repo clonado en el ordenador del usuario; primera publicación desde el chat madre | `f9a0c5d` |
| 20/11/2026 | Fase 1 (parte 1): cifras del oro verificadas y corregidas con fuentes (WGC, RBC, FRED) y nota de corrección; maqueta «#47» sustituida por un ejemplo sin fecha falsa; quitado el enlace duplicado «Filosofía»; «cartera familiar» → «Invierto mi propio dinero»; titular de artículos comprobable; quitada la horquilla 5-15 % de oro en cartera (sonaba a recomendación) | (este commit) |

## Pendiente (por prioridad)

1. **Revisión del usuario de `preview-mercury.html`.** Esperando su opinión desde el 16/11: ¿le gusta?, ¿cambia colores, textos u orden de secciones? (Se le volvió a preguntar el 20/11, sin respuesta.)
2. **Pasar el formato Mercury a `index.html`** una vez aprobado:
   - Mantener el **embed de Beehiiv** (no el formulario píldora simulado de la prueba). Opciones: poner el embed en el hero y/o en el CTA final, y ajustar su estilo desde el panel de Beehiiv.
   - Conservar el modal del artículo del oro, la sección Sobre mí, el aviso de privacidad y el disclaimer literal.
   - Quitar `noindex` (la prueba lo tiene) y decidir si se borra `preview-mercury.html` después.
3. **Corregir cifras del artículo del oro** (`index.html`, caja de datos y texto del `#modal-oro`). Se escribieron sin verificar con fuentes. Probablemente incorrectas:
   - «+68 % subida del oro en 2020» → según datos de entrenamiento, en torno a un **25 %**.
   - «−28 % caída del oro en 2022» → cerró **prácticamente plano**.
   - Verificar también: correlación −0,82 con TIPS 10Y, «más de 1.000 toneladas compradas por bancos centrales en 2023» y «~10 % de demanda industrial».
   - Verificar con una fuente antes de cambiar y avisar al usuario.
4. **Páginas legales.** Los enlaces `#politica-privacidad` y `#aviso-legal` **no llevan a ningún sitio**. Para una web española que recoge emails hacen falta Política de Privacidad (RGPD) y Aviso Legal (LSSI). Crear `privacidad.html` y `aviso-legal.html` con los datos que dé el usuario (titular, email de contacto…). No inventar datos personales.
5. **Consentimiento en el formulario de Beehiiv.** El documento original pedía una casilla de privacidad obligatoria; desde el 03/09 solo hay un texto. Preguntar al usuario si añadir el consentimiento desde la configuración del formulario en Beehiiv (no seguro de lo que exige la ley exactamente).
6. **Ediciones #02 y #03** (ahora «Próximamente»). Usar la skill `nuevo-articulo`:
   - #02 «La ilusión del depósito bancario: lo que el 3 % no te cuenta» (inflación, ahorro, coste de no hacer nada).
   - #03 «Curva de tipos invertida: el indicador que casi siempre acierta» (renta fija, recesión, Fed).
7. **Pasar a `main`:** fusionar la PR #1 y cambiar GitHub Pages para que publique desde `main` (Settings → Pages). Solo cuando el usuario lo pida.
8. **Mejoras menores:**
   - Comprimir la foto (1,8 MB PNG → WebP de unos 150-250 KB) para que la web cargue más rápido.
   - Renombrar la foto sin espacios (p. ej. `edu-trading.png`) y actualizar las rutas en ambos HTML.
   - Etiquetas Open Graph (vista previa al compartir en WhatsApp/redes) y favicon.
   - El botón ✕ que cierra el artículo (`.modal-close`) mide 36 px; el mínimo táctil del documento es 48 px.

**Resuelto:** «trabajar en el ordenador del usuario». Desde el 20/11 el proyecto se lleva desde un chat de Claude Code en su ordenador (chat madre con subchats por tarea).

## Decisiones tomadas

- **Un único archivo HTML** con CSS y JS dentro, sin frameworks (requisito del documento original: rendimiento y facilidad de integración).
- **GitHub Pages desde la rama de trabajo** (no desde `main`) porque `main` rechaza el push (403) y el usuario quería ver la web ya. El repo se hizo público para poder usar Pages gratis.
- **Rediseños como página aparte** (`preview-*.html`) hasta que el usuario los apruebe.
- **Formulario = embed de Beehiiv** (decisión del usuario). No construir envíos propios a Beehiiv (exigiría una clave de API expuesta).
- **Inspiración de diseño:** al usuario le parecieron «muy simplistas» las webs de newsletters de la competencia (Substack) y eligió **Mercury** como referente. Se copia el formato y el estilo, nunca textos, imágenes ni código de terceros.
- En la prueba Mercury, la «foto a pantalla completa con cita» sustituye a los testimonios de Mercury: **no inventar testimonios** de clientes.
- **Chat madre** (desde el 20/11/2026): el proyecto se unifica en un chat de Claude Code en el ordenador del usuario, que abre subchats por tarea. El chat cloud deja de usarse.

Las decisiones descartadas, las preferencias de diseño, las ideas pendientes y las preguntas abiertas están en `docs/TRASPASO.md`.

## Referentes estudiados

- Competencia directa (newsletters de finanzas en español): FGA Macro / Mestral Invest, Finanza Honesta, DSInvesting, Newsletter de Dinero y Bolsa, Inversor Inteligente. Casi todas en Substack, con un diseño básico.
- Referentes de interfaz: **Mercury (elegido)**, Stripe, Linear, Ramp, Robinhood, Revolut, Koyfin, Milk Road, Morning Brew, Finimize.
- Galerías de inspiración: Lapa Ninja (fintech), Awwwards, Godly.

## Entorno

- **Ahora:** chat madre en el ordenador del usuario (Windows). Clon en `D:\Nueva carpeta\Escritorio\eduinvest\web-edu-investt`. El plan general del proyecto vive fuera del repo, en `D:\Nueva carpeta\Escritorio\eduinvest\secuencia.md`. Node.js 24 y Playwright 1.64.1 instalados; Playwright está en `..\.herramientas` (fuera del repo, para no meter `node_modules` aquí). Ver la skill `verificar-web`.
- **Antes (chat cloud, en desuso):** entorno «email» con red limitada (gestores de paquetes, webs financieras/oficiales y `mercury.com`); Chromium y Playwright venían preinstalados. Detalle en `docs/TRASPASO.md`, sección 10.
