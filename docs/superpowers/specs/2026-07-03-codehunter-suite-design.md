# CodeHunter Suite Demo — Design Specification

> **Approved:** 2026-07-03  
> **Goal:** Build a premium, production-looking demo of CodeHunter Suite: a suite landing page plus a fully functional HunterCRM deep demo, integrated into the existing Next.js marketing site and architected for future extension of HunterERP, HunterDesk, and HunterBookings.

---

## 1. Context

The project lives at `/Users/albertgarcia/Desktop/Proyectos y carpetas/CODEHUNTER/LAB/LAB/`, an existing Next.js 14 marketing site for CodeHunterLab. The new demo must integrate cleanly under the existing i18n routing (`/{locale}/suite`) without breaking the public site.

The existing `/lab/app` mockup is intentionally lightweight. The new `/suite` experience should feel like a separate, premium SaaS product while sharing the site's global layout conventions where appropriate.

---

## 2. Product Identity

The suite is marketed as a collection of products:

| Product             | Purpose                                         | Status in demo        |
| ------------------- | ----------------------------------------------- | --------------------- |
| **HunterCRM**       | Gestión de clientes, leads, pipeline y ventas   | Fully functional      |
| **HunterERP**       | Gestión empresarial: inventario, finanzas, RRHH | Placeholder / preview |
| **HunterDesk**      | Plataforma de soporte al cliente con IA         | Placeholder / preview |
| **HunterBookings**  | Sistema de reservas y scheduling                | Placeholder / preview |
| **HunterFlow**      | Automatizaciones y workflows                    | Mentioned on landing  |
| **HunterAnalytics** | KPIs y business intelligence                    | Mentioned on landing  |
| **HunterAI**        | Asistente inteligente                           | Integrated into CRM   |

---

## 3. Information Architecture

### Public routes

- `/{locale}/suite` — Suite landing page
- `/{locale}/suite/login` — Demo login

### Protected app routes (HunterCRM)

- `/{locale}/suite/crm` — Dashboard
- `/{locale}/suite/crm/leads`
- `/{locale}/suite/crm/companies`
- `/{locale}/suite/crm/contacts`
- `/{locale}/suite/crm/opportunities`
- `/{locale}/suite/crm/pipeline`
- `/{locale}/suite/crm/calendar`
- `/{locale}/suite/crm/tasks`
- `/{locale}/suite/crm/emails`
- `/{locale}/suite/crm/whatsapp`
- `/{locale}/suite/crm/ai-assistant`
- `/{locale}/suite/crm/analytics`
- `/{locale}/suite/crm/reports`
- `/{locale}/suite/crm/settings`

### Extensible placeholder routes

- `/{locale}/suite/erp`
- `/{locale}/suite/desk`
- `/{locale}/suite/bookings`

### Layout nesting

```
app/[locale]/suite/
  layout.tsx           # Marketing-like landing + login wrapper
  page.tsx             # Suite landing
  login/page.tsx       # Login form
  (app)/
    layout.tsx         # AuthGuard + SuiteLayout
    crm/
      layout.tsx       # CRM sidebar nav + page header wrapper
      page.tsx         # Dashboard
      ...
    erk/page.tsx       # Placeholder
    desk/page.tsx      # Placeholder
    bookings/page.tsx  # Placeholder
```

---

## 4. Design System

### Aesthetic direction

- **Clean and minimal** — Apple meets Linear meets Vercel.
- **Premium B2B SaaS** — professional, trustworthy, modern.
- **Lots of whitespace**, excellent typography hierarchy.
- **Rounded corners** 12–16px for cards, 8–10px for inputs/buttons.
- **Soft shadows** at `0 4px 24px rgba(0,0,0,0.08)` range.
- **Subtle gradients** for hero cards and active states.
- **Glassmorphism** only in modals, dropdowns, and tooltips where it improves depth.
- **Smooth micro-interactions** on hover, focus, and page transitions.
- **Dark mode default** inside `/suite/*`; toggle available in settings.
- **Responsive desktop-first**, but all views must be usable on mobile.

### Color palette

CSS variables mapped to Tailwind:

```
--primary:   #2563EB
--accent:    #7C3AED
--success:   #22C55E
--warning:   #F59E0B
--danger:    #EF4444
--background:#0A0A0F
--surface:   #141419
--surface-2: #1E1E24
--border:    rgba(255,255,255,0.08)
--text:      #F5F5F7
--text-muted:rgba(255,255,255,0.55)
```

### Typography

- **Display / headings:** Geist Sans (semibold, tight tracking `-0.03em` to `-0.05em`).
- **Body:** Geist Sans (normal, `leading-relaxed`).
- **Mono / data:** Geist Mono (tabular numbers, code, metrics).

### Spacing

- Page padding: `24px` mobile, `32px` tablet, `40px` desktop.
- Card padding: `20px`–`24px`.
- Section gap: `24px`–`32px`.

### Motion

- Page transition: `0.25s ease-out` fade + slight Y translate.
- Card hover: `transform: translateY(-2px)`, shadow increase, `0.2s ease`.
- Skeleton: subtle shimmer animation.
- Staggered reveals on dashboard and landing using Framer Motion.

---

## 5. Component Architecture

### Layout shell

| Component         | Responsibility                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `SuiteLayout`     | Wraps all `/suite/(app)` pages; provides sidebar + top nav + main scroll area.             |
| `AuthGuard`       | Checks auth context; redirects unauthenticated users to `/suite/login`.                    |
| `Sidebar`         | Collapsible vertical nav per product; product sections with icons; mobile becomes sheet.   |
| `TopNav`          | Global search trigger, notifications popover, user profile dropdown, theme toggle.         |
| `ProductSwitcher` | Dropdown to switch between HunterCRM / ERP / Desk / Bookings; non-live show "Coming soon". |
| `PageHeader`      | Breadcrumb, page title, description, primary actions.                                      |

