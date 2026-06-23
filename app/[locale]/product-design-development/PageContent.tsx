"use client";

import { Link } from "@/navigation";
import { StudioServiceShell } from "../_shared/StudioServicePage";
import { getLocaleValue } from "../_shared/localeCopy";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { m } from "framer-motion";
import AnimatedSection from "@/components/layout/AnimatedSection";

const path = "/product-design-development";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardReveal = {
  hidden: { y: 22, opacity: 0, scale: 0.98 },
  visible: (index: number = 0) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProductDesignDevelopmentContent({ locale }: { locale: string }) {
  const copy = getLocaleValue(locale, {
    en: {
      eyebrow: "Product, brand & frontend studio",
      title: "Digital products with a point of view",
      accent: "built to become real.",
      description:
        "We shape the product strategy, brand expression, UX/UI system, and production frontend together, so your portal, dashboard, SaaS product, or customer experience feels ownable from the first interaction and solid after launch.",
      primaryCta: "Shape the product",
      secondaryCta: "Explore services",
      labels: {
        process: "Process",
        portfolio: "Product examples",
        deliverables: "Deliverables",
        whyUs: "Why us",
        audience: "Best fit",
        details: "Product depth",
        faq: "FAQ",
        canvas: "Product system",
        promise: "01 / Promise",
        stack: "Stack",
        flow: "02 / Flow",
        handoff: "03 / Launch",
        identity: "Identity layer",
        launch: "Build phases",
        recommended: "Recommended",
      },
      outcomesTitle: "A product experience people can understand, remember, and use.",
      outcomes: [
        "A clear product promise, mapped to the real decisions users need to make.",
        "A visual direction that carries your brand into the product without turning the interface into decoration.",
        "A UX/UI system with screens, states, components, and interaction patterns ready for implementation.",
        "A frontend foundation that can survive the second release, the third feature, and the next team member.",
      ],
      phases: ["Product strategy", "Brand interface", "Frontend build"],
      layers: ["Brand rules", "User decisions", "Interaction system", "Next.js product"],
      processTitle: "From idea to product surface",
      process: [
        {
          number: "01",
          name: "Product & Brand Framing",
          desc: "We clarify the business goal, the audience, the brand signal, and the decisions the product needs to support. The result is a focused product brief, not a moodboard with guesses.",
          duration: "3-5 days",
        },
        {
          number: "02",
          name: "UX Direction & Architecture",
          desc: "We map the core journeys, define the information structure, decide what each screen must prove, and set the technical path before high-fidelity design starts.",
          duration: "1-2 weeks",
        },
        {
          number: "03",
          name: "Visual Product System",
          desc: "We turn strategy into high-fidelity screens, states, components, empty states, responsive rules, and interaction details that feel like your brand and behave like a real product.",
          duration: "2-3 weeks",
        },
        {
          number: "04",
          name: "Frontend Production",
          desc: "We build the agreed product surface with the same care as the design: responsive layouts, motion, states, edge cases, accessibility, and maintainable Next.js structure.",
          duration: "3-6 weeks",
        },
        {
          number: "05",
          name: "Launch & Next Iteration",
          desc: "We prepare the handoff, launch checklist, implementation notes, and next-build priorities so the product can be owned, extended, and improved after release.",
          duration: "1 week",
        },
      ],
      portfolioTitle: "The kind of product work this fits",
      portfolio: [
        {
          title: "B2B SaaS Operations Dashboard",
          desc: "A role-based operations dashboard that turned legacy workflows into a cleaner product surface for field teams, managers, and back-office staff.",
          scope: "Full product redesign + Next.js rebuild",
          timeline: "4 months",
        },
        {
          title: "Healthcare Patient Portal",
          desc: "A multilingual patient portal for bookings, medical history, and secure messaging, designed around clarity, trust, and low-friction daily use.",
          scope: "Product design + frontend + n8n backend",
          timeline: "6 months",
        },
        {
          title: "E-commerce Checkout Redesign",
          desc: "A mobile-first checkout redesign for a fashion brand, focused on reducing hesitation, making payment steps obvious, and carrying the brand through purchase.",
          scope: "UX audit + design + implementation",
          timeline: "8 weeks",
        },
        {
          title: "Real Estate Agent CRM",
          desc: "A custom CRM for a Dutch real estate team, combining property workflows, client context, and automated follow-ups in one branded internal product.",
          scope: "Full product + backend automation",
          timeline: "5 months",
        },
      ],
      deliverablesTitle: "What leaves the studio",
      deliverables: [
        "Product strategy brief with positioning, priorities, and user decisions",
        "UX flow documentation for the journeys that matter most",
        "Brand-led interface system with core screens, states, and components",
        "Interactive prototype for the highest-risk user paths",
        "Production-ready Next.js frontend where build is in scope",
        "Launch checklist, handoff notes, and post-launch support window",
      ],
      whyUsTitle: "Why this is not just another design handoff",
      whyUs: [
        "Strategy, brand, UX/UI, and frontend live in the same conversation, so the product does not lose quality between Figma and production.",
        "The brand is translated into product behavior before screens are polished, so the interface feels ownable instead of skinned.",
        "Every flow is designed around real operations: permissions, messy data, edge cases, handoffs, and the people who use the product under pressure.",
        "The frontend is structured for iteration, so the first release does not become a fragile one-off that slows down the second.",
      ],
      pricing: {
        badge: "Engagement options",
        title: "How we structure the work",
        subtitle:
          "Three ways to work together, depending on how much clarity, design depth, and production support you need. Every full build starts with discovery so scope, risk, and delivery effort are based on the actual product, not a guess.",
        discovery: {
          name: "Discovery & Direction",
          price: "From €4,800",
          timeline: "2-3 weeks",
          desc: "For teams with a strong product idea, but not yet enough clarity on positioning, UX flows, visual direction, scope, or technical path.",
          recommended: true,
          includes: [
            "Product and brand framing workshop",
            "Core user decision mapping",
            "UX flow and information architecture",
            "Visual direction for the product surface",
            "Technical architecture outline",
            "Prioritized delivery roadmap",
          ],
          cta: "Start with discovery",
        },
        designBuild: {
          name: "Design + Build",
          price: "From €24,000",
          timeline: "2-4 months",
          desc: "For teams that need the product shaped, designed, and built as one coherent release instead of split across disconnected vendors.",
          includes: [
            "Everything in Discovery",
            "Full UX/UI system for core surfaces",
            "Interactive prototype for key journeys",
            "Production Next.js frontend",
            "Responsive states, motion, and edge cases",
            "Launch support and 60-day post-launch window",
          ],
          cta: "Plan design + build",
        },
        ongoing: {
          name: "Ongoing Partnership",
          price: "From €6,500/month",
          timeline: "Ongoing",
          desc: "For teams that already have momentum and need senior product design plus frontend execution as the roadmap evolves.",
          includes: [
            "Weekly product and design sessions",
            "Frontend implementation capacity",
            "Continuous UX/UI improvement",
            "Priority async support",
            "Monthly product roadmap planning",
          ],
          cta: "Discuss partnership",
        },
      },
      audienceTitle: "Best fit",
      audiences: [
        {
          title: "Founders turning an idea into a real product",
          desc: "You know the business opportunity, but need the product strategy, brand expression, UX, and first frontend to come together with discipline.",
        },
        {
          title: "Teams replacing messy internal software",
          desc: "You need a portal, dashboard, CRM, or workflow surface that removes friction instead of becoming the next workaround people avoid.",
        },
        {
          title: "Brands that cannot afford to feel generic",
          desc: "You want the product experience to express the identity of the business while staying fast, usable, accessible, and shippable.",
        },
      ],
      scopeTitle: "What the engagement covers",
      scope: [
        "Product framing, positioning, user journeys, and decision flows before visual design starts.",
        "A brand-led UX/UI direction with layouts, states, components, interaction patterns, and responsive behavior.",
        "Production-ready frontend implementation at the right level of fidelity for the launch stage.",
        "Handoff notes, launch priorities, and a next-build roadmap so the product keeps moving after release.",
      ],
      detailTitle: "What gets stronger through the work",
      details: [
        {
          title: "The product promise",
          desc: "We make the value of the product obvious: what it does, who it is for, why it matters, and where the interface must create confidence.",
        },
        {
          title: "The operating layer",
          desc: "Flows, forms, dashboards, permissions, empty states, and responsive behavior are designed around real usage, not a perfect demo path.",
        },
        {
          title: "The next iteration",
          desc: "The frontend is structured so new features, new content, and new user feedback can be absorbed without rebuilding the product from scratch.",
        },
      ],
      faqTitle: "Common questions",
      faqs: [
        {
          q: "Can this start without a finished brand system?",
          a: "Yes. We can start from a lightweight identity direction and translate it into product rules while the interface takes shape. If the brand needs more definition, we make that explicit early.",
        },
        {
          q: "Is this design only, or design plus build?",
          a: "Both are possible. The strongest fit is design with implementation judgment, because product decisions stay grounded in what can be built, maintained, and launched.",
        },
        {
          q: "What do we receive at the end?",
          a: "A clear product direction, UX flows, key screens and states, component rules, agreed implementation work, and documentation for launch and the next iteration.",
        },
        {
          q: "How do you handle revisions?",
          a: "Each phase has a defined review cycle. We work in focused iterations, not endless revision loops. Feedback is gathered, prioritized, and tied back to product goals.",
        },
        {
          q: "Can you work with our existing design team?",
          a: "Yes. We can lead the full product track or support your existing team on strategy, UX direction, interface design, frontend implementation, or launch preparation.",
        },
      ],
    },
    es: {
      eyebrow: "Estudio de producto, marca y frontend",
      title: "Productos digitales con criterio propio",
      accent: "listos para hacerse reales.",
      description:
        "Definimos la estrategia de producto, la expresión de marca, el sistema UX/UI y el frontend de producción en la misma dirección, para que tu portal, dashboard, SaaS o experiencia digital se sienta propia desde la primera interacción y sólida después del lanzamiento.",
      primaryCta: "Dar forma al producto",
      secondaryCta: "Explorar servicios",
      labels: {
        process: "Proceso",
        portfolio: "Ejemplos de producto",
        deliverables: "Entregables",
        whyUs: "Por qué nosotros",
        audience: "Mejor encaje",
        details: "Profundidad de producto",
        faq: "FAQ",
        canvas: "Sistema de producto",
        promise: "01 / Promesa",
        stack: "Stack",
        flow: "02 / Flujo",
        handoff: "03 / Lanzamiento",
        identity: "Capa de identidad",
        launch: "Fases de construcción",
        recommended: "Recomendado",
      },
      outcomesTitle: "Una experiencia de producto que se entiende, se recuerda y se usa.",
      outcomes: [
        "Una promesa de producto clara, conectada con las decisiones reales que el usuario necesita tomar.",
        "Una dirección visual que lleva tu marca al producto sin convertir la interfaz en decoración.",
        "Un sistema UX/UI con pantallas, estados, componentes y patrones de interacción listos para implementar.",
        "Una base frontend preparada para la segunda versión, la tercera funcionalidad y la siguiente persona que entre al equipo.",
      ],
      phases: ["Estrategia de producto", "Interfaz de marca", "Frontend real"],
      layers: [
        "Reglas de marca",
        "Decisiones de usuario",
        "Sistema de interacción",
        "Producto Next.js",
      ],
      processTitle: "De la idea a una superficie de producto",
      process: [
        {
          number: "01",
          name: "Encuadre de Producto y Marca",
          desc: "Aclaramos el objetivo de negocio, la audiencia, la señal de marca y las decisiones que el producto debe facilitar. El resultado es un brief enfocado, no un moodboard lleno de suposiciones.",
          duration: "3-5 días",
        },
        {
          number: "02",
          name: "Dirección UX y Arquitectura",
          desc: "Mapeamos los recorridos clave, definimos la estructura de información, decidimos qué debe resolver cada pantalla y fijamos el camino técnico antes de diseñar en alta fidelidad.",
          duration: "1-2 semanas",
        },
        {
          number: "03",
          name: "Sistema Visual de Producto",
          desc: "Convertimos la estrategia en pantallas, estados, componentes, vacíos, reglas responsive e interacciones que se sienten como tu marca y funcionan como un producto real.",
          duration: "2-3 semanas",
        },
        {
          number: "04",
          name: "Frontend de Producción",
          desc: "Construimos la superficie acordada con el mismo cuidado que el diseño: responsive, motion, estados, casos límite, accesibilidad y una estructura Next.js mantenible.",
          duration: "3-6 semanas",
        },
        {
          number: "05",
          name: "Lanzamiento y Siguiente Iteración",
          desc: "Preparamos documentación, checklist de lanzamiento, notas de implementación y prioridades para que el producto pueda mantenerse, ampliarse y mejorar después de salir.",
          duration: "1 semana",
        },
      ],
      portfolioTitle: "El tipo de producto donde encaja este trabajo",
      portfolio: [
        {
          title: "Dashboard operativo para SaaS B2B",
          desc: "Un dashboard por roles que convirtió flujos legacy en una superficie más clara para equipos de campo, managers y back-office.",
          scope: "Rediseño de producto completo + rebuild en Next.js",
          timeline: "4 meses",
        },
        {
          title: "Portal de pacientes en healthcare",
          desc: "Un portal multilingüe para citas, historial médico y mensajería segura, diseñado alrededor de claridad, confianza y uso diario sin fricción.",
          scope: "Diseño de producto + frontend + backend n8n",
          timeline: "6 meses",
        },
        {
          title: "Rediseño de checkout e-commerce",
          desc: "Un checkout mobile-first para una marca de moda, enfocado en reducir dudas, hacer evidentes los pasos de pago y mantener la marca hasta la compra.",
          scope: "Auditoría UX + diseño + implementación",
          timeline: "8 semanas",
        },
        {
          title: "CRM para equipo inmobiliario",
          desc: "Un CRM a medida para una agencia neerlandesa, combinando propiedades, contexto de clientes y seguimientos automatizados en un producto interno con identidad.",
          scope: "Producto completo + automatización backend",
          timeline: "5 meses",
        },
      ],
      deliverablesTitle: "Qué sale del estudio",
      deliverables: [
        "Brief estratégico con posicionamiento, prioridades y decisiones de usuario",
        "Documentación UX de los recorridos más importantes",
        "Sistema de interfaz con pantallas, estados y componentes guiados por marca",
        "Prototipo interactivo para los recorridos con más riesgo",
        "Frontend Next.js listo para producción cuando la construcción entra en alcance",
        "Checklist de lanzamiento, notas de traspaso y soporte post-lanzamiento",
      ],
      whyUsTitle: "Por qué esto no es otro handoff de diseño",
      whyUs: [
        "Estrategia, marca, UX/UI y frontend viven en la misma conversación, así que el producto no pierde calidad entre Figma y producción.",
        "La marca se traduce a comportamiento de producto antes de pulir pantallas, para que la interfaz se sienta propia y no simplemente maquillada.",
        "Cada flujo se diseña con operaciones reales en mente: permisos, datos imperfectos, estados límite, traspasos y usuarios con presión de tiempo.",
        "El frontend se estructura para iterar, de modo que la primera versión no se convierta en una pieza frágil que frena la segunda.",
      ],
      pricing: {
        badge: "Opciones de participación",
        title: "Cómo estructuramos el trabajo",
        subtitle:
          "Tres formas de trabajar según la claridad, profundidad de diseño y soporte de producción que necesitas. Toda construcción completa empieza con discovery para que el alcance, el riesgo y el esfuerzo se basen en el producto real, no en una estimación a ciegas.",
        discovery: {
          name: "Discovery y Dirección",
          price: "Desde €4.800",
          timeline: "2-3 semanas",
          desc: "Para equipos con una idea fuerte, pero que aún necesitan claridad sobre posicionamiento, flujos UX, dirección visual, alcance y camino técnico.",
          recommended: true,
          includes: [
            "Workshop de producto y marca",
            "Mapeo de decisiones clave del usuario",
            "Flujos UX y arquitectura de información",
            "Dirección visual de la superficie de producto",
            "Esquema de arquitectura técnica",
            "Roadmap de entrega priorizado",
          ],
          cta: "Empezar con discovery",
        },
        designBuild: {
          name: "Diseño + Construcción",
          price: "Desde €24.000",
          timeline: "2-4 meses",
          desc: "Para equipos que necesitan dar forma, diseñar y construir el producto como una sola versión coherente, no dividirlo entre proveedores desconectados.",
          includes: [
            "Todo lo de Discovery",
            "Sistema UX/UI completo para superficies clave",
            "Prototipo interactivo de recorridos principales",
            "Frontend de producción en Next.js",
            "Responsive, motion, estados y casos límite",
            "Soporte de lanzamiento y 60 días post-lanzamiento",
          ],
          cta: "Planificar diseño + build",
        },
        ongoing: {
          name: "Colaboración Continua",
          price: "Desde €6.500/mes",
          timeline: "Continuo",
          desc: "Para equipos que ya tienen tracción y necesitan diseño de producto senior más ejecución frontend a medida que evoluciona la hoja de ruta.",
          includes: [
            "Sesiones semanales de producto y diseño",
            "Capacidad de implementación frontend",
            "Mejora continua de UX/UI",
            "Soporte asíncrono prioritario",
            "Planificación mensual de hoja de ruta de producto",
          ],
          cta: "Hablar de colaboración",
        },
      },
      audienceTitle: "Para quién encaja",
      audiences: [
        {
          title: "Founders convirtiendo una idea en producto real",
          desc: "Ves la oportunidad de negocio, pero necesitas que estrategia, marca, UX y primer frontend avancen con criterio desde el primer día.",
        },
        {
          title: "Equipos reemplazando software interno confuso",
          desc: "Necesitas un portal, dashboard, CRM o flujo operativo que elimine fricción en vez de convertirse en otro parche que nadie quiere usar.",
        },
        {
          title: "Marcas que no pueden parecer genéricas",
          desc: "Quieres que la experiencia de producto exprese la identidad del negocio sin dejar de ser rápida, usable, accesible y lanzable.",
        },
      ],
      scopeTitle: "Qué cubre el trabajo",
      scope: [
        "Encuadre de producto, posicionamiento, recorridos de usuario y flujos de decisión antes de diseñar pantallas.",
        "Dirección UX/UI guiada por marca con layouts, estados, componentes, patrones de interacción y responsive.",
        "Implementación frontend lista para producción en el nivel de fidelidad adecuado para la etapa de lanzamiento.",
        "Notas de traspaso, prioridades de lanzamiento y hoja de ruta para que el producto siga avanzando después de salir.",
      ],
      detailTitle: "Lo que se vuelve más fuerte durante el trabajo",
      details: [
        {
          title: "La promesa del producto",
          desc: "Hacemos evidente el valor del producto: qué hace, para quién es, por qué importa y dónde la interfaz debe generar confianza.",
        },
        {
          title: "La capa operativa",
          desc: "Flujos, formularios, dashboards, permisos, estados vacíos y responsive se diseñan alrededor del uso real, no de un recorrido demo perfecto.",
        },
        {
          title: "La siguiente iteración",
          desc: "El frontend se estructura para absorber nuevas funciones, nuevo contenido y feedback de usuarios sin rehacer el producto desde cero.",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
        {
          q: "¿Podemos empezar sin un sistema de marca completo?",
          a: "Sí. Podemos partir de una dirección ligera de identidad y convertirla en reglas de producto mientras la interfaz toma forma. Si la marca necesita más definición, lo dejamos claro desde el principio.",
        },
        {
          q: "¿Es solo diseño o diseño más desarrollo?",
          a: "Ambos son posibles. El mejor encaje es diseño con criterio de implementación, porque las decisiones de producto se mantienen conectadas con lo que se puede construir, mantener y lanzar.",
        },
        {
          q: "¿Qué recibimos al final?",
          a: "Dirección de producto clara, flujos UX, pantallas y estados clave, reglas de componentes, implementación acordada y documentación para el lanzamiento y la siguiente iteración.",
        },
        {
          q: "¿Cómo manejáis las revisiones?",
          a: "Cada fase tiene un ciclo de revisión definido. Trabajamos en iteraciones enfocadas, no en bucles infinitos de cambios. El feedback se recoge, se prioriza y se conecta con los objetivos del producto.",
        },
        {
          q: "¿Podéis trabajar con nuestro equipo de diseño existente?",
          a: "Sí. Podemos liderar el track completo de producto o apoyar a tu equipo en estrategia, dirección UX, diseño de interfaz, frontend o preparación de lanzamiento.",
        },
      ],
    },
    nl: {
      eyebrow: "Studio voor product, merk en frontend",
      title: "Digitale producten met een eigen gezicht",
      accent: "gebouwd om echt te worden.",
      description:
        "We brengen productstrategie, merkexpressie, UX/UI en productieklare frontend samen, zodat je portal, dashboard, SaaS-product of digitale ervaring vanaf de eerste interactie herkenbaar voelt en na lancering stevig blijft staan.",
      primaryCta: "Vorm het product",
      secondaryCta: "Bekijk services",
      labels: {
        process: "Proces",
        portfolio: "Productvoorbeelden",
        deliverables: "Deliverables",
        whyUs: "Waarom wij",
        audience: "Beste fit",
        details: "Productdiepte",
        faq: "FAQ",
        canvas: "Productsysteem",
        promise: "01 / Belofte",
        stack: "Stack",
        flow: "02 / Flow",
        handoff: "03 / Launch",
        identity: "Identiteitslaag",
        launch: "Buildfases",
        recommended: "Aanbevolen",
      },
      outcomesTitle: "Een productervaring die mensen begrijpen, onthouden en gebruiken.",
      outcomes: [
        "Een scherpe productbelofte, gekoppeld aan de echte beslissingen die gebruikers moeten nemen.",
        "Een visuele richting die je merk in het product brengt zonder de interface decoratief te maken.",
        "Een UX/UI-systeem met schermen, states, componenten en interactiepatronen die klaar zijn voor implementatie.",
        "Een frontendbasis die de tweede release, de derde feature en het volgende teamlid aankan.",
      ],
      phases: ["Productstrategie", "Merkinterface", "Frontend build"],
      layers: ["Merkregels", "Gebruikersbeslissingen", "Interactiesysteem", "Next.js product"],
      processTitle: "Van idee naar productsurface",
      process: [
        {
          number: "01",
          name: "Product- en Merkframing",
          desc: "We verduidelijken het businessdoel, de doelgroep, het merksignaal en de beslissingen die het product moet ondersteunen. Het resultaat is een scherpe productbrief, geen moodboard vol aannames.",
          duration: "3-5 dagen",
        },
        {
          number: "02",
          name: "UX-richting & Architectuur",
          desc: "We brengen de kernreizen in kaart, bepalen de informatiestructuur, beslissen wat elk scherm moet bewijzen en leggen de technische route vast voordat high-fidelity design start.",
          duration: "1-2 weken",
        },
        {
          number: "03",
          name: "Visueel Productsysteem",
          desc: "We vertalen strategie naar schermen, states, componenten, lege toestanden, responsive regels en interactiedetails die voelen als je merk en werken als een echt product.",
          duration: "2-3 weken",
        },
        {
          number: "04",
          name: "Productieklare Frontend",
          desc: "We bouwen de afgesproken productsurface met dezelfde zorg als het ontwerp: responsive layouts, motion, states, edge cases, toegankelijkheid en een onderhoudbare Next.js-structuur.",
          duration: "3-6 weken",
        },
        {
          number: "05",
          name: "Lancering & Volgende Iteratie",
          desc: "We bereiden overdracht, launchchecklist, implementatienotities en prioriteiten voor de volgende build voor, zodat het product na release kan worden beheerd, uitgebreid en verbeterd.",
          duration: "1 week",
        },
      ],
      portfolioTitle: "Het soort productwerk waarvoor dit past",
      portfolio: [
        {
          title: "Operationeel dashboard voor B2B SaaS",
          desc: "Een rolgebaseerd dashboard dat legacy-workflows vertaalde naar een duidelijkere productsurface voor buitenteams, managers en backoffice.",
          scope: "Volledig product redesign + Next.js rebuild",
          timeline: "4 maanden",
        },
        {
          title: "Patiëntenportaal voor healthcare",
          desc: "Een meertalig portaal voor afspraken, medische geschiedenis en beveiligde berichten, ontworpen rond duidelijkheid, vertrouwen en frictieloos dagelijks gebruik.",
          scope: "Product design + frontend + n8n backend",
          timeline: "6 maanden",
        },
        {
          title: "E-commerce checkout redesign",
          desc: "Een mobile-first checkout voor een modemerk, gericht op minder twijfel, duidelijke betaalstappen en een merkervaring die doorloopt tot aankoop.",
          scope: "UX audit + design + implementatie",
          timeline: "8 weken",
        },
        {
          title: "CRM voor een vastgoedteam",
          desc: "Een CRM op maat voor een Nederlands makelaarsteam, waarin vastgoedflows, klantcontext en geautomatiseerde opvolging samenkomen in één herkenbaar intern product.",
          scope: "Volledig product + backend automatisering",
          timeline: "5 maanden",
        },
      ],
      deliverablesTitle: "Wat de studio oplevert",
      deliverables: [
        "Strategische productbrief met positionering, prioriteiten en gebruikersbeslissingen",
        "UX-documentatie voor de belangrijkste gebruikersreizen",
        "Merkgedreven interfacesysteem met schermen, states en componenten",
        "Interactief prototype voor de meest risicovolle gebruikerspaden",
        "Productieklare Next.js-frontend wanneer build binnen scope valt",
        "Launchchecklist, overdrachtsnotities en post-launch supportvenster",
      ],
      whyUsTitle: "Waarom dit geen gewone designhandoff is",
      whyUs: [
        "Strategie, merk, UX/UI en frontend zitten in hetzelfde gesprek, zodat het product geen kwaliteit verliest tussen Figma en productie.",
        "Het merk wordt vertaald naar productgedrag voordat schermen worden gepolijst, waardoor de interface eigen voelt in plaats van alleen gestyled.",
        "Elke flow wordt ontworpen voor echte operatie: rechten, rommelige data, edge cases, overdrachten en gebruikers die onder tijdsdruk werken.",
        "De frontend wordt opgezet voor iteratie, zodat de eerste release geen fragiele one-off wordt die de tweede release vertraagt.",
      ],
      pricing: {
        badge: "Deelname-opties",
        title: "Hoe we het werk structureren",
        subtitle:
          "Drie manieren om samen te werken, afhankelijk van hoeveel helderheid, ontwerpdiepte en productiesupport je nodig hebt. Elke volledige build start met discovery, zodat scope, risico en effort gebaseerd zijn op het echte product in plaats van op giswerk.",
        discovery: {
          name: "Discovery & Richting",
          price: "Vanaf €4.800",
          timeline: "2-3 weken",
          desc: "Voor teams met een sterk productidee, maar nog onvoldoende helderheid over positionering, UX-flows, visuele richting, scope of technische route.",
          recommended: true,
          includes: [
            "Workshop voor product- en merkframing",
            "Mapping van belangrijke gebruikersbeslissingen",
            "UX-flows en informatiearchitectuur",
            "Visuele richting voor de productsurface",
            "Technisch architectuuroverzicht",
            "Geprioriteerde deliveryroadmap",
          ],
          cta: "Start met discovery",
        },
        designBuild: {
          name: "Design + Build",
          price: "Vanaf €24.000",
          timeline: "2-4 maanden",
          desc: "Voor teams die het product als één coherente release willen vormen, ontwerpen en bouwen, in plaats van het te verdelen over losstaande partijen.",
          includes: [
            "Alles van Discovery",
            "Volledig UX/UI-systeem voor kernsurfaces",
            "Interactief prototype voor belangrijke journeys",
            "Productieklare Next.js-frontend",
            "Responsive states, motion en edge cases",
            "Launchsupport en 60 dagen post-launch venster",
          ],
          cta: "Plan design + build",
        },
        ongoing: {
          name: "Doorlopende Samenwerking",
          price: "Vanaf €6.500/maand",
          timeline: "Doorlopend",
          desc: "Voor teams die al momentum hebben en senior productdesign plus frontenduitvoering nodig hebben terwijl de roadmap evolueert.",
          includes: [
            "Wekelijkse product- en designsessies",
            "Frontendimplementatiecapaciteit",
            "Doorlopende UX/UI-verbetering",
            "Prioritaire asynchrone support",
            "Maandelijkse productroadmap-planning",
          ],
          cta: "Bespreek samenwerking",
        },
      },
      audienceTitle: "Beste fit",
      audiences: [
        {
          title: "Founders die een idee omzetten in een echt product",
          desc: "Je ziet de businesskans, maar hebt productstrategie, merkexpressie, UX en eerste frontend nodig die vanaf dag één met discipline samenkomen.",
        },
        {
          title: "Teams die rommelige interne software vervangen",
          desc: "Je hebt een portal, dashboard, CRM of workflow nodig die frictie wegneemt in plaats van de volgende workaround te worden die niemand graag gebruikt.",
        },
        {
          title: "Merken die niet generiek mogen voelen",
          desc: "Je wilt dat de productervaring de identiteit van het bedrijf draagt, terwijl die snel, bruikbaar, toegankelijk en lanceerbaar blijft.",
        },
      ],
      scopeTitle: "Wat de samenwerking dekt",
      scope: [
        "Productframing, positionering, user journeys en beslisflows voordat visueel ontwerp start.",
        "Merkgedreven UX/UI-richting met layouts, states, componenten, interactiepatronen en responsive gedrag.",
        "Productieklare frontendimplementatie op het juiste detailniveau voor de lanceringsfase.",
        "Overdrachtsnotities, launchprioriteiten en een roadmap voor de volgende iteratie na release.",
      ],
      detailTitle: "Wat sterker wordt tijdens het werk",
      details: [
        {
          title: "De productbelofte",
          desc: "We maken de waarde van het product duidelijk: wat het doet, voor wie het is, waarom het ertoe doet en waar de interface vertrouwen moet geven.",
        },
        {
          title: "De operationele laag",
          desc: "Flows, formulieren, dashboards, rechten, lege toestanden en responsive gedrag worden ontworpen rond echt gebruik, niet rond een perfecte demo-route.",
        },
        {
          title: "De volgende iteratie",
          desc: "De frontend wordt zo opgezet dat nieuwe features, nieuwe content en gebruikersfeedback kunnen worden opgenomen zonder het product opnieuw te bouwen.",
        },
      ],
      faqTitle: "Veelgestelde vragen",
      faqs: [
        {
          q: "Kunnen we starten zonder compleet merksysteem?",
          a: "Ja. We kunnen starten vanuit een lichte identiteitsrichting en die vertalen naar productregels terwijl de interface vorm krijgt. Als het merk meer definitie nodig heeft, maken we dat vroeg expliciet.",
        },
        {
          q: "Is dit alleen design, of design plus build?",
          a: "Beide kan. De sterkste fit is design met implementatieoordeel, omdat productkeuzes dan verbonden blijven met wat gebouwd, onderhouden en gelanceerd kan worden.",
        },
        {
          q: "Wat ontvangen we aan het einde?",
          a: "Een duidelijke productrichting, UX-flows, belangrijke schermen en states, componentregels, afgesproken implementatiewerk en documentatie voor launch en de volgende iteratie.",
        },
        {
          q: "Hoe gaan jullie om met revisies?",
          a: "Elke fase heeft een duidelijke reviewcyclus. We werken in gerichte iteraties, niet in eindeloze revisierondes. Feedback wordt verzameld, geprioriteerd en gekoppeld aan productdoelen.",
        },
        {
          q: "Kunnen jullie met ons bestaande designteam werken?",
          a: "Ja. We kunnen het volledige producttraject leiden of je team ondersteunen bij strategie, UX-richting, interface design, frontendimplementatie of launchvoorbereiding.",
        },
      ],
    },
  });

  return (
    <StudioServiceShell locale={locale} path={path} breadcrumbName={copy.title}>
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[86vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-hunter-green/40 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-20 h-[620px] w-[620px] rounded-full bg-hunter-green/[0.09] blur-[150px]" />
        <div className="pointer-events-none absolute -right-20 top-40 h-[520px] w-[520px] rounded-full bg-hunter-orange/[0.1] blur-[140px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-near-black via-near-black/70 to-transparent" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <m.div initial="hidden" animate="visible" variants={containerVariants}>
            <m.p
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-hunter-green/20 bg-hunter-green/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-hunter-green shadow-[0_0_40px_rgba(0,230,162,0.08)]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-hunter-green shadow-[0_0_12px_rgba(0,230,162,0.8)]" />
              {copy.eyebrow}
            </m.p>
            <m.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-black leading-[0.88] tracking-tighter text-white md:text-7xl xl:text-8xl"
            >
              {copy.title}{" "}
              <span className="bg-gradient-to-r from-hunter-green via-white to-hunter-orange bg-clip-text text-transparent">
                {copy.accent}
              </span>
            </m.h1>
            <m.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              {copy.description}
            </m.p>
            <m.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-8 py-4 text-sm font-black uppercase tracking-widest text-near-black shadow-[0_20px_60px_-28px_rgba(0,230,162,0.85)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-hunter-green transition-colors duration-300 group-hover:bg-white" />
                <span className="relative z-10">{copy.primaryCta}</span>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-hunter-orange/40 hover:bg-hunter-orange/5 hover:text-hunter-orange"
              >
                {copy.secondaryCta}
              </Link>
            </m.div>
            <m.div variants={itemVariants} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {copy.phases.map((phase, index) => (
                <div
                  key={phase}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md"
                >
                  <div className="font-mono text-[10px] font-black text-hunter-green">
                    0{index + 1}
                  </div>
                  <div className="mt-2 text-xs font-bold leading-tight text-white/80">{phase}</div>
                </div>
              ))}
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 28, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCanvas layers={copy.layers} labels={copy.labels} />
          </m.div>
        </div>
      </section>

      <AnimatedSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <IdentityLayer
            label={copy.labels.identity}
            outcomesTitle={copy.outcomesTitle}
            outcomes={copy.outcomes}
          />
          <LaunchBoard label={copy.labels.launch} phases={copy.phases} />
        </div>
      </AnimatedSection>

      <ProcessSection label={copy.labels.process} title={copy.processTitle} items={copy.process} />
      <PortfolioSection
        label={copy.labels.portfolio}
        title={copy.portfolioTitle}
        items={copy.portfolio}
      />
      <DeliverablesSection
        label={copy.labels.deliverables}
        title={copy.deliverablesTitle}
        items={copy.deliverables}
      />
      <WhyUsSection label={copy.labels.whyUs} title={copy.whyUsTitle} items={copy.whyUs} />
      <PricingSection pricing={copy.pricing} recommendedLabel={copy.labels.recommended} />

      <AudienceFit label={copy.labels.audience} title={copy.audienceTitle} items={copy.audiences} />
      <EngagementScope title={copy.scopeTitle} items={copy.scope} />
      <DeliveryDetail label={copy.labels.details} title={copy.detailTitle} items={copy.details} />
      <DecisionFaq label={copy.labels.faq} title={copy.faqTitle} items={copy.faqs} />
    </StudioServiceShell>
  );
}

function ProcessSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Array<{ number: string; name: string; desc: string; duration: string }>;
}) {
  return (
    <AnimatedSection className="border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          {label}
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {items.map((item, index) => (
            <m.article
              key={item.number}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-near-black p-6 transition-colors duration-300 hover:border-hunter-green/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-hunter-green/10 via-transparent to-hunter-orange/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-hunter-green/10 blur-2xl" />
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-hunter-green/30 bg-hunter-green/10 font-mono text-sm font-black text-hunter-green">
                {item.number}
              </div>
              <h3 className="relative z-10 mt-4 text-lg font-black text-white transition-colors group-hover:text-hunter-green">
                {item.name}
              </h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
              <p className="relative z-10 mt-4 font-mono text-xs text-hunter-orange">
                {item.duration}
              </p>
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function PortfolioSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Array<{ title: string; desc: string; scope: string; timeline: string }>;
}) {
  return (
    <AnimatedSection className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          {label}
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <m.article
              key={item.title}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-near-black p-8 transition-colors duration-300 hover:border-hunter-orange/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,230,162,0.12),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(255,122,60,0.12),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="relative z-10 text-xl font-black text-white">{item.title}</h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="rounded-full border border-hunter-green/30 bg-hunter-green/10 px-3 py-1 font-mono text-xs text-hunter-green">
                  {item.scope}
                </span>
                <span className="rounded-full border border-hunter-orange/30 bg-hunter-orange/10 px-3 py-1 font-mono text-xs text-hunter-orange">
                  {item.timeline}
                </span>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function DeliverablesSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: string[];
}) {
  return (
    <AnimatedSection className="border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-near-black p-8 shadow-2xl shadow-black/30 md:p-10 lg:p-12">
          <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-hunter-green/10 blur-[90px]" />
          <div className="pointer-events-none absolute right-8 top-8 hidden font-mono text-8xl font-black text-white/[0.025] lg:block">
            SHIP
          </div>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
                {label}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
                {title}
              </h2>
            </div>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <m.li
                  key={item}
                  custom={index}
                  variants={cardReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-300"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-hunter-green" />
                  {item}
                </m.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function WhyUsSection({ label, title, items }: { label: string; title: string; items: string[] }) {
  return (
    <AnimatedSection className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          {label}
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <m.article
              key={item}
              custom={idx}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-hunter-green/40 hover:bg-hunter-green/[0.04]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-hunter-green/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hunter-green/10 font-mono text-sm font-black text-hunter-green">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="relative z-10 text-sm leading-relaxed text-gray-300">{item}</p>
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
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
  recommendedLabel,
}: {
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    discovery: PricingPlan;
    designBuild: PricingPlan;
    ongoing: PricingPlan;
  };
  recommendedLabel: string;
}) {
  return (
    <AnimatedSection className="border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
            {pricing.badge}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{pricing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{pricing.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[pricing.discovery, pricing.designBuild, pricing.ongoing].map((plan, index) => (
            <m.article
              key={plan.name}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: plan.recommended ? -10 : -6 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.recommended
                  ? "overflow-hidden border-hunter-green/50 bg-hunter-green/[0.06] shadow-[0_28px_90px_-52px_rgba(0,230,162,0.9)]"
                  : "border-white/10 bg-white/[0.02] transition-colors hover:border-hunter-orange/35"
              }`}
            >
              {plan.recommended && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,230,162,0.18),transparent_34%),radial-gradient(circle_at_100%_80%,rgba(255,122,60,0.14),transparent_30%)]" />
              )}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-hunter-green/30 bg-hunter-green/10 px-4 py-1 font-mono text-xs font-black text-hunter-green">
                  {recommendedLabel}
                </div>
              )}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-black text-white">{plan.name}</h3>
                <div className="mt-4 text-3xl font-black text-hunter-green">{plan.price}</div>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-500">
                  {plan.timeline}
                </p>
                <p className="mt-4 text-sm text-gray-400">{plan.desc}</p>
              </div>
              <ul className="relative z-10 mt-8 flex-1 space-y-3">
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
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function AudienceFit({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <AnimatedSection className="border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          {label}
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <m.article
              key={item.title}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -7 }}
              className="group rounded-3xl border border-white/10 bg-near-black p-7 transition-colors duration-300 hover:border-hunter-green/40 hover:bg-hunter-green/[0.035]"
            >
              <h3 className="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-hunter-green">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function EngagementScope({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedSection className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="text-4xl font-black leading-none tracking-tighter md:text-5xl">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <m.div
              key={item}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-3xl border border-hunter-green/20 bg-hunter-green/[0.05] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <p className="text-sm leading-relaxed text-gray-300">{item}</p>
            </m.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function DeliveryDetail({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <AnimatedSection className="border-y border-white/5 bg-surface-dark/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          {label}
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <m.article
              key={item.title}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-hunter-orange/35"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hunter-orange/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-hunter-orange">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function DecisionFaq({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <AnimatedSection className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          {label}
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-4">
          {items.map((item, index) => (
            <m.article
              key={item.q}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-3xl border border-white/10 bg-near-black p-6 transition-colors duration-300 hover:border-hunter-green/35"
            >
              <h3 className="text-xl font-black tracking-tight text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.a}</p>
            </m.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

type ProductPageLabels = {
  canvas: string;
  promise: string;
  stack: string;
  flow: string;
  handoff: string;
  identity: string;
  launch: string;
};

function ProductCanvas({ layers, labels }: { layers: string[]; labels: ProductPageLabels }) {
  return (
    <div className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#060706] p-6 shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_100%)] bg-[length:28px_28px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,230,162,0.18),transparent_28%),radial-gradient(circle_at_80%_68%,rgba(255,122,60,0.18),transparent_32%)]" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-hunter-green/40 to-transparent" />
      <div className="absolute left-8 top-8 text-[10px] font-black uppercase tracking-[0.28em] text-hunter-green/70">
        {labels.canvas}
      </div>
      <m.div
        className="absolute right-8 top-8 h-12 w-12 rounded-full border border-hunter-orange/30 bg-hunter-orange/10"
        animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="relative mt-16 grid h-[390px] grid-cols-6 grid-rows-6 gap-3">
        <m.div
          className="col-span-4 row-span-3 rounded-3xl border border-hunter-green/30 bg-hunter-green/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.28 }}
        >
          <p className="font-mono text-xs text-hunter-green">{labels.promise}</p>
          <div className="mt-8 h-3 w-4/5 rounded-full bg-white/80" />
          <div className="mt-4 h-3 w-2/3 rounded-full bg-white/30" />
        </m.div>
        <m.div
          className="col-span-2 row-span-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.28 }}
        >
          <p className="font-mono text-xs text-hunter-orange">{labels.stack}</p>
          <div className="mt-6 space-y-3">
            {layers.map((layer, index) => (
              <m.div
                key={layer}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
                className="rounded-xl border border-white/10 bg-near-black px-3 py-2 text-xs text-gray-300"
              >
                {layer}
              </m.div>
            ))}
          </div>
        </m.div>
        <m.div
          className="col-span-3 row-span-3 rounded-3xl border border-hunter-orange/30 bg-hunter-orange/[0.08] p-5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.28 }}
        >
          <p className="font-mono text-xs text-hunter-orange">{labels.flow}</p>
          <div className="mt-8 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-2xl bg-white/10" />
            <div className="h-20 rounded-2xl bg-hunter-green/20" />
            <div className="h-20 rounded-2xl bg-white/10" />
          </div>
        </m.div>
        <m.div
          className="col-span-3 row-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.28 }}
        >
          <p className="font-mono text-xs text-white/50">{labels.handoff}</p>
          <div className="mt-6 h-2 w-full rounded-full bg-white/10">
            <m.div
              className="h-full rounded-full bg-hunter-green"
              initial={{ width: "18%" }}
              animate={{ width: "68%" }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </m.div>
      </div>
    </div>
  );
}

function IdentityLayer({
  label,
  outcomesTitle,
  outcomes,
}: {
  label: string;
  outcomesTitle: string;
  outcomes: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-hunter-orange/10 blur-[70px]" />
      <p className="text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">{label}</p>
      <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
        {outcomesTitle}
      </h2>
      <div className="mt-8 grid gap-3">
        {outcomes.map((outcome, index) => (
          <m.div
            key={outcome}
            custom={index}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-near-black p-5 text-sm leading-relaxed text-gray-300"
          >
            {outcome}
          </m.div>
        ))}
      </div>
    </div>
  );
}

function LaunchBoard({ label, phases }: { label: string; phases: string[] }) {
  return (
    <div className="grid gap-5">
      {phases.map((phase, index) => (
        <m.article
          key={phase}
          custom={index}
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ x: 8 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-near-black p-7 transition-colors hover:border-hunter-green/40"
        >
          <div className="absolute right-6 top-4 font-mono text-7xl font-black text-white/[0.03]">
            0{index + 1}
          </div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
            {label}
          </p>
          <h3 className="mt-6 text-3xl font-black tracking-tight text-white group-hover:text-hunter-green">
            {phase}
          </h3>
          <div className="mt-6 h-px bg-gradient-to-r from-hunter-green/60 via-white/10 to-transparent" />
        </m.article>
      ))}
    </div>
  );
}
