import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cabinet Errouissi",
    short_name: "Errouissi",
    description: "Cabinet de Maître Abderrazak Errouissi, avocat à Mohammedia depuis 1992.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#0B132B",
    theme_color: "#0B132B",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
