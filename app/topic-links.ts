import type { Locale } from "./blog-content";

/**
 * The intent bridge between commercial pages and the guides that support them.
 *
 * Retrieval systems read internal links as a statement about *which page
 * answers which job*, not just as authority flow. A link labelled "Read guide"
 * says nothing; a link labelled "Choose the 7 backend keyword slots without
 * wasting one" says exactly what the target resolves. So the anchor text lives
 * here, per locale, instead of being derived from a title or a token overlap.
 *
 * Two directions:
 *   - forward  (`topicLinks`): a commercial page -> the 3-4 guides behind it.
 *   - reverse  (`getSolutionForPost`): a guide -> the one page that converts
 *     the intent that guide creates.
 *
 * Every `postKey` below is a real `BlogPost.key` from `posts` in
 * `blog-content.ts`; every map key is a `SolutionPage.key` from
 * `commercialSolutionPages` in `seo-pages.ts`. The editorial page is
 * deliberately absent: it is a trust surface, not a buyer-intent surface.
 *
 * Some guides do not exist in all four locales (`drafttodone-cli-mcp` is
 * en/fr only). The anchor map is still complete for
 * every locale — the templates filter on `postLocales(post)` so a link is only
 * rendered where the target actually exists.
 */
export type TopicLink = {
  postKey: string;
  anchor: Record<Locale, string>;
};

