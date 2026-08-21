"use client";

/**
 * The KDP wraparound cover template generator.
 *
 * A cover file is rejected for arithmetic far more often than for design: the
 * spine grows with the page count, the bleed is added on three edges, and the
 * safe zone has to clear both folds. All of that is computed from the same
 * `kdp-rules.ts` the interior formatter uses, so a cover built here cannot
 * disagree with an interior built there.
 *
 * The template is drawn to a canvas and downloaded as a PNG at 300 DPI, which
 * is the resolution KDP asks for.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, Download } from "lucide-react";
import type { Locale } from "../blog-content";
import {
  coverTemplate,
  COVER_BLEED_IN,
  COVER_SAFE_MARGIN_IN,
  MIN_PRINT_PAGES,
  SPINE_TEXT_MIN_PAGES,
  TRIM_SIZES,
} from "../kdp-formatter/engine/kdp-rules";

/** KDP asks for cover artwork at 300 DPI. */
const DPI = 300;

/** Screen preview: enough to read the zones, small enough to redraw freely. */
const PREVIEW_DPI = 60;

const copy = {
  en: {
    eyebrow: "Free tool",
    title: "Build a KDP cover template",
    subtitle:
      "Enter the trim, page count and paper. You get the exact flat dimensions Amazon expects, and a 300 DPI PNG template with the spine, bleed and safe zones marked.",
    note: "The spine grows with the page count, so a template is only valid for the interior it was built for. Lock your interior first, then come back with the final page count.",
    trim: "Trim size",
    pages: "Page count",
    paper: "Paper",
    white: "White",
    cream: "Cream",
    results: "What to give your designer",
    fullWidth: "Full cover width",
    fullHeight: "Full cover height",
    spine: "Spine width",
    bleed: "Bleed on each outer edge",
    safe: "Keep text inside",
    download: "Download the PNG template",
    legendBack: "Back cover",
    legendSpine: "Spine",
    legendFront: "Front cover",
    legendBleed: "Bleed — trimmed off",
    legendSafe: "Safe zone",
    spineWarning: `Under ${SPINE_TEXT_MIN_PAGES} pages KDP allows no spine text. Leave the spine blank.`,
    pagesWarning: `KDP does not print paperbacks under ${MIN_PRINT_PAGES} pages.`,
    inches: "in",
  },
  fr: {
    eyebrow: "Outil gratuit",
    title: "Créer un gabarit de couverture KDP",
    subtitle:
      "Indiquez le format, la pagination et le papier. Vous obtenez les dimensions à plat exactes attendues par Amazon, et un gabarit PNG 300 DPI avec dos, fond perdu et zones sûres.",
    note: "Le dos grossit avec la pagination : un gabarit n'est valable que pour l'intérieur pour lequel il a été calculé. Verrouillez l'intérieur d'abord, puis revenez avec la pagination finale.",
    trim: "Format",
    pages: "Nombre de pages",
    paper: "Papier",
    white: "Blanc",
    cream: "Crème",
    results: "Ce qu'il faut donner à votre graphiste",
    fullWidth: "Largeur totale",
    fullHeight: "Hauteur totale",
    spine: "Largeur du dos",
    bleed: "Fond perdu sur chaque bord extérieur",
    safe: "Garder le texte à l'intérieur de",
    download: "Télécharger le gabarit PNG",
    legendBack: "Quatrième",
    legendSpine: "Dos",
    legendFront: "Première",
    legendBleed: "Fond perdu — rogné",
    legendSafe: "Zone sûre",
    spineWarning: `Sous ${SPINE_TEXT_MIN_PAGES} pages, KDP n'autorise aucun texte au dos. Laissez le dos vierge.`,
    pagesWarning: `KDP n'imprime pas de broché de moins de ${MIN_PRINT_PAGES} pages.`,
    inches: "po",
  },
  it: {
    eyebrow: "Strumento gratuito",
    title: "Crea un template di copertina KDP",
    subtitle:
      "Inserisci formato, numero di pagine e carta. Ottieni le dimensioni piane esatte che Amazon richiede e un template PNG a 300 DPI con dorso, abbondanza e zone sicure.",
    note: "Il dorso cresce con il numero di pagine: un template vale solo per l'interno per cui è stato calcolato. Blocca prima l'interno, poi torna con il numero di pagine definitivo.",
    trim: "Formato",
    pages: "Numero di pagine",
    paper: "Carta",
    white: "Bianca",
    cream: "Avorio",
    results: "Cosa dare al tuo grafico",
    fullWidth: "Larghezza totale",
    fullHeight: "Altezza totale",
    spine: "Spessore del dorso",
    bleed: "Abbondanza su ogni bordo esterno",
    safe: "Tieni il testo entro",
    download: "Scarica il template PNG",
    legendBack: "Retro",
    legendSpine: "Dorso",
    legendFront: "Fronte",
    legendBleed: "Abbondanza — rifilata",
    legendSafe: "Zona sicura",
    spineWarning: `Sotto le ${SPINE_TEXT_MIN_PAGES} pagine KDP non ammette testo sul dorso. Lascialo vuoto.`,
    pagesWarning: `KDP non stampa paperback sotto le ${MIN_PRINT_PAGES} pagine.`,
    inches: "in",
  },
  de: {
    eyebrow: "Kostenloses Tool",
    title: "Eine KDP-Cover-Vorlage bauen",
    subtitle:
      "Gib Format, Seitenzahl und Papier an. Du bekommst die exakten flachen Maße, die Amazon erwartet, und eine 300-DPI-PNG-Vorlage mit Rücken, Beschnitt und Sicherheitszonen.",
    note: "Der Rücken wächst mit der Seitenzahl, eine Vorlage gilt also nur für den Innenteil, für den sie gerechnet wurde. Erst den Innenteil festzurren, dann mit der endgültigen Seitenzahl zurückkommen.",
    trim: "Format",
    pages: "Seitenzahl",
    paper: "Papier",
    white: "Weiß",
    cream: "Cremefarben",
    results: "Was deine Grafikerin braucht",
    fullWidth: "Gesamtbreite",
    fullHeight: "Gesamthöhe",
    spine: "Rückenbreite",
    bleed: "Beschnitt an jeder Außenkante",
    safe: "Text bleibt innerhalb von",
    download: "PNG-Vorlage herunterladen",
    legendBack: "Rückseite",
    legendSpine: "Rücken",
    legendFront: "Vorderseite",
    legendBleed: "Beschnitt — wird abgeschnitten",
    legendSafe: "Sicherheitszone",
    spineWarning: `Unter ${SPINE_TEXT_MIN_PAGES} Seiten erlaubt KDP keinen Rückentext. Lass den Rücken leer.`,
    pagesWarning: `KDP druckt keine Taschenbücher unter ${MIN_PRINT_PAGES} Seiten.`,
    inches: "Zoll",
  },
} as const;

