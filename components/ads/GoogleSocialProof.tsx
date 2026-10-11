import type { Locale } from "@/lib/i18n";
import { ArrowUpLeft, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { featuredGoogleReviews, googleReviewsStats } from "@/lib/google-reviews";
import styles from "./GoogleSocialProof.module.css";

export function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={styles.googleIcon}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function FiveStars({ size = 16 }: { size?: number }) {
  return (
    <div className={styles.starRow} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={size} fill="currentColor" strokeWidth={0} className={styles.starIcon} />
      ))}
    </div>
  );
}

export function GoogleHeroBadge({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  return (
    <a
      href={googleReviewsStats.googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.heroBadge}
      aria-label={
        isAr
          ? `تقييم ممتاز 5 من 5 على Google مستند إلى ${googleReviewsStats.reviewCount} تقييماً حقيقياً`
          : `Note 5,0 sur 5 sur Google basée sur ${googleReviewsStats.reviewCount} avis clients`
      }
    >
      <GoogleLogo size={20} />
      <div className={styles.heroBadgeRating}>
        <FiveStars size={14} />
        <span className={styles.heroBadgeScore}>{googleReviewsStats.score}/5</span>
      </div>
      <span className={styles.heroBadgeDivider} aria-hidden="true">·</span>
      <span className={styles.heroBadgeReviews}>
        {isAr ? `${googleReviewsStats.reviewCount} تقييماً على Google` : `${googleReviewsStats.reviewCount} avis Google`}
      </span>
      {isAr ? (
        <ArrowUpLeft size={14} className={styles.heroBadgeArrow} aria-hidden="true" />
      ) : (
        <ArrowUpRight size={14} className={styles.heroBadgeArrow} aria-hidden="true" />
      )}
    </a>
  );
}

export function GoogleReviewsSection({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";

  return (
    <section className={styles.reviewsSection} aria-labelledby="google-reviews-heading">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.pillBadge}>
              <CheckCircle2 size={15} aria-hidden="true" />
              <span>{isAr ? "تقييم 5,0 / 5 على Google Maps" : "Note 5,0 / 5 sur Google Maps"}</span>
            </div>
            <h2 id="google-reviews-heading" className={styles.sectionTitle}>
              {isAr ? (
                <>
                  ما يقوله الموكلون <br />
                  <span>تقييم 5,0 / 5 على Google Maps</span>
                </>
              ) : (
                <>
                  Ce que disent nos clients <br />
                  <span>Note 5,0 / 5 sur Google Maps</span>
                </>
              )}
            </h2>
            <p className={styles.sectionDescription}>
              {isAr
                ? "شهادات وتجارب حقيقية لمواطنين وأصحاب قضايا استفادوا من استشارات ومواكبة مكتب الأستاذ عبد الرزاق الرويسي."
                : "Retours d’expérience authentiques de clients ayant sollicité le cabinet de Maître Abderrazak Errouissi pour leurs dossiers juridiques et immobiliers."}
            </p>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryTop}>
              <GoogleLogo size={28} />
              <div>
                <p className={styles.summaryBrand}>Google Business Profile</p>
                <p className={styles.summarySub}>
                  {isAr ? "مكتب معتمد بهيئة الدار البيضاء" : "Cabinet d’avocat · Mohammedia"}
                </p>
              </div>
            </div>

            <div className={styles.summaryScoreRow}>
              <span className={styles.bigScore}>{googleReviewsStats.score}</span>
              <div className={styles.scoreMeta}>
                <FiveStars size={18} />
                <p className={styles.reviewsTotal}>
                  {isAr
                    ? `تقييم 5,0 من 5 · ${googleReviewsStats.reviewCount} تقييماً حقيقياً على Google Maps`
                    : `Note 5,0/5 sur Google · ${googleReviewsStats.reviewCount} avis vérifiés sur Google Maps`}
                </p>
              </div>
            </div>

            <a
              href={googleReviewsStats.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAllButton}
            >
              <span>{isAr ? "الاطلاع على كافة التقييمات على Google Maps" : "Consulter la fiche Google Maps"}</span>
              {isAr ? (
                <ArrowUpLeft size={16} aria-hidden="true" />
              ) : (
                <ArrowUpRight size={16} aria-hidden="true" />
              )}
            </a>
          </div>
        </div>

        <div className={styles.reviewsGrid}>
          {featuredGoogleReviews.map((review) => (
            <article key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewCardHeader}>
                <div className={styles.authorGroup}>
                  <div className={styles.avatar} aria-hidden="true">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className={styles.authorName}>
                      <a
                        href={review.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.authorLink}
                        title={isAr ? "عرض ملف صاحب التقييم على Google" : "Voir le profil de l'auteur sur Google"}
                      >
                        {review.author}
                      </a>
                    </h3>
                    <p className={styles.reviewDate}>
                      {review.date[locale]} · <span className={styles.verifiedBadge}>{isAr ? "موثق" : "Vérifié"}</span>
                    </p>
                  </div>
                </div>
                <a
                  href={review.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isAr ? "عرض التقييم الأصلي على Google Maps" : "Voir l'avis original sur Google Maps"}
                >
                  <GoogleLogo size={18} />
                </a>
              </div>

              <div className={styles.cardStars}>
                <FiveStars size={15} />
              </div>

              <p className={styles.reviewHighlight}>
                « {review.highlight[locale]} »
              </p>

              <blockquote className={styles.reviewText}>
                &ldquo;{review.text[locale]}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <div className={styles.guaranteeFooter}>
          <p>
            {isAr ? (
              <>
                مصدر التقييمات: حساب Google Business التابع للمكتب. نلتزم دائماً بالحفاظ على سرية ملفات الموكلين طبقاً لأحكام القانون رقم 28.08 المنظم لمهنة المحاماة.
              </>
            ) : (
              <>
                Source : Fiche Google Business officielle de Maître Abderrazak Errouissi. Le cabinet respecte scrupuleusement la confidentialité des dossiers et les règles déontologiques de la profession d’avocat.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
