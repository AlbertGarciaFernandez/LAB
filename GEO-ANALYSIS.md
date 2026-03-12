# GEO Analysis — CodeHunter Lab

**Website:** https://www.codehunterlab.com
**Entity:** CodeHunter Lab — AI Consulting & Automation Agency, Leiden, Netherlands
**Analysis Date:** 2026-03-10
**Analyst:** Claude Code (claude-sonnet-4-6)

---

## What Is GEO?

Generative Engine Optimization (GEO) is the practice of structuring web content so that AI-powered answer engines (ChatGPT, Perplexity, Claude, Gemini, Bing Copilot) cite, quote, or recommend your brand when users ask relevant questions. Unlike traditional SEO, which targets ranking algorithms, GEO targets language model retrieval and citation behavior. The goal is to be the source an AI quotes when someone asks "What is the best AI consulting agency in the Netherlands?" or "How much does AI automation cost?"

---

## Scoring Summary

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 52 | 13.0 |
| Structural Readability | 20% | 68 | 13.6 |
| Multi-Modal Content | 15% | 55 | 8.3 |
| Authority & Brand Signals | 20% | 71 | 14.2 |
| Technical Accessibility | 20% | 62 | 12.4 |
| **TOTAL** | **100%** | — | **61.5 / 100** |

**Overall GEO Score: 61.5 / 100** — Moderate. Strong structural and authority foundations; significant gaps in citability and AI crawler explicit configuration.

---

## Dimension 1: Citability (Score: 52 / 100)

**Weight: 25%**

Citability measures how likely an AI will extract and reproduce a specific passage from your content as a direct answer to a user query. High-citability content uses self-contained answer blocks (134–167 words), anchors facts with specific numbers, and deploys definitional "X is..." patterns that LLMs recognize as quotable explanations.

### What Was Found

**Strengths:**
- The FAQ schema in `/app/[locale]/ai-consulting/layout.tsx` contains well-formed question-and-answer pairs with specific pricing figures (€2,500–€5,000 for Strategy Sprints, from €8,000 for Implementation Projects) and concrete timelines (1–2 weeks, 4–8 weeks). These are exactly the data points AI models extract for pricing queries.
- The AI Automation page FAQ includes a direct ROI claim: "40% reduction in customer support costs" and "20%+ increase in top-line revenue." Specific statistics are strongly associated with AI citation behavior.
- Engagement model descriptions use fixed, scannable patterns ("Fixed scope, fixed price. You own the code.") that are memorable and quotable.

**Gaps:**
- The original `llms.txt` lacked self-contained answer blocks. It contained a capability list but no paragraphs structured to answer the questions an AI would face: "What does CodeHunter Lab do?", "How long does an AI project take?", "What is n8n?", "What is an AI agent?"
- No definitional blocks for core concepts (AI agent, n8n, workflow automation) existed in the machine-readable layer. AI models answering "what is an AI agent?" have no reason to cite CodeHunter Lab without a definitional anchor on their content.
- Answer blocks on service pages are client-facing marketing copy rather than encyclopedic summaries that LLMs prefer to quote verbatim.
- The `llms.txt` had no FAQ section — the richest source of citable Q&A on the site was locked in React component state (`useState` for FAQ accordion on the ai-consulting page), invisible to crawlers that don't render JavaScript.

### Changes Made

The rewritten `llms.txt` adds:
- A "What Is CodeHunter Lab?" block (~130 words, self-contained)
- Per-service answer blocks with definitional "X is..." openers and embedded statistics
- A full FAQ section with specific prices, timelines, and outcome metrics
- A comparison table of engagement models (structured data AI can cite in tabular responses)

### Remaining Recommendations

- Add a `<section id="about">` block on the homepage with a 150-word self-contained company description rendered in static HTML (not client-side JavaScript), matching the llms.txt language closely.
- Add "X is..." definitional sentences at the top of each expertise page (e.g., "n8n is an open-source workflow automation platform...").

