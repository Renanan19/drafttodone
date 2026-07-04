import { aiWritingSeoPosts } from "./ai-writing-seo-posts";
import { bookMarketingSeoPosts } from "./book-marketing-seo-posts";
import { kdpAccountPaymentsPost } from "./kdp-account-post";
import { kdpSeoPosts } from "./kdp-seo-posts";
import { selfPublishingSeoPosts } from "./self-publishing-seo-posts";

export const SITE_URL = "https://drafttodone.io";
export const SITE_NAME = "DraftToDone.io";
export const BLOG_AUTHOR = "DraftToDone editorial team";

export const locales = ["en", "fr", "it", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
};

export type BlogCopy = {
  home: string;
  blog: string;
  appCta: string;
  languageLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  subtitle: string;
  pillarLabel: string;
  updatedLabel: string;
  readTimeLabel: string;
  readGuide: string;
  tableOfContents: string;
  checklist: string;
  faq: string;
  related: string;
  tools: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  footer: string;
};

export type BlogSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogTranslation = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  intro: string[];
  sections: BlogSection[];
  checklist: string[];
  faq: BlogFaq[];
};

export type BlogPost = {
  key: string;
  date: string;
  updated: string;
  readingTime: number;
  accent: {
    start: string;
    middle: string;
    end: string;
  };
  // English is mandatory; other locales are optional so a post can ship
  // in a subset of languages without phantom URLs in the other locales.
  translations: { en: BlogTranslation } & Partial<Record<Locale, BlogTranslation>>;
};

export const blogCopy: Record<Locale, BlogCopy> = {
  en: {
    home: "Home",
    blog: "Blog",
    appCta: "Open the app",
    languageLabel: "Choose language",
    metaTitle: "AI Publishing Blog: SEO, KDP, Covers and Book Automation",
    metaDescription:
      "Complete multilingual guides for AI-assisted publishing: book SEO, metadata, covers, KDP workflows and catalog operations.",
    keywords: [
      "AI publishing blog",
      "book SEO",
      "KDP metadata",
      "AI book cover",
      "publishing automation",
      "KDP keyword research",
      "AI manuscript editing",
      "KDP launch checklist",
      "pen name strategy",
    ],
    eyebrow: "AI publishing knowledge base",
    h1: "A complete SEO blog for building a modern publishing catalog.",
    subtitle:
      "Pillar guides for writers, indie publishers and operators who want repeatable workflows: niche research, manuscript quality, book metadata, covers and catalog systems.",
    pillarLabel: "Pillar guide",
    updatedLabel: "Updated",
    readTimeLabel: "min read",
    readGuide: "Read guide",
    tableOfContents: "Table of contents",
    checklist: "Operational checklist",
    faq: "FAQ",
    related: "Related guides",
    tools: "Tools",
    ctaTitle: "Turn your publishing workflow into a system.",
    ctaText:
      "DraftToDone helps transform ideas into manuscript, cover assets and optimized metadata from one controlled pipeline.",
    ctaButton: "Open the app",
    footer: "Built in public for publishers who care about quality and leverage.",
  },
  fr: {
    home: "Accueil",
    blog: "Blog",
    appCta: "Ouvrir l'app",
    languageLabel: "Choisir la langue",
    metaTitle: "Blog édition IA : SEO, KDP, couvertures et automatisation",
    metaDescription:
      "Guides complets en français sur l'édition assistée par IA : SEO livre, métadonnées, couvertures, workflow KDP et opérations éditoriales.",
    keywords: [
      "blog édition IA",
      "SEO livre",
      "métadonnées KDP",
      "couverture livre IA",
      "automatisation édition",
      "recherche mots-clés KDP",
      "édition manuscrit IA",
      "checklist lancement KDP",
      "stratégie nom de plume",
    ],
    eyebrow: "Base de connaissance édition IA",
    h1: "Un blog SEO complet pour bâtir un catalogue éditorial moderne.",
    subtitle:
      "Des guides piliers pour auteurs, éditeurs indépendants et opérateurs qui veulent des workflows reproductibles : recherche de niche, qualité du manuscrit, métadonnées, couvertures et systèmes de catalogue.",
    pillarLabel: "Guide pilier",
    updatedLabel: "Mis à jour",
    readTimeLabel: "min de lecture",
    readGuide: "Lire le guide",
    tableOfContents: "Sommaire",
    checklist: "Checklist opérationnelle",
    faq: "FAQ",
    related: "Guides liés",
    tools: "Outils",
    ctaTitle: "Transformez votre workflow éditorial en système.",
    ctaText:
      "DraftToDone aide à transformer une idée en manuscrit, assets de couverture et métadonnées optimisées depuis un pipeline contrôlé.",
    ctaButton: "Ouvrir l'app",
    footer: "Construit en public pour les éditeurs qui veulent qualité et levier.",
  },
  it: {
    home: "Home",
    blog: "Blog",
    appCta: "Apri l'app",
    languageLabel: "Scegli lingua",
    metaTitle: "Blog editoria IA: SEO, KDP, copertine e automazione",
    metaDescription:
      "Guide complete in italiano sull'editoria assistita dall'IA: SEO per libri, metadati, copertine, flussi KDP e sistemi di catalogo.",
    keywords: [
      "blog editoria IA",
      "SEO libri",
      "metadati KDP",
      "copertina libro IA",
      "automazione editoriale",
      "ricerca keyword KDP",
      "editing manoscritto IA",
      "checklist lancio KDP",
      "strategia pseudonimo",
    ],
    eyebrow: "Knowledge base per editoria IA",
    h1: "Un blog SEO completo per costruire un catalogo editoriale moderno.",
    subtitle:
      "Guide pilastro per autori, editori indipendenti e operatori che vogliono workflow ripetibili: ricerca di nicchia, qualità del manoscritto, metadati, copertine e sistemi di catalogo.",
    pillarLabel: "Guida pilastro",
    updatedLabel: "Aggiornato",
    readTimeLabel: "min di lettura",
    readGuide: "Leggi la guida",
    tableOfContents: "Indice",
    checklist: "Checklist operativa",
    faq: "FAQ",
    related: "Guide correlate",
    tools: "Strumenti",
    ctaTitle: "Trasforma il workflow editoriale in un sistema.",
    ctaText:
      "DraftToDone aiuta a trasformare un'idea in manoscritto, asset di copertina e metadati ottimizzati da un unico pipeline controllato.",
    ctaButton: "Apri l'app",
    footer: "Costruito in pubblico per editori che vogliono qualità e leva.",
  },
  de: {
    home: "Startseite",
    blog: "Blog",
    appCta: "App öffnen",
    languageLabel: "Sprache wählen",
    metaTitle: "KI-Publishing-Blog: SEO, KDP, Cover und Automatisierung",
    metaDescription:
      "Ausführliche deutschsprachige Guides für KI-gestütztes Publishing: Buch-SEO, Metadaten, Cover, KDP-Workflows und Katalogsysteme.",
    keywords: [
      "KI Publishing Blog",
      "Buch SEO",
      "KDP Metadaten",
      "KI Buchcover",
      "Publishing Automatisierung",
      "KDP Keyword Recherche",
      "KI Manuskript Lektorat",
      "KDP Launch Checkliste",
      "Pseudonym Strategie",
    ],
    eyebrow: "Wissensbasis für KI-Publishing",
    h1: "Ein vollständiger SEO-Blog für den Aufbau eines modernen Publishing-Katalogs.",
    subtitle:
      "Pillar-Guides für Autorinnen, Indie-Publisher und Operatoren, die wiederholbare Workflows wollen: Nischenrecherche, Manuskriptqualität, Metadaten, Cover und Katalogsysteme.",
    pillarLabel: "Pillar-Guide",
    updatedLabel: "Aktualisiert",
    readTimeLabel: "Min. Lesezeit",
    readGuide: "Guide lesen",
    tableOfContents: "Inhalt",
    checklist: "Operative Checkliste",
    faq: "FAQ",
    related: "Verwandte Guides",
    tools: "Tools",
    ctaTitle: "Mach aus deinem Publishing-Workflow ein System.",
    ctaText:
      "DraftToDone hilft, Ideen in Manuskript, Cover-Assets und optimierte Metadaten aus einer kontrollierten Pipeline zu verwandeln.",
    ctaButton: "App öffnen",
    footer: "Öffentlich aufgebaut für Publisher, die Qualität und Hebelwirkung wollen.",
  },
};

