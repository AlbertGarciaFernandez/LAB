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
import { SUITE_PRODUCTS, type SuiteProduct } from "@/lib/suite/registry";
import { cn } from "@/lib/utils";

const colorClassMap: Record<string, string> = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  cyan: "bg-cyan-500",
  amber: "bg-amber-500",
};

interface ProductSwitcherProps {
  locale: string;
  collapsed?: boolean;
}

function getProductHref(product: SuiteProduct, locale: string) {
  return product.href ? `/${locale}${product.href}` : undefined;
}

export default function ProductSwitcher({ locale, collapsed = false }: ProductSwitcherProps) {
  const pathname = usePathname();

  const currentProduct =
    SUITE_PRODUCTS.find((product) => {
      const href = getProductHref(product, locale);
      return href ? pathname.startsWith(href) : false;
    }) ?? SUITE_PRODUCTS[0];

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
          <span
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              colorClassMap[currentProduct.color] ?? colorClassMap.blue
            )}
          />
          {!collapsed && (
            <>
              <span className="truncate">{currentProduct.name}</span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {SUITE_PRODUCTS.map((product) => {
          const isLive = product.status === "live";
          const href = getProductHref(product, locale);
          const colorClass = colorClassMap[product.color] ?? colorClassMap.blue;

          const content = (
            <>
              <span className={cn("h-2.5 w-2.5 rounded-full", colorClass)} />
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

          return isLive && href ? (
            <DropdownMenuItem key={product.id} asChild className="cursor-pointer">
              <Link href={href}>{content}</Link>
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
