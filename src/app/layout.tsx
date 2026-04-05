import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { generateOrganizationStructuredData } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tallend.com"),
  title: {
    template: "%s | Tallend",
    default: "Tallend — IT Talent Supply & Managed Delivery",
  },
  description:
    "Tallend is a premium IT talent supply and managed delivery company. We place vetted engineers, build dedicated teams, and deliver software end-to-end. 500+ placements. 98% client retention.",
  keywords: [
    "IT staffing",
    "tech talent",
    "managed teams",
    "software delivery",
    "vetted engineers",
    "IT consulting",
    "DevOps staffing",
    "React developers",
    "software engineers for hire",
    "dedicated engineering team",
  ],
  authors: [{ name: "Tallend", url: "https://tallend.com" }],
  creator: "Tallend",
  publisher: "Tallend",
  robots: {
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
    siteName: "Tallend",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tallend",
    creator: "@tallend",
  },
  verification: {
    // TODO: Add when verified
    // google: "google-site-verification-token",
  },
};

// ===== Google Analytics Script =====
function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  if (!gaId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationStructuredData();

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: orgSchema }}
        />
        {/* Google Analytics */}
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-sans bg-slate-50 text-slate-900">
        {/* Skip to main content - accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
