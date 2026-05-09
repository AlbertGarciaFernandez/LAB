# CodeHunter Lab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the localized CodeHunter Lab landing page and mocked-auth workspace with reusable systems, lesson, and resources templates under the existing `app/[locale]` architecture.

**Architecture:** Add a dedicated `lab` route namespace powered by a single mocked content layer in `content/lab.ts`. Build a small Lab component system in `components/lab`, compose the public landing page at `/[locale]/lab`, and compose a noindex workspace shell at `/[locale]/lab/app` with dynamic system and lesson routes driven from the mocked data.

**Tech Stack:** Next.js App Router, React 18, TypeScript, Tailwind CSS, next-intl locale routing, Node built-in test runner

---

## Preflight

This repo already has unrelated uncommitted changes. Implement this plan in an isolated worktree or branch so only the Lab files are staged and committed.

Recommended preflight commands:

```bash
git worktree add ../LAB-codehunter-lab -b codex/codehunter-lab
cd ../LAB-codehunter-lab
git status --short
```

Expected: a clean worktree with no staged files before Task 1 starts.

## File Structure

### Create

- `content/lab.ts`
- `components/lab/LabButton.tsx`
- `components/lab/LabCard.tsx`
- `components/lab/LabSection.tsx`
- `components/lab/ProgressBadge.tsx`
- `components/lab/LabHeader.tsx`
- `components/lab/LabSidebar.tsx`
- `components/lab/LabTopbar.tsx`
- `components/lab/SystemCard.tsx`
- `components/lab/ModuleList.tsx`
- `components/lab/LessonExampleBlock.tsx`
- `components/lab/LessonContent.tsx`
- `components/lab/ResourceItem.tsx`
- `components/lab/LabLandingSections.tsx`
- `app/[locale]/lab/layout.tsx`
- `app/[locale]/lab/page.tsx`
- `app/[locale]/lab/app/layout.tsx`
- `app/[locale]/lab/app/page.tsx`
- `app/[locale]/lab/app/system/[systemSlug]/page.tsx`
- `app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx`
- `app/[locale]/lab/app/resources/page.tsx`
- `app/[locale]/lab/app/settings/page.tsx`
- `tests/lab-platform.test.mjs`

### Modify

- `package.json`
- `app/robots.ts`
- `app/sitemap.ts`

### Responsibilities

- `content/lab.ts`: single source of truth for public copy, systems, modules, lessons, resources, and mocked user context
- `components/lab/*.tsx`: Lab-only design system and domain UI
- `app/[locale]/lab/*`: public product surface
- `app/[locale]/lab/app/*`: mocked-auth workspace surface
- `tests/lab-platform.test.mjs`: regression coverage for routes, metadata, sidebar structure, lessons, and resources

### Task 1: Create the Lab data source and test harness

**Files:**

- Create: `content/lab.ts`
- Create: `tests/lab-platform.test.mjs`
- Modify: `package.json`
- Test: `tests/lab-platform.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("lab content defines three systems and five resource categories", () => {
  const source = readFileSync("content/lab.ts", "utf8");

  assert.match(source, /System 01 — Foundations/);
  assert.match(source, /System 02 — Operations/);
  assert.match(source, /System 03 — Architecture/);
  assert.match(source, /Acquisition/);
  assert.match(source, /Content/);
  assert.match(source, /Reporting/);
  assert.match(source, /Operations/);
  assert.match(source, /Security/);
  assert.match(source, /View Systems/);
  assert.match(source, /Preview Platform/);
});

test("package test script runs the full mjs test suite", () => {
  const pkg = readFileSync("package.json", "utf8");
  assert.match(pkg, /"test": "node --test tests\\/\\*\\.test\\.mjs"/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: FAIL with `ENOENT` for `content/lab.ts` and a package script assertion failure.

- [ ] **Step 3: Write the minimal implementation**

`content/lab.ts`

```ts
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

