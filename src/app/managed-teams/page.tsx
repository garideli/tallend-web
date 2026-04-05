import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = generateMetadata({
  title: "Managed Engineering Teams",
  description:
    "Your dedicated engineering team, ready in days. Full managed team pods with dedicated PM, vetted engineers, sprint management, and weekly reporting.",
  canonical: "/managed-teams",
});

const WHATS_INCLUDED = [
  {
    title: "Dedicated Project Manager",
    description: "An experienced PM embedded with your team — handling sprint planning, standup facilitation, stakeholder communication, and delivery tracking.",
    icon: "👔",
  },
  {
    title: "Vetted Engineers",
    description: "Every engineer on your pod is pre-screened technically and for communication skills. No surprises on the bench.",
    icon: "👩‍💻",
  },
  {
    title: "Sprint Management",
    description: "Agile delivery with 2-week sprints, backlog grooming, velocity tracking, and transparent capacity reporting.",
    icon: "📋",
  },
  {
    title: "Weekly Reporting",
    description: "Structured weekly updates: completed stories, velocity metrics, blockers, and next sprint goals — delivered every Friday.",
    icon: "📊",
  },
  {
    title: "Slack / Jira Integration",
    description: "Your managed team plugs into your existing tooling. We adapt to your workflow, not the other way around.",
    icon: "🔗",
  },
  {
    title: "Code Quality Assurance",
    description: "PR reviews, automated test requirements, and quarterly code quality audits are baked into every managed team engagement.",
    icon: "✅",
  },
];

const TEAM_COMPOSITIONS = [
  {
    name: "Full-Stack Product Team",
    description: "Best for product companies building or iterating on web applications.",
    composition: ["1 PM / Scrum Master", "2 Frontend Engineers (React/Vue)", "2 Backend Engineers (Node/Python)", "1 QA Engineer"],
    useCase: "SaaS product development, consumer apps",
    timeline: "Ready in 7–14 days",
  },
  {
    name: "Frontend-Focused Team",
    description: "Ideal for design-heavy products or frontend modernization projects.",
    composition: ["1 Tech Lead (Frontend)", "3–4 Senior Frontend Engineers", "1 QA / UI Test Engineer"],
    useCase: "Design system builds, frontend modernization",
    timeline: "Ready in 5–10 days",
  },
  {
    name: "Backend + DevOps Team",
    description: "Platform engineering, API development, and infrastructure as code.",
    composition: ["1 Backend Lead", "2–3 Backend Engineers", "1–2 DevOps / Platform Engineers"],
    useCase: "Platform scaling, API development, cloud migration",
    timeline: "Ready in 7–14 days",
  },
  {
    name: "Data Engineering Team",
    description: "Analytics infrastructure, data pipelines, and reporting platforms.",
    composition: ["1 Data Lead / Architect", "2 Data Engineers", "1 Analytics Engineer"],
    useCase: "Data platform builds, warehouse migrations, reporting",
    timeline: "Ready in 10–14 days",
  },
];

const ENGAGEMENT_PROCESS = [
  {
    step: 1,
    title: "Scoping Call",
    description: "We meet with your engineering leader to understand goals, current state, tech stack, and team dynamics. We define team composition and scope together.",
    duration: "60 minutes",
  },
  {
    step: 2,
    title: "Team Design",
    description: "We propose the team structure, seniority mix, and PM profile that matches your needs. You approve before we source.",
    duration: "24 hours",
  },
  {
    step: 3,
    title: "Team Assembly",
    description: "We build your pod from our vetted talent pool, run internal alignment calls, and prepare the team for your review.",
    duration: "5–10 days",
  },
  {
    step: 4,
    title: "Team Introduction",
    description: "Meet your full team — engineers and PM. Final approval, engagement agreements signed, tooling access provisioned.",
    duration: "1–2 days",
  },
  {
    step: 5,
    title: "Sprint Zero & Kickoff",
    description: "Your PM leads a structured Sprint Zero — backlog creation, environment setup, Definition of Done, and first sprint planning.",
    duration: "1 week",
  },
];

