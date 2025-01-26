import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/util/timeFormat"
import { createSignal, For } from "solid-js"

// const vocab = [
//   {
//     japanese: (
//       <>
//         <Furigana furigana={<span class="text-xs">どうが</span>}>動画</Furigana>
//       </>
//     ),
//     english: "video",
//     time: 4,
//   },
// ]

export default function page() {
  // const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/next-lesson"
      size="lg"
    >
      <YouTubeVideo
        videoId="p37XUVrHP4E"
        title="Easy Japanese - Hobbies"
        credit="Nihongo-Learning"
        // seekTime={seekTime}
        // setSeekTime={setSeekTime}
        // vocabTimestamps={vocab}
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pb-6 pt-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">Hobbies With Yuta</h1>
        </div>
        <p>
          This video has a some of vocabulary from this lesson, and is a great
          way to learn how to talk about your hobbies.
        </p>
        <p>
          This one's relatively easy understand, so relax and look back at how
          far you've come!
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>The most important word for this video is:</p>
        <p>
          <span class="font-japanese text-xl">
            <Furigana furigana={<span class="text-sm">しゅみ</span>}>
              趣味
            </Furigana>
          </span>{" "}
          - hobby; pastime
        </p>

        {/* <ul class="space-y-1 pl-4">
          <For each={vocab}>
            {(word) => (
              <div
                class="origin-left transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                onClick={() => setSeekTime(word.time)}
              >
                <div class="inline-flex items-end space-x-2">
                  <div class="min-w-8 text-base font-light text-blue-400">
                    {formatDuration(word.time)}
                  </div>
                  <span class="font-japanese text-xl">{word.japanese}</span>
                  <span class="">- {word.english}</span>
                </div>
              </div>
            )}
          </For>
        </ul> */}
      </div>
    </ContentBox>
  )
}
