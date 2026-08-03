/**
 * Reads a .docx in the browser and produces a BlockDoc.
 *
 * A .docx is a zip of XML, so this needs no Word-specific library: fflate
 * unzips, DOMParser parses. Everything Word-shaped is confined to this file.
 *
 * Behaviour deliberately mirrors word_to_epub.py: Word tables of contents are
 * dropped (both renderers build their own navigation) and manual "Chapter 3
 * ..... 42" dot leaders lose their page numbers, which would be meaningless
 * once the text reflows.
 */

import { unzipSync, strFromU8 } from "fflate";
import type { Block, BlockDoc, Chapter, DocLang, ImageAsset, Inline } from "./model";
import { isBlank, plainText } from "./model";
import { MAX_INPUT_BYTES } from "./kdp-rules";

const W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
const R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
const A = "http://schemas.openxmlformats.org/drawingml/2006/main";
const REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
const DC = "http://purl.org/dc/elements/1.1/";
const CP = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";

export class DocxError extends Error {
  constructor(
    readonly code:
      | "not-a-zip"
      | "not-a-docx"
      | "legacy-doc"
      | "too-large"
      | "empty",
    message: string,
  ) {
    super(message);
    this.name = "DocxError";
  }
}

// --- small XML helpers -------------------------------------------------------

const kids = (el: Element, ns: string, name: string): Element[] =>
  Array.from(el.childNodes).filter(
    (n): n is Element =>
      n.nodeType === 1 &&
      (n as Element).localName === name &&
      (n as Element).namespaceURI === ns,
  );

const kid = (el: Element, ns: string, name: string): Element | null =>
  kids(el, ns, name)[0] ?? null;

const attr = (el: Element | null, name: string): string | null =>
  el ? el.getAttributeNS(W, name) ?? el.getAttribute(`w:${name}`) : null;

const parseXml = (text: string, what: string): Document => {
  const doc = new DOMParser().parseFromString(text, "application/xml");
  if (doc.getElementsByTagName("parsererror").length > 0) {
    throw new DocxError("not-a-docx", `${what} is not valid XML`);
  }
  return doc;
};

// --- style resolution --------------------------------------------------------

type StyleInfo = {
  headingLevel: number | null;
  isToc: boolean;
  isQuote: boolean;
  /** Word attaches list numbering to the style as often as to the paragraph. */
  isList: boolean;
  ordered: boolean;
};

const HEADING_NAME = /^(?:heading|titre|t[ií]tulo|überschrift|titolo)\s*([1-6])$/i;
const TITLE_NAME = /^(?:title|titre|titolo|titel)$/i;
const HEADING_ID = /^(?:heading|titre|berschrift|titolo)([1-6])$/i;
const TOC_NAME = /^(?:toc|table\s*of\s*contents|table\s*des\s*mati|sommaire|inhaltsverzeichnis|indice)/i;
const QUOTE_NAME = /^(?:intense\s*)?(?:quote|citation|zitat|citazione)$/i;
const LIST_NAME = /^(?:list\s*(?:bullet|number|paragraph)|liste?\s|paragraphe?\s*de\s*liste|aufz)/i;
const ORDERED_NAME = /(?:number|numér|numer|ordin)/i;

/** Maps every styleId to what the layout needs to know about it. */
function readStyles(xml: string | null): Map<string, StyleInfo> {
  const out = new Map<string, StyleInfo>();
  if (!xml) return out;
  const doc = parseXml(xml, "styles.xml");
  for (const style of Array.from(doc.getElementsByTagNameNS(W, "style"))) {
    const id = style.getAttributeNS(W, "styleId");
    if (!id) continue;
    const name = attr(kid(style, W, "name"), "val") ?? id;
    let level: number | null = null;
    const byName = HEADING_NAME.exec(name);
    const byId = HEADING_ID.exec(id);
    if (byName) level = Number(byName[1]);
    else if (byId) level = Number(byId[1]);
    else if (TITLE_NAME.test(name)) level = 1;
    const stylePr = kid(style, W, "pPr");
    const numbered = stylePr !== null && kid(stylePr, W, "numPr") !== null;
    const named = LIST_NAME.test(name) || LIST_NAME.test(id);

    out.set(id, {
      headingLevel: level,
      isToc: TOC_NAME.test(name) || TOC_NAME.test(id),
      isQuote: QUOTE_NAME.test(name),
      isList: level === null && (numbered || named),
      ordered: ORDERED_NAME.test(name) || ORDERED_NAME.test(id),
    });
  }
  return out;
}

// --- inline runs -------------------------------------------------------------

