// Platform-neutral entry: Metro resolves slider-impl.native.tsx on mobile.
// Split like the overlay family (ADR 0001): the web presentation keeps Base
// UI's hidden range input (keyboard and AT for free); native uses touch.
export * from "./slider-impl";
