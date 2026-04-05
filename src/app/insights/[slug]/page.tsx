import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateMetadata as genMeta } from "@/lib/seo";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { PageProps } from "@/types";

const ARTICLES = {
  "48-hour-talent-matching": {
    title: "Why 48-Hour Talent Matching Is Now the Industry Standard",
    category: "Talent Strategy",
    categoryVariant: "blue" as const,
    author: { name: "David Chen", title: "Founder & CEO, Tallend", initials: "DC", color: "bg-blue-600" },
    date: "March 28, 2025",
    readTime: 6,
    excerpt: "The old model of 2-week sourcing cycles is dead. Here's how modern IT staffing firms are compressing time-to-placement without sacrificing quality.",
    toc: [
      "Why the Old Model Broke Down",
      "The Technology Behind Faster Matching",
      "Quality vs. Speed: A False Tradeoff",
      "What This Means for Hiring Managers",
      "Takeaways",
    ],
    content: [
      {
        heading: "Why the Old Model Broke Down",
        body: `Traditional IT staffing worked like this: a client submits a job description, a recruiter searches a resume database, sends a batch of 15–20 resumes, and waits for the client to filter. This cycle took 1–2 weeks, and the hit rate was terrible. Hiring managers spent hours reviewing unqualified candidates. The recruiter's incentive was volume, not quality.

The model broke down because the technology landscape changed faster than the staffing industry adapted. Job requirements became more specific. Stack preferences became more prescriptive. "Senior developer" stopped meaning anything without context.

Meanwhile, the opportunity cost of an unfilled engineering seat increased dramatically. A mid-sized SaaS company losing a backend engineer for 3 weeks might mean a delayed product launch, which means delayed revenue. The math changed.`,
      },
      {
        heading: "The Technology Behind Faster Matching",
        body: `The firms that cracked 48-hour matching didn't do it by working faster — they did it by building better systems.

First, they shifted from reactive sourcing (search the database when a req comes in) to proactive vetting (maintain a pool of pre-screened, actively engaged talent). Every candidate in a modern talent pool should already have a technical assessment on file, verified references, and an up-to-date conversation about availability and preferences.

Second, they invested in structured intake. The single biggest bottleneck in traditional staffing isn't the search — it's clarifying what the client actually needs. A 30-minute structured intake call, conducted with the right questions, can unlock specificity that saves days of back-and-forth.

Third, they decoupled the screening process from the placement event. Instead of screening candidates in response to a specific opening, they screen candidates continuously, against a set of domain benchmarks. When a role comes in, the matching is a lookup — not a pipeline.`,
      },
      {
        heading: "Quality vs. Speed: A False Tradeoff",
        body: `The pushback we hear is predictable: "Moving faster means lower quality." This conflates two things: the speed of the search and the depth of the vetting.

You can take 3 weeks to find an unvetted candidate, or 48 hours to deliver a deeply vetted one. The speed of the search is a function of the talent pool you have. The quality of the vetting is a function of your assessment process.

Tallend's candidates are technically assessed by domain experts before they ever enter our pool. We're not finding them in response to your role — we've already found them, evaluated them, and kept them engaged. When your requirement comes in, we're matching against an existing set of evaluated profiles.

The result is faster delivery and higher quality. Not one or the other.`,
      },
      {
        heading: "What This Means for Hiring Managers",
        body: `If you're still waiting 2 weeks for a candidate shortlist, you're working with a firm that hasn't built the systems for modern talent delivery.

The benchmark is now 48 hours for a curated shortlist of 2–4 pre-screened candidates. If your current partner can't hit that, it's worth having a conversation about why — and what it would take to change.

On your end, the fastest placements happen when you can do three things: articulate the technical requirements clearly (stack, seniority, scope), define "good" with a specific example ("we want someone like our current senior engineer"), and move quickly on interviews when you receive a good candidate (the best candidates have multiple options).

Speed is a partnership. When both sides move fast, time-to-hire compresses dramatically.`,
      },
      {
        heading: "Takeaways",
        body: `48-hour talent matching is achievable without sacrificing quality — but only if your staffing partner has invested in the right systems: a proactive vetted pool, structured intake, and domain-specific assessment.

For hiring managers, the practical implication is: hold your staffing partners to a higher standard. A 2-week sourcing cycle is not a market constraint — it's an operational failure. Demand faster, and find partners who can deliver it.

For candidates, the implication is also important: being in a well-managed talent network with a real vetting process means you get presented to the right opportunities faster. It's not just better for clients — it's better for candidates.`,
      },
    ],
    relatedSlugs: ["hybrid-it-team-model", "c2c-vs-w2-career-guide"],
  },
  "hybrid-it-team-model": {
    title: "The Rise of the Hybrid IT Team: In-House Core + Managed Pods",
    category: "Tech Trends",
    categoryVariant: "cyan" as const,
    author: { name: "James Park", title: "Head of Client Success, Tallend", initials: "JP", color: "bg-purple-600" },
    date: "March 15, 2025",
    readTime: 8,
    excerpt: "More engineering leaders are adopting a core + flex model for their engineering teams.",
    toc: ["The Core + Flex Model", "When It Works (and When It Doesn't)", "Implementation Playbook", "The Numbers"],
    content: [
      {
        heading: "The Core + Flex Model",
        body: `The hybrid team model has emerged as one of the most effective strategies for engineering organizations navigating uncertain growth. The basic premise: maintain a small, stable core of permanent employees who own domain knowledge and institutional memory, and supplement with managed pods for specialized work, surge capacity, or product initiatives.

The core team — typically 3–8 engineers depending on organization size — handles the product fundamentals, critical infrastructure, and anything requiring deep context. The pods are purpose-built units brought in for specific initiatives: a new product feature, a platform migration, a data warehouse build.

This isn't a new concept, but it's become significantly more practical as managed team delivery (versus raw staff augmentation) has matured. The key distinction is that managed pods come with built-in PM, delivery cadence, and accountability — not just bodies.`,
      },
      {
        heading: "When It Works (and When It Doesn't)",
        body: `The hybrid model works best when you have well-defined separability between your core work and the pod's work. If the two teams are constantly blocked on each other, the overhead of coordination eats the efficiency gains.

It works particularly well for: greenfield feature development (new products, new modules), time-bounded migrations and infrastructure work, specialized expertise that doesn't justify a permanent hire, and surge capacity for seasonal or sales-driven demand spikes.

It works poorly when: the pod work requires deep integration with the core codebase that takes months to ramp up, when the core team's capacity is itself the bottleneck (adding a pod doesn't help if the internal API they depend on is slow), or when the organizational culture strongly resists external teams.

The honest assessment: the hybrid model requires maturity on the client side. You need strong internal engineering leadership who can define pod scope, manage the interface points, and run effective handoffs.`,
      },
    ],
    relatedSlugs: ["48-hour-talent-matching", "sow-vs-staffing-augmentation"],
  },
  "c2c-vs-w2-career-guide": {
    title: "C2C vs W-2: Which Engagement Model Is Right for Your Career in 2025?",
    category: "Career Advice",
    categoryVariant: "green" as const,
    author: { name: "Sarah Martinez", title: "Head of Talent Operations, Tallend", initials: "SM", color: "bg-emerald-600" },
    date: "February 20, 2025",
    readTime: 5,
    excerpt: "The choice between C2C and W-2 has major financial and lifestyle implications for IT professionals.",
    toc: ["Understanding the Models", "Financial Comparison", "Benefits and Protections", "Which Model Fits You", "Making the Switch"],
    content: [
      {
        heading: "Understanding the Models",
        body: `W-2 employment means you're on an employer's payroll — either the staffing firm or the client company directly. Taxes are withheld, you may receive benefits, and you're classified as an employee under labor law.

Corp-to-Corp (C2C) means you operate through your own business entity (typically an LLC or S-Corp) and bill as a contractor. You're responsible for your own taxes, insurance, and benefits. The bill rate is typically higher to account for this.

1099/independent contractor is a variation where you bill directly without a corporate entity, though this is increasingly restricted due to misclassification concerns in many states.`,
      },
      {
        heading: "Financial Comparison",
        body: `The math is more nuanced than "C2C pays more."

On a W-2 engagement at $80/hr (assuming 2,080 hours/year): gross income is $166,400. After taxes (~25–30% effective rate), take-home is approximately $116,000–$125,000. Add employer-covered benefits (health, dental, vision, sometimes 401k match) worth $8,000–$15,000/year.

On a C2C engagement at $95/hr (a common premium for C2C): gross revenue through your business is $197,600. From this you pay: self-employment tax (15.3% on first ~$160k of net income), business expenses, health insurance (typically $5,000–$12,000/year for individual coverage), retirement contributions (which are deductible). Effective after-tax take-home is often $130,000–$150,000 — higher than W-2, but not dramatically so at these rates.

The spread widens significantly at higher rate levels. At $150+/hr C2C, the tax optimization available through an S-Corp structure (salary + distribution) can be worth $20,000+/year versus W-2.`,
      },
    ],
    relatedSlugs: ["48-hour-talent-matching", "contractor-rates-benchmark-2025"],
  },
};

