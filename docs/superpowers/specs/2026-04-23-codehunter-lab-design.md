# CodeHunter Lab Design

## Goal

Build a complete web implementation for CodeHunter Lab as a premium B2B AI implementation platform, not a course platform, with:

- a public product landing page at `/[locale]/lab`
- a mocked-auth workspace at `/[locale]/lab/app`
- reusable page templates for systems, lessons, and resources
- a scalable component and data structure that can later support real auth, translations, CMS content, and persisted progress

## Product Positioning

CodeHunter Lab should feel like a practical implementation platform for SMEs, agencies, and B2B teams that want to deploy operational AI systems in their business.

The experience should communicate:

- implementation over education
- business systems over theory
- premium clarity over flashy design
- guided progress over generic content browsing

This is not a learning portal where users “take a course.” It is a structured client-facing environment where users choose a system and implement it step by step.

## Traffic And Conversion Context

The initial acquisition channel is paid social, not search-first discovery. That changes the conversion priority:

- the public landing page should optimize for fast understanding and product desirability
- the user should see clear business outcomes and a believable product structure quickly
- the workspace should feel friendly, premium, and easy to navigate, closer to a polished client portal than a dense operator console

Because traffic is cold-to-warm campaign traffic, the main CTA on the public landing page should not force users directly into the application shell. It should first help them understand what systems they can implement.

## Recommendation Summary

Use a balanced product-and-portal model:

- `/[locale]/lab` acts as a product-focused landing page with strong sales clarity
- `/[locale]/lab/app` acts as a friendly implementation portal
- the public surface and the workspace share the same design language, but use different layouts

Primary CTA on `/[locale]/lab`:

- `View Systems`

Secondary CTA on `/[locale]/lab`:

- `Preview Platform`

This keeps the experience more sellable for campaign traffic while still making the product feel real and operational.

## Routing Structure

The Lab should live inside the existing locale-based App Router architecture so it remains consistent with the repo’s current structure and is ready for future translated copy.

Planned routes:

- `app/[locale]/lab/page.tsx`
- `app/[locale]/lab/layout.tsx`
- `app/[locale]/lab/app/page.tsx`
- `app/[locale]/lab/app/layout.tsx`
- `app/[locale]/lab/app/system/[systemSlug]/page.tsx`
- `app/[locale]/lab/app/system/[systemSlug]/lesson/[lessonSlug]/page.tsx`
- `app/[locale]/lab/app/resources/page.tsx`
- `app/[locale]/lab/app/settings/page.tsx`

Behavior by route:

- `/[locale]/lab` is public and indexable
- `/[locale]/lab/app/*` is visually authenticated through mocked state and should be treated as product workspace routes
- `/[locale]/lab/app/*` should be marked `noindex` because these pages represent private-style app surfaces, even while auth is mocked

## Locale Strategy

Both English and Spanish routes should ship now:

- `/en/lab`
- `/es/lab`
- `/en/lab/app/...`
- `/es/lab/app/...`

Content will be mirrored in English for both locales in this first release, but the structure must be ready for real localization later.

This means:

- locale-aware routing must work now
- copy should be centralized so translation can be split later without rewriting the page architecture
- data structures should avoid hard-wiring English strings deep into components

## Information Architecture

### Public Product Surface

The `/[locale]/lab` landing page should include:

1. Hero
2. Problem
3. Solution
4. How It Works
5. Systems
6. Differentiation
7. CTA

Public navigation should be Lab-specific, not inherited from the current agency site header.

Recommended public nav items:

- Systems
- How It Works
- Resources
- Preview Platform

This creates a product boundary distinct from the existing service-marketing site.

### Workspace Surface

The `/[locale]/lab/app` experience should feel like a friendly client portal:

- left sidebar for navigation
- top bar for identity and progress context
- spacious content area for readable implementation guidance

It should visually echo the user’s reference: clear left navigation, focused reading column, and content that feels guided rather than technical or cluttered.

## Page Behaviors

### Landing Page

The landing page should communicate the following narrative:

1. Businesses know AI matters, but do not know what to implement first
2. Most teams get stuck between scattered tools, internal confusion, and non-operational advice
3. CodeHunter Lab solves this by packaging implementation into systems
4. Users pick a system, move through modules, and deploy assets into their business

Section intent:

- `Hero`: clear positioning, immediate business value, primary and secondary CTA
- `Problem`: friction and failure patterns teams already recognize
- `Solution`: explain the systems-based implementation model
- `How It Works`: three-step explanation of the product flow
- `Systems`: introduce System 01, 02, and 03 with clear business outcomes
- `Differentiation`: why this is not generic AI education or template dumping
- `CTA`: direct users toward systems exploration or workspace preview

### Workspace Home

The workspace home should present:

- a welcome section with user name and current focus
- a compact progress summary derived from system-level progress
- the three main systems as actionable cards
- a “next recommended step” block
- a quick link section for resources and settings

The workspace home should feel like a launchpad for implementation, not a stats-heavy dashboard.

### System Page Template

Each system page should include:

- overview
- modules list
- progress tracking
- CTA to continue to the next lesson

The modules list should make it obvious what the user is implementing and what comes next.

Planned systems:

- `System 01 — Foundations`
- `System 02 — Operations`
- `System 03 — Architecture`

Business framing:

- Foundations: demand capture, offer clarity, intake, and AI readiness basics
- Operations: automations, internal handoffs, reporting flows, content operations
- Architecture: system design, integrations, data flow, governance, scalable structure

