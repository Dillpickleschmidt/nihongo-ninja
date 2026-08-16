// Write layouts by hand. The route generator does not create them.
import { LessonLayout } from "@nn/features/lessons/lesson-layout";
import { Slot } from "expo-router";

export default function LessonsLayout() {
  return (
    <LessonLayout>
      <Slot />
    </LessonLayout>
  );
}
