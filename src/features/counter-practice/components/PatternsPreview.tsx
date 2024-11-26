// PatternsPreview.tsx
import { For, Show } from "solid-js"
import { Loader2 } from "lucide-solid"
import CollapsibleSection from "@/components/CollapsibleSection"
import { CounterPattern } from "../types"

type PatternsPreviewProps = {
  availableChapters: number[]
  patterns: CounterPattern[]
  openChapter: number | null
  onOpenChange: (chapter: number | null) => void
  getPatternsByChapter: (id: string) => number
  isCumulative: boolean
}

function getPatternsGroupedByChapter(
  patterns: CounterPattern[],
  currentlyOpenChapter: number,
  getPatternsByChapter: (id: string) => number,
  isCumulative: boolean,
) {
  if (isCumulative) {
    // For cumulative mode, return grouped patterns up to current chapter
    const groupedPatterns: { chapter: number; patterns: CounterPattern[] }[] =
      []

    for (let chapter = 1; chapter <= currentlyOpenChapter; chapter++) {
      const chaptersPatterns = patterns.filter(
        (p) => getPatternsByChapter(p.id) === chapter,
      )
      if (chaptersPatterns.length > 0) {
        groupedPatterns.push({
          chapter,
          patterns: chaptersPatterns,
        })
      }
    }

    return groupedPatterns
  } else {
    // For single chapter mode, just get patterns from this chapter
    const chaptersPatterns = patterns.filter(
      (p) => getPatternsByChapter(p.id) === currentlyOpenChapter,
    )
    return chaptersPatterns.length > 0
      ? [{ chapter: currentlyOpenChapter, patterns: chaptersPatterns }]
      : []
  }
}

export default function PatternsPreview(props: PatternsPreviewProps) {
  return (
    <section class="space-y-6 rounded-xl border bg-card p-6">
      <h2 class="text-center text-2xl font-bold text-emerald-300">
        Counter Patterns Preview
      </h2>
      <Show
        when={props.availableChapters.length > 0}
        fallback={
          <div class="flex min-h-48 items-center justify-center">
            <Loader2 class="h-20 w-20 animate-spin text-emerald-400" />
          </div>
        }
      >
        <div class="space-y-4">
          <For each={props.availableChapters}>
            {(chapter) => (
              <CollapsibleSection
                title={`Chapter ${chapter}`}
                containerClass="mb-4"
                open={props.openChapter === chapter}
                onOpenChange={(isOpen) => {
                  props.onOpenChange(isOpen ? chapter : null)
                }}
              >
                <div class="space-y-6">
                  <For
                    each={getPatternsGroupedByChapter(
                      props.patterns,
                      chapter,
                      props.getPatternsByChapter,
                      props.isCumulative,
                    )}
                  >
                    {(group) => (
                      <div class="space-y-2">
                        {props.isCumulative && (
                          <h3 class="font-medium text-muted-foreground">
                            Chapter {group.chapter}
                          </h3>
                        )}
                        <ul class="list-disc pl-6">
                          <For each={group.patterns}>
                            {(pattern) => (
                              <li>
                                {pattern.id}: {pattern.baseReading}
                                {pattern.soundChangeType && (
                                  <span class="ml-2 text-sm text-muted-foreground">
                                    ({pattern.soundChangeType})
                                  </span>
                                )}
                              </li>
                            )}
                          </For>
                        </ul>
                      </div>
                    )}
                  </For>
                </div>
              </CollapsibleSection>
            )}
          </For>
        </div>
      </Show>
    </section>
  )
}
