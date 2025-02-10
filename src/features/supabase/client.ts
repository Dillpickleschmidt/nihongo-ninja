// client.ts
import {
  createBrowserClient,
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr"
import { getRequestEvent } from "solid-js/web"

export function createFrontendClient() {
  return createBrowserClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
  )
}

export function createBackendClient() {
  "use server"
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
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
    // auth: {
    //   autoRefreshToken: false,
    // },
  })
}
