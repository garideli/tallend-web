// ===== Navigation =====
export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  isExternal?: boolean;
  badge?: string;
}

// ===== Services =====
export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  color?: string;
}

// ===== Talent Domains =====
export interface TalentDomain {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  skills: string[];
  exampleRoles: string[];
  demandLevel?: "high" | "medium" | "growing";
}

// ===== Case Studies =====
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: "fintech" | "healthcare" | "enterprise" | "saas" | "ecommerce";
  clientType: string;
  challenge: string;
  solution: string;
  outcome: string;
  outcomeMetric?: {
    value: string;
    label: string;
  };
  services: string[];
  techStack?: string[];
  teamSize?: number;
  duration?: string;
  publishedAt: string;
  featured?: boolean;
}

// ===== Blog / Insights =====
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: "talent-strategy" | "tech-trends" | "career-advice" | "case-studies";
  tags?: string[];
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: number; // minutes
  coverImage?: string;
  featured?: boolean;
}

// ===== Team =====
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department?: string;
  bio: string;
  linkedIn?: string;
  twitter?: string;
  avatar?: string;
  isLeadership?: boolean;
}

// ===== Testimonials =====
export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: 1 | 2 | 3 | 4 | 5;
  service?: string;
  featured?: boolean;
}

// ===== Forms =====
export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  inquiryType:
    | "hire-talent"
    | "managed-teams"
    | "full-implementation"
    | "partnership"
    | "other";
  message: string;
}

export interface TalentRequestFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  roleNeeded: string;
  engagementType: "w2" | "c2c" | "contract" | "contract-to-hire" | "direct-hire";
  timeline: "immediate" | "1-2-weeks" | "1-month" | "flexible";
  teamSize?: string;
  techStack?: string;
  budget?: string;
  additionalDetails?: string;
}

export interface CandidateApplicationData {
  name: string;
  email: string;
  phone: string;
  linkedIn?: string;
  primaryDomain:
    | "frontend"
    | "backend"
    | "cloud-devops"
    | "data-engineering"
    | "ai-ml"
    | "qa-testing"
    | "cybersecurity"
    | "sap-erp"
    | "mobile"
    | "architecture"
    | "product"
    | "agile-pm";
  yearsOfExperience: "0-2" | "3-5" | "6-9" | "10+";
  engagementPreference: "w2" | "c2c" | "direct-hire" | "open";
  message?: string;
}

// ===== Engagement Models =====
export interface EngagementModel {
  id: string;
  name: string;
  shortName: string;
  description: string;
  pros: string[];
  cons?: string[];
  bestFor: string;
  payFrequency?: string;
  benefitsIncluded?: boolean;
}

// ===== Stats =====
export interface StatItem {
  value: string;
  label: string;
  description?: string;
  icon?: string;
  color?: "blue" | "cyan" | "green" | "purple";
}

// ===== Process Steps =====
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
  duration?: string;
}

// ===== FAQ =====
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ===== CTA =====
export interface CTAItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
}

// ===== API Responses =====
export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// ===== Page Props =====
export interface PageProps {
  params: Promise<Record<string, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}
