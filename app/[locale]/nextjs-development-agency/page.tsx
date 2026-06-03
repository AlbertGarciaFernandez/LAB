import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
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
    title: getLocaleValue(params.locale, {
      en: "Next.js Agency Europe | App Router, Migration & Performance",
      es: "Agencia Next.js en Europa | App Router, migración y rendimiento",
      nl: "Next.js agency Europa | App Router, migratie en performance",
    }),
    description: getLocaleValue(params.locale, {
      en: "Hire a Next.js agency in Europe for App Router, React Server Components, migrations, and performance work on production web apps.",
      es: "Agencia Next.js en Europa para App Router, React Server Components, migraciones y optimización de rendimiento en aplicaciones web en producción.",
      nl: "Next.js agency in Europa voor App Router, React Server Components, migraties en performancewerk op webapps in productie.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "Next.js development agency",
        "hire Next.js developer Netherlands",
        "Next.js consulting Netherlands",
        "React Next.js agency Leiden",
        "Next.js App Router specialist",
        "server components consulting",
        "Next.js migration service",
        "TypeScript agency Netherlands",
      ],
      es: [
        "agencia Next.js",
        "consultoría Next.js Países Bajos",
        "especialista App Router",
        "migración Next.js",
        "agencia TypeScript",
      ],
      nl: [
        "Next.js development agency",
        "Next.js consultancy Nederland",
        "App Router specialist",
        "Next.js migratie",
        "TypeScript agency Nederland",
      ],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name={getLocaleValue(params.locale, {
          en: "Next.js Development Agency",
          es: "Agencia de desarrollo Next.js",
          nl: "Next.js development agency",
        })}
        description={getLocaleValue(params.locale, {
          en: "Next.js development services for App Router architecture, migrations, React Server Components, TypeScript, and performance work.",
          es: "Servicios de desarrollo Next.js para arquitectura App Router, migraciones, React Server Components, TypeScript y optimización de rendimiento.",
          nl: "Next.js development services voor App Router-architectuur, migraties, React Server Components, TypeScript en performance-optimalisatie.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "Next.js Web Development",
          es: "Desarrollo web con Next.js",
          nl: "Next.js webdevelopment",
        })}
      />
      <NextJsDevelopmentAgencyContent />
    </>
  );
}
