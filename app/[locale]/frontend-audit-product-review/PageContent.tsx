import { Link } from "@/navigation";
import { StudioServiceShell } from "../_shared/StudioServicePage";
import { getLocaleValue } from "../_shared/localeCopy";
import { CheckIcon, CodeIcon, PaletteIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";

interface IconProps {
  className?: string;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  size?: number | string;
}

const path = "/frontend-audit-product-review";

export default function FrontendAuditProductReviewContent({ locale }: { locale: string }) {
  const copy = getLocaleValue(locale, {
    en: {
      eyebrow: "Product review",
      title: "Frontend audits and product reviews",
      accent: "with senior judgment.",
      description:
        "A focused review of clarity, performance, UX friction, technical debt, and visual consistency across your React or Next.js product.",
      primaryCta: "Book an audit",
      secondaryCta: "View services",
      outcomesTitle: "A practical decision report, not a vague UX deck.",
      signals: ["UX clarity", "Code health", "Speed", "Brand fit"],
      findings: ["Critical friction", "Quick wins", "Architecture risks", "Conversion leaks"],
      stages: ["Inventory", "Diagnosis", "Action plan"],
      auditTypesTitle: "Three audit formats",
      auditTypes: [
        {
          name: "Product Review",
          icon: PaletteIcon,
          desc: "Review of the live product only. No codebase access required.",
          scope:
            "UX patterns, conversion flows, visual consistency, usability friction, and product logic issues.",
          bestFor:
            "Pre-investment decision making, stakeholder presentations, or when you need an outside perspective without a deep technical dive.",
          deliverables: [
            "Screenshots with annotated findings",
            "Priority issue list",
            "Recommendations summary",
            "PDF report",
          ],
        },
        {
          name: "Frontend Audit",
          icon: CodeIcon,
          desc: "Full codebase review plus live product walkthrough.",
          scope:
            "Everything in Product Review, plus: component architecture, rendering patterns, state management, bundle analysis, and technical debt assessment.",
          bestFor:
            "Engineering teams preparing for a rebuild, evaluating technical debt, or planning a major refactor.",
          deliverables: [
            "Full technical debt report",
            "Component architecture diagram",
            "Performance analysis",
            "Refactoring roadmap",
            "Code-level recommendations",
          ],
        },
        {
          name: "Conversion Audit",
          icon: LightningIcon,
          desc: "Deep analysis of user journey effectiveness and drop-off points.",
          scope:
            "Funnel analysis, form friction, trust signals, micro-copy, loading states, error handling, and post-conversion flows.",
          bestFor:
            "Products with measurable conversion goals that aren't hitting targets despite traffic.",
          deliverables: [
            "Funnel analysis by step",
            "Drop-off heatmap narrative",
            "Copy and UX recommendations",
            "A/B testing suggestions",
            "Implementation priority list",
          ],
        },
      ],
      resultCasesTitle: "What the audit actually changes",
      resultCases: [
        {
          number: "01",
          title: "SaaS onboarding funnel",
          before:
            "18-step registration with no progress indicator, 4 mandatory fields on the first screen, email validation only after submit.",
          after:
            "Reduced to 6 steps with inline validation. Progress indicator added. Mandatory fields deferred to after account creation. Onboarding completion increased 140%.",
          metric: "140% increase in onboarding completion",
        },
        {
          number: "02",
          title: "E-commerce checkout",
          before:
            "Checkout had 3 duplicate address fields, no guest option, and a 45-second page load blocking purchase.",
          after:
            "Guest checkout added, address autofill integrated, page load reduced to 3 seconds. Mobile checkout conversion improved from 23% to 61%.",
          metric: "Mobile checkout: 23% → 61%",
        },
        {
          number: "03",
          title: "B2B dashboard",
          before:
            "Dashboard showed 47 data tables on load with no filtering, sorting, or search. Engineers were blamed for 'slow data' that was actually a UI problem.",
          after:
            "Replaced with search-first interface, default filters, and lazy-loaded tables. Initial load went from 12s to 1.2s. Support tickets about 'slow dashboard' dropped 90%.",
          metric: "Load time: 12s → 1.2s, Support tickets: -90%",
        },
      ],
      processTitle: "How the audit works",
      process: [
        {
          number: "01",
          title: "Discovery call",
          desc: "We clarify scope, identify primary user journeys to trace, and agree on the key questions you need answered.",
          duration: "45 minutes",
        },
        {
          number: "02",
          title: "Product walkthrough",
          desc: "I use the product as a real user would, documenting friction points, inconsistencies, and moments where decisions feel unclear.",
          duration: "2-3 hours",
        },
        {
          number: "03",
          title: "Code analysis (if audit type includes it)",
          desc: "Architecture review, component audit, performance profiling, and technical debt assessment.",
          duration: "4-8 hours",
        },
        {
          number: "04",
          title: "Synthesis",
          desc: "Findings are organized by impact, prioritized by effort vs. value, and translated into a clear action plan.",
          duration: "2-4 hours",
        },
        {
          number: "05",
          title: "Delivery session",
          desc: "Live walkthrough of the report with your team. Every finding is tied to evidence. Every recommendation has enough detail to act on.",
          duration: "90 minutes",
        },
      ],
      deliverablesTitle: "What you receive",
      deliverables: [
        "Prioritized findings with evidence (screenshots, screen recordings, code excerpts)",
        "Issue severity classification: Critical / High / Medium / Low",
        "Actionable recommendations for each finding",
        "Implementation effort estimates for each fix",
        "PDF report + live Notion or Linear document if preferred",
        "30-day Slack follow-up for clarification on any finding",
      ],
      pricing: {
        badge: "Audit options",
        title: "Choose your audit depth",
        subtitle:
          "Starting prices, excl. VAT. Three formats depending on what you need to learn and what decisions you're making. Final scope depends on product maturity, code access, funnel complexity and team needs, so the audit defines the right depth before implementation.",
        productReview: {
          name: "Product Review",
          price: "From €1,800",
          timeline: "3-5 days",
          desc: "For stakeholders and founders who need a clear view of where the product stands.",
          recommended: true,
          includes: [
            "Live product walkthrough",
            "UX and conversion analysis",
            "Visual consistency review",
            "Prioritized issue list",
            "PDF report with screenshots",
            "30-day follow-up support",
          ],
          cta: "Book product review",
        },
        frontendAudit: {
          name: "Frontend Audit",
          price: "From €3,900",
          timeline: "1-2 weeks",
          desc: "For engineering teams preparing for refactor, rebuild, or vendor evaluation.",
          includes: [
            "Everything in Product Review",
            "Full codebase analysis",
            "Component architecture review",
            "Technical debt assessment",
            "Refactoring roadmap",
            "Code-level recommendations",
          ],
          cta: "Book frontend audit",
        },
        conversionAudit: {
          name: "Conversion Audit",
          price: "From €2,500",
          timeline: "1 week",
          desc: "For products with measurable funnels that aren't converting.",
          includes: [
            "Funnel analysis",
            "Drop-off identification",
            "UX friction mapping",
            "Copy recommendations",
            "A/B test suggestions",
            "Implementation priority list",
          ],
          cta: "Book conversion audit",
        },
      },
      audienceTitle: "When an audit is useful",
      audiences: [
        {
          title: "The product works, but feels harder than it should",
          desc: "Users can complete tasks, but the interface creates hesitation, extra support load, or avoidable drop-off.",
        },
        {
          title: "The frontend is slowing delivery",
          desc: "The team keeps paying for old implementation choices through fragile components, inconsistent states, and slow changes.",
        },
        {
          title: "You need an outside senior read",
          desc: "Before a rebuild, funding milestone, launch, or vendor decision, you need a direct view of what matters most.",
        },
      ],
      scopeTitle: "What gets reviewed",
      scope: [
        "Primary user journeys, navigation, forms, empty states, loading states, and conversion paths.",
        "React or Next.js structure, component boundaries, rendering choices, and maintainability risks.",
        "Performance signals, Core Web Vitals risks, accessibility basics, and responsive behavior.",
        "Visual consistency, brand fit, UI density, hierarchy, and moments where trust is lost.",
      ],
      detailTitle: "A report your team can act on",
      details: [
        {
          title: "Evidence first",
          desc: "Findings are tied to screens, flows, code structure, or measurable user friction rather than abstract preference.",
        },
        {
          title: "Prioritized decisions",
          desc: "Issues are separated into urgent fixes, quick wins, architectural risks, and items that can wait.",
        },
        {
          title: "Implementation direction",
          desc: "Recommendations include enough technical judgment for a product, design, or engineering team to move without another discovery phase.",
        },
      ],
      faqTitle: "Audit questions",
      faqs: [
        {
          q: "Do you need access to the codebase?",
          a: "For a full frontend audit, yes. A product-only review can be done from the live product, but code access makes the recommendations sharper.",
        },
        {
          q: "Is this a design critique?",
          a: "It includes UX and visual judgment, but the goal is a practical product and engineering decision report.",
        },
        {
          q: "Can you help implement the fixes?",
          a: "Yes, if the highest-priority fixes fit the engagement. Otherwise the report is written so your team can execute it.",
        },
        {
          q: "How long does the audit take?",
          a: "Product Reviews take 3-5 days. Full Frontend Audits take 1-2 weeks. Conversion Audits take about 1 week.",
        },
        {
          q: "Can we do a hybrid of two formats?",
          a: "Yes. We can combine elements — for example, a Conversion Audit with a lightweight code review. We structure the scope on the discovery call.",
        },
      ],
    },
    es: {
      eyebrow: "Revisión de producto",
      title: "Auditorías frontend y revisión de producto",
      accent: "con criterio senior.",
      description:
        "Revisión enfocada de claridad, rendimiento, fricción UX, deuda técnica y consistencia visual en productos React o Next.js.",
      primaryCta: "Reservar auditoría",
      secondaryCta: "Ver servicios",
      outcomesTitle: "Un informe accionable, no un deck de UX ambiguo.",
      signals: ["Claridad UX", "Salud del código", "Velocidad", "Encaje de marca"],
      findings: [
        "Fricción crítica",
        "Quick wins",
        "Riesgos de arquitectura",
        "Fugas de conversión",
      ],
      stages: ["Inventario", "Diagnóstico", "Plan de acción"],
      auditTypesTitle: "Tres formatos de auditoría",
      auditTypes: [
        {
          name: "Revisión de Producto",
          icon: PaletteIcon,
          desc: "Revisión solo del producto en vivo. No requiere acceso al código.",
          scope:
            "Patrones UX, flujos de conversión, consistencia visual, fricción de usabilidad y problemas de lógica de producto.",
          bestFor:
            "Decisiones pre-inversión, presentaciones a stakeholders, o cuando necesitas una perspectiva externa sin inmersión técnica profunda.",
          deliverables: [
            "Capturas con hallazgos anotados",
            "Lista priorizada de issues",
            "Resumen de recomendaciones",
            "Informe PDF",
          ],
        },
        {
          name: "Auditoría Frontend",
          icon: CodeIcon,
          desc: "Revisión completa del codebase más recorrido del producto en vivo.",
          scope:
            "Todo lo de Revisión de Producto, más: arquitectura de componentes, patrones de renderizado, estado, análisis de bundle y deuda técnica.",
          bestFor:
            "Equipos de ingeniería preparando refactor, evaluando deuda técnica o planificando rebuild.",
          deliverables: [
            "Informe completo de deuda técnica",
            "Diagrama de arquitectura",
            "Análisis de rendimiento",
            " roadmap de refactorización",
            "Recomendaciones a nivel de código",
          ],
        },
        {
          name: "Auditoría de Conversión",
          icon: LightningIcon,
          desc: "Análisis profundo de efectividad de journeys de usuario y puntos de drop-off.",
          scope:
            "Análisis de funnel, fricción de formularios, señales de confianza, micro-copy, estados de carga, manejo de errores y flujos post-conversión.",
          bestFor: "Productos con objetivos de conversión medibles que no están alcanzando metas.",
          deliverables: [
            "Análisis de funnel por paso",
            "Narrativa de heatmap de drop-off",
            "Recomendaciones de copy y UX",
            "Sugerencias de test A/B",
            "Lista de prioridad de implementación",
          ],
        },
      ],
      resultCasesTitle: "Lo que realmente cambia la auditoría",
      resultCases: [
        {
          number: "01",
          title: "Funnel de onboarding SaaS",
          before:
            "Registro de 18 pasos sin indicador de progreso, 4 campos obligatorios en la primera pantalla, validación de email solo después de enviar.",
          after:
            "Reducido a 6 pasos con validación inline. Indicador de progreso añadido. Campos obligatorios diferidos. Completación de onboarding aumentó 140%.",
          metric: "Aumento del 140% en completación",
        },
        {
          number: "02",
          title: "Checkout e-commerce",
          before:
            "Checkout tenía 3 campos de dirección duplicados, sin opción de invitado, y carga de 45 segundos bloqueando la compra.",
          after:
            "Opción de invitado añadida, autocompletado de dirección integrado, carga reducida a 3 segundos. Conversión móvil mejoró de 23% a 61%.",
          metric: "Checkout móvil: 23% → 61%",
        },
        {
          number: "03",
          title: "Dashboard B2B",
          before:
            "Dashboard mostraba 47 tablas de datos en carga sin filtrado, orden ni búsqueda. Ingeniería era culpada por 'datos lentos' que eran problema de UI.",
          after:
            "Reemplazado con interfaz search-first, filtros por defecto y tablas con carga perezosa. Carga inicial de 12s a 1.2s. Tickets de soporte sobre 'dashboard lento' cayeron 90%.",
          metric: "Tiempo de carga: 12s → 1.2s, Tickets: -90%",
        },
      ],
      processTitle: "Cómo funciona la auditoría",
      process: [
        {
          number: "01",
          title: "Llamada de discovery",
          desc: "Clarificamos scope, identificamos journeys principales y acordamos las preguntas clave que necesitas responder.",
          duration: "45 minutos",
        },
        {
          number: "02",
          title: "Recorrido del producto",
          desc: "Uso el producto como lo haría un usuario real, documentando fricción, inconsistencias y momentos donde las decisiones se sienten confusas.",
          duration: "2-3 horas",
        },
        {
          number: "03",
          title: "Análisis de código (si aplica)",
          desc: "Revisión de arquitectura, auditoría de componentes, profiling de rendimiento y evaluación de deuda técnica.",
          duration: "4-8 horas",
        },
        {
          number: "04",
          title: "Síntesis",
          desc: "Los hallazgos se organizan por impacto, priorizan por esfuerzo vs. valor, y se traducen a un plan de acción claro.",
          duration: "2-4 horas",
        },
        {
          number: "05",
          title: "Sesión de entrega",
          desc: "Recorrido en vivo del informe con tu equipo. Cada hallazgo tiene evidencia. Cada recomendación tiene detalle suficiente para actuar.",
          duration: "90 minutos",
        },
      ],
      deliverablesTitle: "Qué recibes",
      deliverables: [
        "Hallazgos priorizados con evidencia (capturas, grabaciones, extractos de código)",
        "Clasificación de severidad: Crítico / Alto / Medio / Bajo",
        "Recomendaciones accionables para cada hallazgo",
        "Estimaciones de esfuerzo para cada fix",
        "Informe PDF + documento Notion o Linear si prefieres",
        "30 días de soporte Slack para clarificación",
      ],
      pricing: {
        badge: "Opciones de auditoría",
        title: "Elige la profundidad de tu auditoría",
        subtitle:
          "Precios desde, sin IVA. Tres formatos según qué necesitas aprender y qué decisiones estás tomando. El alcance final depende de madurez del producto, acceso al código, complejidad del funnel y necesidades del equipo; por eso la auditoría define la profundidad antes de implementar.",
        productReview: {
          name: "Revisión de Producto",
          price: "Desde €1.800",
          timeline: "3-5 días",
          desc: "Para stakeholders y founders que necesitan una visión clara de dónde está el producto.",
          recommended: true,
          includes: [
            "Recorrido del producto en vivo",
            "Análisis UX y de conversión",
            "Revisión de consistencia visual",
            "Lista de issues priorizada",
            "Informe PDF con capturas",
            "Soporte de seguimiento 30 días",
          ],
          cta: "Reservar revisión",
        },
        frontendAudit: {
          name: "Auditoría Frontend",
          price: "Desde €3.900",
          timeline: "1-2 semanas",
          desc: "Para equipos de ingeniería preparando refactor, rebuild o evaluación de vendor.",
          includes: [
            "Todo lo de Revisión de Producto",
            "Análisis completo del codebase",
            "Revisión de arquitectura de componentes",
            "Evaluación de deuda técnica",
            " roadmap de refactorización",
            "Recomendaciones a nivel de código",
          ],
          cta: "Reservar auditoría frontend",
        },
        conversionAudit: {
          name: "Auditoría de Conversión",
          price: "Desde €2.500",
          timeline: "1 semana",
          desc: "Para productos con funnels medibles que no están convirtiendo.",
          includes: [
            "Análisis de funnel",
            "Identificación de drop-off",
            "Mapeo de fricción UX",
            "Recomendaciones de copy",
            "Sugerencias de test A/B",
            "Lista de prioridad de implementación",
          ],
          cta: "Reservar auditoría de conversión",
        },
      },
      audienceTitle: "Cuándo tiene sentido auditar",
      audiences: [
        {
          title: "El producto funciona, pero cuesta usarlo",
          desc: "Los usuarios completan tareas, pero la interfaz genera dudas, soporte extra o abandono evitable.",
        },
        {
          title: "El frontend frena la entrega",
          desc: "El equipo paga decisiones antiguas con componentes frágiles, estados inconsistentes y cambios lentos.",
        },
        {
          title: "Necesitas una lectura senior externa",
          desc: "Antes de un rebuild, lanzamiento, hito de inversión o decisión de proveedor, necesitas saber qué importa primero.",
        },
      ],
      scopeTitle: "Qué se revisa",
      scope: [
        "Journeys principales, navegación, formularios, estados vacíos, carga y rutas de conversión.",
        "Estructura React o Next.js, límites de componentes, renderizado y riesgos de mantenibilidad.",
        "Señales de rendimiento, Core Web Vitals, accesibilidad básica y responsive.",
        "Consistencia visual, encaje de marca, densidad UI, jerarquía y puntos donde se pierde confianza.",
      ],
      detailTitle: "Un informe que el equipo puede ejecutar",
      details: [
        {
          title: "Evidencia primero",
          desc: "Los hallazgos se conectan a pantallas, flujos, estructura de código o fricción medible, no a preferencia abstracta.",
        },
        {
          title: "Decisiones priorizadas",
          desc: "Separamos arreglos urgentes, quick wins, riesgos de arquitectura y elementos que pueden esperar.",
        },
        {
          title: "Dirección de implementación",
          desc: "Las recomendaciones tienen suficiente criterio técnico para avanzar sin otra fase de discovery.",
        },
      ],
      faqTitle: "Preguntas de auditoría",
      faqs: [
        {
          q: "¿Necesitas acceso al código?",
          a: "Para una auditoría frontend completa, sí. Una revisión de producto puede hacerse desde la app, pero el código mejora la precisión.",
        },
        {
          q: "¿Es una crítica de diseño?",
          a: "Incluye criterio UX y visual, pero el objetivo es un informe práctico de decisión para producto e ingeniería.",
        },
        {
          q: "¿Puedes implementar los fixes?",
          a: "Sí, si los fixes prioritarios encajan en el engagement. Si no, el informe queda listo para que el equipo lo ejecute.",
        },
        {
          q: "¿Cuánto dura la auditoría?",
          a: "Revisiones de Producto toman 3-5 días. Auditorías Frontend completas toman 1-2 semanas. Auditorías de Conversión toman ~1 semana.",
        },
        {
          q: "¿Podemos hacer un híbrido de dos formatos?",
          a: "Sí. Podemos combinar elementos — por ejemplo, una Auditoría de Conversión con una revisión de código ligera. Estructuramos el scope en la llamada de discovery.",
        },
      ],
    },
    nl: {
      eyebrow: "Productreview",
      title: "Frontend audits en productreviews",
      accent: "met senior oordeel.",
      description:
        "Een gerichte review van helderheid, performance, UX-frictie, technische schuld en visuele consistentie in React- of Next.js-producten.",
      primaryCta: "Boek audit",
      secondaryCta: "Bekijk services",
      outcomesTitle: "Een praktisch beslisrapport, geen vage UX-deck.",
      signals: ["UX-helderheid", "Code health", "Snelheid", "Merkfit"],
      findings: ["Kritieke frictie", "Quick wins", "Architectuurrisico's", "Conversielekken"],
      stages: ["Inventarisatie", "Diagnose", "Actieplan"],
      auditTypesTitle: "Drie audit-formaten",
      auditTypes: [
        {
          name: "Productreview",
          icon: PaletteIcon,
          desc: "Review van het live product alleen. Geen codebase-toegang nodig.",
          scope:
            "UX-patronen, conversiestromen, visuele consistentie, gebruiksfrictie en productlogica-problemen.",
          bestFor:
            "Pre-investering beslissingen, stakeholderpresentaties, of wanneer je een externe blik nodig hebt zonder diepe technische duik.",
          deliverables: [
            "Schermafdrukken met geannoteerde bevindingen",
            "Geprioriteerde issuelijst",
            "Aanbevelingssamenvatting",
            "PDF-rapport",
          ],
        },
        {
          name: "Frontend Audit",
          icon: CodeIcon,
          desc: "Volledige codebase-review plus live product walkthrough.",
          scope:
            "Alles van Productreview, plus: componentarchitectuur, rendering-patronen, state management, bundle-analyse en technische schuld.",
          bestFor:
            "Engineeringteams die zich voorbereiden op refactor, herbouw of vendor-evaluatie.",
          deliverables: [
            "Volledig technische schuld-rapport",
            "Componentarchitectuurdiagram",
            "Performance-analyse",
            "Refactoring roadmap",
            "Code-level aanbevelingen",
          ],
        },
        {
          name: "Conversie Audit",
          icon: LightningIcon,
          desc: "Diepgaande analyse van user journey-effectiviteit en drop-off punten.",
          scope:
            "Funnel-analyse, formulierfrictie, vertrouwenssignalen, micro-copy, laadstaten, foutafhandeling en post-conversiestromen.",
          bestFor: "Producten met meetbare conversiedoelen die doelstellingen niet halen.",
          deliverables: [
            "Funnel-analyse per stap",
            "Drop-off heatmap narratief",
            "Copy- en UX-aanbevelingen",
            "A/B-test suggesties",
            "Implementatieprioriteitslijst",
          ],
        },
      ],
      resultCasesTitle: "Wat de audit daadwerkelijk verandert",
      resultCases: [
        {
          number: "01",
          title: "SaaS onboarding funnel",
          before:
            "18-staps registratie zonder voortgangsindicator, 4 verplichte velden op eerste scherm, email-validatie pas na verzenden.",
          after:
            "Gereduceerd tot 6 stappen met inline validatie. Voortgangsindicator toegevoegd. Verplichte velden uitgesteld na accountcreatie. Onboarding voltooiing 140% gestegen.",
          metric: "140% stijging in onboarding voltooiing",
        },
        {
          number: "02",
          title: "E-commerce checkout",
          before:
            "Checkout had 3 dubbele adresvelden, geen gastoptie, en 45 seconden laadtijd die aankoop blokkeerde.",
          after:
            "Gastcheckout toegevoegd, adres-autofill geïntegreerd, laadtijd gereduceerd tot 3 seconden. Mobiele checkout-conversie verbeterd van 23% naar 61%.",
          metric: "Mobiele checkout: 23% → 61%",
        },
        {
          number: "03",
          title: "B2B dashboard",
          before:
            "Dashboard toonde 47 datatabellen bij laden zonder filteren, sorteren of zoeken. Engineers werden verweten voor 'trage data' dat eigenlijk een UI-probleem was.",
          after:
            "Vervangen met search-first interface, default filters en lazy-loaded tabellen. Initiële laden van 12s naar 1.2s. Supporttickets over 'traag dashboard' met 90% gedaald.",
          metric: "Laadtijd: 12s → 1.2s, Tickets: -90%",
        },
      ],
      processTitle: "Hoe de audit werkt",
      process: [
        {
          number: "01",
          title: "Discovery call",
          desc: "We verduidelijken scope, identificeren primaire user journeys en bepalen de belangrijkste vragen die beantwoord moeten worden.",
          duration: "45 minuten",
        },
        {
          number: "02",
          title: "Product walkthrough",
          desc: "Ik gebruik het product zoals een echte gebruiker zou doen, documenteer frictiepunten, inconsistenties en momenten waar beslissingen onduidelijk aanvoelen.",
          duration: "2-3 uur",
        },
        {
          number: "03",
          title: "Code-analyse (indien van toepassing)",
          desc: "Architectuurreview, component-audit, performance profiling en technische schuld-evaluatie.",
          duration: "4-8 uur",
        },
        {
          number: "04",
          title: "Synthese",
          desc: "Bevindingen worden georganiseerd op impact, geprioriteerd op inspanning vs. waarde en vertaald naar een duidelijk actieplan.",
          duration: "2-4 uur",
        },
        {
          number: "05",
          title: "Leveringssessie",
          desc: "Live walkthrough van het rapport met je team. Elke bevinding is gekoppeld aan bewijs. Elke aanbeveling heeft voldoende detail om op te handelen.",
          duration: "90 minuten",
        },
      ],
      deliverablesTitle: "Wat je ontvangt",
      deliverables: [
        "Geprioriteerde bevindingen met bewijs (schermafdrukken, opnames, code-fragmenten)",
        "Issue severity-classificatie: Kritiek / Hoog / Medium / Laag",
        "Uitvoerbare aanbevelingen voor elke bevinding",
        "Insspanningschatting voor elke fix",
        "PDF-rapport + live Notion- of Linear-document indien gewenst",
        "30 dagen Slack follow-up voor verduidelijking",
      ],
      pricing: {
        badge: "Audit-opties",
        title: "Kies je audit-diepte",
        subtitle:
          "Prijzen vanaf, excl. btw. Drie formaten afhankelijk van wat je wilt leren en welke beslissingen je neemt. De uiteindelijke scope hangt af van productvolwassenheid, code-toegang, funnelcomplexiteit en teambehoefte; daarom bepaalt de audit de juiste diepte voor implementatie.",
        productReview: {
          name: "Productreview",
          price: "Vanaf €1.800",
          timeline: "3-5 dagen",
          desc: "Voor stakeholders en founders die een duidelijk beeld nodig hebben van waar het product staat.",
          recommended: true,
          includes: [
            "Live product walkthrough",
            "UX- en conversie-analyse",
            "Visuele consistentie-review",
            "Geprioriteerde issuelijst",
            "PDF-rapport met schermafdrukken",
            "30 dagen follow-up ondersteuning",
          ],
          cta: "Boek productreview",
        },
        frontendAudit: {
          name: "Frontend Audit",
          price: "Vanaf €3.900",
          timeline: "1-2 weken",
          desc: "Voor engineeringteams die zich voorbereiden op refactor, herbouw of vendor-evaluatie.",
          includes: [
            "Alles van Productreview",
            "Volledige codebase-analyse",
            "Componentarchitectuur-review",
            "Technische schuld-evaluatie",
            "Refactoring roadmap",
            "Code-level aanbevelingen",
          ],
          cta: "Boek frontend audit",
        },
        conversionAudit: {
          name: "Conversie Audit",
          price: "Vanaf €2.500",
          timeline: "1 week",
          desc: "Voor producten met meetbare funnels die niet converteren.",
          includes: [
            "Funnel-analyse",
            "Drop-off identificatie",
            "UX-frictie mapping",
            "Copy-aanbevelingen",
            "A/B-testsuggesties",
            "Implementatieprioriteitslijst",
          ],
          cta: "Boek conversie audit",
        },
      },
      audienceTitle: "Wanneer een audit nuttig is",
      audiences: [
        {
          title: "Het product werkt, maar voelt te zwaar",
          desc: "Gebruikers kunnen taken afronden, maar de interface veroorzaakt twijfel, supportdruk of onnodige drop-off.",
        },
        {
          title: "De frontend vertraagt delivery",
          desc: "Het team betaalt voor oude keuzes via fragiele componenten, inconsistente states en trage wijzigingen.",
        },
        {
          title: "Je hebt een senior externe blik nodig",
          desc: "Voor een rebuild, launch, funding milestone of vendorbesluit wil je weten wat eerst telt.",
        },
      ],
      scopeTitle: "Wat wordt gereviewd",
      scope: [
        "Belangrijkste user journeys, navigatie, formulieren, empty states, loading states en conversiepaden.",
        "React- of Next.js-structuur, componentgrenzen, renderingkeuzes en maintainability-risico's.",
        "Performance-signalen, Core Web Vitals-risico's, accessibility basics en responsive gedrag.",
        "Visuele consistentie, merkfit, UI-dichtheid, hierarchie en momenten waar vertrouwen verdwijnt.",
      ],
      detailTitle: "Een rapport waar je team mee verder kan",
      details: [
        {
          title: "Eerst bewijs",
          desc: "Findings worden gekoppeld aan schermen, flows, codeopbouw of meetbare frictie in plaats van smaak.",
        },
        {
          title: "Geprioriteerde beslissingen",
          desc: "Issues worden verdeeld in urgente fixes, quick wins, architectuurrisico's en zaken die kunnen wachten.",
        },
        {
          title: "Implementatierichting",
          desc: "Aanbevelingen bevatten genoeg technisch oordeel zodat product, design of engineering direct verder kan.",
        },
      ],
      faqTitle: "Auditvragen",
      faqs: [
        {
          q: "Heb je toegang tot de codebase nodig?",
          a: "Voor een volledige frontend audit wel. Een productreview kan vanuit de live app, maar code maakt de aanbevelingen scherper.",
        },
        {
          q: "Is dit een design critique?",
          a: "UX en visueel oordeel horen erbij, maar het doel is een praktisch beslisrapport voor product en engineering.",
        },
        {
          q: "Kun je helpen met implementatie?",
          a: "Ja, als de belangrijkste fixes binnen de samenwerking passen. Anders is het rapport geschreven voor uitvoering door je team.",
        },
        {
          q: "Hoe lang duurt de audit?",
          a: "Productreviews duren 3-5 dagen. Volledige Frontend Audits duren 1-2 weken. Conversie Audits duren ongeveer 1 week.",
        },
        {
          q: "Kunnen we een hybride van twee formaten doen?",
          a: "Ja. We kunnen elementen combineren — bijvoorbeeld een Conversie Audit met een lichte code-review. We structureren de scope tijdens het discovery-gesprek.",
        },
      ],
    },
  });

  return (
    <StudioServiceShell locale={locale} path={path} breadcrumbName={copy.title}>
      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-hunter-orange/40 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-hunter-orange/[0.06] blur-[150px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
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
          <AuditScorecard signals={copy.signals} />
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <SignalStack title={copy.outcomesTitle} stages={copy.stages} />
          <FindingRail findings={copy.findings} />
        </div>
      </section>

      <AuditTypesSection title={copy.auditTypesTitle} items={copy.auditTypes} />
      <ResultCasesSection title={copy.resultCasesTitle} items={copy.resultCases} />
      <ProcessSection title={copy.processTitle} items={copy.process} />
      <DeliverablesSection title={copy.deliverablesTitle} items={copy.deliverables} />
      <PricingSection pricing={copy.pricing} />

      <AudienceFit title={copy.audienceTitle} items={copy.audiences} />
      <EngagementScope title={copy.scopeTitle} items={copy.scope} />
      <DeliveryDetail title={copy.detailTitle} items={copy.details} />
      <DecisionFaq title={copy.faqTitle} items={copy.faqs} />
    </StudioServiceShell>
  );
}

function AuditTypesSection({
  title,
  items,
}: {
  title: string;
  items: Array<{
    name: string;
    icon: React.ComponentType<IconProps>;
    desc: string;
    scope: string;
    bestFor: string;
    deliverables: string[];
  }>;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Audit Types
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
              <item.icon className="mb-6 h-10 w-10 text-hunter-orange" />
              <h3 className="text-xl font-black text-white">{item.name}</h3>
              <p className="mt-4 text-sm text-gray-400">{item.desc}</p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-gray-500">
                    Scope
                  </p>
                  <p className="text-sm text-gray-300">{item.scope}</p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-gray-500">
                    Best for
                  </p>
                  <p className="text-sm text-gray-300">{item.bestFor}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-3 font-mono text-xs font-black uppercase tracking-wider text-gray-500">
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {item.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-hunter-green" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCasesSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ number: string; title: string; before: string; after: string; metric: string }>;
}) {
  return (
    <section className="border-y border-white/5 bg-surface-dark/20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
          Real Results
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-8">
          {items.map((item) => (
            <article
              key={item.number}
              className="grid gap-6 rounded-3xl border border-white/10 bg-near-black p-8 md:grid-cols-[auto_1fr_auto] md:gap-10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-hunter-orange/30 bg-hunter-orange/10 font-mono text-lg font-black text-hunter-orange">
                {item.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-white">{item.title}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-red-400">
                      Before
                    </p>
                    <p className="text-sm text-gray-400">{item.before}</p>
                  </div>
                  <div className="rounded-2xl border border-hunter-green/20 bg-hunter-green/5 p-4">
                    <p className="mb-2 font-mono text-xs font-black uppercase tracking-wider text-hunter-green">
                      After
                    </p>
                    <p className="text-sm text-gray-400">{item.after}</p>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center justify-center rounded-2xl border border-hunter-green/30 bg-hunter-green/10 px-6 py-4">
                <p className="text-center font-black text-hunter-green">{item.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  title,
  items,
}: {
  title: string;
  items: Array<{ number: string; title: string; desc: string; duration: string }>;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
          Process
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
          {title}
        </h2>
        <div className="relative mt-12">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-hunter-orange/50 via-hunter-green/50 to-transparent lg:block" />
          <div className="grid gap-8 md:grid-cols-5">
            {items.map((item) => (
              <article key={item.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-hunter-orange/30 bg-hunter-orange/10 font-mono text-lg font-black text-hunter-orange">
                  {item.number}
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                <p className="mt-3 font-mono text-xs text-hunter-green">{item.duration}</p>
              </article>
            ))}
          </div>
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
    productReview: PricingPlan;
    frontendAudit: PricingPlan;
    conversionAudit: PricingPlan;
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
          {[pricing.productReview, pricing.frontendAudit, pricing.conversionAudit].map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.recommended
                  ? "border-hunter-orange/50 bg-hunter-orange/[0.05]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-hunter-orange/30 bg-hunter-orange/10 px-4 py-1 font-mono text-xs font-black text-hunter-orange">
                  Most Popular
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

function AuditScorecard({ signals }: { signals: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] p-6 shadow-2xl shadow-black/50">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,122,60,0.12),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(0,230,162,0.12),transparent_28%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-hunter-orange">
          AuditScorecard
        </p>
        <span className="rounded-full border border-hunter-green/30 bg-hunter-green/10 px-3 py-1 font-mono text-xs text-hunter-green">
          REVIEW / LIVE
        </span>
      </div>
      <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
        {signals.map((signal, index) => (
          <div key={signal} className="rounded-2xl border border-white/10 bg-near-black p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-white">{signal}</p>
              <p className="font-mono text-hunter-orange">{82 - index * 7}</p>
            </div>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-hunter-orange to-hunter-green"
                style={{ width: `${82 - index * 7}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SignalStack({ title, stages }: { title: string; stages: string[] }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-near-black p-8">
      <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-green">
        SignalStack
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-black leading-none tracking-tighter md:text-5xl">
        {title}
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {stages.map((stage, index) => (
          <div key={stage} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-mono text-xs text-hunter-orange">0{index + 1}</p>
            <h3 className="mt-5 text-xl font-black text-white">{stage}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function FindingRail({ findings }: { findings: string[] }) {
  return (
    <div className="grid gap-4">
      {findings.map((finding) => (
        <article
          key={finding}
          className="rounded-3xl border border-hunter-orange/20 bg-hunter-orange/[0.06] p-6"
        >
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-hunter-orange">
            FindingRail
          </p>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{finding}</h3>
        </article>
      ))}
    </div>
  );
}
