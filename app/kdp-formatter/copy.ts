/** Every string the formatter shows, in the two languages it ships in. */

import type { WarningCode } from "./engine/report";
import type { DocxError } from "./engine/docx-reader";

export type ToolLocale = "en" | "fr";

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  privacy: string;
  drop: string;
  dropHint: string;
  choose: string;
  reading: string;
  bookTitle: string;
  author: string;
  authorPlaceholder: string;
  language: string;
  chaptersFound: string;
  chapterSource: Record<"headings" | "heuristic" | "single", string>;
  generate: string;
  working: string;
  again: string;
  downloadPdf: string;
  downloadEpub: string;
  results: string;
  pages: string;
  gutter: string;
  gutterDetail: string;
  spine: string;
  spineDetail: string;
  trim: string;
  warningsTitle: string;
  /** A plain sentence, or one that needs the count the engine measured. */
  warnings: Record<WarningCode, string | ((count: number) => string)>;
  errors: Record<DocxError["code"] | "unknown", string>;
  ctaTitle: string;
  ctaBody: string;
  ctaLink: string;
  notes: string[];
};

const inches = (n: number) => `${n.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}″`;

export const formatterCopy: Record<ToolLocale, Copy> = {
  fr: {
    eyebrow: "Outil gratuit",
    title: "Formatez votre roman pour KDP",
    subtitle:
      "Déposez votre manuscrit Word. Vous récupérez un PDF d’intérieur 6 × 9 conforme aux règles ci-dessous, et l’EPUB Kindle assorti.",
    privacy:
      "Tout se passe dans votre navigateur. Votre manuscrit n’est envoyé nulle part, et aucun compte n’est demandé.",
    drop: "Déposez votre fichier .docx",
    dropHint: "ou cliquez pour le choisir — 50 Mo maximum",
    choose: "Choisir un fichier",
    reading: "Lecture du manuscrit…",
    bookTitle: "Titre",
    author: "Auteur",
    authorPlaceholder: "Votre nom",
    language: "Langue",
    chaptersFound: "chapitre(s) détecté(s)",
    chapterSource: {
      headings: "d’après vos styles Titre 1",
      heuristic: "devinés : aucun style Titre 1 dans le document",
      single: "aucun découpage possible, le livre est en un seul bloc",
    },
    generate: "Formater mon livre",
    working: "Mise en page…",
    again: "Recommencer avec un autre fichier",
    downloadPdf: "Télécharger le PDF d’intérieur",
    downloadEpub: "Télécharger l’EPUB",
    results: "Ce que KDP recevra",
    pages: "Pages",
    gutter: "Reliure",
    gutterDetail: "minimum KDP",
    spine: "Dos",
    spineDetail: "blanc / crème, pour votre couverture",
    trim: "Format",
    warningsTitle: "À vérifier",
    warnings: {
      chaptersGuessed:
        "Votre document n’utilise pas le style Titre 1, donc les chapitres ont été devinés. Vérifiez la liste ci-dessus avant de publier.",
      noChapters:
        "Aucun chapitre n’a pu être identifié : le livre est mis en page d’un seul tenant. Appliquez le style Titre 1 à vos titres de chapitre pour un meilleur résultat.",
      imagesBelowDpi: (n: number) =>
        `${n} image(s) s’imprimeront sous 300 DPI à la taille où elles sont placées, et paraîtront floues. Remplacez-les par des versions plus définies.`,
      imagesUnreadable: (n: number) =>
        `${n} image(s) n’ont pas pu être extraites du document et sont absentes des fichiers produits.`,
      linesOverflow: (n: number) =>
        `${n} ligne(s) dépassent la colonne de texte, généralement à cause d’un mot ou d’une URL très long.`,
      loose: "Certaines lignes sont très étirées. Un mot inhabituellement long en est souvent la cause.",
      spineTooThinForText:
        "Sous 100 pages, KDP n’autorise aucun texte sur le dos : prévoyez une couverture au dos vierge.",
      belowKdpMinimumPages: "KDP n’imprime pas de broché de moins de 24 pages.",
    },
    errors: {
      "not-a-zip": "Ce fichier n’est pas un .docx lisible. Réenregistrez-le depuis Word en « Document Word (.docx) ».",
      "not-a-docx": "L’archive ne contient pas de document Word. Réenregistrez-le depuis Word.",
      "legacy-doc":
        "C’est un ancien fichier .doc. Ouvrez-le dans Word puis « Enregistrer sous » au format .docx.",
      "too-large": "Fichier trop lourd : la limite est de 50 Mo.",
      empty: "Ce document ne contient aucun texte.",
      unknown: "La mise en page a échoué. Si le problème persiste, écrivez-nous le nom de votre traitement de texte.",
    },
    ctaTitle: "Un livre, c’est gratuit. Un catalogue, c’est un métier.",
    ctaBody:
      "DraftToDone fait la même chose sur toute une production : intérieur, couverture, métadonnées et publication.",
    ctaLink: "Découvrir DraftToDone",
    notes: [
      "Format 6 × 9 pouces, sans fond perdu, polices incorporées.",
      "Marge de reliure calculée sur la pagination réelle, un cran au-dessus du minimum KDP.",
      "Chapitres en belle page, têtes de page et folios, page de titre et page de copyright.",
      "Césure française ou anglaise, apostrophes, guillemets et espaces insécables.",
      "Images rééchantillonnées à 300 DPI, avec alerte sur celles qui sont trop peu définies.",
    ],
  },
  en: {
    eyebrow: "Free tool",
    title: "Format your novel for KDP",
    subtitle:
      "Drop in your Word manuscript. You get a 6 × 9 print interior that follows the rules below, plus the matching Kindle EPUB.",
    privacy:
      "Everything runs in your browser. Your manuscript is never uploaded, and no account is required.",
    drop: "Drop your .docx here",
    dropHint: "or click to choose one — 50 MB maximum",
    choose: "Choose a file",
    reading: "Reading the manuscript…",
    bookTitle: "Title",
    author: "Author",
    authorPlaceholder: "Your name",
    language: "Language",
    chaptersFound: "chapter(s) found",
    chapterSource: {
      headings: "from your Heading 1 styles",
      heuristic: "guessed: the document has no Heading 1 style",
      single: "no chapter breaks found; the book is set as one block",
    },
    generate: "Format my book",
    working: "Setting the pages…",
    again: "Start again with another file",
    downloadPdf: "Download the interior PDF",
    downloadEpub: "Download the EPUB",
    results: "What KDP will receive",
    pages: "Pages",
    gutter: "Gutter",
    gutterDetail: "KDP minimum",
    spine: "Spine",
    spineDetail: "white / cream, for your cover",
    trim: "Trim size",
    warningsTitle: "Worth checking",
    warnings: {
      chaptersGuessed:
        "Your document does not use the Heading 1 style, so the chapters were guessed. Check the list above before you publish.",
      noChapters:
        "No chapters could be identified, so the book is set as one continuous block. Apply Heading 1 to your chapter titles for a better result.",
      imagesBelowDpi: (n: number) =>
        `${n} image(s) will print below 300 DPI at the size they are placed, and will look soft. Replace them with higher resolution versions.`,
      imagesUnreadable: (n: number) =>
        `${n} image(s) could not be extracted from the document and are missing from the output.`,
      linesOverflow: (n: number) =>
        `${n} line(s) run past the text column, usually because of a very long word or URL.`,
      loose: "Some lines are stretched hard. An unusually long word is the usual cause.",
      spineTooThinForText:
        "Under 100 pages KDP allows no spine text, so plan a cover with a blank spine.",
      belowKdpMinimumPages: "KDP does not print paperbacks under 24 pages.",
    },
    errors: {
      "not-a-zip": "This is not a readable .docx. Re-save it from Word as “Word Document (.docx)”.",
      "not-a-docx": "The archive holds no Word document. Re-save it from Word.",
      "legacy-doc": "This is an old .doc file. Open it in Word and use “Save As” to make a .docx.",
      "too-large": "File too large: the limit is 50 MB.",
      empty: "This document contains no text.",
      unknown: "Formatting failed. If it keeps happening, tell us which word processor you used.",
    },
    ctaTitle: "One book is free. A catalogue is a job.",
    ctaBody:
      "DraftToDone does the same across a whole production line: interior, cover, metadata and publishing.",
    ctaLink: "See DraftToDone",
    notes: [
      "6 × 9 inches, no bleed, fonts embedded.",
      "Gutter computed from the real page count, one step above the KDP minimum.",
      "Chapters on a recto, running heads and folios, title page and copyright page.",
      "French or English hyphenation, curly apostrophes, quotation marks and no-break spaces.",
      "Images resampled to 300 DPI, with a warning on any that are too low to print well.",
    ],
  },
};

export const formatInches = inches;

/** Resolves a warning to its sentence, supplying the count when one is needed. */
export const warningText = (copy: Copy, code: WarningCode, count = 0): string => {
  const entry = copy.warnings[code];
  return typeof entry === "function" ? entry(count) : entry;
};

export type { Copy };
