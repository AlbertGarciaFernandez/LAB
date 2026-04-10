# SEO Insights Design

## Goal

Create a focused insights section that supports the commercial SEO pages already receiving impressions in Google Search Console.

## Context

The Search Console export for March 12 through April 8, 2026 shows 1,362 impressions, 2 clicks, and a weighted average position of 35.74. The strongest opportunity pages are:

- `/en/ai-automation-consulting-netherlands`
- `/en/react-consulting`
- `/en/dental-clinic-automation-netherlands`
- `/en/nextjs-development-agency`
- `/en/physiotherapy-clinic-automation-netherlands`

The best near-term query themes are workflow automation agency Netherlands, conversational AI consultant Netherlands, n8n consulting, app developer Leiden, and clinic automation.

## Approach

Build a lightweight English-only insights hub at `/en/insights` with individual article pages at `/en/insights/[slug]`. The first batch contains four articles that map to Search Console opportunities and internally link to the relevant service pages.

Spanish insight URLs are not launched in this first batch to avoid duplicated English content across locales.

## Initial Articles

1. `workflow-automation-agency-netherlands`
2. `conversational-ai-consultant-netherlands`
3. `n8n-consultant-netherlands`
4. `dental-clinic-whatsapp-automation-netherlands`

## SEO Requirements

- Each article has a unique title, description, publish date, modified date, category, reading time, target queries, and related service links.
- Each article renders visible static HTML content with headings, paragraphs, bullets, and internal links.
- Each article includes `Article` JSON-LD and canonical metadata.
- The insights index includes `CollectionPage` JSON-LD and article cards.
- Sitemap includes only English insight URLs.
- Existing commercial sitemap URLs remain unchanged.

## Testing

Add a Node test that validates the insight content source exists, contains the four required slugs, has non-empty SEO metadata, includes internal links, and that `app/sitemap.ts` references insight URLs.