const BENEFITS = [
  { title: "No Recruiting Overhead", description: "We source, vet, and replace team members if needed." },
  { title: "Faster Time to Value", description: "Teams are pre-formed and ready to sprint in days, not months." },
  { title: "Built-in Accountability", description: "Your PM owns delivery — weekly reporting, blockers flagged proactively." },
  { title: "Flexible Team Size", description: "Scale your pod up or down with 2-week notice periods." },
  { title: "Agile Native", description: "All teams run on Agile/Scrum with metrics-driven delivery." },
  { title: "IP Ownership", description: "You own all code. No licensing concerns, no vendor lock-in." },
  { title: "Transparent Pricing", description: "Flat monthly rate per team member. No hidden fees or surprise invoices." },
  { title: "Dedicated Support", description: "Your Tallend account manager is available for escalations and capacity changes." },
];

const CASE_STUDY = {
  industry: "Healthcare SaaS",
  challenge: "MedFlow needed a full product team to build their patient engagement portal from scratch. Their internal team was maxed out and they couldn't afford a 6-month hiring cycle.",
  solution: "We assembled a team of 1 PM, 2 frontend, 2 backend, and 1 QA engineer within 12 days. They ran in 2-week sprints with weekly stakeholder demos.",
  result: "The portal launched in 4 months — 6 weeks ahead of the original internal timeline estimate. 0 critical bugs at launch.",
  metrics: [
    { value: "12 days", label: "Team assembled in" },
    { value: "4 months", label: "Portal launched in" },
    { value: "6 weeks", label: "Ahead of schedule" },
  ],
};

export default function ManagedTeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <Badge variant="cyan" size="md">Managed Teams</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Your Dedicated Engineering Team,{" "}
              <span className="gradient-text">Ready in Days</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              A fully-staffed, PM-led engineering pod that integrates seamlessly with your organization. Agile delivery, transparent reporting, and complete accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#build-team">
                <Button variant="primary" size="lg">Build My Team</Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="white" size="lg">See How It Works</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="What's Included"
            heading="Everything in Your Managed Team"
            subheading="A complete engineering delivery unit — no assembly required on your end."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHATS_INCLUDED.map((item) => (
              <Card key={item.title} hover padding="lg" className="flex flex-col gap-4">
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Compositions */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Team Types"
            heading="Team Composition Options"
            subheading="Pre-designed team archetypes for common engineering needs, or we customize to your specs."
            align="center"
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {TEAM_COMPOSITIONS.map((team) => (
              <Card key={team.name} padding="lg" className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{team.name}</h3>
                  <Badge variant="blue" size="sm">{team.timeline}</Badge>
                </div>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">{team.description}</p>
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Team Composition</p>
                  <ul className="space-y-1">
                    {team.composition.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  <span className="font-semibold">Best for: </span>{team.useCase}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Process"
            heading="From Kick-Off to First Sprint"
            subheading="A structured 5-step process to get your team assembled and shipping code fast."
            align="center"
            className="mb-14"
          />
          <div className="space-y-0">
            {ENGAGEMENT_PROCESS.map((step, index) => (
              <div key={step.step} className="relative flex gap-6">
                {index < ENGAGEMENT_PROCESS.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-slate-200" aria-hidden="true" />
                )}
                <div className="shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">{step.step}</div>
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{step.duration}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Benefits"
            heading="Why Teams Choose Managed Pods"
            align="center"
            theme="dark"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-sm font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Case Study"
            heading="Managed Team in Action"
            align="center"
            className="mb-14"
          />
          <Card padding="lg" elevated className="border border-slate-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <Badge variant="cyan" size="sm" className="mb-2">{CASE_STUDY.industry}</Badge>
                <h3 className="text-xl font-bold text-slate-900">MedFlow Health Patient Portal</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</p>
                <p className="text-sm text-slate-600 leading-relaxed">{CASE_STUDY.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Solution</p>
                <p className="text-sm text-slate-600 leading-relaxed">{CASE_STUDY.solution}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              {CASE_STUDY.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-2xl font-extrabold text-blue-600">{metric.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        variant="single"
        heading="Ready to Build Your Engineering Team?"
        subheading="Tell us your goals and we'll design the perfect team composition — assembled and ready in as few as 7 days."
        ctas={[
          { label: "Build My Team", href: "/contact", variant: "white" },
          { label: "Talk to Sales", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
