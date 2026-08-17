import { useState } from "react";

import { CompletionsSyncDialog } from "../completions";
import { FloatingKanji } from "../homepage/landing/floating-kanji";
import { ChapterSection } from "./chapter-section";
import { ModuleDetailDialog } from "./components/module-detail-dialog";
import { ViewToggle, type LearnViewMode } from "./components/view-toggle";
import { LearningPathProvider, useLearningPath, type LearningPathModule } from "./context";
import { LearningPathHeader } from "./learning-path-header";

export default function LearnPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <FloatingKanji char="忍" className="top-52 left-10" />

      <main className="mx-auto max-w-7xl px-4 pt-20 pb-32 md:px-6 md:pt-20 2xl:pt-28">
        <LearningPathProvider>
          <LearningPathHeader />
          <LearningPathSection />
        </LearningPathProvider>
        <CompletionsSyncDialog />
      </main>
    </div>
  );
}

function LearningPathSection() {
  const [selectedView, setSelectedView] = useState<LearnViewMode>("grid");
  const [selectedModule, setSelectedModule] = useState<LearningPathModule | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { currentChapter, isCompleted, error, refetch, selectedPath, selectedPathId } =
    useLearningPath();

  // User-created paths open modules in a detail dialog instead of navigating.
  const openInDialog = selectedPath?.isUserCreated ?? false;
  const handleModuleSelect = (module: LearningPathModule) => {
    setSelectedModule(module);
    setDialogOpen(true);
  };

  return (
    <section className="animate-fade-up mt-8" style={{ animationDelay: "150ms" }}>
      {currentChapter === undefined && error !== null ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-6 text-sm">
          <p className="text-foreground">Could not load the chapter.</p>
          <button
            type="button"
            onClick={refetch}
            className="mt-3 cursor-pointer rounded-md border border-border px-3 py-1.5 text-foreground hover:bg-accent"
          >
            Try again
          </button>
        </div>
      ) : currentChapter === undefined ? (
        <div className="space-y-4">
          <div className="h-24 animate-pulse rounded bg-muted/70 dark:bg-white/5" />
          <div className="h-24 animate-pulse rounded bg-muted/70 dark:bg-white/5" />
        </div>
      ) : (
        <>
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase dark:text-white/35">
                Selected Chapter
              </p>
              <h2 className="mt-3 font-excalifont text-2xl font-bold text-foreground md:text-3xl dark:text-white">
                {currentChapter.title}
              </h2>
            </div>
            <ViewToggle selectedView={selectedView} setSelectedView={setSelectedView} />
          </div>

          <ChapterSection
            chapter={currentChapter}
            viewMode={selectedView}
            isCompleted={isCompleted}
            onModuleSelect={openInDialog ? handleModuleSelect : undefined}
          />
        </>
      )}

      {openInDialog && selectedModule !== null ? (
        <ModuleDetailDialog
          pathId={selectedPathId}
          module={selectedModule}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      ) : null}
    </section>
  );
}
