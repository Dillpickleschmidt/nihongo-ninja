import { createContext, useContext } from "react";

export type Theme = "light" | "dark" | "system";

export const THEME_KEY = "theme";
export const DEFAULT_THEME: Theme = "system";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  // false until the saved choice is loaded. Mobile reads storage async; web is
  // hydrated from the cookie at first render.
  hydrated: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}

// Runs in <head> before paint. Sets the `dark` class from the theme cookie, so
// the first frame matches the saved choice. "system" resolves from the OS.
export const themeInitScript =
  `var t=(document.cookie.match(/(?:^|; )theme=(light|dark|system)/)||[])[1]||"system";` +
  `document.documentElement.classList.toggle("dark",t==="dark"||` +
  `(t==="system"&&matchMedia("(prefers-color-scheme: dark)").matches));`;
