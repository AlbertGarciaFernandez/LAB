import type { ReactNode } from "react";

import { AuthProvider } from "@/lib/suite/auth-context";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
