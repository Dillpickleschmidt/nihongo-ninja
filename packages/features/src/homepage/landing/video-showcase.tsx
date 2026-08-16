import { cn } from "@nn/ui";
import { useRef, useState } from "react";

const ASPECT_CLASSES = {
  video: "aspect-video",
  square: "aspect-square",
  tall: "aspect-[9/16]",
} as const;

export function VideoShowcase({
  title,
  subtitle,
  className,
  aspectRatio = "video",
  videoSrc,
  autoPlay,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: keyof typeof ASPECT_CLASSES;
  videoSrc?: string;
  autoPlay?: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay ?? false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // isPlaying follows the media element's own events, so it stays correct
  // when autoplay is blocked or the OS pauses playback.
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/60 backdrop-blur-sm",
        ASPECT_CLASSES[aspectRatio],
        className,
      )}
    >
      {videoSrc === undefined ? null : (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            className="absolute inset-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            autoPlay={autoPlay}
            onPlay={() => {
              setIsPlaying(true);
            }}
            onPause={() => {
              setIsPlaying(false);
            }}
          />
          <div
            className={cn(
              "absolute inset-0 bg-black/40 transition-opacity duration-300",
              isPlaying ? "opacity-0" : "opacity-100",
            )}
          />
        </>
      )}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-(--landing-accent)/5 via-transparent to-(--landing-accent-end)/5" />

      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300",
          isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100",
        )}
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 scale-150 rounded-full bg-(--landing-accent)/20 blur-xl transition-transform duration-700 group-hover:scale-[2]" />
          <button
            type="button"
            aria-label={isPlaying ? `Pause: ${title}` : `Play: ${title}`}
            onClick={togglePlay}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-(--landing-accent) to-(--landing-accent-end) transition-transform duration-300 group-hover:scale-110"
            style={{
              boxShadow:
                "0 10px 15px -3px color-mix(in srgb, var(--landing-accent) 25%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--landing-accent) 25%, transparent)",
            }}
          >
            {isPlaying ? (
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        <p className="text-center text-lg font-medium text-white/90 drop-shadow-lg">{title}</p>
        {subtitle === undefined ? null : (
          <p className="mt-1 text-sm text-white/50 drop-shadow-lg">{subtitle}</p>
        )}
      </div>

      <div className="pointer-events-none absolute top-3 left-3 h-6 w-6 rounded-tl-lg border-t-2 border-l-2 border-(--landing-accent)/30" />
      <div className="pointer-events-none absolute top-3 right-3 h-6 w-6 rounded-tr-lg border-t-2 border-r-2 border-(--landing-accent)/30" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-(--landing-accent)/30" />
      <div className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 rounded-br-lg border-r-2 border-b-2 border-(--landing-accent)/30" />
    </div>
  );
}
