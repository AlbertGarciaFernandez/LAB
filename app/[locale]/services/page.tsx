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
  const copy = <T,>(values: { en: T; es: T; nl: T }) => getLocaleValue(params.locale, values);
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
  const entryPoints = [
    {
      situation: copy({
        en: "You are exploring",
        es: "Estás explorando",
        nl: "Je bent aan het verkennen",
      }),
      title: copy({
        en: "Start with strategy",
        es: "Empieza con estrategia",
        nl: "Begin met strategie",
      }),
      desc: copy({
        en: "Map workflows, risks and ROI before committing budget to a build.",
        es: "Mapea procesos, riesgos y ROI antes de comprometer presupuesto a una construcción.",
        nl: "Breng workflows, risico's en ROI in kaart voordat je budget vastlegt voor bouw.",
      }),
      href: "/ai-consulting",
    },
    {
      situation: copy({
        en: "Manual work is growing",
        es: "El trabajo manual crece",
        nl: "Handwerk groeit",
      }),
      title: copy({
        en: "Automate the bottleneck",
        es: "Automatiza el cuello de botella",
        nl: "Automatiseer de bottleneck",
      }),
      desc: copy({
        en: "Turn repeated admin, routing, intake or reporting into a live workflow.",
        es: "Convierte administración, intake, reporting o routing repetitivo en un flujo vivo.",
        nl: "Zet repetitieve admin, intake, routing of rapportage om in een live workflow.",
      }),
      href: "/expertise/ai-agents-automation",
    },
    {
      situation: copy({
        en: "Systems don't talk",
        es: "Tus sistemas no hablan",
        nl: "Systemen praten niet",
      }),
      title: copy({ en: "Connect the stack", es: "Conecta el stack", nl: "Koppel de stack" }),
      desc: copy({
        en: "Join CRM, ERP, WhatsApp, databases and internal tools into one operating layer.",
        es: "Une CRM, ERP, WhatsApp, bases de datos y herramientas internas en una capa operativa.",
        nl: "Verbind CRM, ERP, WhatsApp, databases en interne tools in een operationele laag.",
      }),
      href: "/it-system-integration",
    },
    {
      situation: copy({
        en: "Product needs direction",
        es: "El producto necesita dirección",
        nl: "Product heeft richting nodig",
      }),
      title: copy({
        en: "Shape the product",
        es: "Ordena el producto",
        nl: "Geef het product richting",
      }),
      desc: copy({
        en: "Clarify experience, architecture and delivery decisions before the product drifts.",
        es: "Aclara experiencia, arquitectura y entrega antes de que el producto derive.",
        nl: "Verhelder ervaring, architectuur en delivery voordat het product afdwaalt.",
      }),
      href: "/product-design-development",
    },
    {
      situation: copy({
        en: "Team adoption is weak",
        es: "La adopción es débil",
        nl: "Adoptie is zwak",
      }),
      title: copy({ en: "Train the team", es: "Forma al equipo", nl: "Train het team" }),
      desc: copy({
        en: "Give teams practical AI and delivery patterns they can use immediately.",
        es: "Da al equipo patrones prácticos de IA y delivery que pueda usar desde el primer día.",
        nl: "Geef teams praktische AI- en deliverypatronen die direct bruikbaar zijn.",
      }),
      href: "/training-enablement",
    },
    {
      situation: copy({
        en: "Decisions need seniority",
        es: "Falta criterio senior",
        nl: "Besluiten vragen senioriteit",
      }),
      title: copy({
        en: "Add technical leadership",
        es: "Añade liderazgo técnico",
        nl: "Voeg technisch leiderschap toe",
      }),
      desc: copy({
        en: "Bring senior judgment to roadmap, architecture, vendors and delivery tradeoffs.",
        es: "Aporta criterio senior a roadmap, arquitectura, proveedores y decisiones de entrega.",
        nl: "Breng senior oordeel in roadmap, architectuur, vendors en deliverykeuzes.",
      }),
      href: "/technical-leadership",
    },
  ];
  const services = [
    {
      label: copy({ en: "AI Consulting", es: "Consultoría IA", nl: "AI consultancy" }),
      desc: copy({
        en: "Strategy, prioritisation and production AI systems with clear ROI logic.",
        es: "Estrategia, priorización y sistemas IA en producción con lógica clara de ROI.",
        nl: "Strategie, prioritering en AI-systemen in productie met duidelijke ROI-logica.",
      }),
      href: "/ai-consulting",
    },
    {
      label: copy({
        en: "AI Automation & Agents",
        es: "Automatización IA / Agentes",
        nl: "AI Automatisering & Agents",
      }),
      desc: copy({
        en: "Agents and workflows that reduce manual work and connect to real operations.",
        es: "Agentes y flujos que reducen trabajo manual y se conectan a operaciones reales.",
        nl: "Agents en workflows die handwerk verminderen en echte operatie koppelen.",
      }),
      href: "/expertise/ai-agents-automation",
    },
    {
      label: copy({
        en: "System Integration",
        es: "Integración de Sistemas",
        nl: "Systeemintegratie",
      }),
      desc: copy({
        en: "APIs, CRMs, ERPs and internal tools connected into reliable flows.",
        es: "APIs, CRMs, ERPs y herramientas internas conectadas en flujos fiables.",
        nl: "API's, CRM's, ERP's en interne tools gekoppeld in betrouwbare flows.",
      }),
      href: "/it-system-integration",
    },
    {
      label: copy({ en: "Internal Tools", es: "Herramientas Internas", nl: "Interne Tools" }),
      desc: copy({
        en: "Custom ERP/CRM, mobile workflows and AI-ready operating layers that replace spreadsheet operations.",
        es: "ERP/CRM a medida, flujos móviles y capas operativas listas para IA que sustituyen operaciones en hojas de cálculo.",
        nl: "Maatwerk ERP/CRM, mobiele workflows en AI-ready operationele lagen die spreadsheet-operaties vervangen.",
      }),
      href: "/services/custom-internal-tools-development",
    },
    {
      label: copy({
        en: "Digital Product & Frontend",
        es: "Producto Digital & Frontend",
        nl: "Digitaal Product & Frontend",
      }),
      desc: copy({
        en: "Product surfaces with identity, performance and maintainable architecture.",
        es: "Superficies de producto con identidad, rendimiento y arquitectura mantenible.",
        nl: "Productsurfaces met identiteit, performance en onderhoudbare architectuur.",
      }),
      href: "/product-design-development",
    },
    {
      label: copy({
        en: "Training & Adoption",
        es: "Formación y Adopción",
        nl: "Training & Adoptie",
      }),
      desc: copy({
        en: "Workshops and enablement for teams that need practical AI usage, not theory.",
        es: "Workshops y acompañamiento para equipos que necesitan uso práctico de IA, no teoría.",
        nl: "Workshops en enablement voor teams die praktische AI nodig hebben, geen theorie.",
      }),
      href: "/training-enablement",
    },
    {
      label: copy({
        en: "Technical Leadership",
        es: "Liderazgo Técnico",
        nl: "Technisch Leiderschap",
      }),
      desc: copy({
        en: "Senior direction for architecture, vendors, roadmap and delivery decisions.",
        es: "Dirección senior para arquitectura, proveedores, roadmap y decisiones de entrega.",
        nl: "Senior richting voor architectuur, vendors, roadmap en deliverybesluiten.",
      }),
      href: "/technical-leadership",
    },
  ];
  const capabilities = [
    "Custom LLMs / LLMs personalizados",
    "n8n / workflows",
    "React / Next.js",
    copy({ en: "System architecture", es: "Arquitectura de sistemas", nl: "Systeemarchitectuur" }),
    copy({ en: "APIs and integrations", es: "APIs e integraciones", nl: "API's en integraties" }),
    copy({
      en: "Observability and handoff",
      es: "Observabilidad y handoff",
      nl: "Observability en overdracht",
    }),
  ];
  const industries = [
    {
      label: copy({ en: "Healthcare", es: "Salud", nl: "Zorg" }),
      href: "/healthcare-automation-netherlands",
    },
    {
      label: copy({
        en: "Aesthetic clinics",
        es: "Clínicas estéticas",
        nl: "Esthetische klinieken",
      }),
      href: "/aesthetic-clinic-automation-netherlands",
    },
    {
      label: copy({
        en: "Professional services",
        es: "Servicios profesionales",
        nl: "Zakelijke dienstverlening",
      }),
      href: "/professional-services-automation-netherlands",
    },
    {
      label: copy({ en: "Real estate", es: "Real estate", nl: "Vastgoed" }),
      href: "/real-estate-automation-netherlands",
    },
    {
      label: copy({
        en: "SaaS / digital product",
        es: "SaaS / producto digital",
        nl: "SaaS / digitaal product",
      }),
      href: "/product-design-development",
    },
    {
      label: copy({ en: "Ecommerce / retail", es: "Ecommerce / retail", nl: "Ecommerce / retail" }),
      href: "/ai-consulting",
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
        <section className="relative max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-hunter-green/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-hunter-orange/10 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-hunter-green">
              {isSpanish ? "Servicios" : isDutch ? "Services" : "Services"}
            </p>
            <h1 className="text-5xl font-black leading-none tracking-tighter md:text-7xl">
              {isSpanish
                ? "Encuentra el punto de entrada correcto para tu equipo."
                : isDutch
                  ? "Vind het juiste startpunt voor je team."
                  : "Find the right entry point for your team."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {isSpanish
                ? "No todos los equipos necesitan lo mismo. Algunos necesitan estrategia, otros implementación, otros integración o liderazgo técnico. Esta página ordena las opciones por situación, servicio, capacidad y sector."
                : isDutch
                  ? "Niet elk team heeft hetzelfde nodig. Sommigen hebben strategie nodig, anderen implementatie, integratie of technisch leiderschap. Deze pagina ordent opties per situatie, dienst, capaciteit en sector."
                  : "Not every team needs the same thing. Some need strategy, others implementation, integration, or technical leadership. This page sorts the options by situation, service, capability, and sector."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest">
              <a
                href="#entry-points"
                className="rounded-full border border-hunter-green/30 px-4 py-2 text-hunter-green hover:bg-hunter-green hover:text-near-black"
              >
                {copy({
                  en: "Start by situation",
                  es: "Empezar por situación",
                  nl: "Start per situatie",
                })}
              </a>
              <a
                href="#services-list"
                className="rounded-full border border-white/10 px-4 py-2 text-gray-300 hover:border-hunter-orange hover:text-hunter-orange"
              >
                {copy({ en: "Services", es: "Servicios", nl: "Diensten" })}
              </a>
              <a
                href="#capabilities"
                className="rounded-full border border-white/10 px-4 py-2 text-gray-300 hover:border-hunter-orange hover:text-hunter-orange"
              >
                {copy({ en: "Capabilities", es: "Capacidades", nl: "Capaciteiten" })}
              </a>
              <a
                href="#industries"
                className="rounded-full border border-white/10 px-4 py-2 text-gray-300 hover:border-hunter-orange hover:text-hunter-orange"
              >
                {copy({ en: "Industries", es: "Industrias", nl: "Sectoren" })}
              </a>
            </div>
          </div>
        </section>

        <section id="entry-points" className="mt-20 scroll-mt-32">
          <SectionHeader
            eyebrow={copy({ en: "Start here", es: "Empieza aquí", nl: "Begin hier" })}
            title={copy({
              en: "Choose by situation.",
              es: "Elige por situación.",
              nl: "Kies per situatie.",
            })}
            desc={copy({
              en: "If you are not sure what to buy, start with the current bottleneck.",
              es: "Si no sabes qué contratar, empieza por el bloqueo actual.",
              nl: "Als je niet weet wat je moet kiezen, begin dan bij de huidige bottleneck.",
            })}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {entryPoints.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-hunter-green/50 hover:bg-hunter-green/[0.04]"
              >
                <p className="mb-4 text-[11px] font-black uppercase tracking-widest text-hunter-orange">
                  {item.situation}
                </p>
                <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-hunter-green">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="services-list" className="mt-24 scroll-mt-32">
          <SectionHeader
            eyebrow={copy({ en: "Services", es: "Servicios", nl: "Diensten" })}
            title={copy({
              en: "What you can hire.",
              es: "Lo que puedes contratar.",
              nl: "Wat je kunt inhuren.",
            })}
            desc={copy({
              en: "Commercial entry points with clear outcomes, not a grab bag of technologies.",
              es: "Puntos de entrada comerciales con resultados claros, no una lista de tecnologías sueltas.",
              nl: "Commerciële startpunten met duidelijke uitkomsten, geen losse lijst technologieën.",
            })}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>

        <section
          id="capabilities"
          className="mt-24 scroll-mt-32 rounded-[2rem] border border-white/10 bg-[#080808] p-8 md:p-10"
        >
          <SectionHeader
            eyebrow={copy({ en: "Capabilities", es: "Capacidades", nl: "Capaciteiten" })}
            title={copy({
              en: "How we deliver.",
              es: "Cómo lo ejecutamos.",
              nl: "Hoe we leveren.",
            })}
            desc={copy({
              en: "The technical strengths behind the services: useful when you already know what layer needs help.",
              es: "Las fortalezas técnicas detrás de los servicios: útil cuando ya sabes qué capa necesita ayuda.",
              nl: "De technische sterktes achter de diensten: handig als je al weet welke laag hulp nodig heeft.",
            })}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-bold text-gray-200"
              >
                {capability}
              </div>
            ))}
          </div>
        </section>

        <section id="industries" className="mt-24 scroll-mt-32">
          <SectionHeader
            eyebrow={copy({ en: "Industries", es: "Industrias", nl: "Sectoren" })}
            title={copy({ en: "Where this applies.", es: "Dónde aplica.", nl: "Waar dit past." })}
            desc={copy({
              en: "Sector pages translate the same capabilities into concrete operational use cases.",
              es: "Las páginas por sector traducen las mismas capacidades a casos operativos concretos.",
              nl: "Sectorpagina's vertalen dezelfde capaciteiten naar concrete operationele use cases.",
            })}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.href + industry.label}
                href={industry.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5 transition-all hover:border-hunter-orange/50 hover:bg-hunter-orange/[0.04]"
              >
                <span className="font-bold text-white group-hover:text-hunter-orange">
                  {industry.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-hunter-green transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <ContactSection title={contactCopy.title} description={contactCopy.description} />
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-hunter-green">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black leading-none tracking-tighter md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">{desc}</p>
    </div>
  );
}
