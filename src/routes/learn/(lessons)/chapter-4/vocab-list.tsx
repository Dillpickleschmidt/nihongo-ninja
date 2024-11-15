import ContentBox from "@/components/ContentBox"
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
          <VocabGroup path="chapter-4/nouns-1" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns 2
          </h3>
          <VocabGroup path="chapter-4/nouns-2" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Location Words
          </h3>
          <VocabGroup path="chapter-4/location-words" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Verbs, Adverbs, & Misc.
          </h3>
          <VocabGroup path="chapter-4/verbs-adv-misc" />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}