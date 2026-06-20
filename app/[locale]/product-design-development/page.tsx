import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata, localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
import ProductDesignDevelopmentContent from "./PageContent";

const path = "/product-design-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Product Design Development | Brand-Led Digital Products",
      es: "Diseño y desarrollo de producto digital | CodeHunter Lab",
      nl: "Product design development | Merkgedreven digitale producten",
    }),
    description: getLocaleValue(params.locale, {
      en: "Brand-led product design and development for digital products, portals, and interfaces that need identity, clarity, and production-grade execution.",
      es: "Diseño y desarrollo de producto digital con identidad para interfaces, portales y productos que necesitan claridad y ejecución en producción.",
      nl: "Merkgedreven product design en development voor digitale producten, portals en interfaces die identiteit, helderheid en productie-executie nodig hebben.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: ["product design development", "digital product studio", "brand-led product design"],
      es: ["diseño producto digital", "desarrollo producto digital", "estudio producto digital"],
      nl: ["product design development", "digitaal product ontwerp", "product studio nederland"],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  const name = getLocaleValue(params.locale, {
    en: "Product Design Development",
    es: "Diseño y desarrollo de producto digital",
    nl: "Product design development",
  });

  return (
    <>
      <ServiceSchema
        name={name}
        description={getLocaleValue(params.locale, {
          en: "Brand-led product design and production frontend delivery for digital products and interfaces.",
          es: "Diseño de producto con identidad y entrega frontend para productos e interfaces digitales.",
          nl: "Merkgedreven productontwerp en frontend delivery voor digitale producten en interfaces.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={name}
      />
      <ProductDesignDevelopmentContent locale={params.locale} />
    </>
  );
}
