import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/suite/ThemeProvider";

export default function SuiteLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div
        className="dark min-h-screen bg-background text-foreground"
        style={
          {
            "--font-sans": "var(--font-geist-sans)",
            "--font-mono": "var(--font-geist-mono)",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
