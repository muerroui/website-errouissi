"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Scale } from "lucide-react";
import { alternateLocale, type Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";

const labels = {
  fr: { home: "Accueil", expertise: "Expertises", contact: "Contact", switcher: "العربية" },
  ar: { home: "الرئيسية", expertise: "الاختصاصات", contact: "اتصل بنا", switcher: "Français" },
} as const;

export function Header({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const other = alternateLocale(locale);
  const pathname = usePathname();
  const alternatePaths: Record<string, string> = {
    "/fr": "/ar",
    "/ar": "/fr",
    "/fr/contact": "/ar/contact",
    "/ar/contact": "/fr/contact",
    "/fr/services/droit-immobilier": "/ar/services/القانون-العقاري",
    "/ar/services/القانون-العقاري": "/fr/services/droit-immobilier",
    "/fr/services/succession-heritage": "/ar/services/الميراث-والتركات",
    "/ar/services/الميراث-والتركات": "/fr/services/succession-heritage",
    "/fr/services/droit-foncier-rural": "/ar/services/العقار-الفلاحي-وأراضي-الجموع",
    "/ar/services/العقار-الفلاحي-وأراضي-الجموع": "/fr/services/droit-foncier-rural",
    "/fr/services/droit-fiscal": "/ar/services/القانون-الضريبي",
    "/ar/services/القانون-الضريبي": "/fr/services/droit-fiscal",
    "/fr/services/droit-administratif": "/ar/services/القانون-الإداري",
    "/ar/services/القانون-الإداري": "/fr/services/droit-administratif",
  };
  const alternatePath = alternatePaths[decodeURIComponent(pathname)] || `/${other}`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:gap-5 sm:px-5 lg:px-8">
        <Link href={`/${locale}`} className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label={copy.home}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 bg-white/[0.04] text-gold transition group-hover:border-gold group-hover:bg-gold/10 motion-reduce:transition-none sm:h-11 sm:w-11">
            <Scale aria-hidden="true" size={19} strokeWidth={1.5} />
          </span>
          <span className="min-w-0 max-w-[10rem] sm:max-w-xs">
            <span className="font-display block truncate text-sm font-semibold tracking-tight sm:text-lg">{firm.shortName}</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 sm:block">Mohammédia · 1992</span>
          </span>
        </Link>
        <nav aria-label={locale === "ar" ? "التنقل الرئيسي" : "Navigation principale"}>
          <ul className="flex shrink-0 items-center gap-3 text-sm font-medium sm:gap-7">
            <li className="hidden md:block"><Link className="transition-colors hover:text-brass motion-reduce:transition-none" href={`/${locale}`}>{copy.home}</Link></li>
            <li className="hidden md:block"><Link className="transition-colors hover:text-brass motion-reduce:transition-none" href={`/${locale}#expertises`}>{copy.expertise}</Link></li>
            <li className="hidden sm:block"><Link className="transition-colors hover:text-brass motion-reduce:transition-none" href={`/${locale}/contact`}>{copy.contact}</Link></li>
            <li><Link className="flex items-center gap-1.5 rounded-full border border-gold/60 bg-gold/5 px-3 py-2 text-gold transition-all duration-300 hover:bg-gold hover:text-navy active:scale-95 motion-reduce:transform-none motion-reduce:transition-none sm:gap-2 sm:px-4" href={alternatePath} hrefLang={other === "ar" ? "ar-MA" : "fr-MA"}><Languages aria-hidden="true" size={14} />{copy.switcher}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
