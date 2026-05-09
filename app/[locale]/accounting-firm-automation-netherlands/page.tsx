import type { Metadata } from "next";
import AccountingFirmAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/accounting-firm-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Accounting Firm Automation Netherlands — CodeHunter Lab",
    description:
      "Automate invoice processing, client communication, and financial reporting. Custom automation systems for accounting firms in the Netherlands. Based in Leiden.",
    keywords: [
      "accounting firm automation Netherlands",
      "accountantskantoor automatisering",
      "invoice automation Netherlands",
      "accounting CRM integration Netherlands",
      "financial reporting automation",
      "client onboarding automation accounting",
      "Exact Online integration",
      "Twinfield automation Netherlands",
      "accountancy workflow automation",
      "boekhouding automatisering Nederland",
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
      title: "Accounting Firm Automation Netherlands — CodeHunter Lab",
      description:
        "Custom automation systems for accounting firms in the Netherlands — invoice processing, client communication, and financial reporting on autopilot.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <AccountingFirmAutomationContent />;
}
