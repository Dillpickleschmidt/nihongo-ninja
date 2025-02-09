// client.ts
import {
  createBrowserClient,
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr"
import { getRequestEvent } from "solid-js/web"

export function createFrontendClient() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  console.log("Frontend Client Environment Variables:", {
    hasSupabaseUrl: !!supabaseUrl,
    hasSupabaseKey: !!supabaseKey,
    actualUrl: supabaseUrl,
    allViteEnv: import.meta.env, // Log all Vite env variables
  })

  return createBrowserClient(supabaseUrl, supabaseKey)
}

export function createBackendClient() {
  "use server"
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

  console.log("Backend Client Environment Variables:", {
    hasSupabaseUrl: !!supabaseUrl,
    hasSupabaseKey: !!supabaseAnonKey,
    actualUrl: supabaseUrl, // Be careful with logging sensitive keys in production
    envKeys: Object.keys(process.env), // List all available env variables
  })

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
    auth: {
      autoRefreshToken: false,
    },
  })
}
