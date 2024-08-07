import ContentBox from "@/features/content-box/ContentBox"
import Kikusasaizu from "@/features/kikusasaizu/Kikusasaizu"

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
      <div className="inset-0 -mb-20 p-12">
        <Kikusasaizu src="https://h5p.cee.sfu.ca/h5p/embed/2358" />
      </div>
    </ContentBox>
  )
}
