// Platform-neutral entry: Metro resolves dialog-impl.native.tsx on mobile.
// Overlay-family split (ADR 0001): Base UI keeps web focus/keyboard behavior;
// native renders an RN Modal.
export * from "./dialog-impl";
