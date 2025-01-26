import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/util/timeFormat"
import { createSignal, For } from "solid-js"

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/my-kikitori-conversation-1"
      size="lg"
    >
      <YouTubeVideo
        videoId="bPP3-GyFpYs"
        title="Beginner Guide to Konbini"
        credit="Kaname Naito"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pb-6 pt-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Beginner Guide To コンビニ
          </h1>
        </div>
        <p>
          かなめさん back at it again with another banger. This time, we're
          checking out some common phrases and ways to interact with others at
          the コンビニ.
        </p>
        <p>
          The questions are advanced, but the main thing to get out of this
          video is how to give responses.
        </p>
        <p class="text-base text-muted-foreground">
          かなめさん also talks a bit about counters which you'll learn in
          Chapter 5!
        </p>
      </div>
    </ContentBox>
  )
}
