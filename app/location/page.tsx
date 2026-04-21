import type { Metadata } from "next";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find SKiiN Laser & Aesthetics in Hartley, Longfield, Kent. Address, directions and contact details.",
};

export default function LocationPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Find Us
          </p>
          <h1 className="text-cream font-bold text-5xl lg:text-6xl leading-tight">
            Our Location
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-brown font-bold text-3xl mb-8">
                SKiiN Laser &amp; Aesthetics
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown font-semibold text-sm mb-1">Address</p>
                    <address className="not-italic text-brown/60 text-sm leading-relaxed">
                      5 Cherry Trees<br />
                      Hartley<br />
                      Longfield<br />
                      DA3 8DS
                    </address>
                    <a
                      href="https://maps.google.com/?q=5+Cherry+Trees+Hartley+Longfield+DA3+8DS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs tracking-widest uppercase font-semibold text-brown hover:text-light-brown mt-3 transition-colors"
                    >
                      Get Directions <span>→</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown font-semibold text-sm mb-1">Phone</p>
                    <a href="tel:01474707077" className="text-brown/60 text-sm hover:text-brown transition-colors block">
                      Direct: 01474 707077
                    </a>
                    <a href="tel:07353763162" className="text-brown/60 text-sm hover:text-brown transition-colors block mt-0.5">
                      Mobile: 07353 763162
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown font-semibold text-sm mb-1">Email</p>
                    <a href="mailto:isabelle.skiin@gmail.com" className="text-brown/60 text-sm hover:text-brown transition-colors">
                      isabelle.skiin@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <BookingButton label="Book Now" id="location-book-btn" variant="dark" />
              </div>
            </div>

            {/* Map */}
            <div className="h-96 lg:h-full min-h-80 bg-warm-white relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.9!2d0.3167!3d51.3933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIzJzM2LjAiTiAwwrAxOScwMC4xIkU!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKiiN Laser & Aesthetics location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
