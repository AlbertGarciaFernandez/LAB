export type LabLocale = "en" | "es";

export type LabLesson = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  explanation: string;
  steps: string[];
  example: string;
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
  title: string;
  label: string;
  shortDescription: string;
  description: string;
  overview: string;
  progressPercent: number;
  modules: LabModule[];
};

export type LabResource = {
  slug: string;
  title: string;
  category: "Acquisition" | "Content" | "Reporting" | "Operations" | "Security";
  description: string;
  downloadLabel: string;
};

const sharedLabCopy = {
  ctaPrimary: "View Systems",
  ctaSecondary: "Preview Platform",
} as const;

const sharedLabUser = {
  name: "Albert Garcia",
  role: "Founder",
  activeSystemSlug: "foundations",
  overallProgressSummary: "3 systems, 5 resources, 1 path to launch.",
} as const;

const sharedLabSystems = [
  {
    slug: "foundations",
    title: "System 01 — Foundations",
    label: "Foundation layer",
    shortDescription: "Core positioning and audience fundamentals.",
    description: "Core positioning and audience fundamentals.",
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
            slug: "lab-overview",
            title: "Lab Overview",
            summary: "Understand the platform and how the systems fit together.",
            problem: "The team needs a clear starting point.",
            explanation: "This lesson frames the lab before deeper work begins.",
            steps: [
              "Review the platform overview.",
              "Pick the active system.",
              "Confirm the intended outcome.",
            ],
            example: "Use the overview to decide where to begin.",
            downloads: ["Foundations brief", "Lab checklist"],
          },
        ],
      },
    ],
  },
  {
    slug: "operations",
    title: "System 02 — Operations",
    label: "Operations layer",
    shortDescription: "Processes for delivery, support, and internal execution.",
    description: "Processes for delivery, support, and internal execution.",
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
            summary: "Track the operating routines that keep the lab moving.",
            problem: "The team needs consistent execution.",
            explanation: "Operational routines reduce drift and manual follow-up.",
            steps: [
              "Review daily priorities.",
              "Assign owners for blockers.",
              "Capture follow-up items.",
            ],
            example: "A daily review keeps delivery visible.",
            downloads: ["Operations checklist", "Status log"],
          },
        ],
      },
    ],
  },
  {
    slug: "architecture",
    title: "System 03 — Architecture",
    label: "Architecture layer",
    shortDescription: "Structure for products, content, and platform decisions.",
    description: "Structure for products, content, and platform decisions.",
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
            summary: "Model the platform so each part has a clear role.",
            problem: "The architecture needs a shared reference.",
            explanation: "A system map clarifies how content, operations, and acquisition relate.",
            steps: [
              "List each system boundary.",
              "Connect systems to outcomes.",
              "Review dependencies and handoffs.",
            ],
            example: "Draw the system map before adding new modules.",
            downloads: ["System map", "Architecture notes"],
          },
        ],
      },
    ],
  },
] satisfies LabSystem[];

const sharedLabResources = [
  {
    slug: "acquisition-stack",
    title: "Acquisition Stack",
    category: "Acquisition",
    description: "Traffic, lead capture, and demand generation.",
    downloadLabel: "Download acquisition stack",
  },
  {
    slug: "content-stack",
    title: "Content Stack",
    category: "Content",
    description: "Editorial systems for publishing and reuse.",
    downloadLabel: "Download content stack",
  },
  {
    slug: "reporting-stack",
    title: "Reporting Stack",
    category: "Reporting",
    description: "Metrics, dashboards, and performance visibility.",
    downloadLabel: "Download reporting stack",
  },
  {
    slug: "operations-stack",
    title: "Operations Stack",
    category: "Operations",
    description: "Execution and handoff tooling for the team.",
    downloadLabel: "Download operations stack",
  },
  {
    slug: "security-stack",
    title: "Security Stack",
    category: "Security",
    description: "Access, permissions, and platform safeguards.",
    downloadLabel: "Download security stack",
  },
] satisfies LabResource[];

const sharedLabLocaleData = {
  copy: sharedLabCopy,
  user: sharedLabUser,
  systems: sharedLabSystems,
  resources: sharedLabResources,
} as const;

const labContent = {
  en: sharedLabLocaleData,
  es: sharedLabLocaleData,
} as const;

function normalizeLabLocale(locale: string): LabLocale {
  return locale === "es" ? "es" : "en";
}

export function getLabData(locale: string) {
  return labContent[normalizeLabLocale(locale)];
}

export function getSystemBySlug(systemSlug: string) {
  return labContent.en.systems.find((system) => system.slug === systemSlug);
}

export function getLessonBySlug(systemSlug: string, lessonSlug: string) {
  const system = getSystemBySlug(systemSlug);
  return system?.modules
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson.slug === lessonSlug);
}
