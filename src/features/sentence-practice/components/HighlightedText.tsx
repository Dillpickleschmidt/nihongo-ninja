import { Component, JSX } from "solid-js"
import { ErrorRange } from "../types"

interface Props {
  text: string
  errors: ErrorRange[]
  highlightClass: string
}

export const HighlightedText: Component<Props> = (props) => {
  const renderParts = (): JSX.Element[] => {
    const parts: JSX.Element[] = []
    let lastEnd = 0

    props.errors.forEach(({ start, end }) => {
      if (start > lastEnd) {
        parts.push(<span>{props.text.slice(lastEnd, start)}</span>)
      }
      parts.push(
        <span class={`rounded px-0.5 ${props.highlightClass}`}>
          {props.text.slice(start, end)}
        </span>,
      )
      lastEnd = end
    })

    if (lastEnd < props.text.length) {
      parts.push(<span>{props.text.slice(lastEnd)}</span>)
    }

    return parts
  }

  return <>{renderParts()}</>
}
