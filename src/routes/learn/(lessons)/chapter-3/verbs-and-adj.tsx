import { Show } from "solid-js"
import { getVocabularyByPath } from "@/db/statements"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A, cache, createAsync } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"

const path = "chapter-3/verbs-and-adj"
const getData = cache(async () => {
  return await getVocabularyByPath(path)
}, path)
export const route = {
  preload: () => getData(),
}

export default function page() {
  const data = createAsync<RichVocabItem[]>(() => getData())
  const jpdbIds = [
    [1578850, 495123619],
    [1169870, 2839775424],
    [1358280, 1232985445],
    [1360010, 2923483838],
    [1223640, 3230428144],
    [1221270, 1589949286],
    [1157170, 460825390],
    [2820690, 895801849],
    [1259290, 3110766742],
    [1591110, 3865890281],
    [1562350, 4280520068],
    [1456360, 3629470669],
    [1547720, 1154899103],
    [1404975, 2342358459],
  ]
  return (
    <>
      <div class="flex flex-col items-center">
        <div class="mx-4 max-w-[1300px] md:mx-8">
          <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
            Verbs and Adjectives
          </h1>
          <p class="px-8 pb-6 pt-12 text-2xl">
            This is likely your first time encountering verbs and adjectives in
            Japanese. In every vocab listing like this one, we provide
            additional information about the particles that some verbs expect to
            have paried with nouns. You've already learned a few of these
            particles, but these verbs expect several new ones that you haven't
            learned yet. Don't worry about them right now, but be aware that
            they exist and that you'll learn them shortly.
          </p>
          <p class="mx-16 my-4">
            We encourage you to come back here after you've learned the new
            particles to see how they interact with these verbs. You'll want to
            pay special attention to the particles going forward to make
            grammatially correct sentences.
          </p>
          <p class="mx-16 my-4">
            Just for fun,{" "}
            <a
              class="text-sky-400 underline"
              href="https://tandem.net/blog/conjugate-verbs-japanese"
              target="_blank"
            >
              here's a list of the most used Japanese verbs
            </a>
            . You'll see a lot of them listed below.
          </p>
        </div>
      </div>
      <Show when={data()}>
        <VocabCardPairNoBG data={data()!} index={0} single />
        <VocabCardPair data={data()!} index={1} />
        <VocabCardPairNoBG data={data()!} index={3} />
        <VocabCardPairNoBG data={data()!} index={5} />
        <VocabCardPairNoBG data={data()!} index={7} />
        <VocabCardPair data={data()!} index={9} />
        <VocabCardSingle data={data()!} index={11} />
        <VocabCardPairNoBG data={data()!} index={12} single />
        <VocabCardPair data={data()!} index={13} />
      </Show>
      <div class="pb-32" />
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/practice/verbs-and-adj-readings+">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
