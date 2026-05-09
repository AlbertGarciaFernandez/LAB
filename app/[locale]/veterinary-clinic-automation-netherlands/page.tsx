import type { Metadata } from "next";
import VeterinaryClinicAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/veterinary-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Veterinary Clinic Automation Netherlands — CodeHunter Lab",
    description:
      "Reduce no-shows, automate pet owner communication, and connect your practice software. Custom automation systems for veterinary clinics in the Netherlands. Based in Leiden.",
    keywords: [
      "veterinary clinic automation Netherlands",
      "dierenkliniek automatisering",
      "vet appointment reminder system",
      "veterinary CRM integration Netherlands",
      "no-show reduction veterinary practice",
      "pet owner recall system Netherlands",
      "WhatsApp veterinary communication",
      "veterinary practice management software integration",
      "dierenarts automatisering",
      "veterinary lead automation Netherlands",
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
      title: "Veterinary Clinic Automation Netherlands — CodeHunter Lab",
      description:
        "Custom automation systems for veterinary clinics in the Netherlands — reducing no-shows, automating pet owner communication, and connecting your practice software.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <VeterinaryClinicAutomationContent />;
}