function runToInline(run: Element, href?: string): Inline[] {
  const props = kid(run, W, "rPr");
  const base: Omit<Inline, "text"> = {
    bold: props ? kid(props, W, "b") !== null : undefined,
    italic: props ? kid(props, W, "i") !== null : undefined,
    underline: props ? kid(props, W, "u") !== null : undefined,
    href,
  };
  const vert = props ? attr(kid(props, W, "vertAlign"), "val") : null;
  if (vert === "superscript") base.sup = true;
  if (vert === "subscript") base.sub = true;

  const out: Inline[] = [];
  for (const node of Array.from(run.childNodes)) {
    if (node.nodeType !== 1) continue;
    const el = node as Element;
    if (el.namespaceURI !== W) continue;
    if (el.localName === "t") out.push({ ...base, text: el.textContent ?? "" });
    else if (el.localName === "tab") out.push({ ...base, text: "\t" });
    else if (el.localName === "br" || el.localName === "cr") out.push({ ...base, text: "\n" });
  }
  return out;
}

function paragraphRuns(p: Element, rels: Map<string, string>): Inline[] {
  const out: Inline[] = [];
  const walk = (parent: Element, href?: string) => {
    for (const node of Array.from(parent.childNodes)) {
      if (node.nodeType !== 1) continue;
      const el = node as Element;
      if (el.namespaceURI !== W) continue;
      if (el.localName === "r") out.push(...runToInline(el, href));
      else if (el.localName === "hyperlink") {
        const id = el.getAttributeNS(R, "id");
        walk(el, (id && rels.get(id)) || href);
      } else if (el.localName === "smartTag" || el.localName === "ins" || el.localName === "sdt" || el.localName === "sdtContent") {
        walk(el, href);
      }
    }
  };
  walk(p);
  return mergeRuns(out);
}

/** Word splits a sentence across many runs; merging keeps line breaking sane. */
function mergeRuns(runs: Inline[]): Inline[] {
  const out: Inline[] = [];
  for (const run of runs) {
    if (run.text === "") continue;
    const last = out[out.length - 1];
    if (
      last &&
      !!last.bold === !!run.bold &&
      !!last.italic === !!run.italic &&
      !!last.underline === !!run.underline &&
      !!last.sup === !!run.sup &&
      !!last.sub === !!run.sub &&
      last.href === run.href
    ) {
      last.text += run.text;
    } else {
      out.push({ ...run });
    }
  }
  return out;
}

// --- paragraph classification ------------------------------------------------

/** Removes "Chapter 3 ........ 42" page references from hand-written contents. */
const LEADER = /(?:\.{2,}|\t+|\s{3,})\s*\d{1,4}\s*$/;

const stripPageLeader = (s: string): string => s.replace(LEADER, "");

/**
 * Applies the same strip to the runs themselves, so a hand-typed contents page
 * does not carry page numbers into a book whose text has been re-flowed.
 */
function stripLeaderFromRuns(runs: Inline[]): Inline[] {
  const full = plainText(runs);
  const stripped = stripPageLeader(full);
  if (stripped === full) return runs;

  let remaining = stripped.length;
  const out: Inline[] = [];
  for (const run of runs) {
    if (remaining <= 0) break;
    if (run.text.length <= remaining) {
      out.push(run);
      remaining -= run.text.length;
    } else {
      out.push({ ...run, text: run.text.slice(0, remaining) });
      remaining = 0;
    }
  }
  return out;
}

