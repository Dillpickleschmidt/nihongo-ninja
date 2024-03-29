"use client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Tiptap from "@/components/tiptap/Tiptap"
import { useCardContext } from "@/context/CardContext"

// If a form is provided, it is assumed that the note is being added/edited
// If a form is not provided, it is assumed that the note is being viewed

type QuestionProps = {
  form?: any
  question?: string
}

export default function Question({ form, question }: QuestionProps) {
  const { setQuestionHTML } = useCardContext()
  return (
    <div className="pb-5 px-12 border-b border-white border-opacity-20 text-7xl">
      {form ? (
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Tiptap
                  getContent={(text) => {
                    field.onChange(text)
                  }}
                  getRaw={(richText) => {
                    setQuestionHTML(richText)
                  }}
                  placeholderText="Question..."
                  align="center"
                  fontSize="6rem"
                  content={question}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <div
          className="min-h-10 px-4 py-3 text-xl"
          dangerouslySetInnerHTML={{ __html: question ?? "" }}
        ></div>
      )}
    </div>
  )
}
