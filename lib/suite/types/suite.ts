export type SuiteProduct = "crm" | "analytics" | "content" | "seo" | "settings";

export interface SuiteNavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  product: SuiteProduct;
}

export interface Team {
  id: string;
  name: string;
  plan: "starter" | "growth" | "enterprise";
  createdAt: string;
}
