import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import type { CTAItem } from "@/types";

export interface CtaBannerProps {
  heading: string;
  subheading?: string;
  ctas?: CTAItem[];
  variant?: "single" | "split";
  // Split variant props
  leftHeading?: string;
  leftSubheading?: string;
  leftCta?: CTAItem;
  rightHeading?: string;
  rightSubheading?: string;
  rightCta?: CTAItem;
  className?: string;
}

export default function CtaBanner({
  heading,
  subheading,
  ctas = [],
  variant = "single",
  leftHeading,
  leftSubheading,
  leftCta,
  rightHeading,
  rightSubheading,
  rightCta,
  className,
}: CtaBannerProps) {
  if (variant === "split") {
    return (
      <section
        className={cn(
          "bg-slate-950 overflow-hidden",
          className
        )}
        aria-label="Call to action"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Left: Client CTA */}
            <div className="relative py-16 px-4 md:pr-12 space-y-5">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-600/40 to-transparent hidden md:block" aria-hidden="true" />
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/15 text-blue-300">
                For Companies
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {leftHeading ?? "Ready to scale your engineering team?"}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {leftSubheading ??
                  "Tell us what you need. We'll match you with vetted IT talent within 48 hours."}
              </p>
              {leftCta && (
                <Link href={leftCta.href}>
                  <Button variant={leftCta.variant ?? "primary"} size="lg">
                    {leftCta.label}
                  </Button>
                </Link>
              )}
            </div>

            {/* Right: Candidate CTA */}
            <div className="relative py-16 px-4 md:pl-12 space-y-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/15 text-cyan-300">
                For Engineers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {rightHeading ?? "Looking for your next role?"}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {rightSubheading ??
                  "Join our talent network. We connect top engineers with high-impact projects and competitive rates."}
              </p>
              {rightCta && (
                <Link href={rightCta.href}>
                  <Button variant={rightCta.variant ?? "white"} size="lg">
                    {rightCta.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Single variant
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700",
        className
      )}
      aria-label="Call to action"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          {heading}
        </h2>
        {subheading && (
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {subheading}
          </p>
        )}
        {ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                {...(cta.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Button variant={cta.variant ?? "white"} size={cta.size ?? "lg"}>
                  {cta.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