const systems: LabSystem[] = [
  {
    slug: "foundations",
    label: "System 01",
    title: "System 01 — Foundations",
    shortDescription: "Clarify demand capture, offer framing, intake, and AI-readiness workflows.",
    overview: "Build the operating base required before automations and agents start compounding.",
    progressPercent: 42,
    modules: [
      {
        slug: "offer-intake",
        title: "Offer & Intake Design",
        summary: "Turn messy discovery into a structured intake system.",
        progressPercent: 66,
        lessons: [
          {
            slug: "map-client-intake",
            title: "Map the Client Intake System",
            problem: "Leads arrive through scattered forms, DMs, and email threads.",
            explanation: [
              "A business cannot automate what it has not standardized.",
              "This lesson defines the mandatory inputs every new opportunity must carry.",
            ],
            steps: [
              {
                title: "Audit entry points",
                body: "List every place a lead or request enters the business.",
              },
              {
                title: "Normalize fields",
                body: "Create one shared field model for contact, need, budget, and urgency.",
              },
              {
                title: "Assign owners",
                body: "Define who receives, validates, and routes each intake.",
              },
            ],
            example: {
              title: "Example: agency intake flow",
              summary:
                "A lead form, WhatsApp lead, and referral email are normalized into one CRM intake schema.",
              bullets: [
                "Source is captured consistently",
                "Urgency score is derived",
                "Owner is assigned automatically",
              ],
            },
            downloads: ["Intake Field Map", "Routing Checklist"],
          },
        ],
      },
    ],
  },
  {
    slug: "operations",
    label: "System 02",
    title: "System 02 — Operations",
    shortDescription: "Deploy reporting, handoffs, content ops, and internal automations.",
    overview:
      "Reduce repetitive work by standardizing the operational systems your team touches daily.",
    progressPercent: 28,
    modules: [
      {
        slug: "reporting-automation",
        title: "Reporting Automation",
        summary: "Create reliable executive and team reporting loops.",
        progressPercent: 25,
        lessons: [
          {
            slug: "standardize-weekly-reporting",
            title: "Standardize Weekly Reporting",
            problem: "Manual reporting slows down decisions and introduces inconsistency.",
            explanation: [
              "Reporting systems fail when the source metrics, owner, or cadence are unclear.",
              "This lesson creates a repeatable reporting pipeline for internal stakeholders.",
            ],
            steps: [
              {
                title: "Choose source metrics",
                body: "Limit the report to the few inputs that move operational decisions.",
              },
              {
                title: "Set cadence",
                body: "Define when the report is generated and who signs off.",
              },
              {
                title: "Automate distribution",
                body: "Send the output to the right audience in the right format.",
              },
            ],
            example: {
              title: "Example: weekly ops digest",
              summary:
                "CRM pipeline, delivery backlog, and content output are merged into one Monday summary.",
              bullets: ["Three source systems", "One approval owner", "Email plus Slack delivery"],
            },
            downloads: ["Weekly Report Template", "Metrics Approval Sheet"],
          },
        ],
      },
    ],
  },
  {
    slug: "architecture",
    label: "System 03",
    title: "System 03 — Architecture",
    shortDescription:
      "Design system boundaries, integrations, governance, and scalable AI workflows.",
    overview:
      "Create the technical structure that keeps AI systems maintainable as the business grows.",
    progressPercent: 17,
    modules: [
      {
        slug: "integration-map",
        title: "Integration Mapping",
        summary: "Document system boundaries and data ownership before rollout.",
        progressPercent: 20,
        lessons: [
          {
            slug: "design-the-source-of-truth",
            title: "Design the Source of Truth",
            problem: "Multiple tools try to own the same customer and operational data.",
            explanation: [
              "Architecture friction appears when the team cannot explain where truth lives.",
              "This lesson forces a source-of-truth decision before integrations scale.",
            ],
            steps: [
              {
                title: "Inventory systems",
                body: "List CRM, project, finance, and automation tools touching the same entities.",
              },
              {
                title: "Assign ownership",
                body: "Choose which system owns each core business object.",
              },
              {
                title: "Draw sync rules",
                body: "Write the direction, trigger, and validation rule for every sync.",
              },
            ],
            example: {
              title: "Example: CRM-first architecture",
              summary:
                "CRM owns company and contact records while project tools receive downstream copies.",
              bullets: [
                "Bidirectional sync avoided",
                "Errors routed to one owner",
                "AI enrichment runs post-create",
              ],
            },
            downloads: ["System Ownership Matrix", "Integration Decision Log"],
          },
        ],
      },
    ],
  },
];

const resources: LabResource[] = [
  {
    slug: "acquisition-audit",
    category: "Acquisition",
    title: "Lead Intake Audit",
    description: "Worksheet for auditing all inbound acquisition touchpoints.",
    downloadLabel: "Download audit",
  },
  {
    slug: "content-brief",
    category: "Content",
    title: "AI Content Brief",
    description: "Template for standardizing briefs before AI-assisted production.",
    downloadLabel: "Download brief",
  },
  {
    slug: "reporting-pack",
    category: "Reporting",
    title: "Ops Reporting Pack",
    description: "Executive and team-level reporting templates for weekly review loops.",
    downloadLabel: "Download pack",
  },
  {
    slug: "ops-sop",
    category: "Operations",
    title: "Automation SOP",
    description: "Operational checklist for launching and maintaining workflow automations.",
    downloadLabel: "Download SOP",
  },
  {
    slug: "security-checklist",
    category: "Security",
    title: "AI Governance Checklist",
    description: "Baseline governance checks for data handling, access, and approvals.",
    downloadLabel: "Download checklist",
  },
];

const sharedCopy = {
  ctaPrimary: "View Systems",
  ctaSecondary: "Preview Platform",
};

const user = {
  name: "Albert Garcia",
  role: "Lab Operator",
  activeSystemSlug: "foundations",
  overallProgressSummary: "3 systems in progress",
};

