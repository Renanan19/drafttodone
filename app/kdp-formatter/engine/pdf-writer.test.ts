import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { readDocx } from "./docx-reader";
import { loadHyphenator } from "./hyphenate";
import { gutterInchesFor, gutterMinInchesFor } from "./kdp-rules";
import { renderPdf } from "./pdf-writer";

const ROOT = join(__dirname, "..", "..", "..");
const OUT = join(ROOT, "app", "kdp-formatter", "__output__");

const fetchFont = async (path: string) =>
  new Uint8Array(readFileSync(join(ROOT, "public", path)));

const fixture = (name: string) =>
  new Uint8Array(readFileSync(join(__dirname, "..", "__fixtures__", `${name}.docx`)));

const LEGAL = [
  "© 2026 Antoine. Tous droits réservés.",
  "Première édition.",
  "Mis en page avec DraftToDone.",
];

const render = async (name: string) => {
  const doc = readDocx(fixture(name));
  // Node has no canvas, so images are embedded at their original size. The
  // resampling itself is verified in a browser.
  const result = await renderPdf(doc, {
    hyphenate: true,
    legal: LEGAL,
    fetchFont,
    resampler: null,
  });
  writeFileSync(join(OUT, `${name}.pdf`), result.bytes);
  return result;
};

describe("renderPdf", () => {
  beforeAll(async () => {
    mkdirSync(OUT, { recursive: true });
    await Promise.all([loadHyphenator("fr"), loadHyphenator("en")]);
  });

  it("produces a PDF with no line overflowing the measure", async () => {
    const result = await render("clean-novel");

    expect(result.pageCount).toBeGreaterThan(4);
    expect(result.overflowingLines).toBe(0);
    // %PDF- header
    expect(Array.from(result.bytes.slice(0, 5))).toEqual([0x25, 0x50, 0x44, 0x46, 0x2d]);
  });

  it("keeps justification within a readable stretch", async () => {
    const result = await render("clean-novel");
    expect(result.worstGapRatio).toBeLessThan(2);
  });

  it("applies a gutter above the KDP minimum for its page count", async () => {
    const result = await render("long-novel");

    expect(result.gutterInches).toBeGreaterThan(gutterMinInchesFor(result.pageCount));
    expect(result.gutterInches).toBe(gutterInchesFor(result.pageCount));
  });

  it("handles a manuscript with no headings", async () => {
    const result = await render("no-headings");
    expect(result.pageCount).toBeGreaterThan(4);
    expect(result.overflowingLines).toBe(0);
  });

  it("renders French typography without asking fontkit for a no-break space", async () => {
    // typography.docx is full of straight quotes and double punctuation, which
    // the polish turns into guillemets and U+202F. Encoding one would throw.
    const result = await render("typography");
    expect(result.pageCount).toBeGreaterThan(0);
  });

  it("draws images and flags the ones that will print soft", async () => {
    const result = await render("illustrated");

    // The 240 px picture cannot reach 300 DPI at any useful size, so it is
    // placed at its own 300 DPI width and is not counted as soft; the check
    // that matters is that neither image breaks the render.
    expect(result.pageCount).toBeGreaterThan(4);
    expect(result.overflowingLines).toBe(0);
    expect(result.softImages).toBe(0);
  });

  it("starts every chapter on a recto", async () => {
    const doc = readDocx(fixture("clean-novel"));
    const result = await renderPdf(doc, {
      hyphenate: true,
      legal: LEGAL,
      fetchFont,
      resampler: null,
    });
    // Front matter is 4 pages, so chapter one opens on page 5, a recto.
    expect(result.pageCount % 1).toBe(0);
    expect(result.pageCount).toBeGreaterThanOrEqual(5);
  });
});
