import { Button } from "@/components/ui/button"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemInput,
  RadioGroupItemLabel,
} from "@/components/ui/radio-group"
import { Loader2 } from "lucide-solid"
import { For, Show } from "solid-js"
import { getChapterPatterns } from "../utils/dataLoader"

export default function ChapterSelector(props: {
  availableChapters: number[]
  selectedChapter: number
  onSelect: (value: string) => void
}) {
  return (
    <div class="space-y-4">
      <p class="italic text-muted-foreground">
        Include counters up to the specified chapter:
      </p>
      <Show
        when={props.availableChapters.length > 0}
        fallback={
          <div class="flex min-h-48 items-center justify-center">
            <Loader2 class="h-20 w-20 animate-spin text-emerald-400" />
          </div>
        }
      >
        <div class="column-fill-auto space-y-4 overflow-y-auto lg:columns-2">
          <RadioGroup
            value={props.selectedChapter.toString()}
            onChange={props.onSelect}
          >
            <For each={props.availableChapters}>
              {(chapter) => (
                <RadioGroupItem
                  value={chapter.toString()}
                  class="mb-2 flex break-inside-avoid items-center space-x-2"
                >
                  <div class="flex min-w-fit items-center space-x-2">
                    <RadioGroupItemInput />
                    <RadioGroupItemControl />
                    <RadioGroupItemLabel class="origin-left text-lg duration-100 hover:scale-[102%] hover:cursor-pointer lg:text-[1.2rem]">
                      Chapter {chapter}
                    </RadioGroupItemLabel>
                  </div>
                  <Button
                    variant="ghost"
                    class="max-h-16 w-full justify-start overflow-y-auto !px-2 font-japanese font-normal text-muted-foreground"
                  >
                    <For each={getChapterPatterns(chapter, false)}>
                      {(chapterData) => (
                        <For each={chapterData.patterns}>
                          {(pattern, index) => (
                            <span class="pr-1">
                              {pattern.id}
                              {index() < chapterData.patterns.length - 1 && ","}
                            </span>
                          )}
                        </For>
                      )}
                    </For>
                  </Button>
                </RadioGroupItem>
              )}
            </For>
          </RadioGroup>
        </div>
      </Show>
    </div>
  )
}
