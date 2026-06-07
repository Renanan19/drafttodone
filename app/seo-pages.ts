import { locales, SITE_URL, type Locale } from "./blog-content";

export type SolutionTranslation = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  keywords: string[];
  sections: {
    id: string;
    title: string;
    body: string;
    points: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  cta: string;
};

export type SolutionPage = {
  key: string;
  updated: string;
  tool?: "kdpRoyaltyCalculator";
  translations: Record<Locale, SolutionTranslation>;
};

export const solutionPages: SolutionPage[] = [
  {
    key: "kdp-royalty-calculator",
    updated: "2026-06-07",
    tool: "kdpRoyaltyCalculator",
    translations: {
      en: {
        slug: "kdp-royalty-calculator",
        title: "KDP royalty calculator for ebooks, paperbacks and Kindle Unlimited planning",
        description:
          "Estimate Amazon KDP royalties for Kindle ebooks, paperbacks and Expanded Distribution with price, tax, delivery cost, printing cost and sales scenarios.",
        eyebrow: "KDP royalty calculator",
        h1: "Estimate KDP royalties before you choose a book price.",
        lead: "Use this interactive calculator to model ebook royalties, paperback margins, Expanded Distribution tradeoffs and realistic sales scenarios before you publish or change a price.",
        keywords: [
          "KDP royalty calculator",
          "Amazon KDP royalties",
          "ebook royalty calculator",
          "paperback royalty calculator",
          "Kindle earnings calculator",
        ],
        sections: [
          {
            id: "ebook",
            title: "Model ebook royalties",
            body: "Estimate 35% or 70% Kindle ebook royalties with tax and delivery cost so pricing decisions are closer to real payout.",
            points: [
              "35% and 70% royalty options",
              "VAT or sales tax estimate",
              "Delivery cost for 70% ebook royalty",
              "Revenue scenarios by sales volume",
            ],
          },
          {
            id: "print",
            title: "Understand print margins",
            body: "Paperback royalties are easy to overestimate because printing cost is subtracted after the royalty rate is applied.",
            points: [
              "US, EU and UK marketplace examples",
              "Black ink regular trim assumptions",
              "Automatic 50% or 60% print royalty estimate",
              "Minimum price signal for print books",
            ],
          },
          {
            id: "planning",
            title: "Plan before ads and launches",
            body: "A royalty estimate helps you decide whether a book can support ads, discounts, bundles or a wider catalog strategy.",
            points: [
              "Compare ebook and print economics",
              "Estimate profit at 10, 100 or 1,000 sales",
              "Spot low-margin print products",
              "Pressure-test pricing before launch",
            ],
          },
        ],
        faq: [
          {
            question: "Is this the official KDP calculator?",
            answer:
              "No. It is a practical estimator for planning. Always confirm the final royalty inside KDP's own pricing grid before publishing.",
          },
          {
            question: "Does the calculator include Kindle Unlimited?",
            answer:
              "Kindle Unlimited page-read payout changes monthly, so this page focuses on ebook and print royalty math. Use the related KU guides to model page-read strategy.",
          },
          {
            question: "Why is print royalty lower than list price times rate?",
            answer:
              "KDP subtracts printing cost from print royalties, so page count, ink type and marketplace can change your margin.",
          },
        ],
        cta: "Join the waitlist",
      },
      fr: {
        slug: "calculateur-redevances-kdp",
        title: "Calculateur de redevances KDP pour ebooks, brochés et scénarios de ventes",
        description:
          "Estimez les redevances Amazon KDP pour ebooks Kindle, livres brochés et distribution étendue avec prix, TVA, livraison numérique, impression et volume de ventes.",
        eyebrow: "Calculateur redevances KDP",
        h1: "Estimez vos redevances KDP avant de choisir un prix.",
        lead: "Utilisez ce calculateur interactif pour modéliser les redevances ebook, les marges brochées, la distribution étendue et des scénarios de ventes réalistes avant publication.",
        keywords: [
          "calculateur redevances KDP",
          "redevances Amazon KDP",
          "calcul royalties Kindle",
          "calculateur livre broché KDP",
          "revenus Kindle calculateur",
        ],
        sections: [
          {
            id: "ebook",
            title: "Modéliser les redevances ebook",
            body: "Estimez les redevances Kindle 35% ou 70% avec TVA et livraison numérique pour fixer un prix plus proche du revenu réel.",
            points: [
              "Options de redevance 35% et 70%",
              "Estimation TVA ou taxe",
              "Livraison numérique pour l'option 70%",
              "Scénarios selon le volume de ventes",
            ],
          },
          {
            id: "print",
            title: "Comprendre les marges print",
            body: "Les redevances brochées sont faciles à surestimer car le coût d'impression est retiré après le taux de redevance.",
            points: [
              "Exemples marketplaces US, UE et UK",
              "Hypothèse encre noire et format standard",
              "Estimation automatique 50% ou 60%",
              "Signal de prix minimum pour le print",
            ],
          },
          {
            id: "planning",
            title: "Planifier avant pubs et lancements",
            body: "Une estimation de redevance aide à savoir si un livre peut supporter publicité, remises, bundles ou stratégie catalogue.",
            points: [
              "Comparer économie ebook et print",
              "Estimer à 10, 100 ou 1 000 ventes",
              "Repérer les produits print à faible marge",
              "Tester le prix avant lancement",
            ],
          },
        ],
        faq: [
          {
            question: "Est-ce le calculateur officiel KDP ?",
            answer:
              "Non. C'est un estimateur pratique pour planifier. Confirmez toujours la redevance finale dans la grille de prix KDP avant publication.",
          },
          {
            question: "Le calculateur inclut-il Kindle Unlimited ?",
            answer:
              "Le paiement par page lue KU change chaque mois. Cette page se concentre donc sur la logique ebook et print, avec les guides KU en complément.",
          },
          {
            question: "Pourquoi la redevance print est-elle plus basse que prévu ?",
            answer:
              "KDP retire le coût d'impression. Le nombre de pages, l'encre et le marketplace peuvent donc changer fortement la marge.",
          },
        ],
        cta: "Rejoindre la liste",
      },
      it: {
        slug: "calcolatore-royalty-kdp",
        title: "Calcolatore royalty KDP per ebook, paperback e scenari di vendita",
        description:
          "Stima le royalty Amazon KDP per ebook Kindle, paperback e Distribuzione Estesa con prezzo, IVA, consegna digitale, stampa e volume vendite.",
        eyebrow: "Calcolatore royalty KDP",
        h1: "Stima le royalty KDP prima di scegliere il prezzo.",
        lead: "Usa questo calcolatore interattivo per modellare royalty ebook, margini paperback, Distribuzione Estesa e scenari realistici prima della pubblicazione.",
        keywords: [
          "calcolatore royalty KDP",
          "royalty Amazon KDP",
          "calcolo royalties Kindle",
          "calcolatore paperback KDP",
          "calcolatore guadagni Kindle",
        ],
        sections: [
          {
            id: "ebook",
            title: "Modellare royalty ebook",
            body: "Stima royalty Kindle 35% o 70% con IVA e consegna digitale per scegliere un prezzo più vicino al payout reale.",
            points: [
              "Opzioni royalty 35% e 70%",
              "Stima IVA o tassa",
              "Consegna digitale per il 70%",
              "Scenari per volume vendite",
            ],
          },
          {
            id: "print",
            title: "Capire i margini print",
            body: "Le royalty paperback sono facili da sovrastimare perché il costo di stampa viene sottratto dopo il tasso royalty.",
            points: [
              "Esempi marketplace US, UE e UK",
              "Ipotesi inchiostro nero e formato standard",
              "Stima automatica 50% o 60%",
              "Segnale di prezzo minimo print",
            ],
          },
          {
            id: "planning",
            title: "Pianificare prima di ads e lanci",
            body: "Una stima royalty aiuta a capire se un libro può sostenere pubblicità, sconti, bundle o strategia catalogo.",
            points: [
              "Confrontare economia ebook e print",
              "Stimare 10, 100 o 1.000 vendite",
              "Vedere prodotti print a basso margine",
              "Testare il prezzo prima del lancio",
            ],
          },
        ],
        faq: [
          {
            question: "È il calcolatore ufficiale KDP?",
            answer:
              "No. È uno stimatore pratico per pianificare. Conferma sempre la royalty finale nella griglia prezzi KDP.",
          },
          {
            question: "Include Kindle Unlimited?",
            answer:
              "Il payout per pagina KU cambia ogni mese. Questa pagina si concentra su ebook e print; usa le guide KU per la strategia page-read.",
          },
          {
            question: "Perché la royalty print è più bassa del previsto?",
            answer:
              "KDP sottrae il costo di stampa. Pagine, inchiostro e marketplace possono cambiare molto il margine.",
          },
        ],
        cta: "Unisciti alla lista",
      },
      de: {
        slug: "kdp-tantiemen-rechner",
        title: "KDP-Tantiemen-Rechner für Ebooks, Taschenbücher und Verkaufsszenarien",
        description:
          "Schätze Amazon-KDP-Tantiemen für Kindle Ebooks, Taschenbücher und Erweiterte Distribution mit Preis, Steuer, Lieferkosten, Druckkosten und Verkaufsvolumen.",
        eyebrow: "KDP-Tantiemen-Rechner",
        h1: "Schätze KDP-Tantiemen, bevor du den Buchpreis wählst.",
        lead: "Nutze diesen interaktiven Rechner für Ebook-Tantiemen, Taschenbuchmargen, Erweiterte Distribution und realistische Verkaufsszenarien vor der Veröffentlichung.",
        keywords: [
          "KDP Tantiemen Rechner",
          "Amazon KDP Tantiemen",
          "Kindle Tantiemen berechnen",
          "Taschenbuch Tantiemen Rechner",
          "Kindle Einnahmen Rechner",
        ],
        sections: [
          {
            id: "ebook",
            title: "Ebook-Tantiemen modellieren",
            body: "Schätze 35% oder 70% Kindle-Tantiemen mit Steuer und Lieferkosten, damit der Preis näher am echten Auszahlungswert liegt.",
            points: [
              "35% und 70% Tantiemenoptionen",
              "Steuer- oder MwSt.-Schätzung",
              "Lieferkosten für 70%",
              "Szenarien nach Verkaufsvolumen",
            ],
          },
          {
            id: "print",
            title: "Printmargen verstehen",
            body: "Taschenbuch-Tantiemen werden oft überschätzt, weil KDP Druckkosten nach dem Tantiemensatz abzieht.",
            points: [
              "US-, EU- und UK-Marketplace-Beispiele",
              "Schwarze Tinte und Standardformat",
              "Automatische 50%- oder 60%-Schätzung",
              "Signal für Mindestpreis im Print",
            ],
          },
          {
            id: "planung",
            title: "Vor Ads und Launch planen",
            body: "Eine Tantiemenschätzung zeigt, ob ein Buch Anzeigen, Rabatte, Bundles oder eine Katalogstrategie tragen kann.",
            points: [
              "Ebook- und Printwirtschaft vergleichen",
              "10, 100 oder 1.000 Verkäufe schätzen",
              "Printprodukte mit niedriger Marge erkennen",
              "Preis vor Launch testen",
            ],
          },
        ],
        faq: [
          {
            question: "Ist das der offizielle KDP-Rechner?",
            answer:
              "Nein. Es ist ein praktischer Planungsrechner. Prüfe finale Tantiemen immer in der offiziellen KDP-Preisübersicht.",
          },
          {
            question: "Enthält der Rechner Kindle Unlimited?",
            answer:
              "Der KU-Seitenwert ändert sich monatlich. Diese Seite fokussiert Ebook- und Printlogik; die KU-Guides helfen bei Page-Read-Strategie.",
          },
          {
            question: "Warum ist Print-Tantieme niedriger als erwartet?",
            answer:
              "KDP zieht Druckkosten ab. Seitenzahl, Tinte und Marketplace können die Marge stark verändern.",
          },
        ],
        cta: "Warteliste beitreten",
      },
    },
  },
  {
    key: "ai-publishing-software",
    updated: "2026-06-07",
    translations: {
      en: {
        slug: "ai-publishing-software",
        title: "AI publishing software for KDP books, covers and metadata",
        description:
          "DraftToDone is AI publishing software for creating manuscripts, book covers, KDP metadata and repeatable catalog workflows from one controlled pipeline.",
        eyebrow: "AI publishing software",
        h1: "Create publish-ready books with one AI publishing workflow.",
        lead: "DraftToDone is being built for indie publishers, authors and operators who want a controlled system for manuscript generation, cover packaging, title research, KDP metadata and catalog quality assurance.",
        keywords: [
          "AI publishing software",
          "KDP automation software",
          "AI book generator",
          "AI book cover generator",
          "book metadata generator",
        ],
        sections: [
          {
            id: "workflow",
            title: "One workflow from idea to upload",
            body: "Instead of stitching together prompts, spreadsheets and design files, DraftToDone is designed around the whole publishing pipeline.",
            points: [
              "Niche and reader-promise brief",
              "Outline and manuscript generation",
              "Front cover, spine and back cover direction",
              "SEO-ready title, subtitle, description and keywords",
            ],
          },
          {
            id: "quality",
            title: "Built for catalog quality, not content spam",
            body: "A publishing system should make every book easier to review, improve and position. DraftToDone focuses on repeatable quality gates rather than blind volume.",
            points: [
              "Chapter-level acceptance criteria",
              "Metadata alignment checks",
              "Cover and thumbnail QA",
              "Catalog notes for future optimization",
            ],
          },
          {
            id: "seo",
            title: "Designed for discoverability",
            body: "Search visibility starts before upload. The product workflow connects reader intent, book promise, metadata and cover signals so the final listing is easier to understand.",
            points: [
              "Keyword clusters by reader intent",
              "Descriptions written for conversion",
              "Consistent author and series positioning",
              "Structured launch and post-launch reviews",
            ],
          },
        ],
        faq: [
          {
            question: "Is DraftToDone an AI book generator?",
            answer:
              "Yes, but the goal is broader than generating text. DraftToDone is designed to help create the manuscript, cover direction, metadata and quality workflow needed for a publish-ready book.",
          },
          {
            question: "Can it help with Amazon KDP SEO?",
            answer:
              "The workflow is built around reader intent, titles, descriptions, keyword clusters and category fit, which are core parts of KDP discoverability.",
          },
          {
            question: "Does AI publishing software guarantee sales?",
            answer:
              "No software can guarantee rankings or sales. It can improve the quality, consistency and discoverability signals of the publishing process.",
          },
        ],
        cta: "Join the waitlist",
      },
      fr: {
        slug: "logiciel-edition-ia",
        title: "Logiciel d'édition IA pour livres KDP, couvertures et métadonnées",
        description:
          "DraftToDone est un logiciel d'édition IA pour créer manuscrits, couvertures, métadonnées KDP et workflows de catalogue depuis un pipeline contrôlé.",
        eyebrow: "Logiciel édition IA",
        h1: "Créez des livres prêts à publier avec un workflow d'édition IA.",
        lead: "DraftToDone est conçu pour les éditeurs indépendants, auteurs et opérateurs qui veulent un système contrôlé pour générer manuscrit, couverture, titre, métadonnées KDP et contrôle qualité.",
        keywords: [
          "logiciel édition IA",
          "automatisation KDP",
          "générateur livre IA",
          "générateur couverture livre IA",
          "générateur métadonnées livre",
        ],
        sections: [
          {
            id: "workflow",
            title: "Un workflow de l'idée à l'upload",
            body: "Au lieu d'empiler prompts, tableurs et fichiers design, DraftToDone est pensé autour de toute la chaîne de publication.",
            points: [
              "Brief de niche et promesse lecteur",
              "Plan et génération du manuscrit",
              "Direction première de couverture, dos et quatrième",
              "Titre, sous-titre, description et mots-clés SEO",
            ],
          },
          {
            id: "qualite",
            title: "Pensé pour la qualité catalogue",
            body: "Un système d'édition doit rendre chaque livre plus facile à relire, améliorer et positionner. DraftToDone privilégie les portes qualité plutôt que le volume aveugle.",
            points: [
              "Critères d'acceptation par chapitre",
              "Contrôles d'alignement des métadonnées",
              "QA couverture et miniature",
              "Notes catalogue pour les optimisations futures",
            ],
          },
          {
            id: "seo",
            title: "Conçu pour être trouvable",
            body: "La visibilité commence avant l'upload. Le workflow connecte intention lecteur, promesse, métadonnées et signaux de couverture.",
            points: [
              "Clusters de mots-clés par intention",
              "Descriptions écrites pour convertir",
              "Positionnement auteur et série cohérent",
              "Revues de lancement et post-lancement structurées",
            ],
          },
        ],
        faq: [
          {
            question: "DraftToDone est-il un générateur de livres IA ?",
            answer:
              "Oui, mais l'objectif est plus large que le texte. DraftToDone aide à créer manuscrit, direction couverture, métadonnées et workflow qualité pour un livre prêt à publier.",
          },
          {
            question: "Est-ce utile pour le SEO Amazon KDP ?",
            answer:
              "Le workflow s'appuie sur intention lecteur, titres, descriptions, clusters de mots-clés et fit catégorie, des éléments clés de la découvrabilité KDP.",
          },
          {
            question: "Un logiciel d'édition IA garantit-il des ventes ?",
            answer:
              "Non. Aucun logiciel ne garantit classement ou ventes. Il peut améliorer la qualité, la cohérence et les signaux de découvrabilité.",
          },
        ],
        cta: "Rejoindre la liste",
      },
      it: {
        slug: "software-editoria-ia",
        title: "Software di editoria IA per libri KDP, copertine e metadati",
        description:
          "DraftToDone è un software di editoria IA per creare manoscritti, copertine, metadati KDP e workflow di catalogo da un pipeline controllato.",
        eyebrow: "Software editoria IA",
        h1: "Crea libri pronti alla pubblicazione con un workflow IA.",
        lead: "DraftToDone è pensato per editori indipendenti, autori e operatori che vogliono un sistema controllato per manoscritto, copertina, titolo, metadati KDP e qualità catalogo.",
        keywords: [
          "software editoria IA",
          "automazione KDP",
          "generatore libri IA",
          "generatore copertine IA",
          "generatore metadati libro",
        ],
        sections: [
          {
            id: "workflow",
            title: "Un workflow dall'idea all'upload",
            body: "Invece di unire prompt, fogli e file design, DraftToDone è progettato intorno all'intera pipeline editoriale.",
            points: [
              "Brief di nicchia e promessa al lettore",
              "Outline e generazione manoscritto",
              "Direzione fronte, dorso e retro copertina",
              "Titolo, sottotitolo, descrizione e keyword SEO",
            ],
          },
          {
            id: "qualita",
            title: "Costruito per qualità di catalogo",
            body: "Un sistema editoriale deve rendere ogni libro più facile da revisionare, migliorare e posizionare. DraftToDone privilegia gate qualità invece di volume cieco.",
            points: [
              "Criteri di accettazione per capitolo",
              "Controlli di allineamento metadati",
              "QA copertina e thumbnail",
              "Note catalogo per ottimizzazioni future",
            ],
          },
          {
            id: "seo",
            title: "Progettato per la discoverability",
            body: "La visibilità inizia prima dell'upload. Il workflow collega intento del lettore, promessa, metadati e segnali visivi.",
            points: [
              "Cluster keyword per intento",
              "Descrizioni scritte per convertire",
              "Posizionamento autore e serie coerente",
              "Review lancio e post-lancio strutturate",
            ],
          },
        ],
        faq: [
          {
            question: "DraftToDone è un generatore di libri IA?",
            answer:
              "Sì, ma l'obiettivo è più ampio del testo. Aiuta a creare manoscritto, copertina, metadati e workflow qualità per un libro pronto.",
          },
          {
            question: "Aiuta con la SEO Amazon KDP?",
            answer:
              "Il workflow usa intento lettore, titoli, descrizioni, cluster keyword e fit categoria, elementi centrali per essere trovati su KDP.",
          },
          {
            question: "Un software IA garantisce vendite?",
            answer:
              "No. Nessun software garantisce ranking o vendite. Può migliorare qualità, coerenza e segnali di discoverability.",
          },
        ],
        cta: "Unisciti alla lista",
      },
      de: {
        slug: "ki-publishing-software",
        title: "KI-Publishing-Software für KDP-Bücher, Cover und Metadaten",
        description:
          "DraftToDone ist KI-Publishing-Software für Manuskripte, Buchcover, KDP-Metadaten und wiederholbare Katalog-Workflows aus einer kontrollierten Pipeline.",
        eyebrow: "KI-Publishing-Software",
        h1: "Erstelle veröffentlichungsfertige Bücher mit einem KI-Publishing-Workflow.",
        lead: "DraftToDone wird für Indie-Publisher, Autorinnen und Operatoren gebaut, die ein kontrolliertes System für Manuskript, Cover, Titel, KDP-Metadaten und Katalogqualität wollen.",
        keywords: [
          "KI Publishing Software",
          "KDP Automatisierung",
          "KI Buch Generator",
          "KI Buchcover Generator",
          "Buch Metadaten Generator",
        ],
        sections: [
          {
            id: "workflow",
            title: "Ein Workflow von Idee bis Upload",
            body: "Statt Prompts, Tabellen und Designfiles zu verbinden, ist DraftToDone rund um die gesamte Publishing-Pipeline gedacht.",
            points: [
              "Nischenbrief und Leserversprechen",
              "Outline und Manuskriptgenerierung",
              "Richtung für Vorderseite, Rücken und Rückseite",
              "SEO-Titel, Untertitel, Beschreibung und Keywords",
            ],
          },
          {
            id: "qualitaet",
            title: "Für Katalogqualität gebaut",
            body: "Ein Publishing-System sollte jedes Buch leichter prüfbar, verbesserbar und positionierbar machen. DraftToDone fokussiert Qualitätsgates statt blindes Volumen.",
            points: [
              "Akzeptanzkriterien pro Kapitel",
              "Metadaten-Alignment-Checks",
              "Cover- und Thumbnail-QA",
              "Katalognotizen für spätere Optimierung",
            ],
          },
          {
            id: "seo",
            title: "Für Auffindbarkeit entwickelt",
            body: "Sichtbarkeit beginnt vor dem Upload. Der Workflow verbindet Suchintention, Buchversprechen, Metadaten und Coversignale.",
            points: [
              "Keyword-Cluster nach Leserintention",
              "Beschreibungen für Conversion",
              "Konsistente Autoren- und Serienpositionierung",
              "Strukturierte Launch- und Post-Launch-Reviews",
            ],
          },
        ],
        faq: [
          {
            question: "Ist DraftToDone ein KI-Buchgenerator?",
            answer:
              "Ja, aber das Ziel ist breiter als Textgenerierung. DraftToDone soll Manuskript, Coverrichtung, Metadaten und Qualitätsworkflow für veröffentlichungsfertige Bücher verbinden.",
          },
          {
            question: "Hilft es bei Amazon-KDP-SEO?",
            answer:
              "Der Workflow basiert auf Leserintention, Titeln, Beschreibungen, Keyword-Clustern und Kategorie-Fit, zentralen Elementen der KDP-Auffindbarkeit.",
          },
          {
            question: "Garantiert KI-Publishing-Software Verkäufe?",
            answer:
              "Nein. Keine Software garantiert Rankings oder Verkäufe. Sie kann Qualität, Konsistenz und Auffindbarkeitssignale verbessern.",
          },
        ],
        cta: "Warteliste beitreten",
      },
    },
  },
];

export function getSolutionBySlug(locale: Locale, slug: string) {
  return solutionPages.find((page) => page.translations[locale].slug === slug);
}

export function solutionPath(locale: Locale, page: SolutionPage) {
  return `/${locale}/${page.translations[locale].slug}`;
}

export function solutionUrl(locale: Locale, page: SolutionPage) {
  return `${SITE_URL}${solutionPath(locale, page)}`;
}

export function getSolutionAlternates(page: SolutionPage) {
  return {
    en: solutionPath("en", page),
    fr: solutionPath("fr", page),
    it: solutionPath("it", page),
    de: solutionPath("de", page),
    "x-default": solutionPath("en", page),
  };
}

export function getSolutionStaticParams() {
  return solutionPages.flatMap((page) =>
    locales.map((locale) => ({
      locale,
      slug: page.translations[locale].slug,
    })),
  );
}
