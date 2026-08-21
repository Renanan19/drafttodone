/** Every string the formatter shows, in the four languages it ships in. */

import type { WarningCode } from "./engine/report";
import type { DocxError } from "./engine/docx-reader";
import type { DocLang } from "./engine/model";

export type ToolLocale = "en" | "fr" | "de" | "it";

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
      "Césure française, anglaise, allemande ou italienne, apostrophes, guillemets et espaces insécables.",
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
      "English, French, German or Italian hyphenation, curly apostrophes, quotation marks and no-break spaces.",
      "Images resampled to 300 DPI, with a warning on any that are too low to print well.",
    ],
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Formatiere deinen Roman für KDP",
    subtitle:
      "Lade dein Word-Manuskript hoch. Du bekommst einen 6 × 9 Zoll Innenteil nach den Regeln unten, plus das passende Kindle-EPUB.",
    privacy:
      "Alles läuft in deinem Browser. Dein Manuskript wird nirgendwo hochgeladen, und ein Konto brauchst du nicht.",
    drop: "Lege deine .docx hier ab",
    dropHint: "oder klicke, um eine zu wählen — maximal 50 MB",
    choose: "Datei wählen",
    reading: "Manuskript wird gelesen…",
    bookTitle: "Titel",
    author: "Autor",
    authorPlaceholder: "Dein Name",
    language: "Sprache",
    chaptersFound: "Kapitel gefunden",
    chapterSource: {
      headings: "aus deinen Überschrift-1-Formatvorlagen",
      heuristic: "geraten: das Dokument hat keine Überschrift 1",
      single: "keine Kapitelgrenzen gefunden; das Buch wird als ein Block gesetzt",
    },
    generate: "Mein Buch formatieren",
    working: "Seiten werden gesetzt…",
    again: "Mit einer anderen Datei neu starten",
    downloadPdf: "Innenteil-PDF herunterladen",
    downloadEpub: "EPUB herunterladen",
    results: "Was KDP bekommt",
    pages: "Seiten",
    gutter: "Bundsteg",
    gutterDetail: "KDP-Minimum",
    spine: "Buchrücken",
    spineDetail: "weiß / cremefarben, für dein Cover",
    trim: "Format",
    warningsTitle: "Bitte prüfen",
    warnings: {
      chaptersGuessed:
        "Dein Dokument nutzt keine Überschrift 1, also wurden die Kapitel geraten. Prüfe die Liste oben, bevor du veröffentlichst.",
      noChapters:
        "Es konnten keine Kapitel erkannt werden, das Buch wird als ein durchgehender Block gesetzt. Weise deinen Kapiteltiteln Überschrift 1 zu.",
      imagesBelowDpi: (n: number) =>
        `${n} Bild(er) drucken in der platzierten Größe unter 300 DPI und wirken unscharf. Ersetze sie durch höher aufgelöste Versionen.`,
      imagesUnreadable: (n: number) =>
        `${n} Bild(er) konnten nicht aus dem Dokument gelesen werden und fehlen in den erzeugten Dateien.`,
      linesOverflow: (n: number) =>
        `${n} Zeile(n) ragen über die Textspalte hinaus, meist wegen eines sehr langen Wortes oder einer URL.`,
      loose:
        "Einige Zeilen sind stark gedehnt. Ein ungewöhnlich langes Wort ist meist die Ursache.",
      spineTooThinForText:
        "Unter 100 Seiten erlaubt KDP keinen Rückentext, plane also ein Cover mit leerem Buchrücken.",
      belowKdpMinimumPages: "KDP druckt keine Taschenbücher unter 24 Seiten.",
    },
    errors: {
      "not-a-zip":
        "Das ist keine lesbare .docx. Speichere sie in Word erneut als „Word-Dokument (.docx)“.",
      "not-a-docx": "Das Archiv enthält kein Word-Dokument. Speichere es erneut aus Word.",
      "legacy-doc":
        "Das ist eine alte .doc-Datei. Öffne sie in Word und nutze „Speichern unter“, um eine .docx zu erzeugen.",
      "too-large": "Datei zu groß: die Grenze liegt bei 50 MB.",
      empty: "Dieses Dokument enthält keinen Text.",
      unknown:
        "Die Formatierung ist fehlgeschlagen. Wenn es wieder passiert, sag uns, welches Textprogramm du benutzt hast.",
    },
    ctaTitle: "Ein Buch ist gratis. Ein Katalog ist ein Beruf.",
    ctaBody:
      "DraftToDone macht dasselbe über eine ganze Produktion: Innenteil, Cover, Metadaten und Veröffentlichung.",
    ctaLink: "DraftToDone ansehen",
    notes: [
      "6 × 9 Zoll, ohne Beschnitt, Schriften eingebettet.",
      "Bundsteg aus der echten Seitenzahl berechnet, eine Stufe über dem KDP-Minimum.",
      "Kapitel auf der rechten Seite, Kolumnentitel und Seitenzahlen, Titelei und Impressum.",
      "Deutsche, englische, französische oder italienische Silbentrennung, typografische Apostrophe, Anführungszeichen und geschützte Leerzeichen.",
      "Bilder auf 300 DPI neu berechnet, mit Warnung bei allen, die für den Druck zu grob sind.",
    ],
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Formatta il tuo romanzo per KDP",
    subtitle:
      "Carica il manoscritto Word. Ottieni un interno 6 × 9 pollici conforme alle regole qui sotto, più l'EPUB Kindle abbinato.",
    privacy:
      "Tutto avviene nel tuo browser. Il manoscritto non viene caricato da nessuna parte e non serve alcun account.",
    drop: "Trascina qui il tuo .docx",
    dropHint: "oppure clicca per sceglierlo — massimo 50 MB",
    choose: "Scegli un file",
    reading: "Lettura del manoscritto…",
    bookTitle: "Titolo",
    author: "Autore",
    authorPlaceholder: "Il tuo nome",
    language: "Lingua",
    chaptersFound: "capitolo/i trovato/i",
    chapterSource: {
      headings: "dai tuoi stili Titolo 1",
      heuristic: "ipotizzati: il documento non usa lo stile Titolo 1",
      single: "nessuna divisione in capitoli; il libro è impaginato come un blocco unico",
    },
    generate: "Formatta il mio libro",
    working: "Impaginazione in corso…",
    again: "Ricomincia con un altro file",
    downloadPdf: "Scarica il PDF dell'interno",
    downloadEpub: "Scarica l'EPUB",
    results: "Cosa riceverà KDP",
    pages: "Pagine",
    gutter: "Margine interno",
    gutterDetail: "minimo KDP",
    spine: "Dorso",
    spineDetail: "bianco / avorio, per la tua copertina",
    trim: "Formato",
    warningsTitle: "Da verificare",
    warnings: {
      chaptersGuessed:
        "Il documento non usa lo stile Titolo 1, quindi i capitoli sono stati ipotizzati. Controlla l'elenco qui sopra prima di pubblicare.",
      noChapters:
        "Non è stato possibile identificare capitoli: il libro è impaginato come un blocco unico. Applica Titolo 1 ai titoli dei capitoli.",
      imagesBelowDpi: (n: number) =>
        `${n} immagine/i verranno stampate sotto i 300 DPI alla dimensione in cui sono inserite e appariranno sfocate. Sostituiscile con versioni più definite.`,
      imagesUnreadable: (n: number) =>
        `${n} immagine/i non sono state estratte dal documento e mancano nei file prodotti.`,
      linesOverflow: (n: number) =>
        `${n} riga/righe escono dalla colonna di testo, di solito per una parola o un URL molto lungo.`,
      loose:
        "Alcune righe sono molto dilatate. Di solito la causa è una parola insolitamente lunga.",
      spineTooThinForText:
        "Sotto le 100 pagine KDP non ammette testo sul dorso: prevedi una copertina con dorso vuoto.",
      belowKdpMinimumPages: "KDP non stampa paperback sotto le 24 pagine.",
    },
    errors: {
      "not-a-zip":
        "Questo non è un .docx leggibile. Risalvalo da Word come «Documento di Word (.docx)».",
      "not-a-docx": "L'archivio non contiene un documento Word. Risalvalo da Word.",
      "legacy-doc":
        "Questo è un vecchio file .doc. Aprilo in Word e usa «Salva con nome» per creare un .docx.",
      "too-large": "File troppo pesante: il limite è 50 MB.",
      empty: "Questo documento non contiene testo.",
      unknown:
        "La formattazione non è riuscita. Se succede di nuovo, dicci quale programma di videoscrittura hai usato.",
    },
    ctaTitle: "Un libro è gratis. Un catalogo è un mestiere.",
    ctaBody:
      "DraftToDone fa lo stesso su un'intera produzione: interno, copertina, metadati e pubblicazione.",
    ctaLink: "Scopri DraftToDone",
    notes: [
      "6 × 9 pollici, senza abbondanza, font incorporati.",
      "Margine interno calcolato sul numero di pagine reale, un gradino sopra il minimo KDP.",
      "Capitoli in pagina destra, testatine e numeri di pagina, frontespizio e pagina del copyright.",
      "Sillabazione italiana, inglese, francese o tedesca, apostrofi tipografici, virgolette e spazi unificatori.",
      "Immagini ricampionate a 300 DPI, con avviso su quelle troppo poco definite per la stampa.",
    ],
  },
};

