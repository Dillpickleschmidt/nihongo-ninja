# 1. RN-first UI, with a web-presentation exception for overlays

Date: 2026-08-18

## Status

Accepted

## Context

The feature port ran web-first: pages were built with raw DOM elements and
Base UI primitives for visual parity with the source app, and native received
placeholder screens (~85 web-only feature files vs ~10 cross-platform ones by
the end of the vocab hub port). Every future feature would widen that gap, and
a later "mobile design pass" would mean a second implementation of everything —
permanent visual drift between platforms as the app evolves.

react-native-web means a single React Native implementation renders on both
platforms with identical NativeWind styling. What RN cannot provide is Base
UI's web overlay behavior: focus traps and restore, arrow-key/typeahead menu
navigation, anchored floating-ui positioning, outside-click/Escape dismissal.
Rebuilding those by hand is the highest-risk part of a from-scratch component
layer. Overlays are also the one place where pixel-identical cross-platform
rendering is wrong by design: touch platforms want bottom sheets and long-press
where desktop wants anchored popovers and right-click.

## Decision

- **Feature code is written once, in React Native primitives** (`View`,
  `Text`, `Pressable`, NativeWind classes) plus `@nn/ui` components. Feature
  files do not use DOM elements and do not import `@base-ui/react`.
- **Non-overlay components have a single RN implementation** in `@nn/ui` —
  Tabs, Collapsible, Slider, inputs, cards, buttons, layout. No platform
  variants, so cross-platform drift is impossible by construction.
- **The overlay family — Dialog, Menu, ContextMenu, Popover, Select — has one
  shared API in `@nn/ui` with two presentations**: Base UI on web (keeping its
  keyboard, focus, and positioning behavior), sheet/modal idioms on native.
  This is the only sanctioned platform divergence, and it is deliberate UX,
  not drift.
- Platform-specific leaves that genuinely cannot share presentation (e.g.
  ruby furigana: `<ruby>` HTML on web, stacked Text on native) follow the
  same shared-API/split-file pattern, kept as small as possible.

## Consequences

- Existing web-only domains (vocab-hub, vocab-practice, dashboard, shell,
  stats, settings, and the rest) convert to RN primitives incrementally;
  native placeholders disappear as their pages convert.
- Web visual parity with the source app remains the acceptance bar during
  conversion (theme sweeps on both color schemes).
- Base UI remains a dependency, referenced only from `@nn/ui` overlay web
  presentations — never from `packages/features`.
- `window.prompt`/`confirm`/`alert` usages migrate to the shared Dialog once
  it exists; the `web-dialogs` wrapper is the interim seam.
