import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "ghost" | "white" | "wa";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-brand hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white shadow-[0_8px_24px_rgba(237,50,55,.28)] hover:bg-brand-red-dark hover:shadow-[0_14px_32px_rgba(237,50,55,.36)]",
  dark: "bg-brand-ink text-white hover:bg-brand-ink-3",
  ghost:
    "bg-transparent text-brand-ink border border-black/15 hover:border-brand-ink hover:bg-white",
  white: "bg-white text-brand-ink hover:shadow-[0_14px_32px_rgba(0,0,0,.3)]",
  wa: "bg-[#1EBE5D] text-white shadow-[0_8px_24px_rgba(30,190,93,.25)] hover:bg-[#17A852]",
};

const sizes: Record<Size, string> = {
  md: "text-sm px-6 py-3",
  lg: "text-base px-7 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternalHttp = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternalHttp ? "_blank" : undefined}
        rel={isExternalHttp ? "noopener noreferrer" : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
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
