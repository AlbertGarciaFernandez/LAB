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
      en: "Custom Internal Tools Development | CodeHunter Lab",
      es: "Desarrollo de herramientas internas a medida | CodeHunter Lab",
      nl: "Maatwerk interne tools ontwikkelen | CodeHunter Lab",
    }),
    description: getLocaleValue(params.locale, {
      en: "Custom internal tools, admin panels, and operations dashboards for companies that want to replace manual work and per-user SaaS costs.",
      es: "Herramientas internas a medida, paneles de administración y cuadros de mando operativos para empresas que quieren sustituir trabajo manual y licencias SaaS por usuario.",
      nl: "Maatwerk interne tools, adminpanelen en operationele dashboards voor bedrijven die handmatig werk en SaaS-kosten per gebruiker willen vervangen.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "build internal tools for business",
        "custom admin panel development",
        "workflow automation consulting",
        "replace excel with app",
        "internal software developer netherlands",
      ],
      es: [
        "herramientas internas a medida",
        "desarrollo panel de administración",
        "consultoría automatización de procesos",
        "sustituir excel por aplicación",
        "software interno países bajos",
      ],
      nl: [
        "maatwerk interne tools",
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
    en: "Custom Internal Tools Development",
    es: "Desarrollo de herramientas internas a medida",
    nl: "Ontwikkeling van maatwerk interne tools",
  });

  const serviceDescription = getLocaleValue(params.locale, {
    en: "Bespoke internal tools, admin dashboards, and workflow systems to replace manual operations and reduce software overhead.",
    es: "Herramientas internas a medida, paneles de administración y sistemas de trabajo para sustituir tareas manuales y reducir la carga de software.",
    nl: "Maatwerk interne tools, admin-dashboards en workflowsystemen om handmatig werk te vervangen en software-overhead te verlagen.",
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
