---
name: publicar-cambios
description: Guarda y publica cambios de la web de @eduinvest en GitHub (commit + push a la rama de trabajo, que GitHub Pages publica sola) y le da al usuario la URL para verlo. Úsala al terminar cualquier cambio en la web.
---

# Publicar cambios

## Datos fijos

- Repo: `Eduinvesting/web-edu-investt` · rama de trabajo: **`claude/wizardly-cannon-nz73cm`**
- GitHub Pages publica **desde esa rama** (carpeta raíz). Tarda 1-2 minutos tras el push.
- URL base: `https://eduinvesting.github.io/web-edu-investt/` (+ nombre del archivo si no es `index.html`).
- `main` está protegida: **nunca hagas push a `main`**. La PR #1 (rama → `main`) solo se fusiona si el usuario lo pide.

## Pasos

1. **Traer cambios del usuario primero** (sube archivos desde la web de GitHub):
   ```bash
   git fetch origin claude/wizardly-cannon-nz73cm && git merge --ff-only FETCH_HEAD
   ```
   Si no avanza con `--ff-only`, haz `git merge --no-edit FETCH_HEAD` y revisa conflictos. Nunca uses `push --force`.
2. Verifica antes de publicar (skill `verificar-web`).
3. Commit con mensaje en inglés, estilo `feat: …` / `fix: …` / `docs: …`, y una lista de lo cambiado en el cuerpo.
4. `git push -u origin claude/wizardly-cannon-nz73cm`. Si falla por la red, reintenta hasta 4 veces esperando un poco más cada vez.
5. Opcional: comprueba que GitHub Pages terminó (en GitHub, Actions → "pages build and deployment" en verde).
6. **Dile al usuario** en español, en pocas líneas, qué ha cambiado y la URL exacta para verlo. Recuérdale que espere 1-2 minutos y recargue la página.
7. Actualiza `ESTADO.md`.

## Archivos subidos por el usuario

Si el usuario sube una imagen por GitHub, comprueba su nombre exacto con `ls`. Los espacios se codifican como `%20` en el `src`, como ya pasó con `IMAGEN EDU TRADING.png`.
