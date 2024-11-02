import { Component } from "solid-js"
import { Dynamic } from "solid-js/web"
import { convertFuriganaToRubyHtml } from "@/util/vocabDataTransformer"

interface RubyTextProps {
  segments: string[]
  showFurigana: boolean
  highlightClass?: string
}

export const RubyText: Component<RubyTextProps> = (props) => {
  return (
    <Dynamic
      component="span"
      innerHTML={
        props.showFurigana
          ? convertFuriganaToRubyHtml(props.segments).toString()
          : props.segments
              .map((s) => s.replace(/\[.*?\]/g, ""))
              .join("")
              .toString()
      }
    />
  )
}
