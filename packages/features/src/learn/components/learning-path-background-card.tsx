import type { ResolvedBackground } from "@nn/data/backgrounds/resolve-background";

import { BackgroundPreviewMedia } from "./background-preview-media";

export function LearningPathBackgroundCard({
  title,
  resolvedBackground,
  active,
  aspect,
  onSelect,
}: {
  title: string;
  resolvedBackground: ResolvedBackground;
  active?: boolean;
  aspect?: string;
  onSelect: () => void;
}) {
  return (
    <div className="group relative rounded-xl p-0.5">
      <button
        type="button"
        onClick={onSelect}
        className="block w-full cursor-pointer overflow-hidden rounded-xl border border-white/6 text-left ring-offset-2 ring-offset-neutral-950 outline-none hover:border-white/12 focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <div className="relative bg-black/25" style={{ aspectRatio: aspect ?? "16 / 5" }}>
          <BackgroundPreviewMedia
            item={resolvedBackground.background}
            width={320}
            height={140}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/82 via-background/30 to-background/0 group-hover:opacity-45" />

          {active ? (
            <div className="absolute top-2 left-2 rounded-full bg-dynamic-accent/90 px-2 py-0.5 text-xs font-medium text-black">
              Active
            </div>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 px-3 pb-2.5">
            <p className="truncate text-sm font-medium text-white">{title}</p>
          </div>
        </div>
      </button>
    </div>
  );
}
