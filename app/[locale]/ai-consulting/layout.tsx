import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";

const path = "/ai-consulting";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "AI Consulting Netherlands | Strategy, Delivery & AI Agents",
    description:
      "AI consulting in the Netherlands for strategy, implementation, and AI systems that ship to production. AI agents, workflow automation, and integration work for teams beyond pilots.",
    keywords: [
      "AI consulting Netherlands",
      "AI consulting services",
      "AI automation consulting",
      "deploy AI agents",
      "AI workflow automation",
      "custom AI integration",
      "AI consulting Leiden",
      "AI implementation project",
      "AI strategy consulting",
      "production AI systems",
    ],
  });
}

export default function AIConsultingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
