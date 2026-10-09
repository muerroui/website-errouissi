"use client";

import { useEffect } from "react";

type ContactEvent = "phone_click" | "whatsapp_click";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

// These events describe contact intent, never a sent message or a booked appointment.
// Do not send form values, the composed WhatsApp URL or visitor contact information.
export function trackCampaignContact(event: ContactEvent, position: string) {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/ads/immobilier" && path !== "/ar/ads/immobilier") return;
  const locale = path.startsWith("/ar/") ? "ar" : "fr";
  const analytics = window as AnalyticsWindow;
  const args = ["event", event, {
    event_category: "lead",
    page_path: window.location.pathname,
    page_language: `${locale}-MA`,
    contact_position: position,
    campaign_page: `immobilier_${locale}`,
  }];
  if (typeof analytics.gtag === "function") analytics.gtag(...args);
  else {
    analytics.dataLayer = analytics.dataLayer || [];
    // gtag queues Arguments objects, not arrays. Preserve its queue format.
    (function (...queued: unknown[]) {
      void queued;
      analytics.dataLayer!.push(arguments);
    })(...args);
  }
}

export function CampaignAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[data-contact-position]")
        : null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const name = href.startsWith("tel:") ? "phone_click"
        : href.startsWith("https://wa.me/") ? "whatsapp_click" : null;
      if (name) trackCampaignContact(name, link.dataset.contactPosition || "page");
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
