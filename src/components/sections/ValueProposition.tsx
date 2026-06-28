import { useState } from "react";
import { ShieldCheck, Sparkles, Compass, Headset, ChevronDown } from "lucide-react";

interface Pillar {
  icon: typeof ShieldCheck;
  label: string;
  title: string;
  desc: string;
  color: string;
}

export function ValueProposition() {
  const pillars: Pillar[] = [
    {
      icon: ShieldCheck,
      label: "Compromiso",
      title: "Disponibilidad continua de inventario crítico.",
      desc: "Sostenemos el flujo de consumibles y equipos esenciales para que su clínica nunca se detenga.",
      color: "from-blue-500 to-blue-400",
    },
    {
      icon: Sparkles,
      label: "Solución",
      title: "Catálogo curado de marcas oficiales.",
      desc: "Productos seleccionados por relevancia clínica, no por volumen.",
      color: "from-emerald-500 to-emerald-400",
    },
    {
      icon: Compass,
      label: "Asesoría",
      title: "Acompañamiento técnico y comercial directo.",
      desc: "Asesores con criterio clínico ayudan a definir el equipamiento ideal por especialidad.",
      color: "from-amber-500 to-amber-400",
    },
    {
      icon: Headset,
      label: "Soporte",
      title: "Respuesta técnica local en menos de 24 horas.",
      desc: "Equipo propio basado en Santiago — sin escalado internacional.",
      color: "from-violet-500 to-violet-400",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const safeIndex = Math.min(Math.max(activeIndex, 0), pillars.length - 1);
  const activePillar = pillars[safeIndex];

  const handleMobileToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!activePillar) return null;

  return (
    <section className="relative overflow-hidden border-t border-border bg-white py-16 sm:py-24 lg:py-32">
      {/* Fondo sutil */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Nuestra Propuesta
          </span>
          <h2 className="mt-10 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:mt-4 sm:text-4xl lg:text-5xl">
            Cuatro pilares que definen cada relación clínica.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Más que un proveedor — un socio operativo. Trabajamos con cada profesional para sostener
            resultados clínicos consistentes en el tiempo.
          </p>
          <div className="mt-8 flex justify-center sm:mt-6">
            <div className="h-0.5 w-64 rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 bg-[length:200%_100%] animate-shimmer-line " />
          </div>
        </div>

        {/* Contenedor principal */}
        <div className="mx-auto max-w-3xl">
          {/* === MÓVIL: ACORDEÓN === */}
          <div className="space-y-5 sm:hidden">
            {pillars.map((p, index) => {
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
                      {/* Icono con estilo consistente */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-md shadow-primary/10 transition-all duration-300 hover:from-primary hover:to-primary/80 hover:text-white hover:scale-105`}
                      >
                        <p.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground">{p.label}</h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Contenido desplegable */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="border-t border-border/40 pt-4">
                      <h4 className="text-base font-bold text-foreground">{p.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* === ESCRITORIO: TABS === */}
          <div className="hidden sm:block">
            <div className="flex justify-center gap-1 rounded-full bg-secondary/50 p-1 ring-1 ring-border/60 backdrop-blur-sm sm:gap-2">
              {pillars.map((p, index) => (
                <button
                  key={p.label}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm ${activeIndex === index
                    ? `bg-primary text-white shadow-lg shadow-primary/30`
                    : `text-muted-foreground hover:bg-primary/10 hover:text-foreground`
                    }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border/40 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 sm:p-8">
              <div
                key={safeIndex}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-md shadow-primary/10 transition-all duration-300 hover:from-primary hover:to-primary/80 hover:text-white hover:scale-105`}
                  >
                    <activePillar.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {activePillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {activePillar.desc}
                    </p>
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