// Stub articles for slugs that appear in relatedSlugs but don't have full articles
const ARTICLE_STUBS: Record<string, { title: string; category: string; categoryVariant: "blue" | "cyan" | "green" }> = {
  "sow-vs-staffing-augmentation": { title: "Staff Augmentation vs. Statement of Work: Choosing the Right Model", category: "Talent Strategy", categoryVariant: "blue" },
  "contractor-rates-benchmark-2025": { title: "IT Contractor Rate Benchmark 2025", category: "Career Advice", categoryVariant: "green" },
};

type SlugParams = { slug: string };

export async function generateStaticParams(): Promise<SlugParams[]> {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug as keyof typeof ARTICLES];
  if (!article) return {};
  return genMeta({
    title: article.title,
    description: article.excerpt,
    canonical: `/insights/${slug}`,
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES[slug as keyof typeof ARTICLES];

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs.map((s) => {
    const full = ARTICLES[s as keyof typeof ARTICLES];
    if (full) return { slug: s, title: full.title, category: full.category, categoryVariant: full.categoryVariant };
    const stub = ARTICLE_STUBS[s];
    if (stub) return { slug: s, ...stub };
    return null;
  }).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
          <Badge variant={article.categoryVariant} size="md" className="mb-6">{article.category}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${article.author.color} text-white text-xs font-bold flex items-center justify-center`} aria-hidden="true">
                {article.author.initials}
              </div>
              <span>{article.author.name}</span>
            </div>
            <span>{article.date}</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* TOC Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Table of Contents
              </p>
              <nav aria-label="Article table of contents">
                <ul className="space-y-2">
                  {article.toc.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                        className="text-sm text-slate-500 hover:text-blue-600 transition-colors leading-snug"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs font-semibold text-blue-800 mb-2">Ready to act?</p>
                <p className="text-xs text-blue-700 mb-3">Get matched with vetted IT talent in 48 hours.</p>
                <Link href="/hire-talent">
                  <Button variant="primary" size="sm" fullWidth>Request Talent</Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="lg:col-span-3 prose-tallend">
            <p className="text-lg text-slate-700 leading-relaxed mb-10 font-medium">
              {article.excerpt}
            </p>

            {article.content.map((section) => (
              <section
                key={section.heading}
                id={section.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                {section.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* Share + Author */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full ${article.author.color} text-white text-sm font-bold flex items-center justify-center shrink-0`} aria-hidden="true">
                  {article.author.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{article.author.name}</p>
                  <p className="text-sm text-slate-500">{article.author.title}</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => rel && (
                <Link key={rel.slug} href={`/insights/${rel.slug}`}>
                  <Card hover padding="md" className="h-full">
                    <Badge variant={rel.categoryVariant} size="sm" className="mb-3">{rel.category}</Badge>
                    <h3 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                      {rel.title}
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
