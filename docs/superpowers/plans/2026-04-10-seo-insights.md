# SEO Insights Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a focused SEO insights section that supports LAB's high-opportunity Search Console queries.

**Architecture:** Store article content in a typed local module, render an English-only insights index and dynamic article pages with static metadata and schema, and add URLs to the sitemap.

**Tech Stack:** Next.js App Router, TypeScript, local content data, Node test runner.

---

### Task 1: Content Contract Test

**Files:**

- Create: `tests/seo-insights.test.mjs`

- [ ] Write a failing Node test that checks for the required article slugs, metadata fields, internal links, and sitemap registration.
- [ ] Run `node --test tests/seo-insights.test.mjs` and confirm it fails because the content module and sitemap references do not exist yet.

### Task 2: Insight Content Source

**Files:**

- Create: `content/insights.ts`

- [ ] Add a typed `insights` array with four articles.
- [ ] Include title, description, dates, category, reading time, target queries, related service links, and rich section content for each article.

### Task 3: Insights Routes

**Files:**

- Create: `app/[locale]/insights/page.tsx`
- Create: `app/[locale]/insights/[slug]/page.tsx`

- [ ] Render the English insights index and return `notFound()` for non-English locales.
- [ ] Render article pages with canonical metadata, Open Graph metadata, and `Article` JSON-LD.
- [ ] Add internal links from each article to relevant commercial pages.

### Task 4: Sitemap

**Files:**

- Modify: `app/sitemap.ts`

- [ ] Add `/en/insights` and the four article URLs to the sitemap.
- [ ] Keep existing commercial page sitemap behavior unchanged.

### Task 5: Verification

**Files:**

- Modify: `package.json`

- [ ] Add a `test` script for the Node SEO test.
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
