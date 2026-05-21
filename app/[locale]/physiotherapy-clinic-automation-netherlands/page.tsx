import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import PhysiotherapyClinicAutomationContent from "./PageContent";

const path = "/physiotherapy-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
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
  });
}

export default function Page() {
  return <PhysiotherapyClinicAutomationContent />;
}
