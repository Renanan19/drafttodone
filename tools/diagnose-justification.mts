/**
 * Distribution des ratios de justification sur un manuscrit reel.
 * Un maximum ne dit pas si le livre est mauvais ou si une ligne l'est.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { JSDOM } from "jsdom";

globalThis.DOMParser = new JSDOM().window.DOMParser;

const ROOT = join(import.meta.dirname, "..");
const { readDocx } = await import("../app/kdp-formatter/engine/docx-reader");
const { loadHyphenator } = await import("../app/kdp-formatter/engine/hyphenate");
const { breakParagraph } = await import("../app/kdp-formatter/engine/linebreak");
const { polishRuns } = await import("../app/kdp-formatter/engine/typography");
const { marginsFor, textWidthFor, TYPE } = await import("../app/kdp-formatter/engine/kdp-rules");

const { PDFDocument } = await import("pdf-lib");
const fontkit = (await import("@pdf-lib/fontkit")).default;

const pdf = await PDFDocument.create();
pdf.registerFontkit(fontkit);
const font = await pdf.embedFont(
  readFileSync(join(ROOT, "public/fonts/crimson-text/CrimsonText-Regular.ttf")),
);

const cache = new Map<string, number>();
const measure = (text: string) => {
  const hit = cache.get(text);
  if (hit !== undefined) return hit;
  const w = font.widthOfTextAtSize(text, TYPE.bodySize);
  cache.set(text, w);
  return w;
};

await loadHyphenator("fr");

const doc = readDocx(new Uint8Array(readFileSync(process.argv[2])));
const width = textWidthFor(marginsFor(200));

const ratios: number[] = [];
const offenders: { ratio: number; words: number; sample: string }[] = [];

for (const chapter of doc.chapters) {
  for (const block of chapter.blocks) {
    if (block.kind === "sceneBreak") continue;
    const lines = breakParagraph(polishRuns(block.runs, doc.meta.lang), measure, {
      width,
      firstIndent: TYPE.bodySize * TYPE.indentEm,
      lang: doc.meta.lang,
      hyphenate: true,
      bodySize: TYPE.bodySize,
    });
    for (const line of lines) {
      if (line.last) continue;
      ratios.push(line.gapRatio);
      if (line.gapRatio > 2) {
        const texts = line.pieces.filter((p) => p.kind === "text").map((p) => p.text);
        offenders.push({
          ratio: +line.gapRatio.toFixed(2),
          words: texts.length,
          sample: texts.join(" ").slice(0, 70),
        });
      }
    }
  }
}

ratios.sort((a, b) => a - b);
const at = (q: number) => +ratios[Math.floor(ratios.length * q)]?.toFixed(2);

console.log({
  lignesJustifiees: ratios.length,
  median: at(0.5),
  p90: at(0.9),
  p99: at(0.99),
  max: +Math.max(...ratios).toFixed(2),
  auDessusDe2: ratios.filter((r) => r > 2).length,
  partAuDessusDe2: `${((ratios.filter((r) => r > 2).length / ratios.length) * 100).toFixed(1)}%`,
});

console.log("\nlignes fautives (mots par ligne) :");
for (const o of offenders.sort((a, b) => b.ratio - a.ratio).slice(0, 8)) {
  console.log(`  ratio ${o.ratio}  mots ${o.words}  « ${o.sample} »`);
}
