# CodeHunter Suite Demo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium CodeHunter Suite demo with a product landing page and a fully functional HunterCRM, integrated into the existing Next.js site under `/{locale}/suite`.

**Architecture:** Next.js 14 App Router with a shared authenticated shell (`SuiteLayout`), mock auth via Context + localStorage, realistic TypeScript datasets, shadcn/ui component base, Framer Motion animations, `@dnd-kit` Kanban, and `recharts` visualizations.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS 3, shadcn/ui, Framer Motion, @dnd-kit, recharts, date-fns, lucide-react, @phosphor-icons/react.

---

## File Structure Overview

```
LAB/app/[locale]/suite/
  layout.tsx
  page.tsx
  login/page.tsx
  (app)/
    layout.tsx
    crm/
      layout.tsx
      page.tsx
      leads/page.tsx
      companies/page.tsx
      contacts/page.tsx
      opportunities/page.tsx
      pipeline/page.tsx
      calendar/page.tsx
      tasks/page.tsx
      emails/page.tsx
      whatsapp/page.tsx
      ai-assistant/page.tsx
      analytics/page.tsx
      reports/page.tsx
      settings/page.tsx
    erp/page.tsx
    desk/page.tsx
    bookings/page.tsx

LAB/components/suite/
  layout/
    SuiteLayout.tsx
    AuthGuard.tsx
    Sidebar.tsx
    TopNav.tsx
    ProductSwitcher.tsx
    PageHeader.tsx
  ui/
    DataTable.tsx
    KanbanBoard.tsx
    StatCard.tsx
    ChartCard.tsx
    ActivityFeed.tsx
    EmptyState.tsx
    LoadingState.tsx
    AIMessage.tsx
    FilterBar.tsx
  charts/
    RevenueChart.tsx
    PipelineChart.tsx
    LeadSourceChart.tsx
    ConversionChart.tsx

LAB/lib/suite/
  auth-context.tsx
  ui-context.tsx
  registry.ts
  types/
    crm.ts
    suite.ts
  data/
    crm.ts
    users.ts
    activities.ts

LAB/content/suite/products.ts
```

---

## Phase 1 — Setup & Foundation

### Task 1: Initialize shadcn/ui and install dependencies

**Files:**

- Modify: `LAB/package.json`
- Modify: `LAB/tailwind.config.ts`
- Modify: `LAB/app/globals.css`
- Create: `LAB/components/ui/*` (via shadcn CLI)

**Steps:**

1. Run `npx shadcn-ui@latest init --yes --defaults` in the worktree.
2. Run `npx shadcn-ui@latest add` for: button, card, dialog, dropdown-menu, input, label, select, table, tabs, toast, avatar, badge, skeleton, sheet, separator, scroll-area, tooltip, calendar, popover, command, checkbox, textarea.
3. Run `npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities recharts date-fns clsx tailwind-merge` (verify `clsx` and `tailwind-merge` already present).
4. Extend `tailwind.config.ts` with CSS variables for primary `#2563EB`, accent `#7C3AED`, success `#22C55E`, warning `#F59E0B`, danger `#EF4444`, and dark-mode surface colors.
5. Add CSS variables to `app/globals.css` under `:root` and `.dark`.

**Verification:**

- `npm run typecheck` passes.
- At least one shadcn Button renders on a temporary test page.

---

### Task 2: Configure fonts and dark-mode default

**Files:**

- Modify: `LAB/app/[locale]/layout.tsx`
- Modify: `LAB/app/globals.css`
- Create: `LAB/components/suite/ThemeProvider.tsx`

**Steps:**

1. Import `GeistSans` and `GeistMono` from `next/font/google` in the root layout.
2. Apply font variables to the `<html>` element.
3. Wrap children with a lightweight `ThemeProvider` that defaults to dark mode for `/suite` routes.
4. Ensure `html.dark` is applied by default or via class logic.

**Verification:**

- Text renders in Geist Sans.
- Background is dark on `/suite` pages.

---

