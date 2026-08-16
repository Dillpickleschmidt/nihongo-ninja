import { cn } from "@nn/ui";

import { useAnimateIn } from "./use-animate-in";
import { VideoShowcase } from "./video-showcase";

export function FeatureVideoCard({
  title,
  description,
  videoTitle,
  videoSrc,
  flipped,
  index,
}: {
  title: string;
  description: string;
  videoTitle: string;
  videoSrc?: string;
  flipped?: boolean;
  index: number;
}) {
  const { ref, initialStyles } = useAnimateIn("down", {
    delay: index * 100,
    duration: 700,
    distance: 48,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "grid items-center gap-8 lg:gap-12",
        flipped ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]",
      )}
      style={initialStyles}
    >
      <div className={cn(flipped && "lg:order-2")}>
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-(--landing-accent)/20 to-(--landing-accent-end)/20 text-sm font-bold text-(--landing-accent)">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-(--landing-accent)/20 to-transparent" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">{title}</h3>
        <p className="font-outfit text-base leading-relaxed text-white/60 lg:text-lg">
          {description}
        </p>
      </div>
      <div className={cn(flipped && "lg:order-1")}>
        <VideoShowcase title={videoTitle} subtitle="Click to play" videoSrc={videoSrc} />
      </div>
    </div>
  );
}
