/**
 * BlockDoc — the only contract between the .docx reader and the two renderers.
 *
 * The reader knows about Word. The PDF and EPUB writers know about BlockDoc and
 * nothing else, so neither of them can grow a dependency on Word's quirks.
 */

export type DocLang = "fr" | "en";

/** A stretch of text carrying inline formatting. */
export type Inline = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  sup?: boolean;
  sub?: boolean;
  href?: string;
};

export type BlockKind =
  | "paragraph"
  | "heading2"
  | "listItem"
  | "quote"
  /** A typographic break between scenes, rendered as centred asterisks. */
  | "sceneBreak"
  | "image";

/** An image lifted out of the .docx, before any resampling. */
export type ImageAsset = {
  /** Stable name, unique within the document. */
  name: string;
  bytes: Uint8Array;
  mediaType: string;
  /** Pixel dimensions, filled in once the image has been decoded. */
  width?: number;
  height?: number;
};

export type Block = {
  kind: BlockKind;
  runs: Inline[];
  /** listItem only: numbered rather than bulleted. */
  ordered?: boolean;
  /** image only: index into BlockDoc.images. */
  image?: number;
};

export type Chapter = {
  title: string;
  blocks: Block[];
};

export type DocMeta = {
  title: string;
  author: string;
  lang: DocLang;
};

export type BlockDoc = {
  meta: DocMeta;
  chapters: Chapter[];
  /** How the reader found the chapter boundaries — surfaced in the report. */
  chapterSource: "headings" | "heuristic" | "single";
  /** Interior images, referenced by index from image blocks. */
  images: ImageAsset[];
  /** Images the reader saw but could not extract, so the report can say so. */
  unreadableImages: number;
};

export const plainText = (runs: Inline[]): string => runs.map((r) => r.text).join("");

export const isBlank = (block: Block): boolean =>
  block.kind !== "sceneBreak" && plainText(block.runs).trim().length === 0;
