import { Show } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"
import VocabCards from "@/features/vocab-card/VocabCards"
import ContentBox from "@/components/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

const path = "chapter-7/body-parts"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())

  return (
    <ContentBox
      size="lg"
      nextButtonLink="/learn/chapter-7/practice/body-parts-readings"
      nextButtonText="Next Lesson ->"
    >
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Body Parts
      </h1>
      <div class="space-y-6 px-8 pb-16 pt-4 md:px-16">
        <YouTubeVideo
          videoId="o5tB5aQdvkk"
          title="Easy Japanese - Your First Body Parts Vocabulary"
          credit="Nihongo-Learning"
        />
        <p>A more comprehensive, albeit less entertaining video:</p>
        <YouTubeVideo
          videoId="j6YuhK6T5f4"
          title="【 Body Parts in Japanese | からだのパーツ】face/かお, body/からだ, mouth/くち, hand/てvocabulary"
          credit="Ninjapanese"
        />
      </div>
      <Show when={data()}>
        <VocabCards data={data()!} />
      </Show>
      <div class="pb-32" />
    </ContentBox>
  )
}
