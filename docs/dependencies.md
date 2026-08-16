# Dependencies

Read this before you add, upgrade, or pin any dependency. Several pins are
deliberate — "upgrade to latest" has been tried and reverted; the blockers are
recorded here so they are not rediscovered.

## Adding a package (nub)

- Git dependencies must use the `git+https://github.com/user/repo.git#ref`
  form (see the electron dep). The bare `https://...#ref` form is fetched as a
  tarball and dies with "invalid gzip header".
- `nub add` refuses packages under 1000 weekly downloads (several of our pins
  qualify: nativewind previews, `vite-plugin-react-native-web`). Pass
  `--allow-low-downloads` when you've verified the package deliberately.
- Build scripts are deny-by-default; packages that need them go in the root
  `allowBuilds` field (currently `@tailwindcss/oxide`, `esbuild`).

## Version pins that are deliberate — do not "upgrade to latest"

- `typescript` is `~6.0.3`, not the `latest` (7.0.x). TS 7 is the native
  compiler and does not expose the JS API that `@expo/cli` uses to read
  tsconfig, so TS 7 breaks the native Metro bundle
  (`Cannot read properties of undefined (reading 'getCurrentDirectory')`).
  Expo has no TS 7 support — even SDK 57 expects `typescript ~6.0.3`. TS 6 is
  the API-compatible line and works everywhere. Recheck TS 7 only after Expo
  ships support.
- `react`, `react-dom` (`19.1.4`), `react-native` (`~0.81`), and every `expo*` /
  `react-native-*` package are pinned to **Expo SDK 54**. Upgrading to SDK 57
  was tried (RN 0.86, React 19.2, 17 native modules) — it installs and Metro
  bundles, but typecheck breaks with 11 errors: NativeWind's `className` type
  augmentation (`react-native-css/types`) does not match RN 0.86 / @types/react
  19.2, and there is no newer NativeWind v5 or react-native-css to fix it.
  Blocked until NativeWind v5 ships past `preview.4`. Also needs on-device
  verification (new architecture). Note: `expo install` shells out to `npm` and
  fails on `catalog:` specs, so it can only be used to read target versions, not
  apply them.
- `vite` is held at 7. Vite 8's React plugin (`@vitejs/plugin-react` 6) transforms
  JSX with oxc and drops the `babel` option, but NativeWind v5 preview.4's only
  web integration is a babel preset (SSR crashes "object is not iterable" without
  it). The clean fix is `jsxImportSource: "nativewind"` (oxc supports it), but
  preview.4 does not ship the `jsx-runtime` export it needs. The only workaround
  today is a standalone babel pass (extra @babel deps + a custom double-transform
  plugin + working around the preset's injected worklets plugin) — too fragile.
  Unblock: a NativeWind release with the `jsx-runtime` export. Also
  `vite-plugin-react-native-web` is not Vite 8 / Rolldown ready (non-absolute
  alias); on Vite 8 replace it with a manual absolute `react-native` alias.
- `lightningcss` is pinned to `1.30.1` in root `overrides`. react-native-css
  3.0.7 (NativeWind preview.4) calls lightningcss with a custom `visitor`, and
  1.33.0 changed the visitor serialization — Metro bundling fails with
  "failed to deserialize: expected an object-like struct named Specifier".
  1.30.1 also satisfies `@expo/metro-config`'s `^1.30.1`. Recheck this pin when
  bumping Expo or NativeWind.
- The **TanStack family must move together.** `@tanstack/react-start` pins the
  exact `@tanstack/react-router` and `@tanstack/start-plugin-core` it needs, so
  let react-start drive them — update the family as a set (`nub update` the
  @tanstack/* packages together), never bump `react-router` alone. A mixed set
  (e.g. router one patch behind the start-plugin-core that expects it) makes
  `getMatchedRoutes` return a non-iterable and 500s every SSR route. Do NOT
  pin a patch in `overrides` to "fix" this — nub's 24h release-cooling window
  intentionally holds back <1-day-old versions, and an override fights it.
- `nativewind` is **pinned to `5.0.0-preview.4`** (`latest` on npm is still
  v4). Do not "upgrade" it to latest; bump the preview pin deliberately, in
  every package.json that lists it. Watch NativeWind issue **#1783** (crash
  with React Navigation v8 via the Metro resolver) before upgrading
  Expo/React Navigation.
- `nitro` is the alpha TanStack Start needs. `electron` is a castLabs `+wvcus`
  git tag.
