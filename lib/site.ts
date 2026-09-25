export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.ma"
).replace(/\/$/, "");

export const firm = {
  name: "Maître Abderrazak Errouissi – Avocat Mohammedia",
  shortName: "Cabinet Errouissi",
  telephone: "+212523283258",
  displayTelephone: "05 23 28 32 58",
  whatsappNumber: "+212661966642",
  whatsappUrl: "https://wa.me/212661966642",
  address: {
    street: "127 Boulevard de Palestine, 1er étage (au-dessus du café Montreal)",
    city: "Mohammédia",
    postalCode: "28830",
    country: "MA",
  },
  founded: "1992-01",
} as const;
