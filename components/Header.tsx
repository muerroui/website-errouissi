"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Languages, Menu, Scale, X, ArrowRight, ArrowLeft } from "lucide-react";
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
    allExpertises: "Voir toutes les expertises",
  },
  ar: {
    home: "الرئيسية",
    expertise: "مجالات الممارسة",
    guides: "الدليل القانوني",
    contact: "الاتصال بالمكتب",
    switcher: "Français",
    brand: "الأستاذ الرويسي",
    location: "المحمدية · 1992",
    allExpertises: "عرض كافة مجالات الممارسة",
  },
} as const;

const servicesMenu = {
  fr: [
    {
      num: "01",
      title: "Droit immobilier & foncier",
      desc: "Titres fonciers, litiges, vente et conservation foncière",
      href: "/fr/services/droit-immobilier",
    },
    {
      num: "02",
      title: "Successions & héritage",
      desc: "Partage amiable ou judiciaire, indivision et liquidation",
      href: "/fr/services/succession-heritage",
    },
    {
      num: "03",
      title: "Foncier rural & terres agricoles",
      desc: "Réforme agraire, Melkia, bornage et expropriation",
      href: "/fr/services/droit-foncier-rural",
    },
    {
      num: "04",
      title: "Droit fiscal & contentieux",
      desc: "Contrôles, notifications de redressement et recours",
      href: "/fr/services/droit-fiscal",
    },
    {
      num: "05",
      title: "Droit administratif",
      desc: "Recours pour excès de pouvoir et litiges publics",
      href: "/fr/services/droit-administratif",
    },
  ],
  ar: [
    {
      num: "01",
      title: "القانون العقاري ومساطر التحفيظ",
      desc: "التحفيظ العقاري، النزاعات، المعاملات وقضايا الملكية",
      href: "/ar/services/القانون-العقاري",
    },
    {
      num: "02",
      title: "تصفية التركات وقسمة المواريث",
      desc: "قسمة التركات، إنهاء الشياع والنزاعات بين الورثة",
      href: "/ar/services/الميراث-والتركات",
    },
    {
      num: "03",
      title: "العقار الفلاحي وأراضي الإصلاح الزراعي",
      desc: "تعاونيات الإصلاح الزراعي، أراضي الملك والنزاعات الفلاحية",
      href: "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي",
    },
    {
      num: "04",
      title: "القانون الضريبي والمنازعات الجبائية",
      desc: "المراقبة الجبائية، مساطر التصحيح والطعون الإدارية",
      href: "/ar/services/القانون-الضريبي",
    },
    {
      num: "05",
      title: "القانون الإداري والمنازعات العمومية",
      desc: "دعاوى الإلغاء لتجاوز السلطة والمسؤولية الإدارية",
      href: "/ar/services/القانون-الإداري",
    },
  ],
} as const;

