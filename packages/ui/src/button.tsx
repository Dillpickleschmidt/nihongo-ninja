import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { PressableProps } from "react-native";
import { Pressable, Text } from "react-native";

import { cn } from "./utils";

// Web-only classes (hover, cursor, focus) have no effect on mobile.
const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border border-card-foreground/70 bg-secondary text-black hover:bg-secondary/80 dark:border-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        xs: "h-[1.6rem] rounded-sm px-2 text-xs",
        lg: "h-11 px-8",
        icon: "size-10",
        "icon-sm": "size-[1.6rem] rounded-sm text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonTextVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-destructive-foreground",
      outline: "text-foreground",
      secondary: "text-black",
      ghost: "text-foreground",
      link: "text-primary underline-offset-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps extends PressableProps, VariantProps<typeof buttonVariants> {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

export function Button({
  className,
  textClassName,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <Pressable className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {typeof children === "string" ? (
        <Text className={cn(buttonTextVariants({ variant }), textClassName)}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export { buttonVariants, buttonTextVariants };