const SCENE_BREAK = /^[\s*#•~=_\-–—]{1,12}$/;

const isSceneBreak = (text: string): boolean => {
  const t = text.trim();
  if (t.length === 0 || t.length > 12) return false;
  return SCENE_BREAK.test(t) && /[*#•~=_\-–—]/.test(t);
};

type ParaInfo = {
  runs: Inline[];
  text: string;
  headingLevel: number | null;
  isList: boolean;
  ordered: boolean;
  isQuote: boolean;
  /** Indices into the document's image list, in the order they appear. */
  images: number[];
};

const MEDIA_TYPES: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  bmp: "image/bmp",
  webp: "image/webp",
  tif: "image/tiff",
  tiff: "image/tiff",
  emf: "image/emf",
  wmf: "image/wmf",
};

/**
 * Collects the images a paragraph draws.
 *
 * Word points at a media part through a relationship id on `a:blip`. The same
 * part can be referenced many times, so images are kept in one list and blocks
 * carry indices — a picture repeated on forty pages is stored once.
 */
class ImageLibrary {
  readonly assets: ImageAsset[] = [];
  unreadable = 0;
  private readonly byTarget = new Map<string, number>();

  constructor(
    private readonly rels: Map<string, string>,
    private readonly files: Record<string, Uint8Array>,
  ) {}

  /** Returns the index for a relationship id, or null when it cannot be read. */
  resolve(relationshipId: string): number | null {
    const target = this.rels.get(relationshipId);
    if (!target) {
      this.unreadable += 1;
      return null;
    }

    const existing = this.byTarget.get(target);
    if (existing !== undefined) return existing;

    // Targets are relative to word/, and may be "../media/x.png" or absolute.
    const path = target.startsWith("/")
      ? target.slice(1)
      : `word/${target}`.replace(/\/\.\//g, "/").replace(/word\/\.\.\//, "");
    const bytes = this.files[path];
    if (!bytes || bytes.byteLength === 0) {
      this.unreadable += 1;
      return null;
    }

    const extension = (path.split(".").pop() ?? "").toLowerCase();
    const index = this.assets.length;
    this.assets.push({
      name: `img-${String(index + 1).padStart(3, "0")}.${extension || "bin"}`,
      bytes,
      mediaType: MEDIA_TYPES[extension] ?? "application/octet-stream",
    });
    this.byTarget.set(target, index);
    return index;
  }
}

function readParagraph(
  p: Element,
  styles: Map<string, StyleInfo>,
  rels: Map<string, string>,
  images: ImageLibrary,
): ParaInfo | null {
  const props = kid(p, W, "pPr");
  const styleId = attr(props ? kid(props, W, "pStyle") : null, "val");
  const style = styleId ? styles.get(styleId) : undefined;

  // Word's own tables of contents are dropped: both renderers build their own.
  if (style?.isToc || (styleId && TOC_NAME.test(styleId))) return null;

  let headingLevel = style?.headingLevel ?? null;
  if (headingLevel === null && props) {
    const outline = attr(kid(props, W, "outlineLvl"), "val");
    if (outline !== null && outline !== "9") headingLevel = Number(outline) + 1;
  }

  const numPr = props ? kid(props, W, "numPr") : null;
  const runs = stripLeaderFromRuns(paragraphRuns(p, rels));
  const text = plainText(runs).trim();

  const drawn: number[] = [];
  for (const blip of Array.from(p.getElementsByTagNameNS(A, "blip"))) {
    const id = blip.getAttributeNS(REL, "embed") ?? blip.getAttributeNS(REL, "link");
    if (!id) continue;
    const index = images.resolve(id);
    if (index !== null) drawn.push(index);
  }

  return {
    images: drawn,
    runs,
    text,
    headingLevel,
    isList: headingLevel === null && (numPr !== null || (style?.isList ?? false)),
    ordered: style?.ordered ?? false,
    isQuote: style?.isQuote ?? false,
  };
}

// --- chapter detection -------------------------------------------------------

const CHAPTER_WORD =
  /^(?:chapitre|chapter|kapitel|capitolo|cap[ií]tulo|partie|part|livre|book|prologue|prolog|épilogue|epilogue|epilog)\b/i;
const ROMAN_OR_NUMBER = /^(?:[IVXLCDM]{1,7}|\d{1,3})[.)]?$/i;

/** A short standalone line that reads like a chapter title. */
function looksLikeChapterTitle(info: ParaInfo): boolean {
  const t = info.text;
  if (!t || t.length > 60 || info.isList) return false;
  if (/[.!?;:,]$/.test(t) && !CHAPTER_WORD.test(t)) return false;
  if (CHAPTER_WORD.test(t)) return true;
  if (ROMAN_OR_NUMBER.test(t)) return true;
  const letters = t.replace(/[^\p{L}]/gu, "");
  return letters.length >= 3 && letters === letters.toLocaleUpperCase();
}

// --- entry point -------------------------------------------------------------

export type ReadOptions = {
  /** Overrides whatever the document properties claim. */
  title?: string;
  author?: string;
  lang?: DocLang;
  /** Allow the fallback scan when the manuscript has no Heading 1. */
  allowHeuristicChapters?: boolean;
};

export function readDocx(bytes: Uint8Array, options: ReadOptions = {}): BlockDoc {
  if (bytes.byteLength > MAX_INPUT_BYTES) {
    throw new DocxError("too-large", "file exceeds the 50 MB limit");
  }
  if (bytes[0] === 0xd0 && bytes[1] === 0xcf) {
    throw new DocxError("legacy-doc", "this is a legacy .doc file, not a .docx");
  }
  if (bytes[0] !== 0x50 || bytes[1] !== 0x4b) {
    throw new DocxError("not-a-zip", "file is not a zip archive");
  }

  let files: Record<string, Uint8Array>;
  try {
    files = unzipSync(bytes);
  } catch {
    throw new DocxError("not-a-zip", "archive is corrupt");
  }

  const read = (path: string): string | null =>
    files[path] ? strFromU8(files[path]) : null;

  const documentXml = read("word/document.xml");
  if (!documentXml) throw new DocxError("not-a-docx", "no word/document.xml inside the archive");

  const styles = readStyles(read("word/styles.xml"));
  const rels = readRelationships(read("word/_rels/document.xml.rels"));
  const meta = readCoreProperties(read("docProps/core.xml"));

  const doc = parseXml(documentXml, "document.xml");
  const body = doc.getElementsByTagNameNS(W, "body")[0];
  if (!body) throw new DocxError("not-a-docx", "document has no body");

  const images = new ImageLibrary(rels, files);

  // Paragraphs, in document order, skipping Word's own contents blocks.
  const paragraphs: ParaInfo[] = [];
  for (const p of Array.from(doc.getElementsByTagNameNS(W, "p"))) {
    if (isInsideTableOfContents(p)) continue;
    const info = readParagraph(p, styles, rels, images);
    if (info) paragraphs.push(info);
  }

  if (paragraphs.every((p) => p.text === "" && p.images.length === 0)) {
    throw new DocxError("empty", "the document contains no text");
  }

  const built = buildChapters(paragraphs, options.allowHeuristicChapters !== false);

  return {
    meta: {
      title: options.title?.trim() || meta.title || "Sans titre",
      author: options.author?.trim() || meta.author || "",
      lang: options.lang ?? meta.lang ?? "fr",
    },
    chapters: built.chapters,
    chapterSource: built.source,
    images: images.assets,
    unreadableImages: images.unreadable,
  };
}

function isInsideTableOfContents(p: Element): boolean {
  let node: Element | null = p.parentElement;
  while (node) {
    if (node.namespaceURI === W && node.localName === "sdt") {
      const gallery = node.getElementsByTagNameNS(W, "docPartGallery")[0];
      const val = attr(gallery ?? null, "val");
      if (val && /table of contents/i.test(val)) return true;
    }
    node = node.parentElement;
  }
  return false;
}

function readRelationships(xml: string | null): Map<string, string> {
  const out = new Map<string, string>();
  if (!xml) return out;
  const doc = parseXml(xml, "document.xml.rels");
  for (const rel of Array.from(doc.getElementsByTagName("Relationship"))) {
    const id = rel.getAttribute("Id");
    const target = rel.getAttribute("Target");
    if (id && target) out.set(id, target);
  }
  return out;
}

function readCoreProperties(xml: string | null): { title: string; author: string; lang: DocLang | null } {
  if (!xml) return { title: "", author: "", lang: null };
  const doc = parseXml(xml, "core.xml");
  const pick = (ns: string, name: string) =>
    doc.getElementsByTagNameNS(ns, name)[0]?.textContent?.trim() ?? "";
  const language = pick(DC, "language") || pick(CP, "language");
  return {
    title: pick(DC, "title"),
    author: pick(DC, "creator"),
    lang: language ? (language.toLowerCase().startsWith("en") ? "en" : "fr") : null,
  };
}

function buildChapters(
  paragraphs: ParaInfo[],
  allowHeuristic: boolean,
): { chapters: Chapter[]; source: BlockDoc["chapterSource"] } {
  const hasHeadings = paragraphs.some((p) => p.headingLevel === 1 && p.text !== "");
  const isBoundary = hasHeadings
    ? (p: ParaInfo) => p.headingLevel === 1 && p.text !== ""
    : allowHeuristic
      ? looksLikeChapterTitle
      : () => false;

  const chapters: Chapter[] = [];
  let current: Chapter | null = null;

  for (const info of paragraphs) {
    if (isBoundary(info)) {
      current = { title: info.text, blocks: [] };
      chapters.push(current);
      continue;
    }
    if (info.text === "" && info.runs.length === 0 && info.images.length === 0) continue;
    if (!current) {
      // Text before the first chapter title: keep it rather than lose it.
      current = { title: "", blocks: [] };
      chapters.push(current);
    }
    // An image sits on its own line, before any text sharing its paragraph.
    for (const image of info.images) {
      current.blocks.push({ kind: "image", runs: [], image });
    }
    if (info.text !== "" || info.runs.length > 0) current.blocks.push(toBlock(info));
  }

  const kept = chapters.filter((c) => c.title !== "" || c.blocks.some((b) => !isBlank(b)));
  if (kept.length === 0) return { chapters: [{ title: "", blocks: [] }], source: "single" };

  return {
    chapters: kept,
    source: hasHeadings ? "headings" : kept.length > 1 ? "heuristic" : "single",
  };
}

function toBlock(info: ParaInfo): Block {
  if (isSceneBreak(info.text)) return { kind: "sceneBreak", runs: [] };
  if (info.headingLevel !== null && info.headingLevel >= 2 && info.text !== "") {
    return { kind: "heading2", runs: info.runs };
  }
  if (info.isList) return { kind: "listItem", runs: info.runs, ordered: info.ordered };
  if (info.isQuote) return { kind: "quote", runs: info.runs };
  return { kind: "paragraph", runs: info.runs };
}
