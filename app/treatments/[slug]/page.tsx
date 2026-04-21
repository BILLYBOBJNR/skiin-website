import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { treatments, getTreatmentBySlug } from "@/lib/treatments";
import BookingButton from "@/components/BookingButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return {
    title: treatment.name,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const otherTreatments = treatments.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-dark overflow-hidden pt-[88px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={treatment.heroImage}
            alt={treatment.name}
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-20">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-cream/50 hover:text-peach text-xs tracking-widest uppercase mb-6 transition-colors"
          >
            <span>←</span> All Treatments
          </Link>
          <h1 className="text-cream font-bold text-4xl lg:text-5xl mb-4 max-w-2xl leading-tight">
            {treatment.name}
          </h1>
          <p className="text-cream/60 text-lg max-w-xl leading-relaxed">
            {treatment.shortDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-brown font-bold text-2xl mb-6">About This Treatment</h2>
              <p className="text-brown/70 leading-relaxed text-base mb-10">
                {treatment.fullDescription}
              </p>

              <h3 className="text-brown font-bold text-xl mb-5">Key Benefits</h3>
              <ul className="space-y-3 mb-12">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-brown/70 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-peach flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="bg-peach/40 border-l-4 border-brown/30 p-6">
                <p className="text-xs tracking-widest uppercase text-brown/50 mb-2 font-medium">
                  Ideal For
                </p>
                <p className="text-brown/80 text-sm leading-relaxed">{treatment.ideal}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-8">
                <h3 className="text-cream font-semibold text-lg mb-3">
                  Ready to book?
                </h3>
                <p className="text-cream/60 text-sm mb-6 leading-relaxed">
                  All treatments include a thorough consultation and tailored aftercare guidance.
                </p>
                <BookingButton
                  label={`Book ${treatment.name}`}
                  id={`${treatment.slug}-book-btn`}
                  variant="primary"
                  className="w-full text-center"
                />
                <div className="mt-6 pt-6 border-t border-cream/10 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-cream/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                    Free consultation included
                  </div>
                  <div className="flex items-center gap-3 text-xs text-cream/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                    Klarna 0% finance available
                  </div>
                  <div className="flex items-center gap-3 text-xs text-cream/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                    Personalised treatment plan
                  </div>
                </div>
              </div>

              <div className="bg-warm-white p-6">
                <p className="text-xs tracking-widest uppercase text-brown/50 mb-3 font-medium">
                  Questions?
                </p>
                <p className="text-brown/60 text-sm mb-4 leading-relaxed">
                  Call us or send a message — we&apos;re happy to answer any questions before you book.
                </p>
                <a
                  href="tel:01474707077"
                  className="block text-brown font-semibold text-sm hover:text-light-brown transition-colors mb-1"
                >
                  01474 707077
                </a>
                <a
                  href="mailto:isabelle.skiin@gmail.com"
                  className="block text-brown/60 text-sm hover:text-brown transition-colors"
                >
                  isabelle.skiin@gmail.com
                </a>
              </div>

              <div className="bg-warm-white p-6">
                <p className="text-xs tracking-widest uppercase text-brown/50 mb-3 font-medium">
                  Pricing
                </p>
                <p className="text-brown/60 text-sm mb-3 leading-relaxed">
                  View our full transparent pricing for this and all other treatments.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-brown hover:text-light-brown transition-colors"
                >
                  View Prices <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other treatments */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brown font-bold text-2xl mb-10">
            Explore Other Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherTreatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group relative overflow-hidden bg-cream block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="text-brown font-semibold text-sm mb-1">{t.name}</h3>
                  <span className="text-xs tracking-widest uppercase font-semibold text-brown/50 group-hover:text-brown transition-colors inline-flex items-center gap-1">
                    Explore <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
