import type { Metadata } from "next";
import CustomInternalToolsContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/services/custom-internal-tools-development";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Custom Internal Tools Development — CodeHunter Lab",
    description:
      "Expert developer of custom internal tools, admin panels, and operation dashboards. Scale your business without per-user fees in the Netherlands.",
    keywords: [
      "build internal tools for business",
      "custom admin panel development",
      "workflow automation consulting",
      "replace excel with app",
      "internal software developer nl",
      "maatwerk software ontwikkeling",
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
      title: "Custom Internal Tools Development — CodeHunter Lab",
      description:
        "Expert developer of custom internal tools, admin panels, and operation dashboards. Scale your business without per-user fees in the Netherlands.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <CustomInternalToolsContent />;
}
