# Insights Upgrade Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Turn the `insights` section into a clearer SEO + buyer-education hub aligned with CodeHunterLab’s core service clusters.

**Architecture:** Keep article bodies in `content/insights.ts`, but move editorial prioritization and relationship logic into a dedicated taxonomy module. Update the insights hub, homepage insights section, and article template to consume that taxonomy so sitemap priorities, homepage promotion, and internal linking stay aligned.

**Tech Stack:** Next.js App Router, TypeScript, next-intl, existing node:test regex-based tests.

---

### Task 1: Add insights taxonomy source

**Objective:** Define a single source of truth for featured slugs, strategic slugs, cluster labels, and related insight relationships.

**Files:**
- Create: `content/insights-taxonomy.ts`
- Test: `tests/seo-insights-architecture.test.mjs`

**Verification:**
- Taxonomy exports strategic slugs aligned with sitemap priorities.
- Taxonomy exports featured homepage slugs and related insight relationships.

### Task 2: Upgrade insights hub and homepage section

**Objective:** Make the hub and homepage promote the same strategic editorial focus.

**Files:**
- Modify: `app/[locale]/insights/page.tsx`
- Modify: `components/sections/InsightsSection.tsx`
- Modify: `messages/en.json`
- Modify: `messages/es.json`
- Modify: `messages/nl.json`
- Test: `tests/seo-insights-architecture.test.mjs`

**Verification:**
- Hub exposes featured insights, strategic clusters, and supporting insights.
- Homepage featured insights come from taxonomy, not a hard-coded local set.
- Translation keys exist for any new homepage copy.

### Task 3: Add related insights to article pages

**Objective:** Improve internal linking between insight articles and related service pages.

**Files:**
- Modify: `app/[locale]/insights/[slug]/page.tsx`
- Modify: `content/insights.ts` only if required for typing compatibility
- Test: `tests/seo-insights-architecture.test.mjs`

**Verification:**
- Article pages render a related insights section when taxonomy provides matches.
- Existing related services remain visible.

### Task 4: Run targeted tests and review changes

**Objective:** Validate the new architecture and avoid mixing unrelated repo changes.

**Files:**
- Modify: `tests/seo-insights-architecture.test.mjs`

**Verification:**
- `node --test tests/seo-insights.test.mjs tests/sitemap-insights-selection.test.mjs tests/seo-insights-architecture.test.mjs`
- Git diff only contains intentional insight-related changes for this task.
