import { ColorModeProvider, ColorModeScript } from "@kobalte/core"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import { Toaster } from "@/components/ui/sonner"
import Nav from "@/features/navbar/Nav"
import "./app.css"
import "@fontsource-variable/inter"
import "@fontsource-variable/noto-sans-jp"
import { MetaProvider } from "@solidjs/meta"
import { PostHogProvider } from "./features/posthog/PostHogContext"

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <PostHogProvider>
            <MetaProvider>
              <Suspense>
                <ColorModeScript />
                <ColorModeProvider>
                  <Nav />
                  <div class="relative font-inter text-lg">
                    {props.children}
                  </div>
                  <Toaster
                    theme="dark"
                    position="bottom-right"
                    expand={true}
                    richColors
                    // closeButton
                  />
                </ColorModeProvider>
              </Suspense>
            </MetaProvider>
          </PostHogProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
