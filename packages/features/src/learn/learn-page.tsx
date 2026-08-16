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
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* opacity lives here, not in a utility: the important-mode
           opacity-0 utility would defeat the animation */
        .animate-fade-up { opacity: 0; animation: fade-up 0.3s ease-out forwards; }
      `}</style>

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
  const { currentChapter, isCompleted } = useLearningPath();

  return (
    <section className="animate-fade-up mt-8" style={{ animationDelay: "150ms" }}>
      {currentChapter === undefined ? (
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
