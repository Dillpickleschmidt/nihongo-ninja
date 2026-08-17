import { useMemo, useState } from "react";
import { Rating, type Grade } from "ts-fsrs";

import { FinishScreen } from "./components/finish-screen";
import { FlashcardCard } from "./components/flashcard-card";
import { IntroductionCard } from "./components/introduction-card";
import { MultipleChoiceCard } from "./components/multiple-choice-card";
import { PracticeHeader } from "./components/practice-header";
import { ReviewScreen } from "./components/review-screen";
import { WriteCard } from "./components/write-card";
import type { PracticeManagerHook } from "./logic/use-practice-manager";
import type { PracticeCard } from "./types";

const CARDS_UNTIL_REVIEW = 7;

type ReviewResult = {
  card: PracticeCard;
  correct: boolean;
  missCount?: number;
};

export function VocabPractice({
  practiceManager,
  deckName,
  reviewOnly,
  onAnswer,
  onIntroductionComplete,
  onProgressEvent,
  onReturn,
  returnLabel,
}: {
  practiceManager: PracticeManagerHook;
  deckName: string;
  reviewOnly?: boolean;
  onAnswer: (rating: Grade) => Promise<void>;
  onIntroductionComplete: () => void;
  onProgressEvent?: (progressUnitsDelta: number, questionsAnsweredDelta: number) => void;
  onReturn?: () => void;
  returnLabel?: string;
}) {
  const { currentCard, isFinished, cardMap, moduleProgress } = practiceManager;

  // Every answered card, in order; recent history is the slice since the
  // last interstitial review screen.
  const [allResults, setAllResults] = useState<ReviewResult[]>([]);
  const [lastReviewIndex, setLastReviewIndex] = useState(0);
  const [showReview, setShowReview] = useState(false);

  const recentHistory = allResults.slice(lastReviewIndex);

  const allCards = useMemo(() => Array.from(cardMap.values()), [cardMap]);

  const totalItems = reviewOnly
    ? allCards.filter((card) => !card.isDisabled).length
    : moduleProgress.total || allCards.filter((card) => card.sessionScope === "module").length;

  const currentIndex = (() => {
    if (!reviewOnly) return moduleProgress.completed;
    if (totalItems === 0) return 0;
    return Math.min(allResults.length, totalItems - 1);
  })();

  const correctCount = allResults.filter((r) => r.correct).length;
  const wrongCount = allResults.filter((r) => !r.correct).length;

  const handleAnswer = async (rating: Grade) => {
    if (!currentCard) return;

    const isCorrect = rating !== Rating.Again;
    const answeredCount = allResults.length + 1;
    setAllResults((prev) => [...prev, { card: currentCard, correct: isCorrect }]);

    if (answeredCount - lastReviewIndex >= CARDS_UNTIL_REVIEW) {
      setShowReview(true);
    }

    if (currentCard.sessionStyle === "multiple-choice") {
      onProgressEvent?.(5, 1);
    } else if (currentCard.sessionStyle === "write") {
      onProgressEvent?.(10, 1);
    } else if (currentCard.sessionStyle === "flashcard") {
      onProgressEvent?.(5, 1);
    }

    await onAnswer(rating);
  };

  const handleReviewContinue = () => {
    setShowReview(false);
    setLastReviewIndex(allResults.length);
    onProgressEvent?.(5, 0);
  };

  const handleReturn = () => {
    onProgressEvent?.(10, 0);
    if (onReturn) {
      onReturn();
    } else {
      window.location.href = "/vocab";
    }
  };

  const showCard = !isFinished && !showReview;

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      {showCard && (
        <PracticeHeader
          currentIndex={currentIndex}
          totalItems={totalItems}
          correctCount={correctCount}
          wrongCount={wrongCount}
          onQuit={handleReturn}
        />
      )}

      {showReview && <ReviewScreen results={recentHistory} onContinue={handleReviewContinue} />}

      {isFinished && (
        <FinishScreen
          deckName={deckName}
          results={allResults}
          onReturn={handleReturn}
          returnLabel={returnLabel}
        />
      )}

      {/* key={currentCard.key} forces a remount per card, so per-card local
          state (selected answer, revealed, inputs) resets. */}
      {showCard && currentCard && (
        <CardView
          key={currentCard.key}
          card={currentCard}
          allCards={allCards}
          onAnswer={handleAnswer}
          onIntroductionComplete={() => {
            onProgressEvent?.(10, 1);
            onIntroductionComplete();
          }}
        />
      )}

      {/* Spacer for the fixed bottom action bar */}
      <div className="h-32" />
    </div>
  );
}

function CardView({
  card,
  allCards,
  onAnswer,
  onIntroductionComplete,
}: {
  card: PracticeCard;
  allCards: PracticeCard[];
  onAnswer: (rating: Grade) => Promise<void>;
  onIntroductionComplete: () => void;
}) {
  switch (card.sessionStyle) {
    case "introduction":
      return <IntroductionCard card={card} onContinue={onIntroductionComplete} />;
    case "multiple-choice":
      return <MultipleChoiceCard card={card} allCards={allCards} onAnswer={onAnswer} />;
    case "write":
      return <WriteCard card={card} onAnswer={onAnswer} />;
    case "flashcard":
      return <FlashcardCard card={card} onAnswer={onAnswer} />;
    default:
      return null;
  }
}
