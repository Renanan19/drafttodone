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
  followX: string;
  waitlist: string;
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
  translations: Record<Locale, BlogTranslation>;
};

export const blogCopy: Record<Locale, BlogCopy> = {
  en: {
    home: "Home",
    blog: "Blog",
    followX: "Follow on X",
    waitlist: "Join the waitlist",
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
    ctaTitle: "Turn your publishing workflow into a system.",
    ctaText:
      "DraftToDone helps transform ideas into manuscript, cover assets and optimized metadata from one controlled pipeline.",
    ctaButton: "Join the waitlist",
    footer: "Built in public for publishers who care about quality and leverage.",
  },
  fr: {
    home: "Accueil",
    blog: "Blog",
    followX: "Suivre sur X",
    waitlist: "Rejoindre la liste",
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
    ctaTitle: "Transformez votre workflow éditorial en système.",
    ctaText:
      "DraftToDone aide à transformer une idée en manuscrit, assets de couverture et métadonnées optimisées depuis un pipeline contrôlé.",
    ctaButton: "Rejoindre la liste",
    footer: "Construit en public pour les éditeurs qui veulent qualité et levier.",
  },
  it: {
    home: "Home",
    blog: "Blog",
    followX: "Segui su X",
    waitlist: "Unisciti alla lista",
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
    ctaTitle: "Trasforma il workflow editoriale in un sistema.",
    ctaText:
      "DraftToDone aiuta a trasformare un'idea in manoscritto, asset di copertina e metadati ottimizzati da un unico pipeline controllato.",
    ctaButton: "Unisciti alla lista",
    footer: "Costruito in pubblico per editori che vogliono qualità e leva.",
  },
  de: {
    home: "Startseite",
    blog: "Blog",
    followX: "Auf X folgen",
    waitlist: "Warteliste beitreten",
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
    ctaTitle: "Mach aus deinem Publishing-Workflow ein System.",
    ctaText:
      "DraftToDone hilft, Ideen in Manuskript, Cover-Assets und optimierte Metadaten aus einer kontrollierten Pipeline zu verwandeln.",
    ctaButton: "Warteliste beitreten",
    footer: "Öffentlich aufgebaut für Publisher, die Qualität und Hebelwirkung wollen.",
  },
};

export const posts: BlogPost[] = [
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
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPostsForLocale(locale: Locale) {
  return posts.map((post) => ({
    ...post,
    translation: post.translations[locale],
  }));
}

export function getPostBySlug(locale: Locale, slug: string) {
  return posts.find((post) => post.translations[locale].slug === slug);
}

export function blogIndexPath(locale: Locale) {
  return `/${locale}/blog`;
}

export function blogIndexUrl(locale: Locale) {
  return `${SITE_URL}${blogIndexPath(locale)}`;
}

export function postPath(locale: Locale, post: BlogPost) {
  return `${blogIndexPath(locale)}/${post.translations[locale].slug}`;
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
    en: postPath("en", post),
    fr: postPath("fr", post),
    it: postPath("it", post),
    de: postPath("de", post),
    "x-default": postPath(defaultLocale, post),
  };
}

export function getArticleStaticParams() {
  return posts.flatMap((post) =>
    locales.map((locale) => ({
      locale,
      slug: post.translations[locale].slug,
    })),
  );
}
