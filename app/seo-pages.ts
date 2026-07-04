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
        cta: "Open the app",
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
        cta: "Ouvrir l'app",
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
        cta: "Apri l'app",
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
        cta: "App öffnen",
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
        cta: "Open the app",
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
        cta: "Ouvrir l'app",
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
        cta: "Apri l'app",
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
        cta: "App öffnen",
      },
    },
  },
  {
    key: "ai-book-cover-generator",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "ai-book-cover-generator",
        title: "AI book cover generator for KDP front cover, spine and back cover",
        description:
          "Generate print-ready KDP book covers with AI: front cover, full-wrap spine and back cover sized for ebook and paperback, with title, subtitle and author typography.",
        eyebrow: "AI book cover generator",
        h1: "Generate a print-ready book cover, front to back.",
        lead: "DraftToDone designs the full cover package — front, spine and back — with AI imagery and typography that fit your genre, your trim size and KDP print specs, so the file you upload is ready the first time.",
        keywords: [
          "AI book cover generator",
          "KDP cover generator",
          "book cover maker",
          "ebook cover design",
          "paperback cover template",
        ],
        sections: [
          {
            id: "full-wrap",
            title: "A full wrap, not just a thumbnail",
            body: "Most cover tools stop at the front image. A paperback needs a front cover, a correctly sized spine and a back cover with room for the blurb and barcode.",
            points: [
              "Front cover sized to your trim",
              "Spine width from page count and paper",
              "Back cover with blurb and barcode zone",
              "Matching ebook and print versions",
            ],
          },
          {
            id: "genre",
            title: "Designed to fit the genre",
            body: "A thriller, a romance and a non-fiction guide signal value in very different ways. The cover direction follows the genre conventions buyers already trust.",
            points: [
              "Genre-aware typography and color",
              "Clear title and subtitle hierarchy",
              "Series-consistent author branding",
              "Legible at search-thumbnail size",
            ],
          },
          {
            id: "kdp-ready",
            title: "Built to pass KDP review",
            body: "A beautiful cover that fails technical review costs you days. The output targets resolution, bleed and format rules before you upload.",
            points: [
              "300 DPI print resolution",
              "Correct bleed and safe margins",
              "PDF for print, image for ebook",
              "Pre-upload cover QA checklist",
            ],
          },
        ],
        faq: [
          {
            question: "Does it create the spine and back cover too?",
            answer:
              "Yes. The goal is a full wrap — front cover, a spine sized from your page count, and a back cover with space for the blurb and barcode — plus a matching ebook cover.",
          },
          {
            question: "Will the cover meet Amazon KDP requirements?",
            answer:
              "The output targets KDP resolution, bleed and trim rules and includes a pre-upload checklist. Always confirm the final file in KDP's previewer before publishing.",
          },
          {
            question: "Can I keep covers consistent across a series?",
            answer:
              "Yes. Author and series branding can stay consistent across books so a catalog reads as one shelf, which helps repeat readers and discovery.",
          },
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "generateur-couverture-livre-ia",
        title: "Générateur de couverture de livre IA pour KDP : première, dos et quatrième",
        description:
          "Générez des couvertures KDP prêtes à imprimer avec l'IA : première de couverture, dos et quatrième, dimensionnées pour ebook et broché, avec titre, sous-titre et typographie auteur.",
        eyebrow: "Générateur de couverture IA",
        h1: "Générez une couverture prête à imprimer, de la première à la quatrième.",
        lead: "DraftToDone conçoit le pack complet — première, dos et quatrième — avec visuels et typographie IA adaptés à votre genre, votre format et les specs d'impression KDP, pour un fichier bon du premier coup.",
        keywords: [
          "générateur couverture livre IA",
          "générateur couverture KDP",
          "créer couverture livre",
          "design couverture ebook",
          "gabarit couverture broché",
        ],
        sections: [
          {
            id: "full-wrap",
            title: "Un dos carré complet, pas juste une vignette",
            body: "La plupart des outils s'arrêtent à l'image de première. Un broché exige une première, un dos correctement dimensionné et une quatrième avec la place pour le résumé et le code-barres.",
            points: [
              "Première au format de votre livre",
              "Largeur de dos selon pages et papier",
              "Quatrième avec résumé et zone code-barres",
              "Versions ebook et print accordées",
            ],
          },
          {
            id: "genre",
            title: "Pensé pour coller au genre",
            body: "Un thriller, une romance et un guide pratique signalent leur valeur très différemment. La direction de couverture suit les codes que les lecteurs reconnaissent déjà.",
            points: [
              "Typographie et couleurs selon le genre",
              "Hiérarchie claire titre et sous-titre",
              "Branding auteur cohérent par série",
              "Lisible en vignette de recherche",
            ],
          },
          {
            id: "kdp-ready",
            title: "Conçu pour passer la validation KDP",
            body: "Une belle couverture refusée à la validation technique coûte des jours. La sortie vise les règles de résolution, fond perdu et format avant l'upload.",
            points: [
              "Résolution 300 DPI pour le print",
              "Fond perdu et marges de sécurité corrects",
              "PDF pour le print, image pour l'ebook",
              "Checklist QA couverture avant upload",
            ],
          },
        ],
        faq: [
          {
            question: "Crée-t-il aussi le dos et la quatrième ?",
            answer:
              "Oui. L'objectif est un dos carré complet — première, dos dimensionné selon le nombre de pages et quatrième avec la place pour le résumé et le code-barres — plus une couverture ebook accordée.",
          },
          {
            question: "La couverture respecte-t-elle les exigences KDP ?",
            answer:
              "La sortie vise les règles KDP de résolution, fond perdu et format, avec une checklist avant upload. Confirmez toujours le fichier final dans l'aperçu KDP avant de publier.",
          },
          {
            question: "Puis-je garder des couvertures cohérentes sur une série ?",
            answer:
              "Oui. Le branding auteur et série peut rester cohérent d'un livre à l'autre, pour qu'un catalogue se lise comme une même étagère — utile pour les lecteurs fidèles et la découverte.",
          },
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "generatore-copertine-libri-ia",
        title: "Generatore di copertine libri IA per KDP: fronte, dorso e retro",
        description:
          "Genera copertine KDP pronte per la stampa con l'IA: copertina anteriore, dorso e retro dimensionati per ebook e paperback, con titolo, sottotitolo e tipografia autore.",
        eyebrow: "Generatore copertine IA",
        h1: "Genera una copertina pronta per la stampa, dal fronte al retro.",
        lead: "DraftToDone progetta il pacchetto completo — fronte, dorso e retro — con immagini e tipografia IA adatte al genere, al formato e alle specifiche di stampa KDP, così il file è pronto al primo tentativo.",
        keywords: [
          "generatore copertine libri IA",
          "generatore copertine KDP",
          "creare copertina libro",
          "design copertina ebook",
          "template copertina paperback",
        ],
        sections: [
          {
            id: "full-wrap",
            title: "Una copertina intera, non solo una miniatura",
            body: "Molti strumenti si fermano all'immagine frontale. Un paperback richiede fronte, un dorso dimensionato correttamente e un retro con spazio per la quarta di copertina e il codice a barre.",
            points: [
              "Fronte dimensionato al tuo formato",
              "Larghezza dorso da pagine e carta",
              "Retro con quarta e zona codice a barre",
              "Versioni ebook e stampa allineate",
            ],
          },
          {
            id: "genre",
            title: "Progettata per il genere",
            body: "Un thriller, un romance e una guida non-fiction comunicano valore in modi molto diversi. La direzione della copertina segue le convenzioni che i lettori già riconoscono.",
            points: [
              "Tipografia e colori per genere",
              "Gerarchia chiara di titolo e sottotitolo",
              "Branding autore coerente per serie",
              "Leggibile come miniatura di ricerca",
            ],
          },
          {
            id: "kdp-ready",
            title: "Costruita per superare la revisione KDP",
            body: "Una bella copertina bocciata alla revisione tecnica costa giorni. L'output mira a risoluzione, abbondanza e formato prima dell'upload.",
            points: [
              "Risoluzione di stampa 300 DPI",
              "Abbondanza e margini di sicurezza corretti",
              "PDF per la stampa, immagine per l'ebook",
              "Checklist QA copertina pre-upload",
            ],
          },
        ],
        faq: [
          {
            question: "Crea anche dorso e retro?",
            answer:
              "Sì. L'obiettivo è una copertina intera — fronte, dorso dimensionato dal numero di pagine e retro con spazio per quarta e codice a barre — più una copertina ebook allineata.",
          },
          {
            question: "La copertina rispetta i requisiti Amazon KDP?",
            answer:
              "L'output mira alle regole KDP di risoluzione, abbondanza e formato e include una checklist pre-upload. Conferma sempre il file finale nell'anteprima KDP prima di pubblicare.",
          },
          {
            question: "Posso mantenere le copertine coerenti in una serie?",
            answer:
              "Sì. Il branding di autore e serie può restare coerente tra i libri, così un catalogo si legge come un unico scaffale — utile per lettori abituali e scoperta.",
          },
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "ki-buchcover-generator",
        title: "KI-Buchcover-Generator für KDP: Vorderseite, Rücken und Rückseite",
        description:
          "Erstelle druckfertige KDP-Buchcover mit KI: Vorderseite, Buchrücken und Rückseite, dimensioniert für Ebook und Taschenbuch, mit Titel, Untertitel und Autoren-Typografie.",
        eyebrow: "KI-Buchcover-Generator",
        h1: "Erstelle ein druckfertiges Cover, von vorn bis hinten.",
        lead: "DraftToDone gestaltet das komplette Cover-Paket — Vorderseite, Rücken und Rückseite — mit KI-Bildern und Typografie passend zu Genre, Format und KDP-Druckvorgaben, damit die Datei gleich beim ersten Mal passt.",
        keywords: [
          "KI Buchcover Generator",
          "KDP Cover Generator",
          "Buchcover erstellen",
          "Ebook Cover Design",
          "Taschenbuch Cover Vorlage",
        ],
        sections: [
          {
            id: "full-wrap",
            title: "Ein voller Umschlag, nicht nur ein Thumbnail",
            body: "Viele Tools enden beim Frontbild. Ein Taschenbuch braucht Vorderseite, einen korrekt dimensionierten Rücken und eine Rückseite mit Platz für Klappentext und Barcode.",
            points: [
              "Vorderseite passend zum Format",
              "Rückenbreite aus Seitenzahl und Papier",
              "Rückseite mit Klappentext und Barcode-Zone",
              "Abgestimmte Ebook- und Print-Version",
            ],
          },
          {
            id: "genre",
            title: "Auf das Genre zugeschnitten",
            body: "Ein Thriller, ein Liebesroman und ein Sachbuch signalisieren Wert sehr unterschiedlich. Die Cover-Richtung folgt den Genre-Konventionen, denen Käufer bereits vertrauen.",
            points: [
              "Genre-gerechte Typografie und Farben",
              "Klare Titel- und Untertitel-Hierarchie",
              "Serienkonsistentes Autoren-Branding",
              "Lesbar als Such-Thumbnail",
            ],
          },
          {
            id: "kdp-ready",
            title: "Gebaut, um die KDP-Prüfung zu bestehen",
            body: "Ein schönes Cover, das die technische Prüfung nicht besteht, kostet Tage. Die Ausgabe zielt auf Auflösung, Beschnitt und Format vor dem Upload.",
            points: [
              "300 DPI Druckauflösung",
              "Korrekter Beschnitt und Sicherheitsränder",
              "PDF für Print, Bild für Ebook",
              "Cover-QA-Checkliste vor dem Upload",
            ],
          },
        ],
        faq: [
          {
            question: "Erstellt es auch Rücken und Rückseite?",
            answer:
              "Ja. Ziel ist ein voller Umschlag — Vorderseite, ein aus der Seitenzahl dimensionierter Rücken und eine Rückseite mit Platz für Klappentext und Barcode — plus ein abgestimmtes Ebook-Cover.",
          },
          {
            question: "Erfüllt das Cover die Amazon-KDP-Anforderungen?",
            answer:
              "Die Ausgabe zielt auf KDP-Regeln für Auflösung, Beschnitt und Format und enthält eine Checkliste vor dem Upload. Prüfe die finale Datei immer in der KDP-Vorschau vor der Veröffentlichung.",
          },
          {
            question: "Kann ich Cover über eine Serie hinweg konsistent halten?",
            answer:
              "Ja. Autoren- und Serien-Branding kann über Bücher hinweg konsistent bleiben, sodass ein Katalog wie ein Regal wirkt — gut für Stammleser und Auffindbarkeit.",
          },
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "book-description-generator",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "book-description-generator",
        title: "Book description generator for the Amazon KDP blurb that sells",
        description:
          "Turn your manuscript into an Amazon book description that sells. The generator writes a hook, a benefit-led blurb and KDP metadata sized for the description field.",
        eyebrow: "Book description generator",
        h1: "Write the Amazon book description that actually sells the book.",
        lead: "DraftToDone reads your manuscript and drafts a benefit-led blurb for the KDP description field, with a strong opening hook and metadata that fit the listing.",
        keywords: ["book description generator", "Amazon book blurb generator", "KDP description", "book blurb writer", "book sales copy"],
        sections: [
          { id: "what-it-writes", title: "Sales copy, not a synopsis", body: "A back-cover summary describes the plot. A blurb makes a reader want the book. The generator writes the second one.", points: ["Opening hook in the first two lines", "Benefit-led copy, not a plot recap", "Reader-facing tone for your genre", "Clear close that points to the buy"] },
          { id: "kdp-ready", title: "Built for the KDP description field", body: "Amazon shows the first lines before the More button, so the hook has to land early. Output is sized and formatted for that field.", points: ["Front-loaded for the truncated preview", "Length that fits the 4000-character limit", "Light formatting the KDP editor accepts", "Matches your title, subtitle and keywords"] },
          { id: "variants", title: "Variants you can test", body: "One blurb is a guess. The generator gives you angles to compare so you can pick what fits the book and the category.", points: ["Several hooks per title", "Short and long versions", "Tone options from plain to dramatic", "Edit any draft before you publish"] }
        ],
        faq: [
          { question: "Will a better description guarantee more sales?", answer: "No. A clear, honest blurb helps a browsing reader decide, but no software guarantees sales or rankings. Price, cover, reviews and category all play a part." },
          { question: "Does it fit the Amazon KDP description field?", answer: "Yes. The draft is front-loaded for the truncated preview and stays within the 4000-character limit, using only the light formatting the KDP editor accepts." },
          { question: "Can I edit the blurb before publishing?", answer: "Yes. Every draft is a starting point. You can rewrite any line, mix variants and adjust the tone, then paste the final version into KDP yourself." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "generateur-description-livre",
        title: "Générateur de description de livre pour le résumé KDP qui vend",
        description:
          "Transformez votre manuscrit en description Amazon qui vend : une accroche, un résumé orienté bénéfices et des métadonnées calibrées pour le champ KDP.",
        eyebrow: "Générateur de description",
        h1: "Rédigez la description Amazon qui vend vraiment le livre.",
        lead: "DraftToDone lit votre manuscrit et rédige un résumé orienté bénéfices pour le champ description de KDP, avec une accroche forte et des métadonnées cohérentes avec la fiche.",
        keywords: ["générateur de description de livre", "générateur de résumé Amazon", "description KDP", "rédaction de résumé de livre", "texte de vente livre"],
        sections: [
          { id: "texte-de-vente", title: "Un texte de vente, pas un synopsis", body: "Un résumé de quatrième décrit l'intrigue. Une description donne envie du livre. Le générateur écrit la seconde.", points: ["Accroche dès les deux premières lignes", "Texte orienté bénéfices, pas un résumé d'intrigue", "Ton adressé au lecteur de votre genre", "Conclusion claire qui oriente vers l'achat"] },
          { id: "pret-pour-kdp", title: "Pensé pour le champ description de KDP", body: "Amazon affiche les premières lignes avant le bouton Lire la suite : l'accroche doit donc porter tôt. Le texte est calibré pour ce champ.", points: ["Accroche placée avant la troncature", "Longueur compatible avec la limite de 4000 caractères", "Mise en forme légère acceptée par KDP", "Cohérent avec votre titre, sous-titre et mots-clés"] },
          { id: "variantes", title: "Des variantes à tester", body: "Une seule description est un pari. Le générateur propose des angles à comparer pour choisir ce qui convient au livre et à la catégorie.", points: ["Plusieurs accroches par titre", "Versions courte et longue", "Options de ton, du sobre au dramatique", "Modifiez chaque version avant publication"] }
        ],
        faq: [
          { question: "Une meilleure description garantit-elle plus de ventes ?", answer: "Non. Un résumé clair et honnête aide le lecteur à décider, mais aucun logiciel ne garantit les ventes ni le classement. Le prix, la couverture, les avis et la catégorie comptent aussi." },
          { question: "Le texte tient-il dans le champ description de KDP ?", answer: "Oui. Le brouillon place l'accroche avant la troncature et respecte la limite de 4000 caractères, avec uniquement la mise en forme légère acceptée par l'éditeur KDP." },
          { question: "Puis-je modifier le résumé avant publication ?", answer: "Oui. Chaque brouillon est un point de départ. Vous pouvez réécrire chaque ligne, mélanger les variantes et ajuster le ton, puis coller la version finale dans KDP vous-même." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "generatore-descrizione-libro",
        title: "Generatore di descrizione libro per la sinossi KDP che vende",
        description:
          "Trasforma il manoscritto in una descrizione Amazon che vende: un gancio, una sinossi orientata ai benefici e metadati calibrati per il campo KDP.",
        eyebrow: "Generatore di descrizione",
        h1: "Scrivi la descrizione Amazon che vende davvero il libro.",
        lead: "DraftToDone legge il tuo manoscritto e redige una sinossi orientata ai benefici per il campo descrizione di KDP, con un gancio forte e metadati coerenti con la scheda.",
        keywords: ["generatore di descrizione libro", "generatore di sinossi Amazon", "descrizione KDP", "scrittura sinossi libro", "testo di vendita libro"],
        sections: [
          { id: "testo-di-vendita", title: "Un testo di vendita, non un riassunto", body: "Un riassunto di quarta racconta la trama. Una descrizione fa venire voglia del libro. Il generatore scrive la seconda.", points: ["Gancio nelle prime due righe", "Testo orientato ai benefici, non un riassunto di trama", "Tono rivolto al lettore del tuo genere", "Chiusura chiara che porta all'acquisto"] },
          { id: "pronto-per-kdp", title: "Pensato per il campo descrizione di KDP", body: "Amazon mostra le prime righe prima del pulsante Altro: il gancio deve colpire subito. Il testo è calibrato per quel campo.", points: ["Gancio collocato prima del taglio", "Lunghezza compatibile con il limite di 4000 caratteri", "Formattazione leggera accettata da KDP", "Coerente con titolo, sottotitolo e parole chiave"] },
          { id: "varianti", title: "Varianti da testare", body: "Una sola descrizione è una scommessa. Il generatore offre angolazioni da confrontare per scegliere ciò che si adatta al libro e alla categoria.", points: ["Più ganci per titolo", "Versioni breve e lunga", "Opzioni di tono, dal sobrio al drammatico", "Modifica ogni bozza prima di pubblicare"] }
        ],
        faq: [
          { question: "Una descrizione migliore garantisce più vendite?", answer: "No. Una sinossi chiara e onesta aiuta il lettore a decidere, ma nessun software garantisce vendite o posizionamenti. Contano anche prezzo, copertina, recensioni e categoria." },
          { question: "Il testo rientra nel campo descrizione di KDP?", answer: "Sì. La bozza colloca il gancio prima del taglio e rispetta il limite di 4000 caratteri, usando solo la formattazione leggera accettata dall'editor KDP." },
          { question: "Posso modificare la sinossi prima di pubblicare?", answer: "Sì. Ogni bozza è un punto di partenza. Puoi riscrivere ogni riga, combinare le varianti e regolare il tono, poi incollare la versione finale in KDP da solo." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "buchbeschreibung-generator",
        title: "Buchbeschreibung-Generator für den KDP-Klappentext der verkauft",
        description:
          "Mach aus deinem Manuskript eine Amazon-Beschreibung die verkauft: ein Aufhänger, ein nutzenorientierter Klappentext und Metadaten für das KDP-Feld.",
        eyebrow: "Buchbeschreibung-Generator",
        h1: "Schreib die Amazon-Beschreibung, die das Buch wirklich verkauft.",
        lead: "DraftToDone liest dein Manuskript und entwirft einen nutzenorientierten Klappentext für das KDP-Beschreibungsfeld, mit starkem Aufhänger und stimmigen Metadaten.",
        keywords: ["Buchbeschreibung-Generator", "Amazon Klappentext Generator", "KDP Beschreibung", "Klappentext schreiben", "Verkaufstext Buch"],
        sections: [
          { id: "verkaufstext", title: "Verkaufstext, keine Inhaltsangabe", body: "Eine Inhaltsangabe beschreibt die Handlung. Ein Klappentext weckt Lust auf das Buch. Der Generator schreibt das Zweite.", points: ["Aufhänger in den ersten zwei Zeilen", "Nutzenorientiert statt Handlung nacherzählt", "Leseransprache für dein Genre", "Klarer Abschluss, der zum Kauf führt"] },
          { id: "kdp-bereit", title: "Gebaut für das KDP-Beschreibungsfeld", body: "Amazon zeigt die ersten Zeilen vor dem Mehr-Button: der Aufhänger muss früh sitzen. Der Text ist auf dieses Feld zugeschnitten.", points: ["Aufhänger vor dem Abschnitt platziert", "Länge innerhalb des 4000-Zeichen-Limits", "Leichte Formatierung, die KDP akzeptiert", "Passt zu Titel, Untertitel und Keywords"] },
          { id: "varianten", title: "Varianten zum Testen", body: "Ein einziger Klappentext ist geraten. Der Generator liefert Blickwinkel zum Vergleichen, damit du das Passende für Buch und Kategorie wählst.", points: ["Mehrere Aufhänger pro Titel", "Kurze und lange Fassung", "Tonoptionen von sachlich bis dramatisch", "Jeden Entwurf vor dem Veröffentlichen anpassen"] }
        ],
        faq: [
          { question: "Garantiert eine bessere Beschreibung mehr Verkäufe?", answer: "Nein. Ein klarer, ehrlicher Klappentext hilft beim Entscheiden, aber keine Software garantiert Verkäufe oder Rankings. Preis, Cover, Rezensionen und Kategorie zählen ebenso." },
          { question: "Passt der Text in das Amazon-KDP-Beschreibungsfeld?", answer: "Ja. Der Entwurf stellt den Aufhänger vor den Abschnitt und bleibt im 4000-Zeichen-Limit, mit nur der leichten Formatierung, die der KDP-Editor akzeptiert." },
          { question: "Kann ich den Klappentext vor dem Veröffentlichen bearbeiten?", answer: "Ja. Jeder Entwurf ist ein Ausgangspunkt. Du kannst jede Zeile umschreiben, Varianten mischen und den Ton anpassen und die finale Fassung selbst in KDP einfügen." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "book-title-generator",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "book-title-generator",
        title: "Book title generator for KDP titles, subtitles and series",
        description:
          "Generate clickable, keyword-aware book titles and subtitles for Amazon KDP with AI. Test title ideas built for search and your category before you publish.",
        eyebrow: "Book title generator",
        h1: "Generate book titles and subtitles built to be clicked and found.",
        lead: "DraftToDone turns your topic into clear, keyword-aware title and subtitle options for Amazon KDP. You get ideas shaped by your category, not random slogans.",
        keywords: ["book title generator", "AI book title ideas", "subtitle generator", "KDP title", "book name generator"],
        sections: [
          { id: "title-and-subtitle", title: "Title and subtitle, working together", body: "A strong KDP listing needs a short hook and a subtitle that does the search work. We generate both as one pair.", points: ["Main title kept short and readable", "Subtitle that carries the category keywords", "Variants for fiction and nonfiction tone", "Pairs you can compare side by side"] },
          { id: "keyword-aware", title: "Keyword-aware, not keyword-stuffed", body: "Each option is shaped around how readers actually search your niche, while staying natural enough to read out loud.", points: ["Built from your topic and target category", "Phrases that match real reader intent", "Length checked against KDP field limits", "No keyword spam or fake urgency"] },
          { id: "part-of-the-pipeline", title: "Part of one publishing pipeline", body: "The title is generated alongside your manuscript, cover and metadata, so the whole product stays consistent.", points: ["Title aligned with the finished cover", "Matches your description and keywords", "Consistent across ebook and paperback", "Held to the same catalog quality gate"] }
        ],
        faq: [
          { question: "Will a generated title guarantee more sales?", answer: "No. A clearer, keyword-aware title can help discovery, but sales depend on the book, the cover, reviews and your market. We do not promise rankings or revenue." },
          { question: "Can I edit the suggested titles?", answer: "Yes. Every title and subtitle is a starting point you can refine, rewrite or replace before you publish on KDP." },
          { question: "Are the titles safe to use on Amazon?", answer: "They are written as original suggestions, but you stay responsible for checking trademark and KDP title rules. Avoid claiming another book series or a protected brand name." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "generateur-titre-livre",
        title: "Générateur de titre de livre pour titres et sous-titres KDP",
        description:
          "Générez des titres et sous-titres de livres accrocheurs et optimisés pour Amazon KDP avec l'IA. Testez vos idées pensées pour la recherche avant de publier.",
        eyebrow: "Générateur de titre",
        h1: "Générez des titres et sous-titres faits pour être cliqués et trouvés.",
        lead: "DraftToDone transforme votre sujet en titres et sous-titres clairs et optimisés pour Amazon KDP. Vous obtenez des idées adaptées à votre catégorie, pas des slogans au hasard.",
        keywords: ["générateur de titre de livre", "idées de titre IA", "générateur de sous-titre", "titre KDP", "trouver un titre de livre"],
        sections: [
          { id: "titre-et-sous-titre", title: "Titre et sous-titre, ensemble", body: "Une bonne fiche KDP a besoin d'une accroche courte et d'un sous-titre qui porte la recherche. Nous générons les deux comme une paire.", points: ["Titre principal court et lisible", "Sous-titre qui porte les mots-clés de la catégorie", "Variantes pour la fiction et la non-fiction", "Paires comparables côte à côte"] },
          { id: "axe-mots-cles", title: "Optimisé sans bourrage de mots-clés", body: "Chaque option suit la façon dont les lecteurs cherchent dans votre niche, tout en restant assez naturelle pour être lue à voix haute.", points: ["Construit à partir de votre sujet et de votre catégorie", "Expressions proches de l'intention réelle des lecteurs", "Longueur vérifiée selon les champs KDP", "Aucun bourrage ni fausse urgence"] },
          { id: "dans-le-pipeline", title: "Intégré à un seul pipeline d'édition", body: "Le titre est généré avec votre manuscrit, votre couverture et vos métadonnées, pour garder un produit cohérent.", points: ["Titre aligné avec la couverture finale", "Cohérent avec la description et les mots-clés", "Identique en ebook et en broché", "Soumis au même contrôle qualité de catalogue"] }
        ],
        faq: [
          { question: "Un titre généré garantit-il plus de ventes ?", answer: "Non. Un titre plus clair et optimisé peut aider la visibilité, mais les ventes dépendent du livre, de la couverture, des avis et de votre marché. Nous ne promettons ni classement ni revenu." },
          { question: "Puis-je modifier les titres proposés ?", answer: "Oui. Chaque titre et sous-titre est un point de départ que vous pouvez affiner, réécrire ou remplacer avant de publier sur KDP." },
          { question: "Les titres sont-ils sûrs à utiliser sur Amazon ?", answer: "Ils sont rédigés comme des suggestions originales, mais vous restez responsable du respect des marques et des règles de titre KDP. Évitez de reprendre une autre série ou une marque protégée." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "generatore-titolo-libro",
        title: "Generatore di titoli per libri con titoli e sottotitoli KDP",
        description:
          "Genera titoli e sottotitoli accattivanti e ottimizzati per Amazon KDP con l'IA. Prova le tue idee pensate per la ricerca e la categoria prima di pubblicare.",
        eyebrow: "Generatore di titoli",
        h1: "Genera titoli e sottotitoli fatti per essere cliccati e trovati.",
        lead: "DraftToDone trasforma il tuo argomento in titoli e sottotitoli chiari e ottimizzati per Amazon KDP. Ottieni idee adatte alla tua categoria, non slogan casuali.",
        keywords: ["generatore di titoli per libri", "idee per titoli con IA", "generatore di sottotitoli", "titolo KDP", "trovare un titolo di libro"],
        sections: [
          { id: "titolo-e-sottotitolo", title: "Titolo e sottotitolo, insieme", body: "Una buona scheda KDP ha bisogno di un gancio breve e di un sottotitolo che faccia il lavoro di ricerca. Generiamo entrambi come una coppia.", points: ["Titolo principale breve e leggibile", "Sottotitolo che porta le parole chiave della categoria", "Varianti per narrativa e saggistica", "Coppie confrontabili una accanto all'altra"] },
          { id: "attento-alle-keyword", title: "Ottimizzato senza riempire di parole chiave", body: "Ogni opzione segue il modo in cui i lettori cercano nella tua nicchia, restando abbastanza naturale da leggere ad alta voce.", points: ["Costruito dal tuo argomento e dalla tua categoria", "Frasi vicine all'intento reale dei lettori", "Lunghezza verificata sui campi KDP", "Nessun riempimento né falsa urgenza"] },
          { id: "parte-del-pipeline", title: "Parte di un unico pipeline editoriale", body: "Il titolo viene generato insieme al manoscritto, alla copertina e ai metadati, così il prodotto resta coerente.", points: ["Titolo allineato alla copertina finita", "Coerente con descrizione e parole chiave", "Uguale in ebook e cartaceo", "Sottoposto allo stesso controllo qualità del catalogo"] }
        ],
        faq: [
          { question: "Un titolo generato garantisce più vendite?", answer: "No. Un titolo più chiaro e ottimizzato può aiutare la scoperta, ma le vendite dipendono dal libro, dalla copertina, dalle recensioni e dal tuo mercato. Non promettiamo posizionamenti né ricavi." },
          { question: "Posso modificare i titoli proposti?", answer: "Sì. Ogni titolo e sottotitolo è un punto di partenza che puoi affinare, riscrivere o sostituire prima di pubblicare su KDP." },
          { question: "I titoli sono sicuri da usare su Amazon?", answer: "Sono scritti come suggerimenti originali, ma resti responsabile del controllo dei marchi e delle regole KDP sui titoli. Evita di riprendere un'altra serie o un marchio protetto." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "buchtitel-generator",
        title: "Buchtitel-Generator für KDP-Titel, Untertitel und Reihen",
        description:
          "Erzeuge klickstarke, keyword-bewusste Buchtitel und Untertitel für Amazon KDP mit KI. Teste deine Titelideen passend zur Kategorie, bevor du veröffentlichst.",
        eyebrow: "Buchtitel-Generator",
        h1: "Erzeuge Buchtitel und Untertitel, die geklickt und gefunden werden.",
        lead: "DraftToDone macht aus deinem Thema klare, keyword-bewusste Titel und Untertitel für Amazon KDP. Du bekommst Ideen passend zu deiner Kategorie, keine zufälligen Slogans.",
        keywords: ["Buchtitel-Generator", "KI Buchtitel Ideen", "Untertitel Generator", "KDP Titel", "Buchtitel finden"],
        sections: [
          { id: "titel-und-untertitel", title: "Titel und Untertitel zusammen", body: "Ein gutes KDP-Listing braucht einen kurzen Haken und einen Untertitel, der die Suche trägt. Wir erzeugen beides als Paar.", points: ["Haupttitel kurz und gut lesbar", "Untertitel trägt die Kategorie-Keywords", "Varianten für Belletristik und Sachbuch", "Paare, die du direkt vergleichen kannst"] },
          { id: "keyword-bewusst", title: "Keyword-bewusst, ohne Keyword-Stuffing", body: "Jede Option folgt der Art, wie Leser in deiner Nische wirklich suchen, und bleibt dabei natürlich genug zum Vorlesen.", points: ["Aufgebaut aus deinem Thema und deiner Kategorie", "Formulierungen nah an echter Leserintention", "Länge gegen die KDP-Felder geprüft", "Kein Keyword-Spam und keine falsche Dringlichkeit"] },
          { id: "teil-der-pipeline", title: "Teil einer einzigen Publishing-Pipeline", body: "Der Titel entsteht zusammen mit Manuskript, Cover und Metadaten, damit das ganze Produkt stimmig bleibt.", points: ["Titel passend zum fertigen Cover", "Stimmig mit Beschreibung und Keywords", "Gleich bei E-Book und Taschenbuch", "Gleiches Katalog-Qualitätstor wie alles andere"] }
        ],
        faq: [
          { question: "Garantiert ein erzeugter Titel mehr Verkäufe?", answer: "Nein. Ein klarerer, keyword-bewusster Titel kann die Sichtbarkeit verbessern, doch Verkäufe hängen vom Buch, vom Cover, von Rezensionen und vom Markt ab. Wir versprechen keine Rankings oder Umsätze." },
          { question: "Kann ich die vorgeschlagenen Titel bearbeiten?", answer: "Ja. Jeder Titel und Untertitel ist ein Ausgangspunkt, den du vor der Veröffentlichung bei KDP verfeinern, umschreiben oder ersetzen kannst." },
          { question: "Sind die Titel sicher für Amazon?", answer: "Sie sind als eigenständige Vorschläge formuliert, aber du bleibst für die Prüfung von Marken und KDP-Titelregeln verantwortlich. Übernimm keine fremde Reihe und keinen geschützten Markennamen." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "ai-book-generator",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "ai-book-generator",
        title: "AI book generator that writes a full manuscript for KDP",
        description:
          "Generate a full book with AI: outline, chapters and a consistent voice from a single brief, then hand the finished manuscript to cover and KDP metadata.",
        eyebrow: "AI book generator",
        h1: "Generate a full book manuscript with AI, from outline to last chapter.",
        lead: "DraftToDone turns one brief into a complete manuscript — outline, chapters, length and a steady voice — so you start the cover and metadata stage with a finished book, not a blank page.",
        keywords: ["AI book generator", "generate a book with AI", "AI book writer", "write a book with AI", "AI manuscript generator"],
        sections: [
          { id: "outline-to-manuscript", title: "From brief to a complete manuscript", body: "The generator starts with your topic, reader and length target, builds a working outline, then writes every chapter so the book holds together end to end.", points: ["Topic, reader and promise brief", "Structured chapter outline first", "Full chapter drafting, not snippets", "Target length and word count control"] },
          { id: "voice-and-consistency", title: "One voice across the whole book", body: "A generated book fails when chapters drift in tone or repeat themselves. The pipeline keeps voice, terminology and structure consistent across the manuscript.", points: ["Consistent tone and reading level", "Fiction and non-fiction structures", "Continuity across chapters", "Reduced repetition between sections"] },
          { id: "handoff", title: "A manuscript ready for cover and metadata", body: "Generating text is only the first step. The finished manuscript flows into the cover, metadata and quality stages so the book becomes a complete KDP product.", points: ["Clean chapter structure to export", "Hands off to cover generation", "Feeds title, subtitle and keywords", "Enters catalog quality review"] }
        ],
        faq: [
          { question: "Does it write the entire book or just an outline?", answer: "It generates both. You start with an outline, then the pipeline drafts the full chapters toward your target length, rather than returning short fragments." },
          { question: "Can I publish the AI output as-is on Amazon KDP?", answer: "No. You should read and edit the manuscript yourself, and disclose AI use where KDP requires it. The generator gives you a strong draft, not a final book." },
          { question: "How is this different from the full publishing workflow?", answer: "This page is the manuscript stage, focused on outline, chapters and voice. The broader workflow then adds the cover, metadata and quality gates on top of that book." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "generateur-livre-ia",
        title: "Générateur de livre IA qui rédige un manuscrit complet KDP",
        description:
          "Générez un livre complet avec l'IA : plan, chapitres et voix cohérente depuis un brief, puis transmettez le manuscrit fini à la couverture et aux métadonnées KDP.",
        eyebrow: "Générateur de livre IA",
        h1: "Générez un manuscrit de livre complet avec l'IA, du plan au dernier chapitre.",
        lead: "DraftToDone transforme un brief en manuscrit complet — plan, chapitres, longueur et voix régulière — pour aborder la couverture et les métadonnées avec un livre fini, pas une page blanche.",
        keywords: ["générateur livre IA", "générer un livre avec IA", "écrire un livre avec IA", "rédacteur de livre IA", "générateur de manuscrit IA"],
        sections: [
          { id: "outline-to-manuscript", title: "Du brief au manuscrit complet", body: "Le générateur part de votre sujet, lecteur et longueur cible, construit un plan de travail, puis rédige chaque chapitre pour que le livre tienne de bout en bout.", points: ["Brief sujet, lecteur et promesse", "Plan de chapitres structuré d'abord", "Rédaction de chapitres entiers", "Contrôle de la longueur visée"] },
          { id: "voice-and-consistency", title: "Une voix sur tout le livre", body: "Un livre généré échoue quand les chapitres dérivent ou se répètent. Le pipeline garde voix, terminologie et structure cohérentes dans tout le manuscrit.", points: ["Ton et niveau de lecture cohérents", "Structures fiction et non-fiction", "Continuité entre les chapitres", "Moins de répétitions entre sections"] },
          { id: "handoff", title: "Un manuscrit prêt pour couverture et métadonnées", body: "Générer le texte n'est que la première étape. Le manuscrit fini alimente la couverture, les métadonnées et la qualité pour devenir un produit KDP complet.", points: ["Structure de chapitres propre à exporter", "Transmis à la génération de couverture", "Nourrit titre, sous-titre et mots-clés", "Entre en revue qualité catalogue"] }
        ],
        faq: [
          { question: "Rédige-t-il tout le livre ou juste un plan ?", answer: "Les deux. Vous partez d'un plan, puis le pipeline rédige les chapitres complets vers la longueur cible, au lieu de renvoyer de courts fragments." },
          { question: "Puis-je publier la sortie IA telle quelle sur Amazon KDP ?", answer: "Non. Vous devez relire et corriger le manuscrit vous-même, et déclarer l'usage de l'IA là où KDP l'exige. Le générateur fournit un bon brouillon, pas un livre final." },
          { question: "En quoi est-ce différent du workflow de publication complet ?", answer: "Cette page est l'étape manuscrit, centrée sur plan, chapitres et voix. Le workflow plus large ajoute ensuite couverture, métadonnées et portes qualité sur ce livre." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "generatore-libro-ia",
        title: "Generatore di libri IA che scrive un manoscritto completo KDP",
        description:
          "Genera un libro completo con l'IA: outline, capitoli e una voce coerente da un brief, poi passa il manoscritto finito a copertina e metadati KDP.",
        eyebrow: "Generatore di libri IA",
        h1: "Genera un manoscritto di libro completo con l'IA, dall'outline all'ultimo capitolo.",
        lead: "DraftToDone trasforma un brief in un manoscritto completo — outline, capitoli, lunghezza e voce costante — così affronti copertina e metadati con un libro finito, non una pagina bianca.",
        keywords: ["generatore libri IA", "generare un libro con IA", "scrivere un libro con IA", "scrittore di libri IA", "generatore di manoscritti IA"],
        sections: [
          { id: "outline-to-manuscript", title: "Dal brief al manoscritto completo", body: "Il generatore parte da argomento, lettore e lunghezza obiettivo, costruisce un outline di lavoro, poi scrive ogni capitolo perché il libro regga dall'inizio alla fine.", points: ["Brief di argomento, lettore e promessa", "Outline dei capitoli prima di tutto", "Stesura di capitoli interi", "Controllo della lunghezza obiettivo"] },
          { id: "voice-and-consistency", title: "Una voce in tutto il libro", body: "Un libro generato fallisce quando i capitoli cambiano tono o si ripetono. Il pipeline mantiene voce, terminologia e struttura coerenti in tutto il manoscritto.", points: ["Tono e livello di lettura coerenti", "Strutture fiction e non-fiction", "Continuità tra i capitoli", "Meno ripetizioni tra le sezioni"] },
          { id: "handoff", title: "Un manoscritto pronto per copertina e metadati", body: "Generare il testo è solo il primo passo. Il manoscritto finito alimenta copertina, metadati e qualità per diventare un prodotto KDP completo.", points: ["Struttura di capitoli pulita da esportare", "Passa alla generazione della copertina", "Alimenta titolo, sottotitolo e keyword", "Entra nella revisione qualità catalogo"] }
        ],
        faq: [
          { question: "Scrive l'intero libro o solo un outline?", answer: "Entrambi. Parti da un outline, poi il pipeline stende i capitoli completi verso la lunghezza obiettivo, invece di restituire brevi frammenti." },
          { question: "Posso pubblicare l'output IA così com'è su Amazon KDP?", answer: "No. Devi leggere e correggere il manoscritto, e dichiarare l'uso dell'IA dove KDP lo richiede. Il generatore offre una buona bozza, non un libro finale." },
          { question: "In cosa differisce dal workflow di pubblicazione completo?", answer: "Questa pagina è la fase manoscritto, centrata su outline, capitoli e voce. Il workflow più ampio aggiunge poi copertina, metadati e gate qualità su quel libro." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "ki-buch-generator",
        title: "KI-Buchgenerator, der ein komplettes KDP-Manuskript schreibt",
        description:
          "Erstelle ein komplettes Buch mit KI: Outline, Kapitel und eine konsistente Stimme aus einem Brief, dann geht das fertige Manuskript an Cover und KDP-Metadaten.",
        eyebrow: "KI-Buchgenerator",
        h1: "Erstelle ein komplettes Buchmanuskript mit KI, von der Outline bis zum letzten Kapitel.",
        lead: "DraftToDone macht aus einem Brief ein komplettes Manuskript — Outline, Kapitel, Länge und eine ruhige Stimme — damit du Cover und Metadaten mit einem fertigen Buch statt einer leeren Seite beginnst.",
        keywords: ["KI Buch Generator", "Buch mit KI erstellen", "Buch mit KI schreiben", "KI Buch Autor", "KI Manuskript Generator"],
        sections: [
          { id: "outline-to-manuscript", title: "Vom Brief zum kompletten Manuskript", body: "Der Generator startet mit Thema, Leser und Ziellänge, baut eine Arbeits-Outline und schreibt dann jedes Kapitel, damit das Buch von Anfang bis Ende zusammenhält.", points: ["Brief zu Thema, Leser und Versprechen", "Strukturierte Kapitel-Outline zuerst", "Volle Kapitel statt Schnipsel", "Kontrolle über Ziellänge und Wortzahl"] },
          { id: "voice-and-consistency", title: "Eine Stimme im ganzen Buch", body: "Ein generiertes Buch scheitert, wenn Kapitel im Ton abweichen oder sich wiederholen. Die Pipeline hält Stimme, Terminologie und Struktur im Manuskript konsistent.", points: ["Konsistenter Ton und Leseniveau", "Strukturen für Fiction und Sachbuch", "Kontinuität über Kapitel hinweg", "Weniger Wiederholungen zwischen Abschnitten"] },
          { id: "handoff", title: "Ein Manuskript bereit für Cover und Metadaten", body: "Text zu generieren ist nur der erste Schritt. Das fertige Manuskript fließt in Cover, Metadaten und Qualität, damit das Buch ein vollständiges KDP-Produkt wird.", points: ["Saubere Kapitelstruktur zum Export", "Übergabe an die Cover-Generierung", "Speist Titel, Untertitel und Keywords", "Geht in die Katalog-Qualitätsprüfung"] }
        ],
        faq: [
          { question: "Schreibt es das ganze Buch oder nur eine Outline?", answer: "Beides. Du startest mit einer Outline, dann schreibt die Pipeline die vollen Kapitel bis zur Ziellänge, statt nur kurze Fragmente zurückzugeben." },
          { question: "Kann ich die KI-Ausgabe unverändert auf Amazon KDP veröffentlichen?", answer: "Nein. Du solltest das Manuskript selbst lesen und überarbeiten und KI-Nutzung dort offenlegen, wo KDP es verlangt. Der Generator liefert einen starken Entwurf, kein fertiges Buch." },
          { question: "Wie unterscheidet sich das vom kompletten Publishing-Workflow?", answer: "Diese Seite ist die Manuskript-Phase, fokussiert auf Outline, Kapitel und Stimme. Der breitere Workflow ergänzt danach Cover, Metadaten und Qualitätsgates auf diesem Buch." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "kdp-keyword-tool",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "kdp-keyword-tool",
        title: "KDP keyword tool for the 7 backend slots and categories",
        description:
          "Research Amazon book keywords, fill the 7 backend keyword slots, and check category fit. A KDP keyword tool built into one publishing pipeline.",
        eyebrow: "KDP keyword tool",
        h1: "Find and fill every keyword a book should target on Amazon.",
        lead: "Research Kindle and print keywords, then place the strongest seven in the backend slots that KDP gives you. Category fit is checked alongside, so the metadata reads as one coherent listing.",
        keywords: ["KDP keyword tool", "Amazon book keyword research", "Kindle keyword research", "book keyword finder", "7 keyword slots"],
        sections: [
          { id: "seven-backend-slots", title: "Built around the 7 keyword slots", body: "KDP gives you seven backend keyword fields, and each one should earn its place. The tool drafts candidates, removes overlap with your title and subtitle, and fits the strongest terms into the slots that count.", points: ["One ranked shortlist mapped to the seven backend fields", "No wasted words repeating the title or subtitle", "Search phrases readers actually type, not single nouns", "Each slot kept inside KDP character limits"] },
          { id: "category-and-relevancy", title: "Keyword and category fit, read together", body: "Keywords and categories work as a pair on Amazon. The tool reviews your shortlist against likely browse categories so the listing stays relevant rather than scattered across unrelated shelves.", points: ["Candidate categories matched to your keyword theme", "Relevancy checked so terms reflect the actual book", "Flags for terms too broad to rank against", "Notes where a niche category beats a crowded one"] },
          { id: "inside-the-pipeline", title: "Part of one publishing pipeline", body: "Keyword research is not a separate tab here. It runs inside the same controlled pipeline that produces the manuscript, cover, and the rest of the metadata, so everything points the same direction.", points: ["Keywords align with the generated title and description", "Metadata produced as one set, not stitched together", "Quality gates check the listing before you export", "Built for catalog quality, not keyword stuffing"] }
        ],
        faq: [
          { question: "Does this fill all seven KDP keyword slots for me?", answer: "It produces a ranked shortlist mapped to the seven backend fields, trimmed to fit KDP character limits. You review and approve the final selection before anything is published." },
          { question: "Will the right keywords guarantee sales or a top ranking?", answer: "No. Good keyword choice helps the right readers discover your book, but it does not guarantee sales or rankings. Cover, writing, pricing, reviews, and demand all play a part." },
          { question: "How is this different from your keyword how-to guides?", answer: "The guides explain how to choose KDP keywords by hand. This is the tool that does the research and drafts the slots inside the publishing pipeline, ready for your review." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "outil-mots-cles-kdp",
        title: "Outil mots-clés KDP pour les 7 champs et les catégories",
        description:
          "Recherchez les mots-clés de votre livre Amazon, remplissez les 7 champs backend et vérifiez la catégorie. Un outil mots-clés KDP intégré au pipeline.",
        eyebrow: "Outil mots-clés KDP",
        h1: "Trouvez et placez chaque mot-clé que votre livre doit viser sur Amazon.",
        lead: "Recherchez les mots-clés Kindle et papier, puis placez les sept plus forts dans les champs backend prévus par KDP. La catégorie est vérifiée en parallèle, pour une fiche cohérente.",
        keywords: ["outil mots-clés KDP", "recherche mots-clés livre Amazon", "recherche mots-clés Kindle", "trouver mots-clés livre", "7 champs mots-clés"],
        sections: [
          { id: "sept-champs-backend", title: "Pensé pour les 7 champs de mots-clés", body: "KDP propose sept champs de mots-clés backend, et chacun doit justifier sa place. L'outil propose des candidats, retire les doublons avec votre titre et sous-titre, puis place les meilleurs termes.", points: ["Une liste classée reliée aux sept champs backend", "Aucun mot gaspillé à répéter le titre ou le sous-titre", "Des expressions réellement tapées par les lecteurs", "Chaque champ tenu dans les limites de caractères KDP"] },
          { id: "categorie-et-pertinence", title: "Mots-clés et catégorie, lus ensemble", body: "Sur Amazon, mots-clés et catégories forment une paire. L'outil compare votre liste aux catégories de navigation probables, pour une fiche pertinente plutôt que dispersée.", points: ["Catégories candidates reliées à votre thème de mots-clés", "Pertinence vérifiée pour refléter le vrai livre", "Alertes sur les termes trop larges pour se positionner", "Notes quand une niche vaut mieux qu'une catégorie saturée"] },
          { id: "dans-le-pipeline", title: "Intégré à un seul pipeline d'édition", body: "La recherche de mots-clés n'est pas un onglet à part. Elle tourne dans le même pipeline contrôlé qui produit le manuscrit, la couverture et le reste des métadonnées.", points: ["Mots-clés alignés sur le titre et la description générés", "Métadonnées produites en un seul ensemble cohérent", "Contrôles qualité sur la fiche avant l'export", "Conçu pour la qualité catalogue, pas le bourrage"] }
        ],
        faq: [
          { question: "L'outil remplit-il les sept champs de mots-clés KDP pour moi ?", answer: "Il produit une liste classée reliée aux sept champs backend, ajustée aux limites de caractères KDP. Vous validez la sélection finale avant toute publication." },
          { question: "Les bons mots-clés garantissent-ils des ventes ou un classement ?", answer: "Non. Un bon choix de mots-clés aide les bons lecteurs à vous trouver, mais ne garantit ni ventes ni classement. Couverture, texte, prix, avis et demande comptent aussi." },
          { question: "Quelle différence avec vos guides pratiques sur les mots-clés ?", answer: "Les guides expliquent comment choisir les mots-clés KDP à la main. Ceci est l'outil qui fait la recherche et prépare les champs dans le pipeline, prêts à valider." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "strumento-keyword-kdp",
        title: "Strumento keyword KDP per i 7 campi e le categorie",
        description:
          "Cerca le keyword del tuo libro Amazon, riempi i 7 campi backend e verifica la categoria. Uno strumento keyword KDP integrato nella pipeline di pubblicazione.",
        eyebrow: "Strumento keyword KDP",
        h1: "Trova e inserisci ogni keyword che il tuo libro deve puntare su Amazon.",
        lead: "Cerca le keyword Kindle e cartacee, poi inserisci le sette più forti nei campi backend previsti da KDP. La categoria viene verificata in parallelo, per una scheda coerente.",
        keywords: ["strumento keyword KDP", "ricerca keyword libro Amazon", "ricerca keyword Kindle", "trova keyword libro", "7 campi keyword"],
        sections: [
          { id: "sette-campi-backend", title: "Pensato per i 7 campi keyword", body: "KDP offre sette campi keyword backend, e ognuno deve meritare il suo posto. Lo strumento propone candidati, elimina le sovrapposizioni con titolo e sottotitolo e inserisce i termini migliori.", points: ["Una lista ordinata collegata ai sette campi backend", "Nessuna parola sprecata a ripetere titolo o sottotitolo", "Frasi che i lettori digitano davvero, non singoli nomi", "Ogni campo entro i limiti di caratteri di KDP"] },
          { id: "categoria-e-pertinenza", title: "Keyword e categoria, lette insieme", body: "Su Amazon keyword e categorie formano una coppia. Lo strumento confronta la tua lista con le probabili categorie di navigazione, per una scheda pertinente e non dispersa.", points: ["Categorie candidate collegate al tuo tema di keyword", "Pertinenza verificata per riflettere il libro reale", "Avvisi sui termini troppo ampi per posizionarsi", "Note quando una nicchia batte una categoria affollata"] },
          { id: "dentro-la-pipeline", title: "Parte di una sola pipeline editoriale", body: "La ricerca keyword non è una scheda separata. Gira dentro la stessa pipeline controllata che produce manoscritto, copertina e il resto dei metadati.", points: ["Keyword allineate al titolo e alla descrizione generati", "Metadati prodotti come un insieme unico e coerente", "Controlli di qualità sulla scheda prima dell'export", "Pensato per la qualità di catalogo, non il riempimento"] }
        ],
        faq: [
          { question: "Lo strumento riempie tutti e sette i campi keyword KDP?", answer: "Produce una lista ordinata collegata ai sette campi backend, adattata ai limiti di caratteri di KDP. Tu rivedi e approvi la selezione finale prima della pubblicazione." },
          { question: "Le keyword giuste garantiscono vendite o un posizionamento?", answer: "No. Una buona scelta di keyword aiuta i lettori giusti a trovarti, ma non garantisce vendite né posizionamento. Contano anche copertina, testo, prezzo, recensioni e domanda." },
          { question: "In cosa differisce dalle vostre guide pratiche sulle keyword?", answer: "Le guide spiegano come scegliere le keyword KDP a mano. Questo è lo strumento che fa la ricerca e prepara i campi dentro la pipeline, pronti da rivedere." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "kdp-keyword-tool",
        title: "KDP-Keyword-Tool für die 7 Felder und Kategorien",
        description:
          "Recherchiere Amazon-Buch-Keywords, fülle die 7 Backend-Felder und prüfe die Kategorie. Ein KDP-Keyword-Tool, eingebettet in eine Publishing-Pipeline.",
        eyebrow: "KDP-Keyword-Tool",
        h1: "Finde und setze jedes Keyword, das dein Buch bei Amazon treffen soll.",
        lead: "Recherchiere Kindle- und Print-Keywords und setze die sieben stärksten in die Backend-Felder, die KDP vorgibt. Die Kategorie wird parallel geprüft, für ein stimmiges Listing.",
        keywords: ["KDP Keyword Tool", "Amazon Buch Keyword Recherche", "Kindle Keyword Recherche", "Buch Keyword Finder", "7 Keyword Felder"],
        sections: [
          { id: "sieben-backend-felder", title: "Gebaut für die 7 Keyword-Felder", body: "KDP bietet sieben Backend-Keyword-Felder, und jedes sollte seinen Platz verdienen. Das Tool entwirft Kandidaten, entfernt Überschneidungen mit Titel und Untertitel und setzt die stärksten Begriffe.", points: ["Eine sortierte Liste passend zu den sieben Backend-Feldern", "Keine verschwendeten Wörter, die Titel oder Untertitel wiederholen", "Suchphrasen, die Leser wirklich tippen, keine Einzelwörter", "Jedes Feld innerhalb der KDP-Zeichengrenzen"] },
          { id: "kategorie-und-relevanz", title: "Keyword und Kategorie, zusammen gelesen", body: "Bei Amazon bilden Keywords und Kategorien ein Paar. Das Tool gleicht deine Liste mit wahrscheinlichen Browse-Kategorien ab, damit das Listing relevant bleibt statt verstreut.", points: ["Kandidaten-Kategorien passend zu deinem Keyword-Thema", "Relevanz geprüft, damit Begriffe das echte Buch zeigen", "Hinweise auf Begriffe, die zu breit zum Ranken sind", "Notizen, wo eine Nische eine überfüllte Kategorie schlägt"] },
          { id: "in-der-pipeline", title: "Teil einer einzigen Publishing-Pipeline", body: "Keyword-Recherche ist hier kein eigener Tab. Sie läuft in derselben kontrollierten Pipeline, die Manuskript, Cover und die übrigen Metadaten erzeugt.", points: ["Keywords stimmen mit erzeugtem Titel und Beschreibung überein", "Metadaten als ein Satz erstellt, nicht zusammengeflickt", "Qualitätsprüfungen am Listing vor dem Export", "Gebaut für Katalogqualität, nicht für Keyword-Stuffing"] }
        ],
        faq: [
          { question: "Füllt das Tool alle sieben KDP-Keyword-Felder für mich?", answer: "Es erstellt eine sortierte Liste passend zu den sieben Backend-Feldern, auf die KDP-Zeichengrenzen zugeschnitten. Du prüfst und bestätigst die Auswahl vor der Veröffentlichung." },
          { question: "Garantieren die richtigen Keywords Verkäufe oder ein Ranking?", answer: "Nein. Eine gute Keyword-Wahl hilft den richtigen Lesern, dich zu finden, garantiert aber weder Verkäufe noch Rankings. Auch Cover, Text, Preis, Rezensionen und Nachfrage zählen." },
          { question: "Worin unterscheidet es sich von euren Keyword-Anleitungen?", answer: "Die Anleitungen erklären, wie man KDP-Keywords von Hand wählt. Dies ist das Tool, das die Recherche macht und die Felder in der Pipeline vorbereitet, bereit zur Prüfung." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "best-ai-book-generator",
    updated: "2026-07-04",
    translations: {
      en: {
        slug: "best-ai-book-generator",
        title: "Best AI book generator for KDP publishers who need the whole package",
        description:
          "Choosing the best AI book generator? Compare what matters for KDP: manuscript quality, cover workflow, metadata, pricing, review gates and export readiness.",
        eyebrow: "Best AI book generator",
        h1: "The best AI book generator is the one that ships the whole KDP package.",
        lead: "Most AI writing tools stop at text. KDP publishers need more: a coherent manuscript, cover direction, title, description, keywords and quality checks before upload. This page shows the buying criteria and where DraftToDone fits.",
        keywords: ["best AI book generator", "AI book generator for KDP", "AI book writing software", "AI publishing software", "publish a book with AI"],
        sections: [
          { id: "criteria", title: "Judge the full publishing job", body: "A book generator should be judged by the finished product, not by how impressive one chapter looks in isolation.", points: ["Complete manuscript, not only a draft sample", "Cover and metadata included in the same workflow", "Export path for KDP decisions", "Clear limits: no sales or ranking guarantees"] },
          { id: "workflow", title: "Look for repeatable quality gates", body: "The strongest tool is the one that makes every book easier to inspect, revise and package before it reaches Amazon.", points: ["Structure checks before generation", "Metadata aligned with the actual book", "Cover readiness before upload", "Catalog notes for future refreshes"] },
          { id: "fit", title: "Where DraftToDone fits", body: "DraftToDone is built for publishers who want a controlled pipeline from niche brief to publishable KDP package, not a blank chat window.", points: ["Manuscript, cover and KDP metadata as one package", "Book-credit pricing tied to finished output", "Works for repeatable catalog operations", "Human review stays part of the workflow"] }
        ],
        faq: [
          { question: "What makes an AI book generator good for KDP?", answer: "It should produce a coherent manuscript, support cover and metadata decisions, keep claims honest and leave a clear human review step before publication." },
          { question: "Is DraftToDone only an AI writer?", answer: "No. DraftToDone covers the broader publishing package: manuscript, cover direction, title, description, keywords, pen-name notes and catalog quality gates." },
          { question: "Can any AI book generator guarantee sales?", answer: "No. No responsible tool can guarantee Amazon rankings, approval or sales. Packaging and metadata help, but demand, quality, price, reviews and promotion still matter." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "meilleur-generateur-livre-ia",
        title: "Meilleur générateur de livre IA pour publier sur KDP avec un package complet",
        description:
          "Vous cherchez le meilleur générateur de livre IA ? Comparez les vrais critères KDP : manuscrit, couverture, métadonnées, prix, contrôle qualité et export.",
        eyebrow: "Meilleur générateur livre IA",
        h1: "Le meilleur générateur de livre IA est celui qui livre tout le package KDP.",
        lead: "La plupart des outils d'écriture IA s'arrêtent au texte. Un éditeur KDP a besoin de plus : manuscrit cohérent, couverture, titre, description, mots-clés et contrôles avant upload.",
        keywords: ["meilleur générateur livre IA", "générateur livre IA KDP", "logiciel écriture livre IA", "logiciel édition IA", "publier un livre avec IA"],
        sections: [
          { id: "criteres", title: "Juger le vrai travail d'édition", body: "Un générateur de livre doit être jugé sur le produit fini, pas sur un chapitre isolé qui impressionne en démo.", points: ["Manuscrit complet, pas seulement un extrait", "Couverture et métadonnées dans le même flux", "Chemin clair vers les décisions KDP", "Limites honnêtes : aucune garantie de ventes ou de classement"] },
          { id: "workflow", title: "Chercher des contrôles qualité répétables", body: "Le meilleur outil rend chaque livre plus facile à inspecter, corriger et empaqueter avant Amazon.", points: ["Structure vérifiée avant génération", "Métadonnées alignées avec le vrai livre", "Couverture contrôlée avant upload", "Notes catalogue pour les futures mises à jour"] },
          { id: "fit", title: "Où DraftToDone se place", body: "DraftToDone vise les éditeurs qui veulent un pipeline contrôlé du brief de niche au package KDP publiable, pas une conversation vide à piloter.", points: ["Manuscrit, couverture et métadonnées KDP ensemble", "Prix par crédits de livres liés au résultat", "Adapté aux opérations catalogue répétables", "La revue humaine reste dans le workflow"] }
        ],
        faq: [
          { question: "Qu'est-ce qui rend un générateur IA adapté à KDP ?", answer: "Il doit produire un manuscrit cohérent, aider la couverture et les métadonnées, rester honnête dans ses promesses et garder une revue humaine avant publication." },
          { question: "DraftToDone est-il seulement un outil d'écriture ?", answer: "Non. DraftToDone couvre le package d'édition : manuscrit, couverture, titre, description, mots-clés, notes de plume et contrôles qualité catalogue." },
          { question: "Un générateur IA peut-il garantir des ventes ?", answer: "Non. Aucun outil sérieux ne garantit classement, validation KDP ou ventes. Qualité, demande, prix, avis et promotion comptent toujours." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "miglior-generatore-libro-ia",
        title: "Miglior generatore di libri IA per publisher KDP che vogliono il pacchetto completo",
        description:
          "Cerchi il miglior generatore di libri IA? Confronta i criteri KDP reali: manoscritto, copertina, metadati, prezzo, controlli qualità ed export.",
        eyebrow: "Miglior generatore libro IA",
        h1: "Il miglior generatore di libri IA è quello che consegna tutto il pacchetto KDP.",
        lead: "Molti strumenti di scrittura IA si fermano al testo. Un publisher KDP ha bisogno di manoscritto coerente, copertina, titolo, descrizione, keyword e controlli prima dell'upload.",
        keywords: ["miglior generatore libro IA", "generatore libro IA KDP", "software scrittura libro IA", "software editoriale IA", "pubblicare un libro con IA"],
        sections: [
          { id: "criteri", title: "Valuta il lavoro editoriale completo", body: "Un generatore di libri va giudicato dal prodotto finito, non da un singolo capitolo impressionante.", points: ["Manoscritto completo, non solo un esempio", "Copertina e metadati nello stesso flusso", "Percorso chiaro verso le decisioni KDP", "Limiti chiari: nessuna garanzia di vendite o ranking"] },
          { id: "workflow", title: "Cerca controlli qualità ripetibili", body: "Lo strumento più forte rende ogni libro più facile da ispezionare, correggere e confezionare prima di Amazon.", points: ["Struttura verificata prima della generazione", "Metadati allineati al libro reale", "Copertina controllata prima dell'upload", "Note catalogo per aggiornamenti futuri"] },
          { id: "fit", title: "Dove si colloca DraftToDone", body: "DraftToDone è pensato per publisher che vogliono una pipeline controllata dal brief di nicchia al pacchetto KDP pubblicabile.", points: ["Manoscritto, copertina e metadati KDP insieme", "Prezzo a crediti libro legato all'output", "Adatto a operazioni catalogo ripetibili", "La revisione umana resta nel workflow"] }
        ],
        faq: [
          { question: "Cosa rende un generatore IA adatto a KDP?", answer: "Deve produrre un manoscritto coerente, supportare copertina e metadati, restare onesto nelle promesse e lasciare una revisione umana prima della pubblicazione." },
          { question: "DraftToDone è solo uno strumento di scrittura?", answer: "No. DraftToDone copre il pacchetto editoriale: manoscritto, copertina, titolo, descrizione, keyword, note sul pen name e controlli qualità catalogo." },
          { question: "Un generatore IA può garantire vendite?", answer: "No. Nessuno strumento serio garantisce ranking, approvazione KDP o vendite. Contano anche qualità, domanda, prezzo, recensioni e promozione." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "bester-ki-buchgenerator",
        title: "Bester KI-Buchgenerator für KDP-Publisher, die das ganze Paket brauchen",
        description:
          "Suchst du den besten KI-Buchgenerator? Vergleiche die KDP-Kriterien: Manuskript, Cover, Metadaten, Preis, Qualitätschecks und Exportbereitschaft.",
        eyebrow: "Bester KI-Buchgenerator",
        h1: "Der beste KI-Buchgenerator liefert das ganze KDP-Paket.",
        lead: "Viele KI-Schreibtools enden beim Text. KDP-Publisher brauchen mehr: ein stimmiges Manuskript, Cover, Titel, Beschreibung, Keywords und Prüfungen vor dem Upload.",
        keywords: ["bester KI Buchgenerator", "KI Buchgenerator KDP", "KI Buch Schreibsoftware", "KI Publishing Software", "Buch mit KI veröffentlichen"],
        sections: [
          { id: "kriterien", title: "Bewerte den ganzen Publishing-Job", body: "Ein Buchgenerator sollte am fertigen Produkt gemessen werden, nicht an einem einzelnen beeindruckenden Kapitel.", points: ["Vollständiges Manuskript statt nur Probe", "Cover und Metadaten im selben Workflow", "Klarer Weg zu KDP-Entscheidungen", "Ehrliche Grenzen: keine Verkaufs- oder Ranking-Garantien"] },
          { id: "workflow", title: "Achte auf wiederholbare Qualitätschecks", body: "Das stärkste Tool macht jedes Buch leichter prüfbar, korrigierbar und verpackbar, bevor es zu Amazon geht.", points: ["Strukturprüfung vor der Generierung", "Metadaten passend zum echten Buch", "Cover-Check vor dem Upload", "Katalognotizen für spätere Updates"] },
          { id: "fit", title: "Wo DraftToDone passt", body: "DraftToDone ist für Publisher gebaut, die eine kontrollierte Pipeline vom Nischenbriefing bis zum veröffentlichbaren KDP-Paket wollen.", points: ["Manuskript, Cover und KDP-Metadaten zusammen", "Book-Credit-Preis an fertigen Output gekoppelt", "Geeignet für wiederholbare Katalogarbeit", "Menschliche Prüfung bleibt Teil des Workflows"] }
        ],
        faq: [
          { question: "Was macht einen KI-Buchgenerator gut für KDP?", answer: "Er sollte ein stimmiges Manuskript erzeugen, Cover- und Metadatenentscheidungen unterstützen, ehrlich bleiben und eine menschliche Prüfung vor Veröffentlichung einplanen." },
          { question: "Ist DraftToDone nur ein Schreibtool?", answer: "Nein. DraftToDone deckt das breitere Publishing-Paket ab: Manuskript, Cover, Titel, Beschreibung, Keywords, Pen-Name-Notizen und Katalog-Qualitätschecks." },
          { question: "Kann ein KI-Buchgenerator Verkäufe garantieren?", answer: "Nein. Kein seriöses Tool garantiert Amazon-Rankings, KDP-Freigabe oder Verkäufe. Qualität, Nachfrage, Preis, Rezensionen und Promotion zählen weiter." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "kdp-book-generator",
    updated: "2026-07-04",
    translations: {
      en: {
        slug: "kdp-book-generator",
        title: "KDP book generator for manuscript, cover and Amazon metadata",
        description:
          "Generate a KDP-ready book package with AI: manuscript, cover direction, title, description, keywords and quality checks before Amazon upload.",
        eyebrow: "KDP book generator",
        h1: "Generate the KDP book package, not just the manuscript.",
        lead: "Amazon KDP publishing is more than writing chapters. DraftToDone turns a niche brief into the assets a publisher actually needs before upload: manuscript, cover, title, description, keyword set and review checklist.",
        keywords: ["KDP book generator", "Amazon KDP book generator", "AI KDP book generator", "generate KDP book", "KDP publishing software"],
        sections: [
          { id: "package", title: "Built around KDP inputs", body: "The workflow mirrors the decisions a publisher makes before opening KDP, so the output is easier to review and package.", points: ["Manuscript shaped from the niche brief", "Title and subtitle drafted with reader intent", "Description and seven keyword slots prepared", "Cover direction kept consistent with the book promise"] },
          { id: "quality", title: "Quality before upload", body: "AI speed only matters if the book can survive human review. DraftToDone keeps the publisher in the loop before anything reaches Amazon.", points: ["Review checklist for content and metadata", "No promise of account safety or guaranteed approval", "Human rights and policy checks remain required", "Catalog notes for improvements after launch"] },
          { id: "catalog", title: "Designed for catalog operators", body: "The point is not one random book. The point is a repeatable system for producing, checking and improving many titles over time.", points: ["Book-credit subscription", "Repeatable briefs and packaging", "Metadata snapshots for future refreshes", "Useful for multi-title publishing operations"] }
        ],
        faq: [
          { question: "Can I upload the output directly to KDP?", answer: "DraftToDone prepares the book package for review, but you should inspect the manuscript, cover and metadata yourself before uploading anything to Amazon." },
          { question: "Does this replace KDP's publishing dashboard?", answer: "No. DraftToDone prepares the assets and metadata; Amazon KDP remains where you upload, price and publish the book." },
          { question: "Is this safe under KDP AI rules?", answer: "Amazon allows AI-assisted books with the required disclosure and quality standards. You remain responsible for rights checks, disclosure and final review." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "generateur-livre-kdp",
        title: "Générateur de livre KDP pour manuscrit, couverture et métadonnées Amazon",
        description:
          "Générez un package de livre prêt à relire pour KDP : manuscrit, couverture, titre, description, mots-clés et contrôles avant upload Amazon.",
        eyebrow: "Générateur livre KDP",
        h1: "Générez le package KDP, pas seulement le manuscrit.",
        lead: "Publier sur Amazon KDP ne se limite pas aux chapitres. DraftToDone transforme un brief de niche en actifs utiles avant upload : manuscrit, couverture, titre, description, mots-clés et checklist.",
        keywords: ["générateur livre KDP", "générateur livre Amazon KDP", "générateur livre IA KDP", "générer livre KDP", "logiciel publication KDP"],
        sections: [
          { id: "package", title: "Pensé autour des champs KDP", body: "Le workflow suit les décisions qu'un éditeur prend avant d'ouvrir KDP, pour un résultat plus facile à relire et empaqueter.", points: ["Manuscrit construit depuis le brief de niche", "Titre et sous-titre orientés lecteur", "Description et sept champs mots-clés préparés", "Direction de couverture cohérente avec la promesse"] },
          { id: "qualite", title: "Qualité avant upload", body: "La vitesse de l'IA compte seulement si le livre tient la revue humaine. DraftToDone garde l'éditeur dans la boucle avant Amazon.", points: ["Checklist de revue contenu et métadonnées", "Aucune promesse de sécurité de compte ou validation garantie", "Contrôles droits et politique toujours requis", "Notes catalogue pour améliorer après lancement"] },
          { id: "catalogue", title: "Conçu pour les opérateurs de catalogue", body: "L'objectif n'est pas un livre isolé au hasard. L'objectif est un système répétable pour produire, contrôler et améliorer plusieurs titres.", points: ["Abonnement par crédits de livres", "Briefs et packaging répétables", "Snapshots de métadonnées pour refresh futur", "Utile pour opérations multi-titres"] }
        ],
        faq: [
          { question: "Puis-je uploader directement le résultat sur KDP ?", answer: "DraftToDone prépare un package à relire, mais vous devez inspecter manuscrit, couverture et métadonnées avant tout upload sur Amazon." },
          { question: "Cela remplace-t-il le tableau de bord KDP ?", answer: "Non. DraftToDone prépare les fichiers et métadonnées ; Amazon KDP reste l'endroit où uploader, fixer le prix et publier." },
          { question: "Est-ce compatible avec les règles IA de KDP ?", answer: "Amazon accepte les livres assistés par IA avec déclaration requise et standards qualité. Vous restez responsable des droits, de la déclaration et de la revue finale." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "generatore-libro-kdp",
        title: "Generatore di libri KDP per manoscritto, copertina e metadati Amazon",
        description:
          "Genera un pacchetto libro pronto da rivedere per KDP: manoscritto, copertina, titolo, descrizione, keyword e controlli prima dell'upload.",
        eyebrow: "Generatore libro KDP",
        h1: "Genera il pacchetto KDP, non solo il manoscritto.",
        lead: "Pubblicare su Amazon KDP non significa solo scrivere capitoli. DraftToDone trasforma un brief di nicchia negli asset utili prima dell'upload: manoscritto, copertina, titolo, descrizione, keyword e checklist.",
        keywords: ["generatore libro KDP", "generatore libro Amazon KDP", "generatore libro IA KDP", "generare libro KDP", "software pubblicazione KDP"],
        sections: [
          { id: "pacchetto", title: "Costruito intorno agli input KDP", body: "Il workflow segue le decisioni che un publisher prende prima di aprire KDP, così l'output è più facile da rivedere e confezionare.", points: ["Manoscritto modellato dal brief di nicchia", "Titolo e sottotitolo orientati al lettore", "Descrizione e sette campi keyword preparati", "Direzione copertina coerente con la promessa"] },
          { id: "qualita", title: "Qualità prima dell'upload", body: "La velocità dell'IA conta solo se il libro supera una revisione umana. DraftToDone tiene il publisher nel flusso prima di Amazon.", points: ["Checklist per contenuto e metadati", "Nessuna promessa di sicurezza account o approvazione garantita", "Controlli diritti e policy sempre necessari", "Note catalogo per miglioramenti post-lancio"] },
          { id: "catalogo", title: "Pensato per operatori di catalogo", body: "Il punto non è un libro casuale. Il punto è un sistema ripetibile per produrre, controllare e migliorare molti titoli nel tempo.", points: ["Abbonamento a crediti libro", "Brief e packaging ripetibili", "Snapshot metadati per refresh futuri", "Utile per operazioni multi-titolo"] }
        ],
        faq: [
          { question: "Posso caricare direttamente l'output su KDP?", answer: "DraftToDone prepara un pacchetto da rivedere, ma devi controllare manoscritto, copertina e metadati prima di caricare su Amazon." },
          { question: "Sostituisce la dashboard KDP?", answer: "No. DraftToDone prepara asset e metadati; Amazon KDP resta il luogo in cui carichi, imposti il prezzo e pubblichi." },
          { question: "È compatibile con le regole IA di KDP?", answer: "Amazon accetta libri assistiti da IA con dichiarazione richiesta e standard qualità. Resti responsabile di diritti, disclosure e revisione finale." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "kdp-buchgenerator",
        title: "KDP-Buchgenerator für Manuskript, Cover und Amazon-Metadaten",
        description:
          "Erzeuge ein KDP-Buchpaket zur Prüfung: Manuskript, Cover-Richtung, Titel, Beschreibung, Keywords und Qualitätschecks vor dem Amazon-Upload.",
        eyebrow: "KDP-Buchgenerator",
        h1: "Erzeuge das KDP-Buchpaket, nicht nur das Manuskript.",
        lead: "Amazon-KDP-Publishing ist mehr als Kapitel schreiben. DraftToDone verwandelt ein Nischenbriefing in die Assets vor dem Upload: Manuskript, Cover, Titel, Beschreibung, Keywords und Prüfliste.",
        keywords: ["KDP Buchgenerator", "Amazon KDP Buchgenerator", "KI KDP Buchgenerator", "KDP Buch generieren", "KDP Publishing Software"],
        sections: [
          { id: "paket", title: "An KDP-Eingaben ausgerichtet", body: "Der Workflow folgt den Entscheidungen, die ein Publisher vor KDP trifft, damit der Output leichter prüfbar und verpackbar ist.", points: ["Manuskript aus dem Nischenbriefing geformt", "Titel und Untertitel nach Leserintention", "Beschreibung und sieben Keyword-Felder vorbereitet", "Cover-Richtung passend zum Buchversprechen"] },
          { id: "qualitaet", title: "Qualität vor dem Upload", body: "KI-Geschwindigkeit zählt nur, wenn das Buch menschliche Prüfung übersteht. DraftToDone hält den Publisher vor Amazon im Prozess.", points: ["Checkliste für Inhalt und Metadaten", "Keine Garantie für Kontosicherheit oder Freigabe", "Rechte- und Policy-Prüfungen bleiben Pflicht", "Katalognotizen für Verbesserungen nach Launch"] },
          { id: "katalog", title: "Für Katalogbetreiber gedacht", body: "Es geht nicht um ein zufälliges einzelnes Buch. Es geht um ein wiederholbares System für viele Titel.", points: ["Book-Credit-Abonnement", "Wiederholbare Briefings und Verpackung", "Metadaten-Snapshots für spätere Refreshes", "Nützlich für Multi-Titel-Operationen"] }
        ],
        faq: [
          { question: "Kann ich den Output direkt bei KDP hochladen?", answer: "DraftToDone bereitet das Buchpaket zur Prüfung vor, aber du solltest Manuskript, Cover und Metadaten selbst prüfen, bevor du etwas bei Amazon hochlädst." },
          { question: "Ersetzt es das KDP-Dashboard?", answer: "Nein. DraftToDone bereitet Assets und Metadaten vor; Amazon KDP bleibt der Ort zum Hochladen, Bepreisen und Veröffentlichen." },
          { question: "Ist das mit den KDP-KI-Regeln vereinbar?", answer: "Amazon erlaubt KI-unterstützte Bücher mit der erforderlichen Offenlegung und Qualitätsstandards. Du bleibst verantwortlich für Rechteprüfung, Offenlegung und finale Prüfung." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "sudowrite-alternative",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "sudowrite-alternative",
        title: "Sudowrite alternative for the whole publishable book, not just prose",
        description:
          "Looking for a Sudowrite alternative? DraftToDone generates the full KDP product — manuscript, cover and metadata — while Sudowrite focuses on AI fiction craft.",
        eyebrow: "Sudowrite alternative",
        h1: "A Sudowrite alternative built around the whole book, not just the writing.",
        lead: "Sudowrite is a strong AI writing partner for fiction. DraftToDone aims one step wider: turning a brief into a publish-ready KDP product — manuscript, cover and metadata — for indie publishers and catalog operators.",
        keywords: ["Sudowrite alternative", "AI book writing software", "AI fiction writing tool", "write a book with AI", "AI publishing software"],
        sections: [
          { id: "what-sudowrite-does", title: "What Sudowrite is great at", body: "Sudowrite is built for fiction craft: a non-judgemental AI writing partner that helps you draft, rewrite and brainstorm scenes with a model tuned for stories.", points: ["Story-focused AI writing", "Scene and prose rewriting", "Brainstorming and continuity help", "Subscription, craft-first"] },
          { id: "where-drafttodone-differs", title: "Where DraftToDone is different", body: "DraftToDone is not a writing-craft tool. It produces the whole product a marketplace needs, from one controlled pipeline, then runs quality gates before upload.", points: ["Full manuscript generation", "Front, spine and back cover", "KDP title, description and keywords", "Verified pen name and catalog QA"] },
          { id: "who-each-is-for", title: "Which one fits you", body: "The two solve different problems, and some authors use both: write with one, package and publish with the other.", points: ["Sudowrite: novelists refining prose", "DraftToDone: publishers shipping catalogs", "Single literary novel vs repeatable output", "Craft assistance vs publish-ready product"] }
        ],
        faq: [
          { question: "Is DraftToDone available now?", answer: "Yes — DraftToDone is live. Open the app at app.drafttodone.io to start publishing today." },
          { question: "Is DraftToDone better than Sudowrite?", answer: "They do different jobs. Sudowrite helps you write better fiction; DraftToDone turns a brief into a publish-ready KDP product. Plenty of authors could use both." },
          { question: "Does DraftToDone write fiction too?", answer: "Yes, it generates full manuscripts, but its focus is the complete publishable product for KDP rather than line-by-line literary craft." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "alternative-sudowrite",
        title: "Alternative à Sudowrite pour tout le livre publiable, pas que le texte",
        description:
          "Vous cherchez une alternative à Sudowrite ? DraftToDone génère le produit KDP complet — manuscrit, couverture, métadonnées — quand Sudowrite vise la fiction.",
        eyebrow: "Alternative à Sudowrite",
        h1: "Une alternative à Sudowrite pensée pour tout le livre, pas seulement l'écriture.",
        lead: "Sudowrite est un bon partenaire d'écriture IA pour la fiction. DraftToDone vise un cran plus large : transformer un brief en produit KDP prêt à publier — manuscrit, couverture et métadonnées — pour éditeurs indépendants et opérateurs de catalogue.",
        keywords: ["alternative Sudowrite", "logiciel d'écriture de livre IA", "outil d'écriture de fiction IA", "écrire un livre avec IA", "logiciel d'édition IA"],
        sections: [
          { id: "what-sudowrite-does", title: "Ce que Sudowrite réussit", body: "Sudowrite est conçu pour la fiction : un partenaire d'écriture IA sans jugement qui aide à rédiger, réécrire et explorer des scènes avec un modèle pensé pour les histoires.", points: ["Écriture IA centrée sur l'histoire", "Réécriture de scènes et de prose", "Aide au brainstorming et à la continuité", "Abonnement, axé sur le métier d'écrire"] },
          { id: "where-drafttodone-differs", title: "Ce qui distingue DraftToDone", body: "DraftToDone n'est pas un outil de métier d'écriture. Il produit tout ce qu'une marketplace exige, depuis un pipeline contrôlé, puis applique des contrôles qualité avant l'upload.", points: ["Génération complète du manuscrit", "Première, dos et quatrième de couverture", "Titre, description et mots-clés KDP", "Nom de plume vérifié et QA catalogue"] },
          { id: "who-each-is-for", title: "Lequel vous convient", body: "Les deux résolvent des problèmes différents, et certains auteurs utilisent les deux : écrire avec l'un, packager et publier avec l'autre.", points: ["Sudowrite : romanciers qui peaufinent la prose", "DraftToDone : éditeurs qui publient des catalogues", "Roman littéraire unique vs production répétable", "Aide à l'écriture vs produit prêt à publier"] }
        ],
        faq: [
          { question: "DraftToDone est-il disponible maintenant ?", answer: "Oui — DraftToDone est en ligne. Ouvrez l'app sur app.drafttodone.io pour commencer à publier dès aujourd'hui." },
          { question: "DraftToDone est-il meilleur que Sudowrite ?", answer: "Ils font des choses différentes. Sudowrite aide à mieux écrire la fiction ; DraftToDone transforme un brief en produit KDP prêt à publier. Beaucoup d'auteurs pourraient utiliser les deux." },
          { question: "DraftToDone écrit-il aussi de la fiction ?", answer: "Oui, il génère des manuscrits complets, mais son objectif est le produit publiable complet pour KDP plutôt que le travail littéraire ligne à ligne." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "alternativa-sudowrite",
        title: "Alternativa a Sudowrite per tutto il libro pubblicabile, non solo il testo",
        description:
          "Cerchi un'alternativa a Sudowrite? DraftToDone genera il prodotto KDP completo — manoscritto, copertina, metadati — mentre Sudowrite punta sulla narrativa.",
        eyebrow: "Alternativa a Sudowrite",
        h1: "Un'alternativa a Sudowrite pensata per tutto il libro, non solo la scrittura.",
        lead: "Sudowrite è un buon partner di scrittura IA per la narrativa. DraftToDone punta un passo più in là: trasformare un brief in un prodotto KDP pronto da pubblicare — manoscritto, copertina e metadati — per editori indipendenti e operatori di catalogo.",
        keywords: ["alternativa Sudowrite", "software di scrittura libri IA", "strumento di scrittura narrativa IA", "scrivere un libro con IA", "software di editoria IA"],
        sections: [
          { id: "what-sudowrite-does", title: "Cosa fa bene Sudowrite", body: "Sudowrite è costruito per la narrativa: un partner di scrittura IA senza giudizio che aiuta a scrivere, riscrivere ed esplorare scene con un modello pensato per le storie.", points: ["Scrittura IA centrata sulla storia", "Riscrittura di scene e prosa", "Aiuto a brainstorming e continuità", "Abbonamento, incentrato sul mestiere"] },
          { id: "where-drafttodone-differs", title: "Cosa distingue DraftToDone", body: "DraftToDone non è uno strumento di mestiere della scrittura. Produce tutto ciò che un marketplace richiede, da un pipeline controllato, poi applica controlli di qualità prima dell'upload.", points: ["Generazione completa del manoscritto", "Copertina anteriore, dorso e retro", "Titolo, descrizione e keyword KDP", "Nome d'autore verificato e QA catalogo"] },
          { id: "who-each-is-for", title: "Quale fa per te", body: "I due risolvono problemi diversi, e alcuni autori usano entrambi: scrivere con uno, impacchettare e pubblicare con l'altro.", points: ["Sudowrite: romanzieri che rifiniscono la prosa", "DraftToDone: editori che pubblicano cataloghi", "Romanzo singolo vs produzione ripetibile", "Aiuto alla scrittura vs prodotto pronto"] }
        ],
        faq: [
          { question: "DraftToDone è disponibile ora?", answer: "Sì — DraftToDone è online. Apri l'app su app.drafttodone.io e inizia a pubblicare oggi." },
          { question: "DraftToDone è migliore di Sudowrite?", answer: "Fanno cose diverse. Sudowrite aiuta a scrivere meglio la narrativa; DraftToDone trasforma un brief in un prodotto KDP pronto da pubblicare. Molti autori potrebbero usare entrambi." },
          { question: "DraftToDone scrive anche narrativa?", answer: "Sì, genera manoscritti completi, ma il suo obiettivo è il prodotto pubblicabile completo per KDP più che il lavoro letterario riga per riga." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "sudowrite-alternative",
        title: "Sudowrite-Alternative für das ganze Buch, nicht nur den Text",
        description:
          "Du suchst eine Sudowrite-Alternative? DraftToDone erzeugt das komplette KDP-Produkt — Manuskript, Cover, Metadaten — während Sudowrite auf Belletristik zielt.",
        eyebrow: "Sudowrite-Alternative",
        h1: "Eine Sudowrite-Alternative rund um das ganze Buch, nicht nur das Schreiben.",
        lead: "Sudowrite ist ein starker KI-Schreibpartner für Belletristik. DraftToDone zielt einen Schritt weiter: aus einem Brief ein veröffentlichungsfertiges KDP-Produkt machen — Manuskript, Cover und Metadaten — für Indie-Publisher und Katalog-Operatoren.",
        keywords: ["Sudowrite Alternative", "KI Buch Schreibsoftware", "KI Belletristik Schreibtool", "Buch mit KI schreiben", "KI Publishing Software"],
        sections: [
          { id: "what-sudowrite-does", title: "Worin Sudowrite stark ist", body: "Sudowrite ist für Belletristik gebaut: ein wertfreier KI-Schreibpartner, der beim Entwerfen, Umschreiben und Ausdenken von Szenen mit einem auf Geschichten getrimmten Modell hilft.", points: ["Story-fokussiertes KI-Schreiben", "Umschreiben von Szenen und Prosa", "Hilfe bei Brainstorming und Kontinuität", "Abo, handwerksorientiert"] },
          { id: "where-drafttodone-differs", title: "Was DraftToDone unterscheidet", body: "DraftToDone ist kein Schreibhandwerk-Tool. Es produziert alles, was ein Marktplatz verlangt, aus einer kontrollierten Pipeline, und prüft die Qualität vor dem Upload.", points: ["Vollständige Manuskriptgenerierung", "Vorderseite, Rücken und Rückseite", "KDP-Titel, -Beschreibung und -Keywords", "Verifizierter Autorname und Katalog-QA"] },
          { id: "who-each-is-for", title: "Was zu dir passt", body: "Beide lösen verschiedene Probleme, und manche Autoren nutzen beide: mit dem einen schreiben, mit dem anderen verpacken und veröffentlichen.", points: ["Sudowrite: Romanautoren, die Prosa verfeinern", "DraftToDone: Verlage, die Kataloge veröffentlichen", "Einzelner Roman vs wiederholbare Produktion", "Schreibhilfe vs fertiges Produkt"] }
        ],
        faq: [
          { question: "Ist DraftToDone jetzt verfügbar?", answer: "Ja — DraftToDone ist live. Öffne die App unter app.drafttodone.io und starte noch heute." },
          { question: "Ist DraftToDone besser als Sudowrite?", answer: "Sie machen Verschiedenes. Sudowrite hilft, bessere Belletristik zu schreiben; DraftToDone macht aus einem Brief ein veröffentlichungsfertiges KDP-Produkt. Viele Autoren könnten beide nutzen." },
          { question: "Schreibt DraftToDone auch Belletristik?", answer: "Ja, es erzeugt vollständige Manuskripte, aber der Fokus liegt auf dem kompletten veröffentlichungsfertigen KDP-Produkt statt auf literarischer Feinarbeit Zeile für Zeile." }
        ],
        cta: "App öffnen",
      },
    },
  },
  {
    key: "atticus-alternative",
    updated: "2026-06-19",
    translations: {
      en: {
        slug: "atticus-alternative",
        title: "Atticus alternative that generates the book, not only formats it",
        description:
          "Looking for an Atticus alternative? Atticus formats books you have written; DraftToDone generates the manuscript, cover and KDP metadata as one pipeline.",
        eyebrow: "Atticus alternative",
        h1: "An Atticus alternative that builds the book, not only formats it.",
        lead: "Atticus is a polished writing and formatting tool. DraftToDone starts earlier and ends later: it generates the manuscript, the full cover and the KDP metadata, then checks quality before upload.",
        keywords: ["Atticus alternative", "book formatting software", "AI publishing software", "KDP book formatting", "all-in-one book tool"],
        sections: [
          { id: "what-atticus-does", title: "What Atticus is great at", body: "Atticus is an all-in-one writing and formatting tool: import your manuscript and produce clean print and ebook files with customizable templates, on any platform, for a one-time price.", points: ["Writing editor for authors", "Print and ebook formatting", "Customizable templates", "One-time purchase, cross-platform"] },
          { id: "where-drafttodone-differs", title: "Where DraftToDone is different", body: "Atticus assumes you already wrote the book. DraftToDone generates it — and the cover and metadata — so formatting is one step inside a wider pipeline, not the whole job.", points: ["Generates the manuscript itself", "Front, spine and back cover", "KDP title, description and keywords", "Catalog quality gates before upload"] },
          { id: "who-each-is-for", title: "Which one fits you", body: "If you write your own books and want beautiful files, Atticus is excellent. If you want to produce publish-ready products at catalog scale, DraftToDone targets that.", points: ["Atticus: format what you wrote", "DraftToDone: generate the whole product", "Single polished title vs repeatable catalog", "Formatting craft vs end-to-end pipeline"] }
        ],
        faq: [
          { question: "Is DraftToDone available now?", answer: "Yes — DraftToDone is live. Open the app at app.drafttodone.io to start publishing today." },
          { question: "Does DraftToDone format print and ebook files like Atticus?", answer: "Formatting is one stage of the pipeline. The focus is producing the whole product — manuscript, cover and metadata — ready for KDP, rather than being a standalone formatting editor." },
          { question: "Atticus is one-time; what about DraftToDone?", answer: "DraftToDone is a book-credit subscription (one credit makes one complete book). Atticus is a one-time purchase for its editor and formatter. Different models for different jobs." }
        ],
        cta: "Open the app",
      },
      fr: {
        slug: "alternative-atticus",
        title: "Alternative à Atticus pour générer le livre, pas seulement le formater",
        description:
          "Vous cherchez une alternative à Atticus ? Atticus formate les livres que vous avez écrits ; DraftToDone génère le manuscrit, la couverture et les métadonnées KDP.",
        eyebrow: "Alternative à Atticus",
        h1: "Une alternative à Atticus qui construit le livre, pas seulement le met en page.",
        lead: "Atticus est un outil d'écriture et de mise en page soigné. DraftToDone commence plus tôt et finit plus tard : il génère le manuscrit, la couverture complète et les métadonnées KDP, puis vérifie la qualité avant l'upload.",
        keywords: ["alternative Atticus", "logiciel de mise en page livre", "logiciel d'édition IA", "mise en page livre KDP", "outil livre tout-en-un"],
        sections: [
          { id: "what-atticus-does", title: "Ce qu'Atticus réussit", body: "Atticus est un outil d'écriture et de mise en page tout-en-un : importez votre manuscrit et produisez des fichiers print et ebook propres avec des modèles personnalisables, sur toutes les plateformes, pour un achat unique.", points: ["Éditeur d'écriture pour auteurs", "Mise en page print et ebook", "Modèles personnalisables", "Achat unique, multiplateforme"] },
          { id: "where-drafttodone-differs", title: "Ce qui distingue DraftToDone", body: "Atticus suppose que vous avez déjà écrit le livre. DraftToDone le génère — avec la couverture et les métadonnées — de sorte que la mise en page n'est qu'une étape d'un pipeline plus large.", points: ["Génère le manuscrit lui-même", "Première, dos et quatrième", "Titre, description et mots-clés KDP", "Contrôles qualité catalogue avant l'upload"] },
          { id: "who-each-is-for", title: "Lequel vous convient", body: "Si vous écrivez vos livres et voulez de beaux fichiers, Atticus est excellent. Si vous voulez produire des produits prêts à publier à l'échelle d'un catalogue, DraftToDone vise cela.", points: ["Atticus : mettre en page ce que vous avez écrit", "DraftToDone : générer tout le produit", "Titre unique soigné vs catalogue répétable", "Métier de mise en page vs pipeline complet"] }
        ],
        faq: [
          { question: "DraftToDone est-il disponible maintenant ?", answer: "Oui — DraftToDone est en ligne. Ouvrez l'app sur app.drafttodone.io pour commencer à publier dès aujourd'hui." },
          { question: "DraftToDone met-il en page les fichiers print et ebook comme Atticus ?", answer: "La mise en page est une étape du pipeline. L'objectif est de produire tout le produit — manuscrit, couverture et métadonnées — prêt pour KDP, plutôt que d'être un éditeur de mise en page autonome." },
          { question: "Atticus est en achat unique ; et DraftToDone ?", answer: "DraftToDone est un abonnement à crédits livres (1 crédit = 1 livre complet). Atticus est un achat unique pour son éditeur et son outil de mise en page. Des modèles différents pour des besoins différents." }
        ],
        cta: "Ouvrir l'app",
      },
      it: {
        slug: "alternativa-atticus",
        title: "Alternativa ad Atticus per generare il libro, non solo formattarlo",
        description:
          "Cerchi un'alternativa ad Atticus? Atticus formatta i libri che hai scritto; DraftToDone genera il manoscritto, la copertina e i metadati KDP in un pipeline.",
        eyebrow: "Alternativa ad Atticus",
        h1: "Un'alternativa ad Atticus che costruisce il libro, non solo lo impagina.",
        lead: "Atticus è un curato strumento di scrittura e impaginazione. DraftToDone inizia prima e finisce dopo: genera il manoscritto, la copertina completa e i metadati KDP, poi verifica la qualità prima dell'upload.",
        keywords: ["alternativa Atticus", "software di impaginazione libri", "software di editoria IA", "impaginazione libro KDP", "strumento libro tutto-in-uno"],
        sections: [
          { id: "what-atticus-does", title: "Cosa fa bene Atticus", body: "Atticus è uno strumento tutto-in-uno di scrittura e impaginazione: importi il manoscritto e produci file print ed ebook puliti con modelli personalizzabili, su ogni piattaforma, con un acquisto unico.", points: ["Editor di scrittura per autori", "Impaginazione print ed ebook", "Modelli personalizzabili", "Acquisto unico, multipiattaforma"] },
          { id: "where-drafttodone-differs", title: "Cosa distingue DraftToDone", body: "Atticus presuppone che tu abbia già scritto il libro. DraftToDone lo genera — con copertina e metadati — così l'impaginazione è solo una tappa di un pipeline più ampio.", points: ["Genera il manoscritto stesso", "Fronte, dorso e retro", "Titolo, descrizione e keyword KDP", "Controlli qualità catalogo prima dell'upload"] },
          { id: "who-each-is-for", title: "Quale fa per te", body: "Se scrivi i tuoi libri e vuoi file belli, Atticus è eccellente. Se vuoi produrre prodotti pronti da pubblicare su scala di catalogo, DraftToDone punta a quello.", points: ["Atticus: impaginare ciò che hai scritto", "DraftToDone: generare tutto il prodotto", "Titolo singolo curato vs catalogo ripetibile", "Mestiere di impaginazione vs pipeline completo"] }
        ],
        faq: [
          { question: "DraftToDone è disponibile ora?", answer: "Sì — DraftToDone è online. Apri l'app su app.drafttodone.io e inizia a pubblicare oggi." },
          { question: "DraftToDone impagina i file print ed ebook come Atticus?", answer: "L'impaginazione è una tappa del pipeline. L'obiettivo è produrre tutto il prodotto — manoscritto, copertina e metadati — pronto per KDP, più che essere un editor di impaginazione autonomo." },
          { question: "Atticus è acquisto unico; e DraftToDone?", answer: "DraftToDone è un abbonamento a crediti libri (1 credito = 1 libro completo). Atticus è un acquisto unico per il suo editor e impaginatore. Modelli diversi per esigenze diverse." }
        ],
        cta: "Apri l'app",
      },
      de: {
        slug: "atticus-alternative",
        title: "Atticus-Alternative, die das Buch erzeugt, nicht nur formatiert",
        description:
          "Du suchst eine Atticus-Alternative? Atticus formatiert Bücher, die du geschrieben hast; DraftToDone erzeugt Manuskript, Cover und KDP-Metadaten als eine Pipeline.",
        eyebrow: "Atticus-Alternative",
        h1: "Eine Atticus-Alternative, die das Buch baut, nicht nur formatiert.",
        lead: "Atticus ist ein ausgereiftes Schreib- und Formatierungstool. DraftToDone beginnt früher und endet später: es erzeugt Manuskript, das komplette Cover und die KDP-Metadaten und prüft die Qualität vor dem Upload.",
        keywords: ["Atticus Alternative", "Buch Formatierungssoftware", "KI Publishing Software", "KDP Buchformatierung", "All-in-One Buch Tool"],
        sections: [
          { id: "what-atticus-does", title: "Worin Atticus stark ist", body: "Atticus ist ein All-in-One-Schreib- und Formatierungstool: importiere dein Manuskript und erzeuge saubere Print- und Ebook-Dateien mit anpassbaren Vorlagen, auf jeder Plattform, zum Einmalpreis.", points: ["Schreibeditor für Autoren", "Print- und Ebook-Formatierung", "Anpassbare Vorlagen", "Einmalkauf, plattformübergreifend"] },
          { id: "where-drafttodone-differs", title: "Was DraftToDone unterscheidet", body: "Atticus setzt voraus, dass du das Buch schon geschrieben hast. DraftToDone erzeugt es — mit Cover und Metadaten — sodass Formatierung nur ein Schritt in einer breiteren Pipeline ist.", points: ["Erzeugt das Manuskript selbst", "Vorderseite, Rücken und Rückseite", "KDP-Titel, -Beschreibung und -Keywords", "Katalog-Qualitätsgates vor dem Upload"] },
          { id: "who-each-is-for", title: "Was zu dir passt", body: "Wenn du deine Bücher selbst schreibst und schöne Dateien willst, ist Atticus ausgezeichnet. Wenn du veröffentlichungsfertige Produkte im Katalogmaßstab willst, zielt DraftToDone darauf.", points: ["Atticus: formatieren, was du geschrieben hast", "DraftToDone: das ganze Produkt erzeugen", "Einzelner Titel vs wiederholbarer Katalog", "Formatierungshandwerk vs End-to-End-Pipeline"] }
        ],
        faq: [
          { question: "Ist DraftToDone jetzt verfügbar?", answer: "Ja — DraftToDone ist live. Öffne die App unter app.drafttodone.io und starte noch heute." },
          { question: "Formatiert DraftToDone Print- und Ebook-Dateien wie Atticus?", answer: "Formatierung ist eine Stufe der Pipeline. Der Fokus liegt darauf, das ganze Produkt — Manuskript, Cover und Metadaten — fertig für KDP zu erzeugen, statt ein eigenständiger Formatierungseditor zu sein." },
          { question: "Atticus ist Einmalkauf; und DraftToDone?", answer: "DraftToDone ist ein Buch-Kredit-Abo (1 Kredit = 1 komplettes Buch). Atticus ist ein Einmalkauf für Editor und Formatierer. Verschiedene Modelle für verschiedene Aufgaben." }
        ],
        cta: "App öffnen",
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
