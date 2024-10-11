import { createSignal, JSX } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type DeckSettingsDialogProps = {
  children: JSX.Element
  shuffleInput: boolean
  setShuffleInput: (value: boolean) => void
}

export default function DeckSettingsDialog(props: DeckSettingsDialogProps) {
  const [checked, setChecked] = createSignal(props.shuffleInput)

  const handleCheckboxChange = () => {
    const newValue = !checked()
    setChecked(newValue)
    props.setShuffleInput(newValue)
  }

  return (
    <Dialog>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deck Settings</DialogTitle>
          <DialogDescription>
            Configure your deck settings here.
          </DialogDescription>
        </DialogHeader>
        <div class="flex h-[120px] w-[360px] flex-row items-start space-x-2">
          <Checkbox
            class="flex items-start space-x-2"
            checked={checked()}
            onChange={handleCheckboxChange}
          >
            <CheckboxControl />
            <div class="grid gap-1.5 leading-none">
              <CheckboxLabel class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Shuffle
              </CheckboxLabel>
            </div>
          </Checkbox>
        </div>
        <DialogFooter>
          <Dialog.CloseButton>
            <Button>OK</Button>
          </Dialog.CloseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