export function getLabData(locale: string) {
  const normalizedLocale: LabLocale = locale === "es" ? "es" : "en";

  return {
    locale: normalizedLocale,
    copy: sharedCopy,
    user,
    systems,
    resources,
  };
}

export function getSystemBySlug(systemSlug: string) {
  return systems.find((system) => system.slug === systemSlug);
}

export function getLessonBySlug(systemSlug: string, lessonSlug: string) {
  const system = getSystemBySlug(systemSlug);
  return system?.modules
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson.slug === lessonSlug);
}
```

`package.json`

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "test": "node --test tests/*.test.mjs",
    "start": "next start",
    "lint": "next lint"
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: PASS with both tests green.

- [ ] **Step 5: Commit**

```bash
git add content/lab.ts tests/lab-platform.test.mjs package.json
git commit -m "feat: add lab content source and test harness"
```

### Task 2: Build the public Lab landing page and reusable marketing components

**Files:**

- Create: `components/lab/LabButton.tsx`
- Create: `components/lab/LabCard.tsx`
- Create: `components/lab/LabSection.tsx`
- Create: `components/lab/LabHeader.tsx`
- Create: `components/lab/SystemCard.tsx`
- Create: `components/lab/LabLandingSections.tsx`
- Create: `app/[locale]/lab/layout.tsx`
- Create: `app/[locale]/lab/page.tsx`
- Modify: `tests/lab-platform.test.mjs`
- Test: `tests/lab-platform.test.mjs`

- [ ] **Step 1: Extend the test with a failing landing-page assertion**

Append to `tests/lab-platform.test.mjs`:

```js
test("lab landing route ships dedicated product sections and metadata", () => {
  const layout = readFileSync("app/[locale]/lab/layout.tsx", "utf8");
  const page = readFileSync("app/[locale]/lab/page.tsx", "utf8");
  const sections = readFileSync("components/lab/LabLandingSections.tsx", "utf8");

  assert.match(layout, /LabHeader/);
  assert.doesNotMatch(layout, /components\/layout\/Header/);
  assert.match(page, /generateMetadata/);
  assert.match(page, /LabHeroSection/);
  assert.match(page, /LabProblemSection/);
  assert.match(page, /LabSolutionSection/);
  assert.match(page, /LabHowItWorksSection/);
  assert.match(page, /LabSystemsSection/);
  assert.match(page, /LabDifferentiationSection/);
  assert.match(page, /LabCtaSection/);
  assert.match(sections, /View Systems/);
  assert.match(sections, /Preview Platform/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: FAIL because the new Lab route files do not exist yet.

- [ ] **Step 3: Write the minimal implementation**

`components/lab/LabButton.tsx`

```tsx
import Link from "next/link";
import { cn } from "@/utils/cn";

type LabButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function LabButton({
  href,
  children,
  variant = "primary",
  className,
}: LabButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors",
        variant === "primary"
          ? "bg-hunter-green text-near-black hover:bg-hunter-green-dark"
          : "border border-black/10 bg-white text-black hover:bg-black/[0.03]",
        className
      )}
    >
      {children}
    </Link>
  );
}
```

`components/lab/LabCard.tsx`

```tsx
import { cn } from "@/utils/cn";

export default function LabCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-3xl border border-black/10 bg-white p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}
```

`components/lab/LabSection.tsx`

```tsx
import { cn } from "@/utils/cn";

type LabSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export default function LabSection({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: LabSectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-6 py-16 lg:px-8", className)}>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-hunter-green">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-gray-600">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
```

`components/lab/LabHeader.tsx`

```tsx
import { Link } from "@/navigation";
import LabButton from "@/components/lab/LabButton";

export default function LabHeader({ locale }: { locale: string }) {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/lab"
          locale={locale}
          className="text-lg font-semibold tracking-tight text-black"
        >
          CodeHunter Lab
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          <a href="#systems">Systems</a>
          <a href="#how-it-works">How It Works</a>
          <Link href="/lab/app/resources" locale={locale}>
            Resources
          </Link>
        </nav>
        <LabButton href={`/${locale}/lab/app`} variant="secondary">
          Preview Platform
        </LabButton>
      </div>
    </header>
  );
}
```

`components/lab/SystemCard.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";
import LabButton from "@/components/lab/LabButton";

type SystemCardProps = {
  locale: string;
  slug: string;
  label: string;
  title: string;
  description: string;
  progressPercent?: number;
};

export default function SystemCard({
  locale,
  slug,
  label,
  title,
  description,
  progressPercent,
}: SystemCardProps) {
  return (
    <LabCard className="flex h-full flex-col justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
          {label}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-black">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {typeof progressPercent === "number" ? `${progressPercent}% mapped` : "Ready to explore"}
        </span>
        <LabButton href={`/${locale}/lab/app/system/${slug}`}>Open system</LabButton>
      </div>
    </LabCard>
  );
}
```

`components/lab/LabLandingSections.tsx`

```tsx
import LabButton from "@/components/lab/LabButton";
import LabCard from "@/components/lab/LabCard";
import LabSection from "@/components/lab/LabSection";
import SystemCard from "@/components/lab/SystemCard";
import { getLabData } from "@/content/lab";

export function LabHeroSection({ locale }: { locale: string }) {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-hunter-green">
            Systems-based AI implementation
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-black md:text-6xl">
            Deploy practical AI systems in your business without getting lost in theory.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            CodeHunter Lab helps SMEs and B2B teams choose the right system, follow the
            implementation path, and operationalize AI across real workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LabButton href={`/${locale}/lab#systems`}>View Systems</LabButton>
            <LabButton href={`/${locale}/lab/app`} variant="secondary">
              Preview Platform
            </LabButton>
          </div>
        </div>
        <LabCard className="bg-gray-50">
          <p className="text-sm font-medium text-gray-500">Inside the platform</p>
          <ul className="mt-6 space-y-4 text-sm text-gray-700">
            <li>
              Implementation-first modules for demand capture, reporting, content ops, and
              architecture
            </li>
            <li>Step-by-step lessons with examples and downloadable operating assets</li>
            <li>System progress so teams always know the next action to take</li>
          </ul>
        </LabCard>
      </div>
    </section>
  );
}

export function LabProblemSection() {
  return (
    <LabSection
      title="Most teams do not fail on AI ambition. They fail on implementation structure."
      description="Tools stack up, workflows stay unclear, and nothing becomes a repeatable operating system."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Disconnected intake and lead routing",
          "Manual reporting and handoff bottlenecks",
          "No clear source of truth across tools and automations",
        ].map((item) => (
          <LabCard key={item}>
            <p className="text-sm leading-6 text-gray-700">{item}</p>
          </LabCard>
        ))}
      </div>
    </LabSection>
  );
}

