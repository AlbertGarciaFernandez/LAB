# Case Studies Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two new full case studies to the existing case study collection so they automatically appear on the index page, generate detail pages, and remain covered by tests.

**Architecture:** Reuse the existing single-source content model in `content/case-studies.ts`. Add two new `CaseStudy` entries there and verify the collection and route surface through a focused test plus existing editorial-route tests.

**Tech Stack:** Next.js App Router, TypeScript content module, Node.js built-in test runner (`node:test`), assert-based file/content tests.

---

## File Map

- Modify: `content/case-studies.ts`
  Adds two new `CaseStudy` objects to the exported `caseStudies` array.
- Modify: `tests/english-only-editorial-routes.test.mjs`
  Adds a focused test that asserts the new case study slugs are part of the collection source.
- Verify only: `app/[locale]/case-studies/page.tsx`
  Should not require code changes because it already maps the shared collection.
- Verify only: `app/[locale]/case-studies/[slug]/page.tsx`
  Should not require code changes because it already resolves slugs from the shared collection.

### Task 1: Add a failing test for the new slugs

**Files:**
- Modify: `tests/english-only-editorial-routes.test.mjs`
- Test: `tests/english-only-editorial-routes.test.mjs`

- [ ] **Step 1: Write the failing test**

Add this test near the existing case study assertions:

```js
test("case studies collection includes the new product and migration case studies", () => {
  const caseStudiesSource = readFileSync("content/case-studies.ts", "utf8");

  assert.match(caseStudiesSource, /slug: "ai-productivity-app-accelerator"/);
  assert.match(caseStudiesSource, /slug: "basic-fit-sfcc-migration"/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/english-only-editorial-routes.test.mjs`

Expected: FAIL because neither slug exists yet in `content/case-studies.ts`.

- [ ] **Step 3: Confirm failure reason is correct**

The failure should be an `assert.match` failure for the missing slug patterns, not a syntax error or file path error.

### Task 2: Add the AI productivity app case study

**Files:**
- Modify: `content/case-studies.ts`
- Test: `tests/english-only-editorial-routes.test.mjs`

- [ ] **Step 1: Add the new case study entry**

Append a new object to `caseStudies` with this structure:

```ts
  {
    slug: "ai-productivity-app-accelerator",
    industry: "SaaS / AI Product",
    location: "Europe",
    clientSize: "Product team, multi-role collaboration",
    problem:
      "An AI productivity app needed scalable frontend architecture, reliable AI feature delivery, and tighter alignment between product direction and engineering execution.",
    solution:
      "Product acceleration for an AI productivity app with scalable frontend architecture, OpenAI-powered features, and roadmap alignment across product and engineering.",
    metrics: [
      { label: "Frontend foundation", value: "Scalable" },
      { label: "AI delivery", value: "Integrated" },
      { label: "Product alignment", value: "Roadmapped" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "OpenAI", "Jest", "Lighthouse"],
    timeline: "Ongoing product acceleration",
    year: "2025",
    publishedAt: "2026-06-02",
    modifiedAt: "2026-06-02",
    sections: [
      {
        type: "paragraph",
        text: "An AI productivity product needed more than feature shipping. The team needed frontend architecture that could scale, a clean way to integrate OpenAI-powered experiences, and product leadership that kept engineering decisions tied to business priorities.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "The product challenge was balancing speed with maintainability. New AI capabilities were valuable, but they also increased complexity in the interface, testing strategy, and performance baseline. Without a stronger architecture, the app risked slowing down as more personalised features were introduced.",
      },
      {
        type: "list",
        items: [
          "Frontend foundations needed to support rapid iteration without becoming brittle.",
          "AI features had to feel useful and fast rather than bolted on.",
          "Performance and UX quality needed continuous monitoring as the product evolved.",
          "Engineering work needed to stay aligned with roadmap and product priorities.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We led frontend and product acceleration work across the app. That included designing a scalable React, Next.js, and TypeScript architecture, integrating OpenAI-powered functionality for personalisation, and introducing a more disciplined quality loop through Lighthouse, Core Web Vitals, and Jest-based testing.",
      },
      {
        type: "list",
        items: [
          "Scalable frontend architecture in React, Next.js, and TypeScript.",
          "OpenAI integration for product features centered on personalisation.",
          "Continuous performance monitoring using Lighthouse and Core Web Vitals.",
          "Testing coverage with Jest to support safer iteration.",
          "Product vision and roadmap alignment across engineering and business stakeholders.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "The result was a stronger product foundation: a frontend built to scale, AI features integrated into the user experience rather than layered on top, and a clearer roadmap tying technical execution to business outcomes. The engagement improved delivery confidence while preserving performance and UX standards.",
      },
    ],
  }
```

