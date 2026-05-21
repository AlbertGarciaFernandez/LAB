import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/metadata";
import AIVoiceAgentsContent from "./PageContent";

const path = "/ai-voice-agents-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: "AI Voice Agents Netherlands | 24/7 Phone Automation",
    description:
      "Custom AI voice agents for businesses in the Netherlands. Handle inbound calls, qualify leads, schedule appointments, and provide 24/7 phone support — without hiring more staff.",
    keywords: [
      "AI voice agents Netherlands",
      "AI phone assistant Netherlands",
      "voice automation Amsterdam",
      "AI call handling Netherlands",
      "AI receptionist Netherlands",
      "conversational AI phone system",
      "AI inbound call automation",
      "AI lead qualification phone",
      "Dutch AI voice assistant",
      "AI customer service phone Netherlands",
    ],
  });
}

export default async function Page() {
  const t = await getTranslations("AIVoiceAgents");

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
    <AIVoiceAgentsContent
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
