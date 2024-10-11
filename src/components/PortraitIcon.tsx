import { ImageRoot, ImageFallback, Image } from "@/components/ui/image"
import { twMerge } from "tailwind-merge"

type PortraitIconProps = {
  src: string
  class?: string
  fallback?: string
}

export default function PortraitIcon({
  src,
  class: className,
  fallback,
}: PortraitIconProps) {
  return (
    <div
      class={twMerge(
        `relative float-start mr-3 mt-1 flex h-[3rem] w-[3rem] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-muted text-4xl`,
        className,
      )}
    >
      <ImageRoot class="float-end">
        <Image src={src} />
        <ImageFallback>{fallback ? fallback : "P"}</ImageFallback>
      </ImageRoot>
    </div>
  )
}
