import { For, Component } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"
import { A } from "@solidjs/router"

type Lesson = {
  title: string
  items: { character: string; meaning: string; link: string }[]
}

type Chapter = {
  title: string
  lessons: Lesson[]
}

function LessonCard(props: { title: string; children: any }) {
  return (
    <div class="space-y-2">
      <div class="text-sm text-muted-foreground">{props.title}</div>
      <div class="grid grid-cols-2 gap-2 lg:grid-cols-3">{props.children}</div>
    </div>
  )
}

function VocabCard(props: {
  character: string
  meaning: string
  link: string
}) {
  return (
    <A
      href={props.link}
      class="flex h-24 w-full flex-col items-start rounded-lg bg-card/50 p-4 text-left transition-colors hover:bg-accent"
    >
      <span class="mb-1 font-japanese text-2xl">{props.character}</span>
      <span class="text-sm text-muted-foreground">{props.meaning}</span>
    </A>
  )
}

export default function JapaneseLearningInterface() {
  const chapters: Chapter[] = [
    {
      title: "Chapter 1: Fundamentals",
      lessons: [
        {
          title: "Basic Sentence Pattern (X は Y です)",
          items: [
            {
              character: "X は Y です",
              meaning: "To be (polite)",
              link: "/learn/chapter-1/sentence-practice/x-wa-y-desu",
            },
          ],
        },
        {
          title: "Particles",
          items: [
            {
              character: "か",
              meaning: "Question Particle",
              link: "/learn/chapter-1/sentence-practice/questions-with-ka",
            },
            {
              character: "の",
              meaning: "Possession",
              link: "/learn/chapter-1/sentence-practice/the-no-particle",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 2: Basic Communication",
      lessons: [
        {
          title: "Demonstratives",
          items: [
            {
              character: "これ",
              meaning: "Words That Point",
              link: "/learn/chapter-2/sentence-practice/words-that-point",
            },
            {
              character: "だれ",
              meaning: "Who",
              link: "/learn/chapter-2/sentence-practice/dare",
            },
          ],
        },
        {
          title: "Particles",
          items: [
            {
              character: "も",
              meaning: "Saying also with も",
              link: "/learn/chapter-2/sentence-practice/mo-particle",
            },
            {
              character: "ね",
              meaning: "Ne Ending Particle",
              link: "/learn/learn/chapter-2/sentence-practice/ne-yo",
            },
            {
              character: "よ",
              meaning: "Yo Ending Particle",
              link: "/learn/learn/chapter-2/sentence-practice/ne-yo",
            },
          ],
        },
        {
          title: "Negation",
          items: [
            {
              character: "じゃないです",
              meaning: "Is not...",
              link: "/learn/chapter-2/sentence-practice/janai",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 3: Basic Grammar and Kanji",
      lessons: [
        {
          title: "Particles",
          items: [
            {
              character: "を",
              meaning: "Object Particle",
              link: "/learn/chapter-3/sentence-practice/o-de-ni-e-particles",
            },
            {
              character: "で",
              meaning: "Utilization Particle",
              link: "/learn/chapter-3/sentence-practice/o-de-ni-e-particles",
            },
            {
              character: "に",
              meaning: "Direction/Destination",
              link: "/learn/chapter-3/sentence-practice/o-de-ni-e-particles",
            },
            {
              character: "へ",
              meaning: "Direction/Destination",
              link: "/learn/chapter-3/sentence-practice/o-de-ni-e-particles",
            },
          ],
        },
        {
          title: "Other",
          items: [
            {
              character: "～ませんか",
              meaning: "Shall we...",
              link: "/learn/chapter-3/sentence-practice/polite-invitations",
            },
            {
              character: "に・X",
              meaning: "Time Expressions",
              link: "/learn/chapter-3/sentence-practice/time-expressions",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 17: Heresay and Quotations",
      lessons: [
        {
          title: "",
          items: [
            {
              character: "～そうです",
              meaning: "Heresay",
              link: "/learn/chapter-17/sentence-practice/sou-desu-heresay",
            },
            {
              character: "～って",
              meaning: "Said...",
              link: "/learn/chapter-17/sentence-practice/tte",
            },
            {
              character: "～たら",
              meaning: "If...",
              link: "/learn/chapter-17/sentence-practice/tara",
            },
          ],
        },
      ],
    },
  ]

  return (
    <>
      <div class="mx-auto max-w-5xl space-y-6 px-6 pb-32 pt-6">
        {/* <div class="flex justify-end gap-2">
          <Button variant="outline" class="gap-2">
            Options
            <ChevronDown class="h-4 w-4" />
          </Button>
        </div> */}
        <div class="h-8" />

        <div class="space-y-8">
          <For each={chapters}>
            {(chapter) => (
              <div class="space-y-6">
                <h2 class="text-2xl font-bold">{chapter.title}</h2>
                <div class="pl-2">
                  <For each={chapter.lessons}>
                    {(lesson) => (
                      <LessonCard title={lesson.title}>
                        <For each={lesson.items}>
                          {(item) => (
                            <VocabCard
                              character={item.character}
                              meaning={item.meaning}
                              link={item.link}
                            />
                          )}
                        </For>
                      </LessonCard>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  )
}
