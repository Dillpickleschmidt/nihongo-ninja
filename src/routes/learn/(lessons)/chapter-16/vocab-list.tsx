import ContentBox from "@/components/ContentBox"
import C16AdjAndUV from "@/features/vocab-list/components/chapter-16/C16AdjAndUV"
import C16AdvAndMisc from "@/features/vocab-list/components/chapter-16/C16AdvAndMisc"
import C16Nouns from "@/features/vocab-list/components/chapter-16/C16Nouns"
import C16RuAndIrrV from "@/features/vocab-list/components/chapter-16/C16RuAndIrrV"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/grammar-notes"
    >
      <div class="mx-16 border-b border-neutral-600 pb-16">
        <h1 class="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div class="mx-8">
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <C16Nouns />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adjectives & U-Verbs
          </h3>
          <C16AdjAndUV />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Ru-Verbs & Irregular Verbs
          </h3>
          <C16RuAndIrrV />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adverbs & Misc.
          </h3>
          <C16AdvAndMisc />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
