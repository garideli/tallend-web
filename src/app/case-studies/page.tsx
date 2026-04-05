import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = generateMetadata({
  title: "Case Studies — IT Talent & Delivery Results",
  description:
    "Real results from real engagements. See how Tallend has helped FinTech, Healthcare, Enterprise SaaS, and E-commerce companies scale engineering teams and deliver software.",
  canonical: "/case-studies",
});

const CASE_STUDIES = [
  {
    slug: "paybridge-fintech-team-scale",
    industry: "FinTech",
    company: "Paybridge Financial",
    service: "Hire Talent",
    challenge: "Needed 6 React + Node.js engineers to scale their payments platform in 3 weeks. Internal HR was maxed out and recruiting firms had failed to deliver quality candidates.",
    solution: "Tallend delivered a shortlist of 8 vetted candidates in 48 hours. Client interviewed 6 and extended offers to 5. All onboarded within 12 days.",
    outcome: "Full team onboarded in 12 days. Platform scaled to handle 3x transaction volume within 60 days of team expansion.",
    metric: "12 days",
    metricLabel: "Time to full team",
    secondaryMetric: "3x",
    secondaryLabel: "Transaction volume increase",
  },
  {
    slug: "medflow-patient-portal",
    industry: "Healthcare",
    company: "MedFlow Health",
    service: "Managed Teams",
    challenge: "MedFlow needed to build a HIPAA-compliant patient engagement portal from scratch. Their internal team was fully allocated to product maintenance with no capacity for greenfield development.",
    solution: "Assembled a 6-person managed team (1 PM, 2 frontend, 2 backend, 1 QA) within 12 days. Team ran in 2-week sprints with weekly stakeholder demos. HIPAA compliance built in from day one.",
    outcome: "Patient portal launched 6 weeks ahead of original internal estimate. 0 critical bugs at launch. Achieved HIPAA compliance certification pre-launch.",
    metric: "6 weeks",
    metricLabel: "Ahead of schedule",
    secondaryMetric: "0",
    secondaryLabel: "Critical bugs at launch",
  },
  {
    slug: "retailmax-data-platform",
    industry: "E-commerce",
    company: "RetailMax Inc.",
    service: "Full Implementation",
    challenge: "RetailMax had 5+ years of siloed data across legacy systems. Their analytics team spent 70% of time on data wrangling instead of insights. They needed a modern data platform but had no internal data engineering capability.",
    solution: "Full implementation engagement: discovery, architecture, and 12-week build of a Snowflake + dbt + Airflow data platform. Migrated 4TB of historical data with zero data loss.",
    outcome: "Analytics team time-on-insights increased from 30% to 85%. $1.2M annual savings from infrastructure consolidation. Real-time inventory dashboards launched.",
    metric: "$1.2M",
    metricLabel: "Annual infrastructure savings",
    secondaryMetric: "85%",
    secondaryLabel: "Analyst time on insights (was 30%)",
  },
  {
    slug: "cloudscale-devops-transformation",
    industry: "SaaS",
    company: "CloudScale AI",
    service: "Hire Talent",
    challenge: "Fast-growing AI SaaS company needed to build a DevOps/platform engineering function from zero. They had no internal DevOps expertise and were struggling with manual deployments and infrastructure drift.",
    solution: "Placed a senior DevOps architect (C2C) and two mid-level DevOps engineers (W-2). Architect designed the new infrastructure framework; engineers implemented it over 3 months.",
    outcome: "Deployment frequency increased from weekly to 12x/day. MTTR reduced by 80%. Infrastructure cost optimized by 35% through right-sizing and reserved instances.",
    metric: "12x/day",
    metricLabel: "Deployment frequency (was weekly)",
    secondaryMetric: "80%",
    secondaryLabel: "MTTR reduction",
  },
  {
    slug: "enterprise-erp-migration",
    industry: "Enterprise",
    company: "GlobalTech Manufacturing",
    service: "Full Implementation",
    challenge: "Legacy SAP ECC 6.0 system at end-of-maintenance. GlobalTech needed to migrate to SAP S/4HANA within an 18-month deadline set by their board, but lacked SAP expertise internally.",
    solution: "Assembled a specialized SAP migration team: 1 SAP S/4HANA architect, 2 ABAP developers, 1 basis administrator, and 1 project manager. Delivered in structured phases with full data validation.",
    outcome: "Migration completed 5 weeks ahead of the 18-month deadline. 100% data integrity validated. System performance improved by 40% vs. legacy ECC.",
    metric: "5 weeks",
    metricLabel: "Ahead of 18-month deadline",
    secondaryMetric: "40%",
    secondaryLabel: "System performance improvement",
  },
  {
    slug: "healthtech-security-program",
    industry: "Healthcare",
    company: "CareLink Digital",
    service: "Hire Talent",
    challenge: "Post-acquisition, CareLink needed to rapidly build a security engineering function to achieve SOC 2 Type II certification within 9 months — a requirement from their enterprise clients.",
    solution: "Placed a cloud security architect and two application security engineers in rapid succession. All three had healthcare/SOC2 experience and were W-2 to ensure long-term stability.",
    outcome: "SOC 2 Type II achieved in 7 months — 2 months ahead of deadline. Zero findings in the initial audit. Security posture dramatically improved across all systems.",
    metric: "7 months",
    metricLabel: "SOC 2 Type II achieved",
    secondaryMetric: "0",
    secondaryLabel: "Audit findings",
  },
];

const INDUSTRY_FILTERS = ["All", "FinTech", "Healthcare", "Enterprise", "SaaS", "E-commerce"];

const INDUSTRY_VARIANT_MAP: Record<string, "blue" | "green" | "cyan" | "navy" | "default"> = {
  FinTech: "blue",
  Healthcare: "green",
  Enterprise: "navy",
  SaaS: "cyan",
  "E-commerce": "default",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 text-center">
          <Badge variant="blue" size="md" className="mb-6">Case Studies</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Real Engagements,{" "}
            <span className="gradient-text">Real Results</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From FinTech scaling sprints to enterprise migrations — the work we do drives measurable outcomes.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry filter chips (static display — would be interactive with client component) */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {INDUSTRY_FILTERS.map((filter) => (
              <span
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  filter === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {CASE_STUDIES.map((cs) => (
              <Card key={cs.slug} hover padding="lg" className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge
                    variant={INDUSTRY_VARIANT_MAP[cs.industry] ?? "default"}
                    size="sm"
                  >
                    {cs.industry}
                  </Badge>
                  <Badge variant="outline" size="sm">{cs.service}</Badge>
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-1">{cs.company}</h2>

                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-2xl font-extrabold text-blue-600">{cs.metric}</p>
                        <p className="text-xs text-slate-500">{cs.metricLabel}</p>
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold text-emerald-600">{cs.secondaryMetric}</p>
                        <p className="text-xs text-slate-500">{cs.secondaryLabel}</p>
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      Full story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        variant="single"
        heading="Could Your Company Be Our Next Success Story?"
        subheading="Let's talk about your engineering challenges and how we can help you achieve similar outcomes."
        ctas={[
          { label: "Request Talent", href: "/hire-talent", variant: "white" },
          { label: "Build a Managed Team", href: "/managed-teams", variant: "secondary" },
        ]}
      />
    </>
  );
}