export function LabSolutionSection() {
  return (
    <LabSection
      title="Lab turns implementation into systems"
      description="Instead of giving teams generic AI content, Lab packages operational change into systems, modules, and lessons that can be deployed inside the business."
    >
      <LabCard className="grid gap-4 md:grid-cols-3">
        <p className="text-sm text-gray-700">
          Choose the system that matches the business constraint.
        </p>
        <p className="text-sm text-gray-700">
          Work through clear modules, examples, and downloadable assets.
        </p>
        <p className="text-sm text-gray-700">
          Use the workspace as a practical rollout guide, not a passive library.
        </p>
      </LabCard>
    </LabSection>
  );
}

export function LabHowItWorksSection() {
  return (
    <LabSection
      id="how-it-works"
      title="How it works"
      description="A simple three-step implementation flow."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          [
            "01",
            "Choose a system",
            "Start with Foundations, Operations, or Architecture depending on the business bottleneck.",
          ],
          [
            "02",
            "Run the modules",
            "Follow practical lessons that standardize the workflow before you automate it.",
          ],
          [
            "03",
            "Deploy the assets",
            "Use the templates, checklists, and examples to operationalize the change internally.",
          ],
        ].map(([step, title, body]) => (
          <LabCard key={step}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
              {step}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">{body}</p>
          </LabCard>
        ))}
      </div>
    </LabSection>
  );
}

export function LabSystemsSection({ locale }: { locale: string }) {
  const { systems } = getLabData(locale);
  return (
    <LabSection
      id="systems"
      title="Three systems to implement"
      description="Each system is built for a distinct business layer."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {systems.map((system) => (
          <SystemCard
            key={system.slug}
            locale={locale}
            slug={system.slug}
            label={system.label}
            title={system.title.replace(`${system.label} — `, "")}
            description={system.shortDescription}
          />
        ))}
      </div>
    </LabSection>
  );
}

export function LabDifferentiationSection() {
  return (
    <LabSection
      title="Why this is different"
      description="Lab is designed to help a company implement systems, not just consume content about AI."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <LabCard>
          <p className="text-sm leading-6 text-gray-700">
            Built around operating systems and business workflows, not generic AI lessons.
          </p>
        </LabCard>
        <LabCard>
          <p className="text-sm leading-6 text-gray-700">
            Friendly enough for client teams, structured enough for real implementation work.
          </p>
        </LabCard>
      </div>
    </LabSection>
  );
}

export function LabCtaSection({ locale }: { locale: string }) {
  return (
    <LabSection
      title="Start with the system that removes the next bottleneck"
      description="Explore the system structure or preview the workspace before rollout."
    >
      <div className="flex flex-wrap gap-3">
        <LabButton href={`/${locale}/lab#systems`}>View Systems</LabButton>
        <LabButton href={`/${locale}/lab/app`} variant="secondary">
          Preview Platform
        </LabButton>
      </div>
    </LabSection>
  );
}
```

`app/[locale]/lab/layout.tsx`

```tsx
import type { ReactNode } from "react";
import LabHeader from "@/components/lab/LabHeader";

