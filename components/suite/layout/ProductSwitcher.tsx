"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  shortName: string;
  colorClass: string;
  href?: string;
  status: "live" | "soon";
}

interface ProductSwitcherProps {
  locale: string;
  collapsed?: boolean;
}

export default function ProductSwitcher({ locale, collapsed = false }: ProductSwitcherProps) {
  const pathname = usePathname();

  const products: Product[] = [
    {
      id: "crm",
      name: "HunterCRM",
      shortName: "CRM",
      colorClass: "bg-blue-500",
      href: `/${locale}/suite/crm`,
      status: "live",
    },
    {
      id: "erp",
      name: "HunterERP",
      shortName: "ERP",
      colorClass: "bg-purple-500",
      status: "soon",
    },
    {
      id: "desk",
      name: "HunterDesk",
      shortName: "Desk",
      colorClass: "bg-green-500",
      status: "soon",
    },
    {
      id: "bookings",
      name: "HunterBookings",
      shortName: "Bookings",
      colorClass: "bg-orange-500",
      status: "soon",
    },
    {
      id: "flow",
      name: "HunterFlow",
      shortName: "Flow",
      colorClass: "bg-pink-500",
      status: "soon",
    },
    {
      id: "analytics",
      name: "HunterAnalytics",
      shortName: "Analytics",
      colorClass: "bg-cyan-500",
      status: "soon",
    },
    {
      id: "ai",
      name: "HunterAI",
      shortName: "AI",
      colorClass: "bg-indigo-500",
      status: "soon",
    },
  ];

  const currentProduct =
    products.find((p) => (p.href ? pathname.startsWith(p.href) : false)) ?? products[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "h-9 gap-2 px-2 text-sm font-semibold text-foreground hover:bg-surface-2",
            collapsed && "w-9 px-0"
          )}
          aria-label="Switch product"
        >
          <span className={cn("h-2.5 w-2.5 rounded-full", currentProduct.colorClass)} />
          {!collapsed && (
            <>
              <span className="truncate">{currentProduct.name}</span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {products.map((product) => {
          const isLive = product.status === "live";
          const content = (
            <>
              <span className={cn("h-2.5 w-2.5 rounded-full", product.colorClass)} />
              <span className="flex-1 truncate text-sm">{product.name}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  isLive ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"
                )}
              >
                {isLive ? "Live" : "Soon"}
              </span>
            </>
          );

          return isLive && product.href ? (
            <DropdownMenuItem key={product.id} asChild className="cursor-pointer">
              <Link href={product.href}>{content}</Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem key={product.id} disabled className="opacity-70">
              {content}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
