import type { APIEvent } from "@solidjs/start/server"

export async function GET({ params, request }: APIEvent) {
  try {
    const fileId = params.fileId
    const range = request.headers.get("range")
    const videoUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    // Get video metadata
    const head = await fetch(videoUrl, { method: "HEAD" })
    if (!head.ok) {
      return new Response("Failed to fetch video", { status: head.status })
    }

    const size = head.headers.get("content-length")
    if (!size) {
      return new Response("Could not determine video size", { status: 400 })
    }

    // Handle range request
    if (range) {
      const [start] = range.replace(/bytes=/, "").split("-")
      const end = Math.min(parseInt(start) + 1024 * 1024, parseInt(size) - 1) // Stream in 1MB chunks

      const response = await fetch(videoUrl, {
        headers: { Range: `bytes=${start}-${end}` },
      })

      if (!response.ok) {
        return new Response("Failed to fetch video chunk", {
          status: response.status,
        })
      }

      const headers = new Headers({
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": (end - parseInt(start) + 1).toString(),
        "Content-Type": "video/mp4",
      })

      return new Response(response.body, { status: 206, headers })
    }

    // Non-range request - return whole file
    const response = await fetch(videoUrl)
    return new Response(response.body, {
      headers: {
        "Content-Length": size,
        "Content-Type": "video/mp4",
      },
    })
  } catch (error) {
    return new Response(
      error instanceof Error ? error.message : "Server error",
      {
        status: 500,
      },
    )
  }
}
