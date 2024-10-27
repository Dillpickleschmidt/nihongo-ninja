import ContentBox from "@/components/ContentBox"
import BigNumbers from "@/features/charts/BigNumbersChart"
import DigitsPractice from "./components/DigitsPractice"
import NumbersKanjiPractice from "./components/NumbersKanjiPractice"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/practice/japanese-money"
    >
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        <span class="text-5xl italic">BIG</span> Numbers
      </h1>
      <div class="space-y-9 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          Understanding big numbers in Japanese is essential for navigating
          everyday situations, such as reading prices, dealing with currency, or
          discussing quantities. It's especially important because Japanese
          currency primarily deals with large values. In this lesson, we'll
          explore big numbers in Japanese and practice reading them as both
          digits and kanji.
        </p>
        <BigNumbers />
        <p class="text-base italic text-muted-foreground">
          *Note that <span class="font-japanese not-italic">一万</span> is{" "}
          <span class="font-japanese not-italic">
            <span class="underline underline-offset-[3px]">いち</span>まん
          </span>{" "}
          (not <span class="font-japanese not-italic">まん</span>), while 千 is
          just <span class="font-japanese not-italic">せん</span> (not{" "}
          <span class="font-japanese not-italic">いちせん</span>), and 百 is
          just <span class="font-japanese not-italic">ひゃく</span> (not{" "}
          <span class="font-japanese not-italic">いちひゃく</span>).
        </p>
        <p>
          Read the following numbers. Fill in the answers (in{" "}
          <span class="font-japanese">ひらがな</span>) if you want to check your
          knowledge.
        </p>
        <DigitsPractice />
        <p>
          Read the following <span class="font-japanese">漢字</span> (kanji)
          numbers. Fill in the answers (in{" "}
          <span class="font-japanese">ひらがな</span>) if you want to check your
          knowledge{" "}
          <span class="text-base text-muted-foreground">
            (this might feel painful at first, but you'll improve if you
            practice!)
          </span>
          .
        </p>
        <NumbersKanjiPractice />
        <p>
          By practicing these numbers, you will become more comfortable with
          reading and understanding prices. In the next lesson, we'll dive deep
          into Japanese currency and shopping.
        </p>
      </div>
    </ContentBox>
  )
}
