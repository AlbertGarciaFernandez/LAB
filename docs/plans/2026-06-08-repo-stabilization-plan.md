# LAB Repo Stabilization Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Stabilize the repo so local verification is reliable, external integrations are safer, and the codebase is easier to evolve without regressions.

**Architecture:** Start with low-risk repo hygiene and verification gates, then fix configuration drift, then isolate risky external dependencies, and only after that tackle broader refactors. Keep changes incremental so each step can be verified independently.

**Tech Stack:** Next.js App Router, next-intl, TypeScript, Vercel headers/redirects, Node test runner.

---

## Phase 1 — Safe repo hygiene and verification

### Task 1: Add a `typecheck` script

**Objective:** Make TypeScript validation runnable independently from lint/build.

**Files:**
- Modify: `package.json`

**Change:**
- Add `"typecheck": "tsc --noEmit"` under `scripts`.

**Verification:**
- Run: `npm run typecheck`
- Expected: command exists and either passes or reports real TS issues.

**Risk:** Low.
**Can execute directly without likely breakage:** Yes.

---

### Task 2: Install dependencies cleanly and capture baseline

**Objective:** Make lint/build/test reproducible in this clone.

**Files:**
- No source changes expected
- Uses: `package-lock.json`

**Commands:**
- `npm ci`
- `npm test`
- `npm run lint`
- `npm run build`
- `npm run typecheck`

**Verification:**
- Save the exact failure baseline before code changes.

**Risk:** Low to medium (dependency resolution may expose more issues).
**Can execute directly without likely breakage:** Yes.

---

### Task 3: Add CI workflow

**Objective:** Prevent merges/deploys with broken quality gates.

**Files:**
- Create: `.github/workflows/ci.yml`

**Suggested workflow steps:**
- checkout
- setup-node
- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run build`

**Verification:**
- Validate workflow YAML.
- Push branch and confirm GitHub Actions runs.

**Risk:** Low.
**Can execute directly without likely breakage:** Yes.

---

### Task 4: Fix README drift

**Objective:** Align docs with actual repo behavior.

**Files:**
- Modify: `README.md`

**Required updates:**
- Replace “Bilingual — English / Spanish” with current locale scope.
- Update clone/setup path examples so they match the real repo name/folder.
- Document the verification commands (`npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`).

**Verification:**
- Read the updated README top-to-bottom as a new contributor.

**Risk:** Low.
**Can execute directly without likely breakage:** Yes.

---

## Phase 2 — Config drift and deployment safety

### Task 5: Align Next-related dependency versions

**Objective:** Remove version skew that can create subtle runtime/build issues.

**Files:**
- Modify: `package.json`
- Possibly update: `package-lock.json`

**Known mismatch to resolve:**
- `next: ^14.2.35`
- `@next/third-parties: ^16.1.6`

**Approach:**
- Pick a supported compatible version strategy.
- Prefer matching the major expected by the installed Next version, unless there is a deliberate upgrade plan.

**Verification:**
- `npm ci`
- `npm run build`
- `npm run lint`
- `npm run typecheck`

**Risk:** Medium.
**Can execute directly without likely breakage:** Yes, but do it in an isolated commit/branch.

---

### Task 6: Unify crawler policy into one source of truth

**Objective:** Stop serving contradictory robots rules.

**Files:**
- Modify: `app/robots.ts`
- Modify or remove: `public/robots.txt`
- Verify related expectations in: `tests/lab-platform.test.mjs`

**Current drift:**
- `app/robots.ts` blocks `/dashboard` and `/en|es|nl/lab/app`
- `public/robots.txt` blocks `/api/`, `/_next/`, `/admin/`

**Approach:**
- Decide whether `app/robots.ts` is canonical.
- Mirror all intentional disallow rules there.
- Remove `public/robots.txt` if redundant, or make it exactly match.

**Verification:**
- Confirm generated `/robots.txt` content in local/prod preview.
- Run affected tests.

**Risk:** Medium (SEO/crawler behavior).
**Can execute directly without likely breakage:** Yes, with careful verification.

---

### Task 7: Make GA injection resilient to missing env vars

**Objective:** Avoid unsafe assumptions in analytics bootstrap.

**Files:**
- Modify: `components/analytics/GoogleAnalyticsConditional.tsx`

**Current issue:**
- Uses `process.env.NEXT_PUBLIC_GA_ID!`

**Approach:**
- Gate rendering on both consent and a present GA ID.
- Optionally log a development warning when consent exists but the env is absent.

**Verification:**
- Test with and without `NEXT_PUBLIC_GA_ID`.
- Confirm no runtime crash and no GA render when missing.

**Risk:** Low.
**Can execute directly without likely breakage:** Yes.

---

## Phase 3 — Safer integrations and correctness

### Task 8: Move contact form submission behind a local API route

**Objective:** Remove direct client coupling to FormSubmit and centralize validation.

**Files:**
- Modify: `components/ui/ContactForm.tsx`
- Create: `app/api/contact/route.ts`
- Modify: `vercel.json`
- Optionally document envs in: `README.md`

**Current issue:**
- Client fetches `https://formsubmit.co/ajax/fdcaf086cf2933714fd96d0622e5525b` directly.

