import type { Locale } from "./blog-content";

/**
 * The definition / best-for / not-for / contrast block.
 *
 * Retrieval scorers reward chunks that answer a question outright: a one-line
 * definition, explicit use cases, honest disqualifiers, and contrast phrasing
 * ("Unlike ...", "Without ...", "X vs Y"). Everything below is a compression of
 * copy that already exists on the matching page in `seo-pages.ts` and in
 * `glance-content.ts` — same facts, same prices, same limits, in the form an
 * answer engine can lift verbatim.
 *
 * Rules that must survive every edit:
 * - No claim about rankings, KDP approval, sales or income.
 * - No competitor fact that is not already stated on the page itself.
 * - Prices: EUR 14.99 / EUR 390 in en, 14,99 € / 390 € in fr, it and de.
 */

export type ContrastBlock = {
  /** One plain sentence: "<Thing> is <category> that <does what>." Max ~28 words. */
  definition: string;
  /** Exactly 3 items. Each starts with "Best for" phrasing in the locale's natural form. Max ~100 chars each. */
  bestFor: string[];
  /** 2-3 items. Honest disqualifiers — who should NOT buy this. Max ~100 chars each. */
  notFor: string[];
  /** 2-3 sentences using contrast phrasing ("Unlike ...", "Without ...", "X vs Y"). Max ~180 chars each. */
  contrasts: string[];
};

