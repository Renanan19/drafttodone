"use client";

/**
 * The KDP title scorer.
 *
 * This page used to promise a "book title generator". A generator worth using
 * needs a language model on a server, and this site is a static export — so it
 * promised something it could not do. What it can do honestly, and what no
 * free tool in this niche does well, is score a title you already have against
 * the constraints Amazon actually imposes: the 200-character field, where the
 * search listing truncates, and the keyword overlap that wastes a subtitle.
 */

import { useMemo, useState } from "react";
import { AlertTriangle, Check, Info } from "lucide-react";
import type { Locale } from "../blog-content";

/** KDP's title and subtitle fields each cap at 200 characters. */
const FIELD_LIMIT = 200;
/** Roughly where Amazon's search listing clips a title on desktop and mobile. */
const DESKTOP_CLIP = 60;
const MOBILE_CLIP = 40;

const copy = {
  en: {
    eyebrow: "Free tool",
    title: "Score a book title before you commit",
    subtitle:
      "Type the title and subtitle you are considering. The score below is the constraints Amazon imposes, not an opinion about your book.",
    note: "This scores a title you wrote; it does not invent one. Generating titles well needs a language model on a server, and this page is static — so it does the part it can do honestly.",
    titleField: "Title",
    titlePlaceholder: "The main title",
    subtitleField: "Subtitle",
    subtitlePlaceholder: "The subtitle, where the keywords usually belong",
    scoreLabel: "Checks passed",
    truncation: "How the listing clips it",
    desktop: "Desktop search",
    mobile: "Mobile search",
    checks: "Checks",
    items: {
      fieldLimit: { pass: "Fits KDP's 200-character field.", fail: (n: number) => `${n} characters — KDP's field holds ${FIELD_LIMIT}.` },
      desktopFit: { pass: "The full title survives desktop search results.", fail: "Desktop search clips the title. Put what matters in the first 60 characters." },
      mobileFit: { pass: "The title survives mobile search results.", fail: "Mobile search clips the title. The first 40 characters are what most readers see." },
      hasSubtitle: { pass: "A subtitle is present to carry the keywords.", fail: "No subtitle. It is the field where search terms belong without making the title clumsy." },
      noOverlap: { pass: "Title and subtitle do not repeat each other.", fail: (words: string) => `Repeated between title and subtitle: ${words}. Each repetition is keyword space spent twice.` },
      noSpecials: { pass: "No characters KDP rejects.", fail: "KDP rejects titles containing HTML, emoji or promotional symbols." },
      titleLength: { pass: "The title itself is short enough to remember.", fail: "The title alone runs long. A title readers cannot repeat is a title they cannot recommend." },
    },
  },
  fr: {
    eyebrow: "Outil gratuit",
    title: "Notez un titre de livre avant de le figer",
    subtitle:
      "Saisissez le titre et le sous-titre envisagés. Le score ci-dessous, ce sont les contraintes imposées par Amazon, pas un avis sur votre livre.",
    note: "Cet outil note un titre que vous avez écrit ; il n'en invente pas. Bien générer des titres demande un modèle de langue côté serveur, et cette page est statique — elle fait donc honnêtement la part qu'elle sait faire.",
    titleField: "Titre",
    titlePlaceholder: "Le titre principal",
    subtitleField: "Sous-titre",
    subtitlePlaceholder: "Le sous-titre, là où vont généralement les mots-clés",
    scoreLabel: "Contrôles réussis",
    truncation: "Ce que la liste affiche",
    desktop: "Recherche ordinateur",
    mobile: "Recherche mobile",
    checks: "Contrôles",
    items: {
      fieldLimit: { pass: "Tient dans le champ de 200 caractères de KDP.", fail: (n: number) => `${n} caractères — le champ KDP en contient ${FIELD_LIMIT}.` },
      desktopFit: { pass: "Le titre complet survit aux résultats sur ordinateur.", fail: "La recherche sur ordinateur coupe le titre. Mettez l'essentiel dans les 60 premiers caractères." },
      mobileFit: { pass: "Le titre survit aux résultats sur mobile.", fail: "La recherche mobile coupe le titre. Les 40 premiers caractères sont ce que voient la plupart des lecteurs." },
      hasSubtitle: { pass: "Un sous-titre est présent pour porter les mots-clés.", fail: "Pas de sous-titre. C'est le champ où placer les termes de recherche sans alourdir le titre." },
      noOverlap: { pass: "Titre et sous-titre ne se répètent pas.", fail: (words: string) => `Répété entre titre et sous-titre : ${words}. Chaque répétition est de l'espace mot-clé dépensé deux fois.` },
      noSpecials: { pass: "Aucun caractère refusé par KDP.", fail: "KDP refuse les titres contenant du HTML, des emoji ou des symboles promotionnels." },
      titleLength: { pass: "Le titre seul reste assez court pour être retenu.", fail: "Le titre seul est long. Un titre qu'on ne peut pas répéter est un titre qu'on ne recommande pas." },
    },
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Valuta un titolo prima di fissarlo",
    subtitle:
      "Scrivi il titolo e il sottotitolo che stai considerando. Il punteggio qui sotto sono i vincoli imposti da Amazon, non un'opinione sul tuo libro.",
    note: "Questo strumento valuta un titolo che hai scritto tu; non lo inventa. Generare titoli davvero utili richiede un modello linguistico su un server, e questa pagina è statica — quindi fa onestamente la parte che sa fare.",
    titleField: "Titolo",
    titlePlaceholder: "Il titolo principale",
    subtitleField: "Sottotitolo",
    subtitlePlaceholder: "Il sottotitolo, dove di solito vanno le keyword",
    scoreLabel: "Controlli superati",
    truncation: "Come lo taglia l'elenco",
    desktop: "Ricerca da computer",
    mobile: "Ricerca da mobile",
    checks: "Controlli",
    items: {
      fieldLimit: { pass: "Sta nel campo da 200 caratteri di KDP.", fail: (n: number) => `${n} caratteri — il campo KDP ne contiene ${FIELD_LIMIT}.` },
      desktopFit: { pass: "Il titolo completo sopravvive ai risultati da computer.", fail: "La ricerca da computer taglia il titolo. Metti l'essenziale nei primi 60 caratteri." },
      mobileFit: { pass: "Il titolo sopravvive ai risultati da mobile.", fail: "La ricerca da mobile taglia il titolo. I primi 40 caratteri sono ciò che vede la maggior parte dei lettori." },
      hasSubtitle: { pass: "C'è un sottotitolo a portare le keyword.", fail: "Nessun sottotitolo. È il campo dove mettere i termini di ricerca senza appesantire il titolo." },
      noOverlap: { pass: "Titolo e sottotitolo non si ripetono.", fail: (words: string) => `Ripetuto tra titolo e sottotitolo: ${words}. Ogni ripetizione è spazio keyword speso due volte.` },
      noSpecials: { pass: "Nessun carattere rifiutato da KDP.", fail: "KDP rifiuta i titoli che contengono HTML, emoji o simboli promozionali." },
      titleLength: { pass: "Il titolo da solo resta abbastanza breve da ricordare.", fail: "Il titolo da solo è lungo. Un titolo che non si riesce a ripetere è un titolo che non si consiglia." },
    },
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Einen Buchtitel prüfen, bevor du ihn festlegst",
    subtitle:
      "Tippe Titel und Untertitel ein, die du erwägst. Die Bewertung unten sind Amazons Vorgaben, keine Meinung über dein Buch.",
    note: "Dieses Tool bewertet einen Titel, den du geschrieben hast; es erfindet keinen. Titel wirklich gut zu erzeugen braucht ein Sprachmodell auf einem Server, und diese Seite ist statisch — sie macht also ehrlich den Teil, den sie kann.",
    titleField: "Titel",
    titlePlaceholder: "Der Haupttitel",
    subtitleField: "Untertitel",
    subtitlePlaceholder: "Der Untertitel, wo die Keywords normalerweise hingehören",
    scoreLabel: "Bestandene Prüfungen",
    truncation: "Wie die Trefferliste ihn abschneidet",
    desktop: "Suche am Rechner",
    mobile: "Suche am Handy",
    checks: "Prüfungen",
    items: {
      fieldLimit: { pass: "Passt in KDPs Feld mit 200 Zeichen.", fail: (n: number) => `${n} Zeichen — KDPs Feld fasst ${FIELD_LIMIT}.` },
      desktopFit: { pass: "Der ganze Titel übersteht die Trefferliste am Rechner.", fail: "Die Suche am Rechner schneidet den Titel ab. Das Wichtige gehört in die ersten 60 Zeichen." },
      mobileFit: { pass: "Der Titel übersteht die Trefferliste am Handy.", fail: "Die Suche am Handy schneidet den Titel ab. Die ersten 40 Zeichen sind, was die meisten Leser sehen." },
      hasSubtitle: { pass: "Ein Untertitel trägt die Keywords.", fail: "Kein Untertitel. Das ist das Feld für Suchbegriffe, ohne den Titel schwerfällig zu machen." },
      noOverlap: { pass: "Titel und Untertitel wiederholen einander nicht.", fail: (words: string) => `Zwischen Titel und Untertitel wiederholt: ${words}. Jede Wiederholung ist doppelt ausgegebener Keyword-Platz.` },
      noSpecials: { pass: "Keine Zeichen, die KDP ablehnt.", fail: "KDP lehnt Titel mit HTML, Emoji oder Werbesymbolen ab." },
      titleLength: { pass: "Der Titel allein bleibt kurz genug, um im Kopf zu bleiben.", fail: "Der Titel allein ist lang. Einen Titel, den man nicht nachsprechen kann, empfiehlt man nicht weiter." },
    },
  },
} as const;

