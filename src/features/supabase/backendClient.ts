// backendClient.tsx
"use server"

import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr"
import { getRequestEvent } from "solid-js/web"

let clientInstance: ReturnType<typeof createServerClient> | null = null

export function createBackendClient() {
  if (clientInstance) return clientInstance

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  clientInstance = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return parseCookieHeader(
          getRequestEvent()?.request?.headers?.get("Cookie") ?? "",
        )
      },
      setAll(cookiesToSet) {
        const event = getRequestEvent()
        if (!event?.response?.headers) return

        cookiesToSet.forEach(({ name, value, options }) => {
          try {
            event.response.headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options),
            )
          } catch (e) {
            // Ignore errors from already-sent headers
          }
        })
      },
    },
  })

  return clientInstance
}
