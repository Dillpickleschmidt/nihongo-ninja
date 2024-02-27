"use client"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Tiptap from "@/components/tiptap/Tiptap"
import { useNoteContext } from "@/context/NoteContext"
import Question from "./Question"

type StandardProps = {
  form: any
}

export default function Standard({ form }: StandardProps) {
  const { setAnswer1HTML, setAnswer2HTML, setAnswer3HTML } = useNoteContext()
  return (
    <>
      <Question form={form} />
      <div className="flex min-h-24 justify-center items-center">
        <FormField
          control={form.control}
          name="answers[0]"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Tiptap
                  getContent={(text) => {
                    field.onChange(text)
                  }}
                  getRaw={(richText) => setAnswer1HTML(richText)}
                  placeholderText="Answer 1..."
                  fontSize="text-2xl"
                  fontWeight="font-semibold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <span> - </span>
        <div className="inline-flex">
          <FormField
            control={form.control}
            name="answers[1]"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Tiptap
                    getContent={(text) => {
                      field.onChange(text)
                    }}
                    getRaw={(richText) => setAnswer2HTML(richText)}
                    placeholderText="Answer 2..."
                    fontSize="text-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <FormField
        control={form.control}
        name="answers[2]"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Tiptap
                getContent={(text) => {
                  field.onChange(text)
                }}
                getRaw={(richText) => setAnswer3HTML(richText)}
                placeholderText="Description..."
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
