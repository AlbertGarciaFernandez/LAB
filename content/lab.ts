export type LabLocale = "en" | "es";

export type LabLesson = {
  slug: string;
  title: string;
  problem: string;
  explanation: string[];
  steps: Array<{ title: string; body: string }>;
  example: {
    title: string;
    summary: string;
    bullets: string[];
  };
  downloads: string[];
};

export type LabModule = {
  slug: string;
  title: string;
  summary: string;
  progressPercent: number;
  lessons: LabLesson[];
};

export type LabSystem = {
  slug: string;
  label: string;
  title: string;
  shortDescription: string;
  overview: string;
  progressPercent: number;
  modules: LabModule[];
};

export type LabResource = {
  slug: string;
  category: "Acquisition" | "Content" | "Reporting" | "Operations" | "Security";
  title: string;
  description: string;
  downloadLabel: string;
};

export type LabLandingNavItem = {
  label: string;
  href: string;
};

export type LabLandingStep = {
  step: string;
  title: string;
  body: string;
};

export type LabLanding = {
  brandLabel: string;
  brandName: string;
  navItems: LabLandingNavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  snapshotLabel: string;
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    framingEyebrow: string;
    framingTitle: string;
    framingDescription: string;
    benefits: string[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: LabLandingStep[];
  };
  systems: {
    eyebrow: string;
    title: string;
    description: string;
  };
  differentiation: {
    eyebrow: string;
    title: string;
    description: string;
    cardEyebrow: string;
    cardTitle: string;
    cardDescription: string;
    points: string[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    cardTitle: string;
    cardDescription: string;
  };
};

type LabCopy = {
  ctaPrimary: string;
  ctaSecondary: string;
};

type LabUser = {
  name: string;
  role: string;
  activeSystemSlug: string;
  overallProgressSummary: string;
};

type LabLocaleData = {
  locale: LabLocale;
  copy: LabCopy;
  landing: LabLanding;
  user: LabUser;
  systems: LabSystem[];
  resources: LabResource[];
};

const baseLabCopy: LabCopy = {
  ctaPrimary: "View Systems",
  ctaSecondary: "Preview Platform",
};

const baseLabLanding: LabLanding = {
  brandLabel: "CodeHunter",
  brandName: "Lab",
  navItems: [
    { label: "Why Lab", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Systems", href: "#systems" },
    { label: "Proof", href: "#differentiation" },
  ],
  hero: {
    eyebrow: "Paid Social Landing Surface",
    title: "Product systems for teams that need a clearer path from traffic to launch.",
    description:
      "CodeHunter Lab packages the product strategy, operating structure, and system map into one premium learning surface so teams can move from interest to execution without losing momentum.",
  },
  snapshotLabel: "Current Lab Snapshot",
  problem: {
    eyebrow: "The Problem",
    title: "Most teams do not need more ideas. They need a product surface that organizes what matters.",
    description:
      "Paid social traffic drops into disconnected promises far too often. Lab is built to tighten the handoff between positioning, systems, and what a buyer can actually preview next.",
    items: [
      "Traffic lands on generic consulting pages instead of a product narrative.",
      "Internal knowledge is scattered across notes, docs, and unfinished workflows.",
      "Buyers struggle to see how strategy becomes an operational system they can adopt.",
    ],
  },
  solution: {
    eyebrow: "The Solution",
    title: "Lab presents the platform as a product, not a vague services menu.",
    description:
      "The landing page introduces the structure, shows the systems, and makes the next step obvious. The result is a clearer story for premium buyers and a reusable frame for future public surfaces.",
    framingEyebrow: "Product Framing",
    framingTitle: "One page to understand the operating model, the systems, and the next action.",
    framingDescription:
      "The public surface stays intentionally sparse: strong hierarchy, high-contrast typography, and selective proof instead of crowded claims.",
    benefits: [
      "Dedicated product navigation from day one",
      "Clear CTA hierarchy for paid acquisition",
      "Reusable section and card primitives for future growth",
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "A simple path from first click to system-level understanding.",
    description:
      "Each section carries a specific job: frame the problem, explain the product logic, surface the systems, and create a confident next click.",
    steps: [
      {
        step: "01",
        title: "Frame the outcome",
        body: "Lead with the promise of a guided platform instead of open-ended service exploration.",
      },
      {
        step: "02",
        title: "Show the systems",
        body: "Use structured summaries from the Lab data source so the public surface reflects the product model.",
      },
      {
        step: "03",
        title: "Drive the next action",
        body: "Keep the CTA hierarchy stable: View Systems first, Preview Platform second.",
      },
    ],
  },
  systems: {
    eyebrow: "Systems",
    title: "The first three Lab systems are already mapped.",
    description:
      "These summaries come directly from the Lab content contract so the marketing surface stays aligned with the product structure.",
  },
  differentiation: {
    eyebrow: "Why It Converts",
    title: "Clean enough for premium traffic. Structured enough to feel credible.",
    description:
      "Lab differentiates itself by showing a real operating model instead of relying on broad AI agency language.",
    cardEyebrow: "What buyers feel",
    cardTitle: "The product feels intentional, premium, and already in motion.",
    cardDescription:
      "That matters for paid social traffic, where signal is weak and the first page has to establish taste, confidence, and direction very quickly.",
    points: [
      "White-first surface with restrained contrast",
      "Dedicated Lab navigation rather than the broad site menu",
      "CTA hierarchy that matches the product journey",
      "Reusable components for future campaign pages",
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "Explore the systems now, then preview the broader platform.",
    description:
      "The landing stack is designed to keep the action clear without overwhelming the page.",
    cardTitle: "Start with the system map, then move deeper once the product logic clicks.",
    cardDescription:
      "This keeps the first conversion lightweight while preserving a second path for visitors who want more context before committing.",
  },
};

const baseLabUser: LabUser = {
  name: "Albert Garcia",
  role: "Founder",
  activeSystemSlug: "foundations",
  overallProgressSummary: "3 systems, 5 resources, 1 path to launch.",
};

const baseLabSystems: LabSystem[] = [
  {
    slug: "foundations",
    label: "System 01",
    title: "System 01 — Foundations",
    shortDescription: "Core positioning and audience fundamentals.",
    overview: "Start here to orient the lab and define the base strategy.",
    progressPercent: 33,
    modules: [
      {
        slug: "orientation",
        title: "Orientation",
        summary: "Understand the platform, scope, and learning path.",
        progressPercent: 100,
        lessons: [
          {
            slug: "map-client-intake",
            title: "Lab Overview",
            problem: "The team needs a clear starting point.",
            explanation: [
              "This lesson frames the lab before deeper work begins.",
              "Use it to orient the team before moving into execution.",
            ],
            steps: [
              {
                title: "Review the platform overview",
                body: "Confirm the systems and how they fit together.",
              },
              {
                title: "Pick the active system",
                body: "Start with the system that maps to the current workstream.",
              },
              {
                title: "Confirm the intended outcome",
                body: "Define what the team should be able to do after this lesson.",
              },
            ],
            example: {
              title: "Example use",
              summary: "Use the overview to decide where to begin.",
              bullets: [
                "Open the lab overview first.",
                "Pick the active system.",
                "Share the intended outcome with the team.",
              ],
            },
            downloads: ["Foundations brief", "Lab checklist"],
          },
        ],
      },
    ],
  },
  {
    slug: "operations",
    label: "System 02",
    title: "System 02 — Operations",
    shortDescription: "Processes for delivery, support, and internal execution.",
    overview: "Turn the strategy into a repeatable operating system.",
    progressPercent: 66,
    modules: [
      {
        slug: "workflow-control",
        title: "Workflow Control",
        summary: "Keep work moving with simple operational rules.",
        progressPercent: 100,
        lessons: [
          {
            slug: "daily-ops",
            title: "Daily Ops",
            problem: "The team needs consistent execution.",
            explanation: [
              "Operational routines reduce drift and manual follow-up.",
              "Small repeatable habits keep delivery visible.",
            ],
            steps: [
              {
                title: "Review daily priorities",
                body: "Decide what must move forward today.",
              },
              {
                title: "Assign owners for blockers",
                body: "Make the next action and owner explicit.",
              },
              {
                title: "Capture follow-up items",
                body: "Record anything that needs review later.",
              },
            ],
            example: {
              title: "Example use",
              summary: "A daily review keeps delivery visible.",
              bullets: [
                "Run a short morning check-in.",
                "List blockers with owners.",
                "Close the loop before end of day.",
              ],
            },
            downloads: ["Operations checklist", "Status log"],
          },
        ],
      },
    ],
  },
  {
    slug: "architecture",
    label: "System 03",
    title: "System 03 — Architecture",
    shortDescription: "Structure for products, content, and platform decisions.",
    overview: "Shape the platform so every piece has a clear role.",
    progressPercent: 100,
    modules: [
      {
        slug: "platform-design",
        title: "Platform Design",
        summary: "Map the platform so the next build step is obvious.",
        progressPercent: 100,
        lessons: [
          {
            slug: "system-map",
            title: "System Map",
            problem: "The architecture needs a shared reference.",
            explanation: [
              "A system map clarifies how content, operations, and acquisition relate.",
              "It makes the handoff points easier to maintain.",
            ],
            steps: [
              {
                title: "List each system boundary",
                body: "Name the systems before introducing dependencies.",
              },
              {
                title: "Connect systems to outcomes",
                body: "Show how each system supports a visible result.",
              },
              {
                title: "Review dependencies and handoffs",
                body: "Identify the interfaces that need coordination.",
              },
            ],
            example: {
              title: "Example use",
              summary: "Draw the system map before adding new modules.",
              bullets: [
                "Start with the three top-level systems.",
                "Mark the dependencies between modules.",
                "Use the map when scoping new work.",
              ],
            },
            downloads: ["System map", "Architecture notes"],
          },
        ],
      },
    ],
  },
];

const baseLabResources: LabResource[] = [
  {
    slug: "acquisition-stack",
    category: "Acquisition",
    title: "Acquisition Stack",
    description: "Traffic, lead capture, and demand generation.",
    downloadLabel: "Download acquisition stack",
  },
  {
    slug: "content-stack",
    category: "Content",
    title: "Content Stack",
    description: "Editorial systems for publishing and reuse.",
    downloadLabel: "Download content stack",
  },
  {
    slug: "reporting-stack",
    category: "Reporting",
    title: "Reporting Stack",
    description: "Metrics, dashboards, and performance visibility.",
    downloadLabel: "Download reporting stack",
  },
  {
    slug: "operations-stack",
    category: "Operations",
    title: "Operations Stack",
    description: "Execution and handoff tooling for the team.",
    downloadLabel: "Download operations stack",
  },
  {
    slug: "security-stack",
    category: "Security",
    title: "Security Stack",
    description: "Access, permissions, and platform safeguards.",
    downloadLabel: "Download security stack",
  },
];

function cloneLabLanding(landing: LabLanding): LabLanding {
  return {
    ...landing,
    navItems: landing.navItems.map((item) => ({ ...item })),
    hero: { ...landing.hero },
    problem: {
      ...landing.problem,
      items: [...landing.problem.items],
    },
    solution: {
      ...landing.solution,
      benefits: [...landing.solution.benefits],
    },
    howItWorks: {
      ...landing.howItWorks,
      steps: landing.howItWorks.steps.map((step) => ({ ...step })),
    },
    systems: { ...landing.systems },
    differentiation: {
      ...landing.differentiation,
      points: [...landing.differentiation.points],
    },
    cta: { ...landing.cta },
  };
}

function cloneLabData(data: LabLocaleData): LabLocaleData {
  return {
    locale: data.locale,
    copy: { ...data.copy },
    landing: cloneLabLanding(data.landing),
    user: { ...data.user },
    systems: data.systems.map((system) => ({
      ...system,
      modules: system.modules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) => ({
          ...lesson,
          explanation: [...lesson.explanation],
          steps: lesson.steps.map((step) => ({ ...step })),
          example: {
            ...lesson.example,
            bullets: [...lesson.example.bullets],
          },
          downloads: [...lesson.downloads],
        })),
      })),
    })),
    resources: data.resources.map((resource) => ({ ...resource })),
  };
}

