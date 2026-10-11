export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://errouissi.ma"
).replace(/\/$/, "");

export const firm = {
  name: "Maître Abderrazak Errouissi – Avocat Mohammedia",
  shortName: "Cabinet Errouissi",
  email: "errouissi.abderazzak@gmail.com",
  telephone: "+212523283258",
  displayTelephone: "05 23 28 32 58",
  whatsappNumber: "+212668075213",
  whatsappUrl: "https://wa.me/212668075213",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/abderrazak-errouissi-407a53348",
    facebook: "https://web.facebook.com/profile.php?id=61559589686731",
  },
  googleReviewsUrl: "https://www.google.com/maps/place/Ma%C3%AEtre+Abderrazak+Errouissi+%E2%80%93+Avocat+Mohammedia/data=!4m2!3m1!1s0x0:0xe5b926ae4d6d05ce?sa=X&ved=1t:2428&ictx=111",
  rating: {
    score: "5,0",
    reviewCount: 24,
  },
  address: {
    street: "127 Boulevard de Palestine, 1er étage (au-dessus du café Montreal)",
    city: "Mohammédia",
    postalCode: "28830",
    country: "MA",
  },
  founded: "1992-01",
} as const;
