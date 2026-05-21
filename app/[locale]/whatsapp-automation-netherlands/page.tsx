import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/metadata";
import WhatsAppAutomationContent from "./PageContent";

const path = "/whatsapp-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "WhatsApp Business Automation Netherlands | API Integration",
    description:
      "WhatsApp Business API automation for companies in the Netherlands. Build chatbots, automate customer service, send bulk campaigns, and integrate WhatsApp with your CRM and internal tools.",
    keywords: [
      "WhatsApp Business API Netherlands",
      "WhatsApp automation Amsterdam",
      "WhatsApp chatbot Netherlands",
      "WhatsApp CRM integration Netherlands",
      "WhatsApp marketing automation NL",
      "WhatsApp customer service automation",
      "WhatsApp API integration services",
      "WhatsApp bulk messaging Netherlands",
      "WhatsApp business solutions NL",
      "WhatsApp conversational AI Netherlands",
    ],
  });
}

export default async function Page() {
  const t = await getTranslations("WhatsAppAutomation");

  const hero = {
    badge: t("Hero.badge"),
    titlePart1: t("Hero.title.part1"),
    titleHighlight: t("Hero.title.highlight"),
    titlePart2: t("Hero.title.part2"),
    description: t.raw("Hero.description") as string,
    ctaPrimary: t("Hero.cta.primary"),
    ctaSecondary: t("Hero.cta.secondary"),
  };

  const languageNote = t("LanguageNote");

  const painPoints = {
    title: t("PainPoints.title"),
    items: t.raw("PainPoints.items") as Array<{
      emoji: string;
      title: string;
      desc: string;
    }>,
  };

  const solutions = {
    title: t("Solutions.title"),
    subtitle: t("Solutions.subtitle"),
    items: t.raw("Solutions.items") as Array<{
      emoji: string;
      title: string;
      desc: string;
      result: string;
    }>,
  };

  const useCases = {
    title: t("UseCases.title"),
    items: t.raw("UseCases.items") as Array<{
      num: string;
      title: string;
      desc: string;
    }>,
  };

  const whyUs = {
    title: t("WhyUs.title"),
    points: t.raw("WhyUs.points") as Array<{ title: string; desc: string }>,
  };

  const faq = {
    title: t("FAQ.title"),
    subtitle: t("FAQ.subtitle"),
    questions: t.raw("FAQ.questions") as Array<{ q: string; a: string }>,
  };

  const cta = {
    label: t("CTA.label"),
    title: t("CTA.title"),
    desc: t("CTA.desc"),
    button: t("CTA.button"),
    subtext: t("CTA.subtext"),
  };

  const seo = {
    keywords: t("SEO.keywords"),
    extendedDesc: t("SEO.extendedDesc"),
  };

  return (
    <WhatsAppAutomationContent
      hero={hero}
      languageNote={languageNote}
      painPoints={painPoints}
      solutions={solutions}
      useCases={useCases}
      whyUs={whyUs}
      faq={faq}
      cta={cta}
      seo={seo}
    />
  );
}
