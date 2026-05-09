import type { Metadata } from "next";
import N8nMigrationPageContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/expertise/n8n-migration-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "n8n Consulting & Migration Services | Zapier Alternative",
    description:
      "Expert n8n consultants in the Netherlands. We migrate tailored workflows from Zapier and Make to n8n for better performance and lower costs.",
    keywords: [
      "n8n consultant netherlands",
      "migrate from zapier to n8n",
      "workflow automation expert",
      "self-hosted automation",
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
      title: "n8n Consulting & Migration Services | Zapier Alternative",
      description:
        "Expert n8n consultants in the Netherlands. We migrate tailored workflows from Zapier and Make to n8n for better performance and lower costs.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <N8nMigrationPageContent />;
}