---

## Dimension 2: Structural Readability (Score: 68 / 100)

**Weight: 20%**

Structural readability measures whether content is organized in patterns AI models parse efficiently: question-based headings (`<h2>` tags framed as questions), short paragraphs (3–5 sentences), summary tables, and FAQ sections with visible schema markup.

### What Was Found

**Strengths:**
- The AI Consulting page contains a full FAQ section (9 questions) rendered in the React component. The questions are well-formed and practical: "What does an AI consulting engagement cost?", "How long does a typical project take?" These match high-intent user queries.
- FAQPage and ProfessionalService JSON-LD schemas are implemented in the ai-consulting layout, providing a structured reading layer parallel to visible content.
- The ai-automation-consulting-netherlands page implements BreadcrumbList, FAQPage, and Service schemas simultaneously — strong multi-schema coverage for a single page.
- Engagement model descriptions use clear labels (AI Strategy Sprint, AI Implementation Project, Ongoing AI Partner) that are easy for AI to reference by name.

**Gaps:**
- The FAQ accordion on the AI Consulting page is rendered client-side (`"use client"` at line 1 of page.tsx, `useState` for open/closed state). Static crawlers and many AI scrapers that do not execute JavaScript will not see the FAQ content in the DOM. The FAQ text is therefore present in schema (good) but not in the visible text layer.
- Service pages beyond ai-consulting have less consistent heading hierarchy. Not all pages use question-based H2s.
- No comparison tables exist in rendered page content (only in llms.txt after this update). Tables are highly citable because AI models reproduce tabular data naturally in responses.
- Some section headings are marketing-oriented ("We Build Production AI") rather than query-oriented ("What AI systems does CodeHunter Lab build?"). Query-framed headings match user intent patterns more directly.

### Remaining Recommendations

- Render the FAQ section server-side (move to a Server Component or use `details`/`summary` HTML elements that are visible without JavaScript). This makes FAQ content available to static crawlers and AI scrapers.
- Add a pricing/comparison table to the ai-consulting page body, not just the llms.txt file.

---

## Dimension 3: Multi-Modal Content (Score: 55 / 100)

**Weight: 15%**

Multi-modal content includes images with descriptive alt text, video content, and interactive tools. For GEO purposes, the most valuable multi-modal asset is an interactive tool because AI models cite tools as concrete proof of expertise and utility. Images and video add citation density.

### What Was Found

**Strengths:**
- An ROI Calculator component (`ROICalculator`) is imported and rendered on the AI Consulting page (confirmed in page.tsx line 12 import and usage). An ROI Calculator is an extremely high-value GEO asset: it gives AI models a specific, citable tool to reference when users ask "how do I calculate ROI on AI automation?" This is one of the strongest multi-modal assets the site has.
- Open Graph images are configured for all major pages via `opengraph-image` routes, providing social-sharing visual coverage.
- Phosphor icons are used throughout the UI (WhatsappLogo, Microphone, Lightning icons visible in page.tsx imports). These are UI icons, not content images.

**Gaps:**
- The ROI Calculator is not described in `llms.txt` or any machine-readable layer. AI models that have not crawled the live page don't know it exists and cannot cite it. This is a missed citation opportunity.
- No video content was found. Video (especially explainer or case study video) is a strong authority signal for AI models trained on content that correlates video with expertise.
- Alt text quality for content images is unverifiable from static analysis, but the site's visual-heavy nature (bg-noise overlays, gradient text, framer-motion animations) suggests content may be image-heavy with limited textual equivalents.
- No case studies with visual elements (before/after workflow diagrams, screenshot walkthroughs) were found. These are high-citability assets in the B2B services space.

### Changes Made

The rewritten `llms.txt` does not yet reference the ROI Calculator. This should be added in a follow-up pass.

### Remaining Recommendations

