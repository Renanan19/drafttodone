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
    },
  },
];
