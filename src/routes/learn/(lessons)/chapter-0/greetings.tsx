import { getVocabularyByPath } from "@/db/statements"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import VocabPair from "@/features/vocab-card/pair/VocabPair"
import VocabSingle from "@/features/vocab-card/single/VocabSingle"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"

export default function test2() {
  const [data] = createResource<RichVocabItem[]>(
    async (): Promise<RichVocabItem[]> => {
      const vocabItems = await getVocabularyByPath(
        "chapter-0/greetings-common-expressions",
      )

      // Use the local `vocabItems` to get the first 7 entries and the last entry
      const firstSeven: RichVocabItem[] = vocabItems.slice(0, 7)
      const lastEntry: RichVocabItem[] = vocabItems.slice(-1)

      // Combine the first seven and the last entry into one array
      return firstSeven.concat(lastEntry)
    },
  )

  return (
    <>
      <div class="flex flex-col items-center">
        <div class="mx-4 max-w-[1300px] md:mx-8">
          <h1 class="pt-20 text-center text-4xl font-medium leading-[3.25rem]">
            <span class="text-5xl font-medium">Great job</span>, you've finally
            made it! You've now got a strong grasp of Hiragana! Not only can you{" "}
            <span class="text-5xl">read</span> hiragana, but you also have the
            phonetic arsenal to <span class="text-5xl">say</span> pretty much{" "}
            <span class="font-bold">*anything*</span> in Japanese!🔥
          </h1>
          <h2 class="px-8 pb-6 pt-12 text-2xl">
            Now that you're familiar with the basics, let's dive into some
            common Japanese greetings. These phrases will be your first steps
            into conversational Japanese, and they're essential for everyday
            interactions.
          </h2>
        </div>
      </div>
      <Show when={data()}>
        {
          <>
            <VocabCardPairNoBG data={data()!} index={0} />
            <VocabSingle data={data()!} index={2} />
            <VocabCardPairNoBG data={data()!} index={3} />
            <VocabCardPairNoBG data={data()!} index={5} />
            <VocabCardPairNoBG data={data()!} index={7} single />
          </>
        }
      </Show>
      <div class="mt-12 flex flex-col items-center pb-32">
        <div class="mx-4 max-w-[850px] md:mx-8">
          <p class="px-16">
            These phrases are great for everyday use and help convey a friendly,
            approachable tone. As with any language, the context and your
            relationship with the person you're speaking to will guide which
            phrase is most appropriate.
          </p>
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/culture-note-japanese-greetings">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
