"use server"
import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr"
import { getRequestEvent } from "solid-js/web"

export function createClient() {
  console.log
  return createServerClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(
            getRequestEvent()?.request.headers.get("Cookie") ?? "",
          )
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            getRequestEvent()?.response.headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options),
            ),
          )
        },
      },
    },
  )
}
