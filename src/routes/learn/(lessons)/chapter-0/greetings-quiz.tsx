import ContentBox from "@/components/ContentBox"
import VideoQuizWrapper from "@/features/video-quiz/VideoQuizWrapper"

export default function page() {
  return (
    <ContentBox
      nextButtonLink="/learn/chapter-0/common-expressions"
      nextButtonText="Next Lesson ->"
    >
      <div class="pb-20">
        <VideoQuizWrapper />
      </div>
    </ContentBox>
  )
}
