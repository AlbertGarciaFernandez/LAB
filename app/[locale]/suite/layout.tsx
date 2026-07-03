import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/suite/ThemeProvider";
import { AuthProvider } from "@/lib/suite/auth-context";

export default function SuiteLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
