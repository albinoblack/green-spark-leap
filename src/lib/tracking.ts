// Estrutura centralizada de eventos de tracking/analytics.
// Plugue aqui Meta Pixel, GA4, GTM etc.

export type TrackEvent =
  | "PageView"
  | "StartQuiz"
  | "QuizStep"
  | "Lead"
  | "WhatsAppClick"
  | "SimulatorInteraction";

type Props = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Props[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: TrackEvent, properties: Props = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, ...properties, ts: Date.now() };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  window.fbq?.("trackCustom", event, properties);
  window.gtag?.("event", event, properties);

  if (import.meta.env.DEV) console.info("[track]", event, properties);
}
