import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CtaBanner from "@/components/sections/CtaBanner";
import FaqAccordion from "@/components/sections/FaqAccordion";
import TalentRequestForm from "@/components/forms/TalentRequestForm";

export const metadata: Metadata = generateMetadata({
  title: "Hire Vetted IT Talent",
  description:
    "Hire pre-vetted IT engineers within 48 hours. W-2, C2C, contract, and contract-to-hire engagement models. Frontend, backend, cloud, data, AI/ML and more.",
  canonical: "/hire-talent",
});

const ENGAGEMENT_MODELS = [
  {
    name: "W-2 Employee",
    short: "W-2",
    description: "The engineer is a Tallend W-2 employee. We handle payroll, taxes, benefits, and HR compliance. You get the talent without the employer overhead.",
    pros: ["Benefits included (health, dental, vision)", "Full payroll compliance handled by us", "Ideal for longer engagements", "Can convert to direct hire later"],
    bestFor: "Long-term placements where you want simplicity and compliance",
    color: "blue",
  },
  {
    name: "Corp-to-Corp (C2C)",
    short: "C2C",
    description: "The engineer operates through their own LLC or S-Corp. They invoice Tallend directly. Best for experienced contractors who prefer independent status.",
    pros: ["Maximum flexibility", "Preferred by senior contractors", "No benefits overhead", "Clean business-to-business relationship"],
    bestFor: "Experienced contractors with their own corporation structure",
    color: "cyan",
  },
  {
    name: "Contract",
    short: "Contract",
    description: "Fixed-term engagement with a clear start and end date. Great for project-based work or backfill needs with a defined scope.",
    pros: ["Budget predictability", "Clear project boundaries", "No permanent hire commitment", "Scale up/down easily"],
    bestFor: "Project-based work with a defined timeline (3–12+ months)",
    color: "green",
  },
  {
    name: "Contract-to-Hire",
    short: "C2H",
    description: "Start with a contract period (typically 3–6 months), then convert to a permanent employee if it's a great fit — for both sides.",
    pros: ["Reduce hiring risk", "Prove cultural fit before committing", "Candidate earns trust over time", "Conversion fee applies at hire"],
    bestFor: "When you want to evaluate fit before a permanent offer",
    color: "purple",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Submit Your Request",
    description: "Fill out our talent request form with the role, required skills, engagement type, and timeline. The more detail you provide, the faster and more accurate our match.",
    duration: "5 minutes",
  },
  {
    step: 2,
    title: "Talent Review & Sourcing",
    description: "Our talent team reviews your requirements and sources from our pre-vetted pool. We conduct an initial technical screen and filter to only the best fits.",
    duration: "Same day",
  },
  {
    step: 3,
    title: "Candidate Shortlist",
    description: "You receive a curated shortlist of 2–4 candidates with detailed profiles, skill assessments, and availability. No bloated pipelines.",
    duration: "24–48 hours",
  },
  {
    step: 4,
    title: "Interviews",
    description: "Interview your shortlisted candidates on your schedule. We coordinate and provide preparation materials for both sides.",
    duration: "1–3 days",
  },
  {
    step: 5,
    title: "Offer & Onboard",
    description: "Select your candidate. We handle the engagement paperwork, compliance, and onboarding coordination to ensure a smooth day-one experience.",
    duration: "1–3 days",
  },
];

