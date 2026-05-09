# SEO Market Insights Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve commercial SEO performance by fixing sitemap drift, strengthening CTR-focused metadata on key pages, and adding five new insight articles for queries already earning impressions.

**Architecture:** Keep the current App Router and local content model intact. Use `content/insights.ts` as the source of truth for new insight content, update metadata only on a focused set of high-opportunity pages, and align `app/sitemap.ts` with the real article inventory to avoid publishing dead URLs.

**Tech Stack:** Next.js App Router, TypeScript, local content data, Node test runner.

---

### Task 1: Protect Against Sitemap Drift

**Files:**

- Modify: `tests/seo-insights.test.mjs`
- Modify: `app/sitemap.ts`

- [ ] Add a failing assertion in `tests/seo-insights.test.mjs` that compares the shipped insight slugs in `content/insights.ts` with the URLs declared in `app/sitemap.ts`.
- [ ] Run `node --test tests/seo-insights.test.mjs` and confirm it fails for missing or extra sitemap insight URLs.
- [ ] Update `app/sitemap.ts` so it only emits insight URLs that actually exist.
- [ ] Run `node --test tests/seo-insights.test.mjs` again and confirm the sitemap/content mismatch is gone.

### Task 2: Expand Insight Inventory

**Files:**

- Modify: `content/insights.ts`

- [ ] Add five new articles with complete metadata, target queries, related services, and content sections:
  - `ai-consultants-netherlands`
  - `automation-consultancy-netherlands`
  - `crm-integration-services-netherlands`
  - `nextjs-consultancy-europe`
  - `app-developer-leiden`
- [ ] Keep article structure consistent with the existing insights contract so no route changes are needed.
- [ ] Run `node --test tests/seo-insights.test.mjs` and confirm the new slugs and metadata pass validation.

### Task 3: Improve CTR-Oriented Metadata On Core Pages

**Files:**

- Modify: `app/[locale]/layout.tsx`
- Modify: `app/[locale]/ai-consulting/layout.tsx`
- Modify: `app/[locale]/ai-automation-consulting-netherlands/page.tsx`
- Modify: `app/[locale]/nextjs-development-agency/page.tsx`

- [ ] Review existing titles and descriptions for overlap between home, AI consulting, and AI automation pages.
- [ ] Rewrite metadata so each page owns a clearer commercial intent:
  - home = agency overview
  - ai consulting = consulting/strategy + implementation
  - ai automation = operational automation, n8n, WhatsApp, agents
  - nextjs = Next.js specialists and migrations
- [ ] Keep canonical and hreflang behavior unchanged.
- [ ] Run the existing test suite to confirm metadata edits did not break routing or content assumptions.

### Task 4: Verify Production Readiness

**Files:**

- Modify: `package.json` only if needed for verification convenience

- [ ] Run `node --test tests/seo-insights.test.mjs`.
- [ ] Run `npm test` if available.
- [ ] Run `npm run build`.
- [ ] If any command fails, fix the issue and re-run the failing verification before claiming completion.
