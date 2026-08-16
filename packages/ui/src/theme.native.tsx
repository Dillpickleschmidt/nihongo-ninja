import AsyncStorage from "@react-native-async-storage/async-storage";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { colorScheme } from "react-native-css";

import type { Theme } from "./theme-shared";
import { DEFAULT_THEME, isTheme, THEME_KEY, ThemeContext } from "./theme-shared";

// Native: colorScheme is react-native-css's reactive signal. Its
// prefers-color-scheme check reads the signal directly, so "system" must
// resolve to the real OS scheme — null would read as "not dark". The
// Appearance listener keeps the signal tracking OS changes and drives the
// status bar.
function applyScheme(theme: Theme) {
  Appearance.setColorScheme(theme === "system" ? null : theme);
  colorScheme.set(theme === "system" ? Appearance.getColorScheme() : theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [hydrated, setHydrated] = useState(false);

  // Load the saved choice once on launch.
  useEffect(() => {
    void AsyncStorage.getItem(THEME_KEY).then((saved) => {
      if (isTheme(saved)) {
        setThemeState(saved);
        applyScheme(saved);
      }
      setHydrated(true);
    });
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyScheme(next);
    void AsyncStorage.setItem(THEME_KEY, next);
  }, []);

  return <ThemeContext value={{ theme, setTheme, hydrated }}>{children}</ThemeContext>;
}
