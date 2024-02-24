"use client"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Tiptap from "@/components/tiptap/Tiptap"

type StandardProps = {
  form: any
  setAdditionalAnswers: (richText: any) => void
  setAnswer1Text: (richText: any) => void
  setAnswer2Text: (richText: any) => void
  setDescriptionText: (richText: any) => void
}

export default function Standard({
  form,
  setAdditionalAnswers,
  setAnswer1Text,
  setAnswer2Text,
  setDescriptionText,
}: StandardProps) {
  return (
    <>
      <div className="mb-2">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer 1</FormLabel>
              <FormControl>
                <Tiptap
                  onChange={field.onChange}
                  updateRichText={(richText) => {
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
      <div className="mb-2">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer 2</FormLabel>
              <FormControl>
                <Tiptap
                  onChange={field.onChange}
                  updateRichText={(richText) => {
                    setAdditionalAnswers((prevAnswers: string[]) => {
                      const updatedAnswers = [...prevAnswers]
                      updatedAnswers[1] = richText
                      return updatedAnswers
                    })
                    setAnswer2Text(richText)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mb-2">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer 3</FormLabel>
              <FormControl>
                <Tiptap
                  onChange={field.onChange}
                  updateRichText={(richText) => {
                    setAdditionalAnswers((prevAnswers: string[]) => {
                      const updatedAnswers = [...prevAnswers]
                      updatedAnswers[2] = richText
                      return updatedAnswers
                    })
                    setDescriptionText(richText)
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
