import { createRequire } from "node:module";

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import reactNativeWeb from "vite-plugin-react-native-web";
import tsConfigPaths from "vite-tsconfig-paths";

// Held on Vite 7: Vite 8's React plugin (@vitejs/plugin-react 6) transforms JSX
// with oxc and drops the babel option, but NativeWind v5's web integration is a
// babel preset. No babel pass means no NativeWind transform. Revisit Vite 8
// once NativeWind has an oxc/rolldown path (or plugin-react restores babel).
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    // react-native-web deep-imports inline-style-prefixer's CJS build (lib/),
    // which deep-imports css-in-js-utils the same way. The dev SSR module
    // runner cannot run CJS, so point both at their own ES builds. Pairs with
    // the noExternal entries below.
    alias: [
      { find: "inline-style-prefixer/lib", replacement: "inline-style-prefixer/es" },
      { find: "css-in-js-utils/lib", replacement: "css-in-js-utils/es" },
    ],
  },
  ssr: {
    // Bundle these packages into the server build. If you do not, Node loads
    // react-native at run time and fails, because it has Flow types.
    // inline-style-prefixer and css-in-js-utils must be bundled too (see the
    // alias above): their ES builds live in CommonJS packages, so Node cannot
    // load them directly.
    noExternal: [
      "react-native",
      "react-native-web",
      "react-native-css",
      "nativewind",
      "inline-style-prefixer",
      "css-in-js-utils",
    ],
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    nitro(),
    // Do not use TanStack Start SPA mode for the desktop bundle. Its
    // prerenderer is not reliable on nitro 3.0.1-alpha.1. Use
    // scripts/export-electron.mjs instead.
    tanstackStart(),
    // NativeWind v5 uses its Babel preset. The preset changes react-native
    // imports to react-native-css components that accept className.
    viteReact({
      babel: {
        // Use require.resolve to load the CommonJS preset. The ESM preset
        // calls require() and fails under Babel.
        presets: [createRequire(import.meta.url).resolve("nativewind/babel")],
      },
    }),
    // Removes Flow types and changes react-native to react-native-web.
    reactNativeWeb(),
    tailwindcss(),
  ],
});
