import { cn } from "@nn/ui";

const BUTTON_3D_CSS = `
.action-btn {
  transition: transform .1s cubic-bezier(0, 0, .6, 1);
}
.action-btn:hover {
  transform: translateY(0.15em);
}
.action-btn:active {
  transform: translateY(0.35em);
}
.action-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -1;
  background: var(--ab-depth);
  box-shadow: 0 0 0 1px var(--ab-border);
  transform: translate3d(0, 0.55em, -1em);
  transition: transform .1s cubic-bezier(0, 0, .6, 1);
}
.action-btn:hover::before {
  transform: translate3d(0, 0.4em, -1em);
}
.action-btn:active::before {
  transform: translate3d(0, 0.1em, -1em);
}
`;

export function Button3D({
  onClick,
  className,
  disabled,
  color,
  bgColor,
  borderColor,
  depthColor,
  textColor,
  children,
}: {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  /** Base tint color — all other colors are derived from this */
  color?: string;
  bgColor?: string;
  borderColor?: string;
  depthColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}) {
  const tint = color ?? "rgb(180, 100, 120)";
  const bg = bgColor ?? `color-mix(in srgb, ${tint} 50%, rgb(255,248,248))`;
  const border = borderColor ?? `color-mix(in srgb, ${tint} 75%, rgb(140,140,140))`;
  const depth = depthColor ?? `color-mix(in srgb, ${tint} 70%, rgb(255,230,230))`;
  const text = textColor ?? `color-mix(in srgb, ${tint} 10%, rgb(25,20,18))`;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "action-btn",
        "relative mb-[0.7em] inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[1em] px-5 py-2.5 text-base font-bold",
        "[transform-style:preserve-3d]",
        disabled && "pointer-events-none",
        className,
      )}
      style={
        {
          backgroundColor: bg,
          border: `1px solid ${border}`,
          color: text,
          "--ab-depth": depth,
          "--ab-border": border,
        } as React.CSSProperties
      }
    >
      <style href="vocab-practice-button-3d" precedence="medium">
        {BUTTON_3D_CSS}
      </style>
      {children}
    </button>
  );
}
