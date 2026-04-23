"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Footer from "@/components/layout/Footer";

export default function LocaleFooterGate() {
  const segment = useSelectedLayoutSegment();

  if (segment === "lab") {
    return null;
  }

  return <Footer />;
}
