import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import ConvertToHiragana from "@/app/components/convert-to-hiragana"

export default function C2Lesson1() {
  return (
    <Dialog>
      <ConvertToHiragana inputText="私" className="text-2xl" />
    </Dialog>
  )
}
