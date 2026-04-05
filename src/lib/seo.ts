import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tallend.com";
const SITE_NAME = "Tallend";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
const TWITTER_HANDLE = "@tallend";

// ===== Metadata Generator =====

interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generateMetadata(page: PageSEO): Metadata {
  const {
    title,
    description,
    ogImage = DEFAULT_OG_IMAGE,
    canonical,
    noIndex = false,
    keywords = [],
  } = page;

  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`
    : undefined;

  return {
    title: fullTitle,
    description,
    keywords:
      keywords.length > 0
        ? keywords
        : [
            "IT talent",
            "managed teams",
            "software delivery",
            "IT staffing",
            "tech talent",
          ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      url: canonicalUrl ?? SITE_URL,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

// ===== Structured Data =====

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType: string;
  };
}

export function generateOrganizationStructuredData(
  org: OrganizationSchema = {
    name: "Tallend",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Tallend is a premium IT talent supply and managed delivery company connecting companies with vetted engineers and building dedicated software teams.",
    sameAs: [
      "https://www.linkedin.com/company/tallend",
      "https://twitter.com/tallend",
    ],
    contactPoint: {
      email: "hello@tallend.com",
      contactType: "customer service",
    },
  }
): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
    logo: {
      "@type": "ImageObject",
      url: org.logo,
    },
    description: org.description,
    sameAs: org.sameAs ?? [],
    ...(org.contactPoint
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            ...(org.contactPoint.telephone
              ? { telephone: org.contactPoint.telephone }
              : {}),
            ...(org.contactPoint.email
              ? { email: org.contactPoint.email }
              : {}),
            contactType: org.contactPoint.contactType,
          },
        }
      : {}),
  };

  return JSON.stringify(schema);
}

export interface JobPostingSchema {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACTOR"
    | "TEMPORARY"
    | "INTERN"
    | "VOLUNTEER"
    | "PER_DIEM"
    | "OTHER";
  hiringOrganization?: string;
  jobLocation?: string;
  remote?: boolean;
  baseSalary?: {
    min: number;
    max: number;
    currency: string;
    unitText: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";
  };
}

export function generateJobStructuredData(job: JobPostingSchema): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    ...(job.validThrough ? { validThrough: job.validThrough } : {}),
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.hiringOrganization ?? "Tallend",
      sameAs: SITE_URL,
    },
    jobLocation: job.remote
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
        }
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.jobLocation ?? "United States",
            addressCountry: "US",
          },
        },
    jobLocationType: job.remote ? "TELECOMMUTE" : undefined,
    ...(job.baseSalary
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: job.baseSalary.currency,
            value: {
              "@type": "QuantitativeValue",
              minValue: job.baseSalary.min,
              maxValue: job.baseSalary.max,
              unitText: job.baseSalary.unitText,
            },
          },
        }
      : {}),
  };

  return JSON.stringify(schema);
}

export function generateBreadcrumbStructuredData(
  items: { name: string; url: string }[]
): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return JSON.stringify(schema);
}

export function generateFAQStructuredData(
  faqs: { question: string; answer: string }[]
): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}
