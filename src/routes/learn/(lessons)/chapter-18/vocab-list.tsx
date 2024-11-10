import ContentBox from "@/components/ContentBox"
import C17AdjAdvMisc from "@/features/vocab-list/components/chapter-17/C17AdjAdvMisc"
import C17Nouns1 from "@/features/vocab-list/components/chapter-17/C17Nouns-1"
import C17Nouns2 from "@/features/vocab-list/components/chapter-17/C17Nouns-2"
import C17Verbs from "@/features/vocab-list/components/chapter-17/C17Verbs"
import VocabGroup from "@/features/vocab-list/components/VocabGroup.tsx"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/grammar-notes"
    >
      <div class="border-b border-neutral-600 pb-16 md:mx-16">
        <h1 class="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div class="mx-8">
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns 1
          </h3>
          <VocabGroup path="chapter-18/nouns-1" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns 2 & Adjectives
          </h3>
          <VocabGroup path="chapter-18/nouns-2-and-adjectives" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            U & Irregular Verbs
          </h3>
          <VocabGroup path="chapter-18/u-and-irr-verbs" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Ru-Verbs & Misc.
          </h3>
          <VocabGroup path="chapter-18/ru-verbs-and-misc" />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
