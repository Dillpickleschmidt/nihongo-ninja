import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { buildPathSelectionPreferences } from "@nn/data/backgrounds/learning-path-selection";
import { useQuery } from "@tanstack/react-query";
import type { FunctionReturnType } from "convex/server";
import { createContext, useContext, useMemo } from "react";

import { usePreferences, type Preferences } from "../preferences";

export type DashboardData = FunctionReturnType<typeof api.api.learning_paths.getDashboardData>;
export type LearningPathChapter = DashboardData["chapters"][number];
export type LearningPathModule = LearningPathChapter["modules"][number];

type LearningPathContextValue = {
  data: DashboardData | undefined;
  preferences: Preferences;
  setPreference: ReturnType<typeof usePreferences>["setPreference"];
  selectedPathId: string;
  currentChapter: LearningPathChapter | undefined;
  selectedPath: DashboardData["paths"][number] | undefined;
  switchPath: (pathId: string) => void;
  isCompleted: (moduleId: string) => boolean;
};

const LearningPathContext = createContext<LearningPathContextValue | null>(null);

export function LearningPathProvider({ children }: { children: React.ReactNode }) {
  const { preferences, setPreference, setPreferences } = usePreferences();
  const selectedPathId = preferences.activeLearningPath;

  const { data } = useQuery(
    convexQuery(api.api.learning_paths.getDashboardData, { pathId: selectedPathId }),
  );

  const value = useMemo<LearningPathContextValue>(() => {
    const chapters = data?.chapters;
    const currentChapter =
      chapters?.find((c) => c.slug === preferences.activeChapter) ?? chapters?.[0];
    const completedSet = new Set(data?.completedModules ?? []);

    return {
      data,
      preferences,
      setPreference,
      selectedPathId,
      currentChapter,
      selectedPath: data?.paths.find((p) => p.id === selectedPathId),
      switchPath: (pathId) => {
        setPreferences(buildPathSelectionPreferences(pathId));
      },
      isCompleted: (moduleId) => completedSet.has(moduleId),
    };
  }, [data, preferences, setPreference, setPreferences, selectedPathId]);

  return <LearningPathContext.Provider value={value}>{children}</LearningPathContext.Provider>;
}

export function useLearningPath(): LearningPathContextValue {
  const value = useContext(LearningPathContext);
  if (!value) throw new Error("useLearningPath must be used within LearningPathProvider");
  return value;
}
