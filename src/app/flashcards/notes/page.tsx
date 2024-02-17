"use client"

import { addNote } from "@/components/fsrs/actions/notes"
import { SubmitButton } from "./SubmitButton"
import { useRef, useState } from "react"
import { ZodFormattedError, z } from "zod"
// import { getUserEmail } from "@/lib/supabase/user-session/localUserSession"
import { addNoteSchema } from "./addNoteSchema"

type AddNoteType = z.infer<typeof addNoteSchema>

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null)

  const [validationError, setValidationError] =
    useState<ZodFormattedError<AddNoteType> | null>(null)

  // handle form submission
  async function action(data: FormData) {
    const result = await addNote(data) // Result would return a validation error if there is one.
    if (result?.error) {
      setValidationError(result.error)
    } else {
      setValidationError(null)
      // reset form
      formRef.current?.reset()
    }
  }

  return (
    <div className="w-full flex justify-center text-xl">
      <div className="mt-48 w-[740px]">
        <h1 className="text-5xl font-medium text-center mb-8">Add a note</h1>
        <form action={action} ref={formRef}>
          {/* <h2 className="mb-4">Add a flashcard to {user_email}'s deck.</h2> */}
          <label className="text-[1.35rem] font-medium">Question</label>
          <input
            name="question"
            className="mb-2 mt-[.125rem] w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          {validationError?.question && (
            <p className="text-base text-red-400 mb-2">
              {validationError.question._errors.join(", ")}
            </p>
          )}
          <div className="w-full flex justify-between items-center">
            <label className="text-[1.35rem] font-medium">Answer</label>
            <label className="text-base flex items-center cursor-pointer origin-bottom-right hover:scale-[102%] ease-in duration-100 select-none">
              <span className="hover:underline">Advanced Answer</span>
              <input
                type="checkbox"
                name="advancedAnswer"
                className="mx-2 text-red-400 rounded ring-offset-gray-800 bg-gray-700 border-gray-600 cursor-pointer"
                style={{ boxShadow: "none" }}
              />
            </label>
          </div>
          <input
            name="answer"
            className="mb-2 mt-[.125rem] w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          {validationError?.answer && (
            <p className="text-base text-red-400 mb-2">
              {validationError.answer._errors.join(", ")}
            </p>
          )}
          <div className="mt-2">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  )
}
