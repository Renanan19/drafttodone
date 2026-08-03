import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { unzipSync, strFromU8 } from "fflate";
import { readDocx } from "./docx-reader";
import { renderEpub } from "./epub-writer";

const OUT = join(__dirname, "..", "__output__");

const fixture = (name: string) =>
  new Uint8Array(readFileSync(join(__dirname, "..", "__fixtures__", `${name}.docx`)));

const LEGAL = ["© 2026 Antoine. Tous droits réservés.", "Mis en page avec DraftToDone."];

const build = (name: string) => {
  const doc = readDocx(fixture(name));
  const epub = renderEpub(doc, { legal: LEGAL, now: new Date("2026-08-03T12:00:00Z") });
  writeFileSync(join(OUT, `${name}.epub`), epub.bytes);
  return { doc, epub, files: unzipSync(epub.bytes) };
};

const read = (files: Record<string, Uint8Array>, path: string) => strFromU8(files[path]);

describe("renderEpub", () => {
  beforeAll(() => {
    mkdirSync(OUT, { recursive: true });
  });

  it("stores the mimetype first and uncompressed", () => {
    const { epub } = build("clean-novel");
    // The local file header sits at offset 0; the name follows the 30 byte
    // header, and compression method 0 means stored.
    const view = new DataView(epub.bytes.buffer, epub.bytes.byteOffset);
    expect(view.getUint32(0, true)).toBe(0x04034b50);
    expect(view.getUint16(8, true)).toBe(0);
    expect(strFromU8(epub.bytes.slice(30, 38))).toBe("mimetype");
    expect(strFromU8(epub.bytes.slice(38, 58))).toBe("application/epub+zip");
  });

  it("writes one file per chapter, plus navigation both ways", () => {
    const { doc, files } = build("clean-novel");
    const names = Object.keys(files);

    expect(names).toContain("META-INF/container.xml");
    expect(names).toContain("OEBPS/content.opf");
    expect(names).toContain("OEBPS/nav.xhtml");
    expect(names).toContain("OEBPS/toc.ncx");
    for (let i = 1; i <= doc.chapters.length; i++) {
      expect(names).toContain(`OEBPS/text/chapter-${String(i).padStart(3, "0")}.xhtml`);
    }
  });

  it("carries the metadata into the package document", () => {
    const { files } = build("clean-novel");
    const opf = read(files, "OEBPS/content.opf");

    expect(opf).toContain("<dc:title>La Lande Grise</dc:title>");
    expect(opf).toContain("<dc:creator>Antoine</dc:creator>");
    expect(opf).toContain("<dc:language>fr</dc:language>");
    expect(opf).toContain('<meta property="dcterms:modified">2026-08-03T12:00:00Z</meta>');
  });

  it("uses an ISBN as the identifier when there is one", () => {
    const doc = readDocx(fixture("clean-novel"));
    const epub = renderEpub(doc, { legal: LEGAL, isbn: "978-1-234-56789-7" });
    const opf = read(unzipSync(epub.bytes), "OEBPS/content.opf");
    expect(opf).toContain("urn:isbn:9781234567897");
  });

  it("keeps inline formatting, lists and quotes as semantic markup", () => {
    const { files } = build("clean-novel");
    const chapter = read(files, "OEBPS/text/chapter-001.xhtml");

    expect(chapter).toContain("<strong>");
    expect(chapter).toContain("<em>");
    expect(chapter).toContain("<ul>");
    expect(chapter).toContain("<blockquote>");
    expect(chapter).toContain('class="break"');
  });

  it("applies French typography to the ebook too", () => {
    const { files } = build("typography");
    const chapter = read(files, "OEBPS/text/chapter-001.xhtml");

    expect(chapter).toContain("«");
    expect(chapter).toContain("’");
    expect(chapter).not.toMatch(/\.\.\./);
  });

  it("carries no page numbers from the manuscript's own contents page", () => {
    const { files } = build("word-toc");
    const all = Object.keys(files)
      .filter((n) => n.endsWith(".xhtml"))
      .map((n) => read(files, n))
      .join("\n");

    expect(all).not.toMatch(/\.{3,}/);
  });

  it("lists only chapters in the navigation, not the copyright page", () => {
    const { doc, files } = build("clean-novel");
    const nav = read(files, "OEBPS/nav.xhtml");

    expect((nav.match(/<li>/g) ?? []).length).toBe(doc.chapters.length);
    expect(nav).not.toContain("front.xhtml");
  });

  it("builds every fixture, so EPUBCheck can be pointed at all of them", () => {
    for (const name of ["long-novel", "no-headings", "illustrated"]) {
      const { epub } = build(name);
      expect(epub.chapterCount).toBeGreaterThan(0);
    }
  });

  it("packages images and declares them in the manifest", () => {
    const { epub, files } = build("illustrated");
    const opf = read(files, "OEBPS/content.opf");
    const chapter = read(files, "OEBPS/text/chapter-001.xhtml");

    expect(epub.imageCount).toBe(2);
    expect(Object.keys(files).filter((n) => n.startsWith("OEBPS/images/"))).toHaveLength(2);
    expect(opf).toContain('media-type="image/png"');
    expect(chapter).toContain("<figure><img src=\"../images/");
  });

  it("escapes characters that would break the XML", () => {
    const doc = readDocx(fixture("clean-novel"), { title: 'A & B <c> "d"', author: "O'Neil" });
    const epub = renderEpub(doc, { legal: LEGAL });
    const opf = read(unzipSync(epub.bytes), "OEBPS/content.opf");

    expect(opf).toContain("A &amp; B &lt;c&gt; &quot;d&quot;");
    expect(opf).not.toMatch(/<dc:title>[^<]*<c>/);
  });
});
