import type { BlogPost } from "./blog-content";

export const bookMarketingSeoPosts: BlogPost[] = [
  {
    key: "amazon-ads-for-books",
    date: "2026-06-12",
    updated: "2026-06-12",
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
    },
  },
];
