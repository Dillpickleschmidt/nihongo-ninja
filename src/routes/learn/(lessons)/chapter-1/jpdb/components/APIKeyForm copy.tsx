// import { createForm } from "@modular-forms/solid"
// import { createSignal } from "solid-js"
// import { z } from "zod"
// import { toast } from "sonner"
// import { addAPIKey } from "@/features/jpdb/actions/actions"
// import FormButton from "./FormButton"

// const FormSchema = z.object({
//   apiKey: z.string().min(1, "API Key is required"),
// })

// type FormType = z.infer<typeof FormSchema>

// export default function APIKeyForm() {
//   const [form, { Form, Field }] = createForm<FormType>({
//     validate: FormSchema,
//     initialValues: {
//       apiKey: "",
//     },
//   })

//   const [isSubmitting, setIsSubmitting] = createSignal(false)

//   const onSubmit = async (data: FormType) => {
//     setIsSubmitting(true)
//     try {
//       const formData = new FormData()
//       formData.append("apiKey", data.apiKey)
//       const response = await addAPIKey(formData)
//       if (!response) {
//         toast.error("User must be logged in to add API key.", {
//           position: "bottom-center",
//         })
//       } else {
//         toast.success("API key added successfully!", {
//           position: "bottom-center",
//         })
//         console.log(response)
//       }
//     } catch (error) {
//       toast.error("Failed to add API key.", {
//         position: "bottom-center",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Form onSubmit={onSubmit} class="w-2/3 space-y-6">
//       <Field name="apiKey">
//         {(field, props) => (
//           <div>
//             <label for={props.name}>API Key</label>
//             <input
//               {...props}
//               type="text"
//               placeholder="api key"
//               class="w-full rounded border p-2 text-center font-normal"
//               value={field.value}
//               onInput={(e) => field.setValue(e.currentTarget.value)}
//               onBlur={() => field.validate()}
//             />
//             <p class="text-sm text-gray-500">Get it from jpdb settings.</p>
//             {field.error && <p class="text-red-500">{field.error}</p>}
//           </div>
//         )}
//       </Field>
//       <FormButton disabled={isSubmitting()} />
//     </Form>
//   )
// }
