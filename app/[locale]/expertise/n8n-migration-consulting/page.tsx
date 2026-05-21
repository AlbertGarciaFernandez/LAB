import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import N8nMigrationPageContent from "./PageContent";

const path = "/expertise/n8n-migration-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "n8n Consulting & Migration Services | Zapier Alternative",
    description:
      "Expert n8n consultants in the Netherlands. We migrate tailored workflows from Zapier and Make to n8n for better performance and lower costs.",
    keywords: [
      "n8n consultant netherlands",
      "migrate from zapier to n8n",
      "workflow automation expert",
      "self-hosted automation",
    ],
  });
}

export default function Page() {
  return <N8nMigrationPageContent />;
}
