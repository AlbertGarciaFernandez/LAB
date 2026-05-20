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
import { createPageMetadata } from "@/utils/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale === "es" ? "es" : "en";
  const title = "CodeHunter Lab | Product Systems for Modern Teams";
  const description =
    "A premium product landing page for CodeHunter Lab that frames the platform, previews the systems, and guides the next click.";

  return createPageMetadata({
    locale,
    path: "/lab",
    title,
    description,
    keywords: ["AI implementation platform", "AI systems", "workflow automation training"],
  });
}

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "CodeHunter Lab",
  description:
    "A product systems platform for modern teams. Learn AI automation, workflow design, and system architecture through practical, production-ready systems.",
  provider: {
    "@type": "Organization",
    name: "CodeHunter Lab",
    sameAs: "https://www.codehunterlab.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    instructor: {
      "@type": "Person",
      name: "Albert Garcia",
      url: "https://www.linkedin.com/in/albertgarciafernandez/",
    },
  },
  about: ["AI automation", "n8n workflows", "system architecture", "workflow design"],
  teaches: [
    "AI agent development",
    "Workflow automation with n8n",
    "System integration patterns",
    "Production-ready automation design",
  ],
  educationalLevel: "intermediate",
  inLanguage: ["en", "es"],
  isAccessibleForFree: false,
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How CodeHunter Lab Works",
  description: "A simple path from first click to system-level understanding.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      name: "Frame the outcome",
      text: "Lead with the promise of a guided platform instead of open-ended service exploration.",
      url: "https://www.codehunterlab.com/en/lab#how-it-works",
    },
    {
      "@type": "HowToStep",
      name: "Show the systems",
      text: "Use structured summaries from the Lab data source so the public surface reflects the product model.",
      url: "https://www.codehunterlab.com/en/lab#how-it-works",
    },
    {
      "@type": "HowToStep",
      name: "Drive the next action",
      text: "Keep the CTA hierarchy stable: View Systems first, Preview Platform second.",
      url: "https://www.codehunterlab.com/en/lab#how-it-works",
    },
  ],
};

export default function LabPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "es" ? "es" : "en";

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
