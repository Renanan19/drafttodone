"use client";

/**
 * The KDP book description formatter.
 *
 * Amazon accepts a small HTML subset in the description field and counts the
 * markup against the 4,000-character limit, which is the trap: a description
 * that reads as 3,200 characters in a word processor can be rejected at 4,300
 * once the tags are in. This tool writes the tags and counts what Amazon
 * counts, so the number on screen is the number that matters.
 *
 * No AI is involved: the input is the author's own copy, and the output is the
 * same copy in the markup KDP parses.
 */

import { useMemo, useState } from "react";
import { AlertTriangle, Check, Copy } from "lucide-react";
import type { Locale } from "../blog-content";
import {
  KDP_DESCRIPTION_LIMIT as LIMIT,
  toKdpHtml,
} from "./kdp-description-html";

const copy = {
  en: {
    eyebrow: "Free tool",
    title: "Format an Amazon book description",
    subtitle:
      "Write plainly on the left. The right side is the exact HTML to paste into KDP, counted the way Amazon counts it.",
    note: "Amazon accepts only these tags in the description field: b, i, u, br, p, h4, h5, h6, ol, ul, li. Everything else is stripped here, because KDP would either strip it or reject the upload.",
    input: "Your description",
    placeholder:
      "Write your description here.\n\nBlank lines become paragraphs.\n\n**Bold** with double asterisks, *italic* with single.\n\n- Lines starting with a dash become a bullet list.",
    output: "HTML for the KDP field",
    preview: "How Amazon will render it",
    copyButton: "Copy the HTML",
    copied: "Copied",
    counted: "counted by Amazon",
    plainCount: "your text alone",
    markupCount: "markup",
    over: (n: number) => `${n} characters over the 4,000 limit. KDP will reject this.`,
    room: (n: number) => `${n} characters left.`,
    empty: "Nothing to format yet.",
    syntax: "Syntax",
    syntaxLines: [
      "**bold** and *italic*",
      "A blank line starts a new paragraph",
      "Lines starting with - become a bullet list",
      "Lines starting with 1. become a numbered list",
      "## at the start of a line becomes a subheading",
    ],
  },
  fr: {
    eyebrow: "Outil gratuit",
    title: "Formater une description de livre Amazon",
    subtitle:
      "Écrivez simplement à gauche. À droite, le HTML exact à coller dans KDP, compté comme Amazon le compte.",
    note: "Amazon n'accepte que ces balises dans le champ description : b, i, u, br, p, h4, h5, h6, ol, ul, li. Tout le reste est retiré ici, parce que KDP le retirerait ou refuserait l'envoi.",
    input: "Votre description",
    placeholder:
      "Écrivez votre description ici.\n\nUne ligne vide crée un paragraphe.\n\n**Gras** avec deux astérisques, *italique* avec une.\n\n- Une ligne commençant par un tiret devient une puce.",
    output: "HTML pour le champ KDP",
    preview: "Rendu tel qu'Amazon l'affichera",
    copyButton: "Copier le HTML",
    copied: "Copié",
    counted: "compté par Amazon",
    plainCount: "votre texte seul",
    markupCount: "balises",
    over: (n: number) => `${n} caractères au-delà de la limite de 4 000. KDP refusera.`,
    room: (n: number) => `${n} caractères restants.`,
    empty: "Rien à formater pour l'instant.",
    syntax: "Syntaxe",
    syntaxLines: [
      "**gras** et *italique*",
      "Une ligne vide commence un nouveau paragraphe",
      "Les lignes commençant par - deviennent une liste à puces",
      "Les lignes commençant par 1. deviennent une liste numérotée",
      "## en début de ligne devient un sous-titre",
    ],
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Formatta una descrizione libro per Amazon",
    subtitle:
      "Scrivi in chiaro a sinistra. A destra c'è l'HTML esatto da incollare in KDP, conteggiato come lo conta Amazon.",
    note: "Amazon accetta solo questi tag nel campo descrizione: b, i, u, br, p, h4, h5, h6, ol, ul, li. Tutto il resto viene rimosso qui, perché KDP lo rimuoverebbe o rifiuterebbe il caricamento.",
    input: "La tua descrizione",
    placeholder:
      "Scrivi qui la tua descrizione.\n\nUna riga vuota crea un paragrafo.\n\n**Grassetto** con due asterischi, *corsivo* con uno.\n\n- Una riga che inizia con un trattino diventa un elenco puntato.",
    output: "HTML per il campo KDP",
    preview: "Come lo mostrerà Amazon",
    copyButton: "Copia l'HTML",
    copied: "Copiato",
    counted: "conteggiato da Amazon",
    plainCount: "solo il tuo testo",
    markupCount: "tag",
    over: (n: number) => `${n} caratteri oltre il limite di 4.000. KDP rifiuterà.`,
    room: (n: number) => `${n} caratteri rimasti.`,
    empty: "Ancora niente da formattare.",
    syntax: "Sintassi",
    syntaxLines: [
      "**grassetto** e *corsivo*",
      "Una riga vuota inizia un nuovo paragrafo",
      "Le righe che iniziano con - diventano un elenco puntato",
      "Le righe che iniziano con 1. diventano un elenco numerato",
      "## a inizio riga diventa un sottotitolo",
    ],
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Eine Amazon-Buchbeschreibung formatieren",
    subtitle:
      "Schreib links im Klartext. Rechts steht das exakte HTML für KDP, gezählt so, wie Amazon zählt.",
    note: "Amazon akzeptiert im Beschreibungsfeld nur diese Tags: b, i, u, br, p, h4, h5, h6, ol, ul, li. Alles andere wird hier entfernt, weil KDP es ohnehin entfernen oder den Upload ablehnen würde.",
    input: "Deine Beschreibung",
    placeholder:
      "Schreib hier deine Beschreibung.\n\nEine leere Zeile erzeugt einen Absatz.\n\n**Fett** mit zwei Sternchen, *kursiv* mit einem.\n\n- Eine Zeile mit Bindestrich wird zum Aufzählungspunkt.",
    output: "HTML für das KDP-Feld",
    preview: "So wird Amazon es darstellen",
    copyButton: "HTML kopieren",
    copied: "Kopiert",
    counted: "von Amazon gezählt",
    plainCount: "nur dein Text",
    markupCount: "Markup",
    over: (n: number) => `${n} Zeichen über dem Limit von 4.000. KDP wird das ablehnen.`,
    room: (n: number) => `${n} Zeichen übrig.`,
    empty: "Noch nichts zu formatieren.",
    syntax: "Syntax",
    syntaxLines: [
      "**fett** und *kursiv*",
      "Eine leere Zeile beginnt einen neuen Absatz",
      "Zeilen mit - werden zu einer Aufzählung",
      "Zeilen mit 1. werden zu einer nummerierten Liste",
      "## am Zeilenanfang wird zur Zwischenüberschrift",
    ],
  },
} as const;

