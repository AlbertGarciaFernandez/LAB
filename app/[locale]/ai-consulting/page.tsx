import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AIConsultingPageContent from "./PageContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const baseUrl = "https://www.codehunterlab.com";
  const path = "/ai-consulting";
  return {
    title: "AI Consulting Netherlands | Strategy, Implementation & ROI",
    description:
      "AI consulting for companies ready to ship. Strategy sprints, implementation, and ongoing partnerships. Production systems, not prototypes.",
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: "AI Consulting Netherlands | Strategy, Implementation & ROI",
      description:
        "AI consulting for companies ready to ship. Strategy sprints, implementation, and ongoing partnerships. Production systems, not prototypes.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function Page() {
  const t = await getTranslations("AIConsulting");

  const hero = {
    badge: t("Hero.badge"),
    titlePart1: t("Hero.title.part1"),
    titlePart2: t("Hero.title.part2"),
    titleHighlight: t("Hero.title.highlight"),
    description: t("Hero.description"),
    cta: t("Hero.cta"),
    whyUsTitlePart1: t("Hero.whyUs.title.part1"),
    whyUsTitleHighlight: t("Hero.whyUs.title.highlight"),
    whyUsDescription: t("Hero.whyUs.description"),
    whyUsList: [t("Hero.whyUs.list.0"), t("Hero.whyUs.list.1"), t("Hero.whyUs.list.2")],
    systemStatus: {
      label: t("Hero.whyUs.systemStatus.label"),
      value: t("Hero.whyUs.systemStatus.value"),
      efficiencyLabel: t("Hero.whyUs.systemStatus.efficiencyLabel"),
      efficiencyValue: t("Hero.whyUs.systemStatus.efficiencyValue"),
      tooltip: t("Hero.whyUs.systemStatus.tooltip"),
    },
  };

  const pricing = {
    badge: t("Pricing.badge"),
    title: t("Pricing.title"),
    highlight: t("Pricing.highlight"),
    subtitle: t("Pricing.subtitle"),
    recommended: t("Pricing.recommended"),
    items: t.raw("Pricing.items") as Array<{
      name: string;
      price: string;
      timeline: string;
      desc: string;
      href: string;
      cta: string;
      recommended?: boolean;
      points: string[];
    }>,
    comparison: {
      title: t("Pricing.comparison.title"),
      desc: t("Pricing.comparison.desc"),
      points: t.raw("Pricing.comparison.points") as string[],
    },
  };

  const whoItsFor = {
    badge: t("WhoItsFor.badge"),
    title: t("WhoItsFor.title"),
    highlight: t("WhoItsFor.highlight"),
    description: t("WhoItsFor.description"),
    items: t.raw("WhoItsFor.items") as string[],
  };

  const whatWeBuild = {
    badge: t("WhatWeBuildInline.badge"),
    title: t("WhatWeBuildInline.title"),
    highlight: t("WhatWeBuildInline.highlight"),
    services: t.raw("WhatWeBuildInline.services") as Array<{
      title: string;
      desc: string;
      label: string;
      href: string;
    }>,
  };

  const useCases = {
    badge: t("UseCases.badge"),
    title: t("UseCases.title"),
    highlight: t("UseCases.highlight"),
    subtitle: t("UseCases.subtitle"),
    labels: {
      problem: t("UseCases.labels.problem"),
      solution: t("UseCases.labels.solution"),
      outcome: t("UseCases.labels.outcome"),
    },
    items: t.raw("UseCases.items") as Array<{
      number: string;
      title: string;
      problem: string;
      solution: string;
      outcome: string;
    }>,
  };

  const migration = {
    badge: t("Migration.badge"),
    title: t("Migration.title"),
    highlight: t("Migration.highlight"),
    legacy: {
      title: t("Migration.legacy.title"),
      desc: t("Migration.legacy.desc"),
      tag: t("Migration.legacy.tag"),
    },
    optimized: {
      tag: t("Migration.optimized.tag"),
      title: t("Migration.optimized.title"),
      desc: t("Migration.optimized.desc"),
      latencyLabel: t("Migration.optimized.latencyLabel"),
      latencyValue: t("Migration.optimized.latencyValue"),
      costLabel: t("Migration.optimized.costLabel"),
      costValue: t("Migration.optimized.costValue"),
    },
    action: {
      title: t("Migration.action.title"),
      desc: t("Migration.action.desc"),
      cta1: t("Migration.action.cta1"),
      cta2: t("Migration.action.cta2"),
    },
  };

  const techCredibility = {
    badge: t("TechCredibility.badge"),
    title: t("TechCredibility.title"),
    highlight: t("TechCredibility.highlight"),
    subtitle: t("TechCredibility.subtitle"),
    items: t.raw("TechCredibility.items") as Array<{ title: string; desc: string }>,
  };

  return (
    <AIConsultingPageContent
      hero={hero}
      pricing={pricing}
      whoItsFor={whoItsFor}
      whatWeBuild={whatWeBuild}
      useCases={useCases}
      migration={migration}
      techCredibility={techCredibility}
    />
  );
}
