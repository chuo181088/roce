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

  return (
    <section id="soluciones" className="relative overflow-hidden py-12 sm:py-16 lg:py-15">
      {/* Fondo y textura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary/5 to-white/80" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] sm:opacity-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Elementos decorativos PC */}
      <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mx-auto mb-15 max-w-2xl text-center sm:mb-16 lg:mb-15">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/20 shadow-sm lg:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Nuestra Oferta
          </span>

          <h2 className="mt-10 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:mt-4 sm:text-4xl lg:text-4xl lg: whitespace-pre-line">
            Una sola fuente para la práctica clínica moderna.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Equipos, materiales y servicio técnico integrados y diseñados para clínicas y
            laboratorios que no pueden detenerse.
          </p>

          <div className="mt-8 flex justify-center sm:mt-6">
            <div className="h-0.5 w-64 rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 bg-[length:200%_100%] animate-shimmer-line " />
          </div>
        </div>

        {/* MÓVIL: Grid de tarjetas (NO TOCAR) */}
        <div className="grid gap-14 sm:gap-6 md:grid-cols-2 lg:hidden">
          {cards.map((c, index) => (
            <article
              key={c.title}
              id={c.id}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-white/90 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm sm:p-6"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Borde izquierdo decorativo (solo móvil) */}
              <div className="absolute left-0 top-1/2 h-12 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-primary/60 to-primary/20 sm:hidden" />

              {/* Sombra interior (móvil) */}
              <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/5 sm:hidden" />

              {/* Efecto de brillo */}
              <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none sm:rounded-3xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-xl sm:rounded-3xl" />
              </div>

              {/* === CABECERA: ICONO + BADGE PREMIUM === */}
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

              {/* Contenido */}
              <div className="relative mt-5 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-sm">
                  {c.desc}
                </p>
              </div>

              {/* Lista de puntos */}
              <ul className="relative mt-6 space-y-3 border-t border-border/50 pt-5 sm:space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-foreground/90 sm:gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 group-hover:scale-110 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-sm">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Línea inferior animada */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-primary/40 transition-transform duration-500 group-hover:scale-x-100 sm:left-6 sm:right-6" />
            </article>
          ))}
        </div>

        {/* PC: Layout Interactivo con Tabs (HOVER) */}
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

          {/* Panel con borde animado */}
          <div key={activeTab} className="animate-fade-in">
            {/* Contenedor exterior: gradiente animado como borde */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-primary via-primary/20 to-primary animate-border-shine shadow-lg shadow-primary/10">


              {/* Fondo interior: BLANCO PURO */}
              <div className="relative h-full w-full rounded-[14px] bg-white p-8 overflow-hidden">

                {/* Patrón de puntos sutil */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Contenido */}
                <div className="relative flex gap-10 items-start">

                  {/* Columna izquierda */}
                  <div className="flex flex-col gap-4 w-1/4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white border-2 border-primary/20 text-primary shadow-sm">
                      <activeCard.icon className="h-10 w-10" strokeWidth={1.5} />
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 px-4 py-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/75 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {activeCard.tag}
                      </span>
                    </div>
                  </div>

                  {/* Columna derecha */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold tracking-tight text-foreground leading-tight">
                      {activeCard.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {activeCard.desc}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                      {activeCard.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white border border-border/40 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Línea inferior decorativa */}
            <div className="absolute bottom-0 left-12 right-12 h-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
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