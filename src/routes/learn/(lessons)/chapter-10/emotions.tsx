import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"
import { createSignal, For } from "solid-js"

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/next-lesson"
      size="lg"
    >
      <YouTubeVideo
        videoId="nmmj3N3RnqY"
        title="Comprehensible Japanese Beginner - Emotion 気持ち"
        credit="Nihongo-Learning"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b pb-6 pt-6 text-center text-4xl font-semibold lg:px-12 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Learning Emotions Through Immersion With Yuta
          </h1>
        </div>
        <p>
          Hone your listening skills and learn about emotions while you're at
          it. It also includes plenty of examples of なる.
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>The only word I'll mention here is:</p>
        <p>
          <span class="font-japanese text-xl">
            <Furigana furigana={<span class="text-sm">しょうかい</span>}>
              紹介
            </Furigana>
            する
          </span>{" "}
          - To introduce - 次の
          <Romaji class="-mt-2" romaji="chapter">
            <Furigana furigana={<span class="text-sm">しょう</span>}>
              章
            </Furigana>
          </Romaji>
          で「紹介する」を紹介します
        </p>
      </div>
    </ContentBox>
  )
}
