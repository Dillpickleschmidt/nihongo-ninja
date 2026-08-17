import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { authClient } from "./client";

// Email/password sign-in and sign-up. Social providers are not configured;
// this mirrors the source app.
export default function AuthPage() {
  const queryClient = useQueryClient();
  const ensureProfile = useConvexMutation(api.api.profiles.ensureProfile);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const result = await authClient.signIn.email({ email, password });
        if (result.error) throw new Error(result.error.message ?? "Sign in failed");
      } else {
        const result = await authClient.signUp.email({ name, email, password });
        if (result.error) throw new Error(result.error.message ?? "Sign up failed");
        // Create the default profile after signup.
        await ensureProfile({});
      }

      await queryClient.invalidateQueries();
      // Full navigation lets the server render with the new session cookie.
      window.location.assign("/learn");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border/70 bg-card/80 p-8 shadow-xl backdrop-blur-md md:p-10">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isLogin
                ? "Sign in to continue to your account"
                : "Get started with your free account"}
            </p>
          </div>

          <form onSubmit={(e) => void handleSubmit(e)} className="space-y-5">
            {isLogin ? null : (
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/80">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                  required={!isLogin}
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground transition-all duration-200 outline-none placeholder:text-muted-foreground/60 focus:border-dynamic-accent focus:ring-2 focus:ring-dynamic-accent/40"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/80">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                required
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground transition-all duration-200 outline-none placeholder:text-muted-foreground/60 focus:border-dynamic-accent focus:ring-2 focus:ring-dynamic-accent/40"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-foreground/80"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                required
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground transition-all duration-200 outline-none placeholder:text-muted-foreground/60 focus:border-dynamic-accent focus:ring-2 focus:ring-dynamic-accent/40"
                placeholder="••••••••"
              />
            </div>

            {error ? (
              <div
                role="alert"
                className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer rounded-lg bg-dynamic-accent/90 px-4 py-3 font-semibold text-black transition-all duration-200 hover:bg-dynamic-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Processing…" : isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {isLogin ? (
                <>
                  Don&apos;t have an account?{" "}
                  <span className="text-dynamic-accent brightness-125 hover:underline">
                    Sign up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span className="text-dynamic-accent brightness-125 hover:underline">
                    Sign in
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
