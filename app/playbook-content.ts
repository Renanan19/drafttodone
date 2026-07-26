import { SITE_NAME, type Locale } from "./blog-content";

/**
 * The lead magnet.
 *
 * The whole playbook is readable on the page — it has to earn the email, not
 * hold it hostage, and a gated page cannot rank or be cited by an answer
 * engine. The email buys the operator kit: the review checklist, the niche
 * brief templates and the metadata worksheet.
 */

export type PlaybookStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  points: string[];
  mistake: string;
};

export type PlaybookCopy = {
  slug: string;
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  lead: string;
  authorNote: string;
  gate: {
    heading: string;
    body: string;
    includes: string[];
  };
  stepsHeading: string;
  steps: PlaybookStep[];
  mistakeLabel: string;
  toolHeading: string;
  toolBody: string;
  toolCta: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
  closingHeading: string;
  closingBody: string;
};

export const playbookSlug = "kdp-operator-playbook";

export const playbookCopy: Record<Locale, PlaybookCopy> = {
  en: {
    slug: playbookSlug,
    meta: {
      title: "The KDP Catalog Operator's Playbook",
      description:
        "How to publish KDP books that survive review and actually sell: niche selection with real demand signals, the metadata that decides ranking, the compliance layer, and the production loop.",
    },
    eyebrow: "Free playbook",
    h1: "Publish KDP books that survive review and actually sell.",
    lead:
      "Most catalogs fail for one of two reasons: the books get taken down, or nobody finds them. Neither is a writing problem. This is the loop I run — niche, metadata, compliance, production — written for operators building a catalog, not for someone writing one novel.",
    authorNote:
      "I ran a KDP catalog to €400/month, then lost the account overnight to a pen name that read like a joke. Everything below is what I wish the first version of me had been handed.",
    gate: {
      heading: "Get the operator kit",
      body: "The playbook is on this page, free, no signup. The kit is the working version of it — the parts you fill in.",
      includes: [
        "The pre-upload review checklist (the one that keeps accounts alive)",
        "Niche brief templates that produce a book worth selling",
        "The metadata worksheet: title, subtitle, description, 7 keyword slots",
        "The catalog economics sheet — what a book has to earn to be worth making",
      ],
    },
    stepsHeading: "The loop",
    steps: [
      {
        id: "niche",
        number: "01",
        title: "Choose the niche on demand signals, not on taste",
        body:
          "A catalog operator is not picking a passion project. You are looking for a reader who is actively trying to solve something and already buying books about it. That reader leaves evidence: they ask the same question repeatedly, and the existing answers are thin.",
        points: [
          "Look for a specific job, not a topic — 'stop my sourdough from going flat' beats 'baking'.",
          "Check that books in that niche have recent reviews. Recent reviews mean recent buyers.",
          "Read the 3-star reviews of the top sellers. They name the gap your book fills.",
          "If the top of the category is dominated by strong brands with hundreds of reviews, go one level narrower.",
        ],
        mistake:
          "Choosing a niche because the keyword volume is high. High volume with strong incumbents is the hardest possible place to start.",
      },
      {
        id: "metadata",
        number: "02",
        title: "Accept that metadata decides the ranking",
        body:
          "The manuscript decides whether readers keep the book. The metadata decides whether they ever see it. Operators consistently underweight this because it feels like paperwork, and it is where almost all the recoverable ranking lives.",
        points: [
          "The title carries the promise; the subtitle carries the keywords. Do not make the title do both.",
          "The description's first two lines are all most buyers read — put the outcome there, not your credentials.",
          "The 7 backend keyword slots are phrases, not words. Use search phrases a buyer would actually type.",
          "Category fit beats category ambition: ranking in a category you can win beats invisibility in a big one.",
        ],
        mistake:
          "Reusing the same keyword in the title, the subtitle and all 7 slots. It buys you nothing and wastes six slots.",
      },
      {
        id: "compliance",
        number: "03",
        title: "Build the compliance layer before you need it",
        body:
          "This is the step that ends catalogs. Amazon's rules on AI disclosure, volume and content quality are enforced by systems that do not take appeals well, and a terminated account takes the whole catalog with it — including the books that were selling.",
        points: [
          "Disclose AI use where KDP asks for it. The disclosure is not a penalty; failing to disclose is.",
          "Use a pen name that reads like a person. A joke name is a flag, and it is the mistake that cost me an account.",
          "Respect the daily title limit. Bursts look like exactly what the system is built to catch.",
          "Read every book before upload. Not to enjoy it — to catch the one paragraph that gets it rejected.",
        ],
        mistake:
          "Treating volume as the strategy. Volume is a production capability. If it is also your promise, you are optimising for the behaviour Amazon is actively suppressing.",
      },
      {
        id: "production",
        number: "04",
        title: "Run production as a loop, not as a launch",
        body:
          "A catalog compounds only if each book teaches you something the next one uses. That requires publishing on a rhythm you can actually sustain and keeping a record, so you are comparing books rather than guessing.",
        points: [
          "Ship in small batches and let each batch inform the next brief.",
          "Track per book: niche, price, category, and sales at 30 days. Four columns beat a dashboard.",
          "Kill a niche after three books that go nowhere. Persistence in the wrong niche is the most expensive habit in publishing.",
          "When a book works, make the next three adjacent to it. Adjacent beats novel.",
        ],
        mistake:
          "Publishing 20 books across 20 unrelated niches. You end up with 20 experiments and no signal you can act on.",
      },
    ],
    mistakeLabel: "The mistake",
    toolHeading: "Where the tool fits",
    toolBody: `Steps 1, 3 and 4 are judgement — no tool replaces them. Step 2, plus the production itself, is mechanical, and that is the part ${SITE_NAME} does: one niche brief in, and the manuscript, the full wrap cover, the KDP title, subtitle, description and 7 keyword slots come out as one package, with a pen name attached. You still read the book before you upload it.`,
    toolCta: "See how it works",
    faqHeading: "Questions operators actually ask",
    faq: [
      {
        q: "Is publishing AI-assisted books allowed on Amazon KDP?",
        a: "Yes, with disclosure. KDP asks you to declare AI-generated content when you upload, and it distinguishes AI-generated from AI-assisted. The rule that ends accounts is not using AI — it is failing to disclose it, ignoring the daily title limit, or uploading content that fails quality review.",
      },
      {
        q: "How many books should a new catalog operator publish per month?",
        a: "Fewer than you can technically produce. The constraint is not generation speed, it is your ability to review each book properly and to learn from the last batch. Operators who ramp slowly and keep records outperform operators who flood the account and get flagged.",
      },
      {
        q: "What actually gets a KDP account terminated?",
        a: "In practice: undisclosed AI content, exceeding the daily title limit, metadata that misleads (keyword stuffing, misused category), duplicate or near-duplicate content, and pen names that appear designed to impersonate or mislead. Any one of these can take the whole catalog, not just the offending title.",
      },
      {
        q: "Should I use one pen name for everything or one per niche?",
        a: "One per niche, and make each one read like a real person. A pen name that stays inside one subject builds a recognisable author signal for readers and for Amazon's own recommendation surfaces; one name across unrelated categories builds neither.",
      },
    ],
    closingHeading: "If you only take one thing",
    closingBody:
      "The catalog that wins is not the biggest one. It is the one still standing in eighteen months, because every book in it was reviewed before upload and every niche in it was chosen on evidence.",
  },

  fr: {
    slug: playbookSlug,
    meta: {
      title: "Le playbook de l'opérateur de catalogue KDP",
      description:
        "Publier des livres KDP qui passent la revue et se vendent vraiment : choix de niche sur signaux de demande, métadonnées qui décident du classement, couche de conformité et boucle de production.",
    },
    eyebrow: "Playbook gratuit",
    h1: "Publiez des livres KDP qui passent la revue et se vendent.",
    lead:
      "La plupart des catalogues échouent pour deux raisons : les livres sont retirés, ou personne ne les trouve. Aucune des deux n'est un problème d'écriture. Voici la boucle que j'applique — niche, métadonnées, conformité, production — écrite pour ceux qui construisent un catalogue, pas pour quelqu'un qui écrit un roman.",
    authorNote:
      "J'ai monté un catalogue KDP à 400 €/mois, puis j'ai perdu le compte du jour au lendemain à cause d'un nom de plume qui ressemblait à une blague. Tout ce qui suit, c'est ce que j'aurais voulu qu'on donne à la première version de moi.",
    gate: {
      heading: "Recevoir le kit opérateur",
      body: "Le playbook est sur cette page, gratuit, sans inscription. Le kit, c'est sa version de travail — les parties que vous remplissez.",
      includes: [
        "La checklist de relecture avant upload (celle qui garde les comptes en vie)",
        "Les modèles de brief de niche qui produisent un livre vendable",
        "La fiche métadonnées : titre, sous-titre, description, 7 mots-clés",
        "La fiche d'économie du catalogue — ce qu'un livre doit rapporter pour valoir le coup",
      ],
    },
    stepsHeading: "La boucle",
    steps: [
      {
        id: "niche",
        number: "01",
        title: "Choisir la niche sur des signaux de demande, pas sur le goût",
        body:
          "Un opérateur de catalogue ne choisit pas un projet passion. Vous cherchez un lecteur qui essaie activement de résoudre quelque chose et qui achète déjà des livres là-dessus. Ce lecteur laisse des traces : il pose la même question en boucle, et les réponses existantes sont minces.",
        points: [
          "Cherchez une tâche précise, pas un thème — « ma pâte à pain retombe » bat « boulangerie ».",
          "Vérifiez que les livres de la niche ont des avis récents. Avis récents = acheteurs récents.",
          "Lisez les avis 3 étoiles des meilleures ventes. Ils nomment le manque que votre livre comble.",
          "Si le haut de la catégorie est tenu par des marques à des centaines d'avis, descendez d'un cran.",
        ],
        mistake:
          "Choisir une niche parce que le volume de recherche est élevé. Fort volume + concurrents installés = le pire endroit où démarrer.",
      },
      {
        id: "metadata",
        number: "02",
        title: "Accepter que ce sont les métadonnées qui décident du classement",
        body:
          "Le manuscrit décide si le lecteur garde le livre. Les métadonnées décident s'il le voit un jour. Les opérateurs les sous-estiment parce que ça ressemble à de l'administratif — c'est pourtant là que se trouve presque tout le classement récupérable.",
        points: [
          "Le titre porte la promesse, le sous-titre porte les mots-clés. Ne faites pas porter les deux au titre.",
          "Les deux premières lignes de la description sont tout ce que lisent la plupart des acheteurs : mettez-y le résultat, pas votre CV.",
          "Les 7 mots-clés sont des expressions, pas des mots. Utilisez ce qu'un acheteur taperait vraiment.",
          "Mieux vaut une catégorie que vous pouvez gagner qu'être invisible dans une grande.",
        ],
        mistake:
          "Répéter le même mot-clé dans le titre, le sous-titre et les 7 emplacements. Ça n'apporte rien et gaspille six emplacements.",
      },
      {
        id: "compliance",
        number: "03",
        title: "Construire la couche conformité avant d'en avoir besoin",
        body:
          "C'est l'étape qui tue les catalogues. Les règles d'Amazon sur la déclaration IA, le volume et la qualité sont appliquées par des systèmes qui acceptent mal les recours, et un compte fermé emporte tout le catalogue — y compris les livres qui se vendaient.",
        points: [
          "Déclarez l'usage de l'IA là où KDP le demande. La déclaration n'est pas une sanction ; ne pas déclarer, si.",
          "Prenez un nom de plume qui ressemble à une personne. Un nom-blague est un signal — c'est l'erreur qui m'a coûté un compte.",
          "Respectez la limite de titres par jour. Les rafales ressemblent exactement à ce que le système cherche.",
          "Relisez chaque livre avant l'upload. Pas pour le plaisir : pour attraper le paragraphe qui le fait rejeter.",
        ],
        mistake:
          "Faire du volume une stratégie. Le volume est une capacité de production. S'il devient aussi votre promesse, vous optimisez pour le comportement qu'Amazon cherche à éteindre.",
      },
      {
        id: "production",
        number: "04",
        title: "Traiter la production comme une boucle, pas comme un lancement",
        body:
          "Un catalogue ne compose que si chaque livre apprend quelque chose au suivant. Cela demande un rythme tenable et un relevé écrit, pour comparer des livres au lieu de deviner.",
        points: [
          "Publiez par petits lots et laissez chaque lot nourrir le brief suivant.",
          "Notez par livre : niche, prix, catégorie, ventes à 30 jours. Quatre colonnes valent mieux qu'un dashboard.",
          "Abandonnez une niche après trois livres sans traction. S'acharner sur la mauvaise niche est l'habitude la plus chère de l'édition.",
          "Quand un livre marche, faites les trois suivants juste à côté. Adjacent bat nouveau.",
        ],
        mistake:
          "Publier 20 livres dans 20 niches sans lien. Vous obtenez 20 expériences et aucun signal exploitable.",
      },
    ],
    mistakeLabel: "L'erreur",
    toolHeading: "Où l'outil intervient",
    toolBody: `Les étapes 1, 3 et 4 relèvent du jugement — aucun outil ne les remplace. L'étape 2, et la production elle-même, sont mécaniques : c'est la partie que fait ${SITE_NAME}. Un brief de niche entre ; le manuscrit, la couverture complète, le titre, le sous-titre, la description et les 7 mots-clés KDP sortent en un seul pack, avec un nom de plume. Vous relisez toujours le livre avant l'upload.`,
    toolCta: "Voir comment ça marche",
    faqHeading: "Les questions que posent vraiment les opérateurs",
    faq: [
      {
        q: "Publier des livres assistés par IA est-il autorisé sur Amazon KDP ?",
        a: "Oui, avec déclaration. KDP vous demande de déclarer le contenu généré par IA à l'upload, et distingue « généré par IA » de « assisté par IA ». Ce qui ferme les comptes, ce n'est pas l'IA : c'est l'absence de déclaration, le dépassement de la limite de titres par jour, ou un contenu qui échoue au contrôle qualité.",
      },
      {
        q: "Combien de livres publier par mois quand on démarre un catalogue ?",
        a: "Moins que ce que vous savez produire. La contrainte n'est pas la vitesse de génération, c'est votre capacité à relire correctement chaque livre et à tirer les leçons du lot précédent. Les opérateurs qui montent doucement et tiennent un relevé battent ceux qui inondent le compte et se font signaler.",
      },
      {
        q: "Qu'est-ce qui fait vraiment fermer un compte KDP ?",
        a: "En pratique : contenu IA non déclaré, dépassement de la limite quotidienne de titres, métadonnées trompeuses (bourrage de mots-clés, mauvaise catégorie), contenu dupliqué ou quasi dupliqué, et noms de plume qui semblent conçus pour usurper ou tromper. Un seul de ces points peut emporter tout le catalogue, pas seulement le titre fautif.",
      },
      {
        q: "Un seul nom de plume pour tout, ou un par niche ?",
        a: "Un par niche, et chacun doit ressembler à une vraie personne. Un nom de plume qui reste dans un seul sujet construit un signal d'auteur reconnaissable pour les lecteurs comme pour les recommandations d'Amazon ; un nom éparpillé sur des catégories sans lien ne construit ni l'un ni l'autre.",
      },
    ],
    closingHeading: "Si vous ne retenez qu'une chose",
    closingBody:
      "Le catalogue qui gagne n'est pas le plus gros. C'est celui qui tient encore debout dans dix-huit mois, parce que chaque livre a été relu avant l'upload et chaque niche choisie sur des preuves.",
  },

  it: {
    slug: playbookSlug,
    meta: {
      title: "Il playbook dell'operatore di catalogo KDP",
      description:
        "Pubblicare libri KDP che superano la revisione e vendono davvero: scelta della nicchia su segnali di domanda, metadati che decidono il posizionamento, conformità e ciclo di produzione.",
    },
    eyebrow: "Playbook gratuito",
    h1: "Pubblica libri KDP che superano la revisione e vendono.",
    lead:
      "Quasi tutti i cataloghi falliscono per due motivi: i libri vengono rimossi, oppure nessuno li trova. Nessuno dei due è un problema di scrittura. Questo è il ciclo che seguo — nicchia, metadati, conformità, produzione — scritto per chi costruisce un catalogo, non per chi scrive un romanzo.",
    authorNote:
      "Ho portato un catalogo KDP a 400 €/mese, poi ho perso l'account da un giorno all'altro per uno pseudonimo che sembrava una battuta. Tutto quello che segue è ciò che avrei voluto ricevere all'inizio.",
    gate: {
      heading: "Ricevi il kit operatore",
      body: "Il playbook è su questa pagina, gratis, senza registrazione. Il kit è la sua versione operativa — le parti che compili tu.",
      includes: [
        "La checklist di revisione pre-upload (quella che tiene in vita gli account)",
        "I modelli di brief di nicchia che producono un libro vendibile",
        "La scheda metadati: titolo, sottotitolo, descrizione, 7 parole chiave",
        "La scheda economica del catalogo — quanto deve rendere un libro per valere la pena",
      ],
    },
    stepsHeading: "Il ciclo",
    steps: [
      {
        id: "niche",
        number: "01",
        title: "Scegli la nicchia sui segnali di domanda, non sui gusti",
        body:
          "Chi gestisce un catalogo non sceglie un progetto di passione. Cerchi un lettore che sta attivamente provando a risolvere qualcosa e che compra già libri su quel tema. Quel lettore lascia tracce: fa sempre la stessa domanda, e le risposte esistenti sono deboli.",
        points: [
          "Cerca un compito preciso, non un tema — «il pane mi si sgonfia» batte «panificazione».",
          "Verifica che i libri della nicchia abbiano recensioni recenti. Recensioni recenti = acquirenti recenti.",
          "Leggi le recensioni a 3 stelle dei bestseller. Dicono esattamente quale vuoto colma il tuo libro.",
          "Se in cima alla categoria ci sono marchi forti con centinaia di recensioni, scendi di un livello.",
        ],
        mistake:
          "Scegliere una nicchia perché il volume di ricerca è alto. Volume alto più concorrenti affermati è il punto di partenza peggiore possibile.",
      },
      {
        id: "metadata",
        number: "02",
        title: "Accetta che sono i metadati a decidere il posizionamento",
        body:
          "Il manoscritto decide se il lettore tiene il libro. I metadati decidono se lo vede. Gli operatori li sottovalutano perché sembrano burocrazia — ed è lì che si trova quasi tutto il posizionamento recuperabile.",
        points: [
          "Il titolo porta la promessa, il sottotitolo porta le parole chiave. Non far fare entrambe al titolo.",
          "Le prime due righe della descrizione sono tutto ciò che legge la maggior parte: mettici il risultato, non il curriculum.",
          "I 7 slot sono frasi, non parole. Usa quello che un compratore digiterebbe davvero.",
          "Meglio una categoria che puoi vincere che l'invisibilità in una grande.",
        ],
        mistake:
          "Ripetere la stessa parola chiave nel titolo, nel sottotitolo e in tutti i 7 slot. Non porta nulla e spreca sei slot.",
      },
      {
        id: "compliance",
        number: "03",
        title: "Costruisci la conformità prima di averne bisogno",
        body:
          "È il passo che uccide i cataloghi. Le regole di Amazon su dichiarazione IA, volume e qualità sono applicate da sistemi che accettano male i ricorsi, e un account chiuso si porta via tutto il catalogo — compresi i libri che vendevano.",
        points: [
          "Dichiara l'uso dell'IA dove KDP lo chiede. La dichiarazione non è una penalità; non dichiarare sì.",
          "Usa uno pseudonimo che sembri una persona. Un nome-battuta è un segnale — è l'errore che mi è costato un account.",
          "Rispetta il limite giornaliero di titoli. Le raffiche sembrano esattamente ciò che il sistema cerca.",
          "Rileggi ogni libro prima dell'upload. Non per piacere: per intercettare il paragrafo che lo fa rifiutare.",
        ],
        mistake:
          "Trattare il volume come strategia. Il volume è una capacità produttiva. Se diventa anche la tua promessa, stai ottimizzando per il comportamento che Amazon sta reprimendo.",
      },
      {
        id: "production",
        number: "04",
        title: "Gestisci la produzione come un ciclo, non come un lancio",
        body:
          "Un catalogo cresce in modo composto solo se ogni libro insegna qualcosa al successivo. Servono un ritmo sostenibile e un registro scritto, per confrontare libri invece di tirare a indovinare.",
        points: [
          "Pubblica a piccoli lotti e lascia che ogni lotto alimenti il brief successivo.",
          "Annota per libro: nicchia, prezzo, categoria, vendite a 30 giorni. Quattro colonne battono una dashboard.",
          "Abbandona una nicchia dopo tre libri senza trazione. Insistere sulla nicchia sbagliata è l'abitudine più costosa dell'editoria.",
          "Quando un libro funziona, fai i tre successivi adiacenti. Adiacente batte nuovo.",
        ],
        mistake:
          "Pubblicare 20 libri in 20 nicchie scollegate. Ottieni 20 esperimenti e nessun segnale utilizzabile.",
      },
    ],
    mistakeLabel: "L'errore",
    toolHeading: "Dove entra lo strumento",
    toolBody: `I passi 1, 3 e 4 richiedono giudizio — nessuno strumento li sostituisce. Il passo 2, e la produzione stessa, sono meccanici: è la parte che fa ${SITE_NAME}. Entra un brief di nicchia; escono manoscritto, copertina completa, titolo, sottotitolo, descrizione e 7 parole chiave KDP in un unico pacchetto, con uno pseudonimo. Il libro lo rileggi comunque tu prima dell'upload.`,
    toolCta: "Guarda come funziona",
    faqHeading: "Le domande che gli operatori fanno davvero",
    faq: [
      {
        q: "È permesso pubblicare libri assistiti dall'IA su Amazon KDP?",
        a: "Sì, con dichiarazione. KDP chiede di dichiarare il contenuto generato dall'IA al momento del caricamento e distingue tra generato e assistito dall'IA. Ciò che chiude gli account non è usare l'IA: è non dichiararla, superare il limite giornaliero di titoli, o caricare contenuti che non superano il controllo qualità.",
      },
      {
        q: "Quanti libri pubblicare al mese all'inizio?",
        a: "Meno di quanti sai produrne. Il vincolo non è la velocità di generazione, è la tua capacità di rileggere bene ogni libro e di imparare dal lotto precedente. Chi cresce lentamente e tiene un registro batte chi inonda l'account e viene segnalato.",
      },
      {
        q: "Cosa fa davvero chiudere un account KDP?",
        a: "In pratica: contenuto IA non dichiarato, superamento del limite giornaliero di titoli, metadati ingannevoli (keyword stuffing, categoria sbagliata), contenuti duplicati o quasi duplicati, e pseudonimi che sembrano pensati per impersonare o ingannare. Basta uno di questi per perdere l'intero catalogo, non solo il titolo in questione.",
      },
      {
        q: "Uno pseudonimo per tutto o uno per nicchia?",
        a: "Uno per nicchia, e ognuno deve sembrare una persona reale. Uno pseudonimo che resta dentro un solo argomento costruisce un segnale d'autore riconoscibile per i lettori e per i sistemi di raccomandazione di Amazon; un nome sparso su categorie scollegate non costruisce né l'uno né l'altro.",
      },
    ],
    closingHeading: "Se porti via una cosa sola",
    closingBody:
      "Il catalogo che vince non è il più grande. È quello ancora in piedi fra diciotto mesi, perché ogni libro è stato riletto prima del caricamento e ogni nicchia scelta sulle prove.",
  },

  de: {
    slug: playbookSlug,
    meta: {
      title: "Das Playbook für KDP-Katalogbetreiber",
      description:
        "KDP-Bücher veröffentlichen, die die Prüfung überstehen und sich verkaufen: Nischenwahl nach Nachfragesignalen, Metadaten als Ranking-Hebel, Compliance-Schicht und Produktionsschleife.",
    },
    eyebrow: "Kostenloses Playbook",
    h1: "Veröffentliche KDP-Bücher, die die Prüfung überstehen und sich verkaufen.",
    lead:
      "Die meisten Kataloge scheitern aus zwei Gründen: Die Bücher werden entfernt, oder niemand findet sie. Keiner davon ist ein Schreibproblem. Das hier ist die Schleife, die ich fahre — Nische, Metadaten, Compliance, Produktion — geschrieben für Leute, die einen Katalog aufbauen, nicht für jemanden, der einen Roman schreibt.",
    authorNote:
      "Ich habe einen KDP-Katalog auf 400 €/Monat gebracht und dann über Nacht das Konto verloren — wegen eines Pseudonyms, das wie ein Witz klang. Alles Folgende ist das, was ich meiner ersten Version gerne in die Hand gedrückt hätte.",
    gate: {
      heading: "Hol dir das Operator-Kit",
      body: "Das Playbook steht auf dieser Seite, kostenlos, ohne Anmeldung. Das Kit ist die Arbeitsversion davon — die Teile, die du ausfüllst.",
      includes: [
        "Die Prüfliste vor dem Upload (die, die Konten am Leben hält)",
        "Nischen-Brief-Vorlagen, die ein verkäufliches Buch ergeben",
        "Das Metadaten-Arbeitsblatt: Titel, Untertitel, Beschreibung, 7 Keyword-Slots",
        "Die Katalog-Rechnung — was ein Buch einbringen muss, damit es sich lohnt",
      ],
    },
    stepsHeading: "Die Schleife",
    steps: [
      {
        id: "niche",
        number: "01",
        title: "Wähle die Nische nach Nachfragesignalen, nicht nach Geschmack",
        body:
          "Wer einen Katalog betreibt, sucht kein Herzensprojekt. Du suchst Lesende, die aktiv etwas lösen wollen und dazu bereits Bücher kaufen. Diese Lesenden hinterlassen Spuren: Sie stellen dieselbe Frage immer wieder, und die vorhandenen Antworten sind dünn.",
        points: [
          "Suche eine konkrete Aufgabe, kein Thema — «mein Sauerteig fällt zusammen» schlägt «Backen».",
          "Prüfe, ob Bücher der Nische aktuelle Rezensionen haben. Aktuelle Rezensionen heißt aktuelle Käufer.",
          "Lies die 3-Sterne-Rezensionen der Bestseller. Sie benennen die Lücke, die dein Buch füllt.",
          "Wenn oben starke Marken mit Hunderten Rezensionen stehen, geh eine Ebene enger.",
        ],
        mistake:
          "Eine Nische wählen, weil das Suchvolumen hoch ist. Hohes Volumen plus etablierte Konkurrenz ist der denkbar schlechteste Start.",
      },
      {
        id: "metadata",
        number: "02",
        title: "Akzeptiere, dass die Metadaten das Ranking entscheiden",
        body:
          "Das Manuskript entscheidet, ob Lesende das Buch behalten. Die Metadaten entscheiden, ob sie es überhaupt sehen. Betreiber unterschätzen das, weil es nach Papierkram aussieht — und genau dort liegt fast das gesamte gewinnbare Ranking.",
        points: [
          "Der Titel trägt das Versprechen, der Untertitel die Keywords. Lass den Titel nicht beides tragen.",
          "Die ersten zwei Zeilen der Beschreibung sind alles, was die meisten lesen: Ergebnis rein, Lebenslauf raus.",
          "Die 7 Keyword-Slots sind Phrasen, keine Wörter. Nimm, was ein Käufer wirklich tippen würde.",
          "Eine Kategorie, die du gewinnen kannst, schlägt Unsichtbarkeit in einer großen.",
        ],
        mistake:
          "Dasselbe Keyword in Titel, Untertitel und allen 7 Slots wiederholen. Bringt nichts und verschwendet sechs Slots.",
      },
      {
        id: "compliance",
        number: "03",
        title: "Baue die Compliance-Schicht, bevor du sie brauchst",
        body:
          "Das ist der Schritt, der Kataloge beendet. Amazons Regeln zu KI-Angabe, Volumen und Qualität werden von Systemen durchgesetzt, die mit Einsprüchen schlecht umgehen, und ein gesperrtes Konto nimmt den ganzen Katalog mit — auch die Bücher, die liefen.",
        points: [
          "Gib KI-Nutzung an, wo KDP danach fragt. Die Angabe ist keine Strafe; das Verschweigen schon.",
          "Nimm ein Pseudonym, das nach einer Person klingt. Ein Witzname ist ein Signal — das ist der Fehler, der mich ein Konto gekostet hat.",
          "Halte das Tageslimit für Titel ein. Stoßweises Hochladen sieht genau so aus, wie das System es sucht.",
          "Lies jedes Buch vor dem Upload. Nicht zum Vergnügen — um den einen Absatz zu finden, der es durchfallen lässt.",
        ],
        mistake:
          "Volumen zur Strategie machen. Volumen ist eine Produktionsfähigkeit. Wird es auch dein Versprechen, optimierst du auf genau das Verhalten, das Amazon gerade eindämmt.",
      },
      {
        id: "production",
        number: "04",
        title: "Führe Produktion als Schleife, nicht als Launch",
        body:
          "Ein Katalog verzinst sich nur, wenn jedes Buch dem nächsten etwas beibringt. Das braucht einen Rhythmus, den du durchhältst, und Aufzeichnungen, damit du Bücher vergleichst statt zu raten.",
        points: [
          "Veröffentliche in kleinen Chargen und lass jede Charge den nächsten Brief formen.",
          "Notiere pro Buch: Nische, Preis, Kategorie, Verkäufe nach 30 Tagen. Vier Spalten schlagen ein Dashboard.",
          "Beende eine Nische nach drei Büchern ohne Zug. Durchhalten in der falschen Nische ist die teuerste Gewohnheit im Verlagsgeschäft.",
          "Wenn ein Buch funktioniert, mach die nächsten drei direkt daneben. Angrenzend schlägt neu.",
        ],
        mistake:
          "20 Bücher in 20 zusammenhanglosen Nischen veröffentlichen. Am Ende hast du 20 Experimente und kein verwertbares Signal.",
      },
    ],
    mistakeLabel: "Der Fehler",
    toolHeading: "Wo das Tool hineinpasst",
    toolBody: `Schritt 1, 3 und 4 sind Urteilsvermögen — kein Tool ersetzt sie. Schritt 2 und die Produktion selbst sind mechanisch, und genau das macht ${SITE_NAME}: ein Nischen-Brief rein, und Manuskript, komplettes Cover, KDP-Titel, Untertitel, Beschreibung und 7 Keyword-Slots kommen als ein Paket heraus, mit Pseudonym. Das Buch liest du trotzdem vor dem Upload.`,
    toolCta: "Ansehen, wie es funktioniert",
    faqHeading: "Fragen, die Betreiber wirklich stellen",
    faq: [
      {
        q: "Sind KI-unterstützte Bücher auf Amazon KDP erlaubt?",
        a: "Ja, mit Angabe. KDP verlangt beim Upload eine Erklärung zu KI-generierten Inhalten und unterscheidet zwischen KI-generiert und KI-unterstützt. Konten werden nicht wegen KI gesperrt, sondern wegen fehlender Angabe, Überschreiten des Tageslimits für Titel oder Inhalten, die die Qualitätsprüfung nicht bestehen.",
      },
      {
        q: "Wie viele Bücher sollte man am Anfang pro Monat veröffentlichen?",
        a: "Weniger, als du technisch schaffst. Der Engpass ist nicht die Generierungsgeschwindigkeit, sondern deine Fähigkeit, jedes Buch ordentlich zu prüfen und aus der letzten Charge zu lernen. Wer langsam hochfährt und Aufzeichnungen führt, schlägt den, der das Konto flutet und markiert wird.",
      },
      {
        q: "Was führt tatsächlich zur Sperrung eines KDP-Kontos?",
        a: "In der Praxis: nicht angegebene KI-Inhalte, Überschreiten des Tageslimits, irreführende Metadaten (Keyword-Stuffing, falsche Kategorie), doppelte oder fast doppelte Inhalte und Pseudonyme, die auf Täuschung angelegt wirken. Schon eines davon kann den gesamten Katalog kosten, nicht nur den betroffenen Titel.",
      },
      {
        q: "Ein Pseudonym für alles oder eines pro Nische?",
        a: "Eines pro Nische, und jedes soll nach einer echten Person klingen. Ein Pseudonym, das bei einem Thema bleibt, baut ein erkennbares Autorensignal auf — für Lesende und für Amazons eigene Empfehlungen. Ein Name quer über zusammenhanglose Kategorien baut keins von beidem.",
      },
    ],
    closingHeading: "Wenn du nur eines mitnimmst",
    closingBody:
      "Der Katalog, der gewinnt, ist nicht der größte. Es ist der, der in achtzehn Monaten noch steht — weil jedes Buch vor dem Upload geprüft und jede Nische auf Belege hin gewählt wurde.",
  },
};

export function playbookPath(locale: Locale) {
  return `/${locale}/${playbookSlug}`;
}
