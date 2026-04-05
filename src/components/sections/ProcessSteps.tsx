import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: ReactNode;
  duration?: string;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  theme?: "light" | "dark";
  layout?: "horizontal" | "vertical";
  className?: string;
}

export default function ProcessSteps({
  steps,
  theme = "light",
  layout = "horizontal",
  className,
}: ProcessStepsProps) {
  const isDark = theme === "dark";

  if (layout === "vertical") {
    return (
      <div className={cn("space-y-0", className)}>
        {steps.map((step, index) => (
          <div key={step.step} className="relative flex gap-6">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute left-5 top-12 w-0.5 h-full",
                  isDark ? "bg-slate-700" : "bg-slate-200"
                )}
                aria-hidden="true"
              />
            )}

            {/* Step number circle */}
            <div className="shrink-0 flex flex-col items-center z-10">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2",
                  isDark
                    ? "bg-slate-800 border-blue-500 text-blue-400"
                    : "bg-white border-blue-600 text-blue-600 shadow-sm"
                )}
              >
                {step.icon ?? step.step}
              </div>
            </div>

            {/* Content */}
            <div className="pb-10">
              <div className="flex items-center gap-3 mb-2">
                <h3
                  className={cn(
                    "text-lg font-semibold",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  {step.title}
                </h3>
                {step.duration && (
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-0.5 rounded-full",
                      isDark
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-50 text-blue-600"
                    )}
                  >
                    {step.duration}
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  isDark ? "text-slate-400" : "text-slate-600"
                )}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal layout
  return (
    <div
      className={cn(
        "grid gap-6",
        steps.length === 3 && "md:grid-cols-3",
        steps.length === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        steps.length === 5 && "sm:grid-cols-2 lg:grid-cols-5",
        steps.length === 6 && "sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {steps.map((step, index) => (
        <div key={step.step} className="relative flex flex-col">
          {/* Connector arrow (hidden on last item) */}
          {index < steps.length - 1 && (
            <div
              className="hidden lg:block absolute top-5 left-full w-full z-10 pointer-events-none"
              aria-hidden="true"
            >
              <div className="flex items-center justify-center">
                <div
                  className={cn(
                    "h-0.5 w-full",
                    isDark ? "bg-slate-700" : "bg-slate-200"
                  )}
                />
                <svg
                  className={cn(
                    "w-3 h-3 -ml-1 shrink-0",
                    isDark ? "text-slate-700" : "text-slate-200"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          )}

          {/* Step content */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Step number */}
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0",
                  isDark
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "bg-blue-600 text-white"
                )}
              >
                {step.icon ?? step.step}
              </div>

              {step.duration && (
                <span
                  className={cn(
                    "text-xs font-medium",
                    isDark ? "text-slate-500" : "text-slate-400"
                  )}
                >
                  {step.duration}
                </span>
              )}
            </div>

            <h3
              className={cn(
                "text-base font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {step.title}
            </h3>

            <p
              className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-slate-400" : "text-slate-600"
              )}
            >
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
