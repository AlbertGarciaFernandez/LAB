import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "@phosphor-icons/react"],
  },
  redirects: async () => [
    {
      source: "/ai-automation-consulting-netherlands",
      destination: "/ai-consulting",
      permanent: true,
    },
    {
      source: "/:locale(en|es|nl)/ai-automation-consulting-netherlands",
      destination: "/:locale/ai-consulting",
      permanent: true,
    },
    {
      source: "/dental-clinic-automation-netherlands",
      destination: "/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/:locale(en|es|nl)/dental-clinic-automation-netherlands",
      destination: "/:locale/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/physiotherapy-clinic-automation-netherlands",
      destination: "/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/:locale(en|es|nl)/physiotherapy-clinic-automation-netherlands",
      destination: "/:locale/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/veterinary-clinic-automation-netherlands",
      destination: "/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/:locale(en|es|nl)/veterinary-clinic-automation-netherlands",
      destination: "/:locale/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/accounting-firm-automation-netherlands",
      destination: "/professional-services-automation-netherlands",
      permanent: true,
    },
    {
      source: "/:locale(en|es|nl)/accounting-firm-automation-netherlands",
      destination: "/:locale/professional-services-automation-netherlands",
      permanent: true,
    },
  ],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
