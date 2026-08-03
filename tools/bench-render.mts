/**
 * Times a full render, so performance work is driven by numbers.
 *   npx tsx tools/bench-render.mts            (or: npx vite-node)
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { JSDOM } from "jsdom";

// The reader uses DOMParser, which Node does not provide.
globalThis.DOMParser = new JSDOM().window.DOMParser;

import { readDocx } from "../app/kdp-formatter/engine/docx-reader";
import { loadHyphenator } from "../app/kdp-formatter/engine/hyphenate";
import { renderPdf } from "../app/kdp-formatter/engine/pdf-writer";

const ROOT = join(import.meta.dirname, "..");
const fetchFont = async (path: string) => new Uint8Array(readFileSync(join(ROOT, "public", path)));

const name = process.argv[2] ?? "long-novel";
const bytes = new Uint8Array(
  readFileSync(join(ROOT, "app", "kdp-formatter", "__fixtures__", `${name}.docx`)),
);

await loadHyphenator("fr");

const t0 = performance.now();
const doc = readDocx(bytes);
const t1 = performance.now();

const result = await renderPdf(doc, {
  hyphenate: true,
  legal: ["© 2026 Antoine.", "Première édition."],
  fetchFont,
});
const t2 = performance.now();

const words = doc.chapters
  .flatMap((c) => c.blocks)
  .flatMap((b) => b.runs)
  .reduce((n, r) => n + r.text.split(/\s+/).length, 0);

console.log({
  fixture: name,
  words,
  chapters: doc.chapters.length,
  pages: result.pageCount,
  readMs: Math.round(t1 - t0),
  renderMs: Math.round(t2 - t1),
  totalMs: Math.round(t2 - t0),
  kb: Math.round(result.bytes.length / 1024),
});
