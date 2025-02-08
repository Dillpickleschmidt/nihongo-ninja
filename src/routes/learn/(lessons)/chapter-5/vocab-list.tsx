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
          <VocabGroup path="chapter-5/nouns" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            I-Adjectives
          </h3>
          <VocabGroup path="chapter-5/i-adjectives" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Na-Adjectives
          </h3>
          <VocabGroup path="chapter-5/na-adjectives" />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Verbs, Adverbs, & Misc.
          </h3>
          <VocabGroup path="chapter-5/verbs-adv-misc" />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
