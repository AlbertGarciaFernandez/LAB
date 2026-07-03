"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Theme = "dark" | "light" | "system";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Default to dark for now; system is treated as dark to avoid hydration
  // mismatches until a client-side preference check is wired up.
  const isDark = theme === "dark" || theme === "system";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={isDark ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
