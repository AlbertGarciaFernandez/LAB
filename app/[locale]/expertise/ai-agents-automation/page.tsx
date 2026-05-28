import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { splitKeywords } from "../../_shared/localeCopy";
import AIAgentsPageContent from "./PageContent";

const path = "/expertise/ai-agents-automation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ExpertisePages.AIAgents" });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: t("SEO.title"),
    description: t("SEO.description"),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default function Page() {
  return <AIAgentsPageContent />;
}
