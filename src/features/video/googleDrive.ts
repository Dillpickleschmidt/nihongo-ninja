"use server"

import { arrayBuffer } from "node:stream/consumers"

export async function getDriveVideo(
  fileId: string,
  rangeHeader: string | null,
) {
  // https://www.googleapis.com/drive/v3/files/${id}?key=${API_KEY}&alt=media
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`

  try {
    const response = await fetch(url, { redirect: "follow" })
    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.status}`)
    }

    const contentType = response.headers.get("content-type")
    const contentLength = response.headers.get("content-length")

    return {
      response,
      contentType,
      contentLength,
      url: response.url,
    }
  } catch (error) {
    console.error("Error fetching video URL:", error)
    throw error
  }
}

export async function getDriveThumbnail(videoId: string): Promise<string> {
  const response = await fetch(
    `https://drive.google.com/thumbnail?id=${videoId}`,
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  if (!response.body) {
    throw new Error("No response body available from Google Drive API")
  }
  const buffer = await arrayBuffer(response.body)
  const base64 = Buffer.from(buffer).toString("base64")
  return `data:${response.headers.get("content-type") || "image/jpeg"};base64,${base64}`
}
