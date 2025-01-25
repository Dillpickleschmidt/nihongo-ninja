// WelcomePageQuestionnaire.tsx
import { createSignal, For } from "solid-js"
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemLabel,
  RadioGroupItemInput,
} from "@/components/ui/radio-group"
import WelcomePageDialog from "./WelcomePageDialog"
import { Button } from "@/components/ui/button"

export type Question = {
  id: 1 | 2 | 3 | 4 | 5
  title: string
  options: string[]
  type: "single" | "multiple"
}

export type QuestionnaireSelections = {
  q1: string[]
  q2: string[]
  q3: string[]
  q4: string[]
  q5: string[]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Why are you learning Japanese?",
    type: "multiple",
    options: [
      "To understand anime without subtitles",
      "To read manga or Japanese books",
      "To prepare for travel to Japan",
      "To learn for personal or professional growth",
      "Other",
    ],
  },
  {
    id: 2,
    title: "Which areas interest you the most?",
    type: "multiple",
    options: [
      "Listening and understanding spoken Japanese",
      "Reading Japanese (hiragana, katakana, and kanji)",
      "Speaking and building conversational skills",
      "Writing Japanese (typing and sentence structure)",
      "Grammar and understanding how the language works",
    ],
  },
  {
    id: 3,
    title: "How much time can you dedicate each week?",
    type: "single",
    options: ["Less than 2 hours", "2-5 hours", "5-10 hours", "10+ hours"],
  },
  {
    id: 4,
    title: "What level of Japanese do you want to achieve?",
    type: "single",
    options: [
      "Just enough to enhance my Japanese media consumption",
      "Enough to understand everyday conversations",
      "Fluency for travel, work, or personal growth",
    ],
  },
  {
    id: 5,
    title: "Are you open to exploring areas outside your main goals?",
    type: "single",
    options: [
      "Yes, I'd like a well-rounded approach.",
      "Maybe, but I'd like to focus on my goals first.",
      "No, I only want to focus on my specific interests.",
    ],
  },
]

export function WelcomePageQuestionnaire() {
  const [selections, setSelections] = createSignal<QuestionnaireSelections>({
    q1: [],
    q2: [],
    q3: [],
    q4: [],
    q5: [],
  })
  const [dialogOpen, setDialogOpen] = createSignal(false)
  const [errorQuestions, setErrorQuestions] = createSignal<Set<number>>(
    new Set(),
  )

  const updateSelection = (questionId: number, newValue: string[]) => {
    const questionKey = `q${questionId}` as keyof QuestionnaireSelections
    setSelections((prev) => ({ ...prev, [questionKey]: newValue }))

    if (newValue.length > 0) {
      setErrorQuestions((curr) => {
        const next = new Set(curr)
        next.delete(questionId)
        return next
      })
    }
  }

  const handleGetRecommendations = () => {
    const emptyQuestions = new Set(
      QUESTIONS.map((q) => q.id).filter(
        (id) =>
          selections()[`q${id}` as keyof QuestionnaireSelections].length === 0,
      ),
    )

    if (emptyQuestions.size === 0) {
      setDialogOpen(true)
    } else {
      setErrorQuestions(emptyQuestions)
    }
  }

  const renderQuestion = (question: Question) => {
    const questionKey = `q${question.id}` as keyof QuestionnaireSelections
    const currentSelections = selections()[questionKey]

    if (question.type === "single") {
      return (
        <RadioGroup
          value={currentSelections[0] || ""}
          onChange={(value) => updateSelection(question.id, [value])}
          class="mt-2 space-y-2"
        >
          <For each={question.options}>
            {(option) => (
              <div class="flex origin-left items-center space-x-2 transition duration-200 ease-out hover:scale-[102%]">
                <RadioGroupItem value={option} class="flex items-center gap-2">
                  <RadioGroupItemInput />
                  <RadioGroupItemControl />
                  <RadioGroupItemLabel class="cursor-pointer">
                    {option}
                  </RadioGroupItemLabel>
                </RadioGroupItem>
              </div>
            )}
          </For>
        </RadioGroup>
      )
    }

    return (
      <div class="mt-2 space-y-2">
        {question.options.map((option) => (
          <Checkbox
            checked={currentSelections.includes(option)}
            onChange={(checked) => {
              updateSelection(
                question.id,
                checked
                  ? [...currentSelections, option]
                  : currentSelections.filter((item) => item !== option),
              )
            }}
            class="flex origin-left items-center space-x-2 transition duration-200 ease-out hover:scale-[102%]"
          >
            <CheckboxControl />
            <CheckboxLabel class="cursor-pointer">{option}</CheckboxLabel>
          </Checkbox>
        ))}
      </div>
    )
  }

  return (
    <>
      <h2 class="text-center text-2xl font-semibold">Questionnaire</h2>
      <p class="pb-4 pt-2 text-center text-sm italic text-muted-foreground">
        Select all options that apply to you
      </p>

      <div class="space-y-6">
        {QUESTIONS.map((question) => (
          <div>
            <h3 class="text-lg font-medium text-fuchsia-500 dark:text-fuchsia-300">
              {question.id}. {question.title}
              {errorQuestions().has(question.id) && (
                <span class="text-base font-medium text-red-500 dark:text-red-400">
                  {" "}
                  - please select an option
                </span>
              )}
            </h3>
            {renderQuestion(question)}
          </div>
        ))}
      </div>

      <div class="mt-6 flex flex-col items-center gap-2">
        <Button
          onClick={handleGetRecommendations}
          variant="outline"
          class="border-fuchsia-500"
        >
          Get Recommendations
        </Button>
        {errorQuestions().size > 0 && (
          <p class="text-sm text-red-500">
            Please answer all questions before continuing
          </p>
        )}
      </div>

      <WelcomePageDialog
        isOpen={dialogOpen()}
        onClose={() => setDialogOpen(false)}
        selections={selections()}
      />
    </>
  )
}
