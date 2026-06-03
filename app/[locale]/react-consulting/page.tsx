import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
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
    title: getLocaleValue(params.locale, {
      en: "React Consulting Services Netherlands | Audit & Architecture",
      es: "Consultoría React en Países Bajos | Auditoría y arquitectura",
      nl: "React-consultancy Nederland | Audit en architectuur",
    }),
    description: getLocaleValue(params.locale, {
      en: "Senior React consulting in the Netherlands for codebase audits, frontend architecture, performance fixes, migrations, and team support.",
      es: "Consultoría React senior en Países Bajos para auditorías de código, arquitectura frontend, mejoras de rendimiento, migraciones y soporte al equipo.",
      nl: "Senior React-consultancy in Nederland voor codebase-audits, frontendarchitectuur, performanceverbeteringen, migraties en teamondersteuning.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "React consulting Netherlands",
        "React architecture consultant",
        "hire React developer Netherlands",
        "React codebase audit",
        "React refactoring services",
        "senior React developer Leiden",
        "React performance consulting",
        "frontend architecture Netherlands",
      ],
      es: [
        "consultoría React Países Bajos",
        "arquitectura React",
        "auditoría de código React",
        "refactorización React",
        "rendimiento frontend",
      ],
      nl: [
        "React consultancy Nederland",
        "React architectuur consultant",
        "React codebase audit",
        "React refactoring services",
        "frontend architectuur Nederland",
      ],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  const serviceName = getLocaleValue(params.locale, {
    en: "React Consulting Services Netherlands",
    es: "Consultoría React en Países Bajos",
    nl: "React-consultancy Nederland",
  });

  return (
    <>
      <ServiceSchema
        name={serviceName}
        description={getLocaleValue(params.locale, {
          en: "Senior React consulting for architecture, performance optimization, migrations, and codebase modernization.",
          es: "Consultoría React senior para arquitectura, optimización del rendimiento, migraciones y modernización de código.",
          nl: "Senior React-consultancy voor architectuur, performance-optimalisatie, migraties en modernisering van de codebase.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "React Consulting",
          es: "Consultoría React",
          nl: "React-consultancy",
        })}
      />
      <ReactConsultingContent />
    </>
  );
}
