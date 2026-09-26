import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDownRight, MessageCircle, Phone } from "lucide-react";
import { firm } from "@/lib/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { getServicePath } from "@/lib/services";
import type { ServiceKey } from "@/lib/service-page-types";

type PageProps = { params: Promise<{ lang: string }> };

const content = {
  fr: {
    eyebrow: "Cabinet d'avocat à Mohammedia · Depuis janvier 1992",
    h1: "Avocat à Mohammedia depuis 1992",
    intro: "Plus de 32 ans d'expérience en droit immobilier, foncier rural, terres agricoles, successions et fiscalité, à Mohammedia et partout au Maroc.",
    call: "Appeler le cabinet",
    whatsapp: "Écrire sur WhatsApp",
    proofTitle: "Une expérience juridique construite sur plus de trois décennies",
    proofText: "Maître Abderrazak Errouissi accompagne particuliers, entreprises et agriculteurs avec une approche rigoureuse, directe et adaptée à chaque dossier.",
    servicesTitle: "Nos domaines d'intervention",
    servicesIntro: "Conseil, négociation, médiation, arbitrage et représentation devant les juridictions marocaines.",
    services: [
      ["Droit immobilier et foncier", "Titres fonciers, achat, vente, location, transfert de propriété et litiges immobiliers."],
      ["Successions et héritage", "Partage, indivision, conflits entre héritiers et successions comportant des biens immobiliers."],
      ["Droit foncier rural", "Terres agricoles, Melkiya, bornage, terres Soulaliyates, expropriation et sortie d’indivision."],
      ["Fiscalité", "Conseil, contrôle, contentieux fiscal et accompagnement des particuliers et entreprises."],
      ["Droit administratif", "Démarches, recours et litiges impliquant les administrations publiques."],
    ],
    reachTitle: "Un cabinet à Mohammedia, actif dans tout le Maroc",
    reachText: "Le cabinet intervient notamment à Casablanca, Rabat, Fès, Marrakech, Tanger, Kénitra, Bouskoura et Benslimane.",
    finalTitle: "Parlez de votre dossier à un avocat",
    finalText: "Exposez brièvement votre situation par téléphone ou WhatsApp afin d'organiser un rendez-vous au cabinet.",
  },
  ar: {
    eyebrow: "مكتب محاماة بالمحمدية · منذ يناير 1992",
    h1: "محامٍ بالمحمدية منذ 1992",
    intro: "خبرة تفوق 32 سنة في القانون العقاري والعقار الفلاحي وأراضي الجموع والميراث والضرائب بالمحمدية وفي مختلف مدن المغرب.",
    call: "الاتصال بالمكتب",
    whatsapp: "التواصل عبر واتساب",
    proofTitle: "خبرة قانونية تمتد لأكثر من ثلاثة عقود",
    proofText: "يرافق الأستاذ عبد الرزاق الرويسي الأفراد والمقاولات والفلاحين بمنهج دقيق وواضح يتلاءم مع خصوصية كل ملف.",
    servicesTitle: "مجالات تدخل المكتب",
    servicesIntro: "الاستشارة والتفاوض والوساطة والتحكيم والتمثيل أمام المحاكم المغربية.",
    services: [
      ["القانون العقاري والتحفيظ العقاري", "التحفيظ العقاري والرسوم العقارية ومعاملات البيع والشراء والكراء ونقل الملكية وتسوية المنازعات العقارية."],
      ["الميراث والتركات", "قسمة التركات وإنهاء حالة الشياع وتسوية النزاعات بين الورثة والمنازعات المتعلقة بالعقارات الموروثة."],
      ["العقار الفلاحي وأراضي الجموع", "قضايا الملكية والتحديد والشياع ونزع الملكية والمنازعات المتعلقة بالعقارات الفلاحية وأراضي الجموع."],
      ["القانون الضريبي", "الاستشارات الضريبية ومواكبة الأفراد والمقاولات أثناء المراقبة الضريبية والتمثيل في المنازعات الضريبية."],
      ["القانون الإداري", "المواكبة في المساطر الإدارية وتقديم الطعون والتمثيل في المنازعات مع الإدارات العمومية."],
    ],
    reachTitle: "مكتب محاماة بالمحمدية يتولى ملفات في مختلف مدن المغرب",
    reachText: "يتدخل المكتب خصوصا في الدار البيضاء والرباط وفاس ومراكش وطنجة والقنيطرة وبوسكورة وبنسليمان.",
    finalTitle: "تواصلوا معنا بشأن ملفكم",
    finalText: "اشرحوا وضعيتكم بإيجاز عبر الهاتف أو واتساب من أجل تنظيم موعد بالمكتب.",
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: content[lang].h1 };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = content[lang as Locale];
  const cities = lang === "ar"
    ? ["المحمدية", "الدار البيضاء", "الرباط", "فاس", "مراكش", "طنجة", "القنيطرة", "بنسليمان"]
    : ["Mohammédia", "Casablanca", "Rabat", "Fès", "Marrakech", "Tanger", "Kénitra", "Benslimane"];
  const serviceKeys: Array<ServiceKey | null> = ["immobilier", "succession", "foncierRural", "fiscal", "administratif"];

  return (
    <main className="overflow-hidden bg-[#F3F0E9] text-slate-950">
      <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[#0B132B] text-white">
        <div aria-hidden="true" className="absolute inset-y-0 start-[8%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute inset-y-0 end-[30%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute inset-x-0 top-[32%] h-px bg-white/[0.05]" />
        <div aria-hidden="true" className="font-display absolute -end-10 bottom-[-3.5rem] select-none text-[16rem] font-semibold leading-none tracking-[-0.04em] text-white/[0.025] sm:text-[22rem] lg:text-[28rem]">92</div>

        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[90rem] grid-cols-1 px-5 pb-14 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-24 xl:gap-24">
          <div className="flex min-w-0 flex-col justify-between">
            <div className="grid gap-8 lg:grid-cols-[6rem_minmax(0,1fr)]">
              <p className="hidden whitespace-pre-line border-t border-amber-500/50 pt-4 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.22em] text-amber-200/70 lg:block">
                {lang === "ar" ? "مكتب محاماة\nالمحمدية" : "Cabinet\nd’avocat\nMohammedia"}
              </p>
              <div>
                <h1 className="font-display max-w-full break-words text-[clamp(2.75rem,7.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white text-balance lg:max-w-[13ch] lg:leading-[0.98]">{copy.h1}</h1>
                <p className="mt-8 max-w-[66ch] border-s border-amber-500/50 ps-6 text-lg leading-8 text-slate-300 sm:text-xl">{copy.intro}</p>
              </div>
            </div>

            <div className="mt-14 grid items-end gap-8 border-t border-white/10 pt-8 sm:grid-cols-[1fr_auto] lg:ms-[6rem]">
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${firm.telephone}`} className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#C5A059] px-6 py-3 font-semibold text-[#0B132B] shadow-[0_14px_36px_rgba(197,160,89,0.18)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#D6B66A] hover:shadow-[0_18px_42px_rgba(197,160,89,0.26)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none">
                  <Phone aria-hidden="true" size={17} strokeWidth={1.7} />{copy.call}
                </a>
                <a href={firm.whatsappUrl} className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-amber-500/35 hover:bg-white/[0.08] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" size={17} strokeWidth={1.7} />{copy.whatsapp}
                </a>
              </div>
              <a href="#expertises" className="group hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-amber-300 motion-reduce:transition-none sm:flex">
                {lang === "ar" ? "مجالات العمل" : "Découvrir nos expertises"}<ArrowDownRight aria-hidden="true" size={18} className="text-amber-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none rtl:-scale-x-100" />
              </a>
            </div>
          </div>

          <aside className="relative mt-14 self-center border-y border-white/10 bg-white/[0.035] px-7 py-9 shadow-2xl backdrop-blur-md lg:mt-12 lg:-translate-y-4 lg:px-8 lg:py-11">
            <div className="absolute inset-y-0 start-0 w-px bg-amber-500/70" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/75">{lang === "ar" ? "منذ يناير" : "Depuis janvier"}</p>
            <p className="font-display mt-3 text-[5.5rem] font-semibold leading-none tracking-[-0.04em] text-white">1992</p>
            <div className="my-8 h-px bg-white/10" />
            <p className="font-display text-[4.75rem] font-semibold leading-none tracking-[-0.04em] text-[#C5A059]">+32</p>
            <p className="mt-2 text-lg text-slate-200">{lang === "ar" ? "سنة من الخبرة" : "ans d’expérience"}</p>
            <p className="mt-8 max-w-[28ch] text-sm leading-7 text-slate-400">{lang === "ar" ? "خبرة قانونية في خدمة الأفراد والمقاولات والفلاحين في جميع أنحاء المغرب." : "Une pratique au service des particuliers, des entreprises et des agriculteurs dans tout le Maroc."}</p>
            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex justify-between gap-5"><dt className="text-slate-400">{lang === "ar" ? "المقر" : "Cabinet"}</dt><dd className="font-medium text-slate-200">{lang === "ar" ? "المحمدية" : "Mohammédia"}</dd></div>
              <div className="flex justify-between gap-5"><dt className="text-slate-400">{lang === "ar" ? "اللغات" : "Langues"}</dt><dd className="font-medium text-slate-200">{lang === "ar" ? "العربية · Français · English" : "Français · العربية · English"}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div className="relative min-h-72 border-t border-slate-900/15 pt-5">
            <p className="font-display text-[clamp(5rem,12vw,10rem)] font-semibold leading-none tracking-[-0.04em] text-[#C5A059]">32</p>
            <p className="mt-2 max-w-48 text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-slate-600">{lang === "ar" ? "عاماً من الممارسة القانونية" : "années de pratique juridique"}</p>
            <span aria-hidden="true" className="absolute bottom-0 end-0 h-28 w-px bg-slate-900/15" />
          </div>
          <div className="lg:pt-16">
            <h2 className="font-display max-w-[15ch] text-[clamp(2.7rem,5vw,4.7rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950 text-balance">{copy.proofTitle}</h2>
            <p className="mt-8 max-w-[68ch] text-lg leading-8 text-slate-600">{copy.proofText}</p>
            <div className="mt-12 grid gap-8 border-t border-slate-900/15 pt-7 sm:grid-cols-3">
              <div><p className="font-display text-2xl text-slate-950">{lang === "ar" ? "المحمدية" : "Mohammédia"}</p><p className="mt-2 text-sm text-slate-600">{lang === "ar" ? "مقر المكتب" : "Adresse du cabinet"}</p></div>
              <div><p className="font-display text-2xl text-slate-950">{lang === "ar" ? "المغرب" : "Maroc"}</p><p className="mt-2 text-sm text-slate-600">{lang === "ar" ? "نطاق التدخل" : "Zone d’intervention"}</p></div>
              <div><p className="font-display text-2xl text-slate-950" dir="ltr">FR · AR · EN</p><p className="mt-2 text-sm text-slate-600">{lang === "ar" ? "لغات التواصل" : "Langues de travail"}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertises" className="bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[86rem]">
          <header className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-display max-w-[12ch] text-[clamp(3rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white text-balance">{copy.servicesTitle}</h2>
            <p className="max-w-[58ch] text-lg leading-8 text-slate-400 lg:justify-self-end">{copy.servicesIntro}</p>
          </header>

          <div className="divide-y divide-white/10">
            {copy.services.map(([title, description], index) => {
              const serviceKey = serviceKeys[index];
              return <article key={title} className="group grid gap-5 py-9 transition-[background-color,padding] duration-300 hover:bg-amber-500/[0.055] motion-reduce:transition-none sm:grid-cols-[5rem_1fr] sm:px-4 lg:grid-cols-[8rem_0.8fr_1.2fr] lg:items-baseline lg:gap-10 lg:py-11 lg:hover:px-7">
                <p className="font-display text-lg tracking-[0.08em] text-[#C5A059]">{String(index + 1).padStart(2, "0")} /</p>
                <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none rtl:group-hover:-translate-x-1 sm:text-3xl">{serviceKey ? <Link href={getServicePath(lang, serviceKey)}>{title}</Link> : title}</h3>
                <p className="max-w-[62ch] text-sm leading-7 text-slate-400 lg:text-base">{description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#E5DED0] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-display text-[5rem] leading-none text-[#C5A059]">MA</p>
            <h2 className="font-display mt-8 max-w-[13ch] text-[clamp(2.8rem,5vw,4.6rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-slate-950 text-balance">{copy.reachTitle}</h2>
            <p className="mt-7 max-w-[62ch] text-lg leading-8 text-slate-600">{copy.reachText}</p>
          </div>
          <div className="grid content-start sm:grid-cols-2">
            {cities.map((city, index) => (
              <p key={city} className="flex items-baseline justify-between gap-4 border-t border-slate-900/15 py-5 text-xl text-slate-800 sm:px-5 sm:text-2xl">
                <span className="font-display">{city}</span><span className="text-[0.65rem] tabular-nums tracking-[0.18em] text-slate-400">0{index + 1}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C5A059] px-5 py-20 text-[#0B132B] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
          <div>
            <h2 className="font-display max-w-[13ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance">{copy.finalTitle}</h2>
            <p className="mt-7 max-w-[62ch] text-lg leading-8 text-[#0B132B]/75">{copy.finalText}</p>
          </div>
          <div className="grid gap-3 lg:justify-self-end">
            <a href={`tel:${firm.telephone}`} className="inline-flex min-h-14 items-center justify-between gap-8 rounded-xl bg-[#0B132B] px-6 py-4 font-semibold text-white shadow-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none">
              <span>{copy.call}</span><Phone aria-hidden="true" size={18} />
            </a>
            <a href={firm.whatsappUrl} className="inline-flex min-h-14 items-center justify-between gap-8 rounded-xl border border-[#0B132B]/25 px-6 py-4 font-semibold transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none" rel="noopener noreferrer">
              <span>{copy.whatsapp}</span><MessageCircle aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <a href={firm.whatsappUrl} aria-label={copy.whatsapp} className="fixed bottom-5 end-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/60 bg-[#25D366] text-white shadow-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(37,211,102,0.28)] active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none" rel="noopener noreferrer"><MessageCircle aria-hidden="true" size={24} /></a>
    </main>
  );
}
