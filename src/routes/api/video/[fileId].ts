import type { APIEvent } from "@solidjs/start/server"

// Cache to store HEAD request results
const headCache = new Map<string, { fileSize: string; contentType: string }>()

export async function GET({ params, request }: APIEvent) {
  const fileId = params.fileId
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`
  const startTime = Date.now()
  console.log(`Starting to fetch video from Google Drive: ${startTime}`)

  let fileSize: string
  let contentType: string

  // Check if we have cached HEAD request results
  if (!headCache.has(fileId)) {
    // If not cached, perform HEAD request
    const headResponse = await fetch(url, { method: "HEAD" })

    if (!headResponse.ok) {
      console.error(`HEAD request failed: ${headResponse.status}`)
      return new Response(
        `Failed to fetch video metadata: ${headResponse.status}`,
        {
          status: headResponse.status,
        },
      )
    }
    console.log(`HEAD request completed: ${headResponse.status}`)

    fileSize = headResponse.headers.get("content-length") || "0"
    contentType = headResponse.headers.get("content-type") || "video/mp4"

    // Cache the results
    headCache.set(fileId, { fileSize, contentType })

    console.log(`HEAD request completed. File size: ${fileSize} bytes`)
  } else {
    // Use cached results
    const cachedData = headCache.get(fileId)!
    fileSize = cachedData.fileSize
    contentType = cachedData.contentType
    console.log(`Using cached HEAD data. File size: ${fileSize} bytes`)
  }

  // Handle range request
  const range = request.headers.get("range")
  let start = 0
  let end = parseInt(fileSize) - 1

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    start = parseInt(parts[0], 10)
    end = parts[1] ? parseInt(parts[1], 10) : parseInt(fileSize) - 1
  }

  const contentLength = end - start + 1

  // Fetch the requested range
  const mainResponse = await fetch(url, {
    headers: range ? { Range: `bytes=${start}-${end}` } : {},
  })

  if (!mainResponse.ok || !mainResponse.body) {
    console.error(`Main request failed: ${mainResponse.status}`)
    return new Response(
      `Failed to fetch video content: ${mainResponse.status}`,
      {
        status: mainResponse.status,
      },
    )
  }

  const responseBody = mainResponse.body

  // Create a new ReadableStream
  const stream = new ReadableStream({
    async start(controller) {
      const reader = responseBody.getReader()
      let bytesRead = 0

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          bytesRead += value.length
          controller.enqueue(value)

          // Log progress every 1MB
          // if (bytesRead % (1 * 1024 * 1024) < value.length) {
          //   console.log(`Streamed ${bytesRead / 1024 / 1024}MB`)
          // }
        }
      } catch (error) {
        console.error("Error while reading the stream:", error)
        controller.error(error)
      } finally {
        console.log(`Finished streaming ${bytesRead} bytes`)
        controller.close()
      }
    },
  })

  // Create headers object
  const headers: HeadersInit = {
    "Content-Type": contentType,
    "Content-Length": contentLength.toString(),
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-cache",
  }

  // Add Content-Range header only if range is specified
  if (range) {
    headers["Content-Range"] = `bytes ${start}-${end}/${fileSize}`
  }

  // Return a streaming response
  return new Response(stream, {
    status: range ? 206 : 200,
    headers: headers,
  })
}
