# CLAUDE.md — @eduinvest · La Letra Pequeña

Memoria del proyecto para Claude. Léela entera antes de tocar nada.
Estado actual y próximos pasos: **`ESTADO.md`**. Guía del diseño estilo Mercury: **`docs/DISENO-MERCURY.md`**.
Historial, decisiones, preferencias del usuario y preguntas abiertas (traspaso del chat cloud, 20/11/2026): **`docs/TRASPASO.md`**.

## Qué es

Landing page de **@eduinvest**, un proyecto independiente de educación financiera de Edu (21 años, graduado en ADE).
El producto principal es la newsletter semanal gratuita **"La Letra Pequeña"** (cada lunes).
Tono: transparencia radical, rigor analítico, disciplina, anti-vendehumos. Estética: fintech premium (Stripe, Mercury), nunca genérica ni infantil.

## Cómo trabajar con el usuario

- **Escribe siempre en español** (castellano de España). El usuario no es programador: explica los pasos de forma sencilla, numerados y con enlaces clicables.
- Avanzamos **sección a sección**. Antes de un cambio grande de diseño, crea una página de prueba aparte (como `preview-mercury.html`) y no toques `index.html` hasta que el usuario la apruebe.
- Cuando termines un cambio, da siempre la URL donde verlo (ver "Publicación").
- **Rigor en los datos:** es una marca que se vende por el rigor. Toda cifra financiera de un artículo debe estar verificada con una fuente; si no puedes verificarla, márcala como "ejemplo ilustrativo" o no la pongas.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | **La web en producción.** Un único archivo: HTML + CSS en `<style>` + JS en `<script>`. ~2.200 líneas, comentado por bloques. |
| `preview-mercury.html` | Versión de prueba con el formato de mercury.com. Pendiente de aprobación. Formularios **no** conectados. `noindex`. |
| `IMAGEN EDU TRADING.png` | Foto de Edu (vertical, 1086×1448, 1,8 MB). **El nombre tiene espacios** → en HTML se escribe `IMAGEN%20EDU%20TRADING.png`. |
| `ESTADO.md` | Estado del proyecto, decisiones y tareas pendientes. Actualízalo al terminar cada tarea. |
| `docs/DISENO-MERCURY.md` | Análisis del diseño de Mercury y cómo se tradujo a la marca. |
| `docs/TRASPASO.md` | Traspaso completo del chat cloud: historial con commits, decisiones (también las descartadas), preferencias de diseño, ideas, Beehiiv, problemas técnicos y preguntas sin contestar. |
| `.claude/skills/` | Skills del proyecto: `nuevo-articulo`, `verificar-web`, `publicar-cambios`. |

## Estructura de `index.html` (orden en la página)

1. `<header id="navbar">` — navbar fija con blur, menú hamburguesa en móvil (`#navToggle` / `#navMobile`).
2. `<section id="hero">` — H1 "Lo que la banca te oculta, explicado en negro sobre blanco.", CTA y fila de métricas.
3. `<section id="filosofia">` (contiene `<div id="newsletter">`) — 3 pilares: Transparencia radical, Macroeconomía y contexto real, Criterio y autodidactismo.
4. `<section id="sobre-mi">` — foto + cita "No te enseño a invertir. Te enseño a ver lo que el sistema no quiere que veas." + 2 bloques (El propósito / Quién soy) + píldoras.
5. `<section id="articulos">` — rejilla de artículos: #01 oro (publicado, abre `#modal-oro`), #02 y #03 "Próximamente".
6. `#modal-oro` — lector modal del artículo completo. JS genérico: `openArticle(id)`, `closeArticle(id)`, Escape y clic fuera cierran.
7. `<section id="suscripcion">` — izquierda: maqueta de newsletter; derecha: **formulario real de Beehiiv**.
8. `<footer id="footer">` — logo, enlaces legales y **disclaimer financiero obligatorio**.

## Sistema de diseño (index.html)

```
--bg-primary #0B0F19   fondo obsidiana
--bg-secondary #161C2A tarjetas
--bg-card #1A2235
--accent #00E676       verde neón (CTA)   · hover #00C664
--text-primary #FFFFFF · --text-secondary #94A3B8
--border rgba(148,163,184,.12) · --radius 12px · --transition all .3s ease
Fuente: Plus Jakarta Sans (Google Fonts)
```
En `preview-mercury.html` se usa la misma paleta pero con pesos 500 (no 800), botones píldora y cambio de tema por sección; ver `docs/DISENO-MERCURY.md`.

## Reglas técnicas (del documento de especificaciones original)

- **Sin frameworks ni librerías JS pesadas.** HTML/CSS/JS vanilla, sin paso de compilación. Solo Google Fonts como recurso externo (más el script de Beehiiv).
- **Mobile-first.** Elementos táctiles de **mínimo 48 px**. Sin scroll horizontal (compruébalo).
- **HTML5 semántico**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`. Comentarios por bloque.
- Animaciones sutiles (`transition .3s`), aparición al hacer scroll con `IntersectionObserver` (clase `.reveal` → `.visible`). Respeta `prefers-reduced-motion`.
- **No borrar ni modificar secciones existentes** salvo que el usuario lo pida.

## Contenido obligatorio (no quitar nunca)

- **Disclaimer financiero** (literal, en el footer):
  > El contenido de esta página web, así como el material distribuido a través de la newsletter 'La Letra Pequeña', tiene un carácter exclusivamente educativo, divulgativo e informativo. En ningún caso constituye asesoramiento financiero, legal, fiscal o una recomendación de inversión en activos financieros.
- **Aviso de privacidad** junto a cualquier formulario de suscripción.
- Cada artículo termina con su propio aviso educativo.

## Formulario de suscripción (Beehiiv)

El usuario conectó el formulario real en el commit `6df4e60`. Está en `#suscripcion`:
```html
<script async src="https://subscribe-forms.beehiiv.com/v3/loader.js"
        data-beehiiv-form="b6e7bdab-3931-4b77-bd06-ce20ce3ce6f4"></script>
```
No lo sustituyas por un formulario propio: enviar a Beehiiv desde un formulario a medida exige su API con una clave secreta, que no puede ir en una web estática pública. Su estilo se ajusta desde el panel de Beehiiv.

## Git y publicación

- Repo: `Eduinvesting/web-edu-investt` (público). Rama de trabajo: **`claude/wizardly-cannon-nz73cm`**. PR abierta: **#1** (rama → `main`). `main` solo tiene el commit inicial y **no se puede hacer push directo** (403).
- **GitHub Pages publica desde la rama `claude/wizardly-cannon-nz73cm`, carpeta raíz.** Cada push se ve en 1-2 min en:
  - Web: https://eduinvesting.github.io/web-edu-investt/
  - Prueba Mercury: https://eduinvesting.github.io/web-edu-investt/preview-mercury.html
- El usuario a veces sube archivos desde la web de GitHub: **haz `git pull` antes de empezar**.
- Detalle de los pasos: skill `publicar-cambios`.

## Verificación

Antes de dar algo por terminado: capturas en escritorio (1440×900) y móvil (390×844), cero errores de consola y cero scroll horizontal. Usa la skill `verificar-web` (script Playwright incluido).
