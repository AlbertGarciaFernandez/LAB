import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import ITSystemIntegrationContent from "./PageContent";

const path = "/it-system-integration";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
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
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name="IT System Integration Netherlands"
        description="API, CRM, ERP, and internal platform integration for operations teams that need reliable data flow and automation."
        url={localizedUrl(params.locale, path)}
        serviceType="IT System Integration"
      />
      <ITSystemIntegrationContent />
    </>
  );
}
