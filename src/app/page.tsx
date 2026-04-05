import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CtaBanner from "@/components/sections/CtaBanner";
import type { Testimonial } from "@/types";

export const metadata: Metadata = generateMetadata({
  title: "Tallend — IT Talent Supply & Managed Delivery",
  description:
    "The IT talent partner that delivers, not just supplies. Vetted engineers, dedicated managed teams, and end-to-end software delivery. 500+ placements, 98% client retention.",
  canonical: "/",
});

// ===== DATA =====

const STATS = [
  { value: "500+", label: "Talent Placements" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "48h", label: "Average Talent Match" },
  { value: "12", label: "Technology Domains" },
];

const SERVICES = [
  {
    title: "Hire Talent",
    description: "Individual vetted engineers and IT specialists placed within 48 hours. W-2, C2C, contract-to-hire — your engagement, your terms.",
    href: "/hire-talent",
    badge: "Most Popular",
  },
  {
    title: "Managed Teams",
    description: "Dedicated engineering pods with a project manager, sprint planning, weekly reporting, and full delivery accountability.",
    href: "/managed-teams",
    badge: null,
  },
  {
    title: "Full Implementation",
    description: "End-to-end software delivery from architecture to launch. Fixed-scope or agile sprint delivery with guaranteed outcomes.",
    href: "/full-implementation",
    badge: null,
  },
];

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Define",
    description: "Tell us the role, skills, engagement model, and timeline. We clarify requirements upfront so there are no surprises.",
  },
  {
    step: 2,
    title: "Match",
    description: "Our talent team sources from our pre-vetted network and shortlists candidates within 48 hours.",
  },
  {
    step: 3,
    title: "Vet",
    description: "Technical screening, background check, reference verification, and culture-fit assessment — done for you.",
  },
  {
    step: 4,
    title: "Deploy",
    description: "Onboard your new talent with confidence. We handle contracts, compliance, and ongoing support.",
  },
];

const TALENT_DOMAINS = [
  "Frontend Dev", "Backend Dev", "Cloud & DevOps", "Data Engineering",
  "AI / ML", "QA & Testing", "Cybersecurity", "SAP / ERP",
  "Mobile Dev", "Architecture", "Product Mgmt", "Agile / Scrum",
];

const CASE_STUDIES = [
  {
    industry: "FinTech",
    challenge: "Needed 6 React + Node.js engineers to scale their payments platform in 3 weeks",
    metric: "12 days",
    metricLabel: "Time to team",
  },
  {
    industry: "Healthcare SaaS",
    challenge: "Legacy EHR system migration requiring SAP expertise and strict HIPAA compliance",
    metric: "2 months",
    metricLabel: "Ahead of schedule",
  },
  {
    industry: "Enterprise",
    challenge: "Built a distributed data engineering team to modernize their analytics stack",
    metric: "$1.2M",
    metricLabel: "Annual savings",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Tallend didn't just send us resumes. They understood our stack, our culture, and sent us exactly 3 candidates — all of whom were exceptional. We hired 2 of them same week.",
    author: { name: "Sarah Chen", title: "VP of Engineering", company: "Paybridge Financial" },
    rating: 5,
  },
  {
    id: "t2",
    quote: "We spun up a managed team of 8 engineers in under 3 weeks. The PM Tallend provided was worth their weight in gold — sprint cadence, communication, reporting. Felt like a full internal team.",
    author: { name: "Marcus Williams", title: "CTO", company: "MedFlow Health" },
    rating: 5,
  },
  {
    id: "t3",
    quote: "We'd been burned by offshore vendors before. Tallend's full implementation model was different — fixed deliverables, transparent weekly demos, and they actually hit the launch date.",
    author: { name: "Jennifer Park", title: "Director of Product", company: "RetailMax Inc." },
    rating: 5,
  },
];

const BLOG_POSTS = [
  {
    category: "Talent Strategy",
    title: "Why 48-Hour Talent Matching Is Now the Industry Standard",
    excerpt: "The old model of 2-week sourcing cycles is dead. Here's how modern IT staffing firms are compressing time-to-placement without sacrificing quality.",
    author: "Tallend Editorial",
    readTime: 6,
    slug: "48-hour-talent-matching",
    categoryVariant: "blue" as const,
  },
  {
    category: "Tech Trends",
    title: "The Rise of the Hybrid IT Team: In-House + Managed Pods",
    excerpt: "More engineering leaders are adopting a core + flex model — keeping a small permanent team and supplementing with managed pods for surge capacity.",
    author: "Engineering Insights",
    readTime: 8,
    slug: "hybrid-it-team-model",
    categoryVariant: "cyan" as const,
  },
  {
    category: "Career Advice",
    title: "C2C vs W-2: Which Engagement Model Is Right for Your Career?",
    excerpt: "As an IT professional, the choice between independent contracting and W-2 employment has major financial and lifestyle implications. We break it all down.",
    author: "Tallend Careers",
    readTime: 5,
    slug: "c2c-vs-w2-career-guide",
    categoryVariant: "green" as const,
  },
];

