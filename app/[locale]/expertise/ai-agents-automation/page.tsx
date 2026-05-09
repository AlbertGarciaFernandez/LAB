import type { Metadata } from "next";
import AIAgentsPageContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/expertise/ai-agents-automation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "AI Agent Development Netherlands | 24/7 Automation",
    description:
      "Deploy custom AI agents for customer support and sales. Top AI agency in the Netherlands for WhatsApp and Voice bots.",
    keywords: [
      "ai agent development",
      "digital workforce",
      "whatsapp automation business",
      "ai customer service nl",
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
      title: "AI Agent Development Netherlands | 24/7 Automation",
      description:
        "Deploy custom AI agents for customer support and sales. Top AI agency in the Netherlands for WhatsApp and Voice bots.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <AIAgentsPageContent />;
}
