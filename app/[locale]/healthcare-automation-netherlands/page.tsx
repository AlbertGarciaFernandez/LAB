import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { getLocaleValue, splitKeywords, stripHtml } from "../_shared/localeCopy";
import HealthcareAutomationContent from "./PageContent";

const path = "/healthcare-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Healthcare" });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Healthcare & Medical Automation Netherlands | CodeHunter Lab",
      es: "Automatización para Clínicas Médicas en Países Bajos | CodeHunter Lab",
      nl: "Automatisering voor Gezondheidszorg in Nederland | CodeHunter Lab",
    }),
    description: stripHtml(t.raw("Hero.description") as string),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default function Page() {
  return <HealthcareAutomationContent />;
}