const TRUST_LOGOS = [
  "TechCorp Industries", "Paybridge Financial", "MedFlow Health", "RetailMax", "CloudScale AI"
];

// ===== HOME PAGE =====
export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-44 md:pb-32">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              500+ vetted engineers placed
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight max-w-5xl">
              The IT Talent Partner That{" "}
              <span className="gradient-text">Delivers</span>,{" "}
              Not Just Supplies
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              From individual engineers to full managed teams and end-to-end software delivery — Tallend is the strategic partner that owns outcomes, not just headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/hire-talent">
                <Button variant="primary" size="lg">
                  Request Talent
                </Button>
              </Link>
              <Link href="/for-candidates">
                <Button variant="white" size="lg">
                  Browse Open Roles
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 w-full">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-5">
                Trusted by engineering teams at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {TRUST_LOGOS.map((logo) => (
                  <span key={logo} className="text-sm font-semibold text-slate-500 hover:text-slate-400 transition-colors">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-slate-100" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Services"
            heading="Three Ways We Deliver"
            subheading="Whether you need a single specialist, a full team, or end-to-end delivery — we have an engagement model that fits."
            align="center"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <Card key={service.title} hover padding="lg" className="flex flex-col group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  {service.badge && (
                    <Badge variant="blue" size="sm">{service.badge}</Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:gap-2.5 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="The Process"
            heading="From Brief to Deployed in Days"
            subheading="Our structured engagement process eliminates guesswork and dramatically cuts time-to-placement."
            align="center"
            ctaLabel="Full process walkthrough"
            ctaHref="/how-it-works"
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TALENT DOMAINS ===== */}
      <section className="py-20 md:py-28 bg-slate-950" aria-labelledby="domains-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Talent Coverage"
            heading="12 Technology Domains"
            subheading="Deep expertise across the full spectrum of modern software engineering."
            align="center"
            ctaLabel="Explore all domains"
            ctaHref="/talent-domains"
            theme="dark"
            className="mb-12"
          />

          <div className="flex flex-wrap gap-3 justify-center">
            {TALENT_DOMAINS.map((domain) => (
              <Link key={domain} href="/talent-domains">
                <span className="inline-flex items-center px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/60 text-sm font-medium text-slate-300 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10 transition-all cursor-pointer">
                  {domain}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="case-studies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Case Studies"
            heading="Real Results, Real Clients"
            subheading="See how we've helped engineering teams scale faster, deliver better, and operate smarter."
            align="center"
            ctaLabel="View all case studies"
            ctaHref="/case-studies"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Card key={cs.industry} hover padding="lg" className="flex flex-col">
                <Badge variant="blue" size="sm" className="mb-4 self-start">{cs.industry}</Badge>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                  <span className="font-semibold text-slate-900">Challenge: </span>
                  {cs.challenge}
                </p>
                <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-blue-600">{cs.metric}</p>
                    <p className="text-xs text-slate-500">{cs.metricLabel}</p>
                  </div>
                  <Link href="/case-studies" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Read more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Client Stories"
            heading="What Our Clients Say"
            subheading="Trusted by engineering leaders at high-growth startups and Fortune 500 companies alike."
            align="center"
            className="mb-14"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DUAL CTA BANNER ===== */}
      <CtaBanner
        variant="split"
        heading=""
        leftHeading="Ready to scale your engineering team?"
        leftSubheading="Tell us what you need. We'll match you with vetted IT talent within 48 hours — no bloated candidate lists, no wasted interviews."
        leftCta={{ label: "Request Talent", href: "/hire-talent", variant: "primary" }}
        rightHeading="Looking for your next role?"
        rightSubheading="Join the Tallend talent network. We connect top-tier engineers with high-impact projects, competitive rates, and both W-2 and C2C options."
        rightCta={{ label: "Join Our Network", href: "/for-candidates", variant: "white" }}
      />

      {/* ===== LATEST INSIGHTS ===== */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="insights-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Insights"
            heading="Latest from the Tallend Blog"
            subheading="Talent strategy, tech trends, and career guidance for IT professionals and engineering leaders."
            align="center"
            ctaLabel="View all posts"
            ctaHref="/insights"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Card key={post.slug} hover padding="none" className="flex flex-col overflow-hidden group">
                <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Badge variant={post.categoryVariant} size="md">{post.category}</Badge>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{post.author}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <Link
                  href={`/insights/${post.slug}`}
                  className="block px-6 py-3 border-t border-slate-100 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Read article &rarr;
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