### Task 3: Create folder structure and route groups

**Files:**

- Create: all route folders listed in the File Structure Overview.

**Steps:**

1. Create `app/[locale]/suite/` route tree with `layout.tsx`, `page.tsx`, `login/page.tsx`, `(app)/layout.tsx`, and all CRM + placeholder pages as stub files returning a placeholder `<div>`.
2. Create `components/suite/layout/`, `components/suite/ui/`, `components/suite/charts/`, `lib/suite/types/`, `lib/suite/data/`, `content/suite/`.

**Verification:**

- `npm run typecheck` passes with stub pages.
- All routes respond without 404.

---

## Phase 2 — Auth & Shared Shell

### Task 4: Build auth context and mock login

**Files:**

- Create: `LAB/lib/suite/auth-context.tsx`
- Modify: `LAB/app/[locale]/suite/(app)/layout.tsx`

**Steps:**

1. Define `AuthUser` type and `AuthContextType`.
2. Implement provider with state initialized from `localStorage` (if present).
3. Implement `login(email, password)` that accepts only `demo@codehunterlab.com` / `demo123` and returns a realistic user object.
4. Implement `logout()`.
5. Provide `isLoading` state.
6. Wrap the `(app)` group layout with the provider.

**Verification:**

- Login with wrong credentials shows error.
- Login with demo credentials stores user in localStorage.
- Logout clears storage.

---

### Task 5: Build login page

**Files:**

- Create: `LAB/app/[locale]/suite/login/page.tsx`
- Create: `LAB/components/suite/login/LoginForm.tsx`

**Steps:**

1. Full-height dark gradient background.
2. Centered glassmorphism card with logo, title, email/password inputs, submit button.
3. Show hint: "Try demo@codehunterlab.com / demo123".
4. On success, redirect to `/{locale}/suite/crm`.
5. Validate empty fields.

**Verification:**

- Login flow works end-to-end.
- Form is responsive.

---

### Task 6: Build AuthGuard and SuiteLayout

**Files:**

- Create: `LAB/components/suite/layout/AuthGuard.tsx`
- Create: `LAB/components/suite/layout/SuiteLayout.tsx`
- Modify: `LAB/app/[locale]/suite/(app)/layout.tsx`

**Steps:**

1. `AuthGuard`: if not authenticated, redirect to `/suite/login`; while loading, show full-page skeleton.
2. `SuiteLayout`: flex container with fixed left sidebar, top nav, and scrollable main area.
3. Main area has consistent page padding.

**Verification:**

- Accessing `/suite/crm` while logged out redirects to login.
- After login, protected routes render inside the shell.

---

### Task 7: Build Sidebar

**Files:**

- Create: `LAB/components/suite/layout/Sidebar.tsx`

**Steps:**

1. Fixed width sidebar (256px desktop), collapsible to icon-only (72px).
2. Product logo and collapse toggle at top.
3. Navigation sections: CRM module links (Dashboard, Leads, Companies, Contacts, Opportunities, Pipeline, Calendar, Tasks, Emails, WhatsApp, AI Assistant, Analytics, Reports, Settings).
4. Active link styling with subtle primary background.
5. Mobile: sidebar hidden, toggled via sheet from top nav.

**Verification:**

- Navigation works between CRM pages.
- Collapse/expand works.
- Mobile sheet opens/closes.

---

### Task 8: Build TopNav and ProductSwitcher

**Files:**

- Create: `LAB/components/suite/layout/TopNav.tsx`
- Create: `LAB/components/suite/layout/ProductSwitcher.tsx`

**Steps:**

1. TopNav: logo on mobile, global search input (visual only), notifications bell with badge, user avatar dropdown (profile, settings, logout), mobile menu toggle.
2. ProductSwitcher: dropdown listing HunterCRM, HunterERP, HunterDesk, HunterBookings, HunterFlow, HunterAnalytics, HunterAI. Live item links to CRM; others show "Coming soon" badge and stay disabled.

**Verification:**

