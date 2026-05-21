"use client";

import { useParams } from "next/navigation";
import NotFoundContent from "@/components/layout/NotFoundContent";

export default function NotFound() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";
  return <NotFoundContent locale={locale} />;
}
