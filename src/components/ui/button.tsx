import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-sans text-sm font-medium cursor-pointer transition-all duration-300 ease-[var(--ease-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-[1.125rem] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primary CTA — brand red, white text, darkens on hover */
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98]",
        /* Secondary CTA — white with red border, fills red on hover */
        outline:
          "border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]",
        /* Quiet neutral action */
        subtle: "bg-muted text-foreground hover:bg-surface",
        ghost: "text-foreground hover:bg-surface hover:text-primary",
        link: "h-auto p-0 text-primary underline-offset-4 hover:underline",
        destructive: "bg-primary-hover text-primary-foreground hover:bg-primary",
        /* Legacy alias kept so existing shadcn primitives keep working */
        secondary: "bg-muted text-foreground hover:bg-surface",
      },
      size: {
        /* 52px spec height */
        default: "h-[52px] px-7",
        sm: "h-11 px-5 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