const significant = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3);

const clip = (value: string, at: number) =>
  value.length <= at ? value : `${value.slice(0, at).trimEnd()}…`;

export function KdpTitleScore({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const result = useMemo(() => {
    const full = [title.trim(), subtitle.trim()].filter(Boolean).join(": ");
    const titleWords = new Set(significant(title));
    const shared = significant(subtitle).filter((word) => titleWords.has(word));
    const unique = [...new Set(shared)];

    const checks: { key: string; ok: boolean; text: string }[] = [
      {
        key: "fieldLimit",
        ok: full.length <= FIELD_LIMIT,
        text: full.length <= FIELD_LIMIT ? t.items.fieldLimit.pass : t.items.fieldLimit.fail(full.length),
      },
      {
        key: "titleLength",
        ok: title.trim().length > 0 && title.trim().length <= 50,
        text: title.trim().length <= 50 ? t.items.titleLength.pass : t.items.titleLength.fail,
      },
      {
        key: "desktopFit",
        ok: full.length <= DESKTOP_CLIP,
        text: full.length <= DESKTOP_CLIP ? t.items.desktopFit.pass : t.items.desktopFit.fail,
      },
      {
        key: "mobileFit",
        ok: full.length <= MOBILE_CLIP,
        text: full.length <= MOBILE_CLIP ? t.items.mobileFit.pass : t.items.mobileFit.fail,
      },
      {
        key: "hasSubtitle",
        ok: subtitle.trim().length > 0,
        text: subtitle.trim().length > 0 ? t.items.hasSubtitle.pass : t.items.hasSubtitle.fail,
      },
      {
        key: "noOverlap",
        ok: unique.length === 0,
        text: unique.length === 0 ? t.items.noOverlap.pass : t.items.noOverlap.fail(unique.join(", ")),
      },
      {
        key: "noSpecials",
        ok: !/[<>]|[\u{1F300}-\u{1FAFF}]|[™®©]/u.test(full),
        text: /[<>]|[\u{1F300}-\u{1FAFF}]|[™®©]/u.test(full)
          ? t.items.noSpecials.fail
          : t.items.noSpecials.pass,
      },
    ];

    return { full, checks, passed: checks.filter((c) => c.ok).length };
  }, [subtitle, t, title]);

  const empty = result.full.length === 0;

  return (
    <section className="border-y border-line/70 bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink sm:text-5xl">
              {t.title}
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">{t.subtitle}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-faint">{t.note}</p>

            <div className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.titleField}
                </span>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder={t.titlePlaceholder}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-mint"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.subtitleField}
                </span>
                <input
                  value={subtitle}
                  onChange={(event) => setSubtitle(event.target.value)}
                  placeholder={t.subtitlePlaceholder}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-mint"
                />
              </label>
            </div>
          </div>

          <div className="rounded-[18px] border border-line bg-paper p-5 shadow-[0_24px_70px_-42px_rgba(16,24,40,0.38)] sm:p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-medium tracking-[-0.02em] text-ink tabular-nums">
                {result.passed}/{result.checks.length}
              </span>
              <span className="text-[13px] text-muted">{t.scoreLabel}</span>
            </div>

            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
              {t.truncation}
            </p>
            <div className="mt-3 grid gap-2">
              <div className="rounded-xl border border-line bg-paper-2 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-faint">{t.desktop}</p>
                <p className="mt-1.5 text-[15px] leading-snug text-ink">
                  {empty ? "—" : clip(result.full, DESKTOP_CLIP)}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-paper-2 p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-faint">{t.mobile}</p>
                <p className="mt-1.5 text-[15px] leading-snug text-ink">
                  {empty ? "—" : clip(result.full, MOBILE_CLIP)}
                </p>
              </div>
            </div>

            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
              {t.checks}
            </p>
            <ul className="mt-3 grid gap-2.5">
              {result.checks.map((check) => (
                <li key={check.key} className="flex gap-2.5 text-[14px] leading-relaxed">
                  {empty ? (
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-faint" strokeWidth={2.2} />
                  ) : check.ok ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                  ) : (
                    <AlertTriangle
                      className="mt-0.5 h-4 w-4 shrink-0 text-caution"
                      strokeWidth={2.4}
                    />
                  )}
                  <span className={check.ok && !empty ? "text-muted" : "text-ink-soft"}>
                    {check.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
