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

function BrandLogo({ path, name }: { path: string; name: string }) {
  return (
    <div className="flex h-20 w-[140px] shrink-0 items-center justify-center px-4">
      <img
        src={path}
        alt={name}
        loading="lazy"
        className={cn(
          "h-full w-auto object-contain transition-all duration-300",
          // MÓVIL: A color por defecto (sin grayscale)
          "opacity-100 grayscale-0",
          // ESCRITORIO (md): Gris por defecto, color al hover
          "md:grayscale md:opacity-75 md:hover:grayscale-0 md:hover:opacity-100"
        )}
      />
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/40 py-7 md:py-16 overflow-hidden">
      {/* Contenedor con ancho máximo centrado para que no se desarme en pantallas gigantes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* COLUMNA IZQUIERDA: Textos y Bloque de Impacto */}
        <div className="flex flex-col gap-5 md:col-span-1">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
              Nuestras Marcas
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Distribuidores oficiales
            </h2>
          </div>

          {/* Tu tarjeta minimalista limpia, ahora protegida en su ancho */}
          <div className="flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.012)]">
            <div className="flex shrink-0 items-center justify-center bg-blue-600 text-white font-semibold text-base rounded-lg h-10 w-10 tracking-tight">
              +14
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Líderes globales en odontología integrados en una sola plataforma.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: El bloque de logos */}
        <div className="md:col-span-2 relative w-full overflow-hidden">
          {/* Aquí puede ir el carrusel enmascarado o una cuadrícula limpia de logos */}
          <div className="relative flex w-full mask-gradient before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-slate-50/40 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-slate-50/40 after:to-transparent">
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
    </section>
  );
}