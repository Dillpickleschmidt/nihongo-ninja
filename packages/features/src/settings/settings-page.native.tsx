import { Heading, Main, Paragraph } from "@nn/ui";

// Mobile settings arrives with the mobile design pass.
export default function SettingsPage() {
  return (
    <Main className="flex-1 items-center justify-center gap-4 bg-background p-6">
      <Heading level={1} className="text-2xl font-bold">
        Settings
      </Heading>
      <Paragraph className="text-center text-muted-foreground">
        Settings on mobile are coming soon.
      </Paragraph>
    </Main>
  );
}