export default function LabMarketingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <LabHeader locale={params.locale} />
      {children}
    </div>
  );
}
```

`app/[locale]/lab/page.tsx`

```tsx
import type { Metadata } from "next";
import {
  LabHeroSection,
  LabProblemSection,
  LabSolutionSection,
  LabHowItWorksSection,
  LabSystemsSection,
  LabDifferentiationSection,
  LabCtaSection,
} from "@/components/lab/LabLandingSections";

const baseUrl = "https://www.codehunterlab.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const url = `${baseUrl}/${params.locale}/lab`;

  return {
    title: "CodeHunter Lab | Systems-Based AI Implementation Platform",
    description:
      "Pick the right AI system, follow the implementation path, and deploy practical workflows inside your business.",
    alternates: { canonical: url },
    openGraph: {
      title: "CodeHunter Lab",
      description: "A systems-based AI implementation platform for SMEs, agencies, and B2B teams.",
      url,
      siteName: "CodeHunter Lab",
      type: "website",
    },
  };
}

export default function LabPage({ params }: { params: { locale: string } }) {
  return (
    <main>
      <LabHeroSection locale={params.locale} />
      <LabProblemSection />
      <LabSolutionSection />
      <LabHowItWorksSection />
      <LabSystemsSection locale={params.locale} />
      <LabDifferentiationSection />
      <LabCtaSection locale={params.locale} />
    </main>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: PASS with the landing-page assertion green.

- [ ] **Step 5: Commit**

```bash
git add components/lab/LabButton.tsx components/lab/LabCard.tsx components/lab/LabSection.tsx components/lab/LabHeader.tsx components/lab/SystemCard.tsx components/lab/LabLandingSections.tsx app/[locale]/lab/layout.tsx app/[locale]/lab/page.tsx tests/lab-platform.test.mjs
git commit -m "feat: add CodeHunter Lab landing page"
```

### Task 3: Build the mocked-auth workspace shell and dashboard

**Files:**

- Create: `components/lab/ProgressBadge.tsx`
- Create: `components/lab/LabSidebar.tsx`
- Create: `components/lab/LabTopbar.tsx`
- Create: `app/[locale]/lab/app/layout.tsx`
- Create: `app/[locale]/lab/app/page.tsx`
- Modify: `tests/lab-platform.test.mjs`
- Test: `tests/lab-platform.test.mjs`

- [ ] **Step 1: Extend the test with a failing workspace-shell assertion**

Append to `tests/lab-platform.test.mjs`:

```js
test("lab workspace is noindex and exposes the required sidebar items", () => {
  const layout = readFileSync("app/[locale]/lab/app/layout.tsx", "utf8");
  const page = readFileSync("app/[locale]/lab/app/page.tsx", "utf8");
  const sidebar = readFileSync("components/lab/LabSidebar.tsx", "utf8");

  assert.match(layout, /robots:\s*{\s*index:\s*false,\s*follow:\s*false\s*}/);
  assert.match(sidebar, /systems\.map/);
  assert.match(sidebar, /Resources/);
  assert.match(sidebar, /Settings/);
  assert.match(page, /Next recommended step/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: FAIL because the workspace route and sidebar files do not exist yet.

- [ ] **Step 3: Write the minimal implementation**

`components/lab/ProgressBadge.tsx`

```tsx
export default function ProgressBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-700">
      <span className="text-gray-500">{label}</span> {value}
    </div>
  );
}
```

`components/lab/LabSidebar.tsx`

```tsx
import { Link } from "@/navigation";
import { getLabData } from "@/content/lab";

