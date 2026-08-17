import { cn } from "@nn/ui";

import { ExternalResourcesSection } from "./components/external-resources";
import { ModuleTimelineView } from "./components/module-timeline-view";
import { ModuleCategorizedView, ModuleListView } from "./components/module-views";
import type { LearnViewMode } from "./components/view-toggle";
import type { LearningPathChapter, LearningPathModule } from "./context";

export function ChapterSection({
  chapter,
  viewMode,
  isCompleted,
  onModuleSelect,
}: {
  chapter: LearningPathChapter;
  viewMode: LearnViewMode;
  isCompleted: (moduleId: string) => boolean;
  onModuleSelect?: (module: LearningPathModule) => void;
}) {
  const hasExternalResources = chapter.externalResourceIds.length > 0;

  return (
    <div>
      <div
        className={cn(
          "mb-6",
          hasExternalResources && "flex flex-col gap-6 lg:flex-row lg:items-start",
        )}
      >
        <div className={cn(hasExternalResources && "min-w-0 flex-1")}>
          {chapter.description === undefined ? null : (
            <p className="text-muted-foreground dark:text-neutral-300">{chapter.description}</p>
          )}

          {chapter.features === undefined || chapter.features.length === 0 ? null : (
            <ul className="space-y-1">
              {chapter.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground dark:text-neutral-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {hasExternalResources ? (
          <div className="lg:w-1/2 lg:shrink-0">
            <ExternalResourcesSection externalResourceIds={chapter.externalResourceIds} />
          </div>
        ) : null}
      </div>

      {viewMode === "grid" ? (
        <>
          <div className="md:hidden">
            <ModuleTimelineView
              modules={chapter.modules}
              isCompleted={isCompleted}
              onModuleSelect={onModuleSelect}
            />
          </div>
          <div className="hidden md:block">
            <ModuleListView
              modules={chapter.modules}
              isCompleted={isCompleted}
              onModuleSelect={onModuleSelect}
            />
          </div>
        </>
      ) : (
        <ModuleCategorizedView
          modules={chapter.modules}
          isCompleted={isCompleted}
          onModuleSelect={onModuleSelect}
        />
      )}
    </div>
  );
}
