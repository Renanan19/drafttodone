// Adds <link rel="preload"> for the hero fonts to every built page.
//
// next/font marks the files it wants preloaded with ".p." in their name, but
// on this site its font manifest comes out empty (Next 15.5, fonts declared in
// a shared layout module or in the layouts themselves alike), so no preload is
// ever emitted. Without one, the browser only discovers the font after it has
// downloaded and parsed the stylesheet, and the hero headline is painted late.
//
// Runs after `next build`, against `out/`. For each page it reads the
// stylesheets that page links and preloads the ".p." fonts they reference, so
// a page never preloads a font it does not use. The build fails if no page
// gets a preload: that would mean the naming or the markup changed under us.

import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "_next" ? [] : htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

const fontsByStylesheet = new Map();
function preloadableFonts(href) {
  if (!fontsByStylesheet.has(href)) {
    const css = readFileSync(join(OUT, href), "utf8");
    const urls = [...css.matchAll(/url\((\/_next\/static\/media\/[^)]+\.p\.woff2)\)/g)].map((m) => m[1]);
    fontsByStylesheet.set(href, [...new Set(urls)]);
  }
  return fontsByStylesheet.get(href);
}

let pages = 0;
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, "utf8");
  if (html.includes('rel="preload" as="font"')) continue;

  const stylesheets = [...html.matchAll(/<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)"/g)].map(
    (m) => m[1],
  );
  const fonts = [...new Set(stylesheets.flatMap(preloadableFonts))];
  if (fonts.length === 0) continue;

  const links = fonts
    .map((href) => `<link rel="preload" href="${href}" as="font" type="font/woff2" crossorigin=""/>`)
    .join("");
  // Before the first stylesheet, so the font requests start alongside the CSS.
  const at = html.indexOf('<link rel="stylesheet"');
  writeFileSync(file, html.slice(0, at) + links + html.slice(at));
  pages += 1;
}

if (pages === 0) {
  throw new Error("preload-fonts: no page got a font preload; check the .p.woff2 naming and the stylesheet links");
}
console.log(`preload-fonts: ${pages} pages`);
