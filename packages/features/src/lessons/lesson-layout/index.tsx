// lesson-layout has two files: lesson-layout.native.tsx (mobile) and
// lesson-layout.tsx (web). The mobile build picks the correct file, but only
// for a relative import. An import of "@nn/features/lessons/lesson-layout"
// resolves to this file. This file then imports the layout relatively, so the
// mobile build can pick the correct file.
export { LessonLayout } from "./lesson-layout";
