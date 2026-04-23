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
  copy: LabCopy;
  user: LabUser;
  systems: LabSystem[];
  resources: LabResource[];
};

const sharedLabCopy: LabCopy = {
  ctaPrimary: "View Systems",
  ctaSecondary: "Preview Platform",
};

const sharedLabUser: LabUser = {
  name: "Albert Garcia",
  role: "Founder",
  activeSystemSlug: "foundations",
  overallProgressSummary: "3 systems, 5 resources, 1 path to launch.",
};

const sharedLabSystems: LabSystem[] = [
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

const sharedLabResources: LabResource[] = [
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

function cloneLabData(data: LabLocaleData): LabLocaleData {
  return {
    copy: { ...data.copy },
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

const sharedLabLocaleData: LabLocaleData = {
  copy: sharedLabCopy,
  user: sharedLabUser,
  systems: sharedLabSystems,
  resources: sharedLabResources,
};

function normalizeLabLocale(locale: string): LabLocale {
  const normalized = locale.toLowerCase().replaceAll("_", "-");
  return /^es(?:-[a-z0-9]+)?$/.test(normalized) ? "es" : "en";
}

function buildLabLocaleData(locale: LabLocale): LabLocaleData {
  if (locale === "es") {
    return cloneLabData(sharedLabLocaleData);
  }

  return cloneLabData(sharedLabLocaleData);
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
