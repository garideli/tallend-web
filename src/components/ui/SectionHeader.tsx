import Link from "next/link";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  overline?: string;
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  headingClassName?: string;
}

export default function SectionHeader({
  overline,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  align = "center",
  theme = "light",
  className,
  headingClassName,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {overline && (
        <span
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase",
            isDark
              ? "bg-blue-500/20 text-blue-300"
              : "bg-blue-50 text-blue-600"
          )}
        >
          {overline}
        </span>
      )}

      <h2
        className={cn(
          "font-bold leading-tight tracking-tight",
          "text-2xl sm:text-3xl lg:text-4xl",
          isDark ? "text-white" : "text-slate-900",
          headingClassName
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            align === "center" ? "max-w-2xl" : "max-w-xl",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subheading}
        </p>
      )}

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
            "group",
            isDark
              ? "text-cyan-400 hover:text-cyan-300"
              : "text-blue-600 hover:text-blue-700"
          )}
        >
          {ctaLabel}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
