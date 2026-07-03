export interface SuiteProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // lucide icon name
  color: string; // tailwind color name
  status: "live" | "soon";
  href?: string;
  features?: string[];
}

export const SUITE_PRODUCTS: SuiteProduct[] = [
  {
    id: "crm",
    name: "HunterCRM",
    slug: "crm",
    description: "Customer relationship management with AI-powered pipeline and follow-ups.",
    icon: "Users",
    color: "blue",
    status: "live",
    href: "/suite/crm",
    features: ["Lead management", "Sales pipeline", "AI follow-ups", "Email & WhatsApp"],
  },
  {
    id: "erp",
    name: "HunterERP",
    slug: "erp",
    description: "Unified operations: inventory, finance, HR, and manufacturing.",
    icon: "Building2",
    color: "purple",
    status: "soon",
    href: "/suite/erp",
    features: ["Inventory", "Finance", "HR", "Manufacturing"],
  },
  {
    id: "desk",
    name: "HunterDesk",
    slug: "desk",
    description: "AI customer support across email, chat, WhatsApp, and social.",
    icon: "Headphones",
    color: "green",
    status: "soon",
    href: "/suite/desk",
    features: ["Unified inbox", "Tickets", "AI replies", "Knowledge base"],
  },
  {
    id: "bookings",
    name: "HunterBookings",
    slug: "bookings",
    description: "Smart scheduling, resources, staff, and payments.",
    icon: "CalendarCheck",
    color: "orange",
    status: "soon",
    href: "/suite/bookings",
    features: ["Online booking", "Calendar", "Staff management", "Payments"],
  },
  {
    id: "flow",
    name: "HunterFlow",
    slug: "flow",
    description: "Visual workflow automation and process orchestration.",
    icon: "Workflow",
    color: "pink",
    status: "soon",
    features: ["Workflow builder", "Automations", "Integrations"],
  },
  {
    id: "analytics",
    name: "HunterAnalytics",
    slug: "analytics",
    description: "KPI dashboards, revenue forecasting, and business intelligence.",
    icon: "BarChart3",
    color: "cyan",
    status: "soon",
    features: ["KPIs", "Forecasting", "Custom reports"],
  },
  {
    id: "ai",
    name: "HunterAI",
    slug: "ai",
    description: "Intelligent assistant embedded across every product.",
    icon: "Sparkles",
    color: "amber",
    status: "soon",
    features: ["Follow-up suggestions", "Summaries", "Drafts"],
  },
];

export const getLiveProducts = () => SUITE_PRODUCTS.filter((p) => p.status === "live");
export const getProductBySlug = (slug: string) => SUITE_PRODUCTS.find((p) => p.slug === slug);
