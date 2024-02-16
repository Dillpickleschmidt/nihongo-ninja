import { createSupabaseBrowserClient } from "../browserClient"

export function readLocalUserSession() {
  const supabase = createSupabaseBrowserClient()
  return supabase.auth.getSession()
}
