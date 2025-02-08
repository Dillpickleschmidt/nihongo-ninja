import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"
import { createSignal, For } from "solid-js"

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <ContentBox nextButtonLink="/learn/chapter-3/next-lesson" size="lg">
      <YouTubeVideo
        videoId="vD3_BO4KAdM"
        title="Comprehensible Japanese (beginner) -Big,Small　大きい、小さい　おおきい、ちいさい"
        credit="Nihongo-Learning"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b pb-6 pt-6 text-center text-4xl font-semibold lg:px-12 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Comparing Sizes (より, の方が)
          </h1>
        </div>
        <p>
          Get a feel for how people actually construct sentence to compare items
          in this video{" "}
          <span class="text-base text-muted-foreground">
            (lots of reps in this video)
          </span>
          .
        </p>
      </div>
    </ContentBox>
  )
}