**Approach:**
- Post to `/api/contact` from the client.
- Validate/sanitize payload server-side.
- Keep external provider secret/config in env where possible.
- Revisit CSP after removing direct browser dependency on `formsubmit.co`.

**Verification:**
- Submit form successfully in dev/preview.
- Confirm graceful error path.
- Re-run contact-related tests.

**Risk:** Medium to high (production lead flow).
**Can execute directly without likely breakage:** Not without staging verification.

---

### Task 9: Remove or implement the advertised site search schema

**Objective:** Ensure structured data matches reality.

**Files:**
- Modify: `app/[locale]/layout.tsx`

**Current issue:**
- Publishes `SearchAction` with `urlTemplate: https://www.codehunterlab.com/en?q={search_term_string}`.

**Approach:**
- If no search experience exists, remove `potentialAction`.
- If search is intended, implement a real route and query handling first.

**Verification:**
- Validate structured data with a schema checker.

**Risk:** Low.
**Can execute directly without likely breakage:** Yes.

---

### Task 10: Fix the skip-link landmark target

**Objective:** Improve keyboard/screen-reader navigation.

**Files:**
- Modify: `app/[locale]/layout.tsx`
- Potentially adjust page wrappers under: `app/[locale]/**/page.tsx`

**Current issue:**
- `href="#main-content"` targets a `div`, not the main landmark.

**Approach:**
- Make the real top-level `<main>` the target, or introduce a consistent main landmark wrapper.

**Verification:**
- Tab from page load and activate skip link.
- Confirm focus lands on the main landmark.

**Risk:** Low.
**Can execute directly without likely breakage:** Yes.

---

## Phase 4 — Existing failing tests and code/content alignment

### Task 11: Repair the current failing tests one cluster at a time

**Objective:** Restore trust in the current test suite.

**Files:**
- Modify as needed based on each failure cluster:
  - `components/ui/SidebarNav.tsx`
  - `app/[locale]/ai-consulting/PageContent.tsx`
  - `components/sections/ContactSection.tsx`
  - `components/sections/PackagesSection.tsx`
  - `tests/english-only-editorial-routes.test.mjs`
  - `tests/lab-platform.test.mjs`

**Known failure clusters:**
- AI consulting page/sidebar/content drift
- Contact section copy/contract drift
- Package CTA class contract drift
- TypeScript package missing for tests that import/transpile TS

**Approach:**
- Resolve dependency/setup problems first.
- Then fix one test file at a time with small commits.

**Verification:**
- Run targeted tests per file, then full `npm test`.

**Risk:** Medium.
**Can execute directly without likely breakage:** Yes, but only after baseline setup.

---

## Phase 5 — Maintainability refactor

### Task 12: Break oversized client page components into smaller sections

**Objective:** Reduce bundle complexity and maintenance cost.

**Files (high-value starting points):**
- `app/[locale]/ai-consulting/PageContent.tsx`
- `app/[locale]/nextjs-development-agency/PageContent.tsx`
- `app/[locale]/professional-services-automation-netherlands/PageContent.tsx`
- `components/layout/Header.tsx`

**Approach:**
- Extract visual sections/components first without changing behavior.
- Move static data/config into typed helpers.
- Keep interactive islands small.

**Verification:**
- Snapshot/manual UI review.
- `npm run build`
- `npm test`

**Risk:** Medium to high.
**Can execute directly without likely breakage:** Not as a blind bulk change; do incrementally.

---

### Task 13: Reduce `t.raw(...)` dependence with typed content helpers

**Objective:** Make content structure safer and easier to refactor.

**Files:**
- Multiple `app/[locale]/**/*.tsx`
- Multiple `components/**/*.tsx`
- `messages/en.json`
- `messages/es.json`
- `messages/nl.json`
- `i18n/request.ts`

**Approach:**
- Introduce typed helper functions or schema validation around recurring content blocks.
- Remove `locale as any` in `i18n/request.ts` if possible.
- Convert highest-churn sections first.

**Verification:**
- `npm run typecheck`
- `npm test`

**Risk:** Medium to high.
**Can execute directly without likely breakage:** Not all at once; should be phased.

---

## Recommended execution order

1. Task 1 — add `typecheck`
2. Task 2 — install deps and record baseline
3. Task 3 — add CI
4. Task 4 — fix README
5. Task 5 — align Next dependencies
6. Task 6 — unify robots
7. Task 7 — harden GA env handling
8. Task 11 — fix current failing tests
9. Task 9 — remove/implement SearchAction
10. Task 10 — fix skip-link target
11. Task 8 — move contact form behind local API
12. Task 12 — refactor oversized components
13. Task 13 — reduce `t.raw(...)` usage

## Changes I can execute directly with low breakage risk

- Add `typecheck` script in `package.json`
- Install dependencies and produce a clean baseline report
- Add `.github/workflows/ci.yml`
- Update `README.md`
- Guard GA rendering when env is missing
- Remove or correct `SearchAction`
- Fix skip-link target

## Changes that need extra care / staging verification

- Aligning Next-related dependency versions
- Unifying robots rules if crawl/indexing behavior is business-sensitive
- Moving the contact form behind a local API route
- Large refactors of page components / header
- Broad i18n/content typing cleanup

## Verification checklist

- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run build`
- Manual smoke test of:
  - homepage
  - ai-consulting page
  - contact form
  - robots output
  - analytics consent flow
