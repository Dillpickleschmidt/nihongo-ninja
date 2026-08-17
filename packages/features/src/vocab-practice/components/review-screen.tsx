import { cn } from "@nn/ui";

import type { PracticeCard } from "../types";
import { getPromptDisplay } from "../utils/card-display";
import { PracticeActionBar } from "./practice-action-bar";
import { PRACTICE_LAYOUT } from "./practice-layout";

type ReviewResult = {
  card: PracticeCard;
  correct: boolean;
};

export function ReviewScreen({
  results,
  onContinue,
}: {
  results: ReviewResult[];
  onContinue: () => void;
}) {
  const correctCount = results.filter((r) => r.correct).length;
  const totalCount = results.length;
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  return (
    <div className={`${PRACTICE_LAYOUT} pt-8`}>
      <div className="w-full max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground dark:text-white/90">Review</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground dark:text-white/40">
            <span>
              <span className="font-semibold text-emerald-400">{correctCount}</span> correct
            </span>
            <span className="text-muted-foreground/50 dark:text-white/20">·</span>
            <span>
              <span className="font-semibold text-rose-400">{totalCount - correctCount}</span>{" "}
              incorrect
            </span>
            <span className="text-muted-foreground/50 dark:text-white/20">·</span>
            <span>
              <span className="font-semibold text-foreground/70 dark:text-white/70">
                {accuracy}%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {results.map((result, i) => {
            const promptDisplay = getPromptDisplay(result.card, "0.75rem");
            return (
              <div
                key={`${result.card.key}-${i}`}
                className="flex flex-col items-center gap-2 rounded-xl bg-card/60 p-4 text-center dark:bg-white/5"
              >
                {promptDisplay.isHtml ? (
                  <div
                    className="font-japanese text-3xl font-bold text-foreground/80 dark:text-white/80"
                    dangerouslySetInnerHTML={{ __html: promptDisplay.html ?? "" }}
                  />
                ) : (
                  <div className="font-japanese text-3xl font-bold text-foreground/80 dark:text-white/80">
                    {promptDisplay.text}
                  </div>
                )}

                <div className="line-clamp-2 text-sm text-muted-foreground dark:text-white/40">
                  {result.card.validAnswers.join(", ")}
                </div>

                {result.card.vocab.particles?.length ? (
                  <div className="text-xs text-muted-foreground/70 dark:text-white/30">
                    {result.card.vocab.particles.map((p, j) => (
                      <span key={j} className="font-japanese">
                        {p.label ? `${p.label} - ${p.particle}` : `particle: ${p.particle}`}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-bold uppercase",
                    result.correct
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-rose-500/10 text-rose-400",
                  )}
                >
                  {result.correct ? "Correct" : "Incorrect"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PracticeActionBar
        state="idle"
        label="Continue"
        color="rgb(139,92,246)"
        onAction={onContinue}
      />
    </div>
  );
}
