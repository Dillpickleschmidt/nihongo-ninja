import { Heading, Main, Paragraph } from "@nn/ui";

// Mobile dashboard arrives with the mobile design pass.
export default function DashboardPage() {
  return (
    <Main className="flex-1 items-center justify-center gap-4 bg-background p-6">
      <Heading level={1} className="text-2xl font-bold">
        Today
      </Heading>
      <Paragraph className="text-center text-muted-foreground">
        The mobile dashboard is coming soon.
      </Paragraph>
    </Main>
  );
}
