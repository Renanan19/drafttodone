"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import type { Locale } from "./blog-content";

/**
 * Email capture for a static site.
 *
 * Primary path: the app's /api/subscribe, which holds the Brevo key
 * server-side and puts the address straight into the right list so a sequence
 * can actually run. A Brevo key can send mail and read every contact, so it
 * must never ship in a client bundle — hence the hop through the app rather
 * than calling Brevo from the browser.
 *
 * Fallback: Web3Forms, which just emails the address to the founder. Their
 * key is public by design (it ships in the page HTML either way). Kept so a
 * Brevo outage, a missing env var or a CORS mistake costs a notification
 * rather than a lead.
 */
const SUBSCRIBE_ENDPOINT =
  process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT ?? "https://app.drafttodone.io/api/subscribe";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "24066b21-d7f8-47d4-ba77-f3449e0c39e8";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "done" | "error";

export type LeadCaptureCopy = {
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  successDetail: string;
  error: string;
  privacy: string;
};

export const leadCaptureCopy: Record<Locale, LeadCaptureCopy> = {
  en: {
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    submit: "Send me the playbook",
    sending: "Sending",
    success: "Check your inbox.",
    successDetail: "The playbook is on its way. If it is not there in a minute, look in promotions.",
    error: "That did not go through. Try again, or email antoine@drafttodone.io.",
    privacy: "One email with the playbook, then occasional notes on what is working on KDP. Unsubscribe in one click.",
  },
  fr: {
    emailLabel: "E-mail",
    emailPlaceholder: "vous@exemple.com",
    submit: "Envoyez-moi le playbook",
    sending: "Envoi",
    success: "Regardez votre boîte mail.",
    successDetail: "Le playbook arrive. S'il n'est pas là dans une minute, regardez dans les promotions.",
    error: "L'envoi a échoué. Réessayez, ou écrivez à antoine@drafttodone.io.",
    privacy: "Un e-mail avec le playbook, puis de temps en temps ce qui marche vraiment sur KDP. Désinscription en un clic.",
  },
  it: {
    emailLabel: "Email",
    emailPlaceholder: "tu@esempio.com",
    submit: "Inviami il playbook",
    sending: "Invio",
    success: "Controlla la posta.",
    successDetail: "Il playbook sta arrivando. Se non c'è entro un minuto, guarda in promozioni.",
    error: "Invio non riuscito. Riprova, oppure scrivi a antoine@drafttodone.io.",
    privacy: "Una email con il playbook, poi ogni tanto cosa funziona davvero su KDP. Disiscrizione con un clic.",
  },
  de: {
    emailLabel: "E-Mail",
    emailPlaceholder: "du@beispiel.com",
    submit: "Schick mir das Playbook",
    sending: "Wird gesendet",
    success: "Sieh in deinem Postfach nach.",
    successDetail: "Das Playbook ist unterwegs. Falls es in einer Minute nicht da ist, schau unter Werbung.",
    error: "Das hat nicht geklappt. Versuch es erneut oder schreib an antoine@drafttodone.io.",
    privacy: "Eine E-Mail mit dem Playbook, danach gelegentlich, was auf KDP wirklich funktioniert. Abmeldung mit einem Klick.",
  },
};

export function LeadCapture({
  locale,
  source,
  compact = false,
}: {
  locale: Locale;
  /** Which surface produced the lead — lands in the notification subject. */
  source: string;
  compact?: boolean;
}) {
  const t = leadCaptureCopy[locale];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const response = await fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: fields.email,
          source,
          locale,
          botcheck: fields.botcheck,
        }),
      });

      if (!response.ok) throw new Error(`subscribe responded ${response.status}`);

      form.reset();
      setStatus("done");
      return;
    } catch {
      // Fall through to Web3Forms rather than losing the lead.
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, access_key: WEB3FORMS_KEY }),
      });

      if (!response.ok) throw new Error(`Web3Forms responded ${response.status}`);

      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[18px] border border-mint/60 bg-mint-soft/30 p-6">
        <p className="flex items-center gap-2.5 font-display text-xl font-medium text-ink">
          <Check className="h-5 w-5 text-mint-deep" strokeWidth={3} />
          {t.success}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t.successDetail}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "rounded-[18px] border border-line bg-paper p-6"}>
      <input type="hidden" name="subject" value={`DraftToDone playbook — ${source} (${locale})`} />
      <input type="hidden" name="from_name" value="DraftToDone playbook" />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="locale" value={locale} />
      {/* Web3Forms' honeypot: bots fill it, humans never see it. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label className="sr-only" htmlFor={`lead-email-${source}`}>
          {t.emailLabel}
        </label>
        <input
          id={`lead-email-${source}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          className="min-w-0 flex-1 rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-faint focus:border-mint"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0 disabled:translate-y-0 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.25} />
              {t.sending}
            </>
          ) : (
            <>
              {t.submit}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </>
          )}
        </button>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-muted">{t.privacy}</p>
      {status === "error" && (
        <p role="alert" className="mt-3 text-[13px] font-medium text-ink">
          {t.error}
        </p>
      )}
    </form>
  );
}
