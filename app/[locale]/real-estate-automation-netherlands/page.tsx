import type { Metadata } from "next";
import RealEstateAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/real-estate-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Real Estate Automation Netherlands — CodeHunter Lab",
    description:
      "Automate lead follow-up, property listings, and client communication. Custom automation systems for real estate agencies in the Netherlands. Based in Leiden.",
    keywords: [
      "real estate automation Netherlands",
      "makelaar automatisering Nederland",
      "real estate CRM integration Netherlands",
      "property lead automation Netherlands",
      "real estate follow-up automation",
      "Funda integration automation",
      "real estate WhatsApp automation",
      "makelaar CRM systeem",
      "real estate agency Netherlands automation",
      "property viewing automation Netherlands",
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
      title: "Real Estate Automation Netherlands — CodeHunter Lab",
      description:
        "Custom automation systems for real estate agencies in the Netherlands — lead follow-up, property listings, and client communication on autopilot.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <RealEstateAutomationContent />;
}
