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
  title?: string;
  subtitle?: string;
  productType?: string;
  role?: string;
  team?: string;
  status?: string;
  tags: string[];
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
  disclaimer?: string;
  cta?: {
    title: string;
    text: string;
    label: string;
  };
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "basic-fit-sfcc-migration",
    title: "Transforming a high-volume digital membership journey",
    subtitle:
      "How a cross-functional product and engineering team migrated a European fitness platform while improving conversion, engagement and customer experience.",
    productType: "Customer-facing ecommerce and membership platform",
    role: "Frontend Developer working across product, UX and engineering",
    team: "Product managers, designers, engineers and business stakeholders",
    status: "Launched as part of a wider cross-functional programme",
    tags: ["Consumer Product", "Ecommerce", "Experimentation", "Cross-functional Delivery"],
    industry: "E-commerce / Fitness",
    location: "Europe",
    clientSize: "Multi-market fitness ecommerce team",
    problem:
      "Customers needed to understand membership options, compare plans and complete registration with as little friction as possible during a high-risk platform migration.",
    solution:
      "A multi-country Salesforce Commerce Cloud migration focused on reusable customer journeys, responsive frontend implementation, analytics visibility and A/B testing readiness.",
    metrics: [
      { label: "Conversion improvement", value: "20-40%" },
      { label: "Cart abandonment", value: "-25%" },
      { label: "Click-through rate", value: "+40%" },
    ],
    technologies: ["Salesforce Commerce Cloud", "React", "JavaScript", "APIs", "A/B Testing"],
    timeline: "Multi-phase migration",
    year: "2025",
    publishedAt: "2026-01-15",
    modifiedAt: "2026-07-28",
    disclaimer:
      "These outcomes were achieved by the wider cross-functional team. My contribution focused on customer-facing implementation, technical quality and iterative improvement of the experience.",
    cta: {
      title: "Need to modernise a customer-facing platform without losing product momentum?",
      text: "We help teams connect product strategy, customer experience and engineering delivery throughout complex digital transformations.",
      label: "Discuss your product transformation",
    },
    sections: [
      {
        type: "paragraph",
        text: "Basic-Fit was undertaking a major migration of its customer-facing digital platform to Salesforce Commerce Cloud. The challenge was not simply to replace the underlying technology. The new platform needed to preserve business-critical membership journeys, support multiple European markets and create a stronger foundation for continuous product optimisation.",
      },
      { type: "heading", text: "Customer problem" },
      {
        type: "paragraph",
        text: "Customers needed to understand membership options, compare plans and complete registration with as little friction as possible. Any confusion, performance issue or interruption across this journey could affect conversion, abandonment and customer trust.",
      },
      { type: "heading", text: "My contribution" },
      {
        type: "list",
        items: [
          "Contributed to implementation and optimisation of critical membership journeys.",
          "Identified UX and technical friction within customer-facing flows.",
          "Evaluated implementation trade-offs with product and engineering stakeholders.",
          "Supported reusable frontend architecture across markets and experiences.",
          "Improved performance, accessibility and interface consistency.",
        ],
      },
      { type: "heading", text: "Product and technical decisions" },
      {
        type: "list",
        items: [
          "Protect the critical customer journey: prioritise plan exploration, registration and conversion flows.",
          "Build for reuse across markets: shared components reduced inconsistency and supported regional rollout.",
          "Balance migration with improvement: preserve continuity while improving areas where evidence showed friction.",
          "Connect engineering decisions to customer outcomes: performance, accessibility and frontend architecture were treated as product concerns.",
        ],
      },
      { type: "heading", text: "Journey before and after" },
      {
        type: "paragraph",
        text: "Before: legacy platform -> fragmented patterns -> inconsistent country experiences -> technical limitations -> difficult optimisation.",
      },
      {
        type: "paragraph",
        text: "After: reusable customer journeys -> shared design and frontend patterns -> scalable regional rollout -> improved measurement -> continuous optimisation.",
      },
      { type: "heading", text: "Selected outcomes" },
      {
        type: "paragraph",
        text: "The wider programme contributed to measurable improvements across important digital indicators, including conversion, cart abandonment, bounce rate, engagement and click-through rate.",
      },
      { type: "heading", text: "What I learned" },
      {
        type: "paragraph",
        text: "Large migrations succeed when they are treated as product transformations rather than infrastructure replacements. Alignment between customer needs, business goals, design decisions and technical constraints was as important as delivering the new platform itself.",
      },
    ],
  },
  {
    slug: "ai-productivity-app-accelerator",
    title: "Defining and launching an AI productivity product from zero to one",
    subtitle:
      "From an ambiguous productivity problem to a focused MVP, measurable user journeys and a production-ready AI architecture.",
    productType: "Zero-to-one AI productivity product",
    role: "Product strategy, discovery and technical leadership",
    team: "Founders, product design and engineering",
    status: "MVP direction and production delivery support",
    tags: ["0-to-1 Product", "AI/LLMs", "Product Discovery", "MVP"],
    industry: "SaaS / AI Product",
    location: "Europe (remote product team)",
    clientSize: "2 founders, 1 designer, 4 engineers",
    problem:
      "A broad AI productivity idea needed to become a specific, repeatable workflow where AI could create measurable user value.",
    solution:
      "A focused MVP around converting unstructured information into clear, editable action output, with explicit AI states, measurement and production-ready implementation patterns.",
    metrics: [
      { label: "Product stage", value: "0-to-1" },
      { label: "Core workflow", value: "Focused MVP" },
      { label: "Release model", value: "Weekly" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "OpenAI", "Jest", "Lighthouse"],
    timeline: "Ongoing support across 3 release cycles",
    year: "2025",
    publishedAt: "2026-02-12",
    modifiedAt: "2026-07-28",
    cta: {
      title: "Exploring an AI product opportunity?",
      text: "We help teams identify the right workflow, define a focused MVP and build AI capabilities around measurable customer value.",
      label: "Discuss your AI product",
    },
    sections: [
      { type: "heading", text: "The opportunity" },
      {
        type: "paragraph",
        text: "The initial idea was broad: use generative AI to help users work more effectively. Before selecting features or technology, the challenge was to identify a specific recurring problem where AI could provide meaningful value rather than becoming an additional chatbot without a clear purpose.",
      },
      { type: "heading", text: "Product discovery" },
      {
        type: "list",
        items: [
          "Which users experience the problem most frequently?",
          "What part of their workflow creates the greatest friction?",
          "Which actions should AI perform and which should remain under user control?",
          "What evidence would demonstrate that the product was genuinely useful?",
          "Which capabilities were essential for the first version?",
        ],
      },
      { type: "heading", text: "Product hypothesis" },
      {
        type: "paragraph",
        text: "We believe that helping users convert unstructured information into a clear, editable action plan will reduce time-to-completion and increase repeated use of the product.",
      },
      { type: "heading", text: "MVP scope" },
      {
        type: "list",
        items: [
          "Included one clearly defined core workflow, structured AI output, editing, confirmation, fallback states, usage measurement and feedback capture.",
          "Postponed broad tool collections, autonomous irreversible actions, complex collaboration, extensive integrations and enterprise permissions.",
        ],
      },
      { type: "heading", text: "AI product trade-offs" },
      {
        type: "list",
        items: [
          "Accuracy vs cost and latency.",
          "Automation vs user control.",
          "Personalisation vs privacy risk.",
          "Flexible prompts vs predictable output.",
          "Safety controls vs interaction friction.",
        ],
      },
      { type: "heading", text: "Success framework" },
      {
        type: "list",
        items: [
          "Activation: users completing the core workflow.",
          "Time to first value and repeated weekly usage.",
          "Percentage of AI output accepted or edited.",
          "Task completion time, user-reported usefulness and cost per completed workflow.",
        ],
      },
      { type: "heading", text: "What I learned" },
      {
        type: "paragraph",
        text: "The hardest part of building an AI product is usually not connecting the model. It is defining the right level of automation, designing for uncertainty and identifying an outcome users value enough to repeat.",
      },
    ],
  },
  {
    slug: "music-event-discovery-concept",
    title: "From Mood to Dancefloor",
    subtitle:
      "Designing a consumer music event discovery concept that helps people choose what to attend based on mood, atmosphere, social context and practical constraints.",
    productType: "Consumer event discovery concept",
    role: "Product strategy, discovery and technical product leadership",
    team: "Independent concept",
    status: "Independent product exploration",
    tags: ["Consumer Discovery", "Music Events", "Mobile UX", "Decision Support"],
    industry: "Music Event Product Concept",
    location: "Independent",
    clientSize: "Concept exploration",
    problem:
      "People often want a specific kind of night out before they know which artist, venue or promoter can provide it.",
    solution:
      "An intent-to-decision product concept that helps users express the experience they want, evaluate trustworthy event options, coordinate with friends and move to an official ticket source without manipulative urgency.",
    metrics: [
      { label: "Core journey", value: "Intent to decision" },
      { label: "Decision model", value: "Social" },
      { label: "MVP scope", value: "Focused" },
    ],
    technologies: ["Mobile UX", "Recommendation systems", "Event data", "Product analytics"],
    timeline: "Product concept",
    year: "2026",
    publishedAt: "2026-03-18",
    modifiedAt: "2026-07-29",
    disclaimer:
      "Independent product exploration created to demonstrate product strategy, discovery and mobile product thinking. It is not affiliated with any ticketing platform, venue or event organiser.",
    sections: [
      { type: "heading", text: "The opportunity" },
      {
        type: "paragraph",
        text: "People do not always begin their search for an event with a specific artist, club or festival in mind. Often they start with a broader intention: I want to dance this Saturday, I want something queer-friendly, I want techno but not something too hard, I need something under EUR30, or I want somewhere close to home.",
      },
      { type: "heading", text: "Product challenge" },
      {
        type: "paragraph",
        text: "How might we help people find a music event that fits the night they want to have? The challenge is to make discovery feel personal and useful without forcing users through a long questionnaire or an overwhelming collection of filters.",
      },
      { type: "heading", text: "Intent-to-decision journey" },
      {
        type: "list",
        items: [
          "Intent: the user starts with a desired feeling, social context or experience rather than a specific event.",
          "Exploration: the user sees events, venues, artists and promoters that may match that intention.",
          "Evaluation: the user checks whether an event fits their music taste, atmosphere, price, location, timing and audience expectations.",
          "Coordination: the user shares options and aligns with friends without needing a full social network.",
          "Commitment: the user saves an event, joins a waiting list, adds it to a calendar or opens the official ticket source.",
        ],
      },
      { type: "heading", text: "Research questions" },
      {
        type: "list",
        items: [
          "How do people decide which event to attend when they do not know the lineup?",
          "Which factors create confidence or hesitation?",
          "How important are genre, atmosphere, crowd, venue and promoter?",
          "When do users browse alone and when do they decide with friends?",
          "How do users assess whether an event feels welcoming, safe and worth the price?",
        ],
      },
      { type: "heading", text: "Product principles" },
      {
        type: "list",
        items: [
          "Start with experience, not inventory: understand what the user wants to feel or do before showing a large catalogue.",
          "Explain recommendations: users should understand why an event appears and be able to correct the system.",
          "Preserve user control: personalisation should assist discovery without hiding alternatives.",
          "Support social decision-making: sharing and lightweight coordination should not require a public feed.",
          "Measure confident decisions: time spent browsing is not automatically a positive signal.",
        ],
      },
      { type: "heading", text: "MVP scope" },
      {
        type: "list",
        items: [
          "Included intent-based entry, event recommendations, recommendation explanations, event detail pages, saved options, shareable event picks, official ticket-source links and basic product analytics.",
          "Excluded public social feeds, direct messaging, user-generated reviews, full community profiles, in-app ticket marketplace, dynamic ticket pricing, gamification and complex loyalty programmes.",
        ],
      },
      { type: "heading", text: "Experimentation plan" },
      {
        type: "list",
        items: [
          "Intent-led entry: compare genre-first discovery with mood-and-context entry using relevant event detail opens as the primary metric.",
          "Recommendation explanations: compare recommendations with and without contextual explanations using engagement, saves and user-reported trust.",
          "Event comparison: test whether side-by-side evaluation improves progression to an official ticket source.",
          "Shared event picks: test whether lightweight voting improves group decisions without requiring a messaging product.",
          "Availability reminders: test user-controlled reminders with opt-out, complaint and notification fatigue as guardrails.",
        ],
      },
      { type: "heading", text: "Product and technical trade-offs" },
      {
        type: "list",
        items: [
          "Personalisation versus privacy: behavioural and location data can improve relevance, but users need consent, controls and explanations.",
          "Exploration versus decision speed: showing more events may increase discovery while making it harder to choose.",
          "Commercial ranking versus user trust: sponsored visibility should be disclosed and should not silently override relevance.",
          "Social usefulness versus infrastructure: group coordination can create value, but public feeds and messaging add moderation before the core problem is validated.",
          "Recommendation accuracy versus cold-start friction: more onboarding questions may improve relevance but reduce activation.",
        ],
      },
      { type: "heading", text: "Trust, safety and inclusion" },
      {
        type: "paragraph",
        text: "Music event decisions involve more than genre and price. Users may care about accessibility, venue policies, community focus, safer-space information, age restrictions, facilities, late-night transport and official ticket sources. The product should avoid unverified safety claims and attribute information to organisers where possible.",
      },
      { type: "heading", text: "What this exploration demonstrates" },
      {
        type: "paragraph",
        text: "This concept demonstrates how an ambiguous customer intention can become a defined product opportunity, a mobile-native decision journey, a prioritised MVP, product hypotheses, controlled experiments, success metrics and visible technical and commercial trade-offs.",
      },
    ],
  },
  {
    slug: "accounting-firm-document-automation",
    title: "Redesigning document intake for an accounting firm",
    subtitle:
      "How we reduced repetitive administration by turning fragmented document handling into a measurable, human-supervised workflow.",
    productType: "Internal operational platform",
    role: "Product discovery, workflow design and technical delivery",
    team: "Accounting stakeholders and delivery team",
    status: "Workflow redesign and automation delivery",
    tags: ["Internal Product", "Workflow Discovery", "Human-in-the-loop", "Systems Integration"],
    industry: "Accounting",
    location: "Netherlands",
    clientSize: "8 accountants, 400+ clients",
    problem:
      "The accounting team received invoices, receipts and supporting documents through disconnected channels, creating slow and inconsistent work for staff and clients.",
    solution:
      "A centralised document intake workflow with classification, client matching, confidence checks, human exception handling and audit logging.",
    metrics: [
      { label: "Document handling", value: "Reduced" },
      { label: "Exception flow", value: "Visible" },
      { label: "Review model", value: "Human-led" },
    ],
    technologies: ["n8n", "Google Drive API", "Zapier", "Document classification"],
    timeline: "6 weeks",
    year: "2025",
    publishedAt: "2026-04-09",
    modifiedAt: "2026-07-28",
    cta: {
      title: "Is document handling slowing down your team?",
      text: "We help organisations redesign document journeys, automate predictable work and preserve human control where professional judgement matters.",
      label: "Discuss your workflow",
    },
    sections: [
      { type: "heading", text: "Context" },
      {
        type: "paragraph",
        text: "Employees needed to download, identify, rename, classify and associate each document with the correct client before beginning the accounting work itself. The result was a slow and inconsistent experience for both staff and clients.",
      },
      { type: "heading", text: "Discovery" },
      {
        type: "list",
        items: [
          "Mapped where documents entered the process.",
          "Separated steps requiring professional judgement from predictable repetitive decisions.",
          "Identified where incorrect or incomplete documents created delays.",
          "Clarified how exceptions should be escalated and which system should remain the source of truth.",
        ],
      },
      { type: "heading", text: "Product opportunity" },
      {
        type: "paragraph",
        text: "How might we reduce repetitive document handling while preserving review, traceability and professional control?",
      },
      { type: "heading", text: "MVP scope" },
      {
        type: "list",
        items: [
          "Centralised document intake, document type classification and defined field extraction.",
          "Matching documents to client records and detecting missing or low-confidence information.",
          "Human review for exceptions and audit logging of automated and manual actions.",
          "Advanced analysis and autonomous accounting decisions were excluded from the first release.",
        ],
      },
      { type: "heading", text: "Key product decisions" },
      {
        type: "list",
        items: [
          "Automate predictable work, not professional judgement.",
          "Make uncertainty visible instead of silently accepting low-confidence results.",
          "Treat the exception queue as a primary product experience.",
          "Preserve the existing accounting system as the source of truth.",
        ],
      },
      { type: "heading", text: "Journey before and after" },
      {
        type: "paragraph",
        text: "Before: client email or upload -> manual download -> manual renaming -> manual classification -> client matching -> missing-information follow-up -> accounting review.",
      },
      {
        type: "paragraph",
        text: "After: centralised intake -> automated classification -> field extraction -> client matching -> confidence check -> human exception queue -> accounting review.",
      },
      { type: "heading", text: "What I learned" },
      {
        type: "paragraph",
        text: "Operational automation creates value when it improves the complete human workflow, including exceptions, corrections and accountability. Automating only the ideal path would have moved the bottleneck rather than removing it.",
      },
    ],
  },
  {
    slug: "dental-clinic-whatsapp-automation",
    title: "Reducing appointment friction across a multi-location patient journey",
    subtitle:
      "How we redesigned appointment reminders, confirmation and recall workflows for a three-location healthcare provider.",
    productType: "Customer-facing healthcare communication product",
    role: "Product strategy, discovery, technical leadership and delivery",
    team: "Client stakeholders, operations staff and engineering",
    status: "Launched and measured",
    tags: [
      "Customer Journey",
      "Operational Product",
      "Conversational Automation",
      "Human Escalation",
    ],
    industry: "Dental Clinic",
    location: "Netherlands",
    clientSize: "3 locations, 12 staff",
    problem:
      "Patients received inconsistent appointment communication while front-desk staff managed confirmations, reminders and recall journeys across fragmented channels.",
    solution:
      "A WhatsApp-based reminder and recall workflow connected to appointment records, with clear patient options and human escalation for ambiguous situations.",
    metrics: [
      { label: "No-show reduction", value: "35%" },
      { label: "Hours recovered/week", value: "12" },
      { label: "Recall bookings", value: "+28%" },
    ],
    technologies: ["n8n", "WhatsApp Business API", "Make", "Practice management API"],
    timeline: "4 weeks",
    year: "2025",
    publishedAt: "2026-05-08",
    modifiedAt: "2026-07-28",
    disclaimer: "Baseline, measurement period and source should be verified before republication.",
    sections: [
      { type: "heading", text: "Context" },
      {
        type: "paragraph",
        text: "The organisation operated three locations with twelve staff members and relied heavily on manual calls, emails and personal WhatsApp messages to manage appointments. Patients had limited options to respond and staff lacked a consistent view of appointment status.",
      },
      { type: "heading", text: "Discovery and evidence" },
      {
        type: "list",
        items: [
          "Appointment no-show rate close to 18%.",
          "More than 15 staff hours per week spent on reminder calls.",
          "Inconsistent recall communication for overdue check-ups.",
          "Limited visibility into whether a patient confirmed, requested help or ignored a reminder.",
        ],
      },
      { type: "heading", text: "Product opportunity" },
      {
        type: "paragraph",
        text: "How might we help patients confirm, reschedule or request assistance without creating another communication channel for the front-desk team to manage?",
      },
      { type: "heading", text: "Key product decisions" },
      {
        type: "list",
        items: [
          "Use WhatsApp because it was already familiar to patients and required no additional application or account.",
          "Keep humans in ambiguous situations instead of generating unreliable automated responses.",
          "Start with appointment reminders and overdue recall journeys before expanding scope.",
          "Connect communication to the practice management platform as the source of truth.",
        ],
      },
      { type: "heading", text: "Journey before and after" },
      {
        type: "paragraph",
        text: "Before: appointment scheduled -> manual call -> voicemail -> email -> manual follow-up -> spreadsheet or system update.",
      },
      {
        type: "paragraph",
        text: "After: appointment scheduled -> automated reminder -> patient confirms, reschedules or requests support -> record updated or exception routed to staff.",
      },
      { type: "heading", text: "What we learned" },
      {
        type: "paragraph",
        text: "The greatest value did not come from automating every patient interaction. It came from separating predictable interactions from situations where human judgement remained necessary.",
      },
    ],
  },
];

export const caseStudyBySlug = new Map<string, CaseStudy>(caseStudies.map((cs) => [cs.slug, cs]));
