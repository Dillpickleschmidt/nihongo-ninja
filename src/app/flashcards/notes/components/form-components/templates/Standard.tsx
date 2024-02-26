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
  setAdditionalAnswers: (richText: any) => void
}

export default function Standard({
  form,
  setAdditionalAnswers,
}: StandardProps) {
  const { setAnswer1Text, setAnswer2Text, setAnswer3Text } = useNoteContext()
  return (
    <>
      <Question form={form} />
      <div className="flex min-h-24 justify-center items-center">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
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
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Tiptap
                    onChange={(richText) => {
                      field.onChange(richText)
                      setAdditionalAnswers((prevAnswers: string[]) => {
                        const updatedAnswers = [...prevAnswers]
                        updatedAnswers[1] = richText
                        return updatedAnswers
                      })
                      setAnswer2Text(richText)
                    }}
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
        name="answer"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Tiptap
                onChange={(richText) => {
                  field.onChange(richText)
                  setAdditionalAnswers((prevAnswers: string[]) => {
                    const updatedAnswers = [...prevAnswers]
                    updatedAnswers[2] = richText
                    return updatedAnswers
                  })
                  setAnswer3Text(richText)
                }}
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
