import { Dialog } from "@base-ui/react/dialog";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { extractHiragana } from "@nn/data/utils/text/furigana";
import { cn } from "@nn/ui";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronRight, GraduationCap, PencilLine, X } from "lucide-react";
import { useState } from "react";

import type { LearningPathModule } from "../context";
import { moduleHref } from "./module-views";

type TranscriptLine = {
  line_id: number;
  text: string;
  english: string;
  timestamp?: string;
};

// Detail dialog for modules on user-created paths: vocabulary decks show
// their words with context sentences; grammar modules show an example
// sentence, the transcript, and the grammar note.
export function ModuleDetailDialog({
  pathId,
  module,
  open,
  onOpenChange,
}: {
  pathId: string;
  module: LearningPathModule;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { data, error, isLoading } = useQuery({
    ...convexQuery(api.api.learning_paths.getModuleDetail, {
      pathId,
      moduleId: module.moduleId,
    }),
    enabled: open,
  });

  const href = moduleHref(module);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/55 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex h-full w-full flex-col border-border/70 bg-card bg-gradient-to-br from-white/95 to-muted/40 p-6 backdrop-blur-sm transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[85vh] sm:w-full sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border dark:border-card-foreground/70 dark:from-neutral-600/15 dark:to-gray-600/10">
          <header className="mb-4 flex items-center gap-2.5">
            <div
              className={cn(
                "h-5 w-0.5 rounded-full",
                data?.sourceType === "grammar" ? "bg-amber-400" : "bg-orange-400",
              )}
            />
            <Dialog.Title className="flex-1 text-lg font-semibold tracking-tight text-foreground">
              {module.module.title}
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close"
              className="cursor-pointer rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </Dialog.Close>
          </header>

          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <LoadingSkeleton />
            ) : error !== null || data === null || data === undefined ? (
              <div className="py-12 text-center">
                <p className="text-sm text-rose-400/70">Failed to load module details</p>
              </div>
            ) : data.sourceType === "grammar" ? (
              <ModuleDetailGrammar
                transcriptGroups={data.transcriptGroups}
                moduleId={module.moduleId}
                moduleDescription={data.moduleDescription}
                href={href}
              />
            ) : (
              <ModuleDetailVocabulary
                transcriptGroups={data.transcriptGroups}
                vocabularyItems={data.vocabularyItems}
                href={href}
              />
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4 py-2">
      <div className="h-20 animate-pulse rounded-xl bg-muted/70 dark:bg-white/5" />
      <div className="space-y-2">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted/70 dark:bg-white/5" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted/70 dark:bg-white/5" />
      </div>
      <div className="h-px bg-border/70 dark:bg-white/10" />
      <div className="space-y-2">
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted/70 dark:bg-white/5" />
        <div className="h-3 w-1/3 animate-pulse rounded bg-muted/70 dark:bg-white/5" />
      </div>
    </div>
  );
}

function TranscriptSentence({
  sentence,
  textClass,
}: {
  sentence: TranscriptLine;
  textClass?: string;
}) {
  return (
    <div className="rounded-lg border border-card-foreground/50 bg-card/40 px-4 py-3 backdrop-blur-sm">
      <p className={cn("font-japanese text-sm leading-relaxed text-white/75", textClass)}>
        {sentence.text}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        {sentence.english || "[English translation]"}
      </p>
    </div>
  );
}

