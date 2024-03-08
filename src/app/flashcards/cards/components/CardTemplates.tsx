"use client"
import Basic from "../../notes/components/form-components/templates/Basic"
import Standard from "../../notes/components/form-components/templates/Standard"

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
      {noteStyle && noteBox ? (
        <div {...props}>
          {noteStyle === "basic" && (
            <Basic
              form={form} // form may not be provided
              question={noteBox[0][0].question_raw}
              answer={noteBox[0][0].answers_raw[0]}
            />
          )}
          {noteStyle === "standard" && (
            <Standard
              form={form}
              question={noteBox[0][0].question_raw}
              answer1={noteBox[0][0].answers_raw[0]}
              answer2={noteBox[0][0].answers_raw[1]}
              answer3={noteBox[0][0].answers_raw[2]}
            />
          )}
        </div>
      ) : (
        <div {...props}>
          {noteStyle === "basic" && <Basic form={form} />}
          {noteStyle === "standard" && <Standard form={form} />}
        </div>
      )}
    </>
  )
}
