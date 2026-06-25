import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../../_shared/localeCopy";
import CustomInternalToolsContent from "./PageContent";

const path = "/services/custom-internal-tools-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Custom ERP/CRM and Internal Tools Development | CodeHunter Lab",
      es: "ERP/CRM a medida y herramientas internas | CodeHunter Lab",
      nl: "Maatwerk ERP/CRM en interne tools | CodeHunter Lab",
    }),
    description: getLocaleValue(params.locale, {
      en: "Custom ERP/CRM platforms, internal tools, admin panels, mobile workflows, and AI-ready operations dashboards for companies replacing manual work and disconnected SaaS.",
      es: "Plataformas ERP/CRM a medida, herramientas internas, paneles, flujos móviles y dashboards preparados para IA para empresas que sustituyen trabajo manual y SaaS desconectado.",
      nl: "Maatwerk ERP/CRM-platforms, interne tools, adminpanelen, mobiele workflows en AI-ready dashboards voor bedrijven die handwerk en losse SaaS vervangen.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "build internal tools for business",
        "custom ERP CRM development",
        "custom admin panel development",
        "workflow automation consulting",
        "replace excel with app",
        "internal software developer netherlands",
      ],
      es: [
        "herramientas internas a medida",
        "desarrollo ERP CRM a medida",
        "desarrollo panel de administración",
        "consultoría automatización de procesos",
        "sustituir excel por aplicación",
        "software interno países bajos",
      ],
      nl: [
        "maatwerk interne tools",
        "maatwerk ERP CRM ontwikkeling",
        "adminpaneel ontwikkeling",
        "workflow automatisering consultancy",
        "excel vervangen door app",
        "interne software nederland",
      ],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  const serviceName = getLocaleValue(params.locale, {
    en: "Custom ERP/CRM and Internal Tools Development",
    es: "ERP/CRM a medida y herramientas internas",
    nl: "Maatwerk ERP/CRM en interne tools",
  });

  const serviceDescription = getLocaleValue(params.locale, {
    en: "Bespoke ERP/CRM platforms, internal tools, mobile workflows, and AI-ready operations systems to replace manual operations and disconnected software.",
    es: "Plataformas ERP/CRM a medida, herramientas internas, flujos móviles y sistemas operativos preparados para IA para sustituir tareas manuales y software desconectado.",
    nl: "Maatwerk ERP/CRM-platforms, interne tools, mobiele workflows en AI-ready operationele systemen om handwerk en losse software te vervangen.",
  });

  return (
    <>
      <ServiceSchema
        name={serviceName}
        description={serviceDescription}
        url={localizedUrl(params.locale, path)}
        serviceType={serviceName}
      />
      <CustomInternalToolsContent />
    </>
  );
}
