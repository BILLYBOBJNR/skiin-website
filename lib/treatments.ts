export interface Treatment {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  heroImage: string;
  ideal: string;
}

export const treatments: Treatment[] = [
  {
    slug: "skin-analysis-consultation",
    name: "Skin Analysis & Consultation",
    shortDescription:
      "In-depth skin assessment using the Visagé Skin Pro+ to build your personalised treatment plan.",
    fullDescription:
      "Your journey begins with an in-depth analysis using the Visagé Skin Pro+ professional diagnostic tool to assess your skin's unique needs. We examine hydration levels, pigmentation, pore size, texture and more — building a clear picture of your skin health. Based on this, we'll create a fully tailored treatment plan to help you reach your skin goals safely and effectively.",
    benefits: [
      "Professional Visagé Skin Pro+ diagnostic technology",
      "Full skin health assessment",
      "Personalised treatment roadmap",
      "Expert advice with zero pressure",
      "Included with all first treatments",
    ],
    image:
      "/images/skin-analysis.webp",
    heroImage:
      "/images/skin-analysis.webp",
    ideal: "All skin types. Perfect as your first step at SKiiN.",
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    shortDescription:
      "Gold-standard PermaIce Quattro Max AI Diode laser — effective across all skin tones.",
    fullDescription:
      "Our gold-standard PermaIce Quattro Max AI Diode laser targets hair at the root using four-wavelength technology, delivering faster, more effective results across all skin tones and hair types. The built-in 360° cooling system ensures a comfortable experience throughout — making it ideal for both sensitive small areas and larger body zones. Achieve smooth, confident skin with long-lasting permanent hair reduction.",
    benefits: [
      "Four-wavelength diode technology",
      "Safe for all skin tones",
      "Built-in 360° cooling for comfort",
      "Permanent hair reduction",
      "Suitable for face and body",
      "AI-assisted precision",
    ],
    image:
      "/images/laser-hair.webp",
    heroImage:
      "/images/laser-hair.webp",
    ideal: "All skin tones. Men and women. Face and body areas.",
  },
  {
    slug: "permahydra-facial",
    name: "PermaHYDRA Facial",
    shortDescription:
      "Medical-grade hydrating facial — cleanse, exfoliate, infuse and hydrate in one session.",
    fullDescription:
      "A medical-grade hydrating facial designed to deeply cleanse, exfoliate, infuse and hydrate the skin in one luxurious session. The PermaHYDRA system combines advanced aqua-dermabrasion with powerful serums tailored to your skin type, leaving your complexion plump, glowing and instantly refreshed. Perfect before special events or as regular monthly maintenance.",
    benefits: [
      "4-in-1: cleanse, exfoliate, infuse, hydrate",
      "Instant visible results",
      "No downtime",
      "Suitable for all skin types",
      "Perfect pre-event treatment",
      "Customisable with LED add-on",
    ],
    image:
      "/images/permahydra.webp",
    heroImage:
      "/images/permahydra.webp",
    ideal: "All skin types. Dehydrated, dull or congested skin.",
  },
  {
    slug: "chemical-enerpeel",
    name: "SkinMed® Chemical EnerPeel®",
    shortDescription:
      "Advanced peels that go beyond the surface to target pigmentation, acne, fine lines and more.",
    fullDescription:
      "Our SkinMed® EnerPeel® chemical peels go beyond surface-level exfoliation — delivering active pharmaceutical-grade ingredients deeper into the skin to target pigmentation, acne, rosacea, fine lines and more. With less downtime than traditional peels and more dramatic results, they're a powerful solution for a wide range of skin concerns. Available in four formulations tailored to your specific needs.",
    benefits: [
      "Pharmaceutical-grade active ingredients",
      "Targets pigmentation, acne, rosacea, ageing",
      "Less downtime than traditional peels",
      "Salicylic, Pyruvic, Jessner's & Mandelic options",
      "Deep dermal delivery technology",
      "Available with LED enhancement",
    ],
    image:
      "/images/chemical-peel.webp",
    heroImage:
      "/images/chemical-peel.webp",
    ideal: "Pigmentation, acne, rosacea, fine lines, uneven skin tone.",
  },
  {
    slug: "microneedling",
    name: "Microneedling – Derma FNS™ Pen",
    shortDescription:
      "Precision collagen stimulation for scarring, fine lines, stretch marks and skin laxity.",
    fullDescription:
      "Stimulate your skin's natural collagen and elastin production with the Derma FNS™ Pen — a precision microneedling system that remodels the skin from within. Controlled micro-channels trigger the skin's healing response, producing fresh collagen and elastin to visibly improve scarring, fine lines, stretch marks and skin laxity. With minimal downtime and maximum results, it's one of our most transformative treatments.",
    benefits: [
      "Stimulates collagen and elastin production",
      "Effective for acne scarring and fine lines",
      "Reduces stretch marks and skin laxity",
      "Minimal downtime",
      "Enhances product absorption",
      "Available with LED and peel combinations",
    ],
    image:
      "/images/microneedling.webp",
    heroImage:
      "/images/microneedling.webp",
    ideal: "Acne scarring, fine lines, stretch marks, skin texture.",
  },
  {
    slug: "dermaplaning",
    name: "Dermaplaning",
    shortDescription:
      "Gentle manual exfoliation that removes dead skin cells and peach fuzz for an instantly luminous finish.",
    fullDescription:
      "A gentle, manual exfoliation technique using a sterile surgical blade to precisely remove the outermost layer of dead skin cells and vellus hair (peach fuzz). The result is noticeably smoother skin texture, improved product absorption and a luminous, photo-ready glow. Dermaplaning is a relaxing treatment with zero downtime and immediate visible results.",
    benefits: [
      "Removes peach fuzz and dead skin cells",
      "Instantly smoother skin texture",
      "Enhanced makeup and skincare absorption",
      "Zero downtime",
      "Painless and relaxing",
      "Immediately visible glow",
    ],
    image:
      "/images/dermaplaning.webp",
    heroImage:
      "/images/dermaplaning.webp",
    ideal: "Dull skin, rough texture, makeup prep, all skin types.",
  },
  {
    slug: "led-light-therapy",
    name: "Advanced LED Light Therapy",
    shortDescription:
      "Therapeutic LED wavelengths that target acne, inflammation, ageing and more — safely and non-invasively.",
    fullDescription:
      "Target acne, inflammation, signs of ageing and more with therapeutic LED wavelengths that penetrate deep into the skin. Advanced LED Light Therapy is completely safe, non-invasive and pain-free. It works beautifully as a standalone treatment or as a powerful post-treatment accelerator — enhancing healing and amplifying results from your other SKiiN treatments. Red, blue and near-infrared wavelengths are selected based on your skin goals.",
    benefits: [
      "Reduces acne and inflammation",
      "Stimulates collagen for anti-ageing",
      "Accelerates post-treatment healing",
      "Zero downtime, pain-free",
      "Multiple wavelength options",
      "Safe for all skin types",
    ],
    image:
      "/images/led-machine.webp",
    heroImage:
      "/images/led-machine.webp",
    ideal: "Acne, inflammation, ageing, post-treatment recovery.",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
