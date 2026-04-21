import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SKiiN Laser & Aesthetics. Book a consultation, ask a question, or find our location in Hartley, Kent.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Get in Touch
          </p>
          <h1 className="text-cream font-bold text-5xl lg:text-6xl leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-brown font-bold text-3xl mb-6">
                We&apos;d love to hear from you
              </h2>
              <p className="text-brown/60 leading-relaxed mb-10">
                Whether you have questions about a treatment, want to know what&apos;s
                right for your skin, or are ready to book — we&apos;re here. Your journey
                begins with a personalised consultation and patch test.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-brown font-semibold text-sm mb-1">Address</p>
                  <p className="text-brown/60 text-sm leading-relaxed">
                    5 Cherry Trees, Hartley, Longfield, DA3 8DS
                  </p>
                </div>
                <div>
                  <p className="text-brown font-semibold text-sm mb-1">Email</p>
                  <a href="mailto:isabelle.skiin@gmail.com" className="text-brown/60 text-sm hover:text-brown transition-colors">
                    isabelle.skiin@gmail.com
                  </a>
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
                <div>
                  <p className="text-brown font-semibold text-sm mb-1">Social</p>
                  <a
                    href="https://www.instagram.com/SKIIN_LTD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown/60 text-sm hover:text-brown transition-colors"
                  >
                    @SKIIN_LTD on Instagram
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
