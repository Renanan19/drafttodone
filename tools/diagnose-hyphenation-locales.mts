/**
 * Does hyphenation actually rescue justified German and Italian?
 *
 * The FR/EN work measured a worst line stretching its spaces to 5.6x natural
 * width without hyphenation, and 1.57x with. This runs the same measurement for
 * the two languages added by the DE/IT port, so "German needs hyphenation" is a
 * number rather than an assertion.
 *
 *   npx tsx tools/diagnose-hyphenation-locales.mts
 *
 * Measured 21 August 2026 on the samples below:
 *
 *   DE  max gap ratio 1.75 -> 1.48   (5 lines, none over 2x either way)
 *   IT  max gap ratio 1.00 -> 1.26   (4 lines, none over 2x either way)
 *
 * Two honest caveats. The German gain is real but far smaller than the 5.6x
 * the French paragraph produced — these are five-line samples, not a book, and
 * a short sample rarely contains the pathological line that makes the French
 * case dramatic. And Italian reads *worse* here, which is not a regression:
 * with break points available the line breaker packs more onto each line and
 * redistributes the slack, so a paragraph that happened to fit perfectly at 1.0
 * now stretches slightly. Neither language puts a line over 2x.
 *
 * Re-run this against a real German manuscript before treating 1.48 as the
 * number that matters.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { JSDOM } from "jsdom";

globalThis.DOMParser = new JSDOM().window.DOMParser;

const ROOT = join(import.meta.dirname, "..");
const { loadHyphenator } = await import("../app/kdp-formatter/engine/hyphenate");
const { breakParagraph } = await import("../app/kdp-formatter/engine/linebreak");
const { polishRuns } = await import("../app/kdp-formatter/engine/typography");
const { marginsFor, textWidthFor, TYPE } = await import("../app/kdp-formatter/engine/kdp-rules");
const type = await import("../app/kdp-formatter/engine/model");

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

/** Compound-heavy German and ordinary Italian, the shapes each language sets. */
const SAMPLES: Record<"de" | "it", string> = {
  de: "Die Geschwindigkeitsbegrenzung auf der Umgehungsstraße war eine Verwaltungsentscheidung, die in der Bezirksverwaltung ohne Öffentlichkeitsbeteiligung getroffen wurde. Der Selbstverlagsbuchhandel hatte damals noch keine Interessenvertretung, und die Veröffentlichungsgenehmigung lag bei einer Bundesbehörde, deren Zuständigkeitsbereich niemand genau beschreiben konnte.",
  it: "La generazione successiva di editori indipendenti considerava la distribuzione tradizionale una complicazione straordinaria, perché l'organizzazione delle librerie richiedeva una programmazione che nessuno dei protagonisti riusciva davvero a controllare. L'autopubblicazione sembrava un'alternativa naturale.",
};

const width = textWidthFor(marginsFor(200));

function ratios(text: string, lang: "de" | "it", hyphenate: boolean) {
  const runs = polishRuns([{ text, bold: false, italic: false }], lang as type.DocLang);
  const lines = breakParagraph(runs, measure, {
    width,
    firstIndent: TYPE.bodySize * TYPE.indentEm,
    lang: lang as type.DocLang,
    hyphenate,
    bodySize: TYPE.bodySize,
  });
  return lines.filter((line) => !line.last).map((line) => line.gapRatio);
}

for (const lang of ["de", "it"] as const) {
  // Measured before the patterns are loaded, so `hyphenationPoints` finds none.
  const without = ratios(SAMPLES[lang], lang, true);
  await loadHyphenator(lang);
  const withPatterns = ratios(SAMPLES[lang], lang, true);

  const max = (values: number[]) => +Math.max(...values).toFixed(2);
  const over = (values: number[]) => values.filter((r) => r > 2).length;

  console.log(`\n${lang.toUpperCase()}`);
  console.table({
    "no patterns": { lines: without.length, maxGapRatio: max(without), linesOver2x: over(without) },
    "patterns loaded": {
      lines: withPatterns.length,
      maxGapRatio: max(withPatterns),
      linesOver2x: over(withPatterns),
    },
  });
}
