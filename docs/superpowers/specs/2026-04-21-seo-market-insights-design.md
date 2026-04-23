# SEO Market Insights Design

## Goal

Improve commercial SEO performance for CodeHunter Lab by fixing crawl/index quality issues, reducing intent overlap between core pages, and expanding insight content around queries already showing impressions in Google Search Console.

## Context

The Google Search Console export for the last 7 days ending on 2026-04-19 shows 300 impressions, 2 clicks, and a 0.7% CTR. The strongest page opportunity is `/en/ai-automation-consulting-netherlands` with 185 impressions at average position 20.17. The highest-leverage query opportunities are:

- `nextjs development agency`
- `conversational ai consultant netherlands`
- `conversational ai consultancy netherlands`
- `ai consultants netherlands`
- `workflow automation agency netherlands`

The current codebase already contains a first batch of SEO insights and GEO work, but the sitemap declares insight URLs that do not exist in the local content source. That creates avoidable crawl waste and weakens trust in the information architecture.

## Market Findings

The current market for these queries rewards four patterns:

1. Strong click-oriented titles and snippets with direct commercial language
2. Clear founder or expert identity instead of anonymous agency copy
3. Specific outcomes, ROI framing, and operational use cases
4. Comparison and explainer content that supports the main money pages

Competitors and adjacent players are leaning hard into ROI language, category ownership, and visible expertise. CodeHunter Lab already has strong production-oriented positioning, but needs sharper SERP packaging and broader support content.

## Approach

Use a two-layer approach:

### Layer 1: Technical and SERP quality fixes

- Remove sitemap drift by aligning sitemap insight URLs with real content
- Improve metadata on key pages to better match search intent and increase CTR
- Preserve current route structure and existing commercial pages
- Avoid broad refactors that would interfere with in-progress homepage work

### Layer 2: Commercial insight expansion

Create new English-only insights that map directly to existing impression data and sitemap intent:

1. `ai-consultants-netherlands`
2. `automation-consultancy-netherlands`
3. `crm-integration-services-netherlands`
4. `nextjs-consultancy-europe`
5. `app-developer-leiden`

These articles should support existing service pages through internal links and query-aligned intros, headings, and metadata.

## Content Boundaries

- Keep insights English-only for now to avoid shipping thin or duplicated Spanish content
- Do not introduce AI-generated filler pages for unsupported demand
- Keep each article tightly commercial-informational: explain the problem, selection criteria, risks, and when to hire a specialist
- Link each article to one or two existing service pages only where intent matches naturally

## Technical Requirements

- `content/insights.ts` must be the single source of truth for shipped insight slugs
- `app/sitemap.ts` must only publish URLs that exist
- Insight routes must continue rendering static HTML and `Article` schema
- Existing commercial routes must remain stable
- Metadata changes must be limited to pages already attracting impressions:
  - `/[locale]/page`
  - `/[locale]/ai-consulting`
  - `/[locale]/ai-automation-consulting-netherlands`
  - `/[locale]/nextjs-development-agency`

## Success Criteria

- No sitemap URLs point to missing insight pages
- The site ships five additional insight articles aligned to current demand
- High-impression commercial pages have sharper titles and descriptions aimed at click-through improvement
- Existing tests continue to pass, and a new regression test protects against future sitemap/content drift

## Risks And Constraints

- The worktree already contains unrelated in-progress changes on homepage and messaging files; do not overwrite or revert them
- Search Console data is a short 7-day window, so changes should target obvious opportunities rather than overfitting to low-volume noise
- FAQ structured data remains in place, but it should not be the center of the current work because Google limits FAQ rich results outside government and health domains
