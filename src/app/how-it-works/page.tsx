"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import { cn } from "@/lib/utils";

// Note: metadata can't be exported from client components; see layout for page-level SEO
// For dynamic metadata use generateMetadata in a server component wrapper

const CLIENT_STEPS = [
  {
    step: 1,
    title: "Submit Your Talent Request",
    description: "Fill out our talent request form. Tell us about the role, required skills, preferred engagement model (W-2, C2C, contract, contract-to-hire), and your timeline. The more context you provide, the faster and more accurate the match.",
    duration: "5 minutes",
    icon: "📝",
    tips: ["Include your tech stack specifics", "Mention must-have vs nice-to-have skills", "Note remote/on-site preference"],
  },
  {
    step: 2,
    title: "Requirements Intake Call",
    description: "Within hours of your request, a Tallend talent specialist will reach out to clarify any questions, validate the scope, and align on expectations. This call is typically 15–30 minutes and significantly improves match quality.",
    duration: "15–30 minutes",
    icon: "📞",
    tips: ["Prepare to describe team culture", "Share examples of ideal past hires", "Discuss interview process preferences"],
  },
  {
    step: 3,
    title: "Candidate Sourcing & Screening",
    description: "Our talent team taps our pre-vetted pool and runs active sourcing in parallel. Each candidate undergoes a technical assessment, live coding or architecture discussion, communication screen, and reference check.",
    duration: "24–48 hours",
    icon: "🔍",
    tips: [],
  },
  {
    step: 4,
    title: "Receive Curated Shortlist",
    description: "You receive a shortlist of 2–4 candidates — not a dump of 20 resumes. Each profile includes a technical assessment summary, years of relevant experience, availability, and why we think they're a strong fit.",
    duration: "Delivered to you",
    icon: "📋",
    tips: ["Review profiles within 24 hours to keep momentum", "Provide feedback even if passing — it improves future matches"],
  },
  {
    step: 5,
    title: "Interviews on Your Schedule",
    description: "Schedule interviews directly with the candidates that interest you. We coordinate all scheduling and can provide interview guides or technical assessment templates if helpful.",
    duration: "1–3 days",
    icon: "💬",
    tips: ["Keep technical interviews focused on real scenarios", "Assess communication as much as technical skill"],
  },
  {
    step: 6,
    title: "Offer, Engage & Onboard",
    description: "Select your candidate. We handle all engagement paperwork, compliance requirements, and onboarding logistics. Your new team member is ready to contribute from day one.",
    duration: "1–3 days",
    icon: "🚀",
    tips: ["Prepare a structured day-one onboarding plan", "Introduce them to the full team early"],
  },
];

const CANDIDATE_STEPS = [
  {
    step: 1,
    title: "Submit Your Application",
    description: "Fill out the candidate application form with your domain specialization, years of experience, engagement preference (W-2, C2C, direct hire), and a brief bio. No resume submission required at this stage — we make it easy to get started.",
    duration: "5 minutes",
    icon: "📝",
  },
  {
    step: 2,
    title: "Initial Talent Screen",
    description: "A Tallend talent specialist will reach out within 3–5 business days for a short video or phone screen. We want to understand your background, goals, preferences, and what you're looking for in your next role.",
    duration: "30 minutes",
    icon: "📞",
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Depending on your role, you'll complete a technical assessment — this could be a take-home challenge, live coding session, system design discussion, or portfolio review. We match the assessment format to your domain and seniority.",
    duration: "1–3 hours",
    icon: "💻",
  },
  {
    step: 4,
    title: "Profile Activation",
    description: "Once you pass vetting, your profile is activated in our talent pool. We'll discuss your availability, rate expectations, and geographic preferences to ensure we only present you for well-matched opportunities.",
    duration: "Ongoing",
    icon: "✅",
  },
  {
    step: 5,
    title: "Matched to Opportunities",
    description: "When a client request matches your profile, we'll reach out with the opportunity details before presenting your profile. You choose whether to be considered. We never submit your profile without your explicit approval.",
    duration: "As roles come in",
    icon: "🎯",
  },
];

