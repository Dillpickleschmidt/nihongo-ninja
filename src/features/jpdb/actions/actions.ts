// import { cache, action, redirect } from "@solidjs/router"
// import supabaseServer from "@/lib/supabase/server"

// async function myFetch(url: string, options: RequestInit): Promise<any> {
//   const response = await fetch(url, options)
//   if (!response.ok) {
//     const error = await response.text()
//     throw new Error(error)
//   }
//   return await response.json()
// }

// const getSupabaseUser = cache(async () => {
//   "use server"
//   const supabase = supabaseServer()
//   const { data, error } = await supabase.auth.getUser()
//   if (error || !data.user) {
//     throw new Error(error ? error.message : "User not found")
//   }
//   return data.user
// }, "supabase-user")

// export const addAPIKey = action(async (formData: FormData) => {
//   "use server"
//   try {
//     const user = await getSupabaseUser()
//     const apiKey = formData.get("apiKey")
//     const supabase = supabaseServer()
//     const { data, error } = await supabase
//       .from("profiles")
//       .update({ jpdb_api_key: `${apiKey}` })
//       .eq("id", user.id)
//       .select()

//     if (error) throw new Error(error.message)
//     return data
//   } catch (error) {
//     throw redirect("/auth")
//   }
// })

// export const getJpdbApiKey = cache(async () => {
//   "use server"
//   try {
//     const user = await getSupabaseUser()
//     const supabase = supabaseServer()
//     const { data, error } = await supabase
//       .from("profiles")
//       .select("jpdb_api_key")
//       .eq("id", user.id)
//       .single()

//     if (error) throw new Error(error.message)
//     return data.jpdb_api_key
//   } catch (error) {
//     throw new Error("User must be logged in to add API key.")
//   }
// }, "jpdb-api-key")

// export const getDeck = cache(async (deckName: string, apiKey?: string) => {
//   "use server"
//   if (!apiKey) {
//     apiKey = await getJpdbApiKey()
//   }

//   const url = "https://jpdb.io/api/v1/list-user-decks"
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: '{"fields":["name", "id"]}',
//   }

//   const data = await myFetch(url, options)
//   if (data.decks) {
//     for (const deckGroup of data.decks) {
//       if (deckGroup[0] === deckName) {
//         console.log("Existing decks: ", deckGroup)
//         return deckGroup
//       }
//     }
//   }
//   throw new Error("Deck not found")
// }, "jpdb-deck")

// async function createEmptyDeck(deckName: string, apiKey: string) {
//   const url = "https://jpdb.io/api/v1/deck/create-empty"
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: `{"name": "${deckName}","position":0}`,
//   }

//   const response = await myFetch(url, options)
//   return [deckName, response.id]
// }

// async function ensureDeckExists(deckName: string) {
//   try {
//     return await getDeck(deckName)
//   } catch (error) {
//     if (error instanceof Error && error.message === "Deck not found") {
//       console.log("Creating new deck")
//       const apiKey = await getJpdbApiKey()
//       return await createEmptyDeck(deckName, apiKey)
//     } else {
//       throw error
//     }
//   }
// }

// async function addVocabularyToDeck(
//   deckId: number,
//   vocab: number[][],
//   apiKey: string,
// ) {
//   const url = "https://jpdb.io/api/v1/deck/add-vocabulary"
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       id: deckId,
//       vocabulary: vocab,
//       replace_existing_occurences: false,
//       ignore_unknown: true,
//     }),
//   }

//   return await myFetch(url, options)
// }

// export const addVocabToDeck = action(
//   async (deckName: string, vocab: number[][]) => {
//     "use server"
//     const apiKey = await getJpdbApiKey()

//     // Ensure deck exists and get its ID
//     const deckData = await ensureDeckExists(deckName)
//     const deckId = deckData[1]

//     // Get existing vocab in deck
//     const vocabData = await getJpdbVocab(deckName)
//     const existingVocab = vocabData.vocabulary || []

//     // Filter vocab already in deck
//     const newVocab = vocab.filter((v: number[]) => {
//       return !existingVocab.some((existing: number[]) => v[0] === existing[0])
//     })

//     // Add the new vocabulary to the deck
//     await addVocabularyToDeck(deckId, newVocab, apiKey)

//     // Return the number of new vocab added and the number of vocab skipped
//     return {
//       newVocabLength: newVocab.length,
//       skippedVocabLength: vocab.length - newVocab.length,
//     }
//   },
// )

// export const getJpdbVocab = cache(async (deckName: string) => {
//   "use server"
//   const apiKey = await getJpdbApiKey()
//   const deckData = await getDeck(deckName, apiKey)

//   const deckId = deckData[1]
//   const url = "https://jpdb.io/api/v1/deck/list-vocabulary"
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: `{"id":${deckId},"fetch_occurences":false}`,
//   }

//   return await myFetch(url, options)
// }, "jpdb-vocab")
