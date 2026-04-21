import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="pt-[88px] pb-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="text-brown font-bold text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-sm text-brown/70 space-y-6 leading-relaxed">
          <p>
            SKiiN Laser &amp; Aesthetics (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting
            your personal information and your right to privacy. This policy explains how we
            collect, use and protect your data when you use our website or services.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name, email address,
            telephone number and any messages sent via our contact form or booking system.
            We may also collect technical data such as your IP address and browser type
            for website analytics purposes.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">How We Use Your Information</h2>
          <p>
            We use your information to manage your bookings and appointments, communicate
            with you about your treatments, send relevant updates (with your consent), and
            improve our website and services.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Data Sharing</h2>
          <p>
            We do not sell or rent your personal data to third parties. We may share data
            with our booking system provider (Phorest) and essential service providers
            as necessary to operate our business.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Your Rights</h2>
          <p>
            Under GDPR you have the right to access, correct, or delete your personal data
            at any time. To exercise these rights, please contact us at{" "}
            <a href="mailto:isabelle.skiin@gmail.com" className="text-brown hover:underline">
              isabelle.skiin@gmail.com
            </a>.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Contact</h2>
          <p>
            For any privacy-related queries, please contact SKiiN Laser &amp; Aesthetics at
            5 Cherry Trees, Hartley, Longfield, DA3 8DS or email{" "}
            <a href="mailto:isabelle.skiin@gmail.com" className="text-brown hover:underline">
              isabelle.skiin@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
