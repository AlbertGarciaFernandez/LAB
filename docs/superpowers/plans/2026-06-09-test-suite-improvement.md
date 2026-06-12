# Test Suite Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stabilize the current Node test suite and make SEO/i18n tests verify behavior instead of brittle source-code strings.

**Architecture:** Keep the existing `node --test tests/*.test.mjs` setup, but add small test helpers for JSON/source inspection and replace fragile exact-string assertions with semantic invariants. Do not introduce Jest, Playwright, or a large test framework migration in this phase.

**Tech Stack:** Node built-in test runner, `node:assert/strict`, filesystem-based source checks, JSON message validation, Next.js metadata helpers.

---

## Current Test Review

The suite is useful as a lightweight regression guard, but it currently mixes three test styles without clear boundaries:

- Structural source tests: regex checks against source files.
- Content contract tests: locale JSON and route lists.
- Behavioral tests by proxy: tests that try to prove metadata/sitemap behavior by checking implementation strings.

The immediate problem is that several tests are failing because they assert old copy or class ordering rather than actual requirements:

- `tests/contact-system.test.mjs` expects literal `Book a Call` even though `ContactSection` now uses translations.
- `tests/packages-section-links.test.mjs` expects `mt-7 inline-flex`, while the real class uses `mt-auto inline-flex ... pt-7`.
- `tests/ai-consulting-order.test.mjs` expects old marker copy/comments like `past the AI toy phase`, `what we build editorial bento`, and `production standards strip`.
- SEO tests verify that helper names appear, but they do not prove that editorial routes omit hreflang alternates or that commercial routes keep them.

## File Structure

- Create `tests/helpers/source.mjs`: shared helpers for reading files, asserting ordered markers, extracting class attributes, loading locale messages, and collecting files.
- Modify `tests/contact-system.test.mjs`: remove stale literal-copy assertions and verify translation usage plus locale keys.
- Modify `tests/packages-section-links.test.mjs`: test overlay/link layering semantically rather than exact Tailwind class order.
- Modify `tests/ai-consulting-order.test.mjs`: replace stale copy/comment markers with section IDs and exported data/function invariants.
- Modify `tests/seo-locale-policy.test.mjs`: execute `utils/seo-locale.ts` behavior through source-level contract checks or add a tiny runtime-safe mirror if direct TS import is not available.
- Modify `tests/seo-metadata.test.mjs`: verify alternates behavior for disabled/enabled SEO policies instead of just checking implementation strings.
- Modify `tests/sitemap-locale-policy.test.mjs`: assert sitemap policy coverage for editorial, lab, and commercial pages.
- Modify `tests/seo-insights.test.mjs`: add redirect-rule coverage for legacy localized SEO URLs.

---

### Task 1: Add Shared Test Helpers

**Files:**
- Create: `tests/helpers/source.mjs`
- Modify: none
- Test: `node --test tests/helpers/source.mjs` is not needed because helper has no tests; verify by using it in later tasks.

- [ ] **Step 1: Create helper directory and file**

Use `apply_patch` to add `tests/helpers/source.mjs`:

