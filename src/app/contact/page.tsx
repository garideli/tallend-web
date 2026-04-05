import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = generateMetadata({
  title: "Contact Tallend",
  description:
    "Get in touch with the Tallend team. For talent requests, managed team engagements, partnerships, or general inquiries — we respond within 1 business day.",
  canonical: "/contact",
});

const CONTACT_INFO = [
  {
    label: "Email",
    value: "hello@tallend.com",
    href: "mailto:hello@tallend.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Talent Requests",
    value: "talent@tallend.com",
    href: "mailto:talent@tallend.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Careers / Candidates",
    value: "careers@tallend.com",
    href: "mailto:careers@tallend.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/tallend",
    href: "https://linkedin.com/company/tallend",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <Badge variant="blue" size="md" className="mb-6">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Let&apos;s Talk About What You Need
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need talent, a managed team, or want to discuss a project — we respond to every inquiry within 1 business day.
          </p>
        </div>
      </section>

      {/* Two column layout */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeader
                overline="Send a Message"
                heading="How Can We Help?"
                align="left"
                className="mb-8"
              />
              <Card padding="lg" elevated>
                <ContactForm />
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact info */}
              <Card padding="md">
                <h2 className="text-base font-bold text-slate-900 mb-5">Contact Information</h2>
                <div className="space-y-4">
                  {CONTACT_INFO.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors mt-0.5">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Location */}
              <Card padding="md">
                <h2 className="text-base font-bold text-slate-900 mb-4">Locations</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">United States</p>
                      <p className="text-sm text-slate-700 mt-0.5">Remote-first organization</p>
                      <p className="text-xs text-slate-500 mt-1">Serving clients coast to coast</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Response Promise */}
              <div className="p-5 rounded-xl bg-blue-600 text-white">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold mb-1">Response Time Promise</p>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      We respond to every inquiry within 1 business day. Urgent talent requests typically get a response within 2–4 hours during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
