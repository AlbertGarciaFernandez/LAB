import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata, localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
import TrainingEnablementContent from "./PageContent";

const path = "/training-enablement";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Training & Enablement | AI, Automation and Product Teams",
      es: "Formación y adopción | IA, automatización y equipos de producto",
      nl: "Training & enablement | AI, automatisering en productteams",
    }),
    description: getLocaleValue(params.locale, {
      en: "Practical team training and enablement for AI systems, automation workflows, internal tools, and product delivery standards.",
      es: "Formación práctica para equipos que adoptan sistemas IA, automatizaciones, herramientas internas y estándares de producto.",
      nl: "Praktische teamtraining voor AI-systemen, automatiseringen, interne tools en product delivery-standaarden.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: ["AI training", "automation enablement", "team workshops", "product team training"],
      es: ["formación IA", "adopción automatización", "workshops equipo"],
      nl: ["AI training", "automation enablement", "team workshops"],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  const name = getLocaleValue(params.locale, {
    en: "Training & Enablement",
    es: "Formación y adopción",
    nl: "Training & enablement",
  });

  return (
    <>
      <ServiceSchema
        name={name}
        description={getLocaleValue(params.locale, {
          en: "Team training for adopting AI systems, automations, internal tools, and delivery standards.",
          es: "Formación para adoptar sistemas IA, automatizaciones, herramientas internas y estándares de entrega.",
          nl: "Teamtraining voor adoptie van AI-systemen, automatiseringen, interne tools en deliverystandaarden.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={name}
      />
      <TrainingEnablementContent locale={params.locale} />
    </>
  );
}
