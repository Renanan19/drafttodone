import type { Locale } from "./blog-content";

/**
 * Copy for the collection routes (the localized blog indexes).
 *
 * A collection page is retrieved differently from an article. An engine
 * scoring a category page is not looking for prose: it is looking for an
 * enumerable list, and for one self-contained sentence that states what the
 * collection contains, who it is for and how big it is. Those three facts are
 * written once here, in every locale, and rendered verbatim into the
 * `data-speakable` block that the page's SpeakableSpecification points at — so
 * the sentence a reader sees, the sentence a voice surface reads and the
 * `abstract` in the structured data are the same string.
 *
 * `summary` and `guideCount` take the count as an argument on purpose: the
 * number of guides per language changes every time a post ships, and a
 * hardcoded figure would quietly become a false claim.
 */

export type CollectionLabels = {
  /** Question-shaped heading above the answer-first summary. */
  summaryHeading: string;
  /** Answer-first summary: scope, audience and size, in one sentence block. */
  summary: (count: number) => string;
  /** Compact size fact for the freshness row. */
  guideCount: (count: number) => string;
  /** Name of the enumerated guide list, used by the ItemList node. */
  listName: string;
  /** Intent-bearing anchor text: the guide's own topic instead of "Read guide". */
  readGuideAbout: (topic: string) => string;
};

export const collectionLabels: Record<Locale, CollectionLabels> = {
  en: {
    summaryHeading: "What does this blog cover?",
    summary: (count) =>
      `This blog collects ${count} ${count === 1 ? "guide" : "guides"} on AI-assisted book publishing — niche and keyword research, KDP metadata, covers, formatting, pricing, royalties and catalog operations — written for indie publishers, self-published authors and KDP catalog operators. Every guide carries the date it was last reviewed, cites Amazon's official documentation where rules are involved, and promises no Amazon rankings, KDP approval or sales.`,
    guideCount: (count) => `${count} ${count === 1 ? "guide" : "guides"}`,
    listName: "All publishing guides",
    readGuideAbout: (topic) => `Read the ${topic} guide`,
  },
  fr: {
    summaryHeading: "Que couvre ce blog ?",
    summary: (count) =>
      `Ce blog rassemble ${count} ${count === 1 ? "guide" : "guides"} sur l'édition assistée par IA — recherche de niche et de mots-clés, métadonnées KDP, couvertures, mise en page, prix, redevances et opérations de catalogue — écrits pour les éditeurs indépendants, les auteurs auto-édités et les opérateurs de catalogues KDP. Chaque guide indique sa date de dernière relecture, cite la documentation officielle d'Amazon dès qu'une règle est en jeu, et ne promet ni classement Amazon, ni validation KDP, ni ventes.`,
    guideCount: (count) => `${count} ${count === 1 ? "guide" : "guides"}`,
    listName: "Tous les guides d'édition",
    readGuideAbout: (topic) => `Lire le guide ${topic}`,
  },
  it: {
    summaryHeading: "Che cosa copre questo blog?",
    summary: (count) =>
      `Questo blog raccoglie ${count} ${count === 1 ? "guida" : "guide"} sull'editoria assistita dall'IA — ricerca di nicchia e di keyword, metadati KDP, copertine, impaginazione, prezzi, royalty e operazioni di catalogo — scritte per editori indipendenti, autori self-publishing e operatori di cataloghi KDP. Ogni guida riporta la data dell'ultima revisione, cita la documentazione ufficiale di Amazon quando c'è una regola di mezzo e non promette posizionamenti su Amazon, approvazioni KDP o vendite.`,
    guideCount: (count) => `${count} ${count === 1 ? "guida" : "guide"}`,
    listName: "Tutte le guide di editoria",
    readGuideAbout: (topic) => `Leggi la guida ${topic}`,
  },
  de: {
    summaryHeading: "Worum geht es in diesem Blog?",
    summary: (count) =>
      `Dieser Blog bündelt ${count} ${count === 1 ? "Guide" : "Guides"} zum KI-gestützten Publishing — Nischen- und Keyword-Recherche, KDP-Metadaten, Cover, Satz, Preisgestaltung, Tantiemen und Katalogbetrieb — geschrieben für Indie-Verlage, Selfpublishing-Autorinnen und -Autoren sowie KDP-Katalogbetreiber. Jeder Guide nennt das Datum seiner letzten Prüfung, zitiert bei Regelfragen Amazons offizielle Dokumentation und verspricht weder Amazon-Rankings noch KDP-Freigaben oder Verkäufe.`,
    guideCount: (count) => `${count} ${count === 1 ? "Guide" : "Guides"}`,
    listName: "Alle Publishing-Guides",
    readGuideAbout: (topic) => `Guide lesen: ${topic}`,
  },
};
