import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import RealEstateAutomationContent from "./PageContent";

const path = "/real-estate-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
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
  });
}

export default function Page() {
  return <RealEstateAutomationContent />;
}
