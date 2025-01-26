// YouTubeAPI.ts
declare global {
  var onYouTubeIframeAPIReady: () => void
}

export function loadYouTubeApi(): Promise<void> {
  return new Promise((resolve) => {
    if (globalThis.YT) {
      resolve()
      return
    }

    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.head.appendChild(tag)

    globalThis.onYouTubeIframeAPIReady = () => {
      resolve()
    }
  })
}
