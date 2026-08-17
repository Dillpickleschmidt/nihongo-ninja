import { cn } from "@nn/ui";
import { ArrowRight, Compass } from "lucide-react";

import { moduleHref } from "../learn/components/module-views";
import type { LearningPathModule } from "../learn/context";
import { getModuleIcon, getModuleIconClasses } from "../learn/module-helpers";

export type NextDashboardModule = LearningPathModule & { chapterTitle: string };

// Flat, borderless container — items only differ by hover/padding.
const ITEM_BASE = "flex flex-col rounded-lg px-3 py-2";
const ITEM_INTERACTIVE = `group/item ${ITEM_BASE} text-left transition-colors hover:bg-foreground/[0.04] dark:hover:bg-white/[0.04]`;

// The dashboard header's action pair — "next up" and "due for review" as
// flat typographic blocks that read as part of the header.
export function TodayActionsPanel({
  className,
  mod,
  nextLoading,
  meanings,
  spellings,
  total,
  onStartReview,
}: {
  className?: string;
  mod: NextDashboardModule | undefined;
  nextLoading: boolean;
  meanings: number | undefined;
  spellings: number | undefined;
  total: number | undefined;
  onStartReview: () => void;
}) {
  return (
    <div className={cn("flex flex-col gap-1 sm:flex-row sm:items-stretch", className)}>
      <NextUpItem mod={mod} loading={nextLoading} />
      <div className="my-1.5 hidden w-px shrink-0 self-stretch bg-border/60 sm:block dark:bg-white/[0.08]" />
      <ReviewItem meanings={meanings} spellings={spellings} total={total} onStart={onStartReview} />
    </div>
  );
}

function NextUpItem({ mod, loading }: { mod: NextDashboardModule | undefined; loading: boolean }) {
  if (mod === undefined) {
    if (loading) return <ItemSkeleton flex />;
    return (
      <a href="/learn" className={cn(ITEM_INTERACTIVE, "min-w-0 flex-1")}>
        <Overline>Next up</Overline>
        <div className="mt-1.5 flex items-center gap-2">
          <Compass className="size-[1.05rem] shrink-0 text-muted-foreground" />
          <span className="min-w-0 flex-1 truncate text-[0.95rem] font-semibold text-foreground/85">
            Choose a learning path
          </span>
          <ActionText label="Browse" />
        </div>
      </a>
    );
  }

  const ModuleIcon = getModuleIcon(mod.module.module_type);
  return (
    <a href={moduleHref(mod)} className={cn(ITEM_INTERACTIVE, "min-w-0 flex-1")}>
      <Overline>Next up</Overline>
      <div className="mt-1.5 flex items-center gap-2">
        <ModuleIcon
          className={cn("size-[1.05rem] shrink-0", getModuleIconClasses(mod.module.module_type))}
        />
        <span className="min-w-0 flex-1 truncate text-[0.95rem] font-semibold text-foreground/85">
          {mod.module.title}
        </span>
        <ActionText label="Continue" />
      </div>
    </a>
  );
}

function ReviewItem({
  meanings,
  spellings,
  total,
  onStart,
}: {
  meanings: number | undefined;
  spellings: number | undefined;
  total: number | undefined;
  onStart: () => void;
}) {
  if (total === undefined) return <ItemSkeleton />;

  if (total === 0) {
    return (
      <div className={cn(ITEM_BASE, "shrink-0")}>
        <Overline>Due for review</Overline>
        <p className="mt-1.5 text-[0.95rem] font-medium text-foreground/45">
          You&apos;re all caught up
        </p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onStart}
      className={cn(ITEM_INTERACTIVE, "shrink-0 cursor-pointer")}
    >
      <Overline>Due for review</Overline>
      <div className="mt-1.5 flex items-center gap-2.5">
        <span
          className="text-[0.95rem] leading-none font-bold tabular-nums"
          style={{ color: "var(--dynamic-accent)" }}
        >
          {total}
        </span>
        <ReviewChip symbol="読" symbolClass="text-sky-500 dark:text-sky-300" value={meanings} />
        <ReviewChip
          symbol="あ"
          symbolClass="text-orange-500 dark:text-orange-300"
          value={spellings}
        />
        <ActionText label="Review" />
      </div>
    </button>
  );
}

// Flat text "button" — accent label with an arrow that nudges on hover.
function ActionText({ label }: { label: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold"
      style={{ color: "var(--dynamic-accent)" }}
    >
      {label}
      <ArrowRight className="size-3.5 transition-transform group-hover/item:translate-x-0.5" />
    </span>
  );
}

function ReviewChip({
  symbol,
  symbolClass,
  value,
}: {
  symbol: string;
  symbolClass: string;
  value: number | undefined;
}) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span className={cn("font-japanese text-[0.85rem] leading-none", symbolClass)}>{symbol}</span>
      <span className="text-[0.8rem] font-semibold text-foreground/65 tabular-nums">
        {value ?? "–"}
      </span>
    </span>
  );
}

function Overline({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.6rem] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase">
      {children}
    </span>
  );
}

function ItemSkeleton({ flex }: { flex?: boolean }) {
  return (
    <div className={cn(ITEM_BASE, flex ? "min-w-0 flex-1" : "shrink-0")}>
      <div className="h-2.5 w-14 animate-pulse rounded bg-muted/60" />
      <div className="mt-2 flex items-center gap-2">
        <div className="size-[1.05rem] shrink-0 animate-pulse rounded bg-muted/60" />
        <div
          className="h-3.5 animate-pulse rounded bg-muted/70"
          style={{ width: flex ? "9rem" : "6rem" }}
        />
      </div>
    </div>
  );
}