export const topicLinks: Record<string, TopicLink[]> = {
  "kdp-interior-formatter": [
    {
      postKey: "kdp-paperback-formatting",
      anchor: {
        en: "Read the trim, margin and bleed rules the formatter applies for you",
        fr: "Lire les règles de format, marges et fond perdu que le formateur applique",
        it: "Leggere le regole di formato, margini e abbondanza che lo strumento applica",
        de: "Die Format-, Rand- und Beschnittregeln nachlesen, die das Tool anwendet",
      },
    },
    {
      postKey: "how-to-self-publish-amazon",
      anchor: {
        en: "See where the interior file fits in the whole KDP upload sequence",
        fr: "Voir où le fichier d'intérieur intervient dans la séquence d'upload KDP",
        it: "Vedere dove si colloca il file interno nella sequenza di upload KDP",
        de: "Sehen, wo die Innenteil-Datei in der KDP-Upload-Reihenfolge steht",
      },
    },
  ],
  "kdp-royalty-calculator": [
    {
      postKey: "book-pricing-strategy",
      anchor: {
        en: "Choose a list price per format without losing the 70% royalty band",
        fr: "Choisir un prix de vente par format sans sortir de la tranche 70 %",
        it: "Scegliere il prezzo di listino per formato senza uscire dalla fascia 70%",
        de: "Den Verkaufspreis je Format wählen, ohne die 70-%-Tantiemenstufe zu verlieren",
      },
    },
    {
      postKey: "kdp-select-kindle-unlimited",
      anchor: {
        en: "Decide whether KDP Select exclusivity is worth the page-read income",
        fr: "Décider si l'exclusivité KDP Select vaut les revenus de pages lues",
        it: "Decidere se l'esclusiva KDP Select vale i ricavi da pagine lette",
        de: "Entscheiden, ob die KDP-Select-Exklusivität die Seitenlese-Einnahmen wert ist",
      },
    },
    {
      postKey: "self-publishing-income-reality",
      anchor: {
        en: "Build a realistic income model before you count on royalties",
        fr: "Construire un modèle de revenus réaliste avant de compter sur les royalties",
        it: "Costruire un modello di reddito realistico prima di contare sulle royalty",
        de: "Ein realistisches Einnahmenmodell aufstellen, bevor Sie mit Tantiemen rechnen",
      },
    },
  ],
  "ai-book-cover-generator": [
    {
      postKey: "kdp-paperback-formatting",
      anchor: {
        en: "Get the trim size, bleed and spine width right for a full-wrap cover",
        fr: "Calculer format, fond perdu et largeur de dos pour une couverture intégrale",
        it: "Calcolare formato, abbondanza e dorso per una copertina integrale in brossura",
        de: "Buchformat, Beschnitt und Rückenbreite für ein vollständiges Wrap-Cover bestimmen",
      },
    },
    {
      postKey: "kdp-categories-bsr",
      anchor: {
        en: "Match the cover to the visual codes of the category readers browse",
        fr: "Aligner la couverture sur les codes visuels de la catégorie que parcourent vos lecteurs",
        it: "Allineare la copertina ai codici visivi della categoria che i lettori sfogliano",
        de: "Das Cover an die Sehgewohnheiten der Kategorie anpassen, in der Leser stöbern",
      },
    },
    {
      postKey: "kdp-book-not-selling",
      anchor: {
        en: "Diagnose whether the cover or the listing is losing the click",
        fr: "Diagnostiquer si c'est la couverture ou la fiche produit qui perd le clic",
        it: "Capire se a perdere il clic è la copertina o la scheda prodotto",
        de: "Erkennen, ob das Cover oder die Produktseite den Klick verliert",
      },
    },
  ],
  "book-description-generator": [
    {
      postKey: "book-description-copywriting",
      anchor: {
        en: "Structure the blurb: first-line hook, proof and the formatting Amazon allows",
        fr: "Structurer le résumé : accroche, preuve et mise en forme autorisée par Amazon",
        it: "Strutturare la sinossi: gancio iniziale, prova e formattazione ammessa da Amazon",
        de: "Den Klappentext aufbauen: Einstiegshook, Beleg und die von Amazon erlaubte Formatierung",
      },
    },
    {
      postKey: "amazon-ads-for-books",
      anchor: {
        en: "Send ad traffic to a product page that converts it",
        fr: "Envoyer le trafic publicitaire vers une fiche produit qui le convertit",
        it: "Portare il traffico degli annunci su una scheda prodotto che lo converte",
        de: "Anzeigen-Traffic auf eine Produktseite lenken, die ihn umwandelt",
      },
    },
    {
      postKey: "get-book-reviews",
      anchor: {
        en: "Earn reviews within Amazon's rules while the description carries the sale",
        fr: "Obtenir des avis dans les règles d'Amazon pendant que la description porte la vente",
        it: "Ottenere recensioni nel rispetto delle regole Amazon mentre la descrizione sostiene la vendita",
        de: "Rezensionen im Rahmen der Amazon-Regeln gewinnen, während die Beschreibung verkauft",
      },
    },
  ],
  "book-title-generator": [
    {
      postKey: "kdp-categories-bsr",
      anchor: {
        en: "Check what titles rank in the categories you want to enter",
        fr: "Observer quels titres se classent dans les catégories que vous visez",
        it: "Osservare quali titoli si posizionano nelle categorie che volete presidiare",
        de: "Prüfen, welche Titel in den anvisierten Kategorien ranken",
      },
    },
    {
      postKey: "book-description-copywriting",
      anchor: {
        en: "Keep the promise made by the title all the way through the blurb",
        fr: "Tenir jusque dans le résumé la promesse faite par le titre",
        it: "Mantenere fino alla sinossi la promessa fatta dal titolo",
        de: "Das Versprechen des Titels bis in den Klappentext durchhalten",
      },
    },
  ],
  "ai-book-generator": [
    {
      postKey: "how-to-write-book-with-ai",
      anchor: {
        en: "Follow the method from idea to finished manuscript",
        fr: "Suivre la méthode de l'idée au manuscrit terminé",
        it: "Seguire il metodo dall'idea al manoscritto finito",
        de: "Der Methode von der Idee bis zum fertigen Manuskript folgen",
      },
    },
    {
      postKey: "best-ai-book-writing-tools",
      anchor: {
        en: "Compare chatbots, writing apps and full pipelines before committing",
        fr: "Comparer chatbots, apps d'écriture et pipelines complets avant de choisir",
        it: "Confrontare chatbot, app di scrittura e pipeline complete prima di scegliere",
        de: "Chatbots, Schreib-Apps und komplette Pipelines vor der Entscheidung vergleichen",
      },
    },
    {
      postKey: "kdp-ai-content-policy",
      anchor: {
        en: "Know what Amazon requires you to disclose about AI-assisted content",
        fr: "Savoir ce qu'Amazon exige de déclarer sur le contenu assisté par IA",
        it: "Sapere che cosa Amazon richiede di dichiarare sui contenuti assistiti dall'IA",
        de: "Wissen, was Amazon bei KI-gestützten Inhalten offengelegt haben will",
      },
    },
  ],
  "kdp-keyword-tool": [
    {
      postKey: "kdp-keywords-beginner",
      anchor: {
        en: "Choose the 7 backend keyword slots without wasting one",
        fr: "Choisir les 7 champs de mots-clés backend sans en gaspiller un",
        it: "Scegliere i 7 campi keyword backend senza sprecarne uno",
        de: "Die 7 Backend-Keyword-Felder belegen, ohne eines zu verschenken",
      },
    },
    {
      postKey: "kdp-categories-bsr",
      anchor: {
        en: "Pick categories that put the book in front of the right browsers",
        fr: "Choisir les catégories qui placent le livre devant les bons lecteurs",
        it: "Scegliere le categorie che mettono il libro davanti ai lettori giusti",
        de: "Kategorien wählen, die das Buch den richtigen Lesern zeigen",
      },
    },
    {
      postKey: "low-content-books-kdp",
      anchor: {
        en: "Test whether a low-content niche is still worth entering",
        fr: "Vérifier si une niche low content vaut encore d'être investie",
        it: "Verificare se una nicchia low content vale ancora l'ingresso",
        de: "Prüfen, ob sich der Einstieg in eine Low-Content-Nische noch lohnt",
      },
    },
  ],
  "sudowrite-alternative": [
    {
      postKey: "how-to-write-book-with-ai",
      anchor: {
        en: "See what still has to happen after the prose is written",
        fr: "Voir ce qui reste à faire une fois le texte écrit",
        it: "Vedere che cosa resta da fare dopo aver scritto il testo",
        de: "Sehen, was nach dem Schreiben des Textes noch ansteht",
      },
    },
    {
      postKey: "best-ai-book-writing-tools",
      anchor: {
        en: "Compare prose assistants with full publishing pipelines",
        fr: "Comparer les assistants de rédaction et les pipelines éditoriaux complets",
        it: "Confrontare gli assistenti di scrittura con le pipeline editoriali complete",
        de: "Schreibassistenten mit vollständigen Publishing-Pipelines vergleichen",
      },
    },
  ],
  "atticus-alternative": [
    {
      postKey: "kdp-paperback-formatting",
      anchor: {
        en: "Set trim size, margins and bleed for a print-ready PDF",
        fr: "Régler format, marges et fond perdu pour un PDF prêt à imprimer",
        it: "Impostare formato, margini e abbondanza per un PDF pronto per la stampa",
        de: "Buchformat, Ränder und Beschnitt für ein druckfertiges PDF einstellen",
      },
    },
    {
      postKey: "how-to-self-publish-amazon",
      anchor: {
        en: "Follow the whole KDP path, not only the formatting step",
        fr: "Suivre tout le parcours KDP, pas seulement l'étape de mise en page",
        it: "Seguire l'intero percorso KDP, non solo la fase di impaginazione",
        de: "Den gesamten KDP-Weg gehen, nicht nur den Layout-Schritt",
      },
    },
  ],
};

