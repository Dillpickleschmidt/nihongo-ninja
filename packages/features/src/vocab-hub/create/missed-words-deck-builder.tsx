import { Slider } from "@base-ui/react/slider";
import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { practiceModeValidator } from "@nn/convex/validators";
import { useRouter } from "@nn/router";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { Infer } from "convex/values";
import { useState } from "react";

import { alertMutationError } from "../components/mutation-error";
import { alertMessage } from "../components/web-dialogs";

type PracticeMode = Infer<typeof practiceModeValidator>;

const DAYS_PRESETS = [1, 3, 7, 10, 14, 21, 30, 45, 60, 90] as const;
const MAX_ITEMS_PRESETS = [15, 20, 25, 30, 50, 75, 100] as const;

export function MissedWordsDeckBuilder() {
  const router = useRouter();
  const [daysIdx, setDaysIdx] = useState(4);
  const [maxIdx, setMaxIdx] = useState(2);
  const [mode, setMode] = useState<PracticeMode>("meanings");
  const [isCreating, setIsCreating] = useState(false);

  const daysBack = DAYS_PRESETS[daysIdx] ?? 14;
  const maxItems = MAX_ITEMS_PRESETS[maxIdx] ?? 25;

  const {
    data: missedItems,
    isError,
    refetch,
  } = useQuery({
    ...convexQuery(api.api.missedWords.getMostMissedItems, { daysBack, maxItems, mode }),
    placeholderData: keepPreviousData,
  });

  const buildDeck = useConvexMutation(api.api.missedWords.buildMissedWordsDeck);

  const items = missedItems ?? [];

  const handleCreateDeck = async () => {
    if (items.length === 0) return;

    setIsCreating(true);
    try {
      const keys = items.map((item) => item.practiceItemKey);
      const now = new Date();
      const from = new Date(now.getTime() - daysBack * 86_400_000);
      const fmt = (d: Date) =>
        `${d.getMonth() + 1}/${d.getDate()}/${String(d.getFullYear()).slice(2)}`;
      const deckName = `Missed Words ${fmt(from)} - ${fmt(now)} (${mode})`;
      const { deckId, skippedKeys } = await buildDeck({ practiceItemKeys: keys, deckName });
      if (skippedKeys.length > 0) {
        alertMessage(`${skippedKeys.length} word(s) had no vocab entry and were left out.`);
      }
      router.push(`/vocab/deck/${deckId}/edit`);
    } catch (error) {
      alertMutationError("create the deck")(error);
    } finally {
      setIsCreating(false);
    }
  };

  const modeButton = (value: PracticeMode, label: string) => (
    <button
      type="button"
      aria-pressed={mode === value}
      className={`cursor-pointer rounded-md px-4 py-1.5 text-sm transition-colors ${
        mode === value
          ? "bg-card text-foreground shadow-sm dark:bg-white/10 dark:text-white/90"
          : "text-muted-foreground hover:text-foreground dark:text-white/40 dark:hover:text-white/60"
      }`}
      onClick={() => {
        setMode(value);
      }}
    >
      {label}
    </button>
  );

  const presetSlider = (
    label: string,
    display: string,
    value: number,
    max: number,
    onChange: (next: number) => void,
  ) => (
    <div className="space-y-2">
      <span className="block text-sm font-medium text-muted-foreground dark:text-white/50">
        {label}
        <span className="ml-2 text-foreground/70 dark:text-white/70">{display}</span>
      </span>
      <Slider.Root
        value={value}
        onValueChange={(next) => {
          onChange(Array.isArray(next) ? (next[0] ?? 0) : next);
        }}
        min={0}
        max={max}
        step={1}
        className="w-48"
      >
        <Slider.Control className="flex w-full touch-none items-center py-2 select-none">
          <Slider.Track className="h-1.5 w-full rounded-full bg-muted select-none dark:bg-white/[0.06]">
            <Slider.Indicator className="rounded-full bg-dynamic-accent/50 select-none dark:bg-white/20" />
            <Slider.Thumb
              aria-label={label}
              className="size-4 rounded-full border border-border bg-background select-none dark:border-white/40"
            />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  );

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-2 pb-8 sm:px-4 lg:px-6">
      <div className="-mx-2 rounded-lg border border-border/60 bg-background/60 p-4 backdrop-blur-md dark:border-card-foreground/70 dark:bg-background/40">
        <h1 className="text-2xl leading-tight font-semibold">Build from Missed Words</h1>
        <p className="text-sm text-muted-foreground">
          Auto-generate a deck from words you've been struggling with recently.
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <span className="block text-sm font-medium text-muted-foreground dark:text-white/50">
            Practice Mode
          </span>
          <div className="flex w-fit items-center gap-1 rounded-lg bg-muted/70 p-1 dark:bg-white/[0.04]">
            {modeButton("meanings", "Meanings")}
            {modeButton("spellings", "Spellings")}
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {presetSlider(
            "Time Range",
            `${daysBack} days`,
            daysIdx,
            DAYS_PRESETS.length - 1,
            setDaysIdx,
          )}
          {presetSlider(
            "Max Words",
            `${maxItems}`,
            maxIdx,
            MAX_ITEMS_PRESETS.length - 1,
            setMaxIdx,
          )}
        </div>
      </div>

      {isError ? (
        <div className="rounded-lg border border-dashed border-destructive/50 p-8 text-center">
          <p className="text-sm text-destructive">Failed to load missed words.</p>
          <button
            type="button"
            className="mt-2 cursor-pointer text-sm underline"
            onClick={() => {
              void refetch();
            }}
          >
            Try again
          </button>
        </div>
      ) : missedItems === undefined ? (
        <div className="rounded-lg border border-dashed border-border/70 p-8 text-center dark:border-white/10">
          <p className="text-sm text-muted-foreground dark:text-white/30">
            Loading missed words...
          </p>
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border/70 p-8 text-center dark:border-white/10">
          <p className="text-sm text-muted-foreground dark:text-white/30">
            No missed words found for the selected criteria.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground dark:text-white/50">
              {items.length} words found
            </span>
            <button
              type="button"
              onClick={() => {
                void handleCreateDeck();
              }}
              disabled={isCreating}
              className="cursor-pointer rounded-lg bg-dynamic-accent/80 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-dynamic-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isCreating ? "Creating..." : `Create Deck (${items.length} words)`}
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto rounded-lg border border-border/60 bg-card/40 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <div
                  key={item.practiceItemKey}
                  className="flex items-baseline gap-1.5 rounded-md bg-muted/70 px-3 py-1.5 dark:bg-white/[0.04]"
                >
                  <span className="font-japanese text-sm text-foreground/70 dark:text-white/70">
                    {item.practiceItemKey}
                  </span>
                  <span className="text-xs text-muted-foreground/70 dark:text-white/25">
                    x{item.missCount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
