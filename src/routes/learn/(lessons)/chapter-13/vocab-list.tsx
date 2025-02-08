import ContentBox from "@/components/ContentBox"
import VocabGroup from "@/features/vocab-list/components/VocabGroup.tsx"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/grammar-notes">
      <div class="border-b border-neutral-600 pb-16 md:mx-16">
        <h1 class="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div class="mx-8">
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <VocabGroup path="chapter-13/nouns" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adjectives & Verbs
          </h3>
          <VocabGroup path="chapter-13/adj-and-verbs" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Day Count & Misc.
          </h3>
          <VocabGroup path="chapter-13/day-count-and-misc" />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
