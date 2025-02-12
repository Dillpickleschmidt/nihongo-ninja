import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/util/timeFormat"
import { createSignal, For } from "solid-js"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-3/next-lesson" size="lg">
      <YouTubeVideo
        videoId="r0GgB9-TykQ"
        title="When Not to Use は"
        credit="Kaname Naito"
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pb-6 pt-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">When Not to Use は</h1>
        </div>
        <p>
          Kaname 先生 back at it again—explaining difficult topics in a way
          that's actually understandable.
        </p>

        <p class="pt-6">
          Like usual, there's a lot that might be above your level (like
          short/casual form sentences), but you'll still get the gist.
        </p>
      </div>
    </ContentBox>
  )
}
