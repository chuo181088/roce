import { cn } from "@/lib/utils";

const BRANDS = [
  { name: "VITA", path: "/logos/vita.png" },
  { name: "NSK", path: "/logos/nsk.png" },
  { name: "Zhermack", path: "/logos/zhermack.png" },
  { name: "Acteon", path: "/logos/acteon.png" },
  { name: "Runyes", path: "/logos/runyes.png" },
  { name: "Jota", path: "/logos/jota.png" },
  { name: "DFL", path: "/logos/dfl.png" },
  { name: "Cranberry", path: "/logos/cranberry.png" },
  { name: "Maquira", path: "/logos/maquira.png" },
  { name: "HuFriedy", path: "/logos/hu.png" },
  { name: "Bego", path: "/logos/bego.png" },
  { name: "Indusbello", path: "/logos/indusbello.png" },
  { name: "Micerium", path: "/logos/micerium.png" },
  { name: "TDV", path: "/logos/tdv.png" }
];

const BRANDS_ROW_1 = BRANDS.slice(0, 7);
const BRANDS_ROW_2 = BRANDS.slice(7, 14);

function BrandLogo({ path, name }: { path: string; name: string }) {
  return (
    <div className="flex h-20 w-[140px] shrink-0 items-center justify-center px-4 md:h-28 md:w-[200px] md:px-6">
      <img
        src={path}
        alt={name}
        loading="lazy"
        className={cn(
          "h-full w-auto object-contain transition-all duration-300",
          "opacity-100 grayscale-0",
          "md:opacity-100 md:grayscale-0 md:hover:scale-110 md:hover:z-10"
        )}
      />
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/40 py-7 md:py-16 overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1600px] xl:max-w-none mx-auto lg:mx-0 px-6 lg:px-12 xl:px-20">

        {/* MÓVIL: Layout original (NO TOCAR) */}
        <div className="grid grid-cols-1 md:hidden gap-12 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                Nuestras Marcas
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Distribuidores oficiales
              </h2>
            </div>

            <div className="flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.012)]">
              <div className="flex shrink-0 items-center justify-center bg-blue-600 text-white font-semibold text-base rounded-lg h-10 w-10 tracking-tight">
                +14
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Líderes globales en odontología integrados en una sola plataforma.
              </p>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="relative flex w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-slate-50/40 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-slate-50/40 after:to-transparent">

              <div className="animate-marquee flex w-max items-center py-2 select-none will-change-transform">
                <div className="flex shrink-0 items-center justify-around gap-12 pr-12">
                  {BRANDS.map((brand, i) => (
                    <BrandLogo key={`b1-${brand.name}-${i}`} path={brand.path} name={brand.name} />
                  ))}
                </div>
                <div className="flex shrink-0 items-center justify-around gap-12 pr-12" aria-hidden="true">
                  {BRANDS.map((brand, i) => (
                    <BrandLogo key={`b2-${brand.name}-${i}`} path={brand.path} name={brand.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PC: Badge Premium + Doble Carrusel con Spotlight */}
        <div className="hidden md:flex flex-col gap-12">

          {/* ENCABEZADO CON BADGE PREMIUM */}
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            {/* Badge/Certificado */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full lg:mb-10">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>

              {/*} VERSION PC {*/}
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 ">
                Distribuidor Certificado
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Nuestras Marcas
            </h2>

            {/* Línea divisoria */}
            <div className="mt-8 flex justify-center sm:mt-1 lg:mb-3">
              <div className="h-0.5 w-64 md:w-64 md:w-[28rem] lg:w-[30rem] rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 bg-[length:200%_100%] animate-shimmer-line" />
            </div>

            {/* Descripción */}
            <p className="text-lg text-slate-600 leading-relaxed">
              Trabajamos directamente con los fabricantes para ofrecerte productos{" "}
              <span className="font-semibold text-slate-900">100% originales</span> con{" "}
              <span className="font-semibold text-slate-900">garantía oficial</span>.
            </p>
          </div>

          {/* Doble carrusel con Spotlight */}
          <div className="flex flex-col gap-8">

            {/* Fila 1: Derecha a izquierda con Spotlight */}
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_600px_300px_at_center,transparent_0%,transparent_30%,rgba(248,250,252,0.4)_45%,rgba(248,250,252,0.8)_65%)]"></div>

              <div className="relative flex w-full">
                <div className="animate-marquee-medium-reverse flex w-max items-center py-6 select-none will-change-transform">
                  <div className="flex shrink-0 items-center justify-around gap-20 pr-20">
                    {BRANDS_ROW_1.map((brand, i) => (
                      <BrandLogo key={`r1-${brand.name}-${i}`} path={brand.path} name={brand.name} />
                    ))}
                  </div>
                  <div className="flex shrink-0 items-center justify-around gap-20 pr-20" aria-hidden="true">
                    {BRANDS_ROW_1.map((brand, i) => (
                      <BrandLogo key={`r1-dup-${brand.name}-${i}`} path={brand.path} name={brand.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fila 2: Izquierda a derecha con Spotlight */}
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_600px_300px_at_center,transparent_0%,transparent_30%,rgba(248,250,252,0.4)_45%,rgba(248,250,252,0.8)_65%)]"></div>

              <div className="relative flex w-full">
                <div className="animate-marquee-medium flex w-max items-center py-6 select-none will-change-transform">
                  <div className="flex shrink-0 items-center justify-around gap-20 pr-20">
                    {BRANDS_ROW_2.map((brand, i) => (
                      <BrandLogo key={`r2-${brand.name}-${i}`} path={brand.path} name={brand.name} />
                    ))}
                  </div>
                  <div className="flex shrink-0 items-center justify-around gap-20 pr-20" aria-hidden="true">
                    {BRANDS_ROW_2.map((brand, i) => (
                      <BrandLogo key={`r2-dup-${brand.name}-${i}`} path={brand.path} name={brand.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}