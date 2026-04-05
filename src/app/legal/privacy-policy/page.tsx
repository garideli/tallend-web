import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Tallend's privacy policy — how we collect, use, and protect your personal information.",
  canonical: "/legal/privacy-policy",
  noIndex: false,
});

const LAST_UPDATED = "January 1, 2025";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-tallend space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              Tallend, Inc. (&ldquo;Tallend,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit tallend.com or use our services.
            </p>
            <p>
              By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please do not access the site or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-slate-900 mt-5">Information You Provide Directly</h3>
            <ul>
              <li>Contact information (name, email, phone number, company)</li>
              <li>Professional information (job title, LinkedIn profile, resume/CV, skills)</li>
              <li>Inquiry type and message content submitted through our forms</li>
              <li>Newsletter subscription information</li>
              <li>Account credentials if you create an account with us</li>
            </ul>
            <h3 className="text-lg font-semibold text-slate-900 mt-5">Information Collected Automatically</h3>
            <ul>
              <li>Log data: IP address, browser type, operating system, referring URLs</li>
              <li>Usage data: pages visited, time spent, links clicked</li>
              <li>Device information: device type, screen resolution, language settings</li>
              <li>Cookie and tracking data (see our Cookie Policy for details)</li>
            </ul>
            <h3 className="text-lg font-semibold text-slate-900 mt-5">Information From Third Parties</h3>
            <ul>
              <li>Professional information from LinkedIn and other public sources</li>
              <li>Reference and background check information with your consent</li>
              <li>Information from our business partners and referral sources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and improve our talent placement and managed delivery services</li>
              <li>Match candidates with relevant job opportunities (with candidate consent)</li>
              <li>Respond to inquiries and communicate with clients and candidates</li>
              <li>Send transactional emails and service-related communications</li>
              <li>Send marketing communications (only with your explicit consent)</li>
              <li>Conduct background checks and reference verification (with consent)</li>
              <li>Analyze usage patterns to improve our website and services</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Prevent fraud and protect the security of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties for their own marketing purposes. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>With clients:</strong> Candidate profiles are shared with potential employer clients only with explicit candidate consent, prior to each specific submission.</li>
              <li><strong>Service providers:</strong> We work with third-party vendors (CRM, email, background check providers) who process data on our behalf under strict data processing agreements.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.</li>
              <li><strong>Legal requirements:</strong> We may disclose information when required by law, court order, or government authority.</li>
              <li><strong>Protection of rights:</strong> To protect the rights, property, or safety of Tallend, our clients, candidates, or others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. Please review our <a href="/legal/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a> for detailed information about the types of cookies we use, their purposes, and how to manage your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <ul>
              <li>Contact form submissions: 3 years from date of submission</li>
              <li>Candidate profiles: Until candidate requests removal or 2 years of inactivity</li>
              <li>Client engagement data: 7 years for legal and accounting purposes</li>
              <li>Website analytics: 26 months (per Google Analytics default)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
              <li><strong>Portability:</strong> Request your data in a portable, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:privacy@tallend.com" className="text-blue-600 hover:underline">privacy@tallend.com</a>. We will respond to requests within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">8. GDPR (EEA/UK Residents)</h2>
            <p>
              If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data under the following legal bases:
            </p>
            <ul>
              <li>Performance of a contract (providing our services)</li>
              <li>Legitimate interests (improving our services, fraud prevention)</li>
              <li>Consent (marketing communications, cookie analytics)</li>
              <li>Legal obligation (compliance with applicable laws)</li>
            </ul>
            <p>
              You have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">9. CCPA (California Residents)</h2>
            <p>
              California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know, the right to delete, and the right to opt-out of the sale of personal information. Tallend does not sell personal information.
            </p>
            <p>
              To submit a CCPA request, email <a href="mailto:privacy@tallend.com" className="text-blue-600 hover:underline">privacy@tallend.com</a> with &ldquo;CCPA Request&rdquo; in the subject line.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">10. Security</h2>
            <p>
              We implement commercially reasonable technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include HTTPS encryption, access controls, and regular security reviews.
            </p>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">11. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact:
            </p>
            <address className="not-italic mt-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-sm">
              <strong>Tallend, Inc.</strong><br />
              Privacy Team<br />
              Email: <a href="mailto:privacy@tallend.com" className="text-blue-600 hover:underline">privacy@tallend.com</a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
