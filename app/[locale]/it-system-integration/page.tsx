import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
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
    title: getLocaleValue(params.locale, {
      en: "IT System Integration Netherlands | CodeHunter Lab",
      es: "Integración de sistemas IT en Países Bajos | CodeHunter Lab",
      nl: "IT-systeemintegratie Nederland | CodeHunter Lab",
    }),
    description: getLocaleValue(params.locale, {
      en: "IT integration consulting in the Netherlands. We connect APIs, CRMs, ERPs, and internal tools to streamline operations in Leiden, Amsterdam, and Rotterdam.",
      es: "Consultoría de integración IT en Países Bajos. Conectamos APIs, CRMs, ERPs y herramientas internas para simplificar operaciones en Leiden, Ámsterdam y Róterdam.",
      nl: "IT-integratieconsultancy in Nederland. We verbinden API's, CRM's, ERP's en interne tools om processen in Leiden, Amsterdam en Rotterdam te stroomlijnen.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "IT consultant Netherlands",
        "software integration company",
        "API integration services",
        "CRM integration",
        "ERP consulting",
        "n8n automation netherlands",
      ],
      es: [
        "consultoría integración IT",
        "empresa integración software",
        "integración API",
        "integración CRM",
        "consultoría ERP",
        "automatización n8n países bajos",
      ],
      nl: [
        "IT consultant Nederland",
        "software integratie bedrijf",
        "API integratie services",
        "CRM integratie",
        "ERP consultancy",
        "n8n automatisering nederland",
      ],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name={getLocaleValue(params.locale, {
          en: "IT System Integration Netherlands",
          es: "Integración de sistemas IT en Países Bajos",
          nl: "IT-systeemintegratie Nederland",
        })}
        description={getLocaleValue(params.locale, {
          en: "API, CRM, ERP, and internal platform integration for operations teams that need reliable data flow and automation.",
          es: "Integración de APIs, CRM, ERP y plataformas internas para equipos de operaciones que necesitan flujos de datos fiables y automatización.",
          nl: "Integratie van API's, CRM, ERP en interne platforms voor operations-teams die betrouwbare datastromen en automatisering nodig hebben.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "IT System Integration",
          es: "Integración de sistemas IT",
          nl: "IT-systeemintegratie",
        })}
      />
      <ITSystemIntegrationContent />
    </>
  );
}
