import ContentBox from "@/components/ContentBox"
import C17AdjAdvMisc from "@/features/vocab-list/components/chapter-17/C17AdjAdvMisc"
import C17Nouns1 from "@/features/vocab-list/components/chapter-17/C17Nouns-1"
import C17Nouns2 from "@/features/vocab-list/components/chapter-17/C17Nouns-2"
import C17Verbs from "@/features/vocab-list/components/chapter-17/C17Verbs"

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
          <C17Nouns1 />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns 2
          </h3>
          <C17Nouns2 />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Verbs
          </h3>
          <C17Verbs />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Adjectives, Adv. & Misc.
          </h3>
          <C17AdjAdvMisc />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
