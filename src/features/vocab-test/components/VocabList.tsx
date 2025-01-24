import { createSignal, createEffect, For } from "solid-js"
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import type { RichVocabItem } from "@/types/vocab"
import { isServer } from "solid-js/web"
import { Button } from "@/components/ui/button"
import { AppStorage, storageUtils } from "@/features/local-storage"

type VocabListProps = {
  data: RichVocabItem[]
  path: string
  onCheckedChange: (items: Set<string>) => void
}

export default function VocabList(props: VocabListProps) {
  const [checkedWords, setCheckedWords] = createSignal<Set<string>>(
    new Set<string>(),
  )

  // Load initial state
  createEffect(() => {
    if (isServer) return

    // Get saved words or use all words if none saved
    const saved = storageUtils.get(AppStorage.vocabTestEnabled.key(props.path))
    const words =
      saved.length > 0
        ? new Set<string>(saved)
        : new Set<string>(props.data.map((item) => item.word))

    setCheckedWords(words)
    props.onCheckedChange(words)
  })

  const toggleWord = (word: string) => {
    const newWords = new Set(checkedWords())
    if (newWords.has(word)) {
      newWords.delete(word)
    } else {
      newWords.add(word)
    }

    setCheckedWords(newWords)
    storageUtils.set(
      AppStorage.vocabTestEnabled.key(props.path),
      Array.from(newWords),
    )
    props.onCheckedChange(newWords)
  }

  return (
    <>
      <div class="mb-4 flex gap-2">
        <Button
          onClick={() => {
            const words = new Set<string>()
            setCheckedWords(words)
            storageUtils.set(AppStorage.vocabTestEnabled.key(props.path), [])
            props.onCheckedChange(words)
          }}
          variant="outline"
          size="sm"
        >
          Select None
        </Button>
        <Button
          onClick={() => {
            const words = new Set(props.data.map((item) => item.word))
            setCheckedWords(words)
            storageUtils.set(
              AppStorage.vocabTestEnabled.key(props.path),
              Array.from(words),
            )
            props.onCheckedChange(words)
          }}
          variant="outline"
          size="sm"
          title="Selects all"
        >
          Reset
        </Button>
      </div>

      <ul class="space-y-2 p-4">
        <For each={props.data}>
          {(item) => (
            <li>
              <Checkbox
                id={`vocab-${item.word}`}
                checked={checkedWords().has(item.word)}
                onChange={() => toggleWord(item.word)}
                class="flex cursor-pointer items-center space-x-2"
              >
                <CheckboxControl class="mr-2" />
                <CheckboxLabel class="flex w-full cursor-pointer justify-between">
                  <span class="font-japanese">{item.word}</span>
                  <span class="text-muted-foreground">
                    {item.english.join(", ")}
                  </span>
                </CheckboxLabel>
              </Checkbox>
            </li>
          )}
        </For>
      </ul>
    </>
  )
}
