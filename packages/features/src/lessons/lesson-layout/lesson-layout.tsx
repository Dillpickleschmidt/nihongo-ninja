import { cn } from "@nn/ui";
import { ArrowLeft } from "lucide-react";

// Web layout for every lesson page: fixed decorative artwork behind the
// content, a back button, and a per-lesson content width. No background
// color here: the ambient chapter background shows through. The images are
// web-only assets served from /img (see lesson-layout.native.tsx).
export function LessonLayout({
  maxWidth = "max-w-3xl",
  children,
}: {
  maxWidth?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Dust texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/img/dust-splatter-1.png)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative sumi-e artwork — top right */}
      <div className="pointer-events-none fixed top-0 right-0 z-0 h-[500px] w-[400px] opacity-20">
        <img
          src="/img/mountain-temple-1.jpg"
          alt=""
          className="h-full w-full object-contain object-right-top"
        />
      </div>

      {/* Decorative cherry blossom — bottom left */}
      <div className="pointer-events-none fixed bottom-0 left-0 z-0 size-[350px] opacity-20 md:size-[380px]">
        <img
          src="/img/cherry-blossom-branch.jpg"
          alt=""
          className="h-full w-full -scale-x-100 object-contain object-left-bottom"
        />
      </div>

      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <a
          href="/learn"
          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back
        </a>
      </div>

      {/* Content */}
      <div className={cn("relative z-10 mx-auto", maxWidth)}>{children}</div>
    </div>
  );
}
