# Slideshows developer.overheid.nl

In dit project vind je presentaties die zijn gegeven vanuit developer.overheid.nl. De presentaties zijn geschreven in Marp: 
Marp: Markdown Presentation Ecosystem.

## Install
```
pnpm install
```
## Prerequisites
- Chromium (for headless generation stuff)

## Export to PDF
Run this inside a slideshow directory: 

```sh
marp --pdf --browser-path chromium ./index.md --allow-local-files --theme ../../themes/don_main.css
```
## Publiceren op GitHub Pages
Alle presentaties (elke `index.md` onder `shows/`) worden bij een push naar `main` automatisch gebouwd en gepubliceerd op GitHub Pages via `.github/workflows/github-pages.yml`. Een show met een eigen `marp.config.mjs` wordt met die specifieke config gebouwd.

Lokaal bouwen:

```sh
npm run build
```

Het resultaat staat in `public/`, met een overzichtspagina in `public/index.html`.
