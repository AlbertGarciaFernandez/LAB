import type { Metadata } from "next";
import ITSystemIntegrationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/it-system-integration";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "IT System Integration Netherlands — CodeHunter Lab",
    description:
      "Expert IT integration consultant in the Netherlands. We connect APIs, CRMs, ERPs, and build internal tools to streamline operations in Leiden, Amsterdam and Rotterdam.",
    keywords: [
      "IT consultant Netherlands",
      "software integration company",
      "API integration services",
      "CRM integration",
      "ERP consulting",
      "n8n automation netherlands",
      "system architect nl",
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
      title: "IT System Integration Netherlands — CodeHunter Lab",
      description:
        "Expert IT integration consultant in the Netherlands. We connect APIs, CRMs, ERPs, and build internal tools to streamline operations in Leiden, Amsterdam and Rotterdam.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <ITSystemIntegrationContent />;
}
