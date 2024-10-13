import { defineConfig } from "@solidjs/start/config"
import { dirname, resolve } from "node:path"
import { fileURLToPath, URL } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        // To fix loading ALL icons in dev mode w/Vite
        "lucide-solid/icons": fileURLToPath(
          new URL(
            "./node_modules/lucide-solid/dist/source/icons",
            import.meta.url,
          ),
        ),
      },
    },
  },
})
