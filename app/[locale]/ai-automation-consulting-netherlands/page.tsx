import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import AIAutomationNetherlandsContent from "./PageContent";

const baseUrl = "https://www.codehunterlab.com";
const path = "/ai-automation-consulting-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  return {
    title: "AI Automation Agency Netherlands | n8n, WhatsApp & AI Agents",
    description:
      "AI automation agency in the Netherlands for WhatsApp agents, AI voice bots, n8n workflows, and CRM integrations built around measurable ROI.",
    keywords: [
      "AI agency Leiden",
      "AI automation consultancy Netherlands",
      "WhatsApp Bot Business",
      "AI Voice Agent Netherlands",
      "n8n automation consultant",
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
      title: "AI Automation Agency Netherlands | n8n, WhatsApp & AI Agents",
      description:
        "AI automation agency in the Netherlands for WhatsApp agents, AI voice bots, n8n workflows, and CRM integrations built around measurable ROI.",
      url: `${baseUrl}/${locale}${path}`,
      siteName: "CodeHunter Lab",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations("AIAutomationNL");

  const hero = {
    badge: t("Hero.badge"),
    titlePart1: t("Hero.title.part1"),
    titleHighlight: t("Hero.title.highlight"),
    titleSub: t("Hero.title.sub"),
    description: t("Hero.description"),
    ctaPrimary: t("Hero.cta.primary"),
    ctaSecondary: t("Hero.cta.secondary"),
  };

  const agents = {
    titlePart1: t("Agents.title.part1"),
    titleHighlight: t("Agents.title.highlight"),
    labelCapabilities: t("Agents.label.capabilities"),
    labelPopular: t("Agents.label.popular"),
    whatsapp: {
      title: t("Agents.whatsapp.title"),
      desc: t("Agents.whatsapp.desc"),
      points: t.raw("Agents.whatsapp.points") as string[],
    },
    voice: {
      title: t("Agents.voice.title"),
      desc: t("Agents.voice.desc"),
      points: t.raw("Agents.voice.points") as string[],
    },
    automation: {
      title: t("Agents.automation.title"),
      desc: t("Agents.automation.desc"),
      points: t.raw("Agents.automation.points") as string[],
    },
  };

  const roi = {
    titlePart1: t("ROI.title.part1"),
    titlePart2: t("ROI.title.part2"),
    titleHighlight: t("ROI.title.highlight"),
    description: t("ROI.description"),
    cards: [
      {
        label: t("ROI.cards.0.label"),
        value: t("ROI.cards.0.value"),
        desc: t("ROI.cards.0.desc"),
      },
      {
        label: t("ROI.cards.1.label"),
        value: t("ROI.cards.1.value"),
        desc: t("ROI.cards.1.desc"),
      },
    ],
  };

  const trust = {
    dont: {
      titlePart1: t("Trust.dont.title.part1"),
      titleHighlight: t("Trust.dont.title.highlight"),
      titlePart2: t("Trust.dont.title.part2"),
      points: [t("Trust.dont.points.0"), t("Trust.dont.points.1")],
    },
    do: {
      titlePart1: t("Trust.do.title.part1"),
      titleHighlight: t("Trust.do.title.highlight"),
      points: [t("Trust.do.points.0"), t("Trust.do.points.1")],
    },
  };

  const industries = {
    badge: t("Industries.badge"),
    title: t("Industries.title"),
    highlight: t("Industries.highlight"),
    subtitle: t("Industries.subtitle"),
    cta: t("Industries.cta"),
    items: t.raw("Industries.items") as Array<{
      emoji: string;
      title: string;
      desc: string;
      href: string;
    }>,
  };

  const seo = {
    faqTitle: t("SEO.faq.title"),
    faqQuestions: t.raw("SEO.faq.questions") as Array<{ q: string; a: string }>,
    footer: t("SEO.footer"),
    keywords: t("SEO.keywords"),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: locale === "es" ? "Inicio" : "Home", url: `${baseUrl}/${locale}` },
          { name: "AI Automation Consulting", url: `${baseUrl}/${locale}${path}` },
        ]}
      />
      <AIAutomationNetherlandsContent
        hero={hero}
        agents={agents}
        roi={roi}
        trust={trust}
        industries={industries}
        seo={seo}
      />
    </>
  );
}
