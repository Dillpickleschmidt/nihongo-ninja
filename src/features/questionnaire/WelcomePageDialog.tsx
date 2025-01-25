// WelcomePageDialog.tsx
type Recommendations = {
  focusModules: string[]
  additionalModules: string[]
  weeklyTime: number
  estimatedTime: string
}

import { createMemo, For, Match, Show, Switch } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  BookOpen,
  PencilLine,
  ScrollText,
  GraduationCap,
  Video,
  Volume2,
  Library,
  BookOpenText,
  BookPlus,
} from "lucide-solid"
import { QuestionnaireSelections } from "./WelcomePageQuestionnaire"
import { Button } from "@/components/ui/button"

type ModuleConfig = {
  icon: typeof BookOpen
  color: string
}

const MODULE_CONFIG: Record<string, ModuleConfig> = {
  Lessons: { icon: BookOpen, color: "text-green-500" },
  Vocab: { icon: BookPlus, color: "text-sky-400 saturate-[75%]" },
  "Grammar Notes": { icon: ScrollText, color: "text-red-500 opacity-80" },
  "Immersion Video": { icon: Video, color: "text-purple-400" },
  "Immersion Audio": { icon: Volume2, color: "text-purple-400" },
  "Practice Sentence": {
    icon: PencilLine,
    color: "text-yellow-500 saturate-[75%]",
  },
  "Vocab List": { icon: Library, color: "text-sky-400 saturate-[75%]" },
  "Vocab Practice": { icon: GraduationCap, color: "text-orange-500" },
  "Vocab Test": {
    icon: GraduationCap,
    color: "text-yellow-500 saturate-[75%]",
  },
  "Conjugation Practice": { icon: GraduationCap, color: "text-teal-400" },
  "Counter Practice": { icon: GraduationCap, color: "text-green-500" },
  Reading: { icon: BookOpenText, color: "text-teal-400" },
}

// Define additional module suggestions based on selection
const ADDITIONAL_MODULES = {
  maybe: ["Conjugation Practice", "Counter Practice"],
  "well-rounded": ["Conjugation Practice", "Counter Practice", "Reading"],
} as const

interface Props {
  isOpen: boolean
  onClose: () => void
  selections: QuestionnaireSelections
}

const GOAL_DURATIONS = {
  basic: {
    "Less than 2 hours": "15-18 months",
    "2-5 hours": "10-12 months",
    "5-8 hours": "5-7 months",
    "8+ hours": "3-4 months",
  },
  intermediate: {
    "Less than 2 hours": "30-36 months",
    "2-5 hours": "18-24 months",
    "5-8 hours": "12-15 months",
    "8+ hours": "8-10 months",
  },
  advanced: {
    "Less than 2 hours": "48-60 months",
    "2-5 hours": "36-42 months",
    "5-8 hours": "24-30 months",
    "8+ hours": "18-24 months",
  },
} as const

