import { Link, useParams } from "@nn/router";
import { Button, Heading, Main, Paragraph } from "@nn/ui";

export default function LessonPage() {
  const { slug } = useParams();

  return (
    <Main className="flex-1 items-center justify-center gap-6 bg-background p-6">
      <Heading level={1} className="text-2xl font-bold">
        Lesson: {slug}
      </Heading>
      <Paragraph className="text-center text-muted-foreground">
        Dynamic-param route rendered from the shared features package. Lesson content is out of
        scope for v0.
      </Paragraph>
      <Link href="/">
        <Button variant="outline">Home</Button>
      </Link>
    </Main>
  );
}
