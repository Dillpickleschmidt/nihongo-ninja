// A browser cannot show Crunchyroll in an iframe (X-Frame-Options). In a
// browser this page only shows where to find the feature. In the desktop app,
// the main process draws a WebContentsView over this page. The preload script
// gives this page `window.nnDesktop` to control it.

import { Link } from "@nn/router";
import { Button, Heading, Main, Paragraph } from "@nn/ui";
import { useEffect, useRef } from "react";
import { View } from "react-native";

declare global {
  interface Window {
    nnDesktop?: {
      openEmbed: (
        url: string,
        bounds: Readonly<{ x: number; y: number; width: number; height: number }>,
      ) => void;
      closeEmbed: () => void;
    };
  }
}

const CRUNCHYROLL_URL = "https://www.crunchyroll.com/";

export default function WatchPage() {
  const frameRef = useRef<View>(null);

  useEffect(() => {
    const desktop = window.nnDesktop;
    if (!desktop) return;

    // Electron draws the WebContentsView over this page, at the size of the
    // frame below. A React Native Web ref gives the DOM element.
    const el = frameRef.current as unknown as HTMLElement | null;
    if (!el) {
      throw new Error(
        "Watch frame ref did not yield a DOM element — cannot position the WebContentsView.",
      );
    }
    const rect = el.getBoundingClientRect();
    desktop.openEmbed(CRUNCHYROLL_URL, {
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    });
    return () => {
      desktop.closeEmbed();
    };
  }, []);

  // This route uses ssr: false, so this code runs in the browser only.
  const isDesktop = !!window.nnDesktop;

  return (
    <Main className="flex-1 gap-4 bg-background p-6">
      <View className="flex-row items-center justify-between">
        <Heading level={1} className="text-2xl font-bold">
          Watch
        </Heading>
        <Link href="/">
          <Button variant="outline" size="sm">
            Home
          </Button>
        </Link>
      </View>
      <View
        ref={frameRef}
        className="flex-1 items-center justify-center rounded-lg border border-border"
      >
        {!isDesktop && (
          <Paragraph className="max-w-md text-center text-muted-foreground">
            The embedded Crunchyroll player is available in the desktop and mobile apps. Browsers
            block third-party embedding of Crunchyroll, so this page is a placeholder on the plain
            web.
          </Paragraph>
        )}
      </View>
    </Main>
  );
}
