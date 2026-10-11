import { firm } from "./site";

export interface GoogleReview {
  id: string;
  author: string;
  profileUrl: string;
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
    id: "review-ahmed-mellouki",
    author: "Ahmed Mellouki",
    profileUrl: "https://www.google.com/maps/contrib/105399268996718075958/reviews?hl=fr",
    rating: 5,
    date: {
      fr: "21 déc. 2024",
      ar: "21 دجنبر 2024",
    },
    highlight: {
      fr: "Un avocat très compétent et profondément humain",
      ar: "محامي مقتدر وإنسان من أطيب خلق الله",
    },
    text: {
      fr: "الاستاد الرويسي انسان من اطيب خلق الله محامي مقتدر الله يزيد في توفيقه",
      ar: "الاستاد الرويسي انسان من اطيب خلق الله محامي مقتدر الله يزيد في توفيقه",
    },
  },
  {
    id: "review-la-be",
    author: "LA BE",
    profileUrl: "https://www.google.com/maps/contrib/111259629989982742068/reviews?hl=fr",
    rating: 5,
    date: {
      fr: "12 déc. 2024",
      ar: "12 دجنبر 2024",
    },
    highlight: {
      fr: "Un avocat exceptionnel, humble et profondément humain",
      ar: "محامٍ استثنائي، متواضع وإنساني إلى أبعد الحدود",
    },
    text: {
      fr: "Un avocat exceptionnel, humble et profondément humain. Il sait écouter avec bienveillance et possède des qualités rares qui font toute la différence. Merci pour votre dévouement et votre empathie.",
      ar: "محامٍ استثنائي، متواضع وإنساني إلى أبعد الحدود. يحسن الإنصات بعناية ويمتلك خصالاً نادرة تصنع كل الفارق. شكراً على تفانيكم وتعاطفكم الصادق.",
    },
  },
  {
    id: "review-ismail-farhate",
    author: "ismail farhate",
    profileUrl: "https://www.google.com/maps/contrib/106405655639763183046/reviews?hl=fr",
    rating: 5,
    date: {
      fr: "27 juil. 2025",
      ar: "27 يوليوز 2025",
    },
    highlight: {
      fr: "Bureau plus que professionnel · Service top du top",
      ar: "مكتب أكثر من احترافي · خدمات ممتازة 100%",
    },
    text: {
      fr: "Bureau plus que professionnel. Service top du top je recommande a 100%",
      ar: "Bureau plus que professionnel. Service top du top je recommande a 100%",
    },
  },
  {
    id: "review-noamane-zenaty",
    author: "noamane zenaty",
    profileUrl: "https://www.google.com/maps/contrib/110920440299495525631/reviews?hl=fr",
    rating: 5,
    date: {
      fr: "9 mai 2024",
      ar: "9 ماي 2024",
    },
    highlight: {
      fr: "Avocat professionnel, rien à dire",
      ar: "محامٍ محترف ومقتدر لا غبار عليه",
    },
    text: {
      fr: "Avocat professionnel rien à dire",
      ar: "محامٍ محترف، كفاءة عالية ومهنية لا غبار عليها.",
    },
  },
];
