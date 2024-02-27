import DOMPurify from "dompurify"

export default function cleanHTML(HTML: string) {
  return DOMPurify.sanitize(HTML)
}