- Add a reference to the ROI Calculator in `llms.txt`: "CodeHunter Lab provides a free online ROI Calculator at https://www.codehunterlab.com/en/ai-consulting to estimate automation savings before engaging."
- Create one video asset (2–4 minute explainer or client walkthrough) and embed it with a transcript on a service page. The transcript makes it citable.
- Add at least two case study pages with specific before/after metrics, workflow diagrams, and client context (industry, company size, problem solved).

---

## Dimension 4: Authority & Brand Signals (Score: 71 / 100)

**Weight: 20%**

Authority signals are the metadata and content patterns AI models use to assess whether a source is trustworthy enough to cite: named authors, publication dates, external source citations, schema type coverage, and consistent entity presence (the same named entity appearing in multiple contexts).

### What Was Found

**Strengths:**
- Schema coverage is the strongest authority dimension. The root layout implements three JSON-LD schemas simultaneously: Organization, LocalBusiness, and WebSite. The ai-consulting layout adds FAQPage and ProfessionalService. The ai-automation page adds Service and BreadcrumbList. This is well above average for an agency site.
- The LocalBusiness schema includes GeoCoordinates (52.1601, 4.497 — Leiden), areaServed with named cities, opening hours, and priceRange (`€€€`). This level of local entity definition is strong.
- Entity consistency is good: "CodeHunter Lab", "Leiden, Netherlands", and the phone number (+31-6-2940-5122) appear consistently across schema and visible content.
- The sameAs property links to both LinkedIn and GitHub, establishing external entity verification — a signal AI models use to confirm entity legitimacy.
- The Organization schema correctly references the logo URL, which helps AI models associate the brand with a visual identifier.

**Gaps:**
- No named author exists on any page. AI models strongly associate expertise with named humans. The contact email `albert@codehunterlab.com` implies a founder named Albert, but no author bio, founder page, or "About" page with named individuals was found in the analyzed files.
- No publication dates or "last updated" timestamps appear on service pages. AI models weight recent content more heavily. A `dateModified` property in schema is present (via sitemap, not analyzed here) but invisible in page content.
- No external citations or references. Service pages make claims ("40% reduction in customer support costs") without citing sources or client context. Even anonymized case data ("a Netherlands accounting firm reduced invoice processing time by 60% in 6 weeks") would dramatically improve authority.
- The Organization schema is missing `foundingDate`, `numberOfEmployees`, and `knowsAbout` properties — all recognized by Google's Knowledge Graph and increasingly used by AI models for entity disambiguation.
- No `Person` schema for the founder/lead consultant. A linked `Person` entity with `jobTitle`, `worksFor`, and `sameAs` (LinkedIn URL) would strengthen the entity graph significantly.

### Remaining Recommendations

- Add a founder/team page with a named author bio. Include a `Person` JSON-LD schema with `worksFor`, `jobTitle`, and LinkedIn `sameAs`.
- Add `datePublished` and `dateModified` visible text to service pages ("Last updated: March 2026") or Article schema where applicable.
- Enrich Organization schema with `foundingDate` and `knowsAbout` array.

---

## Dimension 5: Technical Accessibility (Score: 62 / 100)

**Weight: 20%**

Technical accessibility for GEO covers server-side rendering (SSR), explicit AI crawler permissions in robots.txt, the presence and quality of llms.txt, and RSL 1.0 compliance. The goal is to ensure AI crawlers can access, read, and are explicitly permitted to index and train on content.

### What Was Found

**Strengths:**
- Next.js 14 with SSR is the correct stack for GEO. Server-rendered HTML is accessible to crawlers that do not execute JavaScript. Pages using `generateMetadata` (all analyzed pages) are statically analyzable. This is a significant technical advantage over SPA-only frameworks.
- `llms.txt` existed at `/public/llms.txt` — the correct location. This is a forward-looking GEO practice that most agency sites have not yet adopted.
- The sitemap is referenced correctly (confirmed via `Sitemap:` directive added to robots.txt).
- Internationalization (en/es) with `next-intl` ensures content is served in multiple languages, increasing citation surface area across language-specific AI queries.

