import { createSignal, createEffect, onCleanup } from "solid-js"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = createSignal(false)

  createEffect(() => {
    // Check if window exists (client-side)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(query)
      setMatches(mediaQuery.matches)

      const handler = (event: MediaQueryListEvent) => setMatches(event.matches)
      mediaQuery.addEventListener("change", handler)
      onCleanup(() => mediaQuery.removeEventListener("change", handler))
    }
  })

  return matches
}

// Pre-defined hooks that match Tailwind's default breakpoints
export const useBreakpoints = () => {
  const sm = useMediaQuery("(min-width: 640px)")
  const md = useMediaQuery("(min-width: 768px)")
  const lg = useMediaQuery("(min-width: 1024px)")
  const xl = useMediaQuery("(min-width: 1280px)")
  const xl2 = useMediaQuery("(min-width: 1536px)")

  return {
    sm,
    md,
    lg,
    xl,
    "2xl": xl2,
  }
}
