import { defineConfig } from "@solidjs/start/config"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Add build-time environment check
// console.log("Build-time environment variables:", {
//   hasSupabaseUrl: !!process.env.SUPABASE_URL,
//   hasSupabaseKey: !!process.env.SUPABASE_ANON_KEY,
//   hasViteSupabaseUrl: !!process.env.VITE_SUPABASE_URL,
//   hasViteSupabaseKey: !!process.env.VITE_SUPABASE_ANON_KEY,
//   envKeys: Object.keys(process.env),
// })

export default defineConfig({
  server: {
    preset: "aws-amplify",
    compatibilityDate: "2025-02-10",
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    define: {
      // Client-side variables - import.meta.env pattern
      "import.meta.env.VITE_POSTHOG_KEY": JSON.stringify(
        process.env.VITE_POSTHOG_KEY,
      ),
      "import.meta.env.VITE_POSTHOG_HOST": JSON.stringify(
        process.env.VITE_POSTHOG_HOST,
      ),
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
        process.env.VITE_SUPABASE_URL,
      ),
      "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.VITE_SUPABASE_ANON_KEY,
      ),
      "import.meta.env.VITE_GOOGLE_CLIENT_ID": JSON.stringify(
        process.env.VITE_GOOGLE_CLIENT_ID,
      ),

      // Server-side variables
      "process.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL),
      "process.env.SUPABASE_ANON_KEY": JSON.stringify(
        process.env.SUPABASE_ANON_KEY,
      ),
    },
  },
})
