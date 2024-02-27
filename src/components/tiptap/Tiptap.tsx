"use client"
import { EditorContent, useEditor } from "@tiptap/react"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"
import Bold from "@tiptap/extension-bold"
import Italic from "@tiptap/extension-italic"
import Underline from "@tiptap/extension-underline"
import Strike from "@tiptap/extension-strike"
import Heading from "@tiptap/extension-heading"
import { Color } from "@tiptap/extension-color"
import Placeholder from "@tiptap/extension-placeholder"
import TextAlign from "@tiptap/extension-text-align"
import { TextStyleExtended } from "./textExtended"
// import HorizontalRule from "@tiptap/extension-horizontal-rule"
import Toolbar from "./Toolbar"
import Button from "../Button"

type TiptapProps = {
  getRaw: (richText: string) => void
  getContent: (richText: string) => void
  placeholderText?: string
  disabled?: boolean
  align?: "left" | "center" | "right"
  fontSize?: string
  fontWeight?: string
}

export default function Tiptap({
  getRaw,
  getContent,
  placeholderText,
  disabled = false,
  align,
  fontSize,
  fontWeight,
}: TiptapProps) {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Strike,
      Heading.configure({
        HTMLAttributes: {
          class: "text-center",
        },
      }),
      Color,
      Placeholder.configure({
        placeholder: placeholderText ? placeholderText : "Write something...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyleExtended,
    ],
    content: "",
    editable: !disabled,
    editorProps: {
      attributes: {
        class:
          "min-h-10 w-full rounded-md px-4 py-3 text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-[#333333] disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      getRaw(editor.getHTML())
      getContent(editor.getText())
    },
    onCreate({ editor }) {
      align && editor.chain().focus().setTextAlign(align).run()
      fontSize && editor.commands.setFontSize(fontSize)
      fontWeight && editor.commands.setFontWeight(fontWeight)
      // editor.getText
    },
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}