- [ ] **Step 2: Keep the object consistent with the existing `CaseStudy` type**

Verify the new entry uses only the existing fields:

```ts
type CaseStudy = {
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
```

### Task 3: Add the Basic-Fit migration case study

**Files:**
- Modify: `content/case-studies.ts`
- Test: `tests/english-only-editorial-routes.test.mjs`

- [ ] **Step 1: Add the new case study entry**

Append a second object to `caseStudies` with this structure:

```ts
  {
    slug: "basic-fit-sfcc-migration",
    industry: "E-commerce / Fitness",
    location: "Europe",
    clientSize: "Multi-country commerce operation",
    problem:
      "A high-risk ecommerce migration to Salesforce Commerce Cloud had to preserve UX quality while improving performance, SEO, and conversion opportunities across multiple markets.",
    solution:
      "Led a multi-country Salesforce Commerce Cloud migration with custom templates, responsive implementation, A/B testing support, and integrated analytics.",
    metrics: [
      { label: "Migration outcome", value: "Successful" },
      { label: "UX continuity", value: "Maintained" },
      { label: "Optimization layer", value: "A/B Tested" },
    ],
    technologies: ["Salesforce Commerce Cloud", "A/B Testing", "Analytics", "Responsive Design"],
    timeline: "Multi-phase migration",
    year: "2025",
    publishedAt: "2026-06-02",
    modifiedAt: "2026-06-02",
    sections: [
      {
        type: "paragraph",
        text: "Basic-Fit needed to move a critical ecommerce experience to Salesforce Commerce Cloud without creating disruption for users or weakening the commercial performance of the site. The migration affected multiple countries, which raised the cost of any regression in UX, SEO, or conversion flow.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "This was not a simple platform swap. The migration had to protect the live customer experience while establishing a stronger technical and commercial base. The team needed a controlled transition, custom implementation work in SFCC, and room to keep optimising through testing and analytics once the new platform was live.",
      },
      {
        type: "list",
        items: [
          "High-risk migration affecting multiple countries.",
          "UX quality had to survive the platform transition.",
          "Performance and SEO had to improve rather than reset.",
          "The new platform needed analytics and experimentation support from the start.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We led the migration to Salesforce Commerce Cloud with a focus on execution discipline and commercial continuity. The work included custom SFCC templates, responsive frontend implementation, analytics integration, and structured A/B testing support so the new platform could keep improving after launch.",
      },
      {
        type: "list",
        items: [
          "Migration leadership across a high-stakes ecommerce transition.",
          "Custom SFCC template implementation.",
          "Responsive design work to preserve quality across devices.",
          "A/B testing setup to support ongoing conversion improvements.",
          "Integrated analytics for performance and decision-making visibility.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "The migration landed successfully without sacrificing user experience quality. The new SFCC setup created a more stable base for performance, SEO, and conversion work, while analytics and testing capabilities made post-launch optimisation part of the operating model rather than an afterthought.",
      },
    ],
  }
```

- [ ] **Step 2: Verify array shape still supports `caseStudyBySlug`**

The existing export should remain unchanged:

```ts
export const caseStudyBySlug = new Map<string, CaseStudy>(caseStudies.map((cs) => [cs.slug, cs]));
```

No additional code should be needed if both new entries have unique slugs.

### Task 4: Verify the tests go green

**Files:**
- Test: `tests/english-only-editorial-routes.test.mjs`
- Test: `tests/sitemap-locale-policy.test.mjs`

- [ ] **Step 1: Run the focused test**

Run: `node --test tests/english-only-editorial-routes.test.mjs`

Expected: PASS.

- [ ] **Step 2: Run a related regression test**

Run: `node --test tests/sitemap-locale-policy.test.mjs`

Expected: PASS, confirming the shared content collection still behaves correctly for sitemap-related expectations.

- [ ] **Step 3: Run both tests together as a final check**

Run: `node --test tests/english-only-editorial-routes.test.mjs tests/sitemap-locale-policy.test.mjs`

Expected: PASS for all tests.

## Self-Review

- Spec coverage: covered the two new full case studies, left `03TheLabSection` unchanged, and preserved the existing case study routing architecture.
- Placeholder scan: no TODOs or unspecified steps remain.
- Type consistency: all planned content entries match the existing `CaseStudy` structure and existing slug map usage.
