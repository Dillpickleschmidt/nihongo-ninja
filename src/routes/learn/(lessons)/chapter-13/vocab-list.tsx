import ContentBox from "@/components/ContentBox"
import C13Nouns from "@/features/vocab-list/components/chapter-13/C13Nouns"
import C13DayCountAndMisc from "@/features/vocab-list/components/chapter-13/C13DayCountAndMisc"
import C13AdjAndVerbs from "@/features/vocab-list/components/chapter-13/C13AdjAndVerbs"

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
          <C13Nouns />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Day Count & Misc.
          </h3>
          <C13DayCountAndMisc />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adjectives & Verbs
          </h3>
          <C13AdjAndVerbs />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
