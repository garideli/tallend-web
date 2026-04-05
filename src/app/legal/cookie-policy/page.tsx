import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Cookie Policy",
  description: "Tallend's Cookie Policy — what cookies we use, why, and how to manage your cookie preferences.",
  canonical: "/legal/cookie-policy",
});

const LAST_UPDATED = "January 1, 2025";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-950 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Cookie Policy</h1>
          <p className="text-slate-400">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-tallend space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p>
              Cookies can be &ldquo;session cookies&rdquo; (deleted when you close your browser) or &ldquo;persistent cookies&rdquo; (remain on your device for a set period of time). They can be set by the website you&apos;re visiting (&ldquo;first-party cookies&rdquo;) or by third parties whose services are embedded on that website (&ldquo;third-party cookies&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Cookies We Use</h2>

            <h3 className="text-lg font-semibold text-slate-900 mt-5">Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function. They enable core functionality such as security, form submission, and session management. You cannot opt out of these cookies.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Cookie</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Purpose</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 font-mono text-xs">__session</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Manages user session state</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Session</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-mono text-xs">csrf_token</td>
                    <td className="p-3 border border-slate-200 text-slate-600">CSRF protection for form submissions</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mt-8">Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting anonymous information. We use this data to improve our website and services.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Cookie</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Provider</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Purpose</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 font-mono text-xs">_ga</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Google Analytics</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Distinguishes unique users</td>
                    <td className="p-3 border border-slate-200 text-slate-600">2 years</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-mono text-xs">_ga_*</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Google Analytics 4</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Maintains session state</td>
                    <td className="p-3 border border-slate-200 text-slate-600">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-mono text-xs">_gid</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Google Analytics</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Distinguishes users</td>
                    <td className="p-3 border border-slate-200 text-slate-600">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mt-8">Marketing Cookies</h3>
            <p>
              These cookies track your browsing activity across websites to deliver relevant advertising and measure ad campaign effectiveness. We use these only with your consent.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Cookie</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Provider</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Purpose</th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 font-mono text-xs">li_fat_id</td>
                    <td className="p-3 border border-slate-200 text-slate-600">LinkedIn</td>
                    <td className="p-3 border border-slate-200 text-slate-600">LinkedIn ad conversion tracking</td>
                    <td className="p-3 border border-slate-200 text-slate-600">30 days</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200 font-mono text-xs">_fbp</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Meta / Facebook</td>
                    <td className="p-3 border border-slate-200 text-slate-600">Ad targeting and measurement</td>
                    <td className="p-3 border border-slate-200 text-slate-600">90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Managing Your Cookie Preferences</h2>
            <p>You have several options for managing cookies:</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-5">Browser Settings</h3>
            <p>
              Most browsers allow you to control cookies through their settings. You can typically find these under &ldquo;Privacy&rdquo; or &ldquo;Security&rdquo; settings. Note that blocking cookies may affect website functionality.
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-5">Opt-Out Tools</h3>
            <ul>
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
              <li><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Ad Opt-out</a></li>
              <li><a href="https://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DAA Digital Advertising Alliance Opt-out</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy as our practices change or as required by law. We will post the updated policy on this page with a new &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Contact Us</h2>
            <p>
              For questions about our cookie practices, contact us at <a href="mailto:privacy@tallend.com" className="text-blue-600 hover:underline">privacy@tallend.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
