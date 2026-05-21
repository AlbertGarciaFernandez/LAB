import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import SoftwareDevelopmentLeidenContent from "./PageContent";

const path = "/software-development-leiden";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "Software Development Company Leiden | Hybrid AI & Web Apps",
    description:
      "Your local software development partner in Leiden. We build custom web apps, scalable e-commerce solutions, and provide expert IT consulting in Zuid-Holland.",
    keywords: [
      "software company Leiden",
      "IT consultant Leiden",
      "web development Leiden",
      "software developer Netherlands",
      "AI integration Leiden",
      "maatwerk software leiden",
      "app ontwikkelaar leiden",
    ],
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name="Software Development Company Leiden"
        description="Custom web applications and internal software engineering for companies in Leiden and across the Netherlands."
        url={localizedUrl(params.locale, path)}
        serviceType="Software Development"
      />
      <SoftwareDevelopmentLeidenContent />
    </>
  );
}
