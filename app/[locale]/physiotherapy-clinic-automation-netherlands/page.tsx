import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { getLocaleValue, splitKeywords, stripHtml } from "../_shared/localeCopy";
import PhysiotherapyClinicAutomationContent from "./PageContent";

const path = "/physiotherapy-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "PhysiotherapyClinic" });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Physiotherapy Automation Netherlands | Intake & Reminders",
      es: "Automatización para Clínicas de Fisioterapia en Países Bajos | Intake y Recordatorios",
      nl: "Automatisering voor Fysiotherapiepraktijken in Nederland | Intake en Herinneringen",
    }),
    description: stripHtml(t.raw("Hero.description") as string),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default function Page() {
  return <PhysiotherapyClinicAutomationContent />;
}
