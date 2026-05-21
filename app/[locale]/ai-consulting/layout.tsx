import type { Metadata } from "next";

const baseUrl = "https://www.codehunterlab.com";
const path = "/ai-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
    description:
      "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
    keywords: [
      "AI consulting Netherlands",
      "AI consulting services",
      "AI automation consulting",
      "deploy AI agents",
      "AI workflow automation",
      "custom AI integration",
      "AI consulting Leiden",
      "AI implementation project",
      "AI strategy consulting",
      "production AI systems",
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
      description:
        "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: `${baseUrl}/${locale}${path}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
      description:
        "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
      images: [`${baseUrl}/${locale}${path}/opengraph-image`],
    },
  };
}

export default function AIConsultingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
