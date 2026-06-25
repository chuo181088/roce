import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Wrench,
  FlaskConical,
  Headset,
  ShieldCheck,
  Sparkles,
  Compass,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import heroImage from "@/assets/hero-dental.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROCE Dental — Excelencia clínica en el Cibao" },
      { name: "description", content: "Suministros odontológicos de precisión, equipos de última generación y soporte técnico directo en Santiago y Santo Domingo." },
      { property: "og:title", content: "ROCE Dental — Excelencia clínica en el Cibao" },
      { property: "og:description", content: "Suministros odontológicos de precisión con soporte técnico directo." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 sm:pt-[68px]">
        <Hero />
        <BrandsMarquee />
        <Solutions />
        <ValueProposition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[520px] opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, oklch(0.27 0.07 258 / 0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Suministros Odontológicos · Cibao
          </span>
          <h1 className="mt-7 text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-foreground sm:text-[56px] lg:text-[64px]">
            Elevando la excelencia clínica en el{" "}
            <span className="text-primary">Cibao.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Suministros odontológicos de precisión con soporte técnico directo
            en Santiago. Equipos, materiales y asesoría especializada para la
            práctica clínica moderna.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#equipos"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-[var(--primary-hover)]"
            >
              Ver Catálogo Seleccionado
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Hablar con un asesor
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "+15", v: "Años en RD" },
              { k: "+10", v: "Marcas oficiales" },
              { k: "24/7", v: "Soporte técnico" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold tracking-tight text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[28px] bg-primary/[0.04] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elegant">
            <img
              src={heroImage}
              alt="Equipo dental moderno ROCE Dental"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              fetchPriority="high"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">Distribuidor autorizado</span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                ISO · CE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
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

function ValueProposition() {
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

function BentoCard({
  icon: Icon,
  label,
  title,
  desc,
  className = "",
}: {
  icon: typeof ShieldCheck;
  label: string;
  title: string;
  desc: string;
  className?: string;
}) {
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

function Contact() {
  const locations = [
    {
      city: "Santiago de los Caballeros",
      role: "Oficina principal",
      address: "Av. 27 de Febrero, Santiago, RD",
      hours: "Lun – Vie · 8:00 – 6:00 · Sáb · 9:00 – 1:00",
      phone: "+1 (809) 000-0000",
    },
    {
      city: "Santo Domingo",
      role: "Showroom & distribución",
      address: "Av. Winston Churchill, DN, RD",
      hours: "Lun – Vie · 8:30 – 5:30",
      phone: "+1 (809) 000-0001",
    },
  ];

  return (
    <section id="contacto" className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              Contacto
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[40px]">
              Agende una asesoría con nuestro equipo.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Conversemos sobre las necesidades de su clínica o laboratorio.
              Le respondemos en menos de 24 horas hábiles.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="tel:+18090000000"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30"
              >
                <Phone className="h-4 w-4 text-primary" /> +1 (809) 000-0000
              </a>
              <a
                href="mailto:hola@rocedental.com"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30"
              >
                <Mail className="h-4 w-4 text-primary" /> hola@rocedental.com
              </a>
              <a
                href="#"
                className="group flex items-center justify-between rounded-xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-[var(--primary-hover)]"
              >
                Agendar Asesoría
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {locations.map((l) => (
              <article
                key={l.city}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-soft"
              >
                <div className="mb-5 flex items-center gap-2 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    {l.role}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {l.city}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.address}</p>
                <div className="mt-auto space-y-2.5 border-t border-border pt-5 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 h-4 w-4 text-primary/70" />
                    <span>{l.hours}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-primary/70" />
                    <span>{l.phone}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

