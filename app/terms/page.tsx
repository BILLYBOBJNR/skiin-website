import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <section className="pt-[88px] pb-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="text-brown font-bold text-4xl mb-8">Terms &amp; Conditions</h1>
        <div className="prose prose-sm text-brown/70 space-y-6 leading-relaxed">
          <p>
            By using our website and booking our services, you agree to the following terms
            and conditions. Please read them carefully.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Bookings &amp; Cancellations</h2>
          <p>
            Appointments must be cancelled or rescheduled with at least 24 hours&apos; notice.
            Late cancellations or no-shows may be subject to a cancellation fee. Patch tests
            are required prior to certain treatments and must be carried out at least 48
            hours before your first session.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Treatment Suitability</h2>
          <p>
            All clients must complete a full medical and skin health consultation before
            beginning any treatment. SKiiN Laser &amp; Aesthetics reserves the right to decline
            treatment where it is not deemed safe or appropriate for a client&apos;s individual
            circumstances.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Results</h2>
          <p>
            Individual results may vary. While we use medical-grade technology and follow
            best-practice protocols, we cannot guarantee specific outcomes for all clients.
            Our team will provide honest expectations during your consultation.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Pricing</h2>
          <p>
            All prices are inclusive of VAT where applicable. We reserve the right to
            update prices at any time. Prices confirmed at the time of booking will be
            honoured.
          </p>
          <h2 className="text-brown font-semibold text-xl mt-8 mb-3">Contact</h2>
          <p>
            For any queries regarding these terms, please contact us at{" "}
            <a href="mailto:isabelle.skiin@gmail.com" className="text-brown hover:underline">
              isabelle.skiin@gmail.com
            </a>{" "}
            or call 01474 707077.
          </p>
        </div>
      </div>
    </section>
  );
}
