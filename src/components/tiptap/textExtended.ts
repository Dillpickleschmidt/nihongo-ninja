import TextStyle from "@tiptap/extension-text-style"

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (tailwindClass: string) => ReturnType
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType
    }
    fontWeight: {
      /**
       * Set the font weight
       */
      setFontWeight: (tailwindClass: string) => ReturnType
      /**
       * Unset the font weight
       */
      unsetFontWeight: () => ReturnType
    }
  }
}

export const TextStyleExtended = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (element) => element.className,
        renderHTML: (attributes) => {
          if (!attributes["fontSize"]) {
            return {}
          }
          return {
            class: attributes["fontSize"],
          }
        },
      },
      fontWeight: {
        default: null,
        parseHTML: (element) => element.className,
        renderHTML: (attributes) => {
          if (!attributes["fontWeight"]) {
            return {}
          }
          return {
            class: attributes["fontWeight"],
          }
        },
      },
    }
  },

  addCommands() {
    return {
      ...this.parent?.(),
      setFontSize:
        (tailwindClass) =>
        ({ commands }) => {
          return commands.setMark(this.name, { fontSize: tailwindClass })
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark(this.name, { fontSize: null })
            .removeEmptyTextStyle()
            .run()
        },
      setFontWeight:
        (tailwindClass) =>
        ({ commands }) => {
          return commands.setMark(this.name, { fontWeight: tailwindClass })
        },
      unsetFontWeight:
        () =>
        ({ chain }) => {
          return chain()
            .setMark(this.name, { fontWeight: null })
            .removeEmptyTextStyle()
            .run()
        },
    }
  },
})
