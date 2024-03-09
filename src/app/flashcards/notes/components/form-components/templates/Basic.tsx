"use client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Tiptap from "@/components/tiptap/Tiptap"
import Question from "./Question"
import { useCardContext } from "@/context/CardContext"

// Basic note template
// If a form is provided, it is assumed that the note is being added/edited
// If a form is not provided, it is assumed that the note is being viewed

type BasicProps = {
  form?: any
  question?: string
  answer1?: string
}

export default function Basic({ form, question, answer1 }: BasicProps) {
  const { setAnswer1HTML } = useCardContext()
  return (
    <>
      <div className="mt-16 mb-2">
        {form ? (
          <Question form={form} question={question} /> // Provide existing question for editing existing note
        ) : (
          <Question question={question} />
        )}
      </div>
      <div className="space-y-4">
        {form ? (
          <FormField
            control={form.control}
            name="answers[0]"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Answer</FormLabel>
                <FormControl>
                  <Tiptap
                    placeholderText="Answer..."
                    getContent={(text) => field.onChange(text)}
                    getRaw={(richText) => {
                      setAnswer1HTML(richText)
                    }}
                    content={answer1}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <div
            className="min-h-10 px-4 py-3 text-xl"
            dangerouslySetInnerHTML={{ __html: answer1 ?? "" }}
          ></div>
        )}
      </div>
    </>
  )
}
