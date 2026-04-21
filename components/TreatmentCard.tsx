import Link from "next/link";
import Image from "next/image";
import { Treatment } from "@/lib/treatments";

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <div className="group relative overflow-hidden bg-warm-white">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-brown font-semibold text-base mb-2 leading-snug">
          {treatment.name}
        </h3>
        <p className="text-brown/60 text-sm leading-relaxed mb-5">
          {treatment.shortDescription}
        </p>
        <Link
          href={`/treatments/${treatment.slug}`}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-brown hover:text-light-brown transition-colors group/link"
        >
          Explore
          <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
