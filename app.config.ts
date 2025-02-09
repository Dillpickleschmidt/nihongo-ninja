import { defineConfig } from "@solidjs/start/config"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  server: {
    preset: "aws-amplify",
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    define: {
      // Client-side variables
      "process.env.VITE_POSTHOG_KEY": JSON.stringify(
        process.env.VITE_POSTHOG_KEY,
      ),
      "process.env.VITE_POSTHOG_HOST": JSON.stringify(
        process.env.VITE_POSTHOG_HOST,
      ),
      "process.env.VITE_SUPABASE_URL": JSON.stringify(
        process.env.VITE_SUPABASE_URL,
      ),
      "process.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.VITE_SUPABASE_ANON_KEY,
      ),
      "process.env.VITE_GOOGLE_CLIENT_ID": JSON.stringify(
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
