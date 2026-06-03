import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
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
    title: getLocaleValue(params.locale, {
      en: "Software Development Company Leiden | Hybrid AI & Web Apps",
      es: "Empresa de desarrollo de software en Leiden | Apps web e IA",
      nl: "Softwarebedrijf Leiden | Hybride AI en webapps",
    }),
    description: getLocaleValue(params.locale, {
      en: "Your local software development partner in Leiden. We build custom web apps, scalable e-commerce solutions, and provide expert IT consulting in Zuid-Holland.",
      es: "Tu partner local de desarrollo de software en Leiden. Creamos aplicaciones web a medida, soluciones e-commerce escalables y consultoría IT experta en Holanda Meridional.",
      nl: "Je lokale softwarepartner in Leiden. We bouwen maatwerk webapps, schaalbare e-commerce-oplossingen en bieden deskundige IT-consultancy in Zuid-Holland.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "software company Leiden",
        "IT consultant Leiden",
        "web development Leiden",
        "software developer Netherlands",
        "AI integration Leiden",
      ],
      es: [
        "empresa software Leiden",
        "consultoría IT Leiden",
        "desarrollo web Leiden",
        "desarrollo software Países Bajos",
        "integración IA Leiden",
      ],
      nl: [
        "softwarebedrijf Leiden",
        "IT consultant Leiden",
        "webontwikkeling Leiden",
        "software developer Nederland",
        "AI integratie Leiden",
      ],
    }),
  });
}

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <>
      <ServiceSchema
        name={getLocaleValue(params.locale, {
          en: "Software Development Company Leiden",
          es: "Empresa de desarrollo de software en Leiden",
          nl: "Softwarebedrijf Leiden",
        })}
        description={getLocaleValue(params.locale, {
          en: "Custom web applications and internal software engineering for companies in Leiden and across the Netherlands.",
          es: "Aplicaciones web a medida e ingeniería de software interno para empresas de Leiden y del resto de los Países Bajos.",
          nl: "Maatwerk webapplicaties en interne software engineering voor bedrijven in Leiden en de rest van Nederland.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "Software Development",
          es: "Desarrollo de software",
          nl: "Softwareontwikkeling",
        })}
      />
      <SoftwareDevelopmentLeidenContent />
    </>
  );
}
