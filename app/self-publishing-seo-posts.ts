import type { BlogPost } from "./blog-content";

export const selfPublishingSeoPosts: BlogPost[] = [
  {
    key: "how-to-self-publish-amazon",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 15,
    accent: {
      start: "#fff8ec",
      middle: "#ffe9b8",
      end: "#cfe8ff",
    },
    translations: {
      en: {
        slug: "how-to-self-publish-a-book-on-amazon-step-by-step",
        title: "How to self-publish a book on Amazon: the complete KDP walkthrough for first-time publishers",
        description:
          "Every step from finished manuscript to live Amazon listing: KDP account setup, metadata, keywords and categories, uploading ebook and paperback files, pricing, royalties and what happens after you press publish.",
        keywords: [
          "how to self publish a book on amazon",
          "Amazon KDP tutorial",
          "publish a book on KDP",
          "self publishing for beginners",
          "KDP step by step",
          "how to publish on Kindle",
          "Amazon self publishing guide",
          "KDP publishing process",
        ],
        category: "Self-publishing",
        intro: [
          "Publishing a book on Amazon takes about an hour of actual clicking once your files are ready. The reason first-timers spend weeks on it is that the hour hides a dozen small decisions — keywords, categories, royalty options, territories — each phrased in KDP jargon and each affecting sales for the life of the book.",
          "This walkthrough goes through the entire flow in publishing order: account setup, the three sections of title creation, file uploads for ebook and paperback, pricing, and the review process. For each decision you get the default that works and the reason you might deviate.",
          "It assumes your manuscript and cover are done. If they are not, start with our guides to writing a book with AI and cover design, then come back — the publishing step rewards finished inputs.",
        ],
        sections: [
          {
            id: "account-setup",
            title: "Set up the KDP account properly the first time",
            body: [
              "Create the account at kdp.amazon.com with the Amazon login you intend to keep — merging KDP accounts later is painful and Amazon allows one account per person. Complete the three setup blocks immediately: author/publisher information, payment details (direct deposit to your bank), and the tax interview.",
              "The tax interview matters more than it looks. Non-US publishers fill the W-8BEN form during the interview; if your country has a tax treaty with the US, entering your local tax identification number reduces the default 30% US withholding on royalties — for most of Europe, to 0%. Five minutes here is worth percentage points of income forever.",
              "Account approval is usually instant, but payment and tax validation can take days. Do the setup before launch week, not during it.",
            ],
            bullets: [
              "One KDP account per person, tied to the Amazon login you will keep.",
              "Complete payment and tax setup immediately — validation can lag days.",
              "Non-US publishers: claim the tax-treaty rate in the tax interview (W-8BEN).",
              "Royalties pay out ~60 days after the end of the month they were earned.",
            ],
          },
          {
            id: "book-details",
            title: "Book details: title, description, keywords, categories",
            body: [
              "The first of three publishing screens carries the metadata that decides discoverability. Language, title and subtitle must match the cover exactly. The author name can be a pen name — see our pen-name guide — but pick it permanently; it cannot be edited after publishing.",
              "The description (up to 4,000 characters) is a sales page, not a summary: lead with the promise, structure with short paragraphs, close with what the reader will be able to do. The seven keyword slots should carry search phrases buyers actually type — not single words, not repeats of the title, which already counts as searchable text.",
              "You choose up to three categories. Pick the most specific subcategories that genuinely fit: specificity lowers the bar for the orange best-seller flag and matches the book to browsers most likely to buy. Our keyword research and categories guides cover the method in depth.",
            ],
            bullets: [
              "Title, subtitle and author exactly as on the cover; author name is permanent.",
              "Description = sales copy: promise first, short paragraphs, concrete outcome.",
              "Seven keyword slots: buyer phrases, no title repeats, no single generic words.",
              "Three categories, as specific as honestly possible.",
            ],
          },
          {
            id: "ebook-upload",
            title: "Publishing the ebook: files, DRM, previewer",
            body: [
              "KDP's preferred ebook format is EPUB; a clean DOCX also converts well for text-driven books. Upload the manuscript, then a separate cover image — 2,560 x 1,600 px JPEG at a 1.6:1 ratio is the sweet spot — or use the basic cover creator if you must.",
              "The DRM question is asked once and locked: most indie publishers choose no DRM, since DRM annoys legitimate readers without stopping piracy, but either answer is defensible. ISBNs are unnecessary for Kindle ebooks — Amazon assigns its own ASIN identifier.",
              "Run the online previewer before continuing. Check the table of contents jumps correctly, images render, and chapter starts look clean on phone-size and tablet-size previews. Conversion artifacts caught here cost minutes; caught in reviews, they cost stars.",
            ],
            bullets: [
              "EPUB preferred; clean DOCX acceptable for text-only books.",
              "Ebook cover: 2,560 x 1,600 px JPEG, ratio 1.6:1.",
              "No ISBN needed for the Kindle edition; Amazon assigns an ASIN.",
              "Preview on phone and tablet sizes before approving.",
            ],
          },
          {
            id: "paperback-upload",
            title: "Publishing the paperback: ISBN, interior, cover, proof",
            body: [
              "The paperback flow adds physical decisions: accept Amazon's free ISBN unless you want your own imprint name on the listing (then bring a purchased ISBN), choose trim size, paper and ink — 6 x 9 inches, black ink on cream is the standard for text books — and upload a print-ready PDF interior with embedded fonts.",
              "The cover is a single wraparound PDF: back cover, spine and front cover in one file, sized by trim and page count. Spine text needs at least 100 pages. Our paperback formatting guide has the exact margin and spine math; automated pipelines like DraftToDone generate this file with the dimensions already computed.",
              "Use the previewer, then order a physical proof copy before enabling distribution. A proof costs the printing fee plus shipping and is the only way to catch real-world issues: cover darkness, margin tightness, font size that felt fine on screen.",
            ],
            bullets: [
              "Free Amazon ISBN is fine; bring your own only for imprint branding.",
              "6 x 9 in, black on cream: the default for fiction and nonfiction.",
              "Cover = one wraparound PDF sized by page count; spine text ≥100 pages.",
              "Order a printed proof before launch — screens lie about print.",
            ],
          },
          {
            id: "pricing-royalties",
            title: "Pricing, royalties and territories",
            body: [
              "Ebooks have two royalty plans: 70% for prices between $2.99 and $9.99 (minus a small delivery fee), 35% outside that band. The practical consequence: $2.99–$9.99 is where ebooks belong unless you have a strategic reason — a $0.99 launch week, a free series starter.",
              "Paperback royalty is 60% of list price minus printing cost on Amazon's own stores (50% at low list prices in some marketplaces), so page count directly sets your floor price. A 250-page book printing at ~$4 needs a list price near $10 just to clear $2 per copy.",
              "Publish to all territories unless you have rights constraints, and let Amazon auto-convert prices — then round the converted prices to natural price points per marketplace (€7.99, not €7.43). KDP Select enrollment (90-day Amazon exclusivity for the ebook in exchange for Kindle Unlimited inclusion) is a separate strategic choice covered in our dedicated guide.",
            ],
            bullets: [
              "Ebook: 70% royalty band is $2.99–$9.99 — price inside it by default.",
              "Paperback: 60% of list minus printing cost; page count sets the floor.",
              "Adjust auto-converted prices to natural points per marketplace.",
              "Decide KDP Select separately; it binds the ebook exclusively for 90 days.",
            ],
          },
          {
            id: "after-publish",
            title: "Review, going live, and the first month",
            body: [
              "Pressing publish sends the book to Amazon's review — typically under 24 hours for ebooks, up to 72 for paperbacks. You will get an email at approval or with file issues to fix; rejections name the problem and resubmission is normal, not fatal.",
              "Once live, claim the book on your Author Central profile, check the listing on the actual store page (formatting of the description, look of the cover thumbnail at search size), and verify ebook and paperback editions are linked on one page.",
              "The first month sets the algorithm's impression of the book. Focus on three controllables: honest early reviews from real readers, a launch price that lowers the trial barrier, and refreshing keywords or categories if impressions exist but clicks do not. Publishing is an iteration loop, not a single event — and the publishers who win run that loop across many books.",
            ],
            bullets: [
              "Review: <24h ebooks, up to 72h paperbacks; fix-and-resubmit is routine.",
              "Post-launch: Author Central, listing check, edition linking.",
              "First month: early reviews, accessible launch price, metadata iteration.",
              "Treat each book as one cycle of a repeatable system.",
            ],
          },
        ],
        checklist: [
          "KDP account complete: author info, bank details, tax interview with treaty rate.",
          "Title, subtitle and author name final and matching the cover.",
          "Description written as sales copy; 7 keyword slots filled with buyer phrases.",
          "Three specific categories selected.",
          "Ebook file previewed on phone and tablet sizes; TOC verified.",
          "Paperback interior PDF passes previewer; wraparound cover sized to final page count.",
          "Printed proof ordered and inspected before enabling distribution.",
          "Ebook priced in the 70% band; paperback priced above printing-cost floor.",
          "Editions linked, Author Central claimed, first-month iteration plan written.",
        ],
        faq: [
          {
            question: "How much does it cost to publish on Amazon KDP?",
            answer:
              "Zero upfront. KDP charges nothing to publish; Amazon takes its share per sale through the royalty structure, and paperback printing cost is deducted from each sale rather than paid in advance. Optional real costs: a purchased ISBN, a proof copy, and any outsourced editing or cover work.",
          },
          {
            question: "How long does Amazon take to approve a book?",
            answer:
              "Ebooks usually go live within 24 hours, paperbacks within 72. File-issue rejections come with an explanation; fixing and resubmitting typically adds a day. Plan launches at least a week after upload to absorb surprises.",
          },
          {
            question: "Do I need an ISBN to self-publish on Amazon?",
            answer:
              "Not for ebooks — Amazon assigns an ASIN. For paperbacks you need an ISBN, but Amazon provides one free; buy your own only if you want your imprint listed as publisher or plan distribution beyond Amazon.",
          },
          {
            question: "Can I publish both ebook and paperback at the same time?",
            answer:
              "Yes, and you should: KDP creates both from the same project page, links the editions on one listing, and the paperback's higher price makes the ebook look like a bargain — a well-documented effect on conversion.",
          },
          {
            question: "Can I update my book after publishing?",
            answer:
              "Yes. Manuscript, cover, description, keywords, categories and price are all editable after publication (the author name is not). Metadata changes go live in hours; file changes pass review again. Iterating on a live book is standard practice.",
          },
        ],
      },
      fr: {
        slug: "comment-auto-editer-un-livre-sur-amazon-kdp",
        title: "Comment auto-éditer un livre sur Amazon : le parcours KDP complet pour un premier livre",
        description:
          "Toutes les étapes du manuscrit terminé à la fiche Amazon en ligne : création du compte KDP, métadonnées, mots-clés et catégories, téléversement des fichiers ebook et broché, prix, redevances et l'après-publication.",
        keywords: [
          "comment auto-éditer un livre sur Amazon",
          "tutoriel Amazon KDP",
          "publier un livre sur KDP",
          "auto-édition pour débutants",
          "KDP étape par étape",
          "publier sur Kindle",
          "guide auto-édition Amazon",
          "processus publication KDP",
        ],
        category: "Auto-édition",
        intro: [
          "Publier un livre sur Amazon prend environ une heure de clics réels une fois les fichiers prêts. Si les débutants y passent des semaines, c'est que cette heure cache une douzaine de petites décisions — mots-clés, catégories, options de redevance, territoires — chacune formulée en jargon KDP et chacune influençant les ventes pour toute la vie du livre.",
          "Ce guide déroule le parcours entier dans l'ordre de publication : création du compte, les trois écrans de création du titre, le téléversement des fichiers ebook et broché, le prix, et le processus de validation. Pour chaque décision, vous obtenez le réglage par défaut qui fonctionne et la raison d'en dévier.",
          "Il suppose que votre manuscrit et votre couverture sont terminés. Sinon, commencez par nos guides sur l'écriture d'un livre avec l'IA et la conception de couverture, puis revenez — l'étape de publication récompense les intrants finis.",
        ],
        sections: [
          {
            id: "creation-compte",
            title: "Créer le compte KDP correctement du premier coup",
            body: [
              "Créez le compte sur kdp.amazon.com avec l'identifiant Amazon que vous comptez garder — fusionner des comptes KDP plus tard est pénible et Amazon n'autorise qu'un compte par personne. Complétez immédiatement les trois blocs de configuration : informations d'auteur/éditeur, coordonnées de paiement (virement vers votre banque), et l'entretien fiscal.",
              "L'entretien fiscal compte plus qu'il n'y paraît. Les éditeurs hors États-Unis remplissent le formulaire W-8BEN pendant l'entretien ; si votre pays a une convention fiscale avec les États-Unis — c'est le cas de la France — saisir votre numéro fiscal local réduit la retenue américaine par défaut de 30 % sur les redevances, généralement à 0 %. Cinq minutes ici valent des points de revenu pour toujours.",
              "L'approbation du compte est généralement instantanée, mais la validation du paiement et du fiscal peut prendre des jours. Faites la configuration avant la semaine de lancement, pas pendant.",
            ],
            bullets: [
              "Un compte KDP par personne, lié à l'identifiant Amazon que vous garderez.",
              "Paiement et fiscal complétés immédiatement — la validation peut traîner.",
              "Hors États-Unis : réclamez le taux conventionnel dans l'entretien fiscal (W-8BEN).",
              "Les redevances sont versées ~60 jours après la fin du mois où elles sont gagnées.",
            ],
          },
          {
            id: "details-livre",
            title: "Détails du livre : titre, description, mots-clés, catégories",
            body: [
              "Le premier des trois écrans de publication porte les métadonnées qui décident de la découvrabilité. Langue, titre et sous-titre doivent correspondre exactement à la couverture. Le nom d'auteur peut être un nom de plume — voir notre guide dédié — mais choisissez-le définitivement : il n'est pas modifiable après publication.",
              "La description (jusqu'à 4 000 caractères) est une page de vente, pas un résumé : ouvrez sur la promesse, structurez en paragraphes courts, terminez sur ce que le lecteur saura faire. Les sept emplacements de mots-clés doivent porter des expressions que les acheteurs tapent réellement — pas des mots isolés, pas des répétitions du titre, déjà indexé.",
              "Vous choisissez jusqu'à trois catégories. Prenez les sous-catégories les plus précises qui correspondent honnêtement : la précision abaisse la barre du badge orange de best-seller et présente le livre aux acheteurs les plus susceptibles d'acheter. Nos guides sur la recherche de mots-clés et les catégories détaillent la méthode.",
            ],
            bullets: [
              "Titre, sous-titre et auteur strictement identiques à la couverture ; le nom d'auteur est définitif.",
              "Description = texte de vente : promesse d'abord, paragraphes courts, résultat concret.",
              "Sept mots-clés : expressions d'acheteurs, sans répéter le titre, sans mots génériques isolés.",
              "Trois catégories, aussi précises qu'honnêtement possible.",
            ],
          },
          {
            id: "publication-ebook",
            title: "Publier l'ebook : fichiers, DRM, aperçu",
            body: [
              "Le format ebook préféré de KDP est l'EPUB ; un DOCX propre se convertit bien pour les livres essentiellement textuels. Téléversez le manuscrit, puis une image de couverture séparée — 2 560 x 1 600 px en JPEG, ratio 1,6:1, est l'idéal — ou utilisez le créateur de couverture basique à défaut.",
              "La question du DRM est posée une fois et verrouillée : la plupart des auto-éditeurs choisissent sans DRM, car il gêne les lecteurs légitimes sans arrêter le piratage, mais les deux réponses se défendent. Aucun ISBN n'est nécessaire pour l'ebook Kindle — Amazon attribue son propre identifiant ASIN.",
              "Passez l'aperçu en ligne avant de continuer. Vérifiez que la table des matières navigue correctement, que les images s'affichent, et que les débuts de chapitre sont propres en taille téléphone et tablette. Un artefact de conversion attrapé ici coûte des minutes ; attrapé dans les avis, il coûte des étoiles.",
            ],
            bullets: [
              "EPUB de préférence ; DOCX propre acceptable pour le texte seul.",
              "Couverture ebook : 2 560 x 1 600 px JPEG, ratio 1,6:1.",
              "Pas d'ISBN pour l'édition Kindle ; Amazon attribue un ASIN.",
              "Aperçu en tailles téléphone et tablette avant validation.",
            ],
          },
          {
            id: "publication-broche",
            title: "Publier le broché : ISBN, intérieur, couverture, épreuve",
            body: [
              "Le parcours broché ajoute des décisions physiques : acceptez l'ISBN gratuit d'Amazon sauf si vous voulez votre propre nom d'éditeur sur la fiche (apportez alors un ISBN acheté), choisissez format, papier et encre — 6 x 9 pouces, encre noire sur papier crème est le standard des livres de texte — et téléversez un PDF d'intérieur prêt à imprimer avec polices incorporées.",
              "La couverture est un PDF d'habillage unique : quatrième de couverture, dos et premier plat dans un seul fichier, dimensionné par le format et le nombre de pages. Le texte au dos exige au moins 100 pages. Notre guide de mise en page broché donne les calculs exacts de marges et de dos ; les pipelines automatisés comme DraftToDone génèrent ce fichier avec les dimensions déjà calculées.",
              "Utilisez l'aperçu, puis commandez une épreuve papier avant d'activer la distribution. Une épreuve coûte les frais d'impression plus la livraison et reste le seul moyen d'attraper les problèmes du monde réel : couverture trop sombre, marges étriquées, corps de texte qui semblait bien à l'écran.",
            ],
            bullets: [
              "L'ISBN gratuit d'Amazon suffit ; le vôtre seulement pour une marque d'éditeur.",
              "6 x 9 po, noir sur crème : le défaut pour roman et essai.",
              "Couverture = un PDF d'habillage dimensionné par le nombre de pages ; texte au dos ≥100 pages.",
              "Commandez une épreuve imprimée avant le lancement — les écrans mentent sur le papier.",
            ],
          },
          {
            id: "prix-redevances",
            title: "Prix, redevances et territoires",
            body: [
              "Les ebooks ont deux plans de redevance : 70 % pour les prix entre 2,99 et 9,99 (moins de petits frais de livraison), 35 % en dehors de cette bande. Conséquence pratique : 2,99–9,99 est la zone naturelle des ebooks, sauf raison stratégique — une semaine de lancement à 0,99, un premier tome de série gratuit.",
              "La redevance broché est de 60 % du prix de vente moins le coût d'impression sur les boutiques Amazon (50 % aux prix bas sur certains marchés) : le nombre de pages fixe donc directement votre prix plancher. Un livre de 250 pages imprimé à ~4 € exige un prix proche de 10 € pour dégager 2 € par exemplaire.",
              "Publiez sur tous les territoires sauf contrainte de droits, et laissez Amazon convertir les prix — puis arrondissez les prix convertis à des points naturels par marché (7,99 €, pas 7,43 €). L'inscription à KDP Select (90 jours d'exclusivité Amazon pour l'ebook contre l'inclusion dans Kindle Unlimited) est un choix stratégique distinct, traité dans notre guide dédié.",
            ],
            bullets: [
              "Ebook : la bande à 70 % va de 2,99 à 9,99 — placez-vous dedans par défaut.",
              "Broché : 60 % du prix moins l'impression ; le nombre de pages fixe le plancher.",
              "Ajustez les prix convertis à des points naturels par marché.",
              "Décidez KDP Select séparément ; il lie l'ebook en exclusivité 90 jours.",
            ],
          },
          {
            id: "apres-publication",
            title: "Validation, mise en ligne et le premier mois",
            body: [
              "Appuyer sur Publier envoie le livre en examen Amazon — typiquement moins de 24 heures pour l'ebook, jusqu'à 72 pour le broché. Vous recevez un e-mail à l'approbation ou avec les problèmes de fichier à corriger ; un rejet nomme le problème et la resoumission est la norme, pas un drame.",
              "Une fois en ligne, revendiquez le livre sur votre profil Author Central, vérifiez la fiche sur la vraie page boutique (mise en forme de la description, rendu de la vignette de couverture en taille recherche), et confirmez que les éditions ebook et broché sont liées sur une seule page.",
              "Le premier mois forge l'impression de l'algorithme. Concentrez-vous sur trois leviers contrôlables : des premiers avis honnêtes de vrais lecteurs, un prix de lancement qui abaisse la barrière d'essai, et l'itération des mots-clés ou catégories si les impressions existent mais pas les clics. La publication est une boucle d'itération, pas un événement unique — et les éditeurs qui gagnent font tourner cette boucle sur plusieurs livres.",
            ],
            bullets: [
              "Examen : <24 h ebook, jusqu'à 72 h broché ; corriger-resoumettre est routinier.",
              "Après mise en ligne : Author Central, vérification de fiche, liaison des éditions.",
              "Premier mois : premiers avis, prix de lancement accessible, itération des métadonnées.",
              "Traitez chaque livre comme un cycle d'un système répétable.",
            ],
          },
        ],
        checklist: [
          "Compte KDP complet : informations d'auteur, coordonnées bancaires, entretien fiscal au taux conventionnel.",
          "Titre, sous-titre et nom d'auteur définitifs et conformes à la couverture.",
          "Description rédigée comme un texte de vente ; 7 mots-clés en expressions d'acheteurs.",
          "Trois catégories précises sélectionnées.",
          "Ebook prévisualisé en tailles téléphone et tablette ; table des matières vérifiée.",
          "PDF intérieur du broché validé par l'aperçu ; habillage dimensionné au nombre de pages final.",
          "Épreuve imprimée commandée et inspectée avant activation de la distribution.",
          "Ebook dans la bande à 70 % ; broché au-dessus du plancher du coût d'impression.",
          "Éditions liées, Author Central revendiqué, plan d'itération du premier mois écrit.",
        ],
        faq: [
          {
            question: "Combien coûte la publication sur Amazon KDP ?",
            answer:
              "Zéro à l'avance. KDP ne facture rien pour publier ; Amazon prend sa part à chaque vente via la structure de redevances, et le coût d'impression du broché est déduit de chaque vente plutôt que payé d'avance. Coûts réels optionnels : un ISBN acheté, une épreuve, et toute sous-traitance d'édition ou de couverture.",
          },
          {
            question: "Combien de temps Amazon met-il à approuver un livre ?",
            answer:
              "Les ebooks sont généralement en ligne sous 24 heures, les brochés sous 72. Un rejet pour problème de fichier arrive avec une explication ; corriger et resoumettre ajoute typiquement une journée. Planifiez le lancement au moins une semaine après le téléversement pour absorber les surprises.",
          },
          {
            question: "Faut-il un ISBN pour s'auto-éditer sur Amazon ?",
            answer:
              "Pas pour l'ebook — Amazon attribue un ASIN. Pour le broché il faut un ISBN, mais Amazon en fournit un gratuitement ; n'achetez le vôtre que pour afficher votre maison d'édition ou distribuer au-delà d'Amazon.",
          },
          {
            question: "Peut-on publier l'ebook et le broché en même temps ?",
            answer:
              "Oui, et il le faut : KDP crée les deux depuis la même page projet, lie les éditions sur une seule fiche, et le prix plus élevé du broché fait paraître l'ebook avantageux — un effet bien documenté sur la conversion.",
          },
          {
            question: "Peut-on modifier son livre après publication ?",
            answer:
              "Oui. Manuscrit, couverture, description, mots-clés, catégories et prix restent modifiables après publication (pas le nom d'auteur). Les changements de métadonnées sont effectifs en quelques heures ; les changements de fichiers repassent l'examen. Itérer sur un livre en ligne est une pratique standard.",
          },
        ],
      },
    },
  },
  {
    key: "self-publishing-income-reality",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 14,
    accent: {
      start: "#effbf4",
      middle: "#b9ead7",
      end: "#f3f0ff",
    },
    translations: {
      en: {
        slug: "how-much-do-self-published-authors-make",
        title: "How much do self-published authors actually make? Real numbers, the catalog effect and a working income model",
        description:
          "Honest math on self-publishing income: what single books really earn, why the distribution is so skewed, the catalog effect that changes the economics, and a month-by-month model you can sanity-check your plan against.",
        keywords: [
          "how much do self published authors make",
          "self publishing income",
          "KDP passive income",
          "make money self publishing",
          "KDP earnings reality",
          "author income self publishing",
          "book royalties income",
          "publishing side income",
        ],
        category: "Income",
        intro: [
          "Two stories dominate this topic and both are misleading. The influencer story: six figures from books written in a weekend. The cynic story: nobody earns anything. The data sits between and is more interesting — most single books earn very little, while disciplined multi-book catalogs in researched niches earn real, durable income.",
          "This guide gives you the honest math: what a typical book earns, why averages deceive, the per-unit royalties behind any projection you'll ever build, and the catalog model that explains how the same effort produces 50 times the outcome when pointed correctly.",
          "No income promises here — inputs, distributions and a model. That is what you actually need to decide whether and how to play.",
        ],
        sections: [
          {
            id: "distribution",
            title: "The distribution: why 'average author income' is a useless number",
            body: [
              "Self-publishing income follows a power law. A large share of the millions of KDP titles sell close to zero copies per month; a long middle earns coffee money; a small fraction earns thousands monthly. Quoting an average across that distribution describes nobody.",
              "The useful question is what separates the tiers, and the answer is unglamorous: niche demand validated before writing, metadata that matches real searches, a cover competitive at thumbnail size, and — above everything — the number of quality titles in the catalog. Luck exists, but it compounds on volume.",
              "Treat any single book as a lottery ticket with better-than-lottery odds you can influence, and a catalog as a portfolio where the math finally stabilizes.",
            ],
            bullets: [
              "Income is power-law distributed: medians are tiny, tails are large.",
              "Tier separators: validated niche, search-matched metadata, thumbnail-grade cover, catalog size.",
              "Single books are variance; catalogs are statistics.",
              "Ignore screenshots of best months — ask for catalog size and average months.",
            ],
          },
          {
            id: "per-unit",
            title: "The per-unit math every projection is built from",
            body: [
              "An ebook priced at $4.99 on the 70% plan returns roughly $3.40 after delivery fees. A 200-page paperback at $11.99 returns about $3.70 after printing cost at 60%. Kindle Unlimited pays per page read — roughly $0.004 per page, so a 250-page book fully read yields about $1.10.",
              "A modest niche nonfiction book selling 60 copies a month across formats at those prices generates around $200 monthly. That number underwhelms until you notice its properties: it repeats every month without new work, it is independent of any employer, and it stacks with every additional title.",
              "Anchor all planning to per-unit royalties times realistic monthly units. 'Realistic' for a researched niche title without advertising is tens of copies per month, not hundreds — hundreds happen with strong niches, reviews and ads working together.",
            ],
            bullets: [
              "Ebook $4.99 → ~$3.40; paperback $11.99/200p → ~$3.70; KU full read ~$1.10/250p.",
              "60 units/month ≈ $200/month per modest successful title.",
              "Plan in units: royalty × monthly copies × titles.",
              "Tens of monthly copies is the honest default assumption per title.",
            ],
          },
          {
            id: "catalog-effect",
            title: "The catalog effect: why title #10 earns more than title #1",
            body: [
              "Ten books do not earn ten times one book — they earn more. Each title is a separate discovery surface in search and also-boughts; readers who finish one book buy adjacent ones; pen-name pages cross-sell; and your own skill compounds, so later titles are simply better products.",
              "Model a catalog conservatively: if an average title stabilizes at $150/month and you publish two per month for a year, you exit the year at roughly $3,600/month run-rate — from titles that keep earning. This is the entire strategic argument for production systems: the bottleneck is finished quality titles per month.",
              "It is also why tools matter economically, not just practically. Cutting per-book production from 30 hours to a few — the chatbot-versus-pipeline difference covered in our tooling guide, and the problem DraftToDone exists to solve — converts directly into catalog growth rate, which is the variable the whole model is most sensitive to.",
            ],
            bullets: [
              "Catalogs compound: discovery surfaces, cross-sales, skill, also-boughts.",
              "Conservative model: avg $/title/month × titles, growing monthly.",
              "Throughput of quality titles is the dominant variable.",
              "Production tooling converts hours saved into catalog growth rate.",
            ],
          },
          {
            id: "costs",
            title: "Costs, taxes and the real profit line",
            body: [
              "Revenue is not profit. Per-title costs in a manual workflow: cover ($50–$300), editing ($200–$1,000 if outsourced), formatting ($30–$100), plus your hours. Automated pipelines compress these into a per-book fee; either way, put real numbers against each title and compute payback months, not just revenue.",
              "Royalties are taxable income everywhere. Complete the KDP tax interview to avoid unnecessary US withholding (most treaty countries: 0%), and declare income under your local regime — many small publishers operate fine under simple self-employment or micro-enterprise statuses; ask an accountant once and template it.",
              "A title earning $150/month with $150 of production cost pays back in month one. That payback speed — unusual across small business models — is the genuinely attractive property of publishing economics, and it only holds if costs stay disciplined.",
            ],
            bullets: [
              "Count per-title cost: cover, editing, formatting, hours or pipeline fee.",
              "Compute payback months per title; aim for under three.",
              "Do the tax interview properly; declare locally (accountant once, template forever).",
              "Cost discipline is what keeps the payback math attractive.",
            ],
          },
          {
            id: "twelve-month-plan",
            title: "A sober 12-month plan",
            body: [
              "Months 1–2: learn the machine end to end on one book — niche research, production, metadata, launch. Expect modest sales; you are buying skill, not income. Months 3–6: settle into a production rhythm of one to four quality titles monthly depending on tooling, killing niches that show no traction and doubling the ones that do.",
              "Months 7–12: the catalog starts carrying you. Reinvest in what is working — more titles in proven niches, translations of winners (a French edition of an English winner is a new asset for a fraction of the research), and modest ads on titles with reviews.",
              "Exit-of-year outcomes vary enormously, but the honest brackets look like: low hundreds monthly for a small careful catalog, low thousands for 15–25 well-researched titles with a few winners. The failure mode is equally predictable: ten books in ten unvalidated niches with template metadata, earning nothing. The difference was never the writing speed — it was the research and the iteration.",
            ],
            bullets: [
              "Months 1–2: one book, full loop, skill acquisition.",
              "Months 3–6: production rhythm; kill losers, double winners.",
              "Months 7–12: reinvest — proven niches, translations, ads on reviewed titles.",
              "Realistic year-one exit: hundreds to low thousands monthly, catalog-dependent.",
            ],
          },
        ],
        checklist: [
          "Income expectations set on distributions, not screenshots.",
          "Per-unit royalties computed for your actual price points.",
          "Plan written as royalty × units × titles, with honest unit assumptions.",
          "Per-title production cost and payback months calculated.",
          "Tax interview completed; local declaration regime confirmed.",
          "Production rhythm chosen to match tooling (manual vs pipeline).",
          "Niche validation step mandatory before each new title.",
          "Monthly review: kill non-performers, reinvest in winners, consider translations.",
        ],
        faq: [
          {
            question: "Can you really make passive income with KDP?",
            answer:
              "Semi-passive is the honest term. A published title earns without further work, but reaching titles that earn requires research, production and iteration up front. The passivity is real after publication; the work is front-loaded.",
          },
          {
            question: "How much does a first self-published book usually make?",
            answer:
              "Most first books earn under $100 total, because first books are how you learn niche selection and metadata. Treat book one as tuition; the economics are designed to emerge at catalog scale in validated niches.",
          },
          {
            question: "How many books do you need to make $1,000 a month?",
            answer:
              "At a conservative $100–$200 per title per month for modestly successful niche titles, roughly 5–10 performing titles. Since not every title performs, plan to publish 10–20 quality titles to net that many performers.",
          },
          {
            question: "Is KDP still worth it in 2026 with AI flooding the market?",
            answer:
              "Volume rose, but Amazon's quality enforcement and the three-title daily limit punish flooding strategies. What works is unchanged: validated demand, quality-gated books, honest metadata. AI changed who can execute that playbook — not the playbook.",
          },
          {
            question: "Do I pay taxes on KDP royalties?",
            answer:
              "Yes — royalties are ordinary taxable income in your country. Complete KDP's tax interview to apply your treaty rate (often 0% US withholding for European publishers) and declare under your local self-employment or business regime.",
          },
        ],
      },
      fr: {
        slug: "combien-gagne-un-auteur-auto-edite",
        title: "Combien gagne réellement un auteur auto-édité ? Vrais chiffres, effet catalogue et un modèle de revenu qui tient",
        description:
          "Les maths honnêtes du revenu en auto-édition : ce qu'un livre seul rapporte vraiment, pourquoi la distribution est si asymétrique, l'effet catalogue qui change l'économie, et un modèle mois par mois pour tester votre plan.",
        keywords: [
          "combien gagne un auteur auto-édité",
          "revenu auto-édition",
          "revenu passif KDP",
          "gagner de l'argent avec KDP",
          "gains KDP réalité",
          "revenus auteur indépendant",
          "redevances livre revenu",
          "revenu complémentaire édition",
        ],
        category: "Revenus",
        intro: [
          "Deux récits dominent ce sujet et les deux trompent. Le récit d'influenceur : six chiffres avec des livres écrits en un week-end. Le récit cynique : personne ne gagne rien. Les données se situent entre les deux et sont plus intéressantes — la plupart des livres isolés rapportent très peu, tandis que des catalogues disciplinés de plusieurs titres dans des niches étudiées produisent un revenu réel et durable.",
          "Ce guide donne les maths honnêtes : ce qu'un livre typique rapporte, pourquoi les moyennes mentent, les redevances unitaires derrière toute projection, et le modèle de catalogue qui explique comment le même effort produit cinquante fois le résultat quand il est bien orienté.",
          "Aucune promesse de revenu ici — des intrants, des distributions et un modèle. C'est ce dont vous avez réellement besoin pour décider si et comment jouer.",
        ],
        sections: [
          {
            id: "distribution",
            title: "La distribution : pourquoi « le revenu moyen d'un auteur » ne veut rien dire",
            body: [
              "Le revenu en auto-édition suit une loi de puissance. Une grande part des millions de titres KDP vend presque zéro exemplaire par mois ; un long milieu rapporte le prix d'un café ; une petite fraction gagne des milliers d'euros mensuels. Citer une moyenne sur cette distribution ne décrit personne.",
              "La question utile est ce qui sépare les étages, et la réponse manque de glamour : une demande de niche validée avant l'écriture, des métadonnées alignées sur les vraies recherches, une couverture compétitive en taille vignette, et — au-dessus de tout — le nombre de titres de qualité au catalogue. La chance existe, mais elle se compose sur le volume.",
              "Traitez un livre isolé comme un ticket de loterie aux probabilités améliorables, et un catalogue comme un portefeuille où les maths finissent par se stabiliser.",
            ],
            bullets: [
              "Revenu en loi de puissance : médianes minuscules, queues épaisses.",
              "Séparateurs d'étages : niche validée, métadonnées alignées, couverture lisible en vignette, taille de catalogue.",
              "Un livre seul = variance ; un catalogue = statistiques.",
              "Ignorez les captures d'écran des meilleurs mois — demandez la taille du catalogue et la moyenne.",
            ],
          },
          {
            id: "unitaire",
            title: "Les maths unitaires dont toute projection découle",
            body: [
              "Un ebook à 4,99 € au plan 70 % rapporte environ 3,40 € après frais de livraison. Un broché de 200 pages à 11,99 € rapporte environ 3,70 € après coût d'impression à 60 %. Kindle Unlimited paie à la page lue — environ 0,004 € la page, donc un livre de 250 pages lu en entier rapporte environ 1,10 €.",
              "Un livre de niche modeste vendant 60 exemplaires par mois tous formats confondus à ces prix génère environ 200 € mensuels. Le chiffre déçoit jusqu'à ce qu'on remarque ses propriétés : il se répète chaque mois sans travail nouveau, il ne dépend d'aucun employeur, et il s'additionne à chaque titre supplémentaire.",
              "Ancrez toute planification sur redevance unitaire × exemplaires mensuels réalistes. « Réaliste » pour un titre de niche étudié sans publicité, c'est des dizaines d'exemplaires par mois, pas des centaines — les centaines arrivent quand niche forte, avis et publicités travaillent ensemble.",
            ],
            bullets: [
              "Ebook 4,99 € → ~3,40 € ; broché 11,99 €/200 p. → ~3,70 € ; lecture KU complète ~1,10 €/250 p.",
              "60 exemplaires/mois ≈ 200 €/mois pour un titre modestement réussi.",
              "Planifiez en unités : redevance × exemplaires mensuels × titres.",
              "Des dizaines d'exemplaires mensuels : l'hypothèse honnête par défaut.",
            ],
          },
          {
            id: "effet-catalogue",
            title: "L'effet catalogue : pourquoi le titre n°10 rapporte plus que le n°1",
            body: [
              "Dix livres ne rapportent pas dix fois un livre — ils rapportent davantage. Chaque titre est une surface de découverte distincte dans la recherche et les recommandations ; les lecteurs qui finissent un livre achètent les voisins ; les pages de nom de plume font de la vente croisée ; et votre propre compétence se compose, donc les titres tardifs sont simplement de meilleurs produits.",
              "Modélisez un catalogue prudemment : si un titre moyen se stabilise à 150 €/mois et que vous publiez deux titres par mois pendant un an, vous sortez de l'année autour de 3 600 €/mois de rythme de croisière — avec des titres qui continuent de rapporter. C'est tout l'argument stratégique des systèmes de production : le goulot d'étranglement est le nombre de titres de qualité terminés par mois.",
              "C'est aussi pourquoi l'outillage compte économiquement, pas seulement pratiquement. Réduire la production d'un livre de 30 heures à quelques-unes — la différence chatbot/pipeline traitée dans notre guide des outils, et le problème que DraftToDone existe pour résoudre — se convertit directement en vitesse de croissance du catalogue, la variable à laquelle tout le modèle est le plus sensible.",
            ],
            bullets: [
              "Le catalogue se compose : surfaces de découverte, ventes croisées, compétence, recommandations.",
              "Modèle prudent : €/titre/mois moyen × titres, en croissance mensuelle.",
              "Le débit de titres de qualité est la variable dominante.",
              "L'outillage convertit les heures économisées en vitesse de croissance du catalogue.",
            ],
          },
          {
            id: "couts",
            title: "Coûts, impôts et la vraie ligne de profit",
            body: [
              "Le chiffre d'affaires n'est pas le profit. Coûts par titre en flux manuel : couverture (50–300 €), édition (200–1 000 € en sous-traitance), mise en page (30–100 €), plus vos heures. Les pipelines automatisés compressent cela en un tarif par livre ; dans les deux cas, posez de vrais chiffres sur chaque titre et calculez des mois de retour sur investissement, pas seulement du revenu.",
              "Les redevances sont un revenu imposable partout. Complétez l'entretien fiscal KDP pour éviter une retenue américaine inutile (la plupart des pays conventionnés, dont la France : 0 %), et déclarez selon votre régime local — beaucoup de petits éditeurs fonctionnent très bien en micro-entreprise ; consultez un comptable une fois et faites-en un modèle.",
              "Un titre rapportant 150 €/mois pour 150 € de coût de production se rembourse au premier mois. Cette vitesse de remboursement — rare parmi les petits modèles d'affaires — est la propriété réellement attractive de l'économie de l'édition, et elle ne tient que si les coûts restent disciplinés.",
            ],
            bullets: [
              "Comptez le coût par titre : couverture, édition, mise en page, heures ou tarif pipeline.",
              "Calculez les mois de retour par titre ; visez moins de trois.",
              "Entretien fiscal fait sérieusement ; déclaration locale (comptable une fois, modèle ensuite).",
              "La discipline des coûts est ce qui garde les maths de remboursement attractives.",
            ],
          },
          {
            id: "plan-douze-mois",
            title: "Un plan sobre sur 12 mois",
            body: [
              "Mois 1–2 : apprenez la machine de bout en bout sur un livre — recherche de niche, production, métadonnées, lancement. Attendez-vous à des ventes modestes ; vous achetez de la compétence, pas du revenu. Mois 3–6 : installez un rythme de production de un à quatre titres de qualité par mois selon l'outillage, en tuant les niches sans traction et en doublant celles qui en montrent.",
              "Mois 7–12 : le catalogue commence à vous porter. Réinvestissez dans ce qui fonctionne — plus de titres dans les niches prouvées, traductions des gagnants (l'édition anglaise d'un succès français est un nouvel actif pour une fraction de la recherche), et publicités modestes sur les titres ayant des avis.",
              "Les résultats de fin d'année varient énormément, mais les fourchettes honnêtes ressemblent à : quelques centaines d'euros mensuels pour un petit catalogue soigné, quelques milliers pour 15 à 25 titres bien étudiés avec quelques gagnants. Le mode d'échec est tout aussi prévisible : dix livres dans dix niches non validées avec des métadonnées modèles, qui ne rapportent rien. La différence n'a jamais été la vitesse d'écriture — c'était la recherche et l'itération.",
            ],
            bullets: [
              "Mois 1–2 : un livre, boucle complète, acquisition de compétence.",
              "Mois 3–6 : rythme de production ; tuez les perdants, doublez les gagnants.",
              "Mois 7–12 : réinvestissez — niches prouvées, traductions, publicités sur titres avec avis.",
              "Sortie d'année réaliste : centaines à quelques milliers d'euros mensuels, selon le catalogue.",
            ],
          },
        ],
        checklist: [
          "Attentes de revenu fondées sur des distributions, pas des captures d'écran.",
          "Redevances unitaires calculées pour vos prix réels.",
          "Plan écrit en redevance × unités × titres, avec hypothèses honnêtes.",
          "Coût de production et mois de retour calculés par titre.",
          "Entretien fiscal complété ; régime de déclaration local confirmé.",
          "Rythme de production aligné sur l'outillage (manuel ou pipeline).",
          "Étape de validation de niche obligatoire avant chaque nouveau titre.",
          "Revue mensuelle : éliminer les non-performants, réinvestir les gagnants, envisager les traductions.",
        ],
        faq: [
          {
            question: "Peut-on vraiment générer un revenu passif avec KDP ?",
            answer:
              "Semi-passif est le terme honnête. Un titre publié rapporte sans travail supplémentaire, mais atteindre des titres qui rapportent exige recherche, production et itération en amont. La passivité est réelle après publication ; le travail est concentré avant.",
          },
          {
            question: "Combien rapporte généralement un premier livre auto-édité ?",
            answer:
              "La plupart des premiers livres rapportent moins de 100 € au total, parce que le premier livre sert à apprendre le choix de niche et les métadonnées. Considérez-le comme des frais de scolarité ; l'économie est conçue pour émerger à l'échelle du catalogue dans des niches validées.",
          },
          {
            question: "Combien de livres faut-il pour gagner 1 000 € par mois ?",
            answer:
              "À 100–200 € par titre et par mois pour des titres de niche modestement réussis, environ 5 à 10 titres performants. Comme tous les titres ne performent pas, prévoyez d'en publier 10 à 20 de qualité pour obtenir ce nombre de performants.",
          },
          {
            question: "KDP vaut-il encore le coup en 2026 avec l'afflux de livres IA ?",
            answer:
              "Le volume a augmenté, mais l'exigence de qualité d'Amazon et la limite de trois titres par jour punissent les stratégies d'inondation. Ce qui fonctionne n'a pas changé : demande validée, livres passés au contrôle qualité, métadonnées honnêtes. L'IA a changé qui peut exécuter ce plan — pas le plan.",
          },
          {
            question: "Les redevances KDP sont-elles imposables ?",
            answer:
              "Oui — les redevances sont un revenu imposable ordinaire dans votre pays. Complétez l'entretien fiscal KDP pour appliquer le taux conventionnel (souvent 0 % de retenue américaine pour les éditeurs européens) et déclarez sous votre régime local, micro-entreprise comprise.",
          },
        ],
      },
    },
  },
  {
    key: "book-pricing-strategy",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 13,
    accent: {
      start: "#fff1f2",
      middle: "#ffd1dc",
      end: "#cfe8ff",
    },
    translations: {
      en: {
        slug: "how-to-price-a-self-published-book",
        title: "How to price a self-published book: royalty bands, psychology and a pricing playbook per format",
        description:
          "A practical pricing method for KDP books: the 70% royalty band, printing-cost floors, price anchoring between formats, launch pricing, international price points and when 0.99 actually makes sense.",
        keywords: [
          "how to price a self published book",
          "KDP pricing strategy",
          "ebook pricing",
          "paperback price KDP",
          "book launch pricing",
          "kindle book price",
          "self publishing royalties pricing",
          "99 cent ebook strategy",
        ],
        category: "Pricing",
        intro: [
          "Price is the only marketing lever that takes effect in minutes and costs nothing to change, yet most self-publishers set it once by copying a neighbor and never touch it again. That neighbor probably copied someone too.",
          "Good pricing is mechanical before it is psychological: KDP's royalty bands and printing costs define hard boundaries, and within them, anchoring between formats and a handful of price-point effects do predictable work.",
          "This guide builds the method in layers — constraints, psychology, format interplay, launch dynamics and international points — and ends with concrete defaults you can apply today and test from.",
        ],
        sections: [
          {
            id: "royalty-structure",
            title: "Layer 1 — Know your hard boundaries",
            body: [
              "Ebooks: 70% royalty applies only between $2.99 and $9.99; outside that band you fall to 35%. The cliff is brutal at the edges — a $12.99 ebook earns $4.55 at 35%, while $9.99 earns about $6.90 at 70%. Pricing above $9.99 must clear that gap before it makes sense, which it almost never does for indie nonfiction.",
              "Paperbacks: royalty is 60% of list price minus printing cost (about $0.85 base plus $0.012 per page for black ink). A 250-page book costs roughly $3.85 to print, so list price must exceed ~$6.40 just to earn a cent. Your real floor is higher: target at least $2.50–$3 royalty per copy to leave room for ads and price promotions.",
              "Compute both numbers for your actual book before any psychology: the ebook band you'll live in, and the paperback floor printing imposes.",
            ],
            bullets: [
              "Ebook 70% band: $2.99–$9.99 — the default home for indie ebooks.",
              "Paperback floor: printing cost ÷ 0.6, plus margin for promotions.",
              "250 pages ≈ $3.85 printing ≈ $6.42 break-even list price.",
              "Do this math per book; page count changes everything.",
            ],
          },
          {
            id: "psychology",
            title: "Layer 2 — Price psychology that actually replicates",
            body: [
              "Charm endings dominate book retail: $4.99 outsells $5.00 reliably, and 9-endings are the convention readers expect. Within the 70% band, the standard ladder is $2.99 / $4.99 / $6.99 / $9.99 — intermediate points like $3.49 mostly add decision friction without revenue.",
              "Price signals quality in categories where the buyer cannot evaluate before purchase. Professional and technical nonfiction supports — and often requires — higher prices to be taken seriously: a $2.99 guide to a serious business topic reads as thin. Fiction tolerates lower points because series economics and read-through carry the revenue.",
              "The $0.99 point is a tool, not a price: it converts browsers into readers at near-zero royalty ($0.35). Use it for time-boxed launches, series starters and promo spikes that feed the algorithm — never as a permanent home for a book you believe in.",
            ],
            bullets: [
              "Use 9-endings; ladder is $2.99 / $4.99 / $6.99 / $9.99.",
              "Higher price = quality signal in expertise niches; thin price = thin content signal.",
              "$0.99 is a promotional instrument at $0.35 royalty — time-box it.",
              "Test one price change at a time, two weeks per test.",
            ],
          },
          {
            id: "format-anchoring",
            title: "Layer 3 — Let formats anchor each other",
            body: [
              "On a listing showing a $14.99 paperback next to a $5.99 ebook, the ebook looks like a bargain — the paperback price does selling work even when nobody buys it. This anchoring is free conversion and a core reason to always publish both formats.",
              "Keep a sensible spread: paperback at 2–3x the ebook price reads as normal; a paperback below 1.5x the ebook makes the ebook look overpriced. Hardcovers, where offered, extend the anchor upward.",
              "Kindle Unlimited complicates the picture: KU readers 'pay' per page read regardless of list price, so for KU-enrolled books, list price mainly drives the anchor and the non-KU buyer — another reason the paperback's existence matters even with modest paperback sales.",
            ],
            bullets: [
              "Always publish ebook + paperback; the anchor alone justifies it.",
              "Paperback at 2–3x ebook price is the natural-feeling spread.",
              "KU pages pay independently of price; list price still anchors.",
              "The expensive format sells the cheap one.",
            ],
          },
          {
            id: "launch-pricing",
            title: "Layer 4 — Launch pricing and the visibility window",
            body: [
              "New releases get a honeymoon of algorithmic attention. A launch price one step below the target ($2.99 for a book that will live at $4.99) lowers the trial barrier exactly when early sales and reviews matter most for ranking.",
              "Run the launch price for one to two weeks, announce the increase honestly to whatever audience you have ('launch price ends Friday' is honest urgency), then step up. The increase itself is a second promotional moment.",
              "Afterwards, change prices deliberately, not nervously: one variable at a time, two weeks of data, decided by royalty per day rather than units per day — a price cut that lifts units 20% but cuts revenue 15% is a loss wearing a costume.",
            ],
            bullets: [
              "Launch one ladder step below target price for 1–2 weeks.",
              "Announce the step-up; it creates a second promo moment.",
              "Judge tests on royalty per day, not units.",
              "Avoid constant fiddling; the algorithm and readers both prefer stability.",
            ],
          },
          {
            id: "international",
            title: "Layer 5 — International price points",
            body: [
              "Auto-converted prices land on ugly numbers (€4.63, £3.87). Set per-marketplace prices at natural local points: €4.99, £3.99, ¥550. The minutes this takes signal care and measurably help conversion in non-US stores.",
              "Mind the band edges: the 70% window has local equivalents per marketplace, and VAT (included in EU list prices) means a €2.99 ebook nets differently across countries. Check the royalty preview per major marketplace rather than assuming the US math travels.",
              "If you publish in multiple languages — a French edition alongside the English, as DraftToDone generates natively — price each edition for its market's conventions, not as a translation of the US price; ebook price expectations in France differ from the US, and matching local norms beats currency-converting habits.",
            ],
            bullets: [
              "Round every marketplace to natural local points (€4.99, £3.99).",
              "EU prices include VAT; verify net royalty per marketplace.",
              "The 70% band has local boundaries — check them per store.",
              "Localized editions get localized pricing, not converted pricing.",
            ],
          },
        ],
        checklist: [
          "Printing cost and break-even list price computed for the paperback.",
          "Ebook priced inside the $2.99–$9.99 band at a 9-ending point.",
          "Paperback at 2–3x ebook price; both formats published for anchoring.",
          "Launch price one step below target, time-boxed, step-up announced.",
          "Price tests: one variable, two weeks, judged on royalty per day.",
          "$0.99 used only as time-boxed promotion, never as permanent home.",
          "Per-marketplace prices rounded to natural local points; VAT effects checked.",
          "Localized editions priced to local norms.",
        ],
        faq: [
          {
            question: "What is the best price for a self-published ebook?",
            answer:
              "For most indie nonfiction, $4.99–$6.99 balances royalty and conversion inside the 70% band; specialized professional topics support $7.99–$9.99. Fiction commonly lives at $2.99–$4.99 with series starters lower. Start at the ladder point matching your category's bestsellers and test from there.",
          },
          {
            question: "Why is my paperback royalty so small?",
            answer:
              "Printing cost is deducted before your 60% royalty: a 300-page book costs about $4.45 to print, so at a $9.99 list you earn roughly $1.54. Raise the list price, reduce page count through tighter formatting, or accept the paperback as an anchor that sells ebooks.",
          },
          {
            question: "Should I price my first book at $0.99?",
            answer:
              "Only as a deliberate launch tactic for one or two weeks. At $0.35 royalty, $0.99 is a visibility purchase, not an income strategy — and a permanently cheap book signals thin content in nonfiction categories.",
          },
          {
            question: "Can I change my book's price whenever I want?",
            answer:
              "Yes — KDP price changes take effect within hours and are unlimited. The discipline that matters is testing methodology: single changes, two-week windows, royalty-per-day as the metric.",
          },
          {
            question: "How does Kindle Unlimited affect pricing?",
            answer:
              "KU payouts depend on pages read, not list price, so enrollment decouples part of your income from pricing. List price still matters for non-KU buyers and as the anchor next to your paperback — which is why KU-enrolled books still deserve deliberate pricing.",
          },
        ],
      },
      fr: {
        slug: "prix-livre-auto-edite-strategie",
        title: "Quel prix pour un livre auto-édité ? Bandes de redevance, psychologie et méthode de prix par format",
        description:
          "Une méthode de prix pratique pour les livres KDP : la bande de redevance à 70 %, les planchers de coût d'impression, l'ancrage entre formats, le prix de lancement, les points de prix internationaux et les vrais usages du 0,99.",
        keywords: [
          "prix livre auto-édité",
          "stratégie de prix KDP",
          "prix ebook",
          "prix broché KDP",
          "prix lancement livre",
          "prix livre Kindle",
          "redevances auto-édition prix",
          "stratégie ebook 0,99",
        ],
        category: "Prix",
        intro: [
          "Le prix est le seul levier marketing qui agit en quelques minutes et ne coûte rien à modifier ; pourtant la plupart des auto-éditeurs le fixent une fois en copiant un voisin et n'y touchent plus. Ce voisin avait probablement copié quelqu'un d'autre.",
          "Un bon prix est mécanique avant d'être psychologique : les bandes de redevance de KDP et les coûts d'impression posent des limites dures, et à l'intérieur, l'ancrage entre formats et une poignée d'effets de points de prix font un travail prévisible.",
          "Ce guide construit la méthode par couches — contraintes, psychologie, jeu entre formats, dynamique de lancement et points internationaux — et finit sur des valeurs par défaut concrètes, applicables aujourd'hui et testables ensuite.",
        ],
        sections: [
          {
            id: "structure-redevances",
            title: "Couche 1 — Connaître ses limites dures",
            body: [
              "Ebooks : la redevance de 70 % ne s'applique qu'entre 2,99 et 9,99 ; en dehors, vous tombez à 35 %. La falaise est brutale aux bords — un ebook à 12,99 rapporte 4,55 à 35 %, quand 9,99 rapporte environ 6,90 à 70 %. Un prix au-dessus de 9,99 doit combler cet écart avant d'avoir un sens, ce qui n'arrive presque jamais pour la non-fiction indépendante.",
              "Brochés : la redevance est de 60 % du prix de vente moins le coût d'impression (environ 0,85 de base plus 0,012 par page en encre noire). Un livre de 250 pages coûte environ 3,85 à imprimer : le prix doit dépasser ~6,40 pour gagner un centime. Votre vrai plancher est plus haut : visez au moins 2,50–3 de redevance par exemplaire pour laisser de la place aux publicités et promotions.",
              "Calculez ces deux nombres pour votre livre réel avant toute psychologie : la bande ebook où vous vivrez, et le plancher broché que l'impression impose.",
            ],
            bullets: [
              "Bande ebook 70 % : 2,99–9,99 — le domicile par défaut des ebooks indépendants.",
              "Plancher broché : coût d'impression ÷ 0,6, plus marge pour promotions.",
              "250 pages ≈ 3,85 d'impression ≈ 6,42 de prix de vente au seuil.",
              "Refaites ce calcul par livre ; le nombre de pages change tout.",
            ],
          },
          {
            id: "psychologie",
            title: "Couche 2 — La psychologie des prix qui se réplique vraiment",
            body: [
              "Les terminaisons en 9 dominent la vente de livres : 4,99 surpasse 5,00 de façon fiable, et le 9 final est la convention attendue. Dans la bande à 70 %, l'échelle standard est 2,99 / 4,99 / 6,99 / 9,99 — les points intermédiaires comme 3,49 ajoutent surtout de la friction de décision sans revenu.",
              "Le prix signale la qualité quand l'acheteur ne peut pas évaluer avant l'achat. La non-fiction professionnelle et technique supporte — et exige souvent — des prix plus élevés pour être prise au sérieux : un guide à 2,99 sur un sujet d'affaires sérieux paraît maigre. La fiction tolère des points plus bas car l'économie de série et l'enchaînement des tomes portent le revenu.",
              "Le point 0,99 est un outil, pas un prix : il convertit les curieux en lecteurs à redevance quasi nulle (0,35). Utilisez-le pour des lancements limités dans le temps, des premiers tomes de série et des pics promotionnels qui nourrissent l'algorithme — jamais comme domicile permanent d'un livre auquel vous croyez.",
            ],
            bullets: [
              "Terminaisons en 9 ; l'échelle est 2,99 / 4,99 / 6,99 / 9,99.",
              "Prix haut = signal de qualité dans les niches d'expertise ; prix maigre = signal de contenu maigre.",
              "0,99 est un instrument promotionnel à 0,35 de redevance — limitez-le dans le temps.",
              "Testez un changement de prix à la fois, deux semaines par test.",
            ],
          },
          {
            id: "ancrage-formats",
            title: "Couche 3 — Laisser les formats s'ancrer mutuellement",
            body: [
              "Sur une fiche montrant un broché à 14,99 à côté d'un ebook à 5,99, l'ebook paraît une affaire — le prix du broché fait un travail de vente même si personne ne l'achète. Cet ancrage est de la conversion gratuite et une raison centrale de toujours publier les deux formats.",
              "Gardez un écart sensé : un broché à 2–3 fois le prix de l'ebook paraît normal ; un broché sous 1,5 fois l'ebook fait paraître l'ebook trop cher. La couverture rigide, quand elle existe, étend l'ancre vers le haut.",
              "Kindle Unlimited complique le tableau : les lecteurs KU « paient » à la page lue indépendamment du prix affiché. Pour les livres inscrits à KU, le prix de vente sert surtout d'ancre et de prix pour l'acheteur hors KU — une raison de plus pour laquelle l'existence du broché compte, même avec des ventes papier modestes.",
            ],
            bullets: [
              "Publiez toujours ebook + broché ; l'ancrage seul le justifie.",
              "Broché à 2–3 fois le prix de l'ebook : l'écart qui paraît naturel.",
              "Les pages KU paient indépendamment du prix ; le prix affiché ancre quand même.",
              "Le format cher vend le format bon marché.",
            ],
          },
          {
            id: "prix-lancement",
            title: "Couche 4 — Prix de lancement et fenêtre de visibilité",
            body: [
              "Les nouveautés bénéficient d'une lune de miel algorithmique. Un prix de lancement un cran sous la cible (2,99 pour un livre qui vivra à 4,99) abaisse la barrière d'essai exactement quand les premières ventes et les premiers avis pèsent le plus sur le classement.",
              "Tenez le prix de lancement une à deux semaines, annoncez honnêtement la hausse à l'audience dont vous disposez (« le prix de lancement se termine vendredi » est une urgence honnête), puis montez d'un cran. La hausse elle-même est un second moment promotionnel.",
              "Ensuite, changez les prix délibérément, pas nerveusement : une variable à la fois, deux semaines de données, jugées à la redevance par jour plutôt qu'aux exemplaires par jour — une baisse de prix qui augmente les unités de 20 % mais réduit le revenu de 15 % est une perte déguisée.",
            ],
            bullets: [
              "Lancez un cran d'échelle sous le prix cible, pendant 1 à 2 semaines.",
              "Annoncez la hausse ; elle crée un second moment promotionnel.",
              "Jugez les tests à la redevance par jour, pas aux unités.",
              "Évitez les retouches permanentes ; algorithme et lecteurs préfèrent la stabilité.",
            ],
          },
          {
            id: "international",
            title: "Couche 5 — Les points de prix internationaux",
            body: [
              "Les prix auto-convertis tombent sur des nombres laids (4,63 €, 3,87 £). Fixez des prix par marché sur des points locaux naturels : 4,99 €, 3,99 £, 550 ¥. Les minutes que cela prend signalent du soin et aident mesurablement la conversion hors États-Unis.",
              "Surveillez les bords de bande : la fenêtre à 70 % a des équivalents locaux par marché, et la TVA (incluse dans les prix affichés en Europe) fait qu'un ebook à 2,99 € rapporte différemment selon les pays. Vérifiez l'aperçu de redevance par grand marché plutôt que de supposer que le calcul américain voyage.",
              "Si vous publiez en plusieurs langues — une édition française à côté de l'anglaise, comme DraftToDone les génère nativement — fixez le prix de chaque édition selon les conventions de son marché, pas comme une conversion du prix américain ; les attentes de prix ebook en France diffèrent des États-Unis, et coller aux normes locales bat la conversion de devise.",
            ],
            bullets: [
              "Arrondissez chaque marché à des points locaux naturels (4,99 €, 3,99 £).",
              "Les prix européens incluent la TVA ; vérifiez la redevance nette par marché.",
              "La bande à 70 % a des bornes locales — vérifiez-les par boutique.",
              "Une édition localisée reçoit un prix localisé, pas un prix converti.",
            ],
          },
        ],
        checklist: [
          "Coût d'impression et prix de seuil calculés pour le broché.",
          "Ebook placé dans la bande 2,99–9,99 sur un point en 9.",
          "Broché à 2–3 fois le prix de l'ebook ; les deux formats publiés pour l'ancrage.",
          "Prix de lancement un cran sous la cible, limité dans le temps, hausse annoncée.",
          "Tests de prix : une variable, deux semaines, jugés à la redevance par jour.",
          "0,99 utilisé seulement en promotion limitée, jamais en domicile permanent.",
          "Prix par marché arrondis aux points locaux naturels ; effets de TVA vérifiés.",
          "Éditions localisées tarifées selon les normes locales.",
        ],
        faq: [
          {
            question: "Quel est le meilleur prix pour un ebook auto-édité ?",
            answer:
              "Pour la plupart de la non-fiction indépendante, 4,99–6,99 équilibre redevance et conversion dans la bande à 70 % ; les sujets professionnels pointus supportent 7,99–9,99. La fiction vit couramment à 2,99–4,99 avec des premiers tomes plus bas. Démarrez au point d'échelle de vos best-sellers de catégorie et testez.",
          },
          {
            question: "Pourquoi ma redevance broché est-elle si faible ?",
            answer:
              "Le coût d'impression est déduit avant votre redevance de 60 % : un livre de 300 pages coûte environ 4,45 à imprimer ; à 9,99 de prix de vente, vous gagnez environ 1,54. Augmentez le prix, réduisez le nombre de pages par une mise en page plus dense, ou assumez le broché comme une ancre qui vend des ebooks.",
          },
          {
            question: "Dois-je mettre mon premier livre à 0,99 ?",
            answer:
              "Seulement comme tactique de lancement délibérée, une à deux semaines. À 0,35 de redevance, 0,99 est un achat de visibilité, pas une stratégie de revenu — et un livre durablement bradé signale un contenu maigre dans les catégories de non-fiction.",
          },
          {
            question: "Puis-je changer le prix de mon livre quand je veux ?",
            answer:
              "Oui — les changements de prix KDP prennent effet en quelques heures et sont illimités. La discipline qui compte est la méthode de test : changements isolés, fenêtres de deux semaines, redevance par jour comme métrique.",
          },
          {
            question: "Comment Kindle Unlimited influence-t-il le prix ?",
            answer:
              "Les paiements KU dépendent des pages lues, pas du prix affiché : l'inscription découple une partie du revenu du prix. Le prix de vente reste décisif pour les acheteurs hors KU et comme ancre à côté du broché — c'est pourquoi un livre inscrit à KU mérite quand même un prix réfléchi.",
          },
        ],
      },
    },
  },
  {
    key: "low-content-books-kdp",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 13,
    accent: {
      start: "#f0f9ff",
      middle: "#c7e6ff",
      end: "#ffe9c9",
    },
    translations: {
      en: {
        slug: "low-content-books-kdp-complete-guide",
        title: "Low-content books on KDP: what still works, what's saturated and how to compete in 2026",
        description:
          "A realistic guide to publishing journals, planners, logbooks and workbooks on Amazon KDP: the post-saturation landscape, niches that still sell, design and interior standards, keyword rules and the medium-content upgrade path.",
        keywords: [
          "low content books KDP",
          "sell journals on Amazon",
          "KDP planners",
          "no content books",
          "logbook publishing KDP",
          "notebook business Amazon",
          "medium content books",
          "KDP low content niche",
        ],
        category: "Low-content",
        intro: [
          "Low-content books — journals, planners, logbooks, notebooks — were KDP's gold-rush category: no writing required, templates everywhere, course sellers promising fortunes. The rush ended the way they all do: lined notebooks with cute covers now compete against hundreds of thousands of near-identical listings.",
          "What the post-rush landscape actually rewards is more interesting. Specific-use interiors for specific audiences still sell steadily, because a beekeeping inspection log or a dialysis tracking journal solves a problem no generic notebook touches — and most gold-rushers never bothered to learn problem-solving design.",
          "This guide maps what still works, the design and metadata standards the category now demands, and the medium-content upgrade path that multiplies both the value and the defensibility of every title.",
        ],
        sections: [
          {
            id: "landscape",
            title: "The 2026 landscape: saturation is uneven",
            body: [
              "Saturation in low-content is real but concentrated exactly where the courses pointed: generic lined journals, gratitude journals, generic daily planners, password books. In those segments, thousands of sellers compete on covers alone, and the economics are dead for newcomers.",
              "One layer down, the picture inverts. Activity-specific logs (equipment maintenance, medication tracking, hunting leases, cold plunge sessions), profession-specific planners, and hobby workbooks face dozens of competitors instead of hundreds of thousands — and buyers searching 'sourdough starter log book' convert at high rates because the query itself is the need.",
              "The test for any low-content idea: does the interior require knowing something about the use case? If any template marketplace fills it, skip it. If designing it well requires twenty minutes of understanding how beekeepers actually inspect hives, you have a moat exactly that deep — which is more than zero.",
            ],
            bullets: [
              "Dead: generic lined, gratitude, generic planners, password books.",
              "Alive: activity-specific logs, profession planners, hobby workbooks.",
              "Specific queries convert: the search phrase is the need.",
              "Moat test: does the interior require use-case knowledge?",
            ],
          },
          {
            id: "niche-method",
            title: "Finding niches: demand signals for books nobody writes about",
            body: [
              "Low-content niche research is keyword research against interior specificity. Mine Amazon's autocomplete for '[activity] log book', '[profession] planner', '[hobby] journal' patterns; a suggestion existing means people type it. Then check the top results: if page one is generic notebooks with the keyword pasted on, the specific interior wins; if page one is well-designed specific interiors with hundreds of reviews, you are late.",
              "Validate purchase intent over traffic. A few hundred monthly searches with high specificity beats ten thousand generic ones — the buyer of a 'food and symptom diary for IBS' is not browsing, they are buying.",
              "Stack seasonal and gift angles: many low-content purchases are gifts (retirement, new hobby, new pet), and gift-framing in metadata captures searches that interior-framing misses.",
            ],
            bullets: [
              "Pattern-mine autocomplete: [activity] log, [profession] planner, [condition] tracker.",
              "Page-one check: generic results = opportunity; reviewed specific results = late.",
              "Specific small demand beats generic large demand.",
              "Gift framing ('retirement gift for nurses') is a second keyword surface.",
            ],
          },
          {
            id: "interior-design",
            title: "Interior design: the product is the page layout",
            body: [
              "A specific-use interior earns its price by encoding workflow knowledge: the beekeeping log has fields for queen sightings and mite counts; the small-landlord book has inspection checklists per visit type. Research the actual workflow — forums, YouTube how-tos, one practitioner interview — and the fields design themselves.",
              "Respect print mechanics: most low-content books work at 6 x 9 or 8.5 x 11, no-bleed, with page counts of 100–150 (printing cost rises with pages while low-content prices cap around $6.99–$12.99). Margins follow the same KDP rules as any paperback — our formatting guide applies fully.",
              "Test the interior physically before publishing: print a few pages at home, fill them in by hand. Fields always need more space than screens suggest, and a log page that frustrates the pen kills repeat purchases — the quiet engine of the logbook business.",
            ],
            bullets: [
              "Encode real workflow knowledge into fields; research the use case.",
              "100–150 pages, no-bleed, 6 x 9 or 8.5 x 11 — printing cost discipline.",
              "Print and hand-test pages; pens need more room than screens suggest.",
              "Repeat purchases reward genuinely usable interiors.",
            ],
          },
          {
            id: "covers-metadata",
            title: "Covers, keywords and the rules KDP enforces",
            body: [
              "Low-content covers compete at thumbnail size against many siblings, so clarity beats decoration: the use case readable in the title, a visual that says the activity instantly, professional typography. Our cover design guide's thumbnail test applies double here.",
              "Metadata rules tightened after the gold rush: KDP requires transcending honesty in low-content listings — no fake page counts, no 'journal' titles on notebooks, and the dedicated low-content checkbox during setup (it removes the look-inside feature and some category options, but misdeclaring is a policy violation).",
              "Keyword the specificity: every interior field you designed is a search phrase someone types. The 'mite count' field justifies 'varroa mite tracking'; the gift angle justifies 'beekeeper gifts for men'. Specific interiors generate their own long-tail keywords — generic notebooks cannot.",
            ],
            bullets: [
              "Thumbnail clarity beats decoration; the use case must read at 100 px.",
              "Declare low-content honestly via the KDP checkbox; misdeclaring risks the account.",
              "Interior fields are keyword sources: each field is a search phrase.",
              "Gift keywords capture a second buyer population.",
            ],
          },
          {
            id: "medium-content",
            title: "The upgrade path: medium-content multiplies defensibility",
            body: [
              "Medium-content books add written value to functional interiors: a habit tracker opening with 20 pages on habit science, a beekeeping log with a seasonal task guide per section, a budgeting workbook with method explanations between worksheets. The writing raises perceived value, justifies $9.99–$14.99 prices, and — critically — cannot be replicated by template sellers.",
              "This is where AI generation changes the category's economics: producing 30 pages of well-researched instructional content per book was the bottleneck that kept low-content sellers from upgrading; a quality-gated writing pipeline removes it. A DraftToDone-style workflow can produce the instructional layer while you design the functional interior — the combination is a product neither pure-text nor pure-template competitors ship.",
              "Medium-content also unlocks better categories, the look-inside feature, and review-worthy substance — the structural advantages low-content forfeits. For any niche you validate, ask: what would the medium-content version of this look like? That version is usually the business.",
            ],
            bullets: [
              "Medium-content = functional interior + instructional writing.",
              "Justifies $9.99–$14.99 and resists template-seller competition.",
              "AI drafting removes the writing bottleneck that protected the upgrade path.",
              "Default question per niche: what does the medium-content version look like?",
            ],
          },
        ],
        checklist: [
          "Niche passes the moat test: interior requires use-case knowledge.",
          "Autocomplete demand verified; page-one competition assessed.",
          "Workflow researched; interior fields encode real practice.",
          "100–150 pages, no-bleed, standard trim; pages hand-tested in print.",
          "Cover passes the thumbnail test; use case readable instantly.",
          "Low-content checkbox declared honestly in KDP setup.",
          "Keywords mined from interior fields and gift angles.",
          "Medium-content upgrade evaluated for every validated niche.",
        ],
        faq: [
          {
            question: "Are low-content books still profitable on KDP?",
            answer:
              "Generic ones, no — those segments are terminally saturated. Specific-use interiors for specific audiences (activity logs, profession planners, condition trackers) still sell steadily, and medium-content upgrades of those niches are genuinely defensible.",
          },
          {
            question: "How much do low-content books earn per sale?",
            answer:
              "A typical $7.99 low-content paperback of 120 pages earns roughly $2.50 after printing at 60% royalty. Medium-content versions at $11.99–$14.99 roughly double that — the strongest argument for the upgrade path.",
          },
          {
            question: "Do I need design skills for low-content publishing?",
            answer:
              "You need layout competence more than artistic talent: clean tables, readable typography, usable field sizes. Tools from Canva to InDesign templates handle the mechanics; the differentiator is understanding the use case well enough to design the right fields.",
          },
          {
            question: "What is the difference between low-content and medium-content books?",
            answer:
              "Low-content interiors are functional with minimal text (lines, grids, fields). Medium-content adds substantial written material — guides, instructions, educational sections — which raises price ceilings, unlocks the look-inside feature and creates differentiation templates cannot copy.",
          },
          {
            question: "Does the KDP low-content declaration hurt sales?",
            answer:
              "It removes the look-inside preview and some category options, which mildly affects discoverability — but it is required honesty for books that qualify. Medium-content books with real written sections do not declare as low-content and keep the full feature set.",
          },
        ],
      },
      fr: {
        slug: "livres-low-content-kdp-guide-complet",
        title: "Livres low-content sur KDP : ce qui marche encore, ce qui est saturé et comment se différencier en 2026",
        description:
          "Guide réaliste pour publier carnets, agendas, journaux de bord et cahiers d'exercices sur Amazon KDP : le paysage post-saturation, les niches qui vendent encore, les standards d'intérieur et de couverture, les règles de mots-clés et la montée vers le medium-content.",
        keywords: [
          "livres low content KDP",
          "vendre des carnets sur Amazon",
          "agendas KDP",
          "livres sans contenu",
          "journal de bord KDP",
          "business carnets Amazon",
          "livres medium content",
          "niche low content KDP",
        ],
        category: "Low-content",
        intro: [
          "Les livres low-content — carnets, agendas, journaux de bord, cahiers — ont été la ruée vers l'or de KDP : aucune écriture requise, des modèles partout, des vendeurs de formations promettant fortune. La ruée s'est terminée comme toutes les autres : les carnets lignés à jolie couverture affrontent désormais des centaines de milliers de fiches quasi identiques.",
          "Ce que le paysage d'après-ruée récompense vraiment est plus intéressant. Les intérieurs à usage précis pour des publics précis se vendent toujours régulièrement, parce qu'un registre d'inspection de ruches ou un journal de suivi de dialyse résout un problème qu'aucun carnet générique n'effleure — et la plupart des chercheurs d'or n'ont jamais appris à concevoir pour résoudre un problème.",
          "Ce guide cartographie ce qui fonctionne encore, les standards de design et de métadonnées que la catégorie exige désormais, et la montée vers le medium-content qui multiplie la valeur et la défendabilité de chaque titre.",
        ],
        sections: [
          {
            id: "paysage",
            title: "Le paysage 2026 : une saturation inégale",
            body: [
              "La saturation du low-content est réelle mais concentrée exactement là où pointaient les formations : carnets lignés génériques, journaux de gratitude, agendas génériques, carnets de mots de passe. Sur ces segments, des milliers de vendeurs ne se distinguent que par la couverture, et l'économie est morte pour les nouveaux entrants.",
              "Un étage plus bas, le tableau s'inverse. Les registres d'activité spécifiques (maintenance d'équipement, suivi de médication, sessions de bain froid), les agendas par profession et les cahiers de loisirs affrontent des dizaines de concurrents au lieu de centaines de milliers — et l'acheteur qui tape « carnet de suivi levain » convertit fort, car la requête est le besoin.",
              "Le test pour toute idée low-content : l'intérieur exige-t-il de connaître l'usage ? Si n'importe quelle banque de modèles le remplit, passez. Si bien le concevoir demande vingt minutes à comprendre comment un apiculteur inspecte réellement ses ruches, vous avez un fossé exactement de cette profondeur — ce qui est plus que zéro.",
            ],
            bullets: [
              "Mort : ligné générique, gratitude, agendas génériques, carnets de mots de passe.",
              "Vivant : registres d'activité, agendas de profession, cahiers de loisirs.",
              "Les requêtes précises convertissent : la phrase cherchée est le besoin.",
              "Test du fossé : l'intérieur exige-t-il une connaissance de l'usage ?",
            ],
          },
          {
            id: "methode-niche",
            title: "Trouver les niches : des signaux de demande pour des livres sans texte",
            body: [
              "La recherche de niche low-content est une recherche de mots-clés croisée avec la spécificité d'intérieur. Exploitez l'autocomplétion Amazon sur les motifs « carnet de [activité] », « agenda [profession] », « journal de [pratique] » ; une suggestion qui existe signifie que des gens la tapent. Vérifiez ensuite les premiers résultats : si la page un montre des carnets génériques avec le mot-clé plaqué dessus, l'intérieur spécifique gagne ; si elle montre des intérieurs spécifiques bien conçus avec des centaines d'avis, vous arrivez tard.",
              "Validez l'intention d'achat plutôt que le trafic. Quelques centaines de recherches mensuelles très spécifiques battent dix mille génériques — l'acheteur d'un « journal alimentaire et symptômes SII » ne flâne pas, il achète.",
              "Empilez les angles saisonniers et cadeau : beaucoup d'achats low-content sont des cadeaux (retraite, nouveau loisir, nouvel animal), et le cadrage cadeau dans les métadonnées capte des recherches que le cadrage usage manque.",
            ],
            bullets: [
              "Exploitez l'autocomplétion : carnet de [activité], agenda [profession], suivi [condition].",
              "Contrôle de la page un : résultats génériques = opportunité ; spécifiques avec avis = trop tard.",
              "Une petite demande précise bat une grande demande générique.",
              "Le cadrage cadeau (« cadeau retraite infirmière ») est une seconde surface de mots-clés.",
            ],
          },
          {
            id: "design-interieur",
            title: "Concevoir l'intérieur : le produit, c'est la mise en page",
            body: [
              "Un intérieur à usage précis mérite son prix en encodant la connaissance du flux de travail : le registre apicole a des champs pour les observations de reine et les comptages de varroas ; le carnet du petit bailleur a des checklists d'inspection par type de visite. Étudiez le vrai flux — forums, tutoriels, un entretien avec un praticien — et les champs se dessinent d'eux-mêmes.",
              "Respectez la mécanique d'impression : la plupart des low-content fonctionnent en 6 x 9 ou 8,5 x 11, sans fond perdu, avec 100 à 150 pages (le coût d'impression monte avec les pages alors que les prix low-content plafonnent vers 6,99–12,99). Les marges suivent les mêmes règles KDP que tout broché — notre guide de mise en page s'applique entièrement.",
              "Testez l'intérieur physiquement avant publication : imprimez quelques pages chez vous, remplissez-les à la main. Les champs exigent toujours plus de place que l'écran ne le suggère, et une page de registre qui frustre le stylo tue le rachat — le moteur silencieux du business des journaux de bord.",
            ],
            bullets: [
              "Encodez la vraie pratique dans les champs ; étudiez l'usage.",
              "100–150 pages, sans fond perdu, 6 x 9 ou 8,5 x 11 — discipline du coût d'impression.",
              "Imprimez et testez à la main ; le stylo demande plus de place que l'écran.",
              "Le rachat récompense les intérieurs réellement utilisables.",
            ],
          },
          {
            id: "couvertures-metadonnees",
            title: "Couvertures, mots-clés et les règles que KDP fait respecter",
            body: [
              "Les couvertures low-content se battent en taille vignette contre des dizaines de cousines : la clarté bat la décoration — l'usage lisible dans le titre, un visuel qui dit l'activité instantanément, une typographie professionnelle. Le test de la vignette de notre guide couverture s'applique doublement ici.",
              "Les règles de métadonnées se sont durcies après la ruée : KDP exige une honnêteté stricte sur les fiches low-content — pas de faux nombre de pages, pas de titre « journal » sur un simple carnet, et la case dédiée low-content à la création (elle retire l'aperçu « feuilleter » et certaines options de catégorie, mais mal déclarer est une violation de politique).",
              "Mettez la spécificité en mots-clés : chaque champ d'intérieur que vous avez conçu est une phrase que quelqu'un tape. Le champ « comptage varroas » justifie « suivi varroas » ; l'angle cadeau justifie « cadeau apiculteur ». Les intérieurs spécifiques génèrent leur propre longue traîne — les carnets génériques en sont incapables.",
            ],
            bullets: [
              "Clarté en vignette avant décoration ; l'usage doit se lire à 100 px.",
              "Déclarez honnêtement la case low-content ; mal déclarer met le compte en risque.",
              "Les champs d'intérieur sont des sources de mots-clés : chaque champ est une recherche.",
              "Les mots-clés cadeau captent une seconde population d'acheteurs.",
            ],
          },
          {
            id: "medium-content",
            title: "La montée en gamme : le medium-content multiplie la défendabilité",
            body: [
              "Les livres medium-content ajoutent de la valeur écrite aux intérieurs fonctionnels : un tracker d'habitudes ouvrant sur 20 pages de science des habitudes, un registre apicole avec un guide des tâches saisonnières par section, un cahier de budget avec des explications de méthode entre les feuilles. L'écrit élève la valeur perçue, justifie des prix de 9,99 à 14,99, et — décisif — ne peut pas être répliqué par les vendeurs de modèles.",
              "C'est ici que la génération par IA change l'économie de la catégorie : produire 30 pages de contenu pédagogique bien documenté par livre était le goulot qui empêchait les vendeurs low-content de monter en gamme ; un pipeline d'écriture avec contrôles qualité le supprime. Un flux type DraftToDone peut produire la couche pédagogique pendant que vous concevez l'intérieur fonctionnel — la combinaison est un produit que ni les concurrents tout-texte ni les concurrents tout-modèle ne livrent.",
              "Le medium-content débloque aussi de meilleures catégories, l'aperçu « feuilleter », et une substance digne d'avis — les avantages structurels auxquels le low-content renonce. Pour chaque niche validée, demandez-vous : à quoi ressemblerait la version medium-content ? Cette version est généralement le vrai business.",
            ],
            bullets: [
              "Medium-content = intérieur fonctionnel + écrit pédagogique.",
              "Justifie 9,99–14,99 et résiste à la concurrence des modèles.",
              "La rédaction IA supprime le goulot d'écriture qui protégeait la montée en gamme.",
              "Question par défaut pour chaque niche : à quoi ressemble sa version medium-content ?",
            ],
          },
        ],
        checklist: [
          "La niche passe le test du fossé : l'intérieur exige une connaissance de l'usage.",
          "Demande vérifiée par autocomplétion ; concurrence de la page un évaluée.",
          "Flux de travail étudié ; les champs encodent la vraie pratique.",
          "100–150 pages, sans fond perdu, format standard ; pages testées à la main sur papier.",
          "Couverture validée au test de la vignette ; usage lisible instantanément.",
          "Case low-content déclarée honnêtement à la création KDP.",
          "Mots-clés extraits des champs d'intérieur et des angles cadeau.",
          "Montée en medium-content évaluée pour chaque niche validée.",
        ],
        faq: [
          {
            question: "Les livres low-content sont-ils encore rentables sur KDP ?",
            answer:
              "Les génériques, non — ces segments sont saturés sans retour. Les intérieurs à usage précis pour publics précis (registres d'activité, agendas de profession, suivis de condition) se vendent toujours régulièrement, et leurs versions medium-content sont réellement défendables.",
          },
          {
            question: "Combien rapporte un livre low-content par vente ?",
            answer:
              "Un broché low-content typique à 7,99 et 120 pages rapporte environ 2,50 après impression, à 60 % de redevance. Les versions medium-content à 11,99–14,99 doublent à peu près ce chiffre — le meilleur argument de la montée en gamme.",
          },
          {
            question: "Faut-il des compétences en design pour le low-content ?",
            answer:
              "Il faut de la compétence de mise en page plus que du talent artistique : tableaux propres, typographie lisible, champs de taille utilisable. De Canva aux gabarits InDesign, les outils gèrent la mécanique ; le différenciateur est de comprendre l'usage assez bien pour concevoir les bons champs.",
          },
          {
            question: "Quelle différence entre low-content et medium-content ?",
            answer:
              "Le low-content a un intérieur fonctionnel au texte minimal (lignes, grilles, champs). Le medium-content ajoute un écrit substantiel — guides, instructions, sections pédagogiques — qui relève les plafonds de prix, débloque l'aperçu « feuilleter » et crée une différenciation que les modèles ne copient pas.",
          },
          {
            question: "La déclaration low-content de KDP nuit-elle aux ventes ?",
            answer:
              "Elle retire l'aperçu « feuilleter » et certaines options de catégorie, ce qui affecte légèrement la découvrabilité — mais elle est obligatoire pour les livres concernés. Les medium-content avec de vraies sections rédigées ne se déclarent pas low-content et gardent toutes les fonctionnalités.",
          },
        ],
      },
    },
  },
];
