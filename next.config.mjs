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
      source: "/dental-clinic-automation-netherlands",
      destination: "/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/physiotherapy-clinic-automation-netherlands",
      destination: "/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/veterinary-clinic-automation-netherlands",
      destination: "/healthcare-automation-netherlands",
      permanent: true,
    },
    {
      source: "/accounting-firm-automation-netherlands",
      destination: "/professional-services-automation-netherlands",
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
