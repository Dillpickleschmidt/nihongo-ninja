import ContentBox from "@/components/ContentBox"
import C14AdjAndVerbs from "@/features/vocab-list/components/chapter-14/C14AdjAndVerbs"
import C14CountersAdvMisc from "@/features/vocab-list/components/chapter-14/C14CountersAdvMisc"
import C14Nouns1 from "@/features/vocab-list/components/chapter-14/C14Nouns1"
import C14Nouns2 from "@/features/vocab-list/components/chapter-14/C14Nouns2"

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
            Nouns 1
          </h3>
          <C14Nouns1 />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns 2
          </h3>
          <C14Nouns2 />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adjectives & Verbs
          </h3>
          <C14AdjAndVerbs />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Counters, Adv., & Misc.
          </h3>
          <C14CountersAdvMisc />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
