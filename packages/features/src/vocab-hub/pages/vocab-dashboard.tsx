import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { authClient } from "../../auth/client";
import { usePreferences } from "../../preferences";
import { useVocab } from "../context";
import { ComingUpSection } from "./coming-up-section";
import { FolderBrowser } from "./folder-browser/folder-browser";
import { RecentlyStudiedSection } from "./recently-studied-section";

const FADE_UP_CSS = `
@keyframes vocab-fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
/* fill-mode both: NativeWind web utilities carry !important, which beats
   animations - so the hidden initial state must live in the keyframes. */
.animate-vocab-fade-up { animation: vocab-fade-up 0.3s ease-out both; }
`;

export function VocabDashboard({ chapterFromUrl }: { chapterFromUrl: string | undefined }) {
  const { folders, decks, isLoading } = useVocab();
  const { data: session } = authClient.useSession();
  const { preferences } = usePreferences();

  const { data: recentActivity } = useQuery({
    ...convexQuery(api.api.progress.getRecentModuleActivity, { limit: 20 }),
    enabled: !!session,
  });

  const { data: dashboardData } = useQuery({
    ...convexQuery(api.api.learning_paths.getDashboardData, {
      pathId: preferences.activeLearningPath,
    }),
    enabled: !!preferences.activeLearningPath,
  });

  const activeLearningPathName = dashboardData?.paths.find(
    (p) => p.id === preferences.activeLearningPath,
  )?.shortName;

  const activeChapterData =
    dashboardData?.chapters.find((c) => c.slug === preferences.activeChapter) ??
    dashboardData?.chapters[0];

  const recentVocabCompletions = useMemo(() => {
    const seen = new Set<string>();
    const results: { moduleId: string; completedAt: number }[] = [];
    for (const row of recentActivity ?? []) {
      if (row.moduleType !== "vocab-practice") continue;
      const deckId = row.modulePath.replace(/^vocab-deck:/, "");
      if (seen.has(deckId)) continue;
      seen.add(deckId);
      results.push({ moduleId: deckId, completedAt: row.lastUpdatedAt });
    }
    return results;
  }, [recentActivity]);

  return (
    <>
      <style href="vocab-fade-up" precedence="medium">
        {FADE_UP_CSS}
      </style>

      <div className="mx-auto max-w-4xl space-y-6 pt-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-sm text-muted-foreground">Loading...</div>
          </div>
        ) : (
          <>
            <div
              className="animate-vocab-fade-up flex flex-col gap-6 md:flex-row"
              style={{ animationDelay: "0ms" }}
            >
              <div className="md:w-1/2">
                <ComingUpSection
                  recentCompletions={recentVocabCompletions}
                  decks={decks}
                  chapter={activeChapterData}
                  learningPathName={activeLearningPathName}
                />
              </div>
              <div className="md:w-1/2">
                <RecentlyStudiedSection recentCompletions={recentVocabCompletions} decks={decks} />
              </div>
            </div>

            <div className="animate-vocab-fade-up" style={{ animationDelay: "75ms" }}>
              <FolderBrowser folders={folders} decks={decks} chapterFromUrl={chapterFromUrl} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
