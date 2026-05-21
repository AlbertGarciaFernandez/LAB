import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import NextJsDevelopmentAgencyContent from "./PageContent";

const path = "/nextjs-development-agency";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "Next.js Agency Europe | App Router, Migration & Performance",
    description:
      "Hire a Next.js agency in Europe for App Router, React Server Components, migrations, and performance work on production web apps.",
    keywords: [
      "Next.js development agency",
      "hire Next.js developer Netherlands",
      "Next.js consulting Netherlands",
      "React Next.js agency Leiden",
      "Next.js App Router specialist",
      "server components consulting",
      "Next.js migration service",
      "TypeScript agency Netherlands",
    ],
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name="Next.js Development Agency"
        description="Next.js development services for App Router architecture, migrations, React Server Components, TypeScript, and performance work."
        url={localizedUrl(params.locale, path)}
        serviceType="Next.js Web Development"
      />
      <NextJsDevelopmentAgencyContent />
    </>
  );
}
