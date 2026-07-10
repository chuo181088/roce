import { useState } from "react";
import { Wrench, FlaskConical, Headset, CheckCircle2, ArrowRight } from "lucide-react";

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const cards = [
    {
      icon: Wrench,
      tag: "Equipos",
      title: "Equipos odontológicos",
      desc: "Unidades dentales, esterilización, imagenología y piezas de mano de marcas líderes.",
      points: ["Instalación profesional", "Garantía oficial", "Refacciones disponibles"],
      id: "equipos",
      number: "01",
    },
    {
      icon: FlaskConical,
      tag: "Materiales",
      title: "Materiales especializados",
      desc: "Consumibles, restauradores, impresión, prótesis y materiales de laboratorio certificados.",
      points: ["Stock continuo", "Cadena de frío controlada", "Lotes trazables"],
      id: "materiales",
      number: "02",
    },
    {
      icon: Headset,
      tag: "Soporte",
      title: "Soporte técnico",
      desc: "Técnicos certificados en Santiago listos para mantenimiento, calibración y reparación.",
      points: ["Respuesta < 24h", "Mantenimiento preventivo", "Capacitación clínica"],
      id: "soporte",
      number: "03",
    },
  ];

  const activeCard = cards[activeTab];

  // === ESCENARIO VISUAL INTERACTIVO PARA PC (ACTUALIZADO A TONOS CLAROS) ===
  const renderVisualStage = () => {
    switch (activeTab) {
      case 0: // Equipos Odontológicos -> ANTES OSCURO, AHORA CLARO
        return (
          <div className="relative w-full h-72 rounded-xl bg-slate-50 border border-slate-200/60 p-6 font-mono text-xs text-slate-600 overflow-hidden shadow-inner animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">Garantía Activa</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white border border-slate-200/50 flex justify-between items-center">
                <div>
                  <p className="text-slate-900 font-semibold font-sans text-sm">Unidad Dental Premium X1</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">✓ Instalación certificada</p>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">100% Operativo</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white border border-slate-200/50">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider">Calibración</span>
                  <span className="text-slate-900 font-sans font-medium text-xs">Precisión Médica</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200/50">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider">Soporte Oficial</span>
                  <span className="text-slate-900 font-sans font-medium text-xs">Piezas Originales</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          </div>
        );
      case 1: // Materiales Especializados -> YA ERA CLARO, SE MANTIENE
        return (
          <div className="w-full h-72 rounded-xl bg-slate-50 border border-border/70 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Control de Inventario</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold animate-pulse">Cadena de Frío OK</span>
            </div>

            <div className="space-y-2.5 my-auto">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Resinas de Alta Estética</span>
                <span className="font-bold text-slate-900">Stock Óptimo</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-primary rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                <span>Lote: #B2026</span>
                <span>Exp: 12/2027</span>
              </div>
            </div>

            <div className="border-t border-slate-200/60 pt-3 flex gap-2">
              <span className="px-2 py-1 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-sm">Siliconas</span>
              <span className="px-2 py-1 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-sm">Restauradores</span>
              <span className="px-2 py-1 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-sm">+15 Categorías</span>
            </div>
          </div>
        );
      case 2: // Soporte Técnico -> ANTES OSCURO, AHORA CLARO CON TINTE AZUL
        return (
          <div className="w-full h-72 rounded-xl bg-gradient-to-br from-slate-100 via-primary/5 to-white border border-slate-200/60 p-6 text-slate-900 flex flex-col justify-between relative overflow-hidden shadow-inner animate-fade-in">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-600 uppercase tracking-widest font-mono">Respuesta Rápida</p>
                <h4 className="text-xl font-bold font-sans mt-1 text-slate-950">Soporte en Santiago</h4>
              </div>
              <div className="px-2 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">Local</div>
            </div>

            <div className="bg-white border border-slate-200/50 rounded-xl p-4 flex items-center gap-4 shadow-sm">
              <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                &lt;24h
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 leading-tight">Tiempo estimado de atención</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">Técnicos listos para salir a clínica o laboratorio.</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-600 font-mono flex justify-between items-center">
              <span>Mantenimiento Preventivo</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="soluciones" className="relative overflow-hidden py-12 sm:py-16 lg:py-15">
      {/* Fondo y textura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary/5 to-white/80" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] sm:opacity-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Elementos decorativos PC */}
      <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto lg:mx-0 max-w-7xl lg:max-w-[1600px] xl:max-w-none px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-15">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/20 shadow-sm lg:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Nuestra Oferta
          </span>

          <h2 className="mt-8 sm:mt-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-4xl">
            Una sola fuente para la práctica clínica moderna.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Equipos, materiales y servicio técnico integrados y diseñados para clínicas y
            laboratorios que no pueden detenerse.
          </p>

          <div className="mt-8 flex justify-center sm:mt-6">
            <div className="h-0.5 w-64 md:w-64 md:w-[28rem] lg:w-[80rem] rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 bg-[length:200%_100%] animate-shimmer-line " />
          </div>
        </div>

        {/* MÓVIL: Grid de tarjetas (INTACTO) */}
        <div className="grid gap-8 sm:gap-6 md:grid-cols-2 lg:hidden">
          {cards.map((c, index) => (
            <article
              key={c.title}
              id={c.id}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-white/90 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm sm:p-6"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="absolute left-0 top-1/2 h-12 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-primary/60 to-primary/20 sm:hidden" />
              <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/5 sm:hidden" />
              <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none sm:rounded-3xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-xl sm:rounded-3xl" />
              </div>

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-md shadow-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white sm:h-14 sm:w-14">
                  <c.icon className="h-7 w-7 sm:h-6 sm:w-6" />
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-md ring-1 ring-border/50 sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/75 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {c.tag}
                </span>
              </div>

              <div className="relative mt-5 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-sm">
                  {c.desc}
                </p>
              </div>

              <ul className="relative mt-6 space-y-3 border-t border-border/50 pt-5 sm:space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-foreground/90 sm:gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 group-hover:scale-110 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-primary/40 transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />
            </article>
          ))}
        </div>

        {/* PC: Layout Interactivo con Tabs e Interfaz Virtual */}
        <div className="hidden lg:block">
          {/* Tabs superiores con HOVER */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2 p-2 rounded-2xl bg-white/60 border border-border/40 backdrop-blur-sm shadow-sm">
              {cards.map((c, index) => (
                <button
                  key={c.id}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === index
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/80"
                    }`}
                >
                  <c.icon className="h-5 w-5" />
                  <span className="text-base">{c.tag}</span>
                  {activeTab === index && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Panel Principal */}
          <div key={activeTab} className="animate-fade-in">
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-primary via-primary/20 to-primary animate-border-shine shadow-lg shadow-primary/10">
              <div className="relative h-full w-full rounded-[14px] bg-white p-10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Grid de 12 columnas en PC */}
                <div className="relative grid grid-cols-12 gap-12 items-center">

                  {/* Columna Izquierda: Información (5 columnas) */}
                  <div className="col-span-5 flex flex-col items-start gap-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <activeCard.icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        {activeCard.tag}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight text-foreground leading-tight">
                      {activeCard.title}
                    </h3>

                    <p className="text-base leading-relaxed text-muted-foreground">
                      {activeCard.desc}
                    </p>
                  </div>

                  {/* Columna Derecha: Escenario de UI Virtual + Badges (7 columnas) */}
                  <div className="col-span-7 flex flex-col gap-6">
                    {/* Renderiza el componente visual dinámico */}
                    {renderVisualStage()}

                    {/* Micro badges inferiores para los puntos clave */}
                    <div className="grid grid-cols-3 gap-3">
                      {activeCard.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                        >
                          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <CheckCircle2 className="h-3 w-3" />
                          </div>
                          <span className="text-[11px] font-semibold text-foreground/80 truncate">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Solicitar información
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}