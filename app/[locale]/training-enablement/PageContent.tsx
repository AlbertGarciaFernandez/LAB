import { Link } from "@/navigation";
import { StudioServiceShell } from "../_shared/StudioServicePage";
import { getLocaleValue } from "../_shared/localeCopy";
import {
  CheckIcon,
  ClockIcon,
  UsersIcon,
  ChartLineIcon,
  TargetIcon,
} from "@phosphor-icons/react/dist/ssr";

const path = "/training-enablement";

export default function TrainingEnablementContent({ locale }: { locale: string }) {
  const copy = getLocaleValue(locale, {
    en: {
      eyebrow: "Team enablement",
      title: "Training that turns new systems",
      accent: "into team habits.",
      description:
        "Practical workshops and enablement for teams adopting AI tools, automation workflows, product standards, or new delivery processes.",
      primaryCta: "Plan training",
      secondaryCta: "View services",
      modules: ["Workflow map", "Live practice", "Escalation rules", "Reusable docs"],
      manualTitle: "Adoption support for people who need to use the system tomorrow.",
      loops: ["Watch", "Practice", "Own", "Improve"],
      metrics: {
        badge: "By the numbers",
        value1: "73%",
        label1: "Adoption rate within first week",
        value2: "4.2x",
        label2: "Faster time-to-competency vs self-training",
        value3: "89%",
        label3: "Teams still using system after 90 days",
        value4: "12min",
        label4: "Average task completion time reduction",
      },
      useCasesTitle: "Where training creates the most impact",
      useCases: [
        {
          number: "01",
          title: "Post-implementation onboarding",
          problem:
            "A new CRM, automation platform, or AI tool was deployed, but the team uses it inconsistently or defaults to old processes.",
          solution:
            "Practical sessions that map the new system to daily tasks, with exercises built around real work the team actually does.",
          outcome:
            "Consistent daily usage within 2 weeks. Reduction in 'I'll just do it manually' behavior.",
        },
        {
          number: "02",
          title: "New employee ramp-up",
          problem:
            "Onboarding a new team member to an existing workflow takes 3-4 weeks of informal hand-holding before they are productive.",
          solution:
            "Structured enablement modules with documented workflows, practice environments, and clear escalation paths they can follow independently.",
          outcome:
            "New hires productive in under 10 days. Knowledge not dependent on a single person.",
        },
        {
          number: "03",
          title: "Process change without resistance",
          problem:
            "A workflow change is needed, but the team is resistant because they weren't consulted and don't understand the 'why'.",
          solution:
            "Interactive sessions that explain the reasoning, let people practice the new flow, and create space for concerns before go-live.",
          outcome: "Reduced resistance at launch. Higher voluntary adoption of the new process.",
        },
        {
          number: "04",
          title: "Scaling without degradation",
          problem:
            "As the team grows, inconsistent execution of workflows creates quality issues and customer-facing errors.",
          solution:
            "Standard operating procedures, practice drills, and certification-style checks that maintain quality as the team doubles or triples.",
          outcome: "Consistent quality regardless of team size. New hires hit quality bars faster.",
        },
      ],
      successTitle: "How you know the training worked",
      successSigns: [
        {
          title: "People complete tasks without asking for help",
          desc: "The team can execute the workflow independently for routine cases.",
        },
        {
          title: "Exceptions get routed correctly",
          desc: "When something falls outside the standard path, the team recognizes it and escalates rather than guessing.",
        },
        {
          title: "Knowledge is documented, not memorized",
          desc: "The artifacts from training — checklists, runbooks, decision trees — are actually used as reference.",
        },
        {
          title: "Onboarding new people is faster",
          desc: "The next new hire can get productive using the training material, not just shadowing colleagues.",
        },
      ],
      pricing: {
        badge: "Engagement options",
        title: "Training built around your team",
        subtitle:
          "Starting prices, excl. VAT. Three formats depending on team size, urgency, and how much ongoing support you need. Final scope depends on company size, workflow complexity, number of teams and adoption risk, so we audit the current process before pricing the program.",
        starter: {
          name: "Workshop",
          price: "From €2,500 per team",
          timeline: "1 day",
          desc: "A focused practical session for a specific workflow or tool adoption.",
          includes: [
            "Pre-session workflow review",
            "Half-day live practice workshop",
            "Digital materials and checklists",
            "30-day Q&A window",
          ],
          cta: "Book a workshop",
        },
        pro: {
          name: "Enablement Package",
          price: "From €7,500",
          timeline: "3-4 weeks",
          desc: "Full adoption support for teams implementing a new system or process.",
          recommended: true,
          includes: [
            "Workflow mapping and documentation",
            "3 live practice sessions",
            "Escalation rules and decision trees",
            "Reusable onboarding materials",
            "60-day follow-up support",
          ],
          cta: "Plan enablement",
        },
        enterprise: {
          name: "Train-the-Trainer",
          price: "From €12,500",
          timeline: "6-8 weeks",
          desc: "For organizations that need internal capability to scale adoption independently.",
          includes: [
            "Full enablement program design",
            "Internal trainer certification",
            "Materials licensed for internal use",
            "Quarterly review sessions",
            "Ongoing access to materials library",
          ],
          cta: "Discuss enterprise",
        },
      },
      audienceTitle: "Teams this helps",
      audiences: [
        {
          title: "Teams adopting AI or automation",
          desc: "People need to understand where the new workflow helps, where human judgment stays, and what to do when the system is uncertain.",
        },
        {
          title: "Operations teams with new tools",
          desc: "The process is changing and the team needs practical routines, not a theoretical training deck.",
        },
        {
          title: "Leads who need consistent handoff",
          desc: "You want reusable instructions, examples, and escalation rules so knowledge does not live in one person's head.",
        },
      ],
      scopeTitle: "What the enablement package includes",
      scope: [
        "Workflow walkthroughs that connect the new system to real daily tasks.",
        "Live practice sessions with examples, edge cases, and correction loops.",
        "Simple rules for escalation, exceptions, ownership, and quality control.",
        "Reusable documentation, checklists, and onboarding material for future team members.",
      ],
      detailTitle: "Training designed for adoption, not attendance",
      details: [
        {
          title: "Map the real behavior",
          desc: "We identify where people are likely to hesitate, bypass the tool, or misunderstand the new workflow.",
        },
        {
          title: "Practice with the actual work",
          desc: "Sessions use realistic tasks so the team builds confidence before the system becomes business-as-usual.",
        },
        {
          title: "Leave operating material behind",
          desc: "The output is not just a call recording. The team gets artifacts they can reuse and update.",
        },
      ],
      faqTitle: "Training questions",
      faqs: [
        {
          q: "Can this support a system you did not build?",
          a: "Yes, if the workflow can be inspected and documented. The training focuses on adoption and operating behavior.",
        },
        {
          q: "Is this for technical or non-technical teams?",
          a: "Both. The sessions are shaped around the audience, from operators using a workflow to engineers maintaining it.",
        },
        {
          q: "How do we know if it worked?",
          a: "Success is measured by whether people can complete real tasks, handle exceptions, and explain when to escalate.",
        },
        {
          q: "What's the difference between the Workshop and the Enable Package?",
          a: "The Workshop is a single focused session for a specific skill or tool. The Enablement Package is a multi-week program that includes documentation, ongoing support, and materials for future onboarding.",
        },
        {
          q: "Can we train multiple teams at once?",
          a: "Yes. For organizations with multiple teams adopting the same system, we can run cohort sessions or certify internal trainers to scale independently.",
        },
      ],
    },
    es: {
      eyebrow: "Adopción de equipo",
      title: "Formación que convierte sistemas nuevos",
      accent: "en hábitos de equipo.",
      description:
        "Workshops prácticos para equipos que adoptan herramientas IA, automatizaciones, estándares de producto o nuevos procesos de entrega.",
      primaryCta: "Planificar formación",
      secondaryCta: "Ver servicios",
      modules: ["Mapa de flujo", "Práctica en vivo", "Reglas de escalado", "Docs reutilizables"],
      manualTitle: "Adopción para quienes tienen que usar el sistema mañana.",
      loops: ["Ver", "Practicar", "Operar", "Mejorar"],
      metrics: {
        badge: "En cifras",
        value1: "73%",
        label1: "Tasa de adopción en la primera semana",
        value2: "4.2x",
        label2: "Más rápido hasta competencia vs autoformación",
        value3: "89%",
        label3: "Equipos que siguen usando el sistema tras 90 días",
        value4: "12min",
        label4: "Reducción media en tiempo de tarea",
      },
      useCasesTitle: "Dónde crea más impacto la formación",
      useCases: [
        {
          number: "01",
          title: "Incorporación post-implementación",
          problem:
            "Se desplegó un nuevo CRM, plataforma de automatización o herramienta IA, pero el equipo la usa de forma inconsistente.",
          solution:
            "Sesiones prácticas que conectan el nuevo sistema con tareas diarias, con ejercicios basados en trabajo real.",
          outcome: "Uso consistente en 2 semanas. Reducción de 'lo hago manualmente'.",
        },
        {
          number: "02",
          title: "Incorporación de nuevos empleados",
          problem:
            "Un nuevo miembro del equipo tarda 3-4 semanas de formación informal antes de ser productivo.",
          solution:
            "Módulos estructurados con flujos documentados, entornos de práctica y caminos de escalado claros.",
          outcome: "Nuevos empleados productivos en menos de 10 días.",
        },
        {
          number: "03",
          title: "Cambio de proceso sin resistencia",
          problem:
            "Se necesita un cambio de flujo, pero el equipo resiste porque no se le consultó.",
          solution:
            "Sesiones interactivas que explican el porqué, dejan practicar el nuevo flujo y dan espacio a dudas.",
          outcome: "Menos resistencia en el lanzamiento. Mayor adopción voluntaria.",
        },
        {
          number: "04",
          title: "Escalar sin degradación",
          problem: "Al crecer el equipo, la ejecución inconsistente crea problemas de calidad.",
          solution: "Procedimientos estándar, simulacros y checks que mantienen la calidad.",
          outcome: "Calidad consistente sin importar el tamaño del equipo.",
        },
      ],
      successTitle: "Cómo saber si la formación funcionó",
      successSigns: [
        {
          title: "La gente completa tareas sin pedir ayuda",
          desc: "El equipo puede ejecutar el flujo independientemente para casos rutinarios.",
        },
        {
          title: "Las excepciones se rutean correctamente",
          desc: "Cuando algo sale del camino estándar, el equipo lo reconoce y escala.",
        },
        {
          title: "El conocimiento está documentado, no memorizado",
          desc: "Los artefactos de formación —checklists, runbooks— se usan como referencia.",
        },
        {
          title: "Incorporar gente nueva es más rápido",
          desc: "El siguiente contratado puede ser productivo usando el material, no solo observando.",
        },
      ],
      pricing: {
        badge: "Opciones de participación",
        title: "Formación construida para tu equipo",
        subtitle:
          "Precios desde, sin IVA. Tres formatos según tamaño de equipo, urgencia y soporte continuo necesario. El alcance final depende del tamaño de la empresa, complejidad del flujo, número de equipos y riesgo de adopción; por eso auditamos el proceso actual antes de presupuestar el programa.",
        starter: {
          name: "Workshop",
          price: "Desde €2.500 por equipo",
          timeline: "1 día",
          desc: "Sesión práctica enfocada para adoptar una herramienta o flujo específico.",
          includes: [
            "Revisión previa del flujo de trabajo",
            "Taller práctico de medio día",
            "Materiales digitales y checklists",
            "30 días de Q&A",
          ],
          cta: "Reservar workshop",
        },
        pro: {
          name: "Paquete de Adopción",
          price: "Desde €7.500",
          timeline: "3-4 semanas",
          desc: "Soporte completo para equipos implementando un nuevo sistema o proceso.",
          recommended: true,
          includes: [
            "Mapeo y documentación del flujo",
            "3 sesiones de práctica",
            "Reglas de escalado y árboles de decisión",
            "Materiales de onboarding reutilizables",
            "60 días de soporte de seguimiento",
          ],
          cta: "Planificar adopción",
        },
        enterprise: {
          name: "Formador de Formadores",
          price: "Desde €12.500",
          timeline: "6-8 semanas",
          desc: "Para organizaciones que necesitan capacidad interna para escalar adopción.",
          includes: [
            "Diseño completo del programa",
            "Certificación de formadores internos",
            "Materiales con licencia para uso interno",
            "Sesiones de revisión trimestrales",
            "Acceso continuo a la biblioteca de materiales",
          ],
          cta: "Discutir empresa",
        },
      },
      audienceTitle: "Equipos a los que ayuda",
      audiences: [
        {
          title: "Equipos adoptando IA o automatización",
          desc: "El equipo necesita entender dónde ayuda el flujo nuevo, dónde sigue el criterio humano y qué hacer si el sistema duda.",
        },
        {
          title: "Operaciones con nuevas herramientas",
          desc: "El proceso cambia y el equipo necesita rutinas prácticas, no un deck teórico.",
        },
        {
          title: "Líderes que necesitan handoff consistente",
          desc: "Quieres instrucciones, ejemplos y reglas reutilizables para que el conocimiento no dependa de una sola persona.",
        },
      ],
      scopeTitle: "Qué incluye el paquete de adopción",
      scope: [
        "Walkthroughs conectados a tareas reales del día a día.",
        "Sesiones prácticas con ejemplos, casos límite y ciclos de corrección.",
        "Reglas simples para escalado, excepciones, ownership y control de calidad.",
        "Documentación, checklists y material de onboarding reutilizable.",
      ],
      detailTitle: "Formación diseñada para adopción, no asistencia",
      details: [
        {
          title: "Mapear el comportamiento real",
          desc: "Identificamos dónde el equipo dudará, rodeará la herramienta o entenderá mal el nuevo flujo.",
        },
        {
          title: "Practicar con trabajo real",
          desc: "Las sesiones usan tareas realistas para crear confianza antes de que el sistema sea rutina.",
        },
        {
          title: "Dejar material operativo",
          desc: "El resultado no es solo una grabación. El equipo recibe artefactos que puede reutilizar y actualizar.",
        },
      ],
      faqTitle: "Preguntas de formación",
      faqs: [
        {
          q: "¿Sirve para un sistema que no construisteis vosotros?",
          a: "Sí, si el flujo puede revisarse y documentarse. La formación se centra en adopción y operación.",
        },
        {
          q: "¿Es para equipos técnicos o no técnicos?",
          a: "Ambos. Las sesiones se adaptan al público: operadores usando un flujo o engineers manteniéndolo.",
        },
        {
          q: "¿Cómo sabemos si funcionó?",
          a: "Se mide por si las personas pueden completar tareas reales, manejar excepciones y explicar cuándo escalar.",
        },
        {
          q: "¿Cuál es la diferencia entre Workshop y Paquete de Adopción?",
          a: "El Workshop es una sesión única para una habilidad o herramienta. El Paquete de Adopción es un programa de varias semanas con documentación, soporte y materiales.",
        },
        {
          q: "¿Podemos formar a varios equipos a la vez?",
          a: "Sí. Para organizaciones con múltiples equipos adoptando el mismo sistema, podemos hacer sesiones por cohortes o certificar formadores internos.",
        },
      ],
    },
    nl: {
      eyebrow: "Team enablement",
      title: "Training die nieuwe systemen",
      accent: "teamgewoontes maakt.",
      description:
        "Praktische workshops voor teams die AI-tools, automatiseringen, productstandaarden of nieuwe deliveryprocessen adopteren.",
      primaryCta: "Plan training",
      secondaryCta: "Bekijk services",
      modules: ["Workflow map", "Live practice", "Escalatieregels", "Herbruikbare docs"],
      manualTitle: "Adoptiesupport voor mensen die het systeem morgen moeten gebruiken.",
      loops: ["Kijken", "Oefenen", "Bezitten", "Verbeteren"],
      metrics: {
        badge: "In cijfers",
        value1: "73%",
        label1: "Adoptiegraad in eerste week",
        value2: "4.2x",
        label2: "Snellere competentie vs zelfstudie",
        value3: "89%",
        label3: "Teams die systeem na 90 dagen nog gebruiken",
        value4: "12min",
        label4: "Gemiddelde reductie in taakduur",
      },
      useCasesTitle: "Waar training de meeste impact heeft",
      useCases: [
        {
          number: "01",
          title: "Post-implementatie onboarding",
          problem:
            "Een nieuw CRM, automatiseringsplatform of AI-tool is geïmplementeerd, maar het team gebruikt het inconsistent.",
          solution:
            "Praktische sessies die het nieuwe systeem koppelen aan dagelijkse taken, met oefeningen rond echt werk.",
          outcome: "Consistent gebruik binnen 2 weken. Minder 'ik doe het wel handmatig'.",
        },
        {
          number: "02",
          title: "Nieuwe werknemer onboarding",
          problem:
            "Een nieuw teamlid heeft 3-4 weken informele begeleiding nodig voordat ze productief zijn.",
          solution:
            "Gestructureerde enablement-modules met gedocumenteerde workflows en duidelijke escalatiepaden.",
          outcome: "Nieuwe medewerkers productief in minder dan 10 dagen.",
        },
        {
          number: "03",
          title: "Procesverandering zonder weerstand",
          problem:
            "Een workflow-verandering is nodig, maar het team verzet zich omdat ze niet geraadpleegd werden.",
          solution:
            "Interactieve sessies die de reden uitleggen, de nieuwe flow laten oefenen en ruimte geven voor zorgen.",
          outcome: "Minder weerstand bij lancering. Hogere vrijwillige adoptie.",
        },
        {
          number: "04",
          title: "Schalen zonder kwaliteitsverlies",
          problem:
            "Naarmate het team groeit, creëert inconsistente uitvoering kwaliteitsproblemen.",
          solution:
            "Standaardprocedures, oefendrills en certificeringschecks die kwaliteit behouden.",
          outcome: "Consistente kwaliteit ongeacht teamgrootte.",
        },
      ],
      successTitle: "Hoe weet je of de training werkte",
      successSigns: [
        {
          title: "Mensen voltooien taken zonder hulp te vragen",
          desc: "Het team kan de workflow zelfstandig uitvoeren voor routinematige gevallen.",
        },
        {
          title: "Uitzonderingen worden correct gerouteerd",
          desc: "Wanneer iets buiten het standaardpad valt, herkent het team dit en escaleert.",
        },
        {
          title: "Kennis is gedocumenteerd, niet gememoriseerd",
          desc: "De trainingsartefacten —checklists, runbooks— worden daadwerkelijk gebruikt als referentie.",
        },
        {
          title: "Nieuwe mensen onboarden gaat sneller",
          desc: "De volgende nieuwe werknemer kan productief worden met het materiaal.",
        },
      ],
      pricing: {
        badge: "Deelname-opties",
        title: "Training gebouwd voor jouw team",
        subtitle:
          "Prijzen vanaf, excl. btw. Drie formaten afhankelijk van teamgrootte, urgentie en ondersteuningsbehoefte. De uiteindelijke scope hangt af van bedrijfsgrootte, workflowcomplexiteit, aantal teams en adoptierisico; daarom auditen we het huidige proces voordat we het programma ramen.",
        starter: {
          name: "Workshop",
          price: "Vanaf €2.500 per team",
          timeline: "1 dag",
          desc: "Gerichte praktische sessie voor specifieke tool- of workflowadoptie.",
          includes: [
            "Pre-sessie workflow-review",
            "Halve dag praktijkoefening",
            "Digitale materialen en checklists",
            "30 dagen Q&A",
          ],
          cta: "Boek workshop",
        },
        pro: {
          name: "Enablement Pakket",
          price: "Vanaf €7.500",
          timeline: "3-4 weken",
          desc: "Volledige adoptie-ondersteuning voor teams die een nieuw systeem implementeren.",
          recommended: true,
          includes: [
            "Workflow-mapping en documentatie",
            "3 praktijkoefensessies",
            "Escalatieregels en beslisbomen",
            "Herbruikbare onboardingmaterialen",
            "60 dagen follow-up ondersteuning",
          ],
          cta: "Plan enablement",
        },
        enterprise: {
          name: "Train-de-Trainer",
          price: "Vanaf €12.500",
          timeline: "6-8 weken",
          desc: "Voor organisaties die interne capaciteit nodig hebben om adoptie te schalen.",
          includes: [
            "Volledig enablement-programmaontwerp",
            "Interne trainer-certificering",
            "Materialen gelicentieerd voor intern gebruik",
            "Kwartaalse review-sessies",
            "Doorlopende toegang tot materialenbibliotheek",
          ],
          cta: "Bespreek enterprise",
        },
      },
      audienceTitle: "Teams die dit helpt",
      audiences: [
        {
          title: "Teams die AI of automation adopteren",
          desc: "Mensen moeten snappen waar de nieuwe workflow helpt, waar menselijk oordeel blijft en wat te doen bij onzekerheid.",
        },
        {
          title: "Operationele teams met nieuwe tools",
          desc: "Het proces verandert en het team heeft praktische routines nodig, geen theoretische trainingsdeck.",
        },
        {
          title: "Leads die consistente handoff nodig hebben",
          desc: "Je wilt herbruikbare instructies, voorbeelden en escalatieregels zodat kennis niet in een hoofd blijft zitten.",
        },
      ],
      scopeTitle: "Wat het enablementpakket bevat",
      scope: [
        "Workflow walkthroughs gekoppeld aan echte dagelijkse taken.",
        "Live oefensessies met voorbeelden, edge cases en correctielussen.",
        "Simpele regels voor escalatie, uitzonderingen, ownership en kwaliteitscontrole.",
        "Herbruikbare documentatie, checklists en onboardingmateriaal voor toekomstige teamleden.",
      ],
      detailTitle: "Training ontworpen voor adoptie, niet aanwezigheid",
      details: [
        {
          title: "Echt gedrag mappen",
          desc: "We bepalen waar mensen gaan twijfelen, de tool omzeilen of de nieuwe workflow verkeerd begrijpen.",
        },
        {
          title: "Oefenen met echt werk",
          desc: "Sessies gebruiken realistische taken zodat het team vertrouwen opbouwt voordat het systeem routine wordt.",
        },
        {
          title: "Operationeel materiaal achterlaten",
          desc: "De output is niet alleen een opname. Het team krijgt artifacts die ze kunnen hergebruiken en aanpassen.",
        },
      ],
      faqTitle: "Trainingsvragen",
      faqs: [
        {
          q: "Kan dit voor een systeem dat jullie niet bouwden?",
          a: "Ja, als de workflow bekeken en gedocumenteerd kan worden. De training focust op adoptie en gebruiksgedrag.",
        },
        {
          q: "Is dit voor technische of niet-technische teams?",
          a: "Beide. Sessies worden gevormd rond het publiek, van operators tot engineers die het onderhouden.",
        },
        {
          q: "Hoe weten we of het werkte?",
          a: "Succes betekent dat mensen echte taken kunnen afronden, uitzonderingen aankunnen en weten wanneer ze escaleren.",
        },
        {
          q: "Wat is het verschil tussen Workshop en Enable Pakket?",
          a: "De Workshop is een enkele sessie voor een specifieke vaardigheid. Het Enable Pakket is een programma van meerdere weken met documentatie en ondersteuning.",
        },
        {
          q: "Kunnen we meerdere teams tegelijk trainen?",
          a: "Ja. Voor organisaties met meerdere teams die hetzelfde systeem adopteren, kunnen we cohort-sessies doen of interne trainers certificeren.",
        },
      ],
    },
  });

  return (
    <StudioServiceShell locale={locale} path={path} breadcrumbName={copy.title}>
      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute left-10 top-24 h-[500px] w-[500px] rounded-full bg-hunter-green/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
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
          <WorkshopPath modules={copy.modules} />
        </div>
      </section>

      <AdoptionMetrics metrics={copy.metrics} />
      <UseCasesSection title={copy.useCasesTitle} items={copy.useCases} />
      <SuccessSignsSection title={copy.successTitle} items={copy.successSigns} />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <EnablementManual title={copy.manualTitle} modules={copy.modules} />
          <PracticeLoop loops={copy.loops} />
        </div>
      </section>

      <PricingSection pricing={copy.pricing} />
      <AudienceFit title={copy.audienceTitle} items={copy.audiences} />
      <EngagementScope title={copy.scopeTitle} items={copy.scope} />
      <DeliveryDetail title={copy.detailTitle} items={copy.details} />
      <DecisionFaq title={copy.faqTitle} items={copy.faqs} />
    </StudioServiceShell>
  );
}

