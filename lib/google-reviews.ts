import { firm } from "./site";

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: {
    fr: string;
    ar: string;
  };
  text: {
    fr: string;
    ar: string;
  };
  highlight: {
    fr: string;
    ar: string;
  };
}

export const googleReviewsStats = {
  score: "5,0",
  scoreNumeric: 5.0,
  maxScore: 5,
  reviewCount: 24,
  positivePercentage: "100%",
  googleUrl: firm.googleReviewsUrl,
} as const;

export const featuredGoogleReviews: GoogleReview[] = [
  {
    id: "review-1",
    author: "LABZAE AMINE",
    rating: 5,
    date: {
      fr: "Il y a 10 mois",
      ar: "منذ 10 أشهر",
    },
    highlight: {
      fr: "Compétence et écoute remarquable",
      ar: "كفاءة عالية وإنصات متميز",
    },
    text: {
      fr: "Un avocat excellent ! Me a été d’une grande compétence et d’une écoute remarquable. Il a su analyser ma situation dans des délais très brefs et m’a accompagné à chaque étape, tout en professionnalisme. Service sérieux, fiable, suivi humain. À recommander sans hésitation.",
      ar: "محامٍ ممتاز بحق! يتميز الأستاذ بكفاءة عالية وإنصات متميز. قام بتشخيص وضعيتي القانونية في آجال وجيزة وواكبني في كافة مراحل المسطرة بكل احترافية ومصداقية. خدمة جادة ومتابعة إنسانية. أوصي به بدون تردد.",
    },
  },
  {
    id: "review-2",
    author: "Mohamed Hamimi",
    rating: 5,
    date: {
      fr: "Il y a 10 mois",
      ar: "منذ 10 أشهر",
    },
    highlight: {
      fr: "Accompagnement impeccable du début à la fin",
      ar: "مواكبة مثالية تشرح كل التفاصيل",
    },
    text: {
      fr: "Très satisfait du service de Maître. Son accompagnement a été impeccable du début à la fin. Il explique chaque détail avec patience et rassure vraiment. Un avocat compétent, honnête et efficace. Je recommande fortement pour toute démarche juridique.",
      ar: "راضٍ تماماً عن خدمات الأستاذ. مواكبته كانت مثالية من البداية إلى النهاية؛ يشرح كل التفاصيل بصبر واطمئنان. محامٍ مقتدر ونزيه وفعال، أنصح بالتعامل معه بشدة لأي إجراء قانوني.",
    },
  },
  {
    id: "review-3",
    author: "Saad Chmarekh",
    rating: 5,
    date: {
      fr: "Il y a 9 mois",
      ar: "منذ 9 أشهر",
    },
    highlight: {
      fr: "Professionnalisme et rigueur",
      ar: "مهنية عالية ونتائج ملموسة",
    },
    text: {
      fr: "Je confirme que Maître Errouissi Abderrazak est un avocat compétent et humain. Je suis très satisfait de son accompagnement et des résultats obtenus. Je ferai de nouveau appel à ses services sans hésiter. Son professionnalisme et sa rigueur font la différence.",
      ar: "أشهد أن الأستاذ عبد الرزاق الرويسي محامٍ ذو كفاءة عالية وحس إنساني رفيع. راضٍ جداً عن مواكبته والنتائج المحققة، وسألجأ إلى خدماته مجدداً دون تردد. مهنيته وصرامته تصنعان الفارق.",
    },
  },
];
