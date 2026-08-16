import { Link } from "@nn/router";
import { cn, Text } from "@nn/ui";
import { Image, View } from "react-native";

// Web layout for every lesson page: fixed decorative artwork behind the
// content, a back button, and a per-lesson content width. The images are
// web-only assets served from /img (see lesson-layout.native.tsx).
export function LessonLayout({
  maxWidth = "max-w-3xl",
  children,
}: {
  maxWidth?: string;
  children: React.ReactNode;
}) {
  return (
    // No background color here: the ambient chapter background shows through.
    <View className="relative min-h-screen">
      {/* Dust texture overlay */}
      <View
        pointerEvents="none"
        className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          // @ts-expect-error web-only CSS, rendered by react-native-web
          backgroundImage: "url(/img/dust-splatter-1.png)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative sumi-e artwork — top right */}
      <View pointerEvents="none" className="fixed top-0 right-0 z-0 h-[500px] w-[400px] opacity-20">
        <Image
          source={{ uri: "/img/mountain-temple-1.jpg" }}
          alt=""
          className="h-full w-full"
          resizeMode="contain"
        />
      </View>

      {/* Decorative cherry blossom — bottom left */}
      <View
        pointerEvents="none"
        className="fixed bottom-0 left-0 z-0 size-[350px] -scale-x-100 opacity-20 md:size-[380px]"
      >
        <Image
          source={{ uri: "/img/cherry-blossom-branch.jpg" }}
          alt=""
          className="h-full w-full"
          resizeMode="contain"
        />
      </View>

      <View className="fixed top-4 left-4 z-50">
        <Link href="/learn">
          <Text className="text-sm text-muted-foreground hover:text-foreground">← Back</Text>
        </Link>
      </View>

      <View className={cn("relative z-10 mx-auto w-full", maxWidth)}>{children}</View>
    </View>
  );
}
