// Platform-neutral entry: Metro resolves icons-impl.native.tsx on mobile.
// Package-exports subpaths get no .native substitution, so the split lives
// behind this relative re-export.
export * from "./icons-impl";
