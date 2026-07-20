import type { BlogPost } from "./blog-content";

export const bookMarketingSeoPosts: BlogPost[] = [
  {
    key: "amazon-ads-for-books",
    date: "2026-06-12",
    updated: "2026-07-20",
    readingTime: 15,
    accent: {
      start: "#f6f3ff",
      middle: "#c7d2fe",
      end: "#b9ead7",
    },
    translations: {
      en: {
        slug: "amazon-ads-for-kdp-books-beginner-guide",
        title: "Amazon Ads for KDP books: a beginner's system that doesn't burn the royalty",
        description:
          "How to run profitable Amazon Ads for self-published books: when a book is ready for ads, the ACOS break-even math, the three campaign types, a starter structure with real budgets, and the weekly optimization loop.",
        seoTitle: "Amazon Ads for KDP Books: Beginner Guide (2026)",
        seoDescription:
          "Launch Amazon Ads for a KDP book with break-even ACOS math, three starter campaigns, practical budgets and a weekly optimization loop.",
        keywords: [
          "Amazon ads for books",
          "Amazon ads KDP",
          "sponsored products books",
          "ACOS books advertising",
          "KDP advertising guide",
          "Amazon book marketing",
          "book ads budget",
          "Amazon PPC authors",
        ],
        category: "Advertising",
        intro: [
          "Amazon Ads is the only ad platform where book buyers are already standing in the bookstore with a card in hand. That proximity makes it the highest-intent channel an indie publisher has — and also the easiest place to quietly shred thin royalties, because the auction does not care that your paperback only nets $3.70.",
          "The publishers who make ads work treat them as arithmetic with a feedback loop: know your break-even ACOS before the first campaign, structure campaigns so the data tells you something, and harvest what converts. The ones who lose treat ads as a hopeful boost button.",
          "This guide gives you the readiness checklist, the math, a starter campaign structure with actual budgets, and the weekly loop — sized for indie books earning $2–$7 per sale, not for venture-funded brands.",
        ],
        sections: [
          {
            id: "readiness",
            title: "When a book is ready for ads (and when ads just subsidize a weak listing)",
            body: [
              "Ads multiply the listing's conversion rate. A page that converts 10% of visitors gets ten sales from a hundred paid clicks; a page that converts 1% gets one. Same spend, tenfold difference — which is why advertising an unready book is donating money to Amazon.",
              "Readiness means: a cover competitive against the category's top 20 at thumbnail size, a description structured as sales copy, at least 5–10 honest reviews, and a price inside its category's normal range. Each weak element taxes every click you buy.",
              "The good news: ads on a ready book produce a second dividend. Paid sales improve organic rank, which produces organic sales the ads never paid for. That organic halo is what makes moderately-performing campaigns worthwhile overall.",
            ],
            bullets: [
              "Ads multiply conversion; they cannot create it.",
              "Readiness: thumbnail-grade cover, sales-copy description, 5–10 reviews, normal price.",
              "Paid sales lift organic rank — the halo often decides overall profitability.",
              "Fix the listing first; it is the cheapest optimization available.",
            ],
          },
          {
            id: "acos-math",
            title: "The ACOS math: know your break-even before spending a cent",
            body: [
              "ACOS (Advertising Cost of Sales) is ad spend divided by ad-attributed sales revenue. Your break-even ACOS is royalty divided by list price: a $4.99 ebook earning $3.40 breaks even at 68%; a $12.99 paperback earning $4.10 breaks even at 32%. Below break-even, ads print money; above it, they consume royalty.",
              "Two corrections make the simple math honest. Kindle Unlimited page reads attributed to ad clicks add invisible revenue — KU-heavy books can profitably run above their visible break-even. And the organic halo means a campaign at slightly-above-break-even ACOS can still grow total profit. Start strict, loosen with evidence.",
              "Practical bid sizing follows: with a $3.40 royalty and a 10% conversion rate, a click is worth $0.34. Starting bids of $0.30–$0.45 for ebooks and $0.40–$0.60 for higher-royalty paperbacks are sane defaults you adjust with data, not vibes.",
            ],
            bullets: [
              "Break-even ACOS = royalty ÷ list price. Compute it per format.",
              "KU reads and organic halo justify modest overshoot — with evidence.",
              "Click value = royalty × conversion rate; bid below it.",
              "Starter bids: $0.30–$0.45 ebooks, $0.40–$0.60 paperbacks.",
            ],
          },
          {
            id: "campaign-types",
            title: "The three campaign types and the only one beginners need",
            body: [
              "Sponsored Products — ads in search results and on product pages — is where books win. It carries the buyer's search intent, offers keyword and product targeting, and supports both automatic and manual modes. This is 90% of indie book advertising.",
              "Sponsored Brands (the banner with multiple books) requires three-plus titles and rewards series and catalogs; revisit it when you have them. Lockscreen ads (Kindle device placements) are cheap but low-intent — an occasional experiment, never the backbone.",
              "Within Sponsored Products, the two targeting modes split the work: automatic campaigns let Amazon mine your metadata for search terms (research), and manual campaigns bid on the keywords and competitor ASINs you choose (precision). The starter structure uses both deliberately.",
            ],
            bullets: [
              "Sponsored Products = the indie workhorse; start and stay here.",
              "Sponsored Brands needs 3+ titles; lockscreen is a side experiment.",
              "Auto campaigns do research; manual campaigns do precision.",
              "Product targeting (competitor ASINs) is manual mode's second weapon.",
            ],
          },
          {
            id: "starter-structure",
            title: "A starter structure: three campaigns, $7 a day",
            body: [
              "Campaign one — auto discovery, $2/day: default bids slightly low, runs continuously as your keyword research engine. Campaign two — manual keyword, $3/day: 15–25 phrases from your KDP keyword work and the category's vocabulary, exact and phrase match. Campaign three — manual product targeting, $2/day: 10–20 ASINs of comparable books whose buyers are your buyers.",
              "Resist the urge to launch ten campaigns: small budgets spread thin produce no statistically meaningful data anywhere. Three campaigns at $7/day total generate interpretable numbers within two to three weeks on most books.",
              "Negative keywords are the unsung tool: from day one, add obvious mismatches (free, used, unrelated genres) and weekly, move spending-but-not-converting search terms to negatives. Most wasted ad budget in book campaigns exits through terms nobody negated.",
            ],
            bullets: [
              "Auto $2 + manual keywords $3 + product targeting $2 = $7/day starter.",
              "Few campaigns, enough budget each — data quality over coverage.",
              "Negate aggressively: 'free', wrong genres, spending non-converters.",
              "Two to three weeks before structural judgments.",
            ],
          },
          {
            id: "optimization-loop",
            title: "The weekly loop: harvest, negate, adjust",
            body: [
              "Once a week, fifteen minutes: open the search-term report. Harvest — search terms with sales move into the manual campaign as exact match with a slightly raised bid. Negate — terms with 15+ clicks and zero sales become negatives. Adjust — keywords above break-even ACOS get bids cut 20%; keywords well below it get bids raised 10% to buy more volume.",
              "Judge slowly. Attribution lags days, KU reads accrue for weeks, and book sales are low-volume events: a keyword with 8 clicks and no sale is not yet information. Decide on multi-week windows, never on yesterday.",
              "Scale what works and starve what does not: budget flows toward the campaign with the best post-halo economics. And remember the catalog effect — ads on book one of a linked series or a visible pen-name catalog earn read-through revenue no single-book ACOS captures. Advertising rewards exactly the catalog structure that publishing rewards.",
            ],
            bullets: [
              "Weekly: harvest converters, negate spenders, adjust bids ±10–20%.",
              "Multi-week judgment windows; low-volume data lies daily.",
              "Budget flows to post-halo winners.",
              "Series and catalogs make the same ACOS worth more.",
            ],
          },
        ],
        checklist: [
          "Listing ready: competitive cover, sales-copy description, 5–10 reviews, normal price.",
          "Break-even ACOS computed per format before launch.",
          "Three starter campaigns live: auto, manual keyword, product targeting.",
          "Starting bids set below computed click value.",
          "Obvious negative keywords added on day one.",
          "Weekly fifteen-minute loop scheduled: harvest, negate, adjust.",
          "Judgments made on 2–3 week windows, royalty-based not unit-based.",
          "KU page-read revenue and organic halo included in profitability review.",
        ],
        faq: [
          {
            question: "How much should I spend on Amazon Ads as a new author?",
            answer:
              "$5–$10 per day across two or three campaigns is enough to generate real data within weeks without material risk. Scale only what the search-term report proves; total spend should follow evidence, not ambition.",
          },
          {
            question: "What is a good ACOS for books?",
            answer:
              "Relative to your break-even, which is royalty ÷ price: roughly 68% for a $4.99/70% ebook, near 30% for typical paperbacks. Campaigns under break-even are profitable immediately; slightly above can still win once KU reads and organic halo are counted.",
          },
          {
            question: "Why do my ads get impressions but no clicks?",
            answer:
              "The ad shows but loses to neighbors — almost always a thumbnail or relevance problem. Check the cover against the books beside it in search results, and tighten targeting toward queries where your book plausibly belongs on the page.",
          },
          {
            question: "Why clicks but no sales?",
            answer:
              "The ad works and the product page does not. Description, reviews, price and look-inside carry conversion; fix them before raising spend. Also verify the clicked terms actually match the book — misleading relevance produces curious clicks, not buyers.",
          },
          {
            question: "Do Amazon Ads work for Kindle Unlimited books?",
            answer:
              "Often better than for purchase-only books: a click that becomes a borrow earns page-read revenue that ACOS does not display, so KU-enrolled books can sustainably run at higher visible ACOS. Estimate KU revenue per borrow when you review profitability.",
          },
        ],
        sources: [
          { label: "Amazon KDP: advertising for KDP books", href: "https://kdp.amazon.com/en_US/help/topic/G201499010" },
        ],
      },
      fr: {
        slug: "publicite-amazon-ads-livres-kdp-guide",
        title: "Amazon Ads pour les livres KDP : un système débutant qui ne brûle pas la redevance",
        description:
          "Lancer des publicités Amazon rentables pour des livres auto-édités : quand un livre est prêt, le calcul d'ACOS au seuil de rentabilité, les trois types de campagnes, une structure de départ avec de vrais budgets et la boucle d'optimisation hebdomadaire.",
        keywords: [
          "publicité Amazon livres",
          "Amazon Ads KDP",
          "sponsored products livres",
          "ACOS publicité livre",
          "guide publicité KDP",
          "marketing livre Amazon",
          "budget publicité livre",
          "Amazon PPC auteurs",
        ],
        category: "Publicité",
        intro: [
          "Amazon Ads est la seule plateforme publicitaire où l'acheteur de livres se trouve déjà dans la librairie, carte en main. Cette proximité en fait le canal à plus forte intention dont dispose un éditeur indépendant — et aussi l'endroit le plus facile pour déchiqueter discrètement des redevances minces, car l'enchère se moque que votre broché ne rapporte que 3,70 €.",
          "Les éditeurs pour qui la publicité fonctionne la traitent comme de l'arithmétique avec boucle de rétroaction : connaître son ACOS de seuil avant la première campagne, structurer les campagnes pour que les données enseignent quelque chose, et récolter ce qui convertit. Ceux qui perdent la traitent comme un bouton d'espoir.",
          "Ce guide donne la checklist de préparation, les maths, une structure de campagne de départ avec de vrais budgets, et la boucle hebdomadaire — dimensionnés pour des livres indépendants rapportant 2 à 7 € par vente, pas pour des marques financées.",
        ],
        sections: [
          {
            id: "preparation",
            title: "Quand un livre est prêt pour la publicité (et quand elle subventionne une fiche faible)",
            body: [
              "La publicité multiplie le taux de conversion de la fiche. Une page qui convertit 10 % des visiteurs tire dix ventes de cent clics payés ; une page qui convertit 1 % en tire une. Même dépense, écart de un à dix — c'est pourquoi promouvoir un livre non prêt revient à donner de l'argent à Amazon.",
              "Être prêt signifie : une couverture compétitive face au top 20 de la catégorie en taille vignette, une description structurée comme un texte de vente, au moins 5 à 10 avis honnêtes, et un prix dans la fourchette normale de la catégorie. Chaque élément faible taxe chaque clic acheté.",
              "La bonne nouvelle : la publicité sur un livre prêt produit un second dividende. Les ventes payées améliorent le classement organique, qui produit des ventes organiques que la publicité n'a jamais payées. Ce halo organique est ce qui rend globalement rentables des campagnes moyennes.",
            ],
            bullets: [
              "La publicité multiplie la conversion ; elle ne peut pas la créer.",
              "Prêt = couverture niveau vignette, description vendeuse, 5–10 avis, prix normal.",
              "Les ventes payées soulèvent le classement organique — le halo décide souvent de la rentabilité.",
              "Réparez la fiche d'abord ; c'est l'optimisation la moins chère.",
            ],
          },
          {
            id: "maths-acos",
            title: "Les maths de l'ACOS : connaître son seuil avant de dépenser un centime",
            body: [
              "L'ACOS (Advertising Cost of Sales) est la dépense publicitaire divisée par le chiffre d'affaires attribué aux publicités. Votre ACOS de seuil est la redevance divisée par le prix : un ebook à 4,99 rapportant 3,40 est à l'équilibre à 68 % ; un broché à 12,99 rapportant 4,10 l'est à 32 %. Sous le seuil, la publicité imprime de l'argent ; au-dessus, elle consomme la redevance.",
              "Deux corrections rendent ce calcul simple honnête. Les pages lues Kindle Unlimited attribuées aux clics ajoutent un revenu invisible — les livres très lus en KU peuvent tourner rentablement au-dessus de leur seuil visible. Et le halo organique fait qu'une campagne légèrement au-dessus du seuil peut quand même accroître le profit total. Commencez strict, assouplissez avec des preuves.",
              "Le dimensionnement des enchères en découle : avec 3,40 de redevance et 10 % de conversion, un clic vaut 0,34. Des enchères de départ de 0,30–0,45 pour les ebooks et 0,40–0,60 pour les brochés à plus forte redevance sont des défauts sains, à ajuster avec des données, pas au ressenti.",
            ],
            bullets: [
              "ACOS de seuil = redevance ÷ prix. Calculez-le par format.",
              "Lectures KU et halo organique justifient un léger dépassement — preuves à l'appui.",
              "Valeur du clic = redevance × taux de conversion ; enchérissez en dessous.",
              "Enchères de départ : 0,30–0,45 ebooks, 0,40–0,60 brochés.",
            ],
          },
          {
            id: "types-campagnes",
            title: "Les trois types de campagnes et le seul dont un débutant a besoin",
            body: [
              "Sponsored Products — les annonces dans les résultats de recherche et sur les pages produit — est là où les livres gagnent. Il porte l'intention de recherche de l'acheteur, offre le ciblage par mots-clés et par produits, et propose les modes automatique et manuel. C'est 90 % de la publicité du livre indépendant.",
              "Sponsored Brands (la bannière multi-livres) exige au moins trois titres et récompense séries et catalogues ; revenez-y quand vous les aurez. Les annonces d'écran de veille Kindle sont bon marché mais à faible intention — une expérience occasionnelle, jamais l'ossature.",
              "Au sein de Sponsored Products, les deux modes de ciblage se partagent le travail : les campagnes automatiques laissent Amazon extraire des termes de recherche de vos métadonnées (recherche), et les campagnes manuelles enchérissent sur les mots-clés et ASIN concurrents que vous choisissez (précision). La structure de départ utilise les deux délibérément.",
            ],
            bullets: [
              "Sponsored Products = le cheval de trait indépendant ; commencez et restez là.",
              "Sponsored Brands exige 3+ titres ; l'écran de veille reste une expérience annexe.",
              "Les campagnes auto font la recherche ; les manuelles font la précision.",
              "Le ciblage produit (ASIN concurrents) est la seconde arme du mode manuel.",
            ],
          },
          {
            id: "structure-depart",
            title: "Une structure de départ : trois campagnes, 7 € par jour",
            body: [
              "Campagne un — découverte automatique, 2 €/jour : enchères par défaut légèrement basses, tourne en continu comme moteur de recherche de mots-clés. Campagne deux — mots-clés manuels, 3 €/jour : 15 à 25 expressions issues de votre travail de mots-clés KDP et du vocabulaire de la catégorie, en correspondance exacte et expression. Campagne trois — ciblage produit manuel, 2 €/jour : 10 à 20 ASIN de livres comparables dont les acheteurs sont vos acheteurs.",
              "Résistez à l'envie de lancer dix campagnes : de petits budgets éparpillés ne produisent de données significatives nulle part. Trois campagnes à 7 €/jour au total génèrent des chiffres interprétables en deux à trois semaines sur la plupart des livres.",
              "Les mots-clés négatifs sont l'outil méconnu : dès le premier jour, ajoutez les inadéquations évidentes (gratuit, occasion, genres sans rapport) et, chaque semaine, basculez en négatif les termes qui dépensent sans convertir. L'essentiel du budget gaspillé en publicité de livre s'échappe par des termes que personne n'a négativés.",
            ],
            bullets: [
              "Auto 2 € + mots-clés manuels 3 € + ciblage produit 2 € = 7 €/jour de départ.",
              "Peu de campagnes, assez de budget chacune — qualité des données avant couverture.",
              "Négativez agressivement : « gratuit », mauvais genres, dépensiers non convertisseurs.",
              "Deux à trois semaines avant tout jugement structurel.",
            ],
          },
          {
            id: "boucle-optimisation",
            title: "La boucle hebdomadaire : récolter, négativer, ajuster",
            body: [
              "Une fois par semaine, quinze minutes : ouvrez le rapport des termes de recherche. Récoltez — les termes avec ventes rejoignent la campagne manuelle en correspondance exacte avec une enchère légèrement relevée. Négativez — les termes à 15+ clics et zéro vente deviennent négatifs. Ajustez — les mots-clés au-dessus de l'ACOS de seuil voient leur enchère réduite de 20 % ; ceux nettement en dessous gagnent 10 % pour acheter plus de volume.",
              "Jugez lentement. L'attribution traîne plusieurs jours, les lectures KU s'accumulent pendant des semaines, et les ventes de livres sont des événements rares : un mot-clé à 8 clics sans vente n'est pas encore une information. Décidez sur des fenêtres de plusieurs semaines, jamais sur hier.",
              "Faites grossir ce qui marche et affamez le reste : le budget coule vers la campagne à la meilleure économie après halo. Et souvenez-vous de l'effet catalogue — la publicité sur le tome un d'une série liée ou sur un catalogue de nom de plume visible rapporte un revenu d'enchaînement qu'aucun ACOS de livre isolé ne capture. La publicité récompense exactement la structure de catalogue que l'édition récompense.",
            ],
            bullets: [
              "Hebdomadaire : récolter les convertisseurs, négativer les dépensiers, ajuster ±10–20 %.",
              "Fenêtres de jugement multi-semaines ; les données à faible volume mentent au quotidien.",
              "Le budget coule vers les gagnants après halo.",
              "Séries et catalogues rendent le même ACOS plus rentable.",
            ],
          },
        ],
        checklist: [
          "Fiche prête : couverture compétitive, description vendeuse, 5–10 avis, prix normal.",
          "ACOS de seuil calculé par format avant lancement.",
          "Trois campagnes de départ actives : auto, mots-clés manuels, ciblage produit.",
          "Enchères de départ sous la valeur de clic calculée.",
          "Mots-clés négatifs évidents ajoutés dès le premier jour.",
          "Boucle hebdomadaire de quinze minutes planifiée : récolter, négativer, ajuster.",
          "Jugements sur des fenêtres de 2–3 semaines, en redevance et non en unités.",
          "Revenu des pages KU et halo organique inclus dans la revue de rentabilité.",
        ],
        faq: [
          {
            question: "Combien dépenser en Amazon Ads quand on débute ?",
            answer:
              "5 à 10 € par jour répartis sur deux ou trois campagnes suffisent pour générer de vraies données en quelques semaines sans risque matériel. N'augmentez que ce que le rapport des termes de recherche prouve ; la dépense totale suit les preuves, pas l'ambition.",
          },
          {
            question: "Qu'est-ce qu'un bon ACOS pour un livre ?",
            answer:
              "Relatif à votre seuil, qui vaut redevance ÷ prix : environ 68 % pour un ebook à 4,99 au plan 70 %, près de 30 % pour un broché typique. Sous le seuil, la campagne est immédiatement rentable ; légèrement au-dessus, elle peut encore gagner une fois comptés les lectures KU et le halo organique.",
          },
          {
            question: "Pourquoi mes annonces ont-elles des impressions mais pas de clics ?",
            answer:
              "L'annonce s'affiche mais perd contre ses voisines — presque toujours un problème de vignette ou de pertinence. Comparez la couverture aux livres affichés à côté dans les résultats, et resserrez le ciblage vers les requêtes où votre livre a sa place plausible sur la page.",
          },
          {
            question: "Des clics mais pas de ventes ?",
            answer:
              "L'annonce fonctionne et la page produit non. Description, avis, prix et extrait portent la conversion ; corrigez-les avant d'augmenter la dépense. Vérifiez aussi que les termes cliqués correspondent vraiment au livre — une pertinence trompeuse produit des curieux, pas des acheteurs.",
          },
          {
            question: "La publicité Amazon fonctionne-t-elle pour les livres Kindle Unlimited ?",
            answer:
              "Souvent mieux que pour les livres à l'achat seul : un clic devenu emprunt rapporte un revenu de pages lues que l'ACOS n'affiche pas, donc un livre inscrit à KU peut tourner durablement à un ACOS visible plus élevé. Estimez le revenu KU par emprunt dans vos revues de rentabilité.",
          },
        ],
      },
      it: {
        slug: "pubblicita-amazon-ads-libri-kdp-guida",
        title: "Amazon Ads per i libri KDP: un sistema per principianti che non brucia le royalty",
        description:
          "Lanciare pubblicità Amazon redditizie per libri autopubblicati: quando un libro è pronto, il calcolo dell'ACOS di pareggio, i tre tipi di campagne, una struttura di partenza con budget reali e il ciclo di ottimizzazione settimanale.",
        keywords: [
          "pubblicità Amazon libri",
          "Amazon Ads KDP",
          "sponsored products libri",
          "ACOS pubblicità libro",
          "guida pubblicità KDP",
          "marketing libro Amazon",
          "budget pubblicità libro",
          "Amazon PPC autori",
        ],
        category: "Pubblicità",
        intro: [
          "Amazon Ads è l'unica piattaforma pubblicitaria in cui l'acquirente di libri si trova già in libreria, carta in mano. Quella prossimità ne fa il canale a più alta intenzione di cui dispone un editore indipendente — e anche il posto più facile per sminuzzare in silenzio royalty sottili, perché l'asta non si cura che il vostro cartaceo renda solo 3,70 €.",
          "Gli editori per cui la pubblicità funziona la trattano come aritmetica con un ciclo di feedback: conoscere il proprio ACOS di pareggio prima della prima campagna, strutturare le campagne perché i dati insegnino qualcosa, e raccogliere ciò che converte. Chi perde la tratta come un pulsante della speranza.",
          "Questa guida vi dà la checklist di preparazione, i conti, una struttura di campagna di partenza con budget reali, e il ciclo settimanale — dimensionati per libri indipendenti che rendono 2-7 € a vendita, non per marchi finanziati.",
        ],
        sections: [
          {
            id: "preparazione",
            title: "Quando un libro è pronto per la pubblicità (e quando essa sovvenziona una scheda debole)",
            body: [
              "La pubblicità moltiplica il tasso di conversione della scheda. Una pagina che converte il 10 % dei visitatori ricava dieci vendite da cento clic pagati; una pagina che converte l'1 % ne ricava una. Stessa spesa, scarto di uno a dieci — ecco perché promuovere un libro non pronto equivale a donare denaro ad Amazon.",
              "Essere pronti significa: una copertina competitiva contro la top 20 della categoria in formato miniatura, una descrizione strutturata come testo di vendita, almeno 5-10 recensioni oneste, e un prezzo nella fascia normale della categoria. Ogni elemento debole tassa ogni clic acquistato.",
              "La buona notizia: la pubblicità su un libro pronto produce un secondo dividendo. Le vendite pagate migliorano il posizionamento organico, che produce vendite organiche mai pagate dalla pubblicità. Quell'alone organico è ciò che rende globalmente redditizie campagne medie.",
            ],
            bullets: [
              "La pubblicità moltiplica la conversione; non può crearla.",
              "Pronto = copertina da miniatura, descrizione che vende, 5-10 recensioni, prezzo normale.",
              "Le vendite pagate sollevano il posizionamento organico — l'alone spesso decide la redditività.",
              "Sistemate prima la scheda; è l'ottimizzazione meno costosa.",
            ],
          },
          {
            id: "conti-acos",
            title: "I conti dell'ACOS: conoscere il pareggio prima di spendere un centesimo",
            body: [
              "L'ACOS (Advertising Cost of Sales) è la spesa pubblicitaria divisa per i ricavi attribuiti alle pubblicità. Il vostro ACOS di pareggio è la royalty divisa per il prezzo: un ebook a 4,99 che rende 3,40 è in pareggio al 68 %; un cartaceo a 12,99 che rende 4,10 lo è al 32 %. Sotto il pareggio, la pubblicità stampa denaro; sopra, consuma la royalty.",
              "Due correzioni rendono onesto questo conto semplice. Le pagine lette Kindle Unlimited attribuite ai clic aggiungono ricavi invisibili — i libri molto letti in KU possono girare con profitto sopra il loro pareggio visibile. E l'alone organico fa sì che una campagna leggermente sopra il pareggio possa comunque accrescere il profitto totale. Partite rigidi, allentate con le prove.",
              "Il dimensionamento delle offerte ne discende: con 3,40 di royalty e 10 % di conversione, un clic vale 0,34. Offerte iniziali di 0,30-0,45 per gli ebook e 0,40-0,60 per i cartacei a royalty più alta sono default sani, da regolare con dati, non a sensazione.",
            ],
            bullets: [
              "ACOS di pareggio = royalty ÷ prezzo. Calcolatelo per formato.",
              "Letture KU e alone organico giustificano un lieve sforamento — con le prove.",
              "Valore del clic = royalty × tasso di conversione; offrite al di sotto.",
              "Offerte iniziali: 0,30-0,45 ebook, 0,40-0,60 cartacei.",
            ],
          },
          {
            id: "tipi-campagne",
            title: "I tre tipi di campagne e l'unico che serve a un principiante",
            body: [
              "Sponsored Products — gli annunci nei risultati di ricerca e sulle pagine prodotto — è dove i libri vincono. Porta l'intenzione di ricerca dell'acquirente, offre il targeting per parole chiave e per prodotti, e propone le modalità automatica e manuale. È il 90 % della pubblicità del libro indipendente.",
              "Sponsored Brands (il banner multi-libro) esige almeno tre titoli e premia serie e cataloghi; tornateci quando li avrete. Gli annunci sulla schermata di blocco Kindle sono economici ma a bassa intenzione — un esperimento occasionale, mai l'ossatura.",
              "Dentro Sponsored Products, le due modalità di targeting si dividono il lavoro: le campagne automatiche lasciano che Amazon estragga termini di ricerca dai vostri metadati (ricerca), e le manuali puntano sulle parole chiave e sugli ASIN concorrenti che scegliete voi (precisione). La struttura di partenza le usa entrambe deliberatamente.",
            ],
            bullets: [
              "Sponsored Products = il cavallo da tiro indipendente; partite e restate lì.",
              "Sponsored Brands esige 3+ titoli; la schermata di blocco resta un esperimento.",
              "Le campagne auto fanno la ricerca; le manuali la precisione.",
              "Il targeting prodotto (ASIN concorrenti) è la seconda arma della modalità manuale.",
            ],
          },
          {
            id: "struttura-partenza",
            title: "Una struttura di partenza: tre campagne, 7 € al giorno",
            body: [
              "Campagna uno — scoperta automatica, 2 €/giorno: offerte di default leggermente basse, gira in continuo come motore di ricerca di parole chiave. Campagna due — parole chiave manuali, 3 €/giorno: 15-25 espressioni dal vostro lavoro di parole chiave KDP e dal vocabolario della categoria, in corrispondenza esatta e a frase. Campagna tre — targeting prodotto manuale, 2 €/giorno: 10-20 ASIN di libri comparabili i cui acquirenti sono i vostri.",
              "Resistete alla tentazione di lanciare dieci campagne: piccoli budget sparpagliati non producono dati significativi da nessuna parte. Tre campagne a 7 €/giorno totali generano numeri interpretabili in due-tre settimane sulla maggior parte dei libri.",
              "Le parole chiave negative sono lo strumento misconosciuto: dal primo giorno, aggiungete le incongruenze ovvie (gratis, usato, generi estranei) e, ogni settimana, spostate in negativo i termini che spendono senza convertire. La maggior parte del budget sprecato nelle campagne di libri esce da termini che nessuno ha negato.",
            ],
            bullets: [
              "Auto 2 € + parole chiave manuali 3 € + targeting prodotto 2 € = 7 €/giorno di partenza.",
              "Poche campagne, budget sufficiente ciascuna — qualità dei dati prima della copertura.",
              "Negate aggressivamente: « gratis », generi sbagliati, spenditori che non convertono.",
              "Due-tre settimane prima di ogni giudizio strutturale.",
            ],
          },
          {
            id: "ciclo-ottimizzazione",
            title: "Il ciclo settimanale: raccogliere, negare, regolare",
            body: [
              "Una volta a settimana, quindici minuti: aprite il rapporto dei termini di ricerca. Raccogliete — i termini con vendite passano nella campagna manuale in corrispondenza esatta con offerta leggermente alzata. Negate — i termini con 15+ clic e zero vendite diventano negativi. Regolate — le parole chiave sopra l'ACOS di pareggio perdono il 20 % di offerta; quelle nettamente sotto guadagnano il 10 % per comprare più volume.",
              "Giudicate lentamente. L'attribuzione ritarda di giorni, le letture KU si accumulano per settimane, e le vendite di libri sono eventi rari: una parola chiave con 8 clic senza vendita non è ancora un'informazione. Decidete su finestre di più settimane, mai su ieri.",
              "Fate crescere ciò che funziona e affamate il resto: il budget scorre verso la campagna con la migliore economia dopo alone. E ricordate l'effetto catalogo — la pubblicità sul primo volume di una serie collegata o su un catalogo di pseudonimo visibile rende ricavi a catena che nessun ACOS di libro isolato cattura. La pubblicità premia esattamente la struttura di catalogo che l'editoria premia.",
            ],
            bullets: [
              "Settimanale: raccogliere i convertitori, negare gli spenditori, regolare ±10-20 %.",
              "Finestre di giudizio multi-settimana; i dati a basso volume mentono ogni giorno.",
              "Il budget scorre verso i vincenti dopo alone.",
              "Serie e cataloghi rendono lo stesso ACOS più redditizio.",
            ],
          },
        ],
        checklist: [
          "Scheda pronta: copertina competitiva, descrizione che vende, 5-10 recensioni, prezzo normale.",
          "ACOS di pareggio calcolato per formato prima del lancio.",
          "Tre campagne di partenza attive: auto, parole chiave manuali, targeting prodotto.",
          "Offerte iniziali sotto il valore di clic calcolato.",
          "Parole chiave negative ovvie aggiunte dal primo giorno.",
          "Ciclo settimanale di quindici minuti pianificato: raccogliere, negare, regolare.",
          "Giudizi su finestre di 2-3 settimane, in royalty e non in unità.",
          "Ricavi delle pagine KU e alone organico inclusi nella revisione di redditività.",
        ],
        faq: [
          {
            question: "Quanto spendere in Amazon Ads quando si inizia?",
            answer:
              "5-10 € al giorno su due o tre campagne bastano per generare dati veri in qualche settimana senza rischio materiale. Aumentate solo ciò che il rapporto dei termini di ricerca dimostra; la spesa totale segue le prove, non l'ambizione.",
          },
          {
            question: "Qual è un buon ACOS per un libro?",
            answer:
              "Relativo al vostro pareggio, che vale royalty ÷ prezzo: circa il 68 % per un ebook a 4,99 al piano 70 %, vicino al 30 % per un cartaceo tipico. Sotto il pareggio, la campagna è subito redditizia; leggermente sopra può ancora vincere una volta contati letture KU e alone organico.",
          },
          {
            question: "Perché i miei annunci hanno impressioni ma niente clic?",
            answer:
              "L'annuncio appare ma perde contro i vicini — quasi sempre un problema di miniatura o di pertinenza. Confrontate la copertina con i libri mostrati accanto nei risultati, e restringete il targeting verso le ricerche dove il vostro libro ha un posto plausibile sulla pagina.",
          },
          {
            question: "Clic ma niente vendite?",
            answer:
              "L'annuncio funziona e la pagina prodotto no. Descrizione, recensioni, prezzo ed estratto portano la conversione; sistemateli prima di aumentare la spesa. Verificate anche che i termini cliccati corrispondano davvero al libro — una pertinenza ingannevole produce curiosi, non acquirenti.",
          },
          {
            question: "La pubblicità Amazon funziona per i libri Kindle Unlimited?",
            answer:
              "Spesso meglio che per i libri solo all'acquisto: un clic diventato prestito rende ricavi di pagine lette che l'ACOS non mostra, quindi un libro iscritto a KU può girare durevolmente a un ACOS visibile più alto. Stimate i ricavi KU per prestito nelle vostre revisioni di redditività.",
          },
        ],
      },
      de: {
        slug: "amazon-ads-fuer-kdp-buecher-leitfaden",
        title: "Amazon Ads für KDP-Bücher: ein Einsteigersystem, das die Tantieme nicht verbrennt",
        description:
          "Profitable Amazon-Anzeigen für selbstveröffentlichte Bücher: wann ein Buch bereit ist, die Break-even-ACOS-Rechnung, die drei Kampagnentypen, eine Startstruktur mit echten Budgets und die wöchentliche Optimierungsschleife.",
        keywords: [
          "Amazon Ads für Bücher",
          "Amazon Werbung KDP",
          "Sponsored Products Bücher",
          "ACOS Buchwerbung",
          "KDP Werbung Leitfaden",
          "Amazon Buchmarketing",
          "Buch Werbebudget",
          "Amazon PPC Autoren",
        ],
        category: "Werbung",
        intro: [
          "Amazon Ads ist die einzige Werbeplattform, auf der Buchkäufer bereits mit der Karte in der Hand im Buchladen stehen. Diese Nähe macht sie zum Kanal mit der höchsten Kaufabsicht, den ein Indie-Verleger hat — und zugleich zum leichtesten Ort, dünne Tantiemen leise zu schreddern, denn die Auktion kümmert es nicht, dass Ihr Taschenbuch nur 3,70 € netto bringt.",
          "Verleger, bei denen Anzeigen funktionieren, behandeln sie als Arithmetik mit Feedback-Schleife: den Break-even-ACOS vor der ersten Kampagne kennen, Kampagnen so strukturieren, dass die Daten etwas lehren, und ernten, was konvertiert. Wer verliert, behandelt Anzeigen als Hoffnungsknopf.",
          "Dieser Leitfaden liefert die Bereitschafts-Checkliste, die Rechnung, eine Startkampagnenstruktur mit echten Budgets und die Wochenschleife — dimensioniert für Indie-Bücher mit 2-7 € pro Verkauf, nicht für finanzierte Marken.",
        ],
        sections: [
          {
            id: "bereitschaft",
            title: "Wann ein Buch anzeigenreif ist (und wann Anzeigen nur eine schwache Seite subventionieren)",
            body: [
              "Anzeigen multiplizieren die Konversionsrate der Produktseite. Eine Seite, die 10 % der Besucher konvertiert, holt zehn Verkäufe aus hundert bezahlten Klicks; eine mit 1 % holt einen. Gleiche Ausgabe, zehnfacher Unterschied — deshalb ist Werbung für ein unfertiges Buch eine Spende an Amazon.",
              "Bereitschaft heißt: ein Cover, das gegen die Top 20 der Kategorie in Thumbnail-Größe besteht, eine als Verkaufstext strukturierte Beschreibung, mindestens 5-10 ehrliche Rezensionen und ein Preis im Normalbereich der Kategorie. Jedes schwache Element besteuert jeden gekauften Klick.",
              "Die gute Nachricht: Anzeigen auf einem bereiten Buch zahlen eine zweite Dividende. Bezahlte Verkäufe verbessern das organische Ranking, das organische Verkäufe produziert, die die Anzeigen nie bezahlt haben. Dieser organische Halo macht mittelmäßig laufende Kampagnen insgesamt lohnend.",
            ],
            bullets: [
              "Anzeigen multiplizieren Konversion; sie können sie nicht erschaffen.",
              "Bereit = Thumbnail-taugliches Cover, Verkaufstext-Beschreibung, 5-10 Rezensionen, normaler Preis.",
              "Bezahlte Verkäufe heben das organische Ranking — der Halo entscheidet oft die Gesamtprofitabilität.",
              "Erst die Produktseite reparieren; das ist die günstigste Optimierung.",
            ],
          },
          {
            id: "acos-rechnung",
            title: "Die ACOS-Rechnung: den Break-even kennen, bevor ein Cent fließt",
            body: [
              "ACOS (Advertising Cost of Sales) ist Werbeausgabe geteilt durch anzeigenzugeordneten Umsatz. Ihr Break-even-ACOS ist Tantieme geteilt durch Listenpreis: Ein 4,99-Ebook mit 3,40 Tantieme liegt bei 68 %; ein 12,99-Taschenbuch mit 4,10 bei 32 %. Unter dem Break-even drucken Anzeigen Geld; darüber fressen sie die Tantieme.",
              "Zwei Korrekturen machen die einfache Rechnung ehrlich. Kindle-Unlimited-Seitenlektüren aus Anzeigenklicks bringen unsichtbaren Umsatz — KU-starke Bücher können profitabel über ihrem sichtbaren Break-even laufen. Und der organische Halo bedeutet, dass eine Kampagne knapp über dem Break-even den Gesamtgewinn trotzdem steigern kann. Streng starten, mit Belegen lockern.",
              "Daraus folgt die Gebotsgröße: Bei 3,40 Tantieme und 10 % Konversionsrate ist ein Klick 0,34 wert. Startgebote von 0,30-0,45 für Ebooks und 0,40-0,60 für tantiemenstärkere Taschenbücher sind vernünftige Defaults — anzupassen mit Daten, nicht nach Gefühl.",
            ],
            bullets: [
              "Break-even-ACOS = Tantieme ÷ Listenpreis. Pro Format berechnen.",
              "KU-Lektüren und organischer Halo rechtfertigen moderates Überschießen — mit Belegen.",
              "Klickwert = Tantieme × Konversionsrate; darunter bieten.",
              "Startgebote: 0,30-0,45 Ebooks, 0,40-0,60 Taschenbücher.",
            ],
          },
          {
            id: "kampagnentypen",
            title: "Die drei Kampagnentypen und der einzige, den Einsteiger brauchen",
            body: [
              "Sponsored Products — Anzeigen in Suchergebnissen und auf Produktseiten — ist der Ort, an dem Bücher gewinnen. Es trägt die Suchabsicht des Käufers, bietet Keyword- und Produkt-Targeting und unterstützt automatische wie manuelle Modi. Das sind 90 % der Indie-Buchwerbung.",
              "Sponsored Brands (das Banner mit mehreren Büchern) erfordert drei oder mehr Titel und belohnt Serien und Kataloge; kommen Sie darauf zurück, wenn Sie sie haben. Sperrbildschirm-Anzeigen (Kindle-Geräte) sind billig, aber absichtsarm — ein gelegentliches Experiment, nie das Rückgrat.",
              "Innerhalb von Sponsored Products teilen sich die zwei Targeting-Modi die Arbeit: Automatische Kampagnen lassen Amazon Suchbegriffe aus Ihren Metadaten schürfen (Recherche), manuelle Kampagnen bieten auf die Keywords und Konkurrenz-ASINs, die Sie wählen (Präzision). Die Startstruktur nutzt beide gezielt.",
            ],
            bullets: [
              "Sponsored Products = das Indie-Arbeitspferd; hier starten und bleiben.",
              "Sponsored Brands braucht 3+ Titel; Sperrbildschirm bleibt ein Nebenexperiment.",
              "Auto-Kampagnen recherchieren; manuelle Kampagnen präzisieren.",
              "Produkt-Targeting (Konkurrenz-ASINs) ist die zweite Waffe des manuellen Modus.",
            ],
          },
          {
            id: "startstruktur",
            title: "Eine Startstruktur: drei Kampagnen, 7 € am Tag",
            body: [
              "Kampagne eins — Auto-Discovery, 2 €/Tag: Standardgebote leicht niedrig, läuft dauerhaft als Ihr Keyword-Recherche-Motor. Kampagne zwei — manuelle Keywords, 3 €/Tag: 15-25 Phrasen aus Ihrer KDP-Keyword-Arbeit und dem Vokabular der Kategorie, exakt und Phrase. Kampagne drei — manuelles Produkt-Targeting, 2 €/Tag: 10-20 ASINs vergleichbarer Bücher, deren Käufer Ihre Käufer sind.",
              "Widerstehen Sie dem Drang, zehn Kampagnen zu starten: Dünn verteilte Kleinbudgets produzieren nirgendwo statistisch belastbare Daten. Drei Kampagnen mit insgesamt 7 €/Tag erzeugen bei den meisten Büchern in zwei bis drei Wochen interpretierbare Zahlen.",
              "Negative Keywords sind das unterschätzte Werkzeug: Fügen Sie ab Tag eins offensichtliche Fehlgriffe hinzu (gratis, gebraucht, fremde Genres) und verschieben Sie wöchentlich Begriffe, die Geld ausgeben ohne zu konvertieren, in die Negativliste. Das meiste verschwendete Budget in Buchkampagnen entweicht durch Begriffe, die niemand negiert hat.",
            ],
            bullets: [
              "Auto 2 € + manuelle Keywords 3 € + Produkt-Targeting 2 € = 7 €/Tag Startpaket.",
              "Wenige Kampagnen, genug Budget pro Kampagne — Datenqualität vor Abdeckung.",
              "Aggressiv negieren: « gratis », falsche Genres, ausgebende Nichtkonvertierer.",
              "Zwei bis drei Wochen vor strukturellen Urteilen.",
            ],
          },
          {
            id: "optimierungsschleife",
            title: "Die Wochenschleife: ernten, negieren, justieren",
            body: [
              "Einmal pro Woche, fünfzehn Minuten: den Suchbegriffsbericht öffnen. Ernten — Suchbegriffe mit Verkäufen wandern als Exact Match mit leicht erhöhtem Gebot in die manuelle Kampagne. Negieren — Begriffe mit 15+ Klicks und null Verkäufen werden negativ. Justieren — Keywords über dem Break-even-ACOS bekommen 20 % weniger Gebot; Keywords deutlich darunter 10 % mehr, um Volumen zu kaufen.",
              "Urteilen Sie langsam. Die Attribution hinkt Tage hinterher, KU-Lektüren laufen Wochen auf, und Buchverkäufe sind seltene Ereignisse: Ein Keyword mit 8 Klicks ohne Verkauf ist noch keine Information. Entscheiden Sie über Mehrwochenfenster, nie über gestern.",
              "Skalieren Sie, was funktioniert, und hungern Sie den Rest aus: Das Budget fließt zur Kampagne mit der besten Nach-Halo-Ökonomie. Und denken Sie an den Katalogeffekt — Anzeigen auf Band eins einer verknüpften Serie oder einem sichtbaren Pseudonym-Katalog verdienen Durchlese-Umsatz, den kein Einzelbuch-ACOS erfasst. Werbung belohnt exakt die Katalogstruktur, die das Verlegen belohnt.",
            ],
            bullets: [
              "Wöchentlich: Konvertierer ernten, Ausgeber negieren, Gebote ±10-20 % justieren.",
              "Mehrwochenfenster fürs Urteil; Niedrigvolumen-Daten lügen täglich.",
              "Budget fließt zu den Nach-Halo-Gewinnern.",
              "Serien und Kataloge machen denselben ACOS wertvoller.",
            ],
          },
        ],
        checklist: [
          "Produktseite bereit: konkurrenzfähiges Cover, Verkaufstext-Beschreibung, 5-10 Rezensionen, normaler Preis.",
          "Break-even-ACOS pro Format vor dem Start berechnet.",
          "Drei Startkampagnen live: Auto, manuelle Keywords, Produkt-Targeting.",
          "Startgebote unter dem berechneten Klickwert.",
          "Offensichtliche negative Keywords ab Tag eins gesetzt.",
          "Wöchentliche Fünfzehn-Minuten-Schleife geplant: ernten, negieren, justieren.",
          "Urteile über 2-3-Wochen-Fenster, tantiemenbasiert statt stückbasiert.",
          "KU-Seitenumsatz und organischer Halo in der Profitabilitätsprüfung enthalten.",
        ],
        faq: [
          {
            question: "Wie viel sollte ich als neuer Autor für Amazon Ads ausgeben?",
            answer:
              "5-10 € pro Tag über zwei oder drei Kampagnen reichen, um binnen Wochen echte Daten ohne materielles Risiko zu erzeugen. Skalieren Sie nur, was der Suchbegriffsbericht beweist; die Gesamtausgabe folgt Belegen, nicht Ambition.",
          },
          {
            question: "Was ist ein guter ACOS für Bücher?",
            answer:
              "Relativ zu Ihrem Break-even, der Tantieme ÷ Preis beträgt: rund 68 % für ein 4,99-Ebook im 70-%-Plan, nahe 30 % für typische Taschenbücher. Kampagnen unter dem Break-even sind sofort profitabel; knapp darüber können sie noch gewinnen, sobald KU-Lektüren und organischer Halo eingerechnet sind.",
          },
          {
            question: "Warum bekommen meine Anzeigen Impressionen, aber keine Klicks?",
            answer:
              "Die Anzeige erscheint, verliert aber gegen die Nachbarn — fast immer ein Thumbnail- oder Relevanzproblem. Vergleichen Sie das Cover mit den Büchern daneben in den Suchergebnissen und schärfen Sie das Targeting auf Suchanfragen, bei denen Ihr Buch plausibel auf die Seite gehört.",
          },
          {
            question: "Warum Klicks, aber keine Verkäufe?",
            answer:
              "Die Anzeige funktioniert, die Produktseite nicht. Beschreibung, Rezensionen, Preis und Blick ins Buch tragen die Konversion; reparieren Sie sie, bevor Sie die Ausgaben erhöhen. Prüfen Sie auch, ob die geklickten Begriffe wirklich zum Buch passen — irreführende Relevanz produziert Neugierige, keine Käufer.",
          },
          {
            question: "Funktionieren Amazon Ads für Kindle-Unlimited-Bücher?",
            answer:
              "Oft besser als für reine Kaufbücher: Ein Klick, der zur Ausleihe wird, verdient Seitenumsatz, den der ACOS nicht anzeigt — KU-Bücher können daher nachhaltig mit höherem sichtbarem ACOS laufen. Schätzen Sie den KU-Umsatz pro Ausleihe bei der Profitabilitätsprüfung.",
          },
        ],
      },
    },
  },
  {
    key: "book-description-copywriting",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 12,
    accent: {
      start: "#fffaef",
      middle: "#ffe3c2",
      end: "#d8ccff",
    },
    translations: {
      en: {
        slug: "amazon-book-description-that-sells",
        title: "Writing an Amazon book description that sells: structure, first-line hooks and the formatting Amazon actually allows",
        description:
          "Turn the 4,000-character description field into your best salesperson: the above-the-fold hook, proven structures for fiction and nonfiction, allowed HTML formatting, keyword reality and an A/B iteration loop.",
        keywords: [
          "Amazon book description",
          "book description that sells",
          "book blurb writing",
          "KDP description HTML",
          "book description template",
          "sell more books Amazon",
          "book listing copywriting",
          "ebook description tips",
        ],
        category: "Copywriting",
        intro: [
          "Shoppers who reach your product page have already been sold the click by your cover and title. The description's job is narrower and harder: convert curiosity into a purchase in roughly eight seconds of skimming.",
          "Most indie descriptions fail the same way — they summarize the book like a homework assignment instead of selling the experience or the outcome. Publishers write back-cover copy; first-time indies write book reports.",
          "This guide treats the description as a sales page with a strict format: hook above the fold, persuasion in the middle, instruction at the end — plus the HTML formatting KDP actually renders and an iteration loop, since descriptions are editable forever.",
        ],
        sections: [
          {
            id: "above-fold",
            title: "The first two lines decide everything",
            body: [
              "Amazon truncates descriptions behind a 'Read more' link — on mobile, after roughly two to three lines. Whatever you want every visitor to read must live in the first 150–200 characters; everything below the fold is read only by people the opening already hooked.",
              "Lead with the strongest claim the book can honestly make: the transformation for nonfiction ('Stop losing evenings to meal planning — a complete system in 30 minutes a week'), the impossible situation for fiction ('She has 24 hours to betray her brother or bury her son'). Never lead with 'This book is about…' or, worse, 'In this book, you will learn…'.",
              "Write ten candidate first lines and pick the one that would stop you mid-scroll. This single sentence repays more iteration than the rest of the description combined.",
            ],
            bullets: [
              "~150–200 characters show before 'Read more' on mobile.",
              "Lead with transformation (nonfiction) or stakes (fiction), never with summary.",
              "Banned openers: 'This book is about', 'In this book you will learn'.",
              "Draft ten hooks; keep the scroll-stopper.",
            ],
          },
          {
            id: "nonfiction-structure",
            title: "A nonfiction structure that converts",
            body: [
              "After the hook, agitate briefly: name the reader's situation in their own words — two or three lines that make them feel diagnosed. Recognition, not persuasion, is what builds the trust that carries the rest of the page.",
              "Then the promise and the proof: what the book delivers and how. A short bulleted list of concrete outcomes ('the 5-step protocol for…', 'the exact template that…') does the heavy lifting; specificity sells what adjectives cannot. Include who the book is for — and, in one honest line, who it is not for, which paradoxically increases conversion by making the promise credible.",
              "Close with a direct call to action. 'Scroll up and click Buy Now to start tonight' feels redundant and measurably is not: descriptions are sales pages, and sales pages end with instructions.",
            ],
            bullets: [
              "Hook → agitate → promise → bulleted outcomes → who it's for → CTA.",
              "Bullets carry concrete deliverables, not chapter titles.",
              "One honest 'not for you if' line builds credibility.",
              "End with an explicit buy instruction.",
            ],
          },
          {
            id: "fiction-structure",
            title: "The fiction blurb: stakes, not synopsis",
            body: [
              "Fiction blurbs sell tension, not plot. The working structure: situation (protagonist and their world in one or two lines), disruption (the event that breaks it), stakes (what is lost if they fail) — and stop. Resolution belongs to the book; a blurb that resolves its own tension has nothing left to sell.",
              "Genre signaling matters as much as the story: vocabulary, rhythm and tropes tell the reader 'this is the kind of book you love'. A cozy mystery blurb and a dark thriller blurb describing the same plot should share almost no words.",
              "Keep it to 150–250 words, end on the sharpest question or threat, and read the final line aloud — it should feel like a held breath.",
            ],
            bullets: [
              "Situation → disruption → stakes → stop. Never resolve.",
              "Signal genre with vocabulary and rhythm, not labels.",
              "150–250 words; fiction blurbs are sprints.",
              "Final line = the held breath.",
            ],
          },
          {
            id: "formatting",
            title: "Formatting: the HTML KDP allows and how to use it",
            body: [
              "KDP descriptions support a small HTML set: bold, italic, line breaks, headline tags and ordered or unordered lists. Used well, formatting creates the skim path — a skimmer should get the pitch from bolded phrases alone.",
              "Practical rules: bold the hook or key promise lines, use short paragraphs (two to three lines) separated by real breaks, use a bulleted list for nonfiction outcomes, and never bold whole paragraphs — emphasis everywhere is emphasis nowhere. Enter the HTML in KDP's description field (or use a free description formatter tool) and always check the rendered result on the live page, on a phone.",
              "Avoid the spam aesthetics Amazon and readers both punish: ALL-CAPS sentences, emoji walls, fake review quotes, and unverifiable superlatives ('the best book ever written on…'). Restraint reads as confidence.",
            ],
            bullets: [
              "Allowed: <b>, <i>, <br>, <h4>–<h6>, <ul>/<ol> lists.",
              "Bold = skim path; a skimmer should get the pitch from bold alone.",
              "Short paragraphs, real breaks, one list maximum.",
              "No caps-lock, emoji walls or invented praise.",
            ],
          },
          {
            id: "keywords-iteration",
            title: "Keywords, honesty and the iteration loop",
            body: [
              "Write for buyers, not for the search index. A description that naturally names the topic, audience and genre covers the searchable vocabulary without stuffing — and keyword-stuffed descriptions read as exactly what they are, converting worse while risking policy attention for misleading metadata.",
              "Honesty is conversion strategy, not just compliance: every overpromise is prepaid in returns and one-star reviews, and Amazon's review system makes the description's promises a contract. The description should make the right readers click buy and the wrong readers move along — both outcomes are wins.",
              "Descriptions are editable forever, so treat yours as a living test: change one element (the hook, the bullet list, the CTA), watch two weeks of conversion against stable traffic, keep the winner. AI drafting helps generate variants — DraftToDone produces a structured description with every generated book precisely so this loop starts from a sales-page baseline instead of a blank field — but the discipline of single-variable testing is what compounds.",
            ],
            bullets: [
              "Natural topic/audience/genre vocabulary beats keyword stuffing.",
              "Overpromise = prepaid refunds and one-star reviews.",
              "Iterate: one element, two weeks, keep the winner.",
              "AI gives you variant drafts; testing gives you truth.",
            ],
          },
        ],
        checklist: [
          "Hook lives in the first 150–200 characters and would stop a scroll.",
          "Structure followed: nonfiction (hook-agitate-promise-bullets-CTA) or fiction (situation-disruption-stakes).",
          "Fiction blurb resolves nothing; nonfiction bullets name concrete outcomes.",
          "HTML formatting applied: bolded skim path, short paragraphs, one list.",
          "Rendered result checked on the live mobile page.",
          "No caps-lock, emoji walls, fake quotes or unverifiable superlatives.",
          "Every promise in the description is kept by the book.",
          "Iteration loop scheduled: one variable, two-week windows.",
        ],
        faq: [
          {
            question: "How long should an Amazon book description be?",
            answer:
              "Fiction: 150–250 words. Nonfiction: 200–350 words with a bulleted outcomes list. The field allows 4,000 characters, but conversion lives in the first two lines and the skim path — length beyond what persuades is dilution.",
          },
          {
            question: "Can I use HTML in my KDP book description?",
            answer:
              "Yes — a limited set: bold, italics, line breaks, small headings and lists. Enter it in the KDP description field and verify the rendered page afterwards; unsupported tags are stripped and can leave artifacts.",
          },
          {
            question: "Should I put keywords in my book description?",
            answer:
              "Write naturally for buyers; the topic, audience and genre vocabulary that belongs in good sales copy covers the search value. The seven KDP keyword slots are the dedicated indexing surface — stuffing the description trades conversion for nothing.",
          },
          {
            question: "Why does my book get visits but no sales?",
            answer:
              "Page traffic without conversion points at the on-page elements: description hook, reviews, price and look-inside. Rewrite the first two lines before anything else — most weak descriptions lose the sale above the fold.",
          },
          {
            question: "Can I change my description after publishing?",
            answer:
              "Yes, anytime, with changes live within hours. This makes the description the easiest high-impact element to A/B iterate: one element per change, two-week observation windows, keep the winners.",
          },
        ],
      },
      fr: {
        slug: "description-livre-amazon-qui-vend",
        title: "Écrire une description Amazon qui vend : structure, accroche et la mise en forme que KDP autorise vraiment",
        description:
          "Transformer le champ description de 4 000 caractères en meilleur vendeur du livre : l'accroche avant le « Lire plus », des structures éprouvées pour fiction et non-fiction, le HTML autorisé, la vérité sur les mots-clés et une boucle d'itération.",
        keywords: [
          "description livre Amazon",
          "description qui vend",
          "rédiger quatrième de couverture",
          "HTML description KDP",
          "modèle description livre",
          "vendre plus de livres Amazon",
          "copywriting fiche livre",
          "conseils description ebook",
        ],
        category: "Copywriting",
        intro: [
          "Le visiteur qui atteint votre page produit a déjà été convaincu de cliquer par votre couverture et votre titre. Le travail de la description est plus étroit et plus dur : convertir la curiosité en achat en à peu près huit secondes de survol.",
          "La plupart des descriptions indépendantes échouent de la même façon — elles résument le livre comme un devoir scolaire au lieu de vendre l'expérience ou le résultat. Les éditeurs écrivent des quatrièmes de couverture ; les débutants écrivent des fiches de lecture.",
          "Ce guide traite la description comme une page de vente au format strict : accroche avant le pli, persuasion au milieu, instruction à la fin — plus le HTML que KDP affiche réellement et une boucle d'itération, puisque la description reste modifiable à vie.",
        ],
        sections: [
          {
            id: "avant-le-pli",
            title: "Les deux premières lignes décident de tout",
            body: [
              "Amazon tronque la description derrière un lien « Lire plus » — sur mobile, après environ deux à trois lignes. Ce que chaque visiteur doit lire doit tenir dans les 150 à 200 premiers caractères ; tout ce qui suit le pli n'est lu que par ceux que l'ouverture a déjà accrochés.",
              "Ouvrez sur l'affirmation la plus forte que le livre peut honnêtement faire : la transformation pour la non-fiction (« Arrêtez de perdre vos soirées à planifier les repas — un système complet en 30 minutes par semaine »), la situation impossible pour la fiction (« Elle a 24 heures pour trahir son frère ou enterrer son fils »). N'ouvrez jamais sur « Ce livre parle de… » ni, pire, « Dans ce livre, vous apprendrez… ».",
              "Écrivez dix premières lignes candidates et gardez celle qui vous arrêterait en plein défilement. Cette phrase unique rémunère plus d'itérations que tout le reste de la description réuni.",
            ],
            bullets: [
              "~150–200 caractères visibles avant « Lire plus » sur mobile.",
              "Ouvrez sur la transformation (non-fiction) ou l'enjeu (fiction), jamais sur le résumé.",
              "Ouvertures interdites : « Ce livre parle de », « Dans ce livre vous apprendrez ».",
              "Dix accroches en brouillon ; gardez celle qui arrête le pouce.",
            ],
          },
          {
            id: "structure-non-fiction",
            title: "Une structure non-fiction qui convertit",
            body: [
              "Après l'accroche, remuez brièvement le problème : nommez la situation du lecteur avec ses propres mots — deux ou trois lignes qui lui donnent le sentiment d'être diagnostiqué. C'est la reconnaissance, pas la persuasion, qui construit la confiance portant le reste de la page.",
              "Puis la promesse et la preuve : ce que le livre livre, et comment. Une courte liste à puces de résultats concrets (« le protocole en 5 étapes pour… », « le modèle exact qui… ») fait le gros du travail ; la précision vend ce que les adjectifs ne peuvent pas. Dites pour qui est le livre — et, en une ligne honnête, pour qui il n'est pas, ce qui augmente paradoxalement la conversion en rendant la promesse crédible.",
              "Terminez par un appel à l'action direct. « Remontez et cliquez sur Acheter pour commencer ce soir » semble redondant et ne l'est mesurablement pas : une description est une page de vente, et une page de vente finit par une instruction.",
            ],
            bullets: [
              "Accroche → problème → promesse → puces de résultats → pour qui → appel à l'action.",
              "Les puces portent des livrables concrets, pas des titres de chapitres.",
              "Une ligne honnête « pas pour vous si » construit la crédibilité.",
              "Finissez par une instruction d'achat explicite.",
            ],
          },
          {
            id: "structure-fiction",
            title: "Le résumé de fiction : des enjeux, pas un synopsis",
            body: [
              "Un résumé de fiction vend de la tension, pas de l'intrigue. La structure qui marche : situation (le protagoniste et son monde en une ou deux lignes), rupture (l'événement qui brise tout), enjeux (ce qui est perdu en cas d'échec) — et stop. La résolution appartient au livre ; un résumé qui résout sa propre tension n'a plus rien à vendre.",
              "Le signal de genre compte autant que l'histoire : vocabulaire, rythme et codes disent au lecteur « voici le genre de livre que tu aimes ». Le résumé d'un cosy mystery et celui d'un thriller noir décrivant la même intrigue ne devraient presque partager aucun mot.",
              "Tenez en 150 à 250 mots, finissez sur la question ou la menace la plus aiguë, et lisez la dernière ligne à voix haute — elle doit faire l'effet d'un souffle retenu.",
            ],
            bullets: [
              "Situation → rupture → enjeux → stop. Ne résolvez jamais.",
              "Signalez le genre par le vocabulaire et le rythme, pas par des étiquettes.",
              "150–250 mots ; un résumé de fiction est un sprint.",
              "Dernière ligne = le souffle retenu.",
            ],
          },
          {
            id: "mise-en-forme",
            title: "Mise en forme : le HTML que KDP autorise et comment s'en servir",
            body: [
              "Les descriptions KDP acceptent un petit jeu de HTML : gras, italique, sauts de ligne, balises de titre et listes ordonnées ou à puces. Bien utilisée, la mise en forme crée le chemin de survol — un lecteur pressé doit recevoir l'argumentaire par les seules phrases en gras.",
              "Règles pratiques : mettez en gras l'accroche et les lignes de promesse clés, écrivez des paragraphes courts (deux à trois lignes) séparés par de vrais sauts, utilisez une liste à puces pour les résultats en non-fiction, et ne mettez jamais des paragraphes entiers en gras — l'emphase partout est l'emphase nulle part. Saisissez le HTML dans le champ KDP (ou via un formateur de description gratuit) et vérifiez toujours le rendu sur la vraie page, sur téléphone.",
              "Évitez l'esthétique de spam qu'Amazon et les lecteurs punissent ensemble : phrases EN MAJUSCULES, murs d'emojis, fausses citations d'avis et superlatifs invérifiables (« le meilleur livre jamais écrit sur… »). La retenue se lit comme de la confiance.",
            ],
            bullets: [
              "Autorisé : <b>, <i>, <br>, <h4>–<h6>, listes <ul>/<ol>.",
              "Le gras = chemin de survol ; l'argumentaire doit tenir dans le gras seul.",
              "Paragraphes courts, vrais sauts, une liste maximum.",
              "Ni majuscules hurlées, ni murs d'emojis, ni éloges inventés.",
            ],
          },
          {
            id: "mots-cles-iteration",
            title: "Mots-clés, honnêteté et boucle d'itération",
            body: [
              "Écrivez pour les acheteurs, pas pour l'index. Une description qui nomme naturellement le sujet, le public et le genre couvre le vocabulaire cherchable sans bourrage — et une description bourrée de mots-clés se lit comme ce qu'elle est : elle convertit moins en risquant l'attention des politiques sur les métadonnées trompeuses.",
              "L'honnêteté est une stratégie de conversion, pas seulement de la conformité : chaque sur-promesse se prépaie en retours et en avis une étoile, et le système d'avis d'Amazon fait des promesses de la description un contrat. La description doit faire acheter les bons lecteurs et passer leur chemin aux mauvais — les deux issues sont des victoires.",
              "La description est modifiable à vie : traitez la vôtre comme un test vivant — changez un élément (l'accroche, la liste, l'appel à l'action), observez deux semaines de conversion à trafic stable, gardez le gagnant. La rédaction IA aide à générer des variantes — DraftToDone produit une description structurée avec chaque livre généré précisément pour que cette boucle parte d'une base de page de vente plutôt que d'un champ vide — mais c'est la discipline du test à variable unique qui compose les gains.",
            ],
            bullets: [
              "Le vocabulaire naturel sujet/public/genre bat le bourrage de mots-clés.",
              "Sur-promettre = remboursements et avis une étoile prépayés.",
              "Itérez : un élément, deux semaines, gardez le gagnant.",
              "L'IA donne des variantes ; le test donne la vérité.",
            ],
          },
        ],
        checklist: [
          "L'accroche tient dans les 150–200 premiers caractères et arrêterait un défilement.",
          "Structure suivie : non-fiction (accroche-problème-promesse-puces-CTA) ou fiction (situation-rupture-enjeux).",
          "Le résumé de fiction ne résout rien ; les puces de non-fiction nomment des résultats concrets.",
          "Mise en forme HTML appliquée : chemin de survol en gras, paragraphes courts, une liste.",
          "Rendu vérifié sur la vraie page mobile.",
          "Ni majuscules hurlées, ni emojis, ni fausses citations, ni superlatifs invérifiables.",
          "Chaque promesse de la description est tenue par le livre.",
          "Boucle d'itération planifiée : une variable, fenêtres de deux semaines.",
        ],
        faq: [
          {
            question: "Quelle longueur pour une description de livre Amazon ?",
            answer:
              "Fiction : 150–250 mots. Non-fiction : 200–350 mots avec une liste de résultats à puces. Le champ accepte 4 000 caractères, mais la conversion vit dans les deux premières lignes et le chemin de survol — la longueur au-delà du persuasif est de la dilution.",
          },
          {
            question: "Peut-on utiliser du HTML dans la description KDP ?",
            answer:
              "Oui — un jeu limité : gras, italique, sauts de ligne, petits titres et listes. Saisissez-le dans le champ description KDP et vérifiez ensuite la page rendue ; les balises non prises en charge sont retirées et peuvent laisser des artefacts.",
          },
          {
            question: "Faut-il mettre des mots-clés dans la description ?",
            answer:
              "Écrivez naturellement pour les acheteurs ; le vocabulaire de sujet, de public et de genre qui appartient à un bon texte de vente couvre la valeur de recherche. Les sept emplacements de mots-clés KDP sont la surface d'indexation dédiée — bourrer la description échange de la conversion contre rien.",
          },
          {
            question: "Pourquoi mon livre a-t-il des visites mais pas de ventes ?",
            answer:
              "Du trafic sans conversion désigne les éléments de la page : accroche de la description, avis, prix et extrait. Réécrivez d'abord les deux premières lignes — la plupart des descriptions faibles perdent la vente avant le pli.",
          },
          {
            question: "Peut-on modifier la description après publication ?",
            answer:
              "Oui, à tout moment, avec effet en quelques heures. C'est l'élément à fort impact le plus facile à itérer : un élément par changement, fenêtres d'observation de deux semaines, conservation des gagnants.",
          },
        ],
      },
      it: {
        slug: "descrizione-libro-amazon-che-vende",
        title: "Scrivere una descrizione Amazon che vende: struttura, aggancio iniziale e la formattazione che KDP permette davvero",
        description:
          "Trasformare il campo descrizione da 4.000 caratteri nel miglior venditore del libro: l'aggancio prima del « Leggi di più », strutture collaudate per narrativa e saggistica, l'HTML permesso, la verità sulle parole chiave e un ciclo di iterazione.",
        keywords: [
          "descrizione libro Amazon",
          "descrizione che vende",
          "scrivere quarta di copertina",
          "HTML descrizione KDP",
          "modello descrizione libro",
          "vendere più libri Amazon",
          "copywriting scheda libro",
          "consigli descrizione ebook",
        ],
        category: "Copywriting",
        intro: [
          "Il visitatore che raggiunge la vostra pagina prodotto è già stato convinto a cliccare dalla copertina e dal titolo. Il compito della descrizione è più stretto e più duro: convertire la curiosità in acquisto in circa otto secondi di scorrimento.",
          "La maggior parte delle descrizioni indipendenti fallisce allo stesso modo — riassume il libro come un compito scolastico invece di vendere l'esperienza o il risultato. Gli editori scrivono quarte di copertina; i principianti scrivono schede di lettura.",
          "Questa guida tratta la descrizione come una pagina di vendita dal formato rigoroso: aggancio prima della piega, persuasione al centro, istruzione alla fine — più l'HTML che KDP visualizza davvero e un ciclo di iterazione, dato che la descrizione resta modificabile a vita.",
        ],
        sections: [
          {
            id: "prima-della-piega",
            title: "Le prime due righe decidono tutto",
            body: [
              "Amazon tronca la descrizione dietro un link « Leggi di più » — su mobile, dopo circa due-tre righe. Ciò che ogni visitatore deve leggere deve stare nei primi 150-200 caratteri; tutto ciò che segue la piega è letto solo da chi l'apertura ha già agganciato.",
              "Aprite sull'affermazione più forte che il libro può onestamente fare: la trasformazione per la saggistica (« Smettete di perdere le serate a pianificare i pasti — un sistema completo in 30 minuti a settimana »), la situazione impossibile per la narrativa (« Ha 24 ore per tradire suo fratello o seppellire suo figlio »). Non aprite mai con « Questo libro parla di… » né, peggio, « In questo libro imparerete… ».",
              "Scrivete dieci prime righe candidate e tenete quella che vi fermerebbe in pieno scorrimento. Questa singola frase ripaga più iterazioni di tutto il resto della descrizione messo insieme.",
            ],
            bullets: [
              "~150-200 caratteri visibili prima del « Leggi di più » su mobile.",
              "Aprite sulla trasformazione (saggistica) o sulla posta in gioco (narrativa), mai sul riassunto.",
              "Aperture vietate: « Questo libro parla di », « In questo libro imparerete ».",
              "Dieci agganci in bozza; tenete quello che ferma il pollice.",
            ],
          },
          {
            id: "struttura-saggistica",
            title: "Una struttura per la saggistica che converte",
            body: [
              "Dopo l'aggancio, agitate brevemente il problema: nominate la situazione del lettore con le sue stesse parole — due o tre righe che gli diano la sensazione di una diagnosi. È il riconoscimento, non la persuasione, a costruire la fiducia che regge il resto della pagina.",
              "Poi la promessa e la prova: cosa consegna il libro, e come. Una breve lista puntata di risultati concreti (« il protocollo in 5 fasi per… », « il modello esatto che… ») fa il lavoro pesante; la precisione vende ciò che gli aggettivi non possono. Dite per chi è il libro — e, in una riga onesta, per chi non lo è, il che aumenta paradossalmente la conversione rendendo la promessa credibile.",
              "Chiudete con una chiamata all'azione diretta. « Risalite e cliccate su Acquista per cominciare stasera » sembra ridondante e misurabilmente non lo è: una descrizione è una pagina di vendita, e una pagina di vendita finisce con un'istruzione.",
            ],
            bullets: [
              "Aggancio → problema → promessa → risultati a punti → per chi → chiamata all'azione.",
              "I punti portano consegne concrete, non titoli di capitoli.",
              "Una riga onesta « non per voi se » costruisce credibilità.",
              "Finite con un'istruzione d'acquisto esplicita.",
            ],
          },
          {
            id: "struttura-narrativa",
            title: "Il riassunto di narrativa: posta in gioco, non sinossi",
            body: [
              "Un riassunto di narrativa vende tensione, non trama. La struttura che funziona: situazione (il protagonista e il suo mondo in una-due righe), rottura (l'evento che spezza tutto), posta in gioco (cosa si perde in caso di fallimento) — e stop. La risoluzione appartiene al libro; un riassunto che risolve la propria tensione non ha più nulla da vendere.",
              "Il segnale di genere conta quanto la storia: vocabolario, ritmo e codici dicono al lettore « ecco il genere di libro che ami ». Il riassunto di un cosy mystery e quello di un thriller cupo che descrivono la stessa trama non dovrebbero condividere quasi nessuna parola.",
              "Restate in 150-250 parole, finite sulla domanda o sulla minaccia più acuta, e leggete l'ultima riga ad alta voce — deve fare l'effetto di un respiro trattenuto.",
            ],
            bullets: [
              "Situazione → rottura → posta in gioco → stop. Non risolvete mai.",
              "Segnalate il genere con vocabolario e ritmo, non con etichette.",
              "150-250 parole; un riassunto di narrativa è uno sprint.",
              "Ultima riga = il respiro trattenuto.",
            ],
          },
          {
            id: "formattazione",
            title: "Formattazione: l'HTML che KDP permette e come usarlo",
            body: [
              "Le descrizioni KDP accettano un piccolo set HTML: grassetto, corsivo, interruzioni di riga, tag di titolo e liste ordinate o puntate. Ben usata, la formattazione crea il percorso di scorrimento — un lettore frettoloso deve ricevere l'argomentazione dalle sole frasi in grassetto.",
              "Regole pratiche: mettete in grassetto l'aggancio e le righe di promessa chiave, scrivete paragrafi corti (due-tre righe) separati da veri salti, usate una lista puntata per i risultati nella saggistica, e non mettete mai paragrafi interi in grassetto — l'enfasi ovunque è enfasi da nessuna parte. Inserite l'HTML nel campo KDP (o tramite un formattatore gratuito) e verificate sempre la resa sulla vera pagina, su telefono.",
              "Evitate l'estetica da spam che Amazon e i lettori puniscono insieme: frasi IN MAIUSCOLO, muri di emoji, false citazioni di recensioni e superlativi non verificabili (« il miglior libro mai scritto su… »). Il ritegno si legge come fiducia.",
            ],
            bullets: [
              "Permessi: <b>, <i>, <br>, <h4>-<h6>, liste <ul>/<ol>.",
              "Il grassetto = percorso di scorrimento; l'argomentazione deve stare nel solo grassetto.",
              "Paragrafi corti, veri salti, una lista al massimo.",
              "Niente maiuscolo urlato, emoji, false citazioni o superlativi non verificabili.",
            ],
          },
          {
            id: "parole-chiave-iterazione",
            title: "Parole chiave, onestà e ciclo di iterazione",
            body: [
              "Scrivete per gli acquirenti, non per l'indice. Una descrizione che nomina naturalmente argomento, pubblico e genere copre il vocabolario ricercabile senza imbottitura — e una descrizione imbottita di parole chiave si legge per quello che è: converte meno rischiando l'attenzione delle politiche sui metadati ingannevoli.",
              "L'onestà è strategia di conversione, non solo conformità: ogni promessa eccessiva si prepaga in resi e recensioni a una stella, e il sistema di recensioni di Amazon fa delle promesse della descrizione un contratto. La descrizione deve far comprare i lettori giusti e far passare oltre quelli sbagliati — entrambi gli esiti sono vittorie.",
              "La descrizione è modificabile a vita: trattate la vostra come un test vivo — cambiate un elemento (l'aggancio, la lista, la chiamata all'azione), osservate due settimane di conversione a traffico stabile, tenete il vincente. La scrittura IA aiuta a generare varianti — DraftToDone produce una descrizione strutturata con ogni libro generato proprio perché questo ciclo parta da una base di pagina di vendita invece che da un campo vuoto — ma è la disciplina del test a variabile unica a comporre i guadagni.",
            ],
            bullets: [
              "Il vocabolario naturale argomento/pubblico/genere batte l'imbottitura di parole chiave.",
              "Promettere troppo = rimborsi e recensioni a una stella prepagati.",
              "Iterate: un elemento, due settimane, tenete il vincente.",
              "L'IA dà varianti; il test dà la verità.",
            ],
          },
        ],
        checklist: [
          "L'aggancio sta nei primi 150-200 caratteri e fermerebbe uno scorrimento.",
          "Struttura seguita: saggistica (aggancio-problema-promessa-punti-CTA) o narrativa (situazione-rottura-posta in gioco).",
          "Il riassunto di narrativa non risolve nulla; i punti di saggistica nominano risultati concreti.",
          "Formattazione HTML applicata: percorso di scorrimento in grassetto, paragrafi corti, una lista.",
          "Resa verificata sulla vera pagina mobile.",
          "Niente maiuscolo urlato, emoji, false citazioni o superlativi non verificabili.",
          "Ogni promessa della descrizione è mantenuta dal libro.",
          "Ciclo di iterazione pianificato: una variabile, finestre di due settimane.",
        ],
        faq: [
          {
            question: "Quanto deve essere lunga una descrizione di libro su Amazon?",
            answer:
              "Narrativa: 150-250 parole. Saggistica: 200-350 parole con una lista puntata di risultati. Il campo accetta 4.000 caratteri, ma la conversione vive nelle prime due righe e nel percorso di scorrimento — la lunghezza oltre il persuasivo è diluizione.",
          },
          {
            question: "Si può usare HTML nella descrizione KDP?",
            answer:
              "Sì — un set limitato: grassetto, corsivo, interruzioni di riga, piccoli titoli e liste. Inseritelo nel campo descrizione KDP e verificate poi la pagina resa; i tag non supportati vengono rimossi e possono lasciare artefatti.",
          },
          {
            question: "Bisogna mettere parole chiave nella descrizione?",
            answer:
              "Scrivete naturalmente per gli acquirenti; il vocabolario di argomento, pubblico e genere che appartiene a un buon testo di vendita copre il valore di ricerca. I sette slot di parole chiave KDP sono la superficie di indicizzazione dedicata — imbottire la descrizione scambia conversione contro nulla.",
          },
          {
            question: "Perché il mio libro ha visite ma niente vendite?",
            answer:
              "Traffico senza conversione punta agli elementi della pagina: aggancio della descrizione, recensioni, prezzo ed estratto. Riscrivete prima le prime due righe — la maggior parte delle descrizioni deboli perde la vendita prima della piega.",
          },
          {
            question: "Si può modificare la descrizione dopo la pubblicazione?",
            answer:
              "Sì, in qualsiasi momento, con effetto in poche ore. È l'elemento ad alto impatto più facile da iterare: un elemento per modifica, finestre di osservazione di due settimane, conservazione dei vincenti.",
          },
        ],
      },
      de: {
        slug: "amazon-buchbeschreibung-die-verkauft",
        title: "Eine Amazon-Buchbeschreibung schreiben, die verkauft: Struktur, erste Zeilen und die Formatierung, die Amazon wirklich erlaubt",
        description:
          "Das 4.000-Zeichen-Beschreibungsfeld zum besten Verkäufer machen: der Haken vor dem « Mehr lesen », bewährte Strukturen für Belletristik und Sachbuch, erlaubtes HTML, die Keyword-Realität und eine Iterationsschleife.",
        seoTitle: "Amazon-Buchbeschreibung schreiben, die verkauft",
        seoDescription:
          "Schreibe eine Amazon-Buchbeschreibung mit starkem Einstieg, klarer Struktur, erlaubtem HTML und einer messbaren Iterationsschleife.",
        keywords: [
          "Amazon Buchbeschreibung",
          "Buchbeschreibung die verkauft",
          "Klappentext schreiben",
          "KDP Beschreibung HTML",
          "Buchbeschreibung Vorlage",
          "mehr Bücher verkaufen Amazon",
          "Buchseite Copywriting",
          "Ebook Beschreibung Tipps",
        ],
        category: "Copywriting",
        intro: [
          "Wer Ihre Produktseite erreicht, wurde vom Cover und Titel bereits zum Klick überzeugt. Die Aufgabe der Beschreibung ist enger und härter: Neugier in etwa acht Sekunden Überfliegen in einen Kauf verwandeln.",
          "Die meisten Indie-Beschreibungen scheitern auf dieselbe Weise — sie fassen das Buch zusammen wie eine Hausaufgabe, statt das Erlebnis oder das Ergebnis zu verkaufen. Verlage schreiben Klappentexte; Erstverleger schreiben Buchreferate.",
          "Dieser Leitfaden behandelt die Beschreibung als Verkaufsseite mit striktem Format: Haken über dem Falz, Überzeugung in der Mitte, Anweisung am Ende — plus das HTML, das KDP wirklich rendert, und eine Iterationsschleife, denn Beschreibungen bleiben ewig editierbar.",
        ],
        sections: [
          {
            id: "ueber-dem-falz",
            title: "Die ersten zwei Zeilen entscheiden alles",
            body: [
              "Amazon kürzt Beschreibungen hinter einem « Mehr lesen »-Link — auf Mobilgeräten nach etwa zwei bis drei Zeilen. Was jeder Besucher lesen soll, muss in den ersten 150-200 Zeichen stehen; alles unter dem Falz lesen nur Menschen, die der Anfang bereits gefangen hat.",
              "Beginnen Sie mit der stärksten Behauptung, die das Buch ehrlich machen kann: der Transformation beim Sachbuch (« Schluss mit verlorenen Abenden für die Essensplanung — ein komplettes System in 30 Minuten pro Woche »), der unmöglichen Lage bei Belletristik (« Sie hat 24 Stunden, um ihren Bruder zu verraten oder ihren Sohn zu begraben »). Nie mit « Dieses Buch handelt von… » beginnen — oder schlimmer: « In diesem Buch lernen Sie… ».",
              "Schreiben Sie zehn Kandidaten für die erste Zeile und behalten Sie die, die Sie selbst mitten im Scrollen stoppen würde. Dieser eine Satz lohnt mehr Iteration als der ganze Rest der Beschreibung zusammen.",
            ],
            bullets: [
              "~150-200 Zeichen sichtbar vor « Mehr lesen » auf Mobilgeräten.",
              "Mit Transformation (Sachbuch) oder Einsatz (Belletristik) beginnen, nie mit Zusammenfassung.",
              "Verbotene Anfänge: « Dieses Buch handelt von », « In diesem Buch lernen Sie ».",
              "Zehn Haken entwerfen; den Scroll-Stopper behalten.",
            ],
          },
          {
            id: "sachbuch-struktur",
            title: "Eine Sachbuch-Struktur, die konvertiert",
            body: [
              "Nach dem Haken kurz das Problem schüren: Benennen Sie die Lage des Lesers in seinen eigenen Worten — zwei, drei Zeilen, die sich wie eine Diagnose anfühlen. Wiedererkennung, nicht Überredung, baut das Vertrauen auf, das den Rest der Seite trägt.",
              "Dann Versprechen und Beweis: was das Buch liefert und wie. Eine kurze Aufzählung konkreter Ergebnisse (« das 5-Schritte-Protokoll für… », « die exakte Vorlage, die… ») leistet die Schwerarbeit; Präzision verkauft, was Adjektive nicht können. Sagen Sie, für wen das Buch ist — und in einer ehrlichen Zeile, für wen nicht, was die Konversion paradoxerweise erhöht, weil es das Versprechen glaubwürdig macht.",
              "Schließen Sie mit einer direkten Handlungsaufforderung. « Scrollen Sie hoch und klicken Sie auf Jetzt kaufen, um heute Abend zu starten » wirkt redundant und ist es messbar nicht: Beschreibungen sind Verkaufsseiten, und Verkaufsseiten enden mit Anweisungen.",
            ],
            bullets: [
              "Haken → Problem → Versprechen → Ergebnis-Aufzählung → für wen → Handlungsaufforderung.",
              "Aufzählungen tragen konkrete Liefergegenstände, keine Kapiteltitel.",
              "Eine ehrliche « nichts für Sie, wenn »-Zeile schafft Glaubwürdigkeit.",
              "Mit expliziter Kaufanweisung enden.",
            ],
          },
          {
            id: "belletristik-struktur",
            title: "Der Belletristik-Klappentext: Einsatz, nicht Inhaltsangabe",
            body: [
              "Belletristik-Klappentexte verkaufen Spannung, keinen Plot. Die funktionierende Struktur: Situation (Protagonist und seine Welt in ein, zwei Zeilen), Bruch (das Ereignis, das alles zerbricht), Einsatz (was bei Scheitern verloren geht) — und Schluss. Die Auflösung gehört ins Buch; ein Klappentext, der seine eigene Spannung auflöst, hat nichts mehr zu verkaufen.",
              "Das Genre-Signal zählt so viel wie die Geschichte: Vokabular, Rhythmus und Tropen sagen dem Leser « das ist die Art Buch, die du liebst ». Der Klappentext eines Cosy-Krimis und der eines düsteren Thrillers über denselben Plot sollten fast kein Wort teilen.",
              "Bleiben Sie bei 150-250 Wörtern, enden Sie auf der schärfsten Frage oder Drohung, und lesen Sie die letzte Zeile laut — sie soll sich wie angehaltener Atem anfühlen.",
            ],
            bullets: [
              "Situation → Bruch → Einsatz → Schluss. Nie auflösen.",
              "Genre über Vokabular und Rhythmus signalisieren, nicht über Etiketten.",
              "150-250 Wörter; Belletristik-Klappentexte sind Sprints.",
              "Letzte Zeile = der angehaltene Atem.",
            ],
          },
          {
            id: "formatierung",
            title: "Formatierung: das HTML, das KDP erlaubt, und wie man es nutzt",
            body: [
              "KDP-Beschreibungen unterstützen ein kleines HTML-Set: fett, kursiv, Zeilenumbrüche, Überschriften-Tags und geordnete oder ungeordnete Listen. Gut eingesetzt, erzeugt Formatierung den Überflug-Pfad — ein Überflieger soll den Pitch allein aus den fetten Phrasen bekommen.",
              "Praktische Regeln: den Haken und die Schlüsselversprechen fetten, kurze Absätze (zwei bis drei Zeilen) mit echten Umbrüchen, eine Aufzählung für Sachbuch-Ergebnisse, und nie ganze Absätze fetten — Betonung überall ist Betonung nirgends. Geben Sie das HTML im KDP-Beschreibungsfeld ein (oder über einen kostenlosen Formatter) und prüfen Sie das gerenderte Ergebnis immer auf der Live-Seite, am Telefon.",
              "Vermeiden Sie die Spam-Ästhetik, die Amazon und Leser gemeinsam bestrafen: GROSSBUCHSTABEN-Sätze, Emoji-Wände, erfundene Rezensionszitate und unbeweisbare Superlative (« das beste Buch, das je geschrieben wurde über… »). Zurückhaltung liest sich als Selbstvertrauen.",
            ],
            bullets: [
              "Erlaubt: <b>, <i>, <br>, <h4>-<h6>, <ul>/<ol>-Listen.",
              "Fett = Überflug-Pfad; der Pitch muss im Fettdruck allein stehen.",
              "Kurze Absätze, echte Umbrüche, maximal eine Liste.",
              "Keine Großbuchstaben-Schreie, Emoji-Wände oder erfundenes Lob.",
            ],
          },
          {
            id: "keywords-iteration",
            title: "Keywords, Ehrlichkeit und die Iterationsschleife",
            body: [
              "Schreiben Sie für Käufer, nicht für den Suchindex. Eine Beschreibung, die Thema, Zielgruppe und Genre natürlich benennt, deckt das durchsuchbare Vokabular ohne Stuffing ab — und mit Keywords vollgestopfte Beschreibungen lesen sich als genau das, konvertieren schlechter und riskieren Richtlinienaufmerksamkeit für irreführende Metadaten.",
              "Ehrlichkeit ist Konversionsstrategie, nicht nur Compliance: Jedes Überversprechen wird in Retouren und Ein-Stern-Rezensionen vorausbezahlt, und Amazons Rezensionssystem macht die Versprechen der Beschreibung zum Vertrag. Die Beschreibung soll die richtigen Leser kaufen lassen und die falschen weiterziehen lassen — beide Ausgänge sind Gewinne.",
              "Beschreibungen sind ewig editierbar — behandeln Sie Ihre als lebenden Test: ein Element ändern (den Haken, die Liste, die Handlungsaufforderung), zwei Wochen Konversion bei stabilem Traffic beobachten, den Gewinner behalten. KI-Entwürfe helfen bei Varianten — DraftToDone erzeugt mit jedem generierten Buch eine strukturierte Beschreibung, genau damit diese Schleife von einer Verkaufsseiten-Basis startet statt von einem leeren Feld — aber die Disziplin des Einvariablen-Tests ist es, die sich verzinst.",
            ],
            bullets: [
              "Natürliches Thema/Zielgruppe/Genre-Vokabular schlägt Keyword-Stuffing.",
              "Überversprechen = vorausbezahlte Erstattungen und Ein-Stern-Rezensionen.",
              "Iterieren: ein Element, zwei Wochen, den Gewinner behalten.",
              "KI liefert Variantenentwürfe; Tests liefern Wahrheit.",
            ],
          },
        ],
        checklist: [
          "Der Haken steht in den ersten 150-200 Zeichen und würde ein Scrollen stoppen.",
          "Struktur befolgt: Sachbuch (Haken-Problem-Versprechen-Aufzählung-CTA) oder Belletristik (Situation-Bruch-Einsatz).",
          "Belletristik-Klappentext löst nichts auf; Sachbuch-Punkte benennen konkrete Ergebnisse.",
          "HTML-Formatierung angewendet: gefetteter Überflug-Pfad, kurze Absätze, eine Liste.",
          "Gerendertes Ergebnis auf der Live-Mobilseite geprüft.",
          "Keine Großbuchstaben-Schreie, Emoji-Wände, falschen Zitate oder unbeweisbaren Superlative.",
          "Jedes Versprechen der Beschreibung wird vom Buch gehalten.",
          "Iterationsschleife geplant: eine Variable, Zwei-Wochen-Fenster.",
        ],
        faq: [
          {
            question: "Wie lang sollte eine Amazon-Buchbeschreibung sein?",
            answer:
              "Belletristik: 150-250 Wörter. Sachbuch: 200-350 Wörter mit einer Ergebnis-Aufzählung. Das Feld erlaubt 4.000 Zeichen, aber die Konversion lebt in den ersten zwei Zeilen und dem Überflug-Pfad — Länge jenseits des Überzeugenden ist Verdünnung.",
          },
          {
            question: "Kann ich HTML in meiner KDP-Beschreibung verwenden?",
            answer:
              "Ja — ein begrenztes Set: fett, kursiv, Zeilenumbrüche, kleine Überschriften und Listen. Im KDP-Beschreibungsfeld eingeben und danach die gerenderte Seite prüfen; nicht unterstützte Tags werden entfernt und können Artefakte hinterlassen.",
          },
          {
            question: "Sollte ich Keywords in die Buchbeschreibung packen?",
            answer:
              "Schreiben Sie natürlich für Käufer; das Thema-, Zielgruppen- und Genre-Vokabular, das in guten Verkaufstext gehört, deckt den Suchwert ab. Die sieben KDP-Keyword-Felder sind die dedizierte Indexierungsfläche — die Beschreibung vollzustopfen tauscht Konversion gegen nichts.",
          },
          {
            question: "Warum bekommt mein Buch Besuche, aber keine Verkäufe?",
            answer:
              "Seitenverkehr ohne Konversion zeigt auf die Seitenelemente: Beschreibungshaken, Rezensionen, Preis und Blick ins Buch. Schreiben Sie zuerst die ersten zwei Zeilen neu — die meisten schwachen Beschreibungen verlieren den Verkauf über dem Falz.",
          },
          {
            question: "Kann ich meine Beschreibung nach der Veröffentlichung ändern?",
            answer:
              "Ja, jederzeit, mit Wirkung binnen Stunden. Das macht die Beschreibung zum am leichtesten iterierbaren Hochwirkungs-Element: ein Element pro Änderung, Zwei-Wochen-Beobachtungsfenster, Gewinner behalten.",
          },
        ],
      },
    },
  },
  {
    key: "kdp-categories-bsr",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 13,
    accent: {
      start: "#ecfdf5",
      middle: "#a9f0d6",
      end: "#ffd9c2",
    },
    translations: {
      en: {
        slug: "kdp-categories-amazon-best-seller-rank-explained",
        title: "KDP categories and Amazon Best Seller Rank explained: how to choose categories that sell books",
        description:
          "How Amazon's category system and BSR actually work: reading sales velocity from rank, choosing the three categories that maximize visibility, the best-seller badge math, requesting changes and avoiding miscategorization penalties.",
        keywords: [
          "KDP categories",
          "Amazon best seller rank explained",
          "BSR books meaning",
          "choose KDP categories",
          "Amazon book categories",
          "best seller badge Amazon",
          "KDP category research",
          "Amazon sales rank books",
        ],
        category: "Categories",
        intro: [
          "Two systems quietly decide how visible your book is to browsing shoppers: the category tree it sits in, and the Best Seller Rank that orders it against neighbors. Both are widely misunderstood, and both are partly under your control.",
          "Categories are shelf placement — they decide which browsing readers ever encounter the book and which best-seller list it competes on. BSR is the store's pulse measurement of the book — a relative sales-velocity score that doubles as free market-research data for anyone who can read it.",
          "This guide explains the mechanics of both, then turns them into two practical workflows: reading demand and competition through BSR before you publish, and choosing the three categories that maximize a real book's visibility after.",
        ],
        sections: [
          {
            id: "bsr-mechanics",
            title: "What BSR actually measures (and what it doesn't)",
            body: [
              "Best Seller Rank orders every book in the store by recent sales velocity — recent sales weigh heavily, older sales decay, and the result updates roughly hourly. Rank #1,000 means 999 books currently sell faster; it says nothing about lifetime copies or revenue.",
              "Each format ranks separately: a paperback and its Kindle edition carry independent BSRs, and Kindle Unlimited full reads count into the ebook's rank. This is why comparing a print BSR to an ebook BSR misleads — the populations differ.",
              "Useful rough conversions for the US Kindle store: BSR ~100,000 is roughly a sale a day; ~10,000 is in the vicinity of 10+ daily; under 1,000 is many dozens daily. These drift with store seasonality, but the order of magnitude holds — and order of magnitude is all niche research needs.",
            ],
            bullets: [
              "BSR = recent sales velocity, hourly, with decay — not lifetime sales.",
              "Each format ranks separately; KU reads count toward ebook rank.",
              "Rules of thumb: 100k ≈ 1/day, 10k ≈ 10/day, <1k ≈ dozens/day.",
              "One sale can move a dormant book hundreds of thousands of ranks — spikes mislead.",
            ],
          },
          {
            id: "bsr-research",
            title: "BSR as free market research",
            body: [
              "Before writing anything, BSR answers the only two questions that matter about a niche: is there money, and is there room? Pull the top 20 books in the candidate category or search result and note their BSRs.",
              "Money: if the #5 book ranks ~50,000 and the #20 ranks ~300,000, the niche supports a handful of modest earners — fine for a catalog play, thin for a flagship. If the top 10 all rank under 20,000, real revenue exists. Room: if every top book has thousands of reviews and a publisher imprint, the shelf is fortified; if page one mixes strong and weak BSRs with patchy covers and few reviews, a quality entry can take a slot.",
              "Run this check in thirty minutes per niche, and the catalog-level payoff compounds: niches chosen with BSR evidence are the difference between the income distributions described in our earnings guide.",
            ],
            bullets: [
              "Top-20 BSR scan answers: is there money, is there room?",
              "Top 10 under 20k BSR = real revenue in the niche.",
              "Weak covers + few reviews + mixed BSRs on page one = openable shelf.",
              "Thirty minutes per niche, before any writing.",
            ],
          },
          {
            id: "category-system",
            title: "How the category system works in 2026",
            body: [
              "KDP lets you select up to three categories at publishing time, from a browse tree mirroring the store's own navigation (the old 'email support for 10 categories' loophole is gone). Your book competes for the best-seller list of every category it sits in, at every level of the path.",
              "Categories have wildly different traffic and competition. 'Self-Help' as a top level contains hundreds of thousands of titles; 'Self-Help > Stress Management > Burnout' might hold a few hundred. The badge math follows: the orange #1 Best Seller flag goes to the top book in any category, hourly — a book selling 10 copies a day is invisible in the parent but #1 in the right subcategory.",
              "The badge is not vanity: it raises click-through everywhere the book appears, including search results and also-bought rows. Realistic badge access is a legitimate criterion for category choice.",
            ],
            bullets: [
              "Three categories at setup, from the real browse tree.",
              "Deep subcategories: less traffic, far less competition, badge access.",
              "#1 badge is computed hourly per category and boosts CTR storewide.",
              "Category best-seller lists are browsed by real buyers — shelf placement matters.",
            ],
          },
          {
            id: "choosing-categories",
            title: "Choosing your three: the relevance-competition-traffic triangle",
            body: [
              "Build a candidate list by walking the store: find five comparable books, scroll to their product-detail categories, and map every path they use. Add paths discovered by browsing the tree around your topic. Aim for ten candidates.",
              "Score each on three axes: relevance (would a browser of this shelf genuinely want this book — miscategorized books get reported, demoted, and convert terribly anyway), competition (what BSR does the #1 book in this category hold — that is the bar for the badge), and traffic (how strong are the BSRs across the category's top 20 — a category where #20 ranks 800,000 has no browsers to offer).",
              "Then pick a portfolio, not three copies of the same bet: one category for traffic (bigger, harder), one for the badge (deep, winnable), one for a distinct audience angle (the gift shelf, the profession shelf, the regional shelf). Three categories pointing at three reader populations triple the discovery surface.",
            ],
            bullets: [
              "Harvest candidate paths from five comparable books plus tree browsing.",
              "Score on relevance, badge bar (#1's BSR), and shelf traffic (top-20 BSRs).",
              "Portfolio strategy: one traffic bet, one badge bet, one angle bet.",
              "Miscategorization converts badly and risks demotion — relevance is a constraint, not a suggestion.",
            ],
          },
          {
            id: "iteration",
            title: "Changing categories and reading the results",
            body: [
              "Categories are editable: change them in the KDP bookshelf, with effect within a day or two. Like every metadata change, treat it as an experiment — switch one category at a time and watch two to three weeks of impressions, sales and badge status.",
              "Signals to act on: a book stuck deep in a high-traffic category's rankings (try a deeper subcategory for badge access), a badge held trivially in a dead category (trade up for traffic), page-one impressions without conversion (a relevance mismatch — browsers see the book and bounce).",
              "Keep a small log of category changes and outcomes per title. Across a catalog, the log becomes a private map of which shelves actually move books in your niches — knowledge no tool sells and competitors cannot copy.",
            ],
            bullets: [
              "Categories editable anytime from the bookshelf; effect in 1–2 days.",
              "One change at a time, 2–3 week windows.",
              "Stuck-deep → go deeper; trivial badge → trade up; impressions-no-sales → relevance problem.",
              "A change log across the catalog becomes proprietary shelf knowledge.",
            ],
          },
        ],
        checklist: [
          "BSR top-20 scan done for the niche before writing (money + room).",
          "Ten candidate category paths harvested from comparable books and the browse tree.",
          "Candidates scored on relevance, badge bar and shelf traffic.",
          "Three categories chosen as a portfolio: traffic, badge, angle.",
          "Every chosen category passes the honest-relevance test.",
          "BSR of #1 in the badge category compared against your realistic velocity.",
          "Two-to-three-week observation windows after any category change.",
          "Category change log maintained across the catalog.",
        ],
        faq: [
          {
            question: "What is a good BSR for a book?",
            answer:
              "Depends on the goal: under 100,000 (roughly a sale a day) makes a catalog title worthwhile; under 10,000 is a solid earner; under 1,000 is a hit. For niche research, what matters is the BSR profile of a category's top 20, not any single number.",
          },
          {
            question: "How many categories can a KDP book have?",
            answer:
              "Three, chosen from Amazon's browse tree during setup and editable later from the bookshelf. The historical trick of emailing support for ten placements no longer applies.",
          },
          {
            question: "How do I get the #1 Best Seller badge?",
            answer:
              "Outrank every book in one of your categories for an hourly refresh window. The practical route is a deep, relevant subcategory whose current #1 holds a BSR your launch-week velocity can beat — which is exactly why category research belongs before launch.",
          },
          {
            question: "Does changing categories affect my sales rank?",
            answer:
              "No — BSR is computed storewide from sales velocity, independent of categories. Changing categories changes which shelves and best-seller lists display the book, which can change future sales, which then moves rank.",
          },
          {
            question: "Why is my book in a category I never selected?",
            answer:
              "Amazon sometimes auto-places books based on keywords and content signals. If the placement misrepresents the book, contact KDP support to correct it — miscategorization suppresses conversion and invites reader reports.",
          },
        ],
      },
      fr: {
        slug: "categories-kdp-classement-meilleures-ventes-amazon",
        title: "Catégories KDP et classement des ventes Amazon expliqués : choisir des catégories qui vendent",
        description:
          "Comment fonctionnent vraiment le système de catégories d'Amazon et le classement des meilleures ventes : lire la vélocité de vente dans le rang, choisir les trois catégories qui maximisent la visibilité, les maths du badge best-seller et les changements de catégorie.",
        keywords: [
          "catégories KDP",
          "classement des ventes Amazon expliqué",
          "BSR livre signification",
          "choisir catégories KDP",
          "catégories livres Amazon",
          "badge meilleure vente Amazon",
          "recherche catégorie KDP",
          "rang des ventes Amazon livres",
        ],
        category: "Catégories",
        intro: [
          "Deux systèmes décident silencieusement de la visibilité de votre livre auprès des acheteurs qui flânent : l'arbre de catégories où il est rangé, et le classement des meilleures ventes qui l'ordonne face à ses voisins. Les deux sont largement incompris, et les deux sont partiellement sous votre contrôle.",
          "Les catégories sont le placement en rayon — elles décident quels lecteurs en navigation rencontrent un jour le livre et sur quelle liste de best-sellers il concourt. Le classement (BSR) est la mesure du pouls du livre — un score relatif de vélocité de vente qui sert aussi de données d'étude de marché gratuites pour qui sait le lire.",
          "Ce guide explique la mécanique des deux, puis les transforme en deux flux de travail pratiques : lire la demande et la concurrence à travers le BSR avant de publier, et choisir après les trois catégories qui maximisent la visibilité d'un vrai livre.",
        ],
        sections: [
          {
            id: "mecanique-bsr",
            title: "Ce que le BSR mesure réellement (et ce qu'il ne mesure pas)",
            body: [
              "Le classement des meilleures ventes ordonne chaque livre de la boutique par vélocité de vente récente — les ventes récentes pèsent lourd, les anciennes décroissent, et le résultat se met à jour environ toutes les heures. Le rang n°1 000 signifie que 999 livres se vendent actuellement plus vite ; il ne dit rien des exemplaires cumulés ni du revenu.",
              "Chaque format est classé séparément : un broché et son édition Kindle portent des BSR indépendants, et les lectures complètes Kindle Unlimited comptent dans le rang de l'ebook. C'est pourquoi comparer un BSR papier à un BSR ebook induit en erreur — les populations diffèrent.",
              "Conversions approximatives utiles pour la boutique Kindle américaine : un BSR vers 100 000 correspond à peu près à une vente par jour ; vers 10 000, à une dizaine ou plus ; sous 1 000, à plusieurs dizaines quotidiennes. Ces repères dérivent avec la saisonnalité, mais l'ordre de grandeur tient — et l'ordre de grandeur suffit à la recherche de niche.",
            ],
            bullets: [
              "BSR = vélocité de vente récente, horaire, avec décroissance — pas les ventes cumulées.",
              "Chaque format classé séparément ; les lectures KU comptent pour l'ebook.",
              "Repères : 100k ≈ 1/jour, 10k ≈ 10/jour, <1k ≈ dizaines/jour.",
              "Une seule vente peut déplacer un livre dormant de centaines de milliers de rangs — méfiez-vous des pics.",
            ],
          },
          {
            id: "bsr-recherche",
            title: "Le BSR comme étude de marché gratuite",
            body: [
              "Avant d'écrire quoi que ce soit, le BSR répond aux deux seules questions qui comptent sur une niche : y a-t-il de l'argent, et y a-t-il de la place ? Relevez les 20 premiers livres de la catégorie ou du résultat de recherche visé et notez leurs BSR.",
              "L'argent : si le n°5 tourne vers 50 000 et le n°20 vers 300 000, la niche fait vivre une poignée de titres modestes — bien pour un jeu de catalogue, maigre pour un vaisseau amiral. Si le top 10 entier est sous 20 000, le revenu existe vraiment. La place : si chaque livre du haut a des milliers d'avis et une maison d'édition, le rayon est fortifié ; si la page un mélange BSR forts et faibles, couvertures inégales et peu d'avis, une entrée de qualité peut prendre une place.",
              "Ce contrôle prend trente minutes par niche, et le gain se compose à l'échelle du catalogue : des niches choisies sur preuves BSR font la différence entre les distributions de revenus décrites dans notre guide des gains.",
            ],
            bullets: [
              "Le scan BSR du top 20 répond : argent ? place ?",
              "Top 10 sous 20k de BSR = revenu réel dans la niche.",
              "Couvertures faibles + peu d'avis + BSR mélangés en page un = rayon ouvrable.",
              "Trente minutes par niche, avant toute écriture.",
            ],
          },
          {
            id: "systeme-categories",
            title: "Comment fonctionne le système de catégories en 2026",
            body: [
              "KDP permet de sélectionner jusqu'à trois catégories à la publication, dans un arbre de navigation qui reflète celui de la boutique (l'ancienne astuce du « mail au support pour 10 catégories » a disparu). Votre livre concourt pour la liste des meilleures ventes de chaque catégorie où il se trouve, à chaque niveau du chemin.",
              "Les catégories ont des trafics et des concurrences radicalement différents. « Développement personnel » au sommet contient des centaines de milliers de titres ; « Développement personnel > Gestion du stress > Burn-out » peut en contenir quelques centaines. Les maths du badge suivent : le drapeau orange n°1 des ventes revient au premier livre de chaque catégorie, toutes les heures — un livre vendant 10 exemplaires par jour est invisible dans la catégorie mère et n°1 dans la bonne sous-catégorie.",
              "Le badge n'est pas de la vanité : il augmente le taux de clic partout où le livre apparaît, résultats de recherche et rayons de recommandation compris. Un accès réaliste au badge est un critère légitime de choix de catégorie.",
            ],
            bullets: [
              "Trois catégories à la création, dans le véritable arbre de navigation.",
              "Sous-catégories profondes : moins de trafic, bien moins de concurrence, accès au badge.",
              "Le badge n°1 est calculé toutes les heures par catégorie et dope le taux de clic.",
              "Les listes de meilleures ventes par catégorie sont parcourues par de vrais acheteurs.",
            ],
          },
          {
            id: "choisir-categories",
            title: "Choisir ses trois catégories : le triangle pertinence-concurrence-trafic",
            body: [
              "Construisez une liste de candidates en parcourant la boutique : trouvez cinq livres comparables, descendez à leurs catégories en bas de fiche, et cartographiez chaque chemin qu'ils utilisent. Ajoutez les chemins découverts en explorant l'arbre autour de votre sujet. Visez dix candidates.",
              "Notez chacune sur trois axes : la pertinence (un flâneur de ce rayon voudrait-il sincèrement ce livre — un livre mal rangé se fait signaler, rétrograder, et convertit de toute façon très mal), la concurrence (quel BSR tient le n°1 de la catégorie — c'est la barre du badge), et le trafic (quelle est la force des BSR du top 20 — une catégorie dont le n°20 traîne à 800 000 n'a aucun flâneur à offrir).",
              "Puis composez un portefeuille, pas trois copies du même pari : une catégorie pour le trafic (plus grande, plus dure), une pour le badge (profonde, gagnable), une pour un angle d'audience distinct (le rayon cadeau, le rayon métier, le rayon régional). Trois catégories pointant vers trois populations de lecteurs triplent la surface de découverte.",
            ],
            bullets: [
              "Récoltez les chemins candidats chez cinq comparables plus l'arbre.",
              "Notez pertinence, barre du badge (BSR du n°1) et trafic du rayon (BSR du top 20).",
              "Stratégie de portefeuille : un pari trafic, un pari badge, un pari angle.",
              "Le mauvais rangement convertit mal et risque la rétrogradation — la pertinence est une contrainte.",
            ],
          },
          {
            id: "iteration",
            title: "Changer de catégories et lire les résultats",
            body: [
              "Les catégories se modifient : changez-les depuis la bibliothèque KDP, avec effet sous un à deux jours. Comme tout changement de métadonnées, traitez-le en expérience — une catégorie à la fois, puis deux à trois semaines d'observation des impressions, des ventes et du statut du badge.",
              "Signaux pour agir : un livre coincé au fond du classement d'une grosse catégorie (essayez une sous-catégorie plus profonde pour l'accès au badge), un badge tenu trivialement dans une catégorie morte (échangez-le contre du trafic), des impressions en page un sans conversion (un défaut de pertinence — les flâneurs voient le livre et passent).",
              "Tenez un petit journal des changements de catégorie et de leurs résultats par titre. À l'échelle d'un catalogue, ce journal devient une carte privée des rayons qui font réellement bouger des livres dans vos niches — un savoir qu'aucun outil ne vend et qu'aucun concurrent ne copie.",
            ],
            bullets: [
              "Catégories modifiables à tout moment ; effet sous 1 à 2 jours.",
              "Un changement à la fois, fenêtres de 2–3 semaines.",
              "Coincé au fond → plus profond ; badge trivial → montez en trafic ; impressions sans ventes → pertinence.",
              "Le journal des changements devient un savoir de rayon propriétaire.",
            ],
          },
        ],
        checklist: [
          "Scan BSR du top 20 fait pour la niche avant écriture (argent + place).",
          "Dix chemins de catégories candidats récoltés chez les comparables et dans l'arbre.",
          "Candidates notées sur pertinence, barre du badge et trafic du rayon.",
          "Trois catégories choisies en portefeuille : trafic, badge, angle.",
          "Chaque catégorie choisie passe le test de pertinence honnête.",
          "BSR du n°1 de la catégorie badge comparé à votre vélocité réaliste.",
          "Fenêtres d'observation de deux à trois semaines après tout changement.",
          "Journal des changements de catégorie tenu à l'échelle du catalogue.",
        ],
        faq: [
          {
            question: "Qu'est-ce qu'un bon BSR pour un livre ?",
            answer:
              "Cela dépend de l'objectif : sous 100 000 (environ une vente par jour), un titre de catalogue se justifie ; sous 10 000, c'est un bon gagneur ; sous 1 000, un succès. Pour la recherche de niche, ce qui compte est le profil BSR du top 20 d'une catégorie, pas un nombre isolé.",
          },
          {
            question: "Combien de catégories un livre KDP peut-il avoir ?",
            answer:
              "Trois, choisies dans l'arbre de navigation d'Amazon à la création et modifiables ensuite depuis la bibliothèque. L'astuce historique du mail au support pour dix placements n'existe plus.",
          },
          {
            question: "Comment obtenir le badge n°1 des ventes ?",
            answer:
              "Dépasser tous les livres d'une de vos catégories pendant une fenêtre de rafraîchissement horaire. La voie pratique : une sous-catégorie profonde et pertinente dont le n°1 actuel tient un BSR que votre vélocité de semaine de lancement peut battre — exactement pourquoi la recherche de catégories se fait avant le lancement.",
          },
          {
            question: "Changer de catégories affecte-t-il mon classement des ventes ?",
            answer:
              "Non — le BSR se calcule sur la vélocité de vente à l'échelle de la boutique, indépendamment des catégories. Changer de catégories change les rayons et les listes qui affichent le livre, ce qui peut changer les ventes futures, qui déplacent alors le rang.",
          },
          {
            question: "Pourquoi mon livre apparaît-il dans une catégorie jamais choisie ?",
            answer:
              "Amazon place parfois les livres automatiquement d'après les mots-clés et les signaux de contenu. Si le placement déforme le livre, contactez le support KDP pour le corriger — un mauvais rangement étouffe la conversion et attire les signalements de lecteurs.",
          },
        ],
      },
      it: {
        slug: "categorie-kdp-classifica-bestseller-amazon",
        title: "Categorie KDP e classifica delle vendite Amazon spiegate: scegliere categorie che vendono libri",
        description:
          "Come funzionano davvero il sistema di categorie di Amazon e la classifica bestseller: leggere la velocità di vendita nel rango, scegliere le tre categorie che massimizzano la visibilità, i conti del badge bestseller e i cambi di categoria.",
        keywords: [
          "categorie KDP",
          "classifica vendite Amazon spiegata",
          "BSR libro significato",
          "scegliere categorie KDP",
          "categorie libri Amazon",
          "badge bestseller Amazon",
          "ricerca categorie KDP",
          "rango vendite Amazon libri",
        ],
        category: "Categorie",
        intro: [
          "Due sistemi decidono in silenzio quanto il vostro libro sia visibile agli acquirenti che curiosano: l'albero di categorie in cui è riposto, e la classifica delle vendite che lo ordina contro i vicini. Entrambi sono ampiamente fraintesi, ed entrambi sono in parte sotto il vostro controllo.",
          "Le categorie sono la collocazione a scaffale — decidono quali lettori in navigazione incontrano mai il libro e su quale lista di bestseller concorre. Il rango (BSR) è la misura del polso del libro — un punteggio relativo di velocità di vendita che serve anche da dato gratuito di ricerca di mercato per chi sa leggerlo.",
          "Questa guida spiega la meccanica di entrambi, poi li trasforma in due flussi pratici: leggere domanda e concorrenza attraverso il BSR prima di pubblicare, e scegliere dopo le tre categorie che massimizzano la visibilità di un libro reale.",
        ],
        sections: [
          {
            id: "meccanica-bsr",
            title: "Cosa misura davvero il BSR (e cosa no)",
            body: [
              "La classifica bestseller ordina ogni libro dello store per velocità di vendita recente — le vendite recenti pesano molto, le vecchie decadono, e il risultato si aggiorna circa ogni ora. Il rango n°1.000 significa che 999 libri si vendono attualmente più in fretta; non dice nulla sulle copie cumulate né sui ricavi.",
              "Ogni formato è classificato separatamente: un cartaceo e la sua edizione Kindle portano BSR indipendenti, e le letture complete Kindle Unlimited contano nel rango dell'ebook. Ecco perché confrontare un BSR cartaceo con uno ebook inganna — le popolazioni differiscono.",
              "Conversioni approssimative utili per lo store Kindle americano: un BSR verso 100.000 corrisponde grosso modo a una vendita al giorno; verso 10.000, a una decina o più; sotto 1.000, a parecchie decine quotidiane. Questi riferimenti derivano con la stagionalità, ma l'ordine di grandezza regge — e l'ordine di grandezza basta alla ricerca di nicchia.",
            ],
            bullets: [
              "BSR = velocità di vendita recente, oraria, con decadimento — non le vendite cumulate.",
              "Ogni formato classificato a parte; le letture KU contano per l'ebook.",
              "Riferimenti: 100k ≈ 1/giorno, 10k ≈ 10/giorno, <1k ≈ decine/giorno.",
              "Una sola vendita può spostare un libro dormiente di centinaia di migliaia di ranghi — diffidate dei picchi.",
            ],
          },
          {
            id: "bsr-ricerca",
            title: "Il BSR come ricerca di mercato gratuita",
            body: [
              "Prima di scrivere qualsiasi cosa, il BSR risponde alle uniche due domande che contano su una nicchia: ci sono soldi, e c'è posto? Rilevate i primi 20 libri della categoria o del risultato di ricerca mirato e annotate i loro BSR.",
              "I soldi: se il n°5 gira verso 50.000 e il n°20 verso 300.000, la nicchia sostiene una manciata di titoli modesti — bene per un gioco di catalogo, magro per un'ammiraglia. Se l'intera top 10 è sotto 20.000, i ricavi esistono davvero. Il posto: se ogni libro in alto ha migliaia di recensioni e una casa editrice, lo scaffale è fortificato; se la pagina uno mescola BSR forti e deboli, copertine diseguali e poche recensioni, un ingresso di qualità può prendersi un posto.",
              "Questo controllo richiede trenta minuti per nicchia, e il guadagno si compone alla scala del catalogo: nicchie scelte su prove BSR fanno la differenza tra le distribuzioni di reddito descritte nella nostra guida ai guadagni.",
            ],
            bullets: [
              "La scansione BSR della top 20 risponde: soldi? posto?",
              "Top 10 sotto 20k di BSR = ricavi reali nella nicchia.",
              "Copertine deboli + poche recensioni + BSR misti in pagina uno = scaffale apribile.",
              "Trenta minuti per nicchia, prima di qualsiasi scrittura.",
            ],
          },
          {
            id: "sistema-categorie",
            title: "Come funziona il sistema di categorie nel 2026",
            body: [
              "KDP permette di selezionare fino a tre categorie alla pubblicazione, da un albero di navigazione che riflette quello dello store (il vecchio trucco della « mail al supporto per 10 categorie » è sparito). Il vostro libro concorre per la lista bestseller di ogni categoria in cui si trova, a ogni livello del percorso.",
              "Le categorie hanno traffici e concorrenze radicalmente diversi. « Self-help » al vertice contiene centinaia di migliaia di titoli; « Self-help > Gestione dello stress > Burnout » può contenerne qualche centinaio. I conti del badge seguono: la bandierina arancione n°1 va al primo libro di ogni categoria, ogni ora — un libro che vende 10 copie al giorno è invisibile nella categoria madre e n°1 nella giusta sottocategoria.",
              "Il badge non è vanità: aumenta il tasso di clic ovunque il libro appaia, risultati di ricerca e righe di consigliati compresi. Un accesso realistico al badge è un criterio legittimo di scelta della categoria.",
            ],
            bullets: [
              "Tre categorie alla creazione, nel vero albero di navigazione.",
              "Sottocategorie profonde: meno traffico, molta meno concorrenza, accesso al badge.",
              "Il badge n°1 si calcola ogni ora per categoria e spinge il tasso di clic.",
              "Le liste bestseller per categoria sono sfogliate da veri acquirenti.",
            ],
          },
          {
            id: "scegliere-categorie",
            title: "Scegliere le tre categorie: il triangolo pertinenza-concorrenza-traffico",
            body: [
              "Costruite una lista di candidate percorrendo lo store: trovate cinque libri comparabili, scendete alle loro categorie in fondo alla scheda, e mappate ogni percorso che usano. Aggiungete i percorsi scoperti esplorando l'albero attorno al vostro tema. Puntate a dieci candidate.",
              "Valutate ciascuna su tre assi: la pertinenza (chi curiosa in questo scaffale vorrebbe sinceramente questo libro? — un libro mal riposto viene segnalato, retrocesso, e comunque converte malissimo), la concorrenza (quale BSR tiene il n°1 della categoria — è l'asticella del badge), e il traffico (quanto sono forti i BSR della top 20 — una categoria il cui n°20 langue a 800.000 non ha curiosi da offrire).",
              "Poi componete un portafoglio, non tre copie della stessa scommessa: una categoria per il traffico (più grande, più dura), una per il badge (profonda, vincibile), una per un angolo di pubblico distinto (lo scaffale regalo, lo scaffale professione, lo scaffale regionale). Tre categorie che puntano a tre popolazioni di lettori triplicano la superficie di scoperta.",
            ],
            bullets: [
              "Raccogliete i percorsi candidati da cinque comparabili più l'albero.",
              "Valutate pertinenza, asticella del badge (BSR del n°1) e traffico dello scaffale (BSR della top 20).",
              "Strategia di portafoglio: una scommessa traffico, una badge, una angolo.",
              "La cattiva collocazione converte male e rischia la retrocessione — la pertinenza è un vincolo.",
            ],
          },
          {
            id: "iterazione",
            title: "Cambiare categorie e leggere i risultati",
            body: [
              "Le categorie si modificano: cambiatele dalla libreria KDP, con effetto in uno-due giorni. Come ogni modifica di metadati, trattatela da esperimento — una categoria alla volta, poi due-tre settimane di osservazione di impressioni, vendite e stato del badge.",
              "Segnali per agire: un libro bloccato in fondo alla classifica di una grande categoria (provate una sottocategoria più profonda per l'accesso al badge), un badge tenuto banalmente in una categoria morta (scambiatelo con del traffico), impressioni in pagina uno senza conversione (un difetto di pertinenza — i curiosi vedono il libro e passano).",
              "Tenete un piccolo diario dei cambi di categoria e dei loro risultati per titolo. Alla scala di un catalogo, quel diario diventa una mappa privata degli scaffali che muovono davvero libri nelle vostre nicchie — un sapere che nessuno strumento vende e nessun concorrente copia.",
            ],
            bullets: [
              "Categorie modificabili in ogni momento; effetto in 1-2 giorni.",
              "Un cambio alla volta, finestre di 2-3 settimane.",
              "Bloccato in fondo → più profondo; badge banale → salite di traffico; impressioni senza vendite → pertinenza.",
              "Il diario dei cambi diventa sapere di scaffale proprietario.",
            ],
          },
        ],
        checklist: [
          "Scansione BSR della top 20 fatta per la nicchia prima di scrivere (soldi + posto).",
          "Dieci percorsi di categorie candidati raccolti dai comparabili e dall'albero.",
          "Candidate valutate su pertinenza, asticella del badge e traffico dello scaffale.",
          "Tre categorie scelte in portafoglio: traffico, badge, angolo.",
          "Ogni categoria scelta supera il test di pertinenza onesta.",
          "BSR del n°1 della categoria badge confrontato con la vostra velocità realistica.",
          "Finestre di osservazione di due-tre settimane dopo ogni cambio.",
          "Diario dei cambi di categoria tenuto a scala di catalogo.",
        ],
        faq: [
          {
            question: "Cos'è un buon BSR per un libro?",
            answer:
              "Dipende dall'obiettivo: sotto 100.000 (circa una vendita al giorno) un titolo di catalogo si giustifica; sotto 10.000 è un buon guadagnatore; sotto 1.000 è un successo. Per la ricerca di nicchia, ciò che conta è il profilo BSR della top 20 di una categoria, non un numero isolato.",
          },
          {
            question: "Quante categorie può avere un libro KDP?",
            answer:
              "Tre, scelte nell'albero di navigazione di Amazon alla creazione e modificabili poi dalla libreria. Il vecchio trucco della mail al supporto per dieci collocazioni non esiste più.",
          },
          {
            question: "Come si ottiene il badge n°1 bestseller?",
            answer:
              "Superando ogni libro di una delle vostre categorie durante una finestra di aggiornamento oraria. La via pratica: una sottocategoria profonda e pertinente il cui n°1 attuale tiene un BSR che la vostra velocità della settimana di lancio può battere — esattamente il motivo per cui la ricerca di categorie si fa prima del lancio.",
          },
          {
            question: "Cambiare categorie influenza il mio rango di vendita?",
            answer:
              "No — il BSR si calcola sulla velocità di vendita a scala dello store, indipendentemente dalle categorie. Cambiare categorie cambia gli scaffali e le liste che mostrano il libro, il che può cambiare le vendite future, che muovono poi il rango.",
          },
          {
            question: "Perché il mio libro appare in una categoria mai scelta?",
            answer:
              "Amazon colloca a volte i libri automaticamente in base a parole chiave e segnali di contenuto. Se la collocazione deforma il libro, contattate il supporto KDP per correggerla — una cattiva collocazione soffoca la conversione e attira le segnalazioni dei lettori.",
          },
        ],
      },
      de: {
        slug: "kdp-kategorien-amazon-bestseller-rang-erklaert",
        title: "KDP-Kategorien und Amazon-Bestseller-Rang erklärt: Kategorien wählen, die Bücher verkaufen",
        description:
          "Wie Amazons Kategoriesystem und der BSR wirklich funktionieren: Verkaufsgeschwindigkeit aus dem Rang lesen, die drei Kategorien wählen, die die Sichtbarkeit maximieren, die Bestseller-Abzeichen-Rechnung und Kategoriewechsel ohne Strafen.",
        keywords: [
          "KDP Kategorien",
          "Amazon Bestseller Rang erklärt",
          "BSR Bücher Bedeutung",
          "KDP Kategorien wählen",
          "Amazon Buchkategorien",
          "Bestseller Abzeichen Amazon",
          "KDP Kategorie Recherche",
          "Amazon Verkaufsrang Bücher",
        ],
        category: "Kategorien",
        intro: [
          "Zwei Systeme entscheiden still, wie sichtbar Ihr Buch für stöbernde Käufer ist: der Kategoriebaum, in dem es steht, und der Bestseller-Rang, der es gegen seine Nachbarn ordnet. Beide werden weithin missverstanden, und beide stehen teilweise unter Ihrer Kontrolle.",
          "Kategorien sind die Regalplatzierung — sie entscheiden, welche stöbernden Leser dem Buch je begegnen und auf welcher Bestsellerliste es konkurriert. Der BSR ist die Pulsmessung des Buchs — ein relativer Verkaufsgeschwindigkeits-Score, der zugleich kostenlose Marktforschungsdaten liefert für jeden, der ihn lesen kann.",
          "Dieser Leitfaden erklärt die Mechanik beider Systeme und macht daraus zwei praktische Workflows: Nachfrage und Konkurrenz vor der Veröffentlichung über den BSR lesen, und danach die drei Kategorien wählen, die die Sichtbarkeit eines echten Buchs maximieren.",
        ],
        sections: [
          {
            id: "bsr-mechanik",
            title: "Was der BSR wirklich misst (und was nicht)",
            body: [
              "Der Bestseller-Rang ordnet jedes Buch des Stores nach jüngster Verkaufsgeschwindigkeit — jüngste Verkäufe wiegen schwer, ältere verfallen, und das Ergebnis aktualisiert sich etwa stündlich. Rang Nr. 1.000 bedeutet, dass sich 999 Bücher gerade schneller verkaufen; über Lebenszeitexemplare oder Umsatz sagt er nichts.",
              "Jedes Format rangiert separat: Ein Taschenbuch und seine Kindle-Ausgabe tragen unabhängige BSRs, und vollständige Kindle-Unlimited-Lektüren zählen in den Ebook-Rang. Deshalb täuscht der Vergleich eines Print-BSR mit einem Ebook-BSR — die Populationen unterscheiden sich.",
              "Nützliche Faustregeln für den US-Kindle-Store: BSR ~100.000 entspricht grob einem Verkauf pro Tag; ~10.000 etwa zehn oder mehr täglich; unter 1.000 vielen Dutzend täglich. Diese Werte driften mit der Saison, aber die Größenordnung hält — und Größenordnung ist alles, was Nischenrecherche braucht.",
            ],
            bullets: [
              "BSR = jüngste Verkaufsgeschwindigkeit, stündlich, mit Verfall — keine Lebenszeitverkäufe.",
              "Jedes Format rangiert separat; KU-Lektüren zählen zum Ebook-Rang.",
              "Faustregeln: 100k ≈ 1/Tag, 10k ≈ 10/Tag, <1k ≈ Dutzende/Tag.",
              "Ein einziger Verkauf kann ein ruhendes Buch um Hunderttausende Ränge bewegen — Spitzen täuschen.",
            ],
          },
          {
            id: "bsr-recherche",
            title: "Der BSR als kostenlose Marktforschung",
            body: [
              "Bevor Sie irgendetwas schreiben, beantwortet der BSR die einzigen zwei Fragen, die über eine Nische zählen: Gibt es Geld, und gibt es Platz? Ziehen Sie die Top 20 der Kandidatenkategorie oder des Suchergebnisses und notieren Sie ihre BSRs.",
              "Geld: Rangiert die Nr. 5 bei ~50.000 und die Nr. 20 bei ~300.000, trägt die Nische eine Handvoll bescheidener Verdiener — gut fürs Katalogspiel, dünn für ein Flaggschiff. Liegen alle Top 10 unter 20.000, existiert echter Umsatz. Platz: Hat jedes Top-Buch Tausende Rezensionen und ein Verlagsimprint, ist das Regal befestigt; mischt Seite eins starke und schwache BSRs mit fleckigen Covern und wenigen Rezensionen, kann ein Qualitätseinstieg einen Platz nehmen.",
              "Dieser Check dauert dreißig Minuten pro Nische, und der Gewinn verzinst sich auf Katalogebene: Mit BSR-Belegen gewählte Nischen machen den Unterschied zwischen den Einkommensverteilungen aus unserem Verdienst-Leitfaden.",
            ],
            bullets: [
              "Der Top-20-BSR-Scan beantwortet: Geld? Platz?",
              "Top 10 unter 20k BSR = echter Umsatz in der Nische.",
              "Schwache Cover + wenige Rezensionen + gemischte BSRs auf Seite eins = öffenbares Regal.",
              "Dreißig Minuten pro Nische, vor jedem Schreiben.",
            ],
          },
          {
            id: "kategoriesystem",
            title: "Wie das Kategoriesystem 2026 funktioniert",
            body: [
              "KDP lässt Sie bei der Veröffentlichung bis zu drei Kategorien wählen, aus einem Browse-Baum, der die Store-Navigation spiegelt (das alte Schlupfloch « E-Mail an den Support für 10 Kategorien » ist weg). Ihr Buch konkurriert um die Bestsellerliste jeder Kategorie, in der es steht, auf jeder Ebene des Pfads.",
              "Kategorien haben wild unterschiedlichen Traffic und Wettbewerb. « Selbsthilfe » als Top-Ebene enthält Hunderttausende Titel; « Selbsthilfe > Stressbewältigung > Burnout » vielleicht ein paar Hundert. Die Abzeichen-Rechnung folgt: Die orangefarbene Nr.-1-Flagge geht stündlich an das Top-Buch jeder Kategorie — ein Buch mit 10 Verkäufen am Tag ist in der Elternkategorie unsichtbar und in der richtigen Unterkategorie Nr. 1.",
              "Das Abzeichen ist keine Eitelkeit: Es hebt die Klickrate überall, wo das Buch erscheint, einschließlich Suchergebnissen und Empfehlungszeilen. Realistischer Abzeichen-Zugang ist ein legitimes Kriterium der Kategoriewahl.",
            ],
            bullets: [
              "Drei Kategorien bei der Einrichtung, aus dem echten Browse-Baum.",
              "Tiefe Unterkategorien: weniger Traffic, viel weniger Wettbewerb, Abzeichen-Zugang.",
              "Das Nr.-1-Abzeichen wird stündlich pro Kategorie berechnet und hebt die Klickrate storeweit.",
              "Kategorie-Bestsellerlisten werden von echten Käufern durchstöbert — Regalplatz zählt.",
            ],
          },
          {
            id: "kategorien-waehlen",
            title: "Ihre drei wählen: das Dreieck aus Relevanz, Wettbewerb und Traffic",
            body: [
              "Bauen Sie eine Kandidatenliste, indem Sie den Store ablaufen: Finden Sie fünf vergleichbare Bücher, scrollen Sie zu deren Kategorien auf der Produktseite und kartieren Sie jeden genutzten Pfad. Ergänzen Sie Pfade aus dem Baum rund um Ihr Thema. Zielen Sie auf zehn Kandidaten.",
              "Bewerten Sie jeden auf drei Achsen: Relevanz (würde ein Stöberer dieses Regals dieses Buch wirklich wollen? — falsch einsortierte Bücher werden gemeldet, herabgestuft und konvertieren ohnehin miserabel), Wettbewerb (welchen BSR hält die Nr. 1 dieser Kategorie — das ist die Abzeichen-Latte) und Traffic (wie stark sind die BSRs der Top 20 — eine Kategorie, deren Nr. 20 bei 800.000 dümpelt, hat keine Stöberer zu bieten).",
              "Wählen Sie dann ein Portfolio, nicht drei Kopien derselben Wette: eine Kategorie für Traffic (größer, härter), eine fürs Abzeichen (tief, gewinnbar), eine für einen eigenen Publikumswinkel (das Geschenkregal, das Berufsregal, das Regionalregal). Drei Kategorien auf drei Leserpopulationen verdreifachen die Entdeckungsfläche.",
            ],
            bullets: [
              "Kandidatenpfade von fünf Vergleichsbüchern plus Baum-Browsing ernten.",
              "Nach Relevanz, Abzeichen-Latte (BSR der Nr. 1) und Regal-Traffic (Top-20-BSRs) bewerten.",
              "Portfolio-Strategie: eine Traffic-Wette, eine Abzeichen-Wette, eine Winkel-Wette.",
              "Fehleinsortierung konvertiert schlecht und riskiert Herabstufung — Relevanz ist eine Bedingung.",
            ],
          },
          {
            id: "iteration",
            title: "Kategorien wechseln und die Ergebnisse lesen",
            body: [
              "Kategorien sind editierbar: Ändern Sie sie im KDP-Bücherregal, mit Wirkung binnen ein bis zwei Tagen. Behandeln Sie es wie jede Metadatenänderung als Experiment — eine Kategorie pro Wechsel, dann zwei bis drei Wochen Impressionen, Verkäufe und Abzeichen-Status beobachten.",
              "Handlungssignale: ein Buch tief feststeckend im Ranking einer Traffic-Kategorie (eine tiefere Unterkategorie für Abzeichen-Zugang versuchen), ein trivial gehaltenes Abzeichen in einer toten Kategorie (gegen Traffic eintauschen), Seite-eins-Impressionen ohne Konversion (ein Relevanzproblem — Stöberer sehen das Buch und springen ab).",
              "Führen Sie ein kleines Protokoll der Kategoriewechsel und Ergebnisse pro Titel. Über einen Katalog hinweg wird das Protokoll zur privaten Karte, welche Regale in Ihren Nischen wirklich Bücher bewegen — Wissen, das kein Tool verkauft und kein Konkurrent kopieren kann.",
            ],
            bullets: [
              "Kategorien jederzeit im Bücherregal änderbar; Wirkung in 1-2 Tagen.",
              "Ein Wechsel pro Test, 2-3-Wochen-Fenster.",
              "Tief feststeckend → tiefer gehen; triviales Abzeichen → hochtauschen; Impressionen ohne Verkäufe → Relevanzproblem.",
              "Ein Wechselprotokoll über den Katalog wird zu proprietärem Regalwissen.",
            ],
          },
        ],
        checklist: [
          "Top-20-BSR-Scan für die Nische vor dem Schreiben erledigt (Geld + Platz).",
          "Zehn Kategorie-Kandidatenpfade aus Vergleichsbüchern und Baum geerntet.",
          "Kandidaten nach Relevanz, Abzeichen-Latte und Regal-Traffic bewertet.",
          "Drei Kategorien als Portfolio gewählt: Traffic, Abzeichen, Winkel.",
          "Jede gewählte Kategorie besteht den Ehrlichkeits-Relevanztest.",
          "BSR der Nr. 1 der Abzeichen-Kategorie mit Ihrer realistischen Geschwindigkeit verglichen.",
          "Zwei-bis-drei-Wochen-Beobachtungsfenster nach jedem Kategoriewechsel.",
          "Kategoriewechsel-Protokoll über den Katalog geführt.",
        ],
        faq: [
          {
            question: "Was ist ein guter BSR für ein Buch?",
            answer:
              "Kommt aufs Ziel an: unter 100.000 (etwa ein Verkauf pro Tag) lohnt ein Katalogtitel; unter 10.000 ist ein solider Verdiener; unter 1.000 ein Hit. Für die Nischenrecherche zählt das BSR-Profil der Top 20 einer Kategorie, nicht eine Einzelzahl.",
          },
          {
            question: "Wie viele Kategorien kann ein KDP-Buch haben?",
            answer:
              "Drei, gewählt aus Amazons Browse-Baum bei der Einrichtung und später im Bücherregal editierbar. Der historische Trick, den Support für zehn Platzierungen anzuschreiben, gilt nicht mehr.",
          },
          {
            question: "Wie bekomme ich das Nr.-1-Bestseller-Abzeichen?",
            answer:
              "Indem Sie jedes Buch in einer Ihrer Kategorien für ein stündliches Aktualisierungsfenster überholen. Der praktische Weg: eine tiefe, relevante Unterkategorie, deren aktuelle Nr. 1 einen BSR hält, den Ihre Launch-Wochen-Geschwindigkeit schlagen kann — genau deshalb gehört Kategorierecherche vor den Launch.",
          },
          {
            question: "Beeinflusst ein Kategoriewechsel meinen Verkaufsrang?",
            answer:
              "Nein — der BSR wird storeweit aus der Verkaufsgeschwindigkeit berechnet, unabhängig von Kategorien. Kategorien zu wechseln ändert, welche Regale und Bestsellerlisten das Buch zeigen, was künftige Verkäufe ändern kann, die dann den Rang bewegen.",
          },
          {
            question: "Warum steht mein Buch in einer Kategorie, die ich nie gewählt habe?",
            answer:
              "Amazon platziert Bücher manchmal automatisch anhand von Keywords und Inhaltssignalen. Verzerrt die Platzierung das Buch, kontaktieren Sie den KDP-Support zur Korrektur — Fehleinsortierung erstickt die Konversion und zieht Lesermeldungen an.",
          },
        ],
      },
    },
  },
  {
    key: "get-book-reviews",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 13,
    accent: {
      start: "#f5f8ff",
      middle: "#cfe0ff",
      end: "#b9ead7",
    },
    translations: {
      en: {
        slug: "how-to-get-book-reviews-self-published",
        title: "How to get reviews for a self-published book — legitimately, and without losing your KDP account",
        description:
          "A clean review-building system: why the first 10 reviews matter most, Amazon's strict rules and the practices that kill accounts, ARC teams, in-book asks, reviewer outreach and a 90-day plan.",
        keywords: [
          "how to get book reviews",
          "book reviews self published",
          "Amazon review rules authors",
          "ARC team book launch",
          "get reviews KDP",
          "book reviewers outreach",
          "Amazon verified reviews books",
          "review strategy authors",
        ],
        category: "Reviews",
        intro: [
          "Reviews are the conversion currency of Amazon: shoppers filter by them, the algorithm weighs them, ad clicks convert in proportion to them. And they are the one asset you cannot buy, trade for, or manufacture without risking the account that everything else depends on.",
          "The constraint is tighter than most authors realize — and so is the opportunity, because the legitimate playbook is straightforward and most competitors never run it. A book that reaches 10–15 honest reviews in its first quarter has passed the credibility threshold most indie books never cross.",
          "This guide covers the rules precisely (what Amazon actually forbids), then the system: launch-team mechanics, the in-book ask, reviewer outreach, and the steady-state loop that compounds across a catalog.",
        ],
        sections: [
          {
            id: "why-first-ten",
            title: "Why the first ten reviews are worth more than the next hundred",
            body: [
              "Review count works on thresholds, not linearly. Zero reviews reads as untested and suppresses conversion regardless of the listing's quality; a handful establishes that real readers finished the book; around 10–15, the social-proof question disappears from the buying decision and other factors take over.",
              "The early reviews also unlock everything else: most promo newsletters require minimum review counts, ads convert measurably better against visible stars, and the algorithm's recommendation surfaces favor books with engagement signals.",
              "This is why review-building belongs in the launch plan with dates and owners — not in the 'hopefully it happens' column. The system below is designed to reach the threshold within 60–90 days of launch.",
            ],
            bullets: [
              "Thresholds, not linear: 0 suppresses, ~10–15 normalizes.",
              "Reviews gate promo newsletters, ad efficiency and recommendations.",
              "Plan reviews like a launch workstream with dates.",
              "Target: 10–15 honest reviews in the first 60–90 days.",
            ],
          },
          {
            id: "rules",
            title: "The rules: what Amazon actually forbids",
            body: [
              "Forbidden, with enforcement that includes review removal, book suppression and account termination: paying for reviews in money or gifts, review swaps with other authors, reviews from family and close friends (Amazon's graph is better than people assume), incentivizing reviews ('free book for a 5-star'), and directing only happy readers to review while diverting unhappy ones — rating manipulation in Amazon's language.",
              "Allowed, explicitly: distributing free advance copies in exchange for the possibility of an honest review (the ARC model), asking readers in the book to review, asking your mailing list, and submitting the book to editorial reviewers and book bloggers whose reviews appear off-Amazon or in the editorial section.",
              "The line is consideration and control: you may give a copy and ask for honesty; you may never give value contingent on a review existing or being positive. Every gray-area trick converges on the same account-level risk, and the account is the business.",
            ],
            bullets: [
              "Forbidden: paid reviews, swaps, family, incentives, happy-path gating.",
              "Allowed: ARC copies, in-book asks, list asks, editorial reviewers.",
              "Test: is anything of value contingent on the review? Then it's forbidden.",
              "Penalties run to account termination — never worth it.",
            ],
          },
          {
            id: "arc-team",
            title: "The ARC team: your launch-week engine",
            body: [
              "An ARC (advance reader copy) team is a list of readers who receive the book free before or at launch, with a clear, compliant framing: 'an honest review would help enormously — honest meaning whatever you actually think.' For a first book, recruit from relevant communities, social platforms and niche groups where the topic lives; 20–40 sign-ups typically yield 8–15 reviews.",
              "Logistics that raise the yield: deliver the book in the reader's preferred format (BookFunnel-style services automate this), send one launch-day note with the direct review link, and one reminder ten days later. Beyond that, let it go — chasing reads as pressure.",
              "From book two onward, the team compounds: a back-of-book invitation ('want early copies of the next one?') turns this book's readers into next book's ARC team — one of the quiet mechanics behind the catalog effect.",
            ],
            bullets: [
              "20–40 ARC readers ≈ 8–15 launch-window reviews.",
              "Framing is honesty-first; the copy is free regardless.",
              "One launch note + one reminder; then stop.",
              "Back-of-book invitations roll the team forward to the next title.",
            ],
          },
          {
            id: "in-book-ask",
            title: "The in-book ask: the cheapest review machine you control",
            body: [
              "The reader most likely to review is the one who just finished and liked the book — and the final page is your only guaranteed contact with them. A short, human note works: what the book hoped to do, why reviews decide whether independent books get found, and that a sentence or two is genuinely enough.",
              "Keep it compliant and friction-free: no conditions, no 'if you loved it' gating, just the ask. Ebooks can link directly to the review page; print readers will search the title, so the ask matters even more there.",
              "Make the ask part of the manuscript template so every book ships with it — pipeline-produced books included; a DraftToDone manuscript's closing matter is exactly where this page belongs. Across a catalog, a percentage-point improvement in review rate per book is structural advantage.",
            ],
            bullets: [
              "The final page is the highest-intent review moment you own.",
              "Human note, no conditions, one link (ebook) or one sentence of guidance (print).",
              "Template it: every title ships with the ask page.",
              "Small per-book rates compound hard across catalogs.",
            ],
          },
          {
            id: "outreach-steady-state",
            title: "Outreach, promo lists and the steady-state loop",
            body: [
              "Beyond launch: niche book bloggers, BookTubers and newsletter curators review indie books and influence buyers off-Amazon. Pitch the specific fit ('your readers loved X, this sits beside it'), accept that response rates are low, and treat each placement as durable marketing rather than a review count increment.",
              "Free and paid promo newsletters (the BookBub-featured-deal tier and its many smaller siblings) drive concentrated downloads during price promotions — and downloads at volume produce reviews at the natural background rate. A promo spike that moves several hundred copies typically seeds a handful of unprompted reviews.",
              "Steady state: every new sale is a lottery ticket at the background review rate (roughly one review per 100–200 sales unprompted; several times that with a good in-book ask). The loop — sales produce reviews, reviews improve conversion, conversion produces sales — is slow to start and powerful once spinning. Protect it by never touching the forbidden list, and by publishing books worth reviewing: review velocity is, finally, a quality signal you cannot fake.",
            ],
            bullets: [
              "Bloggers and curators: pitch fit, expect low rates, value durability.",
              "Promo-driven download spikes seed reviews at the background rate.",
              "Background rate ~1/100–200 sales; in-book asks multiply it.",
              "The flywheel: sales → reviews → conversion → sales. Protect it.",
            ],
          },
        ],
        checklist: [
          "Review targets set: 10–15 honest reviews within 60–90 days.",
          "Forbidden-practices list reviewed; nothing in the plan violates it.",
          "ARC team recruited (20–40 readers) with honesty-first framing.",
          "Launch-day note and day-10 reminder scheduled with direct review links.",
          "In-book ask page included in the manuscript template, every title.",
          "Five to ten niche reviewers/bloggers pitched with specific fit.",
          "Promo newsletter submissions planned once review minimums are met.",
          "Back-of-book ARC invitation rolling readers to the next title.",
        ],
        faq: [
          {
            question: "Can I ask friends and family to review my book?",
            answer:
              "No — Amazon's guidelines prohibit reviews from people with a personal relationship to the author, and its detection of those connections is good. Channel friends and family toward sharing the book with their networks instead; their friends are legitimate reviewers.",
          },
          {
            question: "Are ARC copies allowed under Amazon's rules?",
            answer:
              "Yes. Distributing free advance copies with a request for an honest review is the standard, compliant practice — publishers have done it for a century. The copy must be free regardless of whether a review appears or what it says.",
          },
          {
            question: "How many sales does it take to get a review naturally?",
            answer:
              "Unprompted, roughly one review per 100–200 sales. A well-placed in-book ask several-fold improves that rate, which is why the final page of the manuscript is the highest-leverage review asset you control.",
          },
          {
            question: "Should I respond to negative reviews?",
            answer:
              "No. Author responses to negative reviews read as defensive at best. Extract anything actionable (a formatting complaint, a mis-set expectation from the description), fix it, and let your other reviews answer for the book.",
          },
          {
            question: "Do Goodreads reviews help Amazon sales?",
            answer:
              "Indirectly: Goodreads ratings appear in some Kindle surfaces and many readers cross-check before buying. ARC teams are typically happy to post on both platforms — ask for both links in your launch note.",
          },
        ],
      },
      fr: {
        slug: "obtenir-avis-lecteurs-livre-auto-edite",
        title: "Comment obtenir des avis pour un livre auto-édité — légitimement, sans risquer son compte KDP",
        description:
          "Un système propre de construction d'avis : pourquoi les 10 premiers comptent le plus, les règles strictes d'Amazon et les pratiques qui tuent des comptes, les équipes de lecture anticipée, la demande en fin de livre et un plan sur 90 jours.",
        keywords: [
          "obtenir des avis livre",
          "avis lecteurs livre auto-édité",
          "règles avis Amazon auteurs",
          "équipe ARC lancement livre",
          "avoir des avis KDP",
          "contacter chroniqueurs livre",
          "avis vérifiés Amazon livres",
          "stratégie avis auteurs",
        ],
        category: "Avis",
        intro: [
          "Les avis sont la monnaie de conversion d'Amazon : les acheteurs filtrent par eux, l'algorithme les pèse, les clics publicitaires convertissent à proportion. Et ils sont le seul actif que vous ne pouvez ni acheter, ni échanger, ni fabriquer sans risquer le compte dont tout le reste dépend.",
          "La contrainte est plus stricte que la plupart des auteurs ne l'imaginent — et l'opportunité aussi, car la méthode légitime est simple et la plupart des concurrents ne l'exécutent jamais. Un livre qui atteint 10 à 15 avis honnêtes dans son premier trimestre a franchi le seuil de crédibilité que la plupart des livres indépendants ne franchissent jamais.",
          "Ce guide couvre précisément les règles (ce qu'Amazon interdit réellement), puis le système : la mécanique d'équipe de lancement, la demande en fin de livre, le contact des chroniqueurs, et la boucle de régime permanent qui se compose à l'échelle d'un catalogue.",
        ],
        sections: [
          {
            id: "dix-premiers",
            title: "Pourquoi les dix premiers avis valent plus que les cent suivants",
            body: [
              "Le nombre d'avis fonctionne par seuils, pas linéairement. Zéro avis se lit comme « non testé » et étouffe la conversion quelle que soit la qualité de la fiche ; une poignée établit que de vrais lecteurs ont fini le livre ; vers 10–15, la question de la preuve sociale disparaît de la décision d'achat et d'autres facteurs prennent le relais.",
              "Les premiers avis déverrouillent aussi tout le reste : la plupart des newsletters promotionnelles exigent des minima d'avis, la publicité convertit mesurablement mieux avec des étoiles visibles, et les surfaces de recommandation de l'algorithme favorisent les livres à signaux d'engagement.",
              "C'est pourquoi la construction d'avis appartient au plan de lancement, avec dates et responsables — pas à la colonne « on verra bien ». Le système ci-dessous vise le seuil sous 60 à 90 jours après le lancement.",
            ],
            bullets: [
              "Des seuils, pas du linéaire : 0 étouffe, ~10–15 normalise.",
              "Les avis conditionnent newsletters promo, efficacité publicitaire et recommandations.",
              "Planifiez les avis comme un chantier de lancement daté.",
              "Cible : 10–15 avis honnêtes dans les 60–90 premiers jours.",
            ],
          },
          {
            id: "regles",
            title: "Les règles : ce qu'Amazon interdit réellement",
            body: [
              "Interdits, avec des sanctions allant de la suppression d'avis à la résiliation du compte : payer des avis en argent ou en cadeaux, échanger des avis entre auteurs, les avis de la famille et des proches (le graphe d'Amazon est meilleur qu'on ne le croit), conditionner un avantage à un avis (« livre gratuit contre 5 étoiles »), et n'aiguiller vers l'avis que les lecteurs contents en détournant les mécontents — de la manipulation de note dans le langage d'Amazon.",
              "Autorisés, explicitement : distribuer des exemplaires anticipés gratuits en échange de la possibilité d'un avis honnête (le modèle ARC), demander un avis dans le livre, solliciter sa liste de diffusion, et soumettre le livre à des chroniqueurs et blogueurs dont les critiques paraissent hors Amazon ou en section éditoriale.",
              "La ligne, c'est la contrepartie et le contrôle : vous pouvez offrir un exemplaire et demander l'honnêteté ; vous ne pouvez jamais conditionner une valeur à l'existence ou à la positivité d'un avis. Toutes les astuces de zone grise convergent vers le même risque au niveau du compte — et le compte, c'est l'entreprise.",
            ],
            bullets: [
              "Interdits : avis payés, échanges, famille, contreparties, tri des contents.",
              "Autorisés : exemplaires ARC, demande en fin de livre, liste de diffusion, chroniqueurs.",
              "Test : une valeur dépend-elle de l'avis ? Alors c'est interdit.",
              "Les sanctions vont jusqu'à la résiliation du compte — jamais rentable.",
            ],
          },
          {
            id: "equipe-arc",
            title: "L'équipe ARC : votre moteur de semaine de lancement",
            body: [
              "Une équipe ARC (exemplaires anticipés) est une liste de lecteurs qui reçoivent le livre gratuitement avant ou pendant le lancement, avec un cadrage clair et conforme : « un avis honnête aiderait énormément — honnête voulant dire ce que vous pensez vraiment ». Pour un premier livre, recrutez dans les communautés pertinentes, les réseaux et les groupes de niche où vit le sujet ; 20 à 40 inscrits produisent typiquement 8 à 15 avis.",
              "La logistique qui augmente le rendement : livrez le livre dans le format préféré du lecteur (les services type BookFunnel l'automatisent), envoyez un message le jour du lancement avec le lien direct vers la page d'avis, et un rappel dix jours plus tard. Au-delà, lâchez prise — l'insistance se lit comme de la pression.",
              "À partir du deuxième livre, l'équipe se compose : une invitation en fin d'ouvrage (« envie de recevoir le prochain en avant-première ? ») transforme les lecteurs de ce livre en équipe ARC du suivant — une des mécaniques silencieuses derrière l'effet catalogue.",
            ],
            bullets: [
              "20–40 lecteurs ARC ≈ 8–15 avis dans la fenêtre de lancement.",
              "Cadrage honnêteté d'abord ; l'exemplaire est gratuit quoi qu'il arrive.",
              "Un message au lancement + un rappel ; puis stop.",
              "L'invitation en fin de livre fait rouler l'équipe vers le titre suivant.",
            ],
          },
          {
            id: "demande-fin-livre",
            title: "La demande en fin de livre : la machine à avis la moins chère que vous contrôlez",
            body: [
              "Le lecteur le plus susceptible de laisser un avis est celui qui vient de finir et d'aimer le livre — et la dernière page est votre seul contact garanti avec lui. Une note courte et humaine fonctionne : ce que le livre espérait accomplir, pourquoi les avis décident de la visibilité des livres indépendants, et qu'une phrase ou deux suffisent vraiment.",
              "Restez conforme et sans friction : aucune condition, pas de tri « si vous avez aimé », juste la demande. L'ebook peut lier directement la page d'avis ; le lecteur papier cherchera le titre, donc la demande y compte encore plus.",
              "Intégrez la demande au gabarit de manuscrit pour que chaque livre parte avec — livres issus de pipeline compris ; les pages finales d'un manuscrit DraftToDone sont exactement l'endroit de cette page. À l'échelle d'un catalogue, un point de pourcentage de taux d'avis par livre est un avantage structurel.",
            ],
            bullets: [
              "La dernière page est le moment de plus forte intention que vous possédez.",
              "Note humaine, sans condition, un lien (ebook) ou une phrase de guidage (papier).",
              "Gabarisez : chaque titre part avec sa page de demande.",
              "De petits taux par livre se composent fort à l'échelle du catalogue.",
            ],
          },
          {
            id: "regime-permanent",
            title: "Chroniqueurs, newsletters promo et la boucle de régime permanent",
            body: [
              "Au-delà du lancement : blogueurs littéraires de niche, BookTubeurs et curateurs de newsletters chroniquent les livres indépendants et influencent les acheteurs hors Amazon. Proposez l'adéquation précise (« vos lecteurs ont aimé X, celui-ci se range à côté »), acceptez des taux de réponse bas, et considérez chaque placement comme du marketing durable plutôt qu'un incrément de compteur.",
              "Les newsletters promotionnelles gratuites et payantes (l'étage BookBub et ses nombreux petits frères) concentrent des téléchargements pendant les promotions de prix — et le volume produit des avis au taux de base naturel. Un pic promo qui écoule quelques centaines d'exemplaires sème typiquement une poignée d'avis spontanés.",
              "Régime permanent : chaque vente nouvelle est un ticket de loterie au taux de base (environ un avis pour 100 à 200 ventes sans sollicitation ; plusieurs fois plus avec une bonne demande en fin de livre). La boucle — les ventes produisent des avis, les avis améliorent la conversion, la conversion produit des ventes — démarre lentement et devient puissante une fois lancée. Protégez-la en ne touchant jamais à la liste des interdits, et en publiant des livres qui méritent d'être chroniqués : la vélocité des avis est, au fond, un signal de qualité infalsifiable.",
            ],
            bullets: [
              "Blogueurs et curateurs : proposez l'adéquation, attendez peu, valorisez la durabilité.",
              "Les pics de téléchargements promo sèment des avis au taux de base.",
              "Taux de base ~1/100–200 ventes ; la demande en fin de livre le multiplie.",
              "Le volant : ventes → avis → conversion → ventes. Protégez-le.",
            ],
          },
        ],
        checklist: [
          "Objectif fixé : 10–15 avis honnêtes sous 60–90 jours.",
          "Liste des pratiques interdites relue ; rien dans le plan ne la viole.",
          "Équipe ARC recrutée (20–40 lecteurs) avec cadrage honnêteté d'abord.",
          "Message de lancement et rappel à J+10 programmés avec liens directs.",
          "Page de demande d'avis intégrée au gabarit de manuscrit, chaque titre.",
          "Cinq à dix chroniqueurs/blogueurs de niche contactés avec adéquation précise.",
          "Soumissions aux newsletters promo planifiées une fois les minima d'avis atteints.",
          "Invitation ARC en fin d'ouvrage faisant rouler les lecteurs vers le titre suivant.",
        ],
        faq: [
          {
            question: "Puis-je demander à mes amis et ma famille de laisser un avis ?",
            answer:
              "Non — les règles d'Amazon interdisent les avis de personnes ayant une relation personnelle avec l'auteur, et sa détection de ces liens est bonne. Orientez plutôt les proches vers le partage du livre avec leurs réseaux ; leurs amis, eux, sont des chroniqueurs légitimes.",
          },
          {
            question: "Les exemplaires ARC sont-ils autorisés par Amazon ?",
            answer:
              "Oui. Distribuer des exemplaires anticipés gratuits avec une demande d'avis honnête est la pratique standard et conforme — les éditeurs le font depuis un siècle. L'exemplaire doit rester gratuit qu'un avis paraisse ou non, et quel qu'en soit le contenu.",
          },
          {
            question: "Combien de ventes faut-il pour obtenir un avis naturellement ?",
            answer:
              "Sans sollicitation, environ un avis pour 100 à 200 ventes. Une demande bien placée en fin de livre multiplie ce taux — c'est pourquoi la dernière page du manuscrit est l'actif d'avis au meilleur levier que vous contrôliez.",
          },
          {
            question: "Faut-il répondre aux avis négatifs ?",
            answer:
              "Non. Une réponse d'auteur à un avis négatif paraît au mieux défensive. Extrayez ce qui est actionnable (un défaut de mise en page, une attente mal réglée par la description), corrigez-le, et laissez vos autres avis répondre pour le livre.",
          },
          {
            question: "Les avis Goodreads aident-ils les ventes Amazon ?",
            answer:
              "Indirectement : les notes Goodreads apparaissent sur certaines surfaces Kindle et beaucoup de lecteurs recoupent avant d'acheter. Les équipes ARC acceptent généralement volontiers de publier sur les deux plateformes — demandez les deux liens dans votre message de lancement.",
          },
        ],
      },
      it: {
        slug: "ottenere-recensioni-libro-autopubblicato",
        title: "Come ottenere recensioni per un libro autopubblicato — legittimamente, senza rischiare l'account KDP",
        description:
          "Un sistema pulito per costruire recensioni: perché le prime 10 contano di più, le regole rigide di Amazon e le pratiche che chiudono account, le squadre di lettura anticipata, la richiesta a fine libro e un piano su 90 giorni.",
        keywords: [
          "ottenere recensioni libro",
          "recensioni libro autopubblicato",
          "regole recensioni Amazon autori",
          "squadra ARC lancio libro",
          "avere recensioni KDP",
          "contattare recensori libri",
          "recensioni verificate Amazon libri",
          "strategia recensioni autori",
        ],
        category: "Recensioni",
        intro: [
          "Le recensioni sono la moneta di conversione di Amazon: gli acquirenti filtrano in base ad esse, l'algoritmo le pesa, i clic pubblicitari convertono in proporzione. E sono l'unico asset che non potete comprare, scambiare o fabbricare senza rischiare l'account da cui tutto il resto dipende.",
          "Il vincolo è più stretto di quanto la maggior parte degli autori creda — e lo è anche l'opportunità, perché il metodo legittimo è semplice e la maggior parte dei concorrenti non lo esegue mai. Un libro che raggiunge 10-15 recensioni oneste nel primo trimestre ha superato la soglia di credibilità che la maggior parte dei libri indipendenti non supera mai.",
          "Questa guida copre con precisione le regole (ciò che Amazon vieta davvero), poi il sistema: la meccanica della squadra di lancio, la richiesta a fine libro, il contatto dei recensori, e il ciclo a regime che si compone alla scala di un catalogo.",
        ],
        sections: [
          {
            id: "prime-dieci",
            title: "Perché le prime dieci recensioni valgono più delle cento successive",
            body: [
              "Il numero di recensioni funziona a soglie, non linearmente. Zero recensioni si legge come « non testato » e soffoca la conversione qualunque sia la qualità della scheda; una manciata stabilisce che lettori reali hanno finito il libro; verso 10-15, la questione della prova sociale sparisce dalla decisione d'acquisto e altri fattori prendono il sopravvento.",
              "Le prime recensioni sbloccano anche tutto il resto: la maggior parte delle newsletter promozionali esige minimi di recensioni, la pubblicità converte misurabilmente meglio con stelle visibili, e le superfici di raccomandazione dell'algoritmo favoriscono i libri con segnali di coinvolgimento.",
              "Ecco perché la costruzione delle recensioni appartiene al piano di lancio, con date e responsabili — non alla colonna « si vedrà ». Il sistema qui sotto punta alla soglia entro 60-90 giorni dal lancio.",
            ],
            bullets: [
              "Soglie, non linearità: 0 soffoca, ~10-15 normalizza.",
              "Le recensioni condizionano newsletter promo, efficienza pubblicitaria e raccomandazioni.",
              "Pianificate le recensioni come un cantiere di lancio con date.",
              "Obiettivo: 10-15 recensioni oneste nei primi 60-90 giorni.",
            ],
          },
          {
            id: "regole",
            title: "Le regole: ciò che Amazon vieta davvero",
            body: [
              "Vietati, con sanzioni che vanno dalla rimozione delle recensioni alla chiusura dell'account: pagare recensioni in denaro o regali, scambiare recensioni tra autori, le recensioni di famiglia e amici stretti (il grafo di Amazon è migliore di quanto si creda), condizionare un vantaggio a una recensione (« libro gratis per 5 stelle »), e indirizzare verso la recensione solo i lettori contenti deviando gli scontenti — manipolazione del voto nel linguaggio di Amazon.",
              "Permessi, esplicitamente: distribuire copie anticipate gratuite in cambio della possibilità di una recensione onesta (il modello ARC), chiedere una recensione dentro il libro, sollecitare la propria lista email, e sottoporre il libro a critici e blogger le cui recensioni appaiono fuori da Amazon o nella sezione editoriale.",
              "La linea è la contropartita e il controllo: potete offrire una copia e chiedere onestà; non potete mai condizionare un valore all'esistenza o alla positività di una recensione. Tutti i trucchi di zona grigia convergono verso lo stesso rischio a livello di account — e l'account è l'impresa.",
            ],
            bullets: [
              "Vietati: recensioni pagate, scambi, famiglia, contropartite, selezione dei contenti.",
              "Permessi: copie ARC, richiesta a fine libro, lista email, critici editoriali.",
              "Test: un valore dipende dalla recensione? Allora è vietato.",
              "Le sanzioni arrivano alla chiusura dell'account — mai redditizio.",
            ],
          },
          {
            id: "squadra-arc",
            title: "La squadra ARC: il motore della settimana di lancio",
            body: [
              "Una squadra ARC (copie anticipate) è una lista di lettori che ricevono il libro gratis prima o durante il lancio, con un inquadramento chiaro e conforme: « una recensione onesta aiuterebbe enormemente — onesta nel senso di ciò che pensate davvero ». Per un primo libro, reclutate nelle comunità pertinenti, sui social e nei gruppi di nicchia dove vive il tema; 20-40 iscritti producono tipicamente 8-15 recensioni.",
              "La logistica che alza il rendimento: consegnate il libro nel formato preferito del lettore (i servizi tipo BookFunnel lo automatizzano), inviate un messaggio il giorno del lancio con il link diretto alla pagina delle recensioni, e un promemoria dieci giorni dopo. Oltre, lasciate andare — l'insistenza si legge come pressione.",
              "Dal secondo libro in poi, la squadra si compone: un invito in fondo al libro (« volete ricevere il prossimo in anteprima? ») trasforma i lettori di questo libro nella squadra ARC del prossimo — una delle meccaniche silenziose dietro l'effetto catalogo.",
            ],
            bullets: [
              "20-40 lettori ARC ≈ 8-15 recensioni nella finestra di lancio.",
              "Inquadramento onestà prima di tutto; la copia è gratis comunque.",
              "Un messaggio al lancio + un promemoria; poi stop.",
              "L'invito a fine libro fa rotolare la squadra verso il titolo successivo.",
            ],
          },
          {
            id: "richiesta-fine-libro",
            title: "La richiesta a fine libro: la macchina per recensioni meno costosa che controllate",
            body: [
              "Il lettore più propenso a recensire è quello che ha appena finito e apprezzato il libro — e l'ultima pagina è il vostro unico contatto garantito con lui. Una nota corta e umana funziona: cosa sperava di fare il libro, perché le recensioni decidono la visibilità dei libri indipendenti, e che una frase o due bastano davvero.",
              "Restate conformi e senza attrito: nessuna condizione, niente selezione « se vi è piaciuto », solo la richiesta. L'ebook può linkare direttamente la pagina delle recensioni; il lettore cartaceo cercherà il titolo, quindi la richiesta lì conta ancora di più.",
              "Integrate la richiesta nel modello di manoscritto perché ogni libro parta con essa — libri da pipeline compresi; le pagine finali di un manoscritto DraftToDone sono esattamente il posto di questa pagina. Alla scala di un catalogo, un punto percentuale di tasso di recensione per libro è un vantaggio strutturale.",
            ],
            bullets: [
              "L'ultima pagina è il momento di massima intenzione che possedete.",
              "Nota umana, senza condizioni, un link (ebook) o una frase di guida (cartaceo).",
              "Fatene un modello: ogni titolo parte con la sua pagina di richiesta.",
              "Piccoli tassi per libro si compongono forte alla scala del catalogo.",
            ],
          },
          {
            id: "regime-permanente",
            title: "Critici, newsletter promo e il ciclo a regime",
            body: [
              "Oltre il lancio: blogger letterari di nicchia, BookTuber e curatori di newsletter recensiscono libri indipendenti e influenzano gli acquirenti fuori da Amazon. Proponete l'abbinamento preciso (« ai vostri lettori è piaciuto X, questo gli sta accanto »), accettate tassi di risposta bassi, e considerate ogni collocazione marketing durevole più che un incremento di contatore.",
              "Le newsletter promozionali gratuite e a pagamento (il livello BookBub e i suoi tanti fratelli minori) concentrano download durante le promozioni di prezzo — e il volume produce recensioni al tasso di base naturale. Un picco promo che muove qualche centinaio di copie semina tipicamente una manciata di recensioni spontanee.",
              "A regime: ogni nuova vendita è un biglietto della lotteria al tasso di base (circa una recensione ogni 100-200 vendite senza sollecito; diverse volte tanto con una buona richiesta a fine libro). Il ciclo — le vendite producono recensioni, le recensioni migliorano la conversione, la conversione produce vendite — parte lento e diventa potente una volta avviato. Proteggetelo non toccando mai la lista dei divieti, e pubblicando libri che meritano recensioni: la velocità delle recensioni è, in fondo, un segnale di qualità infalsificabile.",
            ],
            bullets: [
              "Blogger e curatori: proponete l'abbinamento, aspettatevi poco, valorizzate la durabilità.",
              "I picchi di download promo seminano recensioni al tasso di base.",
              "Tasso di base ~1/100-200 vendite; la richiesta a fine libro lo moltiplica.",
              "Il volano: vendite → recensioni → conversione → vendite. Proteggetelo.",
            ],
          },
        ],
        checklist: [
          "Obiettivo fissato: 10-15 recensioni oneste entro 60-90 giorni.",
          "Lista delle pratiche vietate riletta; nulla nel piano la viola.",
          "Squadra ARC reclutata (20-40 lettori) con inquadramento onestà prima di tutto.",
          "Messaggio di lancio e promemoria a +10 giorni programmati con link diretti.",
          "Pagina di richiesta recensione integrata nel modello di manoscritto, ogni titolo.",
          "Cinque-dieci critici/blogger di nicchia contattati con abbinamento preciso.",
          "Invii alle newsletter promo pianificati una volta raggiunti i minimi di recensioni.",
          "Invito ARC a fine libro che fa rotolare i lettori verso il titolo successivo.",
        ],
        faq: [
          {
            question: "Posso chiedere ad amici e famiglia di recensire il mio libro?",
            answer:
              "No — le regole di Amazon vietano le recensioni di persone con una relazione personale con l'autore, e la sua capacità di rilevare quei legami è buona. Orientate piuttosto i vicini verso la condivisione del libro con le loro reti; i loro amici, quelli sì, sono recensori legittimi.",
          },
          {
            question: "Le copie ARC sono permesse dalle regole di Amazon?",
            answer:
              "Sì. Distribuire copie anticipate gratuite con una richiesta di recensione onesta è la pratica standard e conforme — gli editori lo fanno da un secolo. La copia deve restare gratuita che la recensione appaia o no, e qualunque sia il suo contenuto.",
          },
          {
            question: "Quante vendite servono per ottenere una recensione naturalmente?",
            answer:
              "Senza sollecito, circa una recensione ogni 100-200 vendite. Una richiesta ben posta a fine libro moltiplica quel tasso — ecco perché l'ultima pagina del manoscritto è l'asset per recensioni a miglior leva che controllate.",
          },
          {
            question: "Bisogna rispondere alle recensioni negative?",
            answer:
              "No. Una risposta d'autore a una recensione negativa appare nel migliore dei casi difensiva. Estraete ciò che è azionabile (un difetto di impaginazione, un'aspettativa mal regolata dalla descrizione), correggetelo, e lasciate che le altre recensioni rispondano per il libro.",
          },
          {
            question: "Le recensioni Goodreads aiutano le vendite Amazon?",
            answer:
              "Indirettamente: i voti Goodreads appaiono su certe superfici Kindle e molti lettori incrociano prima di comprare. Le squadre ARC accettano generalmente volentieri di pubblicare su entrambe le piattaforme — chiedete i due link nel vostro messaggio di lancio.",
          },
        ],
      },
      de: {
        slug: "buchrezensionen-bekommen-selfpublishing",
        title: "Rezensionen für ein selbstveröffentlichtes Buch bekommen — legitim und ohne das KDP-Konto zu verlieren",
        description:
          "Ein sauberes Rezensions-System: warum die ersten 10 am meisten zählen, Amazons strenge Regeln und die Praktiken, die Konten kosten, ARC-Teams, die Bitte im Buch, Rezensenten-Outreach und ein 90-Tage-Plan.",
        keywords: [
          "Buchrezensionen bekommen",
          "Rezensionen selbstveröffentlichtes Buch",
          "Amazon Rezensionsregeln Autoren",
          "ARC Team Buchlaunch",
          "Rezensionen KDP",
          "Buchblogger anschreiben",
          "Amazon verifizierte Rezensionen Bücher",
          "Rezensionsstrategie Autoren",
        ],
        category: "Rezensionen",
        intro: [
          "Rezensionen sind die Konversionswährung von Amazon: Käufer filtern nach ihnen, der Algorithmus gewichtet sie, Anzeigenklicks konvertieren proportional zu ihnen. Und sie sind der eine Vermögenswert, den Sie nicht kaufen, tauschen oder fabrizieren können, ohne das Konto zu riskieren, von dem alles andere abhängt.",
          "Die Beschränkung ist enger, als die meisten Autoren ahnen — und die Chance ebenso, denn das legitime Playbook ist geradlinig, und die meisten Konkurrenten führen es nie aus. Ein Buch, das im ersten Quartal 10-15 ehrliche Rezensionen erreicht, hat die Glaubwürdigkeitsschwelle überschritten, die die meisten Indie-Bücher nie überqueren.",
          "Dieser Leitfaden behandelt die Regeln präzise (was Amazon wirklich verbietet), dann das System: Launch-Team-Mechanik, die Bitte im Buch, Rezensenten-Outreach und die Dauerschleife, die sich über einen Katalog verzinst.",
        ],
        sections: [
          {
            id: "erste-zehn",
            title: "Warum die ersten zehn Rezensionen mehr wert sind als die nächsten hundert",
            body: [
              "Die Rezensionszahl wirkt über Schwellen, nicht linear. Null Rezensionen liest sich als ungetestet und drückt die Konversion unabhängig von der Qualität der Seite; eine Handvoll belegt, dass echte Leser das Buch beendet haben; um 10-15 verschwindet die Frage des sozialen Beweises aus der Kaufentscheidung, und andere Faktoren übernehmen.",
              "Die frühen Rezensionen schalten auch alles andere frei: Die meisten Promo-Newsletter verlangen Mindestrezensionszahlen, Anzeigen konvertieren messbar besser mit sichtbaren Sternen, und die Empfehlungsflächen des Algorithmus bevorzugen Bücher mit Engagement-Signalen.",
              "Deshalb gehört der Rezensionsaufbau in den Launch-Plan, mit Daten und Verantwortlichen — nicht in die Spalte « wird sich hoffentlich ergeben ». Das folgende System ist darauf ausgelegt, die Schwelle binnen 60-90 Tagen nach dem Launch zu erreichen.",
            ],
            bullets: [
              "Schwellen, nicht linear: 0 erstickt, ~10-15 normalisiert.",
              "Rezensionen schalten Promo-Newsletter, Anzeigeneffizienz und Empfehlungen frei.",
              "Rezensionen wie einen Launch-Arbeitsstrang mit Terminen planen.",
              "Ziel: 10-15 ehrliche Rezensionen in den ersten 60-90 Tagen.",
            ],
          },
          {
            id: "regeln",
            title: "Die Regeln: was Amazon wirklich verbietet",
            body: [
              "Verboten, mit Durchsetzung von Rezensionslöschung über Buchsperre bis Kontokündigung: Rezensionen mit Geld oder Geschenken bezahlen, Rezensionstausch mit anderen Autoren, Rezensionen von Familie und engen Freunden (Amazons Beziehungsgraph ist besser, als man annimmt), Rezensionen incentivieren (« Gratisbuch für 5 Sterne ») und nur zufriedene Leser zur Rezension lenken, während unzufriedene umgeleitet werden — in Amazons Sprache Bewertungsmanipulation.",
              "Erlaubt, ausdrücklich: kostenlose Vorabexemplare gegen die Möglichkeit einer ehrlichen Rezension verteilen (das ARC-Modell), Leser im Buch um eine Rezension bitten, die eigene Mailingliste fragen und das Buch redaktionellen Rezensenten und Buchbloggern vorlegen, deren Besprechungen außerhalb von Amazon oder im redaktionellen Bereich erscheinen.",
              "Die Grenze sind Gegenleistung und Kontrolle: Sie dürfen ein Exemplar geben und um Ehrlichkeit bitten; Sie dürfen nie einen Wert davon abhängig machen, dass eine Rezension existiert oder positiv ausfällt. Jeder Grauzonen-Trick mündet im selben Kontorisiko — und das Konto ist das Geschäft.",
            ],
            bullets: [
              "Verboten: bezahlte Rezensionen, Tausch, Familie, Anreize, Zufriedenen-Filter.",
              "Erlaubt: ARC-Exemplare, Bitte im Buch, Listen-Anfragen, redaktionelle Rezensenten.",
              "Test: Hängt etwas von Wert an der Rezension? Dann ist es verboten.",
              "Strafen reichen bis zur Kontokündigung — nie den Preis wert.",
            ],
          },
          {
            id: "arc-team",
            title: "Das ARC-Team: Ihr Motor für die Launch-Woche",
            body: [
              "Ein ARC-Team (Advance Reader Copies) ist eine Liste von Lesern, die das Buch vor oder zum Launch kostenlos erhalten, mit klarer, konformer Rahmung: « eine ehrliche Rezension würde enorm helfen — ehrlich heißt: was Sie wirklich denken ». Für ein erstes Buch rekrutieren Sie in relevanten Communities, sozialen Netzwerken und Nischengruppen, wo das Thema lebt; 20-40 Anmeldungen ergeben typischerweise 8-15 Rezensionen.",
              "Logistik, die die Ausbeute hebt: das Buch im bevorzugten Format des Lesers liefern (BookFunnel-artige Dienste automatisieren das), eine Launch-Tags-Nachricht mit dem direkten Rezensionslink senden und eine Erinnerung zehn Tage später. Darüber hinaus: loslassen — Nachhaken liest sich als Druck.",
              "Ab Buch zwei verzinst sich das Team: Eine Einladung am Buchende (« möchten Sie das nächste vorab lesen? ») verwandelt die Leser dieses Buchs in das ARC-Team des nächsten — eine der stillen Mechaniken hinter dem Katalogeffekt.",
            ],
            bullets: [
              "20-40 ARC-Leser ≈ 8-15 Rezensionen im Launch-Fenster.",
              "Ehrlichkeit-zuerst-Rahmung; das Exemplar ist in jedem Fall gratis.",
              "Eine Launch-Nachricht + eine Erinnerung; dann Schluss.",
              "Einladungen am Buchende rollen das Team zum nächsten Titel weiter.",
            ],
          },
          {
            id: "bitte-im-buch",
            title: "Die Bitte im Buch: die günstigste Rezensionsmaschine, die Sie kontrollieren",
            body: [
              "Der Leser, der am ehesten rezensiert, ist der, der das Buch gerade beendet und gemocht hat — und die letzte Seite ist Ihr einziger garantierter Kontakt mit ihm. Eine kurze, menschliche Notiz funktioniert: was das Buch erreichen wollte, warum Rezensionen über die Sichtbarkeit unabhängiger Bücher entscheiden, und dass ein, zwei Sätze wirklich genügen.",
              "Bleiben Sie konform und reibungsfrei: keine Bedingungen, kein « falls es Ihnen gefallen hat »-Filter, nur die Bitte. Ebooks können direkt zur Rezensionsseite verlinken; Print-Leser suchen den Titel, dort zählt die Bitte also noch mehr.",
              "Machen Sie die Bitte zum Teil der Manuskriptvorlage, damit jedes Buch mit ihr erscheint — Pipeline-Bücher eingeschlossen; die Schlussseiten eines DraftToDone-Manuskripts sind genau der Ort dieser Seite. Über einen Katalog ist ein Prozentpunkt mehr Rezensionsrate pro Buch ein struktureller Vorteil.",
            ],
            bullets: [
              "Die letzte Seite ist der absichtsstärkste Rezensionsmoment, den Sie besitzen.",
              "Menschliche Notiz, keine Bedingungen, ein Link (Ebook) oder ein Satz Anleitung (Print).",
              "Als Vorlage: Jeder Titel erscheint mit der Bitte-Seite.",
              "Kleine Raten pro Buch verzinsen sich stark über Kataloge.",
            ],
          },
          {
            id: "dauerbetrieb",
            title: "Outreach, Promo-Listen und die Dauerschleife",
            body: [
              "Jenseits des Launches: Nischen-Buchblogger, BookTuber und Newsletter-Kuratoren rezensieren Indie-Bücher und beeinflussen Käufer außerhalb von Amazon. Pitchen Sie die konkrete Passung (« Ihre Leser mochten X, dieses steht daneben »), akzeptieren Sie niedrige Antwortquoten und werten Sie jede Platzierung als dauerhaftes Marketing statt als Zählerstand.",
              "Kostenlose und bezahlte Promo-Newsletter (die BookBub-Featured-Deal-Liga und ihre vielen kleineren Geschwister) treiben konzentrierte Downloads während Preisaktionen — und Downloads in Menge erzeugen Rezensionen zur natürlichen Grundrate. Eine Promo-Spitze, die einige hundert Exemplare bewegt, sät typischerweise eine Handvoll spontaner Rezensionen.",
              "Dauerbetrieb: Jeder neue Verkauf ist ein Los zur Grundrate (etwa eine Rezension pro 100-200 Verkäufe unaufgefordert; ein Mehrfaches mit guter Bitte im Buch). Die Schleife — Verkäufe erzeugen Rezensionen, Rezensionen verbessern die Konversion, Konversion erzeugt Verkäufe — startet langsam und wird mächtig, sobald sie läuft. Schützen Sie sie, indem Sie die Verbotsliste nie berühren und Bücher veröffentlichen, die Rezensionen verdienen: Rezensionsgeschwindigkeit ist am Ende ein Qualitätssignal, das man nicht fälschen kann.",
            ],
            bullets: [
              "Blogger und Kuratoren: Passung pitchen, wenig erwarten, Dauerhaftigkeit schätzen.",
              "Promo-getriebene Download-Spitzen säen Rezensionen zur Grundrate.",
              "Grundrate ~1/100-200 Verkäufe; Bitten im Buch vervielfachen sie.",
              "Das Schwungrad: Verkäufe → Rezensionen → Konversion → Verkäufe. Schützen Sie es.",
            ],
          },
        ],
        checklist: [
          "Rezensionsziele gesetzt: 10-15 ehrliche Rezensionen binnen 60-90 Tagen.",
          "Verbotsliste geprüft; nichts im Plan verletzt sie.",
          "ARC-Team rekrutiert (20-40 Leser) mit Ehrlichkeit-zuerst-Rahmung.",
          "Launch-Nachricht und Tag-10-Erinnerung mit direkten Rezensionslinks geplant.",
          "Bitte-Seite in der Manuskriptvorlage enthalten, bei jedem Titel.",
          "Fünf bis zehn Nischen-Rezensenten/Blogger mit konkreter Passung angeschrieben.",
          "Promo-Newsletter-Einreichungen geplant, sobald Rezensionsminima erfüllt sind.",
          "ARC-Einladung am Buchende, die Leser zum nächsten Titel weiterrollt.",
        ],
        faq: [
          {
            question: "Kann ich Freunde und Familie bitten, mein Buch zu rezensieren?",
            answer:
              "Nein — Amazons Richtlinien verbieten Rezensionen von Personen mit persönlicher Beziehung zum Autor, und die Erkennung dieser Verbindungen ist gut. Lenken Sie Freunde und Familie stattdessen darauf, das Buch in ihren Netzwerken zu teilen; deren Freunde sind legitime Rezensenten.",
          },
          {
            question: "Sind ARC-Exemplare nach Amazons Regeln erlaubt?",
            answer:
              "Ja. Kostenlose Vorabexemplare mit der Bitte um eine ehrliche Rezension zu verteilen ist die standardisierte, konforme Praxis — Verlage tun es seit einem Jahrhundert. Das Exemplar muss gratis bleiben, unabhängig davon, ob eine Rezension erscheint und was sie sagt.",
          },
          {
            question: "Wie viele Verkäufe braucht es für eine natürliche Rezension?",
            answer:
              "Unaufgefordert etwa eine Rezension pro 100-200 Verkäufe. Eine gut platzierte Bitte im Buch vervielfacht diese Rate — deshalb ist die letzte Manuskriptseite der hebelstärkste Rezensions-Vermögenswert, den Sie kontrollieren.",
          },
          {
            question: "Sollte ich auf negative Rezensionen antworten?",
            answer:
              "Nein. Autorenantworten auf negative Rezensionen wirken bestenfalls defensiv. Ziehen Sie das Verwertbare heraus (eine Formatierungsklage, eine von der Beschreibung falsch gesetzte Erwartung), beheben Sie es, und lassen Sie Ihre übrigen Rezensionen für das Buch antworten.",
          },
          {
            question: "Helfen Goodreads-Rezensionen den Amazon-Verkäufen?",
            answer:
              "Indirekt: Goodreads-Bewertungen erscheinen auf manchen Kindle-Flächen, und viele Leser prüfen vor dem Kauf quer. ARC-Teams posten meist gern auf beiden Plattformen — bitten Sie in Ihrer Launch-Nachricht um beide Links.",
          },
        ],
      },
    },
  },
];