const FAQ_ITEMS = [
  {
    id: "f1",
    question: "How is Tallend different from a traditional IT staffing agency?",
    answer: "Traditional agencies send you 20 unvetted resumes and hope you find someone good. Tallend sends 2–4 deeply vetted candidates who have been technically assessed, reference-checked, and evaluated for communication skills. We also offer managed team and full implementation services that go well beyond staffing.",
  },
  {
    id: "f2",
    question: "What does 'vetted' actually mean?",
    answer: "Every candidate in our network has passed: a domain-specific technical assessment, a live coding or architecture screen conducted by our tech leads, a reference check (minimum 2 professional references), and a communication and culture-fit interview. Candidates who don't meet our bar don't make it into the pool — period.",
  },
  {
    id: "f3",
    question: "How do you price your services?",
    answer: "For talent placement, we charge a markup on the engineer's pay rate (for W-2 and C2C engagements) or a one-time placement fee for direct hires. For managed teams, we charge a flat monthly rate per pod member. For full implementation, we work on fixed-price or time-and-materials models depending on scope. We provide full cost transparency before you commit.",
  },
  {
    id: "f4",
    question: "What's your replacement guarantee?",
    answer: "If a placed engineer doesn't meet expectations within the first 30 days, we will replace them at no additional sourcing fee. We've never had to invoke this guarantee more than a handful of times — our vetting process works.",
  },
  {
    id: "f5",
    question: "Can I convert a contractor to a permanent hire?",
    answer: "Yes. For contract and W-2 placements, conversion to permanent hire is available after a standard conversion period (typically 90 days). For contract-to-hire engagements, the conversion pathway is pre-defined in the initial agreement. A conversion fee applies, which is disclosed upfront.",
  },
  {
    id: "f6",
    question: "Do you work with companies outside the US?",
    answer: "Currently, we specialize in US-based engagements — both on-site and remote within the US. Our talent pool is predominantly US-based engineers authorized to work in the US. We occasionally support remote-first companies with a US business entity.",
  },
  {
    id: "f7",
    question: "How does billing work for managed teams?",
    answer: "Managed teams are billed monthly at a flat rate per team member. The rate includes the engineer's compensation, our management overhead, the PM allocation, and all HR/compliance handling. Invoices are issued on the 1st of each month for the prior month.",
  },
  {
    id: "f8",
    question: "What happens if a team member leaves mid-project?",
    answer: "For managed team and full implementation engagements, we guarantee continuity of delivery. If a team member needs to be replaced, we handle the sourcing and knowledge transfer at no additional cost. Our clients never experience an ungraceful exit.",
  },
];

const TIMELINE_EXPECTATIONS = [
  { type: "Individual Placement", timeline: "5–10 days", detail: "From intake to offer" },
  { type: "Managed Team Assembly", timeline: "7–14 days", detail: "From scoping to first sprint" },
  { type: "Full Implementation Kickoff", timeline: "2–3 weeks", detail: "From proposal to Sprint Zero" },
  { type: "Candidate Processing", timeline: "3–7 days", detail: "From application to vetting complete" },
];

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"clients" | "candidates">("clients");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 text-center">
          <Badge variant="blue" size="md" className="mb-6">The Process</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Transparent Process,{" "}
            <span className="gradient-text">Zero Surprises</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re hiring talent or looking for your next role — here&apos;s exactly what to expect when working with Tallend.
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section id="process" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
              {(["clients", "candidates"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize",
                    activeTab === tab
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                      : "text-slate-500 hover:text-slate-700"
                  )}
                  aria-pressed={activeTab === tab}
                >
                  For {tab === "clients" ? "Companies" : "Engineers"}
                </button>
              ))}
            </div>
          </div>

          {/* Client Journey */}
          {activeTab === "clients" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-slate-900">The Client Journey</h2>
                <p className="text-slate-600 mt-2">From request to deployed talent in as few as 5 business days</p>
              </div>
              <div className="space-y-0">
                {CLIENT_STEPS.map((step, index) => (
                  <div key={step.step} className="relative flex gap-6">
                    {index < CLIENT_STEPS.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-slate-200" aria-hidden="true" />
                    )}
                    <div className="shrink-0 z-10 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="pb-10 flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{step.description}</p>
                      {step.tips.length > 0 && (
                        <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                          <p className="text-xs font-semibold text-amber-800 mb-1.5">Pro tips:</p>
                          <ul className="space-y-1">
                            {step.tips.map((tip) => (
                              <li key={tip} className="text-xs text-amber-700 flex items-start gap-1.5">
                                <span aria-hidden="true">•</span> {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Candidate Journey */}
          {activeTab === "candidates" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-slate-900">The Candidate Journey</h2>
                <p className="text-slate-600 mt-2">From application to active talent network in 3–7 business days</p>
              </div>
              <div className="space-y-0">
                {CANDIDATE_STEPS.map((step, index) => (
                  <div key={step.step} className="relative flex gap-6">
                    {index < CANDIDATE_STEPS.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-slate-200" aria-hidden="true" />
                    )}
                    <div className="shrink-0 z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="pb-10">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/for-candidates#apply">
                  <Button variant="primary" size="lg">Apply Now</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Typical Timelines
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE_EXPECTATIONS.map((item) => (
              <div key={item.type} className="text-center p-5 rounded-xl bg-white border border-slate-100">
                <p className="text-2xl font-extrabold text-blue-600">{item.timeline}</p>
                <p className="text-sm font-semibold text-slate-900 mt-1">{item.type}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="FAQ"
            heading="Frequently Asked Questions"
            subheading="Everything you need to know about how Tallend works."
            align="center"
            className="mb-12"
          />
          <FaqAccordion items={FAQ_ITEMS} allowMultiple />
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        variant="split"
        heading=""
        leftHeading="Ready to hire vetted talent?"
        leftSubheading="Start a request and receive your first shortlist within 48 hours."
        leftCta={{ label: "Request Talent", href: "/hire-talent", variant: "primary" }}
        rightHeading="Ready to join our network?"
        rightSubheading="Apply in 5 minutes and our team will be in touch within 3 business days."
        rightCta={{ label: "Apply Now", href: "/for-candidates#apply", variant: "white" }}
      />
    </>
  );
}
