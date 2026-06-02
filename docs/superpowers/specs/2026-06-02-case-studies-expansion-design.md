# Case Studies Expansion Design

## Goal

Expand the existing case studies section with two new full case studies sourced from the unused `03TheLabSection` content, while leaving the unused section itself unchanged.

The two new case studies are:

- `Product Accelerator: AI Productivity App`
- `Basic-Fit: Massive E-commerce Migration (SFCC)`

The third item from `03TheLabSection` (`Driving Digital Growth: +15 Successes`) will not become a standalone case study because it is aggregate proof rather than a single project and overlaps with existing trust and track-record messaging.

## Scope

In scope:

- add two new entries to `content/case-studies.ts`
- make those entries appear automatically in the case studies index page
- make those entries render automatically in the existing `[slug]` detail page system
- add test coverage proving the new case study slugs are present in the content collection and routable through the existing case studies structure

Out of scope:

- modifying `components/sections/03TheLabSection.tsx`
- converting the third aggregate project into a case study
- redesigning the case studies index or detail templates
- changing locale strategy for case studies

## Existing Architecture

The repo already has a working case studies content model and routing structure:

- `content/case-studies.ts` stores the source-of-truth collection
- `app/[locale]/case-studies/page.tsx` renders the collection page from that array
- `app/[locale]/case-studies/[slug]/page.tsx` renders each detail page from the same collection
- `app/sitemap.ts` already consumes the collection for sitemap generation

Because the collection page, detail pages, static params, and sitemap all derive from the same content file, the smallest correct change is to extend `content/case-studies.ts` instead of introducing a second content source.

## Recommended Approach

Add the two new projects directly to `caseStudies` in `content/case-studies.ts` using the existing `CaseStudy` type.

This keeps the implementation consistent with the current architecture and avoids special-case rendering logic. Once the entries are added:

- the index page will show two additional cards automatically
- the detail pages will be generated automatically through the existing slug-based route
- the sitemap and metadata paths will pick them up automatically

## Content Strategy

The source material in `TheLab` is summary-level content, not full editorial case study copy. The implementation should expand that material into the existing case study format without changing the factual positioning.

For each new case study, the entry should include:

- industry
- location
- client size
- short problem summary
- short solution summary
- three metrics
- technologies used
- timeline
- year
- publish and modified dates
- structured `sections` content with headings, paragraphs, and lists

The tone should match the current `case-studies.ts` entries:

- concrete
- operational
- implementation-focused
- credible rather than inflated

Claims should stay aligned with the summary text already present in `messages/en.json` and should avoid introducing extreme, unsupported performance claims.

## New Entries

### AI Productivity App

This case study should position the project as a product engineering and product leadership engagement for an AI productivity application.

Core source material:

- scalable frontend architecture in React, Next.js, and TypeScript
- AI feature integration via OpenAI
- continuous monitoring with Lighthouse and Core Web Vitals
- testing with Jest
- roadmap and product vision alignment between engineering and business

The content should read as a product acceleration case study rather than an agency automation case study.

### Basic-Fit Migration

This case study should position the project as a multi-country ecommerce migration to Salesforce Commerce Cloud.

Core source material:

- critical site migration to SFCC
- UX continuity during migration
- performance and SEO improvements
- A/B testing and conversion improvement work
- custom templates, responsive implementation, analytics integration

The content should read as a high-risk migration and optimisation case study rather than an AI automation case study.

## Routing And SEO Impact

No route-level changes are required.

Expected effects from content-only expansion:

- two new detail pages under `/en/case-studies/[slug]`
- two new cards on `/en/case-studies`
- two new sitemap entries via the existing sitemap generator
- existing metadata generation continues to work through the current route files

Because case studies are currently English-only, the new entries should follow the same English-only behavior already enforced in the route layer.

## Testing Strategy

Use TDD for the content expansion.

Required test flow:

1. add or extend a focused test that asserts the two new slugs are present in `caseStudies`
2. run the targeted test and verify it fails for the expected reason before implementation
3. add the new case study content entries
4. rerun the targeted test and verify it passes
5. run relevant existing case study or route-related tests to confirm no regressions

The test should validate behavior at the collection level, not just string presence in a file.

## Risks

Primary risk:

- introducing overly speculative metrics or detail that does not map cleanly to the existing project summaries

Mitigation:

- keep metrics conservative and consistent with the style of the current collection
- derive narrative directly from the existing `TheLab` summaries and tags
- avoid unnecessary structural changes to rendering code

## Implementation Boundary

The implementation should stay minimal:

- update `content/case-studies.ts`
- add or update a targeted test file
- avoid touching page components unless a test reveals a real issue

This keeps the change low-risk and aligned with the current content architecture.
