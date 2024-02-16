export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Note = {
  answer: string
  cid: number | null
  extend: Json | null
  nid: number
  question: string
  source: string
  sourceid: string | null
  user_id: string
}
