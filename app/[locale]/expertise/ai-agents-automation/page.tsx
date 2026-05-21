import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import AIAgentsPageContent from "./PageContent";

const path = "/expertise/ai-agents-automation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "AI Agent Development Netherlands | 24/7 Automation",
    description:
      "Deploy custom AI agents for customer support and sales. Top AI agency in the Netherlands for WhatsApp and Voice bots.",
    keywords: [
      "ai agent development",
      "digital workforce",
      "whatsapp automation business",
      "ai customer service nl",
    ],
  });
}

export default function Page() {
  return <AIAgentsPageContent />;
}
