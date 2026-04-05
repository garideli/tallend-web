import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = generateMetadata({
  title: "Full Software Implementation & Delivery",
  description:
    "End-to-end software delivery, guaranteed. From discovery to launch — Tallend owns the full project lifecycle with transparent agile delivery and fixed outcomes.",
  canonical: "/full-implementation",
});

const DELIVERY_PHASES = [
  {
    phase: "01",
    title: "Discovery & Requirements",
    description: "We embed with your stakeholders to deeply understand business requirements, user needs, and technical constraints. Outputs include: stakeholder interviews, user story mapping, technical feasibility assessment, and a project brief.",
    duration: "1–2 weeks",
    outputs: ["Requirements document", "User story map", "Technical assessment", "Project charter"],
  },
  {
    phase: "02",
    title: "Architecture & Design",
    description: "Our senior architects design the system architecture, data models, API contracts, and infrastructure blueprint. We deliver complete technical specifications before a single line of code is written.",
    duration: "1–2 weeks",
    outputs: ["System architecture diagram", "Database schema", "API specification", "UI/UX wireframes"],
  },
  {
    phase: "03",
    title: "Development",
    description: "Agile sprint development with 2-week cycles, daily standups, and bi-weekly stakeholder demos. Full transparency into progress via shared Jira boards and weekly status reports.",
    duration: "6–16 weeks",
    outputs: ["Sprint demo recordings", "Weekly status reports", "Staging environment", "Code repository"],
  },
  {
    phase: "04",
    title: "QA & Testing",
    description: "Comprehensive testing including unit tests, integration tests, E2E automation, load testing, and security scanning. We target >80% test coverage before launch.",
    duration: "Parallel with Dev",
    outputs: ["QA test plan", "Automated test suite", "Bug triage reports", "Performance test results"],
  },
  {
    phase: "05",
    title: "Launch & Deployment",
    description: "Controlled production rollout with deployment runbooks, monitoring setup, rollback procedures, and a dedicated launch war room. We don't just ship — we stand by the launch.",
    duration: "1 week",
    outputs: ["Launch runbook", "Monitoring dashboard", "Rollback plan", "Launch readiness checklist"],
  },
  {
    phase: "06",
    title: "Post-Launch Support",
    description: "30 days of included post-launch support for bug fixes and performance tuning. Extended maintenance plans available. Knowledge transfer and documentation for your internal team.",
    duration: "30+ days",
    outputs: ["Technical documentation", "Runbooks", "Knowledge transfer sessions", "Support SLA"],
  },
];

const TECH_STACKS = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python (Django/FastAPI)", "Java (Spring Boot)", ".NET Core", "Go", "Ruby on Rails"],
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    category: "Databases",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Snowflake", "DynamoDB"],
  },
  {
    category: "Data & AI",
    techs: ["Apache Spark", "dbt", "Airflow", "Kafka", "Python ML", "OpenAI API", "LangChain"],
  },
  {
    category: "Mobile",
    techs: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Expo"],
  },
];

const PROJECT_TYPES = [
  {
    type: "New Product Builds",
    description: "Greenfield SaaS products, internal tools, customer-facing platforms, and mobile applications — built from scratch with scalability in mind.",
    examples: ["SaaS platform", "Customer portal", "Internal tooling", "Mobile app"],
  },
  {
    type: "Platform Migrations",
    description: "Migrating from legacy systems, monoliths to microservices, on-premise to cloud, or one cloud provider to another — with zero-downtime strategies.",
    examples: ["Cloud migration", "Monolith to microservices", "Database migration", "Provider switch"],
  },
  {
    type: "Legacy Modernization",
    description: "Strangler fig patterns, API wrapping, and incremental refactoring to modernize aging systems without a full rewrite risk.",
    examples: ["Legacy refactor", "API-first architecture", "UI modernization", "Tech debt reduction"],
  },
  {
    type: "Data Platform Builds",
    description: "Modern data warehouses, analytics platforms, ETL/ELT pipelines, and dashboards that turn raw data into business insights.",
    examples: ["Data warehouse", "Analytics dashboard", "ETL pipelines", "Real-time streaming"],
  },
];

const METHODOLOGY = [
  {
    title: "Agile Sprints",
    description: "2-week sprint cycles with clear goals, daily standups, and sprint retrospectives to continuously improve velocity and quality.",
  },
  {
    title: "Weekly Demos",
    description: "Every 2 weeks (or more frequently if preferred), we demo working software to your stakeholders. No surprises at the end.",
  },
  {
    title: "Transparent Reporting",
    description: "Shared Jira board, weekly written status reports covering completed work, blockers, risks, and next sprint goals.",
  },
  {
    title: "Defined Milestones",
    description: "Project broken into clear milestones with sign-off checkpoints. Scope changes go through a formal change request process.",
  },
];

export default function FullImplementationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <Badge variant="navy" size="md" className="bg-white/10 text-white border-white/20">Full Implementation</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              End-to-End Software Delivery,{" "}
              <span className="gradient-text">Guaranteed</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              We don't just staff a team and wish you luck. We take full ownership of the project lifecycle — from discovery to production launch to post-launch support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Start Your Project</Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="white" size="lg">See Our Work</Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400 pt-2">
              {["Fixed-scope & agile options", "Weekly stakeholder demos", "Full IP ownership", "30-day post-launch support"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Phases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="What We Deliver"
            heading="The Full Delivery Lifecycle"
            subheading="A structured 6-phase process that takes your project from idea to production with transparency at every step."
            align="center"
            className="mb-14"
          />
          <div className="space-y-6">
            {DELIVERY_PHASES.map((phase) => (
              <div key={phase.phase} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {phase.phase}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{phase.duration}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.outputs.map((output) => (
                      <span key={output} className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Technology"
            heading="Technology Stacks We Work With"
            subheading="Opinionated about quality and best practices — not religion about specific tools."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACKS.map((stack) => (
              <Card key={stack.category} padding="md">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{stack.category}</p>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Project Types"
            heading="What We Build"
            subheading="We have deep experience across four categories of software delivery work."
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECT_TYPES.map((project) => (
              <Card key={project.type} hover padding="lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{project.type}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.examples.map((example) => (
                    <Badge key={example} variant="blue" size="sm">{example}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="How We Work"
            heading="Our Delivery Methodology"
            align="center"
            theme="dark"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY.map((method) => (
              <div key={method.title} className="p-6 rounded-2xl bg-white/10 border border-white/20">
                <h3 className="text-base font-bold text-white mb-3">{method.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        variant="single"
        heading="Have a Project in Mind?"
        subheading="Share your vision and requirements. We'll come back with a project proposal, timeline, and cost estimate within 5 business days."
        ctas={[
          { label: "Start Your Project", href: "/contact", variant: "white" },
          { label: "View Case Studies", href: "/case-studies", variant: "secondary" },
        ]}
      />
    </>
  );
}