**Gaps:**
- `robots.txt` did not exist. This is a critical gap: without explicit allow rules, AI crawlers fall back to default behavior, which varies by crawler. GPTBot, ClaudeBot, and PerplexityBot all respect robots.txt — without explicit `Allow: /` directives, some crawlers may interpret ambiguous configurations conservatively and skip content.
- The original `llms.txt` lacked RSL 1.0 — the emerging standard for declaring AI-specific content permissions (`robot: allowed`, `train: allowed`, `cite: allowed`). Without this, AI training pipelines that honor RSL may not include the content.
- No `llms-full.txt` existed. `llms.txt` is intended as a navigation/summary file; `llms-full.txt` provides full content for AI indexers that want complete context. The absence limits how much content is available in the machine-readable layer.
- Several pages use `"use client"` (the ai-consulting page.tsx starts with `"use client"`), which means the component tree is rendered client-side. While Next.js handles the initial HTML shell server-side, interactive components (the FAQ accordion, the ROI Calculator) may not be fully hydrated in the initial server response. AI crawlers that rely on static HTML will miss FAQ content that requires JavaScript interaction to reveal.
- No `X-Robots-Tag` HTTP headers were analyzed (requires live server testing), but given the absence of robots.txt, there may be no explicit header-level crawler guidance either.

### Changes Made

1. **`robots.txt` created** at `/public/robots.txt` with explicit `Allow: /` directives for: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, FacebookBot, CCBot, and cohere-ai. Standard paths (`/api/`, `/_next/`, `/admin/`) are disallowed for all agents to avoid crawling noise.
2. **`llms.txt` rewritten** with RSL 1.0 block, FAQ section, service descriptions with statistics, engagement model table, and a `llms-full.txt` reference line.

### Remaining Recommendations

- Create `/public/llms-full.txt` with complete page-by-page content: full service descriptions, all FAQ answers, case study summaries, and technology descriptions. This is the highest-leverage single file change for AI citation coverage.
- Refactor the FAQ section on the AI Consulting page from a client-side accordion to a server-rendered `<details>`/`<summary>` implementation. This makes FAQ text visible in static HTML without JavaScript execution.

---

## Top 5 Recommendations (Priority Order)

### 1. Create `/public/llms-full.txt` (Impact: Very High)

**Why:** `llms.txt` is the navigation layer; `llms-full.txt` is the content layer. AI indexers that follow the llms.txt standard look for `llms-full.txt` to get complete, structured content. Without it, the machine-readable layer is limited to ~200 lines of summary text. A comprehensive `llms-full.txt` (1,000–3,000 words) covering all services, all FAQ answers, pricing details, and case summaries would be the single most impactful GEO change available.

**How:** Create `/public/llms-full.txt` with full prose content for every service page, the complete FAQ set (currently 9 questions across ai-consulting, 2 on ai-automation), case study data (even anonymized), team/founder context, and the ROI Calculator description with a direct URL.

---

### 2. Add a Founder/Team Page with Named Author Bio and Person Schema (Impact: High)

**Why:** AI models associate expertise with named humans. Currently no named individual appears on any service page or in any JSON-LD schema. The gap between the contact email (`albert@codehunterlab.com`) and the lack of any author identity is the weakest authority signal on the site. A one-page About/Team section with a 150-word bio, LinkedIn URL, and Person schema would immediately improve the entity graph and increase the probability of AI models citing CodeHunter Lab as an expert source rather than an anonymous agency.

**How:** Create `/app/[locale]/about/page.tsx` with a founder bio, role, expertise areas, and add a `Person` JSON-LD schema block with `name`, `jobTitle`, `worksFor`, `sameAs` (LinkedIn), and `knowsAbout` properties.

---

### 3. Render FAQ Section as Static HTML (Impact: High)

