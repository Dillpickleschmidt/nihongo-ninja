import { addNote } from "@/lib/flashcards/note"
import { NodeData } from "@/types"
import { NextRequest, NextResponse } from "next/server"
import { readUserSession } from "@/lib/supabase/user-session/userSession"
import { getUserUid } from "@/lib/supabase/user-session/userSession"

interface Node {
  id: string
  data: NodeData
}

export async function POST(request: NextRequest) {
  const json: Partial<NodeData> = await request.json()
  if (!json.answer || !json.answer) {
    return NextResponse.json("question/answer invaild data", { status: 400 })
  }
  const { data } = await readUserSession()
  if (!data) {
    return NextResponse.json({ count: 0 }, { status: 403 })
  }
  const uid = await getUserUid()
  const ret = await addNote({
    ...json,
    uid: uid,
  })
  return NextResponse.json({ count: 1 }, { status: 200 })
}
