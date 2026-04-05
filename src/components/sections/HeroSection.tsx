import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import type { CTAItem, StatItem } from "@/types";

export interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  ctas?: CTAItem[];
  backgroundVariant?: "dark" | "light" | "gradient";
  stats?: StatItem[];
  className?: string;
  centered?: boolean;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  ctas = [],
  backgroundVariant = "dark",
  stats = [],
  className,
  centered = true,
}: HeroSectionProps) {
  const isDark = backgroundVariant === "dark" || backgroundVariant === "gradient";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        backgroundVariant === "dark" && "bg-slate-950",
        backgroundVariant === "gradient" &&
          "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950",
        backgroundVariant === "light" && "bg-slate-50",
        className
      )}
    >
      {/* Background decorations */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.08)_0%,_transparent_70%)]" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className={cn("flex flex-col gap-6", centered && "items-center text-center")}>
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              {badge}
            </div>
          )}

          {/* Title */}
          <h1
            className={cn(
              "font-extrabold leading-tight tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
              centered && "max-w-4xl",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={cn(
                "text-base sm:text-lg md:text-xl leading-relaxed",
                centered ? "max-w-2xl" : "max-w-xl",
                isDark ? "text-slate-300" : "text-slate-600"
              )}
            >
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {ctas.length > 0 && (
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-3 pt-2",
                centered && "justify-center"
              )}
            >
              {ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  {...(cta.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Button
                    variant={cta.variant ?? "primary"}
                    size={cta.size ?? "lg"}
                  >
                    {cta.label}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Stats row */}
        {stats.length > 0 && (
          <div
            className={cn(
              "mt-16 grid gap-4",
              stats.length === 2 && "grid-cols-2",
              stats.length === 3 && "grid-cols-3",
              stats.length === 4 && "grid-cols-2 md:grid-cols-4",
              stats.length > 4 && "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            )}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center text-center p-6 rounded-xl",
                  isDark
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-slate-100 shadow-sm"
                )}
              >
                <span
                  className={cn(
                    "text-3xl font-extrabold",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-sm mt-1",
                    isDark ? "text-slate-400" : "text-slate-600"
                  )}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
