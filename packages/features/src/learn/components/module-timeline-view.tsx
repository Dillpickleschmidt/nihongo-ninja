import type { LearningPathModule } from "../context";
import { getModuleIcon, getModuleIconClasses } from "../module-helpers";
import { moduleHref } from "./module-views";
import { TimelineItem, TimelineList } from "./timeline-list";

export function ModuleTimelineView({
  modules,
  isCompleted,
  onModuleSelect,
}: {
  modules: LearningPathModule[];
  isCompleted: (moduleId: string) => boolean;
  onModuleSelect?: (module: LearningPathModule) => void;
}) {
  return (
    <TimelineList>
      {modules.map((module, index) => {
        const completed = isCompleted(module.moduleId);
        return (
          <TimelineItem
            key={module.moduleId}
            title={module.module.title}
            description={module.module.description || "Description coming soon"}
            href={moduleHref(module)}
            icon={getModuleIcon(module.module.module_type)}
            iconClass={getModuleIconClasses(module.module.module_type)}
            disabled={module.disabled}
            onSelect={
              onModuleSelect === undefined
                ? undefined
                : () => {
                    onModuleSelect(module);
                  }
            }
            className={completed ? "text-green-500" : undefined}
            dotClass={completed ? "border-green-500 bg-green-500" : undefined}
            last={index === modules.length - 1}
          />
        );
      })}
    </TimelineList>
  );
}
