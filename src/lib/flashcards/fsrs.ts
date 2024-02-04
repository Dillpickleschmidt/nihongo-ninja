import { FSRSParameters, default_w, generatorParameters } from "ts-fsrs"
// import prisma from "./prisma"
// import { Parameters } from "@prisma/client"
import { FSRSPutParams } from "@/types"
import getSupabase from "../supabase/server"

export type ParametersType = {
  params: FSRSParameters
  uid: string
  card_limit: number
}

export async function getFSRSParamsByUid(uid: string): Promise<ParametersType> {
  const supabase = await getSupabase()
  let { data: rawParams, error } = await supabase
    .from("parameters")
    .select("*")
    .eq("uid", uid)
    .single()

  if (error || !rawParams) throw new Error("Parameters not found for UID")

  return processArrayParameters(rawParams)
}

export async function getFSRSParamsByCid(cid: number): Promise<ParametersType> {
  const supabase = await getSupabase()
  let { data: card, error } = await supabase
    .from("card")
    .select("nid")
    .eq("cid", cid)
    .single()

  if (error || !card) throw new Error("Card not found")

  // Assuming that the 'nid' can be used to look up 'uid' indirectly through 'Note'
  return getFSRSParamsByNid(card.nid)
}

export async function getFSRSParamsByNid(nid: number): Promise<ParametersType> {
  const supabase = await getSupabase()
  let { data: note, error } = await supabase
    .from("note")
    .select("uid")
    .eq("nid", nid)
    .single()

  if (error || !note) throw new Error("Note not found")

  return getFSRSParamsByUid(note.uid)
}

async function processArrayParameters(rawParams: any): Promise<ParametersType> {
  if (!rawParams) {
    throw new Error("Parameters not found")
  }
  // Assuming 'w' is stored as a JSON string that needs to be parsed
  const fsrsParameters = generatorParameters({
    request_retention: rawParams.request_retention,
    maximum_interval: rawParams.maximum_interval,
    w: JSON.parse(rawParams.w),
    enable_fuzz: rawParams.enable_fuzz,
  })

  return {
    params: fsrsParameters,
    uid: rawParams.uid,
    card_limit: rawParams.card_limit ?? 50,
  }
}

export async function updateParameters(params: FSRSPutParams) {
  const supabase = await getSupabase()
  if (params.w.length !== default_w.length) {
    params.w = default_w
  }

  let { data, error } = await supabase
    .from("parameters")
    .update({
      request_retention: params.request_retention,
      maximum_interval: params.maximum_interval,
      w: JSON.stringify(params.w),
      enable_fuzz: params.enable_fuzz,
      card_limit: params.card_limit,
    })
    .match({ uid: params.uid })

  if (error) throw error

  return data
}
