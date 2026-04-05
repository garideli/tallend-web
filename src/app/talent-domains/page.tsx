import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = generateMetadata({
  title: "IT Talent Domains & Specializations",
  description:
    "Deep expertise across 12 technology domains — Frontend, Backend, Cloud/DevOps, Data Engineering, AI/ML, QA, Cybersecurity, SAP/ERP, Mobile, Architecture, Product, and Agile/PM.",
  canonical: "/talent-domains",
});

const DOMAINS = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Modern frontend engineers who build fast, accessible, and maintainable user interfaces. Our frontend talent spans from pixel-perfect UI to complex state management and micro-frontend architectures.",
    skills: ["React", "Next.js", "Vue.js", "Nuxt", "Angular", "TypeScript", "Tailwind CSS", "Storybook", "GraphQL / Apollo", "Performance Optimization"],
    roles: ["Senior React Engineer", "Frontend Tech Lead", "UI/UX Engineer", "Frontend Architect", "Staff Engineer"],
    demandLevel: "high" as const,
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "API architects and backend engineers who build scalable, maintainable services. From REST/GraphQL APIs to event-driven microservices, our backend talent covers the full server-side spectrum.",
    skills: ["Node.js", "Python (Django, FastAPI)", "Java (Spring Boot)", ".NET / C#", "Go", "Ruby on Rails", "PostgreSQL", "MongoDB", "Redis", "Microservices"],
    roles: ["Senior Backend Engineer", "API Architect", "Platform Engineer", "Backend Tech Lead", "Staff Software Engineer"],
    demandLevel: "high" as const,
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Infrastructure engineers and DevOps specialists who design resilient cloud architectures, build automated CI/CD pipelines, and implement infrastructure as code for production-grade systems.",
    skills: ["AWS", "Google Cloud (GCP)", "Microsoft Azure", "Kubernetes", "Docker", "Terraform", "Ansible", "GitHub Actions", "Datadog / PagerDuty", "Site Reliability Engineering"],
    roles: ["Senior DevOps Engineer", "Cloud Architect", "SRE", "Platform Engineer", "Infrastructure Lead"],
    demandLevel: "high" as const,
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    description: "Data engineers who design and build the pipelines, warehouses, and infrastructure that powers data-driven organizations. From streaming data to batch ETL to lakehouse architectures.",
    skills: ["Apache Spark", "Apache Kafka", "dbt (data build tool)", "Snowflake", "Databricks", "Apache Airflow", "AWS Glue", "BigQuery", "Redshift", "Python"],
    roles: ["Senior Data Engineer", "Data Platform Architect", "Analytics Engineer", "Data Lead", "MLOps Engineer"],
    demandLevel: "high" as const,
  },
  {
    id: "ai-ml",
    name: "AI / Machine Learning",
    description: "ML engineers and AI practitioners who build production machine learning systems — from classical ML to deep learning to large language model applications and generative AI integration.",
    skills: ["Python", "TensorFlow / PyTorch", "Scikit-learn", "LangChain / LlamaIndex", "OpenAI API", "Hugging Face", "MLflow", "Feature Engineering", "Model Deployment", "RAG Systems"],
    roles: ["ML Engineer", "AI/ML Lead", "LLM Engineer", "Data Scientist", "Applied AI Engineer"],
    demandLevel: "growing" as const,
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    description: "Quality assurance engineers who build comprehensive test coverage — manual, automated, performance, and security testing — ensuring software ships with confidence.",
    skills: ["Selenium", "Cypress", "Playwright", "Jest / Vitest", "k6 / Gatling", "Postman / Newman", "SDET", "BDD/Gherkin", "TestRail", "Accessibility Testing"],
    roles: ["Senior QA Engineer", "SDET", "Automation Lead", "QA Architect", "Performance Test Engineer"],
    demandLevel: "medium" as const,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Security engineers and analysts who protect applications, infrastructure, and data. From threat modeling and penetration testing to SOC operations and cloud security posture management.",
    skills: ["Penetration Testing", "SIEM (Splunk, Sentinel)", "Cloud Security (AWS/Azure)", "IAM / Zero Trust", "Vulnerability Assessment", "OWASP", "SOC Analysis", "Compliance (SOC2, HIPAA, FedRAMP)", "Incident Response", "Security Architecture"],
    roles: ["Application Security Engineer", "Cloud Security Architect", "SOC Analyst", "Penetration Tester", "Security Lead"],
    demandLevel: "high" as const,
  },
  {
    id: "sap-erp",
    name: "SAP / ERP",
    description: "Enterprise application specialists across SAP and leading ERP platforms. Configuration, development, integration, and implementation expertise for mission-critical business systems.",
    skills: ["SAP S/4HANA", "SAP BTP", "ABAP", "SAP Fiori / UI5", "Salesforce (CRM)", "Oracle EBS", "Workday", "ServiceNow", "SAP Integration Suite", "SAP Analytics Cloud"],
    roles: ["SAP S/4HANA Consultant", "ABAP Developer", "Salesforce Architect", "ERP Project Manager", "SAP Basis Administrator"],
    demandLevel: "medium" as const,
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "Mobile engineers who build high-quality native and cross-platform applications for iOS and Android. From consumer apps to enterprise mobility solutions.",
    skills: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Expo", "Native iOS (UIKit/SwiftUI)", "Native Android (Jetpack Compose)", "Firebase", "App Store Optimization", "Mobile CI/CD"],
    roles: ["Senior React Native Developer", "iOS Engineer", "Android Engineer", "Mobile Tech Lead", "Cross-Platform Mobile Architect"],
    demandLevel: "high" as const,
  },
  {
    id: "architecture",
    name: "Software Architecture",
    description: "Senior architects who design systems that scale — from solution architecture on specific projects to enterprise architecture governance. They work at the intersection of technology, business, and delivery.",
    skills: ["System Design", "Cloud Architecture (AWS/GCP/Azure)", "Microservices / Event-Driven", "Domain-Driven Design (DDD)", "API Design", "Security Architecture", "Architecture Decision Records", "C4 Model / UML", "FinOps / Cost Optimization", "Technical Due Diligence"],
    roles: ["Solution Architect", "Enterprise Architect", "Principal Engineer", "Chief Architect", "Technical Program Manager"],
    demandLevel: "high" as const,
  },
  {
    id: "product",
    name: "Product Management",
    description: "Technical product managers who bridge business goals and engineering execution. They write sharp PRDs, run discovery, manage backlogs, and keep engineering teams focused on the highest-value work.",
    skills: ["Product Roadmapping", "PRD Writing", "User Story Mapping", "OKR / KPI Setting", "Agile / Scrum", "A/B Testing", "Analytics (Mixpanel, GA4)", "Stakeholder Management", "Discovery / User Research", "Prioritization Frameworks"],
    roles: ["Senior Product Manager", "Technical PM", "Principal PM", "Head of Product", "Product Lead"],
    demandLevel: "medium" as const,
  },
  {
    id: "agile-pm",
    name: "Agile / Scrum / PM",
    description: "Scrum Masters, Agile Coaches, and delivery managers who keep engineering teams running at peak velocity. They remove blockers, facilitate ceremonies, and continuously improve team performance.",
    skills: ["Scrum Mastery", "Kanban", "SAFe / LeSS", "Sprint Planning", "Retrospective Facilitation", "Jira / Linear / Azure DevOps", "Risk Management", "Dependency Mapping", "Agile Coaching", "Velocity Reporting"],
    roles: ["Scrum Master", "Agile Coach", "Delivery Manager", "Program Manager", "Release Train Engineer (SAFe)"],
    demandLevel: "medium" as const,
  },
];

