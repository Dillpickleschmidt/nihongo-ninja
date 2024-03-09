"use client"
import { useCardContext } from "@/context/CardContext"
import Basic from "../../notes/components/form-components/templates/Basic"
import Standard from "../../notes/components/form-components/templates/Standard"

// If a form is provided, it is assumed that the note is being added/edited
// If a form is not provided, it is assumed that the note is being viewed

type CardTemplatesProps = React.HTMLAttributes<HTMLDivElement> & {
  noteStyle?: string
  noteBox?: any
  form?: any
}

export default function CardTemplates({ form, ...props }: CardTemplatesProps) {
  const { noteBox, currentStyle } = useCardContext()

  switch (currentStyle) {
    case "basic":
      return (
        <Basic
          form={form} // form may not be provided
          question={noteBox && noteBox[0][0]?.question_raw}
          answer1={noteBox && noteBox[0][0]?.answers_raw[0]}
        />
      )
    case "standard":
      return (
        <Standard
          form={form}
          question={noteBox && noteBox[0][0]?.question_raw}
          answer1={noteBox && noteBox[0][0]?.answers_raw[0]}
          answer2={noteBox && noteBox[0][0]?.answers_raw[1]}
          answer3={noteBox && noteBox[0][0]?.answers_raw[2]}
        />
      )
  }
}
