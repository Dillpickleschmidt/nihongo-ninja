"use client"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import Tiptap from "@/components/tiptap/Tiptap"
import { useNoteContext } from "@/context/NoteContext"
import Question from "./Question"

type StandardProps = {
  form?: any
  question?: string
  answer1?: string
  answer2?: string
  answer3?: string
}

export default function Standard({
  form,
  question,
  answer1,
  answer2,
  answer3,
}: StandardProps) {
  const { setAnswer1HTML, setAnswer2HTML, setAnswer3HTML } = useNoteContext()
  return (
    <>
      <div className="mt-16 mb-2">
        {form ? (
          <Question form={form} question={question} /> // Provide existing question for editing existing note
        ) : (
          <Question question={question} />
        )}
      </div>
      <div className="flex min-h-24 justify-center items-center">
        {form ? (
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
        <span> - </span>
        <div className="inline-flex">
          {form ? (
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
                      content={answer2}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <div
              className="min-h-10 px-4 py-3 text-xl"
              dangerouslySetInnerHTML={{ __html: answer2 ?? "" }}
            ></div>
          )}
        </div>
      </div>
      {form ? (
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
                  content={answer3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <div
          className="min-h-10 px-4 py-3 text-xl"
          dangerouslySetInnerHTML={{ __html: answer3 ?? "" }}
        ></div>
      )}
    </>
  )
}