export function getTopicLinks(solutionKey: string): TopicLink[] {
  return topicLinks[solutionKey] ?? [];
}

/**
 * Guide -> the single commercial page that converts the intent it creates.
 *
 * Most of these are also forward-listed by the same page, which closes the
 * loop. Two are deliberately asymmetric because the *converting* page is not
 * the page that needs them as supporting reading:
 *   - `kdp-account-payments` (getting paid) -> the royalty calculator.
 *   - `drafttodone-cli-mcp` (automation surface) -> the AI book generator,
 *     the flagship product page since the 2026-10-06 consolidation.
 */
const primarySolutionForPost: Record<string, string> = {
  "amazon-ads-for-books": "book-description-generator",
  "best-ai-book-writing-tools": "ai-book-generator",
  "book-description-copywriting": "book-description-generator",
  "book-pricing-strategy": "kdp-royalty-calculator",
  "drafttodone-cli-mcp": "ai-book-generator",
  "get-book-reviews": "book-description-generator",
  "how-to-self-publish-amazon": "ai-book-generator",
  "how-to-write-book-with-ai": "ai-book-generator",
  "kdp-account-payments": "kdp-royalty-calculator",
  "kdp-ai-content-policy": "ai-book-generator",
  "kdp-book-not-selling": "ai-book-cover-generator",
  "kdp-categories-bsr": "kdp-keyword-tool",
  "kdp-keywords-beginner": "kdp-keyword-tool",
  // The guide explains the formatting rules; the free formatter applies them
  // to the reader's own file. That is a closer match for the intent this guide
  // creates than the Atticus comparison it used to point at.
  "kdp-paperback-formatting": "kdp-interior-formatter",
  "kdp-select-kindle-unlimited": "kdp-royalty-calculator",
  "low-content-books-kdp": "kdp-keyword-tool",
  "self-publishing-income-reality": "kdp-royalty-calculator",
};

