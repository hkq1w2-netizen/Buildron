/**
 * Thin analytics wrapper. Safe to call when analytics is not configured —
 * it simply does nothing rather than throwing.
 */
type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  if (typeof w.gtag !== "function") return;
  w.gtag("event", event, params);
}

/** Conversion events used across the site. Keep names stable for reporting. */
export const EVENTS = {
  whatsappClick: "whatsapp_click",
  emailClick: "email_click",
  phoneClick: "phone_click",
  formSubmit: "contact_form_submit",
  estimatorComplete: "estimator_complete",
} as const;
