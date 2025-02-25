import ContentBox from "@/components/ContentBox"
import PlacesMoneyFood from "@/features/vocab-list/components/chapter-2/PlacesMoneyFood"
import Things from "@/features/vocab-list/components/chapter-2/Things"
import WordsThatPoint from "@/features/vocab-list/components/chapter-2/WordsThatPoint"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/grammar-notes">
      <div class="border-b border-neutral-600 pb-32 md:mx-16">
        <h1 class="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div class="mx-8">
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Things
          </h3>
          <Things />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Words That Point
          </h3>
          <WordsThatPoint />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Places, Money, Food
          </h3>
          <PlacesMoneyFood />
        </div>
      </div>
    </ContentBox>
  )
}
