import { ImageRoot, ImageFallback, Image } from "@/components/ui/image"
import { twMerge } from "tailwind-merge"

type PortraitIconProps = {
  src: string
  alt?: string
  class?: string
  fallback?: string
}

export default function PortraitIcon(props: PortraitIconProps) {
  return (
    <div
      class={twMerge(
        `relative float-start mr-3 mt-1 flex h-[3rem] w-[3rem] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-muted text-4xl`,
        props.class,
      )}
    >
      <ImageRoot class="float-end">
        <Image src={props.src} alt={props.alt} />
        <ImageFallback>{props.fallback ? props.fallback : "P"}</ImageFallback>
      </ImageRoot>
    </div>
  )
}
