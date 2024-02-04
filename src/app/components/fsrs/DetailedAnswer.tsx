"use client"
import React from "react"
import Video from "./card/Video"
import Audio from "./card/Audio"
import type { SourceNote } from "."

export function DetailedAnswer({
  open,
  note,
}: {
  open: boolean
  note: SourceNote
}) {
  const extend = note ? JSON.parse(note.extend as string) : {}
  const classification = extend.classification as string | undefined
  const part_of_speech = extend.part_of_speech as string | undefined
  const example_sentence = extend.example_sentence as string | undefined
  const example_sentence_translation = extend.example_sentence_translation as
    | string
    | undefined
  const explanation = extend.explanation as string | undefined
  const pronunciation = extend.pronunciation as string | undefined
  const video = extend.video as string | undefined

  return (
    open && (
      <>
        <div className="flex justify-center items-center text-sm opacity-60">
          {classification && <span>{`${classification}`}</span>}
          {classification && part_of_speech && <span>|</span>}
          {part_of_speech && <span>{`${part_of_speech}`}</span>}
        </div>
        <div className="pt-4 mx-auto max-w-5xl px-4">
          <div>Meaning:{note?.answer}</div>
          {example_sentence && <div>Example sentence:{example_sentence}</div>}
          {example_sentence_translation && (
            <div>
              Example sentence translation:{example_sentence_translation}
            </div>
          )}
          {explanation && <div>Explanation:{explanation}</div>}
          {pronunciation && <Audio url={pronunciation} />}
          {video && <Video url={video} />}
        </div>
      </>
    )
  )
}
