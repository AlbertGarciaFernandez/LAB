import Link from "next/link";
import {
  BarChart3,
  Building2,
  CalendarCheck,
  Headphones,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/suite/registry";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Building2,
  Headphones,
  CalendarCheck,
  Workflow,
  BarChart3,
  Sparkles,
};

const colorMap: Record<string, { text: string; bg: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/10" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10" },
  green: { text: "text-green-400", bg: "bg-green-500/10" },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10" },
  pink: { text: "text-pink-400", bg: "bg-pink-500/10" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10" },
};

interface ProductPlaceholderProps {
  slug: string;
  locale: string;
}

export default function ProductPlaceholder({ slug, locale }: ProductPlaceholderProps) {
  const product = getProductBySlug(slug);
  if (!product) return null;

  const Icon = iconMap[product.icon];
  const colors = colorMap[product.color] ?? colorMap.blue;
  const features = product.features ?? [];

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center">
      <div
        className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl",
          colors.bg,
          colors.text
        )}
      >
        {Icon && <Icon className="h-8 w-8" />}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
      <p className="mt-2 max-w-md text-muted-foreground">{product.description} Coming soon.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature} className="bg-muted/50 p-4 text-center">
            <p className="text-sm font-medium">{feature}</p>
          </Card>
        ))}
      </div>
      <Button className="mt-8" asChild>
        <Link href={`/${locale}/suite/crm`}>Explore HunterCRM</Link>
      </Button>
    </div>
  );
}