### Lesson Page Template

Each lesson page should include:

- problem section
- explanation
- step-by-step instructions
- example block
- downloadable resources section

The lesson page should be readable and implementation-oriented. It should feel closer to a guided playbook than to a generic article or video transcript.

### Resources Page

The resources page should group items by category:

- Acquisition
- Content
- Reporting
- Operations
- Security

Each resource item must include:

- title
- description
- download button

Downloads can be mocked visually for now, but the component structure should be ready to connect to real files later.

## Component Architecture

Create a dedicated Lab component set so the new product surface does not depend on the current site’s more agency-oriented sections.

Recommended component groups:

### Layout

- `LabMarketingLayout`
- `LabAppLayout`
- `LabHeader`
- `LabSidebar`
- `LabTopbar`

### Shared UI

- `LabSection`
- `LabCard`
- `LabButton`
- `ProgressBadge`
- `EmptyState`

### Domain Components

- `SystemCard`
- `ModuleList`
- `LessonContent`
- `LessonExampleBlock`
- `ResourceItem`
- `ResourceCategorySection`

### Content Sections

- `LabHeroSection`
- `LabProblemSection`
- `LabSolutionSection`
- `LabHowItWorksSection`
- `LabSystemsSection`
- `LabDifferentiationSection`
- `LabCtaSection`

Component boundaries should stay focused:

- section components compose page layouts
- domain components render structured Lab data
- layout components control navigation and framing
- shared UI components carry the visual system

## Data Model

Use a mocked content layer as the source of truth for systems, lessons, modules, resources, and user progress.

Suggested shape:

- systems
  - slug
  - title
  - shortDescription
  - overview
  - progressPercent
  - modules
- modules
  - slug
  - title
  - summary
  - lessonSlugs
- lessons
  - slug
  - title
  - problem
  - explanation
  - steps
  - example
  - resources
- resources
  - slug
  - category
  - title
  - description
  - downloadLabel

The mocked user context should include:

- name
- role
- activeSystemSlug
- overallProgressSummary

This data should live outside the page components so the UI can be easily migrated to CMS or database-backed content later.

## Visual Direction

The Lab design should follow the user’s stated rules:

- white background
- black, gray, and one accent color
- clean typography
- minimal motion
- fast, functional UI

The design should still feel premium and intentional. Avoid default “template SaaS” styling, but do not introduce heavy visual effects or decorative complexity.

Visual tone:

- editorial clarity
- clean spacing
- subtle borders
- restrained accent usage
- product-trustworthy hierarchy

Workspace feel:

- friendly portal
- guided implementation flow
- readable lesson content
- low cognitive load

## Content Strategy

Use realistic dummy content based on B2B AI implementation work, not placeholder text.

Examples should reference:

- lead capture workflows
- CRM enrichment
- internal reporting systems
- content production workflows
- security and governance checklists
- operating procedures for AI-assisted teams

The copy should avoid framing the product as passive training. Preferred language:

- implement
- deploy
- operationalize
- configure
- standardize
- roll out

Avoid overusing:

- learn
- study
- watch
- course
- class

## Navigation Behavior

### Public Nav

Public navigation should focus on product exploration and conversion:

- Systems
- How It Works
- Resources
- Preview Platform

### App Sidebar

The app sidebar must include:

- System 01 (Foundations)
- System 02 (Operations)
- System 03 (Architecture)
- Resources
- Settings

The current system or page should be visually obvious.

### Top Bar

The top bar should include:

- current user identity
- current progress summary
- simple portal context

Progress emphasis should be system-first. A global summary may appear in the top bar, but only as a rolled-up reflection of per-system progress.

## Metadata And Indexing

Public Lab pages should include dedicated metadata aligned with the product offering.

Requirements:

- unique metadata for `/[locale]/lab`
- proper canonical handling via existing locale structure
- app routes should not compete with public routes in search indexing

The workspace layout should explicitly mark app routes as `noindex`.

## Technical Constraints

- Use Next.js App Router and Tailwind CSS
- Follow the repo’s locale structure
- Keep the implementation component-based and ready to scale
- Do not integrate real authentication in this phase
- Do not introduce unnecessary animations
- Do not reuse the current global site header/footer for the Lab product surface

## Testing Strategy

Minimum verification for this phase:

- the new routes render successfully
- core navigation links resolve correctly
- the app layout composes without runtime errors
- the mocked data model supports all required pages
- the project still builds successfully

Testing should focus on confidence for structure and rendering, not on full application behavior, since auth and persistence are intentionally mocked.

## Out Of Scope

The following are explicitly out of scope for this implementation:

- real authentication
- persistent progress storage
- CMS integration
- billing or subscriptions
- actual download asset hosting
- user onboarding flows beyond mocked state
- multi-user collaboration
- notifications or messaging

## Risks And Guardrails

- The repo already contains unrelated in-progress changes; implementation must avoid reverting or interfering with them
- The Lab product surface should not accidentally inherit the current site’s darker, more motion-heavy marketing language
- The workspace must avoid becoming course-like in copy or layout
- The structure should stay simple enough to implement cleanly in one feature pass

## Success Criteria

The design is successful when:

- users can land on `/[locale]/lab` and understand the product quickly
- the product feels sellable for paid social traffic
- the workspace feels like a real implementation portal, not a demo shell
- systems, lessons, and resources are all powered by reusable templates
- English and Spanish route structure both work from day one
- the implementation can later absorb real auth, localization, and persistence without a routing rewrite
