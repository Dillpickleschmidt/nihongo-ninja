"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { addNoteSchema } from "./addNoteSchema"
import { addNote } from "@/components/fsrs/actions/notes"
import { Form } from "@/components/ui/form"
import SubmitButton from "./form-components/SubmitButton"
import Basic from "./form-components/templates/Basic"
import Standard from "./form-components/templates/Standard"
import JapaneseFont from "@/components/text/JapaneseFont"
import { useNoteContext } from "@/context/NoteContext"
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
  noteStyle?: string
  noteBox?: any
}

export default function AddNoteForm({
  editable = true,
  noteStyle,
  noteBox,
}: AddNoteFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { questionHTML, answer1HTML, answer2HTML, answer3HTML } =
    useNoteContext()
  const [style, setStyle] = useState<string>(noteStyle || "basic") // Default to basic style if noteStyle is not provided
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
      style: style,
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
      <Skeleton setStyle={setStyle} editable={editableState}>
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
                <CardTemplates
                  form={form}
                  noteStyle={style} // Gets existing style for editing existing note
                  noteBox={noteBox} // Gets existing Q/A for editing existing note
                  className="w-full"
                />
              </JapaneseFont>
            </form>
          </Form>
        ) : (
          // For card practice
          noteStyle &&
          noteBox && (
            <CardTemplates
              noteStyle={style}
              noteBox={noteBox}
              className="w-full"
            />
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