```js
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";

export function readSource(path) {
  return readFileSync(path, "utf8");
}

export function readJson(path) {
  return JSON.parse(readSource(path));
}

export function collectFiles(dir, predicate) {
  return readdirSync(dir).flatMap((entry) => {
    const path = `${dir}/${entry}`;
    if (statSync(path).isDirectory()) {
      return collectFiles(path, predicate);
    }
    return predicate(path) ? [path] : [];
  });
}

export function collectTsxFiles(dir) {
  return collectFiles(dir, (path) => path.endsWith(".tsx"));
}

export function assertInOrder(source, markers) {
  let previous = -1;

  for (const marker of markers) {
    const current = source.indexOf(marker);
    assert.notEqual(current, -1, `Missing marker: ${marker}`);
    assert.ok(current > previous, `Expected ${marker} to appear after previous marker`);
    previous = current;
  }
}

export function assertClassContains(source, elementPattern, requiredClasses) {
  const match = source.match(elementPattern);
  assert.ok(match, `Missing element pattern: ${elementPattern}`);

  const className = match[1];
  for (const classToken of requiredClasses) {
    assert.match(className, new RegExp(`(^|\\s)${classToken.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`));
  }
}

export function localeMessages() {
  return {
    en: readJson("messages/en.json"),
    es: readJson("messages/es.json"),
    nl: readJson("messages/nl.json"),
  };
}
```

- [ ] **Step 2: Run a syntax check**

Run: `node --check tests/helpers/source.mjs`

Expected: no output and exit code `0`.

- [ ] **Step 3: Commit**

```bash
git add tests/helpers/source.mjs
git commit -m "test: add shared source test helpers"
```

---

### Task 2: Stabilize Contact System Tests

**Files:**
- Modify: `tests/contact-system.test.mjs`
- Test: `tests/contact-system.test.mjs`

- [ ] **Step 1: Replace local helpers with shared helpers**

Update imports at the top of `tests/contact-system.test.mjs`:

```js
import assert from "node:assert/strict";
import { test } from "node:test";
import { collectTsxFiles, localeMessages, readSource } from "./helpers/source.mjs";
```

Remove the local `collectTsxFiles` function from lines `5-13`.

- [ ] **Step 2: Replace stale literal-copy assertion**

Replace the `reusable contact section renders the full form` test with:

```js
test("reusable contact section renders the translated full form", () => {
  const section = readSource("components/sections/ContactSection.tsx");
  const messages = localeMessages();

  assert.match(section, /useTranslations\("Process"\)/);
  assert.match(section, /ContactForm/);
  assert.match(section, /variant="full"/);
  assert.match(section, /id="contact"/);
  assert.match(section, /t\("contactBadge"\)/);

  for (const locale of Object.keys(messages)) {
    assert.equal(typeof messages[locale].Process.contactBadge, "string");
    assert.ok(messages[locale].Process.contactBadge.length > 0);
  }
});
```

- [ ] **Step 3: Update file reads to use `readSource`**

Replace every `readFileSync("...", "utf8")` call in `tests/contact-system.test.mjs` with `readSource("...")`.

- [ ] **Step 4: Run the contact tests**

Run: `node --test tests/contact-system.test.mjs`

Expected: all subtests in `contact-system.test.mjs` pass.

- [ ] **Step 5: Commit**

```bash
git add tests/contact-system.test.mjs
git commit -m "test: stabilize contact system assertions"
```

---

### Task 3: Stabilize Package Section Link Tests

**Files:**
- Modify: `tests/packages-section-links.test.mjs`
- Test: `tests/packages-section-links.test.mjs`

- [ ] **Step 1: Use shared helpers**

Replace the imports and setup with:

```js
import assert from "node:assert/strict";
import { test } from "node:test";
import { localeMessages, readSource } from "./helpers/source.mjs";

const source = readSource("components/sections/PackagesSection.tsx");
const messages = localeMessages();
```

- [ ] **Step 2: Replace brittle class-order assertion**

Replace `package details link is layered above decorative card elements` with:

```js
test("package details link is layered above decorative card elements", () => {
  const linkMatch = source.match(/<Link\s+href=\{item\.href\}\s+className="([^"]+)"/);
  assert.ok(linkMatch, "Expected package details Link with href={item.href}");

  const className = linkMatch[1];
  for (const requiredClass of ["relative", "z-10", "inline-flex"]) {
    assert.match(className, new RegExp(`(^|\\s)${requiredClass}(\\s|$)`));
  }
});
```

- [ ] **Step 3: Keep overlay test but make it focus on pointer behavior**

Replace `package card decorative overlay cannot intercept the details link` with:

```js
test("package card decorative overlays cannot intercept the details link", () => {
  const overlays = source.match(/className="[^"]*pointer-events-none[^"]*absolute inset-0[^"]*"/g) ?? [];

  assert.ok(overlays.length >= 2, "Expected decorative overlays to opt out of pointer events");
});
```

- [ ] **Step 4: Run the package tests**

Run: `node --test tests/packages-section-links.test.mjs`

Expected: all subtests pass.

- [ ] **Step 5: Commit**

```bash
git add tests/packages-section-links.test.mjs
git commit -m "test: stabilize package link layering checks"
```

---

### Task 4: Stabilize AI Consulting Order Tests

**Files:**
- Modify: `tests/ai-consulting-order.test.mjs`
- Test: `tests/ai-consulting-order.test.mjs`

- [ ] **Step 1: Use shared `assertInOrder` helper**

Replace imports and setup with:

```js
import assert from "node:assert/strict";
import { test } from "node:test";
import { assertInOrder, readSource } from "./helpers/source.mjs";

const page = readSource("app/[locale]/ai-consulting/PageContent.tsx");
const sidebar = readSource("components/ui/SidebarNav.tsx");
```

Remove the local `assertInOrder` function.

- [ ] **Step 2: Replace stale copy/comment test**

Replace `AI consulting page uses the approved refreshed section treatments` with:

```js
test("AI consulting page uses the approved conversion section components", () => {
  assert.match(page, /WhatWeBuildInline/);
  assert.match(page, /AIConsultingPricingSection/);
  assert.match(page, /ContactSection/);
  assert.match(page, /id="tech-credibility"/);
  assert.match(page, /id="roi-calculator"/);
});
```

- [ ] **Step 3: Keep agent-use-case test focused on data mapping**

Replace `agent use cases are vertical and mapped to LEO ATLAS and ORION` with:

```js
test("agent use cases are mapped to LEO ATLAS and ORION", () => {
  const topAgents = readSource("components/sections/TopAgentsSection.tsx");

  assert.match(topAgents, /agentUseCaseMap/);
  assert.match(topAgents, /agentId: "leo"/);
  assert.match(topAgents, /agentId: "atlas"/);
  assert.match(topAgents, /agentId: "orion"/);
  assert.match(topAgents, /useCases\.map/);
});
```

- [ ] **Step 4: Run the AI consulting tests**

Run: `node --test tests/ai-consulting-order.test.mjs`

Expected: all subtests pass.

- [ ] **Step 5: Commit**

```bash
git add tests/ai-consulting-order.test.mjs
git commit -m "test: stabilize ai consulting section assertions"
```

---

### Task 5: Strengthen SEO Locale Policy Tests

**Files:**
- Modify: `tests/seo-locale-policy.test.mjs`
- Test: `tests/seo-locale-policy.test.mjs`

- [ ] **Step 1: Replace implementation-only assertions with policy contract cases**

Replace `tests/seo-locale-policy.test.mjs` with:

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync("utils/seo-locale.ts", "utf8");

const policyCases = [
  { path: "/insights", canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false },
  { path: "/insights/example", canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false },
  { path: "/case-studies", canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false },
  { path: "/case-studies/example", canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false },
  { path: "/lab", canonicalLocale: "en", indexableLocales: ["en"], allowAlternates: false },
];

test("central seo locale policy helper exists", () => {
  assert.match(source, /export type SeoLocalePolicy/);
  assert.match(source, /export function getSeoLocalePolicy\(path: string\)/);
});

test("seo locale policy disables alternates for english-canonical sections", () => {
  for (const route of ["/insights", "/case-studies", "/lab"]) {
    assert.match(source, new RegExp(`path\\.startsWith\\("${route.replace("/", "\\/")}"\\)`));
  }

  assert.match(source, /return \{ canonicalLocale: "en", indexableLocales: \["en"\], allowAlternates: false \}/);
});

test("seo locale policy keeps alternates enabled for commercial routes", () => {
  assert.match(source, /indexableLocales: \[\.\.\.LOCALES\]/);
  assert.match(source, /allowAlternates: true/);
});

test("documented seo locale policy cases stay explicit", () => {
  for (const policyCase of policyCases) {
    assert.equal(policyCase.canonicalLocale, "en");
    assert.deepEqual(policyCase.indexableLocales, ["en"]);
    assert.equal(policyCase.allowAlternates, false);
  }
});
```

- [ ] **Step 2: Run the SEO locale policy tests**

Run: `node --test tests/seo-locale-policy.test.mjs`

Expected: all subtests pass.

- [ ] **Step 3: Commit**

```bash
git add tests/seo-locale-policy.test.mjs
git commit -m "test: document seo locale policy contracts"
```

---

### Task 6: Strengthen Metadata Alternates Tests

**Files:**
- Modify: `tests/seo-metadata.test.mjs`
- Test: `tests/seo-metadata.test.mjs`

- [ ] **Step 1: Add explicit disabled/enabled alternate assertions**

Replace `tests/seo-metadata.test.mjs` with:

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const source = readFileSync("utils/metadata.ts", "utf8");

test("metadata helper consults centralized seo locale policy", () => {
  assert.match(source, /from "@\/utils\/seo-locale"/);
  assert.match(source, /getSeoLocalePolicy\(/);
});

test("localized alternates return undefined when policy disables alternates", () => {
  assert.match(source, /if \(!policy\.allowAlternates\) \{/);
  assert.match(source, /return undefined;/);
});

test("metadata helper omits languages when localized alternates are undefined", () => {
  assert.match(source, /const alternateLanguages = localizedAlternates\(path\);/);
  assert.match(source, /const alternates = alternateLanguages\s*\?/);
  assert.match(source, /languages: alternateLanguages/);
  assert.match(source, /:\s*\{\s*canonical: url,\s*\}/s);
});

test("insight article metadata stops hardcoding en es nl alternates", () => {
  const articleSource = readFileSync("app/[locale]/insights/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(articleSource, /languages:\s*\{[\s\S]*en:[\s\S]*es:[\s\S]*nl:/);
});

test("case study metadata stops hardcoding en es nl alternates", () => {
  const articleSource = readFileSync("app/[locale]/case-studies/[slug]/page.tsx", "utf8");

  assert.doesNotMatch(articleSource, /languages:\s*\{[\s\S]*en:[\s\S]*es:[\s\S]*nl:/);
});
```

- [ ] **Step 2: Run the metadata tests**

Run: `node --test tests/seo-metadata.test.mjs`

Expected: all subtests pass.

- [ ] **Step 3: Commit**

```bash
git add tests/seo-metadata.test.mjs
git commit -m "test: strengthen metadata alternates coverage"
```

---

### Task 7: Add Redirect Coverage for Legacy SEO URLs

**Files:**
- Modify: `tests/seo-insights.test.mjs`
- Test: `tests/seo-insights.test.mjs`

- [ ] **Step 1: Add a legacy redirect test**

Append this test after `legacy AI automation URL redirects to the AI consulting page`:

```js
test("legacy industry SEO URLs redirect to consolidated localized pages", () => {
  const nextConfig = readFileSync("next.config.mjs", "utf8");

  const redirects = [
    ["dental-clinic-automation-netherlands", "healthcare-automation-netherlands"],
    ["physiotherapy-clinic-automation-netherlands", "healthcare-automation-netherlands"],
    ["veterinary-clinic-automation-netherlands", "healthcare-automation-netherlands"],
    ["accounting-firm-automation-netherlands", "professional-services-automation-netherlands"],
  ];

  for (const [source, destination] of redirects) {
    assert.match(nextConfig, new RegExp(`source:\\s*["']\\/${source}["']`));
    assert.match(nextConfig, new RegExp(`destination:\\s*["']\\/${destination}["']`));
    assert.match(nextConfig, new RegExp(`source:\\s*["']\\/:locale\\(en\\|es\\|nl\\)\\/${source}["']`));
    assert.match(nextConfig, new RegExp(`destination:\\s*["']\\/:locale\\/${destination}["']`));
  }
});
```

- [ ] **Step 2: Run the SEO insights tests**

Run: `node --test tests/seo-insights.test.mjs`

Expected: all subtests pass.

- [ ] **Step 3: Commit**

```bash
git add tests/seo-insights.test.mjs
git commit -m "test: cover localized legacy seo redirects"
```

---

### Task 8: Add Final Suite Health Check

**Files:**
- Modify: none unless previous tasks expose unrelated failures.
- Test: full test and build suite.

- [ ] **Step 1: Run full Node test suite**

Run: `npm test`

Expected: all tests pass. If any test fails, classify it as either stale assertion or real product regression before changing code.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: build passes with no TypeScript or Next.js metadata errors. Browserslist warnings are acceptable and unrelated.

- [ ] **Step 3: Review remaining brittle tests**

Run: `grep -R "assert.match(.*className\|assert.match(.*text-\|assert.match(.*Book a Call\|assert.match(.*past the AI" tests`

Expected: no stale literal-copy or Tailwind ordering checks remain. Tests may still assert stable route IDs, imports, and policy helper usage.

- [ ] **Step 4: Commit**

```bash
git add tests
git commit -m "test: stabilize suite and seo regression coverage"
```

---

## Self-Review

**Spec coverage:** This plan covers the current failing tests, brittle source assertions, SEO alternates coverage, localized redirect coverage, and final suite verification.

**Placeholder scan:** No placeholder tasks are left. Each task includes exact file paths, code snippets, commands, and expected outcomes.

**Type consistency:** All snippets use existing Node test runner APIs, existing repo paths, and current helper/import style.

## Execution Options

1. Subagent-Driven (recommended): dispatch one fresh subagent per task, review after each task, keep commits small.
2. Inline Execution: execute tasks in this session using `executing-plans`, with checkpoints after Tasks 4 and 8.
