// PostHogContext.tsx
import { createContext, useContext, type ParentProps } from "solid-js"
import type { PostHog } from "posthog-js"
import posthog from "posthog-js"
import { useLocation } from "@solidjs/router"
import { createEffect } from "solid-js"

const PostHogContext = createContext<PostHog>()

export const usePostHog = () => {
  const context = useContext(PostHogContext)
  if (!context) {
    throw new Error("usePostHog must be used within a PostHogProvider")
  }
  return context
}

// Track page views component
function PostHogPageView() {
  const location = useLocation()
  const posthog = usePostHog()

  createEffect(() => {
    if (location.pathname) {
      const url = window.origin + location.pathname
      posthog.capture("$pageview", {
        $current_url: url,
        $pathname: location.pathname,
      })
    }
  })

  return null
}

// Initialize PostHog once on the client side
if (typeof window !== "undefined") {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY!, {
    api_host: import.meta.env.VITE_POSTHOG_HOST!,
    capture_pageview: false, // Disable automatic pageview capture since we're doing it manually
    capture_pageleave: true, // Enable page leave tracking for bounce rate calculation
  })
}

export function PostHogProvider(props: ParentProps) {
  return (
    <PostHogContext.Provider value={posthog}>
      {props.children}
      <PostHogPageView />
    </PostHogContext.Provider>
  )
}
