import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata, localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
import TechnicalLeadershipContent from "./PageContent";

const path = "/technical-leadership";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Technical Leadership | Fractional CTO and Architecture Direction",
      es: "Liderazgo técnico | CTO fraccional y dirección de arquitectura",
      nl: "Technisch leiderschap | Fractional CTO en architectuurrichting",
    }),
    description: getLocaleValue(params.locale, {
      en: "Fractional technical leadership for architecture decisions, product engineering direction, vendor review, and delivery planning.",
      es: "Liderazgo técnico fraccional para decisiones de arquitectura, dirección de producto, revisión de proveedores y planificación de entrega.",
      nl: "Fractioneel technisch leiderschap voor architectuurbeslissingen, product engineering, vendor review en deliveryplanning.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "technical leadership",
        "fractional CTO",
        "architecture review",
        "product engineering lead",
      ],
      es: ["liderazgo técnico", "CTO fraccional", "revisión arquitectura"],
      nl: ["technisch leiderschap", "fractional CTO", "architectuur review"],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  const name = getLocaleValue(params.locale, {
    en: "Technical Leadership",
    es: "Liderazgo técnico",
    nl: "Technisch leiderschap",
  });

  return (
    <>
      <ServiceSchema
        name={name}
        description={getLocaleValue(params.locale, {
          en: "Fractional technical leadership for architecture, product engineering, and delivery decisions.",
          es: "Liderazgo técnico fraccional para arquitectura, producto y decisiones de entrega.",
          nl: "Fractioneel technisch leiderschap voor architectuur, product engineering en deliverybeslissingen.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={name}
      />
      <TechnicalLeadershipContent locale={params.locale} />
    </>
  );
}