const DEMAND_LABELS = {
  high: { label: "High Demand", variant: "blue" as const },
  medium: { label: "Strong Demand", variant: "cyan" as const },
  growing: { label: "Rapidly Growing", variant: "green" as const },
};

export default function TalentDomainsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-28 text-center">
          <Badge variant="blue" size="md" className="mb-6">Talent Coverage</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Deep Expertise Across Every{" "}
            <span className="gradient-text">Technology Domain</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            12 specializations. Pre-vetted talent. Real technical depth — not keyword matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/hire-talent">
              <Button variant="primary" size="lg">Hire From Any Domain</Button>
            </Link>
            <Link href="/for-candidates">
              <Button variant="white" size="lg">Join as a Candidate</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {DOMAINS.map((domain) => {
              const demand = DEMAND_LABELS[domain.demandLevel];
              return (
                <Card key={domain.id} id={domain.id} padding="lg" className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900">{domain.name}</h2>
                    <Badge variant={demand.variant} size="sm">{demand.label}</Badge>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{domain.description}</p>

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Example Roles</p>
                    <ul className="space-y-1">
                      {domain.roles.map((role) => (
                        <li key={role} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex gap-3">
                    <Link href="/hire-talent" className="flex-1">
                      <Button variant="primary" size="sm" fullWidth>Hire {domain.name.split(" ")[0]}</Button>
                    </Link>
                    <Link href="/for-candidates" className="flex-1">
                      <Button variant="secondary" size="sm" fullWidth>Apply</Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        variant="split"
        heading=""
        leftHeading="Need talent from multiple domains?"
        leftSubheading="Our managed team and full implementation services combine expertise across domains into a cohesive delivery unit."
        leftCta={{ label: "Explore Managed Teams", href: "/managed-teams", variant: "primary" }}
        rightHeading="Your domain isn't listed?"
        rightSubheading="We cover more than 12 domains. Contact us and we'll tell you if we can match your specific requirements."
        rightCta={{ label: "Contact Us", href: "/contact", variant: "white" }}
      />
    </>
  );
}
