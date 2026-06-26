import { ShieldCheck, Sparkles, Compass, Headset } from "lucide-react";

interface BentoCardProps {
  icon: typeof ShieldCheck;
  label: string;
  title: string;
  desc: string;
  className?: string;
}

function BentoCard({
  icon: Icon,
  label,
  title,
  desc,
  className = "",
}: BentoCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:border-primary/30 hover:shadow-elegant ${className}`}
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/[0.08] text-primary">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

export function ValueProposition() {
  return (
    <section className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              Nuestra Propuesta
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[40px]">
              Tres pilares que definen cada relación clínica.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Más que un proveedor — un socio operativo. Trabajamos con cada
            profesional para sostener resultados clínicos consistentes en el
            tiempo.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <BentoCard
            icon={ShieldCheck}
            label="Compromiso"
            title="Disponibilidad continua de inventario crítico."
            desc="Sostenemos el flujo de consumibles y equipos esenciales para que su clínica nunca se detenga."
            className="lg:col-span-2 lg:row-span-1"
          />
          <BentoCard
            icon={Sparkles}
            label="Solución"
            title="Catálogo curado de marcas oficiales."
            desc="Productos seleccionados por relevancia clínica, no por volumen."
          />
          <BentoCard
            icon={Compass}
            label="Asesoría"
            title="Acompañamiento técnico y comercial directo."
            desc="Asesores con criterio clínico ayudan a definir el equipamiento ideal por especialidad."
          />
          <BentoCard
            icon={Headset}
            label="Soporte"
            title="Respuesta técnica local en menos de 24 horas."
            desc="Equipo propio basado en Santiago — sin escalado internacional."
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
