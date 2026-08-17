import { resolveBackground } from "@nn/data/backgrounds/resolve-background";
import type { BackgroundSettings } from "@nn/data/backgrounds/types";
import { useQuery, type QueryClient } from "@tanstack/react-query";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useMemo, useRef } from "react";

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

  const extractAndSetColor = (element: HTMLImageElement | HTMLVideoElement) => {
    try {
      const color = fac.getColor(element);
      document.documentElement.style.setProperty("--dynamic-accent", color.hex);
      setPreference("accentColor", color.hex);
    } catch (e) {
      console.warn("Failed to extract color from background:", e);
    }
  };

  // Seed --dynamic-accent from the stored color right away. Extraction
  // updates it, but a cached image can finish loading before hydration
  // attaches onLoad, and raw var(--dynamic-accent) styles need a value.
  useEffect(() => {
    document.documentElement.style.setProperty("--dynamic-accent", preferences.accentColor);
  }, [preferences.accentColor]);

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
  const visible = finalOpacity > 0;

  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null);
  const setMediaRef = (el: HTMLImageElement | HTMLVideoElement | null) => {
    mediaRef.current = el;
  };

  // Extract once the media has pixel data. A cached image can finish
  // loading before hydration attaches handlers, so check readiness first
  // and fall back to a native load listener.
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const ready =
      el instanceof HTMLImageElement ? el.complete && el.naturalWidth > 0 : el.readyState >= 2;
    if (ready) {
      extractAndSetColor(el);
      return;
    }
    const eventName = el instanceof HTMLImageElement ? "load" : "loadeddata";
    const onReady = () => {
      extractAndSetColor(el);
    };
    el.addEventListener(eventName, onReady);
    return () => {
      el.removeEventListener(eventName, onReady);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [background.src, visible]);

  if (!visible) return null;

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
          ref={setMediaRef}
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
        />
      ) : (
        <div
          className="pointer-events-none fixed inset-0 -z-10 -mt-8 overflow-hidden"
          style={mediaStyle}
        >
          <img
            ref={setMediaRef}
            src={background.src}
            alt=""
            crossOrigin="anonymous"
            className={`h-full w-full object-cover ${
              background.layout === "vertical" ? "object-top" : "object-center"
            }`}
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
