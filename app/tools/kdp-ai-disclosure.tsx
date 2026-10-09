"use client";

/**
 * The KDP AI-disclosure checker.
 *
 * Three questions, one per element KDP asks about (text, images, translation),
 * and the answer KDP's content guidelines give for each. The rule it applies is
 * the one the guide around it explains: origin decides, not the amount of
 * editing. Content an AI tool created is AI-generated and declared, however
 * much it was edited after; content you created and AI only refined is
 * AI-assisted and is not declared.
 *
 * It lives inside the KDP AI-policy guide rather than on a route of its own:
 * a second URL would compete with the guide for the same query.
 */

import { useState } from "react";
import { AlertTriangle, Check, Minus } from "lucide-react";
import type { Locale } from "../blog-content";

type Origin = "ai" | "assisted" | "human";
type Element = "text" | "images" | "translation";
type Verdict = "declare" | "assisted" | "none";

const KDP_GUIDELINES = "https://kdp.amazon.com/en_US/help/topic/G200672390";

const copy = {
  en: {
    eyebrow: "Free tool",
    title: "What do you have to declare to KDP?",
    sub: "Three questions, one for each element KDP asks about. The answer applies KDP's own definitions.",
    questions: {
      text: "Who created the text?",
      images: "Who created the cover and interior images?",
      translation: "Was the book translated?",
    },
    options: {
      text: { ai: "An AI tool wrote it, even if I edited it after", assisted: "I wrote it; AI only edited or brainstormed", human: "I wrote it, no AI" },
      images: { ai: "An AI tool generated them", assisted: "I made them; AI only retouched them", human: "I made, commissioned or licensed them, no AI" },
      translation: { ai: "Translated by an AI tool", assisted: "Translated by a person, AI only checked it", human: "Not translated, or translated by a person" },
    },
    element: { text: "Text", images: "Images", translation: "Translation" },
    verdict: {
      declare: "Declare as AI-generated",
      assisted: "AI-assisted: no declaration",
      none: "Nothing to declare",
    },
    summaryDeclare: (items: string) => `When you set up the title on KDP, answer yes to AI-generated content and select: ${items}.`,
    summaryNone: "KDP asks you to declare nothing for this book. You remain responsible for its quality and its rights.",
    drafttodone: "A book made with DraftToDone has AI-generated text and an AI-generated cover: declare both. Amazon allows AI-generated books; it requires that you say so.",
    source: "KDP content guidelines",
    disclaimer: "General guidance based on KDP's guidelines as of 2026, not legal advice. Check the current policy before you publish.",
    and: " and ",
  },
  fr: {
    eyebrow: "Outil gratuit",
    title: "Que devez-vous déclarer à KDP ?",
    sub: "Trois questions, une par élément sur lequel KDP vous interroge. La réponse applique les définitions de KDP.",
    questions: {
      text: "Qui a créé le texte ?",
      images: "Qui a créé la couverture et les images intérieures ?",
      translation: "Le livre a-t-il été traduit ?",
    },
    options: {
      text: { ai: "Un outil d'IA l'a écrit, même si je l'ai retouché ensuite", assisted: "Je l'ai écrit ; l'IA a seulement corrigé ou aidé à trouver des idées", human: "Je l'ai écrit, sans IA" },
      images: { ai: "Un outil d'IA les a générées", assisted: "Je les ai faites ; l'IA les a seulement retouchées", human: "Je les ai faites, commandées ou achetées, sans IA" },
      translation: { ai: "Traduit par un outil d'IA", assisted: "Traduit par une personne, l'IA a seulement vérifié", human: "Pas traduit, ou traduit par une personne" },
    },
    element: { text: "Texte", images: "Images", translation: "Traduction" },
    verdict: {
      declare: "À déclarer comme généré par IA",
      assisted: "Assisté par IA : rien à déclarer",
      none: "Rien à déclarer",
    },
    summaryDeclare: (items: string) => `Lors de la création du titre sur KDP, répondez oui au contenu généré par IA et cochez : ${items}.`,
    summaryNone: "KDP ne vous demande rien à déclarer pour ce livre. Vous restez responsable de sa qualité et de ses droits.",
    drafttodone: "Un livre fait avec DraftToDone a un texte et une couverture générés par IA : déclarez les deux. Amazon autorise les livres générés par IA ; il exige que vous le disiez.",
    source: "Règles de contenu KDP",
    disclaimer: "Indications générales d'après les règles KDP en vigueur en 2026, pas un avis juridique. Vérifiez la politique actuelle avant de publier.",
    and: " et ",
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Cosa devi dichiarare a KDP?",
    sub: "Tre domande, una per ogni elemento su cui KDP ti interroga. La risposta applica le definizioni di KDP.",
    questions: {
      text: "Chi ha creato il testo?",
      images: "Chi ha creato la copertina e le immagini interne?",
      translation: "Il libro è stato tradotto?",
    },
    options: {
      text: { ai: "L'ha scritto uno strumento IA, anche se poi l'ho modificato", assisted: "L'ho scritto io; l'IA ha solo corretto o suggerito idee", human: "L'ho scritto io, senza IA" },
      images: { ai: "Le ha generate uno strumento IA", assisted: "Le ho fatte io; l'IA le ha solo ritoccate", human: "Le ho fatte, commissionate o acquistate, senza IA" },
      translation: { ai: "Tradotto da uno strumento IA", assisted: "Tradotto da una persona, l'IA ha solo controllato", human: "Non tradotto, o tradotto da una persona" },
    },
    element: { text: "Testo", images: "Immagini", translation: "Traduzione" },
    verdict: {
      declare: "Da dichiarare come generato dall'IA",
      assisted: "Assistito dall'IA: nessuna dichiarazione",
      none: "Niente da dichiarare",
    },
    summaryDeclare: (items: string) => `Quando crei il titolo su KDP, rispondi sì ai contenuti generati dall'IA e seleziona: ${items}.`,
    summaryNone: "KDP non ti chiede di dichiarare nulla per questo libro. Resti responsabile della sua qualità e dei suoi diritti.",
    drafttodone: "Un libro fatto con DraftToDone ha testo e copertina generati dall'IA: dichiarali entrambi. Amazon ammette i libri generati dall'IA; chiede che tu lo dica.",
    source: "Linee guida sui contenuti KDP",
    disclaimer: "Indicazioni generali basate sulle linee guida KDP del 2026, non una consulenza legale. Verifica la politica attuale prima di pubblicare.",
    and: " e ",
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Was musst du gegenüber KDP angeben?",
    sub: "Drei Fragen, eine für jedes Element, nach dem KDP fragt. Die Antwort wendet die Definitionen von KDP an.",
    questions: {
      text: "Wer hat den Text erstellt?",
      images: "Wer hat das Cover und die Innenbilder erstellt?",
      translation: "Wurde das Buch übersetzt?",
    },
    options: {
      text: { ai: "Ein KI-Tool hat ihn geschrieben, auch wenn ich ihn danach überarbeitet habe", assisted: "Ich habe ihn geschrieben; die KI hat nur lektoriert oder Ideen geliefert", human: "Ich habe ihn geschrieben, ohne KI" },
      images: { ai: "Ein KI-Tool hat sie erzeugt", assisted: "Ich habe sie gemacht; die KI hat sie nur retuschiert", human: "Selbst gemacht, beauftragt oder lizenziert, ohne KI" },
      translation: { ai: "Von einem KI-Tool übersetzt", assisted: "Von einem Menschen übersetzt, die KI hat nur geprüft", human: "Nicht übersetzt, oder von einem Menschen übersetzt" },
    },
    element: { text: "Text", images: "Bilder", translation: "Übersetzung" },
    verdict: {
      declare: "Als KI-generiert angeben",
      assisted: "KI-unterstützt: keine Angabe nötig",
      none: "Nichts anzugeben",
    },
    summaryDeclare: (items: string) => `Beim Anlegen des Titels auf KDP beantwortest du die Frage nach KI-generierten Inhalten mit Ja und wählst: ${items}.`,
    summaryNone: "KDP verlangt für dieses Buch keine Angabe. Für Qualität und Rechte bleibst du verantwortlich.",
    drafttodone: "Ein mit DraftToDone erstelltes Buch hat KI-generierten Text und ein KI-generiertes Cover: Gib beides an. Amazon erlaubt KI-generierte Bücher; es verlangt nur, dass du es sagst.",
    source: "KDP-Inhaltsrichtlinien",
    disclaimer: "Allgemeine Hinweise auf Basis der KDP-Richtlinien von 2026, keine Rechtsberatung. Prüfe vor der Veröffentlichung die aktuelle Richtlinie.",
    and: " und ",
  },
} satisfies Record<Locale, unknown>;

