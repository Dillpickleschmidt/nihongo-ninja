import BackgroundImage from "@/components/BackgroundImage"

export default function lessons(props: { children: any }) {
  return (
    <div>
      <BackgroundImage
        class="z-0"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={4}
      />
      {props.children}
    </div>
  )
}
