import { cn } from "@nn/ui";
import { useEffect, useState } from "react";
import { Rating, type Grade } from "ts-fsrs";

import type { PracticeCard } from "../types";
import { getMnemonic, TYPE_BADGE_CLASSES, TYPE_TEXT_COLORS } from "../utils/card-display";
import { playClickSound } from "../utils/select-sound";
import { Button3D } from "./button-3d";
import { MnemonicDisplay } from "./mnemonic-display";
import { PracticeActionBar } from "./practice-action-bar";
import { PRACTICE_LAYOUT } from "./practice-layout";
import { PromptText } from "./prompt-text";

const RATING_BUTTONS: { rating: Grade; label: string; color: string }[] = [
  { rating: Rating.Again, label: "Again", color: "rgb(244,63,94)" },
  { rating: Rating.Hard, label: "Hard", color: "rgb(245,158,11)" },
  { rating: Rating.Good, label: "Good", color: "rgb(16,185,129)" },
  { rating: Rating.Easy, label: "Easy", color: "rgb(6,182,212)" },
];

export function FlashcardCard({
  card,
  onAnswer,
}: {
  card: PracticeCard;
  onAnswer: (rating: Grade) => void;
}) {
  // Mounted with key={card.key}, so state resets per card.
  const [isRevealed, setIsRevealed] = useState(false);

  // Keyboard shortcuts: 1-4 rate the revealed card
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (!isRevealed) return;
      const button = RATING_BUTTONS[parseInt(e.key) - 1];
      if (button) onAnswer(button.rating);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRevealed, onAnswer]);

  return (
    <div className={PRACTICE_LAYOUT}>
      <div className="flex flex-col items-center gap-4">
        <span className="text-sm text-muted-foreground dark:text-white/40">
          How well do you know this?
        </span>

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

      {isRevealed && (
        <div className="w-full max-w-lg space-y-4">
          <div className="h-px bg-muted dark:bg-white/10" />

          <div
            className={cn(
              "text-center text-xl font-medium",
              TYPE_TEXT_COLORS[card.practiceItemType],
            )}
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

          <MnemonicDisplay mnemonic={getMnemonic(card)} />

          <div className="grid grid-cols-4 gap-2">
            {RATING_BUTTONS.map(({ rating, label, color }) => (
              <Button3D
                key={label}
                color={color}
                className="text-sm"
                onClick={() => {
                  playClickSound();
                  onAnswer(rating);
                }}
              >
                {label}
              </Button3D>
            ))}
          </div>
        </div>
      )}

      {!isRevealed && (
        <PracticeActionBar
          state="idle"
          label="Show Answer"
          color="rgb(6,182,212)"
          onAction={() => {
            setIsRevealed(true);
          }}
        />
      )}
    </div>
  );
}
