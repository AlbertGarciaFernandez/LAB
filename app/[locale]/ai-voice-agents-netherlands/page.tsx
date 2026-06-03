import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
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
    title: getLocaleValue(params.locale, {
      en: "AI Voice Agents Netherlands | 24/7 Phone Automation",
      es: "Agentes de voz con IA en Países Bajos | Automatización telefónica 24/7",
      nl: "AI voice agents Nederland | 24/7 telefoonautomatisering",
    }),
    description: getLocaleValue(params.locale, {
      en: "Custom AI voice agents for businesses in the Netherlands. Handle inbound calls, qualify leads, schedule appointments, and provide 24/7 phone support — without hiring more staff.",
      es: "Agentes de voz con IA a medida para empresas en Países Bajos. Atienden llamadas entrantes, cualifican leads, agendan citas y ofrecen atención telefónica 24/7 sin ampliar plantilla.",
      nl: "Maatwerk AI voice agents voor bedrijven in Nederland. Ze handelen inkomende gesprekken af, kwalificeren leads, plannen afspraken in en bieden 24/7 telefonische ondersteuning zonder extra personeel.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "AI voice agents Netherlands",
        "AI phone assistant Netherlands",
        "voice automation Amsterdam",
        "AI call handling Netherlands",
        "AI receptionist Netherlands",
      ],
      es: [
        "agentes de voz IA países bajos",
        "asistente telefónico IA",
        "automatización de llamadas",
        "recepcionista IA",
        "atención telefónica IA",
      ],
      nl: [
        "AI voice agents Nederland",
        "AI telefoonassistent",
        "voice automation Amsterdam",
        "AI call handling Nederland",
        "AI receptionist Nederland",
      ],
    }),
  });
}

export default async function Page({ params }: { params: { locale: string } }) {
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
    <>
      <ServiceSchema
        name={getLocaleValue(params.locale, {
          en: "AI Voice Agents Netherlands",
          es: "Agentes de voz con IA en Países Bajos",
          nl: "AI voice agents Nederland",
        })}
        description={getLocaleValue(params.locale, {
          en: "Custom AI voice agents for inbound call automation, lead qualification, appointment scheduling, and 24/7 support.",
          es: "Agentes de voz con IA a medida para automatizar llamadas entrantes, cualificar leads, agendar citas y dar soporte 24/7.",
          nl: "Maatwerk AI voice agents voor automatisering van inkomende gesprekken, leadkwalificatie, afspraakplanning en 24/7 support.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "AI Voice Agent Development",
          es: "Desarrollo de agentes de voz con IA",
          nl: "AI voice agent development",
        })}
      />
      <AIVoiceAgentsContent
        locale={params.locale}
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
