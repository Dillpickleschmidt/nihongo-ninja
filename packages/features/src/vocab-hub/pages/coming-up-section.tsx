import type { LearningPathChapter } from "@nn/convex/model/learning_paths";
import { getChapterDisplayNumber } from "@nn/data/utils/chapter-helpers";

import { useVocab, type Deck } from "../context";
import { buildDeckUrlPath } from "../utils/navigation";

export function ComingUpSection({
  recentCompletions,
  decks,
  chapter,
  learningPathName,
}: {
  recentCompletions: { moduleId: string; completedAt: number }[];
  decks: Deck[];
  chapter: LearningPathChapter | undefined;
  learningPathName: string | undefined;
}) {
  const { folders } = useVocab();

  const comingUpDecks = (() => {
    if (!chapter) return [];

    const vocabPracticeIds = chapter.modules
      .filter((m) => m.module.module_type === "vocab-practice")
      .map((m) => m.moduleId);

    const completedSet = new Set(recentCompletions.map((c) => c.moduleId));

    let lastCompletedIdx = -1;
    for (let i = vocabPracticeIds.length - 1; i >= 0; i--) {
      const id = vocabPracticeIds[i];
      if (id !== undefined && completedSet.has(id)) {
        lastCompletedIdx = i;
        break;
      }
    }

    const upcoming: Deck[] = [];
    for (let i = lastCompletedIdx + 1; i < vocabPracticeIds.length && upcoming.length < 2; i++) {
      const id = vocabPracticeIds[i];
      if (id !== undefined && !completedSet.has(id)) {
        const deck = decks.find((d) => d.id === id);
        if (deck) upcoming.push(deck);
      }
    }

    return upcoming;
  })();

  const chapterLabel = (() => {
    if (!chapter) return "";
    const num = getChapterDisplayNumber(chapter.slug);
    const short = num ? `Ch. ${num}` : chapter.title;
    return [learningPathName, short].filter(Boolean).join(" ");
  })();

  if (comingUpDecks.length === 0) return null;

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-foreground">Coming Up</h2>
      <div>
        {comingUpDecks.map((deck, index) => (
          <a
            key={deck.id}
            href={`/vocab/${buildDeckUrlPath(deck, folders)}`}
            className="flex h-auto w-full items-center justify-start gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent dark:hover:bg-white/[0.03]"
          >
            <div
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${index === 0 ? "bg-orange-400" : "bg-muted-foreground/30 dark:bg-white/20"}`}
            />
            <span className="flex-1 truncate text-left text-sm text-muted-foreground dark:text-white/50">
              {deck.deckName}
            </span>
            <span className="shrink-0 text-xs text-muted-foreground/70 dark:text-white/25">
              {chapterLabel}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
