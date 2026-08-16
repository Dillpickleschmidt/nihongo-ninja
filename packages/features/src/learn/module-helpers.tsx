// Module icon and styling helpers
import {
  Blocks,
  BookOpen,
  BookOpenText,
  BookPlus,
  Coffee,
  FileText,
  Gamepad,
  GraduationCap,
  Hash,
  Library,
  MapPlus,
  PencilLine,
  Repeat2,
  ScrollText,
  Video,
  Volume2,
  type LucideIcon,
} from "lucide-react";

const iconComponents: Record<string, LucideIcon> = {
  lesson: BookOpen,
  worksheet: PencilLine,
  "sentence-practice": PencilLine,
  "culture-note": Coffee,
  vocab: BookPlus,
  "vocab-practice": GraduationCap,
  "conjugation-practice": Repeat2,
  "counter-practice": Hash,
  game: Gamepad,
  video: Video,
  audio: Volume2,
  "grammar-cheatsheet": FileText,
  "grammar-notes": ScrollText,
  guides: ScrollText,
  reading: BookOpenText,
  "vocab-list": Library,
  "vocab-test": GraduationCap,
  kanji: Library,
  "listening-material": Volume2,
  extension: Blocks,
  misc: MapPlus,
};

export function getModuleIcon(moduleType: string): LucideIcon {
  return iconComponents[moduleType] ?? BookOpen;
}

const MODULE_TEXT_STYLES: Record<string, string> = {
  lesson: "text-green-600 dark:text-green-500",
  worksheet: "text-teal-500 dark:text-teal-400",
  "sentence-practice": "text-yellow-600 dark:text-yellow-500 saturate-[75%]",
  "culture-note": "text-pink-500 dark:text-pink-400 saturate-[75%]",
  vocab: "text-sky-500 dark:text-sky-400 saturate-[75%]",
  "vocab-practice": "text-orange-600 dark:text-orange-500",
  "conjugation-practice": "text-teal-500 dark:text-teal-400",
  "counter-practice": "text-violet-600 dark:text-violet-400",
  game: "text-red-600 dark:text-red-500",
  video: "text-purple-500 dark:text-purple-400",
  audio: "text-purple-500 dark:text-purple-400",
  "grammar-cheatsheet": "text-red-600 dark:text-red-500 opacity-80",
  "grammar-notes": "text-purple-500 dark:text-purple-400",
  guides: "text-purple-500 dark:text-purple-400",
  reading: "text-teal-500 dark:text-teal-400",
  "vocab-list": "text-sky-500 dark:text-sky-400 saturate-[75%]",
  "vocab-test": "text-orange-600 dark:text-orange-500",
  kanji: "text-sky-500 dark:text-sky-400 saturate-[75%]",
  "listening-material": "text-purple-500 dark:text-purple-400",
  extension: "text-blue-500 dark:text-blue-400",
  misc: "text-gray-500 dark:text-gray-400",
};

export function getModuleIconClasses(moduleType: string): string {
  return MODULE_TEXT_STYLES[moduleType] ?? "text-gray-500 dark:text-gray-400";
}
