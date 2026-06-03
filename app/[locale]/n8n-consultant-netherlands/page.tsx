import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";
import N8nConsultantContent from "./PageContent";

const path = "/n8n-consultant-netherlands";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "n8n Consultant Netherlands | Workflow Automation Experts",
      es: "Consultoría n8n en Países Bajos | Expertos en automatización",
      nl: "n8n consultancy Nederland | Experts in workflow-automatisering",
    }),
    description: getLocaleValue(params.locale, {
      en: "Expert n8n consultants in the Netherlands. We design, build, and optimize self-hosted workflow automation — migrating from Zapier and Make to n8n for better performance, lower costs, and full data control.",
      es: "Consultoría n8n en Países Bajos. Diseñamos, desarrollamos y optimizamos automatizaciones self-hosted, migrando de Zapier y Make a n8n para ganar rendimiento, reducir costes y controlar los datos.",
      nl: "n8n consultancy in Nederland. We ontwerpen, bouwen en optimaliseren self-hosted workflow-automatisering en migreren van Zapier en Make naar n8n voor betere performance, lagere kosten en volledige datacontrole.",
    }),
    keywords: getLocaleValue(params.locale, {
      en: [
        "n8n consultant Netherlands",
        "n8n workflow automation",
        "migrate from Zapier to n8n",
        "self-hosted automation Netherlands",
        "n8n migration consulting",
      ],
      es: [
        "consultoría n8n países bajos",
        "automatización n8n",
        "migración zapier a n8n",
        "automatización self-hosted",
        "servicios n8n",
      ],
      nl: [
        "n8n consultancy nederland",
        "n8n workflow automatisering",
        "zapier naar n8n migratie",
        "self-hosted automatisering",
        "n8n migratie consultancy",
      ],
    }),
  });
}

export default async function Page({ params }: { params: { locale: string } }) {
  const t = await getTranslations("N8nConsultant");

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

  const migrationSteps = {
    title: t("MigrationSteps.title"),
    subtitle: t("MigrationSteps.subtitle"),
    steps: t.raw("MigrationSteps.steps") as Array<{
      num: string;
      title: string;
      desc: string;
    }>,
  };

  const whyN8n = {
    title: t("WhyN8n.title"),
    points: t.raw("WhyN8n.points") as Array<{ title: string; desc: string }>,
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
          en: "n8n Consultant Netherlands",
          es: "Consultoría n8n en Países Bajos",
          nl: "n8n consultancy Nederland",
        })}
        description={getLocaleValue(params.locale, {
          en: "n8n consulting and migration services from Zapier and Make to scalable self-hosted automation infrastructure.",
          es: "Servicios de consultoría y migración a n8n desde Zapier y Make hacia una infraestructura de automatización self-hosted y escalable.",
          nl: "n8n-consultancy en migratieservices van Zapier en Make naar schaalbare self-hosted automatiseringsinfrastructuur.",
        })}
        url={localizedUrl(params.locale, path)}
        serviceType={getLocaleValue(params.locale, {
          en: "n8n Consulting",
          es: "Consultoría n8n",
          nl: "n8n consultancy",
        })}
      />
      <N8nConsultantContent
        locale={params.locale}
        hero={hero}
        languageNote={languageNote}
        painPoints={painPoints}
        solutions={solutions}
        migrationSteps={migrationSteps}
        whyN8n={whyN8n}
        faq={faq}
        cta={cta}
        seo={seo}
      />
    </>
  );
}