export const contrastCopy: Record<string, Record<Locale, ContrastBlock>> = {
  "kdp-royalty-calculator": {
    en: {
      definition:
        "The KDP royalty calculator is a free estimator that models Kindle ebook and paperback royalties from price, tax, delivery cost and printing cost.",
      bestFor: [
        "Best for setting an ebook price before you commit to 35% or 70% in KDP.",
        "Best for checking whether a paperback still earns anything after printing cost.",
        "Best for pressure-testing margin at 10, 100 or 1,000 sales before you run ads.",
      ],
      notFor: [
        "Not for Kindle Unlimited forecasting: the page-read payout changes every month.",
        "Not a replacement for KDP's own pricing grid, which stays the final word.",
        "Not a sales forecast: it estimates payout per copy, not demand.",
      ],
      contrasts: [
        "Unlike list price times royalty rate, the print estimate subtracts printing cost after the rate is applied, which is where a margin quietly disappears.",
        "Ebook vs paperback: ebook economics turn on delivery cost and tax, paperback economics turn on page count, ink and marketplace.",
        "Without an estimate before launch, you find out whether a book can carry ads only after you have paid for them.",
      ],
    },
    fr: {
      definition:
        "Le calculateur de redevances KDP est un estimateur gratuit qui modélise les redevances ebook et broché selon le prix, la TVA, la livraison et l'impression.",
      bestFor: [
        "Idéal pour fixer un prix ebook avant de choisir 35% ou 70% dans KDP.",
        "Idéal pour vérifier ce qu'il reste d'un broché une fois l'impression déduite.",
        "Idéal pour tester la marge à 10, 100 ou 1 000 ventes avant de lancer des pubs.",
      ],
      notFor: [
        "Pas pour prévoir Kindle Unlimited : le paiement par page lue change chaque mois.",
        "Pas un substitut à la grille de prix KDP, qui reste la référence finale.",
        "Pas une prévision de ventes : il estime le revenu par exemplaire, pas la demande.",
      ],
      contrasts: [
        "Contrairement au calcul prix fois taux, l'estimation print retire le coût d'impression après le taux : c'est là que la marge disparaît discrètement.",
        "Ebook vs broché : l'ebook se joue sur la livraison numérique et la TVA, le broché sur le nombre de pages, l'encre et le marketplace.",
        "Sans estimation avant lancement, vous découvrez si le livre peut financer des pubs seulement après les avoir payées.",
      ],
    },
    it: {
      definition:
        "Il calcolatore royalty KDP è uno stimatore gratuito che modella le royalty di ebook e paperback da prezzo, IVA, consegna digitale e costo di stampa.",
      bestFor: [
        "Ideale per fissare il prezzo di un ebook prima di scegliere il 35% o il 70% su KDP.",
        "Ideale per capire cosa resta di un paperback una volta sottratto il costo di stampa.",
        "Ideale per testare il margine a 10, 100 o 1.000 vendite prima di investire in ads.",
      ],
      notFor: [
        "Non per prevedere Kindle Unlimited: il payout per pagina letta cambia ogni mese.",
        "Non sostituisce la griglia prezzi di KDP, che resta il riferimento finale.",
        "Non è una previsione di vendite: stima il ricavo per copia, non la domanda.",
      ],
      contrasts: [
        "A differenza del calcolo prezzo per tasso, la stima print sottrae il costo di stampa dopo il tasso: è lì che il margine sparisce senza farsi notare.",
        "Ebook vs paperback: l'ebook dipende da consegna digitale e IVA, il paperback da pagine, inchiostro e marketplace.",
        "Senza una stima prima del lancio, scopri se il libro può sostenere la pubblicità solo dopo averla pagata.",
      ],
    },
    de: {
      definition:
        "Der KDP-Tantiemen-Rechner ist ein kostenloser Schätzer, der Ebook- und Taschenbuch-Tantiemen aus Preis, Steuer, Lieferkosten und Druckkosten modelliert.",
      bestFor: [
        "Am besten für die Preiswahl beim Ebook, bevor du dich in KDP für 35% oder 70% entscheidest.",
        "Am besten für die Frage, was vom Taschenbuch nach Abzug der Druckkosten übrig bleibt.",
        "Am besten für einen Margentest bei 10, 100 oder 1.000 Verkäufen, bevor Anzeigen laufen.",
      ],
      notFor: [
        "Nicht für Kindle-Unlimited-Prognosen: der Seitenwert ändert sich jeden Monat.",
        "Kein Ersatz für die KDP-Preisübersicht, die am Ende maßgeblich bleibt.",
        "Keine Verkaufsprognose: geschätzt wird der Erlös pro Exemplar, nicht die Nachfrage.",
      ],
      contrasts: [
        "Anders als Listenpreis mal Tantiemensatz zieht die Print-Schätzung die Druckkosten nach dem Satz ab — genau dort verschwindet die Marge unbemerkt.",
        "Ebook vs Taschenbuch: beim Ebook zählen Lieferkosten und Steuer, beim Taschenbuch Seitenzahl, Tinte und Marketplace.",
        "Ohne Schätzung vor dem Launch erfährst du erst nach den Anzeigen, ob das Buch sie überhaupt tragen kann.",
      ],
    },
  },

  "ai-publishing-software": {
    en: {
      definition:
        "DraftToDone is AI publishing software that turns one niche brief into a complete Amazon KDP package: manuscript, full wrap cover and listing metadata.",
      bestFor: [
        "Best for indie publishers who want one controlled pipeline instead of five disconnected tools.",
        "Best for operators running a repeatable KDP catalog rather than a single title.",
        "Best when the manuscript, the cover and the metadata have to agree with each other.",
      ],
      notFor: [
        "Not for novelists who want to write every sentence themselves.",
        "Not for a single one-off book if a weekly subscription makes no sense.",
        "Not an Amazon uploader: you publish from your own KDP account and disclose AI use.",
      ],
      contrasts: [
        "Unlike a chat window that returns text, the pipeline returns the whole product: manuscript, front/spine/back cover, title, description and 7 backend keywords.",
        "Without one workflow, the cover, the title and the keywords are decided in three places and rarely tell the reader the same story.",
        "Volume vs catalog quality: the system is built around a review gate per book, not around publishing as many files as possible.",
      ],
    },
    fr: {
      definition:
        "DraftToDone est un logiciel d'édition IA qui transforme un brief de niche en pack Amazon KDP complet : manuscrit, couverture complète et métadonnées de fiche.",
      bestFor: [
        "Idéal pour les éditeurs indépendants qui veulent un pipeline unique plutôt que cinq outils.",
        "Idéal pour les opérateurs de catalogue KDP répétable, pas pour un titre isolé.",
        "Idéal quand manuscrit, couverture et métadonnées doivent raconter la même chose.",
      ],
      notFor: [
        "Pas pour les romanciers qui veulent écrire chaque phrase eux-mêmes.",
        "Pas pour un livre unique si un abonnement hebdomadaire n'a aucun sens.",
        "Pas un outil d'upload : vous publiez depuis votre compte KDP et déclarez l'usage de l'IA.",
      ],
      contrasts: [
        "Contrairement à une fenêtre de chat qui rend du texte, le pipeline rend tout le produit : manuscrit, première, dos, quatrième, titre, description et 7 mots-clés.",
        "Sans workflow unique, la couverture, le titre et les mots-clés sont décidés à trois endroits et racontent rarement la même histoire.",
        "Volume vs qualité catalogue : le système est bâti sur une porte de revue par livre, pas sur le nombre de fichiers publiés.",
      ],
    },
    it: {
      definition:
        "DraftToDone è un software di editoria IA che trasforma un brief di nicchia in un pacchetto Amazon KDP completo: manoscritto, copertina intera e metadati della scheda.",
      bestFor: [
        "Ideale per editori indipendenti che vogliono una sola pipeline invece di cinque strumenti.",
        "Ideale per chi gestisce un catalogo KDP ripetibile, non un singolo titolo.",
        "Ideale quando manoscritto, copertina e metadati devono raccontare la stessa cosa.",
      ],
      notFor: [
        "Non per romanzieri che vogliono scrivere ogni frase da soli.",
        "Non per un libro unico, se un abbonamento settimanale non ha senso.",
        "Non carica su Amazon: pubblichi dal tuo account KDP e dichiari l'uso dell'IA.",
      ],
      contrasts: [
        "A differenza di una chat che restituisce testo, la pipeline restituisce tutto il prodotto: manoscritto, fronte, dorso, retro, titolo, descrizione e 7 keyword.",
        "Senza un workflow unico, copertina, titolo e keyword vengono decisi in tre posti e raramente dicono al lettore la stessa cosa.",
        "Volume vs qualità di catalogo: il sistema è costruito su un gate di revisione per libro, non sul numero di file pubblicati.",
      ],
    },
    de: {
      definition:
        "DraftToDone ist KI-Publishing-Software, die aus einem Nischenbrief ein komplettes Amazon-KDP-Paket macht: Manuskript, kompletter Umschlag und Listing-Metadaten.",
      bestFor: [
        "Am besten für Indie-Publisher, die eine Pipeline wollen statt fünf getrennter Tools.",
        "Am besten für Katalogbetreiber mit wiederholbarer KDP-Arbeit, nicht für einen Einzeltitel.",
        "Am besten, wenn Manuskript, Cover und Metadaten dieselbe Geschichte erzählen sollen.",
      ],
      notFor: [
        "Nicht für Romanautoren, die jeden Satz selbst schreiben wollen.",
        "Nicht für ein einzelnes Buch, wenn ein Wochenabo keinen Sinn ergibt.",
        "Kein Amazon-Uploader: du veröffentlichst aus deinem KDP-Konto und legst KI-Nutzung offen.",
      ],
      contrasts: [
        "Anders als ein Chatfenster, das Text zurückgibt, liefert die Pipeline das ganze Produkt: Manuskript, Vorderseite, Rücken, Rückseite, Titel, Beschreibung und 7 Keywords.",
        "Ohne gemeinsamen Workflow entstehen Cover, Titel und Keywords an drei Stellen und erzählen dem Leser selten dieselbe Geschichte.",
        "Volumen vs Katalogqualität: Das System ist auf einen Prüfschritt pro Buch gebaut, nicht auf möglichst viele veröffentlichte Dateien.",
      ],
    },
  },

  "ai-book-cover-generator": {
    en: {
      definition:
        "The AI book cover generator is a cover tool that produces a full KDP wrap — front cover, sized spine and back cover — plus a matching ebook cover.",
      bestFor: [
        "Best for paperbacks whose spine width has to follow page count and paper.",
        "Best for keeping author and series branding consistent across a whole catalog.",
        "Best for covers that must stay legible at Amazon search-thumbnail size.",
      ],
      notFor: [
        "Not for illustrators who want to art-direct every layer by hand.",
        "Not a guarantee of KDP approval: confirm the final file in the KDP previewer.",
        "Not for licensed characters or brand artwork you do not have the rights to.",
      ],
      contrasts: [
        "Unlike tools that stop at the front image, the output includes the spine and a back cover with room for the blurb and the barcode zone.",
        "Without correct bleed, 300 DPI and safe margins, a beautiful cover still fails technical review and costs you days.",
        "Ebook vs paperback: one is a single image, the other is a wrap whose spine changes with every revision of the page count.",
      ],
    },
    fr: {
      definition:
        "Le générateur de couverture IA est un outil qui produit un dos carré complet — première, dos dimensionné et quatrième — plus une couverture ebook accordée.",
      bestFor: [
        "Idéal pour les brochés dont le dos se calcule selon le nombre de pages et le papier.",
        "Idéal pour garder un branding auteur et série cohérent sur tout un catalogue.",
        "Idéal pour des couvertures qui restent lisibles en vignette de recherche Amazon.",
      ],
      notFor: [
        "Pas pour les illustrateurs qui veulent diriger chaque calque à la main.",
        "Pas une garantie de validation KDP : confirmez le fichier dans l'aperçu KDP.",
        "Pas pour des personnages sous licence ou des visuels de marque sans les droits.",
      ],
      contrasts: [
        "Contrairement aux outils qui s'arrêtent à l'image de première, la sortie inclut le dos et une quatrième avec la place pour le résumé et le code-barres.",
        "Sans fond perdu correct, 300 DPI et marges de sécurité, une belle couverture échoue quand même à la validation technique.",
        "Ebook vs broché : l'un est une simple image, l'autre un dos carré dont la largeur change à chaque révision du nombre de pages.",
      ],
    },
    it: {
      definition:
        "Il generatore di copertine IA è uno strumento che produce una copertina intera — fronte, dorso dimensionato e retro — più una copertina ebook allineata.",
      bestFor: [
        "Ideale per paperback il cui dorso dipende dal numero di pagine e dalla carta.",
        "Ideale per mantenere coerente il branding di autore e serie su tutto il catalogo.",
        "Ideale per copertine che devono restare leggibili come miniatura di ricerca.",
      ],
      notFor: [
        "Non per illustratori che vogliono dirigere ogni livello a mano.",
        "Non garantisce l'approvazione KDP: conferma il file nell'anteprima di KDP.",
        "Non per personaggi su licenza o grafiche di marca di cui non hai i diritti.",
      ],
      contrasts: [
        "A differenza degli strumenti che si fermano all'immagine frontale, l'output include il dorso e un retro con spazio per la quarta e il codice a barre.",
        "Senza abbondanza corretta, 300 DPI e margini di sicurezza, una bella copertina viene comunque bocciata alla revisione tecnica.",
        "Ebook vs paperback: uno è una singola immagine, l'altro una copertina intera il cui dorso cambia a ogni revisione delle pagine.",
      ],
    },
    de: {
      definition:
        "Der KI-Buchcover-Generator ist ein Cover-Tool, das einen kompletten KDP-Umschlag erzeugt — Vorderseite, dimensionierten Rücken und Rückseite — plus ein passendes Ebook-Cover.",
      bestFor: [
        "Am besten für Taschenbücher, deren Rückenbreite aus Seitenzahl und Papier entsteht.",
        "Am besten, um Autoren- und Serien-Branding über einen ganzen Katalog konsistent zu halten.",
        "Am besten für Cover, die als Amazon-Such-Thumbnail lesbar bleiben müssen.",
      ],
      notFor: [
        "Nicht für Illustratoren, die jede Ebene selbst gestalten und steuern wollen.",
        "Keine Garantie für die KDP-Freigabe: prüfe die finale Datei in der KDP-Vorschau.",
        "Nicht für lizenzierte Figuren oder Markengrafiken, an denen du keine Rechte hast.",
      ],
      contrasts: [
        "Anders als Tools, die beim Frontbild enden, umfasst die Ausgabe den Rücken und eine Rückseite mit Platz für Klappentext und Barcode-Zone.",
        "Ohne korrekten Beschnitt, 300 DPI und Sicherheitsränder scheitert auch ein schönes Cover an der technischen Prüfung.",
        "Ebook vs Taschenbuch: das eine ist ein einzelnes Bild, das andere ein Umschlag, dessen Rücken sich mit jeder Seitenzahl ändert.",
      ],
    },
  },

  "book-description-generator": {
    en: {
      definition:
        "The book description generator is a blurb writer that turns your manuscript into Amazon sales copy, sized and formatted for the KDP description field.",
      bestFor: [
        "Best for writing the hook that lands above Amazon's More button.",
        "Best for comparing several angles before you commit one blurb to the listing.",
        "Best for keeping the description aligned with your title, subtitle and keywords.",
      ],
      notFor: [
        "Not for authors who want a plot synopsis rather than sales copy.",
        "Not a promise of more sales: price, cover, reviews and category all decide too.",
        "Not a hands-off step — you edit the draft and paste the final text into KDP.",
      ],
      contrasts: [
        "Unlike a back-cover summary that describes the plot, a blurb is written to make a browsing reader want the book.",
        "Without a front-loaded hook, the only lines Amazon shows before the More button are spent on setup.",
        "One blurb vs several variants: a single draft is a guess, comparable angles let you pick what fits the category.",
      ],
    },
    fr: {
      definition:
        "Le générateur de description est un rédacteur de résumé qui transforme votre manuscrit en texte de vente Amazon calibré pour le champ description de KDP.",
      bestFor: [
        "Idéal pour écrire l'accroche qui passe avant le bouton Lire la suite d'Amazon.",
        "Idéal pour comparer plusieurs angles avant de figer une description sur la fiche.",
        "Idéal pour garder la description cohérente avec titre, sous-titre et mots-clés.",
      ],
      notFor: [
        "Pas pour les auteurs qui veulent un synopsis plutôt qu'un texte de vente.",
        "Pas une promesse de ventes : prix, couverture, avis et catégorie décident aussi.",
        "Pas une étape automatique : vous relisez et collez le texte final dans KDP.",
      ],
      contrasts: [
        "Contrairement à un résumé de quatrième qui décrit l'intrigue, une description est écrite pour donner envie du livre à un lecteur qui parcourt.",
        "Sans accroche placée en tête, les seules lignes affichées avant la troncature servent à planter le décor.",
        "Une description vs plusieurs variantes : un brouillon unique est un pari, des angles comparables laissent choisir.",
      ],
    },
    it: {
      definition:
        "Il generatore di descrizione è uno scrittore di sinossi che trasforma il manoscritto in testo di vendita Amazon calibrato per il campo descrizione di KDP.",
      bestFor: [
        "Ideale per scrivere il gancio che arriva prima del pulsante Altro di Amazon.",
        "Ideale per confrontare più angolazioni prima di fissare una sinossi sulla scheda.",
        "Ideale per tenere la descrizione coerente con titolo, sottotitolo e keyword.",
      ],
      notFor: [
        "Non per autori che vogliono un riassunto della trama invece di un testo di vendita.",
        "Non promette più vendite: contano anche prezzo, copertina, recensioni e categoria.",
        "Non è un passaggio automatico: rivedi la bozza e incolli tu il testo in KDP.",
      ],
      contrasts: [
        "A differenza di un riassunto di quarta che racconta la trama, una descrizione è scritta per far venire voglia del libro a chi sta sfogliando.",
        "Senza un gancio in apertura, le uniche righe che Amazon mostra prima del taglio servono soltanto a introdurre.",
        "Una sinossi vs più varianti: una sola bozza è una scommessa, angolazioni confrontabili fanno scegliere.",
      ],
    },
    de: {
      definition:
        "Der Buchbeschreibung-Generator ist ein Klappentext-Schreiber, der dein Manuskript in Amazon-Verkaufstext verwandelt, zugeschnitten auf das KDP-Beschreibungsfeld.",
      bestFor: [
        "Am besten für den Aufhänger, der vor Amazons Mehr-Button noch sichtbar ist.",
        "Am besten, um mehrere Blickwinkel zu vergleichen, bevor ein Text ins Listing geht.",
        "Am besten, um Beschreibung, Titel, Untertitel und Keywords stimmig zu halten.",
      ],
      notFor: [
        "Nicht für Autoren, die eine Inhaltsangabe statt eines Verkaufstexts wollen.",
        "Kein Verkaufsversprechen: Preis, Cover, Rezensionen und Kategorie entscheiden mit.",
        "Kein Selbstläufer — du überarbeitest den Entwurf und fügst ihn selbst in KDP ein.",
      ],
      contrasts: [
        "Anders als eine Inhaltsangabe, die die Handlung beschreibt, ist ein Klappentext dafür geschrieben, beim Stöbern Lust auf das Buch zu machen.",
        "Ohne früh gesetzten Aufhänger gehen die einzigen Zeilen vor dem Mehr-Button für Vorgeplänkel drauf.",
        "Ein Entwurf vs mehrere Varianten: ein einziger Text ist geraten, vergleichbare Blickwinkel lassen dich wählen.",
      ],
    },
  },

  "book-title-generator": {
    en: {
      definition:
        "The book title generator is a naming tool that produces paired KDP titles and subtitles shaped by your topic, your category and how readers actually search.",
      bestFor: [
        "Best for pairing a short title with a subtitle that carries the category keywords.",
        "Best for comparing several title-and-subtitle pairs side by side before publishing.",
        "Best for keeping title, cover, description and keywords pointing the same way.",
      ],
      notFor: [
        "Not for authors already attached to a title they have chosen.",
        "Not a trademark check: KDP title rules stay your responsibility.",
        "Not a ranking promise — a clearer title helps discovery, it does not buy sales.",
      ],
      contrasts: [
        "Unlike a random slogan generator, every option is built from your topic and target category, then checked against the KDP field limits.",
        "Keyword-aware vs keyword-stuffed: the phrases match real reader intent and still read naturally out loud.",
        "Without a subtitle doing the search work, a short literary title has to carry both the hook and the discovery.",
      ],
    },
    fr: {
      definition:
        "Le générateur de titre est un outil de nommage qui produit des paires titre et sous-titre KDP construites sur votre sujet, votre catégorie et la recherche lecteur.",
      bestFor: [
        "Idéal pour associer un titre court à un sous-titre qui porte les mots-clés.",
        "Idéal pour comparer plusieurs paires titre et sous-titre avant de publier.",
        "Idéal pour aligner titre, couverture, description et mots-clés sur un même axe.",
      ],
      notFor: [
        "Pas pour les auteurs déjà attachés à un titre choisi.",
        "Pas un contrôle de marque : les règles de titre KDP restent votre responsabilité.",
        "Pas une promesse de classement : un titre clair aide la visibilité, pas les ventes.",
      ],
      contrasts: [
        "Contrairement à un générateur de slogans, chaque option part de votre sujet et de votre catégorie, puis passe la vérification des champs KDP.",
        "Optimisé vs bourré de mots-clés : les expressions suivent l'intention réelle et restent lisibles à voix haute.",
        "Sans sous-titre pour porter la recherche, un titre court doit assurer seul l'accroche et la découvrabilité.",
      ],
    },
    it: {
      definition:
        "Il generatore di titoli è uno strumento di naming che produce coppie di titolo e sottotitolo KDP costruite sul tuo argomento, sulla categoria e sulla ricerca dei lettori.",
      bestFor: [
        "Ideale per abbinare un titolo breve a un sottotitolo che porta le parole chiave.",
        "Ideale per confrontare più coppie di titolo e sottotitolo prima di pubblicare.",
        "Ideale per allineare titolo, copertina, descrizione e keyword sullo stesso asse.",
      ],
      notFor: [
        "Non per autori già affezionati a un titolo che hanno scelto.",
        "Non è un controllo marchi: le regole KDP sui titoli restano tua responsabilità.",
        "Non promette posizionamenti: un titolo chiaro aiuta la scoperta, non le vendite.",
      ],
      contrasts: [
        "A differenza di un generatore di slogan, ogni opzione nasce dal tuo argomento e dalla tua categoria, poi passa il controllo dei campi KDP.",
        "Ottimizzato vs riempito di keyword: le frasi seguono l'intento reale e restano leggibili ad alta voce.",
        "Senza un sottotitolo che porti la ricerca, un titolo breve deve reggere da solo il gancio e la scoperta.",
      ],
    },
    de: {
      definition:
        "Der Buchtitel-Generator ist ein Naming-Tool, das KDP-Titel und -Untertitel als Paar erzeugt, aufgebaut aus deinem Thema, deiner Kategorie und echter Leserintention.",
      bestFor: [
        "Am besten, um einen kurzen Titel mit einem keyword-tragenden Untertitel zu paaren.",
        "Am besten, um mehrere Titel-Untertitel-Paare vor dem Veröffentlichen zu vergleichen.",
        "Am besten, um Titel, Cover, Beschreibung und Keywords in eine Richtung zu bringen.",
      ],
      notFor: [
        "Nicht für Autoren, die an einem bereits gewählten Titel hängen.",
        "Keine Markenprüfung: KDP-Titelregeln und Markenrechte bleiben deine Sache.",
        "Kein Ranking-Versprechen: ein klarer Titel hilft der Sichtbarkeit, nicht dem Umsatz.",
      ],
      contrasts: [
        "Anders als ein Slogan-Generator entsteht jede Option aus deinem Thema und deiner Kategorie und wird gegen die KDP-Feldlängen geprüft.",
        "Keyword-bewusst vs Keyword-Stuffing: die Formulierungen treffen echte Leserintention und bleiben vorlesbar.",
        "Ohne Untertitel, der die Suche trägt, muss ein kurzer Titel Haken und Auffindbarkeit allein stemmen.",
      ],
    },
  },

  "ai-book-generator": {
    en: {
      definition:
        "The AI book generator is a manuscript engine that turns one brief into a structured outline and full chapters held together by a single voice.",
      bestFor: [
        "Best for starting the cover and metadata stage with a finished draft, not a blank page.",
        "Best for fiction and non-fiction structures that need continuity across chapters.",
        "Best for hitting a target length instead of collecting disconnected fragments.",
      ],
      notFor: [
        "Not for writers who want line-by-line literary craft over a complete draft.",
        "Not publishable as-is: you read, edit and disclose AI use where KDP requires it.",
        "Not the whole workflow — cover, metadata and quality gates come after this stage.",
      ],
      contrasts: [
        "Unlike a prompt that returns a chapter sample, the pipeline outlines first and then drafts every chapter toward your target length.",
        "Manuscript vs package: this stage produces the book, and the cover, title, description and keywords are built on top of it.",
        "Without a voice held steady across chapters, a generated book drifts in tone and repeats itself.",
      ],
    },
    fr: {
      definition:
        "Le générateur de livre IA est un moteur de manuscrit qui transforme un brief en plan structuré et en chapitres complets tenus par une même voix.",
      bestFor: [
        "Idéal pour aborder couverture et métadonnées avec un manuscrit fini, pas une page blanche.",
        "Idéal pour les structures fiction et non-fiction qui exigent de la continuité.",
        "Idéal pour viser une longueur cible plutôt que collecter des fragments épars.",
      ],
      notFor: [
        "Pas pour les auteurs qui veulent un travail littéraire ligne à ligne.",
        "Pas publiable tel quel : vous relisez, corrigez et déclarez l'usage de l'IA.",
        "Pas tout le workflow : couverture, métadonnées et qualité viennent après.",
      ],
      contrasts: [
        "Contrairement à un prompt qui rend un extrait de chapitre, le pipeline construit d'abord le plan puis rédige chaque chapitre jusqu'à la longueur visée.",
        "Manuscrit vs package : cette étape produit le livre, la couverture et les métadonnées se construisent ensuite dessus.",
        "Sans voix tenue d'un chapitre à l'autre, un livre généré dérive en ton et se répète.",
      ],
    },
    it: {
      definition:
        "Il generatore di libri IA è un motore di manoscritti che trasforma un brief in un outline strutturato e in capitoli interi tenuti da una sola voce.",
      bestFor: [
        "Ideale per affrontare copertina e metadati con un manoscritto finito, non una pagina bianca.",
        "Ideale per strutture fiction e non-fiction che richiedono continuità tra i capitoli.",
        "Ideale per raggiungere una lunghezza obiettivo invece di raccogliere frammenti.",
      ],
      notFor: [
        "Non per chi cerca lavoro letterario riga per riga invece di una bozza completa.",
        "Non pubblicabile così com'è: rileggi, correggi e dichiari l'uso dell'IA su KDP.",
        "Non è tutto il workflow: copertina, metadati e controlli qualità vengono dopo.",
      ],
      contrasts: [
        "A differenza di un prompt che restituisce un capitolo di esempio, la pipeline costruisce prima l'outline e poi stende ogni capitolo verso la lunghezza obiettivo.",
        "Manoscritto vs pacchetto: questa fase produce il libro, copertina e metadati si costruiscono sopra.",
        "Senza una voce tenuta tra i capitoli, un libro generato cambia tono e si ripete.",
      ],
    },
    de: {
      definition:
        "Der KI-Buchgenerator ist eine Manuskript-Engine, die aus einem Brief eine strukturierte Outline und vollständige Kapitel mit einer durchgehenden Stimme macht.",
      bestFor: [
        "Am besten, um Cover und Metadaten mit fertigem Manuskript statt leerer Seite zu starten.",
        "Am besten für Sachbuch- und Fiction-Strukturen, die Kontinuität über Kapitel brauchen.",
        "Am besten, um eine Ziellänge zu treffen statt lose Fragmente zu sammeln.",
      ],
      notFor: [
        "Nicht für Autoren, die literarische Feinarbeit Zeile für Zeile suchen.",
        "Nicht unverändert veröffentlichbar: du prüfst, überarbeitest und legst KI-Nutzung offen.",
        "Nicht der ganze Workflow: Cover, Metadaten und Qualitätsgates folgen danach.",
      ],
      contrasts: [
        "Anders als ein Prompt, der eine Kapitelprobe zurückgibt, baut die Pipeline zuerst die Outline und schreibt dann jedes Kapitel bis zur Ziellänge.",
        "Manuskript vs Paket: diese Stufe erzeugt das Buch, Cover, Titel, Beschreibung und Keywords entstehen darauf.",
        "Ohne eine über Kapitel gehaltene Stimme driftet ein generiertes Buch im Ton und wiederholt sich.",
      ],
    },
  },

  "kdp-keyword-tool": {
    en: {
      definition:
        "The KDP keyword tool is a research step that drafts a ranked shortlist of search phrases and maps the strongest seven to Amazon's backend keyword fields.",
      bestFor: [
        "Best for filling all seven KDP backend slots without repeating your title or subtitle.",
        "Best for checking that keywords and browse category tell the same story.",
        "Best for spotting terms too broad to rank against before you commit a slot.",
      ],
      notFor: [
        "Not a rank tracker or a sales-volume database — it drafts and ranks candidates.",
        "Not automatic: you review and approve the seven slots before anything is published.",
        "Not a ranking guarantee — cover, writing, pricing, reviews and demand all matter.",
      ],
      contrasts: [
        "Unlike a standalone keyword tab, the research runs in the same pipeline that writes the title and description, so the metadata agrees with itself.",
        "Search phrases vs single nouns: readers type phrases, and a slot spent on one broad noun is a slot wasted.",
        "Guides vs tool: the guides explain how to choose keywords by hand, this drafts the slots for your review.",
      ],
    },
    fr: {
      definition:
        "L'outil mots-clés KDP est une étape de recherche qui propose une liste classée d'expressions et place les sept plus fortes dans les champs backend d'Amazon.",
      bestFor: [
        "Idéal pour remplir les sept champs KDP sans répéter le titre ni le sous-titre.",
        "Idéal pour vérifier que mots-clés et catégorie racontent la même chose.",
        "Idéal pour repérer les termes trop larges avant de leur donner un champ.",
      ],
      notFor: [
        "Pas un tracker de classement ni une base de volumes : il propose et classe.",
        "Pas automatique : vous validez les sept champs avant toute publication.",
        "Pas une garantie de classement : couverture, texte, prix, avis et demande comptent.",
      ],
      contrasts: [
        "Contrairement à un onglet mots-clés isolé, la recherche tourne dans le pipeline qui écrit titre et description, donc les métadonnées se répondent.",
        "Expressions vs mots isolés : les lecteurs tapent des expressions, et un champ dépensé sur un nom trop large est un champ perdu.",
        "Guides vs outil : les guides expliquent comment choisir à la main, l'outil prépare les champs à valider.",
      ],
    },
    it: {
      definition:
        "Lo strumento keyword KDP è una fase di ricerca che propone una lista ordinata di frasi e assegna le sette più forti ai campi backend di Amazon.",
      bestFor: [
        "Ideale per riempire i sette campi KDP senza ripetere titolo e sottotitolo.",
        "Ideale per verificare che keyword e categoria raccontino la stessa cosa.",
        "Ideale per individuare termini troppo ampi prima di dedicargli un campo.",
      ],
      notFor: [
        "Non è un rank tracker né un database di volumi: propone e ordina candidati.",
        "Non è automatico: rivedi e approvi i sette campi prima della pubblicazione.",
        "Non garantisce posizionamenti: contano copertina, testo, prezzo, recensioni e domanda.",
      ],
      contrasts: [
        "A differenza di una scheda keyword separata, la ricerca gira nella stessa pipeline che scrive titolo e descrizione, così i metadati si parlano.",
        "Frasi vs singole parole: i lettori digitano frasi, e un campo speso su un nome troppo ampio è un campo perso.",
        "Guide vs strumento: le guide spiegano come scegliere a mano, questo prepara i campi da rivedere.",
      ],
    },
    de: {
      definition:
        "Das KDP-Keyword-Tool ist ein Rechercheschritt, der eine sortierte Liste von Suchphrasen entwirft und die stärksten sieben den Backend-Feldern von Amazon zuordnet.",
      bestFor: [
        "Am besten, um alle sieben KDP-Felder zu füllen, ohne Titel oder Untertitel zu wiederholen.",
        "Am besten, um zu prüfen, ob Keywords und Browse-Kategorie dasselbe erzählen.",
        "Am besten, um zu breite Begriffe zu erkennen, bevor sie ein Feld belegen.",
      ],
      notFor: [
        "Kein Rank-Tracker und keine Volumendatenbank — es entwirft und sortiert Kandidaten.",
        "Nicht automatisch: du prüfst und bestätigst die sieben Felder vor der Veröffentlichung.",
        "Keine Ranking-Garantie: Cover, Text, Preis, Rezensionen und Nachfrage zählen mit.",
      ],
      contrasts: [
        "Anders als ein separater Keyword-Tab läuft die Recherche in derselben Pipeline, die Titel und Beschreibung schreibt — die Metadaten passen zueinander.",
        "Suchphrasen vs Einzelwörter: Leser tippen Phrasen, und ein Feld für ein zu breites Substantiv ist ein verlorenes Feld.",
        "Anleitungen vs Tool: die Guides erklären die Handarbeit, dies bereitet die Felder zur Prüfung vor.",
      ],
    },
  },

  "best-ai-book-generator": {
    en: {
      definition:
        "The best AI book generator, for a KDP publisher, is the one that ships the whole package — manuscript, cover and metadata — not the most impressive sample chapter.",
      bestFor: [
        "Best for buyers comparing AI book tools on finished output rather than demo chapters.",
        "Best for publishers who need cover and metadata in the same workflow as the text.",
        "Best for weighing cost per book: EUR 14.99 per week is 6 book credits.",
      ],
      notFor: [
        "Not for writers shopping for a prose-craft assistant to co-write with.",
        "Not for a single one-off book if a weekly subscription makes no sense.",
        "Not a shortcut past human review: you inspect every book before upload.",
      ],
      contrasts: [
        "Unlike a tool judged on one impressive chapter, a publishing tool should be judged on the complete product that reaches the listing page.",
        "Text-only vs whole package: a manuscript with no cover, title or keywords is still days away from a KDP upload.",
        "Without honest limits — no ranking, approval or sales guarantees — a comparison is just marketing copy.",
      ],
    },
    fr: {
      definition:
        "Le meilleur générateur de livre IA, pour un éditeur KDP, est celui qui livre tout le package — manuscrit, couverture et métadonnées — pas le plus beau chapitre de démo.",
      bestFor: [
        "Idéal pour comparer les outils IA sur le produit fini plutôt que sur un chapitre de démo.",
        "Idéal pour les éditeurs qui veulent couverture et métadonnées dans le même flux.",
        "Idéal pour évaluer le coût par livre : 14,99 € par semaine donnent 6 crédits.",
      ],
      notFor: [
        "Pas pour les auteurs qui cherchent un assistant d'écriture à quatre mains.",
        "Pas pour un livre unique si un abonnement hebdomadaire n'a aucun sens.",
        "Pas un raccourci pour éviter la relecture : vous inspectez chaque livre.",
      ],
      contrasts: [
        "Contrairement aux outils jugés sur un chapitre impressionnant, un outil d'édition se juge sur le produit complet qui arrive sur la fiche.",
        "Texte seul vs package complet : un manuscrit sans couverture, titre ni mots-clés reste à plusieurs jours de l'upload.",
        "Sans limites honnêtes — aucune garantie de classement, de validation ni de ventes — une comparaison n'est que de la publicité.",
      ],
    },
    it: {
      definition:
        "Il miglior generatore di libri IA, per un publisher KDP, è quello che consegna tutto il pacchetto — manoscritto, copertina e metadati — non il capitolo demo più bello.",
      bestFor: [
        "Ideale per confrontare gli strumenti IA sul prodotto finito e non su un capitolo demo.",
        "Ideale per publisher che vogliono copertina e metadati nello stesso flusso del testo.",
        "Ideale per valutare il costo a libro: 14,99 € a settimana danno 6 crediti.",
      ],
      notFor: [
        "Non per chi cerca un assistente di scrittura con cui rifinire la prosa.",
        "Non per un libro unico, se un abbonamento settimanale non ha senso.",
        "Non è una scorciatoia per saltare la revisione: controlli ogni libro.",
      ],
      contrasts: [
        "A differenza degli strumenti giudicati su un capitolo brillante, uno strumento editoriale si giudica sul prodotto completo che arriva sulla scheda.",
        "Solo testo vs pacchetto intero: un manoscritto senza copertina, titolo e keyword resta a giorni di distanza dall'upload.",
        "Senza limiti dichiarati — nessuna garanzia di ranking, approvazione o vendite — un confronto è solo pubblicità.",
      ],
    },
    de: {
      definition:
        "Der beste KI-Buchgenerator ist für KDP-Publisher der, der das ganze Paket liefert — Manuskript, Cover und Metadaten — nicht das eindrucksvollste Probekapitel.",
      bestFor: [
        "Am besten für Käufer, die KI-Buchtools am fertigen Output statt am Demokapitel messen.",
        "Am besten für Publisher, die Cover und Metadaten im selben Workflow wie den Text brauchen.",
        "Am besten, um Kosten pro Buch zu prüfen: 14,99 € pro Woche sind 6 Buch-Credits.",
      ],
      notFor: [
        "Nicht für Autoren, die einen Schreibpartner für Prosa-Feinarbeit suchen.",
        "Nicht für ein einzelnes Buch, wenn ein Wochenabo keinen Sinn ergibt.",
        "Keine Abkürzung an der Prüfung vorbei: du siehst jedes Buch vor dem Upload durch.",
      ],
      contrasts: [
        "Anders als Tools, die an einem beeindruckenden Kapitel gemessen werden, zeigt sich ein Publishing-Tool am kompletten Produkt auf der Listing-Seite.",
        "Nur Text vs ganzes Paket: ein Manuskript ohne Cover, Titel und Keywords ist vom KDP-Upload noch Tage entfernt.",
        "Ohne ehrliche Grenzen — keine Ranking-, Freigabe- oder Verkaufsgarantie — ist ein Vergleich reine Werbung.",
      ],
    },
  },

  "kdp-book-generator": {
    en: {
      definition:
        "The KDP book generator is a packaging workflow that turns a niche brief into everything needed before upload: manuscript, cover, listing metadata and a review checklist.",
      bestFor: [
        "Best for catalog operators producing many titles rather than one book a year.",
        "Best for getting title, description and seven keyword slots ready in one pass.",
        "Best for a review checklist that catches problems before Amazon does.",
      ],
      notFor: [
        "Not a replacement for the KDP dashboard: you upload, price and publish there.",
        "Not a promise of account safety or guaranteed approval by Amazon.",
        "Not for publishers unwilling to run rights, policy and AI-disclosure checks.",
      ],
      contrasts: [
        "Unlike a manuscript generator that stops at the last chapter, this stage prepares the cover direction and every KDP field the listing will ask for.",
        "One book vs a catalog: the value is a repeatable brief-to-package system, not a single lucky title.",
        "Without a review step before upload, AI speed only moves the problem closer to your KDP account.",
      ],
    },
    fr: {
      definition:
        "Le générateur de livre KDP est un workflow d'empaquetage qui transforme un brief de niche en tout ce qu'il faut avant l'upload : manuscrit, couverture, métadonnées et checklist.",
      bestFor: [
        "Idéal pour les opérateurs de catalogue qui sortent plusieurs titres, pas un par an.",
        "Idéal pour préparer titre, description et sept champs mots-clés en une passe.",
        "Idéal pour une checklist qui repère les problèmes avant Amazon.",
      ],
      notFor: [
        "Pas un remplacement du tableau de bord KDP : vous uploadez et publiez là-bas.",
        "Pas une promesse de sécurité de compte ni de validation garantie par Amazon.",
        "Pas pour qui refuse les contrôles droits, politique et déclaration IA.",
      ],
      contrasts: [
        "Contrairement à un générateur de manuscrit qui s'arrête au dernier chapitre, cette étape prépare la couverture et chaque champ que la fiche KDP réclamera.",
        "Un livre vs un catalogue : la valeur est un système brief-vers-package répétable, pas un titre chanceux.",
        "Sans revue avant l'upload, la vitesse de l'IA rapproche seulement le problème de votre compte KDP.",
      ],
    },
    it: {
      definition:
        "Il generatore di libri KDP è un workflow di confezionamento che trasforma un brief di nicchia in tutto ciò che serve prima dell'upload: manoscritto, copertina, metadati e checklist.",
      bestFor: [
        "Ideale per operatori di catalogo che pubblicano più titoli, non uno all'anno.",
        "Ideale per preparare titolo, descrizione e sette campi keyword in un solo passaggio.",
        "Ideale per una checklist che trova i problemi prima di Amazon.",
      ],
      notFor: [
        "Non sostituisce la dashboard KDP: carichi, imposti il prezzo e pubblichi lì.",
        "Non promette sicurezza dell'account né approvazione garantita da Amazon.",
        "Non per chi non vuole fare controlli su diritti, policy e dichiarazione IA.",
      ],
      contrasts: [
        "A differenza di un generatore che si ferma all'ultimo capitolo, questa fase prepara la copertina e ogni campo che la scheda KDP chiederà.",
        "Un libro vs un catalogo: il valore è un sistema ripetibile dal brief al pacchetto, non un titolo fortunato.",
        "Senza una revisione prima dell'upload, la velocità dell'IA avvicina soltanto il problema al tuo account KDP.",
      ],
    },
    de: {
      definition:
        "Der KDP-Buchgenerator ist ein Verpackungs-Workflow, der aus einem Nischenbriefing alles vor dem Upload erzeugt: Manuskript, Cover, Listing-Metadaten und eine Prüfliste.",
      bestFor: [
        "Am besten für Katalogbetreiber mit vielen Titeln statt einem Buch pro Jahr.",
        "Am besten, um Titel, Beschreibung und sieben Keyword-Felder in einem Durchgang zu haben.",
        "Am besten für eine Prüfliste, die Probleme vor Amazon findet.",
      ],
      notFor: [
        "Kein Ersatz für das KDP-Dashboard: dort lädst du hoch, bepreist und veröffentlichst.",
        "Keine Zusage für Kontosicherheit oder garantierte Freigabe durch Amazon.",
        "Nicht für Publisher, die Rechte-, Policy- und KI-Offenlegungsprüfungen auslassen wollen.",
      ],
      contrasts: [
        "Anders als ein Manuskriptgenerator, der beim letzten Kapitel endet, bereitet diese Stufe die Cover-Richtung und jedes KDP-Feld des Listings vor.",
        "Ein Buch vs ein Katalog: der Wert liegt im wiederholbaren Weg vom Briefing zum Paket, nicht in einem Glückstitel.",
        "Ohne Prüfschritt vor dem Upload rückt KI-Tempo das Problem nur näher an dein KDP-Konto.",
      ],
    },
  },

  "sudowrite-alternative": {
    en: {
      definition:
        "DraftToDone is a Sudowrite alternative for publishers: instead of AI prose assistance, it turns a brief into a publish-ready KDP product — manuscript, cover and metadata.",
      bestFor: [
        "Best for publishers who need the packaged product, not help with the writing itself.",
        "Best for catalog operators shipping repeatable output rather than one literary novel.",
        "Best if you already write elsewhere and want the packaging handled here.",
      ],
      notFor: [
        "Not for novelists who want a craft partner for scenes and line-level prose.",
        "Not for a single one-off book if a weekly subscription makes no sense.",
        "Not a replacement for your own reading pass before you publish anything.",
      ],
      contrasts: [
        "Sudowrite vs DraftToDone: one is an AI prose-writing assistant for fiction, the other aims one step wider, at the whole publishable KDP product.",
        "Craft assistance vs publish-ready product: the two solve different problems, and some authors use both — write with one, package with the other.",
        "Without a cover, a title, a description and keywords, a finished manuscript is not yet a book you can list.",
      ],
    },
    fr: {
      definition:
        "DraftToDone est une alternative à Sudowrite pour les éditeurs : au lieu d'assister l'écriture, il transforme un brief en produit KDP prêt à publier — manuscrit, couverture, métadonnées.",
      bestFor: [
        "Idéal pour les éditeurs qui veulent le produit empaqueté, pas une aide à l'écriture.",
        "Idéal pour un catalogue répétable plutôt qu'un unique roman littéraire.",
        "Idéal si vous écrivez déjà ailleurs et voulez l'empaquetage traité ici.",
      ],
      notFor: [
        "Pas pour les romanciers qui veulent un partenaire de scènes et de prose.",
        "Pas pour un livre unique si un abonnement hebdomadaire n'a aucun sens.",
        "Pas un substitut à votre propre relecture avant de publier quoi que ce soit.",
      ],
      contrasts: [
        "Sudowrite vs DraftToDone : l'un est un assistant d'écriture IA pour la fiction, l'autre vise un cran plus large, le produit KDP publiable en entier.",
        "Aide à l'écriture vs produit prêt à publier : les deux résolvent des problèmes différents, et certains auteurs utilisent les deux.",
        "Sans couverture, titre, description ni mots-clés, un manuscrit fini n'est pas encore un livre que l'on peut mettre en vente.",
      ],
    },
    it: {
      definition:
        "DraftToDone è un'alternativa a Sudowrite per gli editori: invece di assistere la scrittura, trasforma un brief in un prodotto KDP pronto — manoscritto, copertina e metadati.",
      bestFor: [
        "Ideale per editori che vogliono il prodotto confezionato, non un aiuto alla scrittura.",
        "Ideale per un catalogo ripetibile più che per un singolo romanzo letterario.",
        "Ideale se scrivi già altrove e vuoi che il confezionamento avvenga qui.",
      ],
      notFor: [
        "Non per romanzieri che cercano un partner per scene e prosa riga per riga.",
        "Non per un libro unico, se un abbonamento settimanale non ha senso.",
        "Non sostituisce la tua rilettura prima di pubblicare qualsiasi cosa.",
      ],
      contrasts: [
        "Sudowrite vs DraftToDone: uno è un assistente di scrittura IA per la narrativa, l'altro punta un passo più in là, al prodotto KDP pubblicabile per intero.",
        "Aiuto alla scrittura vs prodotto pronto: risolvono problemi diversi, e alcuni autori usano entrambi — scrivere con uno, impacchettare con l'altro.",
        "Senza copertina, titolo, descrizione e keyword, un manoscritto finito non è ancora un libro che puoi mettere in vendita.",
      ],
    },
    de: {
      definition:
        "DraftToDone ist eine Sudowrite-Alternative für Publisher: statt beim Schreiben zu assistieren, macht es aus einem Brief ein fertiges KDP-Produkt — Manuskript, Cover, Metadaten.",
      bestFor: [
        "Am besten für Publisher, die das fertige Paket brauchen, nicht Hilfe beim Schreiben.",
        "Am besten für wiederholbare Katalogarbeit statt für einen einzelnen Roman.",
        "Am besten, wenn du anderswo schreibst und die Verpackung hier erledigt haben willst.",
      ],
      notFor: [
        "Nicht für Romanautoren, die einen Partner für Szenen und Prosa suchen.",
        "Nicht für ein einzelnes Buch, wenn ein Wochenabo keinen Sinn ergibt.",
        "Kein Ersatz für deinen eigenen Lesedurchgang vor der Veröffentlichung.",
      ],
      contrasts: [
        "Sudowrite vs DraftToDone: das eine ist ein KI-Schreibassistent für Belletristik, das andere zielt einen Schritt weiter, auf das ganze fertige KDP-Produkt.",
        "Schreibhilfe vs fertiges Produkt: beide lösen verschiedene Probleme, manche Autoren nutzen beide — mit einem schreiben, mit dem anderen verpacken.",
        "Ohne Cover, Titel, Beschreibung und Keywords ist ein fertiges Manuskript noch kein Buch, das du listen kannst.",
      ],
    },
  },

  "atticus-alternative": {
    en: {
      definition:
        "DraftToDone is an Atticus alternative that generates the book instead of only formatting one: manuscript, full cover and KDP metadata from a single brief.",
      bestFor: [
        "Best for publishers who do not have a finished manuscript to format yet.",
        "Best for producing publish-ready products at catalog scale, not one polished title.",
        "Best if cover and KDP metadata should follow the text in the same pass.",
      ],
      notFor: [
        "Not a formatting editor you drive manually with your own templates.",
        "Not for authors who write their own books and only need beautiful files.",
        "Not a one-time purchase: it is a book-credit subscription, 1 credit = 1 book.",
      ],
      contrasts: [
        "Atticus vs DraftToDone: one is a one-time-purchase writing and formatting tool, the other starts earlier and ends later, generating manuscript, cover and metadata.",
        "Formatting what you wrote vs generating the whole product: two different jobs, and only one of them starts from a blank page.",
        "Without a cover and KDP metadata, a beautifully formatted file is still only part of a listing.",
      ],
    },
    fr: {
      definition:
        "DraftToDone est une alternative à Atticus qui génère le livre au lieu de seulement le mettre en page : manuscrit, couverture complète et métadonnées KDP depuis un brief.",
      bestFor: [
        "Idéal si vous n'avez pas encore de manuscrit fini à mettre en page.",
        "Idéal pour produire à l'échelle d'un catalogue, pas un titre unique soigné.",
        "Idéal si couverture et métadonnées KDP doivent suivre le texte dans la même passe.",
      ],
      notFor: [
        "Pas un éditeur de mise en page que vous pilotez avec vos propres modèles.",
        "Pas pour les auteurs qui écrivent leurs livres et veulent juste de beaux fichiers.",
        "Pas un achat unique : c'est un abonnement à crédits, 1 crédit = 1 livre.",
      ],
      contrasts: [
        "Atticus vs DraftToDone : l'un est un outil d'écriture et de mise en page en achat unique, l'autre commence plus tôt et finit plus tard, du manuscrit aux métadonnées.",
        "Mettre en page ce que vous avez écrit vs générer tout le produit : deux métiers, et un seul part de la page blanche.",
        "Sans couverture ni métadonnées KDP, un fichier joliment mis en page ne fait qu'une partie de la fiche.",
      ],
    },
    it: {
      definition:
        "DraftToDone è un'alternativa ad Atticus che genera il libro invece di limitarsi a impaginarlo: manoscritto, copertina intera e metadati KDP da un solo brief.",
      bestFor: [
        "Ideale se non hai ancora un manoscritto finito da impaginare.",
        "Ideale per produrre su scala di catalogo, non un singolo titolo curato.",
        "Ideale se copertina e metadati KDP devono seguire il testo nello stesso passaggio.",
      ],
      notFor: [
        "Non è un editor di impaginazione che guidi con i tuoi modelli.",
        "Non per autori che scrivono i propri libri e vogliono solo file belli.",
        "Non è un acquisto unico: è un abbonamento a crediti, 1 credito = 1 libro.",
      ],
      contrasts: [
        "Atticus vs DraftToDone: uno è uno strumento di scrittura e impaginazione ad acquisto unico, l'altro inizia prima e finisce dopo, dal manoscritto ai metadati.",
        "Impaginare ciò che hai scritto vs generare tutto il prodotto: due mestieri diversi, e solo uno parte dalla pagina bianca.",
        "Senza copertina e metadati KDP, un file impaginato bene è ancora solo una parte della scheda.",
      ],
    },
    de: {
      definition:
        "DraftToDone ist eine Atticus-Alternative, die das Buch erzeugt statt es nur zu formatieren: Manuskript, komplettes Cover und KDP-Metadaten aus einem einzigen Brief.",
      bestFor: [
        "Am besten, wenn du noch kein fertiges Manuskript zum Formatieren hast.",
        "Am besten, um im Katalogmaßstab zu produzieren statt einen Einzeltitel zu polieren.",
        "Am besten, wenn Cover und KDP-Metadaten im selben Durchgang wie der Text entstehen.",
      ],
      notFor: [
        "Kein Formatierungseditor, den du mit eigenen Vorlagen selbst steuerst.",
        "Nicht für Autoren, die ihre Bücher selbst schreiben und nur schöne Dateien brauchen.",
        "Kein Einmalkauf: es ist ein Buch-Kredit-Abo, 1 Kredit = 1 fertiges Buch.",
      ],
      contrasts: [
        "Atticus vs DraftToDone: das eine ist ein Schreib- und Formatierungstool zum Einmalkauf, das andere beginnt früher und endet später, vom Manuskript bis zu den Metadaten.",
        "Formatieren, was du geschrieben hast, vs das ganze Produkt erzeugen: zwei Aufgaben, und nur eine startet auf der leeren Seite.",
        "Ohne Cover und KDP-Metadaten ist eine schön formatierte Datei erst ein Teil des Listings.",
      ],
    },
  },
};

/** Lookup for a page key + locale. Returns undefined for keys without a block. */
export function getContrast(key: string, locale: Locale): ContrastBlock | undefined {
  return contrastCopy[key]?.[locale];
}
