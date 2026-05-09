import type { Metadata } from "next";
import PhysiotherapyClinicAutomationContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/physiotherapy-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Physiotherapy Automation Netherlands | Intake & Reminders",
    description:
      "Automate physiotherapy referral intake, appointment reminders, patient drop-out detection, and reporting for practices in the Netherlands.",
    keywords: [
      "physiotherapy clinic automation Netherlands",
      "fysiotherapie praktijk automatisering",
      "Zorgdomein integration automation",
      "physiotherapy appointment reminder system",
      "patient drop-out prevention physiotherapy",
      "fysiotherapie CRM Nederland",
      "physiotherapy referral intake automation",
      "Intramed integration Netherlands",
      "Physiosoftware automation",
      "fysiotherapie software integratie",
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
      title: "Physiotherapy Automation Netherlands | Intake & Reminders",
      description:
        "Automate physiotherapy referral intake, appointment reminders, patient drop-out detection, and reporting for practices in the Netherlands.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <PhysiotherapyClinicAutomationContent />;
}
