import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";

export function FloatingWhatsApp({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const ariaLabel = isAr ? "التواصل المباشر عبر واتساب" : "Écrire directement sur WhatsApp";
  const statusText = isAr ? "مكتب المحامي · متاح للرد" : "Cabinet ouvert · Réponse rapide";

  return (
    <aside aria-label={ariaLabel} className="pointer-events-none fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] end-5 z-50 sm:bottom-6 sm:end-6">
      <a
        href={firm.whatsappUrl}
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        className="group pointer-events-auto flex items-center gap-2.5 rounded-full border border-white/60 bg-whatsapp text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,211,102,0.5)] active:translate-y-0 active:scale-95 p-2 sm:pe-4 motion-reduce:transform-none motion-reduce:transition-none"
      >
        <span className="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/10 shrink-0">
          <MessageCircle aria-hidden="true" size={24} />
          {/* Live pulsing online dot */}
          <span className="absolute top-0 end-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
        </span>

        {/* Text pill on larger screens */}
        <span className="hidden sm:flex flex-col text-start">
          <span className="text-[11px] font-medium leading-none text-white/90">WhatsApp</span>
          <span className="text-xs font-bold leading-tight text-white mt-0.5">{statusText}</span>
        </span>
      </a>
    </aside>
  );
}

