"use client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Tiptap from "@/components/tiptap/Tiptap"
import { useNoteContext } from "@/context/NoteContext"

type QuestionProps = {
  form: any
}

export default function Question({ form }: QuestionProps) {
  const { setQuestionHTML } = useNoteContext()
  return (
    <div className="mt-16 mb-2">
      <FormField
        control={form.control}
        name="question"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="pb-5 px-12 border-b border-white border-opacity-20 text-7xl">
                <Tiptap
                  getContent={(text) => {
                    field.onChange(text)
                  }}
                  getRaw={(richText) => {
                    setQuestionHTML(richText)
                  }}
                  placeholderText="Question..."
                  align="center"
                  fontSize="text-8xl"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
