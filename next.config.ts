import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