function AdoptionMetrics({
  metrics,
}: {
  metrics: {
    badge: string;
    value1: string;
    label1: string;
    value2: string;
    label2: string;
    value3: string;
    label3: string;
    value4: string;
    label4: string;
  };
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          {metrics.badge}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { value: metrics.value1, label: metrics.label1, icon: UsersIcon },
            { value: metrics.value2, label: metrics.label2, icon: ClockIcon },
            { value: metrics.value3, label: metrics.label3, icon: ChartLineIcon },
            { value: metrics.value4, label: metrics.label4, icon: TargetIcon },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-near-black/50 p-6 text-center"
            >
              <item.icon className="mb-4 h-8 w-8 text-hunter-green" />
              <div className="text-4xl font-black text-hunter-green">{item.value}</div>
              <p className="mt-2 text-sm leading-snug text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection({
  title,
  items,
}: {
  title: string;
  items: Array<{
    number: string;
    title: string;
    problem: string;
    solution: string;
    outcome: string;
  }>;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Use Cases
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-8">
          {items.map((item) => (
            <article
              key={item.number}
              className="grid gap-6 rounded-3xl border border-white/10 bg-near-black p-8 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-hunter-orange/30 bg-hunter-orange/10 font-mono text-lg font-black text-hunter-orange">
                {item.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-red-400">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-gray-400">{item.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-hunter-green/20 bg-hunter-green/5 p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-hunter-green">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-gray-400">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-hunter-orange/20 bg-hunter-orange/5 p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-hunter-orange">
                      Outcome
                    </p>
                    <p className="text-sm leading-relaxed text-gray-400">{item.outcome}</p>
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

function SuccessSignsSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
              Success Indicators
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
              {title}
            </h2>
          </div>
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-near-black p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hunter-green/10 font-mono text-sm font-black text-hunter-green">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
    starter: PricingPlan;
    pro: PricingPlan;
    enterprise: PricingPlan;
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
          {[pricing.starter, pricing.pro, pricing.enterprise].map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
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
              <ul className="mt-8 space-y-3">
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

function WorkshopPath({ modules }: { modules: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#070907] p-8 shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,230,162,0.14),transparent_28%),linear-gradient(135deg,rgba(255,122,60,0.08),transparent_45%)]" />
      <p className="relative font-mono text-xs font-black uppercase tracking-[0.28em] text-hunter-green">
        WorkshopPath
      </p>
      <div className="relative mt-10 space-y-5">
        {modules.map((module, index) => (
          <div key={module} className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-hunter-green/30 bg-hunter-green/10 font-mono text-sm font-black text-hunter-green">
              0{index + 1}
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-near-black p-5">
              <h3 className="text-xl font-black tracking-tight text-white">{module}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnablementManual({ title, modules }: { title: string; modules: string[] }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
        EnablementManual
      </p>
      <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter md:text-5xl">
        {title}
      </h2>
      <div className="mt-8 rounded-3xl border border-white/10 bg-near-black p-5">
        {modules.map((module) => (
          <div
            key={module}
            className="border-b border-white/10 py-4 text-sm font-bold text-gray-300 last:border-b-0"
          >
            {module}
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeLoop({ loops }: { loops: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {loops.map((loop, index) => (
        <article
          key={loop}
          className="relative min-h-44 overflow-hidden rounded-[2rem] border border-hunter-green/20 bg-hunter-green/[0.06] p-6"
        >
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-hunter-green">
            PracticeLoop
          </p>
          <div className="absolute -right-3 -top-6 font-mono text-8xl font-black text-white/[0.04]">
            {index + 1}
          </div>
          <h3 className="relative mt-10 text-2xl font-black tracking-tight text-white">{loop}</h3>
        </article>
      ))}
    </div>
  );
}
