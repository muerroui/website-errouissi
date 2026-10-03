export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://errouissi.ma"
).replace(/\/$/, "");

export const firm = {
  name: "Maître Abderrazak Errouissi – Avocat Mohammedia",
  shortName: "Cabinet Errouissi",
  telephone: "+212523283258",
  displayTelephone: "05 23 28 32 58",
  whatsappNumber: "+212668075213",
  whatsappUrl: "https://wa.me/212668075213",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/abderrazak-errouissi-407a53348",
    facebook: "https://web.facebook.com/profile.php?id=61559589686731",
  },
  address: {
    street: "127 Boulevard de Palestine, 1er étage (au-dessus du café Montreal)",
    city: "Mohammédia",
    postalCode: "28830",
    country: "MA",
  },
  founded: "1992-01",
} as const;