- Notifications popover opens.
- User dropdown has logout.
- ProductSwitcher shows status badges.

---

## Phase 3 — Suite Landing Page

### Task 9: Build `/suite` landing page

**Files:**

- Create: `LAB/app/[locale]/suite/page.tsx`
- Create: `LAB/content/suite/products.ts`

**Steps:**

1. Hero section with headline "CodeHunter Suite", subheadline, and CTAs ("Explore HunterCRM", "View live demo").
2. Product grid reading from `content/suite/products.ts`.
3. Each card: icon, name, description, status badge, hover lift + gradient border effect.
4. Use Framer Motion for staggered entrance.
5. Footer consistent with marketing site (reuse existing Footer component if available).

**Verification:**

- Landing renders all 7 products.
- Hover animations work.
- CTA navigates to login or CRM demo.

---

## Phase 4 — HunterCRM Data & Shared UI

### Task 10: Define CRM types and realistic mock data

**Files:**

- Create: `LAB/lib/suite/types/crm.ts`
- Create: `LAB/lib/suite/types/suite.ts`
- Create: `LAB/lib/suite/data/users.ts`
- Create: `LAB/lib/suite/data/crm.ts`
- Create: `LAB/lib/suite/data/activities.ts`

**Steps:**

1. Types: `Lead`, `Company`, `Contact`, `Opportunity`, `Task`, `Email`, `WhatsAppMessage`, `WhatsAppChat`, `Activity`, `User`, `Notification`.
2. Generate ~50 leads, ~30 companies, ~40 contacts, ~25 opportunities, ~20 tasks, ~15 emails, ~8 WhatsApp chats, ~30 activities.
3. Use realistic names, companies, values, dates, statuses.
4. Provide async helper functions (e.g., `getLeads()`, `getOpportunities()`) returning Promises with artificial delay.

**Verification:**

- All types compile.
- Data helpers return expected arrays.

---

### Task 11: Build shared UI primitives

**Files:**

- Create: `LAB/components/suite/ui/PageHeader.tsx`
- Create: `LAB/components/suite/ui/EmptyState.tsx`
- Create: `LAB/components/suite/ui/LoadingState.tsx`
- Create: `LAB/components/suite/ui/StatCard.tsx`
- Create: `LAB/components/suite/ui/ActivityFeed.tsx`

**Steps:**

1. `PageHeader`: breadcrumb, title, optional description, action buttons slot.
2. `EmptyState`: icon, title, description, CTA button.
3. `LoadingState`: full-page and inline skeleton variants.
4. `StatCard`: label, value (mono font), change pill, optional icon.
5. `ActivityFeed`: list of activities with avatar, text, timestamp.

**Verification:**

- Components render correctly in Storybook-free test page or dashboard.

---

### Task 12: Build DataTable component

**Files:**

- Create: `LAB/components/suite/ui/DataTable.tsx`

**Steps:**

1. Generic table with column definitions.
2. Global search by configurable fields.
3. Column sorting.
4. Pagination (10/25/50 rows per page).
5. Row actions dropdown.
6. Empty state and loading skeleton.
7. Mobile: horizontal scroll wrapper.

**Verification:**

- Render with leads data; search, sort, paginate work.

---

### Task 13: Build chart components

**Files:**

- Create: `LAB/components/suite/charts/RevenueChart.tsx`
- Create: `LAB/components/suite/charts/PipelineChart.tsx`
- Create: `LAB/components/suite/charts/LeadSourceChart.tsx`
- Create: `LAB/components/suite/charts/ConversionChart.tsx`

**Steps:**

1. Wrap `recharts` components in responsive containers.
2. Use dark theme colors from CSS variables.
3. Tooltips styled to match UI.
4. Provide loading state.

**Verification:**

- Charts render in dashboard without errors.

---

## Phase 5 — HunterCRM Pages

