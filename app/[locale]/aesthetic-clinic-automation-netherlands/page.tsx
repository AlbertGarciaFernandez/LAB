import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { getLocaleValue, splitKeywords, stripHtml } from "../_shared/localeCopy";
import AestheticClinicAutomationContent from "./PageContent";

const path = "/aesthetic-clinic-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "AestheticClinic" });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Aesthetic Clinic Automation Netherlands — CodeHunter Lab",
      es: "Automatización para Clínicas Estéticas en Países Bajos — CodeHunter Lab",
      nl: "Automatisering voor Esthetische Klinieken in Nederland — CodeHunter Lab",
    }),
    description: stripHtml(t.raw("Hero.description") as string),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default function Page() {
  return <AestheticClinicAutomationContent />;
}