export function KdpDescriptionFormatter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [source, setSource] = useState("");
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => toKdpHtml(source), [source]);

  const counts = useMemo(() => {
    const plain = source.trim().length;
    // Amazon counts the field's contents, tags included. That is the number
    // people get wrong, so it is the number shown largest.
    const total = html.length;
    return { plain, total, markup: Math.max(0, total - plain), remaining: LIMIT - total };
  }, [html, source]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const over = counts.remaining < 0;

  return (
    <section className="border-y border-line/70 bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{t.subtitle}</p>
          <p className="mt-5 text-sm leading-relaxed text-faint">{t.note}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                {t.input}
              </p>
              <p className="text-[12px] text-faint">
                {t.syntax}: {t.syntaxLines[0]}
              </p>
            </div>
            <textarea
              value={source}
              onChange={(event) => setSource(event.target.value)}
              placeholder={t.placeholder}
              rows={16}
              className="w-full rounded-[18px] border border-line bg-paper p-5 text-[15px] leading-relaxed text-ink outline-none transition-colors placeholder:text-faint focus:border-mint"
            />
            <ul className="grid gap-1.5 rounded-xl border border-line bg-paper p-4">
              {t.syntaxLines.map((line) => (
                <li key={line} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" strokeWidth={3} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                {t.output}
              </p>
              <button
                type="button"
                onClick={onCopy}
                disabled={html.length === 0}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:bg-paper-3 disabled:cursor-not-allowed disabled:text-faint"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-mint" strokeWidth={3} />
                ) : (
                  <Copy className="h-3.5 w-3.5" strokeWidth={2} />
                )}
                {copied ? t.copied : t.copyButton}
              </button>
            </div>

            <pre className="max-h-64 overflow-auto rounded-[18px] border border-line bg-paper p-5 text-[13px] leading-relaxed text-ink-soft">
              <code className="whitespace-pre-wrap break-words">{html || t.empty}</code>
            </pre>

            <div className="rounded-[18px] border border-line bg-paper p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                {t.preview}
              </p>
              <div
                className="kdp-preview mt-4 text-[15px] leading-relaxed text-ink-soft"
                // The preview renders the tool's own output, and that output is
                // produced by `toKdpHtml`, which escapes every input character
                // before emitting any tag. No user string reaches this as markup.
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>

            <div
              className={`rounded-[18px] border p-5 ${
                over ? "border-alert bg-paper" : "border-line bg-paper"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className={`font-display text-4xl font-medium tracking-[-0.02em] ${
                    over ? "text-alert" : "text-ink"
                  }`}
                >
                  {counts.total.toLocaleString(locale)}
                </span>
                <span className="text-[13px] text-muted">/ {LIMIT.toLocaleString(locale)} {t.counted}</span>
              </div>
              <p className="mt-2 flex items-start gap-2 text-[14px] leading-relaxed text-muted">
                {over && (
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-alert" strokeWidth={2.4} />
                )}
                <span>{over ? t.over(-counts.remaining) : t.room(counts.remaining)}</span>
              </p>
              <p className="mt-3 text-[13px] text-faint">
                {counts.plain.toLocaleString(locale)} {t.plainCount} ·{" "}
                {counts.markup.toLocaleString(locale)} {t.markupCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
