import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import VeterinaryClinicAutomationContent from "./PageContent";

const path = "/veterinary-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
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
  });
}

export default function Page() {
  return <VeterinaryClinicAutomationContent />;
}
