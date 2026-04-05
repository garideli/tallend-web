import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateMetadata as genMeta } from "@/lib/seo";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { PageProps } from "@/types";

// ===== Data =====
const CASE_STUDIES = {
  "paybridge-fintech-team-scale": {
    title: "How Paybridge Financial Scaled Their Engineering Team in 12 Days",
    company: "Paybridge Financial",
    industry: "FinTech",
    service: "Hire Talent",
    publishedAt: "March 15, 2025",
    teamSize: "6 engineers",
    duration: "12 days to placement",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    challenge: {
      heading: "The Challenge",
      content: "Paybridge Financial, a high-growth payments processing startup, was racing against a product deadline. Their CTO needed 6 senior engineers — React + Node.js specialists — within 3 weeks. Internal HR had been trying for 6 weeks with no success. Three traditional staffing firms had provided a combined 45 resumes, none of which cleared the technical bar.",
      painPoints: [
        "6 weeks of failed traditional recruiting",
        "45 unqualified resumes from 3 agencies",
        "Hard 3-week deadline driven by a Series B investor milestone",
        "No DevOps help to coordinate rapid onboarding",
      ],
    },
    approach: {
      heading: "Our Approach",
      content: "We started with a 45-minute requirements deep-dive with the CTO and lead engineer to understand not just the technical requirements but the team culture, codebase complexity, and what 'great' looked like. Armed with that context, we ran a parallel track: drawing from our existing vetted pool and running targeted outreach.",
      steps: [
        "45-minute technical intake with CTO and lead engineer",
        "Identified 12 candidates from our vetted pool within 24 hours",
        "Ran technical assessments and live code reviews for all 12",
        "Delivered a shortlist of 8 with detailed assessment summaries",
        "Client interviewed 6 candidates over 2 days",
        "Extended offers to 5; all accepted",
        "Onboarding coordination with Paybridge's engineering manager",
      ],
    },
    results: {
      heading: "The Results",
      content: "All 6 engineers were onboarded and productive within 12 days of our initial intake call. Within 60 days of the expanded team, Paybridge hit their investor milestone — shipping the new payment processing module that handled 3x their previous transaction volume.",
      metrics: [
        { value: "12 days", label: "Time from intake to full team onboarded" },
        { value: "8 of 8", label: "Candidates passed our technical bar" },
        { value: "5 of 6", label: "Candidates received offers (1 withdrew)" },
        { value: "3x", label: "Transaction volume increase post-launch" },
      ],
    },
    clientQuote: {
      quote: "Tallend didn't just send us resumes. They understood our stack, our culture, and sent us exactly 8 candidates — all of whom were exceptional. We hired 5 of them. The whole process took less time than one traditional agency had spent sending us junk.",
      author: "Sarah Chen",
      title: "VP of Engineering",
      company: "Paybridge Financial",
    },
    relatedSlugs: ["medflow-patient-portal", "cloudscale-devops-transformation"],
  },
  "medflow-patient-portal": {
    title: "Building MedFlow's Patient Portal: From Zero to Launch in 4 Months",
    company: "MedFlow Health",
    industry: "Healthcare",
    service: "Managed Teams",
    publishedAt: "January 22, 2025",
    teamSize: "6-person managed team",
    duration: "4 months to launch",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA compliance tooling"],
    challenge: {
      heading: "The Challenge",
      content: "MedFlow Health, a digital health company serving 80+ clinics, needed to build a patient engagement portal from scratch. The portal needed to be HIPAA-compliant, integrate with three different EHR systems, and handle patient messaging, appointment booking, and health record access.",
      painPoints: [
        "Internal engineering team fully allocated to product maintenance",
        "No HIPAA implementation experience internally",
        "Three EHR integrations required (Epic, Cerner, Athena)",
        "Hard deadline from enterprise client contracts",
      ],
    },
    approach: {
      heading: "Our Approach",
      content: "We assembled a 6-person managed team within 12 days. The team included two frontend engineers with healthcare app experience, two backend engineers with EHR integration expertise, one QA engineer specializing in HIPAA compliance testing, and a project manager who had previously led HIPAA-compliant application builds.",
      steps: [
        "Team assembled from vetted pool in 12 days",
        "Sprint Zero: requirements alignment, architecture design, HIPAA compliance framework",
        "12 x 2-week sprints with weekly stakeholder demos",
        "Parallel EHR integration tracks to compress timeline",
        "Security audit and penetration testing pre-launch",
        "HIPAA compliance certification achieved pre-launch",
        "Phased rollout across client clinics",
      ],
    },
    results: {
      heading: "The Results",
      content: "The portal launched 6 weeks ahead of MedFlow's original internal estimate. The HIPAA compliance certification was achieved pre-launch with zero findings. Patient adoption reached 40% of eligible patients within 60 days — exceeding MedFlow's target of 25%.",
      metrics: [
        { value: "12 days", label: "Team assembled" },
        { value: "4 months", label: "Portal launched" },
        { value: "6 weeks", label: "Ahead of original estimate" },
        { value: "40%", label: "Patient adoption at 60 days" },
      ],
    },
    clientQuote: {
      quote: "The managed team model was exactly what we needed. The PM Tallend provided ran a tighter sprint process than anything we'd done internally. We had working software to demo every two weeks and never had a 'where are we?' moment.",
      author: "Marcus Williams",
      title: "CTO",
      company: "MedFlow Health",
    },
    relatedSlugs: ["paybridge-fintech-team-scale", "retailmax-data-platform"],
  },
  "retailmax-data-platform": {
    title: "RetailMax's Data Platform Modernization: From Chaos to Clarity",
    company: "RetailMax Inc.",
    industry: "E-commerce",
    service: "Full Implementation",
    publishedAt: "November 8, 2024",
    teamSize: "4-person data team",
    duration: "12 weeks to production",
    techStack: ["Snowflake", "dbt", "Apache Airflow", "Python", "AWS Glue", "Tableau"],
    challenge: {
      heading: "The Challenge",
      content: "RetailMax, a mid-market e-commerce company with $200M in annual revenue, had 5+ years of data scattered across a legacy data warehouse, multiple MySQL databases, a Salesforce instance, and Google Sheets. Their analytics team spent 70% of their time on data cleaning and pipeline maintenance rather than business insights.",
      painPoints: [
        "4TB of data across 7 disconnected systems",
        "Analytics team spending 70% of time on data wrangling",
        "No internal data engineering capability",
        "Inventory decisions being made on T+2 data (2-day lag)",
        "6 different BI tools in use with inconsistent numbers",
      ],
    },
    approach: {
      heading: "Our Approach",
      content: "Tallend led a full implementation engagement: 2-week discovery, 2-week architecture design, 8-week build, and 2-week cutover. We built a modern Snowflake + dbt + Airflow stack with a single source of truth across all data domains.",
      steps: [
        "2-week discovery: data audit, stakeholder interviews, requirements",
        "Architecture design: Snowflake + dbt + Airflow recommendation approved",
        "Data model design covering inventory, orders, customers, marketing",
        "ETL pipeline build with incremental loading strategies",
        "Historical data migration (4TB) with full validation",
        "Real-time inventory dashboard (from T+2 to T+15 minutes)",
        "Analyst training and documentation",
      ],
    },
    results: {
      heading: "The Results",
      content: "The new data platform consolidated all data sources into a single governed Snowflake environment. Analytics team time-on-insights jumped from 30% to 85%. RetailMax retired 4 legacy data systems, saving $1.2M annually. Inventory decisions now run on near-real-time data.",
      metrics: [
        { value: "$1.2M", label: "Annual infrastructure savings" },
        { value: "85%", label: "Analyst time on insights (was 30%)" },
        { value: "T+15m", label: "Inventory data latency (was T+2d)" },
        { value: "4", label: "Legacy systems retired" },
      ],
    },
    clientQuote: {
      quote: "We'd been burned by offshore vendors before on data projects. Tallend was different — fixed deliverables, transparent weekly reports, and the data quality coming out of the new pipeline is night and day from what we had.",
      author: "Jennifer Park",
      title: "Director of Analytics",
      company: "RetailMax Inc.",
    },
    relatedSlugs: ["medflow-patient-portal", "cloudscale-devops-transformation"],
  },
};

