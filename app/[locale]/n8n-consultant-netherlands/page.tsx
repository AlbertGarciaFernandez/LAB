import type { Metadata } from "next";
import ServiceSchema from "@/components/ui/ServiceSchema";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/utils/metadata";
import { localizedUrl } from "@/utils/metadata";
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
    title: "n8n Consultant Netherlands | Workflow Automation Experts",
    description:
      "Expert n8n consultants in the Netherlands. We design, build, and optimize self-hosted workflow automation — migrating from Zapier and Make to n8n for better performance, lower costs, and full data control.",
    keywords: [
      "n8n consultant Netherlands",
      "n8n workflow automation",
      "migrate from Zapier to n8n",
      "self-hosted automation Netherlands",
      "n8n expert Amsterdam",
      "workflow automation agency Netherlands",
      "n8n migration consulting",
      "Make to n8n migration",
      "n8n integration services",
      "custom workflow automation Netherlands",
    ],
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
        name="n8n Consultant Netherlands"
        description="n8n consulting and migration services from Zapier and Make to scalable self-hosted automation infrastructure."
        url={localizedUrl(params.locale, path)}
        serviceType="n8n Consulting"
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
