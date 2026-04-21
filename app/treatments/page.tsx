import type { Metadata } from "next";
import { treatments } from "@/lib/treatments";
import TreatmentCard from "@/components/TreatmentCard";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore SKiiN's full range of medical-grade aesthetic treatments: Laser Hair Removal, PermaHYDRA Facials, Chemical Peels, Microneedling, Dermaplaning and LED Light Therapy.",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            What We Offer
          </p>
          <h1 className="font-serif text-cream font-bold text-5xl lg:text-6xl mb-6 leading-tight tracking-wider">
            Advanced Aesthetic Care,
            <br />
            <span className="italic font-light">Tailored for You.</span>
          </h1>
          <p className="text-cream/60 max-w-2xl text-lg leading-relaxed">
            Each treatment at SKiiN uses medical-grade technology, administered by expert
            practitioners — delivering visible, long-lasting results safely and comfortably.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brown">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-cream font-bold text-3xl mb-4">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Book a free skin consultation and our experts will build a personalised plan for your goals.
          </p>
          <BookingButton label="Book a Free Consultation" id="treatments-cta-btn" variant="outline" />
        </div>
      </section>
    </>
  );
}
