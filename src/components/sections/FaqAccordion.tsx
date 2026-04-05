"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  theme?: "light" | "dark";
  className?: string;
  allowMultiple?: boolean;
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  theme,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  theme: "light" | "dark";
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "rounded-xl border overflow-hidden",
        isDark
          ? "border-slate-700 bg-slate-800/50"
          : "border-slate-200 bg-white"
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between px-6 py-5 text-left",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset",
          isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-50"
        )}
        aria-expanded={isOpen}
        id={`faq-button-${item.id}`}
        aria-controls={`faq-panel-${item.id}`}
      >
        <span
          className={cn(
            "text-sm sm:text-base font-semibold leading-snug pr-4",
            isDark ? "text-white" : "text-slate-900"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300",
            isOpen && "rotate-45",
            isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"
          )}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-button-${item.id}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className={cn(
            "px-6 pb-5 text-sm leading-relaxed",
            isDark ? "text-slate-400" : "text-slate-600"
          )}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({
  items,
  theme = "light",
  className,
  allowMultiple = false,
}: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set([items[0]?.id])
  );

  const handleToggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className={cn("space-y-3", className)}
      role="list"
      aria-label="Frequently asked questions"
    >
      {items.map((item) => (
        <div key={item.id} role="listitem">
          <AccordionItem
            item={item}
            isOpen={openItems.has(item.id)}
            onToggle={() => handleToggle(item.id)}
            theme={theme}
          />
        </div>
      ))}
    </div>
  );
}
