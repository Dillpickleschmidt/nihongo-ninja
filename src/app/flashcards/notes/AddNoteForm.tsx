"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { addNoteSchema } from "./addNoteSchema"
import { addNote } from "@/components/fsrs/actions/notes"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Tiptap from "@/components/tiptap/Tiptap"
import { SubmitButton } from "./SubmitButton"
import Basic from "./templates/Basic"
import Standard from "./templates/Standard"

type AddNoteType = z.infer<typeof addNoteSchema>

type addNoteFormProps = {
  setQuestionText: (richText: string) => void
  setAnswer1Text: (richText: string) => void
  setAnswer2Text: (richText: string) => void
  setAnswer3Text: (richText: string) => void
  setDescriptionText: (richText: string) => void
}

export default function AddNoteForm({
  setQuestionText,
  setAnswer1Text,
  setAnswer2Text,
  setAnswer3Text,
  setDescriptionText,
}: addNoteFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showAdvancedAnswer, setShowAdvancedAnswer] = useState(false)
  const [additionalAnswers, setAdditionalAnswers] = useState<string[]>([])

  // useForm hook
  const form = useForm<AddNoteType>({
    resolver: zodResolver(addNoteSchema),
    mode: "onChange",
    defaultValues: {
      question: "",
      answer: "",
    },
  })

  // handle form submission
  async function action(data: AddNoteType) {
    setIsLoading(true)
    const result = await addNote({
      ...data,
      answer: additionalAnswers.join(""),
    }) // Result would return a validation error if there is one.
    if (result) {
      console.log(result)
    }
    setIsLoading(false)
  }

  return (
    <>
      <label className="text-base flex items-center cursor-pointer origin-bottom-left hover:scale-[102%] ease-in duration-100 select-none">
        <span className="">Preset</span>
        <input
          type="checkbox"
          name="advancedAnswer"
          onClick={() => setShowAdvancedAnswer(!showAdvancedAnswer)}
          className="mx-2 text-red-400 rounded ring-offset-gray-800 bg-gray-700 border-gray-600 cursor-pointer"
          style={{ boxShadow: "none" }}
        />
      </label>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => action(data))}>
          <div className="mb-2">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Tiptap
                      onChange={field.onChange}
                      updateRichText={(richText) => setQuestionText(richText)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {!showAdvancedAnswer && (
            <Basic
              form={form}
              setAdditionalAnswers={setAdditionalAnswers}
              setAnswer1Text={setAnswer1Text}
            />
          )}
          {showAdvancedAnswer && (
            <Standard
              form={form}
              setAdditionalAnswers={setAdditionalAnswers}
              setAnswer1Text={setAnswer1Text}
              setAnswer2Text={setAnswer2Text}
              setDescriptionText={setDescriptionText}
            />
          )}
          <div className="mt-8">
            <SubmitButton isLoading={isLoading} />
          </div>
        </form>
      </Form>
    </>
  )
}
