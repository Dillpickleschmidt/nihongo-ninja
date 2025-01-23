// VocabList.tsx
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
  const [checkedItems, setCheckedItems] = createSignal<Set<string>>(new Set())
  const storageKey = AppStorage.vocabEnabled.key(props.path)

  createEffect(() => {
    if (isServer) return

    // Load saved state or initialize with all words
    const savedWords = storageUtils.get(
      storageKey,
      AppStorage.vocabEnabled.defaultValue,
    )
    const initialWords =
      savedWords.length > 0
        ? new Set(savedWords)
        : new Set(props.data.map((item) => item.word))

    // Save and update state
    storageUtils.set(storageKey, Array.from(initialWords))
    setCheckedItems(initialWords)
    props.onCheckedChange(initialWords)
  })

  const handleCheckboxChange = (word: string) => {
    if (isServer) return

    setCheckedItems((prev) => {
      const newSet = new Set(prev)
      newSet.has(word) ? newSet.delete(word) : newSet.add(word)

      // Save and notify parent
      storageUtils.set(storageKey, Array.from(newSet))
      props.onCheckedChange(newSet)

      return newSet
    })
  }

  const handleSelectNone = () => {
    if (isServer) return
    const newSet = new Set<string>()
    localStorage.setItem(storageKey, JSON.stringify([...newSet]))
    setCheckedItems(newSet)
    props.onCheckedChange(newSet)
  }

  const handleReset = () => {
    if (isServer) return
    const newSet = new Set(props.data.map((item) => item.word))
    localStorage.setItem(storageKey, JSON.stringify([...newSet]))
    setCheckedItems(newSet)
    props.onCheckedChange(newSet)
  }

  return (
    <>
      <div class="mb-4 flex gap-2">
        <Button onClick={handleSelectNone} variant="outline" size="sm">
          Select None
        </Button>
        <Button
          onClick={handleReset}
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
                checked={checkedItems().has(item.word)}
                onChange={() => handleCheckboxChange(item.word)}
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
