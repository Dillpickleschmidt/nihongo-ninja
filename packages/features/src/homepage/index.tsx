import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { Link } from "@nn/router";
import { Button, Heading, Main, Paragraph, ThemeToggle } from "@nn/ui";
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";

export default function HomePage() {
  const { data: health } = useQuery(convexQuery(api.health.ping, {}));

  return (
    <Main className="flex-1 items-center justify-center gap-6 bg-background p-6">
      <ThemeToggle />
      <Heading level={1} className="text-4xl font-bold">
        Nihongo Ninja
      </Heading>
      <Paragraph className="text-muted-foreground">
        {health
          ? `Convex connected — server time ${new Date(health.serverTime).toLocaleTimeString()}`
          : "Connecting to Convex…"}
      </Paragraph>
      <View className="flex-row gap-4">
        <Link href="/lessons/greetings">
          <Button variant="secondary">Greetings lesson</Button>
        </Link>
        <Link href="/watch">
          <Button>Watch (DRM spike)</Button>
        </Link>
      </View>
    </Main>
  );
}
