import { getVocabularyByPath } from "@/db/statements"
import VocabTest from "@/features/vocab-test/VocabTest"
import { RichVocabItem } from "@/types/vocab"
import { cache, createAsync } from "@solidjs/router"
import { Loader2 } from "lucide-solid"
import { Show } from "solid-js"

const cacheKey = "chapter-19/chapter-13-18-nouns"
const getData = cache(async () => {
  console.log("[Page] getData cache function called")
  const group_1 = await getVocabularyByPath("chapter-19/chapter-13-18-nouns")
  console.log(
    "[Page] getData fetched vocabulary data:",
    group_1.length,
    "items",
  )
  return [...group_1]
}, cacheKey)

export const route = {
  preload: () => {
    console.log("[Page] preload route function called")
    return getData()
  },
}

export default function Page() {
  console.log("[Page] Component rendering")
  const data = createAsync(() => getData())

  return (
    <Show
      when={data()}
      fallback={
        <div class="flex h-screen items-center justify-center">
          <Loader2 class="h-20 w-20 animate-spin text-emerald-400" />
        </div>
      }
    >
      {(resolvedData) => {
        console.log(
          "[Page] Show component data resolved:",
          resolvedData().length,
          "items",
        )
        return (
          <VocabTest
            data={resolvedData()!}
            chapter={18}
            title="Chapter 13-18 Nouns"
            path={cacheKey}
          />
        )
      }}
    </Show>
  )
}
