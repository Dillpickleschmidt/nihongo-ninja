import { Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

const path = "chapter-3/chapter-1-kanji-part-1"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())
  const jpdbIds = [[1318290, 281437092]]

  return (
    <>
      <div class="flex flex-col items-center">
        <div class="mx-4 max-w-[1300px] md:mx-8">
          <h1 class="pt-20 text-center text-4xl font-medium leading-[3.25rem]">
            Chapter 1 Part 1 Kanji
          </h1>
          <h2 class="px-8 pb-6 pt-12 text-2xl">
            We're going to be practicing the kanji readings for the first time
            in this chapter. We don't expect you to memorize them all right
            away, (that's what the following practice is for), but you'll want
            to familiarize yourself with them as much as possible, just like
            you've been doing with the kana.
          </h2>
        </div>
      </div>
      <Show when={data()}>
        <VocabCardPairNoBG data={data()!} index={0} />
        <VocabCardPairNoBG data={data()!} index={2} />
        <VocabCardSingle data={data()!} index={4} />
        <VocabCardPairNoBG data={data()!} index={5} />
        <VocabCardPair data={data()!} index={7} />
        <VocabCardPairNoBG data={data()!} index={9} />
        <VocabCard4NoBG data={data()!} index={11} />
        <VocabCardPair data={data()!} index={15} />
        <VocabCardPair data={data()!} index={17} />
        <VocabCardPairNoBG data={data()!} index={19} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/practice/chapter-1-kanji-part-1">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
