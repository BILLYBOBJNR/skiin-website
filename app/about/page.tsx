import type { Metadata } from "next";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SKiiN Laser & Aesthetics — our mission, values, and commitment to expert medical-grade aesthetic care in Hartley, Kent.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Our Story
          </p>
          <h1 className="font-serif text-cream font-bold text-5xl lg:text-6xl leading-tight tracking-wider">
            About SKiiN
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
            <h2 className="font-serif text-brown font-bold text-3xl mb-6 leading-snug reveal">
              Where Science Meets
              <br />
              <span className="italic font-light">Skin Deep Beauty</span>
            </h2>
            <div className="space-y-5 text-brown/70 leading-relaxed">
              <p>
                At SKiiN Laser &amp; Aesthetics, we specialise in advanced medical-grade
                aesthetic treatments — designed to deliver visible, long-lasting results
                safely, comfortably, and effectively.
              </p>
              <p>
                Our clinic is built on a foundation of passion for natural beauty and
                an unwavering commitment to precision, safety and real results. We
                believe that everyone deserves to feel confident and radiant in their
                own skin — and that the journey to get there should be a positive,
                empowering experience.
              </p>
              <p>
                From your very first consultation, you&apos;ll be met with warmth, expertise
                and a genuine desire to help you reach your skin goals. We listen, we
                assess, and we build a plan that&apos;s uniquely yours.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-auto min-h-[560px]">
            <Image
              src="/images/owner.jpg"
              alt="Isabelle, founder of SKiiN Laser & Aesthetics"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-brown font-bold text-4xl mb-4 reveal">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                body: "Every treatment we offer is delivered with safety as the absolute priority. We use clinically proven technology and follow rigorous protocols to protect your skin and wellbeing.",
              },
              {
                title: "Real Results",
                body: "We don't make promises we can't keep. Our treatments are selected and performed because they deliver measurable, visible improvements — not temporary fixes.",
              },
              {
                title: "Expert Care",
                body: "Our practitioners are trained to the highest standards and continually update their knowledge. You're in expert, caring hands at every visit.",
              },
              {
                title: "Transparency",
                body: "No hidden fees, no upselling, no pressure. We give you honest advice and clear pricing so you can make informed decisions about your skin journey.",
              },
              {
                title: "Personalisation",
                body: "Your skin is unique. Every treatment plan we create is tailored to your specific skin type, concerns and goals — not a one-size-fits-all approach.",
              },
              {
                title: "Warmth & Comfort",
                body: "We've created a space where you feel welcomed, relaxed and valued. Beautiful results should come from a beautiful experience.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-cream p-8 hover:bg-peach/30 transition-colors">
                <h3 className="text-brown font-semibold text-base mb-3">{value.title}</h3>
                <p className="text-brown/60 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-cream overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[440px] lg:h-auto min-h-[480px] order-last lg:order-first">
            <Image
              src="/images/laser-hair.webp"
              alt="Medical-grade laser technology at SKiiN"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-16 xl:px-24 order-first lg:order-last">
            <p className="text-brown/50 text-xs tracking-widest uppercase mb-4 font-medium">
              Our Equipment
            </p>
            <h2 className="font-serif text-brown font-bold text-3xl mb-6 leading-snug reveal">
              Cutting-edge technology,
              <br />
              <span className="italic font-light">expert hands.</span>
            </h2>
            <p className="text-brown/70 leading-relaxed mb-6">
              SKiiN uses only medical-grade, clinically validated technology from leading
              manufacturers. Our investment in the best equipment means better results,
              greater safety, and a more comfortable experience for every client.
            </p>
            <ul className="space-y-3">
              {[
                "PermaIce Quattro Max AI Diode Laser — 4-wavelength, 360° cooling",
                "Derma FNS™ Precision Microneedling Pen",
                "SkinMed® EnerPeel® Chemical Peel System",
                "PermaHYDRA Medical Facial System",
                "Advanced LED Light Therapy Panel",
                "Visagé Skin Pro+ Diagnostic Analyser",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brown/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brown/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-cream font-bold text-3xl mb-4">
            Ready to begin your journey?
          </h2>
          <p className="text-cream/60 mb-8">
            Book your free consultation and skin analysis today.
          </p>
          <BookingButton label="Book a Free Consultation" id="about-cta-btn" variant="primary" />
        </div>
      </section>
    </>
  );
}
