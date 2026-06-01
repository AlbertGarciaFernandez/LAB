import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { getLocaleValue, splitKeywords, stripHtml } from "../_shared/localeCopy";
import ProfessionalServicesAutomationContent from "./PageContent";

const path = "/professional-services-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ProfessionalServices" });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Professional Services Automation Netherlands | CodeHunter Lab",
      es: "Automatización para Servicios Profesionales en Países Bajos | CodeHunter Lab",
      nl: "Automatisering voor Professionele Diensten in Nederland | CodeHunter Lab",
    }),
    description: stripHtml(t.raw("Hero.description") as string),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default function Page() {
  return <ProfessionalServicesAutomationContent />;
}
