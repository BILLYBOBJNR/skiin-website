import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/lib/treatments";
import TreatmentCard from "@/components/TreatmentCard";
import StatsBar from "@/components/StatsBar";
import BookingButton from "@/components/BookingButton";
import ContactForm from "@/components/ContactForm";

const whyChoose = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Medical-Grade Technology",
    body: "Cutting-edge equipment paired with clinical expertise. Our PermaIce Quattro Max, Derma FNS™ and SkinMed® EnerPeel® systems deliver real, measurable results.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Expert Practitioners",
    body: "Every treatment is performed by trained aesthetic professionals passionate about enhancing your natural beauty with precision, care and safety.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Tailored to You",
    body: "No two skin journeys are the same. Every client receives a personalised consultation and treatment plan built around their specific skin goals.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Warm & Welcoming",
    body: "A calm, comfortable environment from the moment you arrive. We believe every client deserves to feel at ease, valued and fully informed at every step.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-dark overflow-hidden pt-[88px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="SKiiN Laser & Aesthetics hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <p className="text-peach text-xs tracking-widest uppercase mb-6 font-medium">
              Expert Care. Medical-Grade Results.
            </p>
            <h1 className="font-serif text-cream font-bold leading-tight mb-6 tracking-wider" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Smooth.
              <br />
              Confident.
              <br />
              <span className="italic font-light text-peach">Radiant.</span>
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-xl">
              Discover advanced medical-grade aesthetic treatments at SKiiN — designed to deliver
              visible, long-lasting results. Safely. Comfortably. Effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <BookingButton label="Book a Consultation" id="hero-book-btn" variant="primary" />
              <Link
                href="/treatments"
                className="inline-block px-8 py-3.5 text-xs tracking-widest uppercase font-semibold border-2 border-cream/40 text-cream hover:border-peach hover:text-peach transition-all duration-200"
              >
                Our Treatments
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-5 h-5 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <StatsBar />

      {/* Treatments Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brown/50 text-xs tracking-widest uppercase mb-3 font-medium">
              What We Offer
            </p>
            <h2 className="font-serif text-brown font-bold text-4xl mb-4 reveal">
              Explore Our Treatments
            </h2>
            <p className="text-brown/60 max-w-xl mx-auto text-base leading-relaxed">
              Each treatment is a journey toward timeless beauty and radiant confidence —
              designed, tailored and delivered by our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/treatments"
              className="inline-block bg-brown text-cream px-10 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-dark transition-colors duration-200"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Begin Your Journey CTA */}
      <section className="relative py-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/side-woman.webp"
            alt="Begin your journey"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Personalised Plans
          </p>
          <h2 className="font-serif text-cream font-bold text-4xl lg:text-5xl mb-6 leading-tight reveal">
            Let our experts build a plan
            <br />
            <span className="italic font-light">tailored just for you.</span>
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-10">
            Your journey begins with a personalised consultation and patch test. We assess your
            skin, listen to your goals, and recommend the best treatment plan for you. No pressure — just expert advice.
          </p>
          <BookingButton label="Book Your Free Consultation" id="journey-book-btn" variant="outline" />
        </div>
      </section>

      {/* Why Choose SKiiN */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brown/50 text-xs tracking-widest uppercase mb-3 font-medium">
              Our Promise
            </p>
            <h2 className="font-serif text-brown font-bold text-4xl reveal">
              Why Choose SKiiN?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-cream p-8 group hover:bg-peach transition-colors duration-300">
                <div className="text-brown mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-brown font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-brown/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature quote */}
      <section className="py-16 bg-peach">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="font-serif text-brown text-2xl lg:text-3xl font-light italic leading-relaxed reveal">
            &ldquo;Where Science Meets Skin Deep Beauty&rdquo;
          </blockquote>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-brown hover:text-dark transition-colors"
          >
            About Us
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Signature Treatments highlight */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brown/50 text-xs tracking-widest uppercase mb-4 font-medium">
                Our Signature Range
              </p>
              <h2 className="font-serif text-brown font-bold text-4xl mb-6 leading-snug reveal">
                Advanced treatments.
                <br />
                <span className="italic font-light">Real results.</span>
              </h2>
              <p className="text-brown/60 leading-relaxed mb-8">
                Our clinic combines cutting-edge technology with expert care to help you look
                and feel your best. Whether you&apos;re seeking permanent hair reduction, skin
                rejuvenation, or targeted solutions for acne, pigmentation or scarring — you
                are in expert hands.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Laser Hair Removal with PermaIce Quattro Max",
                  "Microneedling with Derma FNS™ Pen",
                  "EnerPeel® Chemical Peels",
                  "PermaHYDRA Medical Facials",
                  "Advanced LED Light Therapy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brown/70">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brown/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookingButton label="View All Treatments" id="sig-treatments-btn" variant="dark" />
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/chemical-peel.webp"
                alt="Advanced aesthetic treatment at SKiiN"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Finance banner */}
      <section className="bg-brown py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-cream font-semibold text-lg">Glow now, pay later.</p>
            <p className="text-cream/60 text-sm mt-1">
              Klarna interest-free finance available — split your treatment cost over 3 months.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-cream/10 text-cream text-xs tracking-wider uppercase font-medium px-4 py-2 rounded">
              0% Interest
            </span>
            <span className="bg-cream/10 text-cream text-xs tracking-wider uppercase font-medium px-4 py-2 rounded">
              3 Months
            </span>
            <span className="bg-peach text-brown font-bold text-sm px-4 py-2 rounded">
              Klarna
            </span>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-cream" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-brown/50 text-xs tracking-widest uppercase mb-3 font-medium">
                Get in Touch
              </p>
              <h2 className="font-serif text-brown font-bold text-4xl mb-6 reveal">
                Start your journey
              </h2>
              <p className="text-brown/60 leading-relaxed mb-10">
                Your journey begins with a personalised consultation and patch test. We will
                assess your skin, listen to your goals, and recommend the best treatment plan for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown font-semibold text-sm mb-1">Address</p>
                    <p className="text-brown/60 text-sm leading-relaxed">
                      5 Cherry Trees, Hartley, Longfield, DA3 8DS
                    </p>
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
                    <a href="tel:07353763162" className="text-brown/60 text-sm hover:text-brown transition-colors block">
                      Mobile: 07353 763162
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown font-semibold text-sm mb-1">Social</p>
                    <a
                      href="https://www.instagram.com/SKIIN_LTD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown/60 text-sm hover:text-brown transition-colors"
                    >
                      @SKIIN_LTD
                    </a>
                  </div>
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