function normalizeLabLocale(locale: string): LabLocale {
  const normalized = locale.toLowerCase().replaceAll("_", "-");
  return /^es(?:-[a-z0-9]+)?$/.test(normalized) ? "es" : "en";
}

function buildLabLocaleData(locale: LabLocale): LabLocaleData {
  if (locale === "es") {
    return {
      locale,
      copy: { ...baseLabCopy },
      landing: cloneLabLanding(baseLabLanding),
      user: { ...baseLabUser },
      systems: cloneLabData({
        locale,
        copy: baseLabCopy,
        landing: baseLabLanding,
        user: baseLabUser,
        systems: baseLabSystems,
        resources: baseLabResources,
      }).systems,
      resources: cloneLabData({
        locale,
        copy: baseLabCopy,
        landing: baseLabLanding,
        user: baseLabUser,
        systems: baseLabSystems,
        resources: baseLabResources,
      }).resources,
    };
  }

  return {
    locale,
    copy: { ...baseLabCopy },
    landing: cloneLabLanding(baseLabLanding),
    user: { ...baseLabUser },
    systems: cloneLabData({
      locale,
      copy: baseLabCopy,
      landing: baseLabLanding,
      user: baseLabUser,
      systems: baseLabSystems,
      resources: baseLabResources,
    }).systems,
    resources: cloneLabData({
      locale,
      copy: baseLabCopy,
      landing: baseLabLanding,
      user: baseLabUser,
      systems: baseLabSystems,
      resources: baseLabResources,
    }).resources,
  };
}

const enLabData = buildLabLocaleData("en");
const esLabData = buildLabLocaleData("es");

const labContent: Record<LabLocale, LabLocaleData> = {
  en: enLabData,
  es: esLabData,
};

export function getLabData(locale: string) {
  return cloneLabData(labContent[normalizeLabLocale(locale)]);
}

export function getSystemBySlug(systemSlug: string, locale: string) {
  return getLabData(locale).systems.find((system) => system.slug === systemSlug);
}

export function getLessonBySlug(systemSlug: string, lessonSlug: string, locale: string) {
  const system = getSystemBySlug(systemSlug, locale);
  return system?.modules
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson.slug === lessonSlug);
}
