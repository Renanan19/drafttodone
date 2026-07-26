import { SITE_NAME, type Locale } from "./blog-content";

/**
 * The partner program.
 *
 * Two audiences on one page, because in this niche they are often the same
 * person: an affiliate who wants a commission, and a creator who wants a
 * deeper arrangement. The commission is deliberately high — at zero brand
 * awareness it is the only argument available, and a KDP creator choosing
 * between tools has no other reason to pick this one.
 */

/** Recurring, for as long as the referred customer stays. */
export const AFFILIATE_COMMISSION_PCT = 40;
/** Yearly plan price, used to make the commission concrete rather than abstract. */
export const YEARLY_PLAN_EUR = 390;
export const yearlyCommissionEur = () =>
  Math.round((YEARLY_PLAN_EUR * AFFILIATE_COMMISSION_PCT) / 100);

export const partnersSlug = "partners";

export type PartnersCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1: string;
  lead: string;

  affiliate: {
    h2: string;
    body: string;
    /** Tokens: {pct}, {commission}, {price} */
    headline: string;
    terms: { label: string; value: string }[];
    kitHeading: string;
    kitBody: string;
    kit: string[];
  };

  creator: {
    h2: string;
    body: string;
    points: string[];
  };

  apply: {
    h2: string;
    body: string;
  };

  faqHeading: string;
  faq: { q: string; a: string }[];
};

