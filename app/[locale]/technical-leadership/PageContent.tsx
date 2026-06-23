import { Link } from "@/navigation";
import { StudioServiceShell } from "../_shared/StudioServicePage";
import { getLocaleValue } from "../_shared/localeCopy";
import { CheckIcon, CalendarIcon, LightningIcon, TargetIcon } from "@phosphor-icons/react/dist/ssr";

interface IconProps {
  className?: string;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  size?: number | string;
}

const path = "/technical-leadership";

export default function TechnicalLeadershipContent({ locale }: { locale: string }) {
  const copy = getLocaleValue(locale, {
    en: {
      eyebrow: "Senior direction",
      title: "Technical leadership for decisions",
      accent: "that cannot drift.",
      description:
        "Fractional technical leadership for founders and teams that need architecture judgment, delivery discipline, vendor review, or senior product engineering direction.",
      primaryCta: "Discuss direction",
      secondaryCta: "View services",
      areas: ["Architecture", "Delivery", "Vendors", "Roadmap"],
      matrixTitle: "Sharper decisions before they become expensive rebuilds.",
      risks: ["Scope drift", "Platform lock-in", "Team overload", "Fragile handoff"],
      engagementTypesTitle: "Three ways to engage",
      engagementTypes: [
        {
          name: "Decision Sprint",
          duration: "2-3 weeks",
          desc: "Focused work on a specific technical decision or set of decisions that need resolution before moving forward.",
          bestFor:
            "Architecture choices, vendor selection, migration planning, build vs buy decisions.",
          output:
            "Decision brief, option analysis, recommendation with rationale, implementation path.",
        },
        {
          name: "Ongoing Partnership",
          duration: "3-12 months",
          desc: "Regular leadership presence for roadmap, vendor, and delivery decisions as the product evolves.",
          bestFor:
            "Founders without CTO, growing teams entering complex builds, companies in transition.",
          output:
            "Weekly or bi-weekly sessions, decision records, roadmap reviews, escalation support.",
        },
        {
          name: "Project Oversight",
          duration: "Per project",
          desc: "Technical leadership for a specific initiative from scoping through delivery and handoff.",
          bestFor: "Complex builds with external teams, platform migrations, new product launches.",
          output: "Project governance, milestone reviews, risk tracking, vendor management.",
        },
      ],
      decisionExamplesTitle: "What technical leadership actually decides",
      decisionExamples: [
        {
          number: "01",
          title: "Microservices or modular monolith?",
          context:
            "A team of 8 engineers is building a new platform. The architectural choice will shape team organization and delivery speed for years.",
          outcome:
            "A decision framework tied to team size, velocity targets, and operational maturity — with a documented recommendation and criteria for revisiting.",
        },
        {
          number: "02",
          title: "Which cloud vendor and why?",
          context:
            "Three vendors are proposed. Each has different pricing, lock-in, and capability trade-offs.",
          outcome:
            "A structured comparison with actual workload profiles, total cost modeling, and a recommendation that accounts for the team's operational capabilities.",
        },
        {
          number: "03",
          title: "Build the AI layer or use a vendor?",
          context:
            "The product roadmap includes AI features. The team has no ML engineering capacity.",
          outcome:
            "A build vs buy framework applied to their specific use case, with criteria for when to revisit as the market evolves.",
        },
        {
          number: "04",
          title: "How do we structure the vendor contract?",
          context:
            "An external team has submitted a proposal. The scope, timeline, and milestones need scrutiny.",
          outcome:
            "A contract structure that protects against scope creep, defines clear acceptance criteria, and includes performance gates.",
        },
      ],
      rhythmTitle: "How the ongoing engagement works",
      rhythm: [
        {
          icon: CalendarIcon,
          title: "Weekly decision sessions",
          desc: "2-hour focused working sessions to address open technical questions, review options, and drive decisions to closure.",
        },
        {
          icon: TargetIcon,
          title: "Bi-weekly roadmap review",
          desc: "Planned work is reviewed against capacity, risk, and business priorities. Scope is adjusted with full visibility.",
        },
        {
          icon: LightningIcon,
          title: "On-demand escalation",
          desc: "When something urgent surfaces, we run an expedited decision session within 24-48 hours.",
        },
      ],
      credibilityTitle: "How I work",
      credibility: [
        "ADAPT framework for decision-driven delivery",
        "Architecture Decision Records (ADRs) as the primary output format",
        "First-principles thinking over pattern matching",
        "No vendor affiliations or kickback arrangements",
        "Direct access — no account managers or layers",
      ],
      pricing: {
        badge: "Engagement options",
        title: "Leadership that fits your stage",
        subtitle:
          "Starting prices, excl. VAT. Three formats depending on decision complexity and how long you need the support. Final scope depends on company stage, team structure, vendor risk, systems and delivery complexity, so we start with a focused assessment before defining the engagement.",
        decisionSprint: {
          name: "Decision Sprint",
          price: "From €5,500",
          timeline: "2-3 weeks",
          desc: "For a specific decision that needs to be made before you can move forward.",
          includes: [
            "Discovery sessions with your team",
            "Option analysis and research",
            "Decision brief with recommendation",
            "Implementation path outline",
            "2-week follow-up for questions",
          ],
          cta: "Start a sprint",
        },
        ongoing: {
          name: "Ongoing Partnership",
          price: "From €4,500/month",
          timeline: "3-month minimum",
          desc: "For founders and teams that need consistent senior judgment.",
          recommended: true,
          includes: [
            "Weekly 2-hour decision session",
            "Bi-weekly roadmap review",
            "Unlimited async escalation",
            "Decision records and documentation",
            "Vendor coordination support",
          ],
          cta: "Start partnership",
        },
        project: {
          name: "Project Oversight",
          price: "From €10,000",
          timeline: "Per project",
          desc: "For complex builds that need governance from scoping to delivery.",
          includes: [
            "Project discovery and scoping",
            "Milestone governance",
            "Vendor management",
            "Risk tracking and mitigation",
            "Handoff documentation",
          ],
          cta: "Discuss project",
        },
      },
      audienceTitle: "Where senior direction helps",
      audiences: [
        {
          title: "Founders without a full-time CTO",
          desc: "You need senior technical judgment for roadmap, vendors, hiring, architecture, and delivery trade-offs without adding a permanent executive role.",
        },
        {
          title: "Teams entering a risky build",
          desc: "The product has enough complexity that early architecture and scope decisions will shape cost for months.",
        },
        {
          title: "Leaders reviewing vendors or platforms",
          desc: "You need an independent read before committing to a partner, stack, migration, or long-term operating model.",
        },
      ],
      scopeTitle: "What the leadership layer covers",
      scope: [
        "Architecture direction, technical trade-offs, platform choices, and build-versus-buy decisions.",
        "Delivery rhythm, scope control, milestone clarity, and decision records for the team.",
        "Vendor review, proposal review, implementation risk, and handoff planning.",
        "Product engineering priorities that connect business goals to technical sequencing.",
      ],
      detailTitle: "A practical cadence for high-leverage decisions",
      details: [
        {
          title: "Decision sessions",
          desc: "Focused working sessions turn open technical questions into clear options, consequences, and next actions.",
        },
        {
          title: "Roadmap pressure testing",
          desc: "Plans are reviewed against team capacity, architectural risk, user value, and hidden operational cost.",
        },
        {
          title: "Execution guardrails",
          desc: "The team leaves with constraints, sequencing, and review points that prevent drift without slowing delivery.",
        },
      ],
      faqTitle: "Leadership questions",
      faqs: [
        {
          q: "Is this a fractional CTO service?",
          a: "It can support that role, but the focus is sharper: technical decisions, delivery direction, vendor review, and product engineering judgment.",
        },
        {
          q: "Can you work with our existing team?",
          a: "Yes. The goal is to raise clarity and decision quality, not replace the people already building.",
        },
        {
          q: "What does a typical output look like?",
          a: "Decision notes, roadmap recommendations, architecture direction, risk review, and concrete next actions for the team or vendors.",
        },
        {
          q: "How quickly can you get up to speed on our codebase?",
          a: "For a Decision Sprint, I typically spend the first week in discovery mode — code review, architecture review, and team conversations — before making any recommendations.",
        },
        {
          q: "What if we only need one specific decision?",
          a: "The Decision Sprint format is designed exactly for that. We focus on one decision area, deliver the analysis and recommendation, and close the engagement.",
        },
      ],
    },
    es: {
      eyebrow: "Dirección senior",
      title: "Liderazgo técnico para decisiones",
      accent: "que no pueden derivar.",
      description:
        "Liderazgo técnico fraccional para founders y equipos que necesitan criterio de arquitectura, disciplina de entrega, revisión de proveedores o dirección senior de producto.",
      primaryCta: "Hablar de dirección",
      secondaryCta: "Ver servicios",
      areas: ["Arquitectura", "Entrega", "Proveedores", "Roadmap"],
      matrixTitle: "Mejores decisiones antes de que se conviertan en reconstrucciones caras.",
      risks: ["Scope drift", "Lock-in", "Sobrecarga", "Handoff frágil"],
      engagementTypesTitle: "Tres formas de trabajar",
      engagementTypes: [
        {
          name: "Decision Sprint",
          duration: "2-3 semanas",
          desc: "Trabajo enfocado en una decisión técnica específica que necesita resolverse antes de avanzar.",
          bestFor:
            "Elecciones de arquitectura, selección de vendor, planificación de migración, decisiones build vs buy.",
          output:
            "Brief de decisión, análisis de opciones, recomendación con rationale, camino de implementación.",
        },
        {
          name: "Colaboración Continua",
          duration: "3-12 meses",
          desc: "Presencia regular de liderazgo para decisiones de roadmap, vendor y delivery mientras el producto evoluciona.",
          bestFor:
            "Founders sin CTO, equipos creciendo en builds complejas, empresas en transición.",
          output:
            "Sesiones semanales o quincenales, registros de decisión, reviews de roadmap, soporte de escalado.",
        },
        {
          name: "Supervisión de Proyecto",
          duration: "Por proyecto",
          desc: "Liderazgo técnico para una iniciativa específica desde scoping hasta entrega y handoff.",
          bestFor:
            "Builds complejas con equipos externos, migraciones de plataforma, lanzamientos de nuevo producto.",
          output:
            "Gobierno del proyecto, reviews de milestones, tracking de riesgo, gestión de vendors.",
        },
      ],
      decisionExamplesTitle: "Qué decide realmente el liderazgo técnico",
      decisionExamples: [
        {
          number: "01",
          title: "¿Microservicios o monolith modular?",
          context:
            "Un equipo de 8 ingenieros está construyendo una nueva plataforma. La elección arquitectónica cambiará la organización del equipo y velocidad de entrega por años.",
          outcome:
            "Un framework de decisión atado a tamaño de equipo, objetivos de velocidad y madurez operativa — con recomendación documentada y criterios para revisarla.",
        },
        {
          number: "02",
          title: "¿Qué cloud vendor y por qué?",
          context:
            "Tres vendors proponen sus servicios. Cada uno tiene diferentes pricing, lock-in y trade-offs de capacidades.",
          outcome:
            "Una comparación estructurada con perfiles reales de workload, modelado de coste total y recomendación que considera las capacidades operativas del equipo.",
        },
        {
          number: "03",
          title: "¿Construir la capa de IA o usar un vendor?",
          context:
            "El roadmap de producto incluye features de IA. El equipo no tiene capacidad de ML engineering.",
          outcome:
            "Un framework build vs buy aplicado a su caso específico, con criterios para revisarlo cuando el mercado evolucione.",
        },
        {
          number: "04",
          title: "¿Cómo estructuramos el contrato con el vendor?",
          context:
            "Un equipo externo ha enviado una propuesta. Scope, timeline y milestones necesitan escrutinio.",
          outcome:
            "Una estructura de contrato que protege contra scope creep, define criterios claros de aceptación e incluye performance gates.",
        },
      ],
      rhythmTitle: "Cómo funciona el engagement continuo",
      rhythm: [
        {
          icon: CalendarIcon,
          title: "Sesiones semanales de decisión",
          desc: "Sesiones de trabajo enfocadas de 2 horas para abordar preguntas técnicas abiertas, revisar opciones y llevar decisiones a cierre.",
        },
        {
          icon: TargetIcon,
          title: "Review quincenal de roadmap",
          desc: "El trabajo planificado se revisa contra capacidad, riesgo y prioridades de negocio. El scope se ajusta con visibilidad total.",
        },
        {
          icon: LightningIcon,
          title: "Escalado bajo demanda",
          desc: "Cuando surge algo urgente, corremos una sesión de decisión acelerada en 24-48 horas.",
        },
      ],
      credibilityTitle: "Cómo trabajo",
      credibility: [
        "Framework ADAPT para delivery dirigido por decisiones",
        "Architecture Decision Records (ADRs) como formato primario de output",
        "Pensamiento first-principles sobre pattern matching",
        "Sin afiliaciones a vendors o acuerdos de comisiones",
        "Acceso directo — sin account managers ni capas",
      ],
      pricing: {
        badge: "Opciones de participación",
        title: "Liderazgo que se adapta a tu etapa",
        subtitle:
          "Precios desde, sin IVA. Tres formatos según complejidad de decisiones y duración del soporte necesario. El alcance final depende de etapa de empresa, estructura del equipo, riesgo de vendors, sistemas y complejidad de entrega; por eso empezamos con una evaluación enfocada antes de definir el engagement.",
        decisionSprint: {
          name: "Decision Sprint",
          price: "Desde €5.500",
          timeline: "2-3 semanas",
          desc: "Para una decisión específica que necesita tomarse antes de avanzar.",
          includes: [
            "Sesiones de discovery con tu equipo",
            "Análisis de opciones e investigación",
            "Brief de decisión con recomendación",
            "Outline de camino de implementación",
            "2 semanas de seguimiento para preguntas",
          ],
          cta: "Iniciar sprint",
        },
        ongoing: {
          name: "Colaboración Continua",
          price: "Desde €4.500/mes",
          timeline: "Mínimo 3 meses",
          desc: "Para founders y equipos que necesitan criterio senior consistente.",
          recommended: true,
          includes: [
            "Sesión semanal de 2 horas",
            "Review quincenal de roadmap",
            "Escalado asíncrono ilimitado",
            "Registros de decisión y documentación",
            "Soporte de coordinación con vendors",
          ],
          cta: "Iniciar colaboración",
        },
        project: {
          name: "Supervisión de Proyecto",
          price: "Desde €10.000",
          timeline: "Por proyecto",
          desc: "Para builds complejas que necesitan gobernanza de scoping a entrega.",
          includes: [
            "Discovery y scoping del proyecto",
            "Gobernanza de milestones",
            "Gestión de vendors",
            "Tracking y mitigación de riesgos",
            "Documentación de handoff",
          ],
          cta: "Discutir proyecto",
        },
      },
      audienceTitle: "Dónde ayuda la dirección senior",
      audiences: [
        {
          title: "Founders sin CTO full-time",
          desc: "Necesitas criterio técnico senior para roadmap, proveedores, hiring, arquitectura y trade-offs sin añadir un rol ejecutivo permanente.",
        },
        {
          title: "Equipos entrando en una build arriesgada",
          desc: "El producto tiene suficiente complejidad como para que arquitectura y alcance definan el coste durante meses.",
        },
        {
          title: "Líderes revisando proveedores o plataformas",
          desc: "Necesitas una lectura independiente antes de comprometerte con partner, stack, migración o modelo operativo.",
        },
      ],
      scopeTitle: "Qué cubre la capa de liderazgo",
      scope: [
        "Dirección de arquitectura, trade-offs técnicos, plataformas y decisiones build-versus-buy.",
        "Ritmo de entrega, control de alcance, claridad de hitos y registros de decisión.",
        "Revisión de proveedores, propuestas, riesgo de implementación y plan de handoff.",
        "Prioridades de producto e ingeniería conectadas con objetivos de negocio.",
      ],
      detailTitle: "Una cadencia práctica para decisiones de alto impacto",
      details: [
        {
          title: "Sesiones de decisión",
          desc: "Preguntas técnicas abiertas se convierten en opciones claras, consecuencias y siguientes acciones.",
        },
        {
          title: "Pressure test de roadmap",
          desc: "Los planes se revisan contra capacidad, riesgo arquitectónico, valor de usuario y coste operativo oculto.",
        },
        {
          title: "Guardrails de ejecución",
          desc: "El equipo sale con restricciones, secuencia y puntos de revisión que evitan deriva sin fren ar entrega.",
        },
      ],
      faqTitle: "Preguntas de liderazgo",
      faqs: [
        {
          q: "¿Es un servicio de CTO fraccional?",
          a: "Puede apoyar ese rol, pero el foco es más concreto: decisiones técnicas, delivery, proveedores y criterio de producto engineering.",
        },
        {
          q: "¿Puedes trabajar con nuestro equipo actual?",
          a: "Sí. El objetivo es elevar claridad y calidad de decisión, no reemplazar a quienes ya están construyendo.",
        },
        {
          q: "¿Qué output recibimos normalmente?",
          a: "Notas de decisión, recomendaciones de roadmap, dirección de arquitectura, revisión de riesgos y próximos pasos concretos.",
        },
        {
          q: "¿Cuánto tardas en entender nuestro codebase?",
          a: "Para un Decision Sprint, típicamente paso la primera semana en modo discovery — revisión de código, revisión de arquitectura y conversaciones con el equipo.",
        },
        {
          q: "¿Y si solo necesitamos una decisión específica?",
          a: "El formato Decision Sprint está diseñado exactamente para eso. Enfocamos en un área de decisión, entregamos el análisis y recomendación, y cerramos el engagement.",
        },
      ],
    },
    nl: {
      eyebrow: "Senior richting",
      title: "Technisch leiderschap voor beslissingen",
      accent: "die niet mogen afdrijven.",
      description:
        "Fractioneel technisch leiderschap voor founders en teams die architectuuroordeel, deliverydiscipline, vendor review of senior product engineering-richting nodig hebben.",
      primaryCta: "Bespreek richting",
      secondaryCta: "Bekijk services",
      areas: ["Architectuur", "Delivery", "Vendors", "Roadmap"],
      matrixTitle: "Scherpere beslissingen voordat ze dure rebuilds worden.",
      risks: ["Scope drift", "Lock-in", "Team overload", "Fragiele overdracht"],
      engagementTypesTitle: "Drie manieren om te werken",
      engagementTypes: [
        {
          name: "Decision Sprint",
          duration: "2-3 weken",
          desc: "Gefocust werk aan een specifieke technische beslissing die moet worden opgelost voordat je verder kunt.",
          bestFor:
            "Architectuurkeuzes, vendorselectie, migratieplanning, build vs buy beslissingen.",
          output: "Beslissingsbrief, optie-analyse, aanbeveling met rationale, implementatiepad.",
        },
        {
          name: "Doorlopende Samenwerking",
          duration: "3-12 maanden",
          desc: "Regelmatig leiderschapspresence voor roadmap-, vendor- en deliverybeslissingen terwijl het product evolueert.",
          bestFor:
            "Founders zonder CTO, groeiende teams in complexe builds, bedrijven in transitie.",
          output:
            "Wekelijkse of tweewekelijkse sessies, beslissingsverslagen, roadmap-reviews, escalatie-ondersteuning.",
        },
        {
          name: "Project Oversight",
          duration: "Per project",
          desc: "Technisch leiderschap voor een specifiek initiatief van scoping tot delivery en overdracht.",
          bestFor:
            "Complexe builds met externe teams, platformmigraties, nieuwe productlanceringen.",
          output: "Projectgovernance, milestone-reviews, risicotracking, vendormanagement.",
        },
      ],
      decisionExamplesTitle: "Wat technisch leiderschap daadwerkelijk beslist",
      decisionExamples: [
        {
          number: "01",
          title: "Microservices of modulaire monolith?",
          context:
            "Een team van 8 engineers bouwt een nieuw platform. De architectuurkeuze zal teamorganisatie en leveringssnelheid jarenlang vormgeven.",
          outcome:
            "Een beslissingsframework gekoppeld aan teamgrootte, snelheidsdoelen en operationele volwassenheid — met gedocumenteerde aanbeveling en criteria voor herziening.",
        },
        {
          number: "02",
          title: "Welke cloud vendor en waarom?",
          context:
            "Drie vendors dienen voorstellen in. Elke heeft verschillende prijzen, lock-in en capability trade-offs.",
          outcome:
            "Een gestructureerde vergelijking met echte workloadprofielen, total cost modeling en aanbeveling die rekening houdt met team-capaciteiten.",
        },
        {
          number: "03",
          title: "De AI-laag bouwen of een vendor gebruiken?",
          context:
            "Het productroadmap bevat AI-features. Het team heeft geen ML-engineeringcapaciteit.",
          outcome:
            "Een build vs buy framework toegepast op hun specifieke use case, met criteria voor herziening naarmate de markt evolueert.",
        },
        {
          number: "04",
          title: "Hoe structureren we het vendorcontract?",
          context:
            "Een extern team heeft een voorstel ingediend. Scope, tijdlijn en milestones hebben review nodig.",
          outcome:
            "Een contractstructuur die beschermt tegen scope creep, duidelijke acceptatiecriteria definieert en performance gates bevat.",
        },
      ],
      rhythmTitle: "Hoe de doorlopende samenwerking werkt",
      rhythm: [
        {
          icon: CalendarIcon,
          title: "Wekelijkse beslissessies",
          desc: "2 uur gefocuste werksessies om open technische vragen aan te pakken, opties te reviewen en beslissingen af te ronden.",
        },
        {
          icon: TargetIcon,
          title: "Twowekelijkse roadmap-review",
          desc: "Gepland werk wordt gereviewd tegen capaciteit, risico en businessprioriteiten. Scope wordt aangepast met volledig zicht.",
        },
        {
          icon: LightningIcon,
          title: "On-demand escalatie",
          desc: "Wanneer iets urgent opduikt, draaien we een versnelde beslissessie binnen 24-48 uur.",
        },
      ],
      credibilityTitle: "Hoe ik werk",
      credibility: [
        "ADAPT-framework voor beslissingsgedreven delivery",
        "Architecture Decision Records (ADRs) als primair outputformaat",
        "First-principles denken boven pattern matching",
        "Geen vendor-affiliaties of commissieafspraken",
        "Directe toegang — geen account managers of lagen",
      ],
      pricing: {
        badge: "Deelname-opties",
        title: "Leiderschap dat bij je fase past",
        subtitle:
          "Prijzen vanaf, excl. btw. Drie formaten afhankelijk van beslissingscomplexiteit en hoe lang je ondersteuning nodig hebt. De uiteindelijke scope hangt af van bedrijfsfase, teamstructuur, vendorrisico, systemen en deliverycomplexiteit; daarom starten we met een gerichte assessment voordat we het traject bepalen.",
        decisionSprint: {
          name: "Decision Sprint",
          price: "Vanaf €5.500",
          timeline: "2-3 weken",
          desc: "Voor een specifieke beslissing die moet worden genomen voordat je verder kunt.",
          includes: [
            "Discovery-sessies met je team",
            "Optie-analyse en onderzoek",
            "Beslissingsbrief met aanbeveling",
            "Implementatiepad-outline",
            "2 weken follow-up voor vragen",
          ],
          cta: "Start sprint",
        },
        ongoing: {
          name: "Doorlopende Samenwerking",
          price: "Vanaf €4.500/maand",
          timeline: "Minimaal 3 maanden",
          desc: "Voor founders en teams die consistent senior oordeel nodig hebben.",
          recommended: true,
          includes: [
            "Wekelijkse 2-uurs beslissessie",
            "Twowekelijkse roadmap-review",
            "Onbeperkte async-escalatie",
            "Beslissingsverslagen en documentatie",
            "Vendorcoördinatie-ondersteuning",
          ],
          cta: "Start samenwerking",
        },
        project: {
          name: "Project Oversight",
          price: "Vanaf €10.000",
          timeline: "Per project",
          desc: "Voor complexe builds die governance nodig hebben van scoping tot delivery.",
          includes: [
            "Projectdiscovery en scoping",
            "Milestone-governance",
            "Vendormanagement",
            "Risicotracking en -mitigatie",
            "Overdrachtsdocumentatie",
          ],
          cta: "Bespreek project",
        },
      },
      audienceTitle: "Waar senior richting helpt",
      audiences: [
        {
          title: "Founders zonder fulltime CTO",
          desc: "Je hebt senior technisch oordeel nodig voor roadmap, vendors, hiring, architectuur en delivery trade-offs zonder vaste executive rol.",
        },
        {
          title: "Teams die een risicovolle build starten",
          desc: "Het product is complex genoeg dat vroege architectuur- en scopekeuzes maandenlang kosten bepalen.",
        },
        {
          title: "Leiders die vendors of platforms reviewen",
          desc: "Je hebt een onafhankelijke blik nodig voordat je vastlegt op partner, stack, migratie of operating model.",
        },
      ],
      scopeTitle: "Wat de leiderschapslaag dekt",
      scope: [
        "Architectuurrichting, technische trade-offs, platformkeuzes en build-versus-buy beslissingen.",
        "Deliveryritme, scopecontrole, milestone-helderheid en decision records voor het team.",
        "Vendor review, voorstelreview, implementatierisico en handoffplanning.",
        "Product-engineeringprioriteiten die businessdoelen aan technische sequencing koppelen.",
      ],
      detailTitle: "Een praktische cadans voor high-leverage beslissingen",
      details: [
        {
          title: "Beslissessies",
          desc: "Gerichte werksessies maken van open technische vragen duidelijke opties, gevolgen en acties.",
        },
        {
          title: "Roadmap pressure testing",
          desc: "Plannen worden getoetst aan teamcapaciteit, architectuurrisico, user value en verborgen operationele kosten.",
        },
        {
          title: "Execution guardrails",
          desc: "Het team krijgt constraints, sequencing en reviewpunten die drift voorkomen zonder delivery te vertragen.",
        },
      ],
      faqTitle: "Leiderschapsvragen",
      faqs: [
        {
          q: "Is dit fractional CTO?",
          a: "Het kan die rol ondersteunen, maar de focus is scherper: technische beslissingen, deliveryrichting, vendor review en product engineering oordeel.",
        },
        {
          q: "Kun je met ons bestaande team werken?",
          a: "Ja. Het doel is meer helderheid en betere beslissingen, niet het vervangen van de mensen die al bouwen.",
        },
        {
          q: "Hoe ziet typische output eruit?",
          a: "Decision notes, roadmapaanbevelingen, architectuurrichting, risk review en concrete next actions voor team of vendors.",
        },
        {
          q: "Hoe snel kun je onze codebase begrijpen?",
          a: "Voor een Decision Sprint besteed ik typisch de eerste week aan discovery — codereview, architectuurreview en gesprekken met het team.",
        },
        {
          q: "Wat als we maar één specifieke beslissing nodig hebben?",
          a: "Het Decision Sprint-formaat is hier precies voor ontworpen. We focussen op één beslissingsgebied, leveren de analyse en aanbeveling en sluiten de samenwerking.",
        },
      ],
    },
  });

  return (
    <StudioServiceShell locale={locale} path={path} breadcrumbName={copy.title}>
      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute bottom-0 right-0 h-[560px] w-[560px] rounded-full bg-hunter-orange/[0.07] blur-[150px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-hunter-orange/20 bg-hunter-orange/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-hunter-orange">
              {copy.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl">
              {copy.title} <span className="text-hunter-green">{copy.accent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              {copy.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-hunter-orange px-8 py-4 text-sm font-black uppercase tracking-widest text-near-black transition-colors hover:bg-white"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white transition-colors hover:border-hunter-green/40 hover:text-hunter-green"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
          <LeadershipRadar areas={copy.areas} />
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <DecisionMatrix title={copy.matrixTitle} areas={copy.areas} />
          <RiskBoard risks={copy.risks} />
        </div>
      </section>

      <EngagementTypesSection title={copy.engagementTypesTitle} items={copy.engagementTypes} />
      <DecisionExamplesSection title={copy.decisionExamplesTitle} items={copy.decisionExamples} />
      <DeliveryRhythmSection title={copy.rhythmTitle} items={copy.rhythm} />
      <CredibilitySection title={copy.credibilityTitle} items={copy.credibility} />
      <PricingSection pricing={copy.pricing} />

      <AudienceFit title={copy.audienceTitle} items={copy.audiences} />
      <EngagementScope title={copy.scopeTitle} items={copy.scope} />
      <DeliveryDetail title={copy.detailTitle} items={copy.details} />
      <DecisionFaq title={copy.faqTitle} items={copy.faqs} />
    </StudioServiceShell>
  );
}

function EngagementTypesSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ name: string; duration: string; desc: string; bestFor: string; output: string }>;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Engagement Types
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-near-black p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white">{item.name}</h3>
                <span className="rounded-full border border-hunter-orange/30 bg-hunter-orange/10 px-3 py-1 font-mono text-xs text-hunter-orange">
                  {item.duration}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-400">{item.desc}</p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-wider text-gray-500">
                    Best for
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{item.bestFor}</p>
                </div>
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-wider text-gray-500">
                    Output
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{item.output}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionExamplesSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ number: string; title: string; context: string; outcome: string }>;
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          Decision Examples
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-6">
          {items.map((item) => (
            <article
              key={item.number}
              className="grid gap-6 rounded-3xl border border-white/10 bg-near-black p-8 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-hunter-green/30 bg-hunter-green/10 font-mono text-lg font-black text-hunter-green">
                {item.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-gray-500">
                      Context
                    </p>
                    <p className="text-sm text-gray-400">{item.context}</p>
                  </div>
                  <div className="rounded-2xl border border-hunter-green/20 bg-hunter-green/5 p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-hunter-green">
                      Outcome
                    </p>
                    <p className="text-sm text-gray-400">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryRhythmSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ icon: React.ComponentType<IconProps>; title: string; desc: string }>;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Delivery Rhythm
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <item.icon className="mb-6 h-10 w-10 text-hunter-orange" />
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredibilitySection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
              How I Work
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
    decisionSprint: PricingPlan;
    ongoing: PricingPlan;
    project: PricingPlan;
  };
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
            {pricing.badge}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-5xl">{pricing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">{pricing.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[pricing.decisionSprint, pricing.ongoing, pricing.project].map((plan) => (
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
                <div className="mt-4 text-3xl font-black text-hunter-orange">{plan.price}</div>
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
                    ? "bg-hunter-orange text-near-black hover:bg-white"
                    : "border border-white/20 text-white hover:border-hunter-orange/50 hover:text-hunter-orange"
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
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
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
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="text-4xl font-black leading-none tracking-tighter md:text-5xl">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-hunter-orange/20 bg-hunter-orange/[0.05] p-6"
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
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
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
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
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

function LeadershipRadar({ areas }: { areas: string[] }) {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080706] p-8 shadow-2xl shadow-black/50">
      <div className="absolute inset-10 rounded-full border border-hunter-orange/20" />
      <div className="absolute inset-24 rounded-full border border-hunter-green/20" />
      <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-white/10" />
      <div className="absolute left-8 top-1/2 h-px w-[calc(100%-4rem)] -translate-y-1/2 bg-white/10" />
      <p className="relative font-mono text-xs font-black uppercase tracking-[0.28em] text-hunter-orange">
        LeadershipRadar
      </p>
      <div className="relative mt-16 grid grid-cols-2 gap-5">
        {areas.map((area, index) => (
          <div key={area} className="rounded-3xl border border-white/10 bg-near-black/90 p-6">
            <p className="font-mono text-xs text-hunter-green">Q{index + 1}</p>
            <h3 className="mt-5 text-2xl font-black tracking-tight text-white">{area}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionMatrix({ title, areas }: { title: string; areas: string[] }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-near-black p-8">
      <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
        DecisionMatrix
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
        {title}
      </h2>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {areas.map((area) => (
          <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-bold text-white">{area}</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full bg-hunter-green" />
              <div className="h-2 rounded-full bg-hunter-orange" />
              <div className="h-2 rounded-full bg-white/20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskBoard({ risks }: { risks: string[] }) {
  return (
    <div className="grid gap-4">
      {risks.map((risk) => (
        <article
          key={risk}
          className="rounded-3xl border border-hunter-orange/20 bg-hunter-orange/[0.06] p-6"
        >
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-hunter-orange">
            RiskBoard
          </p>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{risk}</h3>
        </article>
      ))}
    </div>
  );
}
