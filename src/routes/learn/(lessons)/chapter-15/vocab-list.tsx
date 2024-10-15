import ContentBox from "@/components/ContentBox"
import C15GodanAndIchidanV from "@/features/vocab-list/components/chapter-15/C15GodanAndIchidanV"
import C15IrrVAdvMisc from "@/features/vocab-list/components/chapter-15/C15IrrVAdvMisc"
import C15Nouns1 from "@/features/vocab-list/components/chapter-15/C15Nouns1"
import C15Nouns2 from "@/features/vocab-list/components/chapter-15/C15Nouns2"

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
          <C15Nouns1 />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Nouns 2
          </h3>
          <C15Nouns2 />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Ichidan & Godan Verbs
          </h3>
          <C15GodanAndIchidanV />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Irreg Verbs, Adv., & Misc.
          </h3>
          <C15IrrVAdvMisc />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
