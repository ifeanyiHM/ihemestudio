export { PageHero } from "./PageHero";
export { SkillBar } from "./SkillBar";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

// ─── Button ───────────────────────────────────────────────────────────────────
type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-teal text-ink border border-teal hover:bg-teal-glow hover:shadow-teal-sm",
    secondary:
      "bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1] hover:border-white/[0.2]",
    ghost: "text-slate hover:text-white hover:bg-white/[0.05]",
    outline: "border border-teal text-teal hover:bg-teal hover:text-ink",
  };
  const sizes = {
    sm: "text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[16px] px-3 py-1.5 xxxl:px-4 xxxl:py-2.5 xl3:px-4.5 xl3:py-3 xl4:px-5 xl4:py-3.5",
    md: "text-xs xxxl:text-[15px] xl3:text-[15.5px] xl4:text-[16px] px-5 py-2.5 xxxl:px-6 xxxl:py-3.5 xl3:px-7 xl3:py-4 xl4:px-8 xl4:py-4.5",
    lg: "text-sm xxxl:text-[17px] xl3:text-[17.5px] xl4:text-[18px] px-7 py-3.5 xxxl:px-8 xxxl:py-4.5 xl3:px-9 xl3:py-5 xl4:px-10 xl4:py-5.5",
  };
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    if (external)
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// ─── Tag ──────────────────────────────────────────────────────────────────────
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 xxxl:px-3.5 xxxl:py-1.5 xl3:px-4 xl3:py-2 xl4:px-4.5 xl4:py-2.5 rounded-md text-2xs xxxl:text-[0.7rem] xl3:text-[0.75rem] xl4:text-[0.8rem] font-mono font-medium bg-white/[0.05] border border-white/[0.08] text-slate-light",
        className,
      )}
    >
      {children}
    </span>
  );
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-2xs xxxl:text-[0.875rem] xl3:text-[0.9rem] xl4:text-[0.95rem] font-mono text-teal uppercase tracking-[0.2em] flex items-center gap-2",
        className,
      )}
    >
      <span className="w-5 h-px bg-teal inline-block" />
      {children}
    </p>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-ink-800/60 backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:border-teal-border hover:shadow-card-hover hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px bg-white/[0.06]", className)} />;
}
