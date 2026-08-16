import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { getDefaultChapterSlugForPath } from "@nn/data/backgrounds/learning-path-selection";
import { resolveBackground } from "@nn/data/backgrounds/resolve-background";
import { cn } from "@nn/ui";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BackgroundPreviewMedia } from "./components/background-preview-media";
import { DueCountBadge } from "./components/due-count-badge";
import { LearningPathBackgroundCard } from "./components/learning-path-background-card";
import { useLearningPath, type LearningPathChapter } from "./context";

export function LearningPathHeader() {
  const [isPathPanelOpen, setIsPathPanelOpen] = useState(false);
  const [chaptersExpanded, setChaptersExpanded] = useState(false);
  const {
    data,
    preferences,
    setPreference,
    selectedPathId,
    selectedPath,
    switchPath,
    isCompleted,
  } = useLearningPath();
  const chapterRefs = useRef(new Map<string, HTMLDivElement>());
  const chapterScrollContainer = useRef<HTMLDivElement>(null);

  const { data: dueCounts } = useQuery(convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}));

  const chapters = data?.chapters ?? [];
  const paths = data?.paths ?? [];
  const activeChapterSlug = preferences.activeChapter;
  const backgroundOverrides = preferences.backgroundOverrides;

  // Keep the active chapter card scrolled into view.
  useEffect(() => {
    if (!data || chaptersExpanded) return;
    const card = chapterRefs.current.get(activeChapterSlug);
    const container = chapterScrollContainer.current;
    if (!card || !container) return;
    container.scrollTo({
      top:
        card.offsetTop - container.offsetTop - container.clientHeight / 2 + card.clientHeight / 2,
      behavior: "smooth",
    });
  }, [data, activeChapterSlug, chaptersExpanded]);

  const totalModules = chapters.reduce((sum, chapter) => sum + chapter.modules.length, 0);
  const completedModules = chapters.reduce(
    (sum, chapter) => sum + chapter.modules.filter((m) => isCompleted(m.moduleId)).length,
    0,
  );

  const resolvePathBackground = (pathId: string) =>
    resolveBackground(pathId, getDefaultChapterSlugForPath(pathId), backgroundOverrides);
  const resolveChapterBackground = (chapterSlug: string) =>
    resolveBackground(selectedPathId, chapterSlug, backgroundOverrides);

  return (
    <section className="animate-fade-up">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
          Learning Path
        </div>
        <DueCountBadge
          count={dueCounts === undefined ? undefined : dueCounts.meanings + dueCounts.spellings}
        />
      </div>

      {data === undefined ? (
        <LearningPathHeaderSkeleton />
      ) : (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <div className="relative lg:w-56 lg:shrink-0">
            <button
              type="button"
              onClick={() => {
                setIsPathPanelOpen(!isPathPanelOpen);
              }}
              aria-expanded={isPathPanelOpen}
              className="group relative block w-full overflow-hidden rounded-2xl border border-dynamic-accent/55 text-left shadow-[0_14px_40px_-24px_var(--dynamic-accent)] lg:w-56"
            >
              <div className="relative h-24 lg:h-40">
                <BackgroundPreviewMedia
                  item={resolvePathBackground(selectedPathId).background}
                  width={420}
                  height={260}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute top-2 right-2 rounded-full bg-black/35 p-1.5 text-white/80 backdrop-blur-md transition-colors group-hover:bg-white/15 group-hover:text-white">
                <ChevronDown className="size-3.5" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="truncate text-xs font-semibold tracking-[0.16em] text-white uppercase">
                  {selectedPath?.shortName}
                </div>
                <div className="mt-2 text-xs text-white/60">
                  {completedModules} / {totalModules}
                </div>
              </div>
            </button>

            {isPathPanelOpen ? (
              <div
                className="absolute top-full left-0 z-40 mt-2 max-h-[70vh] w-110 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl border border-dynamic-accent/20 p-4 text-white shadow-xl backdrop-blur-2xl"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--dynamic-accent) 12%, rgb(10 10 10 / 0.78))",
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {paths.map((path) => (
                    <LearningPathBackgroundCard
                      key={path.id}
                      title={path.shortName}
                      aspect="16 / 9"
                      resolvedBackground={resolvePathBackground(path.id)}
                      active={selectedPathId === path.id}
                      onSelect={() => {
                        if (path.id !== selectedPathId) switchPath(path.id);
                        setIsPathPanelOpen(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative min-w-0 flex-1 border-border/70 lg:self-start lg:border-l lg:pl-5">
            <div
              ref={chapterScrollContainer}
              className={cn(
                "pr-1 pb-2 transition-[max-height] duration-200",
                chaptersExpanded ? "max-h-none overflow-visible" : "max-h-78 overflow-y-auto",
              )}
            >
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {chapters.map((chapter) => (
                  <ChapterCard
                    key={chapter.slug}
                    ref={(el) => {
                      if (el) chapterRefs.current.set(chapter.slug, el);
                    }}
                    chapter={chapter}
                    active={activeChapterSlug === chapter.slug}
                    completedCount={chapter.modules.filter((m) => isCompleted(m.moduleId)).length}
                    resolvedBackground={resolveChapterBackground(chapter.slug)}
                    onSelect={() => {
                      setPreference("activeChapter", chapter.slug);
                    }}
                  />
                ))}
              </div>
            </div>
            {chapters.length > 4 ? (
              <button
                type="button"
                onClick={() => {
                  setChaptersExpanded(!chaptersExpanded);
                }}
                className="group absolute inset-x-0 top-full flex w-full cursor-pointer flex-col items-center"
                aria-expanded={chaptersExpanded}
              >
                <div className="h-px w-full bg-border/70 lg:hidden" />
                <ChevronDown
                  className={cn(
                    "mt-2 size-5 text-muted-foreground/50 transition-all duration-200 group-hover:text-muted-foreground lg:size-4",
                    chaptersExpanded && "rotate-180",
                  )}
                />
              </button>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}

function LearningPathHeaderSkeleton() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
      <div className="h-24 animate-pulse rounded-2xl bg-muted/70 lg:h-40 lg:w-56 lg:shrink-0" />
      <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:border-l lg:border-border/70 lg:pl-5">
        <div className="h-32 animate-pulse rounded-2xl bg-muted/70 sm:w-44" />
        <div className="h-32 animate-pulse rounded-2xl bg-muted/70 sm:w-44" />
        <div className="h-32 animate-pulse rounded-2xl bg-muted/70 sm:w-44" />
        <div className="h-32 animate-pulse rounded-2xl bg-muted/70 sm:w-44" />
      </div>
    </div>
  );
}

function ChapterCard({
  ref,
  chapter,
  active,
  completedCount,
  resolvedBackground,
  onSelect,
}: {
  ref: (el: HTMLDivElement | null) => void;
  chapter: LearningPathChapter;
  active: boolean;
  completedCount: number;
  resolvedBackground: ReturnType<typeof resolveBackground>;
  onSelect: () => void;
}) {
  const total = chapter.modules.length;
  const percent = total === 0 ? 0 : (completedCount / total) * 100;

  return (
    <div
      ref={ref}
      className="group relative min-w-0 scroll-mt-2 overflow-hidden rounded-2xl sm:w-44 sm:shrink-0"
    >
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "block w-full overflow-hidden rounded-2xl border text-left transition-colors",
          active
            ? "border-2 border-dynamic-accent/80"
            : "border-border/40 hover:border-dynamic-accent/25",
        )}
      >
        <div className="relative h-32">
          <BackgroundPreviewMedia
            item={resolvedBackground.background}
            width={260}
            height={170}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          {active ? (
            <div className="absolute top-2 left-2 rounded-full bg-dynamic-accent/90 px-2 py-0.5 text-[10px] font-medium text-black">
              Active
            </div>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 p-3">
            <div className="truncate text-xs font-semibold tracking-[0.16em] text-white uppercase">
              {chapter.title}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-white/55">
                {completedCount}/{total}
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
