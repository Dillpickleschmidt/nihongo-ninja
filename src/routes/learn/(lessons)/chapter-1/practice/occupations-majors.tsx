import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/db/statements"

export default function Page() {
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-1/occupations-majors"),
  )

  return (
    <Show when={data()} fallback={<h1>Loading...</h1>}>
      <PracticeMode
        data={data()!}
        deckName="Occupations & Majors"
        mode="kana"
      />
    </Show>
  )
}
