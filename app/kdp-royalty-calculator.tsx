"use client";

import { useMemo, useState } from "react";
import type { Locale } from "./blog-content";

type Format = "ebook" | "paperback" | "expanded";
type Marketplace = "us" | "eu" | "uk";

const copy = {
  en: {
    eyebrow: "Interactive estimator",
    title: "Estimate your KDP royalty",
    subtitle:
      "Use this quick model before setting a price. It is an estimate, not a replacement for the official KDP pricing grid.",
    format: "Format",
    ebook: "Kindle ebook",
    paperback: "Paperback",
    expanded: "Expanded Distribution",
    marketplace: "Marketplace",
    listPrice: "List price",
    vat: "VAT / tax rate",
    delivery: "Delivery cost",
    pages: "Page count",
    sales: "Sales / reads",
    royaltyRate: "Royalty rate",
    autoRate: "Auto rate",
    printingCost: "Printing cost",
    royaltyPerSale: "Royalty per sale",
    totalRoyalty: "Estimated total",
    formula: "Formula",
    minimumPrice: "Approx. minimum print price",
    note:
      "Paperback estimates use black ink, regular trim size, and current KDP fixed/per-page examples for US, EU and UK marketplaces. Always confirm final royalties inside KDP.",
  },
  fr: {
    eyebrow: "Estimateur interactif",
    title: "Estimer une redevance KDP",
    subtitle:
      "Utilisez ce modèle rapide avant de fixer un prix. C'est une estimation, pas un remplacement de la grille officielle KDP.",
    format: "Format",
    ebook: "Ebook Kindle",
    paperback: "Livre broché",
    expanded: "Distribution étendue",
    marketplace: "Marketplace",
    listPrice: "Prix catalogue",
    vat: "TVA / taxe",
    delivery: "Livraison numérique",
    pages: "Nombre de pages",
    sales: "Ventes / lectures",
    royaltyRate: "Taux de redevance",
    autoRate: "Taux auto",
    printingCost: "Coût d'impression",
    royaltyPerSale: "Redevance par vente",
    totalRoyalty: "Total estimé",
    formula: "Formule",
    minimumPrice: "Prix print minimum approx.",
    note:
      "Les estimations brochées utilisent l'encre noire, le format standard, et les coûts fixes/par page KDP pour US, UE et UK. Confirmez toujours les redevances finales dans KDP.",
  },
  it: {
    eyebrow: "Stimatore interattivo",
    title: "Stima la royalty KDP",
    subtitle:
      "Usa questo modello rapido prima di scegliere il prezzo. È una stima, non sostituisce la griglia ufficiale KDP.",
    format: "Formato",
    ebook: "Ebook Kindle",
    paperback: "Paperback",
    expanded: "Distribuzione Estesa",
    marketplace: "Marketplace",
    listPrice: "Prezzo di listino",
    vat: "IVA / tassa",
    delivery: "Consegna digitale",
    pages: "Numero pagine",
    sales: "Vendite / letture",
    royaltyRate: "Tasso royalty",
    autoRate: "Tasso auto",
    printingCost: "Costo stampa",
    royaltyPerSale: "Royalty per vendita",
    totalRoyalty: "Totale stimato",
    formula: "Formula",
    minimumPrice: "Prezzo print minimo approx.",
    note:
      "Le stime paperback usano inchiostro nero, formato standard e costi fissi/per pagina KDP per US, UE e UK. Conferma sempre le royalty finali dentro KDP.",
  },
  de: {
    eyebrow: "Interaktiver Rechner",
    title: "KDP-Tantieme schätzen",
    subtitle:
      "Nutze dieses schnelle Modell vor der Preiswahl. Es ist eine Schätzung und ersetzt nicht die offizielle KDP-Preisübersicht.",
    format: "Format",
    ebook: "Kindle Ebook",
    paperback: "Taschenbuch",
    expanded: "Erweiterte Distribution",
    marketplace: "Marketplace",
    listPrice: "Listenpreis",
    vat: "MwSt. / Steuer",
    delivery: "Lieferkosten",
    pages: "Seitenzahl",
    sales: "Verkäufe / Lesungen",
    royaltyRate: "Tantiemensatz",
    autoRate: "Auto-Satz",
    printingCost: "Druckkosten",
    royaltyPerSale: "Tantieme pro Verkauf",
    totalRoyalty: "Geschätztes Total",
    formula: "Formel",
    minimumPrice: "Ca. Mindestpreis Print",
    note:
      "Taschenbuch-Schätzungen nutzen schwarze Tinte, Standardformat und aktuelle KDP-Fix-/Seitenkosten für US, EU und UK. Prüfe finale Tantiemen immer in KDP.",
  },
} satisfies Record<Locale, Record<string, string>>;

const marketplaces = {
  us: {
    label: "Amazon.com",
    currency: "$",
    threshold: 9.99,
    fixedShort: 2.3,
    fixedLong: 1,
    perPageLong: 0.012,
  },
  eu: {
    label: "Amazon.fr/de/it/es",
    currency: "€",
    threshold: 9.99,
    fixedShort: 2.05,
    fixedLong: 0.75,
    perPageLong: 0.012,
  },
  uk: {
    label: "Amazon.co.uk",
    currency: "£",
    threshold: 7.99,
    fixedShort: 1.93,
    fixedLong: 0.85,
    perPageLong: 0.01,
  },
};

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function formatMoney(value: number, currency: string) {
  return `${currency}${value.toFixed(2)}`;
}

function NumberField({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
        {label}
      </span>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(clampNumber(Number(event.target.value), min, max))}
        className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
      />
    </label>
  );
}

