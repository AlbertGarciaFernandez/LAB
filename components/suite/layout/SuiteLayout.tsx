"use client";

import { useState } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

interface SuiteLayoutProps {
  children: React.ReactNode;
  locale: string;
}

export default function SuiteLayout({ children, locale }: SuiteLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
        <Sidebar
          locale={locale}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <TopNav locale={locale} onMenuClick={() => setMobileOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
