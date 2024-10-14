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

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Nav />
            <Suspense>
              <ColorModeScript />
              <ColorModeProvider>
                <div class="relative font-inter text-lg">{props.children}</div>
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
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
