import type { BlogPost } from "./blog-content";

export const aiWritingSeoPosts: BlogPost[] = [
  {
    key: "how-to-write-book-with-ai",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 16,
    accent: {
      start: "#eafaf3",
      middle: "#a9f0d6",
      end: "#cfe8ff",
    },
    translations: {
      en: {
        slug: "how-to-write-a-book-with-ai-complete-guide",
        title: "How to write a book with AI: the complete 2026 method, from idea to finished manuscript",
        description:
          "A practical, step-by-step method for writing a real book with AI: niche selection, blueprint, chapter drafting, revision passes, quality control and the mistakes that make AI books unreadable.",
        keywords: [
          "how to write a book with AI",
          "write a book using AI",
          "AI book writing",
          "AI book generator",
          "write a book with ChatGPT",
          "AI manuscript",
          "AI nonfiction book",
          "publish AI written book",
        ],
        category: "AI writing",
        intro: [
          "Writing a book with AI is no longer an experiment. In 2026 it is a workflow question: the writers who get good results treat AI as a drafting engine inside a structured process, and the ones who get unreadable results paste one prompt into a chatbot and hope.",
          "The difference is not the model. It is the method. A book is a long, internally consistent argument or story, and language models are excellent at paragraphs but weak at memory, structure and self-criticism. The process below compensates for exactly those weaknesses.",
          "This guide covers the full pipeline — idea, blueprint, chapter drafting, revision, quality gates and publishing preparation — and works whether you use a general chatbot, an API script, or a dedicated pipeline like DraftToDone that runs every step for you.",
        ],
        sections: [
          {
            id: "why-one-prompt-fails",
            title: "Why 'write me a book' always fails",
            body: [
              "A single prompt cannot produce a book worth reading because the model has no plan to be faithful to. It will repeat ideas, contradict itself between chapters, drift in tone and pad weak sections with generic filler. Readers notice within two pages, and Amazon reviews are merciless about it.",
              "Long-form quality comes from decomposition: decide what the book promises, split that promise into chapters that each carry one job, then draft each chapter with the plan and the previous chapters' summaries in context. Every professional AI book pipeline — including ours — is a variation of this loop.",
              "Treat the model like a fast, tireless junior writer. It needs a brief, an outline, reference notes and an editor. Give it those four things and the output changes category.",
            ],
            bullets: [
              "One-shot prompts produce repetition, contradiction and filler.",
              "Decomposition (blueprint → chapters → revision) is what makes AI books readable.",
              "The model drafts; the structure and the quality gates are the real product.",
              "Plan for 3–5 distinct passes, not one generation.",
            ],
          },
          {
            id: "choose-subject",
            title: "Step 1 — Choose a subject readers already search for",
            body: [
              "AI removes the writing bottleneck, which means subject selection becomes the highest-leverage decision. A perfectly written book on a topic nobody searches for sells nothing. Before drafting, validate that real readers buy books in the niche.",
              "For nonfiction, the reliable pattern is a specific problem plus a specific audience: 'meal prep for night-shift nurses' beats 'healthy eating'. Check Amazon search suggestions, the best-seller rank of the top 10 books in the candidate category, and whether those books have visible revenue (rank under ~100,000 in the store is a good first filter).",
              "Write a one-sentence promise before anything else: 'After reading this book, a [specific reader] will be able to [specific outcome].' Every chapter must serve that sentence. If you cannot write it, the book is not ready to be drafted.",
            ],
            bullets: [
              "Validate demand before writing: Amazon suggestions, category best-sellers, BSR.",
              "Specific problem + specific audience beats broad topics.",
              "Write the one-sentence promise first; it becomes the spine of the blueprint.",
              "Avoid niches dominated by strong author brands unless you can differentiate.",
            ],
          },
          {
            id: "blueprint",
            title: "Step 2 — Build a blueprint before generating a single chapter",
            body: [
              "The blueprint is the contract the AI must respect: working title, subtitle, reader avatar, tone guide, and a chapter-by-chapter plan where each chapter has a goal, 3–6 key points, and a transition to the next chapter. Ten minutes of blueprint work saves hours of revision.",
              "Generate the blueprint with AI, but edit it by hand. This is where your judgment is irreplaceable: cut chapters that repeat each other, reorder for logical progression, and make sure the book builds toward the promise instead of circling it.",
              "Decide length honestly. A useful nonfiction guide is typically 25,000–45,000 words (10–14 chapters). Padding to 70,000 words helps nobody and shows immediately in reviews. Page count matters for paperback pricing, but quality of promise-keeping matters more.",
            ],
            bullets: [
              "Blueprint = title, subtitle, avatar, tone, chapter plan with goals and key points.",
              "Generate with AI, edit by hand — this step is where the book is actually designed.",
              "Each chapter gets one job; merge or cut chapters that overlap.",
              "Target 25,000–45,000 words for practical nonfiction; never pad.",
            ],
          },
          {
            id: "drafting",
            title: "Step 3 — Draft chapter by chapter with rolling context",
            body: [
              "Draft one chapter at a time. Each generation should receive: the blueprint, a short summary of every chapter already written, and the specific chapter's goal and key points. This 'rolling context' is what keeps terminology, examples and tone consistent across 200 pages.",
              "Ask for concrete material explicitly: examples, numbers, step-by-step procedures, short case studies, common mistakes. Generic AI prose comes from generic prompts. The instruction 'include two realistic worked examples and one common failure mode' transforms a chapter.",
              "Keep a style sheet — preferred terms, banned phrases, person and tense, formatting conventions — and inject it into every chapter prompt. Models follow a style sheet far more reliably than a vague 'keep the same tone'.",
            ],
            bullets: [
              "One chapter per generation, with blueprint + summaries of previous chapters in context.",
              "Demand concrete material: examples, numbers, procedures, failure modes.",
              "Maintain a style sheet and inject it into every prompt.",
              "Save every chapter immediately; never rely on chat history as storage.",
            ],
          },
          {
            id: "revision",
            title: "Step 4 — Revise in dedicated passes, not one big rewrite",
            body: [
              "Revision is where AI books are won. Run separate passes with separate goals: a structure pass (does each chapter do its job, in the right order?), a redundancy pass (AI loves to re-explain), a fact pass (verify every claim, statistic and name yourself), and a voice pass (cut hedging, vary sentence rhythm, delete the phrases every model overuses).",
              "AI can assist each pass — 'list every repeated idea across these two chapters' is a superb prompt — but the accept/reject decision stays human. The fastest workflow is AI-suggested edits reviewed in batches.",
              "Read at least the introduction, one middle chapter and the conclusion aloud. Awkward AI cadence that survives silent reading rarely survives reading aloud.",
            ],
            bullets: [
              "Separate passes: structure, redundancy, facts, voice.",
              "Verify every factual claim yourself — models state errors confidently.",
              "Hunt the signature phrases ('delve', 'in today's fast-paced world') and idea-level repetition.",
              "Read key chapters aloud before declaring the manuscript done.",
            ],
          },
          {
            id: "quality-gates",
            title: "Step 5 — Apply hard quality gates before publishing",
            body: [
              "Define measurable thresholds the manuscript must pass: minimum word count actually delivered, minimum chapters, zero unverified statistics, zero placeholder text, a complete read-through by a human. Treat a failed gate as a blocked release, not a note.",
              "This is exactly how production pipelines work. DraftToDone, for example, refuses to count a book as finished if the manuscript falls under its word and chapter thresholds — the generation retries instead of charging for a broken book. Adopt the same discipline manually: a checklist you cannot skip.",
              "Then prepare the publishing package: title and subtitle with searchable keywords, a description that sells the promise, 7 KDP keyword slots, 2–3 categories, and a cover that reads clearly at thumbnail size. The manuscript is half the product; metadata and cover are the other half.",
            ],
            bullets: [
              "Hard gates: word count, chapter count, zero placeholders, zero unverified claims, full human read-through.",
              "A failed gate blocks publication — no exceptions.",
              "Prepare metadata (title, description, keywords, categories) with the same care as the text.",
              "Disclose AI-generated content to KDP where required — see our policy guide.",
            ],
          },
          {
            id: "tooling",
            title: "Chatbot, API script, or full pipeline: choosing your tooling",
            body: [
              "A chatbot is fine for a first book: free or cheap, fully manual, and you learn the craft. The cost is hours of copy-pasting, lost context between sessions, and no durability — close the tab mid-chapter and the state is gone.",
              "An API script automates the loop and is the right choice if you enjoy maintaining code: rolling context, retries and file output are a few hundred lines of Python. You pay in setup time and in debugging every model update.",
              "A dedicated pipeline runs the whole method — research, blueprint, chapter drafting with rolling context, revision, quality gates, plus cover and print-ready PDF — server-side, so a closed laptop never loses a book. That is the product category DraftToDone sits in: you bring the niche, the pipeline brings the discipline. Whichever tier you choose, the method in this guide is the same; only the automation level changes.",
            ],
            bullets: [
              "Chatbot: cheapest, fully manual, fragile context — good for learning.",
              "API script: automated but you own the code and its maintenance.",
              "Pipeline (DraftToDone): the full method automated server-side, with quality gates and KDP-ready outputs.",
              "Same method at every tier — automation changes the hours, not the steps.",
            ],
          },
        ],
        checklist: [
          "One-sentence promise written and validated against real Amazon demand.",
          "Blueprint approved by a human: chapters, goals, key points, tone guide.",
          "Every chapter drafted with blueprint + previous-chapter summaries in context.",
          "Style sheet applied to all generations.",
          "Four revision passes completed: structure, redundancy, facts, voice.",
          "All statistics and claims verified manually.",
          "Hard quality gates passed: length, chapters, no placeholders, full read-through.",
          "Metadata package ready: title, subtitle, description, 7 keywords, categories.",
          "AI disclosure decision made per KDP policy.",
        ],
        faq: [
          {
            question: "Can AI really write a whole book?",
            answer:
              "AI can draft a whole book, but it cannot design or vouch for one. With a blueprint, rolling context and human revision passes, the result is a real, useful book. Without them, it is filler. The human contribution shifts from typing to architecture and editing.",
          },
          {
            question: "How long does it take to write a book with AI?",
            answer:
              "With a manual chatbot workflow, expect 20–40 hours for a 30,000-word nonfiction book, most of it in revision. An automated pipeline compresses drafting to hours; human revision and verification still deserve several focused sessions.",
          },
          {
            question: "Is it legal to sell AI-written books on Amazon?",
            answer:
              "Yes. Amazon KDP accepts AI-generated content but requires you to disclose it during publishing setup, and you remain fully responsible for quality, accuracy and intellectual-property compliance. Misleading or low-quality content can still be removed.",
          },
          {
            question: "Which AI model is best for writing books?",
            answer:
              "Any current frontier model can draft good chapters when given a blueprint and rolling context. Model choice matters less than method: a disciplined process with a mid-tier model beats a one-shot prompt on the best model every time.",
          },
          {
            question: "Will readers know the book was written with AI?",
            answer:
              "They will know if it reads like unedited AI: repeated ideas, hedged claims, no concrete examples. After real revision passes and fact verification, what readers judge is whether the book keeps its promise — exactly as with human-written books.",
          },
        ],
      },
      fr: {
        slug: "ecrire-un-livre-avec-ia-guide-complet",
        title: "Écrire un livre avec l'IA : la méthode complète 2026, de l'idée au manuscrit terminé",
        description:
          "Méthode pratique, étape par étape, pour écrire un vrai livre avec l'IA : choix de niche, plan détaillé, rédaction chapitre par chapitre, passes de révision, contrôle qualité et erreurs qui rendent les livres IA illisibles.",
        keywords: [
          "écrire un livre avec l'IA",
          "IA pour écrire un livre",
          "rédiger un livre avec ChatGPT",
          "générateur de livre IA",
          "manuscrit IA",
          "livre écrit par intelligence artificielle",
          "publier un livre IA",
          "écriture assistée par IA",
        ],
        category: "Écriture IA",
        intro: [
          "Écrire un livre avec l'IA n'est plus une expérience de laboratoire. En 2026, c'est une question de méthode : ceux qui obtiennent de bons résultats utilisent l'IA comme moteur de rédaction au sein d'un processus structuré ; ceux qui obtiennent des textes illisibles collent un prompt unique dans un chatbot et espèrent.",
          "La différence ne vient pas du modèle, mais de la méthode. Un livre est un argument long et cohérent, et les modèles de langage excellent au niveau du paragraphe mais restent faibles en mémoire, en structure et en autocritique. Le processus ci-dessous compense précisément ces faiblesses.",
          "Ce guide couvre le pipeline complet — idée, plan détaillé, rédaction des chapitres, révision, contrôles qualité et préparation à la publication — et fonctionne avec un chatbot généraliste, un script API ou un pipeline dédié comme DraftToDone qui exécute chaque étape pour vous.",
        ],
        sections: [
          {
            id: "pourquoi-un-prompt-echoue",
            title: "Pourquoi « écris-moi un livre » échoue toujours",
            body: [
              "Un prompt unique ne peut pas produire un livre digne d'être lu, car le modèle n'a aucun plan auquel rester fidèle. Il répète les idées, se contredit d'un chapitre à l'autre, dérive en ton et remplit les sections faibles de généralités. Le lecteur le remarque en deux pages, et les avis Amazon ne pardonnent pas.",
              "La qualité sur format long vient de la décomposition : décider ce que le livre promet, découper cette promesse en chapitres qui portent chacun une mission, puis rédiger chaque chapitre avec le plan et les résumés des chapitres précédents en contexte. Tout pipeline professionnel — y compris le nôtre — est une variation de cette boucle.",
              "Traitez le modèle comme un rédacteur junior rapide et infatigable. Il a besoin d'un brief, d'un plan, de notes de référence et d'un éditeur. Donnez-lui ces quatre éléments et le résultat change de catégorie.",
            ],
            bullets: [
              "Le prompt unique produit répétitions, contradictions et remplissage.",
              "La décomposition (plan → chapitres → révision) rend les livres IA lisibles.",
              "Le modèle rédige ; la structure et les contrôles qualité sont le vrai produit.",
              "Prévoyez 3 à 5 passes distinctes, pas une génération unique.",
            ],
          },
          {
            id: "choisir-sujet",
            title: "Étape 1 — Choisir un sujet que les lecteurs cherchent déjà",
            body: [
              "L'IA supprime le goulot d'étranglement de l'écriture : le choix du sujet devient donc la décision au plus fort levier. Un livre parfaitement écrit sur un sujet que personne ne cherche ne vend rien. Avant de rédiger, validez que de vrais lecteurs achètent des livres dans la niche.",
              "Pour la non-fiction, le schéma fiable est un problème précis pour un public précis : « batch cooking pour infirmières de nuit » bat « manger sainement ». Vérifiez les suggestions de recherche Amazon, le classement des ventes des 10 meilleurs livres de la catégorie visée, et la présence de revenus visibles (un classement sous ~100 000 dans la boutique est un bon premier filtre).",
              "Écrivez d'abord une promesse en une phrase : « Après ce livre, un [lecteur précis] saura [résultat précis]. » Chaque chapitre doit servir cette phrase. Si vous ne parvenez pas à l'écrire, le livre n'est pas prêt à être rédigé.",
            ],
            bullets: [
              "Validez la demande avant d'écrire : suggestions Amazon, best-sellers de catégorie, classement des ventes.",
              "Problème précis + public précis battent les sujets larges.",
              "La promesse en une phrase devient la colonne vertébrale du plan.",
              "Évitez les niches dominées par de fortes marques d'auteur sans différenciation claire.",
            ],
          },
          {
            id: "plan-detaille",
            title: "Étape 2 — Construire un plan détaillé avant de générer le moindre chapitre",
            body: [
              "Le plan détaillé est le contrat que l'IA doit respecter : titre de travail, sous-titre, portrait du lecteur, guide de ton, et un plan chapitre par chapitre où chacun reçoit un objectif, 3 à 6 points clés et une transition vers le suivant. Dix minutes de plan économisent des heures de révision.",
              "Générez le plan avec l'IA, mais corrigez-le à la main. C'est ici que votre jugement est irremplaçable : supprimez les chapitres qui se répètent, réordonnez pour une progression logique, et assurez-vous que le livre avance vers la promesse au lieu de tourner autour.",
              "Décidez la longueur honnêtement. Un guide pratique utile fait typiquement 25 000 à 45 000 mots (10 à 14 chapitres). Gonfler à 70 000 mots n'aide personne et se voit immédiatement dans les avis. Le nombre de pages compte pour le prix du broché, mais tenir la promesse compte davantage.",
            ],
            bullets: [
              "Plan détaillé = titre, sous-titre, portrait lecteur, ton, chapitres avec objectifs et points clés.",
              "Généré par l'IA, corrigé à la main — c'est ici que le livre se conçoit réellement.",
              "Un chapitre, une mission ; fusionnez ou coupez ce qui se recoupe.",
              "Visez 25 000 à 45 000 mots pour la non-fiction pratique ; ne gonflez jamais.",
            ],
          },
          {
            id: "redaction",
            title: "Étape 3 — Rédiger chapitre par chapitre avec un contexte glissant",
            body: [
              "Rédigez un chapitre à la fois. Chaque génération doit recevoir : le plan détaillé, un court résumé de chaque chapitre déjà écrit, et l'objectif du chapitre en cours avec ses points clés. Ce « contexte glissant » maintient la cohérence de la terminologie, des exemples et du ton sur 200 pages.",
              "Exigez explicitement du concret : exemples, chiffres, procédures pas à pas, mini études de cas, erreurs courantes. La prose IA générique vient de prompts génériques. L'instruction « inclure deux exemples chiffrés réalistes et une erreur fréquente » transforme un chapitre.",
              "Tenez une feuille de style — termes préférés, expressions interdites, personne et temps, conventions de mise en forme — et injectez-la dans chaque prompt. Un modèle suit une feuille de style bien plus fidèlement qu'un vague « garde le même ton ».",
            ],
            bullets: [
              "Un chapitre par génération, avec plan + résumés des chapitres précédents en contexte.",
              "Exigez du concret : exemples, chiffres, procédures, erreurs types.",
              "Maintenez une feuille de style injectée dans chaque prompt.",
              "Sauvegardez chaque chapitre immédiatement ; l'historique de chat n'est pas un stockage.",
            ],
          },
          {
            id: "revision",
            title: "Étape 4 — Réviser en passes dédiées, pas en une réécriture globale",
            body: [
              "La révision est l'étape où les livres IA se gagnent. Menez des passes séparées avec des objectifs séparés : une passe structure (chaque chapitre fait-il son travail, dans le bon ordre ?), une passe redondance (l'IA adore ré-expliquer), une passe factuelle (vérifiez vous-même chaque affirmation, statistique et nom propre) et une passe voix (supprimez les précautions inutiles, variez le rythme, traquez les tournures que tous les modèles surutilisent).",
              "L'IA peut assister chaque passe — « liste toutes les idées répétées entre ces deux chapitres » est un excellent prompt — mais la décision d'accepter ou rejeter reste humaine. Le flux le plus rapide : des corrections proposées par l'IA, validées par lots.",
              "Lisez à voix haute au minimum l'introduction, un chapitre du milieu et la conclusion. Une cadence IA maladroite qui survit à la lecture silencieuse survit rarement à la lecture à voix haute.",
            ],
            bullets: [
              "Passes séparées : structure, redondance, faits, voix.",
              "Vérifiez chaque affirmation factuelle vous-même — les modèles affirment leurs erreurs avec aplomb.",
              "Traquez les tournures signature et la répétition d'idées.",
              "Lisez les chapitres clés à voix haute avant de déclarer le manuscrit terminé.",
            ],
          },
          {
            id: "controles-qualite",
            title: "Étape 5 — Appliquer des contrôles qualité bloquants avant publication",
            body: [
              "Définissez des seuils mesurables que le manuscrit doit franchir : nombre de mots réellement livrés, nombre de chapitres minimum, zéro statistique non vérifiée, zéro texte de remplissage, une relecture humaine complète. Un seuil non atteint bloque la publication — ce n'est pas une simple remarque.",
              "C'est exactement le fonctionnement des pipelines de production. DraftToDone, par exemple, refuse de considérer un livre comme terminé si le manuscrit passe sous ses seuils de mots et de chapitres — la génération recommence au lieu de facturer un livre défaillant. Adoptez la même discipline manuellement : une checklist impossible à contourner.",
              "Préparez ensuite le dossier de publication : titre et sous-titre avec mots-clés recherchés, description qui vend la promesse, 7 mots-clés KDP, 2 à 3 catégories, et une couverture lisible en taille vignette. Le manuscrit est la moitié du produit ; métadonnées et couverture sont l'autre moitié.",
            ],
            bullets: [
              "Seuils bloquants : mots, chapitres, zéro remplissage, zéro affirmation non vérifiée, relecture complète.",
              "Un contrôle échoué bloque la publication — sans exception.",
              "Préparez les métadonnées (titre, description, mots-clés, catégories) avec le même soin que le texte.",
              "Déclarez le contenu généré par IA à KDP quand c'est requis — voir notre guide dédié.",
            ],
          },
          {
            id: "outillage",
            title: "Chatbot, script API ou pipeline complet : choisir son outillage",
            body: [
              "Un chatbot convient pour un premier livre : peu coûteux, entièrement manuel, et formateur. Le prix : des heures de copier-coller, un contexte perdu entre les sessions, aucune durabilité — fermez l'onglet en plein chapitre et tout disparaît.",
              "Un script API automatise la boucle et convient si vous aimez maintenir du code : contexte glissant, reprises sur erreur et écriture de fichiers tiennent en quelques centaines de lignes de Python. Vous payez en temps d'installation et en débogage à chaque mise à jour de modèle.",
              "Un pipeline dédié exécute toute la méthode — recherche, plan, rédaction avec contexte glissant, révision, contrôles qualité, plus la couverture et le PDF prêt pour l'impression — côté serveur : un ordinateur fermé ne fait jamais perdre un livre. C'est la catégorie de produit de DraftToDone : vous apportez la niche, le pipeline apporte la discipline. Quel que soit le niveau choisi, la méthode de ce guide reste identique ; seul le degré d'automatisation change.",
            ],
            bullets: [
              "Chatbot : le moins cher, entièrement manuel, contexte fragile — idéal pour apprendre.",
              "Script API : automatisé, mais le code et sa maintenance vous appartiennent.",
              "Pipeline (DraftToDone) : la méthode complète automatisée côté serveur, avec contrôles qualité et livrables prêts pour KDP.",
              "Même méthode à chaque niveau — l'automatisation change les heures, pas les étapes.",
            ],
          },
        ],
        checklist: [
          "Promesse en une phrase écrite et validée contre la demande réelle sur Amazon.",
          "Plan détaillé approuvé par un humain : chapitres, objectifs, points clés, guide de ton.",
          "Chaque chapitre rédigé avec plan + résumés des chapitres précédents en contexte.",
          "Feuille de style appliquée à toutes les générations.",
          "Quatre passes de révision effectuées : structure, redondance, faits, voix.",
          "Toutes les statistiques et affirmations vérifiées manuellement.",
          "Contrôles qualité bloquants franchis : longueur, chapitres, zéro remplissage, relecture complète.",
          "Dossier métadonnées prêt : titre, sous-titre, description, 7 mots-clés, catégories.",
          "Décision de déclaration IA prise selon la politique KDP.",
        ],
        faq: [
          {
            question: "L'IA peut-elle vraiment écrire un livre entier ?",
            answer:
              "L'IA peut rédiger un livre entier, mais elle ne peut ni le concevoir ni en garantir la qualité. Avec un plan détaillé, un contexte glissant et des passes de révision humaines, le résultat est un vrai livre utile. Sans cela, c'est du remplissage. La contribution humaine se déplace de la frappe vers l'architecture et l'édition.",
          },
          {
            question: "Combien de temps faut-il pour écrire un livre avec l'IA ?",
            answer:
              "Avec un flux manuel en chatbot, comptez 20 à 40 heures pour une non-fiction de 30 000 mots, dont l'essentiel en révision. Un pipeline automatisé compresse la rédaction en quelques heures ; la révision et la vérification humaines méritent toujours plusieurs sessions concentrées.",
          },
          {
            question: "Est-il légal de vendre des livres écrits par IA sur Amazon ?",
            answer:
              "Oui. Amazon KDP accepte le contenu généré par IA mais exige de le déclarer lors de la mise en ligne, et vous restez entièrement responsable de la qualité, de l'exactitude et du respect de la propriété intellectuelle. Un contenu trompeur ou de mauvaise qualité peut être retiré.",
          },
          {
            question: "Quel modèle d'IA est le meilleur pour écrire des livres ?",
            answer:
              "Tout modèle de pointe actuel peut rédiger de bons chapitres s'il reçoit un plan et un contexte glissant. Le choix du modèle compte moins que la méthode : un processus discipliné avec un modèle moyen bat systématiquement un prompt unique sur le meilleur modèle.",
          },
          {
            question: "Les lecteurs sauront-ils que le livre a été écrit avec l'IA ?",
            answer:
              "Ils le sauront si le texte ressemble à de l'IA non éditée : idées répétées, affirmations prudentes, aucun exemple concret. Après de vraies passes de révision et une vérification des faits, le lecteur juge une seule chose : la promesse est-elle tenue — exactement comme pour un livre écrit à la main.",
          },
        ],
      },
      it: {
        slug: "scrivere-un-libro-con-ia-guida-completa",
        title: "Scrivere un libro con l'IA: il metodo completo 2026, dall'idea al manoscritto finito",
        description:
          "Un metodo pratico, passo dopo passo, per scrivere un vero libro con l'IA: scelta della nicchia, piano dettagliato, stesura capitolo per capitolo, passate di revisione, controllo qualità e gli errori che rendono illeggibili i libri IA.",
        keywords: [
          "scrivere un libro con l'IA",
          "IA per scrivere un libro",
          "scrivere un libro con ChatGPT",
          "generatore di libri IA",
          "manoscritto IA",
          "libro scritto da intelligenza artificiale",
          "pubblicare un libro IA",
          "scrittura assistita da IA",
        ],
        category: "Scrittura IA",
        intro: [
          "Scrivere un libro con l'IA non è più un esperimento. Nel 2026 è una questione di metodo: chi ottiene buoni risultati usa l'IA come motore di stesura dentro un processo strutturato; chi ottiene testi illeggibili incolla un solo prompt in un chatbot e spera.",
          "La differenza non è il modello, è il metodo. Un libro è un argomento lungo e coerente, e i modelli linguistici eccellono a livello di paragrafo ma restano deboli in memoria, struttura e autocritica. Il processo qui sotto compensa esattamente queste debolezze.",
          "Questa guida copre l'intera pipeline — idea, piano dettagliato, stesura dei capitoli, revisione, controlli qualità e preparazione alla pubblicazione — e funziona con un chatbot generalista, uno script API o una pipeline dedicata come DraftToDone che esegue ogni passaggio per voi.",
        ],
        sections: [
          {
            id: "perche-un-prompt-fallisce",
            title: "Perché « scrivimi un libro » fallisce sempre",
            body: [
              "Un prompt unico non può produrre un libro degno di lettura, perché il modello non ha alcun piano a cui restare fedele. Ripete le idee, si contraddice tra i capitoli, deriva nel tono e riempie le sezioni deboli di generalità. Il lettore se ne accorge in due pagine, e le recensioni Amazon non perdonano.",
              "La qualità sul formato lungo nasce dalla scomposizione: decidere cosa promette il libro, dividere quella promessa in capitoli con una missione ciascuno, poi scrivere ogni capitolo con il piano e i riassunti dei capitoli precedenti nel contesto. Ogni pipeline professionale — compresa la nostra — è una variazione di questo ciclo.",
              "Trattate il modello come un redattore junior veloce e instancabile. Ha bisogno di un brief, di una scaletta, di note di riferimento e di un editor. Dategli questi quattro elementi e il risultato cambia categoria.",
            ],
            bullets: [
              "Il prompt unico produce ripetizioni, contraddizioni e riempitivo.",
              "La scomposizione (piano → capitoli → revisione) rende leggibili i libri IA.",
              "Il modello scrive; struttura e controlli qualità sono il vero prodotto.",
              "Prevedete da 3 a 5 passate distinte, non una generazione unica.",
            ],
          },
          {
            id: "scegliere-argomento",
            title: "Passo 1 — Scegliere un argomento che i lettori già cercano",
            body: [
              "L'IA elimina il collo di bottiglia della scrittura: la scelta dell'argomento diventa quindi la decisione con la leva più alta. Un libro perfettamente scritto su un tema che nessuno cerca non vende nulla. Prima di scrivere, verificate che lettori reali comprino libri in quella nicchia.",
              "Per la saggistica, lo schema affidabile è un problema preciso per un pubblico preciso: « meal prep per infermiere del turno di notte » batte « mangiare sano ». Controllate i suggerimenti di ricerca Amazon, la classifica di vendita dei primi 10 libri della categoria candidata e la presenza di ricavi visibili (una classifica sotto ~100.000 nello store è un buon primo filtro).",
              "Scrivete prima una promessa in una frase: « Dopo questo libro, un [lettore preciso] saprà [risultato preciso]. » Ogni capitolo deve servire quella frase. Se non riuscite a scriverla, il libro non è pronto per la stesura.",
            ],
            bullets: [
              "Validate la domanda prima di scrivere: suggerimenti Amazon, bestseller di categoria, classifica.",
              "Problema preciso + pubblico preciso battono i temi ampi.",
              "La promessa in una frase diventa la spina dorsale del piano.",
              "Evitate le nicchie dominate da forti brand d'autore senza una chiara differenziazione.",
            ],
          },
          {
            id: "piano-dettagliato",
            title: "Passo 2 — Costruire un piano dettagliato prima di generare un solo capitolo",
            body: [
              "Il piano dettagliato è il contratto che l'IA deve rispettare: titolo di lavoro, sottotitolo, profilo del lettore, guida al tono e un piano capitolo per capitolo dove ognuno riceve un obiettivo, 3-6 punti chiave e una transizione verso il successivo. Dieci minuti di piano risparmiano ore di revisione.",
              "Generate il piano con l'IA, ma correggetelo a mano. È qui che il vostro giudizio è insostituibile: eliminate i capitoli che si ripetono, riordinate per una progressione logica e assicuratevi che il libro avanzi verso la promessa invece di girarci attorno.",
              "Decidete la lunghezza onestamente. Una guida pratica utile conta tipicamente 25.000-45.000 parole (10-14 capitoli). Gonfiare a 70.000 parole non aiuta nessuno e si vede subito nelle recensioni. Il numero di pagine conta per il prezzo del cartaceo, ma mantenere la promessa conta di più.",
            ],
            bullets: [
              "Piano dettagliato = titolo, sottotitolo, profilo lettore, tono, capitoli con obiettivi e punti chiave.",
              "Generato dall'IA, corretto a mano — è qui che il libro viene davvero progettato.",
              "Un capitolo, una missione; unite o tagliate ciò che si sovrappone.",
              "Puntate a 25.000-45.000 parole per la saggistica pratica; mai gonfiare.",
            ],
          },
          {
            id: "stesura",
            title: "Passo 3 — Scrivere capitolo per capitolo con un contesto scorrevole",
            body: [
              "Scrivete un capitolo alla volta. Ogni generazione deve ricevere: il piano dettagliato, un breve riassunto di ogni capitolo già scritto, e l'obiettivo del capitolo in corso con i suoi punti chiave. Questo « contesto scorrevole » mantiene coerenti terminologia, esempi e tono su 200 pagine.",
              "Esigete esplicitamente materiale concreto: esempi, numeri, procedure passo passo, mini casi di studio, errori comuni. La prosa IA generica nasce da prompt generici. L'istruzione « includi due esempi realistici con numeri e un errore frequente » trasforma un capitolo.",
              "Tenete un foglio di stile — termini preferiti, espressioni vietate, persona e tempo verbale, convenzioni di formattazione — e inseritelo in ogni prompt. Un modello segue un foglio di stile molto più fedelmente di un vago « mantieni lo stesso tono ».",
            ],
            bullets: [
              "Un capitolo per generazione, con piano + riassunti dei capitoli precedenti nel contesto.",
              "Esigete concretezza: esempi, numeri, procedure, errori tipici.",
              "Mantenete un foglio di stile inserito in ogni prompt.",
              "Salvate ogni capitolo subito; la cronologia della chat non è un archivio.",
            ],
          },
          {
            id: "revisione",
            title: "Passo 4 — Revisionare con passate dedicate, non con una riscrittura globale",
            body: [
              "La revisione è dove i libri IA si vincono. Eseguite passate separate con obiettivi separati: una passata di struttura (ogni capitolo fa il suo lavoro, nell'ordine giusto?), una di ridondanza (l'IA adora rispiegare), una fattuale (verificate voi stessi ogni affermazione, statistica e nome proprio) e una di voce (eliminate le cautele inutili, variate il ritmo, cacciate le formule che tutti i modelli abusano).",
              "L'IA può assistere ogni passata — « elenca tutte le idee ripetute tra questi due capitoli » è un prompt eccellente — ma la decisione di accettare o rifiutare resta umana. Il flusso più rapido: correzioni proposte dall'IA, validate a lotti.",
              "Leggete ad alta voce almeno l'introduzione, un capitolo centrale e la conclusione. Una cadenza IA goffa che sopravvive alla lettura silenziosa raramente sopravvive alla lettura ad alta voce.",
            ],
            bullets: [
              "Passate separate: struttura, ridondanza, fatti, voce.",
              "Verificate ogni affermazione fattuale voi stessi — i modelli affermano i loro errori con sicurezza.",
              "Cacciate le formule tipiche e la ripetizione di idee.",
              "Leggete i capitoli chiave ad alta voce prima di dichiarare finito il manoscritto.",
            ],
          },
          {
            id: "controlli-qualita",
            title: "Passo 5 — Applicare controlli qualità bloccanti prima di pubblicare",
            body: [
              "Definite soglie misurabili che il manoscritto deve superare: numero di parole effettivamente consegnate, numero minimo di capitoli, zero statistiche non verificate, zero testo segnaposto, una rilettura umana completa. Una soglia mancata blocca la pubblicazione — non è una semplice nota.",
              "È esattamente come funzionano le pipeline di produzione. DraftToDone, per esempio, rifiuta di considerare finito un libro se il manoscritto scende sotto le sue soglie di parole e capitoli — la generazione riparte invece di far pagare un libro difettoso. Adottate la stessa disciplina manualmente: una checklist impossibile da aggirare.",
              "Preparate poi il pacchetto di pubblicazione: titolo e sottotitolo con parole chiave ricercate, una descrizione che vende la promessa, 7 parole chiave KDP, 2-3 categorie e una copertina leggibile in formato miniatura. Il manoscritto è metà del prodotto; metadati e copertina sono l'altra metà.",
            ],
            bullets: [
              "Soglie bloccanti: parole, capitoli, zero riempitivo, zero affermazioni non verificate, rilettura completa.",
              "Un controllo fallito blocca la pubblicazione — senza eccezioni.",
              "Preparate i metadati (titolo, descrizione, parole chiave, categorie) con la stessa cura del testo.",
              "Dichiarate il contenuto generato dall'IA a KDP quando richiesto — vedi la nostra guida dedicata.",
            ],
          },
          {
            id: "strumenti",
            title: "Chatbot, script API o pipeline completa: scegliere gli strumenti",
            body: [
              "Un chatbot va bene per un primo libro: economico, completamente manuale e formativo. Il prezzo: ore di copia-incolla, contesto perso tra le sessioni, nessuna durabilità — chiudete la scheda a metà capitolo e tutto sparisce.",
              "Uno script API automatizza il ciclo ed è la scelta giusta se vi piace mantenere codice: contesto scorrevole, ripartenze su errore e scrittura di file stanno in qualche centinaio di righe di Python. Pagate in tempo di installazione e in debug a ogni aggiornamento di modello.",
              "Una pipeline dedicata esegue tutto il metodo — ricerca, piano, stesura con contesto scorrevole, revisione, controlli qualità, più copertina e PDF pronto per la stampa — lato server: un computer chiuso non fa mai perdere un libro. È la categoria di prodotto di DraftToDone: voi portate la nicchia, la pipeline porta la disciplina. Qualunque livello scegliate, il metodo di questa guida resta identico; cambia solo il grado di automazione.",
            ],
            bullets: [
              "Chatbot: il più economico, completamente manuale, contesto fragile — ideale per imparare.",
              "Script API: automatizzato, ma il codice e la sua manutenzione sono vostri.",
              "Pipeline (DraftToDone): il metodo completo automatizzato lato server, con controlli qualità e file pronti per KDP.",
              "Stesso metodo a ogni livello — l'automazione cambia le ore, non i passaggi.",
            ],
          },
        ],
        checklist: [
          "Promessa in una frase scritta e validata contro la domanda reale su Amazon.",
          "Piano dettagliato approvato da un umano: capitoli, obiettivi, punti chiave, guida al tono.",
          "Ogni capitolo scritto con piano + riassunti dei capitoli precedenti nel contesto.",
          "Foglio di stile applicato a tutte le generazioni.",
          "Quattro passate di revisione completate: struttura, ridondanza, fatti, voce.",
          "Tutte le statistiche e le affermazioni verificate manualmente.",
          "Controlli qualità bloccanti superati: lunghezza, capitoli, zero riempitivo, rilettura completa.",
          "Pacchetto metadati pronto: titolo, sottotitolo, descrizione, 7 parole chiave, categorie.",
          "Decisione sulla dichiarazione IA presa secondo la politica KDP.",
        ],
        faq: [
          {
            question: "L'IA può davvero scrivere un libro intero?",
            answer:
              "L'IA può scrivere la bozza di un libro intero, ma non può progettarlo né garantirne la qualità. Con un piano dettagliato, un contesto scorrevole e passate di revisione umane, il risultato è un vero libro utile. Senza, è riempitivo. Il contributo umano si sposta dalla digitazione all'architettura e all'editing.",
          },
          {
            question: "Quanto tempo serve per scrivere un libro con l'IA?",
            answer:
              "Con un flusso manuale in chatbot, contate 20-40 ore per una saggistica di 30.000 parole, in gran parte di revisione. Una pipeline automatizzata comprime la stesura in poche ore; revisione e verifica umane meritano comunque diverse sessioni concentrate.",
          },
          {
            question: "È legale vendere libri scritti dall'IA su Amazon?",
            answer:
              "Sì. Amazon KDP accetta il contenuto generato dall'IA ma richiede di dichiararlo al momento della pubblicazione, e voi restate pienamente responsabili di qualità, accuratezza e rispetto della proprietà intellettuale. Un contenuto ingannevole o scadente può comunque essere rimosso.",
          },
          {
            question: "Quale modello di IA è il migliore per scrivere libri?",
            answer:
              "Qualsiasi modello di frontiera attuale può scrivere buoni capitoli se riceve un piano e un contesto scorrevole. La scelta del modello conta meno del metodo: un processo disciplinato con un modello medio batte sistematicamente un prompt unico sul modello migliore.",
          },
          {
            question: "I lettori capiranno che il libro è stato scritto con l'IA?",
            answer:
              "Lo capiranno se il testo somiglia a IA non editata: idee ripetute, affermazioni caute, nessun esempio concreto. Dopo vere passate di revisione e una verifica dei fatti, il lettore giudica una cosa sola: la promessa è mantenuta — esattamente come per un libro scritto a mano.",
          },
        ],
      },
      de: {
        slug: "buch-schreiben-mit-ki-komplette-anleitung",
        title: "Ein Buch mit KI schreiben: die komplette Methode 2026, von der Idee zum fertigen Manuskript",
        description:
          "Eine praktische Schritt-für-Schritt-Methode, um ein echtes Buch mit KI zu schreiben: Nischenwahl, Blueprint, Kapitelentwurf, Überarbeitungsdurchgänge, Qualitätskontrolle und die Fehler, die KI-Bücher unlesbar machen.",
        keywords: [
          "Buch schreiben mit KI",
          "KI Buch schreiben",
          "Buch mit ChatGPT schreiben",
          "KI Buchgenerator",
          "KI Manuskript",
          "Buch von künstlicher Intelligenz geschrieben",
          "KI Buch veröffentlichen",
          "KI-gestütztes Schreiben",
        ],
        category: "KI-Schreiben",
        intro: [
          "Ein Buch mit KI zu schreiben ist kein Experiment mehr. 2026 ist es eine Methodenfrage: Wer gute Ergebnisse erzielt, nutzt KI als Schreibmaschine innerhalb eines strukturierten Prozesses; wer unlesbare Texte erhält, fügt einen einzigen Prompt in einen Chatbot ein und hofft.",
          "Der Unterschied liegt nicht im Modell, sondern in der Methode. Ein Buch ist ein langes, in sich kohärentes Argument, und Sprachmodelle sind hervorragend auf Absatzebene, aber schwach in Gedächtnis, Struktur und Selbstkritik. Der folgende Prozess gleicht genau diese Schwächen aus.",
          "Dieser Leitfaden deckt die gesamte Pipeline ab — Idee, Blueprint, Kapitelentwurf, Überarbeitung, Qualitätskontrollen und Veröffentlichungsvorbereitung — und funktioniert mit einem allgemeinen Chatbot, einem API-Skript oder einer dedizierten Pipeline wie DraftToDone, die jeden Schritt für Sie ausführt.",
        ],
        sections: [
          {
            id: "warum-ein-prompt-scheitert",
            title: "Warum « schreib mir ein Buch » immer scheitert",
            body: [
              "Ein einzelner Prompt kann kein lesenswertes Buch erzeugen, weil das Modell keinen Plan hat, dem es treu bleiben kann. Es wiederholt Ideen, widerspricht sich zwischen Kapiteln, driftet im Ton und füllt schwache Abschnitte mit Allgemeinplätzen. Leser merken es nach zwei Seiten, und Amazon-Rezensionen sind gnadenlos.",
              "Qualität im Langformat entsteht durch Zerlegung: entscheiden, was das Buch verspricht, dieses Versprechen in Kapitel mit je einer Aufgabe aufteilen, dann jedes Kapitel mit dem Plan und den Zusammenfassungen der vorherigen Kapitel im Kontext schreiben. Jede professionelle Pipeline — unsere eingeschlossen — ist eine Variation dieser Schleife.",
              "Behandeln Sie das Modell wie einen schnellen, unermüdlichen Junior-Autor. Es braucht ein Briefing, eine Gliederung, Referenznotizen und einen Lektor. Geben Sie ihm diese vier Dinge, und das Ergebnis wechselt die Kategorie.",
            ],
            bullets: [
              "Einzelprompts erzeugen Wiederholung, Widerspruch und Füllmaterial.",
              "Zerlegung (Blueprint → Kapitel → Überarbeitung) macht KI-Bücher lesbar.",
              "Das Modell entwirft; Struktur und Qualitätskontrollen sind das eigentliche Produkt.",
              "Planen Sie 3-5 separate Durchgänge, nicht eine einzige Generierung.",
            ],
          },
          {
            id: "thema-waehlen",
            title: "Schritt 1 — Ein Thema wählen, das Leser bereits suchen",
            body: [
              "KI beseitigt den Engpass des Schreibens — die Themenwahl wird damit zur Entscheidung mit dem größten Hebel. Ein perfekt geschriebenes Buch über ein Thema, das niemand sucht, verkauft nichts. Prüfen Sie vor dem Schreiben, ob echte Leser Bücher in der Nische kaufen.",
              "Für Sachbücher ist das verlässliche Muster ein konkretes Problem für ein konkretes Publikum: « Meal Prep für Nachtschicht-Pflegekräfte » schlägt « gesunde Ernährung ». Prüfen Sie Amazons Suchvorschläge, den Verkaufsrang der Top 10 der Kandidatenkategorie und sichtbare Umsätze (ein Rang unter ~100.000 im Store ist ein guter erster Filter).",
              "Schreiben Sie zuerst ein Versprechen in einem Satz: « Nach diesem Buch kann ein [konkreter Leser] [konkretes Ergebnis]. » Jedes Kapitel muss diesem Satz dienen. Wenn Sie ihn nicht schreiben können, ist das Buch nicht reif für den Entwurf.",
            ],
            bullets: [
              "Nachfrage vor dem Schreiben validieren: Amazon-Vorschläge, Kategorie-Bestseller, Verkaufsrang.",
              "Konkretes Problem + konkretes Publikum schlägt breite Themen.",
              "Das Ein-Satz-Versprechen wird zum Rückgrat des Blueprints.",
              "Nischen mit starken Autorenmarken ohne klare Differenzierung meiden.",
            ],
          },
          {
            id: "blueprint",
            title: "Schritt 2 — Einen Blueprint bauen, bevor ein einziges Kapitel entsteht",
            body: [
              "Der Blueprint ist der Vertrag, den die KI einhalten muss: Arbeitstitel, Untertitel, Leserprofil, Tonleitfaden und ein Kapitelplan, in dem jedes Kapitel ein Ziel, 3-6 Kernpunkte und einen Übergang zum nächsten erhält. Zehn Minuten Blueprint sparen Stunden Überarbeitung.",
              "Generieren Sie den Blueprint mit KI, aber redigieren Sie ihn von Hand. Hier ist Ihr Urteil unersetzlich: Streichen Sie Kapitel, die sich wiederholen, ordnen Sie für eine logische Progression und stellen Sie sicher, dass das Buch auf das Versprechen zusteuert, statt es zu umkreisen.",
              "Entscheiden Sie die Länge ehrlich. Ein nützlicher Praxisratgeber hat typischerweise 25.000-45.000 Wörter (10-14 Kapitel). Auf 70.000 Wörter aufzublähen hilft niemandem und zeigt sich sofort in den Rezensionen. Die Seitenzahl zählt für den Taschenbuchpreis, aber das Einlösen des Versprechens zählt mehr.",
            ],
            bullets: [
              "Blueprint = Titel, Untertitel, Leserprofil, Ton, Kapitelplan mit Zielen und Kernpunkten.",
              "Mit KI generiert, von Hand redigiert — hier wird das Buch wirklich entworfen.",
              "Ein Kapitel, eine Aufgabe; Überlappendes zusammenführen oder streichen.",
              "25.000-45.000 Wörter für praktische Sachbücher anpeilen; nie aufblähen.",
            ],
          },
          {
            id: "entwurf",
            title: "Schritt 3 — Kapitel für Kapitel mit rollendem Kontext schreiben",
            body: [
              "Schreiben Sie ein Kapitel pro Durchgang. Jede Generierung erhält: den Blueprint, eine kurze Zusammenfassung jedes bereits geschriebenen Kapitels und das Ziel des aktuellen Kapitels mit seinen Kernpunkten. Dieser « rollende Kontext » hält Terminologie, Beispiele und Ton über 200 Seiten konsistent.",
              "Fordern Sie konkretes Material explizit an: Beispiele, Zahlen, Schritt-für-Schritt-Verfahren, kurze Fallstudien, häufige Fehler. Generische KI-Prosa entsteht aus generischen Prompts. Die Anweisung « füge zwei realistische Rechenbeispiele und einen häufigen Fehler ein » verwandelt ein Kapitel.",
              "Führen Sie ein Styleguide-Blatt — bevorzugte Begriffe, verbotene Floskeln, Person und Tempus, Formatierungskonventionen — und fügen Sie es in jeden Prompt ein. Ein Modell folgt einem Styleguide weit zuverlässiger als einem vagen « behalte den Ton bei ».",
            ],
            bullets: [
              "Ein Kapitel pro Generierung, mit Blueprint + Zusammenfassungen der vorherigen Kapitel im Kontext.",
              "Konkretes einfordern: Beispiele, Zahlen, Verfahren, typische Fehler.",
              "Styleguide pflegen und in jeden Prompt einfügen.",
              "Jedes Kapitel sofort speichern; der Chatverlauf ist kein Speicher.",
            ],
          },
          {
            id: "ueberarbeitung",
            title: "Schritt 4 — In dedizierten Durchgängen überarbeiten, nicht in einem großen Rewrite",
            body: [
              "Die Überarbeitung entscheidet über KI-Bücher. Führen Sie getrennte Durchgänge mit getrennten Zielen: einen Strukturdurchgang (erfüllt jedes Kapitel seine Aufgabe, in der richtigen Reihenfolge?), einen Redundanzdurchgang (KI liebt es, neu zu erklären), einen Faktendurchgang (prüfen Sie jede Behauptung, Statistik und jeden Namen selbst) und einen Stimmdurchgang (Absicherungen streichen, Satzrhythmus variieren, die Floskeln jagen, die jedes Modell überstrapaziert).",
              "KI kann jeden Durchgang unterstützen — « liste jede wiederholte Idee in diesen zwei Kapiteln » ist ein hervorragender Prompt — aber die Annehmen/Ablehnen-Entscheidung bleibt menschlich. Der schnellste Workflow: KI-vorgeschlagene Korrekturen, in Stapeln geprüft.",
              "Lesen Sie mindestens die Einleitung, ein mittleres Kapitel und den Schluss laut. Ein holpriger KI-Rhythmus, der das stille Lesen übersteht, übersteht selten das laute Lesen.",
            ],
            bullets: [
              "Getrennte Durchgänge: Struktur, Redundanz, Fakten, Stimme.",
              "Jede Tatsachenbehauptung selbst prüfen — Modelle behaupten Fehler mit Überzeugung.",
              "Typische KI-Floskeln und Ideenwiederholungen jagen.",
              "Schlüsselkapitel laut lesen, bevor das Manuskript für fertig erklärt wird.",
            ],
          },
          {
            id: "qualitaetskontrollen",
            title: "Schritt 5 — Harte Qualitätskontrollen vor der Veröffentlichung anwenden",
            body: [
              "Definieren Sie messbare Schwellen, die das Manuskript überschreiten muss: tatsächlich gelieferte Wortzahl, Mindestkapitelzahl, null ungeprüfte Statistiken, null Platzhaltertext, eine vollständige menschliche Durchsicht. Eine verfehlte Schwelle blockiert die Veröffentlichung — sie ist keine bloße Anmerkung.",
              "Genau so arbeiten Produktionspipelines. DraftToDone etwa weigert sich, ein Buch als fertig zu zählen, wenn das Manuskript unter seine Wort- und Kapitelschwellen fällt — die Generierung wiederholt sich, statt ein defektes Buch zu berechnen. Übernehmen Sie dieselbe Disziplin manuell: eine Checkliste, die man nicht überspringen kann.",
              "Bereiten Sie dann das Veröffentlichungspaket vor: Titel und Untertitel mit gesuchten Keywords, eine Beschreibung, die das Versprechen verkauft, 7 KDP-Keyword-Felder, 2-3 Kategorien und ein Cover, das in Thumbnail-Größe klar lesbar ist. Das Manuskript ist die halbe Ware; Metadaten und Cover sind die andere Hälfte.",
            ],
            bullets: [
              "Harte Schwellen: Wortzahl, Kapitelzahl, null Platzhalter, null ungeprüfte Behauptungen, vollständige Durchsicht.",
              "Eine gescheiterte Kontrolle blockiert die Veröffentlichung — ohne Ausnahme.",
              "Metadaten (Titel, Beschreibung, Keywords, Kategorien) mit derselben Sorgfalt wie den Text vorbereiten.",
              "KI-generierte Inhalte bei KDP offenlegen, wo erforderlich — siehe unseren Richtlinien-Leitfaden.",
            ],
          },
          {
            id: "werkzeuge",
            title: "Chatbot, API-Skript oder vollständige Pipeline: das Werkzeug wählen",
            body: [
              "Ein Chatbot reicht für ein erstes Buch: günstig, vollständig manuell, lehrreich. Der Preis: Stunden von Copy-Paste, verlorener Kontext zwischen Sitzungen, keine Dauerhaftigkeit — Tab mitten im Kapitel geschlossen, und alles ist weg.",
              "Ein API-Skript automatisiert die Schleife und ist die richtige Wahl, wenn Sie gern Code pflegen: rollender Kontext, Wiederholungen bei Fehlern und Dateiausgabe passen in ein paar hundert Zeilen Python. Sie zahlen mit Einrichtungszeit und Debugging bei jedem Modell-Update.",
              "Eine dedizierte Pipeline führt die ganze Methode aus — Recherche, Blueprint, Kapitelentwurf mit rollendem Kontext, Überarbeitung, Qualitätskontrollen, dazu Cover und druckfertiges PDF — serverseitig: Ein zugeklappter Laptop verliert nie ein Buch. Das ist die Produktkategorie von DraftToDone: Sie bringen die Nische, die Pipeline bringt die Disziplin. Welche Stufe Sie auch wählen, die Methode dieses Leitfadens bleibt dieselbe; nur der Automatisierungsgrad ändert sich.",
            ],
            bullets: [
              "Chatbot: am günstigsten, vollständig manuell, fragiler Kontext — ideal zum Lernen.",
              "API-Skript: automatisiert, aber Code und Wartung gehören Ihnen.",
              "Pipeline (DraftToDone): die komplette Methode serverseitig automatisiert, mit Qualitätskontrollen und KDP-fertigen Dateien.",
              "Dieselbe Methode auf jeder Stufe — Automatisierung ändert die Stunden, nicht die Schritte.",
            ],
          },
        ],
        checklist: [
          "Ein-Satz-Versprechen geschrieben und gegen reale Amazon-Nachfrage validiert.",
          "Blueprint von einem Menschen freigegeben: Kapitel, Ziele, Kernpunkte, Tonleitfaden.",
          "Jedes Kapitel mit Blueprint + Zusammenfassungen der vorherigen Kapitel im Kontext entworfen.",
          "Styleguide auf alle Generierungen angewendet.",
          "Vier Überarbeitungsdurchgänge abgeschlossen: Struktur, Redundanz, Fakten, Stimme.",
          "Alle Statistiken und Behauptungen manuell geprüft.",
          "Harte Qualitätskontrollen bestanden: Länge, Kapitel, keine Platzhalter, vollständige Durchsicht.",
          "Metadatenpaket bereit: Titel, Untertitel, Beschreibung, 7 Keywords, Kategorien.",
          "KI-Offenlegungsentscheidung gemäß KDP-Richtlinie getroffen.",
        ],
        faq: [
          {
            question: "Kann KI wirklich ein ganzes Buch schreiben?",
            answer:
              "KI kann ein ganzes Buch entwerfen, aber sie kann es weder konzipieren noch für seine Qualität bürgen. Mit Blueprint, rollendem Kontext und menschlichen Überarbeitungsdurchgängen entsteht ein echtes, nützliches Buch. Ohne sie entsteht Füllmaterial. Der menschliche Beitrag verlagert sich vom Tippen zu Architektur und Lektorat.",
          },
          {
            question: "Wie lange dauert es, ein Buch mit KI zu schreiben?",
            answer:
              "Mit einem manuellen Chatbot-Workflow rechnen Sie mit 20-40 Stunden für ein Sachbuch mit 30.000 Wörtern, überwiegend Überarbeitung. Eine automatisierte Pipeline komprimiert den Entwurf auf Stunden; menschliche Überarbeitung und Prüfung verdienen weiterhin mehrere konzentrierte Sitzungen.",
          },
          {
            question: "Ist es legal, KI-geschriebene Bücher auf Amazon zu verkaufen?",
            answer:
              "Ja. Amazon KDP akzeptiert KI-generierte Inhalte, verlangt aber die Offenlegung beim Veröffentlichen, und Sie bleiben voll verantwortlich für Qualität, Richtigkeit und die Einhaltung des geistigen Eigentums. Irreführende oder minderwertige Inhalte können dennoch entfernt werden.",
          },
          {
            question: "Welches KI-Modell ist das beste zum Bücherschreiben?",
            answer:
              "Jedes aktuelle Spitzenmodell kann gute Kapitel entwerfen, wenn es einen Blueprint und rollenden Kontext erhält. Die Modellwahl zählt weniger als die Methode: Ein disziplinierter Prozess mit einem mittleren Modell schlägt jedes Mal einen Einzelprompt auf dem besten Modell.",
          },
          {
            question: "Werden Leser merken, dass das Buch mit KI geschrieben wurde?",
            answer:
              "Sie merken es, wenn der Text wie unbearbeitete KI liest: wiederholte Ideen, vorsichtige Behauptungen, keine konkreten Beispiele. Nach echten Überarbeitungsdurchgängen und Faktenprüfung beurteilen Leser nur eines: ob das Buch sein Versprechen hält — genau wie bei handgeschriebenen Büchern.",
          },
        ],
      },
    },
  },
  {
    key: "best-ai-book-writing-tools",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 14,
    accent: {
      start: "#fdf6ec",
      middle: "#ffe3c2",
      end: "#b9ead7",
    },
    translations: {
      en: {
        slug: "best-ai-book-writing-tools-compared",
        title: "Best AI book writing tools in 2026: chatbots, writing apps and full pipelines compared",
        description:
          "An honest comparison of the three categories of AI book writing tools — general chatbots, AI writing apps and end-to-end book pipelines — with costs, strengths, failure modes and how to choose.",
        keywords: [
          "best AI book writing software",
          "AI book writing tools",
          "AI book generator",
          "AI writing app for authors",
          "ChatGPT vs book writing software",
          "AI for self-publishing",
          "book writing software 2026",
          "AI publishing tools",
        ],
        category: "Tools",
        intro: [
          "Search for 'AI book writing software' and you get a wall of affiliate listicles ranking twenty near-identical apps. The honest answer is simpler: there are only three categories of tool, and the right one depends on how many books you intend to publish and how much of the workflow you want to own.",
          "This guide compares the categories — general chatbots, dedicated AI writing apps, and end-to-end book pipelines — on what actually matters: output quality, consistency over a full manuscript, total cost per finished book, durability of long jobs, and what still lands on your desk afterwards.",
          "We build DraftToDone, which sits in the third category. We will say so where relevant and keep the comparison factual; every category genuinely wins for a certain kind of author.",
        ],
        sections: [
          {
            id: "three-categories",
            title: "The three categories, and why 'best tool' is the wrong question",
            body: [
              "Category one: general chatbots (ChatGPT, Claude, Gemini). You drive every step by hand in a conversation. Category two: AI writing apps (long-form editors with AI assist such as Sudowrite-style tools or Atticus-with-AI workflows). The app holds your project, you co-write scene by scene. Category three: book pipelines (DraftToDone and similar), where you provide the niche and constraints and an automated workflow produces manuscript, cover and print-ready files.",
              "The question that picks your category is not 'which AI writes best' — the underlying frontier models overlap heavily across all three. It is: how many hours do you want to spend per book, and which steps do you want to keep creative control over?",
              "One book a year as a personal project points at category one or two. A catalog strategy — several titles per month across niches — is only viable in category three, because the bottleneck stops being writing and becomes operations.",
            ],
            bullets: [
              "Chatbots: manual, conversational, cheapest entry.",
              "Writing apps: project-aware co-writing, best for fiction craft.",
              "Pipelines: niche in, KDP-ready book out, best for catalogs.",
              "Models overlap across categories; workflow and hours are the real difference.",
            ],
          },
          {
            id: "chatbots",
            title: "General chatbots: maximum control, maximum labor",
            body: [
              "A $20/month chatbot subscription can absolutely produce a book — our complete method guide shows the exact loop. You keep total creative control and learn what good prompting looks like, which makes you better at evaluating every other tool.",
              "The costs are hidden in labor and fragility. Rolling context must be managed by hand: you paste summaries, re-establish style rules, and re-upload material every session. Long chats degrade; browser tabs crash; chapters live scattered across conversations. Expect 20–40 working hours per book, dominated by copy-paste logistics and revision.",
              "Chatbots are the right choice for a first book, for heavily personal projects where you rewrite most sentences anyway, and for authors who want to learn the method before automating it.",
            ],
            bullets: [
              "~$20/month, plus your hours — the real cost is 20–40 hours per book.",
              "Total creative control and method learning.",
              "No durability: context, files and progress are yours to babysit.",
              "Best for: first book, personal projects, method learning.",
            ],
          },
          {
            id: "writing-apps",
            title: "AI writing apps: co-writing with a project brain",
            body: [
              "Dedicated writing apps wrap a long-form editor around the model: they store your characters, outline and style, and generate scene by scene or section by section. For fiction especially, features like consistent character sheets and beat-level generation are genuinely useful.",
              "The trade-off is that you are still the operator. The app remembers the project, but you make hundreds of generation decisions per book, and the non-writing work — covers, formatting, metadata, publishing files — remains entirely outside the tool. Subscriptions typically run $10–$50/month depending on word credits.",
              "Writing apps are the right choice for novelists who want AI as a collaborator rather than a factory, and for anyone whose voice is the product.",
            ],
            bullets: [
              "Project-aware: outlines, characters and style stored across sessions.",
              "Strong for fiction craft; section-level creative control.",
              "$10–$50/month; covers, formatting and metadata still on you.",
              "Best for: novelists, voice-driven nonfiction, AI-as-collaborator workflows.",
            ],
          },
          {
            id: "pipelines",
            title: "Book pipelines: the niche goes in, a publishable book comes out",
            body: [
              "Pipelines automate the entire method: niche research, blueprint, chapter-by-chapter drafting with rolling context, revision passes, quality gates, then cover design and KDP-ready files. The unit of interaction is the book, not the paragraph. DraftToDone is our implementation: you specify a niche (or ask for a surprise), choose the language, and collect manuscript, flat cover and print-ready wraparound PDF when generation finishes.",
              "Two properties separate serious pipelines from prompt wrappers. First, durability: generation runs server-side with checkpoints, so a closed laptop, a crashed browser or a restarted worker resumes the job instead of losing it — and a failed book should never be charged. Second, hard quality gates: minimum word and chapter thresholds that block delivery of a thin manuscript rather than shipping it.",
              "The honest limits: you trade away paragraph-level creative control, and niche selection plus final human review remain your job. A pipeline disciplines production; it does not replace judgment about what to publish.",
            ],
            bullets: [
              "Full method automated: research → blueprint → chapters → QA → cover → print PDF.",
              "Durability matters: server-side checkpointed jobs, no lost books, failed runs not charged.",
              "Hard quality gates block thin manuscripts instead of delivering them.",
              "Best for: catalog publishers, multiple niches, per-book economics.",
            ],
          },
          {
            id: "cost-per-book",
            title: "Compare on cost per finished book, not on subscription price",
            body: [
              "Subscription prices mislead because the denominators differ. A $20 chatbot plan plus 30 hours of your time is expensive if your time has any value: at even $20/hour, that first book costs $620. A $30 writing app plus 15 hours is roughly $480 on the same math. A pipeline pricing per finished book makes the unit cost explicit instead of hiding it in your evenings.",
              "Factor in the abandonment rate too. The brutal truth of manual workflows is that most AI book projects die in the middle: the context gets messy, the revision mountain grows, and the half-book joins the drafts folder. A workflow that reliably finishes books has economic value beyond the hours it saves.",
              "Finally, count the deliverables. A manuscript is not a publishable book. Cover design ($50–$300 outsourced), interior formatting ($30–$100 or more hours), and metadata work are real costs that only pipeline-category tools include.",
            ],
            bullets: [
              "Count your hours at a real rate; manual workflows are rarely the cheap option.",
              "Abandonment is the hidden cost — unfinished books cost everything and return nothing.",
              "Manuscript ≠ book: add cover, formatting and metadata to every comparison.",
              "Per-book pricing makes unit economics visible; subscriptions hide them.",
            ],
          },
          {
            id: "how-to-choose",
            title: "A simple decision tree",
            body: [
              "Publishing one book that carries your personal voice? Chatbot or writing app, plus the method guide, plus patience. The hours are part of the point.",
              "Writing fiction with AI as a creative partner? Writing app. The project memory and scene-level control are built for exactly that.",
              "Building a catalog — multiple nonfiction or niche titles, possibly in several languages, where unit economics and reliability decide whether the business works? Pipeline. Evaluate any pipeline (ours included) on four questions: Does it survive interruptions without losing work? Does it refuse to deliver thin books? Does it produce truly KDP-ready files? Does its pricing make your per-book margin calculable in advance?",
            ],
            bullets: [
              "One personal book → chatbot or writing app.",
              "Fiction with creative control → writing app.",
              "Catalog economics → pipeline.",
              "Pipeline checklist: durability, quality gates, KDP-ready outputs, calculable per-book cost.",
            ],
          },
        ],
        checklist: [
          "Decided how many books per year the plan actually requires.",
          "Counted your own hours at a realistic rate in every comparison.",
          "Compared cost per finished book, not subscription price.",
          "Checked durability: what happens to a half-generated book on a crash?",
          "Checked quality gates: can the tool deliver a thin manuscript?",
          "Listed what remains after the tool: cover, formatting, metadata, review.",
          "Verified KDP-readiness of output files before counting them as deliverables.",
          "Kept final human review in the workflow regardless of tool.",
        ],
        faq: [
          {
            question: "Is ChatGPT good enough to write a book?",
            answer:
              "Yes, with a disciplined method: blueprint first, chapter-by-chapter drafting with rolling summaries, then separate revision passes. The model is good enough; the conversation format is the limitation, costing 20–40 hours of manual orchestration per book.",
          },
          {
            question: "What is the difference between an AI writing app and a book pipeline?",
            answer:
              "A writing app helps you write — it stores the project and generates passages you direct. A pipeline produces the book — manuscript, cover and print files — from a niche brief, with quality gates instead of per-paragraph decisions. Apps optimize craft; pipelines optimize throughput and unit economics.",
          },
          {
            question: "How much does it cost to produce a book with AI?",
            answer:
              "Chatbot route: ~$20/month plus 20–40 hours of work, plus $80–$400 outsourced for cover and formatting. Writing app: similar with somewhat fewer hours. Pipeline: a fixed per-book price that includes cover and print-ready files. The cheapest option depends entirely on the value of your time.",
          },
          {
            question: "Do these tools work for languages other than English?",
            answer:
              "Frontier models write well in major languages, but most writing apps optimize UI and prompts for English. If you publish in French or other languages, verify the tool generates the full book — including cover text and metadata — natively in the target language. DraftToDone generates books in English and French.",
          },
          {
            question: "Will Amazon reject books made with these tools?",
            answer:
              "Amazon accepts AI-generated books with disclosure at publishing time. Rejection and removal target quality and policy violations — thin content, misleading metadata, IP issues — regardless of which tool produced the book. Quality gates and human review are your protection.",
          },
        ],
      },
      fr: {
        slug: "meilleurs-outils-ia-pour-ecrire-un-livre",
        title: "Meilleurs outils IA pour écrire un livre en 2026 : chatbots, applications d'écriture et pipelines complets comparés",
        description:
          "Comparaison honnête des trois catégories d'outils IA pour écrire un livre — chatbots généralistes, applications d'écriture IA et pipelines complets — avec coûts, forces, points faibles et critères de choix.",
        keywords: [
          "meilleur logiciel IA pour écrire un livre",
          "outils IA écriture livre",
          "générateur de livre IA",
          "application d'écriture IA",
          "ChatGPT ou logiciel d'écriture",
          "IA auto-édition",
          "logiciel écriture livre 2026",
          "outils publication IA",
        ],
        category: "Outils",
        intro: [
          "Cherchez « logiciel IA pour écrire un livre » et vous obtenez un mur de classements affiliés alignant vingt applications quasi identiques. La réponse honnête est plus simple : il n'existe que trois catégories d'outils, et la bonne dépend du nombre de livres que vous comptez publier et de la part du travail que vous voulez garder.",
          "Ce guide compare les catégories — chatbots généralistes, applications d'écriture IA dédiées, et pipelines de livre de bout en bout — sur ce qui compte vraiment : qualité du texte, cohérence sur un manuscrit entier, coût total par livre terminé, robustesse des longues générations, et ce qui reste sur votre bureau après.",
          "Nous développons DraftToDone, qui appartient à la troisième catégorie. Nous le signalons quand c'est pertinent et gardons la comparaison factuelle : chaque catégorie gagne réellement pour un certain profil d'auteur.",
        ],
        sections: [
          {
            id: "trois-categories",
            title: "Les trois catégories — et pourquoi « le meilleur outil » est la mauvaise question",
            body: [
              "Catégorie un : les chatbots généralistes (ChatGPT, Claude, Gemini). Vous pilotez chaque étape à la main dans une conversation. Catégorie deux : les applications d'écriture IA (éditeurs longue forme avec assistance IA). L'application connaît votre projet, vous co-écrivez scène par scène. Catégorie trois : les pipelines de livre (DraftToDone et équivalents), où vous fournissez la niche et les contraintes, et un flux automatisé produit manuscrit, couverture et fichiers prêts à imprimer.",
              "La question qui détermine votre catégorie n'est pas « quelle IA écrit le mieux » — les modèles de fond se recoupent largement entre les trois. C'est : combien d'heures voulez-vous passer par livre, et sur quelles étapes voulez-vous garder le contrôle créatif ?",
              "Un livre par an comme projet personnel pointe vers les catégories un ou deux. Une stratégie de catalogue — plusieurs titres par mois sur plusieurs niches — n'est viable qu'en catégorie trois, car le goulot d'étranglement cesse d'être l'écriture pour devenir les opérations.",
            ],
            bullets: [
              "Chatbots : manuels, conversationnels, entrée la moins chère.",
              "Applications d'écriture : co-écriture avec mémoire de projet, idéales pour la fiction.",
              "Pipelines : une niche en entrée, un livre prêt pour KDP en sortie.",
              "Les modèles se recoupent ; la vraie différence est le flux de travail et les heures.",
            ],
          },
          {
            id: "chatbots",
            title: "Chatbots généralistes : contrôle maximal, travail maximal",
            body: [
              "Un abonnement chatbot à 20 €/mois peut absolument produire un livre — notre guide de méthode complet montre la boucle exacte. Vous gardez le contrôle créatif total et apprenez ce qu'est un bon prompt, ce qui vous rend meilleur pour évaluer tous les autres outils.",
              "Les coûts se cachent dans le travail et la fragilité. Le contexte glissant se gère à la main : coller les résumés, réétablir les règles de style, re-téléverser le matériel à chaque session. Les longues conversations se dégradent ; les onglets plantent ; les chapitres s'éparpillent. Comptez 20 à 40 heures de travail par livre, dominées par la logistique de copier-coller et la révision.",
              "Le chatbot est le bon choix pour un premier livre, pour les projets très personnels où vous réécrivez la plupart des phrases de toute façon, et pour apprendre la méthode avant de l'automatiser.",
            ],
            bullets: [
              "~20 €/mois, plus vos heures — le vrai coût est 20 à 40 heures par livre.",
              "Contrôle créatif total et apprentissage de la méthode.",
              "Aucune durabilité : contexte, fichiers et avancement restent à votre charge.",
              "Idéal pour : premier livre, projets personnels, apprentissage.",
            ],
          },
          {
            id: "applications",
            title: "Applications d'écriture IA : co-écrire avec une mémoire de projet",
            body: [
              "Les applications dédiées enveloppent le modèle dans un éditeur longue forme : elles stockent personnages, plan et style, et génèrent scène par scène ou section par section. Pour la fiction en particulier, les fiches de personnages cohérentes et la génération au niveau du beat narratif sont réellement utiles.",
              "La contrepartie : vous restez l'opérateur. L'application mémorise le projet, mais vous prenez des centaines de décisions de génération par livre, et tout le travail hors écriture — couverture, mise en page, métadonnées, fichiers de publication — reste en dehors de l'outil. Les abonnements vont de 10 à 50 €/mois selon les crédits de mots.",
              "Les applications d'écriture sont le bon choix pour les romanciers qui veulent l'IA comme collaboratrice plutôt que comme usine, et pour quiconque dont la voix est le produit.",
            ],
            bullets: [
              "Mémoire de projet : plan, personnages et style conservés entre les sessions.",
              "Très fortes pour l'artisanat de la fiction ; contrôle créatif par section.",
              "10–50 €/mois ; couverture, mise en page et métadonnées restent à votre charge.",
              "Idéal pour : romanciers, non-fiction à voix forte, IA-collaboratrice.",
            ],
          },
          {
            id: "pipelines",
            title: "Pipelines de livre : la niche entre, un livre publiable sort",
            body: [
              "Les pipelines automatisent la méthode entière : recherche de niche, plan détaillé, rédaction chapitre par chapitre avec contexte glissant, passes de révision, contrôles qualité, puis création de couverture et fichiers prêts pour KDP. L'unité d'interaction est le livre, pas le paragraphe. DraftToDone est notre implémentation : vous précisez une niche (ou demandez une surprise), choisissez la langue, et récupérez manuscrit, couverture et PDF d'habillage prêt à imprimer en fin de génération.",
              "Deux propriétés séparent les pipelines sérieux des simples habillages de prompt. D'abord la durabilité : la génération tourne côté serveur avec des points de reprise — un ordinateur fermé, un navigateur planté ou un worker redémarré reprennent le travail au lieu de le perdre, et un livre échoué ne doit jamais être facturé. Ensuite les contrôles qualité bloquants : des seuils minimaux de mots et de chapitres qui empêchent la livraison d'un manuscrit maigre.",
              "Les limites honnêtes : vous abandonnez le contrôle créatif au niveau du paragraphe, et le choix de niche comme la relecture humaine finale restent votre travail. Un pipeline discipline la production ; il ne remplace pas le jugement sur ce qu'il faut publier.",
            ],
            bullets: [
              "Méthode complète automatisée : recherche → plan → chapitres → QA → couverture → PDF.",
              "La durabilité compte : génération serveur avec reprises, aucun livre perdu, échec non facturé.",
              "Des contrôles bloquants empêchent la livraison de manuscrits maigres.",
              "Idéal pour : éditeurs de catalogue, multi-niches, économie par livre.",
            ],
          },
          {
            id: "cout-par-livre",
            title: "Comparez le coût par livre terminé, pas le prix de l'abonnement",
            body: [
              "Les prix d'abonnement trompent parce que les dénominateurs diffèrent. Un forfait chatbot à 20 € plus 30 heures de votre temps coûte cher dès que votre temps vaut quelque chose : à 20 €/heure, ce premier livre revient à 620 €. Une application à 30 € plus 15 heures donne environ 480 € au même calcul. Un pipeline facturé au livre terminé rend le coût unitaire explicite au lieu de le cacher dans vos soirées.",
              "Intégrez aussi le taux d'abandon. La vérité brutale des flux manuels : la plupart des projets de livre IA meurent au milieu — le contexte se dégrade, la montagne de révision grossit, et le demi-livre rejoint le dossier des brouillons. Un flux qui termine les livres de façon fiable a une valeur économique au-delà des heures économisées.",
              "Comptez enfin les livrables. Un manuscrit n'est pas un livre publiable. La couverture (50 à 300 € en sous-traitance), la mise en page intérieure (30 à 100 € ou des heures en plus) et le travail de métadonnées sont des coûts réels que seuls les outils de catégorie pipeline incluent.",
            ],
            bullets: [
              "Valorisez vos heures à un taux réel ; le flux manuel est rarement l'option bon marché.",
              "L'abandon est le coût caché — un livre inachevé coûte tout et ne rapporte rien.",
              "Manuscrit ≠ livre : ajoutez couverture, mise en page et métadonnées à chaque comparaison.",
              "Le prix au livre rend l'économie unitaire visible ; l'abonnement la masque.",
            ],
          },
          {
            id: "comment-choisir",
            title: "Un arbre de décision simple",
            body: [
              "Publier un livre qui porte votre voix personnelle ? Chatbot ou application d'écriture, plus le guide de méthode, plus de la patience. Les heures font partie du projet.",
              "Écrire de la fiction avec l'IA comme partenaire créatif ? Application d'écriture. La mémoire de projet et le contrôle par scène sont conçus exactement pour cela.",
              "Construire un catalogue — plusieurs titres de non-fiction ou de niche, éventuellement en plusieurs langues, où l'économie unitaire et la fiabilité décident si l'activité fonctionne ? Pipeline. Évaluez tout pipeline (le nôtre compris) sur quatre questions : survit-il aux interruptions sans perdre le travail ? Refuse-t-il de livrer des livres maigres ? Produit-il des fichiers réellement prêts pour KDP ? Son prix rend-il votre marge par livre calculable à l'avance ?",
            ],
            bullets: [
              "Un livre personnel → chatbot ou application d'écriture.",
              "Fiction avec contrôle créatif → application d'écriture.",
              "Économie de catalogue → pipeline.",
              "Checklist pipeline : durabilité, contrôles qualité, fichiers prêts pour KDP, coût par livre calculable.",
            ],
          },
        ],
        checklist: [
          "Nombre de livres par an réellement requis par le projet décidé.",
          "Vos heures comptées à un taux réaliste dans chaque comparaison.",
          "Coût par livre terminé comparé, pas le prix d'abonnement.",
          "Durabilité vérifiée : que devient un livre à moitié généré en cas de plantage ?",
          "Contrôles qualité vérifiés : l'outil peut-il livrer un manuscrit maigre ?",
          "Liste de ce qui reste après l'outil : couverture, mise en page, métadonnées, relecture.",
          "Conformité KDP des fichiers de sortie vérifiée avant de les compter comme livrables.",
          "Relecture humaine finale conservée dans le flux, quel que soit l'outil.",
        ],
        faq: [
          {
            question: "ChatGPT suffit-il pour écrire un livre ?",
            answer:
              "Oui, avec une méthode disciplinée : plan détaillé d'abord, rédaction chapitre par chapitre avec résumés glissants, puis passes de révision séparées. Le modèle suffit ; c'est le format conversation qui limite, au prix de 20 à 40 heures d'orchestration manuelle par livre.",
          },
          {
            question: "Quelle différence entre une application d'écriture IA et un pipeline de livre ?",
            answer:
              "Une application vous aide à écrire — elle stocke le projet et génère les passages que vous dirigez. Un pipeline produit le livre — manuscrit, couverture et fichiers d'impression — à partir d'un brief de niche, avec des contrôles qualité au lieu de décisions paragraphe par paragraphe. Les applications optimisent l'artisanat ; les pipelines optimisent le débit et l'économie unitaire.",
          },
          {
            question: "Combien coûte la production d'un livre avec l'IA ?",
            answer:
              "Voie chatbot : ~20 €/mois plus 20 à 40 heures de travail, plus 80 à 400 € de sous-traitance pour couverture et mise en page. Application d'écriture : similaire avec un peu moins d'heures. Pipeline : un prix fixe par livre incluant couverture et fichiers d'impression. L'option la moins chère dépend entièrement de la valeur de votre temps.",
          },
          {
            question: "Ces outils fonctionnent-ils en français ?",
            answer:
              "Les modèles de pointe écrivent bien dans les grandes langues, mais la plupart des applications optimisent interface et prompts pour l'anglais. Si vous publiez en français, vérifiez que l'outil génère le livre entier — texte de couverture et métadonnées compris — nativement dans la langue cible. DraftToDone génère des livres en français et en anglais.",
          },
          {
            question: "Amazon rejettera-t-il les livres produits avec ces outils ?",
            answer:
              "Amazon accepte les livres générés par IA avec déclaration au moment de la publication. Les rejets et retraits visent la qualité et les violations de politique — contenu maigre, métadonnées trompeuses, problèmes de propriété intellectuelle — quel que soit l'outil utilisé. Contrôles qualité et relecture humaine sont votre protection.",
          },
        ],
      },
      it: {
        slug: "migliori-strumenti-ia-per-scrivere-libri",
        title: "I migliori strumenti IA per scrivere un libro nel 2026: chatbot, app di scrittura e pipeline complete a confronto",
        description:
          "Un confronto onesto tra le tre categorie di strumenti IA per scrivere libri — chatbot generalisti, app di scrittura IA e pipeline complete — con costi, punti di forza, limiti e criteri di scelta.",
        keywords: [
          "miglior software IA per scrivere un libro",
          "strumenti IA scrittura libri",
          "generatore di libri IA",
          "app di scrittura IA",
          "ChatGPT o software di scrittura",
          "IA self-publishing",
          "software scrittura libri 2026",
          "strumenti pubblicazione IA",
        ],
        category: "Strumenti",
        intro: [
          "Cercate « software IA per scrivere un libro » e ottenete un muro di classifiche affiliate che allineano venti applicazioni quasi identiche. La risposta onesta è più semplice: esistono solo tre categorie di strumenti, e quella giusta dipende da quanti libri intendete pubblicare e da quanta parte del lavoro volete tenere per voi.",
          "Questa guida confronta le categorie — chatbot generalisti, app di scrittura IA dedicate e pipeline di libro end-to-end — su ciò che conta davvero: qualità del testo, coerenza su un intero manoscritto, costo totale per libro finito, robustezza dei lavori lunghi e ciò che resta sulla vostra scrivania dopo.",
          "Noi sviluppiamo DraftToDone, che appartiene alla terza categoria. Lo segnaliamo dove rilevante e manteniamo il confronto fattuale: ogni categoria vince davvero per un certo profilo di autore.",
        ],
        sections: [
          {
            id: "tre-categorie",
            title: "Le tre categorie — e perché « lo strumento migliore » è la domanda sbagliata",
            body: [
              "Categoria uno: i chatbot generalisti (ChatGPT, Claude, Gemini). Pilotate ogni passaggio a mano in una conversazione. Categoria due: le app di scrittura IA (editor a formato lungo con assistenza IA). L'app conosce il vostro progetto, co-scrivete scena per scena. Categoria tre: le pipeline di libro (DraftToDone e simili), dove fornite la nicchia e i vincoli, e un flusso automatizzato produce manoscritto, copertina e file pronti per la stampa.",
              "La domanda che determina la vostra categoria non è « quale IA scrive meglio » — i modelli di fondo si sovrappongono ampiamente tra le tre. È: quante ore volete passare per libro, e su quali passaggi volete mantenere il controllo creativo?",
              "Un libro all'anno come progetto personale punta alle categorie uno o due. Una strategia di catalogo — diversi titoli al mese su più nicchie — è praticabile solo nella categoria tre, perché il collo di bottiglia smette di essere la scrittura e diventa l'operatività.",
            ],
            bullets: [
              "Chatbot: manuali, conversazionali, ingresso più economico.",
              "App di scrittura: co-scrittura con memoria di progetto, ideali per la narrativa.",
              "Pipeline: una nicchia in ingresso, un libro pronto per KDP in uscita.",
              "I modelli si sovrappongono; la vera differenza sono flusso di lavoro e ore.",
            ],
          },
          {
            id: "chatbot",
            title: "Chatbot generalisti: massimo controllo, massimo lavoro",
            body: [
              "Un abbonamento chatbot da 20 €/mese può assolutamente produrre un libro — la nostra guida al metodo completo mostra il ciclo esatto. Mantenete il controllo creativo totale e imparate cos'è un buon prompt, il che vi rende migliori nel valutare ogni altro strumento.",
              "I costi si nascondono nel lavoro e nella fragilità. Il contesto scorrevole si gestisce a mano: incollare i riassunti, ristabilire le regole di stile, ricaricare il materiale a ogni sessione. Le conversazioni lunghe degradano; le schede si bloccano; i capitoli si disperdono. Contate 20-40 ore di lavoro per libro, dominate dalla logistica del copia-incolla e dalla revisione.",
              "Il chatbot è la scelta giusta per un primo libro, per i progetti molto personali in cui riscrivete comunque la maggior parte delle frasi, e per imparare il metodo prima di automatizzarlo.",
            ],
            bullets: [
              "~20 €/mese, più le vostre ore — il costo reale è 20-40 ore per libro.",
              "Controllo creativo totale e apprendimento del metodo.",
              "Nessuna durabilità: contesto, file e avanzamento restano a vostro carico.",
              "Ideale per: primo libro, progetti personali, apprendimento.",
            ],
          },
          {
            id: "app-scrittura",
            title: "App di scrittura IA: co-scrivere con una memoria di progetto",
            body: [
              "Le app dedicate avvolgono il modello in un editor a formato lungo: memorizzano personaggi, scaletta e stile, e generano scena per scena o sezione per sezione. Per la narrativa in particolare, le schede personaggi coerenti e la generazione a livello di beat narrativo sono davvero utili.",
              "Il rovescio: restate voi l'operatore. L'app ricorda il progetto, ma prendete centinaia di decisioni di generazione per libro, e tutto il lavoro extra-scrittura — copertina, impaginazione, metadati, file di pubblicazione — resta fuori dallo strumento. Gli abbonamenti vanno da 10 a 50 €/mese secondo i crediti di parole.",
              "Le app di scrittura sono la scelta giusta per i romanzieri che vogliono l'IA come collaboratrice piuttosto che come fabbrica, e per chiunque la cui voce sia il prodotto.",
            ],
            bullets: [
              "Memoria di progetto: scaletta, personaggi e stile conservati tra le sessioni.",
              "Molto forti per l'artigianato narrativo; controllo creativo per sezione.",
              "10-50 €/mese; copertina, impaginazione e metadati restano a voi.",
              "Ideale per: romanzieri, saggistica con voce forte, IA-collaboratrice.",
            ],
          },
          {
            id: "pipeline",
            title: "Pipeline di libro: entra la nicchia, esce un libro pubblicabile",
            body: [
              "Le pipeline automatizzano l'intero metodo: ricerca di nicchia, piano dettagliato, stesura capitolo per capitolo con contesto scorrevole, passate di revisione, controlli qualità, poi creazione della copertina e file pronti per KDP. L'unità di interazione è il libro, non il paragrafo. DraftToDone è la nostra implementazione: indicate una nicchia (o chiedete una sorpresa), scegliete la lingua, e ritirate manoscritto, copertina e PDF avvolgente pronto per la stampa a fine generazione.",
              "Due proprietà separano le pipeline serie dai semplici involucri di prompt. Primo, la durabilità: la generazione gira lato server con punti di ripresa — un computer chiuso, un browser bloccato o un worker riavviato riprendono il lavoro invece di perderlo, e un libro fallito non deve mai essere addebitato. Secondo, i controlli qualità bloccanti: soglie minime di parole e capitoli che impediscono la consegna di un manoscritto magro.",
              "I limiti onesti: rinunciate al controllo creativo a livello di paragrafo, e la scelta della nicchia come la rilettura umana finale restano compito vostro. Una pipeline disciplina la produzione; non sostituisce il giudizio su cosa pubblicare.",
            ],
            bullets: [
              "Metodo completo automatizzato: ricerca → piano → capitoli → QA → copertina → PDF.",
              "La durabilità conta: generazione server con riprese, nessun libro perso, fallimento non addebitato.",
              "Controlli bloccanti impediscono la consegna di manoscritti magri.",
              "Ideale per: editori di catalogo, multi-nicchia, economia per libro.",
            ],
          },
          {
            id: "costo-per-libro",
            title: "Confrontate il costo per libro finito, non il prezzo dell'abbonamento",
            body: [
              "I prezzi degli abbonamenti ingannano perché i denominatori differiscono. Un piano chatbot da 20 € più 30 ore del vostro tempo costa caro appena il vostro tempo vale qualcosa: a 20 €/ora, quel primo libro costa 620 €. Un'app da 30 € più 15 ore dà circa 480 € con lo stesso calcolo. Una pipeline fatturata al libro finito rende il costo unitario esplicito invece di nasconderlo nelle vostre serate.",
              "Integrate anche il tasso di abbandono. La verità brutale dei flussi manuali: la maggior parte dei progetti di libro IA muore a metà — il contesto si degrada, la montagna di revisione cresce, e il mezzo libro raggiunge la cartella delle bozze. Un flusso che finisce i libri in modo affidabile ha un valore economico oltre le ore risparmiate.",
              "Contate infine i deliverable. Un manoscritto non è un libro pubblicabile. La copertina (50-300 € in outsourcing), l'impaginazione interna (30-100 € o altre ore) e il lavoro sui metadati sono costi reali che solo gli strumenti di categoria pipeline includono.",
            ],
            bullets: [
              "Valorizzate le vostre ore a una tariffa reale; il flusso manuale è raramente l'opzione economica.",
              "L'abbandono è il costo nascosto — un libro incompiuto costa tutto e non rende nulla.",
              "Manoscritto ≠ libro: aggiungete copertina, impaginazione e metadati a ogni confronto.",
              "Il prezzo al libro rende visibile l'economia unitaria; l'abbonamento la maschera.",
            ],
          },
          {
            id: "come-scegliere",
            title: "Un albero decisionale semplice",
            body: [
              "Pubblicare un libro che porta la vostra voce personale? Chatbot o app di scrittura, più la guida al metodo, più pazienza. Le ore fanno parte del progetto.",
              "Scrivere narrativa con l'IA come partner creativo? App di scrittura. La memoria di progetto e il controllo per scena sono fatti esattamente per questo.",
              "Costruire un catalogo — più titoli di saggistica o di nicchia, eventualmente in più lingue, dove economia unitaria e affidabilità decidono se l'attività funziona? Pipeline. Valutate qualsiasi pipeline (la nostra compresa) su quattro domande: sopravvive alle interruzioni senza perdere il lavoro? Rifiuta di consegnare libri magri? Produce file davvero pronti per KDP? Il suo prezzo rende il margine per libro calcolabile in anticipo?",
            ],
            bullets: [
              "Un libro personale → chatbot o app di scrittura.",
              "Narrativa con controllo creativo → app di scrittura.",
              "Economia di catalogo → pipeline.",
              "Checklist pipeline: durabilità, controlli qualità, file pronti per KDP, costo per libro calcolabile.",
            ],
          },
        ],
        checklist: [
          "Numero di libri all'anno realmente richiesto dal progetto deciso.",
          "Le vostre ore contate a una tariffa realistica in ogni confronto.",
          "Costo per libro finito confrontato, non il prezzo dell'abbonamento.",
          "Durabilità verificata: cosa succede a un libro a metà generazione in caso di crash?",
          "Controlli qualità verificati: lo strumento può consegnare un manoscritto magro?",
          "Lista di ciò che resta dopo lo strumento: copertina, impaginazione, metadati, rilettura.",
          "Conformità KDP dei file di output verificata prima di contarli come deliverable.",
          "Rilettura umana finale mantenuta nel flusso, qualunque sia lo strumento.",
        ],
        faq: [
          {
            question: "ChatGPT basta per scrivere un libro?",
            answer:
              "Sì, con un metodo disciplinato: piano dettagliato prima, stesura capitolo per capitolo con riassunti scorrevoli, poi passate di revisione separate. Il modello basta; è il formato conversazione a limitare, al prezzo di 20-40 ore di orchestrazione manuale per libro.",
          },
          {
            question: "Che differenza c'è tra un'app di scrittura IA e una pipeline di libro?",
            answer:
              "Un'app vi aiuta a scrivere — memorizza il progetto e genera i passaggi che dirigete. Una pipeline produce il libro — manoscritto, copertina e file di stampa — da un brief di nicchia, con controlli qualità invece di decisioni paragrafo per paragrafo. Le app ottimizzano l'artigianato; le pipeline ottimizzano la produttività e l'economia unitaria.",
          },
          {
            question: "Quanto costa produrre un libro con l'IA?",
            answer:
              "Via chatbot: ~20 €/mese più 20-40 ore di lavoro, più 80-400 € di outsourcing per copertina e impaginazione. App di scrittura: simile con qualche ora in meno. Pipeline: un prezzo fisso per libro che include copertina e file di stampa. L'opzione più economica dipende interamente dal valore del vostro tempo.",
          },
          {
            question: "Questi strumenti funzionano in italiano?",
            answer:
              "I modelli di frontiera scrivono bene nelle grandi lingue, ma la maggior parte delle app ottimizza interfaccia e prompt per l'inglese. Se pubblicate in italiano, verificate che lo strumento generi l'intero libro — testo di copertina e metadati compresi — nativamente nella lingua di destinazione.",
          },
          {
            question: "Amazon rifiuterà i libri prodotti con questi strumenti?",
            answer:
              "Amazon accetta i libri generati dall'IA con dichiarazione al momento della pubblicazione. Rifiuti e rimozioni colpiscono la qualità e le violazioni delle politiche — contenuto magro, metadati ingannevoli, problemi di proprietà intellettuale — qualunque sia lo strumento usato. Controlli qualità e rilettura umana sono la vostra protezione.",
          },
        ],
      },
      de: {
        slug: "beste-ki-tools-buch-schreiben-vergleich",
        title: "Die besten KI-Tools zum Buchschreiben 2026: Chatbots, Schreib-Apps und komplette Pipelines im Vergleich",
        description:
          "Ein ehrlicher Vergleich der drei Kategorien von KI-Tools zum Buchschreiben — allgemeine Chatbots, KI-Schreib-Apps und End-to-End-Buchpipelines — mit Kosten, Stärken, Schwächen und Auswahlkriterien.",
        keywords: [
          "beste KI Software Buch schreiben",
          "KI Tools Buch schreiben",
          "KI Buchgenerator",
          "KI Schreib-App",
          "ChatGPT oder Schreibsoftware",
          "KI Self-Publishing",
          "Buchschreibsoftware 2026",
          "KI Publishing Tools",
        ],
        category: "Tools",
        intro: [
          "Suchen Sie nach « KI-Software zum Buchschreiben », erhalten Sie eine Wand aus Affiliate-Listen mit zwanzig fast identischen Apps. Die ehrliche Antwort ist einfacher: Es gibt nur drei Kategorien von Werkzeugen, und die richtige hängt davon ab, wie viele Bücher Sie veröffentlichen wollen und wie viel des Workflows Sie selbst besitzen möchten.",
          "Dieser Leitfaden vergleicht die Kategorien — allgemeine Chatbots, dedizierte KI-Schreib-Apps und End-to-End-Buchpipelines — anhand dessen, was wirklich zählt: Textqualität, Konsistenz über ein ganzes Manuskript, Gesamtkosten pro fertigem Buch, Robustheit langer Jobs und was danach auf Ihrem Schreibtisch landet.",
          "Wir entwickeln DraftToDone, das zur dritten Kategorie gehört. Wir sagen es, wo relevant, und halten den Vergleich faktisch: Jede Kategorie gewinnt tatsächlich für einen bestimmten Autorentyp.",
        ],
        sections: [
          {
            id: "drei-kategorien",
            title: "Die drei Kategorien — und warum « das beste Tool » die falsche Frage ist",
            body: [
              "Kategorie eins: allgemeine Chatbots (ChatGPT, Claude, Gemini). Sie steuern jeden Schritt von Hand in einer Konversation. Kategorie zwei: KI-Schreib-Apps (Langform-Editoren mit KI-Unterstützung). Die App kennt Ihr Projekt, Sie schreiben Szene für Szene gemeinsam. Kategorie drei: Buchpipelines (DraftToDone und ähnliche), bei denen Sie Nische und Vorgaben liefern und ein automatisierter Workflow Manuskript, Cover und druckfertige Dateien produziert.",
              "Die Frage, die Ihre Kategorie bestimmt, ist nicht « welche KI schreibt am besten » — die zugrunde liegenden Spitzenmodelle überlappen sich stark über alle drei. Sie lautet: Wie viele Stunden wollen Sie pro Buch aufwenden, und über welche Schritte wollen Sie die kreative Kontrolle behalten?",
              "Ein Buch pro Jahr als persönliches Projekt zeigt auf Kategorie eins oder zwei. Eine Katalogstrategie — mehrere Titel pro Monat über mehrere Nischen — ist nur in Kategorie drei tragfähig, weil der Engpass nicht mehr das Schreiben ist, sondern der Betrieb.",
            ],
            bullets: [
              "Chatbots: manuell, konversationell, günstigster Einstieg.",
              "Schreib-Apps: Co-Writing mit Projektgedächtnis, am besten für Belletristik.",
              "Pipelines: Nische rein, KDP-fertiges Buch raus.",
              "Die Modelle überlappen; der echte Unterschied sind Workflow und Stunden.",
            ],
          },
          {
            id: "chatbots",
            title: "Allgemeine Chatbots: maximale Kontrolle, maximale Arbeit",
            body: [
              "Ein Chatbot-Abo für 20 €/Monat kann absolut ein Buch produzieren — unser Methodenleitfaden zeigt die exakte Schleife. Sie behalten die volle kreative Kontrolle und lernen, was gutes Prompting ist, was Sie besser darin macht, jedes andere Tool zu bewerten.",
              "Die Kosten verstecken sich in Arbeit und Fragilität. Der rollende Kontext muss von Hand verwaltet werden: Zusammenfassungen einfügen, Stilregeln neu etablieren, Material in jeder Sitzung neu hochladen. Lange Chats degradieren; Browser-Tabs stürzen ab; Kapitel verstreuen sich über Konversationen. Rechnen Sie mit 20-40 Arbeitsstunden pro Buch, dominiert von Copy-Paste-Logistik und Überarbeitung.",
              "Chatbots sind die richtige Wahl für ein erstes Buch, für sehr persönliche Projekte, bei denen Sie ohnehin die meisten Sätze umschreiben, und um die Methode zu lernen, bevor man sie automatisiert.",
            ],
            bullets: [
              "~20 €/Monat plus Ihre Stunden — die echten Kosten sind 20-40 Stunden pro Buch.",
              "Volle kreative Kontrolle und Methodenlernen.",
              "Keine Dauerhaftigkeit: Kontext, Dateien und Fortschritt sind Ihre Aufgabe.",
              "Am besten für: erstes Buch, persönliche Projekte, Methodenlernen.",
            ],
          },
          {
            id: "schreib-apps",
            title: "KI-Schreib-Apps: Co-Writing mit Projektgedächtnis",
            body: [
              "Dedizierte Schreib-Apps legen einen Langform-Editor um das Modell: Sie speichern Figuren, Gliederung und Stil und generieren Szene für Szene oder Abschnitt für Abschnitt. Besonders für Belletristik sind konsistente Figurenblätter und Beat-genaue Generierung wirklich nützlich.",
              "Der Kompromiss: Sie bleiben der Operator. Die App merkt sich das Projekt, aber Sie treffen Hunderte Generierungsentscheidungen pro Buch, und die Arbeit jenseits des Schreibens — Cover, Formatierung, Metadaten, Veröffentlichungsdateien — bleibt komplett außerhalb des Tools. Abos liegen je nach Wortkontingent bei 10-50 €/Monat.",
              "Schreib-Apps sind die richtige Wahl für Romanautoren, die KI als Kollaborateurin statt als Fabrik wollen, und für alle, deren Stimme das Produkt ist.",
            ],
            bullets: [
              "Projektgedächtnis: Gliederung, Figuren und Stil über Sitzungen hinweg gespeichert.",
              "Stark fürs Belletristik-Handwerk; kreative Kontrolle pro Abschnitt.",
              "10-50 €/Monat; Cover, Formatierung und Metadaten bleiben bei Ihnen.",
              "Am besten für: Romanautoren, stimmgetriebene Sachbücher, KI-als-Kollaborateur.",
            ],
          },
          {
            id: "pipelines",
            title: "Buchpipelines: die Nische geht rein, ein veröffentlichbares Buch kommt raus",
            body: [
              "Pipelines automatisieren die ganze Methode: Nischenrecherche, Blueprint, Kapitelentwurf mit rollendem Kontext, Überarbeitungsdurchgänge, Qualitätskontrollen, dann Coverdesign und KDP-fertige Dateien. Die Interaktionseinheit ist das Buch, nicht der Absatz. DraftToDone ist unsere Implementierung: Sie geben eine Nische an (oder lassen sich überraschen), wählen die Sprache und holen am Ende Manuskript, Cover und druckfertiges Umschlag-PDF ab.",
              "Zwei Eigenschaften trennen ernsthafte Pipelines von Prompt-Hüllen. Erstens die Dauerhaftigkeit: Die Generierung läuft serverseitig mit Checkpoints — ein zugeklappter Laptop, ein abgestürzter Browser oder ein neu gestarteter Worker setzen den Job fort, statt ihn zu verlieren, und ein gescheitertes Buch darf nie berechnet werden. Zweitens harte Qualitätskontrollen: Mindestschwellen für Wörter und Kapitel, die die Lieferung eines dünnen Manuskripts blockieren.",
              "Die ehrlichen Grenzen: Sie geben die kreative Kontrolle auf Absatzebene auf, und Nischenwahl plus finale menschliche Durchsicht bleiben Ihre Aufgabe. Eine Pipeline diszipliniert die Produktion; sie ersetzt nicht das Urteil darüber, was veröffentlicht werden soll.",
            ],
            bullets: [
              "Komplette Methode automatisiert: Recherche → Blueprint → Kapitel → QA → Cover → Druck-PDF.",
              "Dauerhaftigkeit zählt: serverseitige Jobs mit Checkpoints, keine verlorenen Bücher, Fehlschläge nicht berechnet.",
              "Harte Qualitätskontrollen blockieren dünne Manuskripte, statt sie zu liefern.",
              "Am besten für: Katalogverleger, mehrere Nischen, Pro-Buch-Ökonomie.",
            ],
          },
          {
            id: "kosten-pro-buch",
            title: "Vergleichen Sie Kosten pro fertigem Buch, nicht Abopreise",
            body: [
              "Abopreise täuschen, weil die Nenner verschieden sind. Ein 20-€-Chatbot-Plan plus 30 Stunden Ihrer Zeit ist teuer, sobald Ihre Zeit etwas wert ist: Selbst bei 20 €/Stunde kostet das erste Buch 620 €. Eine 30-€-App plus 15 Stunden ergibt nach derselben Rechnung etwa 480 €. Eine Pipeline mit Preis pro fertigem Buch macht die Stückkosten explizit, statt sie in Ihren Abenden zu verstecken.",
              "Rechnen Sie auch die Abbruchquote ein. Die brutale Wahrheit manueller Workflows: Die meisten KI-Buchprojekte sterben in der Mitte — der Kontext wird chaotisch, der Überarbeitungsberg wächst, und das halbe Buch landet im Entwurfsordner. Ein Workflow, der Bücher zuverlässig fertigstellt, hat einen ökonomischen Wert über die gesparten Stunden hinaus.",
              "Zählen Sie schließlich die Liefergegenstände. Ein Manuskript ist kein veröffentlichbares Buch. Coverdesign (50-300 € extern), Innenlayout (30-100 € oder weitere Stunden) und Metadatenarbeit sind reale Kosten, die nur Tools der Pipeline-Kategorie einschließen.",
            ],
            bullets: [
              "Ihre Stunden zu einem realen Satz bewerten; manuelle Workflows sind selten die günstige Option.",
              "Abbruch ist der versteckte Kostenfaktor — unfertige Bücher kosten alles und bringen nichts.",
              "Manuskript ≠ Buch: Cover, Formatierung und Metadaten in jeden Vergleich einrechnen.",
              "Pro-Buch-Preise machen die Stückökonomie sichtbar; Abos verstecken sie.",
            ],
          },
          {
            id: "wie-waehlen",
            title: "Ein einfacher Entscheidungsbaum",
            body: [
              "Ein Buch veröffentlichen, das Ihre persönliche Stimme trägt? Chatbot oder Schreib-App, plus Methodenleitfaden, plus Geduld. Die Stunden gehören zum Projekt.",
              "Belletristik mit KI als kreativem Partner schreiben? Schreib-App. Projektgedächtnis und Szenenkontrolle sind genau dafür gebaut.",
              "Einen Katalog aufbauen — mehrere Sach- oder Nischentitel, eventuell in mehreren Sprachen, wo Stückökonomie und Zuverlässigkeit entscheiden, ob das Geschäft funktioniert? Pipeline. Bewerten Sie jede Pipeline (unsere eingeschlossen) anhand von vier Fragen: Übersteht sie Unterbrechungen ohne Arbeitsverlust? Verweigert sie die Lieferung dünner Bücher? Produziert sie wirklich KDP-fertige Dateien? Macht ihr Preis Ihre Marge pro Buch im Voraus kalkulierbar?",
            ],
            bullets: [
              "Ein persönliches Buch → Chatbot oder Schreib-App.",
              "Belletristik mit kreativer Kontrolle → Schreib-App.",
              "Katalogökonomie → Pipeline.",
              "Pipeline-Checkliste: Dauerhaftigkeit, Qualitätskontrollen, KDP-fertige Dateien, kalkulierbare Kosten pro Buch.",
            ],
          },
        ],
        checklist: [
          "Entschieden, wie viele Bücher pro Jahr der Plan wirklich erfordert.",
          "Eigene Stunden in jedem Vergleich zu einem realistischen Satz gezählt.",
          "Kosten pro fertigem Buch verglichen, nicht Abopreise.",
          "Dauerhaftigkeit geprüft: Was passiert mit einem halb generierten Buch bei einem Absturz?",
          "Qualitätskontrollen geprüft: Kann das Tool ein dünnes Manuskript liefern?",
          "Liste dessen, was nach dem Tool übrig bleibt: Cover, Formatierung, Metadaten, Durchsicht.",
          "KDP-Tauglichkeit der Ausgabedateien geprüft, bevor sie als Liefergegenstand zählen.",
          "Finale menschliche Durchsicht im Workflow behalten, egal welches Tool.",
        ],
        faq: [
          {
            question: "Reicht ChatGPT, um ein Buch zu schreiben?",
            answer:
              "Ja, mit disziplinierter Methode: erst Blueprint, dann Kapitel für Kapitel mit rollenden Zusammenfassungen, dann getrennte Überarbeitungsdurchgänge. Das Modell reicht; das Konversationsformat ist die Grenze — zum Preis von 20-40 Stunden manueller Orchestrierung pro Buch.",
          },
          {
            question: "Was ist der Unterschied zwischen einer KI-Schreib-App und einer Buchpipeline?",
            answer:
              "Eine App hilft Ihnen beim Schreiben — sie speichert das Projekt und generiert Passagen, die Sie dirigieren. Eine Pipeline produziert das Buch — Manuskript, Cover und Druckdateien — aus einem Nischen-Briefing, mit Qualitätskontrollen statt Absatz-für-Absatz-Entscheidungen. Apps optimieren das Handwerk; Pipelines optimieren Durchsatz und Stückökonomie.",
          },
          {
            question: "Was kostet die Produktion eines Buchs mit KI?",
            answer:
              "Chatbot-Weg: ~20 €/Monat plus 20-40 Arbeitsstunden, plus 80-400 € extern für Cover und Formatierung. Schreib-App: ähnlich mit etwas weniger Stunden. Pipeline: ein fester Preis pro Buch inklusive Cover und Druckdateien. Die günstigste Option hängt vollständig vom Wert Ihrer Zeit ab.",
          },
          {
            question: "Funktionieren diese Tools auf Deutsch?",
            answer:
              "Spitzenmodelle schreiben gut in den großen Sprachen, aber die meisten Schreib-Apps optimieren Oberfläche und Prompts für Englisch. Wenn Sie auf Deutsch veröffentlichen, prüfen Sie, ob das Tool das ganze Buch — einschließlich Covertext und Metadaten — nativ in der Zielsprache generiert.",
          },
          {
            question: "Wird Amazon Bücher aus diesen Tools ablehnen?",
            answer:
              "Amazon akzeptiert KI-generierte Bücher mit Offenlegung bei der Veröffentlichung. Ablehnungen und Entfernungen zielen auf Qualität und Richtlinienverstöße — dünner Inhalt, irreführende Metadaten, IP-Probleme — unabhängig vom Tool. Qualitätskontrollen und menschliche Durchsicht sind Ihr Schutz.",
          },
        ],
      },
    },
  },
  {
    key: "kdp-ai-content-policy",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 12,
    accent: {
      start: "#f3f0ff",
      middle: "#d8ccff",
      end: "#ffd9e8",
    },
    translations: {
      en: {
        slug: "amazon-kdp-ai-content-policy-disclosure",
        title: "Amazon KDP's AI content policy explained: what to disclose, what's allowed and what gets books removed",
        description:
          "A clear guide to Amazon KDP's rules for AI-generated and AI-assisted books: the disclosure question, the difference that decides it, volume limits, quality enforcement and how to publish AI books safely.",
        keywords: [
          "Amazon KDP AI content policy",
          "KDP AI disclosure",
          "AI generated books Amazon rules",
          "KDP AI-assisted vs AI-generated",
          "publish AI book on Amazon",
          "KDP content guidelines AI",
          "Amazon AI book removal",
        ],
        category: "Compliance",
        intro: [
          "Amazon decided the AI-books question years ago: AI-generated content is allowed on KDP. What trips publishers up is not a ban — it is the disclosure rules, the quality bar, and a handful of behaviors that get accounts, not just books, removed.",
          "The policy hinges on one distinction — AI-generated versus AI-assisted — and answering it wrongly in either direction creates risk: failing to disclose generated content violates the content guidelines you agreed to, while the rest of the policy is enforced through Amazon's ordinary quality and misleading-content rules.",
          "This guide walks through the distinction, the publishing-flow questions, the volume limits, what actually triggers removals, and a compliance checklist you can run before every upload. It reflects the policy as of mid-2026; always check KDP's current content guidelines, which Amazon updates without much announcement.",
        ],
        sections: [
          {
            id: "generated-vs-assisted",
            title: "The distinction that decides everything: AI-generated vs AI-assisted",
            body: [
              "Amazon's definitions are functional. Content is AI-generated when an AI tool actually created the text, images or translations — even if you edited them substantially afterwards. Content is AI-assisted when you created the content yourself and used AI to edit, refine, error-check or otherwise improve it.",
              "The line is about origin, not effort. A chapter drafted by a model and then heavily rewritten by you is still AI-generated under Amazon's definition, because the tool produced the initial creation. A chapter you wrote and asked a model to tighten is AI-assisted.",
              "Consequence: a book produced with any drafting pipeline — chatbot loops, scripts, or a service like DraftToDone — contains AI-generated content and must be declared as such. Books where AI only edited your own prose require no disclosure.",
            ],
            bullets: [
              "AI-generated: the tool created it — text, images or translations — even if you edited heavily after.",
              "AI-assisted: you created it; AI refined it. No disclosure required.",
              "Origin decides, not the amount of post-editing.",
              "Pipeline-drafted books are AI-generated by definition: disclose them.",
            ],
          },
          {
            id: "disclosure-flow",
            title: "How disclosure actually works in the publishing flow",
            body: [
              "During title setup, KDP asks whether your book contains AI-generated content. If yes, you specify which elements — text, images and/or translations — via short follow-up questions about the extent of AI use and editing.",
              "The disclosure is made to Amazon, not to readers: as of mid-2026, Amazon does not print an AI label on your product page. Fear of a visible badge is not a reason to answer dishonestly.",
              "Answer accurately and move on. The disclosure itself does not throttle your book's visibility in any way Amazon has documented; undisclosed AI content that Amazon later identifies is the scenario that creates account-level trouble, because it compounds a quality question with a dishonesty question.",
            ],
            bullets: [
              "Disclosure happens per-title during setup: text, images, translations.",
              "It informs Amazon; no public AI badge appears on the listing (as of mid-2026).",
              "Accurate disclosure has no documented ranking penalty.",
              "Undisclosed AI content discovered later is treated as a guideline violation.",
            ],
          },
          {
            id: "quality-enforcement",
            title: "What actually gets AI books removed",
            body: [
              "Removals overwhelmingly target quality and deception, not AI itself. The recurring patterns: thin or repetitive content that does not deliver the listing's promise, misleading titles and metadata (keyword-stuffed titles, fake series), summaries or companions of other authors' books presented confusingly, duplicate and near-duplicate catalog spam, and books that infringe trademarks or copy living authors' branding.",
              "Amazon also enforces a volume limit — currently three new titles per day per account — introduced explicitly in response to AI-fueled flooding. Catalog strategies built on dozens of near-identical titles were already dead before that limit; it merely formalized the grave.",
              "Account suspension is the real risk to respect. Individual book blocks are recoverable; a terminated KDP account loses every title and its accumulated royalties pipeline. The behaviors above, repeated, are what escalate from book-level to account-level enforcement.",
            ],
            bullets: [
              "Enforcement targets thin content, misleading metadata, duplicates and IP issues — not AI per se.",
              "Volume limit: three new titles per day per account.",
              "Book blocks are recoverable; account termination is the existential risk.",
              "Repeated violations escalate from title-level to account-level.",
            ],
          },
          {
            id: "ip-responsibility",
            title: "You own the compliance, including what the model did",
            body: [
              "KDP's guidelines make you responsible for verifying that all content — AI-generated included — complies with content policy, including intellectual property. 'The model produced it' is not a defense Amazon recognizes.",
              "Practical exposure points: AI text that reproduces recognizable passages, AI covers imitating a bestselling book's trade dress, pen names confusable with real authors, and factual errors in health, finance or legal topics where wrong content causes real harm. Each is checkable in minutes before upload.",
              "Treat verification as a publishing step, not an afterthought: search distinctive sentences for matches, reverse-search the cover, search the pen name against existing authors, and fact-check every actionable claim in sensitive niches.",
            ],
            bullets: [
              "You are responsible for IP and accuracy of AI output — fully.",
              "Check text passages, cover similarity, pen-name collisions and sensitive-topic facts.",
              "Health, finance and legal niches deserve a stricter verification pass.",
              "Minutes of checking before upload prevents the expensive scenarios.",
            ],
          },
          {
            id: "safe-workflow",
            title: "A compliant AI publishing workflow",
            body: [
              "Build disclosure into the pipeline instead of remembering it at upload time. Tag every book at creation: which elements are AI-generated, which are AI-assisted, which are human. The KDP questions then take ten seconds and zero judgment calls.",
              "Pair disclosure with quality gates. Compliance and quality enforcement converge in practice: a book that passes hard thresholds — real word count, real structure, verified facts, honest metadata — is simultaneously the book that survives Amazon's quality review. DraftToDone bakes both in: generation refuses to deliver under-threshold manuscripts, and the app reminds you of the KDP disclosure step for every generated book.",
              "Document your process. If Amazon ever questions a title, a short record — tools used, editing performed, verification done — turns a stressful exchange into a routine one.",
            ],
            bullets: [
              "Tag AI-generated vs AI-assisted at creation time, per element.",
              "Quality gates double as compliance protection.",
              "Keep a one-paragraph process record per title.",
              "Answer KDP's questions from your records, not from memory.",
            ],
          },
        ],
        checklist: [
          "Classified the book honestly: AI-generated vs AI-assisted, per element (text, images, translation).",
          "KDP disclosure questions answered accurately during title setup.",
          "Distinctive passages spot-checked for reproduced content.",
          "Cover reverse-searched against existing books.",
          "Pen name checked against real authors and trademarks.",
          "Sensitive-niche claims (health, finance, legal) fact-checked.",
          "Metadata honest: no keyword stuffing, no fake series, no misleading claims.",
          "Within the three-titles-per-day account limit.",
          "Process record kept for the title.",
        ],
        faq: [
          {
            question: "Does Amazon ban AI-written books?",
            answer:
              "No. AI-generated content is explicitly allowed on KDP. Amazon requires disclosure during publishing setup and holds you to the same quality, IP and content rules as any other book.",
          },
          {
            question: "Will readers see that I disclosed AI content?",
            answer:
              "As of mid-2026, no. The disclosure informs Amazon; product pages carry no AI label. Policies evolve, so verify against KDP's current guidelines when you publish.",
          },
          {
            question: "If I heavily edit AI-drafted text, does it become AI-assisted?",
            answer:
              "No. Amazon's definition turns on origin: content the tool created remains AI-generated regardless of how much you edit it afterwards. AI-assisted covers only content you created and AI refined.",
          },
          {
            question: "Does disclosing AI content hurt sales or ranking?",
            answer:
              "Amazon has documented no ranking effect from the disclosure, and no badge appears to shoppers. The factors that hurt AI books are quality factors — thin content and bad reviews — not the disclosure checkbox.",
          },
          {
            question: "How many AI books can I publish per day?",
            answer:
              "KDP currently limits all accounts to three new titles per day, a cap introduced amid the rise of AI-generated volume. Sustainable catalogs publish well under that pace with differentiated, quality-gated titles.",
          },
        ],
      },
      fr: {
        slug: "politique-ia-amazon-kdp-declaration",
        title: "La politique d'Amazon KDP sur le contenu IA expliquée : que déclarer, ce qui est permis et ce qui fait retirer un livre",
        description:
          "Guide clair des règles Amazon KDP pour les livres générés ou assistés par IA : la question de la déclaration, la distinction qui décide tout, les limites de volume, les motifs réels de retrait et un flux de publication conforme.",
        keywords: [
          "politique IA Amazon KDP",
          "déclaration contenu IA KDP",
          "livres générés par IA règles Amazon",
          "IA générée ou assistée KDP",
          "publier livre IA sur Amazon",
          "règles contenu KDP intelligence artificielle",
          "retrait livre IA Amazon",
        ],
        category: "Conformité",
        intro: [
          "Amazon a tranché la question des livres IA depuis des années : le contenu généré par IA est autorisé sur KDP. Ce qui piège les éditeurs n'est pas une interdiction — ce sont les règles de déclaration, le niveau de qualité exigé, et une poignée de comportements qui font supprimer des comptes, pas seulement des livres.",
          "La politique repose sur une distinction unique — généré par IA contre assisté par IA — et se tromper dans un sens comme dans l'autre crée un risque : ne pas déclarer un contenu généré viole les règles que vous avez acceptées, tandis que le reste de la politique s'applique via les règles ordinaires d'Amazon sur la qualité et le contenu trompeur.",
          "Ce guide détaille la distinction, les questions du parcours de publication, les limites de volume, ce qui déclenche réellement les retraits, et une checklist de conformité à dérouler avant chaque mise en ligne. Il reflète la politique à la mi-2026 ; vérifiez toujours les règles KDP en vigueur, qu'Amazon met à jour sans grande annonce.",
        ],
        sections: [
          {
            id: "genere-ou-assiste",
            title: "La distinction qui décide tout : généré par IA ou assisté par IA",
            body: [
              "Les définitions d'Amazon sont fonctionnelles. Un contenu est généré par IA quand un outil d'IA a réellement créé le texte, les images ou les traductions — même si vous les avez substantiellement retravaillés ensuite. Un contenu est assisté par IA quand vous l'avez créé vous-même et utilisé l'IA pour le corriger, l'affiner ou l'améliorer.",
              "La ligne porte sur l'origine, pas sur l'effort. Un chapitre rédigé par un modèle puis profondément réécrit par vous reste généré par IA au sens d'Amazon, car l'outil a produit la création initiale. Un chapitre que vous avez écrit et fait resserrer par un modèle est assisté par IA.",
              "Conséquence : un livre produit avec n'importe quel pipeline de rédaction — boucles de chatbot, scripts, ou un service comme DraftToDone — contient du contenu généré par IA et doit être déclaré comme tel. Les livres où l'IA n'a fait que retoucher votre propre prose n'exigent aucune déclaration.",
            ],
            bullets: [
              "Généré par IA : l'outil l'a créé — texte, images ou traductions — même fortement édité ensuite.",
              "Assisté par IA : vous l'avez créé ; l'IA l'a affiné. Aucune déclaration requise.",
              "L'origine décide, pas la quantité de retravail.",
              "Les livres issus de pipelines sont par définition générés par IA : déclarez-les.",
            ],
          },
          {
            id: "parcours-declaration",
            title: "Comment la déclaration fonctionne concrètement",
            body: [
              "Lors de la création du titre, KDP demande si votre livre contient du contenu généré par IA. Si oui, vous précisez quels éléments — texte, images et/ou traductions — via de courtes questions sur l'étendue de l'usage de l'IA et de votre édition.",
              "La déclaration s'adresse à Amazon, pas aux lecteurs : à la mi-2026, Amazon n'affiche aucun label IA sur la fiche produit. La peur d'un badge visible n'est pas une raison de répondre malhonnêtement.",
              "Répondez exactement et passez à la suite. La déclaration en elle-même ne réduit pas la visibilité du livre d'aucune manière documentée par Amazon ; c'est le contenu IA non déclaré découvert plus tard qui crée des ennuis au niveau du compte, car il ajoute une question d'honnêteté à une question de qualité.",
            ],
            bullets: [
              "Déclaration par titre, à la mise en ligne : texte, images, traductions.",
              "Elle informe Amazon ; aucun badge IA public sur la fiche (à la mi-2026).",
              "Aucune pénalité de classement documentée pour une déclaration exacte.",
              "Le contenu IA non déclaré découvert ensuite est traité comme une violation des règles.",
            ],
          },
          {
            id: "motifs-retrait",
            title: "Ce qui fait réellement retirer les livres IA",
            body: [
              "Les retraits visent massivement la qualité et la tromperie, pas l'IA en soi. Les schémas récurrents : contenu maigre ou répétitif qui ne tient pas la promesse de la fiche, titres et métadonnées trompeurs (titres bourrés de mots-clés, fausses séries), résumés ou « companions » de livres d'autres auteurs présentés de façon confuse, spam de catalogues en quasi-doublons, et livres qui violent des marques ou copient l'image d'auteurs vivants.",
              "Amazon applique aussi une limite de volume — actuellement trois nouveaux titres par jour et par compte — introduite explicitement en réponse au déferlement de contenu IA. Les stratégies de catalogue fondées sur des dizaines de titres quasi identiques étaient déjà mortes avant cette limite ; elle n'a fait qu'officialiser leur enterrement.",
              "La suspension de compte est le vrai risque à respecter. Un blocage de livre se récupère ; un compte KDP résilié perd tous ses titres et son flux de redevances. Ce sont les comportements ci-dessus, répétés, qui font passer la sanction du niveau du titre au niveau du compte.",
            ],
            bullets: [
              "La sanction vise contenu maigre, métadonnées trompeuses, doublons et propriété intellectuelle — pas l'IA en soi.",
              "Limite de volume : trois nouveaux titres par jour et par compte.",
              "Un blocage de livre se récupère ; la résiliation du compte est le risque existentiel.",
              "Les violations répétées montent du titre vers le compte.",
            ],
          },
          {
            id: "responsabilite-pi",
            title: "La conformité vous appartient, y compris ce que le modèle a fait",
            body: [
              "Les règles KDP vous rendent responsable de vérifier que tout le contenu — généré par IA compris — respecte la politique de contenu, propriété intellectuelle incluse. « C'est le modèle qui l'a produit » n'est pas une défense reconnue par Amazon.",
              "Points d'exposition concrets : texte IA reproduisant des passages reconnaissables, couvertures IA imitant l'habillage d'un best-seller, noms de plume confondables avec de vrais auteurs, et erreurs factuelles en santé, finance ou droit où un contenu faux cause un préjudice réel. Chacun se vérifie en quelques minutes avant la mise en ligne.",
              "Faites de la vérification une étape de publication, pas une pensée après coup : cherchez des phrases distinctives du texte, faites une recherche d'image inversée sur la couverture, vérifiez le nom de plume contre les auteurs existants, et contrôlez chaque affirmation actionnable dans les niches sensibles.",
            ],
            bullets: [
              "Vous êtes pleinement responsable de la propriété intellectuelle et de l'exactitude du contenu IA.",
              "Vérifiez passages de texte, similarité de couverture, collisions de pseudonyme et faits sensibles.",
              "Santé, finance et droit méritent une passe de vérification renforcée.",
              "Quelques minutes de contrôle avant mise en ligne évitent les scénarios coûteux.",
            ],
          },
          {
            id: "flux-conforme",
            title: "Un flux de publication IA conforme",
            body: [
              "Intégrez la déclaration au pipeline au lieu de vous en souvenir au moment de la mise en ligne. Étiquetez chaque livre dès la création : quels éléments sont générés par IA, lesquels sont assistés, lesquels sont humains. Les questions KDP prennent alors dix secondes, sans aucun arbitrage.",
              "Associez déclaration et contrôles qualité. Conformité et exigence de qualité convergent en pratique : un livre qui franchit des seuils stricts — vrai nombre de mots, vraie structure, faits vérifiés, métadonnées honnêtes — est aussi celui qui survit à l'examen qualité d'Amazon. DraftToDone intègre les deux : la génération refuse de livrer un manuscrit sous les seuils, et l'application rappelle l'étape de déclaration KDP pour chaque livre généré.",
              "Documentez votre processus. Si Amazon questionne un jour un titre, un court dossier — outils utilisés, édition réalisée, vérifications faites — transforme un échange stressant en formalité.",
            ],
            bullets: [
              "Étiquetez généré/assisté à la création, élément par élément.",
              "Les contrôles qualité servent aussi de protection de conformité.",
              "Gardez une trace d'une paragraphe par titre.",
              "Répondez aux questions KDP depuis vos notes, pas de mémoire.",
            ],
          },
        ],
        checklist: [
          "Livre classé honnêtement : généré ou assisté par IA, par élément (texte, images, traduction).",
          "Questions de déclaration KDP renseignées exactement à la création du titre.",
          "Passages distinctifs vérifiés contre du contenu reproduit.",
          "Recherche d'image inversée effectuée sur la couverture.",
          "Nom de plume vérifié contre auteurs réels et marques déposées.",
          "Affirmations des niches sensibles (santé, finance, droit) vérifiées.",
          "Métadonnées honnêtes : pas de bourrage de mots-clés, pas de fausse série, pas de promesse trompeuse.",
          "Limite des trois titres par jour respectée.",
          "Trace écrite du processus conservée pour le titre.",
        ],
        faq: [
          {
            question: "Amazon interdit-il les livres écrits par IA ?",
            answer:
              "Non. Le contenu généré par IA est explicitement autorisé sur KDP. Amazon exige une déclaration lors de la publication et applique au livre les mêmes règles de qualité, de propriété intellectuelle et de contenu qu'à tout autre titre.",
          },
          {
            question: "Les lecteurs verront-ils que j'ai déclaré du contenu IA ?",
            answer:
              "À la mi-2026, non. La déclaration informe Amazon ; la fiche produit ne porte aucun label IA. Les politiques évoluent : vérifiez les règles KDP en vigueur au moment de publier.",
          },
          {
            question: "Si je réécris fortement un texte rédigé par l'IA, devient-il « assisté par IA » ?",
            answer:
              "Non. La définition d'Amazon repose sur l'origine : un contenu créé par l'outil reste généré par IA, quel que soit votre travail d'édition ensuite. « Assisté par IA » couvre uniquement le contenu que vous avez créé et que l'IA a affiné.",
          },
          {
            question: "Déclarer du contenu IA nuit-il aux ventes ou au classement ?",
            answer:
              "Amazon n'a documenté aucun effet de classement lié à la déclaration, et aucun badge n'apparaît pour les acheteurs. Ce qui nuit aux livres IA, ce sont les facteurs de qualité — contenu maigre et mauvais avis — pas la case de déclaration.",
          },
          {
            question: "Combien de livres IA puis-je publier par jour ?",
            answer:
              "KDP limite actuellement tous les comptes à trois nouveaux titres par jour, plafond introduit face à la montée du volume généré par IA. Un catalogue durable publie bien en dessous de ce rythme, avec des titres différenciés et passés au contrôle qualité.",
          },
        ],
      },
      it: {
        slug: "politica-contenuti-ia-amazon-kdp-dichiarazione",
        title: "La politica di Amazon KDP sui contenuti IA spiegata: cosa dichiarare, cosa è permesso e cosa fa rimuovere un libro",
        description:
          "Una guida chiara alle regole di Amazon KDP per i libri generati o assistiti dall'IA: la questione della dichiarazione, la distinzione che decide tutto, i limiti di volume, i veri motivi di rimozione e un flusso di pubblicazione conforme.",
        keywords: [
          "politica IA Amazon KDP",
          "dichiarazione contenuti IA KDP",
          "libri generati da IA regole Amazon",
          "IA generata o assistita KDP",
          "pubblicare libro IA su Amazon",
          "linee guida contenuti KDP intelligenza artificiale",
          "rimozione libro IA Amazon",
        ],
        category: "Conformità",
        intro: [
          "Amazon ha deciso la questione dei libri IA anni fa: il contenuto generato dall'IA è permesso su KDP. Ciò che inciampa gli editori non è un divieto — sono le regole di dichiarazione, l'asticella di qualità e una manciata di comportamenti che fanno chiudere account, non solo libri.",
          "La politica ruota attorno a una sola distinzione — generato dall'IA contro assistito dall'IA — e sbagliarla in entrambe le direzioni crea rischio: non dichiarare un contenuto generato viola le regole che avete accettato, mentre il resto della politica si applica tramite le regole ordinarie di Amazon su qualità e contenuto ingannevole.",
          "Questa guida percorre la distinzione, le domande del flusso di pubblicazione, i limiti di volume, ciò che innesca davvero le rimozioni, e una checklist di conformità da eseguire prima di ogni caricamento. Riflette la politica a metà 2026; verificate sempre le linee guida KDP in vigore, che Amazon aggiorna senza grandi annunci.",
        ],
        sections: [
          {
            id: "generato-o-assistito",
            title: "La distinzione che decide tutto: generato dall'IA o assistito dall'IA",
            body: [
              "Le definizioni di Amazon sono funzionali. Un contenuto è generato dall'IA quando uno strumento di IA ha effettivamente creato il testo, le immagini o le traduzioni — anche se le avete poi rielaborate in modo sostanziale. Un contenuto è assistito dall'IA quando lo avete creato voi e avete usato l'IA per correggerlo, rifinirlo o migliorarlo.",
              "La linea riguarda l'origine, non lo sforzo. Un capitolo scritto da un modello e poi profondamente riscritto da voi resta generato dall'IA secondo Amazon, perché lo strumento ha prodotto la creazione iniziale. Un capitolo che avete scritto voi e fatto stringere da un modello è assistito dall'IA.",
              "Conseguenza: un libro prodotto con qualsiasi pipeline di stesura — cicli di chatbot, script, o un servizio come DraftToDone — contiene contenuto generato dall'IA e va dichiarato come tale. I libri in cui l'IA ha solo ritoccato la vostra prosa non richiedono alcuna dichiarazione.",
            ],
            bullets: [
              "Generato dall'IA: lo strumento l'ha creato — testo, immagini o traduzioni — anche se molto editato dopo.",
              "Assistito dall'IA: l'avete creato voi; l'IA l'ha rifinito. Nessuna dichiarazione richiesta.",
              "Decide l'origine, non la quantità di rilavorazione.",
              "I libri da pipeline sono per definizione generati dall'IA: dichiarateli.",
            ],
          },
          {
            id: "flusso-dichiarazione",
            title: "Come funziona concretamente la dichiarazione",
            body: [
              "Alla creazione del titolo, KDP chiede se il libro contiene contenuto generato dall'IA. Se sì, precisate quali elementi — testo, immagini e/o traduzioni — tramite brevi domande sull'estensione dell'uso dell'IA e del vostro editing.",
              "La dichiarazione è rivolta ad Amazon, non ai lettori: a metà 2026, Amazon non mostra alcuna etichetta IA sulla scheda prodotto. La paura di un badge visibile non è una ragione per rispondere in modo disonesto.",
              "Rispondete con esattezza e andate avanti. La dichiarazione in sé non riduce la visibilità del libro in alcun modo documentato da Amazon; è il contenuto IA non dichiarato scoperto in seguito a creare problemi a livello di account, perché aggiunge una questione di onestà a una questione di qualità.",
            ],
            bullets: [
              "Dichiarazione per titolo, alla pubblicazione: testo, immagini, traduzioni.",
              "Informa Amazon; nessun badge IA pubblico sulla scheda (a metà 2026).",
              "Nessuna penalità di posizionamento documentata per una dichiarazione esatta.",
              "Il contenuto IA non dichiarato scoperto dopo è trattato come violazione delle regole.",
            ],
          },
          {
            id: "motivi-rimozione",
            title: "Cosa fa davvero rimuovere i libri IA",
            body: [
              "Le rimozioni colpiscono in massa qualità e inganno, non l'IA in sé. Gli schemi ricorrenti: contenuto magro o ripetitivo che non mantiene la promessa della scheda, titoli e metadati ingannevoli (titoli imbottiti di parole chiave, false serie), riassunti o « companion » di libri altrui presentati in modo confuso, spam di cataloghi quasi-duplicati, e libri che violano marchi o copiano l'immagine di autori viventi.",
              "Amazon applica anche un limite di volume — attualmente tre nuovi titoli al giorno per account — introdotto esplicitamente in risposta all'ondata di contenuti IA. Le strategie di catalogo basate su decine di titoli quasi identici erano già morte prima di quel limite; non ha fatto che ufficializzarne la sepoltura.",
              "La sospensione dell'account è il vero rischio da rispettare. Un blocco di libro si recupera; un account KDP chiuso perde tutti i titoli e il flusso di royalty accumulato. Sono i comportamenti sopra, ripetuti, a far salire la sanzione dal livello del titolo al livello dell'account.",
            ],
            bullets: [
              "La sanzione colpisce contenuto magro, metadati ingannevoli, duplicati e proprietà intellettuale — non l'IA in sé.",
              "Limite di volume: tre nuovi titoli al giorno per account.",
              "Un blocco di libro si recupera; la chiusura dell'account è il rischio esistenziale.",
              "Le violazioni ripetute salgono dal titolo all'account.",
            ],
          },
          {
            id: "responsabilita-pi",
            title: "La conformità è vostra, compreso ciò che ha fatto il modello",
            body: [
              "Le regole KDP vi rendono responsabili di verificare che tutto il contenuto — generato dall'IA compreso — rispetti la politica dei contenuti, proprietà intellettuale inclusa. « L'ha prodotto il modello » non è una difesa riconosciuta da Amazon.",
              "Punti di esposizione concreti: testo IA che riproduce passaggi riconoscibili, copertine IA che imitano la veste di un bestseller, pseudonimi confondibili con autori reali, ed errori fattuali in salute, finanza o diritto dove un contenuto sbagliato causa danni reali. Ognuno si verifica in pochi minuti prima del caricamento.",
              "Fate della verifica una fase di pubblicazione, non un ripensamento: cercate frasi distintive del testo, fate una ricerca inversa d'immagine sulla copertina, controllate lo pseudonimo contro gli autori esistenti, e verificate ogni affermazione pratica nelle nicchie sensibili.",
            ],
            bullets: [
              "Siete pienamente responsabili di proprietà intellettuale ed esattezza del contenuto IA.",
              "Controllate passaggi di testo, somiglianza di copertina, collisioni di pseudonimo e fatti sensibili.",
              "Salute, finanza e diritto meritano una passata di verifica rafforzata.",
              "Pochi minuti di controllo prima del caricamento evitano gli scenari costosi.",
            ],
          },
          {
            id: "flusso-conforme",
            title: "Un flusso di pubblicazione IA conforme",
            body: [
              "Integrate la dichiarazione nella pipeline invece di ricordarvene al momento del caricamento. Etichettate ogni libro alla creazione: quali elementi sono generati dall'IA, quali assistiti, quali umani. Le domande KDP richiedono allora dieci secondi, senza alcun arbitrato.",
              "Abbinate dichiarazione e controlli qualità. Conformità ed esigenza di qualità convergono in pratica: un libro che supera soglie rigorose — vero numero di parole, vera struttura, fatti verificati, metadati onesti — è anche quello che sopravvive all'esame qualità di Amazon. DraftToDone integra entrambi: la generazione rifiuta di consegnare un manoscritto sotto le soglie, e l'app ricorda il passaggio di dichiarazione KDP per ogni libro generato.",
              "Documentate il vostro processo. Se Amazon un giorno mette in discussione un titolo, un breve dossier — strumenti usati, editing svolto, verifiche fatte — trasforma uno scambio stressante in una formalità.",
            ],
            bullets: [
              "Etichettate generato/assistito alla creazione, elemento per elemento.",
              "I controlli qualità servono anche da protezione di conformità.",
              "Conservate una traccia di un paragrafo per titolo.",
              "Rispondete alle domande KDP dalle vostre note, non a memoria.",
            ],
          },
        ],
        checklist: [
          "Libro classificato onestamente: generato o assistito dall'IA, per elemento (testo, immagini, traduzione).",
          "Domande di dichiarazione KDP compilate con esattezza alla creazione del titolo.",
          "Passaggi distintivi verificati contro contenuto riprodotto.",
          "Ricerca inversa d'immagine effettuata sulla copertina.",
          "Pseudonimo verificato contro autori reali e marchi registrati.",
          "Affermazioni delle nicchie sensibili (salute, finanza, diritto) verificate.",
          "Metadati onesti: niente imbottitura di parole chiave, niente false serie, niente promesse ingannevoli.",
          "Limite dei tre titoli al giorno rispettato.",
          "Traccia scritta del processo conservata per il titolo.",
        ],
        faq: [
          {
            question: "Amazon vieta i libri scritti dall'IA?",
            answer:
              "No. Il contenuto generato dall'IA è esplicitamente permesso su KDP. Amazon richiede una dichiarazione alla pubblicazione e applica al libro le stesse regole di qualità, proprietà intellettuale e contenuto di qualsiasi altro titolo.",
          },
          {
            question: "I lettori vedranno che ho dichiarato contenuto IA?",
            answer:
              "A metà 2026, no. La dichiarazione informa Amazon; la scheda prodotto non porta alcuna etichetta IA. Le politiche evolvono: verificate le regole KDP in vigore al momento della pubblicazione.",
          },
          {
            question: "Se riscrivo a fondo un testo redatto dall'IA, diventa « assistito dall'IA »?",
            answer:
              "No. La definizione di Amazon si basa sull'origine: un contenuto creato dallo strumento resta generato dall'IA, qualunque sia il vostro lavoro di editing successivo. « Assistito dall'IA » copre solo il contenuto che avete creato voi e che l'IA ha rifinito.",
          },
          {
            question: "Dichiarare contenuto IA danneggia vendite o posizionamento?",
            answer:
              "Amazon non ha documentato alcun effetto di posizionamento legato alla dichiarazione, e nessun badge appare agli acquirenti. Ciò che danneggia i libri IA sono i fattori di qualità — contenuto magro e recensioni negative — non la casella di dichiarazione.",
          },
          {
            question: "Quanti libri IA posso pubblicare al giorno?",
            answer:
              "KDP limita attualmente tutti gli account a tre nuovi titoli al giorno, tetto introdotto di fronte alla crescita del volume generato dall'IA. Un catalogo sostenibile pubblica ben al di sotto di quel ritmo, con titoli differenziati e passati al controllo qualità.",
          },
        ],
      },
      de: {
        slug: "amazon-kdp-ki-richtlinie-offenlegung",
        title: "Amazons KDP-Richtlinie für KI-Inhalte erklärt: was offenzulegen ist, was erlaubt ist und was Bücher entfernen lässt",
        description:
          "Ein klarer Leitfaden zu Amazons KDP-Regeln für KI-generierte und KI-gestützte Bücher: die Offenlegungsfrage, die entscheidende Unterscheidung, Volumengrenzen, echte Entfernungsgründe und ein konformer Veröffentlichungsworkflow.",
        keywords: [
          "Amazon KDP KI Richtlinie",
          "KDP KI Offenlegung",
          "KI generierte Bücher Amazon Regeln",
          "KI-generiert oder KI-gestützt KDP",
          "KI Buch auf Amazon veröffentlichen",
          "KDP Inhaltsrichtlinien künstliche Intelligenz",
          "Amazon KI Buch Entfernung",
        ],
        category: "Compliance",
        intro: [
          "Amazon hat die KI-Bücher-Frage vor Jahren entschieden: KI-generierte Inhalte sind auf KDP erlaubt. Was Verleger stolpern lässt, ist kein Verbot — es sind die Offenlegungsregeln, die Qualitätslatte und eine Handvoll Verhaltensweisen, die Konten entfernen lassen, nicht nur Bücher.",
          "Die Richtlinie hängt an einer einzigen Unterscheidung — KI-generiert versus KI-gestützt — und sie in beide Richtungen falsch zu beantworten schafft Risiko: Generierte Inhalte nicht offenzulegen verletzt die Regeln, denen Sie zugestimmt haben, während der Rest der Richtlinie über Amazons gewöhnliche Qualitäts- und Irreführungsregeln durchgesetzt wird.",
          "Dieser Leitfaden geht die Unterscheidung durch, die Fragen im Veröffentlichungsablauf, die Volumengrenzen, was Entfernungen wirklich auslöst, und eine Compliance-Checkliste für jeden Upload. Er spiegelt die Richtlinie Mitte 2026; prüfen Sie immer die aktuellen KDP-Inhaltsrichtlinien, die Amazon ohne große Ankündigung aktualisiert.",
        ],
        sections: [
          {
            id: "generiert-oder-gestuetzt",
            title: "Die Unterscheidung, die alles entscheidet: KI-generiert vs. KI-gestützt",
            body: [
              "Amazons Definitionen sind funktional. Inhalt ist KI-generiert, wenn ein KI-Tool den Text, die Bilder oder die Übersetzungen tatsächlich erstellt hat — auch wenn Sie sie danach substanziell bearbeitet haben. Inhalt ist KI-gestützt, wenn Sie ihn selbst erstellt und KI zum Redigieren, Verfeinern oder Verbessern genutzt haben.",
              "Die Grenze betrifft den Ursprung, nicht den Aufwand. Ein von einem Modell entworfenes und dann von Ihnen stark umgeschriebenes Kapitel bleibt nach Amazons Definition KI-generiert, weil das Tool die ursprüngliche Schöpfung produziert hat. Ein Kapitel, das Sie geschrieben und vom Modell straffen ließen, ist KI-gestützt.",
              "Konsequenz: Ein Buch aus jeder Entwurfs-Pipeline — Chatbot-Schleifen, Skripte oder ein Dienst wie DraftToDone — enthält KI-generierte Inhalte und muss als solches deklariert werden. Bücher, in denen KI nur Ihre eigene Prosa überarbeitet hat, erfordern keine Offenlegung.",
            ],
            bullets: [
              "KI-generiert: das Tool hat es erstellt — Text, Bilder oder Übersetzungen — auch bei starker Nachbearbeitung.",
              "KI-gestützt: Sie haben es erstellt; KI hat verfeinert. Keine Offenlegung nötig.",
              "Der Ursprung entscheidet, nicht der Umfang der Nachbearbeitung.",
              "Pipeline-Bücher sind per Definition KI-generiert: offenlegen.",
            ],
          },
          {
            id: "offenlegungsablauf",
            title: "Wie die Offenlegung im Veröffentlichungsablauf konkret funktioniert",
            body: [
              "Bei der Titelerstellung fragt KDP, ob Ihr Buch KI-generierte Inhalte enthält. Wenn ja, geben Sie an, welche Elemente — Text, Bilder und/oder Übersetzungen — über kurze Folgefragen zum Umfang der KI-Nutzung und Ihrer Bearbeitung.",
              "Die Offenlegung richtet sich an Amazon, nicht an Leser: Mitte 2026 zeigt Amazon kein KI-Label auf der Produktseite. Die Angst vor einem sichtbaren Abzeichen ist kein Grund für unehrliche Antworten.",
              "Antworten Sie korrekt und gehen Sie weiter. Die Offenlegung selbst drosselt die Sichtbarkeit Ihres Buchs in keiner von Amazon dokumentierten Weise; nicht deklarierte KI-Inhalte, die Amazon später erkennt, sind das Szenario, das Probleme auf Kontoebene schafft — weil es eine Ehrlichkeitsfrage zu einer Qualitätsfrage addiert.",
            ],
            bullets: [
              "Offenlegung pro Titel bei der Einrichtung: Text, Bilder, Übersetzungen.",
              "Sie informiert Amazon; kein öffentliches KI-Abzeichen auf der Seite (Stand Mitte 2026).",
              "Keine dokumentierte Ranking-Strafe für korrekte Offenlegung.",
              "Später entdeckte, nicht deklarierte KI-Inhalte gelten als Richtlinienverstoß.",
            ],
          },
          {
            id: "entfernungsgruende",
            title: "Was KI-Bücher tatsächlich entfernen lässt",
            body: [
              "Entfernungen zielen überwiegend auf Qualität und Täuschung, nicht auf KI selbst. Die wiederkehrenden Muster: dünner oder repetitiver Inhalt, der das Versprechen der Produktseite nicht einlöst, irreführende Titel und Metadaten (mit Keywords vollgestopfte Titel, falsche Serien), verwirrend präsentierte Zusammenfassungen fremder Bücher, Katalog-Spam mit Fast-Duplikaten und Bücher, die Marken verletzen oder das Branding lebender Autoren kopieren.",
              "Amazon setzt außerdem eine Volumengrenze durch — derzeit drei neue Titel pro Tag und Konto — die ausdrücklich als Reaktion auf die KI-getriebene Flut eingeführt wurde. Katalogstrategien aus Dutzenden fast identischer Titel waren schon vor dieser Grenze tot; sie hat das Grab nur formalisiert.",
              "Die Kontosperrung ist das eigentliche Risiko. Einzelne Buchblockaden sind behebbar; ein gekündigtes KDP-Konto verliert jeden Titel und die aufgebaute Tantiemen-Pipeline. Die obigen Verhaltensweisen, wiederholt, eskalieren von der Titel- zur Kontoebene.",
            ],
            bullets: [
              "Durchsetzung zielt auf dünnen Inhalt, irreführende Metadaten, Duplikate und IP — nicht auf KI an sich.",
              "Volumengrenze: drei neue Titel pro Tag und Konto.",
              "Buchblockaden sind behebbar; Kontokündigung ist das existenzielle Risiko.",
              "Wiederholte Verstöße eskalieren vom Titel zum Konto.",
            ],
          },
          {
            id: "ip-verantwortung",
            title: "Die Compliance gehört Ihnen — auch das, was das Modell getan hat",
            body: [
              "Die KDP-Richtlinien machen Sie dafür verantwortlich, dass alle Inhalte — KI-generierte eingeschlossen — der Inhaltsrichtlinie entsprechen, geistiges Eigentum inklusive. « Das Modell hat es produziert » ist keine Verteidigung, die Amazon anerkennt.",
              "Praktische Risikopunkte: KI-Text, der erkennbare Passagen reproduziert, KI-Cover, die die Aufmachung eines Bestsellers imitieren, Pseudonyme, die mit realen Autoren verwechselbar sind, und Faktenfehler in Gesundheits-, Finanz- oder Rechtsthemen, wo falscher Inhalt echten Schaden anrichtet. Jeder Punkt ist in Minuten vor dem Upload prüfbar.",
              "Machen Sie die Prüfung zu einem Veröffentlichungsschritt, nicht zu einem Nachgedanken: markante Sätze auf Treffer durchsuchen, das Cover rückwärtssuchen, das Pseudonym gegen existierende Autoren prüfen und jede handlungsrelevante Behauptung in sensiblen Nischen verifizieren.",
            ],
            bullets: [
              "Sie sind voll verantwortlich für IP und Richtigkeit der KI-Ausgabe.",
              "Textpassagen, Cover-Ähnlichkeit, Pseudonym-Kollisionen und sensible Fakten prüfen.",
              "Gesundheit, Finanzen und Recht verdienen eine strengere Prüfrunde.",
              "Minuten der Prüfung vor dem Upload verhindern die teuren Szenarien.",
            ],
          },
          {
            id: "konformer-workflow",
            title: "Ein konformer KI-Veröffentlichungsworkflow",
            body: [
              "Bauen Sie die Offenlegung in die Pipeline ein, statt sich beim Upload daran zu erinnern. Markieren Sie jedes Buch bei der Erstellung: welche Elemente KI-generiert, welche KI-gestützt, welche menschlich sind. Die KDP-Fragen dauern dann zehn Sekunden und erfordern null Ermessensentscheidungen.",
              "Koppeln Sie Offenlegung mit Qualitätskontrollen. Compliance und Qualitätsdurchsetzung konvergieren in der Praxis: Ein Buch, das harte Schwellen besteht — echte Wortzahl, echte Struktur, geprüfte Fakten, ehrliche Metadaten — ist zugleich das Buch, das Amazons Qualitätsprüfung übersteht. DraftToDone integriert beides: Die Generierung weigert sich, Manuskripte unter den Schwellen zu liefern, und die App erinnert bei jedem generierten Buch an den KDP-Offenlegungsschritt.",
              "Dokumentieren Sie Ihren Prozess. Falls Amazon je einen Titel hinterfragt, verwandelt eine kurze Notiz — genutzte Tools, durchgeführtes Lektorat, erfolgte Prüfungen — einen stressigen Austausch in eine Formalität.",
            ],
            bullets: [
              "KI-generiert vs. KI-gestützt bei der Erstellung markieren, pro Element.",
              "Qualitätskontrollen dienen zugleich als Compliance-Schutz.",
              "Eine Absatz-Notiz pro Titel führen.",
              "KDP-Fragen aus Ihren Aufzeichnungen beantworten, nicht aus dem Gedächtnis.",
            ],
          },
        ],
        checklist: [
          "Buch ehrlich klassifiziert: KI-generiert vs. KI-gestützt, pro Element (Text, Bilder, Übersetzung).",
          "KDP-Offenlegungsfragen bei der Titelerstellung korrekt beantwortet.",
          "Markante Passagen stichprobenartig auf reproduzierte Inhalte geprüft.",
          "Cover per Rückwärtssuche gegen bestehende Bücher geprüft.",
          "Pseudonym gegen reale Autoren und Marken geprüft.",
          "Behauptungen in sensiblen Nischen (Gesundheit, Finanzen, Recht) faktengeprüft.",
          "Ehrliche Metadaten: kein Keyword-Stuffing, keine falschen Serien, keine irreführenden Versprechen.",
          "Innerhalb der Drei-Titel-pro-Tag-Grenze.",
          "Prozessnotiz für den Titel aufbewahrt.",
        ],
        faq: [
          {
            question: "Verbietet Amazon KI-geschriebene Bücher?",
            answer:
              "Nein. KI-generierte Inhalte sind auf KDP ausdrücklich erlaubt. Amazon verlangt die Offenlegung bei der Veröffentlichung und hält Sie an dieselben Qualitäts-, IP- und Inhaltsregeln wie jedes andere Buch.",
          },
          {
            question: "Sehen Leser, dass ich KI-Inhalte offengelegt habe?",
            answer:
              "Stand Mitte 2026: nein. Die Offenlegung informiert Amazon; Produktseiten tragen kein KI-Label. Richtlinien entwickeln sich — prüfen Sie die aktuellen KDP-Regeln, wenn Sie veröffentlichen.",
          },
          {
            question: "Wird KI-entworfener Text durch starkes Redigieren zu KI-gestützt?",
            answer:
              "Nein. Amazons Definition hängt am Ursprung: Vom Tool erstellter Inhalt bleibt KI-generiert, egal wie stark Sie ihn danach bearbeiten. KI-gestützt umfasst nur Inhalte, die Sie erstellt und die KI verfeinert hat.",
          },
          {
            question: "Schadet die KI-Offenlegung Verkäufen oder Ranking?",
            answer:
              "Amazon hat keinen Ranking-Effekt der Offenlegung dokumentiert, und Käufer sehen kein Abzeichen. Was KI-Büchern schadet, sind Qualitätsfaktoren — dünner Inhalt und schlechte Rezensionen — nicht das Offenlegungs-Häkchen.",
          },
          {
            question: "Wie viele KI-Bücher kann ich pro Tag veröffentlichen?",
            answer:
              "KDP begrenzt derzeit alle Konten auf drei neue Titel pro Tag — eine Obergrenze, die angesichts des KI-generierten Volumens eingeführt wurde. Nachhaltige Kataloge veröffentlichen deutlich unter diesem Tempo, mit differenzierten, qualitätsgeprüften Titeln.",
          },
        ],
      },
    },
  },
  {
    key: "kdp-paperback-formatting",
    date: "2026-06-12",
    updated: "2026-06-12",
    readingTime: 14,
    accent: {
      start: "#eef7ff",
      middle: "#bfe9ff",
      end: "#d9f7e8",
    },
    translations: {
      en: {
        slug: "kdp-paperback-formatting-guide",
        title: "KDP paperback formatting: trim size, margins, bleed and a print-ready interior that passes review first time",
        description:
          "Everything KDP checks in a paperback interior: choosing a trim size, calculating gutter margins from page count, bleed rules, fonts and embedding, spine width math and the errors behind most rejections.",
        keywords: [
          "KDP paperback formatting",
          "KDP trim size",
          "6x9 book formatting",
          "KDP margins gutter",
          "KDP bleed settings",
          "print ready PDF KDP",
          "KDP interior file",
          "KDP spine calculation",
          "book formatting for Amazon",
        ],
        category: "Formatting",
        intro: [
          "Paperback formatting is where most first-time KDP publishers hit their first rejection email. The rules are mechanical — trim size, margins, bleed, embedded fonts — but they interact: your page count changes your gutter margin, your gutter changes your layout, and your layout changes your page count.",
          "The good news is that the whole system reduces to a handful of numbers you can pin down before you format a single page. This guide gives you those numbers, the order to apply them in, and the specific errors that generate the majority of 'file issues' rejections.",
          "It applies to standard black-ink nonfiction and fiction paperbacks. Children's books, heavy-image formats and hardcovers add rules, but the core mechanics below stay the same.",
        ],
        sections: [
          {
            id: "trim-size",
            title: "Pick the trim size first — everything else depends on it",
            body: [
              "Trim size is the physical page dimension, and 6 x 9 inches (15.24 x 22.86 cm) is the default for a reason: it suits most nonfiction and fiction, every tool has templates for it, and its printing cost per page is identical to smaller trims while fitting more words per page — which lowers total printing cost for the same manuscript.",
              "Use 5 x 8 or 5.25 x 8 for shorter fiction where a thicker spine helps perceived value; 8.5 x 11 for workbooks and exercise-heavy layouts; square-ish trims for children's books. Once chosen, the trim is locked: changing it later reflows the entire book and invalidates your cover.",
              "Decide ink and paper at the same time — black ink on cream paper is the classic fiction/nonfiction choice; white paper suits technical content; color ink multiplies printing cost several times and is rarely justified for text-driven books.",
            ],
            bullets: [
              "6 x 9 in is the safe default: cheapest path to fewer pages and universal template support.",
              "Page count drives printing cost: at ~$0.012 per page plus a fixed base, a 250-page book costs about $4 to print.",
              "Trim, ink and paper are locked together — decide them before formatting.",
              "Changing trim later means redoing interior and cover both.",
            ],
          },
          {
            id: "margins",
            title: "Margins and the gutter: the page-count table that matters",
            body: [
              "KDP enforces minimum margins, and the inside margin (gutter) grows with page count because thicker books curve more at the binding. The minimums: outside, top and bottom at least 0.25 in without bleed (0.375 in with bleed); gutter at least 0.375 in up to 150 pages, 0.5 in for 151–300 pages, 0.625 in for 301–500 pages, 0.75 in for 501–700, and 0.875 in beyond.",
              "Minimums are not recommendations. Text set at 0.25 in from the edge looks cramped and cheap; comfortable trade paperbacks run 0.5–0.75 in outside margins and a gutter one step above the legal minimum. Generosity here is the single cheapest upgrade to perceived quality.",
              "Because gutter depends on page count and page count depends on layout, format in two passes: lay the book out with your best page-count estimate, check the final count against the gutter table, and adjust if you crossed a threshold.",
            ],
            bullets: [
              "Gutter minimums: 0.375 in (≤150 p), 0.5 in (151–300), 0.625 in (301–500), 0.75 in (501–700).",
              "Outside/top/bottom: ≥0.25 in (no bleed) or ≥0.375 in (bleed).",
              "Set margins above the minimums for a professional feel.",
              "Two-pass formatting: layout → check page count against gutter table → adjust.",
            ],
          },
          {
            id: "bleed",
            title: "Bleed: when you need it and the exact math",
            body: [
              "Bleed lets images run to the trimmed edge of the page. Text-only books should publish without bleed — it simplifies everything. You need bleed only when images, color blocks or chapter-opener art must touch the page edge.",
              "With bleed, the PDF page size grows by 0.125 in on the top, bottom and outside edges (not the gutter side): a 6 x 9 book becomes 6.125 x 9.25. Elements meant to bleed must extend fully to that enlarged edge; elements not meant to bleed must respect the normal margins.",
              "The classic rejection here is a file declared 'with bleed' whose page size was never enlarged, or images stopping 1 mm short of the enlarged edge — both produce white slivers at the trim line and an automatic file-issue flag.",
            ],
            bullets: [
              "No images touching page edges → publish without bleed.",
              "Bleed page size = trim + 0.125 in on three sides: 6 x 9 → 6.125 x 9.25.",
              "Bleeding elements must reach the enlarged edge completely.",
              "Declare bleed in KDP consistently with how the PDF was built.",
            ],
          },
          {
            id: "typography",
            title: "Typography and the interior PDF: fonts, sizes, embedding",
            body: [
              "Body text in a serif face at 10.5–12 pt with 1.2–1.5 line spacing is the trade-book standard — Garamond, Palatino and similar faces read effortlessly in print. Reserve sans-serifs for headings and captions. Justify body text with hyphenation enabled, or accept the ragged-right look deliberately.",
              "Front matter order is conventional and readers notice deviations: half-title, title page, copyright page, dedication, table of contents, then the body starting on a right-hand (odd) page. Running headers and page numbers skip display pages.",
              "Export as PDF with all fonts embedded — unembedded fonts are a top rejection cause — images at 300 DPI, no crop marks, no password protection, and the exact page size discussed above. KDP's previewer then shows you precisely what the printer will produce; review every flagged page before approving.",
            ],
            bullets: [
              "Serif body 10.5–12 pt, line spacing 1.2–1.5; sans for headings.",
              "Body starts on a right-hand page; display pages carry no headers or numbers.",
              "PDF: fonts embedded, images 300 DPI, no crop marks, no security.",
              "Always run KDP's previewer and resolve every warning before publishing.",
            ],
          },
          {
            id: "spine-cover",
            title: "Spine math and how the interior constrains the cover",
            body: [
              "The cover is a separate file, but the interior dictates its dimensions. Spine width = page count × 0.002252 in for white paper, or × 0.0025 in for cream. A 300-page cream book has a 0.75 in spine; the full wraparound cover is then back width + spine + front width, plus 0.125 in bleed on all four sides.",
              "Spine text is only allowed at 100 pages or more, and it must fit with at least 0.0625 in clearance on each side — thin books simply leave the spine blank. Get the page count final before the cover is built; ten pages of late edits change the spine enough to misalign printed text.",
              "This interlock is why finishing order matters: lock the interior, compute the spine, then produce the cover. Automated pipelines do this arithmetic for you — DraftToDone computes the wraparound dimensions from the actual final page count when it generates the print cover PDF — but the dependency exists no matter which tool builds the files.",
            ],
            bullets: [
              "Spine = pages × 0.002252 in (white) or 0.0025 in (cream).",
              "Spine text requires ≥100 pages with clearance on both sides.",
              "Cover dimensions derive from the final interior — lock page count first.",
              "Late interior edits silently invalidate an already-built cover.",
            ],
          },
          {
            id: "rejection-causes",
            title: "The short list behind most rejections",
            body: [
              "Almost every interior rejection traces to one of a handful of causes: text or page numbers inside the margin zones, fonts not embedded, page size not matching the declared trim (or bleed mismatch), images under 300 DPI flagged as blurry, and gutter too small for the page count.",
              "Two non-file issues round out the list: a table of contents whose page numbers no longer match after final edits, and mismatch between the metadata (trim, page count) entered in KDP and the uploaded file.",
              "Budget a careful previewer session as part of publishing, not as a reaction to rejection. Fixing issues before first submission keeps your title out of the review-resubmit loop that can add days to a launch.",
            ],
            bullets: [
              "Top causes: margin violations, unembedded fonts, page-size mismatch, low-DPI images, undersized gutter.",
              "Verify TOC page numbers after the last edit, not before.",
              "Match KDP metadata exactly to the file: trim, bleed, page count.",
              "One previewer session before submission beats days of resubmission.",
            ],
          },
        ],
        checklist: [
          "Trim size, ink and paper chosen before formatting began.",
          "Margins set above KDP minimums; gutter checked against final page count.",
          "Bleed decision made; page size enlarged to 6.125 x 9.25 (for 6 x 9) if bleeding.",
          "Serif body 10.5–12 pt, correct front-matter order, body starts on odd page.",
          "PDF exported with embedded fonts, 300 DPI images, no crop marks or security.",
          "Spine width computed from final page count; spine text only if ≥100 pages.",
          "Cover wraparound dimensions derived from the locked interior.",
          "KDP previewer run; every warning resolved before approval.",
          "KDP metadata (trim, bleed, page count) matches the uploaded file exactly.",
        ],
        faq: [
          {
            question: "What is the best trim size for a KDP paperback?",
            answer:
              "6 x 9 in for most fiction and nonfiction: universal template support and more words per page, which means fewer pages and lower printing cost for the same manuscript. Choose differently only with a layout-driven reason — workbooks (8.5 x 11), short fiction (5 x 8), children's books (square trims).",
          },
          {
            question: "Does KDP charge for printing, and how does formatting affect it?",
            answer:
              "Printing cost is deducted from each sale's royalty and scales with page count (roughly a fixed base plus about $0.012 per black-ink page). Tighter typography and a 6 x 9 trim reduce page count, directly raising your per-copy royalty.",
          },
          {
            question: "Do I need bleed for a text-only book?",
            answer:
              "No. Bleed exists for images and color that touch the page edge. A text-only interior should be built and declared as no-bleed — it is simpler and removes an entire class of rejection errors.",
          },
          {
            question: "Why was my interior file rejected?",
            answer:
              "The most frequent causes: content inside the required margins, fonts not embedded in the PDF, page size not matching the declared trim or bleed setting, images below 300 DPI, or a gutter too small for the page count. KDP's previewer flags each of these before submission if you let it.",
          },
          {
            question: "Can I format a KDP paperback in Word?",
            answer:
              "Yes — set the page size to the trim, configure mirrored margins with the correct gutter, embed fonts when saving to PDF, and check the result in the previewer. Dedicated layout tools and automated pipelines produce more polished results, but Word output passes review when the numbers are right.",
          },
        ],
      },
      fr: {
        slug: "mise-en-page-livre-broche-kdp",
        title: "Mise en page d'un livre broché KDP : format, marges, fond perdu et un PDF d'intérieur accepté du premier coup",
        description:
          "Tout ce que KDP vérifie dans l'intérieur d'un broché : choix du format, calcul de la marge de reliure selon le nombre de pages, règles de fond perdu, polices et incorporation, calcul du dos et les erreurs derrière la plupart des rejets.",
        keywords: [
          "mise en page livre KDP",
          "format livre broché KDP",
          "format 6x9 livre",
          "marges KDP reliure",
          "fond perdu KDP",
          "PDF prêt impression KDP",
          "fichier intérieur KDP",
          "calcul dos livre KDP",
          "mise en page livre Amazon",
        ],
        category: "Mise en page",
        intro: [
          "La mise en page du broché est l'endroit où la plupart des nouveaux éditeurs KDP reçoivent leur premier e-mail de rejet. Les règles sont mécaniques — format, marges, fond perdu, polices incorporées — mais elles interagissent : le nombre de pages change la marge de reliure, la marge change la maquette, et la maquette change le nombre de pages.",
          "La bonne nouvelle : tout le système se réduit à une poignée de chiffres que vous pouvez fixer avant de mettre en forme la moindre page. Ce guide vous donne ces chiffres, l'ordre dans lequel les appliquer, et les erreurs précises qui génèrent la majorité des rejets pour « problème de fichier ».",
          "Il s'applique aux brochés standard en encre noire, fiction et non-fiction. Les livres pour enfants, les formats riches en images et les couvertures rigides ajoutent des règles, mais la mécanique de base reste la même.",
        ],
        sections: [
          {
            id: "format",
            title: "Choisir le format d'abord — tout le reste en dépend",
            body: [
              "Le format (trim size) est la dimension physique de la page, et le 6 x 9 pouces (15,24 x 22,86 cm) est le standard pour une bonne raison : il convient à la plupart des livres, tous les outils ont des gabarits pour lui, et son coût d'impression par page est identique aux formats plus petits tout en logeant plus de mots par page — ce qui réduit le coût d'impression total du même manuscrit.",
              "Utilisez le 5 x 8 ou le 5,25 x 8 pour la fiction courte où un dos plus épais améliore la valeur perçue ; le 8,5 x 11 pour les cahiers d'exercices ; les formats carrés pour les livres jeunesse. Une fois choisi, le format est verrouillé : en changer ensuite re-coule tout le livre et invalide la couverture.",
              "Décidez l'encre et le papier en même temps — encre noire sur papier crème pour la fiction et la non-fiction classiques ; papier blanc pour le contenu technique ; l'encre couleur multiplie le coût d'impression et se justifie rarement pour un livre de texte.",
            ],
            bullets: [
              "6 x 9 po : le choix sûr — moins de pages et gabarits universels.",
              "Le nombre de pages pilote le coût d'impression : ~0,012 $ par page plus une base fixe ; 250 pages ≈ 4 $.",
              "Format, encre et papier se verrouillent ensemble — décidez avant la mise en page.",
              "Changer de format ensuite oblige à refaire intérieur et couverture.",
            ],
          },
          {
            id: "marges",
            title: "Marges et reliure : le tableau par nombre de pages qui compte",
            body: [
              "KDP impose des marges minimales, et la marge intérieure (reliure ou « gutter ») croît avec le nombre de pages, car un livre épais se courbe davantage à la reliure. Les minima : extérieur, haut et bas à 0,25 po minimum sans fond perdu (0,375 po avec) ; reliure à 0,375 po jusqu'à 150 pages, 0,5 po de 151 à 300 pages, 0,625 po de 301 à 500, 0,75 po de 501 à 700, et 0,875 po au-delà.",
              "Les minima ne sont pas des recommandations. Un texte posé à 0,25 po du bord paraît étouffé et bon marché ; un broché confortable utilise 0,5 à 0,75 po de marge extérieure et une reliure un cran au-dessus du minimum légal. La générosité ici est l'amélioration la moins chère de la qualité perçue.",
              "Comme la reliure dépend du nombre de pages et que le nombre de pages dépend de la maquette, travaillez en deux passes : maquettez avec votre meilleure estimation, vérifiez le compte final contre le tableau des reliures, et ajustez si vous avez franchi un seuil.",
            ],
            bullets: [
              "Reliure minimale : 0,375 po (≤150 p.), 0,5 po (151–300), 0,625 po (301–500), 0,75 po (501–700).",
              "Extérieur/haut/bas : ≥0,25 po (sans fond perdu) ou ≥0,375 po (avec).",
              "Réglez les marges au-dessus des minima pour un rendu professionnel.",
              "Deux passes : maquette → vérification du compte de pages → ajustement.",
            ],
          },
          {
            id: "fond-perdu",
            title: "Fond perdu : quand il faut l'utiliser et le calcul exact",
            body: [
              "Le fond perdu permet aux images de courir jusqu'au bord rogné de la page. Un livre uniquement textuel doit être publié sans fond perdu — tout devient plus simple. Vous n'en avez besoin que si des images, aplats de couleur ou ouvertures de chapitre doivent toucher le bord.",
              "Avec fond perdu, la taille de page du PDF augmente de 0,125 po en haut, en bas et sur le bord extérieur (pas côté reliure) : un 6 x 9 devient 6,125 x 9,25. Les éléments à fond perdu doivent s'étendre complètement jusqu'à ce bord agrandi ; les autres respectent les marges normales.",
              "Le rejet classique : un fichier déclaré « avec fond perdu » dont la taille de page n'a jamais été agrandie, ou des images s'arrêtant à 1 mm du bord — les deux produisent des liserés blancs à la coupe et un signalement automatique.",
            ],
            bullets: [
              "Aucune image au bord de page → publiez sans fond perdu.",
              "Taille avec fond perdu = format + 0,125 po sur trois côtés : 6 x 9 → 6,125 x 9,25.",
              "Les éléments à fond perdu doivent atteindre complètement le bord agrandi.",
              "Déclarez le fond perdu dans KDP en cohérence avec la construction du PDF.",
            ],
          },
          {
            id: "typographie",
            title: "Typographie et PDF intérieur : polices, tailles, incorporation",
            body: [
              "Un corps de texte en police à empattements de 10,5 à 12 pt avec un interlignage de 1,2 à 1,5 est le standard du livre de librairie — Garamond, Palatino et leurs proches se lisent sans effort à l'impression. Réservez les linéales aux titres et légendes. Justifiez le texte avec la césure activée, ou assumez délibérément le fer à gauche.",
              "L'ordre des pages liminaires est conventionnel et les lecteurs remarquent les écarts : faux-titre, page de titre, page de copyright, dédicace, table des matières, puis le corps commençant sur une belle page (page de droite, impaire). Les en-têtes et numéros de page disparaissent des pages de présentation.",
              "Exportez en PDF avec toutes les polices incorporées — les polices non incorporées sont une cause majeure de rejet — images à 300 DPI, sans traits de coupe, sans protection par mot de passe, et à la taille de page exacte vue plus haut. L'aperçu KDP montre alors précisément ce que l'imprimeur produira : examinez chaque page signalée avant d'approuver.",
            ],
            bullets: [
              "Corps à empattements 10,5–12 pt, interlignage 1,2–1,5 ; linéales pour les titres.",
              "Le corps commence sur une belle page ; pas d'en-têtes sur les pages de présentation.",
              "PDF : polices incorporées, images 300 DPI, ni traits de coupe ni sécurité.",
              "Passez toujours l'aperçu KDP et résolvez chaque avertissement avant publication.",
            ],
          },
          {
            id: "dos-couverture",
            title: "Calcul du dos et comment l'intérieur contraint la couverture",
            body: [
              "La couverture est un fichier séparé, mais l'intérieur dicte ses dimensions. Largeur du dos = nombre de pages × 0,002252 po pour le papier blanc, ou × 0,0025 po pour le crème. Un livre de 300 pages sur crème a un dos de 0,75 po ; l'habillage complet vaut alors largeur du quatrième + dos + largeur du premier plat, plus 0,125 po de fond perdu sur les quatre côtés.",
              "Le texte sur le dos n'est autorisé qu'à partir de 100 pages, avec au moins 0,0625 po de garde de chaque côté — les livres fins laissent simplement le dos vierge. Verrouillez le nombre de pages avant de construire la couverture : dix pages de corrections tardives décalent assez le dos pour désaligner le texte imprimé.",
              "Cet emboîtement explique l'ordre de finition : verrouiller l'intérieur, calculer le dos, puis produire la couverture. Les pipelines automatisés font ce calcul pour vous — DraftToDone calcule les dimensions de l'habillage à partir du nombre de pages final réel quand il génère le PDF de couverture — mais la dépendance existe quel que soit l'outil.",
            ],
            bullets: [
              "Dos = pages × 0,002252 po (blanc) ou 0,0025 po (crème).",
              "Texte sur le dos : ≥100 pages, avec garde des deux côtés.",
              "Les dimensions de couverture dérivent de l'intérieur final — verrouillez le compte de pages d'abord.",
              "Des corrections tardives de l'intérieur invalident silencieusement une couverture déjà construite.",
            ],
          },
          {
            id: "causes-rejet",
            title: "La courte liste derrière la plupart des rejets",
            body: [
              "Presque tous les rejets d'intérieur remontent à une poignée de causes : texte ou numéros de page dans les zones de marge, polices non incorporées, taille de page différente du format déclaré (ou incohérence de fond perdu), images sous 300 DPI signalées comme floues, et reliure trop petite pour le nombre de pages.",
              "Deux problèmes hors fichier complètent la liste : une table des matières dont les numéros de page ne correspondent plus après les dernières corrections, et un écart entre les métadonnées saisies dans KDP (format, nombre de pages) et le fichier téléversé.",
              "Prévoyez une session d'aperçu rigoureuse comme étape de publication, pas comme réaction au rejet. Corriger avant la première soumission évite la boucle examen-resoumission qui peut ajouter des jours à un lancement.",
            ],
            bullets: [
              "Causes principales : marges violées, polices non incorporées, taille de page erronée, images basse résolution, reliure sous-dimensionnée.",
              "Vérifiez les numéros de la table des matières après la dernière correction, pas avant.",
              "Faites correspondre exactement métadonnées KDP et fichier : format, fond perdu, pages.",
              "Une session d'aperçu avant soumission vaut mieux que des jours de resoumission.",
            ],
          },
        ],
        checklist: [
          "Format, encre et papier choisis avant le début de la mise en page.",
          "Marges réglées au-dessus des minima KDP ; reliure vérifiée contre le nombre de pages final.",
          "Décision de fond perdu prise ; page agrandie à 6,125 x 9,25 (pour un 6 x 9) le cas échéant.",
          "Corps à empattements 10,5–12 pt, ordre des liminaires correct, corps démarrant sur belle page.",
          "PDF exporté avec polices incorporées, images 300 DPI, sans traits de coupe ni sécurité.",
          "Largeur du dos calculée depuis le compte de pages final ; texte de dos seulement si ≥100 pages.",
          "Dimensions de l'habillage de couverture dérivées de l'intérieur verrouillé.",
          "Aperçu KDP passé ; chaque avertissement résolu avant approbation.",
          "Métadonnées KDP (format, fond perdu, pages) strictement conformes au fichier téléversé.",
        ],
        faq: [
          {
            question: "Quel est le meilleur format pour un broché KDP ?",
            answer:
              "Le 6 x 9 po pour la plupart des romans et essais : gabarits universels et plus de mots par page, donc moins de pages et un coût d'impression plus bas pour le même manuscrit. N'en changez que pour une raison de maquette — cahiers d'exercices (8,5 x 11), fiction courte (5 x 8), jeunesse (formats carrés).",
          },
          {
            question: "KDP facture-t-il l'impression, et la mise en page joue-t-elle dessus ?",
            answer:
              "Le coût d'impression est déduit de la redevance de chaque vente et croît avec le nombre de pages (environ une base fixe plus ~0,012 $ par page en encre noire). Une typographie plus dense et un format 6 x 9 réduisent le nombre de pages et augmentent directement votre redevance par exemplaire.",
          },
          {
            question: "Faut-il du fond perdu pour un livre uniquement textuel ?",
            answer:
              "Non. Le fond perdu sert aux images et couleurs qui touchent le bord de page. Un intérieur textuel doit être construit et déclaré sans fond perdu — c'est plus simple et cela élimine toute une famille d'erreurs de rejet.",
          },
          {
            question: "Pourquoi mon fichier intérieur a-t-il été rejeté ?",
            answer:
              "Les causes les plus fréquentes : contenu dans les marges obligatoires, polices non incorporées au PDF, taille de page différente du format ou du réglage de fond perdu déclarés, images sous 300 DPI, ou reliure trop petite pour le nombre de pages. L'aperçu KDP signale chacun de ces points avant soumission si vous le laissez faire.",
          },
          {
            question: "Peut-on mettre en page un broché KDP dans Word ?",
            answer:
              "Oui — réglez la taille de page sur le format, configurez des marges en miroir avec la bonne reliure, incorporez les polices à l'export PDF, et vérifiez le résultat dans l'aperçu. Les outils de maquette dédiés et les pipelines automatisés produisent un rendu plus soigné, mais une sortie Word passe l'examen quand les chiffres sont justes.",
          },
        ],
      },
      it: {
        slug: "impaginazione-libro-cartaceo-kdp",
        title: "Impaginare un libro cartaceo per KDP: formato, margini, abbondanza e un PDF interno approvato al primo colpo",
        description:
          "Tutto ciò che KDP verifica nell'interno di un cartaceo: scelta del formato, calcolo del margine di rilegatura in base alle pagine, regole di abbondanza, font e incorporazione, calcolo del dorso e gli errori dietro la maggior parte dei rifiuti.",
        keywords: [
          "impaginazione libro KDP",
          "formato libro cartaceo KDP",
          "formato 6x9 libro",
          "margini KDP rilegatura",
          "abbondanza KDP",
          "PDF pronto stampa KDP",
          "file interno KDP",
          "calcolo dorso libro KDP",
          "impaginazione libro Amazon",
        ],
        category: "Impaginazione",
        intro: [
          "L'impaginazione del cartaceo è il punto in cui la maggior parte dei nuovi editori KDP riceve la prima email di rifiuto. Le regole sono meccaniche — formato, margini, abbondanza, font incorporati — ma interagiscono: il numero di pagine cambia il margine di rilegatura, il margine cambia il layout, e il layout cambia il numero di pagine.",
          "La buona notizia: tutto il sistema si riduce a una manciata di numeri che potete fissare prima di impaginare una sola pagina. Questa guida vi dà quei numeri, l'ordine in cui applicarli, e gli errori precisi che generano la maggioranza dei rifiuti per « problema di file ».",
          "Si applica ai cartacei standard a inchiostro nero, narrativa e saggistica. I libri per bambini, i formati ricchi di immagini e le copertine rigide aggiungono regole, ma la meccanica di base resta la stessa.",
        ],
        sections: [
          {
            id: "formato",
            title: "Scegliere prima il formato — tutto il resto ne dipende",
            body: [
              "Il formato (trim size) è la dimensione fisica della pagina, e il 6 x 9 pollici (15,24 x 22,86 cm) è lo standard per una buona ragione: va bene per la maggior parte dei libri, tutti gli strumenti hanno modelli per lui, e il suo costo di stampa per pagina è identico ai formati più piccoli pur ospitando più parole per pagina — il che riduce il costo di stampa totale dello stesso manoscritto.",
              "Usate il 5 x 8 o il 5,25 x 8 per la narrativa breve dove un dorso più spesso migliora il valore percepito; l'8,5 x 11 per i quaderni di esercizi; i formati quadrati per i libri per bambini. Una volta scelto, il formato è bloccato: cambiarlo dopo rifà scorrere tutto il libro e invalida la copertina.",
              "Decidete inchiostro e carta insieme — inchiostro nero su carta crema per narrativa e saggistica classiche; carta bianca per il contenuto tecnico; l'inchiostro a colori moltiplica il costo di stampa e si giustifica raramente per un libro di testo.",
            ],
            bullets: [
              "6 x 9 pollici: la scelta sicura — meno pagine e modelli universali.",
              "Il numero di pagine guida il costo di stampa: ~0,012 $ per pagina più una base fissa; 250 pagine ≈ 4 $.",
              "Formato, inchiostro e carta si bloccano insieme — decidete prima dell'impaginazione.",
              "Cambiare formato dopo obbliga a rifare interno e copertina.",
            ],
          },
          {
            id: "margini",
            title: "Margini e rilegatura: la tabella per numero di pagine che conta",
            body: [
              "KDP impone margini minimi, e il margine interno (rilegatura o « gutter ») cresce con il numero di pagine, perché un libro spesso si curva di più alla rilegatura. I minimi: esterno, alto e basso ad almeno 0,25 pollici senza abbondanza (0,375 con); rilegatura ad almeno 0,375 pollici fino a 150 pagine, 0,5 da 151 a 300, 0,625 da 301 a 500, 0,75 da 501 a 700, e 0,875 oltre.",
              "I minimi non sono raccomandazioni. Un testo a 0,25 pollici dal bordo sembra soffocato e dozzinale; un cartaceo confortevole usa 0,5-0,75 pollici di margine esterno e una rilegatura un gradino sopra il minimo legale. La generosità qui è il miglioramento più economico della qualità percepita.",
              "Poiché la rilegatura dipende dal numero di pagine e il numero di pagine dipende dal layout, lavorate in due passate: impaginate con la vostra migliore stima, verificate il conteggio finale contro la tabella delle rilegature, e correggete se avete superato una soglia.",
            ],
            bullets: [
              "Rilegatura minima: 0,375 pollici (≤150 p.), 0,5 (151-300), 0,625 (301-500), 0,75 (501-700).",
              "Esterno/alto/basso: ≥0,25 pollici (senza abbondanza) o ≥0,375 (con).",
              "Impostate i margini sopra i minimi per un risultato professionale.",
              "Due passate: layout → verifica del conteggio pagine → correzione.",
            ],
          },
          {
            id: "abbondanza",
            title: "Abbondanza: quando serve e il calcolo esatto",
            body: [
              "L'abbondanza (bleed) permette alle immagini di arrivare fino al bordo rifilato della pagina. Un libro di solo testo va pubblicato senza abbondanza — tutto diventa più semplice. Vi serve solo se immagini, fondi di colore o aperture di capitolo devono toccare il bordo.",
              "Con abbondanza, la dimensione di pagina del PDF aumenta di 0,125 pollici in alto, in basso e sul bordo esterno (non sul lato rilegatura): un 6 x 9 diventa 6,125 x 9,25. Gli elementi al vivo devono estendersi completamente fino a quel bordo allargato; gli altri rispettano i margini normali.",
              "Il rifiuto classico: un file dichiarato « con abbondanza » la cui dimensione di pagina non è mai stata allargata, o immagini che si fermano a 1 mm dal bordo — entrambi producono filetti bianchi al taglio e una segnalazione automatica.",
            ],
            bullets: [
              "Nessuna immagine al bordo pagina → pubblicate senza abbondanza.",
              "Dimensione con abbondanza = formato + 0,125 pollici su tre lati: 6 x 9 → 6,125 x 9,25.",
              "Gli elementi al vivo devono raggiungere completamente il bordo allargato.",
              "Dichiarate l'abbondanza in KDP coerentemente con la costruzione del PDF.",
            ],
          },
          {
            id: "tipografia",
            title: "Tipografia e PDF interno: font, corpi, incorporazione",
            body: [
              "Un corpo del testo in font con grazie da 10,5 a 12 pt con interlinea da 1,2 a 1,5 è lo standard del libro da libreria — Garamond, Palatino e simili si leggono senza sforzo in stampa. Riservate i bastoni a titoli e didascalie. Giustificate il testo con la sillabazione attiva, oppure assumete deliberatamente la bandiera a destra.",
              "L'ordine delle pagine preliminari è convenzionale e i lettori notano gli scarti: occhietto, frontespizio, pagina del copyright, dedica, indice, poi il corpo che inizia su una pagina destra (dispari). Testatine e numeri di pagina spariscono dalle pagine di presentazione.",
              "Esportate in PDF con tutti i font incorporati — i font non incorporati sono una causa principale di rifiuto — immagini a 300 DPI, senza crocini di taglio, senza protezione con password, e alla dimensione di pagina esatta vista sopra. L'anteprima KDP mostra allora precisamente ciò che la stampante produrrà: esaminate ogni pagina segnalata prima di approvare.",
            ],
            bullets: [
              "Corpo con grazie 10,5-12 pt, interlinea 1,2-1,5; bastoni per i titoli.",
              "Il corpo inizia su pagina destra; niente testatine sulle pagine di presentazione.",
              "PDF: font incorporati, immagini 300 DPI, né crocini né sicurezza.",
              "Passate sempre l'anteprima KDP e risolvete ogni avviso prima di pubblicare.",
            ],
          },
          {
            id: "dorso-copertina",
            title: "Calcolo del dorso e come l'interno vincola la copertina",
            body: [
              "La copertina è un file separato, ma l'interno ne detta le dimensioni. Larghezza del dorso = numero di pagine × 0,002252 pollici per la carta bianca, o × 0,0025 per la crema. Un libro di 300 pagine su crema ha un dorso di 0,75 pollici; la copertina avvolgente completa vale allora larghezza della quarta + dorso + larghezza del piatto anteriore, più 0,125 pollici di abbondanza sui quattro lati.",
              "Il testo sul dorso è permesso solo da 100 pagine in su, con almeno 0,0625 pollici di guardia per lato — i libri sottili lasciano semplicemente il dorso vuoto. Bloccate il numero di pagine prima di costruire la copertina: dieci pagine di correzioni tardive spostano il dorso abbastanza da disallineare il testo stampato.",
              "Questo incastro spiega l'ordine di finitura: bloccare l'interno, calcolare il dorso, poi produrre la copertina. Le pipeline automatizzate fanno questo calcolo per voi — DraftToDone calcola le dimensioni dell'avvolgente dal numero di pagine finale reale quando genera il PDF di copertina — ma la dipendenza esiste qualunque sia lo strumento.",
            ],
            bullets: [
              "Dorso = pagine × 0,002252 pollici (bianca) o 0,0025 (crema).",
              "Testo sul dorso: ≥100 pagine, con guardia su entrambi i lati.",
              "Le dimensioni della copertina derivano dall'interno finale — bloccate prima il conteggio pagine.",
              "Correzioni tardive dell'interno invalidano silenziosamente una copertina già costruita.",
            ],
          },
          {
            id: "cause-rifiuto",
            title: "La breve lista dietro la maggior parte dei rifiuti",
            body: [
              "Quasi tutti i rifiuti dell'interno risalgono a una manciata di cause: testo o numeri di pagina nelle zone di margine, font non incorporati, dimensione di pagina diversa dal formato dichiarato (o incoerenza di abbondanza), immagini sotto i 300 DPI segnalate come sfocate, e rilegatura troppo piccola per il numero di pagine.",
              "Due problemi fuori dal file completano la lista: un indice i cui numeri di pagina non corrispondono più dopo le ultime correzioni, e uno scarto tra i metadati inseriti in KDP (formato, numero di pagine) e il file caricato.",
              "Pianificate una sessione di anteprima rigorosa come fase di pubblicazione, non come reazione al rifiuto. Correggere prima del primo invio evita il ciclo esame-reinvio che può aggiungere giorni a un lancio.",
            ],
            bullets: [
              "Cause principali: margini violati, font non incorporati, dimensione pagina errata, immagini a bassa risoluzione, rilegatura sottodimensionata.",
              "Verificate i numeri dell'indice dopo l'ultima correzione, non prima.",
              "Fate corrispondere esattamente metadati KDP e file: formato, abbondanza, pagine.",
              "Una sessione di anteprima prima dell'invio vale più di giorni di reinvio.",
            ],
          },
        ],
        checklist: [
          "Formato, inchiostro e carta scelti prima dell'inizio dell'impaginazione.",
          "Margini impostati sopra i minimi KDP; rilegatura verificata contro il numero di pagine finale.",
          "Decisione sull'abbondanza presa; pagina allargata a 6,125 x 9,25 (per un 6 x 9) se al vivo.",
          "Corpo con grazie 10,5-12 pt, ordine dei preliminari corretto, corpo che inizia su pagina dispari.",
          "PDF esportato con font incorporati, immagini 300 DPI, senza crocini né sicurezza.",
          "Larghezza del dorso calcolata dal conteggio pagine finale; testo sul dorso solo se ≥100 pagine.",
          "Dimensioni della copertina avvolgente derivate dall'interno bloccato.",
          "Anteprima KDP eseguita; ogni avviso risolto prima dell'approvazione.",
          "Metadati KDP (formato, abbondanza, pagine) rigorosamente conformi al file caricato.",
        ],
        faq: [
          {
            question: "Qual è il formato migliore per un cartaceo KDP?",
            answer:
              "Il 6 x 9 pollici per la maggior parte di romanzi e saggi: modelli universali e più parole per pagina, quindi meno pagine e un costo di stampa più basso per lo stesso manoscritto. Cambiate solo per una ragione di layout — quaderni di esercizi (8,5 x 11), narrativa breve (5 x 8), libri per bambini (formati quadrati).",
          },
          {
            question: "KDP fa pagare la stampa, e l'impaginazione incide?",
            answer:
              "Il costo di stampa è dedotto dalla royalty di ogni vendita e cresce con il numero di pagine (circa una base fissa più ~0,012 $ per pagina a inchiostro nero). Una tipografia più densa e un formato 6 x 9 riducono il numero di pagine e aumentano direttamente la royalty per copia.",
          },
          {
            question: "Serve l'abbondanza per un libro di solo testo?",
            answer:
              "No. L'abbondanza serve a immagini e colori che toccano il bordo pagina. Un interno di solo testo va costruito e dichiarato senza abbondanza — è più semplice ed elimina un'intera famiglia di errori di rifiuto.",
          },
          {
            question: "Perché il mio file interno è stato rifiutato?",
            answer:
              "Le cause più frequenti: contenuto nei margini obbligatori, font non incorporati nel PDF, dimensione di pagina diversa dal formato o dall'impostazione di abbondanza dichiarati, immagini sotto i 300 DPI, o rilegatura troppo piccola per il numero di pagine. L'anteprima KDP segnala ciascuno di questi punti prima dell'invio, se la lasciate fare.",
          },
          {
            question: "Si può impaginare un cartaceo KDP in Word?",
            answer:
              "Sì — impostate la dimensione di pagina sul formato, configurate margini speculari con la giusta rilegatura, incorporate i font all'esportazione PDF e verificate il risultato nell'anteprima. Gli strumenti di impaginazione dedicati e le pipeline automatizzate producono un risultato più curato, ma un'uscita Word supera l'esame quando i numeri sono giusti.",
          },
        ],
      },
      de: {
        slug: "kdp-taschenbuch-formatierung-anleitung",
        title: "KDP-Taschenbuch formatieren: Format, Ränder, Beschnitt und ein druckfertiger Buchblock, der die Prüfung beim ersten Mal besteht",
        description:
          "Alles, was KDP an einem Taschenbuch-Innenteil prüft: Formatwahl, Bundsteg-Berechnung nach Seitenzahl, Beschnittregeln, Schriften und Einbettung, Buchrücken-Berechnung und die Fehler hinter den meisten Ablehnungen.",
        keywords: [
          "KDP Taschenbuch Formatierung",
          "KDP Buchformat",
          "6x9 Buch formatieren",
          "KDP Ränder Bundsteg",
          "KDP Beschnitt",
          "druckfertiges PDF KDP",
          "KDP Innenteil Datei",
          "KDP Buchrücken berechnen",
          "Buchsatz für Amazon",
        ],
        category: "Formatierung",
        intro: [
          "Die Taschenbuch-Formatierung ist der Ort, an dem die meisten KDP-Neulinge ihre erste Ablehnungsmail erhalten. Die Regeln sind mechanisch — Format, Ränder, Beschnitt, eingebettete Schriften — aber sie wirken zusammen: Die Seitenzahl ändert den Bundsteg, der Bundsteg ändert das Layout, und das Layout ändert die Seitenzahl.",
          "Die gute Nachricht: Das ganze System reduziert sich auf eine Handvoll Zahlen, die Sie festlegen können, bevor Sie eine einzige Seite setzen. Dieser Leitfaden gibt Ihnen diese Zahlen, die Reihenfolge ihrer Anwendung und die konkreten Fehler, die die Mehrheit der « Dateiproblem »-Ablehnungen erzeugen.",
          "Er gilt für Standard-Taschenbücher mit schwarzer Tinte, Belletristik und Sachbuch. Kinderbücher, bildlastige Formate und Hardcover bringen Zusatzregeln, aber die Grundmechanik bleibt gleich.",
        ],
        sections: [
          {
            id: "format",
            title: "Zuerst das Format wählen — alles andere hängt davon ab",
            body: [
              "Das Format (Trim Size) ist die physische Seitengröße, und 6 x 9 Zoll (15,24 x 22,86 cm) ist aus gutem Grund der Standard: Es passt für die meisten Bücher, jedes Tool hat Vorlagen dafür, und seine Druckkosten pro Seite sind identisch mit kleineren Formaten — bei mehr Wörtern pro Seite, was die Gesamtdruckkosten desselben Manuskripts senkt.",
              "Nutzen Sie 5 x 8 oder 5,25 x 8 für kürzere Belletristik, wo ein dickerer Rücken den wahrgenommenen Wert hebt; 8,5 x 11 für Arbeitsbücher; quadratische Formate für Kinderbücher. Einmal gewählt, ist das Format fixiert: Ein späterer Wechsel lässt das ganze Buch neu umbrechen und macht das Cover ungültig.",
              "Entscheiden Sie Tinte und Papier gleichzeitig — schwarze Tinte auf Cremepapier ist der Klassiker für Belletristik und Sachbuch; weißes Papier passt zu technischem Inhalt; Farbtinte vervielfacht die Druckkosten und lohnt sich für Textbücher selten.",
            ],
            bullets: [
              "6 x 9 Zoll ist der sichere Standard: weniger Seiten und universelle Vorlagen.",
              "Die Seitenzahl treibt die Druckkosten: ~0,012 $ pro Seite plus Festbetrag; 250 Seiten ≈ 4 $.",
              "Format, Tinte und Papier sind aneinander gekoppelt — vor dem Satz entscheiden.",
              "Späterer Formatwechsel bedeutet: Innenteil und Cover neu machen.",
            ],
          },
          {
            id: "raender",
            title: "Ränder und Bundsteg: die Seitenzahl-Tabelle, die zählt",
            body: [
              "KDP erzwingt Mindestränder, und der Innenrand (Bundsteg) wächst mit der Seitenzahl, weil dickere Bücher sich an der Bindung stärker wölben. Die Minima: außen, oben und unten mindestens 0,25 Zoll ohne Beschnitt (0,375 mit); Bundsteg mindestens 0,375 Zoll bis 150 Seiten, 0,5 bei 151-300, 0,625 bei 301-500, 0,75 bei 501-700 und 0,875 darüber.",
              "Minima sind keine Empfehlungen. Text 0,25 Zoll vom Rand wirkt gedrängt und billig; komfortable Taschenbücher nutzen 0,5-0,75 Zoll Außenrand und einen Bundsteg eine Stufe über dem rechtlichen Minimum. Großzügigkeit hier ist das günstigste Upgrade der wahrgenommenen Qualität.",
              "Weil der Bundsteg von der Seitenzahl abhängt und die Seitenzahl vom Layout, arbeiten Sie in zwei Durchgängen: Setzen Sie das Buch mit Ihrer besten Schätzung, prüfen Sie die finale Zahl gegen die Bundsteg-Tabelle und korrigieren Sie, falls Sie eine Schwelle überschritten haben.",
            ],
            bullets: [
              "Bundsteg-Minima: 0,375 Zoll (≤150 S.), 0,5 (151-300), 0,625 (301-500), 0,75 (501-700).",
              "Außen/oben/unten: ≥0,25 Zoll (ohne Beschnitt) oder ≥0,375 (mit).",
              "Ränder über den Minima ansetzen für professionelle Anmutung.",
              "Zwei Durchgänge: Layout → Seitenzahl gegen Tabelle prüfen → anpassen.",
            ],
          },
          {
            id: "beschnitt",
            title: "Beschnitt: wann er nötig ist und die exakte Rechnung",
            body: [
              "Beschnitt (Bleed) lässt Bilder bis zur beschnittenen Seitenkante laufen. Reine Textbücher sollten ohne Beschnitt erscheinen — das vereinfacht alles. Sie brauchen Beschnitt nur, wenn Bilder, Farbflächen oder Kapitelauftakte die Seitenkante berühren müssen.",
              "Mit Beschnitt wächst die PDF-Seitengröße um 0,125 Zoll an Ober-, Unter- und Außenkante (nicht an der Bundseite): Ein 6 x 9-Buch wird 6,125 x 9,25. Angeschnittene Elemente müssen vollständig bis zu dieser vergrößerten Kante reichen; nicht angeschnittene respektieren die normalen Ränder.",
              "Die klassische Ablehnung: eine als « mit Beschnitt » deklarierte Datei, deren Seitengröße nie vergrößert wurde, oder Bilder, die 1 mm vor der Kante enden — beides erzeugt weiße Streifen an der Schnittlinie und eine automatische Beanstandung.",
            ],
            bullets: [
              "Keine Bilder an der Seitenkante → ohne Beschnitt veröffentlichen.",
              "Seitengröße mit Beschnitt = Format + 0,125 Zoll an drei Seiten: 6 x 9 → 6,125 x 9,25.",
              "Angeschnittene Elemente müssen die vergrößerte Kante vollständig erreichen.",
              "Beschnitt in KDP konsistent mit dem PDF-Aufbau deklarieren.",
            ],
          },
          {
            id: "typografie",
            title: "Typografie und das Innen-PDF: Schriften, Größen, Einbettung",
            body: [
              "Fließtext in einer Serifenschrift mit 10,5-12 pt und 1,2-1,5 Zeilenabstand ist der Buchhandelsstandard — Garamond, Palatino und Verwandte lesen sich gedruckt mühelos. Serifenlose Schriften gehören zu Überschriften und Bildunterschriften. Blocksatz mit aktivierter Silbentrennung, oder bewusst Flattersatz.",
              "Die Reihenfolge der Titelei ist konventionell, und Leser bemerken Abweichungen: Schmutztitel, Titelseite, Impressum, Widmung, Inhaltsverzeichnis, dann der Hauptteil auf einer rechten (ungeraden) Seite. Kolumnentitel und Seitenzahlen entfallen auf Schauseiten.",
              "Als PDF exportieren mit allen Schriften eingebettet — nicht eingebettete Schriften sind ein Hauptablehnungsgrund — Bilder mit 300 DPI, ohne Schnittmarken, ohne Passwortschutz, und in exakt der oben besprochenen Seitengröße. KDPs Vorschau zeigt dann genau, was die Druckerei produziert; prüfen Sie jede markierte Seite vor der Freigabe.",
            ],
            bullets: [
              "Serifen-Fließtext 10,5-12 pt, Zeilenabstand 1,2-1,5; serifenlos für Überschriften.",
              "Hauptteil beginnt auf rechter Seite; Schauseiten ohne Kolumnentitel und Seitenzahlen.",
              "PDF: Schriften eingebettet, Bilder 300 DPI, keine Schnittmarken, keine Sicherung.",
              "Immer KDPs Vorschau durchlaufen und jede Warnung vor der Veröffentlichung lösen.",
            ],
          },
          {
            id: "ruecken-cover",
            title: "Rücken-Mathematik und wie der Innenteil das Cover bestimmt",
            body: [
              "Das Cover ist eine separate Datei, aber der Innenteil diktiert seine Maße. Rückenbreite = Seitenzahl × 0,002252 Zoll bei weißem Papier oder × 0,0025 bei Creme. Ein 300-Seiten-Buch auf Creme hat einen 0,75-Zoll-Rücken; der komplette Umschlag ist dann Rückseitenbreite + Rücken + Vorderseitenbreite, plus 0,125 Zoll Beschnitt an allen vier Seiten.",
              "Rückentext ist erst ab 100 Seiten erlaubt und braucht mindestens 0,0625 Zoll Abstand auf jeder Seite — dünne Bücher lassen den Rücken einfach leer. Fixieren Sie die Seitenzahl, bevor das Cover gebaut wird; zehn Seiten später Korrekturen verschieben den Rücken genug, um gedruckten Text zu verschieben.",
              "Diese Verzahnung erklärt die Fertigstellungsreihenfolge: Innenteil fixieren, Rücken berechnen, dann Cover produzieren. Automatisierte Pipelines übernehmen diese Arithmetik — DraftToDone berechnet die Umschlagmaße aus der tatsächlichen finalen Seitenzahl, wenn es das Druckcover-PDF generiert — aber die Abhängigkeit existiert unabhängig vom Werkzeug.",
            ],
            bullets: [
              "Rücken = Seiten × 0,002252 Zoll (weiß) oder 0,0025 (Creme).",
              "Rückentext: ≥100 Seiten, mit Abstand auf beiden Seiten.",
              "Covermaße leiten sich vom finalen Innenteil ab — zuerst die Seitenzahl fixieren.",
              "Späte Innenteil-Korrekturen machen ein fertiges Cover stillschweigend ungültig.",
            ],
          },
          {
            id: "ablehnungsgruende",
            title: "Die kurze Liste hinter den meisten Ablehnungen",
            body: [
              "Fast jede Innenteil-Ablehnung geht auf eine Handvoll Ursachen zurück: Text oder Seitenzahlen in den Randzonen, nicht eingebettete Schriften, Seitengröße passt nicht zum deklarierten Format (oder Beschnitt-Inkonsistenz), Bilder unter 300 DPI als unscharf markiert, und Bundsteg zu klein für die Seitenzahl.",
              "Zwei Nicht-Datei-Probleme runden die Liste ab: ein Inhaltsverzeichnis, dessen Seitenzahlen nach den letzten Korrekturen nicht mehr stimmen, und eine Diskrepanz zwischen den in KDP eingegebenen Metadaten (Format, Seitenzahl) und der hochgeladenen Datei.",
              "Planen Sie eine sorgfältige Vorschau-Sitzung als Teil der Veröffentlichung, nicht als Reaktion auf die Ablehnung. Vor der ersten Einreichung zu korrigieren hält den Titel aus der Prüf-und-neu-einreichen-Schleife heraus, die einen Launch um Tage verzögern kann.",
            ],
            bullets: [
              "Top-Ursachen: Randverletzungen, nicht eingebettete Schriften, falsche Seitengröße, niedrige Bildauflösung, zu kleiner Bundsteg.",
              "Inhaltsverzeichnis-Seitenzahlen nach der letzten Korrektur prüfen, nicht davor.",
              "KDP-Metadaten exakt an die Datei anpassen: Format, Beschnitt, Seitenzahl.",
              "Eine Vorschau-Sitzung vor der Einreichung schlägt Tage des Neueinreichens.",
            ],
          },
        ],
        checklist: [
          "Format, Tinte und Papier vor Beginn des Satzes gewählt.",
          "Ränder über den KDP-Minima; Bundsteg gegen die finale Seitenzahl geprüft.",
          "Beschnitt-Entscheidung getroffen; Seite auf 6,125 x 9,25 vergrößert (bei 6 x 9), falls angeschnitten.",
          "Serifen-Fließtext 10,5-12 pt, korrekte Titelei-Reihenfolge, Hauptteil beginnt auf ungerader Seite.",
          "PDF mit eingebetteten Schriften, 300-DPI-Bildern, ohne Schnittmarken oder Sicherung exportiert.",
          "Rückenbreite aus finaler Seitenzahl berechnet; Rückentext nur bei ≥100 Seiten.",
          "Umschlagmaße aus dem fixierten Innenteil abgeleitet.",
          "KDP-Vorschau durchlaufen; jede Warnung vor der Freigabe gelöst.",
          "KDP-Metadaten (Format, Beschnitt, Seitenzahl) exakt passend zur hochgeladenen Datei.",
        ],
        faq: [
          {
            question: "Was ist das beste Format für ein KDP-Taschenbuch?",
            answer:
              "6 x 9 Zoll für die meiste Belletristik und Sachbücher: universelle Vorlagen und mehr Wörter pro Seite, also weniger Seiten und niedrigere Druckkosten für dasselbe Manuskript. Weichen Sie nur aus Layout-Gründen ab — Arbeitsbücher (8,5 x 11), kurze Belletristik (5 x 8), Kinderbücher (quadratische Formate).",
          },
          {
            question: "Berechnet KDP Druckkosten, und wie wirkt die Formatierung darauf?",
            answer:
              "Die Druckkosten werden von der Tantieme jedes Verkaufs abgezogen und wachsen mit der Seitenzahl (etwa ein Festbetrag plus ~0,012 $ pro Schwarzweiß-Seite). Engere Typografie und ein 6 x 9-Format reduzieren die Seitenzahl und erhöhen direkt Ihre Tantieme pro Exemplar.",
          },
          {
            question: "Brauche ich Beschnitt für ein reines Textbuch?",
            answer:
              "Nein. Beschnitt existiert für Bilder und Farben, die die Seitenkante berühren. Ein reiner Text-Innenteil sollte ohne Beschnitt gebaut und deklariert werden — das ist einfacher und beseitigt eine ganze Klasse von Ablehnungsfehlern.",
          },
          {
            question: "Warum wurde meine Innenteil-Datei abgelehnt?",
            answer:
              "Die häufigsten Ursachen: Inhalt innerhalb der Pflichtränder, nicht ins PDF eingebettete Schriften, Seitengröße passt nicht zu deklariertem Format oder Beschnitt, Bilder unter 300 DPI oder ein für die Seitenzahl zu kleiner Bundsteg. KDPs Vorschau markiert jeden dieser Punkte vor der Einreichung, wenn Sie sie nutzen.",
          },
          {
            question: "Kann man ein KDP-Taschenbuch in Word setzen?",
            answer:
              "Ja — Seitengröße auf das Format stellen, gespiegelte Ränder mit korrektem Bundsteg konfigurieren, Schriften beim PDF-Export einbetten und das Ergebnis in der Vorschau prüfen. Dedizierte Satzwerkzeuge und automatisierte Pipelines liefern ein feineres Ergebnis, aber Word-Ausgaben bestehen die Prüfung, wenn die Zahlen stimmen.",
          },
        ],
      },
    },
  },
];
