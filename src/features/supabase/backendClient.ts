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

  console.log("[Supabase] Creating backend client", {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
  })

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("[Supabase] Missing environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        const event = getRequestEvent()
        const cookies = parseCookieHeader(
          event?.request?.headers?.get("Cookie") ?? "",
        )
        console.log("[Supabase] Getting cookies", {
          hasEvent: !!event,
          hasRequest: !!event?.request,
          hasHeaders: !!event?.request?.headers,
          cookieCount: cookies.length,
        })
        return cookies
      },
      setAll(cookiesToSet) {
        const event = getRequestEvent()
        console.log("[Supabase] Attempting to set cookies", {
          hasEvent: !!event,
          hasResponse: !!event?.response,
          hasHeaders: !!event?.response?.headers,
          cookieCount: cookiesToSet.length,
          url: event?.request?.url,
          existingHeaders: event?.response?.headers
            ? Array.from(event.response.headers.keys())
            : "none",
        })

        if (!event?.response?.headers) {
          console.warn("[Supabase] No response headers available")
          return
        }

        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            console.log("[Supabase] Setting cookie", { name })
            const serializedCookie = serializeCookieHeader(name, value, options)
            event.response.headers.append("Set-Cookie", serializedCookie)
          })
        } catch (error) {
          if (error instanceof Error) {
            console.error("[Supabase] Error setting cookies:", {
              error: error.message,
              code: (error as any).code,
              stack: error.stack,
            })
          } else {
            console.error("[Supabase] Unknown error setting cookies:", error)
          }
        }
      },
    },
  })
}