### Task 14: Build CRM Dashboard

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/page.tsx`

**Steps:**

1. PageHeader with title "Dashboard" and date filter.
2. 4 StatCards: Pipeline Value, Revenue This Month, Win Rate, Tasks Due.
3. Chart row: RevenueChart + PipelineChart.
4. Bottom row: ActivityFeed + AI Suggestions card.
5. Use Framer Motion for staggered reveal.

**Verification:**

- Dashboard matches design spec.
- All data is realistic.

---

### Task 15: Build Leads page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/leads/page.tsx`
- Create: `LAB/components/suite/modals/LeadModal.tsx`

**Steps:**

1. PageHeader with "Leads" and "New Lead" button.
2. FilterBar: search, status select, owner select.
3. `DataTable` with columns: name, company, email, status, source, owner, value, actions.
4. New/Edit modal with form fields.
5. Delete action with confirmation.

**Verification:**

- Table lists leads; filters and modals work.

---

### Task 16: Build Companies and Contacts pages

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/companies/page.tsx`
- Create: `LAB/app/[locale]/suite/(app)/crm/contacts/page.tsx`

**Steps:**

1. Similar structure to Leads page.
2. Companies columns: name, industry, size, location, owner, actions.
3. Contacts columns: name, email, phone, company, role, owner, actions.
4. Modals for create/edit.

**Verification:**

- Both pages render and filter correctly.

---

### Task 17: Build Opportunities page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/opportunities/page.tsx`
- Create: `LAB/components/suite/modals/DealModal.tsx`

**Steps:**

1. Table with columns: deal name, company, stage, value, probability, close date, owner.
2. Stage filter and value range filter.
3. New/edit deal modal.

**Verification:**

- Opportunities table works.

---

### Task 18: Build Pipeline Kanban page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/pipeline/page.tsx`
- Create: `LAB/components/suite/ui/KanbanBoard.tsx`

**Steps:**

1. KanbanBoard using `@dnd-kit`.
2. Columns: New, Qualified, Proposal, Negotiation, Closed Won, Closed Lost.
3. Cards display deal info, value, priority, owner avatar.
4. Drag cards between columns; update state.
5. Click card opens detail drawer with AI follow-up suggestions.
6. "Add deal" button opens DealModal.

**Verification:**

- Drag and drop works across columns.
- State updates reflect in UI.
- Drawer shows AI suggestions.

---

### Task 19: Build Calendar page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/calendar/page.tsx`

**Steps:**

1. Monthly calendar using shadcn Calendar.
2. Event dots on days with events.
3. Upcoming events list below.
4. Event type badges (call, meeting, demo, follow-up).

**Verification:**

- Calendar renders events; navigation between months works.

---

### Task 20: Build Tasks page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/tasks/page.tsx`
- Create: `LAB/components/suite/modals/TaskModal.tsx`

**Steps:**

1. Task list with checkbox completion.
2. Filters: all, today, overdue, completed.
3. Priority badges.
4. Add/edit task modal.

**Verification:**

- Tasks can be marked complete/incomplete.
- Filters work.

---

### Task 21: Build Emails page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/emails/page.tsx`

**Steps:**

1. Two-column layout: inbox list + reading pane.
2. Email list with read/unread states.
3. Reading pane shows full email.
4. Compose button opening a mock composer drawer.

**Verification:**

- Selecting an email shows its content.
- Read/unread toggle works.

---

### Task 22: Build WhatsApp Inbox page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/whatsapp/page.tsx`

**Steps:**

1. Two-column layout: chat list + conversation.
2. Chat list with last message preview and unread badge.
3. Message bubbles (sent vs received).
4. Input to send a message (appears locally in chat).

**Verification:**

- Chat selection works.
- Sending a mock message updates the thread.

---

### Task 23: Build AI Assistant page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/ai-assistant/page.tsx`
- Create: `LAB/components/suite/ui/AIMessage.tsx`

**Steps:**

1. Chat interface with message list.
2. Suggested prompt chips.
3. Simulated AI responses with typing effect.
4. Responses based on prompt type (follow-ups, summary, email draft).

**Verification:**

- Chat scrolls; typing effect visible; suggestions generate plausible responses.

---

