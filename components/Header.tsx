"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Languages, Menu, Scale, X } from "lucide-react";
import { alternateLocale, type Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";
import { getAlternateGuidePath } from "@/lib/guide-slugs";

const labels = {
  fr: {
    home: "Accueil",
    expertise: "Expertises",
    guides: "Guides",
    contact: "Contact",
    switcher: "العربية",
    brand: "Cabinet Errouissi",
    location: "Mohammédia · 1992",
  },
  ar: {
    home: "الرئيسية",
    expertise: "مجالات الممارسة",
    guides: "الدليل القانوني",
    contact: "الاتصال بالمكتب",
    switcher: "Français",
    brand: "الأستاذ الرويسي",
    location: "المحمدية · 1992",
  },
} as const;

export function Header({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
    "/fr/services/droit-foncier-rural": "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي",
    "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي": "/fr/services/droit-foncier-rural",
    "/fr/services/droit-fiscal": "/ar/services/القانون-الضريبي",
    "/ar/services/القانون-الضريبي": "/fr/services/droit-fiscal",
    "/fr/services/droit-administratif": "/ar/services/القانون-الإداري",
    "/ar/services/القانون-الإداري": "/fr/services/droit-administratif",
  };
  const alternatePath = getAlternateGuidePath(pathname, locale) || alternatePaths[decodeURIComponent(pathname)] || `/${other}`;
  const navigation = [
    { href: `/${locale}`, label: copy.home },
    { href: `/${locale}#expertises`, label: copy.expertise },
    { href: `/${locale}/guides`, label: copy.guides },
    { href: `/${locale}/contact`, label: copy.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white shadow-lg backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-5 py-3 sm:gap-6 sm:px-8 sm:py-4 lg:px-12">
        <Link href={`/${locale}`} className="group flex min-h-11 min-w-0 items-center gap-2 sm:gap-3" aria-label={locale === "ar" ? "مكتب الأستاذ الرويسي — الصفحة الرئيسية" : "Cabinet Errouissi — Accueil"}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 bg-white/[0.04] text-gold transition group-hover:border-gold group-hover:bg-gold/10 motion-reduce:transition-none sm:h-11 sm:w-11">
            <Scale aria-hidden="true" size={19} strokeWidth={1.5} />
          </span>
          <span className="min-w-0 max-w-[8.5rem] min-[375px]:max-w-[11rem] min-[410px]:max-w-[13.5rem] sm:max-w-xs">
            <span className={`${locale === "ar" ? "font-display" : "font-brand"} block truncate text-[0.875rem] font-semibold tracking-tight sm:text-lg`}>
              {copy.brand}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 sm:block">
              {copy.location}
            </span>
          </span>
        </Link>
        <nav className="hidden lg:block" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Navigation principale"}>
          <ul className="flex shrink-0 items-center gap-4 text-sm font-medium lg:gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-11 items-center transition-colors hover:text-brass motion-reduce:transition-none" href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li><Link className="flex min-h-11 items-center gap-2 rounded-full border border-gold/60 bg-gold/5 px-4 text-gold transition-[background-color,color,transform] duration-300 hover:bg-gold hover:text-navy active:scale-95 motion-reduce:transform-none motion-reduce:transition-none" href={alternatePath} hrefLang={other === "ar" ? "ar-MA" : "fr-MA"}><Languages aria-hidden="true" size={14} />{copy.switcher}</Link></li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link className="flex min-h-11 items-center gap-1.5 rounded-full border border-gold/60 bg-gold/5 px-2 text-[0.8125rem] text-gold transition-colors hover:bg-gold hover:text-navy motion-reduce:transition-none min-[360px]:px-3 min-[360px]:text-sm" href={alternatePath} hrefLang={other === "ar" ? "ar-MA" : "fr-MA"}>
            <Languages aria-hidden="true" className="hidden min-[360px]:block" size={14} />{copy.switcher}
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-gold/60 hover:text-gold motion-reduce:transition-none"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? (locale === "ar" ? "إغلاق القائمة" : "Fermer le menu") : (locale === "ar" ? "فتح القائمة" : "Ouvrir le menu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <nav id="mobile-navigation" className="absolute inset-x-0 top-full border-y border-white/10 bg-navy px-3 py-3 shadow-luxe lg:hidden" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Navigation principale"}>
            <ul className="mx-auto grid max-w-7xl gap-1 text-base font-medium">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="flex min-h-12 items-center justify-between rounded-xl px-4 transition-colors hover:bg-white/[0.06] hover:text-brass motion-reduce:transition-none" href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}<span aria-hidden="true" className="text-gold">—</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
