import type { Locale } from "./blog-content";

/**
 * The answer-first fact block.
 *
 * Retrieval pipelines do not read a page top to bottom: they split it into
 * chunks and score each chunk against the query. A page whose first chunk
 * already answers "what is it, who is it for, what does it cost, what does it
 * NOT do" wins that scoring pass. Everything below is a fact already published
 * elsewhere on the site (pricing, outputs, compliance limits) — one wording,
 * one place, four languages.
 */

export type GlanceRow = { label: string; value: string };

export type GlanceCopy = {
  heading: string;
  /** Label for the page-specific row (filled with the page's own summary). */
  scopeLabel: string;
  updatedLabel: string;
  rows: GlanceRow[];
};

export const glanceCopy: Record<Locale, GlanceCopy> = {
  en: {
    heading: "At a glance",
    scopeLabel: "This page",
    updatedLabel: "Last updated",
    rows: [
      {
        label: "What it is",
        value:
          "AI publishing software that turns one niche brief into a complete Amazon KDP book package.",
      },
      {
        label: "Who it is for",
        value:
          "Indie publishers, self-published authors and KDP catalog operators who publish repeatedly.",
      },
      {
        label: "What you get",
        value:
          "Full manuscript, front/spine/back cover, KDP title, description and 7 backend keywords, plus a verified pen name.",
      },
      {
        label: "Time per book",
        value:
          "Roughly 30 to 45 minutes of server-side generation. Closing the tab does not lose the book.",
      },
      {
        label: "Price",
        value:
          "EUR 14.99 per week for 6 book credits, or EUR 390 per year for 312 credits. 1 credit = 1 finished book. No free plan.",
      },
      {
        label: "Agent access",
        value:
          "An AI agent can run the whole workflow through the MCP server, the CLI or the REST API.",
      },
      {
        label: "What it does not do",
        value:
          "No guarantee of Amazon rankings, KDP approval or sales. You review every file and publish from your own KDP account with the required AI-content disclosure.",
      },
    ],
  },
  fr: {
    heading: "L'essentiel",
    scopeLabel: "Cette page",
    updatedLabel: "Dernière mise à jour",
    rows: [
      {
        label: "Ce que c'est",
        value:
          "Un logiciel de publication IA qui transforme un seul brief de niche en pack de livre Amazon KDP complet.",
      },
      {
        label: "Pour qui",
        value:
          "Éditeurs indépendants, auteurs auto-édités et opérateurs de catalogues KDP qui publient régulièrement.",
      },
      {
        label: "Ce que vous obtenez",
        value:
          "Manuscrit complet, couverture (plat recto, dos, plat verso), titre, description et 7 mots-clés KDP, plus un nom de plume vérifié.",
      },
      {
        label: "Durée par livre",
        value:
          "Environ 30 à 45 minutes de génération côté serveur. Fermer l'onglet ne fait perdre aucun livre.",
      },
      {
        label: "Prix",
        value:
          "14,99 € par semaine pour 6 crédits livre, ou 390 € par an pour 312 crédits. 1 crédit = 1 livre terminé. Pas d'offre gratuite.",
      },
      {
        label: "Accès agent",
        value:
          "Un agent IA peut exécuter tout le workflow via le serveur MCP, le CLI ou l'API REST.",
      },
      {
        label: "Ce que ça ne fait pas",
        value:
          "Aucune garantie de classement Amazon, d'approbation KDP ni de ventes. Vous relisez chaque fichier et publiez depuis votre propre compte KDP avec la déclaration de contenu IA requise.",
      },
    ],
  },
  it: {
    heading: "In breve",
    scopeLabel: "Questa pagina",
    updatedLabel: "Ultimo aggiornamento",
    rows: [
      {
        label: "Che cos'è",
        value:
          "Software di publishing IA che trasforma un solo brief di nicchia in un pacchetto libro Amazon KDP completo.",
      },
      {
        label: "Per chi è",
        value:
          "Editori indipendenti, autori self-publishing e operatori di cataloghi KDP che pubblicano con continuità.",
      },
      {
        label: "Cosa ottieni",
        value:
          "Manoscritto completo, copertina (fronte, dorso, retro), titolo, descrizione e 7 keyword KDP, più uno pseudonimo verificato.",
      },
      {
        label: "Tempo per libro",
        value:
          "Circa 30-45 minuti di generazione lato server. Chiudere la scheda non fa perdere il libro.",
      },
      {
        label: "Prezzo",
        value:
          "14,99 € a settimana per 6 crediti libro, oppure 390 € all'anno per 312 crediti. 1 credito = 1 libro finito. Nessun piano gratuito.",
      },
      {
        label: "Accesso per agenti",
        value:
          "Un agente IA può eseguire l'intero workflow tramite il server MCP, la CLI o l'API REST.",
      },
      {
        label: "Cosa non fa",
        value:
          "Nessuna garanzia di posizionamento su Amazon, approvazione KDP o vendite. Rivedi ogni file e pubblichi dal tuo account KDP con la dichiarazione di contenuto IA richiesta.",
      },
    ],
  },
  de: {
    heading: "Auf einen Blick",
    scopeLabel: "Diese Seite",
    updatedLabel: "Zuletzt aktualisiert",
    rows: [
      {
        label: "Was es ist",
        value:
          "KI-Publishing-Software, die aus einem einzigen Nischenbrief ein komplettes Amazon-KDP-Buchpaket macht.",
      },
      {
        label: "Für wen",
        value:
          "Indie-Verlage, Selfpublishing-Autorinnen und -Autoren sowie KDP-Katalogbetreiber, die regelmäßig veröffentlichen.",
      },
      {
        label: "Was du bekommst",
        value:
          "Komplettes Manuskript, Cover (Vorderseite, Rücken, Rückseite), KDP-Titel, -Beschreibung und 7 Keywords sowie einen verifizierten Autorennamen.",
      },
      {
        label: "Dauer pro Buch",
        value:
          "Etwa 30 bis 45 Minuten serverseitige Generierung. Den Tab zu schließen kostet kein Buch.",
      },
      {
        label: "Preis",
        value:
          "14,99 € pro Woche für 6 Buch-Credits oder 390 € pro Jahr für 312 Credits. 1 Credit = 1 fertiges Buch. Kein Gratis-Plan.",
      },
      {
        label: "Agentenzugriff",
        value:
          "Ein KI-Agent kann den gesamten Workflow über den MCP-Server, die CLI oder die REST-API ausführen.",
      },
      {
        label: "Was es nicht tut",
        value:
          "Keine Garantie für Amazon-Rankings, KDP-Freigabe oder Verkäufe. Du prüfst jede Datei und veröffentlichst aus deinem eigenen KDP-Konto mit der erforderlichen KI-Kennzeichnung.",
      },
    ],
  },
};

