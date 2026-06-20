import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import { Link } from "@/navigation";
import { createPageMetadata } from "@/utils/metadata";
import { getLocaleValue } from "../_shared/localeCopy";

const baseUrl = "https://www.codehunterlab.com";
const path = "/services";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata({
    locale: params.locale,
    path,
    title: getLocaleValue(params.locale, {
      en: "Services | AI Systems, Product Studio and Technical Leadership",
      es: "Servicios | Sistemas IA, producto y liderazgo técnico",
      nl: "Services | AI-systemen, productstudio en technisch leiderschap",
    }),
    description: getLocaleValue(params.locale, {
      en: "Explore CodeHunter Lab services across AI systems, automation, product design, frontend audits, training, and technical leadership.",
      es: "Explora servicios de CodeHunter Lab en IA, automatización, producto, auditorías frontend, formación y liderazgo técnico.",
      nl: "Bekijk CodeHunter Lab-services rond AI-systemen, automatisering, product design, frontend audits, training en technisch leiderschap.",
    }),
    keywords: [
      "CodeHunter Lab services",
      "AI consulting",
      "product studio",
      "technical leadership",
    ],
  });
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
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
  const services = [
    {
      label: isSpanish ? "Consultoría IA" : isDutch ? "AI consultancy" : "AI Consulting",
      desc: isSpanish
        ? "Estrategia, implementación y sistemas IA en producción."
        : isDutch
          ? "Strategie, implementatie en AI-systemen in productie."
          : "Strategy, implementation, and AI systems in production.",
      href: "/ai-consulting",
    },
    {
      label: isSpanish ? "Diseño de producto" : isDutch ? "Product design" : "Product Design",
      desc: isSpanish
        ? "Productos digitales con identidad, claridad y arquitectura mantenible."
        : isDutch
          ? "Digitale producten met identiteit, helderheid en onderhoudbare architectuur."
          : "Digital products with identity, clarity, and maintainable architecture.",
      href: "/product-design-development",
    },
    {
      label: isSpanish ? "Auditoría frontend" : isDutch ? "Frontend audit" : "Frontend Audit",
      desc: isSpanish
        ? "Revisión de UX, rendimiento, visual, accesibilidad y deuda técnica."
        : isDutch
          ? "Review van UX, performance, visual design, toegankelijkheid en technische schuld."
          : "Review UX, performance, visual consistency, accessibility, and technical debt.",
      href: "/frontend-audit-product-review",
    },
    {
      label: isSpanish ? "Formación" : isDutch ? "Training" : "Training",
      desc: isSpanish
        ? "Workshops para adoptar IA, automatizaciones y nuevos estándares."
        : isDutch
          ? "Workshops voor adoptie van AI, automatisering en nieuwe standaarden."
          : "Workshops for adopting AI, automation, and new delivery standards.",
      href: "/training-enablement",
    },
    {
      label: isSpanish
        ? "Liderazgo técnico"
        : isDutch
          ? "Technisch leiderschap"
          : "Technical Leadership",
      desc: isSpanish
        ? "Dirección senior para arquitectura, proveedores, roadmap y entrega."
        : isDutch
          ? "Senior richting voor architectuur, vendors, roadmap en delivery."
          : "Senior direction for architecture, vendors, roadmap, and delivery.",
      href: "/technical-leadership",
    },
    {
      label: isSpanish ? "Integración IT" : isDutch ? "IT-integratie" : "IT Integration",
      desc: isSpanish
        ? "APIs, CRMs, ERPs y herramientas internas conectadas a operaciones reales."
        : isDutch
          ? "API's, CRM's, ERP's en interne tools verbonden met echte operatie."
          : "APIs, CRMs, ERPs, and internal tools connected to real operations.",
      href: "/it-system-integration",
    },
  ];

  return (
    <div className="min-h-screen bg-near-black text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <BreadcrumbSchema
          items={[
            {
              name: isSpanish ? "Inicio" : isDutch ? "Start" : "Home",
              url: `${baseUrl}/${params.locale}`,
            },
            {
              name: isSpanish ? "Servicios" : isDutch ? "Services" : "Services",
              url: `${baseUrl}/${params.locale}${path}`,
            },
          ]}
        />
        <section className="max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-hunter-green">
            {isSpanish ? "Servicios" : isDutch ? "Services" : "Services"}
          </p>
          <h1 className="text-5xl font-black leading-none tracking-tighter md:text-7xl">
            {isSpanish
              ? "Sistemas IA, producto digital y liderazgo técnico."
              : isDutch
                ? "AI-systemen, digitale producten en technisch leiderschap."
                : "AI systems, digital products, and technical leadership."}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            {isSpanish
              ? "Elige el punto de entrada que encaja con tu bloqueo actual: automatización, producto, arquitectura, adopción o dirección senior."
              : isDutch
                ? "Kies het startpunt dat past bij je huidige blokkade: automatisering, product, architectuur, adoptie of senior richting."
                : "Choose the entry point that fits your current bottleneck: automation, product, architecture, adoption, or senior direction."}
          </p>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-hunter-green/50"
            >
              <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-hunter-green">
                {service.label}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{service.desc}</p>
              <p className="mt-6 text-xs font-black uppercase tracking-widest text-hunter-orange">
                {isSpanish ? "Ver servicio" : isDutch ? "Bekijk service" : "View service"}
              </p>
            </Link>
          ))}
        </section>
      </main>
      <ContactSection title={contactCopy.title} description={contactCopy.description} />
    </div>
  );
}
