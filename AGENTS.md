# AGENTS.md

Instructions for AI agents (and humans) working in this repo. Read README.md
first for the structure overview.

This file is a failure log — each trap below exists because an agent hit it.
When you hit a new trap or a gap in these rules, record it in the right place:
dependency rules in [docs/dependencies.md](./docs/dependencies.md),
every-session rules here. Keep this file lean.

## Commands

```bash
nub run dev:tanstack-start / dev:expo / dev:electron  # per-platform dev
nub run build                               # topological build (convex codegen + web SSR)
nub run typecheck / lint / format           # run before considering work done
nub run generate:routes                     # regenerate native routes (see below)
nub run -F @nn/tanstack-start build:electron            # desktop bundle
nub run -F @nn/electron setup                # fetch castLabs Chromium (once per install)
```

The toolchain is **nub** for everything: installing (`nub install`, lockfile is
`nub.lock`), running scripts, and workspace orchestration. `nub run -r` is
topological, so there is no separate task runner (no turbo). Workspace config
lives in neutral `package.json` fields only: `workspaces`, `overrides`,
`allowBuilds` — no tool-branded config files.

**Shared dependency versions live in the root `package.json` catalog**
(`workspaces.catalog`, `workspaces.catalogs.react19`). Packages reference them
with `catalog:` / `catalog:react19`. Add a package to the catalog when a second
package needs it. Keep peerDependencies inline.

**Before you add, upgrade, or pin any dependency, read
[docs/dependencies.md](./docs/dependencies.md).** Several pins are deliberate
(typescript, the Expo SDK 54 set, vite, lightningcss, nativewind, the TanStack
family) — do not "upgrade to latest" without reading it.

## Architecture rules

- **Pages live in `packages/features`**, organized by domain
  (`features/homepage`, `features/lessons`, `features/watch`) — each domain's
  `index.tsx` is the page both routers mount. They contain all UI and fetch
  data with `useQuery(convexQuery(...))` (see the Convex section). Route files in
  apps are thin: web routes declare path/loader/ssr options and import the
  page from `@nn/features/<domain>`; native routes are **generated — never
  edit them**.
- **Navigation only via `@nn/router`** (`Link`, `useRouter`, `useParams`).
  Never import `@tanstack/react-router` or `expo-router` inside shared code.
  `href` is typed: `Href` is a union generated from the web route tree
  (`packages/router/src/routes.gen.ts`, emitted by the route generator), so
  a bad path is a compile error. `$param` segments become `${string}`.
- **Use the semantic components from `@nn/ui` for page structure** (`Heading`,
  `Paragraph`, `Main`, `Nav`, `Header`, `Footer`, `Article`, `Section`,
  `Aside`). On web, react-native-web maps their `role` to real HTML tags
  (`<h1>`, `<main>`, `<p>`, …) for SEO and accessibility. A bare `<View>` or
  `<Text>` renders as `<div>`. Do not use a bare `<Text>` for a heading.
- **Platform splits use relative imports.** Metro resolves package-`exports`
  subpaths to an exact file with NO `.native.tsx` substitution. Export a
  neutral file that re-exports from a relative path; put `foo.tsx` (web) and
  `foo.native.tsx` (native) behind it. `packages/features/watch/index.tsx`
  is the canonical example.
- **Per-route rendering control is the point of TanStack Start.** Static lesson
  pages SSR by default; personalized/tool routes can set `ssr: false` (see
  `apps/tanstack-start/src/routes/watch.tsx`). Do not globalize either mode.
- **Adding a route**: add the page under `packages/features/<domain>/`, add a
  web route file that imports it from `@nn/features/<domain>`, run the web app
  once (regenerates `routeTree.gen.ts`), then `nub run generate:routes`. The
  generator fails loudly on zero parsed routes or a web route with no
  `@nn/features` import — fix the cause, don't weaken the check. Hand-write only
  `_layout.tsx` files on native.
- The desktop app is castLabs Electron **only because of Widevine**. Keep it a
  thin shell: main process (`apps/electron/src/main.cjs`), preload, no React.

## Traps (all empirically hit — do not rediscover)

### Lint and format (oxc, not ESLint/Prettier)

