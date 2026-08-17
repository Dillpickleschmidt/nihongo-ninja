import { cn } from "@nn/ui";

import type { PracticeCard } from "../types";
import { getPromptDisplay } from "../utils/card-display";
import { PracticeActionBar } from "./practice-action-bar";

type ReviewResult = {
  card: PracticeCard;
  correct: boolean;
  missCount?: number;
};

export function FinishScreen({
  deckName,
  results,
  onReturn,
  returnLabel,
}: {
  deckName: string;
  results: ReviewResult[];
  onReturn: () => void;
  returnLabel?: string;
}) {
  const moduleItems = results.filter((r) => r.card.sessionScope === "module");
  const reviewItems = results.filter((r) => r.card.sessionScope === "review");
  const correctCount = results.filter((r) => r.correct).length;
  const total = results.length;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const theme =
    accuracy >= 90
      ? { emoji: "🎉", title: "Outstanding!" }
      : accuracy >= 70
        ? { emoji: "🌟", title: "Great Work!" }
        : accuracy >= 50
          ? { emoji: "💪", title: "Keep Going!" }
          : { emoji: "📚", title: "Practice Makes Perfect" };

  return (
    <div className="flex w-full flex-col items-center gap-6 px-4 pt-12 sm:w-4/5 sm:gap-10">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mb-4 text-6xl">{theme.emoji}</div>
          <h1 className="mb-2 text-3xl font-bold text-foreground dark:text-white/90">
            {theme.title}
          </h1>
          <p className="text-lg text-muted-foreground dark:text-white/40">
            You completed{" "}
            <span className="font-semibold text-foreground/70 dark:text-white/70">{deckName}</span>
          </p>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-3">
          <StatCard label="Correct" value={correctCount} color="emerald" />
          <StatCard label="Total" value={total} color="blue" />
          <StatCard label="Accuracy" value={`${accuracy}%`} color="purple" />
        </div>

        {moduleItems.length > 0 && (
          <ResultSection title="Module Items" badgeClass="bg-amber-500/10 text-amber-400">
            {moduleItems}
          </ResultSection>
        )}

        {reviewItems.length > 0 && (
          <ResultSection
            title="Practiced Review Items"
            badgeClass="bg-indigo-500/10 text-indigo-400"
          >
            {reviewItems}
          </ResultSection>
        )}
      </div>

      <PracticeActionBar
        state="idle"
        label={returnLabel ?? "Return to Vocab Home"}
        color="rgb(139,92,246)"
        onAction={onReturn}
      />
    </div>
  );
}

function ResultSection({
  title,
  badgeClass,
  children,
}: {
  title: string;
  badgeClass: string;
  children: ReviewResult[];
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground/70 dark:text-white/70">
        <span className={cn("rounded-full px-2 py-1 text-sm", badgeClass)}>{children.length}</span>
        {title}
      </h2>
      <div className="space-y-2">
        {children.map((result, i) => (
          <ResultCard key={`${result.card.key}-${i}`} result={result} />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string | number;
  color: "emerald" | "blue" | "purple";
}) {
  const colors = {
    emerald: "border-emerald-500/20 text-emerald-400",
    blue: "border-blue-500/20 text-blue-400",
    purple: "border-purple-500/20 text-purple-400",
  };

  return (
    <div
      className={cn("rounded-xl border bg-card/60 p-4 text-center dark:bg-white/5", colors[color])}
    >
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground dark:text-white/40">{label}</div>
    </div>
  );
}

function ResultCard({ result }: { result: ReviewResult }) {
  const { card, correct, missCount } = result;
  const promptDisplay = getPromptDisplay(card, "0.6rem");

  return (
    <div className="flex items-center gap-4 rounded-xl bg-card/60 p-4 dark:bg-white/5">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          {promptDisplay.isHtml ? (
            <span
              className="font-japanese text-lg font-bold text-foreground/80 dark:text-white/80"
              dangerouslySetInnerHTML={{ __html: promptDisplay.html ?? "" }}
            />
          ) : (
            <span className="font-japanese text-lg font-bold text-foreground/80 dark:text-white/80">
              {promptDisplay.text}
            </span>
          )}
          <span className="truncate text-sm text-muted-foreground dark:text-white/40">
            {card.validAnswers.join(", ")}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {missCount && missCount > 0 ? (
          <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs font-medium text-rose-400">
            {missCount} {missCount === 1 ? "miss" : "misses"}
          </span>
        ) : null}
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full text-xs",
            correct ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400",
          )}
        >
          {correct ? "✓" : "✗"}
        </div>
      </div>
    </div>
  );
}
