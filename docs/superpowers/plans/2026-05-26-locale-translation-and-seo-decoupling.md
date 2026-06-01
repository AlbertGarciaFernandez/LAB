# Locale Translation Verification and SEO Decoupling Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Verify and complete real `en/es/nl` localization for the corporate website, while formally treating `Insights`, `Case Studies`, and `Lab` as English-only or non-localized sections, then decouple SEO locale behavior from technical routing.

**Architecture:** First stabilize content truth: only the corporate/commercial site should be fully localized across `en/es/nl`. `Insights`, `Case Studies`, and `Lab` must stop pretending to be fully localized for SEO. After that, centralize locale-aware SEO decisions in shared metadata helpers so canonical, hreflang, robots, and sitemap behavior are driven by indexability rules instead of raw `routing.locales`.

**Tech Stack:** Next.js App Router, TypeScript, next-intl, Node test runner, shared metadata utilities

---

### Task 1: Audit and document the real localization scope

**Files:**

- Create: `docs/translation-audit-2026-05-26.md`
- Inspect/verify:
  - `app/[locale]/page.tsx`
  - `app/[locale]/about/page.tsx`
  - `app/[locale]/ai-consulting/page.tsx`
  - `app/[locale]/ai-automation-consulting-netherlands/page.tsx`
  - `app/[locale]/nextjs-development-agency/page.tsx`
  - `app/[locale]/react-consulting/page.tsx`
  - `app/[locale]/it-system-integration/page.tsx`
  - `app/[locale]/software-development-leiden/page.tsx`
  - `app/[locale]/services/custom-internal-tools-development/page.tsx`
  - `app/[locale]/expertise/**`
  - `app/[locale]/*-automation-netherlands/**`
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `components/layout/LanguageSelector.tsx`
  - `messages/en.json`
  - `messages/es.json`
  - `messages/nl.json`

### Task 2: Fix corporate pages that still use partial locale logic

**Files:**

- Modify: `app/[locale]/page.tsx`
- Modify: `app/[locale]/about/page.tsx`
- Modify: `app/[locale]/ai-consulting/layout.tsx`
- Potentially modify any included page still using `isSpanish` + English fallback incorrectly

### Task 3: Formalize English-only behavior for Insights and Case Studies

**Files:**

- Modify: `app/[locale]/insights/page.tsx`
- Modify: `app/[locale]/insights/[slug]/page.tsx`
- Modify: `app/[locale]/case-studies/page.tsx`
- Modify: `app/[locale]/case-studies/[slug]/page.tsx`
- Modify: `docs/translation-audit-2026-05-26.md`

### Task 4: Remove Lab from locale translation and locale SEO assumptions

**Files:**

- Modify: `app/[locale]/lab/page.tsx`
- Inspect: `app/[locale]/lab/**`
- Modify: `docs/translation-audit-2026-05-26.md`

### Task 5: Introduce centralized SEO locale policy

**Files:**

- Create: `utils/seo-locale.ts`
- Modify: `utils/metadata.ts`
- Modify: `utils/constants.ts`
- Test: `tests/seo-locale-policy.test.mjs`

### Task 6: Refactor shared metadata generation to use SEO locale policy

**Files:**

- Modify: `utils/metadata.ts`
- Modify: `app/[locale]/layout.tsx`
- Modify: `app/[locale]/ai-consulting/layout.tsx`

### Task 7: Refactor Insights, Case Studies, and Lab metadata to stop advertising false locale parity

**Files:**

- Modify: `app/[locale]/insights/page.tsx`
- Modify: `app/[locale]/insights/[slug]/page.tsx`
- Modify: `app/[locale]/case-studies/page.tsx`
- Modify: `app/[locale]/case-studies/[slug]/page.tsx`
- Modify: `app/[locale]/lab/page.tsx`

### Task 8: Filter sitemap output to match real indexability

**Files:**

- Modify: `app/sitemap.ts`
- Test: `tests/sitemap-locale-policy.test.mjs`

### Task 9: Run full regression verification

**Files:**

- Verify:
  - `tests/seo-insights.test.mjs`
  - `tests/locale-translation.test.mjs`
  - `tests/seo-locale-policy.test.mjs`
  - `tests/seo-metadata.test.mjs`
  - `tests/sitemap-locale-policy.test.mjs`

### Task 10: Final documentation pass

**Files:**

- Modify: `docs/translation-audit-2026-05-26.md`
- Modify: `docs/release-ready-checklist.md`
- Optionally modify: `docs/i18n-audit-2026-05-21.md`

### Final Locale Rules

- Fully localized and indexable: corporate and commercial pages in `en`, `es`, `nl`
- English-only editorial: `Insights`, `Case Studies`
- Out of locale SEO scope: `Lab`
