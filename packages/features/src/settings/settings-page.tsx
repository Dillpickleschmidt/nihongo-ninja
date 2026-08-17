import { ThemeToggle } from "@nn/ui";

import { authClient } from "../auth/client";

// Web settings page. The source app's billing, anime-services, and SRS
// sections arrive with their domains (billing, discover, import).
export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-24 pb-32">
      <h1 className="mb-8 text-2xl font-bold text-foreground">Settings</h1>

      <div className="space-y-10">
        <AccountSection />
        <AppearanceSection />
      </div>
    </main>
  );
}

function AccountSection() {
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.assign("/");
  };

  return (
    <section>
      <h2 className="mb-4 text-lg font-medium text-foreground">Account</h2>

      {isPending ? (
        <div className="h-16 animate-pulse rounded-xl bg-muted/50" />
      ) : session ? (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/60 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{session.user.name}</p>
            <p className="truncate text-xs text-muted-foreground">{session.user.email}</p>
          </div>
          <button
            type="button"
            onClick={() => void handleSignOut()}
            className="shrink-0 cursor-pointer rounded-md border border-border px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/60 px-4 py-3">
          <p className="text-sm text-muted-foreground">You are not signed in.</p>
          <a
            href="/auth"
            className="shrink-0 rounded-md bg-dynamic-accent/90 px-3 py-1.5 text-sm font-medium text-black transition-all hover:brightness-110"
          >
            Sign In
          </a>
        </div>
      )}
    </section>
  );
}

function AppearanceSection() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-medium text-foreground">Appearance</h2>
      <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/60 px-4 py-3">
        <p className="text-sm text-foreground/80">Theme</p>
        <ThemeToggle />
      </div>
    </section>
  );
}
