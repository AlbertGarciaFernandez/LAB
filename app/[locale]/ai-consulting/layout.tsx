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
    title: "AI Consulting Netherlands | Strategy & Implementation | CodeHunter Lab",
    description:
      "Strategic AI consulting for Dutch businesses. We design and deploy autonomous AI systems that reduce overhead and drive measurable ROI. Based in Leiden.",
    keywords: [
      "AI consulting Netherlands",
      "AI strategy consultant",
      "AI implementation Leiden",
      "autonomous AI systems",
      "AI ROI consulting",
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
      title: "AI Consulting Netherlands | Strategy & Implementation | CodeHunter Lab",
      description:
        "Strategic AI consulting for Dutch businesses. We design and deploy autonomous AI systems that reduce overhead and drive measurable ROI.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function AIConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
