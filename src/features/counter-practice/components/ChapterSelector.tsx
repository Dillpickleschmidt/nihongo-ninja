import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemInput,
  RadioGroupItemLabel,
} from "@/components/ui/radio-group"
import { Loader2 } from "lucide-solid"
import { For, Show } from "solid-js"

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
        <div class="column-fill-auto max-h-[300px] columns-2 space-y-4 overflow-y-auto">
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
                  <RadioGroupItemInput />
                  <RadioGroupItemControl />
                  <RadioGroupItemLabel class="origin-left text-lg duration-100 hover:scale-[102%] hover:cursor-pointer lg:text-[1.2rem]">
                    Chapter {chapter}
                  </RadioGroupItemLabel>
                </RadioGroupItem>
              )}
            </For>
          </RadioGroup>
        </div>
      </Show>
    </div>
  )
}
