"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpLeft, ArrowUpRight, LockKeyhole } from "lucide-react";
import { getPropertyTopics, normalizePhone, propertyTopics, propertyWhatsAppUrl, type PropertyTopic } from "@/lib/ads-immobilier";
import type { Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";
import { trackCampaignContact } from "@/components/ads/CampaignAnalytics";
import styles from "@/app/ads/immobilier/landing.module.css";

type Errors = Partial<Record<"name" | "topic" | "phone", string>>;

const formCopy = {
  ar: {
    heading: "لنتحدث عن ملفكم", intro: "هيّئوا رسالة قصيرة للمكتب، ثم راجعوها على واتساب قبل إرسالها.",
    name: "الاسم", required: "(مطلوب)", topic: "موضوع الملف", choose: "اختاروا الموضوع الأقرب لحالتكم",
    phone: "رقم الهاتف", optional: "(اختياري)", opening: "جارٍ فتح واتساب…", submit: "متابعة عبر واتساب",
    nameError: "يرجى كتابة اسمكم في حرفين على الأقل.", topicError: "اختاروا موضوع الملف لتهيئة الرسالة.",
    phoneError: "يرجى إدخال رقم هاتف صحيح أو ترك الخانة فارغة.",
    privacy: "لا تُرسل هذه الصفحة بياناتكم إلى المكتب. تُضاف إلى رسالة واتساب التي تختارون إرسالها. لا ترسلوا وثائق حساسة في الرسالة الأولى.",
    noJsBefore: "للتواصل مع المكتب، اتصلوا بـ", noJsAfter: "أو استخدموا زر واتساب المباشر.",
    errorStatus: "يرجى تصحيح الخانات المشار إليها قبل المتابعة.", openingStatus: "جارٍ فتح واتساب لمراجعة رسالتكم.",
  },
  fr: {
    heading: "Parlons de votre dossier", intro: "Préparez un court message, puis relisez-le dans WhatsApp avant de l’envoyer.",
    name: "Votre nom", required: "(obligatoire)", topic: "Sujet du dossier", choose: "Choisissez le sujet de votre dossier",
    phone: "Téléphone", optional: "(facultatif)", opening: "Ouverture de WhatsApp…", submit: "Continuer sur WhatsApp",
    nameError: "Indiquez votre nom avec au moins deux caractères.", topicError: "Choisissez un sujet pour préparer votre message.",
    phoneError: "Saisissez un numéro valide ou laissez ce champ vide.",
    privacy: "Cette page ne transmet pas vos données au cabinet. Elles sont ajoutées au message WhatsApp que vous choisissez d’envoyer. N’envoyez pas de documents sensibles dans le premier message.",
    noJsBefore: "Pour contacter le cabinet, appelez le", noJsAfter: "ou utilisez le bouton WhatsApp direct.",
    errorStatus: "Corrigez les champs indiqués avant de continuer.", openingStatus: "Ouverture de WhatsApp pour relire votre message.",
  },
};

export function ImmobilierLeadForm({ locale = "ar" }: { locale?: Locale }) {
  const copy = formCopy[locale];
  const topics = getPropertyTopics(locale);
  const DirectionArrow = locale === "ar" ? ArrowUpLeft : ArrowUpRight;
  const [topic, setTopic] = useState<PropertyTopic | "">("");
  const [errors, setErrors] = useState<Errors>({});
  const [opening, setOpening] = useState(false);
  const [ready, setReady] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setReady(true);
    function selectIssue(event: MouseEvent) {
      const row = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[data-case-topic]") : null;
      const choice = row?.dataset.caseTopic;
      if (!propertyTopics.some((entry) => entry.value === choice)) return;
      event.preventDefault();
      setTopic(choice as PropertyTopic);
      setErrors((current) => ({ ...current, topic: undefined }));
      document.getElementById("consultation")?.scrollIntoView({
        block: "start",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
      // The native fragment focus would otherwise clear the input's focus.
      // Without JavaScript the row still uses its normal anchor destination.
      nameRef.current?.focus({ preventScroll: true });
    }
    function restore() { setOpening(false); }
    document.addEventListener("click", selectIssue);
    window.addEventListener("pageshow", restore);
    window.addEventListener("focus", restore);
    return () => {
      document.removeEventListener("click", selectIssue);
      window.removeEventListener("pageshow", restore);
      window.removeEventListener("focus", restore);
    };
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = nameRef.current?.value.trim() || "";
    const phone = normalizePhone(phoneRef.current?.value || "");
    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = copy.nameError;
    if (!topic) nextErrors.topic = copy.topicError;
    const digits = phone.replace(/[^0-9]/g, "");
    if (phone && (!/^\+?[0-9\s().-]+$/.test(phone) || digits.length < 8 || digits.length > 15)) {
      nextErrors.phone = copy.phoneError;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.topic) topicRef.current?.focus();
      else phoneRef.current?.focus();
      return;
    }
    setOpening(true);
    trackCampaignContact("whatsapp_click", "consultation_form");
    window.location.assign(propertyWhatsAppUrl(name, topic as PropertyTopic, phone, locale));
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate aria-labelledby="consultation-heading">
      <h2 id="consultation-heading">{copy.heading}</h2>
      <p className={styles.formIntro}>{copy.intro}</p>
      <div className={styles.field}>
        <label htmlFor="lead-name">{copy.name} <span>{copy.required}</span></label>
        <input ref={nameRef} id="lead-name" name="name" autoComplete="name" maxLength={80} required disabled={!ready}
          aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}
          onChange={() => errors.name && setErrors((current) => ({ ...current, name: undefined }))} />
        {errors.name && <p className={styles.error} id="name-error">{errors.name}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="lead-topic">{copy.topic} <span>{copy.required}</span></label>
        <select ref={topicRef} id="lead-topic" name="topic" required value={topic} disabled={!ready}
          aria-invalid={Boolean(errors.topic)} aria-describedby={errors.topic ? "topic-error" : undefined}
          onChange={(event) => {
            setTopic(event.target.value as PropertyTopic | "");
            setErrors((current) => ({ ...current, topic: undefined }));
          }}>
          <option value="" disabled>{copy.choose}</option>
          {topics.map((entry) => <option key={entry.value} value={entry.value}>{entry.label}</option>)}
        </select>
        {errors.topic && <p className={styles.error} id="topic-error">{errors.topic}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="lead-phone">{copy.phone} <span>{copy.optional}</span></label>
        <input ref={phoneRef} id="lead-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" disabled={!ready}
          dir="ltr" maxLength={30} placeholder="06 …"
          aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined}
          onChange={() => errors.phone && setErrors((current) => ({ ...current, phone: undefined }))} />
        {errors.phone && <p className={styles.error} id="phone-error">{errors.phone}</p>}
      </div>
      <button className={`${styles.button} ${styles.formButton}`} type="submit" disabled={!ready || opening}>
        {opening ? copy.opening : copy.submit}<DirectionArrow size={20} aria-hidden="true" />
      </button>
      <p className={styles.formPrivacy}><LockKeyhole size={15} aria-hidden="true" />
        {copy.privacy}
      </p>
      <noscript><p>{copy.noJsBefore} <a href={`tel:${firm.telephone}`} dir="ltr">{firm.displayTelephone}</a> {copy.noJsAfter}</p></noscript>
      <span className={styles.srOnly} role="status" aria-live="polite">
        {Object.keys(errors).length ? copy.errorStatus : opening ? copy.openingStatus : ""}
      </span>
    </form>
  );
}
