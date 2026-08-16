// home-page has two files: home-page.native.tsx (mobile) and home-page.tsx
// (web). The mobile build picks the correct file, but only for a relative
// import. An import of "@nn/features/homepage" resolves to this file. This
// file then imports the page relatively, so the mobile build can pick the
// correct file.
export { default } from "./home-page";
