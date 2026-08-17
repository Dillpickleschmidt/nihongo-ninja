import { Heading, Main, Paragraph } from "@nn/ui";

// Mobile sign-in arrives with the Better Auth expo plugin.
export default function AuthPage() {
  return (
    <Main className="flex-1 items-center justify-center gap-4 bg-background p-6">
      <Heading level={1} className="text-2xl font-bold">
        Sign In
      </Heading>
      <Paragraph className="text-center text-muted-foreground">
        Sign-in on mobile is coming soon.
      </Paragraph>
    </Main>
  );
}
