import { cn } from "@nn/ui";

import { getModuleIcon, getModuleIconClasses } from "../learn/module-helpers";
import type { DashboardCard as DashboardCardType } from "./dashboard-cards-data";

export function DashboardCardTile({
  card,
  index,
  vocabDueCount,
}: {
  card: DashboardCardType;
  index: number;
  vocabDueCount?: number;
}) {
  const ModuleIcon = card.moduleType ? getModuleIcon(card.moduleType) : null;

  const dueLabel =
    card.dueCountType === "sentences"
      ? "–" // not tracked yet
      : card.dueCountType === "vocab"
        ? (vocabDueCount?.toString() ?? "–")
        : undefined;

  return (
    <div className="animate-fade-up relative" style={{ animationDelay: `${index * 75}ms` }}>
      <a
        href={card.href}
        className="dashboard-card block overflow-hidden rounded-[22px] border border-border/40 dark:border-white/5"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={card.image} alt={card.title} className="size-full object-cover" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.012) 38%, transparent 62%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

          {card.tags?.length ? (
            <div className="absolute right-2 bottom-2 flex flex-wrap justify-end gap-1">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/90 px-1.5 py-0.5 font-excalifont text-[10px] text-slate-700 shadow-sm dark:bg-background/80 dark:text-white/60 dark:shadow-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="absolute right-0 bottom-0 left-0 p-4">
            <div className="flex items-center gap-2">
              {ModuleIcon ? (
                <ModuleIcon className={cn("size-4", getModuleIconClasses(card.moduleType ?? ""))} />
              ) : null}
              <h3 className="font-semibold text-white">{card.title}</h3>
            </div>
            <p className="mt-1 line-clamp-2 text-sm text-white/75 dark:text-white/50">
              {card.description}
            </p>
          </div>
        </div>
      </a>

      {dueLabel === undefined ? null : (
        <div
          className="pointer-events-none absolute top-3 right-3 rounded-full border bg-white/90 px-2.5 py-1 text-xs font-medium shadow-sm backdrop-blur dark:bg-background/80 dark:shadow-none"
          style={{
            color: "var(--dynamic-accent)",
            borderColor: "color-mix(in srgb, var(--dynamic-accent) 20%, transparent)",
          }}
        >
          {dueLabel} due
        </div>
      )}
    </div>
  );
}
