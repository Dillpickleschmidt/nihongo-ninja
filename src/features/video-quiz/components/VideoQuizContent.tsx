import { Show } from "solid-js"
import { useVideoQuizContext } from "../context/VideoQuizContext"
import VideoPlayer from "@/features/video/VideoPlayer"

export default function VideoQuizContent() {
  const { correctEntry } = useVideoQuizContext()

  return (
    <Show when={correctEntry()}>
      <div class="relative h-[350px] w-[550px] overflow-hidden rounded-[40px] border-[3px] border-black shadow-lg dark:border-transparent">
        {correctEntry()!.videoId ? (
          <VideoPlayer id={correctEntry()!.videoId as string} />
        ) : (
          <img
            src={correctEntry()!.image}
            alt="quiz image"
            width={correctEntry()!.dimensions.width}
            height={correctEntry()!.dimensions.height}
            sizes="550px"
          />
        )}
      </div>
      <h2 class="mx-12 text-center text-xl">{correctEntry()!.prompt}</h2>
    </Show>
  )
}