type SlugParams = { slug: string };

export async function generateStaticParams(): Promise<SlugParams[]> {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];
  if (!cs) return {};
  return genMeta({
    title: cs.title,
    description: `${cs.company} case study: ${cs.challenge.content.slice(0, 160)}`,
    canonical: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

  if (!cs) {
    notFound();
  }

  const relatedStudies = cs.relatedSlugs
    .map((s) => ({ slug: s, ...CASE_STUDIES[s as keyof typeof CASE_STUDIES] }))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="blue" size="sm">{cs.industry}</Badge>
            <Badge variant="outline" size="sm">{cs.service}</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {cs.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span>{cs.company}</span>
            <span>Team: {cs.teamSize}</span>
            <span>{cs.duration}</span>
            <span>{cs.publishedAt}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{cs.challenge.heading}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{cs.challenge.content}</p>
              <ul className="space-y-2">
                {cs.challenge.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{cs.approach.heading}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{cs.approach.content}</p>
              <ol className="space-y-2">
                {cs.approach.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{cs.results.heading}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{cs.results.content}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.results.metrics.map((metric) => (
                  <div key={metric.label} className="p-5 rounded-xl bg-blue-50 border border-blue-100">
                    <p className="text-2xl font-extrabold text-blue-600">{metric.value}</p>
                    <p className="text-sm text-slate-600 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Client Quote */}
            <blockquote className="border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-lg text-slate-700 italic leading-relaxed mb-4">
                &ldquo;{cs.clientQuote.quote}&rdquo;
              </p>
              <footer className="text-sm">
                <span className="font-semibold text-slate-900">{cs.clientQuote.author}</span>
                <span className="text-slate-500"> — {cs.clientQuote.title}, {cs.clientQuote.company}</span>
              </footer>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card padding="md">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {cs.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card padding="md" className="bg-blue-600 border-0">
              <p className="text-sm font-semibold text-white mb-3">Ready for similar results?</p>
              <p className="text-xs text-blue-100 mb-4">Tell us about your engineering challenge.</p>
              <Link href="/hire-talent">
                <Button variant="white" size="sm" fullWidth>Request Talent</Button>
              </Link>
            </Card>
          </aside>
        </div>

        {/* Related */}
        {relatedStudies.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-8">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedStudies.map((related) => (
                <Link key={related.slug} href={`/case-studies/${related.slug}`}>
                  <Card hover padding="md" className="h-full">
                    <div className="flex gap-2 mb-3">
                      <Badge variant="blue" size="sm">{related.industry}</Badge>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
