import { For } from "solid-js"
import { useSettingsContext } from "../context/SettingsContext"
import ToggleOption from "./ToggleOption"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
} from "@/components/ui/textfield"
import type { Settings } from "../types"

type SettingsPageProps = {
  onStartReview: () => void
}

export default function SettingsPage({ onStartReview }: SettingsPageProps) {
  const { settings, updateSettings } = useSettingsContext()

  const handleSettingChange =
    (key: keyof Settings) => (value: boolean | string | number) => {
      updateSettings({ [key]: value })
    }

  const formTypes = [
    ["normal", "Normal"],
    ["teForm", "Te-form"],
    ["volitional", "Volitional"],
    ["taiForm", "Tai-form"],
    ["tariForm", "Tari-form"],
    ["potential", "Potential"],
    ["imperative", "Imperative"],
    ["conditional", "Conditional"],
    ["passive", "Passive"],
    ["causative", "Causative"],
    ["causativePassive", "Causative-Passive"],
  ] as const

  const partsOfSpeech = [
    ["verb", "Verb"],
    ["iAdjective", "I-Adjective"],
    ["naAdjective", "Na-Adjective"],
  ] as const

  const speechLevels = [
    ["polite", "Polite"],
    ["plain", "Plain"],
  ] as const
  const tenses = [
    ["nonPast", "Non-Past"],
    ["past", "Past"],
  ] as const
  const polarities = [
    ["positive", "Positive"],
    ["negative", "Negative"],
  ] as const

  return (
    <div class="relative mt-6 min-h-screen rounded-t-xl bg-background">
      {/* Header */}
      <header class="flex h-32 items-center justify-center rounded-xl border bg-orange-500 saturate-[75%] backdrop-blur-sm">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Conjugation Practice
        </h1>
      </header>

      <main class="max-w-5xl px-8 pb-24 pt-8">
        {/* Form Types Section */}
        <section class="space-y-6 rounded-xl border bg-card p-6">
          <h2 class="text-center text-[1.6rem] font-black text-orange-400">
            Form Types
          </h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <For each={formTypes}>
              {([key, label]) => (
                <ToggleOption
                  id={key}
                  checked={() => settings()[key]}
                  onCheckedChange={(checked) =>
                    handleSettingChange(key)(checked)
                  }
                  label={label}
                />
              )}
            </For>
          </div>
        </section>

        {/* Parts of Speech Section */}
        <section class="mt-8 space-y-6 rounded-xl border bg-card p-6">
          <h2 class="text-center text-2xl font-bold">Parts of Speech</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <For each={partsOfSpeech}>
              {([key, label]) => (
                <ToggleOption
                  id={key}
                  checked={() => settings()[key]}
                  onCheckedChange={(checked) =>
                    handleSettingChange(key)(checked)
                  }
                  label={label}
                />
              )}
            </For>
          </div>
        </section>

        {/* Speech Level, Tense, and Polarity Section */}
        <div class="mt-8 grid gap-8 sm:grid-cols-3">
          <section class="space-y-6 rounded-xl border bg-card p-6">
            <h2 class="text-center text-2xl font-bold">Speech Level</h2>
            <div class="space-y-4">
              <For each={speechLevels}>
                {([key, label]) => (
                  <ToggleOption
                    id={key}
                    checked={() => settings()[key]}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key)(checked)
                    }
                    label={label}
                  />
                )}
              </For>
            </div>
          </section>

          <section class="space-y-6 rounded-xl border bg-card p-6">
            <h2 class="text-center text-2xl font-bold">Tense</h2>
            <div class="space-y-4">
              <For each={tenses}>
                {([key, label]) => (
                  <ToggleOption
                    id={key}
                    checked={() => settings()[key]}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key)(checked)
                    }
                    label={label}
                  />
                )}
              </For>
            </div>
          </section>

          <section class="space-y-6 rounded-xl border bg-card p-6">
            <h2 class="text-center text-2xl font-bold">Polarity</h2>
            <div class="space-y-4">
              <For each={polarities}>
                {([key, label]) => (
                  <ToggleOption
                    id={key}
                    checked={() => settings()[key]}
                    onCheckedChange={(checked) =>
                      handleSettingChange(key)(checked)
                    }
                    label={label}
                  />
                )}
              </For>
            </div>
          </section>
        </div>

        {/* Special Options Section */}
        <section class="mt-8 space-y-6 rounded-xl border bg-card p-6">
          <h2 class="text-center text-2xl font-bold italic">Special Options</h2>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="space-y-4">
              <div class="space-y-2">
                <label for="jlptLevel" class="text-sm font-medium">
                  JLPT Level:
                </label>
                <Select
                  options={["n5", "n4", "n3", "n2", "n1"]}
                  value={settings().jlptLevel}
                  placeholder="Select JLPT level"
                  onChange={(value) =>
                    handleSettingChange("jlptLevel")(
                      value as Settings["jlptLevel"],
                    )
                  }
                >
                  <SelectTrigger id="jlptLevel">
                    <SelectValue<string>>
                      {(state) => state.selectedOption().toUpperCase()}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent />
                </Select>
              </div>

              <TextFieldRoot class="space-y-2">
                <TextFieldLabel>Number of questions:</TextFieldLabel>
                <TextField
                  type="number"
                  value={settings().amount}
                  onInput={(e) =>
                    handleSettingChange("amount")(
                      parseInt(e.currentTarget.value, 10),
                    )
                  }
                  min="1"
                  max="100"
                />
              </TextFieldRoot>
            </div>

            <div class="space-y-4">
              <ToggleOption
                id="leaveOutSuru"
                checked={() => settings().leaveOutSuru}
                onCheckedChange={(checked) =>
                  handleSettingChange("leaveOutSuru")(checked)
                }
                label={
                  <>
                    Leave out <span class="font-japanese">する</span> verbs
                  </>
                }
              />
              <ToggleOption
                id="reverse"
                checked={() => settings().reverse}
                onCheckedChange={(checked) =>
                  handleSettingChange("reverse")(checked)
                }
                label="Reverse mode"
              />
              <ToggleOption
                id="showMeaning"
                checked={() => settings().showMeaning}
                onCheckedChange={(checked) =>
                  handleSettingChange("showMeaning")(checked)
                }
                label="Show meaning"
              />
              <ToggleOption
                id="noFurigana"
                checked={() => settings().noFurigana}
                onCheckedChange={(checked) =>
                  handleSettingChange("noFurigana")(checked)
                }
                label="No furigana"
              />
              <ToggleOption
                id="emoji"
                checked={() => settings().emoji}
                onCheckedChange={(checked) =>
                  handleSettingChange("emoji")(checked)
                }
                label="Show emojis above conjugation types [WIP]"
              />
            </div>
          </div>
        </section>

        {/* Start Button */}
        <div class="fixed bottom-0 left-0 right-0 pb-6 pt-4">
          <div class="mx-auto max-w-5xl px-12">
            <Button
              onClick={onStartReview}
              size="lg"
              class="w-full rounded-lg border-2 border-transparent bg-white/60 py-3 text-xl font-bold text-primary backdrop-blur-sm hover:border-orange-500 hover:bg-white/60 dark:border-transparent dark:bg-white/10 hover:dark:border-transparent hover:dark:bg-white/20"
            >
              Practice! <span class="ml-2 text-lg font-black">{"->"}</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