export default function LabSidebar({ locale }: { locale: string }) {
  const { systems } = getLabData(locale);

  return (
    <aside className="hidden w-72 border-r border-black/10 bg-gray-50 p-6 lg:block">
      <p className="text-sm font-semibold text-black">Implementation Systems</p>
      <nav className="mt-6 space-y-2 text-sm">
        {systems.map((system) => (
          <Link
            key={system.slug}
            href={`/lab/app/system/${system.slug}`}
            locale={locale}
            className="block rounded-2xl px-4 py-3 text-gray-700 hover:bg-white hover:text-black"
          >
            {system.label} ({system.title.replace(`${system.label} — `, "")})
          </Link>
        ))}
        <Link
          href="/lab/app/resources"
          locale={locale}
          className="block rounded-2xl px-4 py-3 text-gray-700 hover:bg-white hover:text-black"
        >
          Resources
        </Link>
        <Link
          href="/lab/app/settings"
          locale={locale}
          className="block rounded-2xl px-4 py-3 text-gray-700 hover:bg-white hover:text-black"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
```

`components/lab/LabTopbar.tsx`

```tsx
import ProgressBadge from "@/components/lab/ProgressBadge";
import { getLabData } from "@/content/lab";

export default function LabTopbar({ locale }: { locale: string }) {
  const { user, systems } = getLabData(locale);
  const average = Math.round(
    systems.reduce((sum, system) => sum + system.progressPercent, 0) / systems.length
  );

  return (
    <div className="flex items-center justify-between border-b border-black/10 bg-white px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">CodeHunter Lab</p>
        <h1 className="text-lg font-semibold text-black">Workspace</h1>
      </div>
      <div className="flex items-center gap-3">
        <ProgressBadge label="Global progress" value={`${average}%`} />
        <div className="rounded-full border border-black/10 px-4 py-2 text-sm text-black">
          {user.name}
        </div>
      </div>
    </div>
  );
}
```

`app/[locale]/lab/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import LabSidebar from "@/components/lab/LabSidebar";
import LabTopbar from "@/components/lab/LabTopbar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LabAppLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-white text-black lg:grid lg:grid-cols-[288px_minmax(0,1fr)]">
      <LabSidebar locale={params.locale} />
      <div className="min-w-0">
        <LabTopbar locale={params.locale} />
        <main className="px-6 py-8 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
```

`app/[locale]/lab/app/page.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";
import LabButton from "@/components/lab/LabButton";
import SystemCard from "@/components/lab/SystemCard";
import { getLabData } from "@/content/lab";

export default function LabDashboardPage({ params }: { params: { locale: string } }) {
  const { user, systems } = getLabData(params.locale);
  const activeSystem =
    systems.find((system) => system.slug === user.activeSystemSlug) ?? systems[0];
  const nextLesson = activeSystem.modules[0].lessons[0];

  return (
    <div className="space-y-8">
      <LabCard className="bg-gray-50">
        <p className="text-sm text-gray-500">Welcome back</p>
        <h2 className="mt-2 text-3xl font-semibold text-black">{user.name}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          Continue building the systems that make AI operational inside the business.
        </p>
      </LabCard>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-black">Systems</h3>
          <span className="text-sm text-gray-500">{user.overallProgressSummary}</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {systems.map((system) => (
            <SystemCard
              key={system.slug}
              locale={params.locale}
              slug={system.slug}
              label={system.label}
              title={system.title.replace(`${system.label} — `, "")}
              description={system.shortDescription}
              progressPercent={system.progressPercent}
            />
          ))}
        </div>
      </section>

      <LabCard>
        <p className="text-sm font-medium text-gray-500">Next recommended step</p>
        <h3 className="mt-2 text-2xl font-semibold text-black">{nextLesson.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">{nextLesson.problem}</p>
        <LabButton
          className="mt-6"
          href={`/${params.locale}/lab/app/system/${activeSystem.slug}/lesson/${nextLesson.slug}`}
        >
          Continue
        </LabButton>
      </LabCard>
    </div>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: PASS with the workspace-shell assertion green.

- [ ] **Step 5: Commit**

```bash
git add components/lab/ProgressBadge.tsx components/lab/LabSidebar.tsx components/lab/LabTopbar.tsx app/[locale]/lab/app/layout.tsx app/[locale]/lab/app/page.tsx tests/lab-platform.test.mjs
git commit -m "feat: add lab workspace shell"
```

### Task 4: Add the system and lesson templates

**Files:**

- Create: `components/lab/ModuleList.tsx`
- Create: `components/lab/LessonExampleBlock.tsx`
- Create: `components/lab/LessonContent.tsx`
- Create: `app/[locale]/lab/app/system/[systemSlug]/page.tsx`
- Create: `app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx`
- Modify: `tests/lab-platform.test.mjs`
- Test: `tests/lab-platform.test.mjs`

- [ ] **Step 1: Extend the test with failing system and lesson assertions**

Append to `tests/lab-platform.test.mjs`:

```js
test("system and lesson templates expose reusable implementation structure", () => {
  const systemPage = readFileSync("app/[locale]/lab/app/system/[systemSlug]/page.tsx", "utf8");
  const lessonPage = readFileSync(
    "app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx",
    "utf8"
  );

  assert.match(systemPage, /getSystemBySlug/);
  assert.match(systemPage, /ModuleList/);
  assert.match(systemPage, /Continue to next lesson/);

  assert.match(lessonPage, /getLessonBySlug/);
  assert.match(lessonPage, /LessonContent/);
  assert.match(lessonPage, /LessonExampleBlock/);
  assert.match(lessonPage, /Downloadable resources/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: FAIL because the dynamic route files do not exist yet.

- [ ] **Step 3: Write the minimal implementation**

`components/lab/ModuleList.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";
import { Link } from "@/navigation";
import type { LabModule } from "@/content/lab";

export default function ModuleList({
  locale,
  systemSlug,
  modules,
}: {
  locale: string;
  systemSlug: string;
  modules: LabModule[];
}) {
  return (
    <div className="space-y-4">
      {modules.map((module) => {
        const nextLesson = module.lessons[0];

        return (
          <LabCard key={module.slug}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-black">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{module.summary}</p>
              </div>
              <Link
                href={`/lab/app/system/${systemSlug}/lesson/${nextLesson.slug}`}
                locale={locale}
                className="text-sm font-semibold text-hunter-green"
              >
                Open lesson
              </Link>
            </div>
          </LabCard>
        );
      })}
    </div>
  );
}
```

`components/lab/LessonExampleBlock.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";

export default function LessonExampleBlock({
  title,
  summary,
  bullets,
}: {
  title: string;
  summary: string;
  bullets: string[];
}) {
  return (
    <LabCard className="bg-gray-50">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
        Example block
      </p>
      <h3 className="mt-3 text-xl font-semibold text-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </LabCard>
  );
}
```

`components/lab/LessonContent.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";
import LessonExampleBlock from "@/components/lab/LessonExampleBlock";
import ResourceItem from "@/components/lab/ResourceItem";
import type { LabLesson } from "@/content/lab";

export default function LessonContent({ lesson }: { lesson: LabLesson }) {
  return (
    <div className="space-y-8">
      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
          Problem
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-black">{lesson.problem}</h2>
      </LabCard>

      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
          Explanation
        </p>
        <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700">
          {lesson.explanation.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </LabCard>

      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
          Step-by-step
        </p>
        <ol className="mt-4 space-y-4">
          {lesson.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-black/10 p-4">
              <p className="text-sm font-semibold text-black">
                {index + 1}. {step.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </LabCard>

      <LessonExampleBlock
        title={lesson.example.title}
        summary={lesson.example.summary}
        bullets={lesson.example.bullets}
      />

      <section>
        <h3 className="text-xl font-semibold text-black">Downloadable resources</h3>
        <div className="mt-4 grid gap-4">
          {lesson.downloads.map((download) => (
            <ResourceItem
              key={download}
              title={download}
              description={`Supporting asset for ${lesson.title}.`}
              downloadLabel="Download"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
```

`app/[locale]/lab/app/system/[systemSlug]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import LabCard from "@/components/lab/LabCard";
import LabButton from "@/components/lab/LabButton";
import ModuleList from "@/components/lab/ModuleList";
import { getSystemBySlug } from "@/content/lab";

export default function LabSystemPage({
  params,
}: {
  params: { locale: string; systemSlug: string };
}) {
  const system = getSystemBySlug(params.systemSlug);

  if (!system) {
    notFound();
  }

  const nextLesson = system.modules[0].lessons[0];

  return (
    <div className="space-y-8">
      <LabCard>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hunter-green">
          {system.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-black">
          {system.title.replace(`${system.label} — `, "")}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">{system.overview}</p>
      </LabCard>

      <section>
        <h3 className="text-xl font-semibold text-black">Modules</h3>
        <div className="mt-4">
          <ModuleList locale={params.locale} systemSlug={system.slug} modules={system.modules} />
        </div>
      </section>

      <LabCard className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Progress</p>
          <p className="text-2xl font-semibold text-black">{system.progressPercent}% complete</p>
        </div>
        <LabButton
          href={`/${params.locale}/lab/app/system/${system.slug}/lesson/${nextLesson.slug}`}
        >
          Continue to next lesson
        </LabButton>
      </LabCard>
    </div>
  );
}
```

`app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import LessonContent from "@/components/lab/LessonContent";
import { getLessonBySlug, getSystemBySlug } from "@/content/lab";

export default function LabLessonPage({
  params,
}: {
  params: { locale: string; systemSlug: string; lessonSlug: string };
}) {
  const system = getSystemBySlug(params.systemSlug);
  const lesson = getLessonBySlug(params.systemSlug, params.lessonSlug);

  if (!system || !lesson) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          {system.title}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black">{lesson.title}</h1>
      </div>
      <LessonContent lesson={lesson} />
    </div>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: PASS with the system and lesson assertions green.

- [ ] **Step 5: Commit**

```bash
git add components/lab/ModuleList.tsx components/lab/LessonExampleBlock.tsx components/lab/LessonContent.tsx app/[locale]/lab/app/system/[systemSlug]/page.tsx app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx tests/lab-platform.test.mjs
git commit -m "feat: add lab system and lesson templates"
```

### Task 5: Add resources, settings, and crawl/indexing controls

**Files:**

- Create: `components/lab/ResourceItem.tsx`
- Create: `app/[locale]/lab/app/resources/page.tsx`
- Create: `app/[locale]/lab/app/settings/page.tsx`
- Modify: `app/robots.ts`
- Modify: `app/sitemap.ts`
- Modify: `tests/lab-platform.test.mjs`
- Test: `tests/lab-platform.test.mjs`

- [ ] **Step 1: Extend the test with failing resources and indexing assertions**

Append to `tests/lab-platform.test.mjs`:

```js
test("resources and crawler controls are wired for the Lab product", () => {
  const resourcesPage = readFileSync("app/[locale]/lab/app/resources/page.tsx", "utf8");
  const settingsPage = readFileSync("app/[locale]/lab/app/settings/page.tsx", "utf8");
  const robots = readFileSync("app/robots.ts", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(resourcesPage, /Acquisition/);
  assert.match(resourcesPage, /Content/);
  assert.match(resourcesPage, /Reporting/);
  assert.match(resourcesPage, /Operations/);
  assert.match(resourcesPage, /Security/);
  assert.match(settingsPage, /Workspace preferences/);
  assert.match(robots, /\/en\/lab\/app/);
  assert.match(robots, /\/es\/lab\/app/);
  assert.match(sitemap, /\/lab/);
  assert.doesNotMatch(sitemap, /\/lab\/app/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: FAIL because the resources route files and crawler updates do not exist yet.

- [ ] **Step 3: Write the minimal implementation**

`components/lab/ResourceItem.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";

export default function ResourceItem({
  title,
  description,
  downloadLabel,
}: {
  title: string;
  description: string;
  downloadLabel: string;
}) {
  return (
    <LabCard className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <button className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-black hover:bg-black/[0.03]">
        {downloadLabel}
      </button>
    </LabCard>
  );
}
```

`app/[locale]/lab/app/resources/page.tsx`

```tsx
import ResourceItem from "@/components/lab/ResourceItem";
import { getLabData } from "@/content/lab";

export default function LabResourcesPage({ params }: { params: { locale: string } }) {
  const { resources } = getLabData(params.locale);
  const categories = ["Acquisition", "Content", "Reporting", "Operations", "Security"] as const;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-black">Resources</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
          Downloadable templates and operating assets that support each implementation system.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">{category}</h2>
          {resources
            .filter((resource) => resource.category === category)
            .map((resource) => (
              <ResourceItem
                key={resource.slug}
                title={resource.title}
                description={resource.description}
                downloadLabel={resource.downloadLabel}
              />
            ))}
        </section>
      ))}
    </div>
  );
}
```

`app/[locale]/lab/app/settings/page.tsx`

```tsx
import LabCard from "@/components/lab/LabCard";

export default function LabSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-black">Settings</h1>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          Workspace preferences and account context for the current mocked user.
        </p>
      </div>

      <LabCard>
        <h2 className="text-xl font-semibold text-black">Workspace preferences</h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Mocked settings can later be connected to real account preferences, notification controls,
          and progress persistence.
        </p>
      </LabCard>
    </div>
  );
}
```

`app/robots.ts`

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/dashboard", "/en/lab/app", "/es/lab/app"],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: "https://www.codehunterlab.com/sitemap.xml",
  };
}
```

`app/sitemap.ts`

```ts
const routeMeta: Record<
  string,
  {
    lastModified: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }
> = {
  "": { lastModified: "2026-02-26", priority: 1.0, changeFrequency: "weekly" },
  "/lab": { lastModified: "2026-04-23", priority: 0.8, changeFrequency: "weekly" },
  "/ai-consulting": { lastModified: "2026-02-26", priority: 0.9, changeFrequency: "weekly" },
};
```

Insert the `/lab` entry directly into the existing `routeMeta` object and leave every existing route untouched. Do not add `/lab/app` routes anywhere in the sitemap.

- [ ] **Step 4: Run the test to verify it passes**

Run:

```bash
node --test tests/lab-platform.test.mjs
```

Expected: PASS with resources and crawler assertions green.

- [ ] **Step 5: Commit**

```bash
git add components/lab/ResourceItem.tsx app/[locale]/lab/app/resources/page.tsx app/[locale]/lab/app/settings/page.tsx app/robots.ts app/sitemap.ts tests/lab-platform.test.mjs
git commit -m "feat: add lab resources and crawl controls"
```

### Task 6: Run full verification and prepare final review

**Files:**

- Modify: none
- Test: `tests/seo-insights.test.mjs`
- Test: `tests/lab-platform.test.mjs`
- Test: full Next.js build

- [ ] **Step 1: Run the full Node test suite**

Run:

```bash
npm test
```

Expected: PASS with `tests/seo-insights.test.mjs` and `tests/lab-platform.test.mjs` green.

- [ ] **Step 2: Run the Next.js production build**

Run:

```bash
npm run build
```

Expected: PASS with a successful production build and no route compilation failures for the new Lab namespace.

- [ ] **Step 3: Manually verify the core routes**

Run:

```bash
npm run dev
```

Check in the browser:

- `/en/lab`
- `/es/lab`
- `/en/lab/app`
- `/en/lab/app/system/foundations`
- `/en/lab/app/system/foundations/lesson/map-client-intake`
- `/en/lab/app/resources`
- `/en/lab/app/settings`

Expected: all routes render, public Lab feels product-led, and app routes feel like a friendly portal.

- [ ] **Step 4: Confirm the worktree is clean after verification**

```bash
git status --short
```

Expected: no unexpected modified files after the task-level commits above.
