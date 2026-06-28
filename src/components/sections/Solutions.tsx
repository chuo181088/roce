import { Wrench, FlaskConical, Headset, CheckCircle2 } from "lucide-react";

export function Solutions() {
  const cards = [
    {
      icon: Wrench,
      tag: "Equipos",
      title: "Equipos odontológicos",
      desc: "Unidades dentales, esterilización, imagenología y piezas de mano de marcas líderes.",
      points: ["Instalación profesional", "Garantía oficial", "Refacciones disponibles"],
      id: "equipos",
    },
    {
      icon: FlaskConical,
      tag: "Materiales",
      title: "Materiales especializados",
      desc: "Consumibles, restauradores, impresión, prótesis y materiales de laboratorio certificados.",
      points: ["Stock continuo", "Cadena de frío controlada", "Lotes trazables"],
      id: "materiales",
    },
    {
      icon: Headset,
      tag: "Soporte",
      title: "Soporte técnico",
      desc: "Técnicos certificados en Santiago listos para mantenimiento, calibración y reparación.",
      points: ["Respuesta < 24h", "Mantenimiento preventivo", "Capacitación clínica"],
      id: "soporte",
    },
  ];

  return (
    <section id="soluciones" className="relative overflow-hidden py-12 sm:py-16 lg:py-32">
      {/* Fondo y textura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary/5 to-white/80" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] sm:opacity-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado con más espaciado en móvil */}
        <div className="mx-auto mb-15 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Nuestra Oferta
          </span>

          <h2 className="mt-10 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:mt-4 sm:text-4xl lg:text-5xl">
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


        {/* Grid de tarjetas */}
        <div className="grid gap-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, index) => (
            <article
              key={c.title}
              id={c.id}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-white/90 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm sm:p-6 lg:p-8"
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

              {/* === CABECERA: ICONO + BADGE PREMIUM (ÚNICO) === */}
              <div className="relative flex items-start justify-between">
                {/* Icono a la izquierda */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-md shadow-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <c.icon className="h-7 w-7 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </div>

                {/* Badge premium a la derecha (con punto animado) */}
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
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-xl lg:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
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
      </div>
    </section>
  );
}