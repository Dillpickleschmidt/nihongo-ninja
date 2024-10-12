import { z } from "zod"

export const FormSchema = z.object({
  apiKey: z.string().refine((value) => /^[a-f0-9]{32}$/.test(value), {
    message:
      "Please ensure your API Key is exactly 32 characters long and contains only lowercase letters (a-f) and numbers (0-9)",
  }),
})
