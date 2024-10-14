import ContentBox from "@/features/content-box/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-2/ne-yo"
    >
      <div className="inset-0 -mb-20">
        <YouTubeVideo
          videoId="Phr8z5X5Sf4"
          title="Should your 'Japanese voice' sound different?"
          credit="Dogen"
        />
      </div>
    </ContentBox>
  )
}