const round = (value: number) => Math.round(value * 1000) / 1000;

export function KdpCoverTemplate({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [trimIndex, setTrimIndex] = useState(4); // 6 × 9, the KDP default
  const [pages, setPages] = useState(200);
  const [paper, setPaper] = useState<"white" | "cream">("white");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const trim = TRIM_SIZES[trimIndex];
  const template = useMemo(() => coverTemplate(pages, paper, trim), [pages, paper, trim]);

  /** Draws the flat cover with its zones, at `scale` pixels per inch. */
  const draw = useCallback(
    (canvas: HTMLCanvasElement, scale: number, withLabels: boolean) => {
      const context = canvas.getContext("2d");
      if (!context) return;

      const width = template.totalWidthIn * scale;
      const height = template.totalHeightIn * scale;
      canvas.width = Math.round(width);
      canvas.height = Math.round(height);

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const bleed = COVER_BLEED_IN * scale;
      const safe = COVER_SAFE_MARGIN_IN * scale;
      const spine = template.spineIn * scale;
      const panel = trim.widthIn * scale;

      // Bleed band: the area the guillotine removes.
      context.fillStyle = "#f4f4ef";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#ffffff";
      context.fillRect(bleed, bleed, canvas.width - bleed * 2, canvas.height - bleed * 2);

      // Spine, between the two panels.
      const spineLeft = bleed + panel;
      context.fillStyle = "#eef7f3";
      context.fillRect(spineLeft, bleed, spine, canvas.height - bleed * 2);

      const line = (x1: number, y1: number, x2: number, y2: number, colour: string, dash: number[]) => {
        context.save();
        context.strokeStyle = colour;
        context.lineWidth = Math.max(1, scale / 150);
        context.setLineDash(dash.map((d) => d * scale));
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();
      };

      // Fold lines.
      line(spineLeft, 0, spineLeft, canvas.height, "#0a8f6c", []);
      line(spineLeft + spine, 0, spineLeft + spine, canvas.height, "#0a8f6c", []);

      // Trim edges.
      context.save();
      context.strokeStyle = "#9a9aa2";
      context.lineWidth = Math.max(1, scale / 200);
      context.strokeRect(bleed, bleed, canvas.width - bleed * 2, canvas.height - bleed * 2);
      context.restore();

      // Safe zone on each panel.
      context.save();
      context.strokeStyle = "#c8c8c2";
      context.lineWidth = Math.max(1, scale / 220);
      context.setLineDash([0.08 * scale, 0.08 * scale]);
      context.strokeRect(bleed + safe, bleed + safe, panel - safe * 2, canvas.height - bleed * 2 - safe * 2);
      context.strokeRect(
        spineLeft + spine + safe,
        bleed + safe,
        panel - safe * 2,
        canvas.height - bleed * 2 - safe * 2,
      );
      context.restore();

      if (!withLabels) return;
      context.fillStyle = "#6b6b73";
      context.font = `${Math.round(scale * 0.16)}px ui-sans-serif, system-ui, sans-serif`;
      context.textAlign = "center";
      context.fillText(t.legendBack, bleed + panel / 2, canvas.height / 2);
      context.fillText(t.legendFront, spineLeft + spine + panel / 2, canvas.height / 2);
      context.fillText(
        `${round(template.totalWidthIn)} × ${round(template.totalHeightIn)} ${t.inches}`,
        canvas.width / 2,
        canvas.height - bleed - safe / 2,
      );
    },
    [template, trim, t],
  );

  // The preview is redrawn from an effect rather than during render: drawing
  // to a canvas is a side effect, and React may render more than once per
  // committed update.
  useEffect(() => {
    if (canvasRef.current) draw(canvasRef.current, PREVIEW_DPI, true);
  }, [draw]);

  const download = () => {
    const canvas = document.createElement("canvas");
    draw(canvas, DPI, true);
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `kdp-cover-${trim.widthIn}x${trim.heightIn}-${pages}p-${paper}.png`;
    link.click();
  };

  const rows = [
    [t.fullWidth, `${round(template.totalWidthIn)} ${t.inches}`],
    [t.fullHeight, `${round(template.totalHeightIn)} ${t.inches}`],
    [t.spine, `${round(template.spineIn)} ${t.inches}`],
    [t.bleed, `${COVER_BLEED_IN} ${t.inches}`],
    [t.safe, `${COVER_SAFE_MARGIN_IN} ${t.inches}`],
  ];

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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.trim}
                </span>
                <select
                  value={trimIndex}
                  onChange={(event) => setTrimIndex(Number(event.target.value))}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                >
                  {TRIM_SIZES.map((size, index) => (
                    <option key={size.label} value={index}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.pages}
                </span>
                <input
                  type="number"
                  min={MIN_PRINT_PAGES}
                  max={828}
                  value={pages}
                  onChange={(event) => setPages(Math.max(1, Number(event.target.value) || 0))}
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                />
              </label>

              <div className="sm:col-span-2">
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.paper}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(["white", "cream"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setPaper(value)}
                      className={`h-11 rounded-xl border px-3 text-sm font-medium transition-colors ${
                        paper === value
                          ? "border-ink bg-ink text-paper"
                          : "border-line bg-paper-2 text-muted hover:text-ink"
                      }`}
                    >
                      {value === "white" ? t.white : t.cream}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {pages < MIN_PRINT_PAGES && (
              <p className="mt-5 flex items-start gap-2 text-[14px] leading-relaxed text-alert">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.4} />
                <span>{t.pagesWarning}</span>
              </p>
            )}
            {!template.spineTextAllowed && pages >= MIN_PRINT_PAGES && (
              <p className="mt-5 flex items-start gap-2 text-[14px] leading-relaxed text-caution">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.4} />
                <span>{t.spineWarning}</span>
              </p>
            )}
          </div>

          <div className="rounded-[18px] border border-line bg-paper p-5 shadow-[0_24px_70px_-42px_rgba(16,24,40,0.38)] sm:p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
              {t.results}
            </p>

            <dl className="mt-4 divide-y divide-line rounded-xl border border-line">
              {rows.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 px-4 py-3">
                  <dt className="text-[14px] text-muted">{label}</dt>
                  <dd className="text-[15px] font-medium tabular-nums text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-paper-3 p-3">
              <canvas ref={canvasRef} className="mx-auto block h-auto w-full max-w-full" />
            </div>

            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-muted">
              <li className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 bg-paper-3" />
                {t.legendBleed}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 bg-mint-deep" />
                {t.legendSpine}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 border border-dashed border-faint" />
                {t.legendSafe}
              </li>
            </ul>

            <button
              type="button"
              onClick={download}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              <Download className="h-4 w-4" strokeWidth={2} />
              {t.download}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
