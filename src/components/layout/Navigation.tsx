"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

// ===== Nav Data =====
const NAV_ITEMS = [
  {
    label: "Services",
    children: [
      {
        label: "Hire Talent",
        href: "/hire-talent",
        description: "Individual engineers and specialists on demand",
      },
      {
        label: "Managed Teams",
        href: "/managed-teams",
        description: "Dedicated engineering teams with full oversight",
      },
      {
        label: "Full Implementation",
        href: "/full-implementation",
        description: "End-to-end software delivery with guaranteed outcomes",
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "How It Works",
        href: "/how-it-works",
        description: "Our process for clients and candidates",
      },
      {
        label: "Talent Domains",
        href: "/talent-domains",
        description: "12 technology specializations we cover",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Built by practitioners, powered by trust",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Real results from real engagements",
      },
      {
        label: "Insights",
        href: "/insights",
        description: "Talent strategy, tech trends, career advice",
      },
    ],
  },
];

// ===== Logo =====
function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 group"
      aria-label="Tallend home"
    >
      <span className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
        Tallend
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mb-0.5" aria-hidden="true" />
    </Link>
  );
}

// ===== Desktop Dropdown =====
interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

function DropdownMenu({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-white border border-slate-100 shadow-xl shadow-slate-200/60 z-50",
        "transition-all duration-200 origin-top",
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-95 pointer-events-none"
      )}
    >
      <div className="p-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
              {item.label}
            </span>
            <span className="text-xs text-slate-500 leading-relaxed">
              {item.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ===== Desktop Nav Item =====
function DesktopNavItem({
  label,
  children,
}: {
  label: string;
  children: DropdownItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-lg",
          "text-slate-600 hover:text-slate-900 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <DropdownMenu items={children} isOpen={isOpen} />
    </div>
  );
}

// ===== Mobile Menu =====
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg z-40",
        "transition-all duration-300 origin-top overflow-hidden",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="px-4 py-4 space-y-1">
        {NAV_ITEMS.map((group) => (
          <div key={group.label}>
            <p className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {group.label}
            </p>
            {group.children.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="pt-4 pb-2 border-t border-slate-100 space-y-2">
          <Link href="/for-candidates" onClick={onClose}>
            <Button variant="secondary" fullWidth size="md">
              For Candidates
            </Button>
          </Link>
          <Link href="/hire-talent" onClick={onClose}>
            <Button variant="primary" fullWidth size="md">
              Request Talent
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ===== Main Navigation =====
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.label}
                label={item.label}
                children={item.children}
              />
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/for-candidates">
              <Button variant="ghost" size="sm">
                For Candidates
              </Button>
            </Link>
            <Link href="/hire-talent">
              <Button variant="primary" size="sm">
                Request Talent
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span aria-hidden="true">
              {mobileOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu">
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
