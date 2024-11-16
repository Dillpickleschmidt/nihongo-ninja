// about.tsx
import { usePostHog } from "@/features/posthog/PostHogContext"

export default function About() {
  const posthog = usePostHog()

  const handleClick = () => {
    posthog.capture("button_clicked", {
      page: "about",
      timestamp: new Date().toISOString(),
    })
  }

  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-700">
        About Page
      </h1>
      <button
        onClick={handleClick}
        class="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600"
      >
        Click me!
      </button>
    </main>
  )
}
