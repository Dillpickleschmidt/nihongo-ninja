"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { addNoteSchema } from "./addNoteSchema"
import { addNote } from "@/components/fsrs/actions/notes"
import { Form } from "@/components/ui/form"
import SubmitButton from "./form-components/SubmitButton"
import JapaneseFont from "@/components/text/JapaneseFont"
import { useCardContext } from "@/context/CardContext"
import cleanHTML from "@/util/domPurify"
import Skeleton from "./Skeleton"
import CardTemplates from "../../cards/components/CardTemplates"
import Button from "@/components/Button"

/**
 * This file provides a form which calls a server action which calls `addNote`.
 *
 * `addNote` is used to add a new note or update an existing one in the database.
 * It validates the input and then interacts with the database to either update an existing note or
 * create a new one.
 *
 * If `editableState` is true, the form will be editable.
 * If `editableState` is false, it will be set to read-only for faster previewing.
 */

type NoteType = z.infer<typeof addNoteSchema>
type AddNoteType = NoteType & { question_raw: string; answers_raw: string[] }

type AddNoteFormProps = {
  editable?: boolean
}

export default function AddNoteForm({ editable = true }: AddNoteFormProps) {
  const { noteBox, currentStyle, setCurrentStyle } = useCardContext()
  const [isLoading, setIsLoading] = useState(false)
  const { questionHTML, answer1HTML, answer2HTML, answer3HTML } =
    useCardContext()
  const [editableState, setEditableState] = useState<boolean>(editable)

  const form = useForm<AddNoteType>({
    resolver: zodResolver(addNoteSchema),
    mode: "onSubmit",
    defaultValues: {
      question: "",
      answers: [],
    },
  })

  // handle form submission
  async function action(data: AddNoteType) {
    setIsLoading(true)
    const answers = [answer1HTML, answer2HTML, answer3HTML].map(cleanHTML)
    const result = await addNote({
      ...data,
      question_raw: cleanHTML(questionHTML),
      answers_raw: answers,
      style: currentStyle,
    }) // Result would return a validation error if there is one.
    if (result) {
      console.log(result)
    }
    setIsLoading(false)
  }

  return (
    <>
      {!editableState && (
        <Button onClick={() => setEditableState(!editableState)}>Edit</Button>
      )}
      <Skeleton setStyle={setCurrentStyle} editable={editableState}>
        {editableState ? (
          // For note creation/editing
          <Form {...form}>
            <form
              id="addNoteForm"
              onSubmit={form.handleSubmit((data) => action(data))}
              className="w-full"
            >
              <JapaneseFont>
                {/* If the note already has existing values, use them and edit note */}
                <CardTemplates form={form} />
              </JapaneseFont>
            </form>
          </Form>
        ) : (
          // For card practice
          currentStyle &&
          noteBox && (
            <div className="w-full">
              <CardTemplates />
            </div>
          )
        )}
      </Skeleton>
      {editableState && (
        <div className="w-full my-8">
          <SubmitButton isLoading={isLoading} />
        </div>
      )}
    </>
  )
}
