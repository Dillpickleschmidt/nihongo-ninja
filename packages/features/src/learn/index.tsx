// learn-page has two files: learn-page.native.tsx (mobile) and learn-page.tsx
// (web). The mobile build picks the correct file, but only for a relative
// import. An import of "@nn/features/learn" resolves to this file. This file
// then imports the page relatively, so the mobile build can pick the correct
// file.
export { default } from "./learn-page";
