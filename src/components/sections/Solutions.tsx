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
    <section id="empresa" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
            Nuestra Oferta
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[40px]">
            Una sola fuente para la práctica clínica moderna.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Equipos, materiales y servicio técnico integrados — diseñados para
            clínicas y laboratorios que no pueden detenerse.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              id={c.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {c.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13px] text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
