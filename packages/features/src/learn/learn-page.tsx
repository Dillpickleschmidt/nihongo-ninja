import { useState } from "react";

import { FloatingKanji } from "../homepage/landing/floating-kanji";
import { ChapterSection } from "./chapter-section";
import { ViewToggle, type LearnViewMode } from "./components/view-toggle";
import { LearningPathProvider, useLearningPath } from "./context";
import { LearningPathHeader } from "./learning-path-header";

// The learn hub (web). Mobile renders learn-page.native.tsx instead.
export default function LearnPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <FloatingKanji char="忍" className="top-52 left-10" />

      <main className="mx-auto max-w-7xl px-4 pt-20 pb-32 md:px-6 md:pt-20 2xl:pt-28">
        <LearningPathProvider>
          <LearningPathHeader />
          <LearningPathSection />
        </LearningPathProvider>
      </main>
    </div>
  );
}

function LearningPathSection() {
  const [selectedView, setSelectedView] = useState<LearnViewMode>("grid");
  const { currentChapter, isCompleted, error, refetch } = useLearningPath();

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
          <div className="h-24 animate-pulse rounded bg-muted/70" />
          <div className="h-24 animate-pulse rounded bg-muted/70" />
        </div>
      ) : (
        <>
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
                Selected Chapter
              </p>
              <h2 className="mt-3 font-excalifont text-2xl font-bold text-foreground md:text-3xl">
                {currentChapter.title}
              </h2>
            </div>
            <ViewToggle selectedView={selectedView} setSelectedView={setSelectedView} />
          </div>

          <ChapterSection
            chapter={currentChapter}
            viewMode={selectedView}
            isCompleted={isCompleted}
          />
        </>
      )}
    </section>
  );
}
