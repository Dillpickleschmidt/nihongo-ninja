// Login.tsx
export default function Login() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  return (
    <div class="mx-auto max-w-sm p-4">
      <div class="rounded-lg bg-white p-6 shadow-md">
        <div
          id="g_id_onload"
          data-client_id={googleClientId}
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleSignInWithGoogle"
          data-nonce=""
          data-auto_select="true"
          data-itp_support="true"
          data-use_fedcm_for_prompt="true"
        ></div>
        <div
          class="g_id_signin flex justify-center"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
      </div>
    </div>
  )
}
