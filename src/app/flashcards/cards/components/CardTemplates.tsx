"use client"
import Basic from "../../notes/components/form-components/templates/Basic"
import Standard from "../../notes/components/form-components/templates/Standard"

// If a form is provided, it is assumed that the note is being added/edited
// If a form is not provided, it is assumed that the note is being viewed

type CardTemplatesProps = React.HTMLAttributes<HTMLDivElement> & {
  noteStyle?: string
  noteBox?: any
  form?: any
}

export default function CardTemplates({
  noteStyle,
  noteBox,
  form,
  ...props
}: CardTemplatesProps) {
  return (
    <>
      <div {...props}>
        {noteStyle === "basic" && (
          <Basic
            form={form} // form may not be provided
            question={noteBox && noteBox[0][0]?.question_raw}
            answer={noteBox && noteBox[0][0]?.answers_raw[0]}
          />
        )}
        {noteStyle === "standard" && (
          <Standard
            form={form}
            question={noteBox && noteBox[0][0]?.question_raw}
            answer1={noteBox && noteBox[0][0]?.answers_raw[0]}
            answer2={noteBox && noteBox[0][0]?.answers_raw[1]}
            answer3={noteBox && noteBox[0][0]?.answers_raw[2]}
          />
        )}
      </div>
    </>
  )
}