### Task 24: Build Analytics page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/analytics/page.tsx`

**Steps:**

1. Period selector (7d, 30d, 90d, 1y).
2. KPI row.
3. Charts: RevenueChart, LeadSourceChart, ConversionChart.
4. Team performance table.

**Verification:**

- Period changes update displayed data.
- Charts render.

---

### Task 25: Build Reports page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/reports/page.tsx`

**Steps:**

1. Saved reports table.
2. "Generate report" flow with type select and mock progress.
3. Download button (mock).

**Verification:**

- Generate report shows progress and then success state.

---

### Task 26: Build Settings page

**Files:**

- Create: `LAB/app/[locale]/suite/(app)/crm/settings/page.tsx`

**Steps:**

1. Tabs: Profile, Notifications, Team, Integrations, Appearance.
2. Profile form with name, email, role, avatar.
3. Notifications toggles.
4. Team member list.
5. Integrations grid with toggle switches.
6. Appearance tab with dark/light/system toggle.

**Verification:**

- Tabs switch.
- Theme toggle updates UI.

---

## Phase 6 — Extensibility & Placeholders

### Task 27: Create product registry and placeholder pages

**Files:**

- Create: `LAB/lib/suite/registry.ts`
- Create: `LAB/app/[locale]/suite/(app)/erp/page.tsx`
- Create: `LAB/app/[locale]/suite/(app)/desk/page.tsx`
- Create: `LAB/app/[locale]/suite/(app)/bookings/page.tsx`

**Steps:**

1. Registry defines all products with slug, name, icon, href, status, color, description.
2. Sidebar and ProductSwitcher consume registry.
3. Placeholder pages show premium "Coming soon" state with feature preview cards.

**Verification:**

- ProductSwitcher reflects registry.
- Placeholder pages render consistently.

---

## Phase 7 — Polish & Quality

### Task 28: Add empty states and loading skeletons

**Files:**

- Modify: all CRM page files where missing.

**Steps:**

1. Ensure every list/table has an empty state.
2. Ensure every async section has a loading skeleton.
3. Verify no blank screens.

**Verification:**

- Temporarily empty data arrays to confirm empty states.

---

### Task 29: Responsive pass

**Files:**

- Modify: `LAB/components/suite/layout/Sidebar.tsx`
- Modify: `LAB/components/suite/layout/TopNav.tsx`
- Modify: all page files.

**Steps:**

1. Test all pages at 375px, 768px, 1440px.
2. Fix overflowing tables with horizontal scroll.
3. Adjust grid layouts for mobile.
4. Ensure mobile sidebar sheet works.

**Verification:**

- Manual viewport checks in browser.

---

### Task 30: Final build, typecheck, lint, and smoke test

**Files:**

- Create: `LAB/tests/suite/auth.test.mjs`

**Steps:**

1. Run `npm run typecheck`.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Write a smoke test that verifies the login page renders and accepts demo credentials (mock DOM or simple route check).
5. Run `npm test`.

**Verification:**

- All checks pass.
- Build completes without errors.

---

## Task Order & Dependencies

```
Phase 1 (Setup)
  Task 1 → Task 2 → Task 3

Phase 2 (Shell)
  Task 4 → Task 5
  Task 6 → Task 7 → Task 8

Phase 3 (Landing)
  Task 9

Phase 4 (Data + Shared UI)
  Task 10 → Task 11 → Task 12 → Task 13

Phase 5 (CRM Pages)
  Task 14 → parallel Tasks 15-26

Phase 6 (Extensibility)
  Task 27

Phase 7 (Polish)
  Task 28 → Task 29 → Task 30
```

---

## Notes for Implementers

- Prefer shadcn/ui components over custom ones when available.
- Keep files focused: one main responsibility per file.
- Use TypeScript strictly; avoid `any`.
- All data mutations are client-side mocks.
- Animations should be subtle and purposeful, not decorative noise.
- Ensure the `/suite` experience feels distinct from the marketing site while maintaining CodeHunterLab branding.
