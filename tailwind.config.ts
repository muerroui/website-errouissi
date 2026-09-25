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
        navy: "#0A1128",
        midnight: "#111C36",
        gold: "#C5A059",
        brass: "#D6B66A",
        parchment: "#F8FAFC",
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
