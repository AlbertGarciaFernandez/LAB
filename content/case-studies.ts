export type CaseStudySection =
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

export type CaseStudy = {
  slug: string;
  industry: string;
  location: string;
  clientSize: string;
  problem: string;
  solution: string;
  metrics: Array<{ label: string; value: string }>;
  technologies: string[];
  timeline: string;
  year: string;
  publishedAt: string;
  modifiedAt: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dental-clinic-whatsapp-automation",
    industry: "Dental Clinic",
    location: "Netherlands",
    clientSize: "3 locations, 12 staff",
    problem: "High no-show rate, manual appointment reminders, front desk overwhelmed",
    solution: "WhatsApp automation with n8n, connected to practice management system",
    metrics: [
      { label: "No-show reduction", value: "35%" },
      { label: "Hours saved/week", value: "12" },
      { label: "Patient recall increase", value: "28%" },
    ],
    technologies: ["n8n", "WhatsApp Business API", "Make"],
    timeline: "4 weeks",
    year: "2025",
    publishedAt: "2026-05-08",
    modifiedAt: "2026-05-08",
    sections: [
      {
        type: "paragraph",
        text: "A multi-location dental clinic in the Netherlands was losing revenue to no-shows and spending excessive front-desk hours on manual appointment reminders. Staff were calling patients one by one, leaving voicemails, and chasing confirmations through a mix of email and personal WhatsApp messages.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "The clinic's no-show rate had climbed to nearly 18%, and the front desk was spending over 15 hours per week on reminder calls. Recall campaigns for checkups and hygiene appointments were inconsistent, meaning patients simply forgot to book their next visit. The practice management system held all appointment data, but no automated communication was connected to it.",
      },
      {
        type: "list",
        items: [
          "18% no-show rate across three locations.",
          "Front desk spending 15+ hours/week on manual reminders.",
          "Inconsistent patient recall leading to gaps in the schedule.",
          "No integration between the practice system and messaging channels.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We built an n8n workflow that reads appointment data from the clinic's practice management system and triggers personalized WhatsApp messages at scheduled intervals: 48 hours and 24 hours before appointments for reminders, and monthly recall sequences for overdue checkups. Patients can confirm, reschedule, or request a callback directly in WhatsApp. Unclear replies are routed to the front desk via Slack instead of forcing an AI guess.",
      },
      {
        type: "list",
        items: [
          "n8n workflow syncing with the practice management API every 15 minutes.",
          "WhatsApp Business API for reliable, template-based messaging.",
          "Make as a secondary integration bridge for non-API tools.",
          "Slack alerts for staff when a patient reply needs human review.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "Within eight weeks of deployment, the clinic's no-show rate dropped by 35%. Front-desk reminder work fell from 15 hours per week to under 3. Automated recall campaigns increased the number of patients booking their next appointment by 28%. The staff now focuses on in-clinic patient experience instead of repetitive outbound calls.",
      },
    ],
  },
  {
    slug: "accounting-firm-document-automation",
    industry: "Accounting",
    location: "Netherlands",
    clientSize: "8 accountants, 400+ clients",
    problem: "Manual document intake, chasing clients for missing files, inconsistent onboarding",
    solution: "Automated document classification, client portal, missing-document reminders",
    metrics: [
      { label: "Document processing time", value: "-60%" },
      { label: "Client response rate", value: "+45%" },
      { label: "Onboarding time", value: "-50%" },
    ],
    technologies: ["n8n", "Google Drive API", "Zapier"],
    timeline: "6 weeks",
    year: "2025",
    publishedAt: "2026-05-08",
    modifiedAt: "2026-05-08",
    sections: [
      {
        type: "paragraph",
        text: "A mid-sized accounting firm in the Netherlands was drowning in manual document intake. Every month, hundreds of clients sent files via email, Dropbox links, and physical scans. The team spent days sorting, renaming, and chasing missing documents before they could begin any actual accounting work.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "Client onboarding was inconsistent: some clients received checklists by email, others by WhatsApp, and many received nothing at all. Missing documents were tracked in spreadsheets that were always out of date. The result was delayed month-end closings, frustrated accountants, and clients who felt the firm was disorganized.",
      },
      {
        type: "list",
        items: [
          "Document intake spread across email, cloud links, and scans.",
          "Manual classification and renaming consumed 2–3 days per month.",
          "Missing-document tracking in spreadsheets was unreliable.",
          "Onboarding experience varied wildly depending on which accountant handled it.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We designed an automated intake pipeline using n8n and the Google Drive API. Clients now upload documents to a dedicated folder per engagement. An n8n workflow classifies each file by type, renames it according to a standard convention, and checks it against a required-document list. If anything is missing, the client receives an automatic reminder via email after 24 hours and again after 72 hours. For simple one-off automations connecting non-API tools, Zapier acts as a bridge.",
      },
      {
        type: "list",
        items: [
          "Google Drive shared folders per client with automated subfolder creation.",
          "n8n workflow classifying invoices, bank statements, and payroll documents.",
          "Missing-document detection with scheduled reminder sequences.",
          "Dashboard view for accountants showing intake status per client.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "Document processing time dropped by 60%, from roughly 2.5 days per month to under one day. The automated reminder sequence increased client response rates for missing files by 45%. New client onboarding time was cut in half because the checklist, folder setup, and first reminder are now triggered automatically when a client signs the engagement letter.",
      },
    ],
  },
  {
    slug: "ai-productivity-app-accelerator",
    industry: "SaaS / AI Product",
    location: "Europe (remote product team)",
    clientSize: "2 founders, 1 designer, 4 engineers",
    problem:
      "An AI productivity app needed a frontend that could support weekly releases, a safer way to ship OpenAI-powered features, and clearer product-to-engineering handoff as the roadmap expanded.",
    solution:
      "Frontend and product acceleration work covering Next.js architecture, OpenAI-powered feature integration, test coverage for critical user flows, and tighter roadmap coordination between founders and engineering.",
    metrics: [
      { label: "Release cadence supported", value: "Weekly" },
      { label: "Core AI flows covered", value: "Jest smoke tests" },
      { label: "Performance checks", value: "Lighthouse + CWV reviews" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "OpenAI", "Jest", "Lighthouse"],
    timeline: "Ongoing support across 3 release cycles",
    year: "2025",
    publishedAt: "2026-06-02",
    modifiedAt: "2026-06-02",
    sections: [
      {
        type: "paragraph",
        text: "An AI productivity product was moving fast, but the delivery model was starting to strain. The team was shipping new interface flows and OpenAI-assisted features in parallel, without a strong frontend structure for reuse, testing, or performance review.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "The main challenge was operational rather than conceptual: the product needed to keep releasing every week, while AI-driven UI states, prompt handling, and asynchronous loading patterns were making the frontend harder to reason about. Founders also needed engineering work translated into clear delivery decisions instead of a backlog full of loosely defined experiments.",
      },
      {
        type: "list",
        items: [
          "UI patterns were being repeated across onboarding, workspace, and assistant flows.",
          "AI features needed predictable loading, fallback, and error states in the product UI.",
          "Performance checks were needed before new flows could be treated as production-ready.",
          "Roadmap discussions needed clearer translation into engineering scope and release order.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We reworked the frontend around clearer React, Next.js, and TypeScript patterns so shared UI and state handling could be reused instead of rebuilt per feature. On the AI side, we integrated OpenAI-powered personalisation flows with explicit loading, retry, and fallback handling, then added a lightweight quality loop using Jest smoke tests and Lighthouse reviews before releases.",
      },
      {
        type: "list",
        items: [
          "Shared frontend patterns in React, Next.js, and TypeScript for repeated product surfaces.",
          "OpenAI integration for personalisation features with defined loading and fallback states.",
          "Jest smoke tests around key assistant and onboarding flows before release.",
          "Lighthouse and Core Web Vitals review as part of release readiness checks.",
          "Regular roadmap translation between founders, product decisions, and engineering scope.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "The engagement gave the team a steadier delivery setup rather than a headline metric. Shared frontend patterns reduced one-off implementation work across new surfaces, AI features shipped with explicit UX behavior for slow or failed responses, and releases had a repeatable check for test coverage and performance before going live. Just as importantly, roadmap conversations became more concrete because product priorities were being converted into scoped engineering work for the next release cycle instead of staying at the idea level.",
      },
    ],
  },
  {
    slug: "basic-fit-sfcc-migration",
    industry: "E-commerce / Fitness",
    location: "Europe",
    clientSize: "Multi-market fitness ecommerce team",
    problem:
      "A high-risk ecommerce migration to Salesforce Commerce Cloud had to preserve UX quality while improving performance, SEO, and conversion opportunities across multiple markets.",
    solution:
      "Led a multi-country Salesforce Commerce Cloud migration with custom templates, responsive implementation, A/B testing support, and integrated analytics.",
    metrics: [
      { label: "Platform rollout", value: "Multi-country SFCC migration" },
      { label: "Implementation scope", value: "Custom templates + responsive frontend" },
      { label: "Post-launch readiness", value: "Analytics + A/B testing in place" },
    ],
    technologies: ["Salesforce Commerce Cloud", "A/B Testing", "Analytics", "Responsive Design"],
    timeline: "Multi-phase migration",
    year: "2025",
    publishedAt: "2026-06-02",
    modifiedAt: "2026-06-02",
    sections: [
      {
        type: "paragraph",
        text: "Basic-Fit needed to move a revenue-critical ecommerce flow onto Salesforce Commerce Cloud while keeping the customer journey stable across markets. Because the migration affected multiple country sites, the work had to protect navigation, merchandising, responsive behaviour, and conversion paths while the platform underneath was being replaced.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "This was not just a replatforming exercise. The SFCC build had to carry over working customer journeys, avoid unnecessary SEO disruption, and give internal teams a platform they could keep optimising after go-live. That required controlled rollout coordination, custom implementation work inside SFCC, and measurement coverage strong enough to compare behaviour before and after launch.",
      },
      {
        type: "list",
        items: [
          "Migration scope covered multiple country storefronts on a live commerce operation.",
          "Core UX patterns had to remain intact through the platform transition.",
          "SEO and performance could not be treated as a post-migration cleanup task.",
          "Analytics and experimentation needed to be available from the first production phase.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We led the SFCC migration with a practical focus on rollout control and frontend quality. The delivery included custom Salesforce Commerce Cloud templates, responsive implementation for key commerce journeys, analytics instrumentation, and A/B testing support so the team could monitor behaviour closely and continue optimising once traffic moved onto the new stack.",
      },
      {
        type: "list",
        items: [
          "Migration coordination across a live multi-market ecommerce transition.",
          "Custom SFCC template implementation for the new storefront experience.",
          "Responsive frontend work to preserve consistency across device types.",
          "Analytics integration to validate post-launch behaviour and performance.",
          "A/B testing support so optimisation work could continue on the new platform.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "The migration delivered a working SFCC foundation without forcing the business to pause optimisation work after launch. Customer-facing journeys were preserved through the transition, the new storefront shipped with analytics visibility in place, and experimentation capability was available as part of the operational setup rather than something deferred to a later phase.",
      },
    ],
  },
];

export const caseStudyBySlug = new Map<string, CaseStudy>(caseStudies.map((cs) => [cs.slug, cs]));
