import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import AccountingFirmAutomationContent from "./PageContent";

const path = "/accounting-firm-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
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
  });
}

export default function Page() {
  return <AccountingFirmAutomationContent />;
}
