export type LabLocale = "en" | "es";

export type LabLesson = {
  slug: string;
  title: string;
  summary: string;
};

export type LabModule = {
  slug: string;
  title: string;
  lessons: LabLesson[];
};

export type LabSystem = {
  slug: string;
  title: string;
  description: string;
  modules: LabModule[];
};

export type LabResource = {
  slug: string;
  title: string;
  category: "Acquisition" | "Content" | "Reporting" | "Operations" | "Security";
  description: string;
};

const labContent = {
  en: {
    copy: {
      ctaPrimary: "View Systems",
      ctaSecondary: "Preview Platform",
    },
    user: {
      name: "Albert Garcia",
      role: "Founder",
    },
    systems: [
      {
        slug: "foundations",
        title: "System 01 — Foundations",
        description: "Core positioning and audience fundamentals.",
        modules: [
          {
            slug: "orientation",
            title: "Orientation",
            lessons: [
              {
                slug: "lab-overview",
                title: "Lab Overview",
                summary: "Understand the platform and how the systems fit together.",
              },
            ],
          },
        ],
      },
      {
        slug: "operations",
        title: "System 02 — Operations",
        description: "Processes for delivery, support, and internal execution.",
        modules: [
          {
            slug: "workflow-control",
            title: "Workflow Control",
            lessons: [
              {
                slug: "daily-ops",
                title: "Daily Ops",
                summary: "Track the operating routines that keep the lab moving.",
              },
            ],
          },
        ],
      },
      {
        slug: "architecture",
        title: "System 03 — Architecture",
        description: "Structure for products, content, and platform decisions.",
        modules: [
          {
            slug: "platform-design",
            title: "Platform Design",
            lessons: [
              {
                slug: "system-map",
                title: "System Map",
                summary: "Model the platform so each part has a clear role.",
              },
            ],
          },
        ],
      },
    ] satisfies LabSystem[],
    resources: [
      {
        slug: "acquisition-stack",
        title: "Acquisition Stack",
        category: "Acquisition",
        description: "Traffic, lead capture, and demand generation.",
      },
      {
        slug: "content-stack",
        title: "Content Stack",
        category: "Content",
        description: "Editorial systems for publishing and reuse.",
      },
      {
        slug: "reporting-stack",
        title: "Reporting Stack",
        category: "Reporting",
        description: "Metrics, dashboards, and performance visibility.",
      },
      {
        slug: "operations-stack",
        title: "Operations Stack",
        category: "Operations",
        description: "Execution and handoff tooling for the team.",
      },
      {
        slug: "security-stack",
        title: "Security Stack",
        category: "Security",
        description: "Access, permissions, and platform safeguards.",
      },
    ] satisfies LabResource[],
  },
  es: {
    copy: {
      ctaPrimary: "View Systems",
      ctaSecondary: "Preview Platform",
    },
    user: {
      name: "Albert Garcia",
      role: "Founder",
    },
    systems: [] as LabSystem[],
    resources: [] as LabResource[],
  },
} as const;

export function getLabData(locale: LabLocale) {
  return labContent[locale] ?? labContent.en;
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

