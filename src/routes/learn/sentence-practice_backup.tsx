import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"

type Lesson = {
  title: string
  items: { character: string; meaning: string }[]
}

type Chapter = {
  title: string
  lessons: Lesson[]
}

const LessonCard = (props: { children: any; title: string }) => (
  <div class="space-y-2">
    <div class="text-sm text-muted-foreground">{props.title}</div>
    <div class="grid grid-cols-3 gap-2">{props.children}</div>
  </div>
)

const VocabCard = (props: { character: string; meaning: string }) => (
  <button class="flex h-24 w-full flex-col items-start rounded-lg bg-card/50 p-4 text-left transition-colors hover:bg-accent">
    <span class="mb-1 font-japanese text-2xl">{props.character}</span>
    <span class="text-sm text-muted-foreground">{props.meaning}</span>
  </button>
)

export default function JapaneseLearningInterface() {
  const chapters: Chapter[] = [
    {
      title: "Fundamentals",
      lessons: [
        {
          title: "Pronunciation Guide",
          items: [
            { character: "あ", meaning: "A" },
            { character: "い", meaning: "I" },
            { character: "う", meaning: "U" },
          ],
        },
        { title: "Writing Systems Overview", items: [] },
        { title: "Hiragana Basics", items: [] },
        { title: "Voiced Sounds (Dakuten)", items: [] },
        { title: "Combined Sounds (Youon)", items: [] },
        { title: "Extended Sounds", items: [] },
        { title: "Punctuation & Symbols", items: [] },
        { title: "Basic Numbers", items: [] },
      ],
    },
    {
      title: "Basic Grammar & Expressions",
      lessons: [
        {
          title: "Basic Sentence Pattern (X は Y です)",
          items: [
            { character: "は", meaning: "Topic marker" },
            { character: "です", meaning: "To be (polite)" },
            { character: "私", meaning: "I/me" },
          ],
        },
        { title: "Self Introduction", items: [] },
        { title: "Names & Honorifics", items: [] },
        { title: "Personal Pronouns", items: [] },
        { title: "Question Particles (か)", items: [] },
        { title: "Possession (の)", items: [] },
        { title: "Filler Words & Expressions", items: [] },
        { title: "Time Expressions", items: [] },
        { title: "Time Duration", items: [] },
      ],
    },
    {
      title: "Essential Grammar & Writing",
      lessons: [
        { title: "Katakana Writing", items: [] },
        {
          title: "Demonstratives (これ・それ・あれ)",
          items: [
            { character: "これ", meaning: "This one" },
            { character: "それ", meaning: "That one" },
            { character: "あれ", meaning: "That one (over there)" },
          ],
        },
        { title: "Subject Marker (が)", items: [] },
        { title: "Question Words (だれ・なに)", items: [] },
        { title: "Including Items (も)", items: [] },
        { title: "Negation (じゃないです)", items: [] },
        { title: "Sentence Endings (ね・よ)", items: [] },
        { title: "Large Numbers", items: [] },
        { title: "Currency & Counting", items: [] },
      ],
    },
  ]

  return (
    <div class="min-h-screen bg-background">
      <div class="mx-auto max-w-5xl space-y-6 p-6">
        <div class="flex justify-end gap-2">
          <Button variant="outline" class="gap-2">
            Options
            <ChevronDown class="h-4 w-4" />
          </Button>
        </div>

        <div class="space-y-8">
          <For each={chapters}>
            {(chapter) => (
              <div class="space-y-6">
                <h2 class="text-2xl font-bold">{chapter.title}</h2>
                <For each={chapter.lessons}>
                  {(lesson) => (
                    <LessonCard title={lesson.title}>
                      <For each={lesson.items}>
                        {(item) => (
                          <VocabCard
                            character={item.character}
                            meaning={item.meaning}
                          />
                        )}
                      </For>
                    </LessonCard>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
