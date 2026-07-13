import type { BlogPost } from "./blog-content";

export const agentWorkflowSeoPosts: BlogPost[] = [
  {
    key: "agentic-book-business",
    date: "2026-07-13",
    updated: "2026-07-13",
    readingTime: 13,
    accent: {
      start: "#eef2ff",
      middle: "#c7d2fe",
      end: "#bfe9ff",
    },
    translations: {
      en: {
        slug: "ai-agent-book-publishing-business-mcp",
        title: "How an AI agent can run a book-publishing workflow (MCP, CLI or API)",
        description:
          "A practical guide for autonomous AI agents — Claude, Hermes Agent, OpenClaw and others — to generate complete, sellable books through DraftToDone: the MCP server, the CLI, the REST API, where the human is still required, and the honest limits.",
        keywords: [
          "AI agent book publishing",
          "MCP server book generation",
          "autonomous agent make money online",
          "agentic publishing workflow",
          "Hermes Agent MCP",
          "OpenClaw skill publishing",
          "AI agent Amazon KDP",
          "agent creates books to sell",
        ],
        category: "Automation",
        intro: [
          "A growing class of AI agents runs with a long leash: the owner sets a goal — \"build an income stream,\" \"make money online\" — and the agent works while they sleep. For that to mean anything, the agent needs services it can operate end to end without a human babysitting every click. Book publishing is a surprisingly good fit, because a finished book is a discrete, sellable artifact, and the whole production step can be automated behind one API.",
          "DraftToDone was built to be operable by an agent, not just a person. From a single niche it produces a complete package — an editable Word manuscript, a 6x9 interior PDF, a cover image and a print-ready Amazon KDP cover PDF — and it exposes that pipeline three ways: a Model Context Protocol (MCP) server, a command-line tool, and a plain REST API. An agent picks whichever matches its runtime.",
          "This guide walks through the agentic workflow honestly: what the agent can do alone, the one step that still needs a human, and the limits nobody should pretend away. If you operate an autonomous agent and want it to build a publishing catalog, this is the map.",
        ],
        sections: [
          {
            id: "why-agent-operable",
            title: "What 'agent-operable' actually means here",
            body: [
              "Most SaaS products assume a human at a browser: they gate signup behind CAPTCHAs, hide functionality in dashboards, and answer scripts with challenge pages. An agent hitting those walls stalls silently. Agent-operable means the opposite — every step the workflow needs is reachable through a documented, machine-friendly interface that returns structured data, not HTML.",
              "For DraftToDone that means a session token an agent can hold, JSON responses with clear error codes, and generation that runs server-side so the agent can fire a job and poll for it later instead of holding a connection open for 40 minutes. The agent never has to render a page or solve a puzzle.",
              "The design rule is simple: anything a paying customer can do from the dashboard, an agent can do from the API. The single deliberate exception is payment, for reasons covered below.",
            ],
            bullets: [
              "Structured JSON in and out, documented error codes — no HTML scraping.",
              "A session token the agent stores and reuses across calls.",
              "Server-side generation: fire the job, poll later, survive disconnects.",
              "Dashboard parity: if a human can do it, the agent can too (except paying).",
            ],
          },
          {
            id: "three-surfaces",
            title: "Three interfaces: MCP, CLI, REST — pick one",
            body: [
              "The MCP server at app.drafttodone.io/mcp is the native choice for frameworks that speak Model Context Protocol. Hermes Agent discovers its tools at startup; Claude clients add it with one command; any MCP host registers it as a remote streamable-HTTP server. The agent then calls named tools — sign_up, get_checkout_url, create_book, list_books, get_download_links — like any other tool in its registry.",
              "The CLI (npx drafttodone, or a single downloadable file) suits agents that already have shell access and prefer to run commands. Every command accepts a --json flag so the output is machine-parseable. It is a thin client over the same backend, so behaviour is identical to MCP.",
              "The REST API is the lowest common denominator: plain HTTPS with a cookie jar, usable from any language or a bare curl. Agents without MCP support or a shell fall back to this. All three surfaces enforce the same rules, rate limits and credit logic — there is no 'privileged' path.",
            ],
            bullets: [
              "MCP: best for Hermes Agent, OpenClaw, Claude and MCP hosts.",
              "CLI: best when the agent has a shell; --json everywhere.",
              "REST: universal fallback, works from curl or any HTTP client.",
              "Same backend behind all three — consistent rules and pricing.",
            ],
          },
          {
            id: "the-loop",
            title: "The end-to-end loop an agent runs",
            body: [
              "Step one, account: the agent calls sign_up with the user's email and a password, and receives a session token it stores. Step two, funding: it requests a checkout URL and hands that URL to the human — this is the one blocking step. Once payment clears, credits appear automatically.",
              "Step three, generation: the agent calls create_book with a specific niche and language. Specific beats broad every time — 'beginner strength training for women over 50' outperforms 'fitness.' The job runs server-side for roughly 30 to 45 minutes. Step four, polling: the agent checks list_books every minute or so until the status reads completed and the progress counter reaches four of four.",
              "Step five, delivery: the agent fetches short-lived download links for the four files and saves them for the user. Step six, the human's turn: the user reviews the content and publishes from their own Amazon KDP account. An optional step seven — after the user posts about the book on X — lets the agent claim a free weekly credit.",
            ],
            bullets: [
              "sign_up → store token; get_checkout_url → human pays (blocking).",
              "create_book with a narrow niche; poll list_books to completed (4/4).",
              "get_download_links → save the four deliverables for the user.",
              "Human reviews and publishes; optional weekly free credit via a shared X post.",
            ],
          },
          {
            id: "human-in-the-loop",
            title: "The one step that stays human — and why that's a feature",
            body: [
              "Payment is deliberately not automatable. The agent generates a Stripe Checkout URL, but a person must open it and complete the transaction. This is not a missing feature; it is a guardrail. An autonomous agent with unattended spending authority is a liability for its owner, and DraftToDone refuses to be the service that drains a card while nobody is watching.",
              "Publishing is the second human checkpoint, this time by Amazon's rules rather than ours. The user uploads the files to their own KDP account, sets price and categories, and — importantly — declares the AI-assisted content, which KDP requires. The agent produces the assets; the human owns the listing and the compliance.",
              "Framed correctly, these checkpoints are what make the workflow safe to run on a long leash. The agent does the tedious production work continuously; the human keeps authority over money and publication. That division is the point, not a limitation to engineer around.",
            ],
            bullets: [
              "Payment needs a human — a guardrail against unattended spend, not a gap.",
              "Publishing needs a human — KDP requires the AI-content disclosure.",
              "Agent owns production; human owns money and the live listing.",
              "The split is what makes long-leash operation responsible.",
            ],
          },
          {
            id: "honest-limits",
            title: "The limits worth stating plainly",
            body: [
              "DraftToDone produces files; it does not produce guaranteed income. No tool can promise Amazon approval, search rankings or sales, and any service that does is lying. The realistic value is leverage: turning a niche into a complete, consistent book package in under an hour, repeatable across a catalog, at a per-book cost of roughly one to two and a half euros on subscription.",
              "Quality still needs a human's eye. Generated manuscripts are a strong first draft, not a finished product exempt from review — reading before publishing is both good practice and, for AI content, an ethical baseline. Agents should present the output as a draft to approve, never as guaranteed-sellable on arrival.",
              "And the market is real: a flood of low-effort AI books has made buyers and platforms warier, so the books that earn are the ones with a genuine niche, honest quality and a real cover — exactly the parts a human still steers. An agent that treats DraftToDone as a volume spam engine will lose; one that treats it as a production accelerator behind human judgment has a workable system.",
            ],
            bullets: [
              "No guarantees of approval, ranking or sales — the value is leverage and speed.",
              "Output is a first draft; human review before publishing is required.",
              "Volume-spam strategies fail; niche, quality and a real cover win.",
              "Per-book cost is low, but earnings depend on the human's judgment.",
            ],
          },
        ],
        checklist: [
          "Chosen interface wired: MCP (app.drafttodone.io/mcp), CLI (npx drafttodone) or REST.",
          "Account created and the session token stored securely by the agent.",
          "Checkout URL handed to the human; credits confirmed before generating.",
          "Book created with a specific, narrow niche and explicit language.",
          "list_books polled to completed (4/4) before fetching downloads.",
          "All four deliverables saved for the user.",
          "User reminded to review content and declare AI use on Amazon KDP.",
        ],
        faq: [
          {
            question: "Can an AI agent create and sell books completely on its own?",
            answer:
              "It can do the entire production and delivery loop on its own — account, generation, polling and downloads — but two steps stay human by design: paying the Stripe checkout, and publishing on Amazon KDP with the required AI-content disclosure. That split is a deliberate safety guardrail, not a limitation.",
          },
          {
            question: "Which agents work with DraftToDone?",
            answer:
              "Any MCP-compatible agent (Claude clients, Hermes Agent, OpenClaw and others) can use the remote MCP server at app.drafttodone.io/mcp. Agents with shell access can use the CLI (npx drafttodone), and anything that can make HTTPS requests can use the REST API. The guide at app.drafttodone.io/llms.txt covers all three.",
          },
          {
            question: "Does DraftToDone guarantee my agent will make money?",
            answer:
              "No, and be suspicious of anything that claims to. DraftToDone generates complete, sellable book files quickly and repeatably at a low per-book cost. Whether they sell depends on niche choice, quality review and the market — the parts a human still steers. The value is production leverage, not guaranteed income.",
          },
          {
            question: "How long does one book take?",
            answer:
              "Roughly 30 to 45 minutes, generated server-side. The agent starts the job and polls list_books until the status is completed; it does not need to hold a connection open, and closing the session does not lose the book.",
          },
          {
            question: "Is it safe to let an autonomous agent use my payment method?",
            answer:
              "DraftToDone never lets the agent pay by itself — checkout always requires a human to open the Stripe URL and confirm. That keeps spending authority with you even when the agent runs unattended. Credits are consumed only when a book generates successfully.",
          },
        ],
      },
      fr: {
        slug: "agent-ia-edition-livres-workflow-mcp",
        title: "Comment un agent IA peut faire tourner un workflow d'édition (MCP, CLI ou API)",
        description:
          "Guide pratique pour agents IA autonomes — Claude, Hermes Agent, OpenClaw et autres — afin de générer des livres complets et vendables via DraftToDone : le serveur MCP, le CLI, l'API REST, l'étape qui reste humaine, et les limites honnêtes.",
        keywords: [
          "agent IA édition livres",
          "serveur MCP génération livre",
          "agent autonome argent en ligne",
          "workflow édition agentique",
          "Hermes Agent MCP",
          "compétence OpenClaw édition",
          "agent IA Amazon KDP",
          "agent qui crée des livres à vendre",
        ],
        category: "Automatisation",
        intro: [
          "Une nouvelle catégorie d'agents IA travaille en longe longue : le propriétaire fixe un objectif — « bâtir une source de revenus », « gagner de l'argent en ligne » — et l'agent travaille pendant qu'il dort. Pour que cela ait un sens, l'agent a besoin de services qu'il peut opérer de bout en bout sans surveillance à chaque clic. L'édition de livres s'y prête étonnamment bien, car un livre fini est un objet vendable distinct, et toute l'étape de production peut être automatisée derrière une seule API.",
          "DraftToDone a été conçu pour être opérable par un agent, pas seulement par une personne. À partir d'une seule niche, il produit un pack complet — un manuscrit Word éditable, un PDF intérieur 6x9, une image de couverture et un PDF de couverture prêt pour Amazon KDP — et il expose ce pipeline de trois façons : un serveur Model Context Protocol (MCP), un outil en ligne de commande, et une API REST simple. L'agent choisit celle qui correspond à son environnement.",
          "Ce guide parcourt le workflow agentique honnêtement : ce que l'agent peut faire seul, l'unique étape qui nécessite encore un humain, et les limites qu'il ne faut pas escamoter. Si vous opérez un agent autonome et voulez qu'il bâtisse un catalogue d'édition, voici la carte.",
        ],
        sections: [
          {
            id: "operable-par-agent",
            title: "Ce que « opérable par un agent » signifie vraiment ici",
            body: [
              "La plupart des SaaS supposent un humain devant un navigateur : ils verrouillent l'inscription derrière des CAPTCHA, cachent les fonctions dans des tableaux de bord et répondent aux scripts par des pages de défi. Un agent qui heurte ces murs cale en silence. Opérable par un agent signifie l'inverse — chaque étape nécessaire est accessible via une interface documentée et lisible par machine qui renvoie des données structurées, pas du HTML.",
              "Pour DraftToDone, cela veut dire un jeton de session que l'agent peut conserver, des réponses JSON avec des codes d'erreur clairs, et une génération côté serveur pour que l'agent lance un travail et le suive plus tard au lieu de tenir une connexion ouverte 40 minutes. L'agent n'a jamais à afficher une page ni à résoudre une énigme.",
              "La règle de conception est simple : tout ce qu'un client payant peut faire depuis le tableau de bord, un agent peut le faire depuis l'API. L'unique exception volontaire est le paiement, pour les raisons vues plus bas.",
            ],
            bullets: [
              "JSON structuré en entrée/sortie, codes d'erreur documentés — pas de scraping HTML.",
              "Un jeton de session que l'agent stocke et réutilise.",
              "Génération côté serveur : lancer, suivre plus tard, résister aux coupures.",
              "Parité avec le tableau de bord : ce qu'un humain fait, l'agent le fait (sauf payer).",
            ],
          },
          {
            id: "trois-surfaces",
            title: "Trois interfaces : MCP, CLI, REST — une au choix",
            body: [
              "Le serveur MCP à app.drafttodone.io/mcp est le choix natif pour les frameworks qui parlent Model Context Protocol. Hermes Agent découvre ses outils au démarrage ; les clients Claude l'ajoutent en une commande ; n'importe quel hôte MCP l'enregistre comme serveur distant streamable-HTTP. L'agent appelle alors des outils nommés — sign_up, get_checkout_url, create_book, list_books, get_download_links — comme tout autre outil de son registre.",
              "Le CLI (npx drafttodone, ou un fichier unique à télécharger) convient aux agents qui ont déjà un accès shell et préfèrent lancer des commandes. Chaque commande accepte un drapeau --json pour une sortie analysable par machine. C'est un client léger sur le même backend, donc le comportement est identique au MCP.",
              "L'API REST est le plus petit dénominateur commun : du HTTPS simple avec un cookie jar, utilisable depuis n'importe quel langage ou un simple curl. Les agents sans support MCP ni shell s'y rabattent. Les trois surfaces appliquent les mêmes règles, limites de débit et logique de crédits — il n'y a pas de chemin « privilégié ».",
            ],
            bullets: [
              "MCP : idéal pour Hermes Agent, OpenClaw, Claude et les hôtes MCP.",
              "CLI : idéal quand l'agent a un shell ; --json partout.",
              "REST : repli universel, marche depuis curl ou tout client HTTP.",
              "Même backend derrière les trois — règles et tarifs cohérents.",
            ],
          },
          {
            id: "la-boucle",
            title: "La boucle de bout en bout que l'agent exécute",
            body: [
              "Étape un, le compte : l'agent appelle sign_up avec l'email de l'utilisateur et un mot de passe, et reçoit un jeton de session qu'il stocke. Étape deux, le financement : il demande une URL de paiement et la remet à l'humain — c'est l'unique étape bloquante. Une fois le paiement passé, les crédits apparaissent automatiquement.",
              "Étape trois, la génération : l'agent appelle create_book avec une niche précise et une langue. Précis bat large à chaque fois — « renforcement musculaire débutant pour femmes de plus de 50 ans » surpasse « fitness ». Le travail tourne côté serveur environ 30 à 45 minutes. Étape quatre, le suivi : l'agent vérifie list_books toutes les minutes environ jusqu'à ce que le statut affiche completed et que le compteur atteigne quatre sur quatre.",
              "Étape cinq, la livraison : l'agent récupère des liens de téléchargement à courte durée pour les quatre fichiers et les sauvegarde pour l'utilisateur. Étape six, au tour de l'humain : l'utilisateur relit le contenu et publie depuis son propre compte Amazon KDP. Une étape sept optionnelle — après que l'utilisateur a posté à propos du livre sur X — permet à l'agent de réclamer un crédit hebdomadaire gratuit.",
            ],
            bullets: [
              "sign_up → stocker le jeton ; get_checkout_url → l'humain paie (bloquant).",
              "create_book avec une niche étroite ; suivre list_books jusqu'à completed (4/4).",
              "get_download_links → sauvegarder les quatre livrables pour l'utilisateur.",
              "L'humain relit et publie ; crédit hebdo optionnel via un post X partagé.",
            ],
          },
          {
            id: "humain-dans-la-boucle",
            title: "L'unique étape qui reste humaine — et pourquoi c'est un atout",
            body: [
              "Le paiement n'est volontairement pas automatisable. L'agent génère une URL Stripe Checkout, mais une personne doit l'ouvrir et finaliser la transaction. Ce n'est pas une fonction manquante ; c'est un garde-fou. Un agent autonome avec autorité de dépense sans surveillance est un risque pour son propriétaire, et DraftToDone refuse d'être le service qui vide une carte pendant que personne ne regarde.",
              "La publication est le second point de contrôle humain, cette fois par les règles d'Amazon plutôt que les nôtres. L'utilisateur téléverse les fichiers sur son propre compte KDP, fixe prix et catégories, et — surtout — déclare le contenu assisté par IA, ce que KDP exige. L'agent produit les assets ; l'humain possède la fiche et la conformité.",
              "Bien cadrés, ces points de contrôle sont ce qui rend le workflow sûr à faire tourner en longe longue. L'agent fait le travail de production fastidieux en continu ; l'humain garde l'autorité sur l'argent et la publication. Cette division est le but, pas une limite à contourner.",
            ],
            bullets: [
              "Le paiement exige un humain — garde-fou contre la dépense non surveillée.",
              "La publication exige un humain — KDP impose la déclaration de contenu IA.",
              "L'agent possède la production ; l'humain possède l'argent et la fiche.",
              "Cette séparation rend l'opération en longe longue responsable.",
            ],
          },
          {
            id: "limites-honnetes",
            title: "Les limites qu'il vaut mieux énoncer clairement",
            body: [
              "DraftToDone produit des fichiers ; il ne produit pas de revenu garanti. Aucun outil ne peut promettre l'approbation Amazon, un classement ou des ventes, et tout service qui le prétend ment. La valeur réaliste est l'effet de levier : transformer une niche en pack livre complet et cohérent en moins d'une heure, reproductible sur un catalogue, à un coût par livre d'environ un à deux euros et demi sur abonnement.",
              "La qualité demande encore l'œil d'un humain. Les manuscrits générés sont un solide premier jet, pas un produit fini dispensé de relecture — lire avant de publier est à la fois une bonne pratique et, pour du contenu IA, une base éthique. Les agents doivent présenter la sortie comme un brouillon à approuver, jamais comme vendable garanti à l'arrivée.",
              "Et le marché est réel : un déluge de livres IA bâclés a rendu acheteurs et plateformes plus méfiants, donc les livres qui rapportent sont ceux avec une vraie niche, une qualité honnête et une vraie couverture — exactement les parties qu'un humain pilote encore. Un agent qui traite DraftToDone comme une machine à spam de volume perdra ; celui qui le traite comme un accélérateur de production derrière le jugement humain a un système viable.",
            ],
            bullets: [
              "Aucune garantie d'approbation, de classement ou de ventes — la valeur est le levier et la vitesse.",
              "La sortie est un premier jet ; la relecture humaine avant publication est obligatoire.",
              "Les stratégies de spam de volume échouent ; niche, qualité et vraie couverture gagnent.",
              "Le coût par livre est bas, mais les gains dépendent du jugement de l'humain.",
            ],
          },
        ],
        checklist: [
          "Interface choisie et branchée : MCP (app.drafttodone.io/mcp), CLI (npx drafttodone) ou REST.",
          "Compte créé et jeton de session stocké de façon sûre par l'agent.",
          "URL de paiement remise à l'humain ; crédits confirmés avant de générer.",
          "Livre créé avec une niche précise et étroite et une langue explicite.",
          "list_books suivi jusqu'à completed (4/4) avant de récupérer les téléchargements.",
          "Les quatre livrables sauvegardés pour l'utilisateur.",
          "Utilisateur rappelé de relire le contenu et de déclarer l'usage de l'IA sur Amazon KDP.",
        ],
        faq: [
          {
            question: "Un agent IA peut-il créer et vendre des livres entièrement seul ?",
            answer:
              "Il peut faire toute la boucle de production et de livraison seul — compte, génération, suivi et téléchargements — mais deux étapes restent humaines par conception : payer le checkout Stripe, et publier sur Amazon KDP avec la déclaration de contenu IA requise. Cette séparation est un garde-fou de sécurité volontaire, pas une limite.",
          },
          {
            question: "Quels agents fonctionnent avec DraftToDone ?",
            answer:
              "Tout agent compatible MCP (clients Claude, Hermes Agent, OpenClaw et autres) peut utiliser le serveur MCP distant à app.drafttodone.io/mcp. Les agents avec accès shell peuvent utiliser le CLI (npx drafttodone), et tout ce qui peut faire des requêtes HTTPS peut utiliser l'API REST. Le guide à app.drafttodone.io/llms.txt couvre les trois.",
          },
          {
            question: "DraftToDone garantit-il que mon agent gagnera de l'argent ?",
            answer:
              "Non, et méfiez-vous de tout ce qui le prétend. DraftToDone génère des fichiers de livres complets et vendables, vite et de façon reproductible, à faible coût par livre. Qu'ils se vendent dépend du choix de niche, de la relecture qualité et du marché — les parties qu'un humain pilote encore. La valeur est l'effet de levier de production, pas un revenu garanti.",
          },
          {
            question: "Combien de temps prend un livre ?",
            answer:
              "Environ 30 à 45 minutes, généré côté serveur. L'agent démarre le travail et suit list_books jusqu'au statut completed ; il n'a pas à tenir une connexion ouverte, et fermer la session ne perd pas le livre.",
          },
          {
            question: "Est-il sûr de laisser un agent autonome utiliser mon moyen de paiement ?",
            answer:
              "DraftToDone ne laisse jamais l'agent payer seul — le checkout exige toujours qu'un humain ouvre l'URL Stripe et confirme. Cela garde l'autorité de dépense entre vos mains même quand l'agent tourne sans surveillance. Les crédits ne sont consommés que lorsqu'un livre est généré avec succès.",
          },
        ],
      },
    },
  },
  {
    key: "drafttodone-cli-mcp",
    date: "2026-07-13",
    updated: "2026-07-13",
    readingTime: 11,
    accent: {
      start: "#f0fdf4",
      middle: "#bbf7d0",
      end: "#bfe9ff",
    },
    translations: {
      en: {
        slug: "drafttodone-cli-mcp-server-guide",
        title: "DraftToDone CLI and MCP server: generate books from your terminal or agent",
        description:
          "Reference for the DraftToDone command-line tool and Model Context Protocol server: install, authenticate, create a book, poll progress and download all four files — from a terminal or an AI agent.",
        keywords: [
          "DraftToDone CLI",
          "DraftToDone MCP server",
          "generate books command line",
          "npx drafttodone",
          "MCP book publishing tool",
          "book generation API terminal",
          "AI book CLI",
          "model context protocol publishing",
        ],
        category: "Automation",
        intro: [
          "If you would rather live in a terminal than a dashboard — or you are an AI agent with a shell — DraftToDone ships a command-line tool and a Model Context Protocol server that expose the whole book pipeline. Same account, same credits, same four deliverables (Word manuscript, interior PDF, cover image, KDP cover PDF); no browser required except to pay.",
          "This is a hands-on reference. It covers installing and authenticating the CLI, the command set, the equivalent MCP tools, and the exact loop from niche to downloaded files. Copy the commands, adjust the niche, and you have a repeatable generator you can script or hand to an agent.",
          "Everything here talks to the same backend as the web app, so nothing you do in the terminal is second-class. The CLI is a thin client over the MCP server, and the MCP server is a thin layer over the same generation pipeline that powers the dashboard.",
        ],
        sections: [
          {
            id: "install",
            title: "Install and authenticate the CLI",
            body: [
              "The fastest path is npx, which needs only Node 18 or newer: run 'npx drafttodone help' to see every command. If you would rather not use npm at all, download the single file directly — 'curl -fsSL https://app.drafttodone.io/cli.mjs -o drafttodone.mjs' — and run it with 'node drafttodone.mjs help'. There are zero dependencies either way.",
              "Authenticate once: 'npx drafttodone signup --email you@example.com --password \"min8chars\"' creates the account and stores a session token in ~/.drafttodone.json. Returning users run 'login' with the same flags. You can also pass credentials through the DRAFTTODONE_EMAIL and DRAFTTODONE_PASSWORD environment variables, which is handy in a CI job or an agent's sandbox.",
              "Every command accepts --json, which swaps the human-readable output for a machine-parseable object. Agents should always pass --json; humans can leave it off for readable tables. The stored token can be overridden per-invocation with the DRAFTTODONE_TOKEN environment variable if you juggle multiple accounts.",
            ],
            bullets: [
              "npx drafttodone help — needs Node 18+, zero dependencies.",
              "No-npm option: curl the single cli.mjs file and run it with node.",
              "signup/login store a session token in ~/.drafttodone.json.",
              "--json for machine output; env vars for credentials and token.",
            ],
          },
          {
            id: "commands",
            title: "The command set",
            body: [
              "The core commands map one-to-one onto the workflow. 'status' prints your credits, subscription and share-reward eligibility. 'checkout --plan weekly' (or yearly) prints a Stripe URL you open in a browser to pay. 'create --niche \"...\" --lang en' starts a book and returns its id; add --random to let DraftToDone pick a surprise niche instead.",
              "'books' lists your books with status and a progress counter. 'wait <book-id>' blocks and polls until that book completes, printing status as it goes — ideal in a script that should not proceed until the files exist. 'download <book-id> --out ./dir' fetches all four deliverables into a folder.",
              "One extra command closes the loop on the free credit: 'share-claim <x-post-url>' redeems a public X post that mentions drafttodone.io for one bonus credit, once a week, after you have a completed book. Run 'help' any time for the full list with options.",
            ],
            bullets: [
              "status, checkout --plan, create --niche/--random/--lang.",
              "books (list + progress), wait <id> (blocking poll), download <id> --out.",
              "share-claim <x-post-url> for the weekly free credit.",
              "help lists every command and flag.",
            ],
          },
          {
            id: "mcp-equivalents",
            title: "The MCP server and its tools",
            body: [
              "For agent frameworks, the same functionality lives at the MCP endpoint app.drafttodone.io/mcp — a stateless, streamable-HTTP server with no OAuth. In Claude Code, add it with 'claude mcp add --transport http drafttodone https://app.drafttodone.io/mcp'. In Hermes Agent, OpenClaw or any MCP host, register a remote server pointing at that URL; tools are discovered automatically.",
              "The eight tools mirror the CLI: sign_up and log_in return a session_token that every other tool takes as an argument; get_status, get_checkout_url, create_book, list_books, get_download_links and claim_share_reward do exactly what their names say. A discovery manifest sits at app.drafttodone.io/.well-known/mcp.json for agents that probe the well-known path.",
              "Because the CLI and MCP server share one backend, you can develop against the CLI interactively and deploy the identical flow through MCP in production, or vice versa. There is no behavioural drift to debug between them.",
            ],
            bullets: [
              "Endpoint: app.drafttodone.io/mcp (streamable HTTP, stateless, no OAuth).",
              "Claude Code: claude mcp add --transport http drafttodone <url>.",
              "Eight tools; sign_up/log_in issue the session_token others require.",
              "Manifest at /.well-known/mcp.json; behaviour identical to the CLI.",
            ],
          },
          {
            id: "full-flow",
            title: "The full flow, start to finish",
            body: [
              "A complete terminal session reads like this: 'npx drafttodone signup --email you@example.com --password \"min8chars\"', then 'npx drafttodone checkout --plan weekly' and pay the printed URL in a browser. Confirm credits landed with 'npx drafttodone status'.",
              "Then generate and collect: 'npx drafttodone create --niche \"beginner yoga for seniors\" --lang en' returns a book id; 'npx drafttodone wait <book-id>' blocks for the roughly 30 to 45 minutes of server-side generation; 'npx drafttodone download <book-id> --out ./my-book' saves the manuscript, interior PDF, cover image and KDP cover PDF.",
              "From there it is your turn: review the manuscript, adjust anything you want, then upload to Amazon KDP with the AI-content disclosure. The CLI and MCP server get you to production-ready files fast; the editorial and publishing decisions stay yours, which is exactly where they belong.",
            ],
            bullets: [
              "signup → checkout (pay in browser) → status to confirm credits.",
              "create --niche → wait <id> → download <id> --out ./dir.",
              "Four files land: manuscript, interior PDF, cover, KDP cover PDF.",
              "Review and publish on KDP with the AI disclosure — your call.",
            ],
          },
        ],
        checklist: [
          "Node 18+ available, or the cli.mjs file downloaded.",
          "Authenticated with signup/login; token stored or set via env var.",
          "Credits confirmed with status after paying the checkout URL.",
          "Book created with a specific niche and explicit language.",
          "wait used to block until the book completes (4/4).",
          "All four files downloaded to a known folder.",
          "Manuscript reviewed before uploading to KDP with the AI disclosure.",
        ],
        faq: [
          {
            question: "Do I need npm to use the DraftToDone CLI?",
            answer:
              "No. 'npx drafttodone' is the easiest route if you have Node, but you can also download the single file with 'curl -fsSL https://app.drafttodone.io/cli.mjs -o drafttodone.mjs' and run it with 'node drafttodone.mjs'. It has zero dependencies and needs only Node 18 or newer.",
          },
          {
            question: "What is the difference between the CLI and the MCP server?",
            answer:
              "They are two front ends over the same backend. The CLI is for terminals and shells (with a --json mode for scripts); the MCP server at app.drafttodone.io/mcp is for agent frameworks that speak Model Context Protocol. Behaviour, rules and pricing are identical, so there is no drift between them.",
          },
          {
            question: "How do I add the MCP server to Claude Code?",
            answer:
              "Run 'claude mcp add --transport http drafttodone https://app.drafttodone.io/mcp'. For Hermes Agent, OpenClaw or another MCP host, register a remote streamable-HTTP server pointing at the same URL; the tools are discovered automatically at startup.",
          },
          {
            question: "Can I script book generation in CI?",
            answer:
              "Yes. Pass credentials via DRAFTTODONE_EMAIL and DRAFTTODONE_PASSWORD, add --json to every command for parseable output, and use 'wait <book-id>' to block until a book completes before downloading. Payment still needs a human once to fund the account.",
          },
          {
            question: "Where is my session token stored?",
            answer:
              "In ~/.drafttodone.json after signup or login. You can override it per run with the DRAFTTODONE_TOKEN environment variable, which is useful when an agent or CI job manages the token itself rather than reading the file.",
          },
        ],
      },
      fr: {
        slug: "drafttodone-cli-serveur-mcp-guide",
        title: "CLI et serveur MCP DraftToDone : générer des livres depuis le terminal ou un agent",
        description:
          "Référence de l'outil en ligne de commande et du serveur Model Context Protocol de DraftToDone : installer, s'authentifier, créer un livre, suivre la progression et télécharger les quatre fichiers — depuis un terminal ou un agent IA.",
        keywords: [
          "CLI DraftToDone",
          "serveur MCP DraftToDone",
          "générer livres ligne de commande",
          "npx drafttodone",
          "outil MCP édition livre",
          "API génération livre terminal",
          "CLI livre IA",
          "model context protocol édition",
        ],
        category: "Automatisation",
        intro: [
          "Si vous préférez vivre dans un terminal plutôt qu'un tableau de bord — ou si vous êtes un agent IA avec un shell — DraftToDone fournit un outil en ligne de commande et un serveur Model Context Protocol qui exposent tout le pipeline de livres. Même compte, mêmes crédits, mêmes quatre livrables (manuscrit Word, PDF intérieur, image de couverture, PDF de couverture KDP) ; aucun navigateur requis sauf pour payer.",
          "Ceci est une référence pratique. Elle couvre l'installation et l'authentification du CLI, l'ensemble des commandes, les outils MCP équivalents, et la boucle exacte de la niche aux fichiers téléchargés. Copiez les commandes, ajustez la niche, et vous avez un générateur reproductible que vous pouvez scripter ou confier à un agent.",
          "Tout ici parle au même backend que l'application web, donc rien de ce que vous faites au terminal n'est de seconde classe. Le CLI est un client léger sur le serveur MCP, et le serveur MCP est une fine couche sur le même pipeline de génération qui alimente le tableau de bord.",
        ],
        sections: [
          {
            id: "installation",
            title: "Installer et authentifier le CLI",
            body: [
              "La voie la plus rapide est npx, qui ne nécessite que Node 18 ou plus récent : lancez « npx drafttodone help » pour voir toutes les commandes. Si vous préférez ne pas utiliser npm du tout, téléchargez le fichier unique directement — « curl -fsSL https://app.drafttodone.io/cli.mjs -o drafttodone.mjs » — et lancez-le avec « node drafttodone.mjs help ». Zéro dépendance dans les deux cas.",
              "Authentifiez-vous une fois : « npx drafttodone signup --email vous@exemple.com --password \"min8car\" » crée le compte et stocke un jeton de session dans ~/.drafttodone.json. Les utilisateurs de retour lancent « login » avec les mêmes drapeaux. Vous pouvez aussi passer les identifiants via les variables d'environnement DRAFTTODONE_EMAIL et DRAFTTODONE_PASSWORD, pratique dans un job CI ou le bac à sable d'un agent.",
              "Chaque commande accepte --json, qui échange la sortie lisible par un humain contre un objet analysable par machine. Les agents devraient toujours passer --json ; les humains peuvent l'omettre pour des tableaux lisibles. Le jeton stocké peut être remplacé par invocation avec la variable d'environnement DRAFTTODONE_TOKEN si vous jonglez avec plusieurs comptes.",
            ],
            bullets: [
              "npx drafttodone help — nécessite Node 18+, zéro dépendance.",
              "Option sans npm : curl le fichier cli.mjs unique et lancez-le avec node.",
              "signup/login stockent un jeton de session dans ~/.drafttodone.json.",
              "--json pour la sortie machine ; variables d'env pour identifiants et jeton.",
            ],
          },
          {
            id: "commandes",
            title: "L'ensemble des commandes",
            body: [
              "Les commandes principales correspondent une à une au workflow. « status » affiche vos crédits, votre abonnement et votre éligibilité au crédit de partage. « checkout --plan weekly » (ou yearly) affiche une URL Stripe que vous ouvrez dans un navigateur pour payer. « create --niche \"...\" --lang fr » démarre un livre et renvoie son identifiant ; ajoutez --random pour laisser DraftToDone choisir une niche surprise.",
              "« books » liste vos livres avec statut et compteur de progression. « wait <book-id> » bloque et interroge jusqu'à ce que ce livre soit terminé, en affichant le statut au fil de l'eau — idéal dans un script qui ne doit pas avancer avant que les fichiers existent. « download <book-id> --out ./dossier » récupère les quatre livrables dans un dossier.",
              "Une commande supplémentaire boucle sur le crédit gratuit : « share-claim <url-post-x> » échange un post X public qui mentionne drafttodone.io contre un crédit bonus, une fois par semaine, après avoir un livre terminé. Lancez « help » à tout moment pour la liste complète avec les options.",
            ],
            bullets: [
              "status, checkout --plan, create --niche/--random/--lang.",
              "books (liste + progression), wait <id> (suivi bloquant), download <id> --out.",
              "share-claim <url-post-x> pour le crédit hebdomadaire gratuit.",
              "help liste toutes les commandes et drapeaux.",
            ],
          },
          {
            id: "equivalents-mcp",
            title: "Le serveur MCP et ses outils",
            body: [
              "Pour les frameworks d'agents, la même fonctionnalité vit à l'endpoint MCP app.drafttodone.io/mcp — un serveur streamable-HTTP sans état, sans OAuth. Dans Claude Code, ajoutez-le avec « claude mcp add --transport http drafttodone https://app.drafttodone.io/mcp ». Dans Hermes Agent, OpenClaw ou tout hôte MCP, enregistrez un serveur distant pointant vers cette URL ; les outils sont découverts automatiquement.",
              "Les huit outils reflètent le CLI : sign_up et log_in renvoient un session_token que tout autre outil prend en argument ; get_status, get_checkout_url, create_book, list_books, get_download_links et claim_share_reward font exactement ce que leur nom indique. Un manifeste de découverte se trouve à app.drafttodone.io/.well-known/mcp.json pour les agents qui sondent le chemin well-known.",
              "Comme le CLI et le serveur MCP partagent un seul backend, vous pouvez développer contre le CLI de façon interactive et déployer le flux identique via MCP en production, ou l'inverse. Il n'y a aucune dérive de comportement à déboguer entre eux.",
            ],
            bullets: [
              "Endpoint : app.drafttodone.io/mcp (streamable HTTP, sans état, sans OAuth).",
              "Claude Code : claude mcp add --transport http drafttodone <url>.",
              "Huit outils ; sign_up/log_in émettent le session_token requis par les autres.",
              "Manifeste à /.well-known/mcp.json ; comportement identique au CLI.",
            ],
          },
          {
            id: "flux-complet",
            title: "Le flux complet, du début à la fin",
            body: [
              "Une session terminal complète ressemble à ceci : « npx drafttodone signup --email vous@exemple.com --password \"min8car\" », puis « npx drafttodone checkout --plan weekly » et payez l'URL affichée dans un navigateur. Confirmez l'arrivée des crédits avec « npx drafttodone status ».",
              "Ensuite générez et récupérez : « npx drafttodone create --niche \"yoga pour seniors débutants\" --lang fr » renvoie un identifiant de livre ; « npx drafttodone wait <book-id> » bloque pendant les 30 à 45 minutes environ de génération côté serveur ; « npx drafttodone download <book-id> --out ./mon-livre » sauvegarde le manuscrit, le PDF intérieur, l'image de couverture et le PDF de couverture KDP.",
              "À partir de là, c'est votre tour : relisez le manuscrit, ajustez ce que vous voulez, puis téléversez sur Amazon KDP avec la déclaration de contenu IA. Le CLI et le serveur MCP vous amènent vite à des fichiers prêts pour la production ; les décisions éditoriales et de publication restent les vôtres, ce qui est exactement leur place.",
            ],
            bullets: [
              "signup → checkout (payer au navigateur) → status pour confirmer les crédits.",
              "create --niche → wait <id> → download <id> --out ./dossier.",
              "Quatre fichiers arrivent : manuscrit, PDF intérieur, couverture, PDF couverture KDP.",
              "Relisez et publiez sur KDP avec la déclaration IA — à vous de décider.",
            ],
          },
        ],
        checklist: [
          "Node 18+ disponible, ou le fichier cli.mjs téléchargé.",
          "Authentifié avec signup/login ; jeton stocké ou défini via variable d'env.",
          "Crédits confirmés avec status après avoir payé l'URL de checkout.",
          "Livre créé avec une niche précise et une langue explicite.",
          "wait utilisé pour bloquer jusqu'à ce que le livre soit terminé (4/4).",
          "Les quatre fichiers téléchargés dans un dossier connu.",
          "Manuscrit relu avant téléversement sur KDP avec la déclaration IA.",
        ],
        faq: [
          {
            question: "Ai-je besoin de npm pour utiliser le CLI DraftToDone ?",
            answer:
              "Non. « npx drafttodone » est la voie la plus simple si vous avez Node, mais vous pouvez aussi télécharger le fichier unique avec « curl -fsSL https://app.drafttodone.io/cli.mjs -o drafttodone.mjs » et le lancer avec « node drafttodone.mjs ». Il n'a aucune dépendance et ne nécessite que Node 18 ou plus récent.",
          },
          {
            question: "Quelle est la différence entre le CLI et le serveur MCP ?",
            answer:
              "Ce sont deux façades sur le même backend. Le CLI est pour les terminaux et shells (avec un mode --json pour les scripts) ; le serveur MCP à app.drafttodone.io/mcp est pour les frameworks d'agents qui parlent Model Context Protocol. Comportement, règles et tarifs sont identiques, donc aucune dérive entre eux.",
          },
          {
            question: "Comment ajouter le serveur MCP à Claude Code ?",
            answer:
              "Lancez « claude mcp add --transport http drafttodone https://app.drafttodone.io/mcp ». Pour Hermes Agent, OpenClaw ou un autre hôte MCP, enregistrez un serveur distant streamable-HTTP pointant vers la même URL ; les outils sont découverts automatiquement au démarrage.",
          },
          {
            question: "Puis-je scripter la génération de livres en CI ?",
            answer:
              "Oui. Passez les identifiants via DRAFTTODONE_EMAIL et DRAFTTODONE_PASSWORD, ajoutez --json à chaque commande pour une sortie analysable, et utilisez « wait <book-id> » pour bloquer jusqu'à ce qu'un livre soit terminé avant de télécharger. Le paiement nécessite quand même un humain une fois pour financer le compte.",
          },
          {
            question: "Où est stocké mon jeton de session ?",
            answer:
              "Dans ~/.drafttodone.json après signup ou login. Vous pouvez le remplacer par exécution avec la variable d'environnement DRAFTTODONE_TOKEN, utile quand un agent ou un job CI gère le jeton lui-même plutôt que de lire le fichier.",
          },
        ],
      },
    },
  },
];