const TALENT_DOMAINS = [
  { name: "Frontend Dev", description: "React, Vue, Angular, TypeScript" },
  { name: "Backend Dev", description: "Node.js, Python, Java, .NET, Go" },
  { name: "Cloud & DevOps", description: "AWS, GCP, Azure, Kubernetes, Terraform" },
  { name: "Data Engineering", description: "Spark, Kafka, dbt, Snowflake, Databricks" },
  { name: "AI / ML", description: "Python, TensorFlow, PyTorch, LLMs" },
  { name: "QA & Testing", description: "Selenium, Cypress, Playwright, SDET" },
  { name: "Cybersecurity", description: "SIEM, Pen Testing, SOC, Cloud Security" },
  { name: "SAP / ERP", description: "SAP S/4HANA, Salesforce, Oracle, Workday" },
  { name: "Mobile", description: "React Native, Flutter, Swift, Kotlin" },
  { name: "Architecture", description: "Solution, Enterprise, Cloud Architecture" },
  { name: "Product Mgmt", description: "Roadmapping, PRDs, Cross-functional Leadership" },
  { name: "Agile / Scrum", description: "Scrum Masters, Agile Coaches, Delivery Managers" },
];

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How quickly can you place a candidate?",
    answer: "For most roles, we can deliver a shortlist within 24–48 business hours. Time to hire (including your interview process) typically ranges from 5–10 business days. Specialty or niche roles may take a few days longer, but we always set clear expectations upfront.",
  },
  {
    id: "faq-2",
    question: "What is your vetting process?",
    answer: "Every candidate in our network goes through: (1) Technical skills assessment aligned to the specific role, (2) Live coding or architecture interview conducted by our tech leads, (3) Background and reference verification, (4) Communication and culture-fit screen. We only present candidates we'd hire ourselves.",
  },
  {
    id: "faq-3",
    question: "What's the difference between W-2 and C2C engagements?",
    answer: "With W-2, the engineer is employed by Tallend and we handle all payroll, taxes, and benefits — you simply pay our bill rate. With C2C, the engineer operates through their own company and you pay a corp-to-corp rate. W-2 is typically preferred for longer engagements and compliance-sensitive environments. C2C is common for senior contractors who prefer independent status.",
  },
  {
    id: "faq-4",
    question: "Do you offer any guarantee on placements?",
    answer: "Yes. If a placed engineer doesn't meet expectations within the first 30 days of engagement, we will replace them at no additional sourcing fee. We stand behind our vetting process.",
  },
  {
    id: "faq-5",
    question: "Can contractors convert to full-time employees?",
    answer: "Absolutely. Our contract-to-hire model is specifically designed for this. After a defined contract period (typically 3–6 months), you can extend a full-time offer. A conversion fee applies, which we disclose upfront in the engagement agreement.",
  },
  {
    id: "faq-6",
    question: "Do you work with startups or only enterprise clients?",
    answer: "We work across the spectrum — from Series A startups that need their first senior engineer to enterprise teams scaling by 20+. Our process is flexible and our rates are competitive for both budget-conscious startups and enterprise procurement requirements.",
  },
];

export default function HireTalentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <Badge variant="blue" size="md">Talent Placement</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Hire Vetted IT Talent,{" "}
              <span className="gradient-text">Faster Than You Think</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Stop sifting through unqualified resumes. Get a curated shortlist of pre-screened engineers matched to your exact requirements within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                48-hour candidate delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                30-day replacement guarantee
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                All engagement models
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement-models" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Engagement Models"
            heading="Your Engagement, Your Terms"
            subheading="We support all major engagement structures to fit your legal, financial, and operational requirements."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <Card key={model.name} padding="lg" className="flex flex-col h-full border-t-4 border-t-blue-600">
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {model.short}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{model.name}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {model.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {model.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Best for:</span> {model.bestFor}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="The Process"
            heading="How Client Engagements Work"
            subheading="A transparent, predictable process from request to onboarded talent."
            align="center"
            className="mb-14"
          />
          <div className="max-w-3xl mx-auto space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative flex gap-6">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-slate-200" aria-hidden="true" />
                )}
                <div className="shrink-0 flex flex-col items-center z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Domains */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Domains"
            heading="12 Technology Specializations"
            subheading="We have pre-vetted talent across the full modern technology stack."
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TALENT_DOMAINS.map((domain) => (
              <div key={domain.name} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">{domain.name}</p>
                <p className="text-xs text-slate-500 mt-1">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Pricing Expectations */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { metric: "24–48 hrs", label: "Candidate shortlist delivery" },
              { metric: "5–10 days", label: "Average time to hire" },
              { metric: "30 days", label: "Replacement guarantee window" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-extrabold text-white">{item.metric}</p>
                <p className="text-blue-100 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="FAQ"
            heading="Common Questions"
            align="center"
            className="mb-12"
          />
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Request Form */}
      <section id="request-talent" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Get Started"
            heading="Request Talent Now"
            subheading="Fill out the form below and our talent team will reach out within 48 hours with matched candidates."
            align="center"
            className="mb-10"
          />
          <Card padding="lg" elevated>
            <TalentRequestForm />
          </Card>
        </div>
      </section>
    </>
  );
}
