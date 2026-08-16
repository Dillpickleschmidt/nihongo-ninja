# nihongo-ninja

Japanese learning app — lesson content plus interactive tools — targeting
**web, mobile (iOS/Android), and desktop from one codebase**. This repo is a
ground-up rewrite of the SolidJS app at `Dillpickleschmidt/nihongo-ninja-tanstack`
(port source: branch `feat/supabase-to-convex`).

Three hard constraints drive the architecture:

1. **SEO** — lesson pages are server-rendered with a real internal link graph.
2. **Native mobile performance** — real React Native, no webview-wrapped app.
3. **One codebase** — per-platform code only where platforms genuinely differ
   (routing shells, the embedded browser page).

## About

It uses [nub](https://nubjs.com) — install, script running, and workspace
orchestration all come from the one tool (`nub run -r` is topological, so there
is no separate task runner). It contains:

```text
apps
  ├─ tanstack-start
  │   ├─ TanStack Start (React 19, Vite, SSR with per-route control)
  │   ├─ React Native Web + NativeWind v5 (shared pages render here)
  │   └─ Convex client
  ├─ expo
  │   ├─ Expo SDK 54 / React Native 0.81
  │   ├─ Expo Router — route files GENERATED from the web route tree
  │   ├─ Tailwind via NativeWind v5 (preview, pinned)
  │   └─ react-native-webview Crunchyroll embed (the DRM spike)
  └─ electron
      ├─ castLabs Electron (Widevine CDM — the only reason Electron exists here)
      ├─ Loads the client-rendered web bundle (apps/tanstack-start/dist-electron)
      └─ WebContentsView Crunchyroll embed
packages
  ├─ convex
  │   └─ Convex schema + functions (api/ validates, model/ holds the logic;
  │      Better Auth; shared by all apps)
  ├─ data
  │   └─ Static curriculum content (textbooks, chapters, modules) + utils.
  │      Imported by the backend and by features.
  ├─ features
  │   └─ Shared pages by domain (homepage/, lessons/, watch/): all UI +
  │      data via Convex hooks. Rendered by both routers.
  ├─ router
  │   └─ Link / useRouter / useParams bridge + generated Href type
  │      (web: TanStack Router, mobile: Expo Router — split via .native.tsx)
  └─ ui
      └─ Shared RN primitives (Button, Text), semantic components (Heading,
         Main, …), theming (light/dark/system), cn() + cva variants
tooling
  ├─ typescript
  │   └─ shared tsconfig presets
  └─ tailwind
      └─ theme.css — the shared app theme (light/dark color tokens)
.oxlintrc.json   — oxlint config (lint, type-aware)
.oxfmtrc.json    — oxfmt config (format, import + Tailwind sorting)
scripts
  ├─ generate-routes.ts — web route tree -> Expo Router files
  └─ export-electron.ts — SSR build -> static bundle for Electron
```

Lint and format are **oxc** (oxlint + oxfmt), not ESLint/Prettier — see
AGENTS.md for the config layout and gotchas.

## Quick start

```bash
nub install
cp .env.example .env

# Provision Convex (first run creates a local anonymous deployment;
# `npx convex login` later to link a real project) and generate types:
nub run convex:dev         # leave running, or ctrl-C after "functions ready"
# put the printed deployment URL into .env as VITE_CONVEX_URL, and into
# apps/expo/.env as EXPO_PUBLIC_CONVEX_URL (Expo reads env from the app
# directory, not the repo root). Both are REQUIRED — the apps fail fast on
# missing config rather than falling back.

nub run dev:tanstack-start            # web on http://localhost:3000
```

### Mobile

```bash
nub run dev:expo              # Expo dev server (Expo Go or dev client)
nub run android / nub run ios # compiled builds. Android DRM testing needs one
                              # (Expo Go cannot set allowsProtectedMedia);
                              # iOS DRM playback works in Expo Go (verified).
```

### Desktop

```bash
nub run -F @nn/electron setup       # downloads the castLabs Chromium binary.
                                   # castLabs removed Electron's postinstall; this
                                   # explicit step is ALWAYS required after install.
nub run -F @nn/tanstack-start build:electron   # client-rendered bundle -> apps/tanstack-start/dist-electron
nub run -F @nn/electron start       # or `dev` to point at the vite dev server
```

First launch on Linux installs the Widevine CDM and then **prompts for a
restart** — that's required by CDM sandboxing, not a bug.

## Routing: one definition, mobile generated

Web and mobile use different routers on purpose (TanStack Router explicitly
does not support React Native). The web route tree is the single source of
truth:

1. Add a page in `packages/features/<domain>/` (e.g. `lessons/index.tsx`).
2. Add a web route file in `apps/tanstack-start/src/routes/` that imports it from
   `@nn/features/<domain>`.
3. Run the web app once (generates `routeTree.gen.ts`), then
   `nub run generate:routes`.

The generator reads each web route's `@nn/features` import and mirrors it into a
3-line Expo Router stub (`lessons/[slug].tsx`), and emits the typed
`Href` union for `@nn/router` (so a bad `href` is a compile error). It refuses
to run if it parses zero routes and fails if a web route has no `@nn/features`
import. Only `_layout.tsx` files are hand-written on mobile.

Pages import navigation **only** from `@nn/router` and data **only** via
Convex hooks — that is what keeps them platform-agnostic.

## Verified working (updated 2026-08-15)

- `nub run build` — SSR build; server-rendered HTML contains real content and
  real `<a href>` links (the SEO constraint, checked by curling the server).
- `nub run typecheck`, `nub run lint` — green across all packages.
- `expo export --platform android` — Metro bundles the mobile app, including
  the platform-split pages and NativeWind.
- castLabs Electron launches, installs Widevine CDM 4.10.3050.0, and serves the
  desktop bundle over `app://`.
- Convex: local anonymous deployment, `health.ping` query wired through the
  shared home page on all platforms.
- Crunchyroll DRM playback on the `/watch` page — verified on real devices,
  Android and iOS (setup details: the header comment in
  `packages/features/src/watch/watch-page.native.tsx`).

See `AGENTS.md` for the full trap list (DRM, NativeWind, Metro resolution).
