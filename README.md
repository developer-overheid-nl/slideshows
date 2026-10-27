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
## Achtergrond-classes
Het theme `themes/don_main.css` heeft de volgende classes die de achtergrond van een slide bepalen. Gebruik ze per slide met `<!-- _class: ... -->`; ze zijn te combineren met layout-classes zoals `title-left` of `list-text-small`.

| Class | Achtergrond | Voorbeeld |
|---|---|---|
| _(geen)_ | Wit (standaard) | |
| `invert` | Hemelblauw (`#017bc6`) | `<!-- _class: invert -->` |
| `grid-paper` | Ruitjespapier (lichtblauw raster), past bij de SVG's in `img/` | `<!-- _class: grid-paper -->` |
| `grid-paper invert` | Blauw met wit raster | `<!-- _class: grid-paper invert -->` |
| `rainbow` | Donker (`#0b1020`) met roze/cyaan gloed, raster en zwevende 🌈/👾 | `<!-- _class: rainbow -->` |
| `title-terminal` | Donkerblauw (`#154273`) met gloed en raster, voor de titelslide met terminalvenster | `<!-- _class: title invert title-terminal -->` |
| `code-editor` | Donkerblauw met gloed en raster, met een editorvenster voor een codeblok | `<!-- _class: invert code-editor -->` |
| `code-terminal` | Zelfde achtergrond als `code-editor`, met een terminalvenster (`<pre class="terminal">`) | `<!-- _class: invert code-terminal -->` |
| `terminal-bg` | Hemelblauw (`#017bc6`) met het witte raster van `code-editor`/`code-terminal`, zonder gloed, venster of aangepaste layout | `<!-- _class: invert terminal-bg -->` |
| `page-image-only` | Hemelblauw zonder titel; bedoeld voor een fullscreen `![bg](...)` screenshot | `<!-- _class: page-image-only -->` |
| `image` | Geen achtergrondafbeelding, geen padding en geen titel; voor één grote afbeelding | `<!-- _class: image -->` |

Wil je het Rijkslogo bovenaan weglaten, voeg dan `no-logo` toe, bijvoorbeeld `<!-- _class: invert no-logo -->`.

Daarnaast kun je met Marp zelf een afbeelding als achtergrond gebruiken, bijvoorbeeld `![bg brightness:0.55](./img/foto.png)` (gedimd) of `![bg right:40% contain](./img/plaatje.png)` (split-screen).

## Publiceren op GitHub Pages
Alle presentaties (elke `index.md` onder `shows/`) worden bij een push naar `main` automatisch gebouwd en gepubliceerd op GitHub Pages via `.github/workflows/github-pages.yml`. Een show met een eigen `marp.config.mjs` wordt met die specifieke config gebouwd.

Lokaal bouwen:

```sh
npm run build
```

Het resultaat staat in `public/`, met een overzichtspagina in `public/index.html`.
