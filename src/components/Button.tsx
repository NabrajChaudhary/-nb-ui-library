import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        contained: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-current text-primary hover:bg-primary/10",
        ghost: "hover:bg-primary/10 text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      skin: {
        primary: "",
        secondary:
          "[--color:var(--secondary)] [--foreground:var(--secondary-foreground)]",
        danger:
          "[--color:var(--danger)] [--foreground:var(--danger-foreground)]",
        success:
          "[--color:var(--success)] [--foreground:var(--success-foreground)]",
        warning:
          "[--color:var(--warning)] [--foreground:var(--warning-foreground)]",
        info: "[--color:var(--info)] [--foreground:var(--info-foreground)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      rounded: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [], // keep your previous compoundVariants if needed
    defaultVariants: {
      variant: "contained",
      size: "default",
      skin: "primary",
      rounded: "md",
    },
  }
);

interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

interface ButtonElementProps
  extends BaseButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface LinkElementProps
  extends BaseButtonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonElementProps | LinkElementProps;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      skin,
      rounded,
      asChild = false,
      href,
      ...props
    },
    ref
  ) => {
    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={buttonVariants({
              variant,
              size,
              skin,
              rounded,
              className,
            })}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonVariants({ variant, size, skin, rounded, className })}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
