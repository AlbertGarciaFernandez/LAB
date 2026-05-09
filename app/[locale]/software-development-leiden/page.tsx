import type { Metadata } from "next";
import SoftwareDevelopmentLeidenContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/software-development-leiden";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "Software Development Company Leiden | Hybrid AI & Web Apps",
    description:
      "Your local software development partner in Leiden. We build custom web apps, scalable e-commerce solutions, and provide expert IT consulting in Zuid-Holland.",
    keywords: [
      "software company Leiden",
      "IT consultant Leiden",
      "web development Leiden",
      "software developer Netherlands",
      "AI integration Leiden",
      "maatwerk software leiden",
      "app ontwikkelaar leiden",
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
      title: "Software Development Company Leiden | Hybrid AI & Web Apps",
      description:
        "Your local software development partner in Leiden. We build custom web apps, scalable e-commerce solutions, and provide expert IT consulting in Zuid-Holland.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function Page() {
  return <SoftwareDevelopmentLeidenContent />;
}
