import { resolveBackground } from "@nn/data/backgrounds/resolve-background";
import type { BackgroundSettings } from "@nn/data/backgrounds/types";
import { useQuery, type QueryClient } from "@tanstack/react-query";
import { FastAverageColor } from "fast-average-color";
import { useMemo } from "react";

import { usePreferences } from "../preferences";

// Routes tune the ambient background (blur/opacity/gradient) by writing this
// query's data; the fixed background layer below reads it reactively.
const BACKGROUND_SETTINGS_KEY = ["backgroundSettings"];

// Hidden by default — routes that want the ambient background opt in via
// setBackgroundSettings in their loader.
const DEFAULT_SETTINGS: BackgroundSettings = {
  blur: 16,
  opacityOffset: -1,
  showGradient: false,
};

export function setBackgroundSettings(queryClient: QueryClient, settings: BackgroundSettings) {
  queryClient.setQueryData(BACKGROUND_SETTINGS_KEY, settings);
}

function useBackgroundSettings(): BackgroundSettings {
  const { data } = useQuery<BackgroundSettings>({
    queryKey: BACKGROUND_SETTINGS_KEY,
    initialData: DEFAULT_SETTINGS,
    staleTime: Infinity,
  });
  return data;
}

const fac = new FastAverageColor();

// The fixed page background behind all content: the active learning path's
// chapter background (image or video), blurred and dimmed per-route. Extracts
// the average color into --dynamic-accent.
export function AmbientBackground() {
  const { preferences, setPreference } = usePreferences();
  const settings = useBackgroundSettings();

  const resolved = useMemo(
    () =>
      resolveBackground(
        preferences.activeLearningPath,
        preferences.activeChapter,
        preferences.backgroundOverrides,
      ),
    [preferences.activeLearningPath, preferences.activeChapter, preferences.backgroundOverrides],
  );

  const background = resolved.background;
  const finalOpacity = background.opacity + settings.opacityOffset;
  if (finalOpacity <= 0) return null;

  const extractAndSetColor = (element: HTMLImageElement | HTMLVideoElement) => {
    try {
      const color = fac.getColor(element);
      document.documentElement.style.setProperty("--dynamic-accent", color.hex);
      setPreference("accentColor", color.hex);
    } catch (e) {
      console.warn("Failed to extract color from background:", e);
    }
  };

  const yOffset = background.yOffsetDesktop ?? "0";
  const height = yOffset.startsWith("-") ? `calc(100% + ${yOffset.slice(1)})` : "100%";
  const blur = settings.blur === undefined ? "16px" : `${settings.blur}px`;
  const mediaStyle: React.CSSProperties = {
    opacity: finalOpacity,
    filter: `blur(${blur})`,
    transition: "filter 300ms ease-out",
    width: "100%",
    height,
    top: yOffset,
  };

  return (
    <>
      {background.mediaType === "video" ? (
        <video
          src={background.src}
          className="pointer-events-none fixed inset-0 -z-10 -mt-8"
          style={{
            ...mediaStyle,
            objectFit: "cover",
            objectPosition: background.layout === "vertical" ? "top" : "center",
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            extractAndSetColor(e.currentTarget);
          }}
        />
      ) : (
        <div
          className="pointer-events-none fixed inset-0 -z-10 -mt-8 overflow-hidden"
          style={mediaStyle}
        >
          <img
            src={background.src}
            alt=""
            crossOrigin="anonymous"
            className={`h-full w-full object-cover ${
              background.layout === "vertical" ? "object-top" : "object-center"
            }`}
            onLoad={(e) => {
              extractAndSetColor(e.currentTarget);
            }}
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div
        className={`pointer-events-none fixed inset-0 -z-5 transition-opacity duration-300 ${
          settings.showGradient ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, transparent 30%, rgba(18, 18, 18, 1) 100%)",
        }}
      />
    </>
  );
}