- **oxlint** is the linter (`nub run lint` → `oxlint --type-aware`). Config is
  the root `.oxlintrc.json`. It runs once over the repo (not per package) and
  respects `.gitignore`. The `no-restricted-imports` guard (bare react-native
  Text) lives here, with an `overrides` entry turning it off for
  `packages/ui/src/**`.
- **Type-aware rules need `oxlint-tsgolint`** (a root devDep) plus the
  `--type-aware` flag. tsgolint uses the TS7 engine, so it rejects TS options
  removed in TS7 — that is why `apps/tanstack-start/tsconfig.json` has no `baseUrl` (paths
  resolve relative to the tsconfig without it, in both tsc 5.x and tsgolint).
- **oxfmt** is the formatter (`nub run format` / `format:fix`). Config is the
  root `.oxfmtrc.json`; it sorts imports and Tailwind classes (functions `cn`,
  `cva`) and respects `.gitignore`.
- **Always put a blank line between a file-header comment and the imports.**
  Without it, oxfmt's import sorter attaches the comment to the first import
  and drags it into the sorted imports.
- `tsc` does full type checking (`nub run typecheck`); oxlint does not replace it.

### NativeWind v5 / styling

- The web (Vite) wiring lives in `apps/tanstack-start/vite.config.ts`. Its
  comments hold the babel preset, `require.resolve`, and `ssr.noExternal`
  traps. Do not remove them.
- Types for `className` on RN components come from
  `/// <reference types="react-native-css/types" />` (nativewind-env.d.ts in
  each package), NOT `nativewind/types`.
- Known utility gaps on native: `text-start` (use `text-left`), spot-check
  `line-clamp`. Animations route through Reanimated and are low priority.

### Expo CLI

- Expo actively manages `expo-env.d.ts` and its tsconfig include entries — with
  typed routes off it DELETES them on every run. That's why `process.env`
  typing lives in `apps/expo/env.d.ts` (a name Expo doesn't own). Don't
  recreate `expo-env.d.ts` by hand.

### TanStack Start

- SPA mode (`spa.enabled`) is **not used** — its prerenderer races its own
  preview server on nitro 3 alpha (ECONNREFUSED/500, then hangs). The desktop
  bundle comes from `scripts/export-electron.ts`, which snapshots the built SSR
  server's `/` output. Revisit when nitro 3 stabilizes.
- `routeTree.gen.ts` is gitignored and produced by the vite plugin — run the
  web dev server or build before `nub run generate:routes` on a fresh clone.

### castLabs Electron / desktop

- After each dependency install, run `nub run -F @nn/electron setup` — nothing
  runs it automatically.
- Before you change `apps/electron/src/main.cjs`, read its comments. They hold
  the Widevine startup, Linux restart, WebContentsView overlay, and `app://`
  scheme traps. Do not remove them.

### DRM / Crunchyroll (`/watch` page)

- The header comment in `packages/features/src/watch/watch-page.native.tsx`
  holds the verified Android and iOS WebView setup (protected media, user
  agents, touch-point mask). Do not remove it.
- Expect software Widevine (L3); Crunchyroll accepts it. Netflix is permanently
  out of scope (approved-device list).

### Convex

- `packages/convex` is the only Convex surface. Codegen output
  (`convex/_generated`) is gitignored; `nub run -F @nn/convex build` regenerates
  it and needs a configured deployment (`CONVEX_AGENT_MODE=anonymous npx convex
dev --once` provisions a local one without an account).
- Convex data goes through TanStack Query with `@convex-dev/react-query`.
  Pages read data with `useQuery(convexQuery(api.x.y, args))`, not
  `convex/react`. This lets web route loaders prime the cache on the server, so
  the SSR HTML ships with data. Web wiring: `apps/tanstack-start/src/router.tsx` (client
  setup) and each route's `loader` (`context.queryClient.ensureQueryData(...)`).
  Native wiring: `apps/expo/src/utils/convex.ts` + the providers in
  `apps/expo/src/app/_layout.tsx`. Add a `loader` to every new web route that
  reads Convex data, or that data will not be in the server HTML.

## Agent skills

### Issue tracker

Issues live in GitHub Issues via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Out of scope for v0 (do not build unprompted)

Lesson content, learning tools, auth flows, and the subtitle overlay itself.
v0 exists to prove the architecture end-to-end on all three targets.
