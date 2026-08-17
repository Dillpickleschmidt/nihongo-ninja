import { cn } from "@nn/ui";
import { useEffect, useRef, useState } from "react";
import { Rating, type Grade } from "ts-fsrs";

import { useWanakana } from "../logic/use-wanakana";
import type { PracticeCard } from "../types";
import { getMnemonic } from "../utils/card-display";
import { playCorrectSound, playErrorSound } from "../utils/select-sound";
import { MnemonicDisplay } from "./mnemonic-display";
import { PracticeActionBar } from "./practice-action-bar";
import { PRACTICE_LAYOUT } from "./practice-layout";
import { QuestionDisplay } from "./question-display";

export function WriteCard({
  card,
  onAnswer,
}: {
  card: PracticeCard;
  onAnswer: (rating: Grade) => Promise<void>;
}) {
  // Mounted with key={card.key}, so state resets per card. Inputs are
  // uncontrolled (see useWanakana); state mirrors them for checking.
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [particleAnswers, setParticleAnswers] = useState<string[]>([]);
  const [particleCorrectness, setParticleCorrectness] = useState<boolean[] | null>(null);
  const [overridden, setOverridden] = useState(false);

  const particles = card.vocab.particles;
  const isSpellingsMode = card.practiceMode === "spellings";

  const mainInputRef = useRef<HTMLInputElement>(null);
  useWanakana(mainInputRef, isSpellingsMode);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      mainInputRef.current?.focus();
    });
    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  const isMainCorrect =
    overridden ||
    card.validAnswers.some((ans) => ans.toLowerCase() === userAnswer.toLowerCase().trim());

  const isCorrect = (() => {
    if (!isMainCorrect) return false;
    if (!particles?.length) return true;
    if (!particleCorrectness || particleCorrectness.length !== particles.length) return false;
    return particleCorrectness.every(Boolean);
  })();

  // Match each answer against the label's particle pool, so duplicate labels
  // accept their particles in any order.
  function checkParticleAnswers(): boolean[] {
    const parts = particles ?? [];
    const available: Record<string, string[]> = {};
    for (const p of parts) {
      const label = p.label ?? "default";
      (available[label] ??= []).push(p.particle.toLowerCase());
    }
    // Iterate parts, not particleAnswers: the answers array can be sparse
    // when a later input is filled first, and a hole must count as wrong.
    return parts.map((part, idx) => {
      const answer = particleAnswers[idx] ?? "";
      const label = part.label ?? "default";
      const pool = available[label];
      if (!pool?.length) return false;
      const matchIdx = pool.indexOf(answer.trim().toLowerCase());
      if (matchIdx !== -1) {
        pool.splice(matchIdx, 1);
        return true;
      }
      return false;
    });
  }

  const handleSubmit = () => {
    if (isAnswered || !userAnswer.trim()) return;
    let particleResults: boolean[] | null = null;
    if (particles?.length) {
      particleResults = checkParticleAnswers();
      setParticleCorrectness(particleResults);
    }
    setIsAnswered(true);
    // Dismiss the mobile keyboard so it doesn't cover the action bar.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const fullyCorrect = isMainCorrect && (particleResults?.every(Boolean) ?? true);
    if (fullyCorrect) {
      playCorrectSound();
    } else {
      playErrorSound();
    }
  };

  const handleOverrideCorrect = () => {
    setOverridden(true);
    setParticleCorrectness(Array.from({ length: particles?.length ?? 0 }, () => true));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isAnswered && userAnswer.trim()) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleParticleInput = (index: number, value: string) => {
    setParticleAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleNext = () => {
    void onAnswer(isCorrect ? Rating.Good : Rating.Again);
  };

  return (
    <div className={PRACTICE_LAYOUT}>
      <QuestionDisplay card={card} />

      <div className="w-full max-w-sm space-y-4">
        <input
          ref={mainInputRef}
          type="text"
          defaultValue=""
          onInput={(e) => {
            setUserAnswer(e.currentTarget.value);
          }}
          onKeyDown={handleKeyDown}
          disabled={isAnswered}
          placeholder="Type your answer..."
          className={cn(
            "w-full rounded-2xl border bg-card/60 px-5 py-4 text-center text-lg font-medium transition-colors outline-none dark:bg-white/5",
            "placeholder:text-muted-foreground/70 dark:text-white/30",
            !isAnswered && "border-border/70 focus:border-cyan-500 dark:border-white/10",
            isAnswered && isMainCorrect && "border-emerald-500 bg-emerald-500/10 text-emerald-400",
            isAnswered && !isMainCorrect && "border-rose-500 bg-rose-500/10 text-rose-400",
          )}
        />

        {particles?.length ? (
          <div className="space-y-2">
            {particles.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground dark:text-white/40">
                  {p.label ? `${p.label}:` : "Particle:"}
                </span>
                <ParticleInput
                  disabled={isAnswered}
                  correctness={particleCorrectness?.[i]}
                  onInput={(value) => {
                    handleParticleInput(i, value);
                  }}
                  onKeyDown={handleKeyDown}
                />
                {isAnswered && particleCorrectness?.[i] === false && (
                  <span className="font-japanese text-sm text-emerald-400">{p.particle}</span>
                )}
              </div>
            ))}
          </div>
        ) : null}

        {isAnswered && (
          <div
            className={cn(
              "rounded-lg p-3 text-center text-sm font-medium",
              isCorrect ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400",
            )}
          >
            {isCorrect ? (
              <p>Correct!</p>
            ) : isMainCorrect ? (
              <>
                <p>Close! The correct particles are:</p>
                <div className="mt-1 space-y-0.5">
                  {particles?.map((p, i) => (
                    <p key={i} className="font-japanese text-lg font-bold">
                      {p.label ? `${p.label}: ` : ""}
                      {p.particle}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p>Not quite! The correct answer is:</p>
                <p className="mt-1 font-japanese text-lg font-bold">
                  {card.validAnswers.join(", ")}
                </p>
              </>
            )}
          </div>
        )}

        {isAnswered && !isCorrect && (
          <button
            type="button"
            onClick={handleOverrideCorrect}
            className="w-full rounded-lg py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
          >
            No, I was correct
          </button>
        )}

        {isAnswered && <MnemonicDisplay mnemonic={getMnemonic(card)} />}
      </div>

      {isAnswered ? (
        <PracticeActionBar state={isCorrect ? "correct" : "wrong"} onAction={handleNext} />
      ) : (
        <PracticeActionBar state="check" onAction={handleSubmit} canCheck={!!userAnswer.trim()} />
      )}
    </div>
  );
}

function ParticleInput({
  disabled,
  correctness,
  onInput,
  onKeyDown,
}: {
  disabled: boolean;
  correctness: boolean | undefined;
  onInput: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useWanakana(ref, true);

  return (
    <input
      ref={ref}
      type="text"
      defaultValue=""
      onInput={(e) => {
        onInput(e.currentTarget.value);
      }}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={cn(
        "w-20 rounded-lg border bg-card/60 px-2 py-2 text-center font-japanese font-medium transition-colors outline-none dark:bg-white/5",
        !disabled && "border-border/70 focus:border-cyan-500 dark:border-white/10",
        disabled && correctness && "border-emerald-500 bg-emerald-500/10 text-emerald-400",
        disabled && correctness === false && "border-rose-500 bg-rose-500/10 text-rose-400",
      )}
    />
  );
}