/**
 * Headings for the definition / fit / contrast block.
 *
 * Cross-attention scorers reward exactly this shape — a plain definition, an
 * explicit "best for", an honest "not for", and sentences built on contrast —
 * so the labels are part of the signal, not decoration.
 */
export const contrastLabels: Record<Locale, {
  heading: string;
  definition: string;
  bestFor: string;
  notFor: string;
  contrasts: string;
}> = {
  en: {
    heading: "Is this the right fit?",
    definition: "In one sentence",
    bestFor: "Best for",
    notFor: "Not for",
    contrasts: "How it differs",
  },
  fr: {
    heading: "Est-ce fait pour vous ?",
    definition: "En une phrase",
    bestFor: "Idéal pour",
    notFor: "Pas pour",
    contrasts: "Ce qui change",
  },
  it: {
    heading: "È la scelta giusta per te?",
    definition: "In una frase",
    bestFor: "Ideale per",
    notFor: "Non adatto a",
    contrasts: "Cosa cambia",
  },
  de: {
    heading: "Passt das zu dir?",
    definition: "In einem Satz",
    bestFor: "Am besten für",
    notFor: "Nicht für",
    contrasts: "Was anders ist",
  },
};

const monthNames: Record<Locale, string[]> = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  fr: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ],
  it: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],
  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
};

/** Deterministic date wording — no Intl, so the static build never drifts with ICU. */
export function formatLongDate(locale: Locale, iso: string) {
  const [year, month, day] = iso.split("-").map((part) => Number(part));
  if (!year || !month || !day) return iso;
  const name = monthNames[locale][month - 1];

  if (locale === "en") return `${name} ${day}, ${year}`;
  if (locale === "de") return `${day}. ${name} ${year}`;
  return `${day} ${name} ${year}`;
}

/** The plain-text version of the block, reused by llms.txt and answer-engine.json. */
export function glanceFacts(locale: Locale = "en") {
  return glanceCopy[locale].rows.map((row) => `${row.label}: ${row.value}`);
}
