import Romaji from "@/components/text/Romaji"
import ContentBox from "@/components/ContentBox"
import NegativeMasuPractice from "./components/NegativeMasuPractice"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/practice/masu-conjugation"
    >
      <h1 class="px-6 pb-6 pt-6 text-center text-4xl font-semibold sm:px-12 sm:pt-12 lg:px-28 lg:pt-24">
        <strong>Negative</strong> <span class="font-japanese">ます</span> Form
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          Now that you know how to make{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          stems with godan, ichidan, and irregular verbs, you can easily make
          the negative forms. All you have to do is add{" "}
          <span class="font-japanese text-xl font-semibold text-indigo-400">
            ません
          </span>{" "}
          to the stem.
        </p>
        <h4 class="text-center text-2xl font-bold">Examples</h4>
        <p class="!mt-4 text-center text-xl">
          <span class="font-japanese text-2xl">
            <Romaji romaji="To drink">飲む</Romaji>
          </span>
          <span class="mx-4">{"->"}</span>
          <span class="font-japanese text-2xl">飲み</span>
          <span class="mx-4">{"->"}</span>
          <span class="font-japanese text-2xl">
            <Romaji romaji="(I) don't drink">
              飲み<span class="font-semibold text-indigo-400">ません</span>
            </Romaji>
          </span>
        </p>
        <p class="!mt-4 text-center text-xl">
          <span class="font-japanese text-2xl">
            <Romaji romaji="To eat">食べる</Romaji>
          </span>
          <span class="mx-4">{"->"}</span>
          <span class="font-japanese text-2xl">食べ</span>
          <span class="mx-4">{"->"}</span>
          <span class="font-japanese text-2xl">
            <Romaji romaji="(I) don't eat">
              食べ<span class="font-semibold text-indigo-400">ません</span>
            </Romaji>
          </span>
        </p>

        <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p class="!mt-4">
          Conjugate the following verbs into their negative{" "}
          <span class="font-japanese text-xl font-semibold">ます</span> form{" "}
          <span class="font-bold">using kanji</span>.
        </p>
        <p class="!mt-1 text-base italic text-muted-foreground">
          *From this lesson onwards, we'll expect you to write using kanji just
          as Japanese people would unless we specify otherwise.
        </p>
        <NegativeMasuPractice />
      </div>
    </ContentBox>
  )
}
