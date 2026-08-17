import type { KanjiEntry } from "@nn/convex/validators";
import { LoaderCircle } from "lucide-react";

import { Chip } from "./chip";

function SkippedKanji({ skippedKanji }: { skippedKanji: string[] }) {
  return (
    <div className="border-t border-border/50 pt-4 dark:border-card-foreground/20">
      <div className="mb-2 text-xs text-muted-foreground">Unmarked (will skip):</div>
      <div className="flex flex-wrap gap-2">
        {skippedKanji.map((kanji) => (
          <span key={kanji} className="text-lg text-muted-foreground/60">
            {kanji}
          </span>
        ))}
      </div>
    </div>
  );
}

export function KanjiTab({
  kanjiEntries,
  kanjiToVocab,
  skippedKanji,
  selectedKanji,
  selectedRadical,
  toggleKanji,
  toggleRadical,
}: {
  kanjiEntries?: KanjiEntry[];
  kanjiToVocab?: Map<string, string[]>;
  skippedKanji?: string[];
  selectedKanji: string | null;
  selectedRadical: string | null;
  toggleKanji: (k: string) => void;
  toggleRadical: (r: string) => void;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm dark:border-card-foreground/70">
      {kanjiEntries === undefined ? (
        <div className="flex items-center justify-center py-8">
          <LoaderCircle className="h-8 w-8 animate-spin text-muted-foreground/50" />
        </div>
      ) : kanjiEntries.length === 0 ? (
        skippedKanji?.length ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">No marked kanji found.</p>
            <SkippedKanji skippedKanji={skippedKanji} />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No kanji to display.</p>
        )
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {kanjiEntries.map((kanjiEntry) => {
              const usedIn = kanjiToVocab?.get(kanjiEntry.kanji)?.length || 0;
              return (
                <div
                  key={kanjiEntry.kanji}
                  className="rounded-lg border border-border/50 p-3 dark:border-card-foreground/40"
                >
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      className={`cursor-pointer rounded-md px-2 py-1 text-left text-lg font-bold ${
                        selectedKanji === kanjiEntry.kanji
                          ? "bg-indigo-500/15 text-indigo-400"
                          : "text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => {
                        toggleKanji(kanjiEntry.kanji);
                      }}
                      title="Toggle select Kanji"
                    >
                      {kanjiEntry.kanji}
                    </button>

                    <div className="text-xs text-muted-foreground">
                      Used in {usedIn} {usedIn === 1 ? "word" : "words"}
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="text-xs text-muted-foreground">Radicals:</div>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {kanjiEntry.radicalComponents.map((r) => (
                        <Chip
                          key={r}
                          label={r}
                          color="purple"
                          selected={selectedRadical === r}
                          onClick={() => {
                            toggleRadical(r);
                          }}
                        />
                      ))}
                      {kanjiEntry.radicalComponents.length === 0 && (
                        <span className="text-xs text-muted-foreground">None</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {skippedKanji && skippedKanji.length > 0 && (
            <div className="mt-6">
              <SkippedKanji skippedKanji={skippedKanji} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