export default function WelcomePageDialog(props: Props) {
  const getRecommendations = createMemo((): Recommendations => {
    const recommendations: Recommendations = {
      focusModules: [],
      additionalModules: [],
      weeklyTime: 0,
      estimatedTime: "",
    }

    // Learning goals recommendations
    if (props.selections.q1.includes("To understand anime without subtitles")) {
      recommendations.focusModules.push(
        "Lessons",
        "Grammar Notes",
        "Immersion Video",
        "Immersion Audio",
        "Vocab",
        "Vocab Practice",
        "Practice Sentence",
      )
    }
    if (props.selections.q1.includes("To read manga or Japanese books")) {
      recommendations.focusModules.push(
        "Lessons",
        "Grammar Notes",
        "Vocab",
        "Vocab Practice",
        "Vocab Test",
        "Practice Sentence",
        "Reading",
      )
    }
    if (props.selections.q1.includes("To prepare for travel to Japan")) {
      recommendations.focusModules.push(
        "Lessons",
        "Grammar Notes",
        "Vocab",
        "Vocab Practice",
        "Vocab Test",
        "Conjugation Practice",
        "Counter Practice",
        "Practice Sentence",
        "Immersion Video",
        "Immersion Audio",
        "Reading",
      )
    }
    if (
      props.selections.q1.includes(
        "To learn for personal or professional growth",
      )
    ) {
      recommendations.focusModules.push(
        "Lessons",
        "Grammar Notes",
        "Vocab",
        "Vocab Practice",
        "Conjugation Practice",
        "Practice Sentence",
        "Immersion Video",
        "Immersion Audio",
      )
    }

    // Weekly time recommendation
    const timeSelection = props.selections.q3[0]
    if (timeSelection) {
      recommendations.weeklyTime = timeSelection.includes("Less than 2")
        ? 1.5
        : timeSelection.includes("2-5")
          ? 3.5
          : timeSelection.includes("5-8")
            ? 6.5
            : timeSelection.includes("8+")
              ? 10
              : 3.5
    }

    // Time to goal estimation based on goal level and time commitment
    const goalSelection = props.selections.q4[0]
    if (goalSelection && timeSelection) {
      const durations = goalSelection.includes("Just enough")
        ? GOAL_DURATIONS.basic
        : goalSelection.includes("everyday conversations")
          ? GOAL_DURATIONS.intermediate
          : GOAL_DURATIONS.advanced

      recommendations.estimatedTime =
        durations[timeSelection as keyof typeof durations]
    }

    recommendations.focusModules = [...new Set(recommendations.focusModules)]

    // Get additional modules based on q5 selection
    const q5Selection = props.selections.q5[0]
    if (q5Selection) {
      const modulesToAdd = q5Selection.includes("Maybe")
        ? ADDITIONAL_MODULES.maybe
        : q5Selection.includes("well-rounded")
          ? ADDITIONAL_MODULES["well-rounded"]
          : []

      recommendations.additionalModules = modulesToAdd.filter(
        (module) => !recommendations.focusModules.includes(module),
      )
    }

    return recommendations
  })

  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent class="max-h-screen max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle class="text-2xl font-bold">
            Your Learning Path
          </DialogTitle>
          <DialogDescription class="text-lg">
            Based on your goals and availability, here's our recommended
            approach:
          </DialogDescription>
        </DialogHeader>

        <div class="space-y-4">
          <div class="rounded-lg bg-card/50 p-4">
            <h3 class="text-lg font-semibold text-orange-400">
              Recommended Focus
            </h3>
            <div class="mt-2">
              <p>
                While you're encouraged to check out all the modules, we suggest
                focusing on these:
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <For each={getRecommendations().focusModules}>
                  {(module) => {
                    const config = MODULE_CONFIG[module]
                    return (
                      <span class="inline-flex items-center gap-1 rounded-full bg-card px-3 py-1 text-sm shadow-sm">
                        {config?.icon && (
                          <config.icon size={16} class={config.color} />
                        )}
                        {module}
                      </span>
                    )
                  }}
                </For>
              </div>
            </div>
          </div>

          <Switch>
            <Match when={props.selections.q5[0]?.includes("Maybe")}>
              <div class="rounded-lg border bg-card p-4">
                <h4>
                  You selected:{" "}
                  <span class="font-bold">
                    Maybe, but I'd like to focus on my goals first.
                  </span>
                </h4>
                <p class="mt-1">
                  In that case, you may want to consider these additional
                  modules to gain an even stronger foundation:
                </p>
                <Show when={getRecommendations().additionalModules.length > 0}>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <For each={getRecommendations().additionalModules}>
                      {(module) => {
                        const config = MODULE_CONFIG[module]
                        return (
                          <span class="inline-flex items-center gap-1 rounded-full bg-card px-3 py-1 text-sm shadow-sm">
                            {config?.icon && (
                              <config.icon size={16} class={config.color} />
                            )}
                            {module}
                          </span>
                        )
                      }}
                    </For>
                  </div>
                </Show>
              </div>
            </Match>
            <Match when={props.selections.q5[0]?.includes("well-rounded")}>
              <div class="rounded-lg border bg-card p-4">
                <h4>
                  You selected:{" "}
                  <span class="font-bold">
                    I'd like a well-rounded learning experience.
                  </span>
                </h4>
                <p class="mt-1">
                  Great choice! Consider adding these modules to your study plan
                  for a more comprehensive understanding:
                </p>
                <Show when={getRecommendations().additionalModules.length > 0}>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <For each={getRecommendations().additionalModules}>
                      {(module) => {
                        const config = MODULE_CONFIG[module]
                        return (
                          <span class="inline-flex items-center gap-1 rounded-full bg-card px-3 py-1 text-sm shadow-sm">
                            {config?.icon && (
                              <config.icon size={16} class={config.color} />
                            )}
                            {module}
                          </span>
                        )
                      }}
                    </For>
                  </div>
                </Show>
              </div>
            </Match>
          </Switch>

          <div class="rounded-lg bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 p-4">
            <h3 class="text-lg font-semibold text-fuchsia-400 dark:text-fuchsia-300">
              Time Investment
            </h3>
            <p class="mt-2">
              Recommended study time:{" "}
              <strong>{getRecommendations().weeklyTime} hours</strong> per week
              (~{Math.round((getRecommendations().weeklyTime / 7) * 60)} minutes
              per day)
              <br />
              Estimated time to reach your goal:{" "}
              <strong>{getRecommendations().estimatedTime}</strong>
            </p>
          </div>

          <Switch>
            <Match
              when={props.selections.q4[0]?.includes("everyday conversations")}
            >
              <div class="rounded-lg border bg-card p-4">
                <h4>
                  You selected:{" "}
                  <span class="font-bold">
                    Enough to understand everyday conversations
                  </span>
                </h4>
                <p class="mt-1">
                  This is a great goal to have! Nihongo Ninja can take you up to
                  around intermediate level Japanese, so that should cover all
                  the basic conversations that you're looking understand.
                </p>
                <p class="mt-1">
                  If you someday want to get into more difficult subjects,
                  you'll want to start looking for your own native material to
                  read/listen to get to that advanced level.
                </p>
              </div>
            </Match>
            <Match when={props.selections.q4[0]?.includes("Fluency")}>
              <div class="rounded-lg border bg-card p-4">
                <h4>
                  You selected:{" "}
                  <span class="font-bold">
                    Fluency for travel, work, or personal growth
                  </span>
                </h4>
                <p class="mt-1">
                  It seems that you want to take your Japanese to a pretty high
                  level. Nihongo Ninja{" "}
                  <span class="text-sm text-muted-foreground">(currently)</span>{" "}
                  aims to offer up to around intermediate level Japanese. It's a
                  great place to start, but once you finish the course, you'll
                  want to start looking for your own native material to
                  read/listen to get to that advanced level.
                </p>
              </div>
            </Match>
          </Switch>

          <div class="mt-4 text-sm text-muted-foreground">
            Remember, these are suggestions based on your responses. Feel free
            to adjust your learning path as you progress.
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => props.onClose()} type="button">
            Got it!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