export function Header({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copy = labels[locale];
  const isAr = locale === "ar";
  const other = alternateLocale(locale);
  const pathname = usePathname();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const alternatePaths: Record<string, string> = {
    "/fr": "/ar",
    "/ar": "/fr",
    "/fr/contact": "/ar/contact",
    "/ar/contact": "/fr/contact",
    "/fr/mre": "/ar/mre",
    "/ar/mre": "/fr/mre",
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

  // Close menus on page change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileAccordionOpen(false);
  }, [pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[#0B132B] text-white shadow-xl">
      <div className="relative mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-5 py-3 sm:gap-6 sm:px-8 sm:py-4 lg:px-12">
        {/* Brand Logo */}
        <Link
          href={`/${locale}`}
          className="group flex min-h-11 min-w-0 items-center gap-2 sm:gap-3"
          aria-label={isAr ? "مكتب الأستاذ الرويسي — الصفحة الرئيسية" : "Cabinet Errouissi — Accueil"}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 bg-white/[0.04] text-gold transition group-hover:border-gold group-hover:bg-gold/10 motion-reduce:transition-none sm:h-11 sm:w-11">
            <Scale aria-hidden="true" size={19} strokeWidth={1.5} />
          </span>
          <span className="min-w-0 max-w-[8.5rem] min-[375px]:max-w-[11rem] min-[410px]:max-w-[13.5rem] sm:max-w-xs">
            <span className={`${isAr ? "font-display" : "font-brand"} block truncate text-[0.875rem] font-semibold tracking-tight sm:text-lg`}>
              {copy.brand}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 sm:block">
              {copy.location}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label={isAr ? "التنقل الرئيسي" : "Navigation principale"}>
          <ul className="flex shrink-0 items-center gap-4 text-sm font-medium lg:gap-7">
            {/* Home */}
            <li>
              <Link className="inline-flex min-h-11 items-center transition-colors hover:text-brass motion-reduce:transition-none" href={`/${locale}`}>
                {copy.home}
              </Link>
            </li>

            {/* Expertises Dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="expertises-menu-btn"
                type="button"
                className="inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-brass motion-reduce:transition-none cursor-pointer"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <span>{copy.expertise}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 text-gold/80 ${dropdownOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu Card */}
              {dropdownOpen && (
                <div
                  className={`absolute top-full mt-2 w-[24rem] sm:w-[26rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-amber-500/35 bg-[#080E24] p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-200 z-[110] ${
                    isAr ? "end-0 text-right" : "start-0 text-left"
                  }`}
                  role="menu"
                  aria-label={copy.expertise}
                >
                  <div className="space-y-1.5">
                    {servicesMenu[locale].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-xl p-2.5 bg-[#0E1738] hover:bg-[#15224F] border border-white/10 hover:border-amber-500/40 transition-all duration-200"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="font-display shrink-0 text-xs font-bold text-amber-300 mt-0.5 bg-amber-500/15 rounded px-2 py-0.5 border border-amber-500/30">
                          {item.num}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-white text-sm transition-colors group-hover:text-amber-300">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-300 leading-relaxed mt-0.5 line-clamp-1">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* All Expertises link footer */}
                  <div className="mt-2.5 border-t border-white/15 pt-2.5 px-1">
                    <Link
                      href={`/${locale}#expertises`}
                      className="inline-flex w-full items-center justify-between rounded-xl bg-[#0E1738] px-3 py-2 text-xs font-semibold text-amber-300 transition-colors hover:bg-amber-500/20 hover:text-amber-200 border border-amber-500/25"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span>{copy.allExpertises}</span>
                      <ArrowIcon size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* Guides */}
            <li>
              <Link className="inline-flex min-h-11 items-center transition-colors hover:text-brass motion-reduce:transition-none" href={`/${locale}/guides`}>
                {copy.guides}
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link className="inline-flex min-h-11 items-center transition-colors hover:text-brass motion-reduce:transition-none" href={`/${locale}/contact`}>
                {copy.contact}
              </Link>
            </li>

            {/* Language Switcher */}
            <li>
              <Link
                className="flex min-h-11 items-center gap-2 rounded-full border border-gold/60 bg-gold/5 px-4 text-gold transition-[background-color,color,transform] duration-300 hover:bg-gold hover:text-navy active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                href={alternatePath}
                hrefLang={other === "ar" ? "ar-MA" : "fr-MA"}
              >
                <Languages aria-hidden="true" size={14} />
                {copy.switcher}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Actions: Language & Burger */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link
            className="flex min-h-11 items-center gap-1.5 rounded-full border border-gold/60 bg-gold/5 px-2 text-[0.8125rem] text-gold transition-colors hover:bg-gold hover:text-navy motion-reduce:transition-none min-[360px]:px-3 min-[360px]:text-sm"
            href={alternatePath}
            hrefLang={other === "ar" ? "ar-MA" : "fr-MA"}
          >
            <Languages aria-hidden="true" className="hidden min-[360px]:block" size={14} />
            {copy.switcher}
          </Link>
          <button
            id="mobile-menu-btn"
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-gold/60 hover:text-gold motion-reduce:transition-none cursor-pointer"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? (isAr ? "إغلاق القائمة" : "Fermer le menu") : (isAr ? "فتح القائمة" : "Ouvrir le menu")}
            onClick={() => {
              setMenuOpen((open) => {
                const next = !open;
                if (!next) setMobileAccordionOpen(false);
                return next;
              });
            }}
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-amber-500/30 bg-[#080E24] px-4 py-4 shadow-[0_30px_70px_rgba(0,0,0,0.98)] z-[110] lg:hidden"
            aria-label={isAr ? "التنقل الرئيسي" : "Navigation principale"}
          >
            <ul className="mx-auto grid max-w-7xl gap-2 text-base font-medium">
              {/* Home */}
              <li>
                <Link
                  className="flex min-h-12 items-center justify-between rounded-xl bg-[#0E1738] px-4 border border-white/10 text-white transition-colors hover:bg-[#15224F] hover:text-brass"
                  href={`/${locale}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {copy.home}
                  <span aria-hidden="true" className="text-gold">—</span>
                </Link>
              </li>

              {/* Expertises Accordion */}
              <li className="rounded-xl bg-[#0E1738] p-2 border border-white/10">
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between rounded-lg px-2 transition-colors hover:text-brass cursor-pointer"
                  onClick={() => setMobileAccordionOpen((prev) => !prev)}
                  aria-expanded={mobileAccordionOpen}
                >
                  <span className="font-semibold text-white">{copy.expertise}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gold transition-transform duration-200 ${mobileAccordionOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {mobileAccordionOpen && (
                  <div className={`mt-2 space-y-1.5 pb-1 pt-1 ${isAr ? "pe-2 border-r-2 border-amber-500/60" : "ps-2 border-l-2 border-amber-500/60"}`}>
                    {servicesMenu[locale].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg bg-[#080E24] px-3.5 py-2.5 text-sm border border-white/5 transition-colors hover:bg-[#15224F] hover:border-amber-500/30"
                        onClick={() => setMenuOpen(false)}
                      >
                        <p className="font-semibold text-white flex items-center gap-2">
                          <span className="text-amber-300 text-xs font-bold">{item.num} /</span>
                          <span>{item.title}</span>
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                    <Link
                      href={`/${locale}#expertises`}
                      className="mt-2 flex items-center justify-between rounded-lg bg-amber-500/10 px-3.5 py-2 text-xs font-semibold text-amber-300 border border-amber-500/25 hover:bg-amber-500/20"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{copy.allExpertises}</span>
                      <ArrowIcon size={12} aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </li>

              {/* Guides */}
              <li>
                <Link
                  className="flex min-h-12 items-center justify-between rounded-xl bg-[#0E1738] px-4 border border-white/10 text-white transition-colors hover:bg-[#15224F] hover:text-brass"
                  href={`/${locale}/guides`}
                  onClick={() => setMenuOpen(false)}
                >
                  {copy.guides}
                  <span aria-hidden="true" className="text-gold">—</span>
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  className="flex min-h-12 items-center justify-between rounded-xl bg-[#0E1738] px-4 border border-white/10 text-white transition-colors hover:bg-[#15224F] hover:text-brass"
                  href={`/${locale}/contact`}
                  onClick={() => setMenuOpen(false)}
                >
                  {copy.contact}
                  <span aria-hidden="true" className="text-gold">—</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
