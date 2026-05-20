import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustProofSection from "@/components/sections/TrustProofSection";
import WhatWeBuildSection from "@/components/sections/WhatWeBuildSection";
import PackagesSection from "@/components/sections/PackagesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import BioSection from "@/components/sections/04BioSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessContactSection from "@/components/sections/06ProcessContactSection";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isSpanish = params.locale === "es";

  return createPageMetadata({
    locale: params.locale,
    path: "",
    title: isSpanish
      ? "Agencia de Automatización AI en Países Bajos | CodeHunter Lab"
      : "AI Automation Agency Netherlands | CodeHunter Lab",
    description: isSpanish
      ? "Agencia de automatización AI en Países Bajos para agentes AI, flujos n8n e integraciones personalizadas. Sistemas en producción, no demos."
      : "AI automation agency in the Netherlands for AI agents, n8n workflows, and custom integrations. Production systems, not demos. Based in Leiden.",
    keywords: isSpanish
      ? [
          "automatización AI Países Bajos",
          "consultoría AI Países Bajos",
          "agentes AI",
          "n8n workflows",
        ]
      : [
          "AI automation agency Netherlands",
          "AI automation consulting Netherlands",
          "AI agents Netherlands",
          "n8n workflows Netherlands",
        ],
  });
}

export default function Home({ params }: { params: { locale: string } }) {
  const isSpanish = params.locale === "es";
  return (
    <div className="min-h-screen bg-near-black text-white antialiased">
      <Header />
      <main>
        <BreadcrumbSchema
          items={[
            { name: isSpanish ? "Inicio" : "Home", url: `${baseUrl}/${params.locale}` },
          ]}
        />
        <HeroSection />
        <TrustProofSection />
        <WhatWeBuildSection />
        <PackagesSection />
        <IndustriesSection />
        <InsightsSection locale={params.locale} />
        <BioSection />
        <ProcessContactSection />
      </main>
    </div>
  );
}
