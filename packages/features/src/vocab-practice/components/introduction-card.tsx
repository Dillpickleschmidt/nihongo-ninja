import { cn } from "@nn/ui";

import type { PracticeCard } from "../types";
import { formatMnemonic, TYPE_BADGE_CLASSES, TYPE_TEXT_COLORS } from "../utils/card-display";
import { PracticeActionBar } from "./practice-action-bar";
import { PRACTICE_LAYOUT } from "./practice-layout";
import { PromptText } from "./prompt-text";

export function IntroductionCard({
  card,
  onContinue,
}: {
  card: PracticeCard;
  onContinue: () => void;
}) {
  const mnemonics = card.vocab.mnemonics;
  const meaning = mnemonics?.kanji?.[0] || null;
  const reading = card.practiceItemType === "vocabulary" ? (mnemonics?.reading?.[0] ?? null) : null;
  const mnemonicText = reading ?? meaning;

  return (
    <div className={PRACTICE_LAYOUT}>
      <div className="flex flex-col items-center gap-4">
        <span className="text-sm text-muted-foreground dark:text-white/40">New word</span>

        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            TYPE_BADGE_CLASSES[card.practiceItemType],
          )}
        >
          {card.practiceItemType}
        </span>

        <div className="text-center">
          <PromptText card={card} />
        </div>
      </div>

      <div className="w-full max-w-lg space-y-4">
        <div
          className={cn("text-center text-xl font-medium", TYPE_TEXT_COLORS[card.practiceItemType])}
        >
          {card.validAnswers.join(", ")}
        </div>

        {card.vocab.particles?.length ? (
          <div className="text-center text-sm text-muted-foreground dark:text-white/40">
            {card.vocab.particles.map((p, i) => (
              <span key={i} className="font-japanese">
                {p.label ? `${p.label} - ${p.particle}` : `particle: ${p.particle}`}
              </span>
            ))}
          </div>
        ) : null}

        {mnemonicText && (
          <div className="rounded-lg bg-card/60 p-4 text-left dark:bg-white/5">
            <h4 className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase dark:text-white/40">
              Mnemonic
            </h4>
            <p
              className="text-sm leading-relaxed text-foreground/70 dark:text-white/70"
              dangerouslySetInnerHTML={{ __html: formatMnemonic(mnemonicText) }}
            />
          </div>
        )}
      </div>

      <PracticeActionBar
        state="idle"
        label="Got It!"
        color="rgb(245,158,11)"
        onAction={onContinue}
      />
    </div>
  );
}