/**
 * The copyright page, in the language of the *book* rather than of the UI: a
 * French reader may well be formatting an English manuscript, and the legal
 * page has to match what is printed on the pages around it.
 */
export const legalLines: Record<DocLang, (year: number, author: string) => string[]> = {
  en: (year, author) => [
    `© ${year} ${author}. All rights reserved.`,
    "No part of this book may be reproduced without written permission.",
    "Typeset with DraftToDone.io",
  ],
  fr: (year, author) => [
    `© ${year} ${author}. Tous droits réservés.`,
    "Aucune partie de ce livre ne peut être reproduite sans autorisation écrite.",
    "Mis en page avec DraftToDone.io",
  ],
  de: (year, author) => [
    `© ${year} ${author}. Alle Rechte vorbehalten.`,
    "Kein Teil dieses Buches darf ohne schriftliche Genehmigung vervielfältigt werden.",
    "Gesetzt mit DraftToDone.io",
  ],
  it: (year, author) => [
    `© ${year} ${author}. Tutti i diritti riservati.`,
    "Nessuna parte di questo libro può essere riprodotta senza autorizzazione scritta.",
    "Impaginato con DraftToDone.io",
  ],
};

/**
 * The card the paperback guide shows in place of the tool.
 *
 * The tool moved to its own route so it could be linked to as a tool; the
 * guide keeps the query that brings people to it and hands them across, rather
 * than rendering a second interactive copy that would compete with the page.
 */
