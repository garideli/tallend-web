import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export const metadata: Metadata = generateMetadata({
  title: "Insights — IT Talent, Technology & Future of Work",
  description:
    "Expert perspectives on IT talent strategy, technology trends, career advice for engineers, and the evolving landscape of software delivery.",
  canonical: "/insights",
});

const CATEGORIES = ["All", "Talent Strategy", "Tech Trends", "Career Advice", "Case Studies"];

const POSTS = [
  {
    slug: "48-hour-talent-matching",
    category: "Talent Strategy",
    categoryVariant: "blue" as const,
    title: "Why 48-Hour Talent Matching Is Now the Industry Standard",
    excerpt: "The old model of 2-week sourcing cycles is dead. Here's how modern IT staffing firms are compressing time-to-placement without sacrificing quality — and what it means for your hiring strategy.",
    author: { name: "David Chen", title: "Founder & CEO, Tallend" },
    date: "March 28, 2025",
    readTime: 6,
    tags: ["Staffing", "Hiring", "Process"],
  },
  {
    slug: "hybrid-it-team-model",
    category: "Tech Trends",
    categoryVariant: "cyan" as const,
    title: "The Rise of the Hybrid IT Team: In-House Core + Managed Pods",
    excerpt: "More engineering leaders are adopting a core + flex model — maintaining a small permanent team for institutional knowledge and supplementing with managed pods for surge capacity and specialized skills.",
    author: { name: "James Park", title: "Head of Client Success, Tallend" },
    date: "March 15, 2025",
    readTime: 8,
    tags: ["Engineering Management", "Team Structure", "Managed Teams"],
  },
  {
    slug: "c2c-vs-w2-career-guide",
    category: "Career Advice",
    categoryVariant: "green" as const,
    title: "C2C vs W-2: Which Engagement Model Is Right for Your Career in 2025?",
    excerpt: "As an IT professional, the choice between independent contracting and W-2 employment has major financial and lifestyle implications. We break down every factor to help you make the right call.",
    author: { name: "Sarah Martinez", title: "Head of Talent Operations, Tallend" },
    date: "February 20, 2025",
    readTime: 5,
    tags: ["Career", "Contracting", "W-2", "C2C"],
  },
  {
    slug: "engineering-team-red-flags",
    category: "Talent Strategy",
    categoryVariant: "blue" as const,
    title: "7 Red Flags in an Engineering Team That Signal It's Time to Bring In Talent",
    excerpt: "Velocity dropping, morale eroding, key engineers burning out — these are the symptoms. Here's how to diagnose what's wrong and what kind of talent injection actually solves the root cause.",
    author: { name: "David Chen", title: "Founder & CEO, Tallend" },
    date: "February 5, 2025",
    readTime: 7,
    tags: ["Engineering Management", "Team Health", "Hiring"],
  },
  {
    slug: "data-engineering-demand-2025",
    category: "Tech Trends",
    categoryVariant: "cyan" as const,
    title: "Data Engineering Demand in 2025: Why Every Company Is Becoming a Data Company",
    excerpt: "The data engineering talent market is white-hot. We analyzed our placement data across 500+ engagements to understand what skills are in demand, what companies are building, and what candidates should know.",
    author: { name: "Priya Sharma", title: "Senior Talent Director, Tallend" },
    date: "January 30, 2025",
    readTime: 9,
    tags: ["Data Engineering", "Snowflake", "dbt", "Talent Market"],
  },
  {
    slug: "technical-interview-guide-candidates",
    category: "Career Advice",
    categoryVariant: "green" as const,
    title: "The Tallend Technical Interview Playbook: How Our Clients Interview and How to Prepare",
    excerpt: "Based on thousands of candidate placements, here's exactly what technical interviews look like at our client companies — and the strategies that separate the candidates who get offers from those who don't.",
    author: { name: "Sarah Martinez", title: "Head of Talent Operations, Tallend" },
    date: "January 15, 2025",
    readTime: 10,
    tags: ["Career", "Interview Prep", "Technical Screen"],
  },
  {
    slug: "sow-vs-staffing-augmentation",
    category: "Talent Strategy",
    categoryVariant: "blue" as const,
    title: "Staff Augmentation vs. Statement of Work: Choosing the Right Model",
    excerpt: "Should you bring in contractors to join your team, or hire a vendor to own the whole deliverable? The answer depends on factors most companies don't consider upfront. Here's a decision framework.",
    author: { name: "James Park", title: "Head of Client Success, Tallend" },
    date: "December 12, 2024",
    readTime: 6,
    tags: ["Staffing", "SOW", "Managed Teams", "Strategy"],
  },
  {
    slug: "ai-ml-talent-market",
    category: "Tech Trends",
    categoryVariant: "cyan" as const,
    title: "The AI/ML Talent Crunch: What Engineering Leaders Need to Know",
    excerpt: "LLM engineers, MLOps specialists, and AI application developers are in extraordinary demand. We break down the talent landscape, realistic expectations, and how to actually hire in this market.",
    author: { name: "Priya Sharma", title: "Senior Talent Director, Tallend" },
    date: "November 20, 2024",
    readTime: 8,
    tags: ["AI", "ML", "LLMs", "Hiring"],
  },
  {
    slug: "contractor-rates-benchmark-2025",
    category: "Career Advice",
    categoryVariant: "green" as const,
    title: "IT Contractor Rate Benchmark 2025: What Top Engineers Are Really Earning",
    excerpt: "We analyzed bill rates across 500+ placements to build the most honest public benchmark of IT contractor rates by domain, experience level, and engagement type. No padding, no incentive to inflate.",
    author: { name: "Sarah Martinez", title: "Head of Talent Operations, Tallend" },
    date: "November 5, 2024",
    readTime: 12,
    tags: ["Salary", "Rates", "Benchmark", "Contracting"],
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 text-center">
          <Badge variant="blue" size="md" className="mb-6">Insights</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Insights on IT Talent,{" "}
            <span className="gradient-text">Technology & the Future of Work</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert perspectives from the people who live and breathe IT talent every day.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Card
                key={post.slug}
                hover
                padding="none"
                className="flex flex-col overflow-hidden group"
              >
                {/* Cover placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                  <Badge variant={post.categoryVariant} size="md">{post.category}</Badge>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                    <span>{post.author.name}</span>
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} min</span>
                    </div>
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

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium" aria-current="page">1</button>
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">2</button>
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">3</button>
          </div>
        </div>
      </section>
    </>
  );
}
