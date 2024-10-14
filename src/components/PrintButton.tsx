import { Button } from "./ui/button"
import { cn } from "@/libs/cn"
import Printer from "lucide-solid/icons/printer"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

type PrintButtonProps = {
  ref: () => HTMLElement | undefined
  class?: string
  buttonSize?: number
  zoom?: boolean
  scale?: number
}

export default function PrintButton(props: PrintButtonProps) {
  // Apply print-specific styles and replace form elements with editable divs
  function prepareForPrint(doc: Document) {
    // Apply print styles
    doc.querySelectorAll('[class*="print:"]').forEach((el) => {
      el.className
        .split(" ")
        .filter((cls) => cls.startsWith("print:"))
        .forEach((cls) => el.classList.add(cls.replace("print:", "")))
    })

    // Replace form elements
    const replaceWithDiv = (el: HTMLInputElement | HTMLTextAreaElement) => {
      const div = document.createElement("div")
      div.textContent = el.value
      div.className = el.className
      div.contentEditable = "true"
      div.style.cssText = `
        display: inline-block;
        width: ${el.style.width || "100%"};
        min-width: ${el.style.minWidth || "auto"};
        ${
          el.tagName.toLowerCase() === "textarea"
            ? `
          white-space: pre-wrap;
          overflow-wrap: break-word;
          height: ${el.style.height || "auto"};
          min-height: ${(el as HTMLTextAreaElement).rows ? `${(el as HTMLTextAreaElement).rows * 1.2}em` : "3em"};
        `
            : ""
        }
      `
      el.parentNode?.replaceChild(div, el)
    }

    ;[
      ...doc.getElementsByTagName("input"),
      ...doc.getElementsByTagName("textarea"),
    ].forEach(replaceWithDiv)
  }

  function generatePdf() {
    const input = props.ref()
    if (!input) {
      console.error("Content element not found")
      return
    }

    html2canvas(input, {
      scale: props.scale || 4.17,
      onclone: prepareForPrint,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0)
      const [pageWidth, pageHeight] = [2480, 3508] // A4 dimensions at 300 DPI
      const pdf = new jsPDF("p", "px", [pageHeight, pageWidth])

      // Calculate scaling to fit page width
      const scale = pageWidth / canvas.width
      const scaledHeight = canvas.height * scale

      let heightLeft = scaledHeight
      let position = 0
      let page = 1

      // Add pages until all content is included
      while (heightLeft > 0) {
        pdf.addImage(imgData, "JPEG", 0, position, pageWidth, scaledHeight)
        heightLeft -= pageHeight
        position -= pageHeight

        if (heightLeft > 0) {
          pdf.addPage()
          page++
        }
      }

      // Save PDF with document title as filename
      const filename = `${document.title || "download"}.pdf`
      pdf.save(filename)
    })
  }

  return (
    <Button
      title="Print"
      onClick={generatePdf}
      variant="ghost"
      class={cn("!p-2 print:hidden", props.class)}
    >
      <Printer size={props.buttonSize || 26} class="opacity-25" />
    </Button>
  )
}
