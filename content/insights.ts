export type InsightSection =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  readingTime: string;
  targetQueries: string[];
  relatedServices: Array<{
    label: string;
    href: string;
  }>;
  sections: InsightSection[];
};

export const insights: InsightArticle[] = [
  {
    slug: "workflow-automation-agency-netherlands",
    title: "Workflow Automation Agency Netherlands: What to Automate First",
    description:
      "A practical guide for Dutch businesses deciding which workflows to automate first, how to rank ROI, and when to hire a workflow automation agency.",
    category: "AI Automation",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "workflow automation agency netherlands",
      "automation consultancy netherlands",
      "workflow automation consultant netherlands",
    ],
    relatedServices: [
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
      {
        label: "IT system integration",
        href: "/it-system-integration",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "A workflow automation agency helps a business remove repeated manual work from sales, operations, finance, support, and internal reporting. In the Netherlands, the strongest automation opportunities usually sit between existing tools: CRM systems, email inboxes, WhatsApp conversations, accounting software, spreadsheets, and industry-specific platforms.",
      },
      {
        type: "heading",
        text: "Start with workflows that already have volume",
      },
      {
        type: "paragraph",
        text:
          "The first automation project should not be the most futuristic idea. It should be the workflow that happens every week, consumes measurable hours, and has a clear owner. Good first candidates include lead qualification, appointment reminders, invoice intake, customer follow-up, document routing, and CRM updates.",
      },
      {
        type: "list",
        items: [
          "Pick a workflow with at least 20 repeated executions per month.",
          "Measure current time spent before changing the process.",
          "Define what still needs human review and what can be automated fully.",
          "Connect the automation to the systems the team already uses.",
        ],
      },
      {
        type: "heading",
        text: "Rank automation by ROI, not novelty",
      },
      {
        type: "paragraph",
        text:
          "AI agents, n8n workflows, and custom integrations are useful only when they reduce cost, increase response speed, or recover revenue that is currently leaking. A good automation roadmap ranks each idea by monthly hours saved, error reduction, revenue impact, implementation complexity, and operational risk.",
      },
      {
        type: "heading",
        text: "When to hire an agency",
      },
      {
        type: "paragraph",
        text:
          "Hire a workflow automation agency when the work crosses multiple systems, touches customer communication, or needs to run reliably without a human watching every step. Simple one-app automations can often be built internally. Multi-step automations with CRM, WhatsApp, accounting software, and custom APIs benefit from engineering discipline.",
      },
    ],
  },
  {
    slug: "conversational-ai-consultant-netherlands",
    title: "Conversational AI Consultant Netherlands: Use Cases, Costs, and Risks",
    description:
      "What Dutch companies should know before deploying conversational AI for lead qualification, customer support, appointment booking, and internal operations.",
    category: "Conversational AI",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "8 min read",
    targetQueries: [
      "conversational ai consultant netherlands",
      "conversational ai services netherlands",
      "conversational ai consultants netherlands",
    ],
    relatedServices: [
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
      {
        label: "AI agents and automation",
        href: "/expertise/ai-agents-automation",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "A conversational AI consultant designs and deploys AI systems that speak with customers or employees through channels such as WhatsApp, website chat, voice calls, email, and internal tools. The goal is not to add a chatbot for decoration. The goal is to complete a business process with less waiting, fewer handoffs, and better data capture.",
      },
      {
        type: "heading",
        text: "The best use cases are narrow and operational",
      },
      {
        type: "paragraph",
        text:
          "The safest first use cases are lead qualification, appointment booking, intake triage, FAQ handling with escalation, post-visit follow-up, and CRM updates after a conversation. These tasks have clear boundaries, measurable outcomes, and a natural fallback to a human team member.",
      },
      {
        type: "list",
        items: [
          "Sales teams use conversational AI to respond instantly and qualify leads before booking a meeting.",
          "Clinics use it to answer practical questions, send reminders, and route urgent messages.",
          "Real estate agencies use it to capture buyer criteria and schedule viewings.",
          "Support teams use it to resolve repeated requests and escalate exceptions.",
        ],
      },
      {
        type: "heading",
        text: "Costs depend on integration complexity",
      },
      {
        type: "paragraph",
        text:
          "The cost is rarely driven by the language model alone. The expensive part is integrating the assistant with calendars, CRMs, inboxes, knowledge bases, permissions, analytics, and escalation rules. A production conversational AI system needs logging, handover rules, prompt evaluation, and a clear maintenance owner.",
      },
      {
        type: "heading",
        text: "The main risks",
      },
      {
        type: "paragraph",
        text:
          "The main risks are hallucinated answers, unclear consent, poor escalation, weak data privacy boundaries, and teams losing trust after a bad first deployment. A consultant should define what the AI may answer, what it must refuse, when it escalates, and how performance is reviewed after launch.",
      },
    ],
  },
  {
    slug: "n8n-consultant-netherlands",
    title: "n8n Consultant Netherlands: When n8n Beats Zapier and Make",
    description:
      "A practical comparison for Dutch teams evaluating n8n consulting, self-hosted automation, Zapier migration, and custom workflow orchestration.",
    category: "n8n Automation",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "n8n consultant netherlands",
      "n8n expert nederland",
      "n8n consulting",
    ],
    relatedServices: [
      {
        label: "n8n migration consulting",
        href: "/expertise/n8n-migration-consulting",
      },
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "An n8n consultant helps teams design, migrate, self-host, and maintain workflow automations in n8n. The platform is strongest when a business needs complex branching, API integrations, AI steps, private infrastructure, or predictable automation costs at higher volume.",
      },
      {
        type: "heading",
        text: "When n8n is a better fit",
      },
      {
        type: "paragraph",
        text:
          "n8n usually beats Zapier and Make when workflows need custom API calls, versionable logic, data privacy controls, reusable subflows, and self-hosted execution. It also becomes attractive when task volume makes per-operation pricing expensive.",
      },
      {
        type: "list",
        items: [
          "Use n8n for multi-step operational workflows with branching logic.",
          "Use n8n when customer or patient data should stay in controlled infrastructure.",
          "Use n8n when automations need custom code, webhooks, or private APIs.",
          "Keep Zapier or Make for simple one-off automations that a non-technical team owns.",
        ],
      },
      {
        type: "heading",
        text: "What a consultant should deliver",
      },
      {
        type: "paragraph",
        text:
          "A good n8n consultant should deliver more than a canvas full of nodes. The output should include documented workflows, credential handling, failure alerts, retry behavior, deployment notes, naming conventions, and a handover plan so the automation can survive real operations.",
      },
      {
        type: "heading",
        text: "Migration is a good first project",
      },
      {
        type: "paragraph",
        text:
          "Migrating expensive or fragile Zapier and Make automations into n8n is often a practical first step. It creates a clear before-and-after comparison: cost, reliability, ownership, and maintainability.",
      },
    ],
  },
  {
    slug: "dental-clinic-whatsapp-automation-netherlands",
    title: "Dental Clinic WhatsApp Automation in the Netherlands",
    description:
      "How dental clinics can use WhatsApp automation to reduce no-shows, improve patient recall, and keep communication GDPR-aware.",
    category: "Clinic Automation",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "6 min read",
    targetQueries: [
      "dental clinic automation netherlands",
      "dental appointment reminder system",
      "whatsapp patient communication dental",
    ],
    relatedServices: [
      {
        label: "Dental clinic automation Netherlands",
        href: "/dental-clinic-automation-netherlands",
      },
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "Dental clinic WhatsApp automation helps practices send appointment reminders, patient recall messages, post-treatment follow-ups, and review requests without manually chasing every patient. For clinics in the Netherlands, the best systems are practical, consent-aware, and connected to the tools the front desk already uses.",
      },
      {
        type: "heading",
        text: "Start with reminders and recall",
      },
      {
        type: "paragraph",
        text:
          "The highest-ROI starting point is usually appointment reminders and recall follow-up. Missed appointments create empty chair time, and forgotten recall campaigns quietly reduce patient retention. Automation keeps these messages consistent while letting staff focus on exceptions.",
      },
      {
        type: "list",
        items: [
          "Send reminders 48 hours and 24 hours before appointments.",
          "Let patients confirm, reschedule, or ask for a call back.",
          "Route unclear replies to the front desk instead of forcing the AI to guess.",
          "Trigger recall campaigns for overdue checkups and hygiene appointments.",
        ],
      },
      {
        type: "heading",
        text: "Keep GDPR and consent visible",
      },
      {
        type: "paragraph",
        text:
          "A clinic should know exactly what data is sent through WhatsApp, where conversation logs are stored, and who can access them. Patient-facing automation needs clear consent, careful message templates, and escalation rules for anything clinical or urgent.",
      },
      {
        type: "heading",
        text: "Connect automation to practice operations",
      },
      {
        type: "paragraph",
        text:
          "The strongest clinic automation is not a separate chatbot. It is connected to appointment workflows, patient records, staff notifications, and reporting. That connection is what turns a reminder bot into a real operational system.",
      },
    ],
  },
  {
    slug: "ai-consultants-netherlands",
    title: "AI Consultants Netherlands: How to Choose the Right Partner",
    description:
      "A practical buying guide for Dutch companies comparing AI consultants, automation agencies, and implementation partners.",
    category: "AI Consulting",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "ai consultants netherlands",
      "ai consulting netherlands",
      "ai automation consultant",
    ],
    relatedServices: [
      {
        label: "AI consulting",
        href: "/ai-consulting",
      },
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "AI consultants in the Netherlands vary widely. Some focus on strategy decks, some on data science models, and some on production automation systems. The right partner depends on whether you need a roadmap, a prototype, or a working system connected to your CRM, inbox, calendar, database, and operations.",
      },
      {
        type: "heading",
        text: "Separate strategy from implementation",
      },
      {
        type: "paragraph",
        text:
          "A useful AI strategy defines where automation can create measurable value. A useful implementation turns that strategy into software that survives real users, edge cases, privacy constraints, and maintenance. Many failed AI projects happen because the strategy and implementation teams never meet in the same architecture.",
      },
      {
        type: "list",
        items: [
          "Ask what systems the AI will connect to after the demo.",
          "Ask who owns monitoring, evaluation, and prompt changes after launch.",
          "Ask how sensitive data is handled under GDPR.",
          "Ask what happens when the AI is uncertain or wrong.",
        ],
      },
      {
        type: "heading",
        text: "The best first engagement is usually a scoped sprint",
      },
      {
        type: "paragraph",
        text:
          "For most Dutch SMEs, the safest first step is a short AI opportunity sprint. It should map workflows, rank use cases by ROI, estimate implementation effort, and identify the one automation project worth building first.",
      },
    ],
  },
  {
    slug: "automation-consultancy-netherlands",
    title: "Automation Consultancy Netherlands: From Process Map to Production",
    description:
      "How automation consultancy turns manual Dutch business processes into reliable workflows, integrations, dashboards, and AI-assisted operations.",
    category: "Automation Strategy",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "automation consultancy netherlands",
      "automation consultancy",
      "workflow automation consultant netherlands",
    ],
    relatedServices: [
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
      {
        label: "Custom internal tools",
        href: "/services/custom-internal-tools-development",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "Automation consultancy helps companies decide which manual processes should become software, which should stay human, and which need a hybrid approach. The work starts with process discovery, but the value appears only when the automation is deployed, monitored, and adopted by the team.",
      },
      {
        type: "heading",
        text: "Good automation removes handoffs",
      },
      {
        type: "paragraph",
        text:
          "The most expensive manual work often hides between systems. A lead arrives by email, gets copied to a spreadsheet, receives a manual reply, then waits for someone to update the CRM. Automation should remove those handoffs and keep the source of truth updated automatically.",
      },
      {
        type: "list",
        items: [
          "Document the current workflow before changing it.",
          "Measure time, delay, error rate, and lost revenue.",
          "Design exception handling before full automation.",
          "Ship one production workflow before expanding the roadmap.",
        ],
      },
      {
        type: "heading",
        text: "Consultancy should produce owned systems",
      },
      {
        type: "paragraph",
        text:
          "A finished automation project should leave the company with documented workflows, clear credentials, deployment notes, monitoring, and a maintenance plan. Without that, the automation becomes another fragile black box.",
      },
    ],
  },
  {
    slug: "system-integrator-netherlands",
    title: "System Integrator Netherlands: Connecting CRM, ERP, AI, and Operations",
    description:
      "What Dutch businesses should expect from a system integrator when connecting CRMs, ERPs, APIs, AI tools, and internal workflows.",
    category: "System Integration",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "8 min read",
    targetQueries: [
      "system integrator netherlands",
      "system integration netherlands",
      "ai system integration",
    ],
    relatedServices: [
      {
        label: "IT system integration",
        href: "/it-system-integration",
      },
      {
        label: "System architecture design",
        href: "/expertise/system-architecture-design",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "A system integrator connects the tools a business already depends on: CRM, ERP, accounting software, customer support, data warehouses, messaging platforms, and custom applications. In AI projects, integration is the difference between a demo and a system that can act on real business data.",
      },
      {
        type: "heading",
        text: "Integration starts with ownership of data",
      },
      {
        type: "paragraph",
        text:
          "Before connecting APIs, a team needs to know which system owns each record. Customer data might live in the CRM, invoices in accounting software, schedules in a practice platform, and operational notes in email. Integration work fails when two systems both believe they are the source of truth.",
      },
      {
        type: "list",
        items: [
          "Define the source of truth for each important record.",
          "Map read and write permissions for every connected system.",
          "Add retry behavior and alerts for failed syncs.",
          "Log changes so the team can debug operational issues.",
        ],
      },
      {
        type: "heading",
        text: "AI makes integration more important",
      },
      {
        type: "paragraph",
        text:
          "An AI agent that cannot read current customer data or write outcomes back to the CRM is only a chat interface. Production AI needs system integration so every conversation, decision, handoff, and escalation becomes part of the business workflow.",
      },
    ],
  },
  {
    slug: "crm-integration-services-netherlands",
    title: "CRM Integration Services Netherlands: What to Connect First",
    description:
      "A guide to CRM integration for Dutch teams connecting leads, WhatsApp, email, calendars, accounting tools, and AI automation.",
    category: "CRM Integration",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "crm integration services netherlands",
      "crm integration netherlands",
      "crm automation netherlands",
    ],
    relatedServices: [
      {
        label: "IT system integration",
        href: "/it-system-integration",
      },
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "CRM integration services connect customer records with the rest of the business. For Dutch teams, the practical value is simple: fewer manual updates, faster follow-up, cleaner reporting, and better handoffs between marketing, sales, support, and operations.",
      },
      {
        type: "heading",
        text: "Start with lead capture and follow-up",
      },
      {
        type: "paragraph",
        text:
          "The first CRM integration should usually connect inbound leads to qualification, routing, and follow-up. Website forms, WhatsApp messages, email inquiries, and ad leads should create structured CRM records automatically, with ownership and next steps assigned immediately.",
      },
      {
        type: "list",
        items: [
          "Connect every lead source to one CRM pipeline.",
          "Create required fields for qualification and source tracking.",
          "Trigger reminders when no one follows up.",
          "Write conversation summaries back to the CRM after calls or chats.",
        ],
      },
      {
        type: "heading",
        text: "Avoid integration clutter",
      },
      {
        type: "paragraph",
        text:
          "A CRM can become worse after automation if every tool writes noisy data into it. Good integration filters events, normalizes fields, and keeps human-readable notes so the CRM becomes more useful, not just more full.",
      },
    ],
  },
  {
    slug: "app-developer-leiden",
    title: "App Developer Leiden: What Local Businesses Should Build First",
    description:
      "A practical guide for Leiden businesses deciding between a custom web app, internal tool, portal, integration, or automation workflow.",
    category: "Software Leiden",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "6 min read",
    targetQueries: [
      "app developer leiden",
      "app ontwikkelaar leiden",
      "software leiden",
    ],
    relatedServices: [
      {
        label: "Software development Leiden",
        href: "/software-development-leiden",
      },
      {
        label: "Custom internal tools",
        href: "/services/custom-internal-tools-development",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "An app developer in Leiden can build customer portals, internal dashboards, booking systems, workflow tools, and integrations for local businesses. The best first project is rarely a broad app idea. It is usually a focused tool that removes a repeated operational bottleneck.",
      },
      {
        type: "heading",
        text: "Build around one painful workflow",
      },
      {
        type: "paragraph",
        text:
          "A strong custom app starts with a specific workflow: intake, scheduling, reporting, approval, quoting, document handling, or customer communication. If the workflow is already handled through spreadsheets and copy-paste, a small web app can create value quickly.",
      },
      {
        type: "list",
        items: [
          "Choose one team and one workflow for the first release.",
          "Define the data model before designing screens.",
          "Integrate with existing tools instead of replacing everything.",
          "Ship a usable version in weeks, then expand based on usage.",
        ],
      },
      {
        type: "heading",
        text: "Internal tools often beat public apps",
      },
      {
        type: "paragraph",
        text:
          "Many businesses ask for an app when they actually need an internal tool. Internal tools are faster to launch, easier to measure, and directly connected to operational savings.",
      },
    ],
  },
  {
    slug: "accounting-automation-software-netherlands",
    title: "Accounting Automation Software Netherlands: What to Automate First",
    description:
      "A practical guide for Dutch accounting firms comparing automation software, invoice processing, client portals, reminders, and CRM workflows.",
    category: "Accounting Automation",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "accounting automation software",
      "netherlands accounting software",
      "automated accounting software",
    ],
    relatedServices: [
      {
        label: "Accounting firm automation Netherlands",
        href: "/accounting-firm-automation-netherlands",
      },
      {
        label: "AI automation consulting in the Netherlands",
        href: "/ai-automation-consulting-netherlands",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "Accounting automation software helps firms reduce manual entry, chase fewer documents, standardize client onboarding, and improve monthly reporting. In the Netherlands, the highest-value automations usually connect email, client portals, accounting packages, CRM records, and task management.",
      },
      {
        type: "heading",
        text: "Start with document intake",
      },
      {
        type: "paragraph",
        text:
          "Document intake is usually the best first target. Client files arrive across email, portals, scans, and shared folders. Automation can classify documents, detect missing information, create tasks for exceptions, and keep accountants focused on review instead of chasing.",
      },
      {
        type: "list",
        items: [
          "Automate invoice intake and routing before complex analysis.",
          "Create missing-document reminders for clients.",
          "Sync client status to a CRM or dashboard.",
          "Keep humans in review loops for exceptions and ambiguous documents.",
        ],
      },
      {
        type: "heading",
        text: "Software alone is not the system",
      },
      {
        type: "paragraph",
        text:
          "Buying accounting automation software does not automatically fix the workflow. The real value comes from integrating the software with client communication, task ownership, exception handling, and reporting.",
      },
    ],
  },
  {
    slug: "react-consulting-services",
    title: "React Consulting Services: When to Bring in a Senior Consultant",
    description:
      "A guide for teams deciding whether they need React consulting for architecture, performance, migration, testing, or codebase recovery.",
    category: "React Consulting",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "react consulting services",
      "react consulting",
      "react consultants",
    ],
    relatedServices: [
      {
        label: "React consulting services",
        href: "/react-consulting",
      },
      {
        label: "Next.js development agency",
        href: "/nextjs-development-agency",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "React consulting services help teams fix frontend systems that have become slow, fragile, hard to test, or difficult to extend. The work is most valuable when a product already has users, revenue, and technical debt that blocks delivery.",
      },
      {
        type: "heading",
        text: "Bring in a consultant when the codebase slows the team",
      },
      {
        type: "paragraph",
        text:
          "The signal is not that React is hard. The signal is that simple changes take too long, performance regressions are common, state management is unclear, and new developers need weeks to understand basic flows.",
      },
      {
        type: "list",
        items: [
          "Use a codebase audit to identify the few changes with the highest leverage.",
          "Prioritize architecture boundaries before rewriting components.",
          "Improve tests around business-critical flows.",
          "Fix performance using measurement, not guesswork.",
        ],
      },
      {
        type: "heading",
        text: "Consulting should transfer capability",
      },
      {
        type: "paragraph",
        text:
          "A good React consultant does not just patch issues. They leave patterns, documentation, review habits, and examples that make the internal team faster after the engagement ends.",
      },
    ],
  },
  {
    slug: "nextjs-consultancy-europe",
    title: "Next.js Consultancy Europe: App Router, Performance, and Migration",
    description:
      "What European teams should consider when hiring Next.js consultancy for App Router, React Server Components, migration, and performance work.",
    category: "Next.js",
    publishedAt: "2026-04-10",
    modifiedAt: "2026-04-10",
    readingTime: "7 min read",
    targetQueries: [
      "nextjs consultancy europe",
      "nextjs consultancy",
      "nextjs development agency",
    ],
    relatedServices: [
      {
        label: "Next.js development agency",
        href: "/nextjs-development-agency",
      },
      {
        label: "React consulting services",
        href: "/react-consulting",
      },
    ],
    sections: [
      {
        type: "paragraph",
        text:
          "Next.js consultancy helps teams build, migrate, and optimize production web applications using App Router, React Server Components, TypeScript, caching, routing, and deployment patterns. For European teams, data privacy, hosting, performance, and maintainability often matter as much as visual polish.",
      },
      {
        type: "heading",
        text: "The hardest part is architecture, not routing",
      },
      {
        type: "paragraph",
        text:
          "App Router gives teams powerful primitives, but it also forces decisions about server components, client boundaries, caching, metadata, and data loading. A consultancy engagement should clarify those boundaries before the codebase grows around inconsistent patterns.",
      },
      {
        type: "list",
        items: [
          "Define when a component should be server-side or client-side.",
          "Choose caching and revalidation rules per page type.",
          "Keep metadata, sitemap, and canonical URLs consistent.",
          "Measure Core Web Vitals after each major architectural change.",
        ],
      },
      {
        type: "heading",
        text: "Migration needs a staged plan",
      },
      {
        type: "paragraph",
        text:
          "A Next.js migration should not be a big-bang rewrite unless the product is small. The safer path is to move routes, data boundaries, and shared UI in stages while keeping business-critical pages stable.",
      },
    ],
  },
];

export const insightBySlug = new Map(insights.map((article) => [article.slug, article]));
