import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  theme?: "light" | "dark";
  color?: "blue" | "cyan" | "green" | "purple";
  className?: string;
}

const colorAccentStyles = {
  blue: "text-blue-600",
  cyan: "text-cyan-500",
  green: "text-emerald-500",
  purple: "text-purple-500",
};

export default function StatCard({
  value,
  label,
  description,
  icon,
  theme = "light",
  color = "blue",
  className,
}: StatCardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-2xl",
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-slate-100 shadow-sm",
        className
      )}
    >
      {icon && (
        <div
          className={cn(
            "mb-3 flex items-center justify-center w-12 h-12 rounded-xl",
            isDark ? "bg-white/10" : "bg-blue-50"
          )}
        >
          <span className={cn(colorAccentStyles[color])}>{icon}</span>
        </div>
      )}

      <span
        className={cn(
          "text-4xl font-extrabold tracking-tight",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {value}
      </span>

      <span
        className={cn(
          "mt-1 text-sm font-semibold",
          isDark ? "text-slate-300" : "text-slate-700"
        )}
      >
        {label}
      </span>

      {description && (
        <p
          className={cn(
            "mt-1 text-xs leading-relaxed",
            isDark ? "text-slate-400" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
