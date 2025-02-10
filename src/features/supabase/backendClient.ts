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
    console.error("Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return parseCookieHeader(
          getRequestEvent()?.request?.headers?.get("Cookie") ?? "",
        )
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            const event = getRequestEvent()
            if (event?.response?.headers) {
              const serializedCookie = serializeCookieHeader(
                name,
                value,
                options,
              )
              event.response.headers.append("Set-Cookie", serializedCookie)
            }
          })
        } catch (error) {
          console.error("Error setting cookies:", error)
          throw error
        }
      },
    },
  })
}
