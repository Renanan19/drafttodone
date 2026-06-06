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
  translations: Record<Locale, SolutionTranslation>;
};

export const solutionPages: SolutionPage[] = [
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
