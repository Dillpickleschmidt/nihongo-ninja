import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

import type { Theme } from "./theme-shared";
import { DEFAULT_THEME, THEME_KEY, ThemeContext } from "./theme-shared";

// Web: the `dark` class on <html> drives every Tailwind `dark:` utility. The
// choice lives in a cookie so the server and the head script agree on it.
function applyClass(theme: Theme) {
  const dark =
    theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeProvider({
  children,
  initialTheme = DEFAULT_THEME,
}: {
  children: ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.cookie = `${THEME_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
    applyClass(next);
  }, []);

  // Follow the OS while on "system".
  useEffect(() => {
    if (theme !== "system") return;
    const query = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      applyClass("system");
    };
    query.addEventListener("change", onChange);
    return () => {
      query.removeEventListener("change", onChange);
    };
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme, hydrated: true }}>{children}</ThemeContext>;
}
