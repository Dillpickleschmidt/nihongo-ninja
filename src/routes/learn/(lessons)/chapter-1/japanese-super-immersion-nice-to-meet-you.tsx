import ContentBox from "@/components/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/util/timeFormat"
import { createSignal, For } from "solid-js"

const chapters = [
  { label: "Polite - Slow", time: 0 },
  { label: "Polite - Normal", time: 60 },
  { label: "Casual - Normal", time: 89 },
]

const vocab = [
  { japanese: "と申します", english: "my name is", time: 5 },
  { japanese: "と言います", english: "my name is", time: 10 },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/japanese-super-immersion-nice-to-meet-you"
      size="lg"
    >
      <YouTubeVideo
        videoId="XBKeW87xsKc"
        title="Nice to meet you - Japanese Conversation for Beginners."
        credit="Japanese super immersion"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pb-6 pt-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">"Nice to meet you"</h1>
        </div>
        <div>
          <h3 class="font-semibold">
            This video covers self introductions 3 times:
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
          Sure, it's still a little boring, but that's just how it is without
          knowing more of the language. The good news is that it only gets
          better from here!
        </p>

        <h2 class="pt-6 text-2xl font-semibold">
          What to get out of this video
        </h2>
        <p>
          Pay attention to how they speak, the rhythm of their words, and the
          flow of their interactions{" "}
          <span class="text-base text-muted-foreground">
            (especially during the normal speed)
          </span>
          . Observe when they pause, how they respond, and the subtle ways they
          show they're listening.
        </p>
        <p>
          Japanese relies heavily on non-verbal communication, which you can
          start to notice even without understanding the language. While you're
          not expected to practice this yet, but it's good to start noticing it.
        </p>
        <p class="text-base text-muted-foreground">
          *You're not expected to know most of the casual conversation. We'll
          cover that in later chapters.
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>
          This is a list of the important new words and phrases from the video
          that haven't been shown to you yet. It's not meant to be
          comprehensive, but are just here to help you understand what's going
          on.
        </p>

        <ul class="space-y-1 pl-4">
          <For each={vocab}>
            {(word) => (
              <div
                class="origin-left transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                onClick={() => setSeekTime(word.time)}
              >
                <div class="inline-flex items-center space-x-2">
                  <div class="min-w-8 text-base font-light text-blue-400">
                    {formatDuration(word.time)}
                  </div>
                  <span class="font-japanese text-xl">{word.japanese}</span>
                  <span class="">- {word.english}</span>
                </div>
              </div>
            )}
          </For>
        </ul>
      </div>
    </ContentBox>
  )
}
