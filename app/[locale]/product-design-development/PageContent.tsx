import { Link } from "@/navigation";
import { StudioServiceShell } from "../_shared/StudioServicePage";
import { getLocaleValue } from "../_shared/localeCopy";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";

const path = "/product-design-development";

export default function ProductDesignDevelopmentContent({ locale }: { locale: string }) {
  const copy = getLocaleValue(locale, {
    en: {
      eyebrow: "Product studio",
      title: "Brand-led product design",
      accent: "built to ship.",
      description:
        "Digital products, portals, and interfaces shaped around your brand, your users, and the operational reality behind the screen.",
      primaryCta: "Plan the product",
      secondaryCta: "View services",
      outcomesTitle: "A product layer that feels clear, ownable, and distinct.",
      outcomes: [
        "Product flows mapped around the decisions users actually need to make.",
        "Interface direction that carries brand identity without sacrificing speed or clarity.",
        "Frontend architecture that can grow beyond the first launch.",
        "A delivery plan with scope, milestones, and handoff documentation.",
      ],
      phases: ["Product framing", "Interface direction", "Production build"],
      layers: ["Brand system", "User journey", "Interaction model", "Next.js surface"],
      processTitle: "How the work flows",
      process: [
        {
          number: "01",
          name: "Discovery & Framing",
          desc: "We understand the business context, user decisions, operational constraints, and brand direction. No assumptions — just a clear brief.",
          duration: "3-5 days",
        },
        {
          number: "02",
          name: "Direction & Architecture",
          desc: "We define the product's promise, map core user flows, establish the visual system, and set the technical approach.",
          duration: "1-2 weeks",
        },
        {
          number: "03",
          name: "Interface Design",
          desc: "High-fidelity direction for the core surfaces — key screens, states, components, and interaction patterns. Design that can actually ship.",
          duration: "2-3 weeks",
        },
        {
          number: "04",
          name: "Production Build",
          desc: "Frontend implementation with the same rigor as the design. Every state, every edge case, every responsive breakpoint.",
          duration: "3-6 weeks",
        },
        {
          number: "05",
          name: "Handoff & Launch",
          desc: "Documentation, asset export, and go-live support. The product is ready to own, iterate, and grow.",
          duration: "1 week",
        },
      ],
      portfolioTitle: "What we've built",
      portfolio: [
        {
          title: "B2B SaaS Operations Dashboard",
          desc: "Replaced a 12-year-old legacy system with a clean, role-based dashboard for field service teams. Reduced task completion time by 40%.",
          scope: "Full product redesign + Next.js rebuild",
          timeline: "4 months",
        },
        {
          title: "Healthcare Patient Portal",
          desc: "Built a multilingual patient portal with appointment booking, medical history, and secure messaging. 15,000 active users in first quarter.",
          scope: "Product design + frontend + n8n backend",
          timeline: "6 months",
        },
        {
          title: "E-commerce Checkout Redesign",
          desc: "Redesigned checkout for a fashion brand to reduce abandonment. Mobile conversion increased from 34% to 67%.",
          scope: "UX audit + design + implementation",
          timeline: "8 weeks",
        },
        {
          title: "Real Estate Agent CRM",
          desc: "Built a custom CRM for a Dutch real estate agency with property listings, client tracking, and automated follow-ups.",
          scope: "Full product + backend automation",
          timeline: "5 months",
        },
      ],
      deliverablesTitle: "What you receive",
      deliverables: [
        "Product brief and user flow documentation",
        "Visual design system with component library",
        "Interactive prototype for key user journeys",
        "Production-ready Next.js implementation",
        "Launch checklist and go-live support",
        "30-day post-launch bugfix window",
      ],
      whyUsTitle: "Why product design with us is different",
      whyUs: [
        "Design and frontend engineering under the same roof — no disconnect between what is designed and what is built.",
        "Brand-first approach — the visual direction is established before the first screen is designed, not retrofitted after.",
        "Operational mindset — every interface decision is made with awareness of the system's reality, not just ideal user behavior.",
        "Frontend architecture built for iteration — the first release doesn't paint you into a corner.",
      ],
      pricing: {
        badge: "Engagement options",
        title: "How we structure the work",
        subtitle: "Three formats depending on where you are and what you need.",
        discovery: {
          name: "Discovery & Direction",
          price: "From €4,500",
          timeline: "2-3 weeks",
          desc: "For teams that have a product idea but need clarity on direction, user flows, and technical approach before committing to a full build.",
          recommended: true,
          includes: [
            "Product framing workshop",
            "User flow mapping",
            "Visual direction",
            "Technical architecture outline",
            "Prioritized roadmap",
            "Stakeholder presentation deck",
          ],
          cta: "Start discovery",
        },
        designBuild: {
          name: "Design + Build",
          price: "From €18,000",
          timeline: "2-4 months",
          desc: "For products that need full design direction and production implementation.",
          includes: [
            "Everything in Discovery",
            "Full interface design",
            "Interactive prototype",
            "Next.js production build",
            "Launch support",
            "60-day post-launch window",
          ],
          cta: "Start design + build",
        },
        ongoing: {
          name: "Ongoing Partnership",
          price: "From €6,000/month",
          timeline: "Ongoing",
          desc: "For teams that need consistent product design and engineering support as the product evolves.",
          includes: [
            "Weekly design sessions",
            "Frontend implementation",
            "Continuous product improvement",
            "Priority Slack access",
            "Monthly roadmap planning",
          ],
          cta: "Start partnership",
        },
      },
      audienceTitle: "Best fit",
      audiences: [
        {
          title: "Founders shaping a new product",
          desc: "You have a clear business direction, but need the product structure, interface, and first build to feel coherent from day one.",
        },
        {
          title: "Teams replacing a messy tool",
          desc: "You need a cleaner portal, dashboard, or workflow surface that reduces operational friction instead of creating another internal workaround.",
        },
        {
          title: "Brands that cannot look generic",
          desc: "You want a product experience that carries the identity of the business without becoming decorative or slow to ship.",
        },
      ],
      scopeTitle: "What the engagement covers",
      scope: [
        "Product framing, user journeys, and decision flows before visual design starts.",
        "A high-signal interface direction with layouts, states, components, and interaction patterns.",
        "Production-ready frontend implementation in the right level of fidelity for the launch stage.",
        "Handoff notes, launch priorities, and the next-build roadmap so the product can keep moving.",
      ],
      detailTitle: "From idea to shippable surface",
      details: [
        {
          title: "Shape the promise",
          desc: "We clarify what the product needs to prove, what users need to decide, and where the interface should remove hesitation.",
        },
        {
          title: "Design the operating layer",
          desc: "The visual system, flows, forms, dashboards, empty states, and responsive behavior are designed around real usage.",
        },
        {
          title: "Build for the next iteration",
          desc: "The frontend is structured so the first release does not trap the next one in brittle one-off decisions.",
        },
      ],
      faqTitle: "Common questions",
      faqs: [
        {
          q: "Can this start without a finished brand system?",
          a: "Yes. We can work from a lightweight identity direction and turn it into product rules while the interface takes shape.",
        },
        {
          q: "Is this design only, or design plus build?",
          a: "Both are possible, but the strongest fit is design with implementation judgment so the product direction remains shippable.",
        },
        {
          q: "What do we receive at the end?",
          a: "A clear product direction, key screens and states, implementation work where agreed, and documentation for what should happen next.",
        },
        {
          q: "How do you handle revisions?",
          a: "Each phase has a defined review cycle. We work in iterations, not open-ended revision loops. Feedback is gathered, prioritized, and incorporated.",
        },
        {
          q: "Can you work with our existing design team?",
          a: "Yes. We can supplement your team for specific phases or deliverables rather than running the full engagement.",
        },
      ],
    },
    es: {
      eyebrow: "Estudio de producto",
      title: "Diseño de producto con identidad",
      accent: "listo para lanzar.",
      description:
        "Productos digitales, portales e interfaces construidos alrededor de tu marca, tus usuarios y la realidad operativa detrás de la pantalla.",
      primaryCta: "Planificar producto",
      secondaryCta: "Ver servicios",
      outcomesTitle: "Una capa de producto clara, propia y diferenciada.",
      outcomes: [
        "Flujos definidos alrededor de las decisiones reales del usuario.",
        "Dirección visual con identidad sin perder velocidad ni claridad.",
        "Arquitectura frontend preparada para crecer después del lanzamiento.",
        "Plan de entrega con alcance, hitos y documentación de handoff.",
      ],
      phases: ["Encuadre", "Dirección de interfaz", "Construcción"],
      layers: [
        "Sistema de marca",
        "Journey de usuario",
        "Modelo de interacción",
        "Superficie Next.js",
      ],
      processTitle: "Cómo fluye el trabajo",
      process: [
        {
          number: "01",
          name: "Discovery y Encuadre",
          desc: "Entendemos el contexto de negocio, las decisiones del usuario, las restricciones operativas y la dirección de marca. Sin suposiciones — solo un brief claro.",
          duration: "3-5 días",
        },
        {
          number: "02",
          name: "Dirección y Arquitectura",
          desc: "Definimos la promesa del producto, mapeamos flujos de usuario, establecemos el sistema visual y configuramos el enfoque técnico.",
          duration: "1-2 semanas",
        },
        {
          number: "03",
          name: "Diseño de Interfaz",
          desc: "Dirección de alta fidelidad para las superficies core — pantallas clave, estados, componentes y patrones de interacción. Diseño que realmente puede lanzarse.",
          duration: "2-3 semanas",
        },
        {
          number: "04",
          name: "Construcción en Producción",
          desc: "Implementación frontend con el mismo rigor que el diseño. Cada estado, cada caso límite, cada breakpoint responsive.",
          duration: "3-6 semanas",
        },
        {
          number: "05",
          name: "Handoff y Lanzamiento",
          desc: "Documentación, exportación de assets y soporte de go-live. El producto está listo para poseer, iterar y crecer.",
          duration: "1 semana",
        },
      ],
      portfolioTitle: "Lo que hemos construido",
      portfolio: [
        {
          title: "Dashboard SaaS B2B de Operaciones",
          desc: "Reemplazamos un sistema legacy de 12 años con un dashboard limpio y basado en roles para equipos de servicio de campo. Reducción del tiempo de completación de tareas en 40%.",
          scope: "Rediseño de producto completo + rebuild en Next.js",
          timeline: "4 meses",
        },
        {
          title: "Portal de Pacientes Healthcare",
          desc: "Construimos un portal de pacientes multilingüe con reserva de citas, historial médico y mensajería segura. 15.000 usuarios activos en el primer trimestre.",
          scope: "Diseño de producto + frontend + backend n8n",
          timeline: "6 meses",
        },
        {
          title: "Rediseño de Checkout E-commerce",
          desc: "Rediseñamos checkout para una marca de moda para reducir abandono. Conversión móvil aumentó de 34% a 67%.",
          scope: "Auditoría UX + diseño + implementación",
          timeline: "8 semanas",
        },
        {
          title: "CRM para Agentes Inmobiliarios",
          desc: "Construimos un CRM personalizado para una agencia inmobiliaria holandesa con listados de propiedades, seguimiento de clientes y automatizaciones.",
          scope: "Producto completo + automatización backend",
          timeline: "5 meses",
        },
      ],
      deliverablesTitle: "Qué recibes",
      deliverables: [
        "Brief de producto y documentación de flujos de usuario",
        "Sistema de diseño visual con librería de componentes",
        "Prototipo interactivo para journeys clave",
        "Implementación Next.js lista para producción",
        "Checklist de lanzamiento y soporte",
        "30 días de ventana post-lanzamiento para bugs",
      ],
      whyUsTitle: "Por qué el diseño de producto con nosotros es diferente",
      whyUs: [
        "Diseño e ingeniería frontend bajo el mismo techo — sin desconexión entre lo que se diseña y lo que se construye.",
        "Enfoque brand-first — la dirección visual se establece antes de diseñar la primera pantalla, no se añade después.",
        "Mentalidad operativa — cada decisión de interfaz se toma con consciencia de la realidad del sistema, no solo del comportamiento ideal del usuario.",
        "Arquitectura frontend preparada para iteración — la primera versión no te pinta en un rincón.",
      ],
      pricing: {
        badge: "Opciones de participación",
        title: "Cómo estructuramos el trabajo",
        subtitle: "Tres formatos dependiendo de dónde estás y qué necesitas.",
        discovery: {
          name: "Discovery y Dirección",
          price: "Desde €4.500",
          timeline: "2-3 semanas",
          desc: "Para equipos que tienen una idea de producto pero necesitan claridad en dirección, flujos de usuario y enfoque técnico antes de comprometerse con una build completa.",
          recommended: true,
          includes: [
            "Workshop de framing de producto",
            "Mapeo de flujos de usuario",
            "Dirección visual",
            "Outline de arquitectura técnica",
            " roadmap priorizado",
            "Deck para stakeholders",
          ],
          cta: "Iniciar discovery",
        },
        designBuild: {
          name: "Diseño + Construcción",
          price: "Desde €18.000",
          timeline: "2-4 meses",
          desc: "Para productos que necesitan dirección de diseño completa e implementación en producción.",
          includes: [
            "Todo lo de Discovery",
            "Diseño de interfaz completo",
            "Prototipo interactivo",
            "Build en producción con Next.js",
            "Soporte de lanzamiento",
            "Ventana de 60 días post-lanzamiento",
          ],
          cta: "Iniciar diseño + construcción",
        },
        ongoing: {
          name: "Colaboración Continua",
          price: "Desde €6.000/mes",
          timeline: "Continuo",
          desc: "Para equipos que necesitan soporte consistente de diseño e ingeniería de producto a medida que el producto evoluciona.",
          includes: [
            "Sesiones semanales de diseño",
            "Implementación frontend",
            "Mejora continua de producto",
            "Acceso prioritario a Slack",
            "Planificación mensual de roadmap",
          ],
          cta: "Iniciar colaboración",
        },
      },
      audienceTitle: "Para quién encaja",
      audiences: [
        {
          title: "Founders creando un producto nuevo",
          desc: "Tienes una dirección de negocio clara, pero necesitas estructura de producto, interfaz y primera versión coherentes desde el primer día.",
        },
        {
          title: "Equipos reemplazando una herramienta confusa",
          desc: "Necesitas un portal, dashboard o flujo más claro que reduzca fricción operativa en vez de crear otro parche interno.",
        },
        {
          title: "Marcas que no pueden parecer genéricas",
          desc: "Quieres una experiencia de producto con identidad propia sin convertirla en algo decorativo o lento de lanzar.",
        },
      ],
      scopeTitle: "Qué cubre el trabajo",
      scope: [
        "Encuadre de producto, journeys y flujos de decisión antes de diseñar pantallas.",
        "Dirección de interfaz con layouts, estados, componentes y patrones de interacción.",
        "Implementación frontend lista para producción en el nivel de fidelidad adecuado para el lanzamiento.",
        "Notas de handoff, prioridades de lanzamiento y roadmap para la siguiente iteración.",
      ],
      detailTitle: "De idea a superficie lanzable",
      details: [
        {
          title: "Definir la promesa",
          desc: "Aclaramos qué debe demostrar el producto, qué decisiones toma el usuario y dónde la interfaz debe eliminar dudas.",
        },
        {
          title: "Diseñar la capa operativa",
          desc: "Sistema visual, flujos, formularios, dashboards, estados vacíos y responsive se diseñan alrededor del uso real.",
        },
        {
          title: "Construir para iterar",
          desc: "El frontend se estructura para que la primera versión no bloquee la siguiente con decisiones frágiles.",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
        {
          q: "¿Podemos empezar sin un sistema de marca completo?",
          a: "Sí. Podemos partir de una dirección ligera de identidad y convertirla en reglas de producto mientras la interfaz toma forma.",
        },
        {
          q: "¿Es solo diseño o diseño más desarrollo?",
          a: "Ambos son posibles, pero el mejor encaje es diseño con criterio de implementación para mantener la dirección lanzable.",
        },
        {
          q: "¿Qué recibimos al final?",
          a: "Dirección de producto clara, pantallas y estados clave, implementación donde se acuerde y documentación para el siguiente paso.",
        },
        {
          q: "¿Cómo manejáis las revisiones?",
          a: "Cada fase tiene un ciclo de revisión definido. Trabajamos en iteraciones, no en bucles de revisión abiertos. El feedback se recoge, prioriza e incorpora.",
        },
        {
          q: "¿Podéis trabajar con nuestro equipo de diseño existente?",
          a: "Sí. Podemos complementar tu equipo para fases o entregas específicas en lugar de ejecutar el engagement completo.",
        },
      ],
    },
    nl: {
      eyebrow: "Productstudio",
      title: "Merkgedreven productontwerp",
      accent: "klaar om te shippen.",
      description:
        "Digitale producten, portals en interfaces opgebouwd rond je merk, je gebruikers en de operationele realiteit achter het scherm.",
      primaryCta: "Plan het product",
      secondaryCta: "Bekijk services",
      outcomesTitle: "Een productlaag die helder, eigen en onderscheidend voelt.",
      outcomes: [
        "Productflows rond beslissingen die gebruikers echt moeten nemen.",
        "Interfacerichting met merkidentiteit zonder snelheid te verliezen.",
        "Frontendarchitectuur die na de eerste lancering kan doorgroeien.",
        "Een deliveryplan met scope, mijlpalen en overdrachtsdocumentatie.",
      ],
      phases: ["Productkader", "Interfacerichting", "Productiebouw"],
      layers: ["Merksysteem", "User journey", "Interactiemodel", "Next.js surface"],
      processTitle: "Hoe het werk stroomt",
      process: [
        {
          number: "01",
          name: "Discovery & Framing",
          desc: "We begrijpen de businesscontext, gebruikersbeslissingen, operationele beperkingen en merkrichting. Geen aannames — alleen een duidelijk brief.",
          duration: "3-5 dagen",
        },
        {
          number: "02",
          name: "Richting & Architectuur",
          desc: "We definiëren de belofte van het product, mapen kerngebruikersstromen, stellen het visuele systeem in en bepalen de technische aanpak.",
          duration: "1-2 weken",
        },
        {
          number: "03",
          name: "Interface Design",
          desc: "High-fidelity richting voor de kernoppervlakken — belangrijke schermen, states, componenten en interactiepatronen. Design dat echt kan shippen.",
          duration: "2-3 weken",
        },
        {
          number: "04",
          name: "Productie Build",
          desc: "Frontend implementatie met dezelfde strengheid als het design. Elke state, elk edge case, elk responsive breakpoint.",
          duration: "3-6 weken",
        },
        {
          number: "05",
          name: "Handoff & Lancering",
          desc: "Documentatie, asset-export en go-live ondersteuning. Het product is klaar om te bezitten, te itereren en te groeien.",
          duration: "1 week",
        },
      ],
      portfolioTitle: "Wat we gebouwd hebben",
      portfolio: [
        {
          title: "B2B SaaS Operaties Dashboard",
          desc: "Verving een 12 jaar oud legacy-systeem met een clean, role-based dashboard voor fieldserviceteams. Taakcompletion tijd met 40% verminderd.",
          scope: "Volledig product redesign + Next.js rebuild",
          timeline: "4 maanden",
        },
        {
          title: "Healthcare Patiënt Portal",
          desc: "Bouwide een meertalige patiëntportal met afsprakenboeking, medische geschiedenis en beveiligde messaging. 15.000 actieve gebruikers in eerste kwartaal.",
          scope: "Product design + frontend + n8n backend",
          timeline: "6 maanden",
        },
        {
          title: "E-commerce Checkout Redesign",
          desc: "Redesignde checkout voor een модемmerk om abandoned carts te verminderen. Mobiele conversie steeg van 34% naar 67%.",
          scope: "UX audit + design + implementatie",
          timeline: "8 weken",
        },
        {
          title: "Real Estate Agent CRM",
          desc: "Bouwide een op maat CRM voor een Nederlands makelaarskantoor met property listings, klanttracking en geautomatiseerde follow-ups.",
          scope: "Volledig product + backend automatisering",
          timeline: "5 maanden",
        },
      ],
      deliverablesTitle: "Wat je ontvangt",
      deliverables: [
        "Product brief en user flow documentatie",
        "Visueel designsysteem met componentenbibliotheek",
        "Interactief prototype voor belangrijke gebruikersreizen",
        "Productieklare Next.js implementatie",
        "Lancering checklist en ondersteuning",
        "30 dagen post-lancering bugfix venster",
      ],
      whyUsTitle: "Waarom productontwerp met ons anders is",
      whyUs: [
        "Design en frontend engineering onder één dak — geen disconnectie tussen wat ontworpen en wat gebouwd wordt.",
        "Brand-first aanpak — de visuele richting wordt vastgesteld vóór het eerste scherm wordt ontworpen, niet achteraf toegevoegd.",
        "Operationele mindset — elke interface-beslissing wordt genomen met bewustzijn van de realiteit van het systeem, niet alleen van ideaal gebruikersgedrag.",
        "Frontend architectuur gebouwd voor iteratie — de eerste release tekent je niet in een hoek.",
      ],
      pricing: {
        badge: "Deelname-opties",
        title: "Hoe we het werk structureren",
        subtitle: "Drie formaten afhankelijk van waar je bent en wat je nodig hebt.",
        discovery: {
          name: "Discovery & Richting",
          price: "Vanaf €4.500",
          timeline: "2-3 weken",
          desc: "Voor teams die een productidee hebben maar duidelijkheid nodig hebben over richting, gebruikersstromen en technische aanpak voordat ze zich committeren aan een volledige build.",
          recommended: true,
          includes: [
            "Product framing workshop",
            "User flow mapping",
            "Visuele richting",
            "Technische architectuur outline",
            "Geprioriteerde roadmap",
            "Stakeholder presentatiedeck",
          ],
          cta: "Start discovery",
        },
        designBuild: {
          name: "Design + Build",
          price: "Vanaf €18.000",
          timeline: "2-4 maanden",
          desc: "Voor producten die volledige ontwerprijding en productie-implementatie nodig hebben.",
          includes: [
            "Alles van Discovery",
            "Volledige interface design",
            "Interactief prototype",
            "Next.js productie build",
            "Lancering ondersteuning",
            "60 dagen post-lancering venster",
          ],
          cta: "Start design + build",
        },
        ongoing: {
          name: "Doorlopende Samenwerking",
          price: "Vanaf €6.000/maand",
          timeline: "Doorlopend",
          desc: "Voor teams die consistent productontwerp en engineering ondersteuning nodig hebben terwijl het product evolueert.",
          includes: [
            "Wekelijkse design sessies",
            "Frontend implementatie",
            "Continu product improvement",
            "Prioriteit Slack access",
            "Maandelijkse roadmap planning",
          ],
          cta: "Start samenwerking",
        },
      },
      audienceTitle: "Beste fit",
      audiences: [
        {
          title: "Founders die een nieuw product vormen",
          desc: "Je hebt een duidelijke businessrichting, maar hebt productstructuur, interface en eerste build nodig die vanaf dag een kloppen.",
        },
        {
          title: "Teams die een rommelige tool vervangen",
          desc: "Je hebt een helderder portal, dashboard of workflowsurface nodig die operationele frictie vermindert.",
        },
        {
          title: "Merken die niet generiek mogen ogen",
          desc: "Je wilt een productervaring met eigen identiteit zonder dat die decoratief of traag te shippen wordt.",
        },
      ],
      scopeTitle: "Wat de samenwerking dekt",
      scope: [
        "Productkader, user journeys en beslisflows voordat visueel ontwerp start.",
        "Interfacerichting met layouts, states, componenten en interactiepatronen.",
        "Productieklare frontendimplementatie op het juiste detailniveau voor de lancering.",
        "Handoff-notities, launchprioriteiten en roadmap voor de volgende iteratie.",
      ],
      detailTitle: "Van idee naar shippable surface",
      details: [
        {
          title: "De belofte scherpstellen",
          desc: "We verduidelijken wat het product moet bewijzen, welke beslissingen gebruikers nemen en waar de interface twijfel wegneemt.",
        },
        {
          title: "De operationele laag ontwerpen",
          desc: "Visueel systeem, flows, formulieren, dashboards, empty states en responsive gedrag worden rond echt gebruik ontworpen.",
        },
        {
          title: "Bouwen voor de volgende iteratie",
          desc: "De frontend wordt zo opgezet dat de eerste release de volgende niet blokkeert met breekbare keuzes.",
        },
      ],
      faqTitle: "Veelgestelde vragen",
      faqs: [
        {
          q: "Kunnen we starten zonder compleet merksysteem?",
          a: "Ja. We kunnen vanuit een lichte identiteitsrichting werken en die vertalen naar productregels terwijl de interface vorm krijgt.",
        },
        {
          q: "Is dit alleen design, of design plus build?",
          a: "Beide kan, maar de sterkste fit is design met implementatieoordeel zodat de productrichting shippable blijft.",
        },
        {
          q: "Wat ontvangen we aan het einde?",
          a: "Een duidelijke productrichting, belangrijke schermen en states, afgesproken implementatiewerk en documentatie voor de volgende stap.",
        },
        {
          q: "Hoe gaan jullie om met revisies?",
          a: "Elke fase heeft een gedefinieerde reviewcyclus. We werken in iteraties, niet in open-ended revisielussen. Feedback wordt verzameld, geprioriteerd en verwerkt.",
        },
        {
          q: "Kunnen jullie met ons bestaande designteam werken?",
          a: "Ja. We kunnen je team aanvullen voor specifieke fases of deliverables in plaats van de volledige engagement te draaien.",
        },
      ],
    },
  });

  return (
    <StudioServiceShell locale={locale} path={path} breadcrumbName={copy.title}>
      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute left-0 top-20 h-[540px] w-[540px] rounded-full bg-hunter-green/[0.07] blur-[150px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-hunter-orange/[0.08] blur-[130px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-hunter-green">
              {copy.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl">
              {copy.title} <span className="text-hunter-orange">{copy.accent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              {copy.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-hunter-green px-8 py-4 text-sm font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white transition-colors hover:border-hunter-orange/40 hover:text-hunter-orange"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
          <ProductCanvas layers={copy.layers} />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <IdentityLayer outcomesTitle={copy.outcomesTitle} outcomes={copy.outcomes} />
          <LaunchBoard phases={copy.phases} />
        </div>
      </section>

      <ProcessSection title={copy.processTitle} items={copy.process} />
      <PortfolioSection title={copy.portfolioTitle} items={copy.portfolio} />
      <DeliverablesSection title={copy.deliverablesTitle} items={copy.deliverables} />
      <WhyUsSection title={copy.whyUsTitle} items={copy.whyUs} />
      <PricingSection pricing={copy.pricing} />

      <AudienceFit title={copy.audienceTitle} items={copy.audiences} />
      <EngagementScope title={copy.scopeTitle} items={copy.scope} />
      <DeliveryDetail title={copy.detailTitle} items={copy.details} />
      <DecisionFaq title={copy.faqTitle} items={copy.faqs} />
    </StudioServiceShell>
  );
}

function ProcessSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ number: string; name: string; desc: string; duration: string }>;
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          Process
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {items.map((item) => (
            <article
              key={item.number}
              className="relative rounded-3xl border border-white/10 bg-near-black p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-hunter-green/30 bg-hunter-green/10 font-mono text-sm font-black text-hunter-green">
                {item.number}
              </div>
              <h3 className="mt-4 text-lg font-black text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              <p className="mt-4 font-mono text-xs text-hunter-orange">{item.duration}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; desc: string; scope: string; timeline: string }>;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Portfolio
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-near-black p-8"
            >
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="rounded-full border border-hunter-green/30 bg-hunter-green/10 px-3 py-1 font-mono text-xs text-hunter-green">
                  {item.scope}
                </span>
                <span className="rounded-full border border-hunter-orange/30 bg-hunter-orange/10 px-3 py-1 font-mono text-xs text-hunter-orange">
                  {item.timeline}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
              Deliverables
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
              {title}
            </h2>
          </div>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-4 text-sm text-gray-300">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-hunter-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Why Us
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hunter-green/10 font-mono text-sm font-black text-hunter-green">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type PricingPlan = {
  name: string;
  price: string;
  timeline: string;
  desc: string;
  recommended?: boolean;
  includes: string[];
  cta: string;
};

function PricingSection({
  pricing,
}: {
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    discovery: PricingPlan;
    designBuild: PricingPlan;
    ongoing: PricingPlan;
  };
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
            {pricing.badge}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{pricing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{pricing.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[pricing.discovery, pricing.designBuild, pricing.ongoing].map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.recommended
                  ? "border-hunter-green/50 bg-hunter-green/[0.05]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-hunter-green/30 bg-hunter-green/10 px-4 py-1 font-mono text-xs font-black text-hunter-green">
                  Recommended
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-black text-white">{plan.name}</h3>
                <div className="mt-4 text-3xl font-black text-hunter-green">{plan.price}</div>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-500">
                  {plan.timeline}
                </p>
                <p className="mt-4 text-sm text-gray-400">{plan.desc}</p>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.includes.map((point: string) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-hunter-green" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`mt-8 block w-full rounded-xl py-4 text-center text-sm font-bold transition-colors ${
                  plan.recommended
                    ? "bg-hunter-green text-near-black hover:bg-white"
                    : "border border-white/20 text-white hover:border-hunter-green/50 hover:text-hunter-green"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceFit({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          AudienceFit
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-near-black p-7"
            >
              <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementScope({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="text-4xl font-black leading-none tracking-tighter md:text-5xl">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-hunter-green/20 bg-hunter-green/[0.05] p-6"
            >
              <p className="text-sm leading-relaxed text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryDetail({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          DeliveryDetail
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionFaq({ title, items }: { title: string; items: Array<{ q: string; a: string }> }) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          DecisionFaq
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-4">
          {items.map((item) => (
            <article key={item.q} className="rounded-3xl border border-white/10 bg-near-black p-6">
              <h3 className="text-xl font-black tracking-tight text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCanvas({ layers }: { layers: string[] }) {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080808] p-6 shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,230,162,0.14),transparent_28%),radial-gradient(circle_at_80%_68%,rgba(255,122,60,0.16),transparent_32%)]" />
      <div className="absolute left-8 top-8 text-[10px] font-black uppercase tracking-[0.28em] text-hunter-green/70">
        ProductCanvas
      </div>
      <div className="relative mt-16 grid h-[390px] grid-cols-6 grid-rows-6 gap-3">
        <div className="col-span-4 row-span-3 rounded-3xl border border-hunter-green/30 bg-hunter-green/[0.08] p-5">
          <p className="font-mono text-xs text-hunter-green">01 / PROMISE</p>
          <div className="mt-8 h-3 w-4/5 rounded-full bg-white/80" />
          <div className="mt-4 h-3 w-2/3 rounded-full bg-white/30" />
        </div>
        <div className="col-span-2 row-span-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs text-hunter-orange">STACK</p>
          <div className="mt-6 space-y-3">
            {layers.map((layer) => (
              <div
                key={layer}
                className="rounded-xl border border-white/10 bg-near-black px-3 py-2 text-xs text-gray-300"
              >
                {layer}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 row-span-3 rounded-3xl border border-hunter-orange/30 bg-hunter-orange/[0.08] p-5">
          <p className="font-mono text-xs text-hunter-orange">02 / FLOW</p>
          <div className="mt-8 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-2xl bg-white/10" />
            <div className="h-20 rounded-2xl bg-hunter-green/20" />
            <div className="h-20 rounded-2xl bg-white/10" />
          </div>
        </div>
        <div className="col-span-3 row-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-mono text-xs text-white/50">03 / HANDOFF</p>
          <div className="mt-6 h-2 w-full rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-hunter-green" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IdentityLayer({ outcomesTitle, outcomes }: { outcomesTitle: string; outcomes: string[] }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
        IdentityLayer
      </p>
      <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
        {outcomesTitle}
      </h2>
      <div className="mt-8 grid gap-3">
        {outcomes.map((outcome) => (
          <div
            key={outcome}
            className="rounded-2xl border border-white/10 bg-near-black p-5 text-sm leading-relaxed text-gray-300"
          >
            {outcome}
          </div>
        ))}
      </div>
    </div>
  );
}

function LaunchBoard({ phases }: { phases: string[] }) {
  return (
    <div className="grid gap-5">
      {phases.map((phase, index) => (
        <article
          key={phase}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-near-black p-7 transition-colors hover:border-hunter-green/40"
        >
          <div className="absolute right-6 top-4 font-mono text-7xl font-black text-white/[0.03]">
            0{index + 1}
          </div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
            LaunchBoard
          </p>
          <h3 className="mt-6 text-3xl font-black tracking-tight text-white group-hover:text-hunter-green">
            {phase}
          </h3>
          <div className="mt-6 h-px bg-gradient-to-r from-hunter-green/60 via-white/10 to-transparent" />
        </article>
      ))}
    </div>
  );
}
