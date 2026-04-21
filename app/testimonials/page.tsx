import type { Metadata } from "next";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real reviews from SKiiN Laser & Aesthetics clients. Discover what our clients say about their laser hair removal, facials, and skin treatments.",
};

const testimonials = [
  {
    name: "Sarah M.",
    treatment: "Laser Hair Removal",
    rating: 5,
    text: "Absolutely incredible results after 6 sessions. The team were so professional and put me at complete ease. The cooling on the laser makes it so comfortable. I couldn't recommend SKiiN more highly.",
  },
  {
    name: "Emma L.",
    treatment: "PermaHYDRA Facial",
    rating: 5,
    text: "The PermaHYDRA Facial left my skin absolutely glowing. I booked it before my wedding and I'm so glad I did — I've never had so many compliments on my skin. Will be booking monthly from now on.",
  },
  {
    name: "Charlotte R.",
    treatment: "Microneedling",
    rating: 5,
    text: "I was nervous about microneedling but Isabelle made me feel totally comfortable. After 3 sessions my acne scarring has faded dramatically. The results are genuinely life-changing for my confidence.",
  },
  {
    name: "Priya K.",
    treatment: "SkinMed® Chemical EnerPeel®",
    rating: 5,
    text: "I've struggled with pigmentation for years. After the EnerPeel® course my skin tone is so much more even. The aftercare advice was brilliant too — really felt like they cared about my long-term results.",
  },
  {
    name: "Jade T.",
    treatment: "Dermaplaning",
    rating: 5,
    text: "Such a relaxing treatment and the results are instant. My skin feels like glass and my makeup sits so much better. Lovely warm atmosphere and the team are so friendly and knowledgeable.",
  },
  {
    name: "Rachel B.",
    treatment: "Laser Hair Removal",
    rating: 5,
    text: "I've had laser elsewhere before but the PermaIce Quattro Max at SKiiN is on another level. So much more comfortable and the results are faster. Already seeing permanent reduction after just 4 sessions.",
  },
  {
    name: "Natasha W.",
    treatment: "LED Light Therapy",
    rating: 5,
    text: "I add the LED to my microneedling sessions and the healing time is so much faster. The team clearly know their stuff and the whole experience is so professional yet relaxed. Love this clinic.",
  },
  {
    name: "Amy F.",
    treatment: "Skin Analysis & Consultation",
    rating: 5,
    text: "The skin analysis was so thorough — I learned more about my skin in that session than I have in years. They were completely honest about what would work best for me, no pushy upselling at all.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-brown" : "text-brown/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark pt-[88px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-peach text-xs tracking-widest uppercase mb-4 font-medium">
            Client Reviews
          </p>
          <h1 className="text-cream font-bold text-5xl lg:text-6xl leading-tight">
            Real Results.
            <br />
            <span className="italic font-light">Real People.</span>
          </h1>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-warm-white p-8 flex flex-col">
                <StarRating rating={t.rating} />
                <p className="text-brown/70 text-sm leading-relaxed mt-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-brown/10">
                  <p className="text-brown font-semibold text-sm">{t.name}</p>
                  <p className="text-brown/50 text-xs tracking-wider uppercase mt-0.5">
                    {t.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-peach text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-brown font-bold text-3xl mb-4">
            Join our growing family of happy clients
          </h2>
          <p className="text-brown/60 mb-8">
            Book your free consultation and see the difference medical-grade care makes.
          </p>
          <BookingButton label="Book a Free Consultation" id="testimonials-cta-btn" variant="dark" />
        </div>
      </section>
    </>
  );
}
