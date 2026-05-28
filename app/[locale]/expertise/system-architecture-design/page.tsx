import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { splitKeywords } from "../../_shared/localeCopy";
import SystemArchitecturePageContent from "./PageContent";

const path = "/expertise/system-architecture-design";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ExpertisePages.SystemArchitecture",
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
  return <SystemArchitecturePageContent />;
}
