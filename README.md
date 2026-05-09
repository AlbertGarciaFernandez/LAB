# CodeHunter Lab

<p align="center">
  <strong>AI Automation Consulting & Engineering for Dutch Businesses</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js 14" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React 18" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  </a>
  <a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" alt="Vercel" />
  </a>
</p>

---

## What is this?

CodeHunter Lab is a corporate multi-page website + product platform for an AI automation and consultancy agency based in the Netherlands. It includes:

- **Homepage** — Hero, services, industries, pricing, testimonials, bio, contact
- **SEO Landing Pages** — ~15+ industry and service-specific pages (dental, real estate, n8n, React, Next.js, etc.)
- **Insights / Blog** — ~20 technical articles with schema.org structured data, dynamic metadata, and static generation
- **Lab Platform** — Product landing page + internal workspace (sidebar, systems, modules, lessons, and resources)
- **Bilingual** — English / Spanish via `next-intl`

## Tech Stack

| Layer     | Technology                             |
| --------- | -------------------------------------- |
| Framework | Next.js 14 (App Router)                |
| Language  | TypeScript 5.5                         |
| Styling   | Tailwind CSS 3.4                       |
| Animation | Framer Motion                          |
| i18n      | next-intl                              |
| Icons     | Phosphor Icons, Lucide React           |
| Analytics | Google Analytics (@next/third-parties) |
| Testing   | Node.js built-in test runner           |
| Linting   | ESLint + Prettier                      |

## Prerequisites

- **Node.js** `>= 18.17.0`
- **npm** or **pnpm**

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd LAB

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the development server with hot reload |
| `npm run build`        | Build the application for production         |
| `npm run start`        | Start the production server                  |
| `npm run lint`         | Run ESLint to check for code issues          |
| `npm run lint:fix`     | Run ESLint and auto-fix issues               |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Check if files are formatted with Prettier   |
| `npm test`             | Run the test suite                           |

## Project Structure

```
LAB/
|-- app/                          # Next.js App Router
|   |-- [locale]/                 # i18n routes (en, es)
|   |   |-- page.tsx              # Homepage
|   |   |-- layout.tsx            # Root layout with metadata & providers
|   |   |-- insights/             # Blog / articles
|   |   |-- lab/                  # Lab platform
|   |   |-- about/                # About page
|   |   |-- ai-consulting/        # Service pages
|   |   |-- ...                   # Other SEO landing pages
|   |-- robots.ts                 # Dynamic robots.txt
|   |-- sitemap.ts                # Dynamic sitemap
|-- components/
|   |-- layout/                   # Header, Footer
|   |-- sections/                 # Homepage sections
|   |-- lab/                      # Lab platform components
|   |-- ui/                       # Reusable UI components
|-- content/
|   |-- insights.ts               # Blog articles data
|   |-- lab.ts                    # Lab platform mock data
|-- i18n/                         # next-intl configuration
|-- messages/                     # Translation files (en.json, es.json)
|-- tests/                        # Test files
|-- docs/                         # Documentation (SEO architecture, GEO analysis)
```

## Adding a New Commercial Page

1. Create a new folder under `app/[locale]/` (e.g., `app/[locale]/my-service/`)
2. Add a `page.tsx` with the page content
3. Export `generateMetadata` for SEO
4. Add JSON-LD structured data if relevant
5. Add translations to `messages/en.json` and `messages/es.json`
6. Add the route to navigation in `navigation.ts` and Header/Footer components

## Adding a New Insight Article

1. Open `content/insights.ts`
2. Append a new `InsightArticle` object to the `insights` array following the existing structure
3. The article will automatically:
   - Appear on the insights index page
   - Generate a static route at `/[locale]/insights/{slug}`
   - Include schema.org `Article` JSON-LD
   - Be included in the sitemap

## Adding i18n Translations

1. Open `messages/en.json` and `messages/es.json`
2. Keep both files in sync — they should have identical key structures
3. Use `useTranslations()` or `getTranslations()` in components to access translations

## Testing

Tests use the Node.js built-in test runner (`node --test`):

```bash
npm test
```

Current test coverage:

- Lab platform structure validation
- SEO metadata, sitemap, and JSON-LD checks

## Deployment

This project is optimized for [Vercel](https://vercel.com/):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your Git repository to Vercel for automatic deployments on push.

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> Note: Do not commit `.env.local` to version control.

## License

Private — All rights reserved.

## Author

**Albert Garcia** — [LinkedIn](https://www.linkedin.com/in/albertgarciafernandez/)

Built with purpose at **CodeHunter Lab**.
