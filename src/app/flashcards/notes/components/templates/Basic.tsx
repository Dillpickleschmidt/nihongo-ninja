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

type BasicProps = {
  form: any
  setAdditionalAnswers: (richText: any) => void
  setAnswer1Text: (richText: any) => void
}

export default function Basic({
  form,
  setAdditionalAnswers,
  setAnswer1Text,
}: BasicProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="answer"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Answer</FormLabel>
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
  )
}
