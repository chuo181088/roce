const BRANDS = [
  "VITA", "NSK", "Zhermack", "Acteon", "Runyes",
  "Jota", "DFL", "Cranberry", "Maquira", "WP Dental",
];

function BrandWordmark({ name }: { name: string }) {
  return (
    <div className="group flex h-12 shrink-0 items-center px-10">
      <span className="text-2xl font-bold tracking-tight text-muted-foreground/60 opacity-70 grayscale transition-all duration-300 group-hover:text-primary group-hover:opacity-100 group-hover:grayscale-0">
        {name}
      </span>
    </div>
  );
}

export function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            Nuestras Marcas
          </span>
          <h2 className="max-w-xl text-2xl font-semibold text-foreground sm:text-[28px]">
            Distribuidores oficiales de los líderes globales en odontología
          </h2>
        </div>
      </div>
      <div className="marquee-mask relative overflow-hidden">
        <div className="animate-marquee flex w-max">
          {loop.map((b, i) => (
            <BrandWordmark key={`${b}-${i}`} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}