export function KdpRoyaltyCalculator({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [format, setFormat] = useState<Format>("paperback");
  const [marketplace, setMarketplace] = useState<Marketplace>("eu");
  const [price, setPrice] = useState(12.99);
  const [vat, setVat] = useState(5.5);
  const [delivery, setDelivery] = useState(0.12);
  const [pages, setPages] = useState(180);
  const [ebookRate, setEbookRate] = useState<35 | 70>(70);
  const [sales, setSales] = useState(100);

  const result = useMemo(() => {
    const market = marketplaces[marketplace];
    const currency = market.currency;
    const taxAmount = price * (vat / (100 + vat));
    const printingCost =
      pages <= 108 ? market.fixedShort : market.fixedLong + pages * market.perPageLong;
    const printRate = format === "expanded" ? 0.4 : price >= market.threshold ? 0.6 : 0.5;

    if (format === "ebook") {
      const deliveryCost = ebookRate === 70 ? delivery : 0;
      const royalty = Math.max(0, (ebookRate / 100) * (price - taxAmount - deliveryCost));
      return {
        currency,
        royalty,
        total: royalty * sales,
        printingCost: 0,
        minimumPrice: 0,
        rateLabel: `${ebookRate}%`,
        formula:
          ebookRate === 70
            ? `${ebookRate}% x (${formatMoney(price, currency)} - ${formatMoney(taxAmount, currency)} - ${formatMoney(deliveryCost, currency)})`
            : `${ebookRate}% x (${formatMoney(price, currency)} - ${formatMoney(taxAmount, currency)})`,
      };
    }

    const royalty = Math.max(0, printRate * price - printingCost);
    const minimumPrice = printingCost / printRate;

    return {
      currency,
      royalty,
      total: royalty * sales,
      printingCost,
      minimumPrice,
      rateLabel: `${Math.round(printRate * 100)}%`,
      formula: `${Math.round(printRate * 100)}% x ${formatMoney(price, currency)} - ${formatMoney(printingCost, currency)}`,
    };
  }, [delivery, ebookRate, format, marketplace, pages, price, sales, vat]);

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
          </div>

          <div className="rounded-[18px] border border-line bg-paper p-5 shadow-[0_24px_70px_-42px_rgba(16,24,40,0.38)] sm:p-6">
            <div className="grid gap-5">
              <div>
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.format}
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    ["ebook", t.ebook],
                    ["paperback", t.paperback],
                    ["expanded", t.expanded],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormat(value as Format)}
                      className={`h-11 rounded-xl border px-3 text-sm font-medium transition-colors ${
                        format === value
                          ? "border-ink bg-ink text-paper"
                          : "border-line bg-paper-2 text-muted hover:text-ink"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                    {t.marketplace}
                  </span>
                  <select
                    value={marketplace}
                    onChange={(event) => setMarketplace(event.target.value as Marketplace)}
                    className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                  >
                    {Object.entries(marketplaces).map(([key, market]) => (
                      <option key={key} value={key}>
                        {market.label}
                      </option>
                    ))}
                  </select>
                </label>

                <NumberField
                  label={t.listPrice}
                  value={price}
                  min={0.99}
                  max={250}
                  step={0.01}
                  onChange={setPrice}
                />

                {format === "ebook" ? (
                  <>
                    <label className="grid gap-2">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                        {t.royaltyRate}
                      </span>
                      <select
                        value={ebookRate}
                        onChange={(event) => setEbookRate(Number(event.target.value) as 35 | 70)}
                        className="h-12 rounded-xl border border-line bg-paper px-4 text-[15px] font-medium text-ink outline-none transition-colors focus:border-mint"
                      >
                        <option value={70}>70%</option>
                        <option value={35}>35%</option>
                      </select>
                    </label>
                    <NumberField
                      label={t.vat}
                      value={vat}
                      min={0}
                      max={30}
                      step={0.1}
                      onChange={setVat}
                    />
                    <NumberField
                      label={t.delivery}
                      value={delivery}
                      min={0}
                      max={20}
                      step={0.01}
                      onChange={setDelivery}
                    />
                  </>
                ) : (
                  <>
                    <NumberField
                      label={t.pages}
                      value={pages}
                      min={24}
                      max={828}
                      onChange={setPages}
                    />
                    <div className="rounded-xl border border-line bg-paper-2 px-4 py-3">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                        {t.autoRate}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-ink">{result.rateLabel}</p>
                    </div>
                  </>
                )}

                <NumberField
                  label={t.sales}
                  value={sales}
                  min={1}
                  max={100000}
                  onChange={setSales}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {format !== "ebook" && (
                  <div className="rounded-xl bg-paper-2 p-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                      {t.printingCost}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-ink">
                      {formatMoney(result.printingCost, result.currency)}
                    </p>
                  </div>
                )}
                <div className="rounded-xl bg-mint-soft/50 p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
                    {t.royaltyPerSale}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-ink">
                    {formatMoney(result.royalty, result.currency)}
                  </p>
                </div>
                <div className="rounded-xl bg-ink p-4 text-paper">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-paper/65">
                    {t.totalRoyalty}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    {formatMoney(result.total, result.currency)}
                  </p>
                </div>
                {format !== "ebook" && (
                  <div className="rounded-xl bg-paper-2 p-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                      {t.minimumPrice}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-ink">
                      {formatMoney(result.minimumPrice, result.currency)}
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-line bg-paper-2 p-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-faint">
                  {t.formula}
                </p>
                <p className="mt-2 break-words text-sm font-medium text-ink-soft">
                  {result.formula}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
