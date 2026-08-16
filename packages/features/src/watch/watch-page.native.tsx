// Native embed page. This is the DRM test (handoff §5).
//
// Android (verified on device): set allowsProtectedMedia to true. It defaults
// to false; without it protected playback fails with "Unsupported keySystem".
// Crunchyroll also detects a mobile browser and shows a "Watch on the app"
// page. A desktop Chrome user agent alone stops that (Android has Widevine like
// desktop Chrome). The user agent is the whole fix — no client-hint or
// touch-point masking is needed.
//
// iOS (verified on device): set the user agent to macOS Safari, not desktop
// Chrome. iOS decrypts with FairPlay; a Chrome user agent can give a Widevine
// stream WKWebView cannot play. The UA alone is not enough: Crunchyroll reads
// the touch points to detect a tablet and shows a "Watch on the app" page, so
// maxTouchPoints/platform must also report a Mac (verified: UA-only fails).

import { Platform } from "react-native";
import type { WebViewProps } from "react-native-webview";
import { WebView } from "react-native-webview";

const CRUNCHYROLL_URL = "https://www.crunchyroll.com/";

const DESKTOP_CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

const MACOS_SAFARI_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15";

const MASK_TOUCH_POINTS = `
  try {
    Object.defineProperty(navigator, "maxTouchPoints", { get: () => 1 });
    Object.defineProperty(navigator, "platform", { get: () => "MacIntel" });
  } catch (e) {}
  true;
`;

const platformDisguise: WebViewProps =
  Platform.OS === "ios"
    ? {
        userAgent: MACOS_SAFARI_UA,
        injectedJavaScriptBeforeContentLoaded: MASK_TOUCH_POINTS,
      }
    : {
        userAgent: DESKTOP_CHROME_UA,
      };

export default function WatchPage() {
  return (
    <WebView
      source={{ uri: CRUNCHYROLL_URL }}
      className="flex-1"
      allowsProtectedMedia
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled
      domStorageEnabled
      {...platformDisguise}
    />
  );
}
