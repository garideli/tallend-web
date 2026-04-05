import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CandidateApplicationForm from "@/components/forms/CandidateApplicationForm";

export const metadata: Metadata = generateMetadata({
  title: "Join the Tallend Talent Network — For Candidates",
  description:
    "Join Tallend's IT talent network. W-2 and C2C options, competitive rates, US-based and remote roles across 12 technology domains.",
  canonical: "/for-candidates",
});

const WHY_JOIN = [
  {
    title: "Competitive Rates",
    description: "We negotiate hard for our candidates. Our placement rates are consistently at or above market for your skill level and domain.",
    icon: "💰",
  },
  {
    title: "W-2 or C2C — Your Choice",
    description: "Whether you prefer W-2 employment with benefits or C2C independence, we support both engagement models across all our placements.",
    icon: "📋",
  },
  {
    title: "US-Based & Remote Roles",
    description: "All our client engagements are with US companies. The majority offer fully remote or hybrid arrangements for experienced engineers.",
    icon: "🌎",
  },
  {
    title: "Career Growth",
    description: "We place you at companies doing interesting technical work — not filler projects. We care about your career trajectory, not just filling a slot.",
    icon: "📈",
  },
  {
    title: "Dedicated Support",
    description: "You have a dedicated talent advocate at Tallend throughout every engagement. We check in, advocate for you, and help resolve issues fast.",
    icon: "🤝",
  },
  {
    title: "Health Benefits (W-2)",
    description: "W-2 placements include access to Tallend's health benefits package — medical, dental, and vision — starting from day one.",
    icon: "🏥",
  },
];

const ENGAGEMENT_OPTIONS = [
  {
    name: "W-2 Employee",
    description: "You're employed by Tallend and placed at client sites. We handle payroll, taxes, and provide access to health benefits. Best for engineers who value stability and comprehensive benefits.",
    perks: [
      "Health, dental & vision insurance",
      "Paid holidays",
      "Regular W-2 tax structure (simpler filing)",
      "Workers compensation included",
      "Access to 401k (after qualifying period)",
    ],
    bestFor: "Engineers who prefer employer-sponsored benefits and simpler tax structure",
    color: "blue",
  },
  {
    name: "Independent Contractor (C2C)",
    description: "You operate through your own LLC or S-Corp and invoice Tallend directly. You handle your own taxes and benefits but earn at a higher gross rate and maintain maximum independence.",
    perks: [
      "Higher gross rate",
      "Maximum flexibility and independence",
      "Business expense deductions",
      "Multiple concurrent clients possible",
      "Preferred by senior contractors",
    ],
    bestFor: "Experienced professionals with 5+ years and their own business entity",
    color: "cyan",
  },
  {
    name: "Direct Hire",
    description: "We facilitate permanent placement directly with our client companies. You become a full-time employee of the client — Tallend handles the matching and negotiation.",
    perks: [
      "Direct employment with the client",
      "Full client benefits package",
      "Long-term career stability",
      "Equity and bonuses possible",
      "One-time placement with no ongoing middleman",
    ],
    bestFor: "Engineers seeking long-term permanent roles",
    color: "green",
  },
];

const VETTING_STEPS = [
  {
    step: 1,
    title: "Application Review",
    description: "Our talent team reviews your application within 3 business days. We look at domain specialization, years of experience, and engagement preferences.",
  },
  {
    step: 2,
    title: "Initial Talent Screen",
    description: "A 30-minute video or phone call with a Tallend talent specialist to understand your background, career goals, technical depth, and what you're looking for next.",
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Domain-specific technical evaluation — could be a take-home challenge, live coding session, system design interview, or portfolio review. Format depends on your seniority and domain.",
  },
  {
    step: 4,
    title: "Profile Activation",
    description: "Pass vetting and your profile is activated. We discuss availability, rate floor, geographic preferences, and start presenting you for matched opportunities.",
  },
];

const OPEN_ROLES = [
  {
    title: "Senior React Engineer",
    domain: "Frontend Dev",
    type: "W-2 / C2C",
    remote: "Remote",
    rate: "$70–85/hr",
    description: "FinTech client building a next-gen trading dashboard. React, TypeScript, complex state management.",
  },
  {
    title: "Cloud/DevOps Lead",
    domain: "Cloud & DevOps",
    type: "C2C",
    remote: "Remote",
    rate: "$95–115/hr",
    description: "Healthcare SaaS company migrating from on-prem to AWS. Terraform, EKS, HIPAA compliance experience needed.",
  },
  {
    title: "Senior Data Engineer",
    domain: "Data Engineering",
    type: "W-2 / C2C",
    remote: "Remote",
    rate: "$80–95/hr",
    description: "Enterprise client building a modern analytics stack. dbt, Snowflake, Airflow, Python.",
  },
];

export default function ForCandidatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 text-center">
          <Badge variant="cyan" size="md" className="mb-6">For Engineers</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Your Career.{" "}
            <span className="gradient-text">Your Terms.</span>{" "}
            Our Network.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join a talent network that actually has your back. Competitive rates, W-2 and C2C options, US remote roles, and a team that advocates for you throughout every engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="#apply">
              <Button variant="primary" size="lg">Apply to Our Network</Button>
            </Link>
            <Link href="#roles">
              <Button variant="white" size="lg">Browse Open Roles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Why Join Tallend"
            heading="A Network That Works for You"
            subheading="We're different from the body shops. Here's what you actually get when you work with us."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_JOIN.map((reason) => (
              <Card key={reason.title} hover padding="lg" className="flex flex-col gap-4">
                <span className="text-3xl" aria-hidden="true">{reason.icon}</span>
                <h3 className="text-lg font-bold text-slate-900">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Engagement Models"
            heading="How You Can Work With Us"
            subheading="Three ways to engage — we support your preference from day one."
            align="center"
            className="mb-14"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_OPTIONS.map((option) => (
              <Card key={option.name} padding="lg" className="flex flex-col border-t-4 border-t-blue-600">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{option.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{option.description}</p>
                <ul className="space-y-2 mb-5">
                  {option.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Best for: </span>{option.bestFor}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vetting Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Process"
            heading="The Candidate Vetting Journey"
            subheading="Transparent, fair, and designed to match you with opportunities where you'll thrive."
            align="center"
            className="mb-14"
          />
          <div className="space-y-0">
            {VETTING_STEPS.map((step, index) => (
              <div key={step.step} className="relative flex gap-6">
                {index < VETTING_STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-slate-200" aria-hidden="true" />
                )}
                <div className="shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Open Roles"
            heading="Current Opportunities"
            subheading="A sample of active roles in our network. New opportunities are added weekly."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {OPEN_ROLES.map((role) => (
              <Card key={role.title} hover padding="lg" className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blue" size="sm">{role.domain}</Badge>
                  <Badge variant="default" size="sm">{role.type}</Badge>
                  <Badge variant="green" size="sm">{role.remote}</Badge>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{role.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{role.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-lg font-bold text-blue-600">{role.rate}</span>
                  <Link href="#apply">
                    <Button variant="primary" size="sm">Apply</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-600 text-sm mb-4">
              These are just a few active openings. More roles are shared directly with network members.
            </p>
            <Link href="#apply">
              <Button variant="secondary" size="md">Join to Access All Openings</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Apply Now"
            heading="Join the Tallend Network"
            subheading="Takes 5 minutes. Our team will be in touch within 3 business days to schedule a talent screen."
            align="center"
            className="mb-10"
          />
          <Card padding="lg" elevated>
            <CandidateApplicationForm />
          </Card>
        </div>
      </section>
    </>
  );
}
