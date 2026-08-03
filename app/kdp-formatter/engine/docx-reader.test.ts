import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { DocxError, readDocx } from "./docx-reader";
import { plainText } from "./model";

const fixture = (name: string) =>
  new Uint8Array(readFileSync(join(__dirname, "..", "__fixtures__", `${name}.docx`)));

describe("readDocx", () => {
  it("splits a clean manuscript on Heading 1 and keeps the metadata", () => {
    const doc = readDocx(fixture("clean-novel"));

    expect(doc.meta.title).toBe("La Lande Grise");
    expect(doc.meta.author).toBe("Antoine");
    expect(doc.meta.lang).toBe("fr");
    expect(doc.chapterSource).toBe("headings");
    expect(doc.chapters.map((c) => c.title)).toEqual([
      "Chapitre premier",
      "Chapitre deuxième",
      "Chapitre troisième",
    ]);
  });

  it("keeps inline formatting, lists, quotes and scene breaks", () => {
    const blocks = readDocx(fixture("clean-novel")).chapters[0].blocks;
    const kinds = new Set(blocks.map((b) => b.kind));

    expect(kinds).toContain("paragraph");
    expect(kinds).toContain("heading2");
    expect(kinds).toContain("listItem");
    expect(kinds).toContain("quote");
    expect(kinds).toContain("sceneBreak");

    const runs = blocks.flatMap((b) => b.runs);
    expect(runs.some((r) => r.bold && r.text.includes("gras"))).toBe(true);
    expect(runs.some((r) => r.italic && r.text.includes("italique"))).toBe(true);
    expect(runs.some((r) => r.underline && r.text.includes("Souligné"))).toBe(true);
  });

  it("drops page numbers from a hand-typed table of contents", () => {
    const doc = readDocx(fixture("word-toc"));
    const text = doc.chapters.flatMap((c) => c.blocks).map((b) => plainText(b.runs)).join("\n");

    expect(text).not.toMatch(/\.{3,}/);
    expect(text).not.toMatch(/Chapitre \d+\s*\.*\s*\d+/);
  });

  it("falls back to a heuristic when the manuscript has no Heading 1", () => {
    const doc = readDocx(fixture("no-headings"));

    expect(doc.chapterSource).toBe("heuristic");
    expect(doc.chapters.map((c) => c.title)).toEqual([
      "CHAPITRE UN",
      "CHAPITRE DEUX",
      "CHAPITRE TROIS",
    ]);
  });

  it("can be told not to guess chapters", () => {
    const doc = readDocx(fixture("no-headings"), { allowHeuristicChapters: false });
    expect(doc.chapterSource).toBe("single");
    expect(doc.chapters).toHaveLength(1);
  });

  it("lets the caller override title, author and language", () => {
    const doc = readDocx(fixture("clean-novel"), {
      title: "Autre Titre",
      author: "Quelqu’un",
      lang: "en",
    });
    expect(doc.meta).toEqual({ title: "Autre Titre", author: "Quelqu’un", lang: "en" });
  });

  it("rejects an empty document", () => {
    expect(() => readDocx(fixture("empty"))).toThrowError(DocxError);
  });

  it("rejects a legacy .doc and anything that is not a zip", () => {
    const legacy = new Uint8Array([0xd0, 0xcf, 0x11, 0xe0, 0, 0, 0, 0]);
    expect(() => readDocx(legacy)).toThrowError(/legacy/i);

    const junk = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(() => readDocx(junk)).toThrowError(/zip/i);
  });

  it("extracts images and points blocks at them", () => {
    const doc = readDocx(fixture("illustrated"));

    expect(doc.images).toHaveLength(2);
    expect(doc.unreadableImages).toBe(0);
    for (const image of doc.images) {
      expect(image.mediaType).toBe("image/png");
      expect(image.bytes.byteLength).toBeGreaterThan(0);
    }

    const imageBlocks = doc.chapters
      .flatMap((c) => c.blocks)
      .filter((b) => b.kind === "image");
    expect(imageBlocks).toHaveLength(2);
    expect(imageBlocks.map((b) => b.image).sort()).toEqual([0, 1]);
  });

  it("keeps an image and the text of its paragraph as separate blocks", () => {
    const doc = readDocx(fixture("illustrated"));
    const kinds = doc.chapters[0].blocks.map((b) => b.kind);

    // Word puts a picture in its own paragraph, so the image never swallows
    // the prose around it.
    expect(kinds).toContain("image");
    expect(kinds).toContain("paragraph");
  });

  it("reads a long manuscript without losing chapters", () => {
    const doc = readDocx(fixture("long-novel"));
    expect(doc.chapters).toHaveLength(20);
    expect(doc.chapters.every((c) => c.blocks.length > 0)).toBe(true);
  });
});
