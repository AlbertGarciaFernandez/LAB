import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
import AIConsultingPageContent from "./PageContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path: "/ai-consulting",
    title: getLocaleValue(params.locale, {
      en: "AI Consulting Netherlands | Strategy, Implementation & ROI",
      es: "Consultoría de IA en Países Bajos | Estrategia, implementación y ROI",
      nl: "AI consultancy Nederland | Strategie, implementatie en ROI",
    }),
    description: getLocaleValue(params.locale, {
      en: "AI consulting for companies ready to ship. Strategy sprints, implementation, and ongoing partnerships. Production systems, not prototypes.",
      es: "Consultoría de IA para empresas listas para lanzar. Sprints de estrategia, implementación y colaboración continua. Sistemas en producción, no prototipos.",
      nl: "AI consultancy voor bedrijven die klaar zijn om live te gaan. Strategische sprints, implementatie en doorlopende samenwerking. Systemen in productie, geen prototypes.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: ["AI consulting Netherlands", "AI automation consulting", "AI agents Netherlands"],
      es: ["consultoría IA países bajos", "automatización IA", "agentes IA países bajos"],
      nl: ["AI consultancy nederland", "AI automatisering consultancy", "AI agents nederland"],
    }),
  });
}

export default async function Page({ params }: { params: { locale: string } }) {
  const t = await getTranslations("AIConsulting");

  const hero = {
    badge: t("Hero.badge"),
    titlePart1: t("Hero.title.part1"),
    titlePart2: t("Hero.title.part2"),
    titleHighlight: t("Hero.title.highlight"),
    description: t.raw("Hero.description") as string,
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
    // AIConsultingPricingSection copy source.
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

  const faq = {
    badge: t("FAQ.badge"),
    title: t("FAQ.title"),
    titleHighlight: t("FAQ.titleHighlight"),
    items: t.raw("FAQ.items") as Array<{ q: string; a: string }>,
  };

  const finalCta = {
    title: t("FinalCTA.title"),
    titleHighlight: t("FinalCTA.titleHighlight"),
    description: t("FinalCTA.description"),
    primary: t("FinalCTA.primary"),
    secondary: t("FinalCTA.secondary"),
  };

  return (
    <>
      <ServiceSchema
        name={getLocaleValue(params.locale, {
          en: "AI Consulting Netherlands",
          es: "Consultoría de IA en Países Bajos",
          nl: "AI consultancy Nederland",
        })}
        description={getLocaleValue(params.locale, {
          en: "AI consulting for companies ready to ship strategy, implementation, and production AI systems.",
          es: "Consultoría de IA para empresas listas para ejecutar estrategia, implementación y sistemas de IA en producción.",
          nl: "AI consultancy voor bedrijven die klaar zijn voor strategie, implementatie en AI-systemen in productie.",
        })}
        url={localizedUrl(params.locale, "/ai-consulting")}
        serviceType={getLocaleValue(params.locale, {
          en: "AI Consulting",
          es: "Consultoría de IA",
          nl: "AI consultancy",
        })}
      />
      <AIConsultingPageContent
        hero={hero}
        pricing={pricing}
        whoItsFor={whoItsFor}
        whatWeBuild={whatWeBuild}
        useCases={useCases}
        migration={migration}
        techCredibility={techCredibility}
        faq={faq}
        finalCta={finalCta}
      />
    </>
  );
}
