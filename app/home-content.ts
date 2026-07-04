import { SITE_NAME, SITE_URL, type Locale } from "./blog-content";

/* The live app (sign up, subscribe, generate). */
export const APP_URL = "https://app.drafttodone.io";

export type HomeCopy = {
  meta: { title: string; description: string };
  nav: { blog: string; pricing: string; openApp: string };
  hero: {
    eyebrow: string;
    h1main: string;
    h1accent: string;
    sub: string;
    subHighlight: string;
    microcopy: string;
    chips: string[];
    caption: string;
    openApp: string;
  };
  demo: {
    inputLabel: string;
    input: string;
    inputFacts: string[];
    outputLabel: string;
    outputTitle: string;
    outputSubtitle: string;
    artifacts: string[];
    metrics: { value: string; label: string }[];
  };
  origin: {
    eyebrow: string;
    h2: string;
    pre: string;
    money: string;
    mid: string;
    ban: string;
    post: string;
    mrr: string;
    sign: string;
  };
  proof: {
    eyebrow: string;
    h2: string;
    sub: string;
    quote: string;
    byline: string;
    points: string[];
  };
  features: { eyebrow: string; h2: string; sub: string; items: { title: string; text: string }[] };
  comparison: {
    eyebrow: string;
    h2: string;
    sub: string;
    rows: { label: string; manual: string; drafttodone: string }[];
  };
  tools: {
    eyebrow: string;
    h2: string;
    sub: string;
    items: { title: string; text: string; href: string }[];
    blogTitle: string;
    blogText: string;
    blogCta: string;
    explore: string;
  };
  faqHeading: string;
  faq: { q: string; a: string }[];
  pricing: {
    eyebrow: string;
    h2: string;
    sub: string;
    cta: string;
    best: string;
    includes: string[];
    note: string;
    plans: { name: string; price: string; period: string; credits: string; perBook: string; highlight: boolean }[];
  };
  cta: { h2: string; sub: string };
  share: { line: string; cta: string; text: string };
  footer: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: `${SITE_NAME} — Turn One Idea Into a Complete KDP Book`,
      description:
        "Generate a manuscript, full wrap cover, KDP metadata, and a verified pen name from one niche brief. Build 6 ready-to-publish books a week.",
    },
    nav: { blog: "Blog", pricing: "Pricing", openApp: "Generate a book" },
    hero: {
      eyebrow: "Live: 1 brief -> 1 complete book",
      h1main: "Turn one idea into a complete",
      h1accent: "KDP book.",
      sub: "DraftToDone generates the manuscript, front and back cover, title, description, keywords, and pen name from a single niche brief.",
      subHighlight: "6 ready-to-publish books a week.",
      microcopy: "No free plan: every credit goes toward a real book.",
      chips: ["Manuscript", "Front cover", "Back cover", "Verified pen name"],
      caption: "Six ready-to-publish books. Every week.",
      openApp: "Generate my book",
    },
    demo: {
      inputLabel: "Niche brief",
      input: "A practical 30-day guide for short-term rental hosts who want fewer bad reviews.",
      inputFacts: ["Reader promise: fewer guest issues", "Format: 10 chapters", "Marketplace: Amazon KDP"],
      outputLabel: "Generated package",
      outputTitle: "The Calm Host Playbook",
      outputSubtitle: "Manuscript, full cover, KDP description, 7 keyword slots, and pen name.",
      artifacts: ["38,000-word manuscript", "Front/spine/back cover", "KDP title + subtitle", "Description + keywords"],
      metrics: [
        { value: "1", label: "brief in" },
        { value: "4", label: "assets out" },
        { value: "6", label: "books/week target" },
      ],
    },
    origin: {
      eyebrow: "The origin story",
      h2: "I lost €400/month overnight. So I rebuilt the machine.",
      pre: "I used to make",
      money: "€400/month",
      mid: "on Amazon KDP until a bad pun for a pen name got me",
      ban: "permanently banned overnight.",
      post: "So I rebuilt the private algorithm I used to automate my entire publishing process into a SaaS — and now it's live. Follow my journey to",
      mrr: "recover my lost MRR.",
      sign: "Building in public",
    },
    proof: {
      eyebrow: "Founder proof",
      h2: "Built from a workflow that already sold on KDP.",
      sub: "The promise is not magic content spam. It is a repeatable product pipeline for operators who want catalog leverage.",
      quote:
        "I lost the KDP account overnight. DraftToDone is the rebuilt system: fewer prompts, cleaner packaging, and a stronger review loop before upload.",
      byline: "Antoine, founder of DraftToDone",
      points: [
        "No generic chatbot tab to babysit",
        "One product package instead of scattered files",
        "Built around KDP metadata and AI disclosure rules",
      ],
    },
    features: {
      eyebrow: "The engine",
      h2: "From blank page to published.",
      sub: "Three systems. One pipeline. Every asset a marketplace demands — generated, formatted, and ready to upload.",
      items: [
        { title: "Full Manuscript Generation", text: "The AI determines the ideal length and writes the entire book autonomously based on your niche." },
        { title: "Complete Cover Design", text: "Generates the front cover, spine, and back cover layout with AI imagery, ready for print." },
        { title: "Optimized Metadata", text: "Generates SEO-optimized titles, descriptions, and verified pen names to avoid copyright strikes." },
      ],
    },
    comparison: {
      eyebrow: "Why switch",
      h2: "Stop stitching together half-products.",
      sub: "DraftToDone is for the publisher who wants the whole KDP product, not another tab in the prompt stack.",
      rows: [
        { label: "Starting point", manual: "Blank doc, prompt stack, design tabs", drafttodone: "One niche brief" },
        { label: "What you get", manual: "Text first; cover and metadata later", drafttodone: "Manuscript, wrap cover, metadata together" },
        { label: "Cost logic", manual: "Subscriptions plus hours", drafttodone: "Credits tied to finished books" },
        { label: "Best for", manual: "One book you want to craft manually", drafttodone: "Repeatable KDP catalog operations" },
      ],
    },
    tools: {
      eyebrow: "Free tools & guides",
      h2: "Plan your next book before you write a word.",
      sub: "Free calculators and in-depth guides — then open the app to generate the whole book.",
      items: [
        { title: "KDP royalty calculator", text: "Model ebook and paperback payouts before you set a price.", href: "/en/kdp-royalty-calculator" },
        { title: "AI book cover generator", text: "Front cover, spine and back — print-ready for KDP.", href: "/en/ai-book-cover-generator" },
        { title: "AI publishing software", text: "One controlled workflow from idea to upload.", href: "/en/ai-publishing-software" },
      ],
      blogTitle: "The publishing blog",
      blogText: "25 in-depth guides on KDP, book SEO, covers and catalog operations.",
      blogCta: "Read the blog",
      explore: "Explore",
    },
    faqHeading: "Questions, answered.",
    faq: [
      { q: "What is DraftToDone?", a: "DraftToDone is AI publishing software that generates the whole book product — manuscript, front and back cover, and an SEO-optimized title and description — ready to upload to Amazon KDP." },
      { q: "Does it write the entire book?", a: "Yes. The AI determines the ideal length and writes the full manuscript from your niche brief, then builds the cover package and metadata around it." },
      { q: "Is the content allowed on Amazon KDP?", a: "DraftToDone is built around KDP content and AI-disclosure rules, with verified pen names to reduce copyright-strike risk. You stay responsible for reviewing each book and disclosing AI use as KDP requires." },
      { q: "How many books can I publish?", a: "Plans are book-credit subscriptions — one credit makes one complete, ready-to-publish book. The weekly plan is built around six ready-to-publish books a week." },
      { q: "Is it available now?", a: "Yes — DraftToDone is live. Open the app at app.drafttodone.io and start publishing today." },
    ],
    pricing: {
      eyebrow: "Pricing",
      h2: "Simple plans. Real books.",
      sub: "Every plan is a book-credit subscription — one credit makes one complete, ready-to-publish book. Subscribe and manage everything in the app.",
      cta: "Generate my book",
      best: "Best value",
      includes: ["Full manuscript", "Front & back cover", "KDP-ready PDF", "Verified pen name"],
      note: "No free plan. Cancel anytime from the app.",
      plans: [
        { name: "Weekly", price: "€14.99", period: "/ week", credits: "6 books every week", perBook: "≈ €2.50 per book", highlight: false },
        { name: "Yearly", price: "€390", period: "/ year", credits: "312 books a year", perBook: "≈ €1.25 per book", highlight: true },
      ],
    },
    cta: { h2: "One brief. One complete KDP book.", sub: "Open the app, enter a niche brief, and build the full package instead of babysitting five disconnected tools." },
    share: {
      line: "One brief. One complete KDP book. That is DraftToDone.",
      cta: "Share this line",
      text: "One brief. One complete KDP book. DraftToDone turns a niche idea into manuscript, cover, and KDP metadata.",
    },
    footer: "© 2026 DraftToDone.io. Built in public.",
  },
  fr: {
    meta: {
      title: `${SITE_NAME} — Transformez une idée en livre KDP complet`,
      description:
        "Générez manuscrit, couverture complète, métadonnées KDP et nom de plume vérifié depuis un seul brief de niche. 6 livres prêts à publier par semaine.",
    },
    nav: { blog: "Blog", pricing: "Tarifs", openApp: "Générer un livre" },
    hero: {
      eyebrow: "En ligne : 1 brief -> 1 livre complet",
      h1main: "Transformez une idée en livre",
      h1accent: "prêt pour KDP.",
      sub: "DraftToDone génère le manuscrit, la couverture recto-verso, le titre, la description, les mots-clés et le nom de plume depuis un seul brief de niche.",
      subHighlight: "6 livres prêts à publier par semaine.",
      microcopy: "Pas d'offre gratuite : chaque crédit sert à produire un vrai livre.",
      chips: ["Manuscrit", "Couverture", "Quatrième", "Nom de plume vérifié"],
      caption: "Six livres prêts à publier. Chaque semaine.",
      openApp: "Générer mon livre",
    },
    demo: {
      inputLabel: "Brief de niche",
      input: "Un guide pratique de 30 jours pour hôtes en location courte durée qui veulent réduire les mauvais avis.",
      inputFacts: ["Promesse lecteur : moins de problèmes voyageurs", "Format : 10 chapitres", "Marketplace : Amazon KDP"],
      outputLabel: "Pack généré",
      outputTitle: "Le guide de l'hôte serein",
      outputSubtitle: "Manuscrit, couverture complète, description KDP, 7 mots-clés et nom de plume.",
      artifacts: ["Manuscrit de 38 000 mots", "Couverture recto/dos/verso", "Titre + sous-titre KDP", "Description + mots-clés"],
      metrics: [
        { value: "1", label: "brief entrant" },
        { value: "4", label: "assets générés" },
        { value: "6", label: "livres/semaine visés" },
      ],
    },
    origin: {
      eyebrow: "L'histoire",
      h2: "J'ai perdu 400 €/mois en une nuit. Alors j'ai reconstruit la machine.",
      pre: "Je gagnais",
      money: "400 €/mois",
      mid: "sur Amazon KDP jusqu'à ce qu'un mauvais jeu de mots comme nom de plume me fasse",
      ban: "bannir définitivement, du jour au lendemain.",
      post: "J'ai donc transformé en SaaS l'algorithme privé qui automatisait toute ma chaîne de publication — et il est maintenant en ligne. Suivez mon parcours pour",
      mrr: "récupérer mon MRR perdu.",
      sign: "Construit en public",
    },
    proof: {
      eyebrow: "Preuve fondateur",
      h2: "Construit à partir d'un workflow qui a déjà vendu sur KDP.",
      sub: "La promesse n'est pas de spammer du contenu magique. C'est un pipeline produit reproductible pour bâtir un catalogue avec levier.",
      quote:
        "J'ai perdu le compte KDP du jour au lendemain. DraftToDone est le système reconstruit : moins de prompts, un packaging plus propre et une meilleure boucle de relecture avant l'upload.",
      byline: "Antoine, fondateur de DraftToDone",
      points: [
        "Pas d'onglet chatbot générique à surveiller",
        "Un pack produit au lieu de fichiers éparpillés",
        "Pensé autour des métadonnées KDP et des règles de déclaration IA",
      ],
    },
    features: {
      eyebrow: "Le moteur",
      h2: "De la page blanche au livre publié.",
      sub: "Trois systèmes. Un seul pipeline. Chaque élément exigé par les plateformes — généré, formaté et prêt à publier.",
      items: [
        { title: "Génération complète du manuscrit", text: "L'IA détermine la longueur idéale et rédige le livre entier de façon autonome selon votre niche." },
        { title: "Couverture complète", text: "Génère la première de couverture, le dos et la quatrième avec des visuels IA, prêts pour l'impression." },
        { title: "Métadonnées optimisées", text: "Génère des titres et descriptions optimisés pour le SEO et des noms de plume vérifiés pour éviter les litiges de droits." },
      ],
    },
    comparison: {
      eyebrow: "Pourquoi changer",
      h2: "Arrêtez d'assembler des demi-produits.",
      sub: "DraftToDone s'adresse à l'éditeur qui veut tout le produit KDP, pas un onglet de plus dans une pile de prompts.",
      rows: [
        { label: "Point de départ", manual: "Page blanche, prompts, outils design", drafttodone: "Un brief de niche" },
        { label: "Résultat", manual: "Texte d'abord ; couverture et métadonnées ensuite", drafttodone: "Manuscrit, couverture complète et métadonnées ensemble" },
        { label: "Logique de coût", manual: "Abonnements plus heures de travail", drafttodone: "Crédits liés à des livres finis" },
        { label: "Idéal pour", manual: "Un livre à travailler manuellement", drafttodone: "Un catalogue KDP reproductible" },
      ],
    },
    tools: {
      eyebrow: "Outils & guides gratuits",
      h2: "Préparez votre prochain livre avant d'écrire un mot.",
      sub: "Des calculateurs gratuits et des guides détaillés — puis ouvrez l'app pour générer le livre entier.",
      items: [
        { title: "Calculateur de redevances KDP", text: "Modélisez les gains ebook et broché avant de fixer un prix.", href: "/fr/calculateur-redevances-kdp" },
        { title: "Générateur de couverture IA", text: "Première, dos et quatrième — prêts à imprimer pour KDP.", href: "/fr/generateur-couverture-livre-ia" },
        { title: "Logiciel d'édition IA", text: "Un workflow contrôlé, de l'idée à la mise en ligne.", href: "/fr/logiciel-edition-ia" },
      ],
      blogTitle: "Le blog édition",
      blogText: "25 guides détaillés sur KDP, le SEO livre, les couvertures et le catalogue.",
      blogCta: "Lire le blog",
      explore: "Découvrir",
    },
    faqHeading: "Vos questions, nos réponses.",
    faq: [
      { q: "Qu'est-ce que DraftToDone ?", a: "DraftToDone est un logiciel d'édition IA qui génère tout le produit livre — manuscrit, première et quatrième de couverture, titre et description optimisés SEO — prêt à publier sur Amazon KDP." },
      { q: "Écrit-il le livre entier ?", a: "Oui. L'IA détermine la longueur idéale et rédige le manuscrit complet à partir de votre brief de niche, puis construit la couverture et les métadonnées autour." },
      { q: "Le contenu est-il autorisé sur Amazon KDP ?", a: "DraftToDone est conçu autour des règles KDP de contenu et de divulgation IA, avec des noms de plume vérifiés pour réduire le risque de litige. Vous restez responsable de relire chaque livre et de déclarer l'usage de l'IA comme l'exige KDP." },
      { q: "Combien de livres puis-je publier ?", a: "Les offres sont des abonnements à crédits livres — 1 crédit = 1 livre complet prêt à publier. L'offre hebdomadaire est pensée pour six livres prêts à publier par semaine." },
      { q: "Est-ce disponible maintenant ?", a: "Oui — DraftToDone est en ligne. Ouvrez l'app sur app.drafttodone.io et commencez à publier dès aujourd'hui." },
    ],
    pricing: {
      eyebrow: "Tarifs",
      h2: "Des offres simples. De vrais livres.",
      sub: "Chaque offre est un abonnement à crédits livres — 1 crédit = 1 livre complet, prêt à publier. Abonnement et gestion dans l'app.",
      cta: "Générer mon livre",
      best: "Meilleur rapport",
      includes: ["Manuscrit complet", "Couverture recto-verso", "PDF prêt pour KDP", "Nom de plume vérifié"],
      note: "Pas d'offre gratuite. Annulable à tout moment depuis l'app.",
      plans: [
        { name: "Hebdomadaire", price: "14,99 €", period: "/ semaine", credits: "6 livres chaque semaine", perBook: "≈ 2,50 € par livre", highlight: false },
        { name: "Annuel", price: "390 €", period: "/ an", credits: "312 livres par an", perBook: "≈ 1,25 € par livre", highlight: true },
      ],
    },
    cta: { h2: "Un brief. Un livre KDP complet.", sub: "Ouvrez l'app, entrez une niche et construisez tout le pack au lieu de surveiller cinq outils séparés." },
    share: {
      line: "Un brief. Un livre KDP complet. Voilà DraftToDone.",
      cta: "Partager cette phrase",
      text: "Un brief. Un livre KDP complet. DraftToDone transforme une idée de niche en manuscrit, couverture et métadonnées KDP.",
    },
    footer: "© 2026 DraftToDone.io. Construit en public.",
  },
  it: {
    meta: {
      title: `${SITE_NAME} — Trasforma un'idea in un libro KDP completo`,
      description:
        "Genera manoscritto, copertina completa, metadati KDP e pseudonimo verificato da un solo brief di nicchia. 6 libri pronti a settimana.",
    },
    nav: { blog: "Blog", pricing: "Prezzi", openApp: "Genera un libro" },
    hero: {
      eyebrow: "Live: 1 brief -> 1 libro completo",
      h1main: "Trasforma un'idea in un libro",
      h1accent: "pronto per KDP.",
      sub: "DraftToDone genera manoscritto, copertina fronte-retro, titolo, descrizione, keyword e pseudonimo da un solo brief di nicchia.",
      subHighlight: "6 libri pronti da pubblicare a settimana.",
      microcopy: "Nessun piano gratuito: ogni credito produce un libro reale.",
      chips: ["Manoscritto", "Copertina", "Quarta di copertina", "Nome d'autore verificato"],
      caption: "Sei libri pronti da pubblicare. Ogni settimana.",
      openApp: "Genera il mio libro",
    },
    demo: {
      inputLabel: "Brief di nicchia",
      input: "Una guida pratica di 30 giorni per host di affitti brevi che vogliono meno recensioni negative.",
      inputFacts: ["Promessa al lettore: meno problemi con gli ospiti", "Formato: 10 capitoli", "Marketplace: Amazon KDP"],
      outputLabel: "Pacchetto generato",
      outputTitle: "Il manuale dell'host sereno",
      outputSubtitle: "Manoscritto, copertina completa, descrizione KDP, 7 keyword e pseudonimo.",
      artifacts: ["Manoscritto da 38.000 parole", "Copertina fronte/dorso/retro", "Titolo + sottotitolo KDP", "Descrizione + keyword"],
      metrics: [
        { value: "1", label: "brief in input" },
        { value: "4", label: "asset in output" },
        { value: "6", label: "libri/settimana target" },
      ],
    },
    origin: {
      eyebrow: "La storia",
      h2: "Ho perso 400 €/mese in una notte. Così ho ricostruito la macchina.",
      pre: "Guadagnavo",
      money: "400 €/mese",
      mid: "su Amazon KDP finché un brutto gioco di parole come nome d'autore mi è costato",
      ban: "il ban permanente, da un giorno all'altro.",
      post: "Così ho trasformato in SaaS l'algoritmo privato che automatizzava tutta la mia pubblicazione — e ora è online. Segui il mio percorso per",
      mrr: "recuperare l'MRR perduto.",
      sign: "Costruito in pubblico",
    },
    proof: {
      eyebrow: "Prova del founder",
      h2: "Costruito da un workflow che aveva già venduto su KDP.",
      sub: "La promessa non è spam di contenuti magici. È una pipeline prodotto ripetibile per chi vuole leva sul catalogo.",
      quote:
        "Ho perso l'account KDP in una notte. DraftToDone è il sistema ricostruito: meno prompt, packaging più pulito e un ciclo di revisione migliore prima dell'upload.",
      byline: "Antoine, founder di DraftToDone",
      points: [
        "Nessuna tab chatbot generica da sorvegliare",
        "Un pacchetto prodotto invece di file sparsi",
        "Pensato intorno a metadati KDP e regole di disclosure IA",
      ],
    },
    features: {
      eyebrow: "Il motore",
      h2: "Dalla pagina bianca al libro pubblicato.",
      sub: "Tre sistemi. Un solo pipeline. Ogni elemento richiesto da un marketplace — generato, formattato e pronto da caricare.",
      items: [
        { title: "Generazione completa del manoscritto", text: "L'IA determina la lunghezza ideale e scrive l'intero libro in autonomia in base alla tua nicchia." },
        { title: "Copertina completa", text: "Genera fronte, dorso e retro con immagini IA, pronti per la stampa." },
        { title: "Metadati ottimizzati", text: "Genera titoli e descrizioni ottimizzati SEO e nomi d'autore verificati per evitare segnalazioni di copyright." },
      ],
    },
    comparison: {
      eyebrow: "Perché cambiare",
      h2: "Smetti di assemblare mezzi prodotti.",
      sub: "DraftToDone è per chi vuole l'intero prodotto KDP, non un'altra tab nella pila di prompt.",
      rows: [
        { label: "Punto di partenza", manual: "Documento vuoto, prompt, tool design", drafttodone: "Un brief di nicchia" },
        { label: "Cosa ottieni", manual: "Prima testo; copertina e metadati dopo", drafttodone: "Manoscritto, copertina completa e metadati insieme" },
        { label: "Logica di costo", manual: "Abbonamenti più ore di lavoro", drafttodone: "Crediti legati a libri finiti" },
        { label: "Ideale per", manual: "Un libro da creare manualmente", drafttodone: "Operazioni KDP ripetibili a catalogo" },
      ],
    },
    tools: {
      eyebrow: "Strumenti e guide gratuiti",
      h2: "Pianifica il tuo prossimo libro prima di scrivere una parola.",
      sub: "Calcolatori gratuiti e guide approfondite — poi apri l'app per generare l'intero libro.",
      items: [
        { title: "Calcolatore royalty KDP", text: "Modella i guadagni ebook e cartaceo prima di fissare un prezzo.", href: "/it/calcolatore-royalty-kdp" },
        { title: "Generatore di copertine IA", text: "Fronte, dorso e retro — pronti per la stampa su KDP.", href: "/it/generatore-copertine-libri-ia" },
        { title: "Software di editoria IA", text: "Un workflow controllato, dall'idea alla pubblicazione.", href: "/it/software-editoria-ia" },
      ],
      blogTitle: "Il blog di editoria",
      blogText: "25 guide approfondite su KDP, SEO dei libri, copertine e operazioni di catalogo.",
      blogCta: "Leggi il blog",
      explore: "Scopri",
    },
    faqHeading: "Le tue domande, le nostre risposte.",
    faq: [
      { q: "Cos'è DraftToDone?", a: "DraftToDone è un software di editoria IA che genera l'intero prodotto libro — manoscritto, copertina anteriore e posteriore, e titolo e descrizione ottimizzati SEO — pronto per la pubblicazione su Amazon KDP." },
      { q: "Scrive l'intero libro?", a: "Sì. L'IA determina la lunghezza ideale e scrive il manoscritto completo dal tuo brief di nicchia, poi costruisce intorno copertina e metadati." },
      { q: "Il contenuto è ammesso su Amazon KDP?", a: "DraftToDone è costruito attorno alle regole KDP su contenuti e divulgazione dell'IA, con nomi d'autore verificati per ridurre il rischio di violazioni. Resti responsabile di rivedere ogni libro e dichiarare l'uso dell'IA come richiede KDP." },
      { q: "Quanti libri posso pubblicare?", a: "I piani sono abbonamenti a crediti libri — 1 credito = 1 libro completo pronto da pubblicare. Il piano settimanale è pensato per sei libri pronti a settimana." },
      { q: "È disponibile ora?", a: "Sì — DraftToDone è online. Apri l'app su app.drafttodone.io e inizia a pubblicare oggi." },
    ],
    pricing: {
      eyebrow: "Prezzi",
      h2: "Piani semplici. Libri veri.",
      sub: "Ogni piano è un abbonamento a crediti libri — 1 credito = 1 libro completo pronto da pubblicare. Abbonati e gestisci tutto nell'app.",
      cta: "Genera il mio libro",
      best: "Miglior valore",
      includes: ["Manoscritto completo", "Copertina fronte e retro", "PDF pronto per KDP", "Nome d'autore verificato"],
      note: "Nessun piano gratuito. Annulla quando vuoi dall'app.",
      plans: [
        { name: "Settimanale", price: "14,99 €", period: "/ settimana", credits: "6 libri ogni settimana", perBook: "≈ 2,50 € a libro", highlight: false },
        { name: "Annuale", price: "390 €", period: "/ anno", credits: "312 libri all'anno", perBook: "≈ 1,25 € a libro", highlight: true },
      ],
    },
    cta: { h2: "Un brief. Un libro KDP completo.", sub: "Apri l'app, inserisci una nicchia e costruisci tutto il pacchetto invece di sorvegliare cinque tool separati." },
    share: {
      line: "Un brief. Un libro KDP completo. Questo è DraftToDone.",
      cta: "Condividi la frase",
      text: "Un brief. Un libro KDP completo. DraftToDone trasforma un'idea di nicchia in manoscritto, copertina e metadati KDP.",
    },
    footer: "© 2026 DraftToDone.io. Costruito in pubblico.",
  },
  de: {
    meta: {
      title: `${SITE_NAME} — Aus einer Idee wird ein komplettes KDP-Buch`,
      description:
        "Erzeuge Manuskript, komplettes Cover, KDP-Metadaten und verifizierten Autorennamen aus einem einzigen Nischenbrief. 6 fertige Bücher pro Woche.",
    },
    nav: { blog: "Blog", pricing: "Preise", openApp: "Buch erzeugen" },
    hero: {
      eyebrow: "Live: 1 Brief -> 1 komplettes Buch",
      h1main: "Mach aus einer Idee ein",
      h1accent: "KDP-fertiges Buch.",
      sub: "DraftToDone erzeugt Manuskript, Vorder- und Rückcover, Titel, Beschreibung, Keywords und Autorennamen aus einem einzigen Nischenbrief.",
      subHighlight: "sechs veröffentlichungsfertigen Büchern pro Woche.",
      microcopy: "Kein Gratisplan: jeder Credit produziert ein echtes Buch.",
      chips: ["Manuskript", "Cover", "Rückseite", "Verifizierter Autorname"],
      caption: "Sechs veröffentlichungsfertige Bücher. Jede Woche.",
      openApp: "Mein Buch erzeugen",
    },
    demo: {
      inputLabel: "Nischenbrief",
      input: "Ein praktischer 30-Tage-Guide für Kurzzeitvermieter, die weniger schlechte Bewertungen wollen.",
      inputFacts: ["Leserversprechen: weniger Gästefragen", "Format: 10 Kapitel", "Marketplace: Amazon KDP"],
      outputLabel: "Erzeugtes Paket",
      outputTitle: "Das Handbuch für entspannte Gastgeber",
      outputSubtitle: "Manuskript, komplettes Cover, KDP-Beschreibung, 7 Keyword-Slots und Autorenname.",
      artifacts: ["38.000-Wort-Manuskript", "Vorderseite/Rücken/Rückseite", "KDP-Titel + Untertitel", "Beschreibung + Keywords"],
      metrics: [
        { value: "1", label: "Brief hinein" },
        { value: "4", label: "Assets heraus" },
        { value: "6", label: "Bücher/Woche Ziel" },
      ],
    },
    origin: {
      eyebrow: "Die Geschichte",
      h2: "Ich verlor 400 €/Monat über Nacht. Also baute ich die Maschine neu.",
      pre: "Ich verdiente",
      money: "400 €/Monat",
      mid: "auf Amazon KDP, bis mir ein schlechtes Wortspiel als Autorname",
      ban: "über Nacht ein dauerhaftes Verbot einbrachte.",
      post: "Also habe ich aus dem privaten Algorithmus, der mein ganzes Publishing automatisierte, ein SaaS gebaut — und jetzt ist es live. Folge meinem Weg, um",
      mrr: "mein verlorenes MRR zurückzuholen.",
      sign: "Öffentlich gebaut",
    },
    proof: {
      eyebrow: "Founder-Beweis",
      h2: "Aus einem Workflow gebaut, der auf KDP schon verkauft hat.",
      sub: "Das Versprechen ist kein magischer Content-Spam. Es ist eine wiederholbare Produkt-Pipeline für Kataloghebel.",
      quote:
        "Ich verlor das KDP-Konto über Nacht. DraftToDone ist das neu gebaute System: weniger Prompts, saubereres Packaging und eine stärkere Review-Schleife vor dem Upload.",
      byline: "Antoine, Gründer von DraftToDone",
      points: [
        "Kein generischer Chatbot-Tab zum Überwachen",
        "Ein Produktpaket statt verstreuter Dateien",
        "Rund um KDP-Metadaten und KI-Offenlegungsregeln gebaut",
      ],
    },
    features: {
      eyebrow: "Der Motor",
      h2: "Vom leeren Blatt zum veröffentlichten Buch.",
      sub: "Drei Systeme. Eine Pipeline. Jedes Element, das ein Marktplatz verlangt — erzeugt, formatiert und bereit zum Upload.",
      items: [
        { title: "Vollständige Manuskriptgenerierung", text: "Die KI bestimmt die ideale Länge und schreibt das ganze Buch eigenständig nach deiner Nische." },
        { title: "Komplettes Cover", text: "Erzeugt Vorderseite, Rücken und Rückseite mit KI-Bildern, druckfertig." },
        { title: "Optimierte Metadaten", text: "Erzeugt SEO-optimierte Titel und Beschreibungen sowie verifizierte Autornamen, um Copyright-Probleme zu vermeiden." },
      ],
    },
    comparison: {
      eyebrow: "Warum wechseln",
      h2: "Hör auf, halbe Produkte zusammenzukleben.",
      sub: "DraftToDone ist für Publisher, die das ganze KDP-Produkt wollen, nicht noch einen Tab im Prompt-Stapel.",
      rows: [
        { label: "Startpunkt", manual: "Leeres Dokument, Prompts, Design-Tools", drafttodone: "Ein Nischenbrief" },
        { label: "Ergebnis", manual: "Erst Text; Cover und Metadaten später", drafttodone: "Manuskript, komplettes Cover und Metadaten zusammen" },
        { label: "Kostenlogik", manual: "Abos plus Arbeitsstunden", drafttodone: "Credits für fertige Bücher" },
        { label: "Am besten für", manual: "Ein Buch, das du manuell bauen willst", drafttodone: "Wiederholbare KDP-Katalogarbeit" },
      ],
    },
    tools: {
      eyebrow: "Kostenlose Tools und Guides",
      h2: "Plane dein nächstes Buch, bevor du ein Wort schreibst.",
      sub: "Kostenlose Rechner und ausführliche Guides — dann öffne die App, um das ganze Buch zu erzeugen.",
      items: [
        { title: "KDP-Tantiemen-Rechner", text: "Modelliere Ebook- und Taschenbuch-Erlöse, bevor du einen Preis festlegst.", href: "/de/kdp-tantiemen-rechner" },
        { title: "KI-Buchcover-Generator", text: "Vorderseite, Rücken und Rückseite — druckfertig für KDP.", href: "/de/ki-buchcover-generator" },
        { title: "KI-Publishing-Software", text: "Ein kontrollierter Workflow, von der Idee bis zur Veröffentlichung.", href: "/de/ki-publishing-software" },
      ],
      blogTitle: "Der Publishing-Blog",
      blogText: "25 ausführliche Guides zu KDP, Buch-SEO, Covern und Katalogbetrieb.",
      blogCta: "Blog lesen",
      explore: "Entdecken",
    },
    faqHeading: "Deine Fragen, beantwortet.",
    faq: [
      { q: "Was ist DraftToDone?", a: "DraftToDone ist KI-Publishing-Software, die das ganze Buchprodukt erzeugt — Manuskript, Vorder- und Rückseite sowie SEO-optimierten Titel und Beschreibung — fertig für Amazon KDP." },
      { q: "Schreibt es das ganze Buch?", a: "Ja. Die KI bestimmt die ideale Länge und schreibt das komplette Manuskript aus deinem Nischen-Brief, dann baut sie Cover und Metadaten darum herum." },
      { q: "Ist der Inhalt auf Amazon KDP erlaubt?", a: "DraftToDone ist um die KDP-Regeln zu Inhalten und KI-Offenlegung herum gebaut, mit verifizierten Autornamen, um das Risiko von Verstößen zu senken. Du bleibst verantwortlich, jedes Buch zu prüfen und die KI-Nutzung wie von KDP verlangt offenzulegen." },
      { q: "Wie viele Bücher kann ich veröffentlichen?", a: "Die Pläne sind Buch-Kredit-Abos — 1 Kredit = 1 komplettes, veröffentlichungsfertiges Buch. Der Wochenplan ist auf sechs fertige Bücher pro Woche ausgelegt." },
      { q: "Ist es jetzt verfügbar?", a: "Ja — DraftToDone ist live. Öffne die App unter app.drafttodone.io und starte noch heute." },
    ],
    pricing: {
      eyebrow: "Preise",
      h2: "Einfache Pläne. Echte Bücher.",
      sub: "Jeder Plan ist ein Buch-Kredit-Abo — 1 Kredit = 1 komplettes, veröffentlichungsfertiges Buch. Abonniere und verwalte alles in der App.",
      cta: "Mein Buch erzeugen",
      best: "Bestes Angebot",
      includes: ["Komplettes Manuskript", "Vorder- und Rückseite", "KDP-fertiges PDF", "Verifizierter Autorname"],
      note: "Kein Gratisplan. Jederzeit in der App kündbar.",
      plans: [
        { name: "Wöchentlich", price: "14,99 €", period: "/ Woche", credits: "6 Bücher pro Woche", perBook: "≈ 2,50 € pro Buch", highlight: false },
        { name: "Jährlich", price: "390 €", period: "/ Jahr", credits: "312 Bücher pro Jahr", perBook: "≈ 1,25 € pro Buch", highlight: true },
      ],
    },
    cta: { h2: "Ein Brief. Ein komplettes KDP-Buch.", sub: "Öffne die App, gib eine Nische ein und baue das ganze Paket, statt fünf getrennte Tools zu überwachen." },
    share: {
      line: "Ein Brief. Ein komplettes KDP-Buch. Das ist DraftToDone.",
      cta: "Diesen Satz teilen",
      text: "Ein Brief. Ein komplettes KDP-Buch. DraftToDone macht aus einer Nischenidee Manuskript, Cover und KDP-Metadaten.",
    },
    footer: "© 2026 DraftToDone.io. Öffentlich gebaut.",
  },
};

export function homePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}`;
}

export function homeUrl(locale: Locale) {
  return locale === "en" ? SITE_URL : `${SITE_URL}/${locale}`;
}

export function getHomeAlternates() {
  return {
    en: "/",
    fr: "/fr",
    it: "/it",
    de: "/de",
    "x-default": "/",
  };
}
