import { Heading, Main, Paragraph } from "@nn/ui";

// Mobile learn hub placeholder — the mobile hub layout is its own design
// pass after the web hub settles.
export default function LearnPage() {
  return (
    <Main className="flex-1 items-center justify-center gap-4 bg-background p-6">
      <Heading level={1} className="text-2xl font-bold">
        Learn
      </Heading>
      <Paragraph className="text-center text-muted-foreground">
        The mobile learning path is coming soon.
      </Paragraph>
    </Main>
  );
}
