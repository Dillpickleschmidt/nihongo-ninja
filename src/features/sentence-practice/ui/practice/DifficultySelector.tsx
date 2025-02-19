// ui/practice/DifficultySelector.tsx
import { createSignal } from "solid-js"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"
import { usePracticeStore } from "../../store/PracticeContext"

export type Difficulty = "easy" | "hard"

interface DifficultySelectorProps {
  initialDifficulty?: Difficulty
  onDifficultyChange?: (difficulty: Difficulty) => void
  class?: string
}

export default function DifficultySelector(props: DifficultySelectorProps) {
  const { store, actions } = usePracticeStore()
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false)

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    actions.setDifficulty(newDifficulty)
    props.onDifficultyChange?.(newDifficulty)
  }

  return (
    <div class={props.class}>
      <DropdownMenu open={isDropdownOpen()} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger>
          <Button variant="outline" class="w-24">
            <span class="mr-2">
              {store.difficulty === "easy" ? "Easy" : "Hard"}
            </span>
            <ChevronDown
              class={`h-5 w-5 transform transition-transform duration-200 ${
                isDropdownOpen() ? "rotate-180" : ""
              }`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-24">
          <DropdownMenuItem
            onSelect={() => handleDifficultyChange("easy")}
            class={store.difficulty === "easy" ? "bg-accent" : ""}
          >
            Easy
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => handleDifficultyChange("hard")}
            class={store.difficulty === "hard" ? "bg-accent" : ""}
          >
            Hard
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
