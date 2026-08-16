import { cn, Text } from "@nn/ui";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Text
      className={cn(
        "text-[0.6rem] font-bold tracking-[0.25em] text-muted-foreground/70 uppercase",
        className,
      )}
    >
      {children}
    </Text>
  );
}
