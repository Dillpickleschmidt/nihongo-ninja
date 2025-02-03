import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/util/timeFormat"
import { createSignal, For } from "solid-js"

const chapters = [
  { label: "おはようございます", time: 0 },
  { label: "おはよう", time: 21 },
  { label: "こんにちは", time: 43 },
  { label: "こんばんは", time: 60 },
  { label: "おやすみなさい", time: 79 },
  { label: "おやすみ", time: 90 },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-0/common-expressions"
      size="lg"
    >
      <YouTubeVideo
        videoId="po_6rnpP5mI"
        title="Greetings - Japanese Conversation for Beginners."
        credit="Japanese super immersion"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pb-6 pt-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Good Morning, Good Afternoon, Good Evening, Goodnight
          </h1>
        </div>
        <div>
          <h3 class="font-semibold">
            This video covers many ways to say good morning, good afternoon, and
            goodnight:
          </h3>
          <ul class="space-y-1 pl-4 pt-1">
            <For each={chapters}>
              {(chapter) => (
                <div
                  class="origin-left transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                  onClick={() => setSeekTime(chapter.time)}
                >
                  <div class="inline-flex space-x-2 text-base font-light text-blue-400">
                    <div class="min-w-8">{formatDuration(chapter.time)}</div>
                    <span>{chapter.label}</span>
                  </div>
                </div>
              )}
            </For>
          </ul>
        </div>
        <p>
          These greetings can get really squished sometimes, so let's expose
          your brain to the many ways Japanese speakers might say them.
        </p>
        <p>
          Around 17 seconds in, you're gonna think they're unrecognizable.
          That's okay, if someone talks like that, they'd only subject you to
          such torture if they knew that you knew you could assume what they're
          saying without actually understanding them.
        </p>
      </div>
    </ContentBox>
  )
}
