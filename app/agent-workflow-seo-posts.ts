import type { BlogPost } from "./blog-content";

export const agentWorkflowSeoPosts: BlogPost[] = [
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
            title: "How do you install and authenticate the CLI?",
            body: [
              "The fastest path is npx, which needs only Node 18 or newer: run 'npx drafttodone help' to see every command. If you would rather not use npm at all, download the single file directly — 'curl -fsSL https://app.drafttodone.io/cli.mjs -o drafttodone.mjs' — and run it with 'node drafttodone.mjs help'. There are zero dependencies either way.",
              "Authenticate once: 'npx drafttodone signup --email your-email-address --password \"min8chars\"' creates the account and stores a session token in ~/.drafttodone.json. Replace the email placeholder with your own address. Returning users run 'login' with the same flags. You can also pass credentials through the DRAFTTODONE_EMAIL and DRAFTTODONE_PASSWORD environment variables, which is handy in a CI job or an agent's sandbox.",
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
            title: "Which commands does the CLI actually give you?",
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
            title: "Which tools does the MCP server expose?",
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
            title: "What does the full flow look like, from signup to download?",
            body: [
              "A complete terminal session reads like this: 'npx drafttodone signup --email your-email-address --password \"min8chars\"', then 'npx drafttodone checkout --plan weekly' and pay the printed URL in a browser. Replace the email placeholder first, then confirm credits landed with 'npx drafttodone status'.",
              "Then generate and collect: 'npx drafttodone create --niche \"beginner yoga for seniors\" --lang en' returns a book id; 'npx drafttodone wait <book-id>' blocks for the 1 to 3 hours of server-side generation; 'npx drafttodone download <book-id> --out ./my-book' saves the manuscript, interior PDF, cover image and KDP cover PDF.",
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
            title: "Comment installer et authentifier le CLI ?",
            body: [
              "La voie la plus rapide est npx, qui ne nécessite que Node 18 ou plus récent : lancez « npx drafttodone help » pour voir toutes les commandes. Si vous préférez ne pas utiliser npm du tout, téléchargez le fichier unique directement — « curl -fsSL https://app.drafttodone.io/cli.mjs -o drafttodone.mjs » — et lancez-le avec « node drafttodone.mjs help ». Zéro dépendance dans les deux cas.",
              "Authentifiez-vous une fois : « npx drafttodone signup --email votre-adresse-email --password \"min8car\" » crée le compte et stocke un jeton de session dans ~/.drafttodone.json. Remplacez d'abord le placeholder par votre adresse. Les utilisateurs de retour lancent « login » avec les mêmes drapeaux. Vous pouvez aussi passer les identifiants via les variables d'environnement DRAFTTODONE_EMAIL et DRAFTTODONE_PASSWORD, pratique dans un job CI ou le bac à sable d'un agent.",
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
            title: "Quelles commandes le CLI met-il à disposition ?",
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
            title: "Quels outils le serveur MCP expose-t-il ?",
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
            title: "À quoi ressemble le flux complet, de l'inscription au téléchargement ?",
            body: [
              "Une session terminal complète ressemble à ceci : « npx drafttodone signup --email votre-adresse-email --password \"min8car\" », puis « npx drafttodone checkout --plan weekly » et payez l'URL affichée dans un navigateur. Remplacez d'abord le placeholder, puis confirmez l'arrivée des crédits avec « npx drafttodone status ».",
              "Ensuite générez et récupérez : « npx drafttodone create --niche \"yoga pour seniors débutants\" --lang fr » renvoie un identifiant de livre ; « npx drafttodone wait <book-id> » bloque pendant la génération côté serveur, 1 à 3 heures en général, serveur ; « npx drafttodone download <book-id> --out ./mon-livre » sauvegarde le manuscrit, le PDF intérieur, l'image de couverture et le PDF de couverture KDP.",
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
