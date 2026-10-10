import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";

export function FloatingWhatsApp({ locale }: { locale: Locale }) {
  const ariaLabel = locale === "ar" ? "التواصل عبر واتساب" : "Écrire sur WhatsApp";

  return (
    <aside aria-label={ariaLabel} className="pointer-events-none fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] end-5 z-50 sm:bottom-6 sm:end-6">
      <a
        href={firm.whatsappUrl}
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-white/60 bg-whatsapp text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,211,102,0.45)] active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
      >
        <MessageCircle aria-hidden="true" size={26} />
      </a>
    </aside>
  );
}
