import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  theme?: "light" | "dark";
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            "w-4 h-4",
            star <= rating ? "text-yellow-400" : "text-slate-200"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "bg-blue-500",
    "bg-cyan-500",
    "bg-emerald-500",
    "bg-purple-500",
    "bg-amber-500",
  ];
  const colorIndex =
    name.charCodeAt(0) % colors.length;

  return (
    <div
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0",
        colors[colorIndex]
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function TestimonialCard({
  testimonial,
  theme = "light",
  className,
}: TestimonialCardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-2xl p-6 h-full",
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-slate-100 shadow-sm",
        className
      )}
    >
      {/* Quote mark */}
      <svg
        className={cn("w-8 h-8", isDark ? "text-blue-400/60" : "text-blue-100")}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Rating */}
      {testimonial.rating && <StarRating rating={testimonial.rating} />}

      {/* Quote */}
      <blockquote
        className={cn(
          "flex-1 text-sm leading-relaxed italic",
          isDark ? "text-slate-300" : "text-slate-600"
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100/10">
        {testimonial.author.avatar ? (
          <img
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <AvatarPlaceholder name={testimonial.author.name} />
        )}

        <div className="min-w-0">
          <p
            className={cn(
              "text-sm font-semibold truncate",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            {testimonial.author.name}
          </p>
          <p
            className={cn(
              "text-xs truncate",
              isDark ? "text-slate-400" : "text-slate-500"
            )}
          >
            {testimonial.author.title} &middot; {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );
}
