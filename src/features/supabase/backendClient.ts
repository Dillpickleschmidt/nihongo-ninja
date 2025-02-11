// backendClient.tsx
"use server"

import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr"
import { getRequestEvent } from "solid-js/web"

export function createBackendClient() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  // Keep track of cookies we need to set
  let pendingCookies = new Set()

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return parseCookieHeader(
          getRequestEvent()?.request?.headers?.get("Cookie") ?? "",
        )
      },
      setAll(cookiesToSet) {
        const event = getRequestEvent()
        if (!event?.response?.headers) return

        // Only set each cookie once
        cookiesToSet.forEach(({ name, value, options }) => {
          if (!pendingCookies.has(name)) {
            pendingCookies.add(name)
            event.response.headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options),
            )
          }
        })
      },
    },
  })
}