### Reusable UI components

| Component          | Responsibility                                                                     |
| ------------------ | ---------------------------------------------------------------------------------- |
| `DataTable`        | Sortable, filterable, paginated table with search, empty state, loading skeleton.  |
| `KanbanBoard`      | Drag-and-drop columns and cards using `@dnd-kit`.                                  |
| `StatCard`         | KPI card with label, value, change indicator, sparkline optional.                  |
| `ChartCard`        | Card wrapper for `recharts` charts with header and period selector.                |
| `ActivityFeed`     | Vertical list of timestamped events with avatars and action links.                 |
| `EmptyState`       | Illustrated empty state with title, description, and CTA.                          |
| `LoadingState`     | Full-page and inline skeleton layouts.                                             |
| `AIMessage`        | Chat bubble component for AI assistant (user vs assistant).                        |
| `Modal` / `Drawer` | Wrappers around shadcn Dialog / Sheet for create/edit flows.                       |
| `FilterBar`        | Horizontal filter group with search input, selects, date picker, and clear button. |

---

## 6. Data Layer

### Auth

- React Context + `localStorage`.
- Demo credentials: `demo@codehunterlab.com` / `demo123`.
- Session object: `{ id, name, email, role, avatar, teamId }`.
- `login(email, password)` returns user on success, throws on failure.
- `logout()` clears state and storage.

### Mock data

- Static TypeScript files under `lib/suite/data/`.
- Realistic datasets: ~50 leads, ~30 companies, ~40 contacts, ~25 opportunities, ~20 tasks, ~15 emails, ~15 WhatsApp chats, ~30 activities.
- Helper functions simulate async API calls with `setTimeout(300–800ms)`.
- No real backend.

### State management

- **Auth state:** Context + localStorage.
- **UI state:** Context for sidebar collapsed, notifications read/unread, theme mode.
- **Local component state:** Tables filters, modal open/closed, kanban drag state.

---

## 7. Feature Specifications

### 7.1 Suite landing page

- Hero section with headline, subheadline, and CTAs ("Explore HunterCRM" / "View demo").
- Product grid: 7 product cards with icon, name, short description, status badge.
- Live products (HunterCRM) show "Live demo"; others show "Coming soon".
- Hover effects with gradient border and lift.
- Testimonials / trust bar (optional, lightweight).
- Footer consistent with marketing site.

### 7.2 Login page

- Centered card on dark gradient background.
- Email + password inputs with validation.
- Demo credentials hint below the form.
- Error message for wrong credentials.
- Success redirect to `/suite/crm`.

### 7.3 Dashboard

- 4 stat cards in a row: pipeline value, revenue this month, win rate, tasks due.
- 2 chart cards: revenue trend (line) and pipeline distribution (donut).
- Recent activity feed.
- AI suggestions card ("Follow up with ACME", "Schedule demo with...").
- Quick action buttons.

### 7.4 Leads / Companies / Contacts / Opportunities

- `DataTable` with relevant columns for each entity.
- Global search and column filters.
- Pagination.
- "New" button opening a modal/drawer form.
- Inline actions: view, edit, delete (mock).
- Empty state when filtered to zero results.

### 7.5 Pipeline (Kanban)

- Columns: New, Qualified, Proposal, Negotiation, Closed Won, Closed Lost.
- Cards show deal name, company, value, priority badge, owner avatar.
- Drag cards between columns; update opportunity stage in state.
- Click card opens detail drawer with AI follow-up suggestions.
- "Add deal" button.

### 7.6 Calendar

- Monthly view using shadcn Calendar + custom event dots.
- List of upcoming events below calendar.
- Event types: call, meeting, demo, follow-up.

### 7.7 Tasks

- Task list with checkbox, title, due date, priority, owner.
- Filters: all, today, overdue, completed.
- "Add task" modal.

### 7.8 Emails

- Inbox list with sender, subject, preview, date, read/unread.
- Click opens email detail panel.
- "Compose" button opening a mock composer.

### 7.9 WhatsApp Inbox

- Chat list on the left, conversation on the right.
- Message bubbles with timestamps.
- Input to send mock message (appears locally).

### 7.10 AI Assistant

- Chat interface.
- Suggested prompts: "Suggest follow-ups for today", "Summarize pipeline", "Draft email to...".
- Simulated responses with typing effect.

### 7.11 Analytics

- Period selector (7d, 30d, 90d, 1y).
- Charts: revenue, leads by source, conversion funnel, team performance.
- KPI row.

### 7.12 Reports

- List of saved reports with name, type, last run, actions.
- "Generate report" button with mock flow.

### 7.13 Settings

- Tabs: Profile, Notifications, Team, Integrations, Appearance.
- Forms with validation (mock save).
- Theme toggle.

---

## 8. Extensibility Design

- `lib/suite/registry.ts` defines products, their routes, icons, and status.
- The `Sidebar` and `ProductSwitcher` read from this registry.
- Each product can add its own `(app)/[product]/layout.tsx` for product-specific navigation.
- Shared shell components are product-agnostic.
- Future products only need: route group, data file, page components, and registry entry.

---

## 9. Quality & Testing

- TypeScript strict mode must pass (`npm run typecheck`).
- ESLint must pass in the worktree context.
- Build must succeed (`npm run build`).
- At least one smoke test for login.
- All pages render without runtime errors.
- Responsive manual verification on mobile viewport.

---

## 10. Non-Goals

- Real authentication backend.
- Real database or API.
- Real email/WhatsApp sending.
- Real-time collaboration.
- Billing or payments.
- Multi-tenant isolation.

---

## 11. Open Decisions

None. All decisions finalized in planning conversation.
