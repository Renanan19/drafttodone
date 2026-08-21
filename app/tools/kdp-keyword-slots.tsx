"use client";

/**
 * The KDP backend keyword validator.
 *
 * Amazon's autocomplete is cross-origin and off-limits to a page like this, so
 * this tool does not pretend to supply search volume. What it does instead is
 * the part every operator gets wrong by hand: checking the seven slots against
 * Amazon's published rules, and finding the words that are silently wasted
 * because they already sit in the title or in another slot.
 */

import { useMemo, useState } from "react";
import { AlertTriangle, Check, Info } from "lucide-react";
import type { Locale } from "../blog-content";

/** KDP allows 50 characters per backend keyword field. */
const SLOT_LIMIT = 50;
const SLOT_COUNT = 7;

/**
 * Terms Amazon's metadata guidelines rule out of the keyword fields. Kept as
 * plain word lists per locale rather than one merged list, so a legitimate
 * German or Italian word is never flagged because it collides with English.
 */
const BANNED: Record<Locale, string[]> = {
  en: ["free", "bestseller", "bestselling", "best seller", "new", "on sale", "sale", "amazon", "kindle unlimited", "book"],
  fr: ["gratuit", "gratuite", "bestseller", "meilleure vente", "nouveau", "nouveauté", "promo", "soldes", "amazon", "livre"],
  it: ["gratis", "gratuito", "bestseller", "più venduto", "nuovo", "novità", "offerta", "saldi", "amazon", "libro"],
  de: ["kostenlos", "gratis", "bestseller", "meistverkauft", "neu", "neuheit", "angebot", "amazon", "buch"],
};

type Severity = "error" | "warning" | "info";
type Issue = { severity: Severity; text: string };

