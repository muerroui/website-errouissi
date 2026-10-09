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
    phone: "رقم الهاتف", optional: "(اختياري)", opening: "جارٍ تسجيل طلبكم…", submit: "متابعة عبر واتساب",
    nameError: "يرجى كتابة اسمكم في حرفين على الأقل.", topicError: "اختاروا موضوع الملف لتهيئة الرسالة.",
    phoneError: "يرجى إدخال رقم هاتف صحيح أو ترك الخانة فارغة.",
    privacy: "بالنقر، تُسجَّل بياناتكم لمتابعة طلبكم ثم يُفتح واتساب. لا تُرسلوا وثائق حساسة في الرسالة الأولى.",
    saveError: "تعذّر تسجيل طلبكم. حاولوا مجدداً أو افتحوا واتساب دون تسجيل.",
    rateError: "طلبات كثيرة في وقت قصير. انتظروا دقيقة أو افتحوا واتساب دون تسجيل.",
    withoutSaving: "فتح واتساب دون تسجيل", savedStatus: "تم تسجيل طلبكم. يُفتح واتساب لمراجعة الرسالة.",
    noJsBefore: "للتواصل مع المكتب، اتصلوا بـ", noJsAfter: "أو استخدموا زر واتساب المباشر.",
    errorStatus: "يرجى تصحيح الخانات المشار إليها قبل المتابعة.", openingStatus: "جارٍ فتح واتساب لمراجعة رسالتكم.",
  },
  fr: {
    heading: "Parlons de votre dossier", intro: "Préparez un court message, puis relisez-le dans WhatsApp avant de l’envoyer.",
    name: "Votre nom", required: "(obligatoire)", topic: "Sujet du dossier", choose: "Choisissez un sujet",
    phone: "Téléphone", optional: "(facultatif)", opening: "Enregistrement de votre demande…", submit: "Continuer sur WhatsApp",
    nameError: "Indiquez votre nom avec au moins deux caractères.", topicError: "Choisissez un sujet pour préparer votre message.",
    phoneError: "Saisissez un numéro valide ou laissez ce champ vide.",
    privacy: "Au clic, vos coordonnées sont enregistrées pour le suivi de votre demande, puis WhatsApp s’ouvre. N’envoyez pas de documents sensibles dans le premier message.",
    saveError: "Votre demande n’a pas pu être enregistrée. Réessayez ou ouvrez WhatsApp sans enregistrement.",
    rateError: "Trop de demandes rapprochées. Attendez une minute ou ouvrez WhatsApp sans enregistrement.",
    withoutSaving: "Ouvrir WhatsApp sans enregistrement", savedStatus: "Demande enregistrée. Ouverture de WhatsApp pour relire votre message.",
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
  const [saveError, setSaveError] = useState("");
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const saveErrorRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const submissionRef = useRef<{ signature: string; id: string } | null>(null);
  const unsavedUrlRef = useRef("");

  useEffect(() => {
    if (!saveError) return;
    saveErrorRef.current?.scrollIntoView({ block: "center", behavior: "instant" });
    saveErrorRef.current?.focus({ preventScroll: true });
  }, [saveError]);

  useEffect(() => {
    setReady(true);
    function selectIssue(event: MouseEvent) {
      const row = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[data-case-topic]") : null;
      const choice = row?.dataset.caseTopic;
      if (!propertyTopics.some((entry) => entry.value === choice)) return;
      event.preventDefault();
      setTopic(choice as PropertyTopic);
      setSaveError("");
      setSaved(false);
      setErrors((current) => ({ ...current, topic: undefined }));
      document.getElementById("consultation")?.scrollIntoView({
        block: "start",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
      // The native fragment focus would otherwise clear the input's focus.
      // Without JavaScript the row still uses its normal anchor destination.
      nameRef.current?.focus({ preventScroll: true });
    }
    function restore() { if (!busyRef.current) setOpening(false); }
    document.addEventListener("click", selectIssue);
    window.addEventListener("pageshow", restore);
    window.addEventListener("focus", restore);
    return () => {
      document.removeEventListener("click", selectIssue);
      window.removeEventListener("pageshow", restore);
      window.removeEventListener("focus", restore);
    };
  }, []);

  function openWhatsApp(url: string) {
    trackCampaignContact("whatsapp_click", "consultation_form");
    window.location.assign(url);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busyRef.current) return;
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
    setSaveError("");
    setSaved(false);
    if (Object.keys(nextErrors).length) {
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.topic) topicRef.current?.focus();
      else phoneRef.current?.focus();
      return;
    }
    busyRef.current = true;
    setOpening(true);
    const whatsappUrl = propertyWhatsAppUrl(name, topic as PropertyTopic, phone, locale);
    unsavedUrlRef.current = whatsappUrl;
    try {
      const signature = JSON.stringify([name, topic, phone, locale]);
      if (submissionRef.current?.signature !== signature) {
        submissionRef.current = { signature, id: crypto.randomUUID() };
      }
      const response = await fetch("/api/immobilier-leads", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: submissionRef.current.id, name, phone: phone || null, topic, locale }),
        signal: AbortSignal.timeout(10_000),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) {
        setSaveError(response.status === 429 ? copy.rateError : copy.saveError);
        return;
      }
      setSaved(true);
      openWhatsApp(whatsappUrl);
    } catch { setSaveError(copy.saveError); }
    finally { busyRef.current = false; setOpening(false); }
  }

  return (
    <form className={styles.form} onSubmit={submit} onChange={() => { setSaveError(""); setSaved(false); }} noValidate aria-labelledby="consultation-heading" aria-busy={opening}>
      <h2 id="consultation-heading">{copy.heading}</h2>
      <p className={styles.formIntro}>{copy.intro}</p>
      <div className={styles.field}>
        <label htmlFor="lead-name">{copy.name} <span>{copy.required}</span></label>
        <input ref={nameRef} id="lead-name" name="name" autoComplete="name" maxLength={80} required disabled={!ready || opening}
          aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}
          onChange={() => errors.name && setErrors((current) => ({ ...current, name: undefined }))} />
        {errors.name && <p className={styles.error} id="name-error">{errors.name}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="lead-topic">{copy.topic} <span>{copy.required}</span></label>
        <select ref={topicRef} id="lead-topic" name="topic" required value={topic} disabled={!ready || opening}
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
        <input ref={phoneRef} id="lead-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" disabled={!ready || opening}
          dir="ltr" maxLength={30} placeholder="06 …"
          aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined}
          onChange={() => errors.phone && setErrors((current) => ({ ...current, phone: undefined }))} />
        {errors.phone && <p className={styles.error} id="phone-error">{errors.phone}</p>}
      </div>
      <p className={styles.formPrivacy}><LockKeyhole size={15} aria-hidden="true" />{copy.privacy}</p>
      <button className={`${styles.button} ${styles.formButton}`} type="submit" disabled={!ready || opening}>
        {opening ? copy.opening : copy.submit}<DirectionArrow size={20} aria-hidden="true" />
      </button>
      {saveError && <div ref={saveErrorRef} className={styles.saveError} role="alert" tabIndex={-1}>
        <p className={styles.error}>{saveError}</p>
        <button className={styles.recoveryButton} type="button" onClick={() => openWhatsApp(unsavedUrlRef.current)}>
          {copy.withoutSaving}
        </button>
      </div>}
      <noscript><p>{copy.noJsBefore} <a href={`tel:${firm.telephone}`} dir="ltr">{firm.displayTelephone}</a> {copy.noJsAfter}</p></noscript>
      <span className={styles.srOnly} role="status" aria-live="polite">
        {Object.keys(errors).length ? copy.errorStatus : opening ? copy.opening : saved ? copy.savedStatus : ""}
      </span>
    </form>
  );
}
