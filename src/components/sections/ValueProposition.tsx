import { useState, useEffect } from "react";
import { CircleCheckBig, Users, Headset, ChevronDown, Handshake } from "lucide-react";

interface Pillar {
  icon: typeof CircleCheckBig;
  label: string;
  title: string;
  desc: string;
  color: string;
  image: string;
  stats: { value: string; label: string }[];
}

const PILLARS: Pillar[] = [
  {
    icon: Handshake,
    label: "Compromiso",
    title: "Disponibilidad continua de inventario crítico.",
    desc: "Sostenemos el flujo de consumibles y equipos esenciales para que su clínica nunca se detenga.",
    color: "from-blue-500 to-blue-400",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "+500", label: "Productos en stock" },
      { value: "24/7", label: "Disponibilidad" },
    ],
  },
  {
    icon: CircleCheckBig,
    label: "Solución",
    title: "Catálogo curado de marcas oficiales.",
    desc: "Productos seleccionados por relevancia clínica, no por volumen.",
    color: "from-emerald-500 to-emerald-400",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "+14", label: "Marcas líderes" },
      { value: "100%", label: "Originales" },
    ],
  },
  {
    icon: Users,
    label: "Asesoría",
    title: "Acompañamiento técnico y comercial directo.",
    desc: "Asesores con criterio clínico ayudan a definir el equipamiento ideal por especialidad.",
    color: "from-amber-500 to-amber-400",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "1:1", label: "Asesoría personalizada" },
      { value: "+10", label: "Años experiencia" },
    ],
  },
  {
    icon: Headset,
    label: "Soporte",
    title: "Respuesta técnica local en menos de 24 horas.",
    desc: "Equipo propio basado en Santiago — sin escalado internacional.",
    color: "from-violet-500 to-violet-400",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    stats: [
      { value: "<24h", label: "Tiempo respuesta" },
      { value: "Local", label: "Equipo en Santiago" },
    ],
  },
];

export function ValueProposition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Auto-rotación fluida cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PILLARS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMobileToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-border bg-white py-16 sm:py-24 lg:py-20">
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto lg:mx-0 max-w-7xl lg:max-w-[1600px] xl:max-w-none px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-16">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/30 shadow-sm lg:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Nuestra Propuesta
          </span>
          <h2 className="mt-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-4xl">
            Cuatro pilares que definen cada relación clínica.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Más que un proveedor — un socio operativo. Trabajamos con cada profesional para sostener
            resultados clínicos consistentes en el tiempo.
          </p>
          <div className="mt-8 flex justify-center sm:mt-6">
            <div className="h-0.5 w-64 md:w-64 md:w-[28rem] lg:w-[50rem] rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 bg-[length:200%_100%] animate-shimmer-line" />
          </div>
        </div>

        {/* === MÓVIL: ACORDEÓN (TOTALMENTE INTACTO) === */}
        <div className="mx-auto max-w-3xl space-y-5 sm:hidden">
          {PILLARS.map((p, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={p.label}
                className="rounded-2xl border border-border/50 bg-white/90 p-5 shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => handleMobileToggle(index)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-md shadow-primary/10 transition-all duration-300 hover:from-primary hover:to-primary/80 hover:text-white hover:scale-105">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{p.label}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                  <div className="border-t border-border/40 pt-4">
                    <h4 className="text-base font-bold text-foreground">{p.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* === PC: SPLIT SCREEN INTERACTIVO ULTRA COHESIVO === */}
        <div className="hidden sm:block">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Columna Izquierda: Galería de Imágenes Apiladas (Grid Stack) */}
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl border border-border/40 overflow-hidden shadow-2xl shadow-primary/5 bg-slate-100 grid grid-cols-1 grid-rows-1">
              {PILLARS.map((p, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={`img-${p.label}`}
                    className={`col-start-1 row-start-1 h-full w-full transition-all duration-2500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive
                      ? "opacity-100 scale-100 blur-none z-10"
                      : "opacity-0 scale-105 blur-md z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Badge de impacto flotante */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/15 shadow-lg">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">{p.stats[0].label}</p>
                        <p className="text-xl font-black mt-0.5 tracking-tight">{p.stats[0].value}</p>
                      </div>
                      {/* Icono con mismo diseño que los tabs */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                        <p.icon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Columna Derecha: Tabs + Paneles de Texto Apilados (Grid Stack) */}
            <div className="flex flex-col justify-between h-full py-2">

              {/* Selector de pestañas */}
              <div className="flex gap-2 p-1.5 bg-slate-50 border border-border/50 rounded-2xl mb-8">
                {PILLARS.map((p, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={`tab-${p.label}`}
                      onClick={() => setActiveIndex(index)}
                      className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-600 ${isActive
                        ? "bg-white border border-border shadow-sm text-primary"
                        : "text-muted-foreground hover:bg-white/50 hover:text-foreground"
                        }`}
                    >
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm transition-transform duration-600 ${isActive ? "scale-105" : "opacity-75 grayscale-[20%]"
                        }`}>
                        <p.icon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider">{p.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenedor de Texto en Red de Cuadrícula (Cero saltos de altura) */}
              <div className="grid grid-cols-1 grid-rows-1 bg-white border border-border/40 rounded-3xl p-8 shadow-xl shadow-primary/[0.01] overflow-hidden flex-1">
                {PILLARS.map((p, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={`content-${p.label}`}
                      className={`col-start-1 row-start-1 flex flex-col justify-center transition-all duration-2500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive
                        ? "opacity-100 translate-y-0 blur-none scale-100 pointer-events-auto z-10"
                        : "opacity-0 -translate-y-2 blur-md scale-[0.98] pointer-events-none z-0"
                        }`}
                    >
                      <h3 className="text-2xl font-bold tracking-tight text-foreground leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>

                      {/* Cuadrícula de sub-métricas */}
                      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/40 pt-5">
                        {p.stats.map((stat) => (
                          <div key={stat.label} className="p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                            <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                            <span className="text-lg font-black text-foreground tracking-tight mt-0.5 block">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}