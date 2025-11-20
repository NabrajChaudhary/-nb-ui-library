import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "link" | "outline" | "contained" | "ghost" | null | undefined;
    skin?: "success" | "primary" | "secondary" | "danger" | "warning" | "info" | null | undefined;
    size?: "default" | "icon" | "sm" | "lg" | "icon-sm" | "icon-lg" | null | undefined;
    rounded?: "none" | "full" | "sm" | "lg" | "xs" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
interface ButtonElementProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: never;
}
interface LinkElementProps extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
type ButtonProps = ButtonElementProps | LinkElementProps;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export { Button, buttonVariants };
