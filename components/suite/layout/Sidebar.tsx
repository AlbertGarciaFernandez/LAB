"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Contact,
  FileText,
  GitBranch,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Settings,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import ProductSwitcher from "./ProductSwitcher";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  exact?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface SidebarProps {
  locale: string;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}

export default function Sidebar({
  locale,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const pathname = usePathname();

  const sections: NavSection[] = [
    {
      title: "CRM",
      items: [
        { label: "Dashboard", href: `/${locale}/suite/crm`, icon: LayoutDashboard, exact: true },
        { label: "Leads", href: `/${locale}/suite/crm/leads`, icon: Users },
        { label: "Companies", href: `/${locale}/suite/crm/companies`, icon: Building2 },
        { label: "Contacts", href: `/${locale}/suite/crm/contacts`, icon: Contact },
        { label: "Opportunities", href: `/${locale}/suite/crm/opportunities`, icon: Target },
        { label: "Pipeline", href: `/${locale}/suite/crm/pipeline`, icon: GitBranch },
        { label: "Calendar", href: `/${locale}/suite/crm/calendar`, icon: CalendarDays },
        { label: "Tasks", href: `/${locale}/suite/crm/tasks`, icon: CheckCircle2 },
        { label: "Emails", href: `/${locale}/suite/crm/emails`, icon: Mail },
        { label: "WhatsApp", href: `/${locale}/suite/crm/whatsapp`, icon: MessageCircle },
        { label: "AI Assistant", href: `/${locale}/suite/crm/ai-assistant`, icon: Bot },
      ],
    },
    {
      title: "Insights",
      items: [
        { label: "Analytics", href: `/${locale}/suite/crm/analytics`, icon: BarChart3 },
        { label: "Reports", href: `/${locale}/suite/crm/reports`, icon: FileText },
      ],
    },
    {
      title: "System",
      items: [{ label: "Settings", href: `/${locale}/suite/crm/settings`, icon: Settings }],
    },
  ];

  const isActive = (item: NavItem) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  const renderNavItem = (item: NavItem, mobile = false) => {
    const active = isActive(item);
    const showTooltip = collapsed && !mobile;

    const linkContent = (
      <>
        <item.icon className="h-5 w-5 shrink-0" />
        {(!collapsed || mobile) && <span className="truncate">{item.label}</span>}
      </>
    );

    const link = (
      <Link
        href={item.href}
        onClick={() => mobile && setMobileOpen(false)}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
        )}
      >
        {linkContent}
      </Link>
    );

    if (showTooltip) {
      return (
        <Tooltip key={item.href}>
          <TooltipTrigger asChild>{link}</TooltipTrigger>
          <TooltipContent side="right">{item.label}</TooltipContent>
        </Tooltip>
      );
    }

    return <div key={item.href}>{link}</div>;
  };

  const renderNavSections = (mobile = false) => (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.title} className="space-y-1.5">
          {(!collapsed || mobile) && (
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </p>
          )}
          {collapsed && !mobile && (
            <div className="flex justify-center py-1">
              <div className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            </div>
          )}
          <nav className="space-y-1">
            {section.items.map((item) => renderNavItem(item, mobile))}
          </nav>
        </div>
      ))}
    </div>
  );

  const sidebarHeader = (mobile = false) => (
    <div
      className={cn(
        "flex h-16 items-center gap-2 border-b border-border px-4",
        collapsed && !mobile && "justify-center px-2"
      )}
    >
      <ProductSwitcher locale={locale} collapsed={collapsed && !mobile} />

      {!mobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("ml-auto text-muted-foreground hover:text-foreground", collapsed && "ml-0")}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden h-full flex-col border-r border-border bg-card transition-all duration-300 md:flex",
          collapsed ? "w-20" : "w-64"
        )}
      >
        {sidebarHeader(false)}
        <ScrollArea className="flex-1 py-4">
          <div className={cn("px-3", collapsed && "px-2")}>{renderNavSections(false)}</div>
        </ScrollArea>
      </aside>

      {/* Mobile sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0">
          {sidebarHeader(true)}
          <ScrollArea className="h-[calc(100vh-4rem)] py-4">
            <div className="px-3">{renderNavSections(true)}</div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
