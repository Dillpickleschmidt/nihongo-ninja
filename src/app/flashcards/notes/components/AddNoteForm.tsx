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
import Question from "./form-components/templates/Question"
import Button from "@/components/Button"
import JapaneseFont from "@/components/text/JapaneseFont"
import { useNoteContext } from "@/context/NoteContext"
import cleanHTML from "@/util/domPurify"

type NoteType = z.infer<typeof addNoteSchema>
type AddNoteType = NoteType & { question_raw: string; answers_raw: string[] }

export default function AddNoteForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { questionHTML, answer1HTML, answer2HTML, answer3HTML } =
    useNoteContext()
  const [style, setStyle] = useState("basic")

  const form = useForm<AddNoteType>({
    resolver: zodResolver(addNoteSchema),
    mode: "onSubmit",
    defaultValues: {
      question: "",
      answers: [""],
    },
  })

  // handle form submission
  async function action(data: AddNoteType) {
    setIsLoading(true)
    const answers = [answer1HTML, answer2HTML, answer3HTML]
      .map(cleanHTML)
      .filter(Boolean)
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
      <label className="text-base flex items-center cursor-pointer origin-bottom-left hover:scale-[102%] ease-in duration-100 select-none">
        <span className="">Preset</span>
        <input
          type="checkbox"
          name="advancedAnswer"
          onClick={() => {
            setStyle("basic" ? "standard" : "basic")
          }}
          className="mx-2 text-red-400 rounded ring-offset-gray-800 bg-gray-700 border-gray-600 cursor-pointer"
          style={{ boxShadow: "none" }}
        />
      </label>
      <div className="2xl:w-[50%] xl:w-[75%]">
        <div className="min-h-[500px] px-12 py-10 mt-12 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed flex flex-col justify-between items-center">
          <div className="w-full flex flex-col justify-between mb-2 mx-16">
            <Form {...form}>
              <form
                id="addNoteForm"
                onSubmit={form.handleSubmit((data) => action(data))}
              >
                <JapaneseFont>
                  {style === "basic" && <Basic form={form} />}
                  {style === "standard" && <Standard form={form} />}
                </JapaneseFont>
              </form>
            </Form>
          </div>
          <div className="flex flex-col gap-6 mt-2">
            <div className="flex justify-center gap-6">
              <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl underline decoration-1 underline-offset-4 bg-sky-400">
                30
              </div>
              <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-red-500">
                4
              </div>
              <div className="w-12 flex justify-center text-sm font-light py-2 px-4 rounded-2xl decoration-1 underline-offset-4 bg-[#42c672]">
                1
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Button
                variant="card"
                className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-red-500"
              >
                <div className="flex flex-row items-center">
                  Again
                  <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
                    1
                  </span>
                </div>
              </Button>
              <Button
                variant="card"
                className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-yellow-400"
              >
                Hard
                <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-55 rounded-md inline-flex items-center justify-center text-sm">
                  2
                </span>
              </Button>
              <Button
                variant="card"
                className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-sky-400"
              >
                Good
                <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-45 rounded-md inline-flex items-center justify-center text-sm">
                  3
                </span>
              </Button>
              <Button
                variant="card"
                className="text-base py-3 px-5 shadow-md rounded-lg text-black font-semibold bg-[#42c672]"
              >
                Easy
                <span className="ml-2 w-[21px] h-[21px] bg-white bg-opacity-40 rounded-md inline-flex items-center justify-center text-sm">
                  4
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full my-8">
          <SubmitButton isLoading={isLoading} />
        </div>
      </div>
    </>
  )
}
