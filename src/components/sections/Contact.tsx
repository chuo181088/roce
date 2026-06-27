import { Phone, Mail, ArrowRight, MapPin, Clock } from "lucide-react";

export function Contact() {
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
              Conversemos sobre las necesidades de su clínica o laboratorio. Le respondemos en menos
              de 24 horas hábiles.
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
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{l.city}</h3>
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
