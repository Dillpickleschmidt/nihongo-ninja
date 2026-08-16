import { cn } from "@nn/ui";
import { CircleCheckBig } from "lucide-react";

import type { LearningPathModule } from "../context";
import { getModuleIcon, getModuleIconClasses } from "../module-helpers";

type ModuleViewProps = {
  modules: LearningPathModule[];
  isCompleted: (moduleId: string) => boolean;
};

function moduleHref(module: LearningPathModule): string {
  const { to, search } = module.linkTo;
  if (!search) return to;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(search)) {
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.set(key, String(value));
    }
  }
  const searchStr = params.toString();
  return searchStr ? `${to}?${searchStr}` : to;
}

// Most module targets are not ported yet; plain anchors keep the typed Href
// union honest and 404 gracefully in dev.
export function ModuleListView({ modules, isCompleted }: ModuleViewProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {modules.map((module, index) => {
        const ModuleIcon = getModuleIcon(module.module.module_type);
        const completed = isCompleted(module.moduleId);

        return (
          <div key={module.moduleId} className="hover:scale-[98.5%]">
            <a
              href={module.disabled ? undefined : moduleHref(module)}
              className={cn(
                "group relative block h-12 w-full rounded-md border border-border/70 bg-card bg-gradient-to-br from-white/80 to-muted/40 font-outfit text-sm whitespace-nowrap shadow-sm backdrop-blur-sm dark:border-card-foreground/70 dark:from-neutral-600/15 dark:to-gray-600/10",
                completed && "border-green-500/50 font-semibold text-green-500",
                module.disabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:bg-accent",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-between overflow-x-auto overflow-y-hidden px-5",
                  completed && "bg-green-500/10",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn("text-primary", completed && "font-bold text-green-500")}>
                    {index + 1}.
                  </span>
                  <span
                    className={cn(
                      "text-foreground dark:text-muted-foreground",
                      completed && "font-bold text-green-500",
                    )}
                  >
                    {completed ? (
                      <CircleCheckBig className="mr-2 inline-flex h-4 w-4 dark:text-green-500" />
                    ) : null}
                    {module.module.title}
                  </span>
                </div>
                <div className="sticky right-0 flex shrink-0">
                  <ModuleIcon
                    size={20}
                    className={getModuleIconClasses(module.module.module_type)}
                  />
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

type CategoryKey = "vocabulary" | "lessons" | "grammar" | "other";

const CATEGORIES: Record<CategoryKey, { title: string; iconModuleType: string; types: string[] }> =
  {
    vocabulary: {
      title: "VOCABULARY",
      iconModuleType: "vocab-practice",
      types: ["vocab-list", "vocab-practice", "vocab-test"],
    },
    lessons: {
      title: "LESSONS",
      iconModuleType: "lesson",
      types: ["grammar-notes", "lesson"],
    },
    grammar: {
      title: "GRAMMAR",
      iconModuleType: "sentence-practice",
      types: ["sentence-practice", "conjugation-practice", "counter-practice"],
    },
    other: {
      title: "OTHER",
      iconModuleType: "audio",
      types: [],
    },
  };

export function ModuleCategorizedView({ modules, isCompleted }: ModuleViewProps) {
  const groups: Record<CategoryKey, LearningPathModule[]> = {
    vocabulary: [],
    lessons: [],
    grammar: [],
    other: [],
  };

  for (const module of modules) {
    const key = (Object.entries(CATEGORIES).find(([, config]) =>
      config.types.includes(module.module.module_type),
    )?.[0] ?? "other") as CategoryKey;
    groups[key].push(module);
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {(Object.entries(CATEGORIES) as [CategoryKey, (typeof CATEGORIES)[CategoryKey]][]).map(
        ([categoryKey, config]) => {
          const HeaderIcon = getModuleIcon(config.iconModuleType);

          return (
            <div key={categoryKey}>
              <div className="mb-4 flex items-center gap-2">
                <HeaderIcon size={20} className={getModuleIconClasses(config.iconModuleType)} />
                <h3 className="text-sm font-semibold text-muted-foreground">{config.title}</h3>
              </div>

              <div className="space-y-3">
                {groups[categoryKey].map((module) => {
                  const ModuleIcon = getModuleIcon(module.module.module_type);
                  const completed = isCompleted(module.moduleId);
                  const originalIndex = modules.findIndex((m) => m.moduleId === module.moduleId);

                  return (
                    <a
                      key={module.moduleId}
                      href={module.disabled ? undefined : moduleHref(module)}
                      className={cn(
                        "block transition-colors",
                        module.disabled && "cursor-not-allowed opacity-50",
                      )}
                    >
                      <div
                        className={cn(
                          "text-sm",
                          completed
                            ? "text-green-600 dark:text-green-500"
                            : "text-foreground hover:text-dynamic-accent",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <ModuleIcon
                            size={16}
                            className={getModuleIconClasses(module.module.module_type)}
                          />
                          <span>{module.module.title}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground/60">
                          {originalIndex + 1}.{" "}
                          {module.module.description ?? "Description coming soon"}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}
