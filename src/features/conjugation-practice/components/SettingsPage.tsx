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
import type { Settings } from "../types"
import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
} from "@/components/ui/textfield"

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
    <>
      <div class="mt-12 flex w-full flex-col items-center">
        <h1 class="rounded-xl border border-border bg-white/5 px-8 py-6 text-[1.75rem] font-black backdrop-blur-sm lg:mt-9">
          Conjugation Practice
        </h1>
      </div>
      <div class="w-full max-w-[625px]">
        <div class="border-b border-card-foreground">
          <h2 class="mt-12 text-[1.75rem] font-black text-orange-400">
            Form Types
          </h2>
          <div class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <For each={formTypes}>
              {([key, label]) => (
                <div class="mx-6 flex justify-center">
                  <div class="w-56">
                    <ToggleOption
                      id={key}
                      checked={settings()[key]}
                      onCheckedChange={(checked) =>
                        handleSettingChange(key)(checked)
                      }
                      label={label}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Parts of Speech */}
        <div class="border-b border-card-foreground">
          <h2 class="mt-6 text-[1.6rem] font-black">Parts of Speech</h2>
          <div class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <For each={partsOfSpeech}>
              {([key, label]) => (
                <div class="mx-6 flex justify-center">
                  <div class="w-56">
                    <ToggleOption
                      id={key}
                      checked={settings()[key]}
                      onCheckedChange={(checked) =>
                        handleSettingChange(key)(checked)
                      }
                      label={label}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Speech Level */}
        <div class="border-b border-card-foreground">
          <h2 class="mt-6 text-[1.6rem] font-black">Speech Level</h2>
          <div class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <For each={speechLevels}>
              {([key, label]) => (
                <div class="mx-6 flex justify-center">
                  <div class="w-56">
                    <ToggleOption
                      id={key}
                      checked={settings()[key]}
                      onCheckedChange={(checked) =>
                        handleSettingChange(key)(checked)
                      }
                      label={label}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Tense */}
        <div class="border-b border-card-foreground">
          <h2 class="mt-6 text-[1.6rem] font-black">Tense</h2>
          <div class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <For each={tenses}>
              {([key, label]) => (
                <div class="mx-6 flex justify-center">
                  <div class="w-56">
                    <ToggleOption
                      id={key}
                      checked={settings()[key]}
                      onCheckedChange={(checked) =>
                        handleSettingChange(key)(checked)
                      }
                      label={label}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Positive/Negative */}
        <div class="border-b border-card-foreground">
          <h2 class="mt-6 text-[1.6rem] font-black">Positive/Negative</h2>
          <div class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <For each={polarities}>
              {([key, label]) => (
                <div class="mx-6 flex justify-center">
                  <div class="w-56">
                    <ToggleOption
                      id={key}
                      checked={settings()[key]}
                      onCheckedChange={(checked) =>
                        handleSettingChange(key)(checked)
                      }
                      label={label}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        <h2 class="mt-12 text-center text-[1.4rem] font-medium italic">
          Special Options
        </h2>
        <div class="mx-16 mt-4 space-y-2">
          <label for="jlptLevel" class="text-base">
            JLPT Level:
          </label>
          <Select
            options={["n5", "n4", "n3", "n2", "n1"]}
            value={settings().jlptLevel}
            placeholder="Select JLPT level"
            onChange={(value) =>
              handleSettingChange("jlptLevel")(value as Settings["jlptLevel"])
            }
          >
            <SelectTrigger id="jlptLevel" class="shadow-md">
              <SelectValue<string>>
                {(state) => state.selectedOption().toUpperCase()}
              </SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>

          <TextFieldRoot class="space-y-2">
            <TextFieldLabel class="text-base">
              Number of questions:
            </TextFieldLabel>
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
              class="shadow-md"
            />
          </TextFieldRoot>
        </div>

        <div class="mt-6 flex flex-col items-center">
          <div class="space-y-4">
            <ToggleOption
              id="leaveOutSuru"
              checked={settings().leaveOutSuru}
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
              checked={settings().reverse}
              onCheckedChange={(checked) =>
                handleSettingChange("reverse")(checked)
              }
              label="Reverse mode"
            />

            <ToggleOption
              id="showMeaning"
              checked={settings().showMeaning}
              onCheckedChange={(checked) =>
                handleSettingChange("showMeaning")(checked)
              }
              label="Show meaning"
            />

            <ToggleOption
              id="noFurigana"
              checked={settings().noFurigana}
              onCheckedChange={(checked) =>
                handleSettingChange("noFurigana")(checked)
              }
              label="No furigana"
            />

            <ToggleOption
              id="emoji"
              checked={settings().emoji}
              onCheckedChange={(checked) =>
                handleSettingChange("emoji")(checked)
              }
              label="Show emojis above conjugation types [WIP]"
            />
          </div>
        </div>

        <div class="fixed bottom-0 left-0 mb-[4.5rem] flex w-full justify-center">
          <Button
            onClick={onStartReview}
            size="lg"
            class="rounded-lg py-3 text-lg font-bold"
          >
            Practice!{" "}
            <span class="ml-2 font-black text-orange-400">{"->"}</span>
          </Button>
        </div>
        <div class="fixed bottom-0 left-0 flex h-3 w-full justify-center backdrop-blur-sm"></div>
      </div>
    </>
  )
}
