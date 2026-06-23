---
name: codehunter-ux-ui
description: Use this skill when improving, reviewing, or redesigning the CodeHunter Lab home page, AI consulting page, or expertise service pages UX/UI. Trigger for prompts mentioning CodeHunter Lab, home page, homepage, landing page, ai-consulting, AI consulting page, expertise pages, service pages, pricing section, hero section, conversion, UX review, UI polish, visual hierarchy, mobile layout, or making the site feel more premium. This skill is project-specific and should guide edits to the existing Next.js/Tailwind/Framer Motion codebase without replacing the brand language.
---

# CodeHunter Lab UX/UI Skill

This skill guides UX/UI decisions for the CodeHunter Lab website, especially:

- Home: `app/[locale]/page.tsx` and the sections under `components/sections/`
- AI consulting: `app/[locale]/ai-consulting/page.tsx` and `app/[locale]/ai-consulting/PageContent.tsx`
- Expertise pages: `app/[locale]/expertise/*/PageContent.tsx`
- Copy/data: `messages/en.json`, `messages/es.json`, `messages/nl.json`
- Theme tokens: `tailwind.config.ts`

Use this skill to preserve the site's existing identity while improving clarity, hierarchy, conversion, responsiveness, and trust.

## Project Identity

CodeHunter Lab should feel like a senior engineering studio, not a generic SaaS template.

The visual language is:

- Dark, technical, high-contrast, production-focused.
- Near-black base: `bg-near-black` / `#0B0B0B`.
- Surface dark cards: `bg-surface-dark` / `#151515`.
- Primary signal color: `hunter-green` / `#00E6A2`.
- Secondary energy/accent color: `hunter-orange` / `#FF7A3C`.
- Heavy typography: `font-black`, tight tracking, large editorial headings.
- Small mono/uppercase labels: `font-mono`, `uppercase`, wide tracking.
- Cards with subtle borders, inner highlights, glow, hover lift, and orange/green transitions.
- Motion that feels engineered: staggered reveals, smooth y/opacity transitions, scan beams, restrained hover movement.

Avoid making the site feel like:

- A generic AI startup landing page.
- A pastel SaaS dashboard.
- A purple/blue gradient template.
- A bland agency site with white cards and stock sections.

## Core UX Goals

Prioritize these outcomes in order:

1. Make the offer instantly legible: AI systems, automation, product direction, training, and senior technical leadership.
2. Make the user understand who the site is for: businesses with real workflows, data, integration complexity, and budget.
3. Move users toward a low-friction first action: fit check, audit, discovery call, or pricing section.
4. Make pricing feel serious but not rigid: starting prices, excl. VAT/IVA/btw, scoped after audit/diagnosis.
5. Preserve credibility: production systems, handoff, observability, GDPR, ownership, senior judgment.

## Home Page Map

Home is assembled in `app/[locale]/page.tsx`:

1. `HeroSection`
2. `TrustProofSection`
3. `ExpertiseSection`
4. `WhatWeBuildSection`
5. `PackagesSection`
6. `InsightsSection`
7. `BioSection`
8. `ProcessSection`
9. `ContactSection`

When editing home UX/UI:

- Keep the hero direct, high-confidence, and atmospheric.
- Keep the hero CTAs clear: primary contact/action, secondary proof/case studies.
- Use trust proof early to reduce skepticism.
- Use `ExpertiseSection` for breadth of capabilities, but avoid making every service equally loud.
- Use `WhatWeBuildSection` to clarify the split between AI systems and studio support.
- Use `PackagesSection` as the commercial bridge: starting ranges, scope depends on audit/diagnosis.
- Avoid adding too many new sections. Improve hierarchy and copy before adding surface area.

## AI Consulting Page Map

AI consulting uses:

- `app/[locale]/ai-consulting/page.tsx` for translated data assembly and metadata.
- `app/[locale]/ai-consulting/PageContent.tsx` for UI.
- `messages/*/AIConsulting` for page copy.

The current page flow is:

1. Hero with badge, H1, CTA, why-us panel, system status visual, ROI calculator CTA.
2. Who this is for.
3. Top agents and use cases.
4. What we build.
5. Production standards.
6. ROI calculator.
7. Pricing.
8. Migration journey.
9. FAQ and final CTA.

When improving this page:

- Keep the page conversion-oriented. Every section should answer a buying objection.
- Make sure AI does not read as vague experimentation. Anchor it in workflows, systems, integrations, ROI, and production delivery.
- Make the pricing section explain why prices vary by company, project maturity, systems, data access, integrations, and support needs.
- Keep the ROI calculator easy to discover from the hero.
- Do not bury fit/audit/discovery as a weak CTA. It is the right next step because scope varies.

## Expertise Page Map

Expertise service pages live under `app/[locale]/expertise/*/PageContent.tsx`.

Use the same CodeHunter Lab visual system, but allow each page a controlled accent:

- AI agents: green, automation, conversation flow, CRM/channel integration.
- n8n migration: orange, migration, cost reduction, ownership.
- Custom LLMs: cyan/emerald is acceptable as a technical sub-accent, but keep the dark studio system and avoid drifting into generic AI gradients.
- System architecture: orange, systems, risk, decision records, delivery guardrails.

When improving expertise pages:

- Make the hero explain the engagement model quickly: audit/assessment first, scoped delivery, handoff/ownership.
- Keep the primary CTA visible and direct, but add small trust/proof signals near it when the page has a complex technical offer.
- Avoid adding large generic testimonial or logo strips unless there is real proof.
- Prefer compact proof strips, metrics, architecture diagrams, and process cards over broad marketing copy.
- Keep each page distinct through its accent and visual metaphor, while preserving the shared card grammar, dark background, typography, and motion rules.

## Visual System Rules

### Layout

- Use `max-w-7xl` for wide sections and `px-6 lg:px-8` or existing local spacing patterns.
- Prefer editorial split layouts: `lg:grid-cols-[0.8fr_1.2fr]`, `lg:grid-cols-2`, or bento cards.
- Use generous vertical rhythm: `py-20`, `py-24`, `md:py-28`, `md:py-32`.
- Use large background text sparingly as section atmosphere: opacity around `0.05`, huge `text-[12rem] md:text-[20rem]`.
- On mobile, reduce density before reducing meaning. Stack cards cleanly and keep CTAs reachable.

### Cards

Use the existing card grammar:

- `rounded-2xl` or `rounded-3xl`
- `border border-white/[0.05]` or accent border for featured cards
- `bg-near-black`, `bg-surface-dark/40`, or `bg-white/[0.03]`
- inner shadow/highlight when useful
- hover lift `hover:-translate-y-1` or `hover:-translate-y-2`
- green default signals that transition to orange on exploration/hover

Avoid introducing unrelated components that look like another design system.

### Typography

- H1/H2: large, black weight, tight tracking, low line-height.
- Section labels: tiny uppercase, wide tracking, mono or bold.
- Body: gray text, readable line-height, avoid overlong lines.
- Use green for primary promise and orange for friction, urgency, comparison, or secondary emphasis.

### Motion

Use Framer Motion patterns already present:

- `opacity + y` reveals, 0.4-0.8s.
- `staggerChildren` around 0.08-0.2.
- Hover lift and color transitions.
- Ambient glows and scan effects only where they communicate system/engineering energy.

Avoid excessive animation that slows comprehension or causes mobile jank.

## Conversion Heuristics

When reviewing or editing a section, ask:

- Is the primary promise clear without reading the whole page?
- Does the user know whether this is for them?
- Is there a believable reason to trust CodeHunter Lab?
- Does the next action feel natural?
- Are prices framed as scoped professional work, not arbitrary numbers?
- Does the section reduce a real objection: cost, risk, complexity, time, integration, ownership, compliance, adoption?

For pricing, prefer copy like:

- English: `Starting prices, excl. VAT. Final scope depends on company stage, systems, data access, integrations and support needs, so we start with a fit check or audit before estimating the real scope.`
- Spanish: `Precios desde, sin IVA. El alcance final depende de la empresa, madurez del proyecto, sistemas, acceso a datos, integraciones y soporte necesario; por eso empezamos con un chequeo de encaje o auditoría antes de estimar el alcance real.`
- Dutch: `Prijzen vanaf, excl. btw. De uiteindelijke prijs hangt af van het bedrijf, projectvolwassenheid, systemen, datatoegang, integraties en benodigde support; daarom starten we met een fit-check of audit voordat we de echte scope inschatten.`

## Accessibility And Quality

Preserve or improve:

- Keyboard-accessible controls, especially tabs/toggles and mobile dialogs.
- Good contrast on dark backgrounds.
- Real buttons for stateful UI, links for navigation.
- `aria-pressed` for toggle buttons when applicable.
- Dialog roles and Escape handling for mobile overlays.
- Mobile layout at narrow widths before claiming the UI is done.

Avoid:

- Text inside purely decorative images.
- Hover-only information that is required to understand the page.
- Tiny gray text for critical pricing or CTA context.
- Breaking translation data shapes in `messages/*.json`.

## Implementation Workflow

When asked to improve UX/UI for home or AI consulting:

1. Inspect the relevant page/component files first.
2. Identify the section's job in the funnel before editing.
3. Make the smallest visual/copy change that improves comprehension or conversion.
4. Keep translations aligned across `en`, `es`, and `nl` when editing shared copy.
5. Reuse existing tokens/classes before adding new design primitives.
6. Run `npm run typecheck` after edits.
7. Run Prettier on only touched files if global formatting has unrelated failures.

## Review Output Format

When reviewing without editing, return findings in this structure:

```markdown
**UX/UI Findings**

- [Severity] [Section/file]: finding and why it matters.

**Recommendations**

- Specific change, expected effect, and files likely involved.

**Priority Order**

1. Highest leverage change.
2. Next highest leverage change.
3. Nice-to-have polish.
```

When editing, summarize:

- What changed.
- Why it improves UX/conversion.
- Which files changed.
- What validation ran.