const copy = {
  en: {
    eyebrow: "Free tool",
    title: "Check your 7 KDP keyword slots",
    subtitle:
      "Paste the seven backend keywords and the title you are publishing under. The checks below are Amazon's own metadata rules, applied to your strings.",
    note: "Nothing is sent anywhere; the checks run in this page. This tool validates what you wrote — it does not supply search volume, because Amazon's autocomplete is not available to a page like this one.",
    titleField: "Book title",
    titlePlaceholder: "The title exactly as it will appear",
    subtitleField: "Subtitle (optional)",
    subtitlePlaceholder: "Your subtitle, if you have one",
    slots: "The 7 keyword slots",
    slot: "Slot",
    slotPlaceholder: "a search phrase a reader would type",
    summaryClean: "All seven slots pass every check.",
    summaryIssues: (n: number) => `${n} thing${n === 1 ? "" : "s"} to fix before you publish.`,
    used: "slots used",
    issues: {
      tooLong: (n: number) => `${n} characters — KDP allows ${SLOT_LIMIT}.`,
      empty: "Empty. An unused slot is search coverage you are giving away.",
      duplicate: (n: number) => `Identical to slot ${n}.`,
      repeatedWord: (word: string, n: number) =>
        `"${word}" is already in slot ${n}. Repeating a word buys nothing.`,
      inTitle: (word: string) =>
        `"${word}" is already in your title or subtitle, which Amazon indexes. The slot is wasted on it.`,
      banned: (word: string) =>
        `"${word}" is on Amazon's list of terms not allowed in keyword fields.`,
      singleWord:
        "One word only. Readers search in phrases, and a single broad noun rarely ranks.",
    },
  },
  fr: {
    eyebrow: "Outil gratuit",
    title: "Vérifiez vos 7 champs de mots-clés KDP",
    subtitle:
      "Collez les sept mots-clés backend et le titre sous lequel vous publiez. Les contrôles ci-dessous sont les règles de métadonnées d'Amazon, appliquées à vos chaînes.",
    note: "Rien n'est envoyé nulle part ; tout se calcule dans cette page. Cet outil valide ce que vous avez écrit — il ne fournit pas de volumes de recherche, l'autocomplétion d'Amazon n'étant pas accessible à une page comme celle-ci.",
    titleField: "Titre du livre",
    titlePlaceholder: "Le titre exactement tel qu'il paraîtra",
    subtitleField: "Sous-titre (facultatif)",
    subtitlePlaceholder: "Votre sous-titre, si vous en avez un",
    slots: "Les 7 champs de mots-clés",
    slot: "Champ",
    slotPlaceholder: "une expression qu'un lecteur taperait",
    summaryClean: "Les sept champs passent tous les contrôles.",
    summaryIssues: (n: number) => `${n} point${n === 1 ? "" : "s"} à corriger avant de publier.`,
    used: "champs utilisés",
    issues: {
      tooLong: (n: number) => `${n} caractères — KDP en autorise ${SLOT_LIMIT}.`,
      empty: "Vide. Un champ inutilisé est de la couverture de recherche offerte.",
      duplicate: (n: number) => `Identique au champ ${n}.`,
      repeatedWord: (word: string, n: number) =>
        `« ${word} » est déjà dans le champ ${n}. Répéter un mot n'apporte rien.`,
      inTitle: (word: string) =>
        `« ${word} » est déjà dans votre titre ou sous-titre, qu'Amazon indexe. Le champ est gaspillé.`,
      banned: (word: string) =>
        `« ${word} » figure parmi les termes qu'Amazon interdit dans les champs de mots-clés.`,
      singleWord:
        "Un seul mot. Les lecteurs cherchent par expressions, et un nom trop large se classe rarement.",
    },
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Controlla i tuoi 7 campi keyword KDP",
    subtitle:
      "Incolla le sette keyword backend e il titolo con cui pubblicherai. I controlli qui sotto sono le regole sui metadati di Amazon, applicate alle tue stringhe.",
    note: "Niente viene inviato da nessuna parte; i controlli girano in questa pagina. Lo strumento valida ciò che hai scritto — non fornisce volumi di ricerca, perché l'autocompletamento di Amazon non è accessibile a una pagina come questa.",
    titleField: "Titolo del libro",
    titlePlaceholder: "Il titolo esattamente come apparirà",
    subtitleField: "Sottotitolo (facoltativo)",
    subtitlePlaceholder: "Il tuo sottotitolo, se ne hai uno",
    slots: "I 7 campi keyword",
    slot: "Campo",
    slotPlaceholder: "una frase che un lettore digiterebbe",
    summaryClean: "Tutti e sette i campi superano ogni controllo.",
    summaryIssues: (n: number) => `${n} cos${n === 1 ? "a" : "e"} da sistemare prima di pubblicare.`,
    used: "campi usati",
    issues: {
      tooLong: (n: number) => `${n} caratteri — KDP ne consente ${SLOT_LIMIT}.`,
      empty: "Vuoto. Un campo inutilizzato è copertura di ricerca regalata.",
      duplicate: (n: number) => `Identico al campo ${n}.`,
      repeatedWord: (word: string, n: number) =>
        `«${word}» è già nel campo ${n}. Ripetere una parola non aggiunge nulla.`,
      inTitle: (word: string) =>
        `«${word}» è già nel titolo o nel sottotitolo, che Amazon indicizza. Il campo è sprecato.`,
      banned: (word: string) =>
        `«${word}» è tra i termini che Amazon non ammette nei campi keyword.`,
      singleWord:
        "Una sola parola. I lettori cercano per frasi, e un sostantivo troppo generico si posiziona di rado.",
    },
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Prüfe deine 7 KDP-Keyword-Felder",
    subtitle:
      "Füge die sieben Backend-Keywords und den Titel ein, unter dem du veröffentlichst. Die Prüfungen unten sind Amazons eigene Metadaten-Regeln, angewandt auf deine Eingaben.",
    note: "Nichts wird irgendwohin gesendet; alles läuft in dieser Seite. Das Tool prüft, was du geschrieben hast — es liefert keine Suchvolumina, denn Amazons Autovervollständigung steht einer Seite wie dieser nicht offen.",
    titleField: "Buchtitel",
    titlePlaceholder: "Der Titel genau so, wie er erscheinen wird",
    subtitleField: "Untertitel (optional)",
    subtitlePlaceholder: "Dein Untertitel, falls vorhanden",
    slots: "Die 7 Keyword-Felder",
    slot: "Feld",
    slotPlaceholder: "eine Suchphrase, die ein Leser eintippt",
    summaryClean: "Alle sieben Felder bestehen jede Prüfung.",
    summaryIssues: (n: number) => `${n} Sache${n === 1 ? "" : "n"} vor dem Veröffentlichen zu beheben.`,
    used: "Felder belegt",
    issues: {
      tooLong: (n: number) => `${n} Zeichen — KDP erlaubt ${SLOT_LIMIT}.`,
      empty: "Leer. Ein ungenutztes Feld ist verschenkte Sichtbarkeit.",
      duplicate: (n: number) => `Identisch mit Feld ${n}.`,
      repeatedWord: (word: string, n: number) =>
        `„${word}“ steht schon in Feld ${n}. Ein Wort zu wiederholen bringt nichts.`,
      inTitle: (word: string) =>
        `„${word}“ steht schon in Titel oder Untertitel, die Amazon indexiert. Das Feld ist dafür verschwendet.`,
      banned: (word: string) =>
        `„${word}“ gehört zu den Begriffen, die Amazon in Keyword-Feldern nicht zulässt.`,
      singleWord:
        "Nur ein Wort. Leser suchen in Phrasen, und ein einzelnes breites Substantiv rankt selten.",
    },
  },
} as const;

/** Words worth comparing: everything but the short function words. */
const words = (value: string): string[] =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3);

