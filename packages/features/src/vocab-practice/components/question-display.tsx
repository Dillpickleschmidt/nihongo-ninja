import { cn } from "@nn/ui";

import type { PracticeCard } from "../types";
import { getPromptDisplay, TYPE_BADGE_CLASSES } from "../utils/card-display";

export function QuestionDisplay({ card, label }: { card: PracticeCard; label?: string }) {
  const promptDisplay = getPromptDisplay(card);

  const defaultLabel =
    card.practiceItemType === "radical" ? "What is this radical called?" : "What does this mean?";

  return (
    <div className="mb-4 flex flex-col items-center">
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm text-muted-foreground dark:text-white/40">
          {label ?? defaultLabel}
        </span>

        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            TYPE_BADGE_CLASSES[card.practiceItemType],
          )}
        >
          {card.practiceItemType}
        </span>
      </div>

      {promptDisplay.isHtml ? (
        <div
          className="mt-4 text-center font-japanese text-5xl font-medium sm:text-7xl"
          dangerouslySetInnerHTML={{ __html: promptDisplay.html ?? "" }}
        />
      ) : (
        <div
          className={cn(
            "mt-4 text-center font-japanese font-medium",
            card.practiceItemType === "vocabulary"
              ? "text-5xl sm:text-7xl"
              : "text-6xl sm:text-8xl",
          )}
        >
          {promptDisplay.text}
        </div>
      )}
    </div>
  );
}
