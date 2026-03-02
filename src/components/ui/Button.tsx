import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // We'll create a simple utility for classnames

type ButtonBaseProps = {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLinkProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 uppercase tracking-widest focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-accent text-charcoal hover:bg-beige active:scale-[0.98]",
        secondary: "bg-charcoal text-beige border border-brand-dark hover:border-accent",
        outline: "bg-transparent text-beige border border-beige hover:border-accent hover:text-accent",
        ghost: "bg-transparent text-muted hover:text-accent",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const classes = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
    );

    if (props.href) {
        // If it's an external link
        if (props.href.startsWith('http')) {
            return (
                <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={props.href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
