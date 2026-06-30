import { useState, useEffect } from "react";
import { ShieldCheck, Sparkles, Compass, Headset, ChevronDown } from "lucide-react";

interface Pillar {
  icon: typeof ShieldCheck;
  label: string;
  title: string;
  desc: string;
  color: string;
  stats: { value: string; label: string }[];
}

export function ValueProposition() {
  const pillars: Pillar[] = [
    {
      icon: ShieldCheck,
      label: "Compromiso",
      title: "Disponibilidad continua de inventario crítico.",
      desc: "Sostenemos el flujo de consumibles y equipos esenciales para que su clínica nunca se detenga.",
      color: "from-blue-500 to-blue-400",
      stats: [
        { value: "+500", label: "Productos en stock" },
        { value: "24/7", label: "Disponibilidad" },
      ],
    },
    {
      icon: Sparkles,
      label: "Solución",
      title: "Catálogo curado de marcas oficiales.",
      desc: "Productos seleccionados por relevancia clínica, no por volumen.",
      color: "from-emerald-500 to-emerald-400",
      stats: [
        { value: "+14", label: "Marcas líderes" },
        { value: "100%", label: "Originales" },
      ],
    },
    {
      icon: Compass,
      label: "Asesoría",
      title: "Acompañamiento técnico y comercial directo.",
      desc: "Asesores con criterio clínico ayudan a definir el equipamiento ideal por especialidad.",
      color: "from-amber-500 to-amber-400",
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
      stats: [
        { value: "<24h", label: "Tiempo respuesta" },
        { value: "Local", label: "Equipo en Santiago" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const safeIndex = Math.min(Math.max(activeIndex, 0), pillars.length - 1);
  const activePillar = pillars[safeIndex];

  // Auto-rotación cada 5 segundos en PC
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [pillars.length]);

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
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Nuestra Propuesta
          </span>
          <h2 className="mt-10 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:mt-4 sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
            Cuatro pilares que definen cada relación clínica.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Más que un proveedor — un socio operativo. Trabajamos con cada profesional para sostener
            resultados clínicos consistentes en el tiempo.
          </p>
          <div className="mt-8 flex justify-center sm:mt-6">
            <div className="h-0.5 w-64 rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 bg-[length:200%_100%] animate-shimmer-line" />
          </div>
        </div>

        {/* === MÓVIL: ACORDEÓN (NO TOCAR) === */}
        <div className="mx-auto max-w-3xl space-y-5 sm:hidden">
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
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
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

        {/* === PC: SPLIT SCREEN === */}
        <div className="hidden sm:block">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Columna izquierda: Imagen/Ilustración */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/5 via-white to-primary/10 border border-border/40 overflow-hidden shadow-2xl shadow-primary/10">
                {/* Ilustración SVG abstracta de clínica dental */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Círculos decorativos de fondo */}
                  <circle cx="100" cy="100" r="80" fill="url(#grad1)" opacity="0.1" />
                  <circle cx="300" cy="300" r="100" fill="url(#grad2)" opacity="0.1" />

                  {/* Icono de muela grande en el centro */}
                  <g transform="translate(150, 120)">
                    <path
                      d="M50 0C22.4 0 0 22.4 0 50c0 22 8.8 41.8 17.6 71.5C24.4 148 32 180 50 180c12.1 0 16.5-22 22-44c3.3-13.2 7.7-22 22-22s18.7 8.8 22 22c5.5 22 9.9 44 22 44c18 0 25.6-32 32.4-58.5C179.2 91.8 188 72 188 50c0-27.6-22.4-50-50-50c-17.6 0-30.8 7.7-44 7.7S67.6 0 50 0z"
                      fill="url(#toothGrad)"
                      opacity="0.8"
                    />
                  </g>

                  {/* Elementos decorativos */}
                  <circle cx="80" cy="200" r="8" fill="#3b82f6" opacity="0.3" />
                  <circle cx="320" cy="150" r="6" fill="#10b981" opacity="0.3" />
                  <circle cx="250" cy="80" r="10" fill="#f59e0b" opacity="0.3" />

                  {/* Gradientes */}
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                    <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Overlay con texto */}
                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/20 to-transparent">
                  <div className="text-white">
                    <div className="text-3xl font-bold mb-2">+14</div>
                    <div className="text-sm opacity-90">Marcas líderes integradas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Tabs + Panel */}
            <div>
              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                {pillars.map((p, index) => (
                  <button
                    key={p.label}
                    onClick={() => setActiveIndex(index)}
                    className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${activeIndex === index
                        ? "bg-white border-2 border-primary shadow-lg shadow-primary/20"
                        : "bg-white/50 border border-border/40 hover:bg-white hover:border-primary/30"
                      }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-md transition-all duration-300 ${activeIndex === index ? "scale-110" : ""
                        }`}
                    >
                      <p.icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${activeIndex === index ? "text-primary" : "text-muted-foreground"
                        }`}
                    >
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Panel de contenido */}
              <div
                key={safeIndex}
                className="rounded-3xl border border-border/40 bg-white p-8 shadow-xl shadow-primary/5 animate-in fade-in slide-in-from-right-4 duration-500"
              >
                <div className="flex items-start gap-6">
                  {/* Icono grande con color */}
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${activePillar.color} text-white shadow-xl`}
                  >
                    <activePillar.icon className="h-10 w-10" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground leading-tight">
                      {activePillar.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {activePillar.desc}
                    </p>

                    {/* Estadísticas */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {activePillar.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-border/40"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs font-medium text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
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