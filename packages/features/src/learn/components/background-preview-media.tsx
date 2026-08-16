import type { BuiltInBackground } from "@nn/data/backgrounds/catalog";
import type { UploadedBackground } from "@nn/data/backgrounds/resolve-background";

export type BackgroundPreviewItem = BuiltInBackground | UploadedBackground;

// Plain <img> preview; responsive variants return with the image pipeline.
export function BackgroundPreviewMedia({
  item,
  width,
  height,
  className,
}: {
  item: BackgroundPreviewItem;
  width: number;
  height?: number;
  className?: string;
}) {
  const src = item.mediaType === "video" ? item.posterSrc : item.src;
  return (
    <img
      src={src}
      width={width}
      height={height ?? width}
      alt="Background preview"
      className={className}
    />
  );
}
