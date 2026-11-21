# Diseño estilo Mercury — análisis y traducción a @eduinvest

Referencia para pasar el formato de `preview-mercury.html` a `index.html` o para crear secciones nuevas con el mismo estilo.
Análisis hecho el 16/11/2026 con capturas de https://mercury.com y estilos extraídos con Playwright.

## 1. Lo que define a Mercury (medido en su web)

| Rasgo | Valor real en mercury.com |
|---|---|
| Tipografía | `arcadia` (texto) y `arcadiaDisplay` (títulos), propietarias. **Peso 480** en títulos, nunca negrita. |
| Tamaños | H1 ≈ 49 px · H2 42 px (secundarios 28 px) · interlineado ≈ 1,15 · `letter-spacing` 0,42 px · texto 16/24 |
| Color de texto (oscuro) | `#EDEDF3` |
| Fondo oscuro | `#171721` (`dark-neutral-theme`) |
| Fondos claros | casi blanco `#FAFBFD` y crema cálido (≈ `#F5F4F1`) |
| Botón principal | píldora, `#5266EB`, alto 40 px, `padding 0 20px`, radio 32 px, peso 420 |
| Botón secundario | cristal: `rgba(175,178,206,.2)`, borde `1px rgba(175,178,206,.36)`, `backdrop-filter: blur(20px)` |
| Transición de tema | `--theme-transition-duration: .5s`, `cubic-bezier(0,0,.6,1)` — **el fondo de la página cambia de oscuro a claro al pasar de sección** |
| Testimonios | foto a sangre con degradado negro de abajo arriba y texto encima |

## 2. Estructura de su página (de arriba abajo)

1. **Navbar** transparente sobre el hero → sólida al hacer scroll. Logo con letras espaciadas en mayúsculas, enlaces centrados, "Log in" + botón píldora.
2. **Hero** a pantalla completa con imagen cinematográfica (paisaje con niebla al atardecer). Titular centrado y corto, subtítulo, **email + botón dentro de una píldora de cristal**, botón secundario de cristal y, abajo, una píldora pequeña con el aviso legal.
3. **Maqueta de producto**: un portátil que continúa el paisaje del hero y muestra la app.
4. **Funciones** (fondo oscuro): a la izquierda, título + **acordeón** (el elemento activo tiene un punto y su descripción; los demás solo el título, separados por líneas finas) + enlace subrayado. A la derecha, **panel de la interfaz** que se sale por el borde derecho, desvaneciéndose.
5. **Testimonio** (cambia a tema claro): foto grande con cita encima.
6. **Funciones en claro**: título a la izquierda, acordeón abajo y vídeo o imagen redondeada a la derecha.
7. **Rejilla 2×2** (crema): tarjetas con imagen o vídeo en tonos pastel + título + descripción debajo.
8. **Cifras** (vuelve a oscuro): titular centrado + 4 números grandes separados por **líneas verticales**.
9. **3 columnas** de seguridad con imagen.
10. **"En el foco"**: 3 tarjetas de noticias, título grande y **botón redondo con flecha**.
11. **CTA final** centrado + 2 botones píldora + 2 tarjetas lado a lado.
12. **Footer**: 4 columnas de enlaces con cabeceras grises; debajo, una línea y el bloque "Disclaimers and footnotes" con la etiqueta a la izquierda y notas numeradas a la derecha.

## 3. Cómo se tradujo a @eduinvest (`preview-mercury.html`)

| Mercury | @eduinvest |
|---|---|
| Azul `#5266EB` | **Verde `#00E676`** con texto `#03130A` encima. Sobre fondo claro, el verde de texto es `#00894A` (contraste legible). |
| Fondo `#171721` | `#0B0F19` (el de la marca) |
| arcadia 480 | **Plus Jakarta Sans 500** |
| Paisaje con niebla | Paisaje en SVG cuyas **montañas son gráficos de precio**; la línea verde se dibuja al cargar, con un punto que late al final y bruma animada. |
| Portátil con la app | Portátil con **la edición #01 abierta en un cliente de correo** (gráfico oro vs. tipos reales). Se endereza (`rotateX`) y crece al hacer scroll. |
| Acordeón de funciones | Los 3 pilares + "archivo". Avanza solo cada 7 s con barra de progreso y se pausa al pasar el ratón. Paneles: coste de comisiones, cadena BCE → cartera, checklist antes de invertir y archivo de ediciones. |
| Testimonio con foto | **Foto de Edu con su cita** (no se inventan testimonios). En móvil, la cita va debajo de la foto. |
| Funciones en claro | "Sobre mí": acordeón (El propósito / Quién soy) + **ficha de perfil** con el estilo de la lista de cuentas de Mercury. |
| Rejilla 2×2 pastel | "Aprende a leer el mercado": bancos centrales, comisiones, ciclos y análisis fundamental, con gráficos SVG que se dibujan al aparecer. |
| Cifras | 0 € · 1 edición cada lunes · 0 afiliados · 100 % independiente (contador animado). |
| En el foco | Tarjetas de las ediciones #01 (enlace al artículo) y #02-#03 (próximamente). |
| Footer con notas | Aviso legal numerado: (1) disclaimer obligatorio literal, (2) riesgo de pérdida, (3) explicación de los ejemplos ilustrativos. |

## 4. Tokens CSS de la prueba

```css
--accent #00E676; --accent-strong #00C664; --accent-ink #03130A; --accent-on-light #00894A;
--ease cubic-bezier(0,0,.6,1); --theme-dur .5s; --maxw 1024px; --radius-lg 20px; --radius-md 14px;

/* oscuro (por defecto) */  --bg #0B0F19; --fg #EDEDF3; --muted #94A3B8; --card #161C2A; --line rgba(175,178,206,.16)
/* claro  data-theme=light */ --bg #F7F8FA; --fg #14161F; --muted #5B6274; --card #FFFFFF; --line rgba(20,22,31,.12)
/* cálido data-theme=warm  */ --bg #F4F2EE; --fg #17181C; --muted #5E5F66; --card #FBFAF8; --line rgba(23,24,28,.12)
```

**Cambio de tema por sección:** cada `<section data-theme="dark|light|warm">`; un `IntersectionObserver` con `rootMargin: '-45% 0px -54% 0px'` copia el tema de la sección que cruza el centro de la pantalla a `<body data-theme>`. El `background-color` y el `color` del body tienen `transition .5s`. Los elementos con color propio llevan la clase `.th` para animar también la transición.

## 5. Cálculo del panel de comisiones (para no rehacerlo)

10.000 € a 20 años con un 6 % bruto anual constante:
- Indexado (gastos 0,20 %): 10.000 × 1,058²⁰ = **30.881 €**
- Banca tradicional (gastos 1,85 %): 10.000 × 1,0415²⁰ = **22.553 €**
- Diferencia: **8.328 €**. Frente a la ganancia del indexado (20.881 €), eso es ≈ 40 %.

## 6. Ajustes ya resueltos en la prueba

- El contador de no leídos del correo no puede usar la clase `.count` (la usa el script de contadores y mostraba "NaN"); se llama `.unread`.
- Los paneles del acordeón se apilan con `display: grid` + `grid-area: 1/1` (no `position: absolute`) para que en móvil la altura se adapte al contenido.
- Foto de la cita: `object-position: 50% 60%` y `min-height: 700px` en escritorio para que el texto no tape la cara.
