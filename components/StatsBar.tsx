const stats = [
  { value: "Medical-Grade", label: "Technology" },
  { value: "Expert", label: "Practitioners" },
  { value: "Tailored", label: "Treatment Plans" },
  { value: "0%", label: "Finance with Klarna" },
];

export default function StatsBar() {
  return (
    <section className="bg-brown py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-peach font-bold text-xl tracking-wide">
                {stat.value}
              </p>
              <p className="text-cream/70 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
