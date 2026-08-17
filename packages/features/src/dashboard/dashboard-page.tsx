import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { DAILY_PROGRESS_TARGET_UNITS, getLocalDateKey } from "@nn/data/progress/weights";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { setBackgroundSettings } from "../ambient-background";
import { authClient } from "../auth/client";
import { usePreferences } from "../preferences";
import { useSrs } from "../srs/use-srs";
import { ActivityItem } from "../stats/activity-item";
import { ModuleCard } from "../stats/module-card";
import { getProgressColor, ProgressRing } from "../stats/progress-ring";
import { DashboardCardTile } from "./dashboard-card";
import { MEDIA_RESOURCES, PRACTICE_TOOLS, REFERENCE_TOOLS } from "./dashboard-cards-data";
import { ReviewModeDialog } from "./review-mode-dialog";
import { TodayActionsPanel, type NextDashboardModule } from "./today-actions-panel";
import { ToolShowcase } from "./tool-showcase";

export default function DashboardPage() {
  const queryClient = useQueryClient();
  const { data: session } = authClient.useSession();
  const authed = !!session;
  const { dueCounts } = useSrs();
  const { preferences } = usePreferences();
  const selectedPathId = preferences.activeLearningPath;
  const [dialogOpen, setDialogOpen] = useState(false);

  // Deepen the background blur once the page scrolls.
  useEffect(() => {
    let lastBlurred: boolean | undefined;
    const applyBlur = () => {
      const blurred = window.scrollY >= 5;
      if (blurred === lastBlurred) return;
      lastBlurred = blurred;
      setBackgroundSettings(queryClient, {
        blur: blurred ? 22 : 4,
        opacityOffset: -0.22,
        showGradient: false,
      });
    };
    applyBlur();
    window.addEventListener("scroll", applyBlur, { passive: true });
    return () => {
      window.removeEventListener("scroll", applyBlur);
    };
  }, [queryClient]);

  const today = new Date();
  const todayKey = getLocalDateKey();
  const streakRange = getLastNDaysRange(30);

  const dashboardQuery = useQuery(
    convexQuery(api.api.learning_paths.getDashboardData, { pathId: selectedPathId }),
  );
  const { data: dailyStats } = useQuery({
    ...convexQuery(api.api.progress.getDailyModuleStatsForDate, { dateKey: todayKey }),
    enabled: authed,
  });
  const { data: recentActivity } = useQuery({
    ...convexQuery(api.api.progress.getRecentModuleActivity, { limit: 10 }),
    enabled: authed,
  });
  const { data: dailyProgressRange } = useQuery({
    ...convexQuery(api.api.progress.getDailyProgressRange, {
      fromDateKey: streakRange.fromDateKey,
      toDateKey: streakRange.toDateKey,
    }),
    enabled: authed,
  });

  const dailySummary = (() => {
    if (dailyStats === undefined) return undefined;
    let progressUnits = 0;
    let questionsAnswered = 0;
    for (const row of dailyStats) {
      progressUnits += row.progressUnits;
      questionsAnswered += row.questionsAnswered;
    }
    return {
      moduleCount: dailyStats.length,
      progressUnits,
      questionsAnswered,
      progressPercent: Math.min(
        100,
        Math.round((progressUnits / DAILY_PROGRESS_TARGET_UNITS) * 100),
      ),
    };
  })();

  const reversedModules = dailyStats === undefined ? undefined : [...dailyStats].reverse();
  const streakStats = getStreakStats(dailyProgressRange, today);
  const activityTape = buildActivityTape(dailyProgressRange, today, 30);

  const nextModule = ((): NextDashboardModule | undefined => {
    const chapters = dashboardQuery.data?.chapters;
    const completed = new Set(dashboardQuery.data?.completedModules ?? []);
    if (!chapters) return undefined;
    for (const chapter of chapters) {
      for (const mod of chapter.modules) {
        if (!mod.disabled && !completed.has(mod.moduleId)) {
          return { ...mod, chapterTitle: chapter.title };
        }
      }
    }
    return undefined;
  })();

  const todayLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const todayLabelJa = formatJapaneseDate(today);

  return (
    <div className="relative min-h-screen text-foreground">
      <style>{`
        .dashboard-card {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 0 -1px 0 rgba(15, 23, 42, 0.04),
            0 10px 28px -24px rgba(15, 23, 42, 0.28);
        }
        .dark .dashboard-card {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(0, 0, 0, 0.55),
            0 1px 0 rgba(255, 255, 255, 0.025),
            0 16px 36px -18px rgba(0, 0, 0, 0.6);
        }
        .tool-rail { scrollbar-width: none; }
        .tool-rail::-webkit-scrollbar { display: none; }
      `}</style>

      <main className="mx-auto max-w-7xl px-6 pt-16 pb-32 sm:px-8 lg:pt-20">
        {/* HERO */}
        <section className="relative">
          <span className="pointer-events-none absolute -top-6 left-0 font-japanese text-[10rem] leading-none text-foreground/4.5 select-none sm:-top-10 sm:-left-4 sm:text-[14rem]">
            道
          </span>

          <div className="animate-fade-up relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div>
              <div className="flex flex-wrap items-baseline gap-5">
                <h1 className="font-excalifont text-5xl tracking-tight text-foreground/90 sm:text-6xl">
                  Today
                </h1>
                <span className="font-japanese text-base text-muted-foreground">
                  {todayLabelJa}
                </span>
              </div>
              <p className="mt-3 text-base text-muted-foreground">{todayLabel}</p>
            </div>

            <TodayActionsPanel
              className="w-full shrink-0 lg:w-[31rem]"
              mod={nextModule}
              nextLoading={dashboardQuery.data === undefined}
              meanings={dueCounts.vocabMeanings}
              spellings={dueCounts.vocabSpellings}
              total={dueCounts.vocabTotal}
              onStartReview={() => {
                setDialogOpen(true);
              }}
            />
          </div>

          {/* Snapshot strip */}
          <div
            className="animate-fade-up mt-10 grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex justify-center lg:block">
              <ProgressRing progress={dailySummary?.progressPercent ?? 0} />
            </div>

            <div className="space-y-10">
              <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                <div className="grid grid-cols-3 gap-6 sm:gap-10">
                  <StatBlock
                    value={dailySummary?.progressUnits.toLocaleString() ?? "–"}
                    label={`of ${DAILY_PROGRESS_TARGET_UNITS.toLocaleString()} XP`}
                    sub="60 XP ≈ 1 minute of practice"
                    valueColor={getProgressColor(dailySummary?.progressPercent ?? 0)}
                  />
                  <StatBlock
                    value={dailySummary ? String(dailySummary.questionsAnswered) : "–"}
                    label="questions"
                  />
                  <StatBlock
                    value={dailySummary ? String(dailySummary.moduleCount) : "–"}
                    label="modules"
                  />
                </div>

                <StreakBig days={streakStats.current} best={streakStats.best} />
              </div>

              {/* Daily activity tape — spans stats + streak */}
              <div className="flex items-center gap-1">
                {activityTape.map((d, i) => (
                  <div
                    key={i}
                    className={
                      d.active
                        ? d.isToday
                          ? "h-2.5 flex-1 rounded-sm transition-all"
                          : "h-1.5 flex-1 rounded-sm transition-all"
                        : "h-px flex-1 rounded-sm bg-foreground/20 transition-all"
                    }
                    style={
                      d.active
                        ? { background: "var(--dynamic-accent)", opacity: d.isToday ? 1 : 0.85 }
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TODAY + ACTIVITY */}
        <section className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-[3fr_2fr]">
          <div className="max-h-64 overflow-y-auto pr-1">
            <SectionLabelLine label="Today's modules" kanji="今" delay={150} />
            {reversedModules === undefined ? (
              <SkeletonRows count={3} />
            ) : reversedModules.length === 0 ? (
              <p
                className="animate-fade-up mt-6 text-sm text-muted-foreground"
                style={{ animationDelay: "220ms" }}
              >
                Nothing practiced yet today. Pick a practice tool to start.
              </p>
            ) : (
              <div className="mt-2 divide-y divide-border/50">
                {reversedModules.map((row) => (
                  <div
                    key={row.modulePath}
                    className="animate-fade-up"
                    style={{ animationDelay: "220ms" }}
                  >
                    <ModuleCard
                      modulePath={row.modulePath}
                      moduleType={row.moduleType}
                      progressUnits={row.progressUnits}
                      questionsAnswered={row.questionsAnswered}
                      lastUpdatedAt={row.lastUpdatedAt}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="max-h-56 overflow-y-auto pr-1">
            <SectionLabelLine label="Recent activity" delay={200} />
            <div className="mt-2">
              {recentActivity === undefined ? (
                <SkeletonDots count={5} />
              ) : recentActivity.length === 0 ? (
                <p className="text-sm text-muted-foreground">No recent activity</p>
              ) : (
                <div
                  className="animate-fade-up divide-y divide-border/40"
                  style={{ animationDelay: "270ms" }}
                >
                  {recentActivity.map((row) => (
                    <ActivityItem
                      key={`${row.modulePath}-${row.lastUpdatedAt}`}
                      modulePath={row.modulePath}
                      moduleType={row.moduleType}
                      progressUnits={row.progressUnits}
                      questionsAnswered={row.questionsAnswered}
                      lastUpdatedAt={row.lastUpdatedAt}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PRACTICE TOOLS */}
        <section className="mt-8">
          <SectionLabelLine label="Practice tools" kanji="練" delay={200} />
          <ToolShowcase tools={PRACTICE_TOOLS} vocabDueCount={dueCounts.vocabTotal} />
        </section>

        {/* MEDIA */}
        <section className="mt-24">
          <SectionLabelLine label="Media & immersion" kanji="観" delay={450} />
          <div className="mt-7 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_RESOURCES.map((card, index) => (
              <DashboardCardTile key={card.id} card={card} index={index} />
            ))}
          </div>
        </section>

        {/* REFERENCE */}
        <section className="mt-20">
          <SectionLabelLine label="Reference & extras" kanji="辞" delay={500} />
          <div className="mt-7 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {REFERENCE_TOOLS.map((card, index) => (
              <DashboardCardTile key={card.id} card={card} index={index} />
            ))}
          </div>
        </section>
      </main>

      <ReviewModeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        meaningsCount={dueCounts.vocabMeanings}
        spellingsCount={dueCounts.vocabSpellings}
      />
    </div>
  );
}

/* ── Subcomponents ────────────────────────────────────────────── */

function StatBlock({
  value,
  label,
  sub,
  valueColor,
}: {
  value: string;
  label: string;
  sub?: string;
  valueColor?: string;
}) {
  return (
    <div>
      <div
        className="text-3xl font-bold text-foreground/85 tabular-nums sm:text-4xl"
        style={valueColor ? { color: valueColor } : undefined}
      >
        {value}
      </div>
      <div className="mt-1.5 text-[0.95rem] text-muted-foreground">{label}</div>
      {sub === undefined ? null : (
        <div className="mt-0.5 text-xs text-muted-foreground/70">{sub}</div>
      )}
    </div>
  );
}

function StreakBig({ days, best }: { days: number; best: number }) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className="font-excalifont text-6xl leading-none tabular-nums"
        style={{ color: "var(--dynamic-accent)" }}
      >
        {days}
      </span>
      <div className="text-left">
        <div className="text-base whitespace-nowrap text-muted-foreground">day streak</div>
        <div className="text-xs whitespace-nowrap text-muted-foreground/70">
          best · <span className="tabular-nums">{best}</span>
        </div>
      </div>
    </div>
  );
}

function SectionLabelLine({
  label,
  kanji,
  delay = 0,
}: {
  label: string;
  kanji?: string;
  delay?: number;
}) {
  return (
    <div
      className="animate-fade-up flex items-center gap-4"
      style={{ animationDelay: `${delay}ms` }}
    >
      {kanji === undefined ? null : (
        <span className="font-japanese text-base text-muted-foreground/60">{kanji}</span>
      )}
      <h2 className="font-excalifont text-lg text-foreground/85">{label}</h2>
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, color-mix(in srgb, var(--dynamic-accent) 30%, transparent), transparent 90%)",
        }}
      />
    </div>
  );
}

function SkeletonRows({ count }: { count: number }) {
  return (
    <div className="mt-4 divide-y divide-border/50">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex items-center gap-4 py-4">
          <div
            className="h-4 animate-pulse rounded bg-muted/70"
            style={{ animationDelay: `${i * 100}ms`, width: `${44 - i * 5}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function SkeletonDots({ count }: { count: number }) {
  return (
    <div className="divide-y divide-border/40">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-muted/70" />
          <div
            className="h-4 animate-pulse rounded bg-muted/60"
            style={{ animationDelay: `${i * 60}ms`, width: `${72 - i * 8}%` }}
          />
        </div>
      ))}
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────── */

const JA_DAY = ["日", "月", "火", "水", "木", "金", "土"] as const;
const JA_DIGITS = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"] as const;

function toJaNumber(n: number): string {
  const digit = JA_DIGITS[n % 10] ?? "";
  if (n < 10) return digit;
  if (n < 20) return n === 10 ? "十" : `十${digit}`;
  const tens = Math.floor(n / 10);
  const tensPart = tens === 1 ? "十" : `${JA_DIGITS[tens] ?? ""}十`;
  return n % 10 === 0 ? tensPart : `${tensPart}${digit}`;
}

function formatJapaneseDate(d: Date): string {
  return `${toJaNumber(d.getMonth() + 1)}月${toJaNumber(d.getDate())}日 (${JA_DAY[d.getDay()] ?? ""})`;
}

type DailyProgressSummary = {
  dateKey: string;
  progressUnits: number;
};

type ActivityTapeDay = {
  active: boolean;
  isToday: boolean;
};

function getStreakStats(rows: DailyProgressSummary[] | undefined, today: Date) {
  if (rows === undefined) return { current: 0, best: 0 };

  const activeDays = getActiveDays(rows);
  let current = 0;
  const cursor = new Date(today);

  while (activeDays.has(getLocalDateKey(cursor))) {
    current++;
    cursor.setDate(cursor.getDate() - 1);
  }

  let best = 0;
  let running = 0;
  for (const day of buildActivityTape(rows, today, 30)) {
    if (day.active) {
      running++;
      best = Math.max(best, running);
    } else {
      running = 0;
    }
  }

  return { current, best };
}

function buildActivityTape(
  rows: DailyProgressSummary[] | undefined,
  today: Date,
  days: number,
): ActivityTapeDay[] {
  const activeDays = getActiveDays(rows);
  const todayKey = getLocalDateKey(today);
  const start = new Date(today);
  start.setDate(start.getDate() - (days - 1));

  return Array.from({ length: days }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const dateKey = getLocalDateKey(day);
    return {
      active: activeDays.has(dateKey),
      isToday: dateKey === todayKey,
    };
  });
}

function getActiveDays(rows: DailyProgressSummary[] | undefined) {
  return new Set((rows ?? []).filter((row) => row.progressUnits > 0).map((row) => row.dateKey));
}

function getLastNDaysRange(days: number) {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - (days - 1));
  return {
    fromDateKey: getLocalDateKey(start),
    toDateKey: getLocalDateKey(end),
  };
}
