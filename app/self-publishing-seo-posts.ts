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
      it: {
        slug: "come-autopubblicare-un-libro-su-amazon-kdp",
        title: "Come autopubblicare un libro su Amazon: il percorso KDP completo per il primo libro",
        description:
          "Tutti i passaggi dal manoscritto finito alla scheda Amazon online: creazione dell'account KDP, metadati, parole chiave e categorie, caricamento dei file ebook e cartaceo, prezzo, royalty e il dopo-pubblicazione.",
        keywords: [
          "come autopubblicare un libro su Amazon",
          "tutorial Amazon KDP",
          "pubblicare un libro su KDP",
          "self-publishing per principianti",
          "KDP passo dopo passo",
          "pubblicare su Kindle",
          "guida self-publishing Amazon",
          "processo pubblicazione KDP",
        ],
        category: "Self-publishing",
        intro: [
          "Pubblicare un libro su Amazon richiede circa un'ora di clic effettivi una volta pronti i file. Se i principianti ci passano settimane, è perché quell'ora nasconde una dozzina di piccole decisioni — parole chiave, categorie, opzioni di royalty, territori — ognuna formulata in gergo KDP e ognuna che influenza le vendite per tutta la vita del libro.",
          "Questa guida percorre l'intero flusso nell'ordine di pubblicazione: creazione dell'account, le tre schermate di creazione del titolo, il caricamento dei file ebook e cartaceo, il prezzo e il processo di revisione. Per ogni decisione ricevete l'impostazione predefinita che funziona e la ragione per discostarsene.",
          "Presuppone che manoscritto e copertina siano finiti. Altrimenti, partite dalle nostre guide sulla scrittura di un libro con l'IA e sul design della copertina, poi tornate — la fase di pubblicazione premia gli input finiti.",
        ],
        sections: [
          {
            id: "creazione-account",
            title: "Creare l'account KDP correttamente al primo colpo",
            body: [
              "Create l'account su kdp.amazon.com con le credenziali Amazon che intendete tenere — fondere account KDP in seguito è penoso e Amazon ammette un solo account per persona. Completate subito i tre blocchi di configurazione: informazioni di autore/editore, dati di pagamento (bonifico sul vostro conto) e l'intervista fiscale.",
              "L'intervista fiscale conta più di quanto sembri. Gli editori fuori dagli Stati Uniti compilano il modulo W-8BEN durante l'intervista; se il vostro paese ha una convenzione fiscale con gli USA — è il caso dell'Italia — inserire il vostro codice fiscale riduce la ritenuta americana predefinita del 30 % sulle royalty, in genere allo 0 %. Cinque minuti qui valgono punti di reddito per sempre.",
              "L'approvazione dell'account è di solito istantanea, ma la convalida di pagamento e fiscale può richiedere giorni. Fate la configurazione prima della settimana di lancio, non durante.",
            ],
            bullets: [
              "Un account KDP per persona, legato alle credenziali Amazon che terrete.",
              "Pagamento e fiscale completati subito — la convalida può tardare.",
              "Fuori dagli USA: richiedete l'aliquota convenzionale nell'intervista fiscale (W-8BEN).",
              "Le royalty sono versate ~60 giorni dopo la fine del mese in cui sono maturate.",
            ],
          },
          {
            id: "dettagli-libro",
            title: "Dettagli del libro: titolo, descrizione, parole chiave, categorie",
            body: [
              "La prima delle tre schermate di pubblicazione porta i metadati che decidono la trovabilità. Lingua, titolo e sottotitolo devono corrispondere esattamente alla copertina. Il nome dell'autore può essere uno pseudonimo — vedi la nostra guida dedicata — ma sceglietelo definitivamente: non è modificabile dopo la pubblicazione.",
              "La descrizione (fino a 4.000 caratteri) è una pagina di vendita, non un riassunto: aprite sulla promessa, strutturate in paragrafi brevi, chiudete su ciò che il lettore saprà fare. I sette slot di parole chiave devono portare espressioni che gli acquirenti digitano davvero — non parole isolate, non ripetizioni del titolo, già indicizzato.",
              "Scegliete fino a tre categorie. Prendete le sottocategorie più specifiche che corrispondono onestamente: la specificità abbassa l'asticella del badge arancione di bestseller e presenta il libro agli acquirenti più propensi a comprare. Le nostre guide sulla ricerca di parole chiave e sulle categorie dettagliano il metodo.",
            ],
            bullets: [
              "Titolo, sottotitolo e autore rigorosamente identici alla copertina; il nome dell'autore è definitivo.",
              "Descrizione = testo di vendita: prima la promessa, paragrafi brevi, risultato concreto.",
              "Sette parole chiave: espressioni di acquirenti, senza ripetere il titolo, senza termini generici isolati.",
              "Tre categorie, le più precise possibile in modo onesto.",
            ],
          },
          {
            id: "pubblicazione-ebook",
            title: "Pubblicare l'ebook: file, DRM, anteprima",
            body: [
              "Il formato ebook preferito di KDP è l'EPUB; un DOCX pulito si converte bene per i libri essenzialmente testuali. Caricate il manoscritto, poi un'immagine di copertina separata — 2.560 x 1.600 px in JPEG, rapporto 1,6:1, è l'ideale — o usate il creatore di copertine di base in mancanza d'altro.",
              "La domanda sul DRM viene posta una volta e bloccata: la maggior parte degli autoeditori sceglie senza DRM, perché infastidisce i lettori legittimi senza fermare la pirateria, ma entrambe le risposte si difendono. Nessun ISBN è necessario per l'ebook Kindle — Amazon assegna il proprio identificativo ASIN.",
              "Passate l'anteprima online prima di continuare. Verificate che l'indice navighi correttamente, che le immagini si vedano e che gli inizi di capitolo siano puliti in formato telefono e tablet. Un artefatto di conversione preso qui costa minuti; preso nelle recensioni, costa stelle.",
            ],
            bullets: [
              "EPUB di preferenza; DOCX pulito accettabile per il solo testo.",
              "Copertina ebook: 2.560 x 1.600 px JPEG, rapporto 1,6:1.",
              "Nessun ISBN per l'edizione Kindle; Amazon assegna un ASIN.",
              "Anteprima in formato telefono e tablet prima della convalida.",
            ],
          },
          {
            id: "pubblicazione-cartaceo",
            title: "Pubblicare il cartaceo: ISBN, interno, copertina, bozza",
            body: [
              "Il percorso cartaceo aggiunge decisioni fisiche: accettate l'ISBN gratuito di Amazon a meno che non vogliate il vostro nome di casa editrice sulla scheda (portate allora un ISBN acquistato), scegliete formato, carta e inchiostro — 6 x 9 pollici, inchiostro nero su carta crema è lo standard dei libri di testo — e caricate un PDF interno pronto per la stampa con font incorporati.",
              "La copertina è un PDF avvolgente unico: quarta di copertina, dorso e piatto anteriore in un solo file, dimensionato per formato e numero di pagine. Il testo sul dorso esige almeno 100 pagine. La nostra guida all'impaginazione del cartaceo dà i calcoli esatti di margini e dorso; le pipeline automatizzate come DraftToDone generano questo file con le dimensioni già calcolate.",
              "Usate l'anteprima, poi ordinate una bozza cartacea prima di attivare la distribuzione. Una bozza costa le spese di stampa più la consegna ed è l'unico modo per cogliere i problemi del mondo reale: copertina troppo scura, margini stretti, corpo del testo che sembrava giusto a schermo.",
            ],
            bullets: [
              "L'ISBN gratuito di Amazon basta; il vostro solo per un marchio editoriale.",
              "6 x 9 pollici, nero su crema: il default per romanzi e saggi.",
              "Copertina = un PDF avvolgente dimensionato sul numero di pagine; testo sul dorso ≥100 pagine.",
              "Ordinate una bozza stampata prima del lancio — gli schermi mentono sulla carta.",
            ],
          },
          {
            id: "prezzo-royalty",
            title: "Prezzo, royalty e territori",
            body: [
              "Gli ebook hanno due piani di royalty: 70 % per i prezzi tra 2,99 e 9,99 (meno piccole spese di consegna), 35 % al di fuori di quella fascia. Conseguenza pratica: 2,99-9,99 è la zona naturale degli ebook, salvo ragione strategica — una settimana di lancio a 0,99, un primo volume di serie gratuito.",
              "La royalty del cartaceo è il 60 % del prezzo di listino meno il costo di stampa sugli store Amazon (50 % ai prezzi bassi su certi mercati): il numero di pagine fissa quindi direttamente il vostro prezzo minimo. Un libro di 250 pagine stampato a ~4 € esige un prezzo vicino ai 10 € per ricavare 2 € a copia.",
              "Pubblicate su tutti i territori salvo vincoli di diritti, e lasciate che Amazon converta i prezzi — poi arrotondate i prezzi convertiti a punti naturali per mercato (7,99 €, non 7,43 €). L'iscrizione a KDP Select (90 giorni di esclusiva Amazon per l'ebook in cambio dell'inclusione in Kindle Unlimited) è una scelta strategica distinta, trattata nella nostra guida dedicata.",
            ],
            bullets: [
              "Ebook: la fascia al 70 % va da 2,99 a 9,99 — posizionatevi lì di default.",
              "Cartaceo: 60 % del prezzo meno la stampa; il numero di pagine fissa il minimo.",
              "Arrotondate i prezzi convertiti a punti naturali per mercato.",
              "Decidete KDP Select separatamente; vincola l'ebook in esclusiva per 90 giorni.",
            ],
          },
          {
            id: "dopo-pubblicazione",
            title: "Revisione, messa online e il primo mese",
            body: [
              "Premere Pubblica invia il libro alla revisione di Amazon — tipicamente meno di 24 ore per l'ebook, fino a 72 per il cartaceo. Riceverete un'email all'approvazione o con i problemi di file da correggere; un rifiuto nomina il problema e il reinvio è la norma, non un dramma.",
              "Una volta online, rivendicate il libro sul vostro profilo Author Central, verificate la scheda sulla vera pagina dello store (formattazione della descrizione, resa della miniatura di copertina in formato ricerca) e confermate che le edizioni ebook e cartaceo siano collegate su un'unica pagina.",
              "Il primo mese forgia l'impressione dell'algoritmo. Concentratevi su tre leve controllabili: prime recensioni oneste da lettori reali, un prezzo di lancio che abbassa la barriera di prova, e l'iterazione di parole chiave o categorie se le impressioni esistono ma non i clic. La pubblicazione è un ciclo di iterazione, non un evento unico — e gli editori che vincono fanno girare questo ciclo su più libri.",
            ],
            bullets: [
              "Revisione: <24 h ebook, fino a 72 h cartaceo; correggere e reinviare è routine.",
              "Dopo la messa online: Author Central, verifica della scheda, collegamento delle edizioni.",
              "Primo mese: prime recensioni, prezzo di lancio accessibile, iterazione dei metadati.",
              "Trattate ogni libro come un ciclo di un sistema ripetibile.",
            ],
          },
        ],
        checklist: [
          "Account KDP completo: informazioni autore, coordinate bancarie, intervista fiscale con aliquota convenzionale.",
          "Titolo, sottotitolo e nome autore definitivi e conformi alla copertina.",
          "Descrizione scritta come testo di vendita; 7 parole chiave in espressioni di acquirenti.",
          "Tre categorie precise selezionate.",
          "Ebook visualizzato in anteprima su telefono e tablet; indice verificato.",
          "PDF interno del cartaceo convalidato dall'anteprima; avvolgente dimensionato sul numero di pagine finale.",
          "Bozza stampata ordinata e ispezionata prima dell'attivazione della distribuzione.",
          "Ebook nella fascia al 70 %; cartaceo sopra il minimo del costo di stampa.",
          "Edizioni collegate, Author Central rivendicato, piano di iterazione del primo mese scritto.",
        ],
        faq: [
          {
            question: "Quanto costa pubblicare su Amazon KDP?",
            answer:
              "Zero in anticipo. KDP non fa pagare nulla per pubblicare; Amazon prende la sua parte a ogni vendita tramite la struttura delle royalty, e il costo di stampa del cartaceo è dedotto da ogni vendita anziché pagato in anticipo. Costi reali opzionali: un ISBN acquistato, una bozza, e l'eventuale outsourcing di editing o copertina.",
          },
          {
            question: "Quanto impiega Amazon ad approvare un libro?",
            answer:
              "Gli ebook sono generalmente online entro 24 ore, i cartacei entro 72. Un rifiuto per problema di file arriva con una spiegazione; correggere e reinviare aggiunge tipicamente una giornata. Pianificate il lancio almeno una settimana dopo il caricamento per assorbire le sorprese.",
          },
          {
            question: "Serve un ISBN per autopubblicarsi su Amazon?",
            answer:
              "Non per l'ebook — Amazon assegna un ASIN. Per il cartaceo serve un ISBN, ma Amazon ne fornisce uno gratuitamente; acquistate il vostro solo per mostrare la vostra casa editrice o per distribuire oltre Amazon.",
          },
          {
            question: "Si possono pubblicare ebook e cartaceo insieme?",
            answer:
              "Sì, e va fatto: KDP crea entrambi dalla stessa pagina progetto, collega le edizioni su un'unica scheda, e il prezzo più alto del cartaceo fa sembrare l'ebook conveniente — un effetto ben documentato sulla conversione.",
          },
          {
            question: "Si può modificare il libro dopo la pubblicazione?",
            answer:
              "Sì. Manoscritto, copertina, descrizione, parole chiave, categorie e prezzo restano modificabili dopo la pubblicazione (non il nome dell'autore). Le modifiche ai metadati sono effettive in poche ore; le modifiche ai file ripassano la revisione. Iterare su un libro online è prassi standard.",
          },
        ],
      },
      de: {
        slug: "buch-bei-amazon-kdp-veroeffentlichen-anleitung",
        title: "Ein Buch bei Amazon veröffentlichen: der komplette KDP-Durchgang für Erstverleger",
        description:
          "Jeder Schritt vom fertigen Manuskript zur Live-Amazon-Seite: KDP-Konto einrichten, Metadaten, Keywords und Kategorien, Ebook- und Taschenbuch-Dateien hochladen, Preise, Tantiemen und was nach dem Veröffentlichen passiert.",
        keywords: [
          "Buch bei Amazon veröffentlichen",
          "Amazon KDP Anleitung",
          "Buch auf KDP veröffentlichen",
          "Self-Publishing für Anfänger",
          "KDP Schritt für Schritt",
          "auf Kindle veröffentlichen",
          "Amazon Self-Publishing Leitfaden",
          "KDP Veröffentlichungsprozess",
        ],
        category: "Self-Publishing",
        intro: [
          "Ein Buch bei Amazon zu veröffentlichen dauert etwa eine Stunde tatsächlichen Klickens, sobald die Dateien fertig sind. Dass Erstverleger Wochen brauchen, liegt daran, dass diese Stunde ein Dutzend kleiner Entscheidungen versteckt — Keywords, Kategorien, Tantiemen-Optionen, Territorien — jede in KDP-Jargon formuliert und jede mit Wirkung auf die Verkäufe über die gesamte Lebensdauer des Buchs.",
          "Dieser Durchgang folgt dem gesamten Ablauf in Veröffentlichungsreihenfolge: Kontoeinrichtung, die drei Abschnitte der Titelerstellung, Datei-Uploads für Ebook und Taschenbuch, Preisgestaltung und der Prüfprozess. Für jede Entscheidung erhalten Sie den funktionierenden Standard und den Grund, davon abzuweichen.",
          "Er setzt voraus, dass Manuskript und Cover fertig sind. Falls nicht, beginnen Sie mit unseren Leitfäden zum Buchschreiben mit KI und zum Coverdesign und kommen Sie zurück — der Veröffentlichungsschritt belohnt fertige Eingaben.",
        ],
        sections: [
          {
            id: "konto-einrichten",
            title: "Das KDP-Konto gleich beim ersten Mal richtig einrichten",
            body: [
              "Erstellen Sie das Konto auf kdp.amazon.com mit dem Amazon-Login, den Sie behalten wollen — KDP-Konten später zusammenzuführen ist mühsam, und Amazon erlaubt ein Konto pro Person. Vervollständigen Sie sofort die drei Einrichtungsblöcke: Autoren-/Verlegerinformationen, Zahlungsdaten (Überweisung auf Ihr Bankkonto) und das Steuerinterview.",
              "Das Steuerinterview zählt mehr, als es aussieht. Verleger außerhalb der USA füllen dabei das W-8BEN-Formular aus; hat Ihr Land ein Doppelbesteuerungsabkommen mit den USA — wie Deutschland — reduziert die Eingabe Ihrer lokalen Steuernummer den US-Standardabzug von 30 % auf Tantiemen, meist auf 0 %. Fünf Minuten hier sind dauerhaft Prozentpunkte Einkommen wert.",
              "Die Kontofreigabe ist meist sofort da, aber Zahlungs- und Steuervalidierung können Tage dauern. Erledigen Sie die Einrichtung vor der Launch-Woche, nicht währenddessen.",
            ],
            bullets: [
              "Ein KDP-Konto pro Person, gebunden an den Amazon-Login, den Sie behalten.",
              "Zahlung und Steuern sofort einrichten — die Validierung kann sich hinziehen.",
              "Außerhalb der USA: den Abkommenssatz im Steuerinterview geltend machen (W-8BEN).",
              "Tantiemen werden ~60 Tage nach Ende des Verdienstmonats ausgezahlt.",
            ],
          },
          {
            id: "buchdetails",
            title: "Buchdetails: Titel, Beschreibung, Keywords, Kategorien",
            body: [
              "Der erste der drei Veröffentlichungsbildschirme trägt die Metadaten, die über die Auffindbarkeit entscheiden. Sprache, Titel und Untertitel müssen exakt dem Cover entsprechen. Der Autorname kann ein Pseudonym sein — siehe unseren Pseudonym-Leitfaden — aber wählen Sie ihn endgültig: Er ist nach der Veröffentlichung nicht änderbar.",
              "Die Beschreibung (bis 4.000 Zeichen) ist eine Verkaufsseite, kein Inhaltsreferat: Beginnen Sie mit dem Versprechen, strukturieren Sie mit kurzen Absätzen, schließen Sie mit dem, was der Leser können wird. Die sieben Keyword-Felder sollten Suchphrasen tragen, die Käufer tatsächlich tippen — keine Einzelwörter, keine Titelwiederholungen, denn der Titel zählt bereits als durchsuchbarer Text.",
              "Sie wählen bis zu drei Kategorien. Nehmen Sie die spezifischsten Unterkategorien, die ehrlich passen: Spezifik senkt die Latte für das orangefarbene Bestseller-Abzeichen und führt das Buch den kaufbereitesten Stöberern zu. Unsere Leitfäden zu Keyword-Recherche und Kategorien vertiefen die Methode.",
            ],
            bullets: [
              "Titel, Untertitel und Autor exakt wie auf dem Cover; der Autorname ist endgültig.",
              "Beschreibung = Verkaufstext: Versprechen zuerst, kurze Absätze, konkretes Ergebnis.",
              "Sieben Keyword-Felder: Käuferphrasen, keine Titelwiederholungen, keine generischen Einzelwörter.",
              "Drei Kategorien, so spezifisch wie ehrlich möglich.",
            ],
          },
          {
            id: "ebook-upload",
            title: "Das Ebook veröffentlichen: Dateien, DRM, Vorschau",
            body: [
              "KDPs bevorzugtes Ebook-Format ist EPUB; ein sauberes DOCX konvertiert bei textlastigen Büchern ebenfalls gut. Laden Sie das Manuskript hoch, dann ein separates Coverbild — 2.560 x 1.600 px JPEG im Verhältnis 1,6:1 ist optimal — oder nutzen Sie zur Not den einfachen Cover-Ersteller.",
              "Die DRM-Frage wird einmal gestellt und fixiert: Die meisten Indie-Verleger wählen kein DRM, da es legitime Leser stört, ohne Piraterie zu stoppen — aber beide Antworten sind vertretbar. ISBNs sind für Kindle-Ebooks unnötig; Amazon vergibt seine eigene ASIN.",
              "Nutzen Sie die Online-Vorschau, bevor Sie fortfahren. Prüfen Sie, dass das Inhaltsverzeichnis korrekt springt, Bilder gerendert werden und Kapitelanfänge auf Telefon- und Tabletgröße sauber aussehen. Hier entdeckte Konvertierungsfehler kosten Minuten; in Rezensionen entdeckt kosten sie Sterne.",
            ],
            bullets: [
              "EPUB bevorzugt; sauberes DOCX für reine Textbücher akzeptabel.",
              "Ebook-Cover: 2.560 x 1.600 px JPEG, Verhältnis 1,6:1.",
              "Keine ISBN für die Kindle-Ausgabe nötig; Amazon vergibt eine ASIN.",
              "Vorschau auf Telefon- und Tabletgröße vor der Freigabe.",
            ],
          },
          {
            id: "taschenbuch-upload",
            title: "Das Taschenbuch veröffentlichen: ISBN, Innenteil, Cover, Probeexemplar",
            body: [
              "Der Taschenbuch-Ablauf bringt physische Entscheidungen: Nehmen Sie Amazons kostenlose ISBN, außer Sie wollen Ihren eigenen Verlagsnamen auf der Seite (dann eine gekaufte ISBN mitbringen), wählen Sie Format, Papier und Tinte — 6 x 9 Zoll, schwarz auf Creme ist der Standard für Textbücher — und laden Sie ein druckfertiges Innen-PDF mit eingebetteten Schriften hoch.",
              "Das Cover ist ein einzelnes Umschlag-PDF: Rückseite, Buchrücken und Vorderseite in einer Datei, dimensioniert nach Format und Seitenzahl. Rückentext braucht mindestens 100 Seiten. Unser Formatierungsleitfaden enthält die exakte Rand- und Rücken-Mathematik; automatisierte Pipelines wie DraftToDone generieren diese Datei mit bereits berechneten Maßen.",
              "Nutzen Sie die Vorschau und bestellen Sie dann ein physisches Probeexemplar, bevor Sie den Vertrieb aktivieren. Ein Proof kostet Druck plus Versand und ist der einzige Weg, Realweltprobleme zu finden: zu dunkles Cover, enge Ränder, eine Schriftgröße, die am Bildschirm gut wirkte.",
            ],
            bullets: [
              "Amazons Gratis-ISBN reicht; eigene nur fürs Verlagsbranding.",
              "6 x 9 Zoll, schwarz auf Creme: der Standard für Roman und Sachbuch.",
              "Cover = ein Umschlag-PDF nach Seitenzahl dimensioniert; Rückentext ≥100 Seiten.",
              "Vor dem Launch ein gedrucktes Probeexemplar bestellen — Bildschirme lügen über Druck.",
            ],
          },
          {
            id: "preise-tantiemen",
            title: "Preise, Tantiemen und Territorien",
            body: [
              "Ebooks haben zwei Tantiemenpläne: 70 % für Preise zwischen 2,99 und 9,99 (abzüglich kleiner Liefergebühr), 35 % außerhalb dieses Bandes. Die praktische Konsequenz: 2,99-9,99 ist das Zuhause der Ebooks, außer bei strategischen Gründen — eine Launch-Woche zu 0,99, ein kostenloser Serienauftakt.",
              "Die Taschenbuch-Tantieme beträgt 60 % des Listenpreises minus Druckkosten in Amazons eigenen Stores (50 % bei niedrigen Preisen auf manchen Marktplätzen) — die Seitenzahl setzt also direkt Ihren Mindestpreis. Ein 250-Seiten-Buch mit ~4 € Druckkosten braucht einen Listenpreis nahe 10 €, um 2 € pro Exemplar zu erlösen.",
              "Veröffentlichen Sie in allen Territorien, sofern keine Rechtebeschränkungen bestehen, und lassen Sie Amazon die Preise konvertieren — runden Sie die konvertierten Preise dann auf natürliche Preispunkte pro Marktplatz (7,99 €, nicht 7,43 €). Die KDP-Select-Anmeldung (90 Tage Amazon-Exklusivität fürs Ebook gegen Kindle-Unlimited-Aufnahme) ist eine separate strategische Wahl, die unser eigener Leitfaden behandelt.",
            ],
            bullets: [
              "Ebook: das 70-%-Band reicht von 2,99 bis 9,99 — standardmäßig darin bleiben.",
              "Taschenbuch: 60 % des Listenpreises minus Druck; die Seitenzahl setzt den Boden.",
              "Auto-konvertierte Preise pro Marktplatz auf natürliche Punkte runden.",
              "KDP Select separat entscheiden; es bindet das Ebook 90 Tage exklusiv.",
            ],
          },
          {
            id: "nach-veroeffentlichung",
            title: "Prüfung, Live-Gang und der erste Monat",
            body: [
              "Auf Veröffentlichen zu drücken schickt das Buch in Amazons Prüfung — typischerweise unter 24 Stunden für Ebooks, bis 72 für Taschenbücher. Sie erhalten eine E-Mail bei Freigabe oder mit zu behebenden Dateiproblemen; Ablehnungen benennen das Problem, und Neueinreichen ist normal, nicht fatal.",
              "Sobald live, beanspruchen Sie das Buch in Ihrem Author-Central-Profil, prüfen Sie die Seite im echten Store (Formatierung der Beschreibung, Wirkung des Cover-Thumbnails in Suchgröße) und verifizieren Sie, dass Ebook- und Taschenbuch-Ausgaben auf einer Seite verknüpft sind.",
              "Der erste Monat prägt den Eindruck des Algorithmus. Konzentrieren Sie sich auf drei steuerbare Hebel: ehrliche frühe Rezensionen von echten Lesern, einen Launch-Preis, der die Probierhürde senkt, und das Nachjustieren von Keywords oder Kategorien, falls Impressionen ohne Klicks bleiben. Veröffentlichen ist eine Iterationsschleife, kein Einzelereignis — und die Verleger, die gewinnen, lassen diese Schleife über viele Bücher laufen.",
            ],
            bullets: [
              "Prüfung: <24 h Ebooks, bis 72 h Taschenbücher; korrigieren und neu einreichen ist Routine.",
              "Nach dem Launch: Author Central, Seitencheck, Ausgaben-Verknüpfung.",
              "Erster Monat: frühe Rezensionen, zugänglicher Launch-Preis, Metadaten-Iteration.",
              "Jedes Buch als einen Zyklus eines wiederholbaren Systems behandeln.",
            ],
          },
        ],
        checklist: [
          "KDP-Konto vollständig: Autorendaten, Bankverbindung, Steuerinterview mit Abkommenssatz.",
          "Titel, Untertitel und Autorname final und deckungsgleich mit dem Cover.",
          "Beschreibung als Verkaufstext geschrieben; 7 Keyword-Felder mit Käuferphrasen gefüllt.",
          "Drei spezifische Kategorien gewählt.",
          "Ebook auf Telefon- und Tabletgröße geprüft; Inhaltsverzeichnis verifiziert.",
          "Taschenbuch-Innen-PDF besteht die Vorschau; Umschlag auf finale Seitenzahl dimensioniert.",
          "Gedrucktes Probeexemplar bestellt und geprüft vor Vertriebsfreigabe.",
          "Ebook im 70-%-Band; Taschenbuch über dem Druckkosten-Boden bepreist.",
          "Ausgaben verknüpft, Author Central beansprucht, Iterationsplan für Monat eins geschrieben.",
        ],
        faq: [
          {
            question: "Was kostet das Veröffentlichen bei Amazon KDP?",
            answer:
              "Null im Voraus. KDP berechnet nichts fürs Veröffentlichen; Amazon nimmt seinen Anteil pro Verkauf über die Tantiemenstruktur, und die Taschenbuch-Druckkosten werden von jedem Verkauf abgezogen statt vorausbezahlt. Optionale reale Kosten: eine gekaufte ISBN, ein Probeexemplar und externes Lektorat oder Coverarbeit.",
          },
          {
            question: "Wie lange braucht Amazon für die Buchfreigabe?",
            answer:
              "Ebooks gehen meist binnen 24 Stunden live, Taschenbücher binnen 72. Datei-Ablehnungen kommen mit Erklärung; korrigieren und neu einreichen kostet typischerweise einen Tag. Planen Sie den Launch mindestens eine Woche nach dem Upload, um Überraschungen abzufedern.",
          },
          {
            question: "Brauche ich eine ISBN fürs Self-Publishing bei Amazon?",
            answer:
              "Nicht für Ebooks — Amazon vergibt eine ASIN. Für Taschenbücher brauchen Sie eine ISBN, aber Amazon stellt sie kostenlos; kaufen Sie nur eine eigene, wenn Ihr Verlagsname als Herausgeber erscheinen oder der Vertrieb über Amazon hinausgehen soll.",
          },
          {
            question: "Kann ich Ebook und Taschenbuch gleichzeitig veröffentlichen?",
            answer:
              "Ja, und Sie sollten: KDP erstellt beide aus derselben Projektseite, verknüpft die Ausgaben auf einer Produktseite, und der höhere Taschenbuchpreis lässt das Ebook wie ein Schnäppchen wirken — ein gut dokumentierter Konversionseffekt.",
          },
          {
            question: "Kann ich mein Buch nach der Veröffentlichung aktualisieren?",
            answer:
              "Ja. Manuskript, Cover, Beschreibung, Keywords, Kategorien und Preis bleiben nach der Veröffentlichung änderbar (der Autorname nicht). Metadaten-Änderungen sind in Stunden live; Dateiänderungen durchlaufen die Prüfung erneut. An einem Live-Buch zu iterieren ist Standardpraxis.",
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
      it: {
        slug: "quanto-guadagna-un-autore-autopubblicato",
        title: "Quanto guadagna davvero un autore autopubblicato? Numeri reali, effetto catalogo e un modello di reddito che regge",
        description:
          "I conti onesti del reddito da self-publishing: cosa rende davvero un libro singolo, perché la distribuzione è così asimmetrica, l'effetto catalogo che cambia l'economia, e un modello mese per mese per testare il vostro piano.",
        keywords: [
          "quanto guadagna un autore autopubblicato",
          "reddito self-publishing",
          "reddito passivo KDP",
          "guadagnare con KDP",
          "guadagni KDP realtà",
          "guadagni autore indipendente",
          "royalty libri reddito",
          "reddito extra editoria",
        ],
        category: "Guadagni",
        intro: [
          "Due narrazioni dominano questo tema ed entrambe ingannano. Quella dell'influencer: sei cifre con libri scritti in un weekend. Quella del cinico: nessuno guadagna nulla. I dati stanno nel mezzo e sono più interessanti — la maggior parte dei libri singoli rende pochissimo, mentre cataloghi disciplinati di più titoli in nicchie studiate producono un reddito reale e duraturo.",
          "Questa guida vi dà i conti onesti: quanto rende un libro tipico, perché le medie mentono, le royalty unitarie dietro ogni proiezione, e il modello di catalogo che spiega come lo stesso sforzo produca cinquanta volte il risultato quando è orientato bene.",
          "Nessuna promessa di reddito qui — input, distribuzioni e un modello. È ciò che vi serve davvero per decidere se e come giocare.",
        ],
        sections: [
          {
            id: "distribuzione",
            title: "La distribuzione: perché « il reddito medio di un autore » non significa nulla",
            body: [
              "Il reddito da self-publishing segue una legge di potenza. Gran parte dei milioni di titoli KDP vende quasi zero copie al mese; un lungo centro rende il prezzo di un caffè; una piccola frazione guadagna migliaia di euro mensili. Citare una media su quella distribuzione non descrive nessuno.",
              "La domanda utile è cosa separa i livelli, e la risposta manca di glamour: una domanda di nicchia validata prima della scrittura, metadati allineati alle ricerche reali, una copertina competitiva in formato miniatura, e — sopra ogni cosa — il numero di titoli di qualità nel catalogo. La fortuna esiste, ma si compone sul volume.",
              "Trattate un libro singolo come un biglietto della lotteria con probabilità migliorabili, e un catalogo come un portafoglio in cui i conti finalmente si stabilizzano.",
            ],
            bullets: [
              "Reddito a legge di potenza: mediane minuscole, code spesse.",
              "Separatori di livello: nicchia validata, metadati allineati, copertina leggibile in miniatura, dimensione del catalogo.",
              "Un libro singolo = varianza; un catalogo = statistica.",
              "Ignorate gli screenshot dei mesi migliori — chiedete dimensione del catalogo e media.",
            ],
          },
          {
            id: "unitario",
            title: "I conti unitari da cui discende ogni proiezione",
            body: [
              "Un ebook a 4,99 € al piano 70 % rende circa 3,40 € dopo le spese di consegna. Un cartaceo di 200 pagine a 11,99 € rende circa 3,70 € dopo il costo di stampa al 60 %. Kindle Unlimited paga a pagina letta — circa 0,004 € a pagina, quindi un libro di 250 pagine letto per intero rende circa 1,10 €.",
              "Un libro di nicchia modesto che vende 60 copie al mese tra i formati a quei prezzi genera circa 200 € mensili. La cifra delude finché non se ne notano le proprietà: si ripete ogni mese senza lavoro nuovo, non dipende da alcun datore di lavoro, e si somma a ogni titolo aggiuntivo.",
              "Ancorate ogni pianificazione a royalty unitaria × copie mensili realistiche. « Realistico » per un titolo di nicchia studiato senza pubblicità significa decine di copie al mese, non centinaia — le centinaia arrivano quando nicchia forte, recensioni e pubblicità lavorano insieme.",
            ],
            bullets: [
              "Ebook 4,99 € → ~3,40 €; cartaceo 11,99 €/200 p. → ~3,70 €; lettura KU completa ~1,10 €/250 p.",
              "60 copie/mese ≈ 200 €/mese per un titolo modestamente riuscito.",
              "Pianificate in unità: royalty × copie mensili × titoli.",
              "Decine di copie mensili: l'ipotesi onesta di default per titolo.",
            ],
          },
          {
            id: "effetto-catalogo",
            title: "L'effetto catalogo: perché il titolo n°10 rende più del n°1",
            body: [
              "Dieci libri non rendono dieci volte un libro — rendono di più. Ogni titolo è una superficie di scoperta distinta nella ricerca e nei consigliati; i lettori che finiscono un libro comprano i vicini; le pagine di pseudonimo fanno vendita incrociata; e la vostra stessa competenza si compone, quindi i titoli tardivi sono semplicemente prodotti migliori.",
              "Modellate un catalogo con prudenza: se un titolo medio si stabilizza a 150 €/mese e pubblicate due titoli al mese per un anno, uscite dall'anno intorno a 3.600 €/mese di regime — con titoli che continuano a rendere. È tutto l'argomento strategico dei sistemi di produzione: il collo di bottiglia è il numero di titoli di qualità finiti al mese.",
              "È anche il motivo per cui gli strumenti contano economicamente, non solo praticamente. Ridurre la produzione di un libro da 30 ore a poche — la differenza chatbot/pipeline trattata nella nostra guida agli strumenti, e il problema che DraftToDone esiste per risolvere — si converte direttamente in velocità di crescita del catalogo, la variabile a cui tutto il modello è più sensibile.",
            ],
            bullets: [
              "Il catalogo si compone: superfici di scoperta, vendite incrociate, competenza, consigliati.",
              "Modello prudente: €/titolo/mese medio × titoli, in crescita mensile.",
              "Il flusso di titoli di qualità è la variabile dominante.",
              "Gli strumenti convertono le ore risparmiate in velocità di crescita del catalogo.",
            ],
          },
          {
            id: "costi",
            title: "Costi, tasse e la vera linea di profitto",
            body: [
              "Il fatturato non è il profitto. Costi per titolo in un flusso manuale: copertina (50-300 €), editing (200-1.000 € in outsourcing), impaginazione (30-100 €), più le vostre ore. Le pipeline automatizzate comprimono tutto in una tariffa per libro; in entrambi i casi, mettete numeri veri su ogni titolo e calcolate mesi di rientro, non solo ricavi.",
              "Le royalty sono reddito imponibile ovunque. Completate l'intervista fiscale KDP per evitare una ritenuta americana inutile (la maggior parte dei paesi convenzionati, Italia compresa: 0 %) e dichiarate secondo il vostro regime locale — molti piccoli editori operano benissimo in regime forfettario; consultate un commercialista una volta e fatene un modello.",
              "Un titolo che rende 150 €/mese con 150 € di costo di produzione si ripaga al primo mese. Questa velocità di rientro — rara tra i piccoli modelli di business — è la proprietà davvero attraente dell'economia editoriale, e regge solo se i costi restano disciplinati.",
            ],
            bullets: [
              "Contate il costo per titolo: copertina, editing, impaginazione, ore o tariffa pipeline.",
              "Calcolate i mesi di rientro per titolo; puntate a meno di tre.",
              "Intervista fiscale fatta seriamente; dichiarazione locale (commercialista una volta, modello poi).",
              "La disciplina dei costi è ciò che mantiene attraente la matematica del rientro.",
            ],
          },
          {
            id: "piano-dodici-mesi",
            title: "Un piano sobrio su 12 mesi",
            body: [
              "Mesi 1-2: imparate la macchina da cima a fondo su un libro — ricerca di nicchia, produzione, metadati, lancio. Aspettatevi vendite modeste; state comprando competenza, non reddito. Mesi 3-6: installate un ritmo di produzione da uno a quattro titoli di qualità al mese secondo gli strumenti, eliminando le nicchie senza trazione e raddoppiando quelle che ne mostrano.",
              "Mesi 7-12: il catalogo comincia a sostenervi. Reinvestite in ciò che funziona — più titoli nelle nicchie provate, traduzioni dei vincenti (l'edizione inglese di un successo italiano è un nuovo asset per una frazione della ricerca) e pubblicità modesta sui titoli con recensioni.",
              "I risultati di fine anno variano enormemente, ma le forchette oneste somigliano a: qualche centinaio di euro mensile per un piccolo catalogo curato, qualche migliaio per 15-25 titoli ben studiati con qualche vincente. Il modo di fallire è altrettanto prevedibile: dieci libri in dieci nicchie non validate con metadati fotocopia, che non rendono nulla. La differenza non è mai stata la velocità di scrittura — erano la ricerca e l'iterazione.",
            ],
            bullets: [
              "Mesi 1-2: un libro, ciclo completo, acquisizione di competenza.",
              "Mesi 3-6: ritmo di produzione; eliminate i perdenti, raddoppiate i vincenti.",
              "Mesi 7-12: reinvestite — nicchie provate, traduzioni, pubblicità sui titoli con recensioni.",
              "Uscita realistica dal primo anno: centinaia o poche migliaia di euro mensili, secondo il catalogo.",
            ],
          },
        ],
        checklist: [
          "Aspettative di reddito fondate su distribuzioni, non su screenshot.",
          "Royalty unitarie calcolate per i vostri prezzi reali.",
          "Piano scritto come royalty × unità × titoli, con ipotesi oneste.",
          "Costo di produzione e mesi di rientro calcolati per titolo.",
          "Intervista fiscale completata; regime di dichiarazione locale confermato.",
          "Ritmo di produzione allineato agli strumenti (manuale o pipeline).",
          "Fase di validazione della nicchia obbligatoria prima di ogni nuovo titolo.",
          "Revisione mensile: eliminare i non performanti, reinvestire nei vincenti, valutare le traduzioni.",
        ],
        faq: [
          {
            question: "Si può davvero generare un reddito passivo con KDP?",
            answer:
              "Semi-passivo è il termine onesto. Un titolo pubblicato rende senza lavoro aggiuntivo, ma arrivare a titoli che rendono esige ricerca, produzione e iterazione a monte. La passività è reale dopo la pubblicazione; il lavoro è concentrato prima.",
          },
          {
            question: "Quanto rende di solito un primo libro autopubblicato?",
            answer:
              "La maggior parte dei primi libri rende meno di 100 € in totale, perché il primo libro serve a imparare la scelta della nicchia e i metadati. Consideratelo una retta scolastica; l'economia è fatta per emergere alla scala del catalogo in nicchie validate.",
          },
          {
            question: "Quanti libri servono per guadagnare 1.000 € al mese?",
            answer:
              "A 100-200 € per titolo al mese per titoli di nicchia modestamente riusciti, circa 5-10 titoli performanti. Poiché non tutti i titoli performano, prevedete di pubblicarne 10-20 di qualità per ottenere quel numero di performanti.",
          },
          {
            question: "KDP vale ancora la pena nel 2026 con l'ondata di libri IA?",
            answer:
              "Il volume è cresciuto, ma l'esigenza di qualità di Amazon e il limite di tre titoli al giorno puniscono le strategie di inondazione. Ciò che funziona non è cambiato: domanda validata, libri passati al controllo qualità, metadati onesti. L'IA ha cambiato chi può eseguire quel piano — non il piano.",
          },
          {
            question: "Le royalty KDP sono tassabili?",
            answer:
              "Sì — le royalty sono reddito imponibile ordinario nel vostro paese. Completate l'intervista fiscale KDP per applicare l'aliquota convenzionale (spesso 0 % di ritenuta americana per gli editori europei) e dichiarate secondo il vostro regime locale, forfettario compreso.",
          },
        ],
      },
      de: {
        slug: "wie-viel-verdienen-selfpublisher-wirklich",
        title: "Wie viel verdienen Selfpublisher wirklich? Echte Zahlen, der Katalogeffekt und ein belastbares Einkommensmodell",
        description:
          "Ehrliche Rechnungen zum Self-Publishing-Einkommen: was einzelne Bücher wirklich einbringen, warum die Verteilung so schief ist, der Katalogeffekt, der die Ökonomie verändert, und ein Monatsmodell zum Gegenprüfen Ihres Plans.",
        keywords: [
          "wie viel verdienen Selfpublisher",
          "Self-Publishing Einkommen",
          "KDP passives Einkommen",
          "Geld verdienen mit KDP",
          "KDP Verdienst Realität",
          "Autoreneinkommen Self-Publishing",
          "Buchtantiemen Einkommen",
          "Nebeneinkommen Publishing",
        ],
        category: "Einnahmen",
        intro: [
          "Zwei Geschichten dominieren dieses Thema, und beide führen in die Irre. Die Influencer-Geschichte: sechsstellige Beträge mit Wochenend-Büchern. Die Zyniker-Geschichte: niemand verdient etwas. Die Daten liegen dazwischen und sind interessanter — die meisten Einzelbücher verdienen sehr wenig, während disziplinierte Mehrbuch-Kataloge in recherchierten Nischen echtes, dauerhaftes Einkommen erwirtschaften.",
          "Dieser Leitfaden liefert die ehrliche Rechnung: was ein typisches Buch einbringt, warum Durchschnitte täuschen, die Stücktantiemen hinter jeder Projektion, und das Katalogmodell, das erklärt, wie derselbe Aufwand das Fünfzigfache produziert, wenn er richtig ausgerichtet ist.",
          "Keine Einkommensversprechen hier — Eingaben, Verteilungen und ein Modell. Genau das brauchen Sie, um zu entscheiden, ob und wie Sie spielen.",
        ],
        sections: [
          {
            id: "verteilung",
            title: "Die Verteilung: warum « durchschnittliches Autoreneinkommen » eine nutzlose Zahl ist",
            body: [
              "Self-Publishing-Einkommen folgt einem Potenzgesetz. Ein großer Teil der Millionen KDP-Titel verkauft nahezu null Exemplare pro Monat; eine lange Mitte verdient Kaffeegeld; ein kleiner Bruchteil verdient monatlich Tausende. Ein Durchschnitt über diese Verteilung beschreibt niemanden.",
              "Die nützliche Frage ist, was die Stufen trennt, und die Antwort ist unglamourös: vor dem Schreiben validierte Nischennachfrage, Metadaten, die echte Suchen treffen, ein in Thumbnail-Größe konkurrenzfähiges Cover und — über allem — die Zahl der Qualitätstitel im Katalog. Glück existiert, aber es verzinst sich auf Volumen.",
              "Behandeln Sie ein einzelnes Buch als Lotterielos mit beeinflussbaren Quoten und einen Katalog als Portfolio, in dem die Mathematik sich endlich stabilisiert.",
            ],
            bullets: [
              "Einkommen ist potenzgesetzlich verteilt: winzige Mediane, dicke Enden.",
              "Stufentrenner: validierte Nische, suchkonforme Metadaten, Thumbnail-taugliches Cover, Kataloggröße.",
              "Einzelbücher sind Varianz; Kataloge sind Statistik.",
              "Ignorieren Sie Screenshots der besten Monate — fragen Sie nach Kataloggröße und Durchschnitt.",
            ],
          },
          {
            id: "stueckrechnung",
            title: "Die Stückrechnung, auf der jede Projektion aufbaut",
            body: [
              "Ein Ebook zu 4,99 € im 70-%-Plan bringt nach Liefergebühren etwa 3,40 €. Ein 200-Seiten-Taschenbuch zu 11,99 € bringt nach Druckkosten bei 60 % etwa 3,70 €. Kindle Unlimited zahlt pro gelesener Seite — etwa 0,004 € pro Seite, ein vollständig gelesenes 250-Seiten-Buch bringt also rund 1,10 €.",
              "Ein bescheidenes Nischen-Sachbuch mit 60 verkauften Exemplaren monatlich über alle Formate erzeugt zu diesen Preisen rund 200 € im Monat. Die Zahl enttäuscht, bis man ihre Eigenschaften bemerkt: Sie wiederholt sich jeden Monat ohne neue Arbeit, hängt von keinem Arbeitgeber ab und stapelt sich mit jedem weiteren Titel.",
              "Verankern Sie jede Planung in Stücktantieme mal realistischen Monatsstückzahlen. « Realistisch » für einen recherchierten Nischentitel ohne Werbung sind Dutzende Exemplare pro Monat, nicht Hunderte — Hunderte entstehen, wenn starke Nische, Rezensionen und Anzeigen zusammenarbeiten.",
            ],
            bullets: [
              "Ebook 4,99 € → ~3,40 €; Taschenbuch 11,99 €/200 S. → ~3,70 €; KU-Komplettlektüre ~1,10 €/250 S.",
              "60 Stück/Monat ≈ 200 €/Monat pro bescheiden erfolgreichem Titel.",
              "In Einheiten planen: Tantieme × Monatsstückzahl × Titel.",
              "Dutzende Monatsexemplare sind die ehrliche Standardannahme pro Titel.",
            ],
          },
          {
            id: "katalogeffekt",
            title: "Der Katalogeffekt: warum Titel Nr. 10 mehr verdient als Titel Nr. 1",
            body: [
              "Zehn Bücher verdienen nicht das Zehnfache eines Buchs — sie verdienen mehr. Jeder Titel ist eine eigene Entdeckungsfläche in Suche und Empfehlungen; Leser, die ein Buch beenden, kaufen die Nachbarn; Pseudonym-Seiten verkaufen quer; und Ihre eigene Kompetenz verzinst sich, sodass spätere Titel schlicht bessere Produkte sind.",
              "Modellieren Sie einen Katalog konservativ: Stabilisiert sich ein Durchschnittstitel bei 150 €/Monat und Sie veröffentlichen ein Jahr lang zwei pro Monat, verlassen Sie das Jahr mit rund 3.600 €/Monat Laufrate — aus Titeln, die weiterverdienen. Das ist das ganze strategische Argument für Produktionssysteme: Der Engpass sind fertige Qualitätstitel pro Monat.",
              "Deshalb zählen Werkzeuge auch ökonomisch, nicht nur praktisch. Die Produktion pro Buch von 30 Stunden auf wenige zu drücken — der Chatbot-versus-Pipeline-Unterschied aus unserem Tool-Leitfaden, und das Problem, für das DraftToDone existiert — übersetzt sich direkt in Katalogwachstumsrate, die Variable, auf die das ganze Modell am empfindlichsten reagiert.",
            ],
            bullets: [
              "Kataloge verzinsen sich: Entdeckungsflächen, Querverkäufe, Kompetenz, Empfehlungen.",
              "Konservatives Modell: Ø €/Titel/Monat × Titel, monatlich wachsend.",
              "Der Durchsatz an Qualitätstiteln ist die dominante Variable.",
              "Produktionswerkzeuge wandeln gesparte Stunden in Katalogwachstum um.",
            ],
          },
          {
            id: "kosten",
            title: "Kosten, Steuern und die echte Gewinnlinie",
            body: [
              "Umsatz ist nicht Gewinn. Kosten pro Titel im manuellen Workflow: Cover (50-300 €), Lektorat (200-1.000 € extern), Formatierung (30-100 €), plus Ihre Stunden. Automatisierte Pipelines komprimieren das in eine Gebühr pro Buch; so oder so: echte Zahlen pro Titel ansetzen und Amortisationsmonate berechnen, nicht nur Umsatz.",
              "Tantiemen sind überall steuerpflichtiges Einkommen. Absolvieren Sie das KDP-Steuerinterview, um unnötigen US-Quellenabzug zu vermeiden (die meisten Abkommensländer, Deutschland eingeschlossen: 0 %), und deklarieren Sie nach Ihrem lokalen Regime — viele kleine Verleger fahren gut mit einfacher Selbstständigkeit oder Kleinunternehmerregelung; einmal den Steuerberater fragen, dann als Vorlage nutzen.",
              "Ein Titel mit 150 €/Monat bei 150 € Produktionskosten amortisiert sich im ersten Monat. Diese Amortisationsgeschwindigkeit — ungewöhnlich unter kleinen Geschäftsmodellen — ist die wirklich attraktive Eigenschaft der Publishing-Ökonomie, und sie hält nur bei disziplinierten Kosten.",
            ],
            bullets: [
              "Kosten pro Titel zählen: Cover, Lektorat, Formatierung, Stunden oder Pipeline-Gebühr.",
              "Amortisationsmonate pro Titel berechnen; unter drei anstreben.",
              "Steuerinterview sorgfältig erledigen; lokal deklarieren (einmal Steuerberater, dann Vorlage).",
              "Kostendisziplin hält die Amortisationsrechnung attraktiv.",
            ],
          },
          {
            id: "zwoelf-monats-plan",
            title: "Ein nüchterner 12-Monats-Plan",
            body: [
              "Monate 1-2: Lernen Sie die Maschine an einem Buch von Anfang bis Ende — Nischenrecherche, Produktion, Metadaten, Launch. Erwarten Sie bescheidene Verkäufe; Sie kaufen Kompetenz, kein Einkommen. Monate 3-6: Finden Sie einen Produktionsrhythmus von ein bis vier Qualitätstiteln monatlich je nach Werkzeug, beenden Sie Nischen ohne Traktion und verdoppeln Sie die mit Zugkraft.",
              "Monate 7-12: Der Katalog beginnt zu tragen. Reinvestieren Sie in das, was funktioniert — mehr Titel in bewährten Nischen, Übersetzungen der Gewinner (die englische Ausgabe eines deutschen Erfolgs ist ein neuer Vermögenswert für einen Bruchteil der Recherche) und moderate Anzeigen auf Titeln mit Rezensionen.",
              "Die Jahresergebnisse variieren enorm, aber die ehrlichen Spannen sehen so aus: niedrige Hunderte monatlich für einen kleinen sorgfältigen Katalog, niedrige Tausende für 15-25 gut recherchierte Titel mit einigen Gewinnern. Der Fehlermodus ist genauso vorhersehbar: zehn Bücher in zehn unvalidierten Nischen mit Schablonen-Metadaten, die nichts verdienen. Der Unterschied war nie die Schreibgeschwindigkeit — es waren Recherche und Iteration.",
            ],
            bullets: [
              "Monate 1-2: ein Buch, kompletter Zyklus, Kompetenzerwerb.",
              "Monate 3-6: Produktionsrhythmus; Verlierer beenden, Gewinner verdoppeln.",
              "Monate 7-12: reinvestieren — bewährte Nischen, Übersetzungen, Anzeigen auf rezensierten Titeln.",
              "Realistischer Jahresausgang: Hunderte bis niedrige Tausende monatlich, katalogabhängig.",
            ],
          },
        ],
        checklist: [
          "Einkommenserwartungen auf Verteilungen gestützt, nicht auf Screenshots.",
          "Stücktantiemen für Ihre tatsächlichen Preispunkte berechnet.",
          "Plan als Tantieme × Stückzahl × Titel geschrieben, mit ehrlichen Annahmen.",
          "Produktionskosten und Amortisationsmonate pro Titel kalkuliert.",
          "Steuerinterview abgeschlossen; lokales Deklarationsregime geklärt.",
          "Produktionsrhythmus passend zum Werkzeug gewählt (manuell vs. Pipeline).",
          "Nischenvalidierung als Pflichtschritt vor jedem neuen Titel.",
          "Monatlicher Review: Nichtperformer beenden, Gewinner reinvestieren, Übersetzungen erwägen.",
        ],
        faq: [
          {
            question: "Kann man mit KDP wirklich passives Einkommen erzielen?",
            answer:
              "Semi-passiv ist der ehrliche Begriff. Ein veröffentlichter Titel verdient ohne weitere Arbeit, aber zu verdienenden Titeln zu kommen erfordert Recherche, Produktion und Iteration im Vorfeld. Die Passivität ist nach der Veröffentlichung real; die Arbeit liegt vorn.",
          },
          {
            question: "Wie viel verdient ein erstes selbstveröffentlichtes Buch üblicherweise?",
            answer:
              "Die meisten Erstlinge verdienen insgesamt unter 100 €, weil man am ersten Buch Nischenwahl und Metadaten lernt. Betrachten Sie Buch eins als Lehrgeld; die Ökonomie ist darauf ausgelegt, auf Katalogebene in validierten Nischen zu entstehen.",
          },
          {
            question: "Wie viele Bücher braucht man für 1.000 € im Monat?",
            answer:
              "Bei konservativen 100-200 € pro Titel und Monat für bescheiden erfolgreiche Nischentitel etwa 5-10 performende Titel. Da nicht jeder Titel performt, planen Sie 10-20 Qualitätstitel, um auf diese Zahl an Performern zu kommen.",
          },
          {
            question: "Lohnt sich KDP 2026 noch, wo KI den Markt flutet?",
            answer:
              "Das Volumen stieg, aber Amazons Qualitätsdurchsetzung und die Drei-Titel-Tagesgrenze bestrafen Flutstrategien. Was funktioniert, ist unverändert: validierte Nachfrage, qualitätsgeprüfte Bücher, ehrliche Metadaten. KI hat geändert, wer dieses Playbook ausführen kann — nicht das Playbook.",
          },
          {
            question: "Muss ich KDP-Tantiemen versteuern?",
            answer:
              "Ja — Tantiemen sind gewöhnliches steuerpflichtiges Einkommen in Ihrem Land. Absolvieren Sie KDPs Steuerinterview, um Ihren Abkommenssatz anzuwenden (für europäische Verleger oft 0 % US-Quellensteuer), und deklarieren Sie nach Ihrem lokalen Selbstständigen- oder Unternehmensregime.",
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
      it: {
        slug: "prezzo-libro-autopubblicato-strategia",
        title: "Che prezzo dare a un libro autopubblicato? Fasce di royalty, psicologia e metodo di prezzo per formato",
        description:
          "Un metodo di prezzo pratico per i libri KDP: la fascia di royalty al 70 %, i minimi del costo di stampa, l'ancoraggio tra formati, il prezzo di lancio, i punti di prezzo internazionali e i veri usi dello 0,99.",
        keywords: [
          "prezzo libro autopubblicato",
          "strategia di prezzo KDP",
          "prezzo ebook",
          "prezzo cartaceo KDP",
          "prezzo lancio libro",
          "prezzo libro Kindle",
          "royalty self-publishing prezzo",
          "strategia ebook 0,99",
        ],
        category: "Prezzi",
        intro: [
          "Il prezzo è l'unica leva di marketing che agisce in pochi minuti e non costa nulla da cambiare; eppure la maggior parte degli autoeditori lo fissa una volta copiando un vicino e non lo tocca più. Quel vicino probabilmente aveva copiato qualcun altro.",
          "Un buon prezzo è meccanico prima di essere psicologico: le fasce di royalty di KDP e i costi di stampa pongono limiti rigidi, e al loro interno l'ancoraggio tra formati e una manciata di effetti di punto di prezzo fanno un lavoro prevedibile.",
          "Questa guida costruisce il metodo a strati — vincoli, psicologia, gioco tra formati, dinamica di lancio e punti internazionali — e chiude con valori predefiniti concreti, applicabili oggi e testabili poi.",
        ],
        sections: [
          {
            id: "struttura-royalty",
            title: "Strato 1 — Conoscere i propri limiti rigidi",
            body: [
              "Ebook: la royalty del 70 % si applica solo tra 2,99 e 9,99; fuori da quella fascia si scende al 35 %. Il dirupo è brutale ai bordi — un ebook a 12,99 rende 4,55 al 35 %, mentre 9,99 rende circa 6,90 al 70 %. Un prezzo sopra 9,99 deve colmare quel divario prima di avere senso, cosa che quasi mai accade per la saggistica indipendente.",
              "Cartacei: la royalty è il 60 % del prezzo di listino meno il costo di stampa (circa 0,85 di base più 0,012 per pagina a inchiostro nero). Un libro di 250 pagine costa circa 3,85 da stampare: il prezzo deve superare ~6,40 solo per guadagnare un centesimo. Il vostro vero minimo è più alto: puntate ad almeno 2,50-3 di royalty per copia per lasciare spazio a pubblicità e promozioni.",
              "Calcolate entrambi i numeri per il vostro libro reale prima di qualsiasi psicologia: la fascia ebook in cui vivrete, e il minimo cartaceo che la stampa impone.",
            ],
            bullets: [
              "Fascia ebook al 70 %: 2,99-9,99 — la casa di default degli ebook indipendenti.",
              "Minimo cartaceo: costo di stampa ÷ 0,6, più margine per le promozioni.",
              "250 pagine ≈ 3,85 di stampa ≈ 6,42 di prezzo di pareggio.",
              "Rifate questo calcolo per ogni libro; il numero di pagine cambia tutto.",
            ],
          },
          {
            id: "psicologia",
            title: "Strato 2 — La psicologia dei prezzi che si replica davvero",
            body: [
              "Le terminazioni in 9 dominano la vendita di libri: 4,99 supera 5,00 in modo affidabile, e il 9 finale è la convenzione attesa. Nella fascia al 70 %, la scala standard è 2,99 / 4,99 / 6,99 / 9,99 — i punti intermedi come 3,49 aggiungono soprattutto attrito decisionale senza ricavi.",
              "Il prezzo segnala la qualità quando l'acquirente non può valutare prima dell'acquisto. La saggistica professionale e tecnica sostiene — e spesso esige — prezzi più alti per essere presa sul serio: una guida a 2,99 su un tema d'affari serio sembra magra. La narrativa tollera punti più bassi perché l'economia di serie e la lettura a catena portano i ricavi.",
              "Il punto 0,99 è uno strumento, non un prezzo: converte i curiosi in lettori a royalty quasi nulla (0,35). Usatelo per lanci a tempo, primi volumi di serie e picchi promozionali che nutrono l'algoritmo — mai come casa permanente di un libro in cui credete.",
            ],
            bullets: [
              "Terminazioni in 9; la scala è 2,99 / 4,99 / 6,99 / 9,99.",
              "Prezzo alto = segnale di qualità nelle nicchie di competenza; prezzo magro = segnale di contenuto magro.",
              "0,99 è uno strumento promozionale a 0,35 di royalty — limitatelo nel tempo.",
              "Testate un cambio di prezzo alla volta, due settimane per test.",
            ],
          },
          {
            id: "ancoraggio-formati",
            title: "Strato 3 — Lasciare che i formati si ancorino a vicenda",
            body: [
              "Su una scheda che mostra un cartaceo a 14,99 accanto a un ebook a 5,99, l'ebook sembra un affare — il prezzo del cartaceo fa un lavoro di vendita anche se nessuno lo compra. Questo ancoraggio è conversione gratuita e una ragione centrale per pubblicare sempre entrambi i formati.",
              "Mantenete uno scarto sensato: un cartaceo a 2-3 volte il prezzo dell'ebook sembra normale; un cartaceo sotto 1,5 volte l'ebook fa sembrare l'ebook troppo caro. La copertina rigida, dove esiste, estende l'ancora verso l'alto.",
              "Kindle Unlimited complica il quadro: i lettori KU « pagano » a pagina letta indipendentemente dal prezzo di listino. Per i libri iscritti a KU, il prezzo serve soprattutto da ancora e da prezzo per l'acquirente fuori KU — un'altra ragione per cui l'esistenza del cartaceo conta, anche con vendite cartacee modeste.",
            ],
            bullets: [
              "Pubblicate sempre ebook + cartaceo; l'ancoraggio da solo lo giustifica.",
              "Cartaceo a 2-3 volte il prezzo dell'ebook: lo scarto che sembra naturale.",
              "Le pagine KU pagano indipendentemente dal prezzo; il listino ancora comunque.",
              "Il formato caro vende quello economico.",
            ],
          },
          {
            id: "prezzo-lancio",
            title: "Strato 4 — Prezzo di lancio e finestra di visibilità",
            body: [
              "Le novità godono di una luna di miele algoritmica. Un prezzo di lancio un gradino sotto l'obiettivo (2,99 per un libro che vivrà a 4,99) abbassa la barriera di prova esattamente quando le prime vendite e le prime recensioni pesano di più sul posizionamento.",
              "Tenete il prezzo di lancio una-due settimane, annunciate onestamente l'aumento al pubblico che avete (« il prezzo di lancio finisce venerdì » è urgenza onesta), poi salite di un gradino. L'aumento stesso è un secondo momento promozionale.",
              "Dopo, cambiate i prezzi deliberatamente, non nervosamente: una variabile alla volta, due settimane di dati, giudicate sulla royalty al giorno anziché sulle copie al giorno — un taglio di prezzo che aumenta le unità del 20 % ma riduce i ricavi del 15 % è una perdita travestita.",
            ],
            bullets: [
              "Lanciate un gradino di scala sotto il prezzo obiettivo, per 1-2 settimane.",
              "Annunciate l'aumento; crea un secondo momento promozionale.",
              "Giudicate i test sulla royalty al giorno, non sulle unità.",
              "Evitate i ritocchi continui; algoritmo e lettori preferiscono la stabilità.",
            ],
          },
          {
            id: "internazionale",
            title: "Strato 5 — I punti di prezzo internazionali",
            body: [
              "I prezzi auto-convertiti cadono su numeri brutti (4,63 €, 3,87 £). Fissate prezzi per mercato su punti locali naturali: 4,99 €, 3,99 £, 550 ¥. I minuti che richiede segnalano cura e aiutano misurabilmente la conversione fuori dagli Stati Uniti.",
              "Attenzione ai bordi di fascia: la finestra al 70 % ha equivalenti locali per mercato, e l'IVA (inclusa nei prezzi europei) fa sì che un ebook a 2,99 € renda diversamente secondo i paesi. Verificate l'anteprima di royalty per ogni grande mercato invece di supporre che il calcolo americano viaggi.",
              "Se pubblicate in più lingue — un'edizione italiana accanto all'inglese, come DraftToDone le genera nativamente — date a ogni edizione un prezzo secondo le convenzioni del suo mercato, non come conversione del prezzo americano; le aspettative di prezzo ebook in Italia differiscono dagli USA, e aderire alle norme locali batte la conversione di valuta.",
            ],
            bullets: [
              "Arrotondate ogni mercato a punti locali naturali (4,99 €, 3,99 £).",
              "I prezzi europei includono l'IVA; verificate la royalty netta per mercato.",
              "La fascia al 70 % ha confini locali — verificateli per store.",
              "Un'edizione localizzata riceve un prezzo localizzato, non un prezzo convertito.",
            ],
          },
        ],
        checklist: [
          "Costo di stampa e prezzo di pareggio calcolati per il cartaceo.",
          "Ebook posizionato nella fascia 2,99-9,99 su un punto in 9.",
          "Cartaceo a 2-3 volte il prezzo dell'ebook; entrambi i formati pubblicati per l'ancoraggio.",
          "Prezzo di lancio un gradino sotto l'obiettivo, a tempo, aumento annunciato.",
          "Test di prezzo: una variabile, due settimane, giudicati sulla royalty al giorno.",
          "0,99 usato solo in promozione a tempo, mai come casa permanente.",
          "Prezzi per mercato arrotondati ai punti locali naturali; effetti IVA verificati.",
          "Edizioni localizzate prezzate secondo le norme locali.",
        ],
        faq: [
          {
            question: "Qual è il prezzo migliore per un ebook autopubblicato?",
            answer:
              "Per la maggior parte della saggistica indipendente, 4,99-6,99 bilancia royalty e conversione nella fascia al 70 %; i temi professionali specialistici sostengono 7,99-9,99. La narrativa vive comunemente a 2,99-4,99 con i primi volumi più bassi. Partite dal punto di scala dei bestseller della vostra categoria e testate.",
          },
          {
            question: "Perché la mia royalty sul cartaceo è così bassa?",
            answer:
              "Il costo di stampa è dedotto prima della vostra royalty del 60 %: un libro di 300 pagine costa circa 4,45 da stampare; a 9,99 di listino guadagnate circa 1,54. Alzate il prezzo, riducete le pagine con un'impaginazione più densa, o accettate il cartaceo come ancora che vende ebook.",
          },
          {
            question: "Devo mettere il mio primo libro a 0,99?",
            answer:
              "Solo come tattica di lancio deliberata, per una-due settimane. A 0,35 di royalty, 0,99 è un acquisto di visibilità, non una strategia di reddito — e un libro permanentemente svenduto segnala contenuto magro nelle categorie di saggistica.",
          },
          {
            question: "Posso cambiare il prezzo del mio libro quando voglio?",
            answer:
              "Sì — i cambi di prezzo KDP hanno effetto in poche ore e sono illimitati. La disciplina che conta è il metodo di test: cambi isolati, finestre di due settimane, royalty al giorno come metrica.",
          },
          {
            question: "Come influisce Kindle Unlimited sul prezzo?",
            answer:
              "I pagamenti KU dipendono dalle pagine lette, non dal prezzo di listino: l'iscrizione scollega parte del reddito dal prezzo. Il listino resta decisivo per gli acquirenti fuori KU e come ancora accanto al cartaceo — ecco perché un libro iscritto a KU merita comunque un prezzo ragionato.",
          },
        ],
      },
      de: {
        slug: "buchpreis-selfpublishing-strategie",
        title: "Wie bepreist man ein selbstveröffentlichtes Buch? Tantiemenbänder, Psychologie und ein Preis-Playbook pro Format",
        description:
          "Eine praktische Preismethode für KDP-Bücher: das 70-%-Tantiemenband, Druckkosten-Böden, Preisanker zwischen Formaten, Launch-Preise, internationale Preispunkte und wann 0,99 wirklich Sinn ergibt.",
        keywords: [
          "Buchpreis Self-Publishing",
          "KDP Preisstrategie",
          "Ebook Preis",
          "Taschenbuch Preis KDP",
          "Buch Launch Preis",
          "Kindle Buch Preis",
          "Self-Publishing Tantiemen Preis",
          "99 Cent Ebook Strategie",
        ],
        category: "Preisgestaltung",
        intro: [
          "Der Preis ist der einzige Marketinghebel, der in Minuten wirkt und nichts kostet zu ändern — und doch setzen ihn die meisten Selfpublisher einmal, indem sie einen Nachbarn kopieren, und fassen ihn nie wieder an. Dieser Nachbar hat vermutlich auch nur kopiert.",
          "Gute Preisgestaltung ist mechanisch, bevor sie psychologisch ist: KDPs Tantiemenbänder und Druckkosten definieren harte Grenzen, und innerhalb davon leisten Anker zwischen Formaten und eine Handvoll Preispunkt-Effekte vorhersagbare Arbeit.",
          "Dieser Leitfaden baut die Methode in Schichten auf — Beschränkungen, Psychologie, Formatzusammenspiel, Launch-Dynamik und internationale Punkte — und endet mit konkreten Standardwerten, die Sie heute anwenden und ab morgen testen können.",
        ],
        sections: [
          {
            id: "tantiemen-struktur",
            title: "Schicht 1 — Die harten Grenzen kennen",
            body: [
              "Ebooks: 70 % Tantieme gilt nur zwischen 2,99 und 9,99; außerhalb fallen Sie auf 35 %. Die Klippe an den Rändern ist brutal — ein Ebook zu 12,99 bringt 4,55 bei 35 %, während 9,99 etwa 6,90 bei 70 % bringt. Ein Preis über 9,99 muss diese Lücke erst schließen, bevor er Sinn ergibt — was bei Indie-Sachbüchern fast nie passiert.",
              "Taschenbücher: Die Tantieme beträgt 60 % des Listenpreises minus Druckkosten (etwa 0,85 Basis plus 0,012 pro Schwarzweiß-Seite). Ein 250-Seiten-Buch kostet rund 3,85 im Druck, der Listenpreis muss also ~6,40 übersteigen, um überhaupt einen Cent zu verdienen. Ihr echter Boden liegt höher: Zielen Sie auf mindestens 2,50-3 Tantieme pro Exemplar, um Raum für Anzeigen und Preisaktionen zu lassen.",
              "Berechnen Sie beide Zahlen für Ihr konkretes Buch vor jeder Psychologie: das Ebook-Band, in dem Sie leben werden, und den Taschenbuch-Boden, den der Druck erzwingt.",
            ],
            bullets: [
              "Ebook-70-%-Band: 2,99-9,99 — das Standard-Zuhause für Indie-Ebooks.",
              "Taschenbuch-Boden: Druckkosten ÷ 0,6, plus Marge für Aktionen.",
              "250 Seiten ≈ 3,85 Druck ≈ 6,42 Break-even-Listenpreis.",
              "Diese Rechnung pro Buch machen; die Seitenzahl ändert alles.",
            ],
          },
          {
            id: "psychologie",
            title: "Schicht 2 — Preispsychologie, die sich wirklich repliziert",
            body: [
              "Schwellenpreise dominieren den Buchhandel: 4,99 verkauft zuverlässig besser als 5,00, und 9er-Endungen sind die erwartete Konvention. Im 70-%-Band lautet die Standardleiter 2,99 / 4,99 / 6,99 / 9,99 — Zwischenpunkte wie 3,49 erzeugen vor allem Entscheidungsreibung ohne Umsatz.",
              "Der Preis signalisiert Qualität in Kategorien, in denen der Käufer vor dem Kauf nicht prüfen kann. Professionelle und technische Sachbücher tragen — und verlangen oft — höhere Preise, um ernst genommen zu werden: Ein 2,99-Ratgeber zu einem ernsten Geschäftsthema wirkt dünn. Belletristik verträgt niedrigere Punkte, weil Serienökonomie und Durchlese-Effekte den Umsatz tragen.",
              "Der 0,99-Punkt ist ein Werkzeug, kein Preis: Er verwandelt Stöberer in Leser bei nahezu null Tantieme (0,35). Nutzen Sie ihn für zeitlich begrenzte Launches, Serienauftakte und Promo-Spitzen, die den Algorithmus füttern — nie als Dauerheimat eines Buchs, an das Sie glauben.",
            ],
            bullets: [
              "9er-Endungen nutzen; die Leiter ist 2,99 / 4,99 / 6,99 / 9,99.",
              "Höherer Preis = Qualitätssignal in Expertise-Nischen; Billigpreis = Dünninhalt-Signal.",
              "0,99 ist ein Promo-Instrument bei 0,35 Tantieme — zeitlich begrenzen.",
              "Eine Preisänderung pro Test, zwei Wochen pro Test.",
            ],
          },
          {
            id: "format-anker",
            title: "Schicht 3 — Formate einander verankern lassen",
            body: [
              "Auf einer Seite mit einem 14,99-Taschenbuch neben einem 5,99-Ebook wirkt das Ebook wie ein Schnäppchen — der Taschenbuchpreis leistet Verkaufsarbeit, selbst wenn ihn niemand kauft. Dieser Anker ist kostenlose Konversion und ein Kerngrund, immer beide Formate zu veröffentlichen.",
              "Halten Sie einen sinnvollen Abstand: Ein Taschenbuch beim 2-3-Fachen des Ebook-Preises wirkt normal; ein Taschenbuch unter dem 1,5-Fachen lässt das Ebook überteuert erscheinen. Hardcover, wo angeboten, verlängern den Anker nach oben.",
              "Kindle Unlimited verkompliziert das Bild: KU-Leser « zahlen » pro gelesener Seite unabhängig vom Listenpreis. Bei KU-Büchern treibt der Listenpreis vor allem den Anker und den Nicht-KU-Käufer — ein weiterer Grund, warum die Existenz des Taschenbuchs zählt, auch bei bescheidenen Printverkäufen.",
            ],
            bullets: [
              "Immer Ebook + Taschenbuch veröffentlichen; der Anker allein rechtfertigt es.",
              "Taschenbuch beim 2-3-Fachen des Ebook-Preises: der natürlich wirkende Abstand.",
              "KU-Seiten zahlen preisunabhängig; der Listenpreis ankert trotzdem.",
              "Das teure Format verkauft das günstige.",
            ],
          },
          {
            id: "launch-preis",
            title: "Schicht 4 — Launch-Preis und das Sichtbarkeitsfenster",
            body: [
              "Neuerscheinungen genießen algorithmische Flitterwochen. Ein Launch-Preis eine Stufe unter dem Zielpreis (2,99 für ein Buch, das bei 4,99 leben wird) senkt die Probierhürde genau dann, wenn frühe Verkäufe und Rezensionen fürs Ranking am meisten zählen.",
              "Halten Sie den Launch-Preis ein bis zwei Wochen, kündigen Sie die Erhöhung ehrlich an (« der Einführungspreis endet Freitag » ist ehrliche Dringlichkeit), dann eine Stufe hoch. Die Erhöhung selbst ist ein zweiter Promo-Moment.",
              "Danach ändern Sie Preise bewusst, nicht nervös: eine Variable pro Test, zwei Wochen Daten, entschieden nach Tantieme pro Tag statt Stückzahl pro Tag — eine Preissenkung, die die Einheiten um 20 % hebt, aber den Umsatz um 15 % senkt, ist ein verkleideter Verlust.",
            ],
            bullets: [
              "Eine Leiterstufe unter dem Zielpreis launchen, für 1-2 Wochen.",
              "Die Erhöhung ankündigen; sie schafft einen zweiten Promo-Moment.",
              "Tests nach Tantieme pro Tag beurteilen, nicht nach Einheiten.",
              "Ständiges Herumdrehen vermeiden; Algorithmus wie Leser bevorzugen Stabilität.",
            ],
          },
          {
            id: "international",
            title: "Schicht 5 — Internationale Preispunkte",
            body: [
              "Automatisch konvertierte Preise landen auf hässlichen Zahlen (4,63 €, 3,87 £). Setzen Sie Preise pro Marktplatz auf natürliche lokale Punkte: 4,99 €, 3,99 £, 550 ¥. Die wenigen Minuten signalisieren Sorgfalt und helfen der Konversion außerhalb der USA messbar.",
              "Achten Sie auf die Bandränder: Das 70-%-Fenster hat lokale Entsprechungen pro Marktplatz, und die Mehrwertsteuer (in EU-Listenpreisen enthalten) lässt ein 2,99-€-Ebook je nach Land unterschiedlich netto abwerfen. Prüfen Sie die Tantiemenvorschau pro Hauptmarkt, statt anzunehmen, dass die US-Rechnung reist.",
              "Wenn Sie mehrsprachig veröffentlichen — eine deutsche Ausgabe neben der englischen, wie DraftToDone sie nativ generiert — bepreisen Sie jede Ausgabe nach den Konventionen ihres Markts, nicht als Umrechnung des US-Preises; die Ebook-Preiserwartungen in Deutschland unterscheiden sich von den USA, und lokale Normen schlagen Währungsumrechnung.",
            ],
            bullets: [
              "Jeden Marktplatz auf natürliche lokale Punkte runden (4,99 €, 3,99 £).",
              "EU-Preise enthalten Mehrwertsteuer; Netto-Tantieme pro Markt prüfen.",
              "Das 70-%-Band hat lokale Grenzen — pro Store prüfen.",
              "Lokalisierte Ausgaben erhalten lokalisierte Preise, keine umgerechneten.",
            ],
          },
        ],
        checklist: [
          "Druckkosten und Break-even-Listenpreis fürs Taschenbuch berechnet.",
          "Ebook im 2,99-9,99-Band auf einem 9er-Punkt platziert.",
          "Taschenbuch beim 2-3-Fachen des Ebook-Preises; beide Formate für den Anker veröffentlicht.",
          "Launch-Preis eine Stufe unter dem Ziel, befristet, Erhöhung angekündigt.",
          "Preistests: eine Variable, zwei Wochen, nach Tantieme pro Tag beurteilt.",
          "0,99 nur als befristete Aktion, nie als Dauerzustand.",
          "Preise pro Marktplatz auf natürliche lokale Punkte gerundet; Mehrwertsteuereffekte geprüft.",
          "Lokalisierte Ausgaben nach lokalen Normen bepreist.",
        ],
        faq: [
          {
            question: "Was ist der beste Preis für ein selbstveröffentlichtes Ebook?",
            answer:
              "Für die meisten Indie-Sachbücher balanciert 4,99-6,99 Tantieme und Konversion im 70-%-Band; spezialisierte Profithemen tragen 7,99-9,99. Belletristik lebt üblicherweise bei 2,99-4,99 mit günstigeren Serienauftakten. Starten Sie am Leiterpunkt der Bestseller Ihrer Kategorie und testen Sie von dort.",
          },
          {
            question: "Warum ist meine Taschenbuch-Tantieme so klein?",
            answer:
              "Die Druckkosten werden vor Ihren 60 % abgezogen: Ein 300-Seiten-Buch kostet etwa 4,45 im Druck; bei 9,99 Listenpreis verdienen Sie rund 1,54. Erhöhen Sie den Preis, reduzieren Sie die Seitenzahl durch engeren Satz, oder akzeptieren Sie das Taschenbuch als Anker, der Ebooks verkauft.",
          },
          {
            question: "Soll ich mein erstes Buch für 0,99 anbieten?",
            answer:
              "Nur als bewusste Launch-Taktik für ein bis zwei Wochen. Bei 0,35 Tantieme ist 0,99 ein Sichtbarkeitskauf, keine Einkommensstrategie — und ein dauerhaft verramschtes Buch signalisiert in Sachbuch-Kategorien dünnen Inhalt.",
          },
          {
            question: "Kann ich den Preis meines Buchs jederzeit ändern?",
            answer:
              "Ja — KDP-Preisänderungen greifen binnen Stunden und sind unbegrenzt. Die Disziplin, die zählt, ist die Testmethodik: einzelne Änderungen, Zwei-Wochen-Fenster, Tantieme pro Tag als Metrik.",
          },
          {
            question: "Wie beeinflusst Kindle Unlimited die Preisgestaltung?",
            answer:
              "KU-Auszahlungen hängen von gelesenen Seiten ab, nicht vom Listenpreis — die Anmeldung entkoppelt einen Teil des Einkommens vom Preis. Der Listenpreis bleibt entscheidend für Nicht-KU-Käufer und als Anker neben dem Taschenbuch — weshalb auch KU-Bücher einen durchdachten Preis verdienen.",
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
      it: {
        slug: "libri-low-content-kdp-guida-completa",
        title: "Libri low-content su KDP: cosa funziona ancora, cosa è saturo e come differenziarsi nel 2026",
        description:
          "Guida realistica per pubblicare quaderni, agende, registri e quaderni di esercizi su Amazon KDP: il panorama post-saturazione, le nicchie che vendono ancora, gli standard di interno e copertina, le regole sulle parole chiave e il salto verso il medium-content.",
        keywords: [
          "libri low content KDP",
          "vendere quaderni su Amazon",
          "agende KDP",
          "libri senza contenuto",
          "registro KDP",
          "business quaderni Amazon",
          "libri medium content",
          "nicchia low content KDP",
        ],
        category: "Low-content",
        intro: [
          "I libri low-content — quaderni, agende, registri, taccuini — sono stati la corsa all'oro di KDP: nessuna scrittura richiesta, modelli ovunque, venditori di corsi che promettevano fortune. La corsa è finita come finiscono tutte: i quaderni a righe con copertine carine affrontano ora centinaia di migliaia di schede quasi identiche.",
          "Ciò che il panorama post-corsa premia davvero è più interessante. Gli interni a uso specifico per pubblici specifici si vendono ancora con regolarità, perché un registro di ispezione degli alveari o un diario di monitoraggio della dialisi risolve un problema che nessun quaderno generico sfiora — e la maggior parte dei cercatori d'oro non ha mai imparato a progettare per risolvere problemi.",
          "Questa guida mappa ciò che funziona ancora, gli standard di design e metadati che la categoria ormai esige, e il salto verso il medium-content che moltiplica valore e difendibilità di ogni titolo.",
        ],
        sections: [
          {
            id: "panorama",
            title: "Il panorama 2026: una saturazione disomogenea",
            body: [
              "La saturazione del low-content è reale ma concentrata esattamente dove puntavano i corsi: quaderni a righe generici, diari della gratitudine, agende generiche, quaderni delle password. Su quei segmenti, migliaia di venditori si distinguono solo per la copertina, e l'economia è morta per i nuovi entranti.",
              "Un piano più in basso, il quadro si rovescia. I registri di attività specifiche (manutenzione di attrezzature, monitoraggio dei farmaci, sessioni di bagno freddo), le agende per professione e i quaderni per hobby affrontano decine di concorrenti invece di centinaia di migliaia — e chi digita « registro lievito madre » converte forte, perché la ricerca è il bisogno.",
              "Il test per ogni idea low-content: l'interno richiede di conoscere l'uso? Se qualsiasi banca di modelli lo riempie, lasciate perdere. Se progettarlo bene richiede venti minuti per capire come un apicoltore ispeziona davvero gli alveari, avete un fossato esattamente di quella profondità — che è più di zero.",
            ],
            bullets: [
              "Morto: righe generiche, gratitudine, agende generiche, quaderni password.",
              "Vivo: registri di attività, agende di professione, quaderni di hobby.",
              "Le ricerche precise convertono: la frase cercata è il bisogno.",
              "Test del fossato: l'interno richiede conoscenza dell'uso?",
            ],
          },
          {
            id: "metodo-nicchia",
            title: "Trovare le nicchie: segnali di domanda per libri senza testo",
            body: [
              "La ricerca di nicchia low-content è ricerca di parole chiave incrociata con la specificità dell'interno. Sfruttate l'autocompletamento Amazon sui pattern « registro di [attività] », « agenda [professione] », « diario di [pratica] »; un suggerimento che esiste significa che la gente lo digita. Verificate poi i primi risultati: se la pagina uno mostra quaderni generici con la parola chiave appiccicata sopra, l'interno specifico vince; se mostra interni specifici ben progettati con centinaia di recensioni, arrivate tardi.",
              "Validate l'intenzione d'acquisto più del traffico. Qualche centinaio di ricerche mensili molto specifiche batte diecimila generiche — chi compra un « diario alimentare e sintomi per colon irritabile » non sta curiosando, sta comprando.",
              "Sommate gli angoli stagionali e regalo: molti acquisti low-content sono regali (pensione, nuovo hobby, nuovo animale), e l'inquadratura regalo nei metadati cattura ricerche che l'inquadratura uso manca.",
            ],
            bullets: [
              "Sfruttate l'autocompletamento: registro di [attività], agenda [professione], monitoraggio [condizione].",
              "Controllo della pagina uno: risultati generici = opportunità; specifici con recensioni = troppo tardi.",
              "Una piccola domanda precisa batte una grande domanda generica.",
              "Le parole chiave regalo (« regalo pensione infermiera ») sono una seconda superficie.",
            ],
          },
          {
            id: "design-interno",
            title: "Progettare l'interno: il prodotto è la mise en page",
            body: [
              "Un interno a uso specifico merita il suo prezzo codificando la conoscenza del flusso di lavoro: il registro apistico ha campi per gli avvistamenti della regina e i conteggi di varroa; il quaderno del piccolo locatore ha checklist di ispezione per tipo di visita. Studiate il vero flusso — forum, tutorial, un'intervista a un praticante — e i campi si disegnano da soli.",
              "Rispettate la meccanica di stampa: la maggior parte dei low-content funziona in 6 x 9 o 8,5 x 11, senza abbondanza, con 100-150 pagine (il costo di stampa sale con le pagine mentre i prezzi low-content si fermano verso 6,99-12,99). I margini seguono le stesse regole KDP di qualsiasi cartaceo — la nostra guida all'impaginazione si applica per intero.",
              "Testate l'interno fisicamente prima di pubblicare: stampate qualche pagina a casa, riempitela a mano. I campi richiedono sempre più spazio di quanto suggerisca lo schermo, e una pagina di registro che frustra la penna uccide il riacquisto — il motore silenzioso del business dei registri.",
            ],
            bullets: [
              "Codificate la vera pratica nei campi; studiate l'uso.",
              "100-150 pagine, senza abbondanza, 6 x 9 o 8,5 x 11 — disciplina del costo di stampa.",
              "Stampate e testate a mano; la penna chiede più spazio dello schermo.",
              "Il riacquisto premia gli interni davvero utilizzabili.",
            ],
          },
          {
            id: "copertine-metadati",
            title: "Copertine, parole chiave e le regole che KDP fa rispettare",
            body: [
              "Le copertine low-content si battono in formato miniatura contro decine di cugine: la chiarezza batte la decorazione — l'uso leggibile nel titolo, un visual che dice l'attività all'istante, una tipografia professionale. Il test della miniatura della nostra guida copertine si applica doppiamente qui.",
              "Le regole sui metadati si sono indurite dopo la corsa: KDP esige onestà rigorosa sulle schede low-content — niente falsi conteggi di pagine, niente titoli « diario » su semplici taccuini, e la casella dedicata low-content alla creazione (toglie l'anteprima « sfoglia » e alcune opzioni di categoria, ma dichiararla male è una violazione delle politiche).",
              "Mettete la specificità nelle parole chiave: ogni campo d'interno che avete progettato è una frase che qualcuno digita. Il campo « conteggio varroa » giustifica « monitoraggio varroa »; l'angolo regalo giustifica « regalo apicoltore ». Gli interni specifici generano la propria coda lunga — i quaderni generici non possono.",
            ],
            bullets: [
              "Chiarezza in miniatura prima della decorazione; l'uso deve leggersi a 100 px.",
              "Dichiarate onestamente la casella low-content; dichiararla male mette a rischio l'account.",
              "I campi d'interno sono fonti di parole chiave: ogni campo è una ricerca.",
              "Le parole chiave regalo catturano una seconda popolazione di acquirenti.",
            ],
          },
          {
            id: "medium-content",
            title: "Il salto di gamma: il medium-content moltiplica la difendibilità",
            body: [
              "I libri medium-content aggiungono valore scritto agli interni funzionali: un tracker di abitudini che apre con 20 pagine di scienza delle abitudini, un registro apistico con una guida ai lavori stagionali per sezione, un quaderno di budget con spiegazioni di metodo tra i fogli. Lo scritto eleva il valore percepito, giustifica prezzi da 9,99 a 14,99 e — decisivo — non può essere replicato dai venditori di modelli.",
              "È qui che la generazione con l'IA cambia l'economia della categoria: produrre 30 pagine di contenuto pedagogico ben documentato per libro era il collo di bottiglia che impediva ai venditori low-content di salire di gamma; una pipeline di scrittura con controlli qualità lo elimina. Un flusso tipo DraftToDone può produrre lo strato pedagogico mentre voi progettate l'interno funzionale — la combinazione è un prodotto che né i concorrenti solo-testo né quelli solo-modello consegnano.",
              "Il medium-content sblocca anche categorie migliori, l'anteprima « sfoglia » e una sostanza degna di recensioni — i vantaggi strutturali a cui il low-content rinuncia. Per ogni nicchia validata, chiedetevi: come sarebbe la versione medium-content? Quella versione è di solito il vero business.",
            ],
            bullets: [
              "Medium-content = interno funzionale + scritto pedagogico.",
              "Giustifica 9,99-14,99 e resiste alla concorrenza dei modelli.",
              "La scrittura IA elimina il collo di bottiglia che proteggeva il salto di gamma.",
              "Domanda di default per ogni nicchia: come sarebbe la sua versione medium-content?",
            ],
          },
        ],
        checklist: [
          "La nicchia supera il test del fossato: l'interno richiede conoscenza dell'uso.",
          "Domanda verificata con l'autocompletamento; concorrenza della pagina uno valutata.",
          "Flusso di lavoro studiato; i campi codificano la vera pratica.",
          "100-150 pagine, senza abbondanza, formato standard; pagine testate a mano su carta.",
          "Copertina convalidata al test della miniatura; uso leggibile all'istante.",
          "Casella low-content dichiarata onestamente alla creazione KDP.",
          "Parole chiave estratte dai campi d'interno e dagli angoli regalo.",
          "Salto al medium-content valutato per ogni nicchia validata.",
        ],
        faq: [
          {
            question: "I libri low-content sono ancora redditizi su KDP?",
            answer:
              "Quelli generici, no — quei segmenti sono saturi senza ritorno. Gli interni a uso specifico per pubblici specifici (registri di attività, agende di professione, monitoraggi di condizione) si vendono ancora con regolarità, e le loro versioni medium-content sono davvero difendibili.",
          },
          {
            question: "Quanto rende un libro low-content per vendita?",
            answer:
              "Un cartaceo low-content tipico a 7,99 e 120 pagine rende circa 2,50 dopo la stampa, al 60 % di royalty. Le versioni medium-content a 11,99-14,99 raddoppiano all'incirca quella cifra — il migliore argomento del salto di gamma.",
          },
          {
            question: "Servono competenze di design per il low-content?",
            answer:
              "Serve competenza di impaginazione più che talento artistico: tabelle pulite, tipografia leggibile, campi di dimensione utilizzabile. Da Canva ai modelli InDesign, gli strumenti gestiscono la meccanica; il differenziatore è capire l'uso abbastanza bene da progettare i campi giusti.",
          },
          {
            question: "Che differenza c'è tra low-content e medium-content?",
            answer:
              "Il low-content ha un interno funzionale con testo minimo (righe, griglie, campi). Il medium-content aggiunge uno scritto sostanziale — guide, istruzioni, sezioni pedagogiche — che alza i tetti di prezzo, sblocca l'anteprima « sfoglia » e crea una differenziazione che i modelli non copiano.",
          },
          {
            question: "La dichiarazione low-content di KDP danneggia le vendite?",
            answer:
              "Toglie l'anteprima « sfoglia » e alcune opzioni di categoria, con un lieve effetto sulla trovabilità — ma è obbligatoria per i libri interessati. I medium-content con vere sezioni scritte non si dichiarano low-content e mantengono tutte le funzionalità.",
          },
        ],
      },
      de: {
        slug: "low-content-buecher-kdp-kompletter-leitfaden",
        title: "Low-Content-Bücher auf KDP: was noch funktioniert, was gesättigt ist und wie man sich 2026 differenziert",
        description:
          "Ein realistischer Leitfaden zum Veröffentlichen von Journalen, Planern, Logbüchern und Arbeitsbüchern auf Amazon KDP: die Lage nach der Sättigung, Nischen mit Verkäufen, Innenteil- und Coverstandards, Keyword-Regeln und der Aufstieg zu Medium-Content.",
        keywords: [
          "Low Content Bücher KDP",
          "Notizbücher auf Amazon verkaufen",
          "KDP Planer",
          "No Content Bücher",
          "Logbuch KDP veröffentlichen",
          "Notizbuch Business Amazon",
          "Medium Content Bücher",
          "KDP Low Content Nische",
        ],
        category: "Low-Content",
        intro: [
          "Low-Content-Bücher — Journale, Planer, Logbücher, Notizbücher — waren KDPs Goldrausch-Kategorie: kein Schreiben nötig, Vorlagen überall, Kursverkäufer mit Reichtumsversprechen. Der Rausch endete wie alle: Linierte Notizbücher mit hübschen Covern konkurrieren jetzt gegen Hunderttausende fast identischer Angebote.",
          "Was die Landschaft nach dem Rausch tatsächlich belohnt, ist interessanter. Zweckspezifische Innenteile für spezifische Zielgruppen verkaufen sich weiterhin stetig, weil ein Bienenstock-Inspektionslog oder ein Dialyse-Tagebuch ein Problem löst, das kein generisches Notizbuch berührt — und die meisten Goldgräber haben nie gelernt, problemlösend zu gestalten.",
          "Dieser Leitfaden kartiert, was noch funktioniert, die Design- und Metadatenstandards, die die Kategorie inzwischen verlangt, und den Medium-Content-Aufstieg, der Wert und Verteidigungsfähigkeit jedes Titels vervielfacht.",
        ],
        sections: [
          {
            id: "landschaft",
            title: "Die Landschaft 2026: die Sättigung ist ungleich verteilt",
            body: [
              "Die Sättigung im Low-Content ist real, aber genau dort konzentriert, wohin die Kurse zeigten: generische linierte Journale, Dankbarkeitstagebücher, generische Tagesplaner, Passwortbücher. In diesen Segmenten konkurrieren Tausende Verkäufer allein über Cover, und die Ökonomie ist für Neueinsteiger tot.",
              "Eine Ebene tiefer kehrt sich das Bild um. Aktivitätsspezifische Logs (Gerätewartung, Medikamenten-Tracking, Eisbad-Sessions), berufsspezifische Planer und Hobby-Arbeitsbücher haben Dutzende Konkurrenten statt Hunderttausender — und wer « Sauerteig Logbuch » sucht, konvertiert stark, weil die Suchanfrage selbst das Bedürfnis ist.",
              "Der Test für jede Low-Content-Idee: Erfordert der Innenteil Wissen über den Anwendungsfall? Wenn jede Vorlagenbörse ihn füllt, weiterziehen. Wenn gutes Design zwanzig Minuten Verständnis erfordert, wie Imker ihre Stöcke wirklich inspizieren, haben Sie einen Graben genau dieser Tiefe — und das ist mehr als null.",
            ],
            bullets: [
              "Tot: generisch liniert, Dankbarkeit, generische Planer, Passwortbücher.",
              "Lebendig: Aktivitäts-Logs, Berufsplaner, Hobby-Arbeitsbücher.",
              "Spezifische Suchen konvertieren: die Suchphrase ist das Bedürfnis.",
              "Grabentest: erfordert der Innenteil Anwendungswissen?",
            ],
          },
          {
            id: "nischen-methode",
            title: "Nischen finden: Nachfragesignale für Bücher ohne Text",
            body: [
              "Low-Content-Nischenrecherche ist Keyword-Recherche gekreuzt mit Innenteil-Spezifik. Durchforsten Sie Amazons Autovervollständigung nach Mustern wie « [Aktivität] Logbuch », « [Beruf] Planer », « [Hobby] Tagebuch »; ein existierender Vorschlag heißt, dass Menschen ihn tippen. Prüfen Sie dann die Top-Ergebnisse: Zeigt Seite eins generische Notizbücher mit aufgeklebtem Keyword, gewinnt der spezifische Innenteil; zeigt sie gut gestaltete spezifische Innenteile mit Hunderten Rezensionen, sind Sie spät dran.",
              "Validieren Sie Kaufabsicht über Traffic. Einige hundert hochspezifische Monatssuchen schlagen zehntausend generische — der Käufer eines « Ernährungs- und Symptomtagebuchs bei Reizdarm » stöbert nicht, er kauft.",
              "Stapeln Sie Saison- und Geschenkwinkel: Viele Low-Content-Käufe sind Geschenke (Ruhestand, neues Hobby, neues Haustier), und Geschenk-Framing in den Metadaten fängt Suchen ein, die das Anwendungs-Framing verpasst.",
            ],
            bullets: [
              "Autovervollständigung abbauen: [Aktivität] Log, [Beruf] Planer, [Zustand] Tracker.",
              "Seite-eins-Check: generische Ergebnisse = Chance; rezensierte spezifische = zu spät.",
              "Kleine spezifische Nachfrage schlägt große generische.",
              "Geschenk-Framing (« Ruhestandsgeschenk Krankenschwester ») ist eine zweite Keyword-Fläche.",
            ],
          },
          {
            id: "innenteil-design",
            title: "Innenteil gestalten: das Produkt ist das Seitenlayout",
            body: [
              "Ein zweckspezifischer Innenteil verdient seinen Preis, indem er Workflow-Wissen kodiert: Das Imker-Log hat Felder für Königinnen-Sichtungen und Milbenzählungen; das Buch des kleinen Vermieters hat Inspektions-Checklisten pro Besuchstyp. Recherchieren Sie den echten Workflow — Foren, YouTube-Anleitungen, ein Praktiker-Gespräch — und die Felder entwerfen sich selbst.",
              "Respektieren Sie die Druckmechanik: Die meisten Low-Content-Bücher funktionieren bei 6 x 9 oder 8,5 x 11, ohne Beschnitt, mit 100-150 Seiten (Druckkosten steigen mit den Seiten, während Low-Content-Preise um 6,99-12,99 deckeln). Die Ränder folgen denselben KDP-Regeln wie jedes Taschenbuch — unser Formatierungsleitfaden gilt vollständig.",
              "Testen Sie den Innenteil physisch vor der Veröffentlichung: Drucken Sie einige Seiten zu Hause, füllen Sie sie von Hand aus. Felder brauchen immer mehr Platz, als Bildschirme suggerieren, und eine Logseite, die den Stift frustriert, tötet Wiederholungskäufe — den stillen Motor des Logbuch-Geschäfts.",
            ],
            bullets: [
              "Echtes Praxiswissen in Felder kodieren; den Anwendungsfall recherchieren.",
              "100-150 Seiten, ohne Beschnitt, 6 x 9 oder 8,5 x 11 — Druckkosten-Disziplin.",
              "Seiten drucken und handschriftlich testen; Stifte brauchen mehr Raum als Bildschirme zeigen.",
              "Wiederholungskäufe belohnen wirklich nutzbare Innenteile.",
            ],
          },
          {
            id: "cover-metadaten",
            title: "Cover, Keywords und die Regeln, die KDP durchsetzt",
            body: [
              "Low-Content-Cover konkurrieren in Thumbnail-Größe gegen viele Geschwister, also schlägt Klarheit Dekoration: der Anwendungsfall lesbar im Titel, ein Visual, das die Aktivität sofort sagt, professionelle Typografie. Der Thumbnail-Test aus unserem Cover-Leitfaden gilt hier doppelt.",
              "Die Metadatenregeln wurden nach dem Goldrausch verschärft: KDP verlangt strikte Ehrlichkeit bei Low-Content-Angeboten — keine falschen Seitenzahlen, keine « Tagebuch »-Titel auf bloßen Notizbüchern, und das dedizierte Low-Content-Häkchen bei der Einrichtung (es entfernt die Blick-ins-Buch-Funktion und manche Kategorieoptionen, aber Falschdeklaration ist ein Richtlinienverstoß).",
              "Verschlagworten Sie die Spezifik: Jedes Innenteil-Feld, das Sie entworfen haben, ist eine Suchphrase, die jemand tippt. Das Feld « Milbenzählung » rechtfertigt « Varroa Tracking »; der Geschenkwinkel rechtfertigt « Imker Geschenk ». Spezifische Innenteile erzeugen ihren eigenen Longtail — generische Notizbücher können das nicht.",
            ],
            bullets: [
              "Thumbnail-Klarheit vor Dekoration; der Anwendungsfall muss bei 100 px lesbar sein.",
              "Low-Content ehrlich per KDP-Häkchen deklarieren; Falschdeklaration riskiert das Konto.",
              "Innenteil-Felder sind Keyword-Quellen: jedes Feld ist eine Suchphrase.",
              "Geschenk-Keywords erschließen eine zweite Käufergruppe.",
            ],
          },
          {
            id: "medium-content",
            title: "Der Aufstiegspfad: Medium-Content vervielfacht die Verteidigungsfähigkeit",
            body: [
              "Medium-Content-Bücher fügen funktionalen Innenteilen geschriebenen Wert hinzu: ein Gewohnheitstracker, der mit 20 Seiten Gewohnheitsforschung beginnt, ein Imker-Log mit saisonalem Aufgabenleitfaden pro Abschnitt, ein Budget-Arbeitsbuch mit Methodenerklärungen zwischen den Blättern. Das Geschriebene hebt den wahrgenommenen Wert, rechtfertigt Preise von 9,99-14,99 und kann — entscheidend — von Vorlagenverkäufern nicht repliziert werden.",
              "Hier verändert KI-Generierung die Ökonomie der Kategorie: 30 Seiten gut recherchierten Lehrinhalts pro Buch zu produzieren war der Engpass, der Low-Content-Verkäufer vom Aufstieg abhielt; eine qualitätsgeprüfte Schreibpipeline beseitigt ihn. Ein Workflow wie DraftToDone kann die Lehrschicht produzieren, während Sie den funktionalen Innenteil gestalten — die Kombination ist ein Produkt, das weder Nur-Text- noch Nur-Vorlagen-Konkurrenten liefern.",
              "Medium-Content erschließt zudem bessere Kategorien, die Blick-ins-Buch-Funktion und rezensionswürdige Substanz — die strukturellen Vorteile, auf die Low-Content verzichtet. Fragen Sie bei jeder validierten Nische: Wie sähe die Medium-Content-Version aus? Diese Version ist meist das eigentliche Geschäft.",
            ],
            bullets: [
              "Medium-Content = funktionaler Innenteil + Lehrtext.",
              "Rechtfertigt 9,99-14,99 und widersteht der Vorlagen-Konkurrenz.",
              "KI-Entwurf beseitigt den Schreibengpass, der den Aufstiegspfad schützte.",
              "Standardfrage pro Nische: Wie sieht die Medium-Content-Version aus?",
            ],
          },
        ],
        checklist: [
          "Nische besteht den Grabentest: der Innenteil erfordert Anwendungswissen.",
          "Nachfrage per Autovervollständigung verifiziert; Seite-eins-Konkurrenz bewertet.",
          "Workflow recherchiert; Felder kodieren echte Praxis.",
          "100-150 Seiten, ohne Beschnitt, Standardformat; Seiten handschriftlich im Druck getestet.",
          "Cover besteht den Thumbnail-Test; Anwendungsfall sofort lesbar.",
          "Low-Content-Häkchen bei der KDP-Einrichtung ehrlich gesetzt.",
          "Keywords aus Innenteil-Feldern und Geschenkwinkeln gewonnen.",
          "Medium-Content-Aufstieg für jede validierte Nische geprüft.",
        ],
        faq: [
          {
            question: "Sind Low-Content-Bücher auf KDP noch profitabel?",
            answer:
              "Generische nicht — diese Segmente sind endgültig gesättigt. Zweckspezifische Innenteile für spezifische Zielgruppen (Aktivitäts-Logs, Berufsplaner, Zustands-Tracker) verkaufen sich weiterhin stetig, und Medium-Content-Aufwertungen dieser Nischen sind wirklich verteidigbar.",
          },
          {
            question: "Wie viel verdienen Low-Content-Bücher pro Verkauf?",
            answer:
              "Ein typisches 7,99-Low-Content-Taschenbuch mit 120 Seiten bringt nach Druck bei 60 % Tantieme rund 2,50. Medium-Content-Versionen zu 11,99-14,99 verdoppeln das ungefähr — das stärkste Argument für den Aufstiegspfad.",
          },
          {
            question: "Brauche ich Designkenntnisse fürs Low-Content-Publishing?",
            answer:
              "Sie brauchen Layoutkompetenz mehr als künstlerisches Talent: saubere Tabellen, lesbare Typografie, nutzbare Feldgrößen. Von Canva bis InDesign-Vorlagen erledigen Tools die Mechanik; der Differenzierer ist, den Anwendungsfall gut genug zu verstehen, um die richtigen Felder zu entwerfen.",
          },
          {
            question: "Was unterscheidet Low-Content- von Medium-Content-Büchern?",
            answer:
              "Low-Content-Innenteile sind funktional mit minimalem Text (Linien, Raster, Felder). Medium-Content fügt substanzielles Geschriebenes hinzu — Leitfäden, Anleitungen, Lehrabschnitte — was Preisdecken hebt, die Blick-ins-Buch-Funktion freischaltet und eine Differenzierung schafft, die Vorlagen nicht kopieren können.",
          },
          {
            question: "Schadet die KDP-Low-Content-Deklaration den Verkäufen?",
            answer:
              "Sie entfernt die Blick-ins-Buch-Vorschau und manche Kategorieoptionen, was die Auffindbarkeit leicht beeinflusst — aber sie ist Pflicht für qualifizierende Bücher. Medium-Content-Bücher mit echten Textabschnitten deklarieren sich nicht als Low-Content und behalten den vollen Funktionsumfang.",
          },
        ],
      },
    },
  },
];
