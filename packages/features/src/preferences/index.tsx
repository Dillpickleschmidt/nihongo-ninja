import type { BackgroundOverrides } from "@nn/data/backgrounds/overrides";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Minimal client preferences for the learn hub and backgrounds. Persisted in
// localStorage; replaced by the cookie + Convex profile preferences system
// when the settings/auth features port.
export type Preferences = {
  activeLearningPath: string;
  activeChapter: string;
  backgroundOverrides: BackgroundOverrides;
  accentColor: string;
};

const DEFAULT_PREFERENCES: Preferences = {
  activeLearningPath: "genki_1",
  activeChapter: "chapter-0",
  backgroundOverrides: { chapters: {} },
  accentColor: "#797980",
};

const STORAGE_KEY = "nn-preferences";

type PreferencesContextValue = {
  preferences: Preferences;
  setPreference: <K extends keyof Preferences>(key: K, value: Preferences[K]) => void;
  setPreferences: (values: Partial<Preferences>) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function loadStoredPreferences(): Preferences {
  if (typeof localStorage === "undefined") return DEFAULT_PREFERENCES;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return DEFAULT_PREFERENCES;
  try {
    return { ...DEFAULT_PREFERENCES, ...(JSON.parse(raw) as Partial<Preferences>) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  // Server render uses defaults; the stored values apply after hydration.
  const [preferences, setPreferencesState] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    setPreferencesState(loadStoredPreferences());
  }, []);

  const value = useMemo<PreferencesContextValue>(() => {
    const persist = (next: Preferences) => {
      setPreferencesState(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    };
    return {
      preferences,
      setPreference: (key, val) => {
        persist({ ...preferences, [key]: val });
      },
      setPreferences: (values) => {
        persist({ ...preferences, ...values });
      },
    };
  }, [preferences]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences(): PreferencesContextValue {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}
