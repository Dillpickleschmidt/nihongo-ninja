// Platform-neutral entry: Metro resolves menu-impl.native.tsx on mobile.
// Overlay-family split (ADR 0001): Base UI menus keep web keyboard/positioning
// behavior; native renders a long-press/tap bottom sheet.
export * from "./menu-impl";
export type * from "./menu-types";
