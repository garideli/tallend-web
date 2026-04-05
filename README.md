# Tallend — IT Talent Supply & Managed Delivery Website

Production-ready B2B marketing website for Tallend, a premium IT talent supply and managed delivery company. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.2 | React framework (App Router) |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| React Hook Form | 7.x | Form state management |
| Zod | 4.x | Schema validation |
| @hookform/resolvers | 5.x | RHF + Zod integration |
| Framer Motion | 12.x | Animations (available, not yet in use) |
| Lucide React | 1.x | Icons (available, not yet in use) |
| clsx + tailwind-merge | latest | Class name utilities |

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── api/
│   │   ├── contact/route.ts    # Contact form API endpoint
│   │   └── talent-request/route.ts  # Talent request API endpoint
│   ├── about/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   └── [slug]/page.tsx     # Individual case study
│   ├── contact/page.tsx
│   ├── for-candidates/page.tsx
│   ├── full-implementation/page.tsx
│   ├── hire-talent/page.tsx
│   ├── how-it-works/page.tsx
│   ├── insights/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Individual article
│   ├── legal/
│   │   ├── cookie-policy/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-of-service/page.tsx
│   ├── managed-teams/page.tsx
│   ├── talent-domains/page.tsx
│   ├── globals.css             # Tailwind v4 + global styles
│   ├── layout.tsx              # Root layout (Nav, Footer, GA)
│   ├── not-found.tsx           # 404 page
│   ├── page.tsx                # Homepage
│   └── sitemap.ts              # XML sitemap generator
├── components/
│   ├── forms/
│   │   ├── CandidateApplicationForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── TalentRequestForm.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── CtaBanner.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProcessSteps.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── SectionHeader.tsx
│       ├── StatCard.tsx
│       ├── Textarea.tsx
│       └── TestimonialCard.tsx
├── lib/
│   ├── analytics.ts            # GA4 event tracking utilities
│   ├── seo.ts                  # Metadata + structured data generators
│   └── utils.ts                # clsx + tailwind-merge helper
└── types/
    └── index.ts                # Shared TypeScript interfaces
```

## Architecture Decisions

### App Router
Uses Next.js 16 App Router exclusively. All pages are server components by default; client components are designated with `"use client"` only where interactivity is required (navigation, forms, FAQ accordion).

### Tailwind v4
Uses Tailwind CSS v4 with the `@import "tailwindcss"` approach in `globals.css`. No `tailwind.config.ts` is required. All design tokens use standard Tailwind utility classes (slate, blue, cyan, emerald).

### Component Organization
- `ui/` — Pure presentational components with no business logic
- `layout/` — Page wrapper components (navigation, footer)
- `sections/` — Reusable page section components (heroes, CTAs, process steps)
- `forms/` — Client-side form components with validation

### Form Handling
All forms use React Hook Form with Zod validation schemas for type-safe, declarative form handling. Forms submit to Next.js API routes (`/api/contact`, `/api/talent-request`) which include TODO integration points for external services.

### SEO
- Every page exports `export const metadata` using the `generateMetadata()` utility from `src/lib/seo.ts`
- JSON-LD Organization schema is injected in the root layout
- `src/app/sitemap.ts` generates a dynamic XML sitemap
- `public/robots.txt` controls crawler access

### Analytics
`src/lib/analytics.ts` provides a thin wrapper around GA4 (`window.gtag`) that falls back to `console.log` in development. Import and call `trackEvent`, `trackPageView`, `trackCTAClick`, or `trackFormSubmit` from any client component.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Site URL (used for sitemaps, OG tags, canonical URLs)
NEXT_PUBLIC_SITE_URL=https://tallend.com

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Email notifications (SendGrid)
SENDGRID_API_KEY=SG.xxxxxxxx
CONTACT_EMAIL=hello@tallend.com

# CRM integration (HubSpot)
HUBSPOT_API_KEY=xxxxxxxx
HUBSPOT_PORTAL_ID=xxxxxxxx

# Slack notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
SLACK_TALENT_WEBHOOK=https://hooks.slack.com/services/xxx

# ATS integration (Bullhorn)
BULLHORN_CLIENT_ID=xxxxxxxx
BULLHORN_CLIENT_SECRET=xxxxxxxx

# Background checks (Checkr)
CHECKR_API_KEY=xxxxxxxx
```

Note: Only `NEXT_PUBLIC_*` variables are exposed to the browser. All others are server-only.

## Deployment (Vercel)

This project is optimized for deployment on Vercel.

1. Push to a GitHub repository
2. Connect to Vercel via [vercel.com/new](https://vercel.com/new)
3. Set all environment variables in the Vercel project settings
4. Deploy — Vercel auto-detects Next.js and configures appropriately

**Build settings (auto-detected):**
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next`

**Domain configuration:**
1. Add `tallend.com` in Vercel project settings > Domains
2. Update DNS records as instructed by Vercel
3. Vercel automatically provisions SSL via Let's Encrypt

## Integration Guide

### Email (SendGrid)
In `/src/app/api/contact/route.ts`, uncomment the SendGrid integration block and install:
```bash
npm install @sendgrid/mail
```

### CRM (HubSpot)
In `/src/app/api/contact/route.ts`, uncomment the HubSpot integration and install:
```bash
npm install @hubspot/api-client
```

### ATS (Bullhorn)
In `/src/app/api/talent-request/route.ts`, implement the Bullhorn REST API integration for job order creation.

### Slack Notifications
Both API routes include TODO blocks for Slack webhook notifications. Simply set `SLACK_WEBHOOK_URL` and uncomment the fetch blocks.

## Content Management

Currently, all content is hardcoded in page files as TypeScript data arrays. To scale content management:

1. **Contentful / Sanity**: Replace static data arrays with CMS API calls. The existing types in `src/types/index.ts` map directly to common CMS content models.
2. **MDX for blog**: Replace the inline article content with `.mdx` files processed by `@next/mdx`.
3. **Database**: For dynamic job listings and case studies, implement a PostgreSQL + Prisma layer.

## Performance

- All pages are server-rendered by default (RSC)
- Images should use `next/image` with proper `width`/`height` or `fill` props
- Fonts loaded via `next/font/google` (Inter) with `display: swap`
- No unused JavaScript shipped to the client for server components

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes following the existing code style
4. Run `npm run lint` and `npm run build` before committing
5. Submit a pull request with a clear description

### Code Style
- TypeScript strict mode
- Functional components with named exports (except default page exports)
- `cn()` utility for all className merging
- Server components where possible; `"use client"` only when needed

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Built with Next.js 16 + TypeScript + Tailwind CSS v4
