import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/metadata";
import SystemArchitecturePageContent from "./PageContent";

const path = "/expertise/system-architecture-design";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "System Architecture Design Netherlands — CodeHunter Lab",
    description:
      "Senior system architects in Leiden. We design scalable Next.js and cloud architectures for ambitious tech companies.",
    keywords: [
      "system architect netherlands",
      "react performance consulting",
      "scalable software design",
      "tech debt audit",
    ],
  });
}

export default function Page() {
  return <SystemArchitecturePageContent />;
}