export const posts: BlogPost[] = [
  ...aiWritingSeoPosts,
  ...selfPublishingSeoPosts,
  ...bookMarketingSeoPosts,
  kdpAccountPaymentsPost,
  ...kdpSeoPosts,
  {
    key: "ai-publishing-workflow",
    date: "2026-06-06",
    updated: "2026-06-06",
    readingTime: 14,
    accent: {
      start: "#e9fff7",
      middle: "#a9f0d6",
      end: "#bfe9ff",
    },
    translations: {
      en: {
        slug: "ai-book-publishing-workflow",
        title: "AI book publishing workflow: from niche idea to ready-to-upload book",
        description:
          "A complete workflow for AI-assisted publishing: niche validation, outline, manuscript, editing, cover, metadata and final quality control.",
        keywords: [
          "AI book publishing workflow",
          "AI publishing process",
          "KDP workflow",
          "AI manuscript generation",
        ],
        category: "Workflow",
        intro: [
          "AI can accelerate publishing, but acceleration only compounds when the process is controlled. A strong workflow separates research, creative direction, drafting, editing, packaging and quality assurance instead of treating the model as a magic upload button.",
          "The goal is not to produce more weak books. The goal is to compress repetitive work while keeping a human standard for promise, structure, originality and reader experience.",
        ],
        sections: [
          {
            id: "positioning",
            title: "Start with a market promise, not a prompt",
            body: [
              "Every profitable publishing workflow starts with a clear reader promise. Define who the book serves, what transformation it offers, what competing books already cover and where your angle is sharper or more useful.",
              "A practical niche brief includes the reader profile, pain points, search language, expected depth, tone, format constraints and the reason this book should exist now.",
            ],
            bullets: [
              "Map the top reader questions before generating chapters.",
              "Collect recurring review complaints from competing books.",
              "Define one primary promise and three supporting outcomes.",
              "Reject niches where you cannot add clarity, structure or taste.",
            ],
          },
          {
            id: "outline",
            title: "Build an outline that can survive editing",
            body: [
              "The outline is the control layer. It should define the sequence of ideas, the job of each chapter and the evidence or examples required before drafting begins.",
              "For nonfiction, use chapters as steps in a transformation. For fiction, use scenes as pressure points in a character arc. In both cases, ask the AI to critique gaps before it writes.",
            ],
            bullets: [
              "Write a chapter objective for every chapter.",
              "Specify what the chapter must not repeat.",
              "Add examples, exercises or story beats before drafting.",
              "Create a glossary for terms, character names or brand voice.",
            ],
          },
          {
            id: "drafting",
            title: "Draft in controlled passes",
            body: [
              "Long-form quality improves when drafting happens in passes. Generate a rough chapter, evaluate it against the outline, request targeted rewrites, then edit with a human eye for rhythm, clarity and usefulness.",
              "Use the model for expansion and alternatives, but keep the acceptance criteria outside the model: reader promise, factual caution, originality, voice and formatting.",
            ],
            bullets: [
              "Draft chapter by chapter instead of requesting an entire book at once.",
              "Use a revision checklist after each chapter.",
              "Track repeated phrases and remove generic filler.",
              "Run a final consistency pass across titles, examples and terminology.",
            ],
          },
          {
            id: "packaging",
            title: "Package the book as a product",
            body: [
              "Readers discover a book through its title, cover, subtitle, description and sample pages. Treat packaging as product design, not decoration.",
              "Before upload, confirm the cover communicates genre, the metadata matches search intent, the description sells the transformation and the interior formatting feels professional on the devices or trim sizes you target.",
            ],
            bullets: [
              "Create title variants before choosing a final title.",
              "Design front cover, spine and back cover together.",
              "Write the description after the outline and cover concept are locked.",
              "Validate the final package with a cold-reader test.",
            ],
          },
        ],
        checklist: [
          "Niche brief includes reader, promise, competing titles and differentiation.",
          "Outline lists chapter objective, key points and examples for every chapter.",
          "Each AI draft receives a human clarity, originality and usefulness pass.",
          "Cover, title, subtitle and description all communicate the same promise.",
          "Final files are checked on the actual formats and marketplaces you plan to use.",
        ],
        faq: [
          {
            question: "Can AI write an entire book by itself?",
            answer:
              "It can generate long manuscripts, but a publishable book still needs editorial direction, fact checking, structure, taste and quality control. The strongest workflow uses AI as production leverage, not as the final editor.",
          },
          {
            question: "What is the biggest mistake in AI publishing?",
            answer:
              "Skipping positioning. If the reader promise is weak, more automation only produces more undifferentiated books.",
          },
          {
            question: "How many quality checks should an AI-assisted book have?",
            answer:
              "At minimum: outline review, chapter review, full-manuscript consistency pass, metadata review, cover review and final file review.",
          },
        ],
      },
      fr: {
        slug: "workflow-publication-livre-ia",
        title: "Workflow de publication de livre IA : de l'idée de niche au livre prêt à publier",
        description:
          "Un workflow complet pour l'édition assistée par IA : validation de niche, plan, manuscrit, édition, couverture, métadonnées et contrôle qualité.",
        keywords: [
          "workflow publication livre IA",
          "process édition IA",
          "workflow KDP",
          "génération manuscrit IA",
        ],
        category: "Workflow",
        intro: [
          "L'IA peut accélérer l'édition, mais cette accélération ne crée de valeur que si le processus est contrôlé. Un bon workflow sépare la recherche, la direction éditoriale, la rédaction, l'édition, le packaging et l'assurance qualité.",
          "Le but n'est pas de publier plus de livres faibles. Le but est de réduire le travail répétitif tout en gardant un standard humain sur la promesse, la structure, l'originalité et l'expérience lecteur.",
        ],
        sections: [
          {
            id: "positionnement",
            title: "Commencer par une promesse de marché, pas par un prompt",
            body: [
              "Tout workflow rentable commence par une promesse lecteur claire. Définissez à qui le livre s'adresse, quelle transformation il promet, ce que les concurrents couvrent déjà et l'angle qui rend votre livre plus net ou plus utile.",
              "Un brief de niche utile précise le profil lecteur, les douleurs, le vocabulaire de recherche, la profondeur attendue, le ton, les contraintes de format et la raison d'exister du livre.",
            ],
            bullets: [
              "Lister les questions principales des lecteurs avant de générer les chapitres.",
              "Repérer les plaintes récurrentes dans les avis de livres concurrents.",
              "Définir une promesse principale et trois bénéfices secondaires.",
              "Écarter les niches où vous n'apportez ni clarté, ni structure, ni point de vue.",
            ],
          },
          {
            id: "plan",
            title: "Construire un plan qui résiste à l'édition",
            body: [
              "Le plan est la couche de contrôle. Il définit la séquence des idées, le rôle de chaque chapitre et les exemples ou preuves nécessaires avant la rédaction.",
              "En non-fiction, les chapitres doivent suivre les étapes d'une transformation. En fiction, les scènes doivent faire avancer la tension et l'arc des personnages. Dans les deux cas, demandez à l'IA de critiquer les trous avant d'écrire.",
            ],
            bullets: [
              "Écrire un objectif pour chaque chapitre.",
              "Préciser ce que le chapitre ne doit pas répéter.",
              "Ajouter exemples, exercices ou beats narratifs avant la rédaction.",
              "Créer un glossaire pour les termes, personnages ou choix de voix.",
            ],
          },
          {
            id: "redaction",
            title: "Rédiger en passes contrôlées",
            body: [
              "La qualité long format augmente quand la rédaction se fait par passes. Générez un premier chapitre, évaluez-le face au plan, demandez des réécritures ciblées, puis éditez humainement le rythme, la clarté et l'utilité.",
              "Utilisez le modèle pour produire des options, mais gardez les critères d'acceptation hors du modèle : promesse lecteur, prudence factuelle, originalité, voix et formatage.",
            ],
            bullets: [
              "Rédiger chapitre par chapitre plutôt que demander un livre entier d'un coup.",
              "Utiliser une checklist de révision après chaque chapitre.",
              "Suivre les expressions répétées et supprimer le remplissage générique.",
              "Faire une passe finale de cohérence sur les titres, exemples et termes.",
            ],
          },
          {
            id: "packaging",
            title: "Packager le livre comme un produit",
            body: [
              "Les lecteurs découvrent un livre par son titre, sa couverture, son sous-titre, sa description et ses premières pages. Le packaging est du design produit, pas de la décoration.",
              "Avant publication, vérifiez que la couverture communique le genre, que les métadonnées répondent à l'intention de recherche, que la description vend la transformation et que le format intérieur paraît professionnel.",
            ],
            bullets: [
              "Créer plusieurs variantes de titres avant le choix final.",
              "Concevoir première de couverture, dos et quatrième ensemble.",
              "Écrire la description une fois le plan et le concept de couverture verrouillés.",
              "Valider le package final avec un test de lecteur froid.",
            ],
          },
        ],
        checklist: [
          "Le brief de niche contient lecteur, promesse, concurrents et différenciation.",
          "Le plan liste objectif, points clés et exemples pour chaque chapitre.",
          "Chaque brouillon IA passe par une révision humaine de clarté, originalité et utilité.",
          "Couverture, titre, sous-titre et description communiquent la même promesse.",
          "Les fichiers finaux sont testés sur les formats et plateformes visés.",
        ],
        faq: [
          {
            question: "L'IA peut-elle écrire un livre entier seule ?",
            answer:
              "Elle peut générer de longs manuscrits, mais un livre publiable demande encore direction éditoriale, vérification, structure, goût et contrôle qualité.",
          },
          {
            question: "Quelle est la plus grosse erreur en édition IA ?",
            answer:
              "Sauter le positionnement. Si la promesse lecteur est faible, l'automatisation produit seulement plus de livres indifférenciés.",
          },
          {
            question: "Combien de contrôles qualité faut-il prévoir ?",
            answer:
              "Au minimum : revue du plan, revue par chapitre, cohérence globale, métadonnées, couverture et vérification finale des fichiers.",
          },
        ],
      },
      it: {
        slug: "workflow-pubblicazione-libri-ia",
        title: "Workflow di pubblicazione con IA: dall'idea di nicchia al libro pronto",
        description:
          "Un workflow completo per l'editoria assistita dall'IA: nicchia, outline, manoscritto, editing, copertina, metadati e controllo qualità.",
        keywords: [
          "workflow pubblicazione libri IA",
          "processo editoriale IA",
          "workflow KDP",
          "generazione manoscritto IA",
        ],
        category: "Workflow",
        intro: [
          "L'IA può accelerare l'editoria, ma l'accelerazione crea valore solo quando il processo è controllato. Un buon workflow separa ricerca, direzione creativa, stesura, editing, packaging e controllo qualità.",
          "L'obiettivo non è pubblicare più libri deboli. L'obiettivo è ridurre il lavoro ripetitivo mantenendo uno standard umano su promessa, struttura, originalità ed esperienza del lettore.",
        ],
        sections: [
          {
            id: "posizionamento",
            title: "Parti da una promessa di mercato, non da un prompt",
            body: [
              "Ogni workflow redditizio inizia con una promessa chiara per il lettore. Definisci chi servi, quale trasformazione prometti, cosa coprono già i concorrenti e dove il tuo angolo è più utile.",
              "Un brief di nicchia pratico include profilo del lettore, problemi, linguaggio di ricerca, profondità attesa, tono, vincoli di formato e ragione per cui il libro deve esistere.",
            ],
            bullets: [
              "Mappa le domande dei lettori prima dei capitoli.",
              "Raccogli le lamentele ricorrenti nelle recensioni dei concorrenti.",
              "Definisci una promessa primaria e tre risultati secondari.",
              "Scarta le nicchie dove non puoi aggiungere chiarezza, struttura o gusto.",
            ],
          },
          {
            id: "outline",
            title: "Crea un outline che regga l'editing",
            body: [
              "L'outline è il livello di controllo. Deve definire sequenza delle idee, ruolo di ogni capitolo ed esempi necessari prima della stesura.",
              "Nella non-fiction, i capitoli sono passi di una trasformazione. Nella fiction, le scene sono punti di pressione nell'arco dei personaggi. In entrambi i casi, fai criticare i vuoti all'IA prima di scrivere.",
            ],
            bullets: [
              "Scrivi l'obiettivo di ogni capitolo.",
              "Specifica cosa il capitolo non deve ripetere.",
              "Aggiungi esempi, esercizi o beat narrativi prima della bozza.",
              "Crea un glossario per termini, personaggi o voce del brand.",
            ],
          },
          {
            id: "stesura",
            title: "Scrivi in passaggi controllati",
            body: [
              "La qualità del long form aumenta quando la stesura avviene per passaggi. Genera una bozza, confrontala con l'outline, chiedi riscritture mirate e poi edita ritmo, chiarezza e utilità.",
              "Usa il modello per espansioni e alternative, ma mantieni i criteri di accettazione fuori dal modello: promessa al lettore, cautela sui fatti, originalità, voce e formattazione.",
            ],
            bullets: [
              "Lavora capitolo per capitolo, non libro intero in un solo prompt.",
              "Usa una checklist di revisione dopo ogni capitolo.",
              "Traccia frasi ripetute e rimuovi il riempitivo generico.",
              "Esegui un controllo finale su titoli, esempi e terminologia.",
            ],
          },
          {
            id: "packaging",
            title: "Trasforma il libro in un prodotto",
            body: [
              "I lettori scoprono un libro da titolo, copertina, sottotitolo, descrizione e prime pagine. Il packaging è product design, non decorazione.",
              "Prima dell'upload, verifica che la copertina comunichi il genere, i metadati rispondano all'intento di ricerca e la descrizione venda la trasformazione.",
            ],
            bullets: [
              "Crea varianti di titolo prima della scelta finale.",
              "Progetta fronte, dorso e retro copertina insieme.",
              "Scrivi la descrizione dopo aver bloccato outline e concept visivo.",
              "Valida il pacchetto finale con un lettore freddo.",
            ],
          },
        ],
        checklist: [
          "Il brief include lettore, promessa, concorrenti e differenziazione.",
          "L'outline elenca obiettivo, punti chiave ed esempi per ogni capitolo.",
          "Ogni bozza IA riceve una revisione umana di chiarezza, originalità e utilità.",
          "Copertina, titolo, sottotitolo e descrizione comunicano la stessa promessa.",
          "I file finali sono controllati nei formati e marketplace previsti.",
        ],
        faq: [
          {
            question: "L'IA può scrivere un libro intero da sola?",
            answer:
              "Può generare manoscritti lunghi, ma un libro pubblicabile richiede ancora direzione editoriale, verifica, struttura, gusto e controllo qualità.",
          },
          {
            question: "Qual è l'errore principale nell'editoria IA?",
            answer:
              "Saltare il posizionamento. Se la promessa al lettore è debole, l'automazione produce solo più libri indistinti.",
          },
          {
            question: "Quanti controlli qualità servono?",
            answer:
              "Almeno: revisione outline, capitoli, coerenza completa, metadati, copertina e file finali.",
          },
        ],
      },
      de: {
        slug: "ki-buchveroeffentlichung-workflow",
        title: "KI-Buchveröffentlichung: vom Nischenkonzept zum uploadfertigen Buch",
        description:
          "Ein kompletter Workflow für KI-gestütztes Publishing: Nische, Outline, Manuskript, Lektorat, Cover, Metadaten und Qualitätskontrolle.",
        keywords: [
          "KI Buchveröffentlichung Workflow",
          "KI Publishing Prozess",
          "KDP Workflow",
          "KI Manuskript erstellen",
        ],
        category: "Workflow",
        intro: [
          "KI kann Publishing beschleunigen, aber Beschleunigung wirkt nur, wenn der Prozess kontrolliert ist. Ein guter Workflow trennt Recherche, kreative Richtung, Entwurf, Lektorat, Packaging und Qualitätssicherung.",
          "Das Ziel ist nicht, mehr schwache Bücher zu veröffentlichen. Das Ziel ist, wiederholbare Arbeit zu komprimieren und trotzdem einen menschlichen Standard für Versprechen, Struktur, Originalität und Leseerlebnis zu halten.",
        ],
        sections: [
          {
            id: "positionierung",
            title: "Starte mit einem Marktversprechen, nicht mit einem Prompt",
            body: [
              "Jeder profitable Publishing-Workflow beginnt mit einem klaren Leserinnenversprechen. Definiere, wem das Buch dient, welche Veränderung es bietet, was Konkurrenzbücher bereits abdecken und wo dein Blickwinkel nützlicher ist.",
              "Ein praktischer Nischenbrief enthält Leserprofil, Probleme, Suchsprache, erwartete Tiefe, Ton, Formatgrenzen und den Grund, warum dieses Buch existieren sollte.",
            ],
            bullets: [
              "Sammle die wichtigsten Leserfragen vor der Kapitelplanung.",
              "Analysiere wiederkehrende Beschwerden in Konkurrenzrezensionen.",
              "Definiere ein Hauptversprechen und drei unterstützende Ergebnisse.",
              "Verwerfe Nischen, in denen du keine Klarheit, Struktur oder Haltung ergänzt.",
            ],
          },
          {
            id: "outline",
            title: "Baue eine Outline, die dem Lektorat standhält",
            body: [
              "Die Outline ist die Kontrollschicht. Sie definiert die Reihenfolge der Ideen, die Aufgabe jedes Kapitels und welche Beispiele oder Belege vor dem Schreiben nötig sind.",
              "In Nonfiction sind Kapitel Schritte einer Transformation. In Fiction sind Szenen Druckpunkte im Figurenbogen. In beiden Fällen sollte die KI zuerst Lücken kritisieren, bevor sie schreibt.",
            ],
            bullets: [
              "Formuliere ein Ziel für jedes Kapitel.",
              "Lege fest, was das Kapitel nicht wiederholen darf.",
              "Ergänze Beispiele, Übungen oder Story-Beats vor dem Entwurf.",
              "Pflege ein Glossar für Begriffe, Figuren und Markenstimme.",
            ],
          },
          {
            id: "entwurf",
            title: "Schreibe in kontrollierten Durchläufen",
            body: [
              "Langform wird besser, wenn Entwürfe in Durchläufen entstehen. Erzeuge ein Rohkapitel, prüfe es gegen die Outline, fordere gezielte Überarbeitungen an und editiere anschließend Rhythmus, Klarheit und Nutzen.",
              "Nutze das Modell für Erweiterungen und Varianten, aber halte die Akzeptanzkriterien außerhalb des Modells: Leserversprechen, Faktenvorsicht, Originalität, Stimme und Format.",
            ],
            bullets: [
              "Arbeite kapitelweise statt mit einem Prompt für das ganze Buch.",
              "Nutze nach jedem Kapitel eine Revisionscheckliste.",
              "Entferne wiederholte Formulierungen und generische Füllsätze.",
              "Prüfe am Ende Titel, Beispiele und Terminologie auf Konsistenz.",
            ],
          },
          {
            id: "packaging",
            title: "Verpacke das Buch wie ein Produkt",
            body: [
              "Leser entdecken ein Buch über Titel, Cover, Untertitel, Beschreibung und Leseprobe. Packaging ist Produktdesign, nicht Dekoration.",
              "Vor dem Upload sollte das Cover das Genre kommunizieren, die Metadaten zur Suchintention passen, die Beschreibung die Transformation verkaufen und das Innenlayout professionell wirken.",
            ],
            bullets: [
              "Entwickle Titelvarianten vor der finalen Auswahl.",
              "Gestalte Vorderseite, Rücken und Rückseite gemeinsam.",
              "Schreibe die Beschreibung, nachdem Outline und Coverkonzept stehen.",
              "Validiere das finale Paket mit einem kalten Lesetest.",
            ],
          },
        ],
        checklist: [
          "Der Nischenbrief enthält Leser, Versprechen, Konkurrenz und Differenzierung.",
          "Die Outline enthält Kapitelziel, Kernpunkte und Beispiele für jedes Kapitel.",
          "Jeder KI-Entwurf erhält eine menschliche Prüfung auf Klarheit, Originalität und Nutzen.",
          "Cover, Titel, Untertitel und Beschreibung kommunizieren dasselbe Versprechen.",
          "Finale Dateien werden in den vorgesehenen Formaten und Marktplätzen geprüft.",
        ],
        faq: [
          {
            question: "Kann KI ein ganzes Buch allein schreiben?",
            answer:
              "Sie kann lange Manuskripte erzeugen, aber ein veröffentlichbares Buch braucht weiterhin redaktionelle Richtung, Prüfung, Struktur, Geschmack und Qualitätskontrolle.",
          },
          {
            question: "Was ist der größte Fehler im KI-Publishing?",
            answer:
              "Positionierung zu überspringen. Wenn das Leserversprechen schwach ist, produziert Automatisierung nur mehr austauschbare Bücher.",
          },
          {
            question: "Wie viele Qualitätschecks braucht ein KI-Buch?",
            answer:
              "Mindestens Outline-Review, Kapitelreview, Konsistenzprüfung, Metadatenprüfung, Coverprüfung und finale Dateiprüfung.",
          },
        ],
      },
    },
  },
  {
    key: "book-seo-metadata",
    date: "2026-06-06",
    updated: "2026-06-06",
    readingTime: 12,
    accent: {
      start: "#fff3e6",
      middle: "#ffd9c2",
      end: "#f3f0ff",
    },
    translations: {
      en: {
        slug: "book-seo-metadata-kdp",
        title: "Book SEO metadata: titles, subtitles, descriptions and keywords that sell",
        description:
          "Learn how to structure book metadata for search intent, conversion and long-term catalog clarity without keyword stuffing.",
        keywords: [
          "book SEO metadata",
          "KDP keywords",
          "book description SEO",
          "book title optimization",
        ],
        category: "SEO",
        intro: [
          "Book SEO is not a trick for hiding keywords in every field. It is the discipline of making the right reader understand the book quickly, trust the promise and find it through the language they already use.",
          "Strong metadata connects four layers: search intent, marketplace category, conversion copy and long-term catalog positioning.",
        ],
        sections: [
          {
            id: "intent",
            title: "Translate reader intent into metadata",
            body: [
              "Readers do not search for your internal concept. They search for outcomes, genres, problems, tropes, formats and recognizable language. Your metadata should mirror that language while staying natural.",
              "Start by grouping search phrases by intent: informational, comparison, transformation, genre expectation and gift or use case. Then decide which intent belongs in the title, subtitle, description and keywords.",
            ],
            bullets: [
              "Use the title for clarity and memorability.",
              "Use the subtitle for promise, audience and differentiator.",
              "Use the description for proof, emotion and buying logic.",
              "Use keyword fields for relevant phrases that do not fit naturally elsewhere.",
            ],
          },
          {
            id: "title",
            title: "Make the title clear before it is clever",
            body: [
              "A title must stop the right reader, not impress every reader. The best titles combine a memorable hook with a category signal or promise.",
              "For nonfiction, test whether a reader can infer the benefit in three seconds. For fiction, test whether genre, tone and emotional premise are visible.",
            ],
            bullets: [
              "Avoid titles that only make sense after reading the book.",
              "Keep subtitle claims specific and believable.",
              "Do not repeat the exact same phrase across every metadata field.",
              "Use series names consistently when building a catalog.",
            ],
          },
          {
            id: "description",
            title: "Write descriptions as conversion pages",
            body: [
              "A good book description has a hook, reader identification, outcome, credibility signals, format expectation and a clean call to action. It should sound like the book, not like a generic ad.",
              "Use short paragraphs, strong first lines and scannable benefits. The description should answer: Is this for me? What will I get? Why this book instead of another one?",
            ],
            bullets: [
              "Lead with the pain, desire or premise.",
              "Explain the transformation in concrete terms.",
              "Add what is inside without dumping the table of contents.",
              "End with a simple reader action.",
            ],
          },
          {
            id: "maintenance",
            title: "Maintain metadata as the catalog grows",
            body: [
              "SEO metadata is not finished at upload. As the catalog grows, you need naming conventions, keyword maps, category notes and a schedule for refreshing weak listings.",
              "Track why every metadata choice was made. This makes future optimization faster and prevents internal competition between books that should target different intents.",
            ],
            bullets: [
              "Keep one metadata brief per title.",
              "Record primary and secondary search intents.",
              "Review underperforming descriptions before changing covers.",
              "Preserve consistent series and author branding.",
            ],
          },
        ],
        checklist: [
          "Primary search intent is explicit before title generation.",
          "Title is memorable, category-aware and easy to understand.",
          "Subtitle contains audience, promise or differentiator without hype.",
          "Description sells the outcome with short scannable sections.",
          "Keyword choices are documented for future optimization.",
        ],
        faq: [
          {
            question: "Should book metadata include exact keywords?",
            answer:
              "Use exact phrases only when they are relevant and natural. Metadata should help the right reader and marketplace understand the book, not feel stuffed.",
          },
          {
            question: "What matters most: title or description?",
            answer:
              "They do different jobs. The title earns attention and relevance; the description converts interest into a purchase decision.",
          },
          {
            question: "How often should metadata be updated?",
            answer:
              "Review it when you have enough performance signal, when the category shifts or when the catalog strategy changes. Avoid constant random edits.",
          },
        ],
      },
      fr: {
        slug: "seo-livre-metadonnees-kdp",
        title: "SEO livre : titres, sous-titres, descriptions et mots-clés qui vendent",
        description:
          "Apprenez à structurer les métadonnées d'un livre pour l'intention de recherche, la conversion et la clarté du catalogue sans bourrage de mots-clés.",
        keywords: [
          "SEO livre",
          "mots-clés KDP",
          "description livre SEO",
          "optimisation titre livre",
        ],
        category: "SEO",
        intro: [
          "Le SEO livre n'est pas une astuce pour cacher des mots-clés partout. C'est l'art de faire comprendre rapidement le livre au bon lecteur, de rendre la promesse crédible et de le rendre trouvable avec le langage que les lecteurs utilisent déjà.",
          "De bonnes métadonnées relient quatre couches : intention de recherche, catégorie marketplace, copywriting de conversion et positionnement long terme du catalogue.",
        ],
        sections: [
          {
            id: "intention",
            title: "Traduire l'intention lecteur en métadonnées",
            body: [
              "Les lecteurs ne cherchent pas votre concept interne. Ils cherchent des résultats, des genres, des problèmes, des tropes, des formats et un langage reconnaissable.",
              "Regroupez les requêtes par intention : information, comparaison, transformation, attente de genre, cadeau ou cas d'usage. Puis décidez ce qui va dans le titre, le sous-titre, la description et les mots-clés.",
            ],
            bullets: [
              "Utiliser le titre pour la clarté et la mémorisation.",
              "Utiliser le sous-titre pour la promesse, l'audience et la différence.",
              "Utiliser la description pour la preuve, l'émotion et la logique d'achat.",
              "Utiliser les champs mots-clés pour les phrases pertinentes qui ne rentrent pas ailleurs.",
            ],
          },
          {
            id: "titre",
            title: "Rendre le titre clair avant de le rendre malin",
            body: [
              "Un titre doit arrêter le bon lecteur, pas impressionner tout le monde. Les meilleurs titres combinent un hook mémorable avec un signal de catégorie ou une promesse.",
              "En non-fiction, testez si le bénéfice se comprend en trois secondes. En fiction, testez si le genre, le ton et la prémisse émotionnelle sont visibles.",
            ],
            bullets: [
              "Éviter les titres compréhensibles seulement après lecture.",
              "Garder des promesses spécifiques et crédibles.",
              "Ne pas répéter exactement la même phrase dans tous les champs.",
              "Utiliser les noms de séries de façon cohérente.",
            ],
          },
          {
            id: "description",
            title: "Écrire la description comme une page de conversion",
            body: [
              "Une bonne description contient un hook, une identification lecteur, un résultat, des signaux de crédibilité, une attente de format et un appel à l'action clair.",
              "Utilisez des paragraphes courts, une première ligne forte et des bénéfices scannables. La description doit répondre : est-ce pour moi, que vais-je obtenir, pourquoi ce livre plutôt qu'un autre ?",
            ],
            bullets: [
              "Ouvrir sur la douleur, le désir ou la prémisse.",
              "Expliquer la transformation en termes concrets.",
              "Montrer ce qu'il y a dedans sans copier la table des matières.",
              "Terminer par une action simple.",
            ],
          },
          {
            id: "maintenance",
            title: "Maintenir les métadonnées quand le catalogue grandit",
            body: [
              "Les métadonnées SEO ne sont pas terminées au moment de l'upload. Avec un catalogue, il faut des conventions, des cartes de mots-clés, des notes de catégorie et un calendrier de révision.",
              "Documentez pourquoi chaque choix a été fait. Cela accélère l'optimisation et évite la concurrence interne entre livres qui devraient viser des intentions différentes.",
            ],
            bullets: [
              "Garder un brief de métadonnées par titre.",
              "Noter les intentions primaires et secondaires.",
              "Réviser les descriptions faibles avant de changer les couvertures.",
              "Préserver la cohérence des séries et des noms d'auteur.",
            ],
          },
        ],
        checklist: [
          "L'intention de recherche principale est claire avant les titres.",
          "Le titre est mémorisable, lisible et aligné avec la catégorie.",
          "Le sous-titre contient audience, promesse ou différenciation sans hype.",
          "La description vend le résultat avec des blocs courts et scannables.",
          "Les choix de mots-clés sont documentés pour les futures optimisations.",
        ],
        faq: [
          {
            question: "Faut-il mettre des mots-clés exacts dans les métadonnées ?",
            answer:
              "Oui seulement s'ils sont pertinents et naturels. Les métadonnées doivent aider le lecteur et la plateforme à comprendre le livre, pas donner une impression de bourrage.",
          },
          {
            question: "Qu'est-ce qui compte le plus : titre ou description ?",
            answer:
              "Ils ont des rôles différents. Le titre capte l'attention et la pertinence ; la description transforme l'intérêt en décision d'achat.",
          },
          {
            question: "À quelle fréquence mettre à jour les métadonnées ?",
            answer:
              "Quand vous avez assez de signal, quand la catégorie change ou quand la stratégie catalogue évolue. Évitez les modifications aléatoires permanentes.",
          },
        ],
      },
      it: {
        slug: "seo-libri-metadati-kdp",
        title: "SEO per libri: titoli, sottotitoli, descrizioni e keyword che vendono",
        description:
          "Come strutturare i metadati di un libro per intento di ricerca, conversione e chiarezza del catalogo senza keyword stuffing.",
        keywords: [
          "SEO libri",
          "keyword KDP",
          "descrizione libro SEO",
          "ottimizzazione titolo libro",
        ],
        category: "SEO",
        intro: [
          "La SEO per libri non è un trucco per nascondere keyword ovunque. È la disciplina che permette al lettore giusto di capire il libro, fidarsi della promessa e trovarlo con il linguaggio che usa già.",
          "Metadati forti collegano quattro livelli: intento di ricerca, categoria marketplace, copy di conversione e posizionamento di catalogo.",
        ],
        sections: [
          {
            id: "intento",
            title: "Traduci l'intento del lettore in metadati",
            body: [
              "I lettori non cercano il tuo concetto interno. Cercano risultati, generi, problemi, tropi, formati e parole riconoscibili.",
              "Raggruppa le frasi di ricerca per intento: informativo, comparativo, trasformativo, aspettativa di genere, regalo o uso pratico. Poi assegna ogni intento a titolo, sottotitolo, descrizione o keyword.",
            ],
            bullets: [
              "Usa il titolo per chiarezza e memorabilità.",
              "Usa il sottotitolo per promessa, audience e differenza.",
              "Usa la descrizione per prova, emozione e logica d'acquisto.",
              "Usa i campi keyword per frasi rilevanti che non entrano altrove.",
            ],
          },
          {
            id: "titolo",
            title: "Rendi il titolo chiaro prima che brillante",
            body: [
              "Un titolo deve fermare il lettore giusto, non impressionare tutti. I titoli migliori uniscono un hook memorabile a un segnale di categoria o promessa.",
              "Nella non-fiction, verifica se il beneficio si capisce in tre secondi. Nella fiction, verifica se genere, tono e premessa emotiva sono visibili.",
            ],
            bullets: [
              "Evita titoli comprensibili solo dopo la lettura.",
              "Mantieni promesse specifiche e credibili.",
              "Non ripetere la stessa frase in ogni campo.",
              "Usa nomi di serie in modo coerente.",
            ],
          },
          {
            id: "descrizione",
            title: "Scrivi la descrizione come una pagina di conversione",
            body: [
              "Una buona descrizione contiene hook, identificazione del lettore, risultato, segnali di credibilità, aspettativa di formato e call to action pulita.",
              "Usa paragrafi brevi, prime righe forti e benefici scansionabili. La descrizione deve rispondere: è per me, cosa ottengo, perché questo libro?",
            ],
            bullets: [
              "Apri con dolore, desiderio o premessa.",
              "Spiega la trasformazione in termini concreti.",
              "Mostra cosa contiene senza copiare l'indice.",
              "Chiudi con un'azione semplice.",
            ],
          },
          {
            id: "manutenzione",
            title: "Mantieni i metadati mentre il catalogo cresce",
            body: [
              "I metadati SEO non finiscono all'upload. Quando il catalogo cresce servono convenzioni, mappe keyword, note di categoria e revisioni programmate.",
              "Traccia il perché di ogni scelta. Questo rende più rapida l'ottimizzazione futura ed evita competizione interna tra libri simili.",
            ],
            bullets: [
              "Tieni un brief metadati per titolo.",
              "Registra intenti primari e secondari.",
              "Rivedi descrizioni deboli prima di cambiare copertina.",
              "Mantieni coerenza di serie e branding autoriale.",
            ],
          },
        ],
        checklist: [
          "L'intento principale è definito prima dei titoli.",
          "Il titolo è memorabile, chiaro e coerente con la categoria.",
          "Il sottotitolo contiene audience, promessa o differenza senza hype.",
          "La descrizione vende il risultato con blocchi brevi e leggibili.",
          "Le keyword sono documentate per ottimizzazioni future.",
        ],
        faq: [
          {
            question: "I metadati devono includere keyword esatte?",
            answer:
              "Solo se sono rilevanti e naturali. I metadati devono aiutare lettore e marketplace a capire il libro, non sembrare keyword stuffing.",
          },
          {
            question: "Conta di più il titolo o la descrizione?",
            answer:
              "Fanno lavori diversi. Il titolo guadagna attenzione e rilevanza; la descrizione converte l'interesse in decisione d'acquisto.",
          },
          {
            question: "Quanto spesso aggiornare i metadati?",
            answer:
              "Quando hai abbastanza segnale, quando cambia la categoria o quando evolve la strategia di catalogo. Evita modifiche casuali continue.",
          },
        ],
      },
      de: {
        slug: "buch-seo-metadaten-kdp",
        title: "Buch-SEO-Metadaten: Titel, Untertitel, Beschreibungen und Keywords",
        description:
          "So strukturierst du Buchmetadaten für Suchintention, Conversion und langfristige Katalogklarheit ohne Keyword-Stuffing.",
        keywords: [
          "Buch SEO Metadaten",
          "KDP Keywords",
          "Buchbeschreibung SEO",
          "Buchtitel optimieren",
        ],
        category: "SEO",
        intro: [
          "Buch-SEO ist kein Trick, um Keywords in jedes Feld zu stopfen. Es ist die Disziplin, dem richtigen Leser schnell klarzumachen, worum es geht, warum das Versprechen glaubwürdig ist und wie er das Buch findet.",
          "Starke Metadaten verbinden vier Ebenen: Suchintention, Marketplace-Kategorie, Conversion-Text und langfristige Katalogpositionierung.",
        ],
        sections: [
          {
            id: "intention",
            title: "Übersetze Leserintention in Metadaten",
            body: [
              "Leser suchen nicht nach deinem internen Konzept. Sie suchen nach Ergebnissen, Genres, Problemen, Tropes, Formaten und vertrauter Sprache.",
              "Gruppiere Suchphrasen nach Intention: Information, Vergleich, Transformation, Genreerwartung, Geschenk oder Anwendungsfall. Danach verteilst du sie auf Titel, Untertitel, Beschreibung und Keywords.",
            ],
            bullets: [
              "Nutze den Titel für Klarheit und Merkfähigkeit.",
              "Nutze den Untertitel für Versprechen, Zielgruppe und Differenzierung.",
              "Nutze die Beschreibung für Beweis, Emotion und Kauflogik.",
              "Nutze Keyword-Felder für relevante Phrasen, die sonst nicht natürlich passen.",
            ],
          },
          {
            id: "titel",
            title: "Mach den Titel klar, bevor er clever ist",
            body: [
              "Ein Titel muss den richtigen Leser stoppen, nicht alle beeindrucken. Die besten Titel verbinden einen merkbaren Hook mit Kategorie oder Versprechen.",
              "Bei Nonfiction sollte der Nutzen in drei Sekunden sichtbar sein. Bei Fiction sollten Genre, Ton und emotionaler Kern erkennbar sein.",
            ],
            bullets: [
              "Vermeide Titel, die erst nach der Lektüre Sinn ergeben.",
              "Halte Untertitel spezifisch und glaubwürdig.",
              "Wiederhole nicht exakt dieselbe Phrase in jedem Feld.",
              "Nutze Seriennamen konsistent.",
            ],
          },
          {
            id: "beschreibung",
            title: "Schreibe Beschreibungen wie Conversion-Seiten",
            body: [
              "Eine gute Buchbeschreibung hat Hook, Leseridentifikation, Ergebnis, Glaubwürdigkeit, Formatklarheit und eine saubere Handlungsaufforderung.",
              "Nutze kurze Absätze, starke erste Zeilen und scanbare Nutzenpunkte. Die Beschreibung beantwortet: Ist das für mich? Was bekomme ich? Warum dieses Buch?",
            ],
            bullets: [
              "Beginne mit Schmerz, Wunsch oder Prämisse.",
              "Erkläre die Transformation konkret.",
              "Zeige den Inhalt, ohne das Inhaltsverzeichnis zu kopieren.",
              "Schließe mit einer einfachen Leserhandlung.",
            ],
          },
          {
            id: "pflege",
            title: "Pflege Metadaten, wenn der Katalog wächst",
            body: [
              "SEO-Metadaten sind beim Upload nicht fertig. Mit wachsendem Katalog brauchst du Namenskonventionen, Keyword-Maps, Kategorienotizen und geplante Reviews.",
              "Dokumentiere, warum jede Entscheidung getroffen wurde. So optimierst du später schneller und vermeidest interne Konkurrenz zwischen Titeln.",
            ],
            bullets: [
              "Halte einen Metadatenbrief pro Titel.",
              "Notiere primäre und sekundäre Suchintentionen.",
              "Prüfe schwache Beschreibungen vor Coveränderungen.",
              "Bewahre konsistente Serien- und Autorenmarken.",
            ],
          },
        ],
        checklist: [
          "Die primäre Suchintention steht vor der Titelentwicklung fest.",
          "Der Titel ist merkbar, kategorieklar und leicht verständlich.",
          "Der Untertitel enthält Zielgruppe, Versprechen oder Differenzierung ohne Hype.",
          "Die Beschreibung verkauft das Ergebnis in kurzen scanbaren Abschnitten.",
          "Keyword-Entscheidungen sind für spätere Optimierung dokumentiert.",
        ],
        faq: [
          {
            question: "Sollten Buchmetadaten exakte Keywords enthalten?",
            answer:
              "Nur, wenn sie relevant und natürlich sind. Metadaten sollen Leser und Marketplace helfen, das Buch zu verstehen, nicht überladen wirken.",
          },
          {
            question: "Was ist wichtiger: Titel oder Beschreibung?",
            answer:
              "Sie erfüllen verschiedene Aufgaben. Der Titel erzeugt Aufmerksamkeit und Relevanz; die Beschreibung wandelt Interesse in Kaufabsicht.",
          },
          {
            question: "Wie oft sollten Metadaten aktualisiert werden?",
            answer:
              "Wenn genug Performance-Signal vorliegt, die Kategorie sich verändert oder die Katalogstrategie wechselt. Vermeide ständige zufällige Änderungen.",
          },
        ],
      },
    },
  },
  {
    key: "ai-cover-design",
    date: "2026-06-06",
    updated: "2026-06-06",
    readingTime: 11,
    accent: {
      start: "#f3f0ff",
      middle: "#ddd6fe",
      end: "#bfe9ff",
    },
    translations: {
      en: {
        slug: "ai-book-cover-design-front-spine-back",
        title: "AI book cover design: front cover, spine and back cover that convert",
        description:
          "A practical guide to AI-assisted book cover design for genre clarity, print readiness, typography, spine, back cover and marketplace thumbnails.",
        keywords: [
          "AI book cover design",
          "book cover typography",
          "KDP cover design",
          "front spine back cover",
        ],
        category: "Cover design",
        intro: [
          "A cover is not only an image. It is a promise, a genre signal and a conversion asset that must work as a thumbnail, a product page visual and a print object.",
          "AI image tools can create strong raw material, but cover design still needs composition, typography, hierarchy and print-aware layout.",
        ],
        sections: [
          {
            id: "genre",
            title: "Design for genre recognition first",
            body: [
              "Readers use covers to sort books quickly. Before aesthetics, define the genre codes: color range, typography style, subject matter, composition density and emotional tone.",
              "AI prompts should include these codes explicitly. Otherwise, you may get beautiful images that fail the marketplace test because they look like the wrong category.",
            ],
            bullets: [
              "Collect ten top covers in the exact subgenre.",
              "Identify shared typography and composition patterns.",
              "Write a visual brief before generating images.",
              "Reject images that are attractive but category-confusing.",
            ],
          },
          {
            id: "thumbnail",
            title: "Win the thumbnail before the full-size cover",
            body: [
              "Most buyers first see the cover at small size. If the title, subject and contrast disappear in thumbnail view, the cover is not ready.",
              "Design the cover in repeated zoom checks. The title should stay legible, the central shape should remain recognizable and the emotional signal should survive compression.",
            ],
            bullets: [
              "Test at mobile search-result size.",
              "Use fewer visual ideas with stronger hierarchy.",
              "Separate title and author name with clear spacing.",
              "Avoid low-contrast text on busy generated art.",
            ],
          },
          {
            id: "wrap",
            title: "Treat spine and back cover as part of the system",
            body: [
              "Print covers need more than a front image. Spine width, trim size, bleed, barcode area and back-cover copy all affect the final file.",
              "Generate or extend background art with room for text, then assemble the full wrap in a layout tool where dimensions can be controlled precisely.",
            ],
            bullets: [
              "Reserve quiet space for back-cover description.",
              "Keep spine typography simple and centered.",
              "Leave barcode and margin areas clean.",
              "Export only after checking platform templates.",
            ],
          },
          {
            id: "qa",
            title: "Run a cover QA pass before upload",
            body: [
              "AI-generated images can contain artifacts, strange hands, broken objects, unreadable signs or style inconsistencies. These details weaken trust even when the overall image looks strong.",
              "A final QA pass should inspect edges, faces, hands, text, shadows, print contrast, typography alignment and whether the cover still matches the book promise.",
            ],
            bullets: [
              "Check the cover at thumbnail, tablet and print-preview sizes.",
              "Inspect generated details at 100 percent zoom.",
              "Confirm title hierarchy against competing covers.",
              "Keep editable source files for future variants.",
            ],
          },
        ],
        checklist: [
          "The cover matches the exact subgenre before personal taste is considered.",
          "Title and main visual remain legible at thumbnail size.",
          "Full wrap accounts for trim size, bleed, spine and back cover copy.",
          "Typography is designed separately from generated imagery.",
          "A final artifact and print-readiness QA pass is complete.",
        ],
        faq: [
          {
            question: "Can AI generate a finished book cover?",
            answer:
              "It can generate strong imagery, but finished covers need typography, layout, dimensions, bleed, spine and back-cover handling.",
          },
          {
            question: "What makes an AI cover look amateur?",
            answer:
              "Weak typography, wrong genre codes, cluttered imagery, low contrast and uncorrected image artifacts are the most common signals.",
          },
          {
            question: "Should the cover be unique or genre-consistent?",
            answer:
              "Both. It should be familiar enough to be recognized and distinctive enough to be remembered.",
          },
        ],
      },
      fr: {
        slug: "couverture-livre-ia-premiere-dos-quatrieme",
        title: "Couverture de livre IA : première, dos et quatrième qui convertissent",
        description:
          "Guide pratique de design de couverture assisté par IA : codes de genre, typographie, dos, quatrième, print et miniatures marketplace.",
        keywords: [
          "couverture livre IA",
          "typographie couverture livre",
          "couverture KDP",
          "première dos quatrième",
        ],
        category: "Design couverture",
        intro: [
          "Une couverture n'est pas seulement une image. C'est une promesse, un signal de genre et un asset de conversion qui doit fonctionner en miniature, sur page produit et en objet imprimé.",
          "Les outils d'image IA peuvent produire une excellente matière première, mais le design de couverture demande encore composition, typographie, hiérarchie et logique print.",
        ],
        sections: [
          {
            id: "genre",
            title: "Designer d'abord pour la reconnaissance de genre",
            body: [
              "Les lecteurs utilisent les couvertures pour trier les livres très vite. Avant l'esthétique, définissez les codes du genre : couleurs, typographie, sujet, densité de composition et ton émotionnel.",
              "Les prompts d'image doivent inclure ces codes. Sinon, vous obtenez parfois une belle image qui échoue en marketplace parce qu'elle ressemble au mauvais rayon.",
            ],
            bullets: [
              "Collecter dix couvertures fortes dans le sous-genre exact.",
              "Repérer les patterns de typographie et de composition.",
              "Écrire un brief visuel avant de générer les images.",
              "Rejeter les images belles mais ambiguës sur la catégorie.",
            ],
          },
          {
            id: "miniature",
            title: "Gagner la miniature avant le grand format",
            body: [
              "La plupart des acheteurs voient d'abord la couverture en petit. Si le titre, le sujet ou le contraste disparaissent en miniature, la couverture n'est pas prête.",
              "Vérifiez le design à plusieurs tailles. Le titre doit rester lisible, la forme centrale reconnaissable et le signal émotionnel visible malgré la compression.",
            ],
            bullets: [
              "Tester à la taille d'un résultat mobile.",
              "Réduire le nombre d'idées visuelles et renforcer la hiérarchie.",
              "Séparer clairement titre et nom d'auteur.",
              "Éviter le texte peu contrasté sur image générée chargée.",
            ],
          },
          {
            id: "wrap",
            title: "Traiter le dos et la quatrième comme un système",
            body: [
              "Une couverture print ne se limite pas à la première. Largeur du dos, format, fonds perdus, zone code-barres et texte de quatrième influencent le fichier final.",
              "Générez ou étendez l'art avec des zones calmes pour le texte, puis assemblez la couverture complète dans un outil où les dimensions sont précises.",
            ],
            bullets: [
              "Réserver de l'espace calme pour la description de quatrième.",
              "Garder la typographie du dos simple et centrée.",
              "Laisser propres les zones de code-barres et de marges.",
              "Exporter après vérification des templates de plateforme.",
            ],
          },
          {
            id: "qa",
            title: "Faire une passe QA avant l'upload",
            body: [
              "Les images IA peuvent contenir artefacts, mains étranges, objets cassés, signes illisibles ou incohérences de style. Ces détails cassent la confiance.",
              "La QA finale inspecte bords, visages, mains, textes, ombres, contraste print, alignement typographique et cohérence avec la promesse du livre.",
            ],
            bullets: [
              "Vérifier miniature, tablette et aperçu print.",
              "Inspecter les détails générés à 100 %.",
              "Comparer la hiérarchie du titre aux couvertures concurrentes.",
              "Conserver les fichiers sources éditables.",
            ],
          },
        ],
        checklist: [
          "La couverture respecte le sous-genre exact avant le goût personnel.",
          "Titre et visuel principal restent lisibles en miniature.",
          "La couverture complète intègre format, fonds perdus, dos et quatrième.",
          "La typographie est conçue séparément de l'image générée.",
          "Une QA artefacts et print-readiness est terminée.",
        ],
        faq: [
          {
            question: "L'IA peut-elle générer une couverture finie ?",
            answer:
              "Elle peut générer une très bonne image, mais une couverture finie demande typographie, layout, dimensions, fonds perdus, dos et quatrième.",
          },
          {
            question: "Qu'est-ce qui rend une couverture IA amateur ?",
            answer:
              "Typographie faible, mauvais codes de genre, image chargée, contraste insuffisant et artefacts non corrigés.",
          },
          {
            question: "Faut-il une couverture unique ou conforme au genre ?",
            answer:
              "Les deux. Elle doit être assez familière pour être reconnue et assez distinctive pour être mémorisée.",
          },
        ],
      },
      it: {
        slug: "copertina-libro-ia-fronte-dorso-retro",
        title: "Copertina libro IA: fronte, dorso e retro che convertono",
        description:
          "Guida pratica al design di copertine assistito dall'IA: genere, tipografia, dorso, retro, stampa e thumbnail marketplace.",
        keywords: [
          "copertina libro IA",
          "tipografia copertina libro",
          "copertina KDP",
          "fronte dorso retro copertina",
        ],
        category: "Cover design",
        intro: [
          "Una copertina non è solo un'immagine. È una promessa, un segnale di genere e un asset di conversione che deve funzionare come thumbnail, visual di pagina prodotto e oggetto stampato.",
          "Gli strumenti IA possono creare ottimo materiale grezzo, ma il design di copertina richiede ancora composizione, tipografia, gerarchia e layout pronto per la stampa.",
        ],
        sections: [
          {
            id: "genere",
            title: "Progetta prima per il riconoscimento del genere",
            body: [
              "I lettori usano le copertine per ordinare i libri velocemente. Prima dell'estetica, definisci i codici del genere: colori, tipografia, soggetto, densità della composizione e tono emotivo.",
              "I prompt IA devono includere questi codici. Altrimenti rischi immagini belle che falliscono sul marketplace perché sembrano di un'altra categoria.",
            ],
            bullets: [
              "Raccogli dieci copertine top nel sotto-genere esatto.",
              "Identifica pattern di tipografia e composizione.",
              "Scrivi un brief visivo prima di generare immagini.",
              "Scarta immagini belle ma confuse per categoria.",
            ],
          },
          {
            id: "thumbnail",
            title: "Vinci la thumbnail prima della copertina grande",
            body: [
              "Molti acquirenti vedono prima la copertina in piccolo. Se titolo, soggetto e contrasto spariscono nella thumbnail, non è pronta.",
              "Controlla il design a zoom diversi. Il titolo deve restare leggibile, la forma principale riconoscibile e il segnale emotivo chiaro.",
            ],
            bullets: [
              "Testa alla dimensione di un risultato mobile.",
              "Usa meno idee visive con gerarchia più forte.",
              "Separa titolo e nome autore con spazio chiaro.",
              "Evita testo a basso contrasto su arte generata complessa.",
            ],
          },
          {
            id: "wrap",
            title: "Tratta dorso e retro come parte del sistema",
            body: [
              "Una copertina per stampa richiede più del fronte. Larghezza del dorso, formato, abbondanza, area barcode e copy del retro influenzano il file finale.",
              "Genera o estendi lo sfondo lasciando aree tranquille per il testo, poi assembla il wrap completo in uno strumento con dimensioni precise.",
            ],
            bullets: [
              "Riserva spazio pulito per la descrizione sul retro.",
              "Mantieni la tipografia del dorso semplice e centrata.",
              "Lascia libere aree barcode e margini.",
              "Esporta solo dopo aver controllato i template di piattaforma.",
            ],
          },
          {
            id: "qa",
            title: "Esegui una QA della copertina prima dell'upload",
            body: [
              "Le immagini generate possono contenere artefatti, mani strane, oggetti rotti, segni illeggibili o incoerenze di stile. Questi dettagli riducono la fiducia.",
              "La QA finale controlla bordi, volti, mani, testi, ombre, contrasto stampa, allineamento tipografico e coerenza con la promessa del libro.",
            ],
            bullets: [
              "Controlla thumbnail, tablet e anteprima stampa.",
              "Ispeziona i dettagli generati al 100 percento.",
              "Confronta la gerarchia del titolo con i concorrenti.",
              "Conserva file sorgenti modificabili.",
            ],
          },
        ],
        checklist: [
          "La copertina rispetta il sotto-genere prima del gusto personale.",
          "Titolo e visual restano leggibili in thumbnail.",
          "Il wrap include formato, abbondanza, dorso e retro.",
          "La tipografia è progettata separatamente dall'immagine IA.",
          "La QA artefatti e stampa è completata.",
        ],
        faq: [
          {
            question: "L'IA può generare una copertina finita?",
            answer:
              "Può generare immagini forti, ma una copertina finita richiede tipografia, layout, dimensioni, abbondanza, dorso e retro.",
          },
          {
            question: "Cosa fa sembrare amatoriale una copertina IA?",
            answer:
              "Tipografia debole, codici di genere sbagliati, immagine troppo piena, basso contrasto e artefatti non corretti.",
          },
          {
            question: "La copertina deve essere unica o coerente col genere?",
            answer:
              "Entrambe. Deve essere abbastanza familiare da essere riconosciuta e abbastanza distintiva da essere ricordata.",
          },
        ],
      },
      de: {
        slug: "ki-buchcover-design-vorderseite-ruecken-rueckseite",
        title: "KI-Buchcover-Design: Vorderseite, Rücken und Rückseite, die verkaufen",
        description:
          "Praxisguide für KI-gestütztes Coverdesign: Genreklarheit, Typografie, Rücken, Rückseite, Print und Marketplace-Thumbnails.",
        keywords: [
          "KI Buchcover Design",
          "Buchcover Typografie",
          "KDP Cover Design",
          "Vorderseite Rücken Rückseite",
        ],
        category: "Coverdesign",
        intro: [
          "Ein Cover ist nicht nur ein Bild. Es ist Versprechen, Genresignal und Conversion-Asset, das als Thumbnail, Produktseitenbild und gedrucktes Objekt funktionieren muss.",
          "KI-Bildtools können starkes Rohmaterial liefern, aber Coverdesign braucht weiterhin Komposition, Typografie, Hierarchie und druckfähiges Layout.",
        ],
        sections: [
          {
            id: "genre",
            title: "Entwirf zuerst für Genreerkennung",
            body: [
              "Leser nutzen Cover, um Bücher schnell einzuordnen. Vor der Ästhetik definierst du Genre-Codes: Farben, Typografie, Motiv, Kompositionsdichte und emotionalen Ton.",
              "KI-Prompts sollten diese Codes ausdrücklich enthalten. Sonst entstehen schöne Bilder, die im Marketplace falsch einsortiert wirken.",
            ],
            bullets: [
              "Sammle zehn Top-Cover im exakten Subgenre.",
              "Erkenne Muster in Typografie und Komposition.",
              "Schreibe einen visuellen Brief vor der Bildgenerierung.",
              "Verwirf Bilder, die schön sind, aber die Kategorie verwirren.",
            ],
          },
          {
            id: "thumbnail",
            title: "Gewinne das Thumbnail vor dem großen Cover",
            body: [
              "Die meisten Käufer sehen das Cover zuerst klein. Wenn Titel, Motiv und Kontrast im Thumbnail verschwinden, ist es nicht bereit.",
              "Prüfe das Design in mehreren Zoomstufen. Titel, Hauptform und emotionales Signal müssen auch komprimiert klar bleiben.",
            ],
            bullets: [
              "Teste in der Größe mobiler Suchergebnisse.",
              "Nutze weniger visuelle Ideen mit stärkerer Hierarchie.",
              "Trenne Titel und Autorenname durch klaren Abstand.",
              "Vermeide kontrastarmen Text auf unruhiger KI-Kunst.",
            ],
          },
          {
            id: "wrap",
            title: "Behandle Rücken und Rückseite als System",
            body: [
              "Printcover brauchen mehr als ein Frontbild. Rückenbreite, Format, Beschnitt, Barcodefläche und Rückseitentext beeinflussen die finale Datei.",
              "Generiere oder erweitere die Bildfläche mit ruhigen Textzonen und baue danach das komplette Cover in einem Layouttool mit präzisen Maßen.",
            ],
            bullets: [
              "Reserviere ruhigen Raum für die Rückseitenbeschreibung.",
              "Halte Rückentypografie einfach und zentriert.",
              "Lasse Barcode- und Randbereiche sauber.",
              "Exportiere erst nach Prüfung der Plattformtemplates.",
            ],
          },
          {
            id: "qa",
            title: "Führe vor dem Upload eine Cover-QA durch",
            body: [
              "KI-Bilder können Artefakte, seltsame Hände, kaputte Objekte, unlesbare Zeichen oder Stilbrüche enthalten. Solche Details schwächen Vertrauen.",
              "Die finale QA prüft Kanten, Gesichter, Hände, Text, Schatten, Printkontrast, Typografieausrichtung und die Übereinstimmung mit dem Buchversprechen.",
            ],
            bullets: [
              "Prüfe Thumbnail, Tabletansicht und Druckvorschau.",
              "Kontrolliere generierte Details bei 100 Prozent Zoom.",
              "Vergleiche die Titelhierarchie mit Konkurrenzcovern.",
              "Bewahre editierbare Quelldateien für Varianten auf.",
            ],
          },
        ],
        checklist: [
          "Das Cover passt zum exakten Subgenre, bevor persönlicher Geschmack zählt.",
          "Titel und Hauptmotiv bleiben im Thumbnail lesbar.",
          "Das komplette Cover berücksichtigt Format, Beschnitt, Rücken und Rückseite.",
          "Typografie wird getrennt von der KI-Bildgenerierung gestaltet.",
          "Artefakt- und Print-QA sind abgeschlossen.",
        ],
        faq: [
          {
            question: "Kann KI ein fertiges Buchcover erzeugen?",
            answer:
              "Sie kann starke Bilder erzeugen, aber fertige Cover brauchen Typografie, Layout, Maße, Beschnitt, Rücken und Rückseite.",
          },
          {
            question: "Was lässt ein KI-Cover amateurhaft wirken?",
            answer:
              "Schwache Typografie, falsche Genre-Codes, überladene Bilder, geringer Kontrast und unkorrigierte Artefakte.",
          },
          {
            question: "Soll ein Cover einzigartig oder genretypisch sein?",
            answer:
              "Beides. Es sollte vertraut genug sein, um erkannt zu werden, und markant genug, um in Erinnerung zu bleiben.",
          },
        ],
      },
    },
  },
  {
    key: "catalog-operations",
    date: "2026-06-06",
    updated: "2026-06-06",
    readingTime: 13,
    accent: {
      start: "#f4f4ef",
      middle: "#a9f0d6",
      end: "#ffd9c2",
    },
    translations: {
      en: {
        slug: "publishing-catalog-operations-scale-quality",
        title: "Publishing catalog operations: scale without losing quality",
        description:
          "How to build a repeatable publishing operating system for briefs, production, QA, metadata, updates and catalog learning loops.",
        keywords: [
          "publishing catalog operations",
          "scale publishing catalog",
          "publishing workflow system",
          "AI publishing operations",
        ],
        category: "Operations",
        intro: [
          "A catalog is not a pile of books. It is an operating system with briefs, templates, quality gates, metadata maps, update cycles and learning loops.",
          "The more titles you publish, the more important the system becomes. Without operations, scale amplifies inconsistency. With operations, every new title teaches the next one.",
        ],
        sections: [
          {
            id: "system",
            title: "Define the catalog system before the calendar",
            body: [
              "Publishing calendars are useful only after the production system is clear. Decide which categories you serve, which formats you support, what quality threshold is non-negotiable and how ideas move from research to upload.",
              "This prevents the common trap of chasing weekly output while the catalog becomes messy, redundant and hard to optimize.",
            ],
            bullets: [
              "Create a standard brief template for every title.",
              "Define quality gates between research, draft, edit, design and upload.",
              "Assign a clear owner for every stage, even if one person owns all of them.",
              "Document what makes a title ready, blocked or rejected.",
            ],
          },
          {
            id: "templates",
            title: "Use templates without flattening the books",
            body: [
              "Templates reduce cognitive load, but they should not make every book feel identical. Separate structural templates from creative decisions.",
              "For example, keep a consistent metadata brief, QA checklist and cover handoff format, while allowing tone, examples, pacing and visual direction to change by niche.",
            ],
            bullets: [
              "Template briefs, outlines, QA and metadata fields.",
              "Avoid templating voice so tightly that books sound cloned.",
              "Use prompts as process documents, not one-off tricks.",
              "Version templates when you learn from performance data.",
            ],
          },
          {
            id: "qa",
            title: "Install quality gates that stop weak books",
            body: [
              "A quality gate is a decision point where a book can move forward, return for revision or be killed. Gates protect the catalog from speed-driven mistakes.",
              "Useful gates cover niche fit, outline strength, manuscript usefulness, originality risk, cover clarity, metadata alignment and final file readiness.",
            ],
            bullets: [
              "Reject weak niche briefs before drafting begins.",
              "Use chapter acceptance criteria, not vibes.",
              "Compare final package against the original promise.",
              "Keep a log of failed titles and why they failed.",
            ],
          },
          {
            id: "learning",
            title: "Turn performance into process improvement",
            body: [
              "Catalog scale becomes powerful when every launch improves the operating system. Track what changed, why it changed and what you will test next.",
              "Look for patterns across titles instead of overreacting to one book. The goal is to improve niche selection, packaging and production quality over time.",
            ],
            bullets: [
              "Review titles in cohorts, not isolated anecdotes.",
              "Tag each title by niche, promise, format and production method.",
              "Update templates after repeated evidence, not after one bad day.",
              "Archive decisions so future launches do not restart from zero.",
            ],
          },
        ],
        checklist: [
          "Every title starts with the same brief structure.",
          "The workflow has clear stages, owners and quality gates.",
          "Templates standardize operations without cloning voice.",
          "Performance reviews happen at catalog level, not only title level.",
          "Lessons learned update the next brief, prompt, cover and metadata system.",
        ],
        faq: [
          {
            question: "How many books can one operator manage?",
            answer:
              "It depends on scope, quality bar and automation. A system matters more than a number: without briefs and gates, even a small catalog becomes hard to manage.",
          },
          {
            question: "Should every book use the same production template?",
            answer:
              "Use the same operational skeleton, but adapt creative choices to each niche and reader promise.",
          },
          {
            question: "What should be tracked in a publishing catalog?",
            answer:
              "Track niche, promise, audience, metadata, cover direction, production notes, quality issues, launch date and future optimization ideas.",
          },
        ],
      },
      fr: {
        slug: "operations-catalogue-editorial-qualite-echelle",
        title: "Opérations de catalogue éditorial : passer à l'échelle sans perdre la qualité",
        description:
          "Comment construire un système éditorial reproductible pour briefs, production, QA, métadonnées, mises à jour et boucles d'apprentissage.",
        keywords: [
          "opérations catalogue éditorial",
          "scaler catalogue livres",
          "système workflow édition",
          "opérations édition IA",
        ],
        category: "Opérations",
        intro: [
          "Un catalogue n'est pas une pile de livres. C'est un système d'exploitation avec briefs, templates, portes qualité, cartes de métadonnées, cycles de mise à jour et boucles d'apprentissage.",
          "Plus vous publiez, plus le système compte. Sans opérations, l'échelle amplifie l'incohérence. Avec opérations, chaque titre améliore le suivant.",
        ],
        sections: [
          {
            id: "systeme",
            title: "Définir le système de catalogue avant le calendrier",
            body: [
              "Un calendrier éditorial n'est utile qu'après clarification du système de production. Décidez quelles catégories vous servez, quels formats vous supportez, quel niveau qualité est non négociable et comment une idée passe de la recherche à l'upload.",
              "Cela évite de courir après une cadence hebdomadaire pendant que le catalogue devient brouillon, redondant et difficile à optimiser.",
            ],
            bullets: [
              "Créer un template de brief standard pour chaque titre.",
              "Définir les portes qualité entre recherche, brouillon, édition, design et upload.",
              "Attribuer un propriétaire clair à chaque étape, même si c'est la même personne.",
              "Documenter ce qui rend un titre prêt, bloqué ou rejeté.",
            ],
          },
          {
            id: "templates",
            title: "Utiliser des templates sans aplatir les livres",
            body: [
              "Les templates réduisent la charge mentale, mais ne doivent pas rendre tous les livres identiques. Séparez les templates structurels des décisions créatives.",
              "Gardez un brief de métadonnées, une checklist QA et un format de handoff couverture cohérents, tout en adaptant ton, exemples, rythme et direction visuelle à la niche.",
            ],
            bullets: [
              "Templater briefs, plans, QA et champs de métadonnées.",
              "Éviter de templater la voix au point de créer des livres clonés.",
              "Utiliser les prompts comme documents de process.",
              "Versionner les templates selon les données de performance.",
            ],
          },
          {
            id: "qa",
            title: "Installer des portes qualité qui stoppent les livres faibles",
            body: [
              "Une porte qualité est un point de décision : avancer, revenir en révision ou tuer le projet. Elle protège le catalogue des erreurs causées par la vitesse.",
              "Les portes utiles couvrent fit de niche, solidité du plan, utilité du manuscrit, risque d'originalité, clarté couverture, alignement des métadonnées et readiness des fichiers.",
            ],
            bullets: [
              "Rejeter les briefs faibles avant rédaction.",
              "Utiliser des critères d'acceptation par chapitre.",
              "Comparer le package final à la promesse initiale.",
              "Garder un log des titres rejetés et des raisons.",
            ],
          },
          {
            id: "apprentissage",
            title: "Transformer la performance en amélioration du process",
            body: [
              "L'échelle devient puissante quand chaque lancement améliore le système. Notez ce qui a changé, pourquoi et ce que vous testerez ensuite.",
              "Cherchez des patterns sur plusieurs titres au lieu de réagir à un seul livre. L'objectif est d'améliorer sélection de niche, packaging et qualité de production.",
            ],
            bullets: [
              "Analyser les titres par cohortes.",
              "Taguer chaque titre par niche, promesse, format et méthode de production.",
              "Mettre à jour les templates après preuves répétées.",
              "Archiver les décisions pour ne pas repartir de zéro.",
            ],
          },
        ],
        checklist: [
          "Chaque titre démarre avec la même structure de brief.",
          "Le workflow possède étapes, propriétaires et portes qualité clairs.",
          "Les templates standardisent les opérations sans cloner la voix.",
          "Les revues de performance se font au niveau catalogue.",
          "Les apprentissages améliorent brief, prompt, couverture et métadonnées suivants.",
        ],
        faq: [
          {
            question: "Combien de livres un opérateur peut-il gérer ?",
            answer:
              "Cela dépend du périmètre, du niveau qualité et de l'automatisation. Le système compte plus que le chiffre : sans briefs et portes qualité, même un petit catalogue devient difficile.",
          },
          {
            question: "Faut-il le même template pour chaque livre ?",
            answer:
              "Gardez le même squelette opérationnel, mais adaptez les choix créatifs à chaque niche et promesse lecteur.",
          },
          {
            question: "Que faut-il suivre dans un catalogue éditorial ?",
            answer:
              "Niche, promesse, audience, métadonnées, direction couverture, notes de production, problèmes qualité, date de lancement et idées d'optimisation.",
          },
        ],
      },
      it: {
        slug: "operazioni-catalogo-editoriale-scala-qualita",
        title: "Operazioni di catalogo editoriale: scalare senza perdere qualità",
        description:
          "Come costruire un sistema editoriale ripetibile per brief, produzione, QA, metadati, aggiornamenti e cicli di apprendimento.",
        keywords: [
          "operazioni catalogo editoriale",
          "scalare catalogo libri",
          "sistema workflow editoriale",
          "operazioni editoria IA",
        ],
        category: "Operazioni",
        intro: [
          "Un catalogo non è una pila di libri. È un sistema operativo con brief, template, gate di qualità, mappe di metadati, cicli di aggiornamento e apprendimento.",
          "Più titoli pubblichi, più il sistema diventa importante. Senza operazioni, la scala amplifica incoerenza. Con operazioni, ogni titolo insegna al successivo.",
        ],
        sections: [
          {
            id: "sistema",
            title: "Definisci il sistema di catalogo prima del calendario",
            body: [
              "I calendari editoriali servono solo dopo aver chiarito il sistema di produzione. Decidi categorie, formati, soglie qualità e come un'idea passa da ricerca a upload.",
              "Questo evita di inseguire output settimanale mentre il catalogo diventa confuso, ridondante e difficile da ottimizzare.",
            ],
            bullets: [
              "Crea un template di brief standard per ogni titolo.",
              "Definisci gate di qualità tra ricerca, bozza, editing, design e upload.",
              "Assegna un owner chiaro a ogni fase, anche se è la stessa persona.",
              "Documenta cosa rende un titolo pronto, bloccato o rifiutato.",
            ],
          },
          {
            id: "template",
            title: "Usa template senza appiattire i libri",
            body: [
              "I template riducono carico cognitivo, ma non devono far sembrare ogni libro identico. Separa template strutturali da decisioni creative.",
              "Mantieni brief metadati, checklist QA e handoff copertina coerenti, lasciando variare tono, esempi, ritmo e direzione visiva.",
            ],
            bullets: [
              "Templatizza brief, outline, QA e metadati.",
              "Evita una voce così rigida da creare libri clonati.",
              "Usa i prompt come documenti di processo.",
              "Versiona i template quando i dati insegnano qualcosa.",
            ],
          },
          {
            id: "qa",
            title: "Installa gate di qualità che fermano libri deboli",
            body: [
              "Un gate di qualità è un punto decisionale dove un libro avanza, torna in revisione o viene fermato. Protegge il catalogo dagli errori della velocità.",
              "Gate utili coprono fit di nicchia, solidità outline, utilità del manoscritto, rischio originalità, chiarezza copertina, metadati e file finali.",
            ],
            bullets: [
              "Rifiuta brief deboli prima della stesura.",
              "Usa criteri di accettazione per capitolo.",
              "Confronta il pacchetto finale con la promessa iniziale.",
              "Tieni un log dei titoli falliti e del perché.",
            ],
          },
          {
            id: "apprendimento",
            title: "Trasforma performance in miglioramento del processo",
            body: [
              "La scala diventa potente quando ogni lancio migliora il sistema. Traccia cosa è cambiato, perché e cosa testerai dopo.",
              "Cerca pattern su più titoli invece di reagire a un solo libro. L'obiettivo è migliorare selezione di nicchia, packaging e qualità produttiva.",
            ],
            bullets: [
              "Rivedi i titoli per coorti.",
              "Tagga ogni titolo per nicchia, promessa, formato e metodo produttivo.",
              "Aggiorna template dopo evidenze ripetute.",
              "Archivia decisioni per non ricominciare da zero.",
            ],
          },
        ],
        checklist: [
          "Ogni titolo parte dalla stessa struttura di brief.",
          "Il workflow ha fasi, owner e gate di qualità chiari.",
          "I template standardizzano operazioni senza clonare la voce.",
          "Le review performance avvengono a livello catalogo.",
          "Le lezioni aggiornano brief, prompt, copertina e metadati successivi.",
        ],
        faq: [
          {
            question: "Quanti libri può gestire un operatore?",
            answer:
              "Dipende da perimetro, soglia qualità e automazione. Il sistema conta più del numero: senza brief e gate, anche un piccolo catalogo diventa difficile.",
          },
          {
            question: "Ogni libro deve usare lo stesso template?",
            answer:
              "Usa lo stesso scheletro operativo, ma adatta le scelte creative a nicchia e promessa.",
          },
          {
            question: "Cosa tracciare in un catalogo editoriale?",
            answer:
              "Nicchia, promessa, audience, metadati, direzione copertina, note produttive, problemi qualità, data lancio e idee di ottimizzazione.",
          },
        ],
      },
      de: {
        slug: "publishing-katalog-operations-skalieren-qualitaet",
        title: "Publishing-Katalog-Operations: skalieren, ohne Qualität zu verlieren",
        description:
          "So baust du ein wiederholbares Publishing-Betriebssystem für Briefs, Produktion, QA, Metadaten, Updates und Lernschleifen.",
        keywords: [
          "Publishing Katalog Operations",
          "Publishing Katalog skalieren",
          "Publishing Workflow System",
          "KI Publishing Operations",
        ],
        category: "Operations",
        intro: [
          "Ein Katalog ist kein Stapel Bücher. Er ist ein Betriebssystem mit Briefs, Templates, Qualitätsgates, Metadatenkarten, Update-Zyklen und Lernschleifen.",
          "Je mehr Titel du veröffentlichst, desto wichtiger wird das System. Ohne Operations verstärkt Skalierung Inkonsistenz. Mit Operations verbessert jeder Titel den nächsten.",
        ],
        sections: [
          {
            id: "system",
            title: "Definiere das Katalogsystem vor dem Kalender",
            body: [
              "Publishing-Kalender sind erst nützlich, wenn das Produktionssystem klar ist. Entscheide Kategorien, Formate, nicht verhandelbare Qualität und wie Ideen von Recherche zu Upload wandern.",
              "So vermeidest du, wöchentlichen Output zu jagen, während der Katalog unübersichtlich, redundant und schwer optimierbar wird.",
            ],
            bullets: [
              "Erstelle ein Standard-Brief-Template für jeden Titel.",
              "Definiere Qualitätsgates zwischen Recherche, Entwurf, Lektorat, Design und Upload.",
              "Weise jeder Phase einen klaren Owner zu, auch wenn es dieselbe Person ist.",
              "Dokumentiere, wann ein Titel bereit, blockiert oder abgelehnt ist.",
            ],
          },
          {
            id: "templates",
            title: "Nutze Templates, ohne Bücher flach zu machen",
            body: [
              "Templates reduzieren mentale Last, sollten aber nicht jedes Buch gleich klingen lassen. Trenne strukturelle Templates von kreativen Entscheidungen.",
              "Halte Metadatenbrief, QA-Checkliste und Cover-Handoff konsistent, während Ton, Beispiele, Tempo und visuelle Richtung je Nische variieren.",
            ],
            bullets: [
              "Template Briefs, Outlines, QA und Metadatenfelder.",
              "Templatisiere die Stimme nicht so eng, dass Bücher geklont wirken.",
              "Nutze Prompts als Prozessdokumente.",
              "Versioniere Templates nach belastbaren Performance-Learnings.",
            ],
          },
          {
            id: "qa",
            title: "Installiere Qualitätsgates, die schwache Bücher stoppen",
            body: [
              "Ein Qualitätsgate ist ein Entscheidungspunkt: weiter, zurück in Revision oder beenden. Gates schützen den Katalog vor Fehlern durch Geschwindigkeit.",
              "Sinnvolle Gates prüfen Nischenfit, Outline-Stärke, Manuskriptnutzen, Originalitätsrisiko, Coverklarheit, Metadatenalignment und finale Dateien.",
            ],
            bullets: [
              "Lehne schwache Nischenbriefs vor dem Schreiben ab.",
              "Nutze Kapitelkriterien statt Bauchgefühl.",
              "Vergleiche das finale Paket mit dem ursprünglichen Versprechen.",
              "Führe ein Log gescheiterter Titel und Gründe.",
            ],
          },
          {
            id: "lernen",
            title: "Mache Performance zu Prozessverbesserung",
            body: [
              "Katalogskalierung wird stark, wenn jeder Launch das System verbessert. Halte fest, was geändert wurde, warum es geändert wurde und was als Nächstes getestet wird.",
              "Suche Muster über mehrere Titel statt auf ein einzelnes Buch zu überreagieren. Ziel ist bessere Nischenauswahl, besseres Packaging und bessere Produktionsqualität.",
            ],
            bullets: [
              "Analysiere Titel in Kohorten.",
              "Tagge jeden Titel nach Nische, Versprechen, Format und Produktionsmethode.",
              "Aktualisiere Templates nach wiederholter Evidenz.",
              "Archiviere Entscheidungen, damit Launches nicht bei null starten.",
            ],
          },
        ],
        checklist: [
          "Jeder Titel startet mit derselben Briefstruktur.",
          "Der Workflow hat klare Phasen, Owner und Qualitätsgates.",
          "Templates standardisieren Operations, ohne Stimme zu klonen.",
          "Performance-Reviews passieren auf Katalogebene, nicht nur pro Titel.",
          "Learnings verbessern den nächsten Brief, Prompt, Cover- und Metadatenprozess.",
        ],
        faq: [
          {
            question: "Wie viele Bücher kann eine Person managen?",
            answer:
              "Das hängt von Umfang, Qualitätsanspruch und Automatisierung ab. Das System zählt mehr als die Zahl: Ohne Briefs und Gates wird selbst ein kleiner Katalog schwer steuerbar.",
          },
          {
            question: "Soll jedes Buch dasselbe Produktionstemplate nutzen?",
            answer:
              "Nutze dasselbe operative Gerüst, aber passe kreative Entscheidungen an Nische und Leserversprechen an.",
          },
          {
            question: "Was sollte ein Publishing-Katalog tracken?",
            answer:
              "Nische, Versprechen, Zielgruppe, Metadaten, Coverrichtung, Produktionsnotizen, Qualitätsprobleme, Launchdatum und künftige Optimierungsideen.",
          },
        ],
      },
    },
  },
  {
    key: "kdp-niche-keyword-research",
    date: "2026-06-07",
    updated: "2026-06-07",
    readingTime: 12,
    accent: {
      start: "#e9fff7",
      middle: "#bfe9ff",
      end: "#ffd9c2",
    },
    translations: {
      en: {
        slug: "kdp-niche-keyword-research",
        title: "KDP niche and keyword research: find book ideas readers already want",
        description:
          "A practical SEO guide to finding profitable KDP niches, reader demand, keyword clusters, category fit and book angles before writing.",
        keywords: [
          "KDP niche research",
          "KDP keyword research",
          "book niche ideas",
          "Amazon book keywords",
        ],
        category: "Research",
        intro: [
          "Niche research is the difference between publishing into demand and publishing into silence. The best book ideas are not random inspirations; they sit where reader problems, search language, category expectations and your production advantage overlap.",
          "A strong keyword process helps you choose books that can be discovered, positioned and improved over time.",
        ],
        sections: [
          {
            id: "demand",
            title: "Measure demand before choosing the book idea",
            body: [
              "Start by listing phrases readers already use: problem words, genre labels, outcomes, audience descriptors and format terms. Demand is visible when those phrases repeat across search suggestions, competing titles, reviews and community questions.",
              "Do not chase a niche only because it looks empty. Empty can mean underserved, but it can also mean nobody is searching.",
            ],
            bullets: [
              "Collect search suggestions around the core topic.",
              "Read reviews to understand what readers praise and complain about.",
              "Check whether competing books have clear, recent buyer activity.",
              "Separate evergreen demand from trend-driven spikes.",
            ],
          },
          {
            id: "clusters",
            title: "Build keyword clusters instead of isolated terms",
            body: [
              "One keyword rarely defines a book. Group related phrases into clusters: beginner intent, advanced intent, problem-solving intent, genre trope, gift intent and format intent.",
              "Clusters make metadata, outlines and cover direction more coherent because every asset points toward the same reader job.",
            ],
            bullets: [
              "Choose one primary cluster per book.",
              "Use secondary clusters for chapters, subtitles and description angles.",
              "Avoid targeting two unrelated audiences in one title.",
              "Keep a keyword map for the whole catalog.",
            ],
          },
          {
            id: "angle",
            title: "Turn research into a sharper angle",
            body: [
              "Research only matters if it changes the book. A strong angle can be narrower, faster, more visual, more practical, more beginner-friendly or more premium than what already exists.",
              "The goal is to enter a recognizable market with a promise that feels specific enough to choose.",
            ],
            bullets: [
              "Write the reader promise before the outline.",
              "Name the competing books your title must beat.",
              "Define what your book deliberately excludes.",
              "Reject angles that sound like every other listing.",
            ],
          },
        ],
        checklist: [
          "Primary reader intent is supported by repeated search language.",
          "The niche has active competitors but visible gaps.",
          "Keywords are grouped into clusters, not dumped into one list.",
          "The book angle is specific enough to guide outline, cover and metadata.",
          "The catalog map prevents two books from targeting the same exact intent.",
        ],
        faq: [
          {
            question: "Is a low-competition KDP niche always better?",
            answer:
              "No. Low competition is useful only when demand exists. A niche with no buyers can look easy while producing no discovery.",
          },
          {
            question: "How many keywords should a book target?",
            answer:
              "One primary intent cluster is best. Secondary keywords can support the description and chapters, but the book should not feel split between audiences.",
          },
        ],
      },
      fr: {
        slug: "recherche-niche-mots-cles-kdp",
        title: "Recherche de niche et mots-clés KDP : trouver des livres que les lecteurs veulent déjà",
        description:
          "Guide SEO pratique pour trouver des niches KDP rentables, la demande lecteur, les clusters de mots-clés, le fit catégorie et les angles avant rédaction.",
        keywords: [
          "recherche niche KDP",
          "mots-clés KDP",
          "idées niche livre",
          "mots-clés livre Amazon",
        ],
        category: "Recherche",
        intro: [
          "La recherche de niche fait la différence entre publier dans la demande et publier dans le vide. Les meilleures idées de livres se trouvent à l'intersection des problèmes lecteurs, du langage de recherche, des attentes de catégorie et de votre avantage de production.",
          "Un bon process de mots-clés aide à choisir des livres découvrables, positionnables et optimisables dans le temps.",
        ],
        sections: [
          {
            id: "demande",
            title: "Mesurer la demande avant de choisir l'idée",
            body: [
              "Commencez par lister les expressions que les lecteurs utilisent déjà : problèmes, genres, résultats attendus, audience et formats. La demande devient visible quand ces expressions reviennent dans les suggestions, titres concurrents, avis et questions de communautés.",
              "Ne poursuivez pas une niche seulement parce qu'elle paraît vide. Vide peut vouloir dire sous-servie, mais aussi personne ne cherche.",
            ],
            bullets: [
              "Collecter les suggestions autour du sujet principal.",
              "Lire les avis pour comprendre éloges et frustrations.",
              "Vérifier une activité d'achat récente chez les concurrents.",
              "Séparer demande evergreen et pics de tendance.",
            ],
          },
          {
            id: "clusters",
            title: "Construire des clusters plutôt que des mots isolés",
            body: [
              "Un seul mot-clé définit rarement un livre. Regroupez les phrases par intention : débutant, avancé, résolution de problème, trope de genre, cadeau ou format.",
              "Les clusters rendent les métadonnées, le plan et la couverture plus cohérents parce que chaque asset sert le même job lecteur.",
            ],
            bullets: [
              "Choisir un cluster principal par livre.",
              "Utiliser les clusters secondaires pour chapitres, sous-titre et description.",
              "Éviter deux audiences sans lien dans un même titre.",
              "Maintenir une carte de mots-clés pour tout le catalogue.",
            ],
          },
          {
            id: "angle",
            title: "Transformer la recherche en angle plus net",
            body: [
              "La recherche compte seulement si elle change le livre. Un bon angle peut être plus étroit, plus rapide, plus visuel, plus pratique, plus débutant ou plus premium que l'existant.",
              "L'objectif est d'entrer dans un marché reconnaissable avec une promesse assez spécifique pour être choisie.",
            ],
            bullets: [
              "Écrire la promesse lecteur avant le plan.",
              "Nommer les livres concurrents à dépasser.",
              "Définir ce que le livre exclut volontairement.",
              "Rejeter les angles qui ressemblent à toutes les fiches produit.",
            ],
          },
        ],
        checklist: [
          "L'intention principale est soutenue par un langage de recherche répété.",
          "La niche a des concurrents actifs et des gaps visibles.",
          "Les mots-clés sont groupés en clusters.",
          "L'angle guide clairement plan, couverture et métadonnées.",
          "La carte catalogue évite de cibler deux fois la même intention.",
        ],
        faq: [
          {
            question: "Une niche KDP peu concurrentielle est-elle toujours meilleure ?",
            answer:
              "Non. La faible concurrence n'aide que s'il existe une demande. Une niche sans acheteurs peut paraître facile et rester invisible.",
          },
          {
            question: "Combien de mots-clés viser pour un livre ?",
            answer:
              "Un cluster d'intention principal suffit. Les mots-clés secondaires soutiennent la description et les chapitres sans diviser l'audience.",
          },
        ],
      },
      it: {
        slug: "ricerca-nicchia-keyword-kdp",
        title: "Ricerca nicchia e keyword KDP: trovare libri che i lettori vogliono già",
        description:
          "Guida SEO pratica per trovare nicchie KDP, domanda lettore, cluster keyword, fit di categoria e angoli editoriali prima di scrivere.",
        keywords: [
          "ricerca nicchia KDP",
          "keyword KDP",
          "idee nicchia libri",
          "keyword libri Amazon",
        ],
        category: "Ricerca",
        intro: [
          "La ricerca di nicchia distingue la pubblicazione dentro la domanda dalla pubblicazione nel vuoto. Le idee migliori vivono dove problemi dei lettori, linguaggio di ricerca, aspettative di categoria e vantaggio produttivo si sovrappongono.",
          "Un buon processo keyword aiuta a scegliere libri trovabili, posizionabili e migliorabili nel tempo.",
        ],
        sections: [
          {
            id: "domanda",
            title: "Misura la domanda prima dell'idea",
            body: [
              "Elenca le frasi che i lettori usano già: problemi, generi, risultati, audience e formati. La domanda appare quando quelle frasi tornano in suggerimenti, titoli concorrenti, recensioni e community.",
              "Non scegliere una nicchia solo perché sembra vuota. Vuota può voler dire sottoservita, ma anche non cercata.",
            ],
            bullets: [
              "Raccogli suggerimenti intorno al tema principale.",
              "Leggi recensioni per capire elogi e lamentele.",
              "Verifica attività recente nei libri concorrenti.",
              "Distingui domanda evergreen da picchi di trend.",
            ],
          },
          {
            id: "cluster",
            title: "Costruisci cluster keyword, non termini isolati",
            body: [
              "Una keyword sola raramente definisce un libro. Raggruppa frasi per intento: principiante, avanzato, problema, trope di genere, regalo o formato.",
              "I cluster rendono metadati, outline e copertina più coerenti perché ogni asset parla allo stesso lettore.",
            ],
            bullets: [
              "Scegli un cluster primario per libro.",
              "Usa cluster secondari per capitoli, sottotitolo e descrizione.",
              "Evita due audience scollegate nello stesso titolo.",
              "Mantieni una mappa keyword del catalogo.",
            ],
          },
          {
            id: "angolo",
            title: "Trasforma la ricerca in un angolo più forte",
            body: [
              "La ricerca conta se cambia il libro. Un angolo può essere più stretto, rapido, visuale, pratico, beginner-friendly o premium dell'esistente.",
              "L'obiettivo è entrare in un mercato riconoscibile con una promessa abbastanza specifica da essere scelta.",
            ],
            bullets: [
              "Scrivi la promessa lettore prima dell'outline.",
              "Nomina i concorrenti che devi superare.",
              "Definisci cosa il libro esclude.",
              "Scarta angoli che sembrano tutte le altre schede.",
            ],
          },
        ],
        checklist: [
          "L'intento primario è supportato da linguaggio di ricerca ripetuto.",
          "La nicchia ha concorrenti attivi e gap visibili.",
          "Le keyword sono raggruppate in cluster.",
          "L'angolo guida outline, copertina e metadati.",
          "La mappa catalogo evita intenti duplicati.",
        ],
        faq: [
          {
            question: "Una nicchia KDP con poca concorrenza è sempre migliore?",
            answer:
              "No. Serve domanda. Una nicchia senza acquirenti può sembrare facile ma non generare discovery.",
          },
          {
            question: "Quante keyword deve targetizzare un libro?",
            answer:
              "Meglio un cluster primario. Le keyword secondarie supportano descrizione e capitoli senza dividere il pubblico.",
          },
        ],
      },
      de: {
        slug: "kdp-nische-keyword-recherche",
        title: "KDP-Nischen- und Keyword-Recherche: Buchideen finden, die Leser bereits wollen",
        description:
          "Praxisguide für KDP-Nischen, Suchnachfrage, Keyword-Cluster, Kategorie-Fit und Buchwinkel vor dem Schreiben.",
        keywords: [
          "KDP Nischenrecherche",
          "KDP Keyword Recherche",
          "Buchnische finden",
          "Amazon Buch Keywords",
        ],
        category: "Recherche",
        intro: [
          "Nischenrecherche entscheidet, ob du in Nachfrage hinein veröffentlichst oder ins Leere. Gute Buchideen liegen dort, wo Leserprobleme, Suchsprache, Kategorieerwartungen und Produktionsvorteil zusammenkommen.",
          "Ein starker Keyword-Prozess hilft, Bücher zu wählen, die gefunden, positioniert und später verbessert werden können.",
        ],
        sections: [
          {
            id: "nachfrage",
            title: "Miss Nachfrage, bevor du die Buchidee wählst",
            body: [
              "Liste zuerst Phrasen, die Leser bereits nutzen: Probleme, Genres, Ergebnisse, Zielgruppen und Formate. Nachfrage wird sichtbar, wenn diese Sprache in Vorschlägen, Konkurrenz, Rezensionen und Community-Fragen wiederkehrt.",
              "Verfolge eine Nische nicht nur, weil sie leer wirkt. Leer kann unterschätzt bedeuten, aber auch: niemand sucht.",
            ],
            bullets: [
              "Sammle Suchvorschläge rund um das Kernthema.",
              "Lies Rezensionen für Lob und Beschwerden.",
              "Prüfe aktuelle Käuferaktivität bei Konkurrenzbüchern.",
              "Trenne Evergreen-Nachfrage von Trendspitzen.",
            ],
          },
          {
            id: "cluster",
            title: "Baue Keyword-Cluster statt Einzellisten",
            body: [
              "Ein Keyword definiert selten ein Buch. Gruppiere Phrasen nach Intention: Anfänger, Fortgeschrittene, Problem, Genre-Trope, Geschenk oder Format.",
              "Cluster machen Metadaten, Outline und Cover konsistenter, weil jedes Asset denselben Leserjob unterstützt.",
            ],
            bullets: [
              "Wähle einen primären Cluster pro Buch.",
              "Nutze sekundäre Cluster für Kapitel, Untertitel und Beschreibung.",
              "Vermeide zwei unverbundene Zielgruppen in einem Titel.",
              "Pflege eine Keyword-Karte für den Katalog.",
            ],
          },
          {
            id: "winkel",
            title: "Mach aus Recherche einen schärferen Winkel",
            body: [
              "Recherche zählt, wenn sie das Buch verändert. Ein starker Winkel kann enger, schneller, visueller, praktischer, anfängerfreundlicher oder hochwertiger sein als das Bestehende.",
              "Ziel ist ein erkennbarer Markt mit einem Versprechen, das spezifisch genug ist, um gewählt zu werden.",
            ],
            bullets: [
              "Schreibe das Leserversprechen vor der Outline.",
              "Benenne die Konkurrenzbücher, die du schlagen musst.",
              "Definiere, was dein Buch bewusst ausschließt.",
              "Verwirf Winkel, die wie jede andere Produktseite klingen.",
            ],
          },
        ],
        checklist: [
          "Die Hauptintention wird durch wiederholte Suchsprache gestützt.",
          "Die Nische hat aktive Konkurrenz und sichtbare Lücken.",
          "Keywords sind in Cluster gruppiert.",
          "Der Buchwinkel steuert Outline, Cover und Metadaten.",
          "Die Katalogkarte verhindert doppelte Suchintentionen.",
        ],
        faq: [
          {
            question: "Ist eine KDP-Nische mit wenig Konkurrenz immer besser?",
            answer:
              "Nein. Wenig Konkurrenz hilft nur bei vorhandener Nachfrage. Ohne Käufer bleibt auch eine leichte Nische unsichtbar.",
          },
          {
            question: "Wie viele Keywords sollte ein Buch targeten?",
            answer:
              "Ein primärer Intent-Cluster ist ideal. Sekundäre Keywords unterstützen Beschreibung und Kapitel, ohne die Zielgruppe zu spalten.",
          },
        ],
      },
    },
  },
  {
    key: "ai-manuscript-editing",
    date: "2026-06-07",
    updated: "2026-06-07",
    readingTime: 11,
    accent: {
      start: "#fff3e6",
      middle: "#f3f0ff",
      end: "#a9f0d6",
    },
    translations: {
      en: {
        slug: "ai-manuscript-editing-quality-control",
        title: "AI manuscript editing: quality control for books that should not feel generated",
        description:
          "How to edit AI-assisted manuscripts for voice, structure, originality, repetition, factual caution and reader trust.",
        keywords: [
          "AI manuscript editing",
          "AI book editing",
          "manuscript quality control",
          "AI writing revision",
        ],
        category: "Editing",
        intro: [
          "AI can draft quickly, but readers judge the final book, not the production method. Editing is where a generated manuscript becomes coherent, useful and worth trusting.",
          "A good editing pass looks for structure, repetition, specificity, factual caution, voice and whether every chapter actually serves the promise.",
        ],
        sections: [
          {
            id: "diagnosis",
            title: "Diagnose the manuscript before rewriting",
            body: [
              "Do not start by polishing sentences. First identify structural weaknesses: repeated ideas, missing transitions, shallow examples, unsupported claims and chapters that drift away from the reader promise.",
              "A diagnostic pass saves time because it tells you whether the manuscript needs a line edit, a section rewrite or a deeper outline repair.",
            ],
            bullets: [
              "Score each chapter against its original objective.",
              "Mark repeated concepts and generic filler.",
              "Flag claims that need verification or softer framing.",
              "Identify missing examples, exercises or scenes.",
            ],
          },
          {
            id: "voice",
            title: "Make the voice consistent and specific",
            body: [
              "Generated prose often sounds smooth but interchangeable. Strong voice comes from concrete examples, sharper verbs, consistent perspective and a defined level of expertise.",
              "Create a voice sheet with preferred terms, banned phrases, sentence rhythm and examples of how the book should sound.",
            ],
            bullets: [
              "Replace generic motivational language with specific guidance.",
              "Use examples that match the target reader's world.",
              "Remove phrases that appear across many chapters.",
              "Keep tone consistent from introduction to conclusion.",
            ],
          },
          {
            id: "trust",
            title: "Protect reader trust with final QA",
            body: [
              "Trust breaks when a book overclaims, contradicts itself or feels padded. The final QA pass should inspect facts, terminology, formatting, cross-references and the relationship between title promise and actual content.",
              "For sensitive topics, avoid presenting generated text as professional advice. Be clear, cautious and useful.",
            ],
            bullets: [
              "Verify names, dates, tools and factual statements.",
              "Check headings for logical progression.",
              "Remove padding that does not teach or move the story.",
              "Read the first chapter aloud to catch rhythm problems.",
            ],
          },
        ],
        checklist: [
          "Every chapter is checked against a chapter objective.",
          "Repeated phrases, generic transitions and filler are removed.",
          "Examples are specific to the reader and category.",
          "Claims are verified, softened or removed.",
          "The final manuscript matches the promise made by title and description.",
        ],
        faq: [
          {
            question: "Can AI edit its own manuscript?",
            answer:
              "It can help find issues and propose revisions, but the final acceptance criteria should come from a human editor or operator.",
          },
          {
            question: "What is the fastest way to improve an AI draft?",
            answer:
              "Remove repetition, add concrete examples and check every chapter against one clear objective.",
          },
        ],
      },
      fr: {
        slug: "edition-manuscrit-ia-controle-qualite",
        title: "Édition de manuscrit IA : contrôler la qualité d'un livre qui ne doit pas sembler généré",
        description:
          "Comment éditer un manuscrit assisté par IA : voix, structure, originalité, répétition, prudence factuelle et confiance lecteur.",
        keywords: [
          "édition manuscrit IA",
          "correction livre IA",
          "contrôle qualité manuscrit",
          "révision écriture IA",
        ],
        category: "Édition",
        intro: [
          "L'IA rédige vite, mais les lecteurs jugent le livre final, pas la méthode de production. L'édition transforme un manuscrit généré en texte cohérent, utile et digne de confiance.",
          "Une bonne passe d'édition cherche structure, répétition, précision, prudence factuelle, voix et utilité réelle de chaque chapitre.",
        ],
        sections: [
          {
            id: "diagnostic",
            title: "Diagnostiquer le manuscrit avant de réécrire",
            body: [
              "Ne commencez pas par polir les phrases. Repérez d'abord les faiblesses structurelles : idées répétées, transitions manquantes, exemples faibles, affirmations non soutenues et chapitres hors promesse.",
              "Le diagnostic indique s'il faut une correction de style, une réécriture de section ou une réparation du plan.",
            ],
            bullets: [
              "Noter chaque chapitre face à son objectif.",
              "Marquer concepts répétés et remplissage générique.",
              "Signaler les affirmations à vérifier ou adoucir.",
              "Identifier exemples, exercices ou scènes manquants.",
            ],
          },
          {
            id: "voix",
            title: "Rendre la voix cohérente et spécifique",
            body: [
              "La prose générée est souvent fluide mais interchangeable. Une voix forte vient d'exemples concrets, de verbes plus nets, d'une perspective stable et d'un niveau d'expertise défini.",
              "Créez une fiche de voix avec termes préférés, phrases interdites, rythme et exemples du rendu attendu.",
            ],
            bullets: [
              "Remplacer le langage motivationnel générique par des conseils précis.",
              "Utiliser des exemples proches du monde du lecteur.",
              "Supprimer les phrases qui reviennent dans plusieurs chapitres.",
              "Maintenir le ton de l'introduction à la conclusion.",
            ],
          },
          {
            id: "confiance",
            title: "Protéger la confiance lecteur avec une QA finale",
            body: [
              "La confiance casse quand un livre surpromet, se contredit ou paraît gonflé. La QA finale inspecte faits, terminologie, formatage, renvois et cohérence entre promesse marketing et contenu.",
              "Sur les sujets sensibles, évitez de présenter du texte généré comme conseil professionnel. Soyez clair, prudent et utile.",
            ],
            bullets: [
              "Vérifier noms, dates, outils et affirmations factuelles.",
              "Contrôler la progression logique des titres.",
              "Retirer ce qui ne transmet rien ou ne fait pas avancer l'histoire.",
              "Lire le premier chapitre à voix haute pour repérer le rythme.",
            ],
          },
        ],
        checklist: [
          "Chaque chapitre est comparé à son objectif.",
          "Répétitions, transitions génériques et remplissage sont retirés.",
          "Les exemples sont spécifiques à l'audience et à la catégorie.",
          "Les affirmations sont vérifiées, adoucies ou supprimées.",
          "Le manuscrit final tient la promesse du titre et de la description.",
        ],
        faq: [
          {
            question: "L'IA peut-elle éditer son propre manuscrit ?",
            answer:
              "Elle peut aider à trouver des problèmes et proposer des révisions, mais les critères d'acceptation doivent rester humains.",
          },
          {
            question: "Quel est le moyen le plus rapide d'améliorer une ébauche IA ?",
            answer:
              "Supprimer les répétitions, ajouter des exemples concrets et vérifier chaque chapitre face à un objectif clair.",
          },
        ],
      },
      it: {
        slug: "editing-manoscritto-ia-controllo-qualita",
        title: "Editing manoscritto IA: controllo qualità per libri che non sembrano generati",
        description:
          "Come editare manoscritti assistiti dall'IA per voce, struttura, originalità, ripetizioni, cautela fattuale e fiducia del lettore.",
        keywords: [
          "editing manoscritto IA",
          "editing libro IA",
          "controllo qualità manoscritto",
          "revisione scrittura IA",
        ],
        category: "Editing",
        intro: [
          "L'IA può scrivere velocemente, ma i lettori giudicano il libro finale. L'editing è il punto in cui un manoscritto generato diventa coerente, utile e affidabile.",
          "Una buona revisione cerca struttura, ripetizione, specificità, cautela sui fatti, voce e utilità reale di ogni capitolo.",
        ],
        sections: [
          {
            id: "diagnosi",
            title: "Diagnostica il manoscritto prima di riscrivere",
            body: [
              "Non iniziare lucidando le frasi. Prima identifica problemi strutturali: idee ripetute, transizioni mancanti, esempi superficiali, claim non supportati e capitoli fuori promessa.",
              "La diagnosi ti dice se serve line editing, riscrittura di sezioni o riparazione dell'outline.",
            ],
            bullets: [
              "Valuta ogni capitolo rispetto al suo obiettivo.",
              "Segna concetti ripetuti e filler generico.",
              "Evidenzia claim da verificare o ammorbidire.",
              "Trova esempi, esercizi o scene mancanti.",
            ],
          },
          {
            id: "voce",
            title: "Rendi la voce coerente e specifica",
            body: [
              "La prosa generata può essere scorrevole ma intercambiabile. Una voce forte nasce da esempi concreti, verbi più precisi, prospettiva stabile e livello di competenza definito.",
              "Crea una voice sheet con termini preferiti, frasi vietate, ritmo e campioni del tono desiderato.",
            ],
            bullets: [
              "Sostituisci motivazione generica con guida specifica.",
              "Usa esempi del mondo reale del lettore.",
              "Rimuovi frasi ripetute in molti capitoli.",
              "Mantieni il tono dalla prima all'ultima pagina.",
            ],
          },
          {
            id: "fiducia",
            title: "Proteggi la fiducia con una QA finale",
            body: [
              "La fiducia si rompe quando un libro promette troppo, si contraddice o sembra gonfiato. La QA controlla fatti, terminologia, formattazione e coerenza tra promessa e contenuto.",
              "Per temi sensibili, evita di presentare testo generato come consulenza professionale. Sii chiaro, cauto e utile.",
            ],
            bullets: [
              "Verifica nomi, date, strumenti e affermazioni.",
              "Controlla la progressione logica dei titoli.",
              "Rimuovi padding che non insegna o non muove la storia.",
              "Leggi il primo capitolo ad alta voce.",
            ],
          },
        ],
        checklist: [
          "Ogni capitolo è controllato rispetto al suo obiettivo.",
          "Ripetizioni, transizioni generiche e filler sono rimossi.",
          "Gli esempi sono specifici per lettore e categoria.",
          "I claim sono verificati, ammorbiditi o rimossi.",
          "Il manoscritto finale rispetta titolo e descrizione.",
        ],
        faq: [
          {
            question: "L'IA può editare il proprio manoscritto?",
            answer:
              "Può aiutare a trovare problemi e proporre revisioni, ma i criteri finali devono restare umani.",
          },
          {
            question: "Come migliorare velocemente una bozza IA?",
            answer:
              "Rimuovi ripetizioni, aggiungi esempi concreti e controlla ogni capitolo contro un obiettivo chiaro.",
          },
        ],
      },
      de: {
        slug: "ki-manuskript-lektorat-qualitaetskontrolle",
        title: "KI-Manuskript-Lektorat: Qualitätskontrolle für Bücher, die nicht generiert wirken sollen",
        description:
          "So editierst du KI-gestützte Manuskripte für Stimme, Struktur, Originalität, Wiederholungen, Faktensorgfalt und Vertrauen.",
        keywords: [
          "KI Manuskript Lektorat",
          "KI Buch lektorieren",
          "Manuskript Qualitätskontrolle",
          "KI Text Revision",
        ],
        category: "Lektorat",
        intro: [
          "KI kann schnell entwerfen, aber Leser bewerten das fertige Buch. Im Lektorat wird ein generiertes Manuskript kohärent, nützlich und vertrauenswürdig.",
          "Ein guter Edit prüft Struktur, Wiederholung, Spezifität, Faktensorgfalt, Stimme und ob jedes Kapitel dem Versprechen dient.",
        ],
        sections: [
          {
            id: "diagnose",
            title: "Diagnostiziere das Manuskript vor der Überarbeitung",
            body: [
              "Beginne nicht mit Satzpolitur. Finde zuerst strukturelle Schwächen: wiederholte Ideen, fehlende Übergänge, flache Beispiele, unbelegte Claims und Kapitel, die vom Versprechen abdriften.",
              "Die Diagnose zeigt, ob ein Line-Edit, eine Abschnittsüberarbeitung oder eine tiefere Outline-Reparatur nötig ist.",
            ],
            bullets: [
              "Bewerte jedes Kapitel gegen sein ursprüngliches Ziel.",
              "Markiere wiederholte Konzepte und generischen Fülltext.",
              "Kennzeichne Aussagen, die Prüfung oder weichere Formulierung brauchen.",
              "Finde fehlende Beispiele, Übungen oder Szenen.",
            ],
          },
          {
            id: "stimme",
            title: "Mach die Stimme konsistent und konkret",
            body: [
              "Generierte Prosa klingt oft glatt, aber austauschbar. Starke Stimme entsteht durch konkrete Beispiele, präzisere Verben, stabile Perspektive und ein definiertes Kompetenzniveau.",
              "Erstelle ein Voice Sheet mit bevorzugten Begriffen, verbotenen Phrasen, Rhythmus und Beispielen für den gewünschten Klang.",
            ],
            bullets: [
              "Ersetze generische Motivation durch konkrete Anleitung.",
              "Nutze Beispiele aus der Welt der Zielgruppe.",
              "Entferne Phrasen, die in vielen Kapiteln wiederkehren.",
              "Halte den Ton von Einleitung bis Schluss konsistent.",
            ],
          },
          {
            id: "vertrauen",
            title: "Schütze Vertrauen mit finaler QA",
            body: [
              "Vertrauen bricht, wenn ein Buch übertreibt, sich widerspricht oder aufgebläht wirkt. Die finale QA prüft Fakten, Terminologie, Formatierung und die Verbindung zwischen Titelversprechen und Inhalt.",
              "Bei sensiblen Themen sollte generierter Text nicht als professionelle Beratung auftreten. Klar, vorsichtig und nützlich ist stärker.",
            ],
            bullets: [
              "Prüfe Namen, Daten, Tools und Aussagen.",
              "Kontrolliere die logische Abfolge der Überschriften.",
              "Entferne Fülltext, der nichts lehrt oder bewegt.",
              "Lies das erste Kapitel laut, um Rhythmusprobleme zu finden.",
            ],
          },
        ],
        checklist: [
          "Jedes Kapitel wird gegen sein Ziel geprüft.",
          "Wiederholungen, generische Übergänge und Fülltext sind entfernt.",
          "Beispiele passen zur Zielgruppe und Kategorie.",
          "Claims sind geprüft, abgeschwächt oder entfernt.",
          "Das finale Manuskript erfüllt Titel- und Beschreibungversprechen.",
        ],
        faq: [
          {
            question: "Kann KI ihr eigenes Manuskript lektorieren?",
            answer:
              "Sie kann Probleme finden und Revisionen vorschlagen, aber die finalen Akzeptanzkriterien sollten menschlich bleiben.",
          },
          {
            question: "Wie verbessert man einen KI-Entwurf am schnellsten?",
            answer:
              "Wiederholungen entfernen, konkrete Beispiele ergänzen und jedes Kapitel gegen ein klares Ziel prüfen.",
          },
        ],
      },
    },
  },
  {
    key: "kdp-launch-checklist",
    date: "2026-06-07",
    updated: "2026-06-07",
    readingTime: 10,
    accent: {
      start: "#f4f4ef",
      middle: "#ffd9c2",
      end: "#bfe9ff",
    },
    translations: {
      en: {
        slug: "kdp-book-launch-checklist",
        title: "KDP book launch checklist: metadata, files, pricing and first optimization pass",
        description:
          "A launch checklist for Amazon KDP books covering final files, metadata, cover checks, pricing, categories, reviews and post-launch improvements.",
        keywords: [
          "KDP launch checklist",
          "publish book on Amazon KDP",
          "book launch SEO",
          "KDP upload checklist",
        ],
        category: "Launch",
        intro: [
          "A strong launch is less about drama and more about removing avoidable mistakes. KDP rewards clean files, clear metadata, appropriate categories and a product page that matches reader expectation.",
          "This checklist is designed for operators who want every title to leave production with the same level of control.",
        ],
        sections: [
          {
            id: "files",
            title: "Check files before upload",
            body: [
              "Most launch problems start with files: wrong trim size, missing bleed, broken table of contents, low-resolution assets or inconsistent formatting.",
              "Run the book through preview tools and inspect the exact formats readers will buy.",
            ],
            bullets: [
              "Confirm trim size, margins, bleed and page count.",
              "Check ebook navigation and clickable table of contents.",
              "Inspect cover thumbnail and print wrap preview.",
              "Keep final source files and export files in one folder.",
            ],
          },
          {
            id: "metadata",
            title: "Lock metadata before pressing publish",
            body: [
              "Title, subtitle, description, author name, categories and keywords should all communicate the same reader promise.",
              "Last-minute metadata improvisation creates mismatched listings. Use the research brief and make every field earn its place.",
            ],
            bullets: [
              "Compare title and description against the final manuscript.",
              "Use categories that match buyer expectation.",
              "Avoid keyword stuffing in public-facing copy.",
              "Save a snapshot of launch metadata for future comparison.",
            ],
          },
          {
            id: "after",
            title: "Plan the first optimization pass",
            body: [
              "The launch is the beginning of measurement. After the first signal window, review impressions, clicks, conversion, reviews and page quality before changing the wrong thing.",
              "Optimize one major variable at a time so you can learn what actually moved performance.",
            ],
            bullets: [
              "Review performance after enough traffic exists.",
              "Improve description before assuming the book needs a new cover.",
              "Track every change with a date and reason.",
              "Feed launch lessons into the next title brief.",
            ],
          },
        ],
        checklist: [
          "Interior and cover files pass preview checks.",
          "Metadata is aligned with the manuscript and cover promise.",
          "Categories and keywords match real reader search behavior.",
          "Pricing is set intentionally for launch and catalog strategy.",
          "A post-launch review date is scheduled before publication.",
        ],
        faq: [
          {
            question: "Should metadata be changed immediately after launch?",
            answer:
              "Not without signal. Wait until you can distinguish low visibility, low click-through and low conversion.",
          },
          {
            question: "What is the most common KDP launch mistake?",
            answer:
              "Publishing with mismatched assets: a title, cover, description and manuscript that each promise something slightly different.",
          },
        ],
      },
      fr: {
        slug: "checklist-lancement-livre-kdp",
        title: "Checklist lancement KDP : métadonnées, fichiers, prix et première optimisation",
        description:
          "Checklist pour publier un livre Amazon KDP : fichiers finaux, métadonnées, couverture, prix, catégories, avis et optimisations post-lancement.",
        keywords: [
          "checklist lancement KDP",
          "publier livre Amazon KDP",
          "SEO lancement livre",
          "checklist upload KDP",
        ],
        category: "Lancement",
        intro: [
          "Un bon lancement tient moins au bruit qu'à l'élimination des erreurs évitables. KDP récompense des fichiers propres, des métadonnées claires, des catégories pertinentes et une page produit alignée avec l'attente lecteur.",
          "Cette checklist vise les opérateurs qui veulent sortir chaque titre avec le même niveau de contrôle.",
        ],
        sections: [
          {
            id: "fichiers",
            title: "Vérifier les fichiers avant l'upload",
            body: [
              "La plupart des problèmes viennent des fichiers : mauvais format, fonds perdus manquants, table des matières cassée, visuels basse résolution ou formatage incohérent.",
              "Passez le livre dans les outils d'aperçu et inspectez les formats exacts que les lecteurs achèteront.",
            ],
            bullets: [
              "Confirmer format, marges, fonds perdus et nombre de pages.",
              "Tester navigation ebook et table des matières cliquable.",
              "Inspecter miniature de couverture et aperçu print complet.",
              "Garder sources et exports finaux dans un même dossier.",
            ],
          },
          {
            id: "metadonnees",
            title: "Verrouiller les métadonnées avant publication",
            body: [
              "Titre, sous-titre, description, nom d'auteur, catégories et mots-clés doivent communiquer la même promesse lecteur.",
              "L'improvisation de dernière minute crée des fiches incohérentes. Utilisez le brief de recherche et donnez un rôle à chaque champ.",
            ],
            bullets: [
              "Comparer titre et description au manuscrit final.",
              "Choisir des catégories conformes à l'attente acheteur.",
              "Éviter le bourrage de mots-clés dans le copy public.",
              "Sauvegarder les métadonnées de lancement.",
            ],
          },
          {
            id: "apres",
            title: "Prévoir la première passe d'optimisation",
            body: [
              "Le lancement démarre la mesure. Après une première fenêtre de signal, analysez impressions, clics, conversion, avis et qualité de page avant de changer le mauvais élément.",
              "Optimisez une grande variable à la fois pour apprendre ce qui déplace réellement la performance.",
            ],
            bullets: [
              "Analyser seulement après assez de trafic.",
              "Améliorer la description avant de conclure que la couverture est en cause.",
              "Tracer chaque changement avec date et raison.",
              "Réinjecter les leçons dans le brief du titre suivant.",
            ],
          },
        ],
        checklist: [
          "Intérieur et couverture passent les aperçus.",
          "Les métadonnées sont alignées avec manuscrit et couverture.",
          "Catégories et mots-clés correspondent aux recherches réelles.",
          "Le prix sert une stratégie de lancement et de catalogue.",
          "Une date de revue post-lancement est planifiée avant publication.",
        ],
        faq: [
          {
            question: "Faut-il modifier les métadonnées juste après le lancement ?",
            answer:
              "Pas sans signal. Attendez de distinguer faible visibilité, faible clic et faible conversion.",
          },
          {
            question: "Quelle est l'erreur de lancement KDP la plus fréquente ?",
            answer:
              "Publier des assets désalignés : titre, couverture, description et manuscrit promettent chacun une chose un peu différente.",
          },
        ],
      },
      it: {
        slug: "checklist-lancio-libro-kdp",
        title: "Checklist lancio KDP: metadati, file, prezzo e prima ottimizzazione",
        description:
          "Checklist per libri Amazon KDP: file finali, metadati, copertina, prezzo, categorie, recensioni e miglioramenti post-lancio.",
        keywords: [
          "checklist lancio KDP",
          "pubblicare libro Amazon KDP",
          "SEO lancio libro",
          "checklist upload KDP",
        ],
        category: "Lancio",
        intro: [
          "Un buon lancio riguarda meno il rumore e più la rimozione di errori evitabili. KDP premia file puliti, metadati chiari, categorie corrette e pagina prodotto coerente.",
          "Questa checklist è per operatori che vogliono portare ogni titolo fuori produzione con lo stesso controllo.",
        ],
        sections: [
          {
            id: "file",
            title: "Controlla i file prima dell'upload",
            body: [
              "Molti problemi nascono dai file: formato sbagliato, abbondanza mancante, indice rotto, asset a bassa risoluzione o formattazione incoerente.",
              "Usa gli strumenti di preview e ispeziona i formati che i lettori compreranno davvero.",
            ],
            bullets: [
              "Conferma formato, margini, abbondanza e numero pagine.",
              "Controlla navigazione ebook e indice cliccabile.",
              "Ispeziona thumbnail e anteprima wrap print.",
              "Tieni sorgenti ed export finali nella stessa cartella.",
            ],
          },
          {
            id: "metadati",
            title: "Blocca i metadati prima di pubblicare",
            body: [
              "Titolo, sottotitolo, descrizione, autore, categorie e keyword devono comunicare la stessa promessa.",
              "L'improvvisazione finale crea listing incoerenti. Usa il brief di ricerca e assegna uno scopo a ogni campo.",
            ],
            bullets: [
              "Confronta titolo e descrizione con il manoscritto finale.",
              "Usa categorie coerenti con l'aspettativa d'acquisto.",
              "Evita keyword stuffing nel copy pubblico.",
              "Salva uno snapshot dei metadati di lancio.",
            ],
          },
          {
            id: "dopo",
            title: "Pianifica la prima ottimizzazione",
            body: [
              "Il lancio è l'inizio della misurazione. Dopo una finestra di segnale, rivedi impression, clic, conversione, recensioni e pagina prima di cambiare l'elemento sbagliato.",
              "Ottimizza una variabile importante alla volta per capire cosa muove davvero la performance.",
            ],
            bullets: [
              "Analizza dopo abbastanza traffico.",
              "Migliora la descrizione prima di rifare la copertina.",
              "Traccia ogni modifica con data e motivo.",
              "Porta le lezioni nel brief del titolo successivo.",
            ],
          },
        ],
        checklist: [
          "File interni e copertina passano le preview.",
          "I metadati sono coerenti con manoscritto e promessa visiva.",
          "Categorie e keyword corrispondono a ricerche reali.",
          "Il prezzo segue strategia di lancio e catalogo.",
          "La review post-lancio è pianificata prima della pubblicazione.",
        ],
        faq: [
          {
            question: "Cambiare subito i metadati dopo il lancio?",
            answer:
              "Non senza segnale. Prima distingui bassa visibilità, basso click-through e bassa conversione.",
          },
          {
            question: "Qual è l'errore KDP più comune?",
            answer:
              "Asset disallineati: titolo, copertina, descrizione e manoscritto promettono cose leggermente diverse.",
          },
        ],
      },
      de: {
        slug: "kdp-buchlaunch-checkliste",
        title: "KDP-Buchlaunch-Checkliste: Metadaten, Dateien, Preis und erste Optimierung",
        description:
          "Checkliste für Amazon-KDP-Bücher: finale Dateien, Metadaten, Cover, Preis, Kategorien, Reviews und Post-Launch-Verbesserungen.",
        keywords: [
          "KDP Launch Checkliste",
          "Buch auf Amazon KDP veröffentlichen",
          "Buchlaunch SEO",
          "KDP Upload Checkliste",
        ],
        category: "Launch",
        intro: [
          "Ein starker Launch besteht weniger aus Drama als aus dem Entfernen vermeidbarer Fehler. KDP belohnt saubere Dateien, klare Metadaten, passende Kategorien und eine Produktseite, die Erwartungen erfüllt.",
          "Diese Checkliste ist für Operatoren, die jeden Titel mit demselben Kontrollniveau veröffentlichen wollen.",
        ],
        sections: [
          {
            id: "dateien",
            title: "Prüfe Dateien vor dem Upload",
            body: [
              "Viele Launchprobleme beginnen mit Dateien: falsches Format, fehlender Beschnitt, kaputtes Inhaltsverzeichnis, niedrige Auflösung oder inkonsistentes Layout.",
              "Nutze Preview-Tools und prüfe die exakten Formate, die Leser kaufen werden.",
            ],
            bullets: [
              "Bestätige Format, Ränder, Beschnitt und Seitenzahl.",
              "Prüfe Ebook-Navigation und klickbares Inhaltsverzeichnis.",
              "Kontrolliere Cover-Thumbnail und Print-Wrap-Vorschau.",
              "Bewahre Quellen und finale Exporte in einem Ordner auf.",
            ],
          },
          {
            id: "metadaten",
            title: "Sperre Metadaten vor dem Veröffentlichen",
            body: [
              "Titel, Untertitel, Beschreibung, Autorenname, Kategorien und Keywords sollten dasselbe Leserversprechen kommunizieren.",
              "Spontane Metadaten im letzten Moment erzeugen unpassende Listings. Nutze den Recherchebrief und gib jedem Feld eine Aufgabe.",
            ],
            bullets: [
              "Vergleiche Titel und Beschreibung mit dem finalen Manuskript.",
              "Nutze Kategorien, die Käufererwartungen entsprechen.",
              "Vermeide Keyword-Stuffing im öffentlichen Text.",
              "Speichere einen Snapshot der Launch-Metadaten.",
            ],
          },
          {
            id: "danach",
            title: "Plane die erste Optimierung",
            body: [
              "Der Launch ist der Beginn der Messung. Nach einer ersten Signalphase prüfst du Impressionen, Klicks, Conversion, Reviews und Seitenqualität, bevor du das falsche Element änderst.",
              "Optimiere eine große Variable nach der anderen, damit du lernst, was die Performance wirklich bewegt.",
            ],
            bullets: [
              "Analysiere erst nach ausreichendem Traffic.",
              "Verbessere die Beschreibung, bevor du vom Coverproblem ausgehst.",
              "Tracke jede Änderung mit Datum und Grund.",
              "Übertrage Learnings in den nächsten Titelbrief.",
            ],
          },
        ],
        checklist: [
          "Innenlayout und Cover bestehen die Vorschau.",
          "Metadaten passen zu Manuskript und Coverversprechen.",
          "Kategorien und Keywords entsprechen realem Suchverhalten.",
          "Der Preis folgt Launch- und Katalogstrategie.",
          "Ein Post-Launch-Review ist vor Veröffentlichung geplant.",
        ],
        faq: [
          {
            question: "Sollten Metadaten direkt nach dem Launch geändert werden?",
            answer:
              "Nicht ohne Signal. Warte, bis Sichtbarkeit, Klickrate und Conversion unterscheidbar sind.",
          },
          {
            question: "Was ist der häufigste KDP-Launchfehler?",
            answer:
              "Nicht abgestimmte Assets: Titel, Cover, Beschreibung und Manuskript versprechen leicht unterschiedliche Dinge.",
          },
        ],
      },
    },
  },
  {
    key: "pen-name-author-brand",
    date: "2026-06-07",
    updated: "2026-06-07",
    readingTime: 9,
    accent: {
      start: "#f3f0ff",
      middle: "#a9f0d6",
      end: "#f4f4ef",
    },
    translations: {
      en: {
        slug: "pen-name-author-brand-strategy",
        title: "Pen name strategy: build author brands that make publishing catalogs easier to trust",
        description:
          "How to choose and manage pen names, author positioning, catalog consistency and trust signals for multi-title publishing.",
        keywords: [
          "pen name strategy",
          "author brand",
          "KDP pen name",
          "publishing catalog branding",
        ],
        category: "Brand",
        intro: [
          "A pen name is not a disguise for weak books. It is a positioning asset that helps readers understand what kind of promise they can expect across titles.",
          "When a catalog grows, author branding becomes a navigation system: genre, tone, quality bar and reader relationship.",
        ],
        sections: [
          {
            id: "positioning",
            title: "Choose a pen name around reader expectation",
            body: [
              "The best pen name fits the category, sounds credible to the target reader and leaves room for future titles. It should feel natural on the cover, product page and author bio.",
              "Avoid names that create copyright, impersonation or trust issues. Distinctive and simple beats clever and confusing.",
            ],
            bullets: [
              "Check category fit before choosing a name.",
              "Avoid similarity to famous authors or protected brands.",
              "Keep pronunciation and spelling simple.",
              "Document which niches belong under each author identity.",
            ],
          },
          {
            id: "bio",
            title: "Make the author bio a trust signal",
            body: [
              "A useful bio tells readers why this author publishes in this space and what standard the catalog follows. It does not need fake credentials.",
              "Use the bio to set tone, audience, topics and editorial promise. Trust comes from clarity and consistency.",
            ],
            bullets: [
              "State the author focus in one sentence.",
              "Avoid unverifiable claims.",
              "Match bio tone to book tone.",
              "Update the bio as the catalog matures.",
            ],
          },
          {
            id: "catalog",
            title: "Keep author brands clean as the catalog expands",
            body: [
              "One author name should not carry unrelated promises. If two niches attract different readers, split them before reviews, recommendations and expectations become mixed.",
              "Create a simple author map with genres, promises, tone rules, cover style and metadata conventions.",
            ],
            bullets: [
              "Group titles by reader expectation.",
              "Keep cover and description style consistent within one author.",
              "Use separate pen names for conflicting genres or promises.",
              "Review brand coherence before every launch.",
            ],
          },
        ],
        checklist: [
          "The pen name matches the category and target reader.",
          "The name avoids confusion with real brands or famous authors.",
          "The author bio is clear without fake authority.",
          "Catalog boundaries are documented.",
          "Each new title strengthens rather than dilutes the author promise.",
        ],
        faq: [
          {
            question: "Can one pen name cover many niches?",
            answer:
              "Only if the reader expectation stays coherent. Conflicting genres or promises usually need separate author brands.",
          },
          {
            question: "Should a pen name pretend to have credentials?",
            answer:
              "No. Credibility should come from clarity, quality, useful positioning and truthful presentation.",
          },
        ],
      },
      fr: {
        slug: "strategie-nom-de-plume-marque-auteur",
        title: "Stratégie de nom de plume : créer des marques auteur qui inspirent confiance",
        description:
          "Comment choisir et gérer noms de plume, positionnement auteur, cohérence catalogue et signaux de confiance en édition multi-titres.",
        keywords: [
          "stratégie nom de plume",
          "marque auteur",
          "nom de plume KDP",
          "branding catalogue éditorial",
        ],
        category: "Marque",
        intro: [
          "Un nom de plume n'est pas un masque pour des livres faibles. C'est un asset de positionnement qui aide le lecteur à comprendre la promesse attendue d'un titre à l'autre.",
          "Quand le catalogue grandit, la marque auteur devient un système de navigation : genre, ton, niveau qualité et relation lecteur.",
        ],
        sections: [
          {
            id: "positionnement",
            title: "Choisir un nom de plume autour de l'attente lecteur",
            body: [
              "Le meilleur nom de plume correspond à la catégorie, paraît crédible pour l'audience et laisse de la place aux prochains titres. Il doit fonctionner sur couverture, fiche produit et bio.",
              "Évitez les noms qui créent des problèmes de droits, d'usurpation ou de confiance. Simple et distinct vaut mieux que malin et confus.",
            ],
            bullets: [
              "Vérifier le fit catégorie avant le choix.",
              "Éviter la proximité avec auteurs connus ou marques protégées.",
              "Garder orthographe et prononciation simples.",
              "Documenter les niches liées à chaque identité.",
            ],
          },
          {
            id: "bio",
            title: "Faire de la bio auteur un signal de confiance",
            body: [
              "Une bio utile explique pourquoi cet auteur publie dans cet univers et quel standard suit le catalogue. Elle n'a pas besoin de faux diplômes.",
              "Utilisez la bio pour poser ton, audience, thèmes et promesse éditoriale. La confiance vient de la clarté et de la cohérence.",
            ],
            bullets: [
              "Résumer le focus auteur en une phrase.",
              "Éviter les affirmations invérifiables.",
              "Aligner ton de la bio et ton des livres.",
              "Mettre à jour la bio avec la maturité du catalogue.",
            ],
          },
          {
            id: "catalogue",
            title: "Garder des marques auteur propres quand le catalogue s'étend",
            body: [
              "Un même nom ne doit pas porter des promesses sans lien. Si deux niches attirent des lecteurs différents, séparez-les avant que recommandations et avis ne se mélangent.",
              "Créez une carte auteur avec genres, promesses, règles de ton, style couverture et conventions de métadonnées.",
            ],
            bullets: [
              "Grouper les titres par attente lecteur.",
              "Maintenir style couverture et description dans une même identité.",
              "Séparer les noms pour genres ou promesses contradictoires.",
              "Revoir la cohérence de marque avant chaque lancement.",
            ],
          },
        ],
        checklist: [
          "Le nom de plume correspond à la catégorie et au lecteur cible.",
          "Le nom évite la confusion avec marques ou auteurs connus.",
          "La bio est claire sans fausse autorité.",
          "Les frontières du catalogue sont documentées.",
          "Chaque nouveau titre renforce la promesse auteur.",
        ],
        faq: [
          {
            question: "Un nom de plume peut-il couvrir beaucoup de niches ?",
            answer:
              "Seulement si l'attente lecteur reste cohérente. Des genres ou promesses contradictoires demandent souvent des marques séparées.",
          },
          {
            question: "Faut-il inventer des références dans une bio ?",
            answer:
              "Non. La crédibilité doit venir de la clarté, de la qualité, du positionnement utile et d'une présentation honnête.",
          },
        ],
      },
      it: {
        slug: "strategia-pseudonimo-brand-autore",
        title: "Strategia pseudonimo: creare brand autore che rendono il catalogo affidabile",
        description:
          "Come scegliere e gestire pseudonimi, posizionamento autore, coerenza di catalogo e segnali di fiducia per pubblicare più titoli.",
        keywords: [
          "strategia pseudonimo",
          "brand autore",
          "pseudonimo KDP",
          "branding catalogo editoriale",
        ],
        category: "Brand",
        intro: [
          "Uno pseudonimo non è una maschera per libri deboli. È un asset di posizionamento che aiuta i lettori a capire quale promessa aspettarsi.",
          "Quando il catalogo cresce, il brand autore diventa un sistema di navigazione: genere, tono, standard qualità e relazione col lettore.",
        ],
        sections: [
          {
            id: "posizionamento",
            title: "Scegli lo pseudonimo intorno all'aspettativa del lettore",
            body: [
              "Il miglior pseudonimo si adatta alla categoria, suona credibile e lascia spazio a titoli futuri. Deve funzionare in copertina, pagina prodotto e bio.",
              "Evita nomi che creano problemi di copyright, impersonificazione o fiducia. Distintivo e semplice batte brillante ma confuso.",
            ],
            bullets: [
              "Controlla il fit di categoria prima del nome.",
              "Evita somiglianze con autori famosi o brand protetti.",
              "Mantieni spelling e pronuncia semplici.",
              "Documenta quali nicchie appartengono a ogni identità.",
            ],
          },
          {
            id: "bio",
            title: "Trasforma la bio autore in segnale di fiducia",
            body: [
              "Una bio utile spiega perché l'autore pubblica in quello spazio e quale standard segue il catalogo. Non servono credenziali inventate.",
              "Usa la bio per definire tono, audience, temi e promessa editoriale. La fiducia nasce da chiarezza e coerenza.",
            ],
            bullets: [
              "Dichiara il focus autore in una frase.",
              "Evita claim non verificabili.",
              "Allinea tono della bio e tono del libro.",
              "Aggiorna la bio con la maturità del catalogo.",
            ],
          },
          {
            id: "catalogo",
            title: "Mantieni puliti i brand autore mentre il catalogo cresce",
            body: [
              "Un nome autore non dovrebbe portare promesse scollegate. Se due nicchie attirano lettori diversi, separale prima che recensioni e aspettative si mescolino.",
              "Crea una mappa autore con generi, promesse, regole di tono, stile copertina e convenzioni metadati.",
            ],
            bullets: [
              "Raggruppa titoli per aspettativa del lettore.",
              "Mantieni stile coerente dentro un'identità.",
              "Usa nomi separati per generi o promesse conflittuali.",
              "Rivedi coerenza brand prima di ogni lancio.",
            ],
          },
        ],
        checklist: [
          "Lo pseudonimo si adatta a categoria e lettore target.",
          "Il nome evita confusione con brand o autori noti.",
          "La bio è chiara senza autorità finta.",
          "I confini del catalogo sono documentati.",
          "Ogni nuovo titolo rafforza la promessa autore.",
        ],
        faq: [
          {
            question: "Uno pseudonimo può coprire molte nicchie?",
            answer:
              "Solo se l'aspettativa del lettore resta coerente. Generi o promesse contrastanti richiedono spesso brand separati.",
          },
          {
            question: "Uno pseudonimo deve fingere credenziali?",
            answer:
              "No. La credibilità viene da chiarezza, qualità, posizionamento utile e presentazione onesta.",
          },
        ],
      },
      de: {
        slug: "pseudonym-autorenmarke-strategie",
        title: "Pseudonym-Strategie: Autorenmarken aufbauen, denen Leser leichter vertrauen",
        description:
          "So wählst und verwaltest du Pseudonyme, Autorenpositionierung, Katalogkonsistenz und Vertrauenssignale für Multi-Titel-Publishing.",
        keywords: [
          "Pseudonym Strategie",
          "Autorenmarke",
          "KDP Pseudonym",
          "Publishing Katalog Branding",
        ],
        category: "Marke",
        intro: [
          "Ein Pseudonym ist keine Tarnung für schwache Bücher. Es ist ein Positionierungsasset, das Lesern zeigt, welches Versprechen sie über mehrere Titel erwarten können.",
          "Wenn der Katalog wächst, wird Autorenbranding zum Navigationssystem: Genre, Ton, Qualitätsniveau und Leserbeziehung.",
        ],
        sections: [
          {
            id: "positionierung",
            title: "Wähle das Pseudonym rund um Leserwartung",
            body: [
              "Das beste Pseudonym passt zur Kategorie, wirkt für die Zielgruppe glaubwürdig und lässt Raum für künftige Titel. Es muss auf Cover, Produktseite und Bio natürlich funktionieren.",
              "Vermeide Namen, die Urheberrechts-, Verwechslungs- oder Vertrauensprobleme schaffen. Klar und unterscheidbar schlägt clever und verwirrend.",
            ],
            bullets: [
              "Prüfe Kategorie-Fit vor der Namenswahl.",
              "Vermeide Nähe zu berühmten Autoren oder geschützten Marken.",
              "Halte Aussprache und Schreibweise einfach.",
              "Dokumentiere, welche Nischen zu welcher Identität gehören.",
            ],
          },
          {
            id: "bio",
            title: "Mach die Autorenbio zum Vertrauenssignal",
            body: [
              "Eine gute Bio erklärt, warum diese Autorenmarke in diesem Bereich publiziert und welchem Standard der Katalog folgt. Falsche Referenzen sind nicht nötig.",
              "Nutze die Bio für Ton, Zielgruppe, Themen und redaktionelles Versprechen. Vertrauen entsteht durch Klarheit und Konsistenz.",
            ],
            bullets: [
              "Formuliere den Autorenfokus in einem Satz.",
              "Vermeide nicht überprüfbare Claims.",
              "Passe Bio-Ton und Buchton an.",
              "Aktualisiere die Bio mit wachsendem Katalog.",
            ],
          },
          {
            id: "katalog",
            title: "Halte Autorenmarken sauber, wenn der Katalog wächst",
            body: [
              "Ein Autorenname sollte keine unverbundenen Versprechen tragen. Wenn zwei Nischen andere Leser anziehen, trenne sie, bevor Reviews, Empfehlungen und Erwartungen vermischt werden.",
              "Erstelle eine Autorenkarte mit Genres, Versprechen, Tonregeln, Coverstil und Metadatenkonventionen.",
            ],
            bullets: [
              "Gruppiere Titel nach Leserwartung.",
              "Halte Cover- und Beschreibungsstil innerhalb einer Marke konsistent.",
              "Nutze separate Pseudonyme für widersprüchliche Genres.",
              "Prüfe Markenkohärenz vor jedem Launch.",
            ],
          },
        ],
        checklist: [
          "Das Pseudonym passt zu Kategorie und Zielgruppe.",
          "Der Name vermeidet Verwechslung mit Marken oder bekannten Autoren.",
          "Die Bio ist klar und ohne falsche Autorität.",
          "Kataloggrenzen sind dokumentiert.",
          "Jeder neue Titel stärkt statt verwässert das Autorenversprechen.",
        ],
        faq: [
          {
            question: "Kann ein Pseudonym viele Nischen abdecken?",
            answer:
              "Nur wenn die Leserwartung konsistent bleibt. Widersprüchliche Genres oder Versprechen brauchen meist getrennte Marken.",
          },
          {
            question: "Sollte ein Pseudonym Referenzen vortäuschen?",
            answer:
              "Nein. Glaubwürdigkeit entsteht durch Klarheit, Qualität, hilfreiche Positionierung und ehrliche Darstellung.",
          },
        ],
      },
    },
  },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function postLocales(post: BlogPost): Locale[] {
  return locales.filter((locale) => Boolean(post.translations[locale]));
}

export function getPostTranslation(post: BlogPost, locale: Locale): BlogTranslation {
  return post.translations[locale] ?? post.translations.en;
}

export function postEntries(post: BlogPost) {
  return postLocales(post).map((locale) => ({
    locale,
    article: getPostTranslation(post, locale),
  }));
}

export function getPostsForLocale(locale: Locale) {
  return posts
    .filter((post) => Boolean(post.translations[locale]))
    .map((post) => ({
      ...post,
      translation: getPostTranslation(post, locale),
    }));
}

export function getPostBySlug(locale: Locale, slug: string) {
  return posts.find((post) => post.translations[locale]?.slug === slug);
}

export function blogIndexPath(locale: Locale) {
  return `/${locale}/blog`;
}

export function blogIndexUrl(locale: Locale) {
  return `${SITE_URL}${blogIndexPath(locale)}`;
}

export function postPath(locale: Locale, post: BlogPost) {
  return `${blogIndexPath(locale)}/${getPostTranslation(post, locale).slug}`;
}

export function postUrl(locale: Locale, post: BlogPost) {
  return `${SITE_URL}${postPath(locale, post)}`;
}

export function getBlogIndexAlternates() {
  return {
    en: blogIndexPath("en"),
    fr: blogIndexPath("fr"),
    it: blogIndexPath("it"),
    de: blogIndexPath("de"),
    "x-default": blogIndexPath(defaultLocale),
  };
}

export function getPostAlternates(post: BlogPost) {
  return {
    ...Object.fromEntries(
      postLocales(post).map((locale) => [locale, postPath(locale, post)]),
    ),
    "x-default": postPath(defaultLocale, post),
  };
}

export function getArticleStaticParams() {
  return posts.flatMap((post) =>
    postLocales(post).map((locale) => ({
      locale,
      slug: getPostTranslation(post, locale).slug,
    })),
  );
}