export const partnersCopy: Record<Locale, PartnersCopy> = {
  en: {
    meta: {
      title: "Partner with DraftToDone — 40% recurring for KDP creators",
      description:
        "Affiliate and creator partnerships for people who teach Amazon KDP. 40% recurring commission for as long as your referral stays, plus a promo kit that does the work for you.",
    },
    eyebrow: "Partners",
    h1: "If you teach KDP, this pays you every month.",
    lead:
      "DraftToDone turns one niche brief into a complete KDP package — manuscript, full wrap cover, title, subtitle, description, 7 keyword slots, pen name. If your audience publishes on Amazon, this is a tool they will use every week, and the commission is recurring for as long as they stay.",

    affiliate: {
      h2: "The affiliate program",
      body: "Deliberately generous, for a simple reason: at this stage the commission is the argument. I would rather pay you well and grow slower per customer than pay you the standard rate and never get in front of your audience at all.",
      headline: "{pct}% recurring — about €{commission} a year, per customer, for as long as they stay.",
      terms: [
        { label: "Commission", value: "40% of every payment, recurring" },
        { label: "Duration", value: "For the life of the subscription, not 12 months" },
        { label: "Cookie window", value: "60 days" },
        { label: "Payout", value: "Monthly, from €50" },
      ],
      kitHeading: "You get the kit, not just a link",
      kitBody:
        "Most affiliate programs fail because nobody tells the affiliate how to promote. So the link comes with the material to use it.",
      kit: [
        "A demo video you can drop into your own edit",
        "The generated output of a real book — manuscript, cover, metadata — to show on screen",
        "Post copy for YouTube descriptions, X, and a newsletter slot",
        "The angles that convert for this audience, and the ones that do not",
        "A free account, so you can actually use the thing before you recommend it",
      ],
    },

    creator: {
      h2: "Or something deeper than affiliate",
      body: "If you have a real KDP audience, I am open to a partnership rather than a commission. I would rather have one creator genuinely invested than fifty links.",
      points: [
        "Revenue share above the standard rate, or equity — depending on what you bring",
        "Direct input on the roadmap, because you know this niche better than I do",
        "Your name on the product if you want it, and no obligation if you do not",
        "First look at everything before it ships",
      ],
    },

    apply: {
      h2: "Get in touch",
      body: "Tell me where your audience is and what you would want out of it. I answer everything myself.",
    },

    faqHeading: "The questions I would ask",
    faq: [
      {
        q: "Is DraftToDone a fit for a KDP audience?",
        a: "It fits the operator side of that audience — people publishing multiple non-fiction titles who care about metadata, review and repeatability. It is a poor fit for someone writing one novel they care deeply about, and I would rather you know that before you recommend it.",
      },
      {
        q: "What does the customer actually pay?",
        a: "€14.99 a week for 6 book credits, or €390 a year for 312. One credit produces one complete book package. At 40% recurring, the yearly plan pays you about €156 per customer per year, for as long as they stay.",
      },
      {
        q: "Will you send me something to say?",
        a: "Yes, and please change it. Scripted affiliate copy reads as scripted. The kit exists so you have the facts, the assets and the working angles — the voice should be yours.",
      },
      {
        q: "Can I be honest about the limitations on camera?",
        a: "Please be. The AI does not replace reading the book before you upload it, and saying so makes the recommendation credible instead of promotional. Audiences in this niche have heard enough overselling.",
      },
    ],
  },

  fr: {
    meta: {
      title: "Devenir partenaire DraftToDone — 40 % récurrent pour les créateurs KDP",
      description:
        "Programme d'affiliation et partenariats créateurs pour ceux qui enseignent Amazon KDP. 40 % de commission récurrente tant que le client reste, plus un kit promo prêt à l'emploi.",
    },
    eyebrow: "Partenaires",
    h1: "Si vous enseignez KDP, ceci vous rapporte tous les mois.",
    lead:
      "DraftToDone transforme un brief de niche en pack KDP complet — manuscrit, couverture recto-dos-verso, titre, sous-titre, description, 7 mots-clés, nom de plume. Si votre audience publie sur Amazon, c'est un outil qu'elle utilisera chaque semaine, et la commission est récurrente tant qu'elle reste.",

    affiliate: {
      h2: "Le programme d'affiliation",
      body: "Volontairement généreux, pour une raison simple : à ce stade, la commission est l'argument. Je préfère vous payer bien et gagner moins par client que payer le tarif standard et ne jamais atteindre votre audience.",
      headline: "{pct} % récurrent — environ {commission} € par an et par client, tant qu'il reste.",
      terms: [
        { label: "Commission", value: "40 % de chaque paiement, récurrent" },
        { label: "Durée", value: "Toute la vie de l'abonnement, pas 12 mois" },
        { label: "Fenêtre cookie", value: "60 jours" },
        { label: "Versement", value: "Mensuel, à partir de 50 €" },
      ],
      kitHeading: "Vous recevez le kit, pas juste un lien",
      kitBody:
        "La plupart des programmes d'affiliation échouent parce que personne n'explique à l'affilié comment promouvoir. Le lien arrive donc avec de quoi s'en servir.",
      kit: [
        "Une vidéo de démo à intégrer directement dans votre montage",
        "Le rendu généré d'un vrai livre — manuscrit, couverture, métadonnées — à montrer à l'écran",
        "Des textes prêts pour descriptions YouTube, X et un encart newsletter",
        "Les angles qui convertissent sur cette audience, et ceux qui ne convertissent pas",
        "Un compte gratuit, pour utiliser l'outil avant de le recommander",
      ],
    },

    creator: {
      h2: "Ou quelque chose de plus qu'une affiliation",
      body: "Si vous avez une vraie audience KDP, je suis ouvert à un partenariat plutôt qu'à une commission. Je préfère un créateur réellement impliqué que cinquante liens.",
      points: [
        "Revenue share au-dessus du tarif standard, ou de l'equity — selon ce que vous apportez",
        "Un vrai droit de regard sur la roadmap : vous connaissez cette niche mieux que moi",
        "Votre nom sur le produit si vous le voulez, aucune obligation sinon",
        "Accès en avant-première à tout ce qui sort",
      ],
    },

    apply: {
      h2: "Écrivez-moi",
      body: "Dites-moi où est votre audience et ce que vous en attendez. Je réponds moi-même à tout.",
    },

    faqHeading: "Les questions que je poserais",
    faq: [
      {
        q: "Est-ce que DraftToDone colle à une audience KDP ?",
        a: "Il colle au profil opérateur de cette audience : ceux qui publient plusieurs titres non-fiction et qui se soucient des métadonnées, de la relecture et de la répétabilité. Il colle mal à quelqu'un qui écrit le roman de sa vie, et je préfère que vous le sachiez avant de le recommander.",
      },
      {
        q: "Combien paie réellement le client ?",
        a: "14,99 € par semaine pour 6 crédits, ou 390 € par an pour 312. Un crédit produit un pack livre complet. À 40 % récurrent, l'offre annuelle vous rapporte environ 156 € par client et par an, tant qu'il reste.",
      },
      {
        q: "Vous m'envoyez un script ?",
        a: "Oui, et modifiez-le. Un texte d'affiliation récité s'entend. Le kit existe pour vous donner les faits, les assets et les angles qui marchent — la voix doit rester la vôtre.",
      },
      {
        q: "Puis-je dire les limites face caméra ?",
        a: "Faites-le. L'IA ne remplace pas la relecture avant l'upload, et le dire rend la recommandation crédible au lieu de publicitaire. Cette audience a assez entendu de survente.",
      },
    ],
  },

  it: {
    meta: {
      title: "Diventa partner di DraftToDone — 40% ricorrente per i creator KDP",
      description:
        "Programma di affiliazione e partnership con creator per chi insegna Amazon KDP. 40% di commissione ricorrente finché il cliente resta, più un kit promozionale pronto all'uso.",
    },
    eyebrow: "Partner",
    h1: "Se insegni KDP, questo ti paga ogni mese.",
    lead:
      "DraftToDone trasforma un brief di nicchia in un pacchetto KDP completo — manoscritto, copertina completa, titolo, sottotitolo, descrizione, 7 parole chiave, pseudonimo. Se il tuo pubblico pubblica su Amazon, è uno strumento che userà ogni settimana, e la commissione è ricorrente finché resta.",

    affiliate: {
      h2: "Il programma di affiliazione",
      body: "Volutamente generoso, per un motivo semplice: a questo stadio la commissione è l'argomento. Preferisco pagarti bene e guadagnare meno per cliente che pagare la tariffa standard e non arrivare mai al tuo pubblico.",
      headline: "{pct}% ricorrente — circa {commission} € all'anno per cliente, finché resta.",
      terms: [
        { label: "Commissione", value: "40% di ogni pagamento, ricorrente" },
        { label: "Durata", value: "Per tutta la vita dell'abbonamento, non 12 mesi" },
        { label: "Finestra cookie", value: "60 giorni" },
        { label: "Pagamento", value: "Mensile, da 50 €" },
      ],
      kitHeading: "Ricevi il kit, non solo un link",
      kitBody:
        "Quasi tutti i programmi di affiliazione falliscono perché nessuno spiega all'affiliato come promuovere. Il link arriva quindi con il materiale per usarlo.",
      kit: [
        "Un video demo da inserire direttamente nel tuo montaggio",
        "L'output reale di un libro — manoscritto, copertina, metadati — da mostrare a schermo",
        "Testi pronti per descrizioni YouTube, X e uno spazio newsletter",
        "Gli angoli che convertono su questo pubblico, e quelli che non convertono",
        "Un account gratuito, per usare lo strumento prima di consigliarlo",
      ],
    },

    creator: {
      h2: "Oppure qualcosa di più di un'affiliazione",
      body: "Se hai un pubblico KDP reale, sono aperto a una partnership invece che a una commissione. Preferisco un creator davvero coinvolto che cinquanta link.",
      points: [
        "Revenue share sopra la tariffa standard, o equity — a seconda di cosa porti",
        "Voce in capitolo sulla roadmap: conosci questa nicchia meglio di me",
        "Il tuo nome sul prodotto se lo vuoi, nessun obbligo altrimenti",
        "Anteprima su tutto prima del rilascio",
      ],
    },

    apply: {
      h2: "Scrivimi",
      body: "Dimmi dov'è il tuo pubblico e cosa vorresti ottenerne. Rispondo personalmente a tutto.",
    },

    faqHeading: "Le domande che farei io",
    faq: [
      {
        q: "DraftToDone è adatto a un pubblico KDP?",
        a: "È adatto alla parte operatori di quel pubblico: chi pubblica più titoli di saggistica e tiene a metadati, revisione e ripetibilità. È poco adatto a chi scrive il romanzo della sua vita, e preferisco che tu lo sappia prima di consigliarlo.",
      },
      {
        q: "Quanto paga davvero il cliente?",
        a: "14,99 € a settimana per 6 crediti, oppure 390 € l'anno per 312. Un credito produce un pacchetto libro completo. Al 40% ricorrente, il piano annuale ti rende circa 156 € per cliente all'anno, finché resta.",
      },
      {
        q: "Mi mandi uno script?",
        a: "Sì, e modificalo. Un testo di affiliazione recitato si sente. Il kit serve a darti fatti, asset e angoli che funzionano — la voce deve restare la tua.",
      },
      {
        q: "Posso dire i limiti davanti alla telecamera?",
        a: "Fallo. L'IA non sostituisce la rilettura prima del caricamento, e dirlo rende il consiglio credibile invece che pubblicitario. Questo pubblico ha già sentito abbastanza esagerazioni.",
      },
    ],
  },

  de: {
    meta: {
      title: "Partner werden bei DraftToDone — 40 % wiederkehrend für KDP-Creator",
      description:
        "Affiliate- und Creator-Partnerschaften für alle, die Amazon KDP unterrichten. 40 % wiederkehrende Provision, solange der Kunde bleibt, plus ein fertiges Promo-Kit.",
    },
    eyebrow: "Partner",
    h1: "Wenn du KDP unterrichtest, zahlt dir das jeden Monat.",
    lead:
      "DraftToDone macht aus einem Nischen-Brief ein komplettes KDP-Paket — Manuskript, volles Cover, Titel, Untertitel, Beschreibung, 7 Keyword-Slots, Pseudonym. Wenn dein Publikum auf Amazon veröffentlicht, ist das ein Tool, das es jede Woche benutzt — und die Provision läuft, solange es bleibt.",

    affiliate: {
      h2: "Das Affiliate-Programm",
      body: "Bewusst großzügig, aus einem einfachen Grund: In dieser Phase ist die Provision das Argument. Lieber zahle ich dir gut und verdiene pro Kunde weniger, als den Standardsatz zu zahlen und dein Publikum nie zu erreichen.",
      headline: "{pct} % wiederkehrend — rund {commission} € pro Jahr und Kunde, solange er bleibt.",
      terms: [
        { label: "Provision", value: "40 % jeder Zahlung, wiederkehrend" },
        { label: "Laufzeit", value: "So lange das Abo läuft, nicht 12 Monate" },
        { label: "Cookie-Fenster", value: "60 Tage" },
        { label: "Auszahlung", value: "Monatlich, ab 50 €" },
      ],
      kitHeading: "Du bekommst das Kit, nicht nur einen Link",
      kitBody:
        "Die meisten Affiliate-Programme scheitern, weil niemand dem Affiliate sagt, wie man bewirbt. Der Link kommt deshalb mit dem Material, um ihn zu nutzen.",
      kit: [
        "Ein Demo-Video, das du direkt in deinen Schnitt legen kannst",
        "Der echte Output eines Buchs — Manuskript, Cover, Metadaten — zum Zeigen auf dem Bildschirm",
        "Fertige Texte für YouTube-Beschreibungen, X und einen Newsletter-Slot",
        "Die Winkel, die bei diesem Publikum konvertieren, und die, die es nicht tun",
        "Ein kostenloser Account, damit du das Ding wirklich nutzt, bevor du es empfiehlst",
      ],
    },

    creator: {
      h2: "Oder mehr als nur Affiliate",
      body: "Wenn du ein echtes KDP-Publikum hast, bin ich offen für eine Partnerschaft statt einer Provision. Lieber ein Creator, der wirklich drinsteckt, als fünfzig Links.",
      points: [
        "Revenue Share über dem Standardsatz, oder Equity — je nachdem, was du mitbringst",
        "Echtes Mitspracherecht bei der Roadmap: Du kennst diese Nische besser als ich",
        "Dein Name auf dem Produkt, wenn du willst — und keine Verpflichtung, wenn nicht",
        "Vorabzugang zu allem, bevor es ausgeliefert wird",
      ],
    },

    apply: {
      h2: "Schreib mir",
      body: "Sag mir, wo dein Publikum ist und was du davon hättest. Ich beantworte alles selbst.",
    },

    faqHeading: "Die Fragen, die ich stellen würde",
    faq: [
      {
        q: "Passt DraftToDone zu einem KDP-Publikum?",
        a: "Es passt zum Betreiber-Teil dieses Publikums: Leute, die mehrere Sachbuch-Titel veröffentlichen und denen Metadaten, Prüfung und Wiederholbarkeit wichtig sind. Für jemanden, der den einen Roman seines Lebens schreibt, passt es schlecht — und das sollst du wissen, bevor du es empfiehlst.",
      },
      {
        q: "Was zahlt der Kunde tatsächlich?",
        a: "14,99 € pro Woche für 6 Credits oder 390 € pro Jahr für 312. Ein Credit ergibt ein komplettes Buchpaket. Bei 40 % wiederkehrend bringt dir der Jahresplan rund 156 € pro Kunde und Jahr, solange er bleibt.",
      },
      {
        q: "Schickst du mir ein Skript?",
        a: "Ja, und ändere es. Abgelesene Affiliate-Texte hört man. Das Kit liefert Fakten, Assets und funktionierende Winkel — die Stimme soll deine bleiben.",
      },
      {
        q: "Darf ich die Grenzen vor der Kamera nennen?",
        a: "Bitte tu das. Die KI ersetzt nicht, das Buch vor dem Upload zu lesen, und das zu sagen macht die Empfehlung glaubwürdig statt werblich. Dieses Publikum hat genug Übertreibung gehört.",
      },
    ],
  },
};

export function partnersPath(locale: Locale) {
  return `/${locale}/${partnersSlug}`;
}

export const partnersProgramName = `${SITE_NAME} Partner Program`;