const ELEMENTS: Element[] = ["text", "images", "translation"];
const ORIGINS: Origin[] = ["ai", "assisted", "human"];

/** KDP's rule: what the tool created is declared; what it only refined is not. */
function verdictFor(origin: Origin): Verdict {
  if (origin === "ai") return "declare";
  if (origin === "assisted") return "assisted";
  return "none";
}

export function KdpAiDisclosure({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [answers, setAnswers] = useState<Record<Element, Origin>>({
    text: "ai",
    images: "ai",
    translation: "human",
  });

  const declared = ELEMENTS.filter((e) => verdictFor(answers[e]) === "declare");
  const declaredList = declared.map((e) => t.element[e].toLowerCase()).join(t.and);

  return (
    <section className="mt-12 rounded-[18px] border border-line bg-paper-2 p-6 sm:p-8">
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
        {t.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.01em] text-ink">
        {t.title}
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.sub}</p>

      <div className="mt-7 grid gap-6">
        {ELEMENTS.map((element) => (
          <fieldset key={element}>
            <legend className="text-[15px] font-medium text-ink">{t.questions[element]}</legend>
            <div className="mt-3 grid gap-2">
              {ORIGINS.map((origin) => {
                const checked = answers[element] === origin;
                return (
                  <label
                    key={origin}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-[14px] leading-snug transition-colors ${
                      checked
                        ? "border-ink/30 bg-paper text-ink"
                        : "border-line bg-paper/60 text-muted hover:border-ink/20 hover:text-ink"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`kdp-ai-${element}`}
                      value={origin}
                      checked={checked}
                      onChange={() => setAnswers((a) => ({ ...a, [element]: origin }))}
                      className="mt-0.5 accent-ink"
                    />
                    <span>{t.options[element][origin]}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div aria-live="polite" className="mt-8 rounded-xl border border-line bg-paper p-5">
        <ul className="grid gap-2.5">
          {ELEMENTS.map((element) => {
            const v = verdictFor(answers[element]);
            return (
              <li key={element} className="flex items-center gap-3 text-[14px]">
                {v === "declare" ? (
                  <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" strokeWidth={2.5} />
                ) : v === "assisted" ? (
                  <Check className="h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                ) : (
                  <Minus className="h-4 w-4 shrink-0 text-faint" strokeWidth={3} />
                )}
                <span className="w-28 shrink-0 font-medium text-ink">{t.element[element]}</span>
                <span className={v === "declare" ? "text-ink" : "text-muted"}>{t.verdict[v]}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 border-t border-line pt-4 text-[14px] leading-relaxed text-ink-soft">
          {declared.length > 0 ? t.summaryDeclare(declaredList) : t.summaryNone}
        </p>
      </div>

      <p className="mt-5 text-[14px] leading-relaxed text-ink-soft">{t.drafttodone}</p>
      <p className="mt-3 text-[13px] leading-relaxed text-faint">
        {t.disclaimer}{" "}
        <a
          href={KDP_GUIDELINES}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-muted"
        >
          {t.source}
        </a>
      </p>
    </section>
  );
}
