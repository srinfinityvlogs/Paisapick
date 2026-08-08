import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-10 max-w-xl mx-auto w-full">
        <h1 className="font-display text-2xl text-paper mt-8 mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-paper/40 mb-6">Last updated: July 2026</p>
        <div className="text-paper/60 leading-relaxed space-y-4">
          <p>
            PaisaPick (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This
            policy explains what information we collect when you use this
            website and how it&apos;s used.
          </p>

          <h2 className="text-paper font-display text-lg mt-6 mb-2">
            Information we collect
          </h2>
          <p>
            We log search queries you enter and which products you click on.
            This helps us understand what people are searching for and improve
            how we rank results. We do not currently have user accounts, and we
            do not collect or store your name, email address, phone number, or
            payment information.
          </p>
          <p>
            Like most websites, our hosting and analytics providers may
            automatically collect standard technical information such as your IP
            address, browser type, device type, and pages visited, for security
            and performance purposes.
          </p>

          <h2 className="text-paper font-display text-lg mt-6 mb-2">
            Affiliate links
          </h2>
          <p>
            When you click &quot;Buy Now,&quot; you are redirected to Amazon.in through
            an affiliate link. Amazon may set its own cookies and collect
            information according to its own privacy policy once you land on
            their site — we do not control or have access to what happens after
            that redirect.
          </p>

          <h2 className="text-paper font-display text-lg mt-6 mb-2">
            Cookies
          </h2>
          <p>
            This site does not currently use tracking cookies of its own. If we
            add analytics tools or advertising features in the future, we will
            update this policy to reflect what&apos;s collected and how you can opt
            out.
          </p>

          <h2 className="text-paper font-display text-lg mt-6 mb-2">
            How we use information
          </h2>
          <p>
            Search and click data is used solely to rank products, understand
            demand, and improve the site. We do not sell your data to third
            parties.
          </p>

          <h2 className="text-paper font-display text-lg mt-6 mb-2">
            Changes to this policy
          </h2>
          <p>
            We may update this policy as the site evolves — for example, if we
            add user accounts, price-drop email alerts, or analytics tools.
            Material changes will be reflected on this page with an updated
            date.
          </p>

          <h2 className="text-paper font-display text-lg mt-6 mb-2">
            Contact
          </h2>
          <p>
            If you have questions about this policy, you can reach us at{" "}
            <a
              href="mailto:contact@paisapick.com"
              className="text-marigold underline hover:brightness-110"
            >
              contact@paisapick.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}