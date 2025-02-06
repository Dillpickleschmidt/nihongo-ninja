// lib/immersionKit.ts
import { ImmersionKitResponse } from "../immersion-kit"

const DELAY = 50 // 1 second between requests
const MAX_RETRIES = 20

export async function getAnimeExamples(word: string, attempt = 1) {
  try {
    // Ensure minimum time between requests
    await new Promise((resolve) => setTimeout(resolve, DELAY))

    const response = await fetch(
      `https://api.immersionkit.com/look_up_dictionary?keyword=${word}&category=anime&sort=shortness`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: ImmersionKitResponse = await response.json()
    const examples = data?.data?.[0]?.examples || []

    // If we got no examples but have retries left, try again
    if (examples.length === 0 && attempt < MAX_RETRIES) {
      console.log(`Retrying ${word} - attempt ${attempt + 1}`)
      return getAnimeExamples(word, attempt + 1)
    }

    if (examples.length > 0) {
      console.log("word: ", examples[0].image_url)
    }

    return examples
  } catch (error) {
    if (attempt < MAX_RETRIES) {
      console.log(`Error on attempt ${attempt}, retrying...`)
      return getAnimeExamples(word, attempt + 1)
    }
    console.error("Error fetching examples for word:", word, error)
    return []
  }
}
