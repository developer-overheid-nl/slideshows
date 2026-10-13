// Maakt public/index.html: een overzichtspagina met links naar alle
// presentaties die `npm run deck` naar public/shows heeft gebouwd.

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const showsDir = join(root, "shows");
const outDir = join(root, "public");

function findDecks(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return findDecks(path);
    return entry.name === "index.md" ? [path] : [];
  });
}

function deckTitle(md, fallback) {
  const frontmatter = md.match(/^---\n([\s\S]*?)\n---/);
  const title = frontmatter?.[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
  if (title) return title[1];
  const heading = md.replace(/<!--[\s\S]*?-->/g, "").match(/^#\s+(.+)$/m);
  return heading ? heading[1].replace(/[`*_]/g, "").trim() : fallback;
}

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

const decks = findDecks(showsDir)
  .map((file) => {
    const slug = relative(showsDir, dirname(file));
    return { slug, title: deckTitle(readFileSync(file, "utf8"), slug) };
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));

const items = decks
  .map(
    ({ slug, title }) => `      <li>
        <a href="shows/${slug}/">
          <span class="title">${escapeHtml(title)}</span>
          <code>${escapeHtml(slug)}</code>
        </a>
      </li>`,
  )
  .join("\n");

writeFileSync(
  join(outDir, "index.html"),
  `<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Presentaties developer.overheid.nl</title>
  <style>
    :root {
      --lintblauw: #01689b;
      --donkerblauw: #154273;
      --hemelblauw: #007bc7;
      --lichtblauw: #e5f1f8;
      --grijs-1: #f3f3f3;
      --grijs-7: #535353;
      --tekst: #000;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "RO Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
      color: var(--tekst);
      background: #fff;
    }
    header {
      background: var(--donkerblauw);
      color: #fff;
      padding: 3rem 1rem 2.5rem;
    }
    header p { margin: 0; font-family: ui-monospace, "Liberation Mono", monospace; color: var(--lichtblauw); }
    h1 { margin: 0.5rem 0 0; font-size: clamp(1.75rem, 4vw, 2.5rem); }
    .wrap { max-width: 56rem; margin: 0 auto; }
    main { padding: 2rem 1rem 4rem; }
    ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.75rem; }
    a {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      padding: 1rem 1.25rem;
      border-left: 4px solid var(--lintblauw);
      background: var(--grijs-1);
      color: inherit;
      text-decoration: none;
    }
    a:hover, a:focus-visible { background: var(--lichtblauw); border-left-color: var(--hemelblauw); }
    a:focus-visible { outline: 2px solid var(--donkerblauw); outline-offset: 2px; }
    .title { font-weight: 600; color: var(--donkerblauw); }
    code { font-family: ui-monospace, "Liberation Mono", monospace; font-size: 0.875rem; color: var(--grijs-7); }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <p>$ ls developer.overheid.nl/presentaties</p>
      <h1>Presentaties</h1>
    </div>
  </header>
  <main>
    <ul class="wrap">
${items}
    </ul>
  </main>
</body>
</html>
`,
);

console.log(`\n${decks.length} presentaties in ${relative(root, outDir)}/index.html`);
