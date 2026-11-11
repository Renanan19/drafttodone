// Writes a redirect page for every URL retired in seo/redirects.json.
//
// GitHub Pages cannot answer with a 301, so each retired path gets a static
// page that does the next best thing: an instant meta refresh (which Google
// treats as a permanent redirect) plus a canonical pointing at the target, so
// the signals of the old URL consolidate into the page that replaced it.
//
// Runs after `next build`, against `out/`. It refuses to overwrite a page the
// build produced: if a retired path renders again, the redirect map is wrong
// and the build has to fail rather than silently hide a live page.

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE_URL = "https://drafttodone.io";
const OUT = "out";

const redirects = JSON.parse(readFileSync("seo/redirects.json", "utf8"));

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

let written = 0;
for (const [from, to] of Object.entries(redirects)) {
  const target = join(OUT, `${from.slice(1)}.html`);
  const targetPage = join(OUT, `${to.slice(1)}.html`);

  if (existsSync(target)) {
    throw new Error(`${from} is still built as a page; remove it from seo/redirects.json or from the source`);
  }
  if (!existsSync(targetPage)) {
    throw new Error(`${from} redirects to ${to}, which the build did not produce`);
  }

  const url = escapeAttr(`${SITE_URL}${to}`);
  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Moved</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace(${JSON.stringify(`${SITE_URL}${to}`)} + location.hash)</script>
</head>
<body><p>This page moved to <a href="${url}">${url}</a>.</p></body>
</html>
`;

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  written += 1;
}

console.log(`write-redirects: ${written} redirect pages written`);

// Trailing-slash stubs.
//
// The export writes `/fr` as `out/fr.html` next to a folder `out/fr/`. GitHub
// Pages serves the file for `/fr`, but `/fr/` looks for `out/fr/index.html` and
// answered 404: every link pasted with a trailing slash was a dead page. Each
// such folder gets an index that sends the visitor (and the signals) to the
// slashless URL. `/en/` has no page of its own: the English home is `/`.
function stub(target) {
  const url = escapeAttr(target);
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Moved</title>
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
</head>
<body><p>This page is at <a href="${url}">${url}</a>.</p></body>
</html>
`;
}

let slashStubs = 0;
function walk(dir, urlPath) {
  for (const entry of readdirSync(dir)) {
    if (entry === "_next") continue;
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    const childUrl = `${urlPath}/${entry}`;
    const index = join(full, "index.html");
    if (!existsSync(index)) {
      const target = childUrl === "/en" ? SITE_URL : existsSync(`${full}.html`) ? `${SITE_URL}${childUrl}` : null;
      if (target) {
        writeFileSync(index, stub(target));
        slashStubs += 1;
      }
    }
    walk(full, childUrl);
  }
}
walk(OUT, "");
console.log(`write-redirects: ${slashStubs} trailing-slash stubs written`);
