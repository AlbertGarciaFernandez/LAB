# CodeHunter Lab — Optimization Plan

> **Date:** 2026-05-20
> **Status:** Phase 1 implementation complete in working tree; Phase 2 partially complete; no commit made
> **Scope:** SEO, accessibility, architecture, performance, competitive positioning

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Audit](#2-current-state-audit)
3. [Competitor Landscape](#3-competitor-landscape)
4. [Architecture Decision: Astro vs. Next.js](#4-architecture-decision-astro-vs-nextjs)
5. [SEO Improvement Plan](#5-seo-improvement-plan)
6. [Accessibility Improvement Plan](#6-accessibility-improvement-plan)
7. [Component Architecture Cleanup](#7-component-architecture-cleanup)
8. [Performance Optimization](#8-performance-optimization)
9. [New Pages & Content Strategy](#9-new-pages--content-strategy)
10. [Implementation Phases](#10-implementation-phases)
11. [AutoSkills Guidance](#11-autoskills-guidance)

---

## 1. Executive Summary

### What we found originally

- **5 CRITICAL issues**: Home page missing all SEO metadata, no skip-nav link, keyboard-inaccessible dropdown menus, no Dutch (NL) content despite serving Dutch clients, zero FAQ/Service/LocalBusiness schema
- **7 HIGH issues**: Inconsistent title format, missing hreflang on key pages, missing Twitter cards on 15+ pages, home page metadata entirely static English, hardcoded locale content, duplicated `baseUrl` constant, identical animation variants across components
- **6 MEDIUM issues**: Missing keywords on 7+ pages, Spanish locale warning banner duplicated, `AIBanner` unnecessarily client component, potential color contrast issues, missing aria-labels on footer social links
- **Biggest competitive gap**: Zero NL translations. Every NL-based competitor offers Dutch content. CodeHunter Lab is invisible on `google.nl` for Dutch-language queries
- **Biggest opportunity**: n8n consultant keyword has no strong EN+NL competitor page. AI voice agents and WhatsApp automation have near-zero dedicated pages

### What we recommend

1. **Stay on Next.js** — migrate select pages to Astro only if future audit shows persistent CWV issues. Current architecture is sound; the problems are content and metadata, not the framework
2. **Add NL locale** (`/nl/` prefix) — estimated to unlock 60% of Dutch SME search traffic
3. **Fix SEO metadata** across all pages — canonical, hreflang, OG, Twitter, schema
4. **Add FAQ + Service + LocalBusiness schema** to all service pages
5. **Create 3 new high-value pages** targeting zero-competition keywords
6. **Fix accessibility** — skip-nav, keyboard dropdowns, form validation, aria-labels
7. **Refactor duplicated code** — `baseUrl`, animation variants, locale banners, metadata generation

### What is complete in the current working tree

- Added shared SEO constants and metadata generation in `utils/constants.ts` and `utils/metadata.ts`.
- Added `FAQSchema` and `ServiceSchema` helpers in `components/ui/`.
- Improved metadata, canonical URLs, hreflang alternates, Open Graph, Twitter cards, and keywords for the home page and high-priority listing/service pages.
- Added skip-navigation and `main-content` landmark wiring in `app/[locale]/layout.tsx`.
- Improved header keyboard semantics, dropdown ARIA attributes, mobile nav dialog semantics, footer social link labels, contact form validation, and cookie consent dialog semantics.
- Fixed locale-aware links in `InsightsSection`.
- Converted `AIBanner` from a client component to a server component.
- Added reusable `ServiceSchema` to the three primary service pages: AI Consulting, AI Automation Netherlands, and Next.js Development Agency.
- Kept visible FAQ sections on those primary service pages, but removed commercial `FAQPage` JSON-LD where present because Google restricts FAQ rich results to government and health authority sites.
- Added a regression test that prevents commercial pages from reintroducing restricted `FAQPage` JSON-LD, then removed the remaining restricted FAQ schema blocks while keeping visible FAQ content.
- Verified `GlassCard.tsx` is still used and must remain.
- Added `.worktrees/` to `.gitignore` so the local implementation worktree is not accidentally committed.

### Current validation status

- `npm test` passes: 22/22 tests (updated after locale-aware navigation assertion fix).
- `npm run build` passes.
- Remaining build output includes non-blocking warnings, including Prettier/formatting warnings and a `next-intl` dynamic import dependency warning.

---

## 2. Current State Audit

### 2.1 Tech Stack

| Layer      | Technology                                                   |
| ---------- | ------------------------------------------------------------ |
| Framework  | Next.js 14 (App Router)                                      |
| i18n       | next-intl with `/en/` and `/es/` locales                     |
| Styling    | Tailwind CSS 3 + custom tokens                               |
| Animation  | Framer Motion                                                |
| Fonts      | Inter (sans) + Space Grotesk (mono) via next/font            |
| Deployment | Vercel                                                       |
| Content    | TypeScript data files (insights.ts, case-studies.ts, lab.ts) |
| Testing    | Node built-in test runner                                    |

### 2.2 Page Inventory

| Route                                             | Type      | Server/Client | Metadata Quality                                              |
| ------------------------------------------------- | --------- | ------------- | ------------------------------------------------------------- |
| `/en`                                             | Home      | Mixed         | Improved — canonical, alternates, OG, Twitter, keywords added |
| `/en/ai-consulting`                               | Service   | Mixed         | Improved — shared metadata added                              |
| `/en/ai-automation-consulting-netherlands`        | Service   | Mixed         | Improved — shared metadata added                              |
| `/en/dental-clinic-automation-netherlands`        | Industry  | Mixed         | Good                                                          |
| `/en/aesthetic-clinic-automation-netherlands`     | Industry  | Mixed         | Good                                                          |
| `/en/physiotherapy-clinic-automation-netherlands` | Industry  | Mixed         | Good                                                          |
| `/en/veterinary-clinic-automation-netherlands`    | Industry  | Mixed         | Good                                                          |
| `/en/accounting-firm-automation-netherlands`      | Industry  | Mixed         | Good                                                          |
| `/en/real-estate-automation-netherlands`          | Industry  | Mixed         | Good                                                          |
| `/en/software-development-leiden`                 | Service   | Mixed         | Good                                                          |
| `/en/nextjs-development-agency`                   | Service   | Mixed         | Improved — shared metadata added                              |
| `/en/react-consulting`                            | Service   | Mixed         | Good                                                          |
| `/en/it-system-integration`                       | Service   | Mixed         | Good                                                          |
| `/en/services/custom-internal-tools-development`  | Service   | Mixed         | Good                                                          |
| `/en/expertise/ai-agents-automation`              | Expertise | Mixed         | Missing twitter                                               |
| `/en/expertise/custom-llm-development`            | Expertise | Mixed         | Missing twitter                                               |
| `/en/expertise/system-architecture-design`        | Expertise | Mixed         | Missing twitter                                               |
| `/en/expertise/n8n-migration-consulting`          | Expertise | Mixed         | Missing twitter                                               |
| `/en/about`                                       | About     | Server        | Improved — hreflang, Twitter, keywords added                  |
| `/en/case-studies`                                | Listing   | Server        | Improved — hreflang, Twitter, keywords added                  |
| `/en/insights`                                    | Listing   | Server        | Improved — hreflang, Twitter, keywords added                  |
| `/en/lab`                                         | Product   | Server        | Improved — Twitter, keywords added                            |
| `/en/lab/app/*`                                   | Workspace | Server        | noindex (correct)                                             |

### 2.3 Client vs. Server Component Analysis

**17 PageContent.tsx files** use `'use client'` primarily for Framer Motion animations. These follow the correct Next.js App Router pattern (server page.tsx for metadata -> client PageContent.tsx for interactivity).

**11 section components** are client components for Framer Motion animations.

**6 UI components** are client components (ContactForm, CookieConsent, InfiniteLoop, ScrambleText, etc.).

**Pages that are purely static** (no client JS needed):

- `/about`, `/case-studies` (listing), `/insights` (listing), `/lab` (landing), all `/lab/app/*` pages

**Pages where Astro would help most** (high ratio of static content, minimal interactivity):

- Home page (only HeroSection, TopAgentsSection, QuickWinsSection, ROICalculator need interactivity)
- All industry landing pages (mostly static, only scroll animations)
- About page (entirely static)

**Pages where Astro adds no value**:

- Contact form (form validation requires client JS)
- Lab workspace (interactive dashboard)
- Cookie consent (localStorage required)

### 2.4 Accessibility Issues Summary

| Issue                                                                     | Severity | WCAG     | Affected         |
| ------------------------------------------------------------------------- | -------- | -------- | ---------------- |
| No skip-navigation link                                                   | FIXED    | 2.4.1 A  | All pages        |
| Keyboard-inaccessible dropdown menus                                      | IMPROVED | 2.1.1 A  | Header component |
| Form validation mismatch (Company/Role marked required but not validated) | FIXED    | 3.3.1 A  | ContactForm      |
| Missing aria-labels on social links                                       | FIXED    | 2.4.4 AA | Footer           |
| Potential color contrast (gray on black)                                  | MEDIUM   | 1.4.3 AA | Multiple         |
| Cookie consent missing role="dialog"                                      | FIXED    | 4.1.2 A  | CookieConsent    |
| No focus management on mobile menu                                        | IMPROVED | 2.4.3 A  | Header           |

---

## 3. Competitor Landscape

### 3.1 Top Competitors

| Competitor      | URL            | Strength                                                                                  | Weakness                                            |
| --------------- | -------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Codelevate**  | codelevate.com | Ranks #1 for "AI automation agency Netherlands" via "Top 10" listicle. EN+NL. FAQ schema. | Self-promotional listicle, Webflow (slow), ad-heavy |
| **NinA AI**     | nina-ai.nl     | Strong brand, real client logos (Schiphol, Action), NL-primary, daily LinkedIn content    | Thin EN content, zero blog SEO, no schema           |
| **DataNorth**   | datanorth.ai   | 30+ service pages, EN+NL+DE, ISO badges, pricing shown, FAQ schema                        | Stock photos, generic content, WordPress            |
| **Flowmondo**   | flowmondo.com  | 420 reviews, deep n8n content, integration pages, AggregateRating schema                  | UK-only, no NL focus, no AI agents                  |
| **Crux Digits** | cruxdigits.nl  | Exact-match URL `/ai-agency-netherlands`, static (fast)                                   | Thin content, no blog, no real testimonials         |

### 3.2 Competitive Positioning Map

```
                    HIGH PRODUCTION FOCUS
                          |
              CodeHunter  |
                Lab *     |    Flowmondo
                          |
    CONSULTING -----------+----------- IMPLEMENTATION
    HEAVY                 |           HEAVY
         DataNorth        |
              NinA AI     |    Codelevate
                          |
                    LOW PRODUCTION FOCUS
```

**CHL's unique position**: The only agency combining **n8n expertise + AI agents + Next.js/React engineering + production handoff**. No competitor offers all four.

### 3.3 What Makes Competitors Rank

| Strategy                            | Who                   | Effectiveness           | CHL Should                              |
| ----------------------------------- | --------------------- | ----------------------- | --------------------------------------- |
| "Top 10 AI Agencies" listicle       | Codelevate            | **Highest** — ranks #1  | Create own authoritative version        |
| Year-in-title freshness (2026/2027) | Codelevate, Ploko     | High CTR boost          | Add year to key titles                  |
| Deep service taxonomy (30+ pages)   | DataNorth             | High long-tail coverage | Create more service pages               |
| Logo wall + ROI case studies        | NinA                  | Strong trust            | Add more case studies with hard numbers |
| Integration-specific pages          | Flowmondo             | Good long-tail          | Create n8n integration pages            |
| FAQ schema on service pages         | Codelevate, DataNorth | Rich snippets           | Add to all service pages                |
| NL translations                     | All NL competitors    | 60% of Dutch search     | **P0: Add NL locale**                   |

### 3.4 Keyword Opportunity Matrix

| Priority | Keyword                                | Current URL                                | Competition            | Action                          |
| -------- | -------------------------------------- | ------------------------------------------ | ---------------------- | ------------------------------- |
| **P0**   | AI automation agency Netherlands       | `/en/ai-automation-consulting-netherlands` | Moderate               | Add NL + schema                 |
| **P0**   | n8n consultant Netherlands             | _None_                                     | **Low**                | Create dedicated page           |
| **P0**   | NL translations (/nl/)                 | _None_                                     | **Zero**               | Add Dutch locale                |
| **P1**   | WhatsApp automation Netherlands        | Blog post only                             | **Low**                | Create service page             |
| **P1**   | AI voice agents Netherlands            | _None_                                     | **Near zero**          | Create page                     |
| **P1**   | AI consultants Netherlands             | `/en/ai-consulting`                        | Moderate               | Add "Netherlands" to title + NL |
| **P2**   | workflow automation agency Netherlands | `/en/ai-automation-consulting-netherlands` | Moderate               | Create dedicated page           |
| **P2**   | Next.js development agency             | `/en/nextjs-development-agency`            | High (directories)     | Add NL + schema                 |
| **P2**   | React consulting services              | `/en/react-consulting`                     | High (Indian agencies) | Add NL + schema                 |
| **P3**   | "Top 10 AI agencies Netherlands"       | _None_                                     | Moderate               | Publish listicle                |

### 3.5 Multilingual Gap Analysis

| Competitor         | EN        | NL    | ES  | DE  | Other |
| ------------------ | --------- | ----- | --- | --- | ----- |
| Codelevate         | Y         | Y     | N   | -   | -     |
| Ploko              | Y         | Y     | N   | -   | IT    |
| NinA AI            | Y (basic) | Y     | N   | -   | -     |
| DataNorth          | Y         | Y     | N   | Y   | -     |
| Flowmondo          | Y         | N     | N   | -   | -     |
| Crux Digits        | Y         | Y     | N   | -   | -     |
| EasyData           | N         | Y     | N   | -   | -     |
| **CodeHunter Lab** | Y         | **N** | Y   | -   | -     |

**Critical finding**: CHL is the only NL-based agency with ES content but zero NL content. Dutch SMEs overwhelmingly search in Dutch. The NL gap costs approximately 60% of potential organic traffic. Spanish is a unique differentiator — zero NL competitors offer ES content.

---

## 4. Architecture Decision: Astro vs. Next.js

### Assessment

The user expressed interest in migrating some pages to Astro. After analysis:

**Stay on Next.js for now.** Here's why:

| Factor                      | Astro                                 | Next.js (current)                    |
| --------------------------- | ------------------------------------- | ------------------------------------ |
| Zero-JS by default          | Yes — pages ship 0 JS unless islands  | Only with `'use client'` discipline  |
| Static generation           | Built-in, default                     | Via `generateStaticParams` + ISR     |
| i18n                        | Requires manual setup or `astro-i18n` | `next-intl` already working          |
| Dynamic routes              | Supported                             | Supported                            |
| SEO metadata                | Manual in frontmatter                 | `generateMetadata()` already working |
| Lab workspace (interactive) | Needs React island                    | Works as-is                          |
| Migration effort            | **3-4 weeks** for full rewrite        | 0                                    |
| Core Web Vitals             | Marginal improvement (already good)   | Good with proper optimization        |
| Interactive components      | Islands architecture                  | Conventional React                   |

### Recommendation

**Do not migrate to Astro now.** The current problems are content and metadata, not framework performance. The main CWV gains would come from:

1. Converting Framer Motion animations to CSS animations (accessible, no JS)
2. Lazy-loading client components that aren't above the fold
3. Proper image optimization (already using next/image)

**Consider Astro only if** a future audit shows persistent LCP/INP issues after the above optimizations.

### Pages where Astro could help (future consideration)

| Page                   | Interactive Elements                                           | JS Required | Astro Benefit         |
| ---------------------- | -------------------------------------------------------------- | ----------- | --------------------- |
| Home                   | HeroAnimation, ScrambleText, ROI Calculator, QuickWins 3D tilt | Yes (4)     | Low — too interactive |
| About                  | None (static)                                                  | No          | **High**              |
| Case Studies (listing) | None (static)                                                  | No          | **High**              |
| Insights (listing)     | None (static)                                                  | No          | **High**              |
| Industry landing pages | Only scroll animations                                         | Minimal     | **Medium**            |
| Lab landing            | None (static)                                                  | No          | **High**              |
| Lab workspace          | Dashboard with interactivity                                   | Yes         | None                  |

---

## 5. SEO Improvement Plan

### 5.1 P0 — Critical SEO Fixes (Week 1) — Completed in working tree

#### 5.1.1 Home Page Metadata Overhaul

**File:** `app/[locale]/page.tsx`

**Original state:** Static English metadata, no canonical, no alternates, no OG, no twitter.

**Status:** Completed. The home page now uses `generateMetadata`, shared metadata helpers, canonical URL, hreflang alternates for current locales, Open Graph, Twitter card, and keywords.

#### 5.1.2 Extract Shared Metadata Utility

Created `utils/metadata.ts` and `utils/constants.ts` to reduce duplicate `baseUrl` constants and standardize metadata generation.

Current utility coverage includes home, about, case-studies, insights, lab, ai-consulting, ai-automation-consulting-netherlands, and nextjs-development-agency. Extend it to remaining service, industry, expertise, and insight detail pages in the next pass.

#### 5.1.3 Add Structured Data to All Service Pages

Created schema helpers, but visible FAQ sections and page-level schema usage still need to be wired into service pages. Currently only the root layout has JSON-LD (Organization, LocalBusiness, Person, WebSite). Individual pages need:

| Schema Type    | Pages                            | Priority |
| -------------- | -------------------------------- | -------- |
| FAQPage        | All service + industry pages     | P0       |
| Service        | All service pages                | P0       |
| BreadcrumbList | All pages (missing on 15+ pages) | P0       |
| LocalBusiness  | Already on root (good)           | -        |
| Article        | All insights/blog pages          | P1       |

**Components created:** `components/ui/FAQSchema.tsx` and `components/ui/ServiceSchema.tsx`.

#### 5.1.4 Standardize Title Format

**Current inconsistency:**

- `"AI Automation Agency Netherlands | CodeHunter Lab"` (pipe)
- `"IT System Integration Netherlands — CodeHunter Lab"` (em-dash)
- `"CodeHunter Lab | Product Systems for Modern Teams"` (brand-first)

**Target format:** `"{Page Title} | CodeHunter Lab"` (always pipe, always brand last)

Exception: Home page can be `"CodeHunter Lab | AI Automation Agency Netherlands"` (brand first for home only). High-priority pages now follow the shared metadata pattern; continue standardizing remaining pages.

#### 5.1.5 Fix Missing Hreflang on Key Pages

| Page         | Current                   | Target                     |
| ------------ | ------------------------- | -------------------------- |
| Home         | Fixed for current locales | Add NL when `/nl` launches |
| About        | Fixed for current locales | Add NL when `/nl` launches |
| Case Studies | Fixed for current locales | Add NL when `/nl` launches |
| Insights     | Fixed for current locales | Add NL when `/nl` launches |

### 5.2 P1 — High-Impact SEO (Weeks 2-3)

#### 5.2.1 Add Dutch (NL) Locale

**Current:** `locales: ["en", "es"]`
**Target:** `locales: ["en", "es", "nl"]`

**Steps:**

1. Create `messages/nl.json` with full Dutch translations
2. Update `i18n/routing.ts` to add `"nl"` locale
3. Update `middleware.ts` matcher to include `/nl/` routes
4. Update all `generateMetadata` functions with NL alternates
5. Add NL sitemap entries
6. Update `vercel.json` redirect root to consider NL

**Priority pages for NL translation:**

1. Home page
2. `/ai-consulting`
3. `/ai-automation-consulting-netherlands`
4. `/dental-clinic-automation-netherlands`
5. All industry pages
6. `/expertise/ai-agents-automation`

#### 5.2.2 Add FAQ Sections to Service Pages

Add FAQ sections with `FAQPage` schema to:

1. `/en/ai-consulting`
2. `/en/ai-automation-consulting-netherlands`
3. `/en/expertise/ai-agents-automation`
4. `/en/expertise/n8n-migration-consulting`
5. `/en/dental-clinic-automation-netherlands`
6. `/en/nextjs-development-agency`

Pattern: 5-8 questions per page, matching search intent from "People Also Ask" results.

#### 5.2.3 Add Twitter Cards to All Remaining Pages

The shared `createPageMetadata` utility now includes Twitter card metadata. Apply it to remaining pages that still define metadata manually.

#### 5.2.4 Fix InsightsSection Hardcoded Locale — Completed

**Status:** Completed. Links are now locale-aware.

### 5.3 P2 — Medium SEO (Weeks 3-4)

#### 5.3.1 Add Keywords to All Pages

Pages missing keywords: home, about, case-studies, insights, ai-consulting, lab, ai-automation-consulting-netherlands, dental-clinic-automation-netherlands.

#### 5.3.2 Optimize Meta Descriptions

Current descriptions are generic. Make them:

- 150-160 characters (not truncated)
- Include primary keyword
- Include a CTA or value proposition
- Unique per page

#### 5.3.3 Add Service Schema to Service Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation Consulting Netherlands",
  "provider": { "@id": "https://www.codehunterlab.com/#organization" },
  "areaServed": { "@type": "Country", "name": "Netherlands" },
  "serviceType": "AI Automation Consulting"
}
```

---

## 6. Accessibility Improvement Plan

### 6.1 P0 — Critical Accessibility Fixes (Week 1) — Completed/Improved

#### 6.1.1 Add Skip Navigation Link

Status: completed. Added as the first focusable element in `app/[locale]/layout.tsx`:

```html
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-lg focus:bg-hunter-green focus:px-4 focus:py-2 focus:text-near-black focus:outline-none"
>
  Skip to main content
</a>
```

Also added `id="main-content"` to the main content wrapper.

#### 6.1.2 Fix Keyboard Dropdown Navigation

**Original state:** Header dropdown menus used `onMouseEnter`/`onMouseLeave` only.
**Status:** Improved. Header now includes dropdown ARIA attributes and keyboard handlers. Remaining polish: run a browser/screen-reader pass for arrow-key navigation and focus return behavior.

Target behavior remains:

- `onKeyDown` handler for Enter/Space/Escape
- `aria-expanded` on trigger buttons
- `aria-haspopup="menu"` on parent items
- `role="menu"` on dropdown containers
- `role="menuitem"` on links
- Focus trap within open menu
- Arrow key navigation between menu items

**Implementation note:** Current implementation avoids adding Radix UI. Add a dependency only if manual browser testing shows remaining menu behavior gaps.

#### 6.1.3 Fix Form Validation Mismatch

**Original state:** Company, Role, AI Goal inputs were marked `required` in HTML but not validated in `validateForm()`.

**Status:** Completed by validating the required fields.

### 6.2 P1 — Important Accessibility Fixes (Week 2)

#### 6.2.1 Add aria-labels to Footer Social Links — Completed

Footer LinkedIn and Email icon links now have accessible labels.

#### 6.2.2 Add role="dialog" to Cookie Consent — Completed/Improved

Cookie consent banner now has dialog semantics. Remaining polish: verify focus trap and return-focus behavior in browser testing.

#### 6.2.3 Color Contrast Verification

Audit these Tailwind classes against WCAG AA (4.5:1):

- `text-gray-400` on `bg-near-black` (#0B0B0B) — likely fails
- `text-gray-500` on `bg-near-black` — likely fails
- `text-gray-600` on `bg-near-black` — likely passes for large text only

**Target:** Use `text-gray-300` instead of `text-gray-400/500` for body text on dark backgrounds.

#### 6.2.4 Mobile Menu Focus Management

When the mobile menu opens: focus first menu item, trap focus within menu, on close return focus to hamburger button, add `aria-expanded` toggle on the trigger.

### 6.3 P2 — Medium Accessibility (Week 3)

#### 6.3.1 Heading Hierarchy Audit

Ensure every page has exactly one `<h1>`, proper heading order, no `<h1>` in section components that are used alongside other sections with `<h1>`.

#### 6.3.2 ContactForm Accessibility Polish

Ensure `aria-checked` toggles on radio items, add `aria-live="polite"` for form submission status, verify error message associations via `aria-describedby`.

---

## 7. Component Architecture Cleanup

### 7.1 Extract Shared Constants

**Status:** Completed for the new shared metadata path. Continue removing duplicate local constants as remaining pages move to `createPageMetadata`.

Created `utils/constants.ts`:

```typescript
export const BASE_URL = "https://www.codehunterlab.com";
export const SITE_NAME = "CodeHunter Lab";
export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
```

### 7.2 Create Shared Metadata Generator

**Status:** Completed. Created `utils/metadata.ts` with `createPageMetadata`, `localizedUrl`, and `localizedAlternates`.

### 7.3 Extract Animation Variants

**Current:** `containerVariants` and `cardVariants` are nearly identical in WhatWeBuildSection, IndustriesSection, and QuickWinsSection.
**Target:** Create `utils/animations.ts` with reusable `staggerContainer` and `fadeUpCard` variants.

### 7.4 Extract Locale Warning Banner

**Current:** Identical Spanish-language warning banner duplicated in case-studies and insights pages.
**Target:** Create `components/ui/LocaleBanner.tsx`.

### 7.5 Remove Unused Components

- `GlassCard.tsx` — verified still imported; keep it.
- `AIBanner.tsx` — completed. Removed `'use client'`; it now renders as a Server Component.

### 7.6 PageContent.tsx Decomposition (Low Priority)

Each `PageContent.tsx` is monolithic (200-400 lines). Consider decomposing into section components:

```
components/sections/ai-consulting/
  +-- HeroSection.tsx
  +-- ProblemSection.tsx
  +-- ServicesSection.tsx
  +-- FAQSection.tsx
```

Priority: Low — these work as-is but will become harder to maintain as content grows.

---

## 8. Performance Optimization

### 8.1 Reduce Client-Side JavaScript

| Component                 | Current                        | Optimization                                        | Estimated Saving |
| ------------------------- | ------------------------------ | --------------------------------------------------- | ---------------- |
| `AIBanner.tsx`            | Server Component               | Completed                                           | ~2KB             |
| `WhatWeBuildSection.tsx`  | `'use client'` (Framer Motion) | Replace with CSS transitions                        | ~8KB             |
| `IndustriesSection.tsx`   | `'use client'` (Framer Motion) | Replace with CSS transitions + IntersectionObserver | ~8KB             |
| `04BioSection.tsx`        | `'use client'` (Framer Motion) | Replace with CSS transitions                        | ~5KB             |
| `TestimonialsSection.tsx` | `'use client'` (Framer Motion) | Replace with CSS transitions                        | ~5KB             |

**Total potential savings:** ~28KB of client JS by replacing Framer Motion scroll animations with CSS-only equivalents.

### 8.2 Framer Motion Strategy

**Short term:** Use `LazyMotion` with `domAnimation` (already done in `MotionProvider.tsx`). This reduces the bundle from ~30KB to ~10KB.

**Medium term:** For pages with only scroll-reveal animations (fade in, slide up), replace Framer Motion with CSS `@starting-style` + `animation-timeline: view()` or a lightweight `IntersectionObserver` hook. Reserve Framer Motion for truly interactive elements (TopAgentsSection typing effect, QuickWinsSection 3D tilt, ROICalculator).

### 8.3 Image + Font Optimization

- Convert `logo-hntr.png` and `logo-hntr.webp` to AVIF (already configured in next.config.mjs)
- Add `priority` prop to hero images
- Add `loading="lazy"` to all below-fold images
- Verify `sizes` prop on all `<Image>` components
- Fonts already use `next/font/google` (good)

---

## 9. New Pages & Content Strategy

### 9.1 New Pages to Create (Priority Order)

| #   | Route                                        | Keywords                                                          | Competition                 | Priority |
| --- | -------------------------------------------- | ----------------------------------------------------------------- | --------------------------- | -------- |
| 1   | `/en/n8n-consultant-netherlands`             | n8n consultant Netherlands, n8n expert, n8n migration             | **Low**                     | P0       |
| 2   | `/en/ai-voice-agents-netherlands`            | AI voice agents Netherlands, AI phone agents, voice AI consulting | **Near zero**               | P0       |
| 3   | `/en/whatsapp-automation-netherlands`        | WhatsApp automation Netherlands, WhatsApp Business API            | **Low**                     | P1       |
| 4   | `/en/workflow-automation-agency-netherlands` | workflow automation agency Netherlands                            | Moderate                    | P2       |
| 5   | `/en/ai-agents-for-business`                 | AI agents for business, business AI automation                    | Moderate                    | P2       |
| 6   | `/nl/` versions of top 5 pages               | Dutch-language equivalents                                        | **Zero** (no NL competitor) | P0       |

### 9.2 Content Requirements for Each New Page

Every new service page must include:

1. **Unique H1** with primary keyword
2. **150-160 character meta description** with keyword + CTA
3. **3-5 sections** with H2 headings targeting secondary keywords
4. **FAQ section** (5-8 questions) with `FAQPage` schema
5. **Service schema** (JSON-LD)
6. **BreadcrumbList schema**
7. **Canonical URL** + full hreflang alternates
8. **Open Graph + Twitter** metadata
9. **Internal links** to related services and case studies
10. **CTA** linking to contact form or consultation booking

### 9.3 Competitive Content Gaps to Fill

| Content Type                              | Competitor Doing It          | CHL Gap                      | Action                                           |
| ----------------------------------------- | ---------------------------- | ---------------------------- | ------------------------------------------------ |
| "Top 10 AI Agencies Netherlands" listicle | Codelevate (#1 ranking)      | None                         | Create authoritative version                     |
| Case studies with hard ROI numbers        | NinA (192hr/month saved)     | 2 case studies, soft numbers | Add 3-5 case studies with specific %/EUR metrics |
| Integration-specific pages                | Flowmondo (60+ tool pages)   | None                         | Create n8n integration pages                     |
| Pricing transparency                      | DataNorth (EUR 3,000 stated) | Partial (packages section)   | Add starting prices to all service pages         |
| Team photos and bios                      | NinA, Flowmondo              | Single bio section           | Expand with team page                            |
| Clutch/DesignRush/Sortlist profiles       | Codelevate, Crux Digits      | None                         | Create profiles on all three                     |

### 9.4 Spanish (ES) Competitive Advantage

No NL competitor offers ES content. This is a unique differentiator:

- Create `/es/automatizacion-ia-consultoria` (AI automation consulting in Spanish)
- Target Spanish-speaking businesses in NL and broader EU
- Cross-link between EN/ES/NL versions for internal link equity
- Consider ES content marketing (LinkedIn articles in Spanish)

### 9.5 New Page Content Briefs

#### E.1 `/en/n8n-consultant-netherlands`

**Title:** `n8n Consultant Netherlands | Expert Workflow Automation | CodeHunter Lab`
**Description:** `Hire an n8n consultant in the Netherlands. Migration, custom workflows, and production-grade automation. Based in Leiden.`
**Keywords:** n8n consultant Netherlands, n8n expert, n8n migration, workflow automation, n8n development
**Sections:**

1. Hero: "Your n8n workflows should run in production, not in demos"
2. What we automate with n8n (CRM sync, email sequences, WhatsApp bots, reporting)
3. n8n migration consulting (Zapier/Make to n8n)
4. How it works (3 steps)
5. FAQ (8 questions targeting "People Also Ask" queries)
6. CTA

#### E.2 `/en/ai-voice-agents-netherlands`

**Title:** `AI Voice Agents Netherlands | Automated Phone & WhatsApp Calls | CodeHunter Lab`
**Description:** `Deploy AI voice agents for your Netherlands business. Automated phone calls, WhatsApp voice, and conversational AI. Based in Leiden.`
**Keywords:** AI voice agents Netherlands, AI phone agents, voice AI consulting, automated calling, conversational AI Netherlands
**Sections:**

1. Hero: "AI voice agents that handle calls while you focus on delivery"
2. Use cases (appointment scheduling, follow-up calls, customer support)
3. How our voice agents work
4. Industries (dental, physiotherapy, real estate)
5. FAQ (8 questions)
6. CTA

#### E.3 `/en/whatsapp-automation-netherlands`

**Title:** `WhatsApp Automation Netherlands | Business API Integration | CodeHunter Lab`
**Description:** `Automate WhatsApp for your Netherlands business. Appointment reminders, lead qualification, and customer support via WhatsApp Business API.`
**Keywords:** WhatsApp automation Netherlands, WhatsApp Business API, WhatsApp chatbot Netherlands, automated messaging
**Sections:**

1. Hero: "WhatsApp is where your customers are. Automate it."
2. What WhatsApp automation handles (appointments, follow-ups, support)
3. Integration with n8n and CRM
4. Case study: dental clinic 35% no-show reduction
5. FAQ (8 questions)
6. CTA

---

## 10. Implementation Phases

### Phase 1: Critical Fixes (Week 1) — Completed in working tree

| #    | Task                                                         | Files Affected                  | Status                                        |
| ---- | ------------------------------------------------------------ | ------------------------------- | --------------------------------------------- |
| 1.1  | Create `utils/constants.ts` with `BASE_URL`                  | New file                        | Done                                          |
| 1.2  | Create `utils/metadata.ts` with `createPageMetadata` utility | New file                        | Done                                          |
| 1.3  | Fix home page metadata (canonical, hreflang, OG, twitter)    | `app/[locale]/page.tsx`         | Done                                          |
| 1.4  | Add skip-navigation link                                     | `app/[locale]/layout.tsx`       | Done                                          |
| 1.5  | Fix keyboard dropdown navigation in Header                   | `components/layout/Header.tsx`  | Improved; browser a11y pass still recommended |
| 1.6  | Fix form validation mismatch (Company/Role/AI Goal)          | `components/ui/ContactForm.tsx` | Done                                          |
| 1.7  | Standardize title format on high-priority pages              | Selected `page.tsx` files       | Partially done; continue for remaining pages  |
| 1.8  | Add missing hreflang to about, case-studies, insights pages  | 3 page files                    | Done for current locales                      |
| 1.9  | Add missing twitter cards via metadata utility               | Selected `page.tsx` files       | Partially done; continue for remaining pages  |
| 1.10 | Create `FAQSchema.tsx` component                             | New file                        | Done                                          |
| 1.11 | Create `ServiceSchema.tsx` component                         | New file                        | Done                                          |

### Phase 2: Schema & SEO (Weeks 2-3) — Partially Complete

| #    | Task                                                                                                    | Files Affected                            | Estimated Time                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 2.1  | Add visible FAQ sections to all service pages; avoid commercial `FAQPage` JSON-LD unless policy changes | All service `PageContent.tsx` files       | Commercial `FAQPage` JSON-LD removed and guarded by test; continue visible FAQ improvements as needed |
| 2.2  | Add `ServiceSchema` usage to all service pages                                                          | All service `page.tsx` files              | Primary 3 done; continue remaining service pages                                                      |
| 2.3  | Add BreadcrumbList schema to all pages missing it                                                       | 15+ `page.tsx` files                      | 2h                                                                                                    |
| 2.4  | Fix InsightsSection hardcoded locale bug                                                                | `components/sections/InsightsSection.tsx` | Done                                                                                                  |
| 2.5  | Add keywords to all pages missing them                                                                  | Remaining `page.tsx` files                | Partially done                                                                                        |
| 2.6  | Extract animation variants to `utils/animations.ts`                                                     | New file + 3 section components           | 1h                                                                                                    |
| 2.7  | Extract LocaleBanner component                                                                          | New file + 2 pages                        | 30min                                                                                                 |
| 2.8  | Keep GlassCard component                                                                                | `components/ui/GlassCard.tsx`             | Done; component is still used                                                                         |
| 2.9  | Convert AIBanner to Server Component                                                                    | `components/sections/AIBanner.tsx`        | Done                                                                                                  |
| 2.10 | Add aria-labels to footer social links                                                                  | `components/layout/Footer.tsx`            | Done                                                                                                  |
| 2.11 | Add role="dialog" to CookieConsent                                                                      | `components/ui/CookieConsent.tsx`         | Done                                                                                                  |
| 2.12 | Fix Prettier/ESLint warnings from changed files                                                         | Multiple changed files                    | Recommended before commit                                                                             |

### Phase 3: Dutch Locale + New Pages (Weeks 3-5) — ~25 hours

| #    | Task                                                             | Files Affected                           | Estimated Time |
| ---- | ---------------------------------------------------------------- | ---------------------------------------- | -------------- |
| 3.1  | Add NL locale to `i18n/routing.ts`                               | 1 file                                   | 15min          |
| 3.2  | Create `messages/nl.json` with full NL translations              | New file (~3200 lines)                   | 6h             |
| 3.3  | Update middleware to handle `/nl/` routes                        | `middleware.ts`                          | 30min          |
| 3.4  | Create NL versions of top 5 pages                                | 5 new page files                         | 4h             |
| 3.5  | Update sitemap with NL URLs                                      | `app/sitemap.ts`                         | 1h             |
| 3.6  | Create `/en/n8n-consultant-netherlands` page                     | 2 new files (page.tsx + PageContent.tsx) | 3h             |
| 3.7  | Create `/en/ai-voice-agents-netherlands` page                    | 2 new files                              | 3h             |
| 3.8  | Create `/en/whatsapp-automation-netherlands` service page        | 2 new files                              | 3h             |
| 3.9  | Add alternates for all new pages                                 | All relevant page.tsx                    | 1h             |
| 3.10 | Create "Top AI Automation Agencies Netherlands" listicle insight | `content/insights.ts` + new page         | 3h             |

### Phase 4: Performance & Polish (Weeks 5-6) — ~20 hours

| #   | Task                                                     | Files Affected                 | Estimated Time |
| --- | -------------------------------------------------------- | ------------------------------ | -------------- |
| 4.1 | Replace Framer Motion scroll reveals with CSS animations | 5 section components           | 6h             |
| 4.2 | Color contrast audit and fixes                           | Multiple components            | 2h             |
| 4.3 | Mobile menu focus management                             | `components/layout/Header.tsx` | 2h             |
| 4.4 | Optimize heading hierarchy across all pages              | Multiple components            | 2h             |
| 4.5 | Add year freshness to key page titles                    | All service page.tsx           | 1h             |
| 4.6 | Create integration-specific pages (n8n + HubSpot, etc.)  | New pages                      | 6h             |
| 4.7 | Add Clutch/DesignRush/Sortlist profile links             | Footer + about page            | 1h             |

---

## 11. AutoSkills Guidance

`npx autoskills --dry-run` detected 13 relevant skills for this codebase:

- `react-best-practices`
- `composition-patterns`
- `next-best-practices`
- `next-cache-components`
- `next-upgrade`
- `tailwind-css-patterns`
- `typescript-advanced-types`
- `deploy-to-vercel`
- `nodejs-backend-patterns`
- `nodejs-best-practices`
- `frontend-design`
- `accessibility`
- `seo`

### How this changes the plan

- Current work already aligns with installed/equivalent Next.js, React, SEO, accessibility, and frontend skills.
- Do not install extra skills or dependencies just for this pass.
- Future implementation should use `tailwind-css-patterns` before broad Tailwind cleanup, `composition-patterns` before decomposing large `PageContent.tsx` files, and `next-cache-components`/`next-upgrade` only if upgrading beyond the current Next.js 14 App Router setup.
- Use `deploy-to-vercel` only when preparing CI/deployment changes, not for local SEO/content work.

---

## Appendix A: Metadata Pattern Reference

Every page must follow this pattern (via the `createPageMetadata` utility):

```typescript
import type { Metadata } from "next";
import {
  BASE_URL,
  LOCALES,
  SITE_NAME,
  getOpenGraphLocale,
  normalizeLocale,
} from "@/utils/constants";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string; // e.g., '/ai-consulting' with no locale prefix
  locale: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  imagePath?: string;
};

export function localizedUrl(locale: string, path = "") {
  const normalizedLocale = normalizeLocale(locale);
  return `${BASE_URL}/${normalizedLocale}${path}`;
}

export function localizedAlternates(path = "") {
  return {
    ...Object.fromEntries(LOCALES.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])),
    "x-default": `${BASE_URL}/en${path}`,
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  keywords,
  type = "website",
  imagePath,
}: CreatePageMetadataInput): Metadata {
  const normalizedLocale = normalizeLocale(locale);
  const url = localizedUrl(normalizedLocale, path);
  const image = imagePath ?? `/${normalizedLocale}/opengraph-image`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: localizedAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: getOpenGraphLocale(normalizedLocale),
      images: [{ url: `${BASE_URL}${image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
  };
}
```

## Appendix B: FAQ Schema Pattern

```typescript
// components/ui/FAQSchema.tsx
type FAQItem = { question: string; answer: string };

export default function FAQSchema({ items }: { items: FAQItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }),
      }}
    />
  );
}
```

## Appendix C: Skip Navigation Pattern

```html
<!-- Add as first element in layout.tsx body -->
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-hunter-green focus:px-4 focus:py-2 focus:text-near-black focus:outline-none"
>
  Skip to main content
</a>

<!-- Add to main element -->
<main id="main-content">{children}</main>
```

## Appendix D: Keyboard Dropdown Menu Pattern

```tsx
// Simplified accessible dropdown
<button
  aria-expanded={isOpen}
  aria-haspopup="menu"
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
    if (e.key === "Escape") {
      close();
    }
  }}
>
  {label}
</button>;
{
  isOpen && (
    <ul
      role="menu"
      onKeyDown={(e) => {
        /* arrow key navigation */
      }}
    >
      <li role="none">
        <a role="menuitem" href="...">
          Link
        </a>
      </li>
    </ul>
  );
}
```

---

_End of document. Current code changes remain uncommitted for manual review and commit by the user._
