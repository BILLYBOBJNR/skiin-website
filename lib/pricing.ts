export interface PriceRow {
  area: string;
  session1: string;
  session3?: string;
  session6?: string;
  session8?: string;
}

export interface PriceCategory {
  id: string;
  name: string;
  slug: string;
  note?: string;
  columns: string[];
  rows: PriceRow[];
}

export const pricingCategories: PriceCategory[] = [
  {
    id: "lhr-women",
    name: "Laser Hair Removal — Women",
    slug: "laser-hair-removal-women",
    columns: ["Area", "1 Session", "3 Sessions", "6 Sessions", "8 Sessions"],
    rows: [
      { area: "Upper Lip", session1: "£30", session3: "£25", session6: "£22", session8: "£20" },
      { area: "Chin", session1: "£20", session3: "£19", session6: "£17", session8: "£15" },
      { area: "Jawline & Chin", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Sides of Face", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Centre Brow", session1: "£10", session3: "£10", session6: "£9", session8: "£7" },
      { area: "Forehead", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Front of Neck", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Back of Neck", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Chest", session1: "£60", session3: "£55", session6: "£45", session8: "£40" },
      { area: "Full Back", session1: "£80", session3: "£75", session6: "£70", session8: "£65" },
      { area: "Half Back", session1: "£70", session3: "£65", session6: "£60", session8: "£55" },
      { area: "Full Arms", session1: "£90", session3: "£80", session6: "£70", session8: "£65" },
      { area: "Forearms", session1: "£55", session3: "£50", session6: "£45", session8: "£40" },
      { area: "Nipples", session1: "£30", session3: "£25", session6: "£22", session8: "£20" },
      { area: "Stomach", session1: "£45", session3: "£40", session6: "£35", session8: "£30" },
      { area: "Underarms", session1: "£15", session3: "£13", session6: "£11", session8: "£9" },
      { area: "Hands", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Full Legs", session1: "£120", session3: "£110", session6: "£100", session8: "£90" },
      { area: "Half Legs", session1: "£70", session3: "£65", session6: "£60", session8: "£55" },
      { area: "Bikini Line", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Brazilian", session1: "£45", session3: "£40", session6: "£35", session8: "£30" },
      { area: "Hollywood", session1: "£45", session3: "£40", session6: "£35", session8: "£30" },
      { area: "Buttocks", session1: "£55", session3: "£50", session6: "£45", session8: "£40" },
      { area: "Peri-Anal", session1: "£35", session3: "£30", session6: "£25", session8: "£20" },
      { area: "Navel Pubic Line", session1: "£30", session3: "£26", session6: "£23", session8: "£20" },
      { area: "Feet & Toes", session1: "£55", session3: "£50", session6: "£45", session8: "£40" },
      { area: "Full Body", session1: "£250", session3: "£235", session6: "£220", session8: "£205" },
      { area: "Full Face", session1: "£70", session3: "£65", session6: "£60", session8: "£55" },
      { area: "Full Leg, Bikini & Underarm", session1: "£130", session3: "£120", session6: "£110", session8: "£100" },
      { area: "Half Leg, Bikini & Underarm", session1: "£85", session3: "£80", session6: "£75", session8: "£70" },
    ],
  },
  {
    id: "lhr-men",
    name: "Laser Hair Removal — Men",
    slug: "laser-hair-removal-men",
    columns: ["Area", "1 Session", "3 Sessions", "6 Sessions", "8 Sessions"],
    rows: [
      { area: "Full Beard", session1: "£70", session3: "£65", session6: "£55", session8: "£50" },
      { area: "Beard Line", session1: "£20", session3: "£19", session6: "£17", session8: "£15" },
      { area: "Front of Neck", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Back of Neck", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Centre Brow", session1: "£10", session3: "£10", session6: "£9", session8: "£7" },
      { area: "Ears", session1: "£30", session3: "£28", session6: "£25", session8: "£23" },
      { area: "Nose", session1: "£28", session3: "£25", session6: "£23", session8: "£20" },
      { area: "Chest", session1: "£60", session3: "£55", session6: "£45", session8: "£40" },
      { area: "Full Back", session1: "£80", session3: "£75", session6: "£70", session8: "£65" },
      { area: "Half Back", session1: "£70", session3: "£65", session6: "£60", session8: "£55" },
      { area: "Shoulders", session1: "£60", session3: "£55", session6: "£45", session8: "£40" },
      { area: "Full Arms", session1: "£90", session3: "£80", session6: "£70", session8: "£65" },
      { area: "Forearms", session1: "£55", session3: "£50", session6: "£45", session8: "£40" },
      { area: "Stomach", session1: "£45", session3: "£40", session6: "£35", session8: "£30" },
      { area: "Underarms", session1: "£15", session3: "£13", session6: "£10", session8: "£9" },
      { area: "Hands", session1: "£40", session3: "£35", session6: "£30", session8: "£25" },
      { area: "Full Legs", session1: "£120", session3: "£110", session6: "£100", session8: "£90" },
      { area: "Half Legs", session1: "£70", session3: "£65", session6: "£60", session8: "£55" },
      { area: "Full Body", session1: "£250", session3: "£235", session6: "£220", session8: "£205" },
      { area: "Full Face & Full Neck", session1: "£100", session3: "£90", session6: "£80", session8: "£70" },
      { area: "Beard Line & Full Neck", session1: "£70", session3: "£65", session6: "£60", session8: "£55" },
      { area: "Full Back, Chest, Shoulders & Stomach", session1: "£175", session3: "£160", session6: "£145", session8: "£130" },
    ],
  },
  {
    id: "permahydra",
    name: "PermaHYDRA Facial",
    slug: "permahydra-facial",
    columns: ["Treatment", "1 Session", "3 Sessions", "6 Sessions"],
    rows: [
      { area: "PermaHydra Deluxe (1 Hour)", session1: "£140", session3: "£125", session6: "£115" },
      { area: "PermaHydra Classic (30 Mins)", session1: "£80", session3: "£70", session6: "£60" },
      { area: "PermaHydra Deluxe & LED", session1: "£152.50", session3: "£137.50", session6: "£127.50" },
      { area: "PermaHydra Classic & LED", session1: "£92.50", session3: "£82.50", session6: "£72.50" },
      { area: "PermaHydra Classic, Microneedling & LED", session1: "£180", session3: "£165", session6: "£150" },
    ],
  },
  {
    id: "enerpeel",
    name: "SkinMed® Chemical EnerPeel®",
    slug: "chemical-enerpeel",
    columns: ["Treatment", "1 Session", "3 Sessions", "6 Sessions"],
    rows: [
      { area: "Salicylic Acid (Acne)", session1: "£128", session3: "£114", session6: "£100" },
      { area: "Pyruvic Acid (Anti-Ageing)", session1: "£142", session3: "£126", session6: "£110" },
      { area: "Jessner's (Pigmentation)", session1: "£142", session3: "£126", session6: "£110" },
      { area: "Mandelic Acid (Sensitive/Rosacea)", session1: "£128", session3: "£114", session6: "£100" },
      { area: "Eye and Lip", session1: "£153", session3: "£136", session6: "£120" },
      { area: "Salicylic Acid & LED", session1: "£140.50", session3: "£126.50", session6: "£112.50" },
      { area: "Pyruvic Acid & LED", session1: "£154.50", session3: "£138.50", session6: "£122.50" },
      { area: "Jessner's & LED", session1: "£154.50", session3: "£138.50", session6: "£122.50" },
      { area: "Mandelic Acid & LED", session1: "£140.50", session3: "£126.50", session6: "£112.50" },
      { area: "Eye and Lip & LED", session1: "£165.50", session3: "£148.50", session6: "£132.50" },
      { area: "Mandelic Acid, Microneedling & LED", session1: "£190", session3: "£170", session6: "£160" },
    ],
  },
  {
    id: "microneedling",
    name: "Microneedling – Derma FNS™ Pen",
    slug: "microneedling",
    columns: ["Treatment", "1 Session", "3 Sessions", "6 Sessions"],
    rows: [
      { area: "Microneedling", session1: "£120", session3: "£105", session6: "£90" },
      { area: "Microneedling & LED", session1: "£132.50", session3: "£117.50", session6: "£102.50" },
      { area: "Mandelic Acid, Microneedling & LED", session1: "£190", session3: "£170", session6: "£160" },
    ],
  },
  {
    id: "dermaplaning",
    name: "Dermaplaning",
    slug: "dermaplaning",
    columns: ["Treatment", "1 Session", "3 Sessions"],
    rows: [
      { area: "Dermaplaning", session1: "£45", session3: "£40" },
      { area: "Dermaplaning & LED", session1: "£57.50", session3: "£52.50" },
    ],
  },
  {
    id: "led",
    name: "Advanced LED Light Therapy",
    slug: "led-light-therapy",
    columns: ["Treatment", "1 Session", "3 Sessions", "6 Sessions"],
    rows: [
      { area: "LED 20 Mins", session1: "£35", session3: "£30", session6: "£25" },
    ],
  },
  {
    id: "analysis",
    name: "Skin Analysis & Consultation",
    slug: "skin-analysis",
    columns: ["Treatment", "Price"],
    rows: [
      { area: "Face Analysis", session1: "£15", session3: "" },
    ],
  },
];
