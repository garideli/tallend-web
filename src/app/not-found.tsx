import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Tallend",
  description: "The page you're looking for doesn't exist. Let us help you find what you need.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: "Hire Talent", href: "/hire-talent", description: "Find vetted IT engineers in 48 hours" },
  { label: "Managed Teams", href: "/managed-teams", description: "Dedicated engineering pods, ready in days" },
  { label: "For Candidates", href: "/for-candidates", description: "Join our talent network" },
  { label: "Contact Us", href: "/contact", description: "Get in touch with our team" },
];

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Error number */}
        <div className="mb-8">
          <span className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 select-none">
            404
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link href="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="white" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-slate-800 pt-10">
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-medium">
            Popular Pages
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-left group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
