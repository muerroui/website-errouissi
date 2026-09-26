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
        </div>
        <address className="space-y-4 not-italic text-sm text-slate-300">
          <div className="flex items-start gap-3"><MapPin className="mt-0.5 shrink-0 text-gold" size={18} /><p>{firm.address.street}<br />{firm.address.city} {firm.address.postalCode}</p></div>
          <a className="flex items-center gap-3 transition-colors hover:text-gold" href={`tel:${firm.telephone}`}><Phone className="text-gold" size={18} />{firm.displayTelephone}</a>
          <p className="flex items-center gap-3"><Clock3 className="text-gold" size={18} />{locale === "ar" ? "الاثنين–السبت: 09:00–19:30" : "Lundi–samedi : 09:00–19:30"}</p>
          <Link href={`/${locale}/contact`} className="inline-flex rounded-full border border-gold/50 px-5 py-2.5 font-semibold text-gold transition-colors hover:bg-gold hover:text-navy motion-reduce:transition-none">{locale === "ar" ? "العنوان والاتصال" : "Adresse et contact"}</Link>
        </address>
      </div>
    </footer>
  );
}
