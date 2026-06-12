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

CodeHunter Lab is a multi-page marketing site plus product/lab surface for an AI automation and software consultancy based in the Netherlands.

It includes:

- **Homepage** — positioning, services, industries, pricing, bio, and contact
- **SEO landing pages** — service and industry pages for commercial acquisition
- **Insights / blog** — editorial content with metadata and schema
- **Lab platform** — public lab landing plus private internal app surface
- **Localized routes** — `en`, `es`, and `nl` via `next-intl`

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **i18n:** next-intl
- **Analytics:** Google Analytics via `@next/third-parties`
- **Testing:** Node.js built-in test runner
- **Formatting / linting:** Prettier + ESLint

## Prerequisites

- **Node.js** `>= 18.17.0`
- **npm**

## Getting started

```bash
git clone <repo-url>
cd LAB-codehunterlab
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification commands

Run these before pushing changes:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — start the production server
- `npm run typecheck` — run TypeScript without emitting files
- `npm run lint` — run ESLint
- `npm run lint:fix` — run ESLint with autofix
- `npm run format` — format files with Prettier
- `npm run format:check` — check formatting
- `npm test` — run the Node test suite

## Project structure

```text
LAB-codehunterlab/
├── app/                  # Next.js App Router routes, metadata, robots, sitemap
├── components/           # Layout, UI, sections, analytics, lab components
├── content/              # Editorial and lab content sources
├── docs/                 # Plans and architecture notes
├── i18n/                 # next-intl request/routing configuration
├── messages/             # Locale message files (en, es, nl)
├── public/               # Static assets
├── tests/                # Repo-level regression tests
└── vercel.json           # Headers, redirects, deployment config
```

## i18n notes

- Keep `messages/en.json`, `messages/es.json`, and `messages/nl.json` structurally aligned.
- Prefer updating all locales together when adding or renaming keys.
- Routes are localized under `app/[locale]/...`.

## Testing notes

Current verification relies on:

- structural tests for routes/components
- SEO metadata and sitemap checks
- locale and content policy tests
- contact/navigation regression tests

## Deployment

This project is designed for Vercel.

```bash
npm i -g vercel
vercel
```

For production deploys, prefer GitHub-connected Vercel deployments plus CI checks from `.github/workflows/ci.yml`.

## Environment variables

Create `.env.local` in the repo root as needed:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## License

Private — all rights reserved.
