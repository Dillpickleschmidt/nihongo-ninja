// PatternsPreview.tsx
import { For, Show } from "solid-js"
import CollapsibleSection from "@/components/CollapsibleSection"
import { getChapterPatterns } from "../utils/dataLoader"
import { Loader2 } from "lucide-solid"

type PatternsPreviewProps = {
  availableChapters: number[]
  openChapter: number | null
  onOpenChange: (chapter: number | null) => void
  isCumulative: boolean
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
                open={props.openChapter === chapter}
                onOpenChange={(isOpen) =>
                  props.onOpenChange(isOpen ? chapter : null)
                }
              >
                <div class="space-y-4">
                  <For
                    each={
                      props.openChapter === chapter
                        ? getChapterPatterns(chapter, props.isCumulative)
                        : []
                    }
                  >
                    {(chapterData) => (
                      <div class="space-y-2">
                        {props.isCumulative && (
                          <h3 class="font-medium text-muted-foreground">
                            Chapter {chapterData.chapter}
                          </h3>
                        )}
                        <ul class="list-disc pl-6">
                          <For each={chapterData.patterns}>
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
