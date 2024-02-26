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
import Question from "./Question"

type BasicProps = {
  form: any
  setAdditionalAnswers: (richText: any) => void
}

export default function Basic({ form, setAdditionalAnswers }: BasicProps) {
  const { setAnswer1Text } = useNoteContext()
  return (
    <>
      <Question form={form} />
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Tiptap
                  onChange={(richText) => {
                    field.onChange(richText)
                    setAdditionalAnswers((prevAnswers: string[]) => {
                      const updatedAnswers = [...prevAnswers]
                      updatedAnswers[0] = richText
                      return updatedAnswers
                    })
                    setAnswer1Text(richText)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}
