import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustProofSection from "@/components/sections/TrustProofSection";
import ExpertiseSection from "@/components/sections/02ExpertiseSection";
import WhatWeBuildSection from "@/components/sections/WhatWeBuildSection";
import PackagesSection from "@/components/sections/PackagesSection";
import FitSection from "@/components/sections/FitSection";
import InsightsSection from "@/components/sections/InsightsSection";
import BioSection from "@/components/sections/04BioSection";
import ProcessSection from "@/components/sections/06ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { createPageMetadata } from "@/utils/metadata";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isSpanish = params.locale === "es";
  const isDutch = params.locale === "nl";

  return createPageMetadata({
    locale: params.locale,
    path: "",
    title: isSpanish
      ? "Estudio de Ingeniería en Países Bajos | Sistemas IA, Productos con Identidad y Liderazgo | CodeHunter Lab"
      : isDutch
        ? "Engineering Studio Nederland | AI-systemen, Merkgedreven Producten en Leiderschap | CodeHunter Lab"
        : "Engineering Studio Netherlands | AI Systems, Brand-Led Products & Leadership | CodeHunter Lab",
    description: isSpanish
      ? "Estudio de ingeniería en Países Bajos para sistemas de IA, productos digitales con identidad, formación práctica y liderazgo técnico. Trabajo en producción, no pilotos eternos."
      : isDutch
        ? "Engineering studio in Nederland voor AI-systemen, merkgedreven digitale producten, training en technisch leiderschap. Productiewerk, geen eindeloze pilots."
        : "Engineering studio in the Netherlands for AI systems, brand-led digital products, training, and technical leadership. Production work, not endless pilots.",
    keywords: isSpanish
      ? [
          "estudio de ingeniería Países Bajos",
          "sistemas IA Países Bajos",
          "productos con identidad",
          "liderazgo técnico",
        ]
      : isDutch
        ? [
            "engineering studio Nederland",
            "AI-systemen Nederland",
            "merkgedreven producten",
            "technisch leiderschap",
          ]
        : [
            "engineering studio Netherlands",
            "AI systems Netherlands",
            "brand-led products",
            "technical leadership",
          ],
  });
}

export default function Home({ params }: { params: { locale: string } }) {
  const isSpanish = params.locale === "es";
  const isDutch = params.locale === "nl";
  const contactCopy = {
    title: isSpanish
      ? "¿Listo para construir lo que viene?"
      : isDutch
        ? "Klaar om te bouwen wat nu nodig is?"
        : "Ready to Build What Comes Next?",
    description: isSpanish
      ? "Reserva una llamada de 30 minutos. Entenderemos qué necesitas, identificaremos el camino más rápido y te diremos qué merece la pena construir después."
      : isDutch
        ? "Plan een gesprek van 30 minuten. We begrijpen wat je nodig hebt, bepalen de snelste route vooruit en vertellen wat het waard is om daarna te bouwen."
        : "Book a 30-minute call. We'll understand what you need, identify the fastest path forward, and tell you what is worth building next.",
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-near-black text-white antialiased">
      <Header />
      <main className="overflow-x-hidden">
        <BreadcrumbSchema
          items={[
            {
              name: isSpanish ? "Inicio" : isDutch ? "Start" : "Home",
              url: `${baseUrl}/${params.locale}`,
            },
          ]}
        />
        <HeroSection />
        <TrustProofSection />
        <ExpertiseSection />
        <WhatWeBuildSection />
        <PackagesSection />
        <FitSection />
        <ProcessSection />
        <BioSection />
        <InsightsSection />
        <ContactSection title={contactCopy.title} description={contactCopy.description} />
      </main>
    </div>
  );
}
