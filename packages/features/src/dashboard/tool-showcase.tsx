import { cn } from "@nn/ui";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getModuleIcon, getModuleIconClasses } from "../learn/module-helpers";
import type { DashboardCard } from "./dashboard-cards-data";

// Tool showcase — every practice tool is rendered stacked as an alternating
// two-column feature block. A sticky rail at the top quick-jumps between
// them and highlights whichever block is in view (scroll-spy).
export function ToolShowcase({
  tools,
  vocabDueCount,
}: {
  tools: DashboardCard[];
  vocabDueCount?: number;
}) {
  const [active, setActive] = useState(0);
  const [stuck, setStuck] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const railRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  // Ignore scroll-spy while a click-jump is animating, so the pill doesn't
  // race through every tab between origin and destination.
  const suppressSpy = useRef(false);

  const syncIndicator = () => {
    const el = tabRefs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  };

  // Keep the active tab centered within the rail's own horizontal scroll.
  // (scrollIntoView would scroll the page when the rail is off-screen.)
  useEffect(() => {
    syncIndicator();
    const tab = tabRefs.current[active];
    const rail = railRef.current;
    if (rail && tab) {
      rail.scrollTo({
        left: tab.offsetLeft - rail.clientWidth / 2 + tab.offsetWidth / 2,
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const jumpTo = (i: number) => {
    suppressSpy.current = true;
    setActive(i);
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      suppressSpy.current = false;
    }, 700);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tools.length - 1;
    let next: number;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    jumpTo(next);
    tabRefs.current[next]?.focus();
  };

  useEffect(() => {
    syncIndicator();
    void document.fonts?.ready.then(syncIndicator);
    const onResize = () => {
      syncIndicator();
    };
    window.addEventListener("resize", onResize);

    // Scroll-spy: the active tab follows the block under the sticky rail.
    const visible = Array.from({ length: tools.length }, () => false);
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = sectionRefs.current.indexOf(e.target as HTMLElement);
          if (i >= 0) visible[i] = e.isIntersecting;
        }
        if (suppressSpy.current) return;
        const first = visible.indexOf(true);
        if (first >= 0) setActive(first);
      },
      { rootMargin: "-96px 0px -55% 0px" },
    );
    for (const el of sectionRefs.current) {
      if (el) spy.observe(el);
    }

    // Toggle the rail's floating styling only once it's pinned to the top.
    const stick = new IntersectionObserver(
      ([e]) => {
        if (e) setStuck(e.boundingClientRect.top < 16);
      },
      { rootMargin: "-16px 0px 0px 0px" },
    );
    if (sentinelRef.current) stick.observe(sentinelRef.current);

    // Warm the image cache so jumps land on an already-loaded screenshot.
    for (const tool of tools) {
      const img = new Image();
      img.src = tool.image;
    }

    return () => {
      window.removeEventListener("resize", onResize);
      spy.disconnect();
      stick.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dueLabel = (tool: DashboardCard) => {
    if (tool.dueCountType === "sentences") return "–";
    if (tool.dueCountType === "vocab") return vocabDueCount?.toString() ?? "–";
    return undefined;
  };

  return (
    <div className="mt-7">
      {/* Sentinel — marks the rail's resting position to detect when pinned */}
      <div ref={sentinelRef} aria-hidden className="h-0" />

      {/* Sticky quick-jump rail */}
      <div
        ref={railRef}
        role="tablist"
        aria-label="Practice tools"
        onKeyDown={onKeyDown}
        className={cn(
          "tool-rail animate-fade-up sticky top-4 z-20 flex gap-1 overflow-x-auto rounded-2xl border p-1.5 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-200",
          stuck
            ? "border-border/60 bg-background/80 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.4)] backdrop-blur-md dark:border-white/8 dark:bg-background/70"
            : "border-transparent",
        )}
        style={{ animationDelay: "260ms" }}
      >
        {/* Sliding active-tab pill */}
        <div
          className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl transition-[left,width] duration-300 ease-out"
          style={{
            left: `${indicator.left}px`,
            width: `${indicator.width}px`,
            background: "color-mix(in srgb, var(--dynamic-accent) 13%, transparent)",
          }}
        />
        {tools.map((tool, i) => {
          const isActive = active === i;
          const TabIcon = getModuleIcon(tool.moduleType ?? "");
          return (
            <button
              key={tool.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tool-${tool.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                jumpTo(i);
              }}
              className="group/tab relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm transition-colors lg:flex-1"
            >
              <TabIcon
                className={cn(
                  "size-4 shrink-0 transition-colors",
                  isActive
                    ? getModuleIconClasses(tool.moduleType ?? "")
                    : "text-muted-foreground/40 group-hover/tab:text-muted-foreground/70",
                )}
              />
              <span
                className={cn(
                  "font-semibold whitespace-nowrap transition-colors",
                  !isActive && "text-muted-foreground group-hover/tab:text-foreground/80",
                )}
                style={isActive ? { color: "var(--dynamic-accent)" } : undefined}
              >
                {tool.tabLabel ?? tool.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stacked feature blocks */}
      <div
        className="animate-fade-up mt-4 divide-y divide-border/50 dark:divide-white/7"
        style={{ animationDelay: "320ms" }}
      >
        {tools.map((tool, i) => (
          <ToolBlock
            key={tool.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            tool={tool}
            index={i}
            total={tools.length}
            dueLabel={dueLabel(tool)}
          />
        ))}
      </div>
    </div>
  );
}

function ToolBlock({
  ref,
  tool,
  index,
  total,
  dueLabel,
}: {
  ref: (el: HTMLElement | null) => void;
  tool: DashboardCard;
  index: number;
  total: number;
  dueLabel: string | undefined;
}) {
  const BlockIcon = getModuleIcon(tool.moduleType ?? "");

  return (
    <section ref={ref} id={`tool-${tool.id}`} className="scroll-mt-28 py-3 lg:py-4">
      <a
        href={tool.href}
        aria-label={`Open ${tool.title}`}
        className="group/tool-row grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10"
      >
        {/* Text */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className="grid size-8 shrink-0 place-items-center rounded-lg"
                style={{
                  background: "color-mix(in srgb, var(--dynamic-accent) 12%, transparent)",
                }}
              >
                <BlockIcon className={cn("size-4", getModuleIconClasses(tool.moduleType ?? ""))} />
              </div>
              <span className="text-[0.62rem] font-bold tracking-[0.22em] text-muted-foreground/70 uppercase tabular-nums">
                {pad(index + 1)}
                <span className="text-muted-foreground/35">
                  {" / "}
                  {pad(total)}
                </span>
              </span>
            </div>
            {tool.tags?.length ? (
              <div className="flex flex-wrap justify-end gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 px-2 py-0.5 font-excalifont text-[0.7rem] text-muted-foreground dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <h3 className="font-excalifont text-2xl leading-tight text-foreground/90 sm:text-3xl">
            {tool.title}
          </h3>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {tool.description}
          </p>

          {tool.bullets?.length ? (
            <ul className="flex flex-col gap-1.5">
              {tool.bullets.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground/70">
                  <Check
                    className="mt-[3px] size-3.5 shrink-0"
                    style={{ color: "var(--dynamic-accent)" }}
                  />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-1 flex items-center gap-4">
            <span
              className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform group-hover/tool-row:scale-[1.02]"
              style={{
                background: "var(--dynamic-accent)",
                boxShadow:
                  "0 10px 22px -10px color-mix(in srgb, var(--dynamic-accent) 55%, transparent)",
              }}
            >
              Open
              <ArrowRight className="size-4 transition-transform group-hover/tool-row:translate-x-0.5" />
            </span>
            {dueLabel === undefined ? null : (
              <span className="text-xs text-muted-foreground">
                <span
                  className="mr-0.5 text-sm font-semibold tabular-nums"
                  style={{ color: "var(--dynamic-accent)" }}
                >
                  {dueLabel}
                </span>{" "}
                due for review
              </span>
            )}
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/50 dark:border-white/7">
          <img src={tool.image} alt="" className="size-full object-cover" />
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
      </a>
    </section>
  );
}

function pad(n: number) {
  return n < 10 ? `0${n}` : String(n);
}