export const formatterCallout: Record<ToolLocale, {
  eyebrow: string;
  title: string;
  body: string;
  link: string;
}> = {
  en: {
    eyebrow: "Free tool",
    title: "Apply these rules to your own manuscript",
    body: "The free KDP interior formatter takes your .docx and returns a 6 × 9 print interior PDF and a Kindle EPUB, in the browser. Nothing is uploaded and no account is needed.",
    link: "Open the KDP interior formatter",
  },
  fr: {
    eyebrow: "Outil gratuit",
    title: "Appliquez ces règles à votre propre manuscrit",
    body: "Le formateur d'intérieur KDP gratuit prend votre .docx et renvoie un PDF d'intérieur 6 × 9 et un EPUB Kindle, dans le navigateur. Aucun envoi, aucun compte.",
    link: "Ouvrir le formateur d'intérieur KDP",
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Wende diese Regeln auf dein eigenes Manuskript an",
    body: "Der kostenlose KDP-Innenteil-Formatierer nimmt deine .docx und gibt ein 6 × 9 Innenteil-PDF und ein Kindle-EPUB zurück, im Browser. Kein Upload, kein Konto.",
    link: "Den KDP-Innenteil-Formatierer öffnen",
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Applica queste regole al tuo manoscritto",
    body: "Il formattatore interno KDP gratuito prende il tuo .docx e restituisce un PDF interno 6 × 9 e un EPUB Kindle, nel browser. Nessun caricamento, nessun account.",
    link: "Apri il formattatore interno KDP",
  },
};

/** The book-language picker, labelled in each language's own words. */
export const LANGUAGE_OPTIONS: ReadonlyArray<{ value: DocLang; label: string }> = [
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
];

export const formatInches = inches;

/** Resolves a warning to its sentence, supplying the count when one is needed. */
export const warningText = (copy: Copy, code: WarningCode, count = 0): string => {
  const entry = copy.warnings[code];
  return typeof entry === "function" ? entry(count) : entry;
};

export type { Copy };
