import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service",
  description: "Tallend's Terms of Service — the terms and conditions governing use of our website and services.",
  canonical: "/legal/terms-of-service",
});

const LAST_UPDATED = "January 1, 2025";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-slate-400">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-tallend space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website at tallend.com or any services provided by Tallend, Inc. (&ldquo;Tallend,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Description of Services</h2>
            <p>
              Tallend provides IT talent placement, managed engineering team services, and software delivery services. Our services connect businesses (&ldquo;Clients&rdquo;) with qualified IT professionals (&ldquo;Candidates&rdquo;) and provide managed delivery capabilities.
            </p>
            <p>
              Specific terms governing individual engagements (talent placement, managed teams, or project delivery) are set forth in separate engagement agreements between Tallend and the applicable party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. User Accounts and Registration</h2>
            <p>
              Certain features of our website may require registration. You agree to provide accurate, current, and complete information and to keep this information updated. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p>
              All content on tallend.com — including text, graphics, logos, images, and software — is owned by or licensed to Tallend and protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
            <p>
              For work product created in the course of a software delivery engagement, intellectual property ownership is governed by the applicable engagement agreement. Unless otherwise agreed in writing, work product created by Tallend or its personnel for a Client is owned by the Client upon full payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose or in violation of any applicable laws or regulations</li>
              <li>Circumvent, bypass, or violate our security measures</li>
              <li>Submit false, misleading, or fraudulent information in any forms or communications</li>
              <li>Interfere with or disrupt the operation of our website or services</li>
              <li>Attempt to access other users&apos; accounts or systems without authorization</li>
              <li>Use automated scripts or bots to scrape, crawl, or extract data from our website</li>
              <li>Engage in any activity that could harm our reputation or business relationships</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Client Terms</h2>
            <p>
              Clients who engage Tallend for talent placement, managed teams, or project delivery agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information about requirements, scope, and timeline</li>
              <li>Pay invoices according to the payment terms in their engagement agreement</li>
              <li>Maintain confidentiality of Candidate information and only use it for legitimate hiring purposes</li>
              <li>Not directly solicit, hire, or engage Candidates introduced by Tallend outside of the agreed engagement framework, except as permitted by the applicable engagement agreement</li>
              <li>Provide a safe and non-discriminatory work environment for placed Candidates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">7. Candidate Terms</h2>
            <p>Candidates who register with or are engaged by Tallend agree to:</p>
            <ul>
              <li>Provide accurate and truthful information about qualifications, experience, and availability</li>
              <li>Consent to background checks and reference verification as a condition of placement</li>
              <li>Notify Tallend promptly of any conflicts of interest or competing engagements</li>
              <li>Comply with all applicable Client workplace policies during any placement</li>
              <li>Maintain confidentiality of Client information encountered during engagements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">8. Confidentiality</h2>
            <p>
              Both parties may have access to confidential information in connection with our services. Each party agrees to maintain the confidentiality of the other party&apos;s confidential information and not to disclose it to third parties without prior written consent, except as required by law or as necessary to perform the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">9. Disclaimers</h2>
            <p>
              Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              Tallend does not guarantee that: (a) specific Candidates will be available for any given role; (b) placed Candidates will meet all Client expectations; (c) our website will be available without interruption; or (d) any specific business outcomes will be achieved through our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Tallend shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, or lost data, arising out of or in connection with your use of our services.
            </p>
            <p>
              Tallend&apos;s total liability for any claims arising under these Terms shall not exceed the greater of (a) the total fees paid to Tallend in the three months preceding the event giving rise to the claim, or (b) $1,000.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Tallend, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in connection with: (a) your violation of these Terms; (b) your use of our services; or (c) your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration under the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction for intellectual property violations or breach of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page with a revised &ldquo;Last updated&rdquo; date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">14. Contact</h2>
            <p>For questions about these Terms, please contact:</p>
            <address className="not-italic mt-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-sm">
              <strong>Tallend, Inc.</strong><br />
              Legal Department<br />
              Email: <a href="mailto:legal@tallend.com" className="text-blue-600 hover:underline">legal@tallend.com</a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
