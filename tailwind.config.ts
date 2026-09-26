import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        navy: "#0B132B",
        midnight: "#111C36",
        gold: "#C5A059",
        "gold-ink": "#7A5A25",
        brass: "#D6B66A",
        paper: "#F3F0E9",
        "warm-paper": "#E5DED0",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        arabic: ["Noto Naskh Arabic", "Tahoma", "serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.09)",
        luxe: "0 30px 80px rgba(2, 8, 23, 0.22)",
        gold: "0 16px 42px rgba(197, 160, 89, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
