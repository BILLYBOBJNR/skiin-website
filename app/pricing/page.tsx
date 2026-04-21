import type { Metadata } from "next";
import { pricingCategories } from "@/lib/pricing";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for all SKiiN Laser & Aesthetics treatments. Laser Hair Removal, facials, chemical peels, microneedling and more. Klarna 0% finance available.",
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Transparent Pricing
          </p>
          <h1 className="text-cream font-bold text-5xl lg:text-6xl mb-6 leading-tight">
            Clear Pricing.
            <br />
            <span className="italic font-light">Personalised Care.</span>
          </h1>
          <p className="text-cream/60 max-w-2xl text-lg leading-relaxed">
            No hidden fees. All treatments include a thorough consultation and tailored
            aftercare guidance. Multi-session packages offer the best value for long-term results.
            Klarna interest-free finance available.
          </p>
        </div>
      </section>

      {/* Finance note */}
      <div className="bg-brown py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3 justify-between">
          <p className="text-cream text-sm">
            <span className="font-semibold">Glow now, pay later.</span>
            <span className="text-cream/60 ml-2">Klarna interest-free — split over 3 months.</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="bg-peach text-brown text-xs font-bold px-3 py-1 rounded">Klarna</span>
            <span className="text-cream/50 text-xs">0% Interest</span>
          </div>
        </div>
      </div>

      {/* Pricing tables */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {pricingCategories.map((category) => (
            <div key={category.id} id={category.slug}>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <h2 className="text-brown font-bold text-2xl">{category.name}</h2>
                <BookingButton
                  label="Book This Treatment"
                  id={`${category.id}-book-btn`}
                  variant="dark"
                  className="!py-2.5 !px-6"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brown text-cream">
                      {category.columns.map((col) => (
                        <th
                          key={col}
                          className="px-4 py-3 text-left text-xs tracking-widest uppercase font-medium whitespace-nowrap"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.rows.map((row, idx) => (
                      <tr
                        key={row.area}
                        className={idx % 2 === 0 ? "bg-warm-white" : "bg-cream"}
                      >
                        <td className="px-4 py-3 text-brown font-medium">{row.area}</td>
                        <td className="px-4 py-3 text-brown/80">{row.session1}</td>
                        {row.session3 && (
                          <td className="px-4 py-3 text-brown/80">{row.session3}</td>
                        )}
                        {row.session6 !== undefined && category.columns.length > 3 && (
                          <td className="px-4 py-3 text-brown/80">{row.session6 || "—"}</td>
                        )}
                        {row.session8 !== undefined && (
                          <td className="px-4 py-3 text-brown/80 font-semibold text-brown">
                            {row.session8}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 bg-peach/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-brown font-semibold text-xl mb-4">Pricing Notes</h3>
          <p className="text-brown/60 text-sm leading-relaxed">
            Prices may vary based on area size or individual skin needs. Full packages and
            personalised treatment plans are available after your consultation. If a discount
            applies, we will always make sure you benefit — even if it&apos;s not yet reflected
            on the website. All prices include VAT.
          </p>
          <div className="mt-8">
            <BookingButton label="Book a Free Consultation" id="pricing-bottom-btn" variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
