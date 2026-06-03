# Translation Audit 2026-05-26

## Scope Rules

Included in full localization audit:

- Corporate navigation
- Homepage
- About
- Commercial landing pages
- Expertise pages
- Industry pages
- Shared metadata for those pages

Locale targets for this scope:

- English source copy for the commercial site
- Spanish localized as Spain Spanish (`es-ES` tone and phrasing)
- Dutch localized for the Netherlands (`nl-NL` tone and phrasing)

Approved technical/product terms that may remain in English when appropriate:

- `Next.js`
- `React`
- `n8n`
- `WhatsApp`
- `CRM`
- `API`

Excluded from full localization target:

- `/[locale]/insights/**` (English-only editorial)
- `/[locale]/case-studies/**` (English-only editorial)
- `/[locale]/lab/**` (not translated, not part of locale SEO strategy)

## Confirmed Findings

- Message key parity exists across `messages/en.json`, `messages/es.json`, and `messages/nl.json`.
- Some pages still use binary locale logic (`es` vs fallback English) instead of proper `en/es/nl` handling.
- `Lab` currently behaves as `en/es` only and is outside translation scope.
- `Insights` and `Case Studies` render English editorial content with localized notices.

## English-only Editorial Sections

These are intentionally not part of full locale translation:

- Insights
- Case Studies

Rule:

- editorial body remains in English
- locale routes may exist technically
- they are not treated as fully localized equivalents for SEO
- localized navigation or notices may reference these sections, but must not imply that translated editorial versions exist

## Lab Exception

`/lab` is outside the full translation target.
It is not part of the locale SEO equivalence model.

## Priority Route Audit

### Included routes to verify and maintain in en/es/nl

- `/[locale]`
- `/[locale]/about`
- `/[locale]/ai-consulting`
- `/[locale]/ai-automation-consulting-netherlands`
- `/[locale]/nextjs-development-agency`
- `/[locale]/react-consulting`
- `/[locale]/it-system-integration`
- `/[locale]/software-development-leiden`
- `/[locale]/services/custom-internal-tools-development`
- `/[locale]/expertise/*`
- `/[locale]/*-automation-netherlands`

### Current execution notes

- Home and About were the first pages with confirmed `es` vs fallback-English branching.
- `ai-consulting` metadata still required explicit Dutch locale support.
- SEO alternates and sitemap currently over-publish localized variants for editorial sections.

## Current Status Matrix

| Area              | Scope                                                                                                      |                Status | Notes                                                                               |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | --------------------: | ----------------------------------------------------------------------------------- |
| Global navigation | Header, Footer, Language selector, root layout                                                             |                  Done | Locale labels, schema language list, and shared SEO locale policy aligned.          |
| Corporate core    | Home, About                                                                                                |                  Done | `en/es/nl` copy and breadcrumb labels normalized.                                   |
| Commercial pages  | AI consulting, automation, React, Next.js, IT integration, Leiden, internal tools, n8n, AI voice, WhatsApp |                  Done | Visible CTA/FAQ/breadcrumb/schema locale inconsistencies corrected.                 |
| Expertise pages   | `expertise/*`                                                                                              |                  Done | Locale-aware breadcrumb schema and metadata helpers in place.                       |
| Industry pages    | `*-automation-netherlands/*`                                                                               |                  Done | Locale-aware breadcrumb schema and visible labels aligned.                          |
| Insights          | Index + articles                                                                                           | Intentional exception | Editorial content remains English-only and now renders only under `/en/...` routes. |
| Case Studies      | Index + articles                                                                                           | Intentional exception | Editorial content remains English-only and now renders only under `/en/...` routes. |
| Lab               | `/lab` public + app routes                                                                                 | Intentional exception | Not part of translation target or locale SEO parity.                                |

## What Still Remains

### Product/architecture decisions still open

- Decide whether `Lab` should eventually become an `en`-only route family instead of remaining under `/{locale}/lab` as a technical structure.

### Nice-to-have follow-up work

- Manual native-speaker copy review for Dutch marketing tone across long-form pages.
- Manual native-speaker copy review for Spanish marketing polish across long-form pages.
- Add explicit tests for breadcrumb label localization in selected commercial pages if you want stricter regression coverage beyond current SEO/metadata tests.

### Not blocking release

- The site is technically passing tests and build.
- The remaining work is mostly product-policy cleanup and editorial language polish, not structural locale breakage.
