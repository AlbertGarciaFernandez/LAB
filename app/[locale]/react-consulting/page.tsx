import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import ReactConsultingContent from "./PageContent";

const path = "/react-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "React Consulting Services Netherlands | Audit & Architecture",
    description:
      "Senior React consulting services in the Netherlands: codebase audits, frontend architecture, performance fixes, migrations, and team support.",
    keywords: [
      "React consulting Netherlands",
      "React architecture consultant",
      "hire React developer Netherlands",
      "React codebase audit",
      "React refactoring services",
      "senior React developer Leiden",
      "React performance consulting",
      "frontend architecture Netherlands",
    ],
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name="React Consulting Services Netherlands"
        description="Senior React consulting for architecture, performance optimization, migrations, and codebase modernization."
        url={localizedUrl(params.locale, path)}
        serviceType="React Consulting"
      />
      <ReactConsultingContent />
    </>
  );
}
