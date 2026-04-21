import type { Metadata } from "next";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book your free skin consultation at SKiiN Laser & Aesthetics. We'll assess your skin, listen to your goals, and build your personalised treatment plan.",
};

export default function ConsultationPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Your Journey Starts Here
          </p>
          <h1 className="text-cream font-bold text-5xl lg:text-6xl leading-tight">
            Book a Consultation
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-brown font-bold text-3xl mb-6 leading-snug">
                What to expect
                <br />
                <span className="italic font-light">from your consultation</span>
              </h2>
              <p className="text-brown/60 leading-relaxed mb-8">
                Your SKiiN consultation is a relaxed, in-depth conversation about your skin and
                your goals. There&apos;s no pressure and no obligation — just expert advice tailored
                to you.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Skin Analysis",
                    body: "Using the Visagé Skin Pro+ diagnostic tool, we assess your skin's hydration, pigmentation, pore size and texture to understand exactly what your skin needs.",
                  },
                  {
                    step: "02",
                    title: "Your Goals",
                    body: "We listen carefully to what you want to achieve — whether that's permanent hair reduction, clearer skin, reduced scarring or a general glow-up.",
                  },
                  {
                    step: "03",
                    title: "Treatment Plan",
                    body: "We recommend a personalised treatment plan with realistic timelines and transparent pricing. No hidden fees, no upselling.",
                  },
                  {
                    step: "04",
                    title: "Patch Test",
                    body: "For relevant treatments, a patch test is included to ensure your skin responds safely before your first full session.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="text-peach font-bold text-2xl flex-shrink-0 w-8">{item.step}</span>
                    <div>
                      <p className="text-brown font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-brown/60 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark p-10 text-center">
              <p className="text-peach text-xs tracking-widest uppercase mb-3 font-medium">
                Ready to Book?
              </p>
              <h3 className="text-cream font-bold text-2xl mb-4">
                Free Consultation
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-8">
                Your consultation is completely free. Click below to select your
                preferred date and time through our online booking system.
              </p>
              <BookingButton
                label="Book Your Free Consultation"
                id="consultation-book-btn"
                variant="primary"
                className="w-full text-center"
              />
              <div className="mt-8 pt-8 border-t border-cream/10 space-y-3">
                <div className="flex items-center gap-3 text-xs text-cream/50 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                  Completely free — no hidden charges
                </div>
                <div className="flex items-center gap-3 text-xs text-cream/50 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                  No obligation to book a treatment
                </div>
                <div className="flex items-center gap-3 text-xs text-cream/50 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                  Patch test included where required
                </div>
                <div className="flex items-center gap-3 text-xs text-cream/50 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                  Klarna 0% finance available
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-cream/10">
                <p className="text-cream/40 text-xs mb-2">Prefer to call?</p>
                <a href="tel:01474707077" className="text-peach font-semibold text-sm hover:text-cream transition-colors">
                  01474 707077
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
