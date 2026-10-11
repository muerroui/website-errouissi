"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import {
  contactTopics,
  contactWhatsAppUrl,
  getContactTopics,
  normalizePhone,
  type ContactTopic,
} from "@/lib/contact-form";
import type { Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";
import styles from "./ContactLeadForm.module.css";

type Errors = Partial<Record<"name" | "topic" | "phone", string>>;

const formCopy = {
  ar: {
    heading: "عرض معطيات قضيتكم",
    intro: "يرجى إدخال بياناتكم وموضوع قضيتكم للتواصل المباشر مع المكتب.",
    name: "الاسم الكامل",
    required: "(مطلوب)",
    topic: "موضوع القضية / النزاع",
    choose: "اختاروا موضوع القضية الأقرب لحالتكم",
    phone: "رقم الهاتف",
    optional: "(اختياري)",
    opening: "جارٍ تسجيل طلبكم…",
    submit: "متابعة الطلب",
    privacy: "تُعالج البيانات بسرية مهنية تامة طبقاً لقانون المحاماة.",
    nameError: "يرجى كتابة اسمكم (حرفين على الأقل).",
    topicError: "يرجى اختيار موضوع القضية لتهيئة استشارتكم.",
    phoneError: "يرجى إدخال رقم هاتف صحيح أو ترك الخانة فارغة.",
    saveError: "تعذّر حفظ بياناتكم حالياً. حاولوا مجدداً أو تواصلوا مباشرة عبر واتساب.",
    rateError: "طلبات كثيرة في وقت قصير. انتظروا دقيقة أو تواصلوا مباشرة عبر واتساب.",
    withoutSaving: "التواصل عبر واتساب مباشرة",
    savedStatus: "تم تسجيل طلبكم بنجاح. جارٍ فتح واتساب لإرسال معطيات الملف.",
    noJsBefore: "للتواصل مع المكتب، اتصلوا بـ",
    noJsAfter: "أو استخدموا زر واتساب المباشر.",
    errorStatus: "يرجى تصحيح الخانات المشار إليها قبل المتابعة.",
  },
  fr: {
    heading: "Présenter votre dossier",
    intro: "Renseignez vos coordonnées et le sujet de votre dossier pour échanger avec le cabinet.",
    name: "Votre nom complet",
    required: "(obligatoire)",
    topic: "Sujet ou domaine du dossier",
    choose: "Choisissez le domaine correspondant à votre demande",
    phone: "Numéro de téléphone",
    optional: "(facultatif)",
    opening: "Enregistrement de votre demande…",
    submit: "Poursuivre ma demande",
    privacy: "Données traitées dans le strict respect du secret professionnel d’avocat.",
    nameError: "Indiquez votre nom avec au moins deux caractères.",
    topicError: "Choisissez un domaine pour préparer votre consultation.",
    phoneError: "Saisissez un numéro valide ou laissez ce champ vide.",
    saveError: "Votre demande n’a pas pu être enregistrée. Réessayez ou ouvrez WhatsApp directement.",
    rateError: "Trop de demandes rapprochées. Patientez une minute ou ouvrez WhatsApp directement.",
    withoutSaving: "Ouvrir WhatsApp directement",
    savedStatus: "Demande enregistrée. Ouverture de WhatsApp pour échanger avec le cabinet.",
    noJsBefore: "Pour contacter le cabinet, appelez le",
    noJsAfter: "ou utilisez le bouton WhatsApp direct.",
    errorStatus: "Corrigez les champs indiqués avant de continuer.",
  },
} as const;

export function ContactLeadForm({ locale = "ar" }: { locale?: Locale }) {
  const isAr = locale === "ar";
  const copy = formCopy[locale];
  const topics = getContactTopics(locale);
  const DirectionArrow = isAr ? ArrowLeft : ArrowRight;

  const [topic, setTopic] = useState<ContactTopic | "">("");
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

    function selectTopicFromPage(event: MouseEvent) {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-case-topic]")
        : null;
      const choice = target?.dataset.caseTopic;
      if (!contactTopics.some((entry) => entry.value === choice)) return;

      event.preventDefault();
      setTopic(choice as ContactTopic);
      setSaveError("");
      setSaved(false);
      setErrors((current) => ({ ...current, topic: undefined }));

      document.getElementById("consultation-form")?.scrollIntoView({
        block: "start",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
      nameRef.current?.focus({ preventScroll: true });
    }

    function restore() {
      if (!busyRef.current) setOpening(false);
    }

    document.addEventListener("click", selectTopicFromPage);
    window.addEventListener("pageshow", restore);
    window.addEventListener("focus", restore);

    return () => {
      document.removeEventListener("click", selectTopicFromPage);
      window.removeEventListener("pageshow", restore);
      window.removeEventListener("focus", restore);
    };
  }, []);

  function openWhatsApp(url: string) {
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

    const whatsappUrl = contactWhatsAppUrl(name, topic as ContactTopic, phone, locale);
    unsavedUrlRef.current = whatsappUrl;

    try {
      const signature = JSON.stringify([name, topic, phone, locale]);
      if (submissionRef.current?.signature !== signature) {
        submissionRef.current = { signature, id: crypto.randomUUID() };
      }

      const response = await fetch("/api/contact-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: submissionRef.current.id,
          name,
          phone: phone || null,
          topic,
          locale,
        }),
        signal: AbortSignal.timeout(10_000),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) {
        setSaveError(response.status === 429 ? copy.rateError : copy.saveError);
        return;
      }

      setSaved(true);
      openWhatsApp(whatsappUrl);
    } catch {
      setSaveError(copy.saveError);
    } finally {
      busyRef.current = false;
      setOpening(false);
    }
  }

  return (
    <div id="consultation-form" className={styles.card}>
      <form
        className={styles.form}
        onSubmit={submit}
        onChange={() => {
          setSaveError("");
          setSaved(false);
        }}
        noValidate
        aria-labelledby="contact-form-heading"
        aria-busy={opening}
      >
        <h2 id="contact-form-heading" className={styles.heading}>
          {copy.heading}
        </h2>
        <p className={styles.intro}>{copy.intro}</p>

        <div className={styles.field}>
          <label htmlFor="contact-lead-name">
            {copy.name} <span>{copy.required}</span>
          </label>
          <input
            ref={nameRef}
            id="contact-lead-name"
            name="name"
            autoComplete="name"
            maxLength={80}
            required
            disabled={!ready || opening}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => errors.name && setErrors((current) => ({ ...current, name: undefined }))}
          />
          {errors.name && (
            <p className={styles.error} id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-lead-topic">
            {copy.topic} <span>{copy.required}</span>
          </label>
          <select
            ref={topicRef}
            id="contact-lead-topic"
            name="topic"
            required
            value={topic}
            disabled={!ready || opening}
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? "topic-error" : undefined}
            onChange={(event) => {
              setTopic(event.target.value as ContactTopic | "");
              setErrors((current) => ({ ...current, topic: undefined }));
            }}
          >
            <option value="" disabled>
              {copy.choose}
            </option>
            {topics.map((entry) => (
              <option key={entry.value} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
          {errors.topic && (
            <p className={styles.error} id="topic-error">
              {errors.topic}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-lead-phone">
            {copy.phone} <span>{copy.optional}</span>
          </label>
          <input
            ref={phoneRef}
            id="contact-lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            disabled={!ready || opening}
            dir="ltr"
            maxLength={30}
            placeholder="06 … / +212 …"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={() => errors.phone && setErrors((current) => ({ ...current, phone: undefined }))}
          />
          {errors.phone && (
            <p className={styles.error} id="phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        <button
          className={styles.submitButton}
          type="submit"
          disabled={!ready || opening}
        >
          <span>{opening ? copy.opening : copy.submit}</span>
          <DirectionArrow size={20} aria-hidden="true" />
        </button>

        <p className={styles.privacyBadge}>
          <LockKeyhole size={15} aria-hidden="true" />
          <span>{copy.privacy}</span>
        </p>

        {saveError && (
          <div ref={saveErrorRef} className={styles.saveError} role="alert" tabIndex={-1}>
            <p className={styles.error}>{saveError}</p>
            <button
              className={styles.recoveryButton}
              type="button"
              onClick={() => openWhatsApp(unsavedUrlRef.current)}
            >
              {copy.withoutSaving}
            </button>
          </div>
        )}

        <noscript>
          <p>
            {copy.noJsBefore}{" "}
            <a href={`tel:${firm.telephone}`} dir="ltr">
              {firm.displayTelephone}
            </a>{" "}
            {copy.noJsAfter}
          </p>
        </noscript>

        <span className={styles.srOnly} role="status" aria-live="polite">
          {Object.keys(errors).length ? copy.errorStatus : opening ? copy.opening : saved ? copy.savedStatus : ""}
        </span>
      </form>
    </div>
  );
}