export function getSolutionForPost(postKey: string): string | undefined {
  const explicit = primarySolutionForPost[postKey];
  if (explicit) return explicit;

  // Fallback so a guide added to a forward list is never orphaned: the first
  // commercial page that names it as supporting reading converts its intent.
  const entry = Object.entries(topicLinks).find(([, links]) =>
    links.some((link) => link.postKey === postKey),
  );
  return entry?.[0];
}

/**
 * The anchor an article uses to link back to its converting page. One per
 * commercial page rather than one per article: the job the page does is the
 * same whichever guide sent the reader, and the anchor has to name that job.
 */
export const solutionBackAnchors: Record<string, Record<Locale, string>> = {
  "kdp-royalty-calculator": {
    en: "Estimate the royalty for your own price and page count",
    fr: "Estimer la royalty pour votre prix et votre nombre de pages",
    it: "Stimare la royalty sul vostro prezzo e sul numero di pagine",
    de: "Die Tantieme für den eigenen Preis und Seitenumfang schätzen",
  },
  "ai-book-cover-generator": {
    en: "Generate the front cover, spine and back cover for this book",
    fr: "Générer la première de couverture, le dos et la quatrième pour ce livre",
    it: "Generare copertina, dorso e quarta di copertina per questo libro",
    de: "Frontcover, Buchrücken und Rückseite für dieses Buch erzeugen",
  },
  "book-description-generator": {
    en: "Draft the Amazon description for this book",
    fr: "Rédiger la description Amazon de ce livre",
    it: "Scrivere la descrizione Amazon di questo libro",
    de: "Die Amazon-Beschreibung für dieses Buch entwerfen",
  },
  "book-title-generator": {
    en: "Generate title and subtitle options for this book",
    fr: "Générer des options de titre et de sous-titre pour ce livre",
    it: "Generare opzioni di titolo e sottotitolo per questo libro",
    de: "Titel- und Untertitelvorschläge für dieses Buch erzeugen",
  },
  "ai-book-generator": {
    en: "Generate the full manuscript from this method",
    fr: "Générer le manuscrit complet à partir de cette méthode",
    it: "Generare il manoscritto completo a partire da questo metodo",
    de: "Aus dieser Methode das komplette Manuskript erzeugen",
  },
  "kdp-keyword-tool": {
    en: "Fill the 7 backend keyword slots for this book",
    fr: "Remplir les 7 champs de mots-clés backend de ce livre",
    it: "Compilare i 7 campi keyword backend di questo libro",
    de: "Die 7 Backend-Keyword-Felder für dieses Buch füllen",
  },
  "sudowrite-alternative": {
    en: "Take the manuscript past prose to a publishable book",
    fr: "Emmener le manuscrit au-delà du texte, jusqu'au livre publiable",
    it: "Portare il manoscritto oltre la prosa, fino al libro pubblicabile",
    de: "Das Manuskript über die Prosa hinaus zum veröffentlichungsreifen Buch bringen",
  },
  "atticus-alternative": {
    en: "Get the book generated, not only formatted",
    fr: "Obtenir un livre généré, pas seulement mis en page",
    it: "Ottenere un libro generato, non solo impaginato",
    de: "Ein Buch erzeugen lassen, nicht nur formatieren",
  },
};

export function getSolutionBackAnchor(
  solutionKey: string,
  locale: Locale,
): string | undefined {
  return solutionBackAnchors[solutionKey]?.[locale];
}

/** Section chrome for both ends of the bridge. */
export const topicLinkCopy: Record<
  Locale,
  { heading: string; intro: string; backLabel: string }
> = {
  en: {
    heading: "The guides behind this page",
    intro: "Each decision this page automates, explained step by step.",
    backLabel: "Do this with DraftToDone",
  },
  fr: {
    heading: "Les guides derrière cette page",
    intro: "Chaque décision automatisée par cette page, expliquée étape par étape.",
    backLabel: "Le faire avec DraftToDone",
  },
  it: {
    heading: "Le guide dietro questa pagina",
    intro: "Ogni decisione automatizzata da questa pagina, spiegata passo per passo.",
    backLabel: "Farlo con DraftToDone",
  },
  de: {
    heading: "Die Guides hinter dieser Seite",
    intro: "Jede Entscheidung, die diese Seite automatisiert — Schritt für Schritt erklärt.",
    backLabel: "Mit DraftToDone umsetzen",
  },
};
