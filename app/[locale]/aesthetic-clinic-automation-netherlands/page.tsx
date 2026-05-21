import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import AestheticClinicAutomationContent from "./PageContent";

const path = "/aesthetic-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "Aesthetic Clinic Automation Netherlands — CodeHunter Lab",
    description:
      "Convert more aesthetic clinic inquiries into booked treatments. Custom CRM, lead nurturing, and booking automation for cosmetic and dermatology clinics in the Netherlands.",
    keywords: [
      "aesthetic clinic automation Netherlands",
      "cosmetic clinic CRM Netherlands",
      "lead nurturing aesthetic clinic",
      "dermatology clinic booking automation",
      "cosmetic clinic marketing ROI",
      "beauty clinic WhatsApp automation",
      "patient retention aesthetic clinic",
      "kliniek automatisering Nederland",
      "aesthetic clinic lead response system",
      "cosmetic clinic funnel automation Netherlands",
    ],
  });
}

export default function Page() {
  return <AestheticClinicAutomationContent />;
}
