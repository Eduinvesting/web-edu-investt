---
name: nuevo-articulo
description: Escribe y publica un artículo nuevo de la newsletter "La Letra Pequeña" en la web de @eduinvest (tarjeta en la rejilla de #articulos + modal lector con el artículo completo). Úsala cuando el usuario pida un artículo, una edición nueva o completar las ediciones "Próximamente".
---

# Nuevo artículo de La Letra Pequeña

## 1. Antes de escribir

- `git pull` (el usuario a veces sube cambios desde GitHub).
- Mira la última edición publicada en `index.html` (`.article-edition`) para numerar la siguiente (#02, #03…).
- Si la edición ya existe como tarjeta "Próximamente" (`.article-card.coming-soon`), **reutiliza su título** salvo que el usuario diga otro.

## 2. Contenido (obligatorio)

Estilo: divulgativo pero riguroso, tuteando al lector, frases directas, sin vender nada. En español de España.

Estructura del `.article-body`:
1. `h2` **Introducción**: desmonta la idea simplista que tiene la mayoría.
2. `h2` **Desarrollo** (2-3 apartados): argumentos técnicos y mecanismos.
3. Al menos **una analogía cotidiana** en `.article-analogy` (como la del "dinero en el cajón" en el artículo del oro).
4. Una **caja de datos** `.article-databox` con 3 cifras clave.
5. 1-2 **citas destacadas** `.article-pullquote`.
6. `h2` **Conclusión**: qué hacer con esto y la pregunta correcta que debe hacerse el lector.
7. `.modal-disclaimer` con el aviso educativo.

**Rigor de los datos (no negociable):**
- Cada cifra de la caja de datos y del texto debe salir de una fuente verificable. El entorno cloud tiene acceso a BCE, Fed, BdE, INE, CNMV, BLS, Reuters, Yahoo Finance, Investing, Trading Economics, Expansión, Cinco Días y elEconomista.
- Si no puedes verificar una cifra, quítala o márcala explícitamente como "ejemplo ilustrativo".
- Al terminar, enumera al usuario las fuentes de cada cifra.
- Nunca recomiendes comprar o vender un activo concreto.

## 3. HTML: copia el patrón del artículo del oro

Busca en `index.html` la tarjeta con `openArticle('oro')` y el bloque `<div id="modal-oro" …>`. Cópialos y cambia el identificador (`oro` → p. ej. `deposito`) en **todos** estos sitios:

- Tarjeta: `onclick="openArticle('ID')"`, `onkeydown="if(event.key==='Enter'||event.key===' ')openArticle('ID')"` y `aria-label="Leer artículo: TÍTULO"`.
- Modal: `id="modal-ID"`, `aria-labelledby="modal-ID-title"`, `onclick="closeArticleOnOverlay(event, 'ID')"`, botón `closeArticle('ID')` y `<h1 id="modal-ID-title">`.

Tarjeta: `.article-edition` ("Edición #0N · Categoría"), `h3` con el título, `.article-card-excerpt` de 2-3 líneas y 3 `.article-tag`. Si sustituye a un placeholder, **quita la clase `coming-soon`** y el `.coming-soon-badge`.

El JS (`openArticle` / `closeArticle` / Escape) es genérico: no hay que tocarlo.

Si el diseño Mercury ya está en `index.html`, actualiza también la tarjeta correspondiente de "En el foco" y el panel "Archivo" del acordeón (insignia "Disponible").

## 4. Cerrar

1. Verifica con la skill `verificar-web` (abre el modal en la captura y comprueba el móvil).
2. Publica con la skill `publicar-cambios`.
3. Actualiza `ESTADO.md` (tabla "Hecho" y lista de pendientes).
