import type { ReactNode } from "react";

import AuthGuard from "@/components/suite/layout/AuthGuard";
import SuiteLayout from "@/components/suite/layout/SuiteLayout";

export default function AppLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <AuthGuard>
      <SuiteLayout locale={params.locale}>{children}</SuiteLayout>
    </AuthGuard>
  );
}
