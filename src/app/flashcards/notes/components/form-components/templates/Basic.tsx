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
}

export default function Basic({ form }: BasicProps) {
  const { setAnswer1HTML } = useNoteContext()
  return (
    <>
      <Question form={form} />
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="answers[0]"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Tiptap
                  getContent={(text) => field.onChange(text)}
                  getRaw={(richText) => {
                    setAnswer1HTML(richText)
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
