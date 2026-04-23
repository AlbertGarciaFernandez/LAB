import type { Metadata } from "next";
import {
  LabCtaSection,
  LabDifferentiationSection,
  LabHeroSection,
  LabHowItWorksSection,
  LabProblemSection,
  LabSolutionSection,
  LabSystemsSection,
} from "@/components/lab/LabLandingSections";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale === "es" ? "es" : "en";
  const title = "CodeHunter Lab | Product Systems for Modern Teams";
  const description =
    "A premium product landing page for CodeHunter Lab that frames the platform, previews the systems, and guides the next click.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/lab`,
      languages: {
        en: `${baseUrl}/en/lab`,
        es: `${baseUrl}/es/lab`,
        "x-default": `${baseUrl}/en/lab`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/lab`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default function LabPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "es" ? "es" : "en";

  return (
    <main>
      <LabHeroSection locale={locale} />
      <LabProblemSection locale={locale} />
      <LabSolutionSection locale={locale} />
      <LabHowItWorksSection locale={locale} />
      <LabSystemsSection locale={locale} />
      <LabDifferentiationSection locale={locale} />
      <LabCtaSection locale={locale} />
    </main>
  );
}
