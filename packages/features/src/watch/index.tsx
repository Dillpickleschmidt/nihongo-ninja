// watch-page has two files: watch-page.native.tsx (mobile) and watch-page.tsx (web).
// The mobile build picks the correct file, but only for a relative import.
// An import of "@nn/features/watch" resolves to this file.
// This file then imports the page relatively, so the mobile build can pick the correct file.
export { default } from "./watch-page";
