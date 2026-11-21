import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/fr/guides/terres-collectives-soulaliyates-maroc",
        destination: "/fr/guides/terres-cooperatives-reforme-agraire-maroc",
        permanent: true,
      },
      {
        source: "/ar/guides/أراضي-الجموع-والأراضي-السلالية",
        destination: "/ar/guides/أراضي-تعاونيات-الإصلاح-الزراعي",
        permanent: true,
      },
      {
        source:
          "/ar/guides/%D8%A3%D8%B1%D8%A7%D8%B6%D9%8A-%D8%A7%D9%84%D8%AC%D9%85%D9%88%D8%B9-%D9%88%D8%A7%D9%84%D8%A3%D8%B1%D8%A7%D8%B6%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%84%D9%8A%D8%A9",
        destination: "/ar/guides/أراضي-تعاونيات-الإصلاح-الزراعي",
        permanent: true,
      },
      {
        source: "/ar/services/العقار-الفلاحي-وأراضي-الجموع",
        destination:
          "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي",
        permanent: true,
      },
      {
        source:
          "/ar/services/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1-%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AD%D9%8A-%D9%88%D8%A3%D8%B1%D8%A7%D8%B6%D9%8A-%D8%A7%D9%84%D8%AC%D9%85%D9%88%D8%B9",
        destination:
          "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://scripts.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com; frame-src 'self' https://www.google.com https://maps.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