function ModuleDetailVocabulary({
  transcriptGroups,
  vocabularyItems,
  href,
}: {
  transcriptGroups: TranscriptLine[][];
  vocabularyItems: Array<{ word: string; furigana?: string; english?: string }>;
  href: string;
}) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const focusedWord = vocabularyItems[focusedIndex];
  const contextSentences = transcriptGroups[focusedIndex] ?? [];

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-white/40">Words</p>
        <div className="flex flex-wrap gap-2">
          {vocabularyItems.map((word, index) => (
            <button
              key={`${word.word}-${index}`}
              type="button"
              onClick={() => {
                setFocusedIndex(index);
              }}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1 text-sm font-medium transition-colors duration-200",
                focusedIndex === index
                  ? "bg-orange-500/15 text-orange-300 ring-1 ring-orange-400/25"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white/60",
              )}
            >
              <span className="font-japanese">{word.word}</span>
            </button>
          ))}
        </div>
      </div>

      {focusedWord === undefined ? null : (
        <div className="space-y-5">
          <div className="rounded-lg border border-card-foreground/70 bg-gradient-to-br p-5 backdrop-blur-sm dark:from-neutral-600/15 dark:to-gray-600/10">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <GraduationCap className="size-5 shrink-0 text-orange-400" />
                <p className="font-japanese text-xl text-white/90">
                  {focusedWord.word}
                  {focusedWord.furigana === undefined ? null : (
                    <span className="ml-1.5 text-sm text-muted-foreground">
                      （{extractHiragana(focusedWord.furigana)}）
                    </span>
                  )}
                </p>
              </div>
              <a
                href={href}
                className="flex shrink-0 items-center gap-1.5 rounded-lg bg-orange-500/15 px-3 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-orange-400/25 transition-colors hover:bg-orange-500/25 hover:text-orange-200"
              >
                Continue
                <ChevronRight className="size-4" />
              </a>
            </div>
            {focusedWord.english === undefined ? null : (
              <p className="mt-2 text-sm text-white/55">{focusedWord.english}</p>
            )}
          </div>

          {contextSentences.length === 0 ? null : (
            <div>
              <p className="mb-3 text-xs font-medium tracking-wider text-white/25 uppercase">
                Context
              </p>
              <div className="space-y-2">
                {contextSentences.map((sentence) => (
                  <TranscriptSentence key={sentence.line_id} sentence={sentence} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ModuleDetailGrammar({
  transcriptGroups,
  moduleId,
  moduleDescription,
  href,
}: {
  transcriptGroups: TranscriptLine[][];
  moduleId: string;
  moduleDescription?: string;
  href: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const firstSentence = transcriptGroups[0]?.[0];

  return (
    <div className="space-y-6">
      {firstSentence === undefined ? null : (
        <div>
          <p className="mb-2 text-sm font-medium text-white/40">Example</p>
          <div className="rounded-lg border border-card-foreground/70 bg-gradient-to-br p-5 backdrop-blur-sm dark:from-neutral-600/15 dark:to-gray-600/10">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-japanese text-xl leading-relaxed text-white/90">
                  {firstSentence.text}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {firstSentence.english || "[English translation]"}
                </p>
              </div>
              <a
                href={href}
                className="flex shrink-0 items-center gap-1.5 rounded-lg bg-amber-500/15 px-3 py-1.5 text-sm font-medium text-amber-300 ring-1 ring-amber-400/25 transition-colors hover:bg-amber-500/25 hover:text-amber-200"
              >
                Continue
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {transcriptGroups.length === 0 ? null : (
        <>
          <button
            type="button"
            onClick={() => {
              setExpanded(!expanded);
            }}
            className="group flex cursor-pointer items-center gap-1.5 text-xs font-medium tracking-wider text-white/30 uppercase transition-colors hover:text-white/50"
          >
            <ChevronDown
              className={cn("size-3 transition-transform duration-200", expanded && "rotate-180")}
            />
            {expanded ? "Hide transcript" : "Full transcript"}
          </button>

          {expanded ? (
            <div className="max-h-[45vh] space-y-2 overflow-y-auto">
              {transcriptGroups.flat().map((sentence) => (
                <TranscriptSentence
                  key={sentence.line_id}
                  sentence={sentence}
                  textClass="text-white/70"
                />
              ))}
            </div>
          ) : null}
        </>
      )}

      <div>
        <p className="mb-2 text-sm font-medium text-white/40">Notes</p>
        <div className="rounded-xl bg-amber-500/6 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <PencilLine className="size-4 shrink-0 text-amber-400" />
            <span className="text-sm font-medium text-white/80">{moduleId}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {moduleDescription || "[Grammar description]"}
          </p>
        </div>
      </div>
    </div>
  );
}
