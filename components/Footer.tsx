import { firm } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { Clock3, MapPin, Phone, Scale } from "lucide-react";
import Link from "next/link";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-gold/30 bg-navy text-white">
      <div aria-hidden="true" className="absolute -bottom-32 -end-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-gold"><Scale size={22} strokeWidth={1.5} /><span className="h-px w-12 bg-gold/60" /></div>
          <p className="font-display mt-5 text-2xl font-semibold">{firm.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{locale === "ar" ? "مكتب محاماة بالمحمدية يقدم خدماته للأفراد والمقاولات والفلاحين في مختلف مدن المغرب." : "Cabinet à Mohammedia au service des particuliers, entreprises et agriculteurs dans tout le Maroc."}</p>
          <div className="mt-6 flex flex-wrap gap-3" aria-label={locale === "ar" ? "الشبكات الاجتماعية" : "Réseaux sociaux"}>
            <a
              href={firm.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-white/15 px-3.5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-gold/60 hover:bg-white/[0.04] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
              aria-label={locale === "ar" ? "ملف الأستاذ عبد الرزاق الرويسي على LinkedIn" : "Profil LinkedIn de Maître Abderrazak Errouissi"}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" /></svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={firm.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-white/15 px-3.5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-gold/60 hover:bg-white/[0.04] hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy motion-reduce:transition-none"
              aria-label={locale === "ar" ? "صفحة مكتب الرويسي على Facebook" : "Page Facebook du Cabinet Errouissi"}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current"><path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.59-1.56h1.7V3.34c-.29-.04-1.3-.13-2.48-.13-2.45 0-4.13 1.49-4.13 4.24V9.8H7.41V13h2.77v8h3.32Z" /></svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
        <address className="space-y-4 not-italic text-sm text-slate-300">
          <div className="flex items-start gap-3"><MapPin className="mt-0.5 shrink-0 text-gold" size={18} /><p>{firm.address.street}<br />{firm.address.city} {firm.address.postalCode}</p></div>
          <a className="flex min-h-11 items-center gap-3 transition-colors hover:text-gold" href={`tel:${firm.telephone}`}><Phone className="text-gold" size={18} />{firm.displayTelephone}</a>
          <p className="flex items-center gap-3"><Clock3 className="text-gold" size={18} />{locale === "ar" ? "الاثنين–السبت: 09:00–19:30" : "Lundi–samedi : 09:00–19:30"}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/guides`} className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white transition-colors hover:border-gold hover:text-gold motion-reduce:transition-none">{locale === "ar" ? "الدليل القانوني" : "Guides juridiques"}</Link>
            <Link href={`/${locale}/contact`} className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-5 py-2.5 font-semibold text-gold transition-colors hover:bg-gold hover:text-navy motion-reduce:transition-none">{locale === "ar" ? "العنوان والاتصال" : "Adresse et contact"}</Link>
          </div>
        </address>
      </div>
    </footer>
  );
}
