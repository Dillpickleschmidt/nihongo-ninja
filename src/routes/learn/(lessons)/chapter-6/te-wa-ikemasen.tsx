import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-6/dame"
    >
      <h1 class="px-12 pb-6 pt-28 text-center text-4xl font-semibold lg:px-28">
        <span class="font-japanese text-red-400">てはいけません</span> - Must
        Not Do
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          I don't know about you, but I'm starting to get a little tired of
          being a polite pushover. Time to lay down the law with{" "}
          <span class="font-japanese font-medium text-red-400">
            てはいけません
          </span>
          !
        </p>

        <hr class="my-6 border-t" />

        <h3 class="!mt-9 text-xl font-bold">The Formula</h3>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct way to prohibit*
        </p>
      </div>
    </ContentBox>
  )
}
