export interface SuiteProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // lucide icon name
  color: string; // tailwind color class for icon/accent
  status: "live" | "soon";
  href?: string;
}

export const suiteProducts: SuiteProduct[] = [
  {
    id: "crm",
    name: "HunterCRM",
    slug: "crm",
    description: "Customer relationship management with AI-powered pipeline and follow-ups.",
    icon: "Users",
    color: "hunter-green",
    status: "live",
    href: "/suite/crm",
  },
  {
    id: "erp",
    name: "HunterERP",
    slug: "erp",
    description: "Unified operations: inventory, finance, HR, and manufacturing.",
    icon: "Boxes",
    color: "blue-500",
    status: "soon",
  },
  {
    id: "desk",
    name: "HunterDesk",
    slug: "desk",
    description: "AI customer support across email, chat, WhatsApp, and social.",
    icon: "Headset",
    color: "violet-500",
    status: "soon",
  },
  {
    id: "bookings",
    name: "HunterBookings",
    slug: "bookings",
    description: "Smart scheduling, resources, staff, and payments.",
    icon: "CalendarCheck",
    color: "hunter-orange",
    status: "soon",
  },
  {
    id: "flow",
    name: "HunterFlow",
    slug: "flow",
    description: "Visual workflow automation and process orchestration.",
    icon: "GitBranch",
    color: "cyan-500",
    status: "soon",
  },
  {
    id: "analytics",
    name: "HunterAnalytics",
    slug: "analytics",
    description: "KPI dashboards, revenue forecasting, and business intelligence.",
    icon: "BarChart3",
    color: "emerald-500",
    status: "soon",
  },
  {
    id: "ai",
    name: "HunterAI",
    slug: "ai",
    description: "Intelligent assistant embedded across every product.",
    icon: "Sparkles",
    color: "amber-400",
    status: "soon",
  },
];
