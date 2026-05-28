import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import { getTranslations } from "next-intl/server";
import { splitKeywords } from "../../_shared/localeCopy";
import N8nMigrationPageContent from "./PageContent";

const path = "/expertise/n8n-migration-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ExpertisePages.n8nMigration",
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
  return <N8nMigrationPageContent />;
}
