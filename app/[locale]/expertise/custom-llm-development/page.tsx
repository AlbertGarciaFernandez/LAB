import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { splitKeywords } from "../../_shared/localeCopy";
import CustomLLMPageContent from "./PageContent";

const path = "/expertise/custom-llm-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ExpertisePages.CustomLLMs",
  });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: t("SEO.title"),
    description: t("SEO.description"),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default function Page() {
  return <CustomLLMPageContent />;
}
