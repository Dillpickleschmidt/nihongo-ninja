"use server"

import { FSRSParameters, generatorParameters } from "ts-fsrs"
import { getNoteByCid } from "./notes"
import { createSupabaseServerClient } from "@/lib/supabase/serverClient"
import { Note, SupabaseParameters } from "@/lib/supabase"

async function getFSRSParamsFromNote(note: Note) {
  const supabase = createSupabaseServerClient()
  const { data: rawParams, error: paramsError } = await supabase
    .from("parameters")
    .select("*")
    .match({ user_id: note.user_id })
  if (paramsError) {
    throw new Error(
      "Error finding parameters by user_id: " + JSON.stringify(paramsError)
    )
  }
  return rawParams && (rawParams[0] as SupabaseParameters)
}

export async function getFSRSParamsByCid(cid: number) {
  const note = await getNoteByCid(cid)
  const rawParams = await getFSRSParamsFromNote(note)

  return processArrayParameters(rawParams)
}

export type ParametersType = {
  params: FSRSParameters
  user_id: string
  card_limit: number
}
async function processArrayParameters(
  rawParams: SupabaseParameters
): Promise<ParametersType> {
  if (!rawParams) {
    throw new Error("Parameters not found")
  }
  // Assuming 'w' is stored as a JSON string that needs to be parsed
  const fsrsParameters = generatorParameters({
    request_retention: rawParams.request_retention,
    maximum_interval: rawParams.maximum_interval,
    w: rawParams.w,
    enable_fuzz: rawParams.enable_fuzz,
  })

  return {
    params: fsrsParameters,
    user_id: rawParams.user_id,
    card_limit: rawParams.card_limit ?? 50,
  }
}
