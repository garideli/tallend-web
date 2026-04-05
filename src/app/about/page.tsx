import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = generateMetadata({
  title: "About Tallend — Built by Practitioners, Powered by Trust",
  description:
    "Tallend was founded by engineers who'd experienced both sides of IT staffing. We built the firm we always wished existed — rigorous vetting, transparent process, real accountability.",
  canonical: "/about",
});

const CORE_VALUES = [
  {
    title: "Technical Rigor",
    description: "We only vouch for talent we'd hire ourselves. Our vetting bar is high because it has to be — our reputation is on the line with every placement.",
    icon: "🎯",
  },
  {
    title: "Radical Transparency",
    description: "No surprises. We communicate honestly about what we can and can't deliver, what a placement will cost, and how our process works. Always.",
    icon: "🪟",
  },
  {
    title: "Long-Term Thinking",
    description: "We build relationships, not transactions. We care about our clients' businesses and our candidates' careers for the long haul — not just the next invoice.",
    icon: "🌱",
  },
  {
    title: "Accountability",
    description: "We stand behind our placements with guarantees. If something isn't right, we fix it. We don't point fingers or make excuses — we own it.",
    icon: "🤝",
  },
];

const TEAM_MEMBERS = [
  {
    name: "David Chen",
    title: "Founder & CEO",
    bio: "15 years in software engineering and technical leadership. Former principal engineer at two FinTech unicorns. Built Tallend after getting burned by traditional staffing firms on both sides of the table.",
    initials: "DC",
    color: "bg-blue-600",
  },
  {
    name: "Sarah Martinez",
    title: "Head of Talent Operations",
    bio: "10 years in technical recruiting and talent operations. Developed Tallend's vetting methodology and scaled our talent pool from 12 to 500+ engineers. Believes deeply that quality > quantity.",
    initials: "SM",
    color: "bg-emerald-600",
  },
  {
    name: "James Park",
    title: "Head of Client Success",
    bio: "Former engineering manager and VP of Engineering at two SaaS companies. Bridges the gap between client requirements and talent capabilities. Ensures every engagement exceeds expectations.",
    initials: "JP",
    color: "bg-purple-600",
  },
  {
    name: "Priya Sharma",
    title: "Senior Talent Director",
    bio: "8 years specialized in data engineering and AI/ML talent placement. Built our technical assessment framework for data and AI roles. Former data engineer turned talent specialist.",
    initials: "PS",
    color: "bg-cyan-600",
  },
  {
    name: "Michael Torres",
    title: "Head of Delivery",
    bio: "Leads our managed teams and full implementation practice. Former director of engineering who has led teams of 50+ engineers. Oversees all client delivery engagements and PM standards.",
    initials: "MT",
    color: "bg-amber-600",
  },
  {
    name: "Lisa Nguyen",
    title: "Head of Finance & Operations",
    bio: "CPA with 12 years in professional services and staffing operations. Oversees compliance, payroll, benefits, and financial operations. Ensures we operate with the same rigor we demand from our talent.",
    initials: "LN",
    color: "bg-rose-600",
  },
];

const STATS = [
  { value: "500+", label: "Engineers Placed", description: "Across 12 technology domains" },
  { value: "98%", label: "Client Retention", description: "Clients who return for additional engagements" },
  { value: "48h", label: "Average Match Time", description: "From request to shortlist" },
  { value: "4.9/5", label: "Candidate NPS", description: "Average satisfaction score" },
];

const PARTNERS = [
  "AWS Partner Network",
  "Microsoft ISV Partner",
  "SHRM Member",
  "CompTIA Member",
  "SOC 2 Type II (in progress)",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 text-center">
          <Badge variant="blue" size="md" className="mb-6">About Tallend</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Built by Practitioners,{" "}
            <span className="gradient-text">Powered by Trust</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re the IT staffing firm founded by engineers who&apos;d been burned by traditional staffing. We built what we always wished existed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="blue" size="sm" className="mb-4">Our Mission</Badge>
          <blockquote className="text-2xl sm:text-3xl font-bold text-slate-900 leading-relaxed">
            &ldquo;To be the IT talent partner that companies actually trust and engineers actually recommend.&rdquo;
          </blockquote>
          <p className="mt-6 text-slate-600 leading-relaxed text-lg">
            Not by being the biggest. Not by having the most candidates in a database. But by being obsessively rigorous about quality, radically transparent about process, and genuinely invested in outcomes for both sides.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Story"
            heading="Why We Built Tallend"
            align="left"
            className="mb-10"
          />
          <div className="prose-tallend space-y-5 text-slate-600">
            <p>
              Tallend was founded in 2019 by David Chen, a software engineer who&apos;d spent 15 years building products at technology companies. Like most engineers, David had experienced both sides of IT staffing — as a hiring manager trying to build teams, and as a contractor navigating the landscape of staffing firms.
            </p>
            <p>
              The experience was frustrating on both sides. As a hiring manager, he&apos;d receive dozens of resumes from staffing agencies — most technically unqualified, few with any context about why they were a good fit. As a contractor, he&apos;d dealt with agencies that misrepresented roles, paid late, and disappeared the moment a contract ended.
            </p>
            <p>
              The root cause was structural: traditional staffing firms optimize for volume and velocity. The more resumes they submit, the more likely one sticks. The engineering rigor to actually evaluate technical candidates properly doesn&apos;t exist because most staffing firms aren&apos;t run by engineers.
            </p>
            <p>
              So David left engineering to build the firm he always wished existed. One where the vetting was real — conducted by engineers, not just HR. One where clients got a shortlist of 3, not a dump of 30. One where candidates were treated as professionals and actually advocated for throughout their engagement.
            </p>
            <p>
              Five years later, Tallend has placed 500+ engineers, serves dozens of clients across FinTech, Healthcare, SaaS, and Enterprise, and has expanded from pure staffing into managed teams and full software delivery. The values haven&apos;t changed. The mission hasn&apos;t changed. We&apos;re still that firm.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Core Values"
            heading="What We Stand For"
            subheading="Four principles that guide every decision we make — in talent, delivery, and our own culture."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {CORE_VALUES.map((value) => (
              <Card key={value.title} hover padding="lg" className="flex gap-5">
                <span className="text-4xl shrink-0" aria-hidden="true">{value.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Leadership"
            heading="The People Behind Tallend"
            subheading="Practitioners, operators, and talent experts with real skin in the game."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name} hover padding="lg" className="flex flex-col gap-4">
                <div className={`w-14 h-14 rounded-full ${member.color} text-white flex items-center justify-center text-lg font-bold`} aria-hidden="true">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-600">{member.title}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="By the Numbers"
            heading="Our Track Record"
            align="center"
            theme="dark"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                theme="dark"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Memberships & Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {PARTNERS.map((partner) => (
              <span key={partner} className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        variant="single"
        heading="Work With a Team That Gets It"
        subheading="We've been on both sides of the table. That's why we do this differently."
        ctas={[
          { label: "Request Talent", href: "/hire-talent", variant: "white" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