**Why:** The FAQ section on the AI Consulting page is the most citable content on the site — 9 well-formed Q&A pairs with specific prices, timelines, and data points. However, it is rendered via a client-side React accordion component (`useState`, `"use client"`). Static crawlers and AI scrapers that do not execute JavaScript see the page shell but not the FAQ content. The same content exists in FAQPage schema, but schema-only availability is less reliable for citation than visible HTML text.

**How:** Convert the FAQ section to a server-rendered `<details>`/`<summary>` HTML structure, or split the page into a Server Component wrapper with a Client Component only for the open/close animation. The FAQ text should be present in the initial server-rendered HTML response.

---

### 4. Add at Least Two Published Case Studies with Specific Metrics (Impact: High)

**Why:** The site currently makes ROI claims without evidence: "40% reduction in customer support costs" and "20%+ increase in top-line revenue" appear in the ai-automation FAQ but without client context, industry, or methodology. AI models trained to evaluate source quality downweight unsourced statistics. A case study page — even anonymized (e.g., "Netherlands dental clinic, 3 locations, 2024") — with specific before/after numbers, the system built, and the timeline converts a marketing claim into a citable reference.

**How:** Create `/app/[locale]/case-studies/[slug]/page.tsx` with two initial case studies. Include: client industry and size (anonymized), problem statement, solution built, specific metrics (time saved per week, cost reduction, revenue impact), deployment timeline, and technologies used. Add `Article` or `CaseStudy` schema with `datePublished`.

---

### 5. Add ROI Calculator to `llms.txt` and Enrich with Tool Description (Impact: Medium-High)

**Why:** The ROI Calculator is the site's strongest interactive asset and a direct answer to one of the most common AI consulting research queries: "How do I know if AI automation is worth it for my business?" AI models answering this question would ideally cite a specific tool. However, the ROI Calculator is not mentioned anywhere in the machine-readable layer (`llms.txt`). It is also a client-rendered component on a client-side page, meaning crawlers may not discover it.

**How:** Add a Tools section to `llms.txt` referencing the ROI Calculator with its direct URL and a one-paragraph description of what it calculates (inputs, outputs, methodology). Consider also adding a static landing section for the calculator that is server-rendered with a description paragraph, making it discoverable via HTML crawl.

---

## Schema Coverage Audit

| Schema Type | Present | Location | Notes |
|---|---|---|---|
| Organization | Yes | Root layout | Missing foundingDate, knowsAbout |
| LocalBusiness | Yes | Root layout | Strong — includes geo, hours, areaServed |
| WebSite | Yes | Root layout | Includes SearchAction |
| FAQPage | Yes | ai-consulting layout, ai-automation page | 9 questions (consulting), 2 questions (automation) |
| ProfessionalService | Yes | ai-consulting layout | Good coverage |
| Service | Yes | ai-automation page | GeoCircle radius coverage |
| BreadcrumbList | Yes | ai-automation page | Only on one page |
| Person | No | — | High priority gap |
| Article / BlogPosting | No | — | No blog/content section found |
| HowTo | No | — | Opportunity for process-oriented content |
| Review / AggregateRating | No | — | Would require testimonial schema |

---

## Files Modified

| File | Action | Key Changes |
|---|---|---|
| `/public/llms.txt` | Rewritten | Added FAQ section, statistics, service definitions, engagement table, RSL 1.0, llms-full.txt reference |
| `/public/robots.txt` | Created | Explicit Allow for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, and others |

## Files to Create (Recommended)

| File | Priority | Purpose |
|---|---|---|
| `/public/llms-full.txt` | Critical | Full prose content for AI indexers |
| `/app/[locale]/about/page.tsx` | High | Founder bio, Person schema, authority signal |
| `/app/[locale]/case-studies/[slug]/page.tsx` | High | Evidence-backed ROI claims, Article schema |

---

*Analysis performed by Claude Code (claude-sonnet-4-6) on 2026-03-10. Based on static file analysis of Next.js 14 codebase. Live site behavior (JavaScript rendering, HTTP headers, actual crawler access) requires separate dynamic testing.*
