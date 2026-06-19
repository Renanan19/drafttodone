import { SITE_NAME, SITE_URL, type Locale } from "./blog-content";

/* The live app (sign up, subscribe, generate). */
export const APP_URL = "https://app.drafttodone.io";

export type HomeCopy = {
  meta: { title: string; description: string };
  nav: { blog: string; followX: string; join: string; pricing: string; openApp: string };
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
  form: { placeholder: string; cta: string; loading: string; done: string; retry: string; error: string };
  toast: { title: string; withEmail: string; noEmail: string; dismiss: string };
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
  features: { eyebrow: string; h2: string; sub: string; items: { title: string; text: string }[] };
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
  footer: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: `${SITE_NAME} — The Complete AI Publishing Machine`,
      description:
        "Generate the entire product — front cover to back cover, manuscript, and optimized title. Build your publishing empire with 6 ready-to-publish books a week.",
    },
    nav: { blog: "Blog", followX: "Follow on X", join: "Join the waitlist", pricing: "Pricing", openApp: "Open app" },
    hero: {
      eyebrow: "Now in private beta",
      h1main: "The complete AI publishing",
      h1accent: "machine.",
      sub: "Don't just write a book. Generate the entire product — front cover to back cover, manuscript, and optimized title. Build your publishing empire with",
      subHighlight: "6 ready-to-publish books a week.",
      microcopy: "Limited spots for early beta access.",
      chips: ["Manuscript", "Front cover", "Back cover", "Verified pen name"],
      caption: "Six ready-to-publish books. Every week.",
      openApp: "Open the app",
    },
    form: { placeholder: "Enter your email", cta: "Join the Waitlist", loading: "Joining…", done: "Added", retry: "Try again", error: "Something went wrong. Please try again." },
    toast: { title: "Thanks for subscribing!", withEmail: "You're on the list —", noEmail: "You're on the early access list.", dismiss: "Dismiss notification" },
    origin: {
      eyebrow: "The origin story",
      h2: "Why I'm building this.",
      pre: "I used to make",
      money: "€400/month",
      mid: "on Amazon KDP until a bad pun for a pen name got me",
      ban: "permanently banned overnight.",
      post: "Now, I'm taking the private algorithm I used to automate my entire publishing process and turning it into a SaaS. Follow my journey to",
      mrr: "recover my lost MRR.",
      sign: "Building in public",
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
    tools: {
      eyebrow: "Free tools & guides",
      h2: "Plan your next book before you write a word.",
      sub: "Free calculators and in-depth guides you can use today — while early access opens up.",
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
      { q: "When does it launch?", a: "DraftToDone is in private beta. Join the waitlist for early access, or open the app to get started now." },
    ],
    pricing: {
      eyebrow: "Pricing",
      h2: "Simple plans. Real books.",
      sub: "Every plan is a book-credit subscription — one credit makes one complete, ready-to-publish book. Subscribe and manage everything in the app.",
      cta: "Start now",
      best: "Best value",
      includes: ["Full manuscript", "Front & back cover", "KDP-ready PDF", "Verified pen name"],
      note: "Cancel anytime from the app.",
      plans: [
        { name: "Weekly", price: "€14.99", period: "/ week", credits: "6 books every week", perBook: "≈ €2.50 per book", highlight: false },
        { name: "Yearly", price: "€390", period: "/ year", credits: "312 books a year", perBook: "≈ €1.25 per book", highlight: true },
      ],
    },
    cta: { h2: "Ready to scale your publishing business?", sub: "Join the founders building their catalog on autopilot. Early access opens soon." },
    footer: "© 2026 DraftToDone.io. Built in public.",
  },
  fr: {
    meta: {
      title: `${SITE_NAME} — La machine d'édition IA complète`,
      description:
        "Ne vous contentez pas d'écrire un livre. Générez le produit complet — couverture, manuscrit et titre optimisé. Bâtissez votre catalogue avec 6 livres prêts à publier par semaine.",
    },
    nav: { blog: "Blog", followX: "Suivre sur X", join: "Rejoindre la liste", pricing: "Tarifs", openApp: "Ouvrir l'app" },
    hero: {
      eyebrow: "En bêta privée",
      h1main: "Toute la chaîne d'édition,",
      h1accent: "automatisée par l'IA.",
      sub: "N'écrivez pas seulement un livre. Générez le produit complet — de la première à la quatrième de couverture, le manuscrit et le titre optimisé. Bâtissez votre empire éditorial avec",
      subHighlight: "6 livres prêts à publier par semaine.",
      microcopy: "Places limitées pour l'accès bêta anticipé.",
      chips: ["Manuscrit", "Couverture", "Quatrième", "Nom de plume vérifié"],
      caption: "Six livres prêts à publier. Chaque semaine.",
      openApp: "Ouvrir l'application",
    },
    form: { placeholder: "Votre adresse e-mail", cta: "Rejoindre la liste", loading: "Inscription…", done: "Inscrit", retry: "Réessayer", error: "Une erreur est survenue. Veuillez réessayer." },
    toast: { title: "Merci de votre inscription !", withEmail: "Vous êtes sur la liste —", noEmail: "Vous êtes sur la liste d'accès anticipé.", dismiss: "Fermer la notification" },
    origin: {
      eyebrow: "L'histoire",
      h2: "Pourquoi je construis ça.",
      pre: "Je gagnais",
      money: "400 €/mois",
      mid: "sur Amazon KDP jusqu'à ce qu'un mauvais jeu de mots comme nom de plume me fasse",
      ban: "bannir définitivement, du jour au lendemain.",
      post: "Aujourd'hui, je transforme en SaaS l'algorithme privé qui automatisait toute ma chaîne de publication. Suivez mon parcours pour",
      mrr: "récupérer mon MRR perdu.",
      sign: "Construit en public",
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
    tools: {
      eyebrow: "Outils & guides gratuits",
      h2: "Préparez votre prochain livre avant d'écrire un mot.",
      sub: "Des calculateurs gratuits et des guides détaillés à utiliser dès aujourd'hui — en attendant l'accès anticipé.",
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
      { q: "Quand est le lancement ?", a: "DraftToDone est en bêta privée. Rejoignez la liste d'attente pour l'accès anticipé, ou ouvrez l'application pour commencer dès maintenant." },
    ],
    pricing: {
      eyebrow: "Tarifs",
      h2: "Des offres simples. De vrais livres.",
      sub: "Chaque offre est un abonnement à crédits livres — 1 crédit = 1 livre complet, prêt à publier. Abonnement et gestion dans l'app.",
      cta: "Commencer",
      best: "Meilleur rapport",
      includes: ["Manuscrit complet", "Couverture recto-verso", "PDF prêt pour KDP", "Nom de plume vérifié"],
      note: "Annulable à tout moment depuis l'app.",
      plans: [
        { name: "Hebdomadaire", price: "14,99 €", period: "/ semaine", credits: "6 livres chaque semaine", perBook: "≈ 2,50 € par livre", highlight: false },
        { name: "Annuel", price: "390 €", period: "/ an", credits: "312 livres par an", perBook: "≈ 1,25 € par livre", highlight: true },
      ],
    },
    cta: { h2: "Prêt à faire passer votre activité d'édition à l'échelle ?", sub: "Rejoignez les fondateurs qui bâtissent leur catalogue en pilote automatique. L'accès anticipé ouvre bientôt." },
    footer: "© 2026 DraftToDone.io. Construit en public.",
  },
  it: {
    meta: {
      title: `${SITE_NAME} — La macchina di editoria IA completa`,
      description:
        "Non scrivere solo un libro. Genera il prodotto completo — copertina, manoscritto e titolo ottimizzato. Costruisci il tuo catalogo con 6 libri pronti da pubblicare a settimana.",
    },
    nav: { blog: "Blog", followX: "Segui su X", join: "Unisciti alla lista", pricing: "Prezzi", openApp: "Apri l'app" },
    hero: {
      eyebrow: "Ora in beta privata",
      h1main: "La macchina di editoria IA",
      h1accent: "completa.",
      sub: "Non scrivere solo un libro. Genera il prodotto completo — dalla copertina alla quarta, il manoscritto e il titolo ottimizzato. Costruisci il tuo impero editoriale con",
      subHighlight: "6 libri pronti da pubblicare a settimana.",
      microcopy: "Posti limitati per l'accesso beta anticipato.",
      chips: ["Manoscritto", "Copertina", "Quarta di copertina", "Nome d'autore verificato"],
      caption: "Sei libri pronti da pubblicare. Ogni settimana.",
      openApp: "Apri l'applicazione",
    },
    form: { placeholder: "Inserisci la tua email", cta: "Unisciti alla lista", loading: "Iscrizione…", done: "Aggiunto", retry: "Riprova", error: "Qualcosa è andato storto. Riprova." },
    toast: { title: "Grazie per l'iscrizione!", withEmail: "Sei nella lista —", noEmail: "Sei nella lista per l'accesso anticipato.", dismiss: "Chiudi notifica" },
    origin: {
      eyebrow: "La storia",
      h2: "Perché lo sto costruendo.",
      pre: "Guadagnavo",
      money: "400 €/mese",
      mid: "su Amazon KDP finché un brutto gioco di parole come nome d'autore mi è costato",
      ban: "il ban permanente, da un giorno all'altro.",
      post: "Ora sto trasformando in SaaS l'algoritmo privato che automatizzava tutta la mia pubblicazione. Segui il mio percorso per",
      mrr: "recuperare l'MRR perduto.",
      sign: "Costruito in pubblico",
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
    tools: {
      eyebrow: "Strumenti e guide gratuiti",
      h2: "Pianifica il tuo prossimo libro prima di scrivere una parola.",
      sub: "Calcolatori gratuiti e guide approfondite da usare oggi — mentre apre l'accesso anticipato.",
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
      { q: "Quando esce?", a: "DraftToDone è in beta privata. Unisciti alla lista d'attesa per l'accesso anticipato, o apri l'app per iniziare ora." },
    ],
    pricing: {
      eyebrow: "Prezzi",
      h2: "Piani semplici. Libri veri.",
      sub: "Ogni piano è un abbonamento a crediti libri — 1 credito = 1 libro completo pronto da pubblicare. Abbonati e gestisci tutto nell'app.",
      cta: "Inizia ora",
      best: "Miglior valore",
      includes: ["Manoscritto completo", "Copertina fronte e retro", "PDF pronto per KDP", "Nome d'autore verificato"],
      note: "Annulla quando vuoi dall'app.",
      plans: [
        { name: "Settimanale", price: "14,99 €", period: "/ settimana", credits: "6 libri ogni settimana", perBook: "≈ 2,50 € a libro", highlight: false },
        { name: "Annuale", price: "390 €", period: "/ anno", credits: "312 libri all'anno", perBook: "≈ 1,25 € a libro", highlight: true },
      ],
    },
    cta: { h2: "Pronto a far crescere la tua attività editoriale?", sub: "Unisciti ai fondatori che costruiscono il loro catalogo in automatico. L'accesso anticipato apre presto." },
    footer: "© 2026 DraftToDone.io. Costruito in pubblico.",
  },
  de: {
    meta: {
      title: `${SITE_NAME} — Die komplette KI-Publishing-Maschine`,
      description:
        "Schreib nicht nur ein Buch. Erzeuge das ganze Produkt — Cover, Manuskript und optimierten Titel. Bau deinen Katalog mit sechs veröffentlichungsfertigen Büchern pro Woche.",
    },
    nav: { blog: "Blog", followX: "Auf X folgen", join: "Warteliste beitreten", pricing: "Preise", openApp: "App öffnen" },
    hero: {
      eyebrow: "Jetzt in privater Beta",
      h1main: "Die komplette KI-Publishing-",
      h1accent: "Maschine.",
      sub: "Schreib nicht nur ein Buch. Erzeuge das ganze Produkt — von der Vorder- bis zur Rückseite, das Manuskript und den optimierten Titel. Bau dein Publishing-Imperium mit",
      subHighlight: "sechs veröffentlichungsfertigen Büchern pro Woche.",
      microcopy: "Begrenzte Plätze für frühen Beta-Zugang.",
      chips: ["Manuskript", "Cover", "Rückseite", "Verifizierter Autorname"],
      caption: "Sechs veröffentlichungsfertige Bücher. Jede Woche.",
      openApp: "App öffnen",
    },
    form: { placeholder: "Deine E-Mail eingeben", cta: "Warteliste beitreten", loading: "Eintragen…", done: "Hinzugefügt", retry: "Erneut versuchen", error: "Etwas ist schiefgelaufen. Bitte erneut versuchen." },
    toast: { title: "Danke für die Anmeldung!", withEmail: "Du bist auf der Liste —", noEmail: "Du bist auf der Early-Access-Liste.", dismiss: "Benachrichtigung schließen" },
    origin: {
      eyebrow: "Die Geschichte",
      h2: "Warum ich das baue.",
      pre: "Ich verdiente",
      money: "400 €/Monat",
      mid: "auf Amazon KDP, bis mir ein schlechtes Wortspiel als Autorname",
      ban: "über Nacht ein dauerhaftes Verbot einbrachte.",
      post: "Jetzt mache ich aus dem privaten Algorithmus, der mein ganzes Publishing automatisierte, ein SaaS. Folge meinem Weg, um",
      mrr: "mein verlorenes MRR zurückzuholen.",
      sign: "Öffentlich gebaut",
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
    tools: {
      eyebrow: "Kostenlose Tools und Guides",
      h2: "Plane dein nächstes Buch, bevor du ein Wort schreibst.",
      sub: "Kostenlose Rechner und ausführliche Guides für heute — während der frühe Zugang öffnet.",
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
      { q: "Wann ist der Launch?", a: "DraftToDone ist in privater Beta. Tritt der Warteliste für frühen Zugang bei, oder öffne die App, um jetzt zu starten." },
    ],
    pricing: {
      eyebrow: "Preise",
      h2: "Einfache Pläne. Echte Bücher.",
      sub: "Jeder Plan ist ein Buch-Kredit-Abo — 1 Kredit = 1 komplettes, veröffentlichungsfertiges Buch. Abonniere und verwalte alles in der App.",
      cta: "Jetzt starten",
      best: "Bestes Angebot",
      includes: ["Komplettes Manuskript", "Vorder- und Rückseite", "KDP-fertiges PDF", "Verifizierter Autorname"],
      note: "Jederzeit in der App kündbar.",
      plans: [
        { name: "Wöchentlich", price: "14,99 €", period: "/ Woche", credits: "6 Bücher pro Woche", perBook: "≈ 2,50 € pro Buch", highlight: false },
        { name: "Jährlich", price: "390 €", period: "/ Jahr", credits: "312 Bücher pro Jahr", perBook: "≈ 1,25 € pro Buch", highlight: true },
      ],
    },
    cta: { h2: "Bereit, dein Publishing-Geschäft zu skalieren?", sub: "Schließ dich den Gründern an, die ihren Katalog automatisch aufbauen. Der frühe Zugang öffnet bald." },
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