export function KdpKeywordSlots({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [bookTitle, setBookTitle] = useState("");
  const [bookSubtitle, setBookSubtitle] = useState("");
  const [slots, setSlots] = useState<string[]>(Array(SLOT_COUNT).fill(""));

  const analysis = useMemo(() => {
    const banned = BANNED[locale];
    const titleWords = new Set([...words(bookTitle), ...words(bookSubtitle)]);
    const normalised = slots.map((slot) => slot.trim());

    /** Which slot each word was first seen in, so the second use is the waste. */
    const firstSeen = new Map<string, number>();
    normalised.forEach((slot, index) => {
      for (const word of words(slot)) {
        if (!firstSeen.has(word)) firstSeen.set(word, index);
      }
    });

    const perSlot: Issue[][] = normalised.map((slot, index) => {
      const issues: Issue[] = [];
      if (slot.length === 0) {
        issues.push({ severity: "info", text: t.issues.empty });
        return issues;
      }
      if (slot.length > SLOT_LIMIT) {
        issues.push({ severity: "error", text: t.issues.tooLong(slot.length) });
      }

      const twin = normalised.findIndex(
        (other, i) => i < index && other.length > 0 && other.toLowerCase() === slot.toLowerCase(),
      );
      if (twin >= 0) issues.push({ severity: "error", text: t.issues.duplicate(twin + 1) });

      const lower = slot.toLowerCase();
      for (const term of banned) {
        if (new RegExp(`(^|[^\\p{L}])${term}([^\\p{L}]|$)`, "iu").test(lower)) {
          issues.push({ severity: "error", text: t.issues.banned(term) });
        }
      }

      for (const word of new Set(words(slot))) {
        const owner = firstSeen.get(word);
        if (owner !== undefined && owner !== index) {
          issues.push({ severity: "warning", text: t.issues.repeatedWord(word, owner + 1) });
        }
        if (titleWords.has(word)) {
          issues.push({ severity: "warning", text: t.issues.inTitle(word) });
        }
      }

      if (slot.split(/\s+/).filter(Boolean).length === 1) {
        issues.push({ severity: "warning", text: t.issues.singleWord });
      }

      return issues;
    });

    const actionable = perSlot.flat().filter((issue) => issue.severity !== "info").length;
    const used = normalised.filter((slot) => slot.length > 0).length;
    return { perSlot, actionable, used };
  }, [bookSubtitle, bookTitle, locale, slots, t]);

  const setSlot = (index: number, value: string) =>
    setSlots((current) => current.map((slot, i) => (i === index ? value : slot)));

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
                  value={bookTitle}
                  onChange={(event) => setBookTitle(event.target.value)}
                  placeholder={t.titlePlaceholder}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-mint"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.subtitleField}
                </span>
                <input
                  value={bookSubtitle}
                  onChange={(event) => setBookSubtitle(event.target.value)}
                  placeholder={t.subtitlePlaceholder}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-mint"
                />
              </label>
            </div>
          </div>

          <div className="rounded-[18px] border border-line bg-paper p-5 shadow-[0_24px_70px_-42px_rgba(16,24,40,0.38)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                {t.slots}
              </p>
              <p className="text-[13px] font-medium text-muted">
                {analysis.used}/{SLOT_COUNT} {t.used}
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {slots.map((slot, index) => {
                const issues = analysis.perSlot[index];
                const worst: Severity | undefined = issues.some((i) => i.severity === "error")
                  ? "error"
                  : issues.some((i) => i.severity === "warning")
                    ? "warning"
                    : undefined;

                return (
                  <div key={index} className="grid gap-2">
                    <label className="grid gap-2">
                      <span className="flex items-baseline justify-between text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                        <span>
                          {t.slot} {index + 1}
                        </span>
                        <span
                          className={
                            slot.trim().length > SLOT_LIMIT ? "text-alert" : "text-faint"
                          }
                        >
                          {slot.trim().length}/{SLOT_LIMIT}
                        </span>
                      </span>
                      <input
                        value={slot}
                        onChange={(event) => setSlot(index, event.target.value)}
                        placeholder={t.slotPlaceholder}
                        aria-invalid={worst === "error"}
                        className={`h-12 rounded-xl border bg-paper px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-mint ${
                          worst === "error" ? "border-alert" : "border-line"
                        }`}
                      />
                    </label>
                    {issues.length > 0 && (
                      <ul className="grid gap-1.5">
                        {issues.map((issue, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-[13px] leading-relaxed text-muted"
                          >
                            {issue.severity === "info" ? (
                              <Info
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-faint"
                                strokeWidth={2.4}
                              />
                            ) : (
                              <AlertTriangle
                                className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                                  issue.severity === "error" ? "text-alert" : "text-caution"
                                }`}
                                strokeWidth={2.4}
                              />
                            )}
                            <span>{issue.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-line bg-paper-2 p-4 text-[14px] leading-relaxed text-ink-soft">
              {analysis.actionable === 0 ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
              ) : (
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-caution" strokeWidth={2.4} />
              )}
              <span>
                {analysis.actionable === 0
                  ? t.summaryClean
                  : t.summaryIssues(analysis.actionable)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
