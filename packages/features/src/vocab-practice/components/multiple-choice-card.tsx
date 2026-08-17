import { cn } from "@nn/ui";
import { useEffect, useMemo, useState } from "react";
import { Rating, type Grade } from "ts-fsrs";

import type { PracticeCard } from "../types";
import { getMnemonic } from "../utils/card-display";
import {
  generateDistractors,
  shuffleArray,
  type ChoiceOption,
} from "../utils/distractor-generation";
import { playCorrectSound, playErrorSound } from "../utils/select-sound";
import { Button3D } from "./button-3d";
import { MnemonicDisplay } from "./mnemonic-display";
import { PracticeActionBar } from "./practice-action-bar";
import { PRACTICE_LAYOUT } from "./practice-layout";
import { QuestionDisplay } from "./question-display";

const STATE_COLORS: Record<string, string> = {
  default: "var(--dynamic-accent)",
  correct: "rgb(16,185,129)",
  incorrect: "rgb(244,63,94)",
  faded: "rgb(60,60,60)",
};

export function MultipleChoiceCard({
  card,
  allCards,
  onAnswer,
}: {
  card: PracticeCard;
  allCards: PracticeCard[];
  onAnswer: (rating: Grade) => Promise<void>;
}) {
  // Mounted with key={card.key}, so state resets per card.
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const isAnswered = selectedAnswer !== null;

  // Memoized so the shuffled order stays stable while answering.
  const options = useMemo(() => {
    const correctOption: ChoiceOption = {
      answer: card.validAnswers[0] ?? "",
      particles: card.vocab.particles,
    };
    const distractors = generateDistractors(card, allCards, 3);
    return shuffleArray([correctOption, ...distractors]);
  }, [card, allCards]);

  const matchesValidAnswer = (answer: string) =>
    card.validAnswers.some((ans) => ans.toLowerCase() === answer.toLowerCase());

  const handleSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    if (matchesValidAnswer(answer)) {
      playCorrectSound();
    } else {
      playErrorSound();
    }
  };

  const isCorrect = selectedAnswer !== null && matchesValidAnswer(selectedAnswer);

  const handleNext = () => {
    void onAnswer(isCorrect ? Rating.Good : Rating.Again);
  };

  const getButtonState = (answer: string) => {
    if (!isAnswered) return "default";
    if (matchesValidAnswer(answer)) return "correct";
    if (answer === selectedAnswer) return "incorrect";
    return "faded";
  };

  // Keyboard shortcuts: 1-4 to select options
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") {
        const option = options[parseInt(e.key) - 1];
        if (option) handleSelect(option.answer);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <div className={PRACTICE_LAYOUT}>
      <QuestionDisplay card={card} />

      <div className="grid w-full max-w-lg grid-cols-2 gap-3">
        {options.map((option) => {
          const state = getButtonState(option.answer);
          const isCorrectOption = matchesValidAnswer(option.answer);

          return (
            <Button3D
              key={option.answer}
              color={STATE_COLORS[state]}
              disabled={isAnswered && state === "faded"}
              className={cn(
                option.particles?.length ? "text-left" : "text-center",
                isAnswered && "pointer-events-none",
              )}
              onClick={() => {
                handleSelect(option.answer);
              }}
            >
              <div
                className={cn(
                  "flex w-full flex-col",
                  option.particles?.length ? "items-start" : "items-center",
                )}
              >
                <div className="flex items-center">
                  <span className="text-base md:text-lg">{option.answer}</span>
                  {isAnswered && isCorrectOption && (
                    <span className="ml-2 text-emerald-600">✓</span>
                  )}
                  {isAnswered && option.answer === selectedAnswer && !isCorrectOption && (
                    <span className="ml-2 text-rose-600">✗</span>
                  )}
                </div>
                {option.particles?.length ? (
                  <div className="text-sm font-light opacity-60">
                    {option.particles.map((p, i) => (
                      <div key={i} className="font-japanese leading-tight">
                        {p.label ? `${p.label} - ${p.particle}` : `particle: ${p.particle}`}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </Button3D>
          );
        })}
      </div>

      {isAnswered && <MnemonicDisplay mnemonic={getMnemonic(card)} />}

      {isAnswered && (
        <PracticeActionBar state={isCorrect ? "correct" : "wrong"} onAction={handleNext} />
      )}
    </div>
  );
}
