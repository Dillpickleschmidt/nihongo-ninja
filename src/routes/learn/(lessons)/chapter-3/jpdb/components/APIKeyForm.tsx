import { TextInput } from "@/components/TextInput"
import { custom, Field, Form, required } from "@modular-forms/solid"
import { createForm } from "@modular-forms/solid"
import { action, useAction } from "@solidjs/router"
import { toast } from "solid-sonner"

type APIKeyForm = {
  apiKey: string
}

const addAPIKey = action(async (formData: APIKeyForm) => {
  "use server"

  await new Promise((resolve, reject) => setTimeout(resolve, 2000))
  console.log(formData.apiKey + " added")
})

export default function APIKeyForm() {
  const [, { Form, Field }] = createForm<APIKeyForm>()

  const submitAPIKey = useAction(addAPIKey)

  function handleSubmit(form: APIKeyForm) {
    const toastId = toast.promise(submitAPIKey(form), {
      loading: "Loading...",
      success: (data) => {
        return `API key has been added`
      },
      error: "Error",
      action: {
        label: "Dismiss",
        onClick: () => {
          toast.dismiss(toastId)
        },
      },
    })
    return toastId
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Field
          name="apiKey"
          validate={[
            required("Please enter JPDB API key."),
            // arg 1: regex (t/f match), arg 2: error message
            custom(
              (value) => /^[0-9a-f]{32}$/i.test(value ?? ""),
              "Invalid API key format.",
            ),
            // email("The email address is badly formatted."),
          ]}
        >
          {(field, props) => (
            <TextInput
              {...props}
              type="text"
              label="API Key"
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>
      </Form>
    </div>
  )
}
