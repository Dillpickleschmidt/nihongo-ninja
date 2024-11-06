import type { APIEvent } from "@solidjs/start/server"

// In-memory cache for videos
const videoCache = new Map<string, Uint8Array>()

async function getVideo(fileId: string): Promise<Uint8Array> {
  // Check if video is already in cache
  const cachedVideo = videoCache.get(fileId)
  if (cachedVideo) {
    return cachedVideo
  }

  // If not in cache, download from Google Drive
  const videoUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
  console.log("Downloading video from Google Drive...")

  const response = await fetch(videoUrl)
  if (!response.ok) {
    throw new Error(`Failed to fetch video: ${response.statusText}`)
  }

  // Convert stream to Uint8Array
  const buffer = await response.arrayBuffer()
  const video = new Uint8Array(buffer)

  // Store in cache
  videoCache.set(fileId, video)
  console.log("Video cached successfully")

  return video
}

export async function GET({ params, request }: APIEvent) {
  try {
    const fileId = params.fileId
    const range = request.headers.get("range")

    // Get or download the video
    const video = await getVideo(fileId)
    const totalSize = video.length

    // Handle range request
    if (range) {
      const [start] = range.replace(/bytes=/, "").split("-")
      const end = Math.min(parseInt(start) + 1024 * 1024, totalSize - 1) // 1MB chunks

      const chunk = video.slice(parseInt(start), end + 1)

      const headers = new Headers({
        "Content-Range": `bytes ${start}-${end}/${totalSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunk.length.toString(),
        "Content-Type": "video/mp4",
      })

      return new Response(chunk, { status: 206, headers })
    }

    // Non-range request - return whole file
    return new Response(video, {
      headers: {
        "Content-Length": totalSize.toString(),
        "Content-Type": "video/mp4",
      },
    })
  } catch (error) {
    console.error("Streaming error:", error)
    return new Response(
      error instanceof Error ? error.message : "Server error",
      { status: 500 },
    )
  }
}
