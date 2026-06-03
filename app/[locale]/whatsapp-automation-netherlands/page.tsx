import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue, splitKeywords, stripHtml } from "../_shared/localeCopy";
import WhatsAppAutomationContent from "./PageContent";

const path = "/whatsapp-automation-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "WhatsAppAutomation" });

  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "WhatsApp Business Automation Netherlands | API Integration",
      es: "Automatización de WhatsApp Business en Países Bajos | Integración API",
      nl: "WhatsApp Business Automatisering Nederland | API Integratie",
    }),
    description: stripHtml(t.raw("Hero.description") as string),
    keywords: splitKeywords(t("SEO.keywords")),
  });
}

export default async function Page({ params }: { params: { locale: string } }) {
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
    <>
      <ServiceSchema
        name={getLocaleValue(params.locale, {
          en: "WhatsApp Business Automation Netherlands",
          es: "Automatización de WhatsApp Business en Países Bajos",
          nl: "WhatsApp Business Automatisering Nederland",
        })}
        description={getLocaleValue(params.locale, {
          en: "WhatsApp Business API automation, chatbot workflows, CRM sync, and campaign automation for operations and growth teams.",
          es: "Automatización con la API de WhatsApp Business, flujos con chatbots, sincronización con CRM y campañas automáticas para equipos de operaciones y crecimiento.",
          nl: "Automatisering met de WhatsApp Business API, chatbotworkflows, CRM-sync en campagne-automatisering voor operations- en growthteams.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "WhatsApp Business Automation",
          es: "Automatización de WhatsApp Business",
          nl: "WhatsApp Business Automatisering",
        })}
      />
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
    </>
  );
}
