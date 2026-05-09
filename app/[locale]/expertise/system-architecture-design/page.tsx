import type { Metadata } from "next";
import SystemArchitecturePageContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/expertise/system-architecture-design";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "System Architecture Design Netherlands — CodeHunter Lab",
    description:
      "Senior system architects in Leiden. We design scalable Next.js and cloud architectures for ambitious tech companies.",
    keywords: [
      "system architect netherlands",
      "react performance consulting",
      "scalable software design",
      "tech debt audit",
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: "System Architecture Design Netherlands — CodeHunter Lab",
      description:
        "Senior system architects in Leiden. We design scalable Next.js and cloud architectures for ambitious tech companies.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <SystemArchitecturePageContent />;
}
