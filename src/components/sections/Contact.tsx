import { useRef, useState, useEffect } from "react";
import { Counter } from "@/components/ui/Counter";
import { Phone, Mail, MapPin, Clock, ArrowRight, Calendar, Building2, Globe, Send, User, AtSign, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";


export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Se activa cuando el borde inferior de la sección está a 50px del viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const locations = [
    {
      city: "Santo Domingo",
      role: "Oficina principal",
      address: "Av. 27 de Febrero, Santo Domingo, RD",
      hours: "Lun – Vie · 8:00 – 6:00",
      phone: "+1 (809) 000-0000",
    },
    {
      city: "Santiago de los Caballeros",
      role: "Centro de distribución",
      address: "Calle Benito Moncion No. 108, Santiago de los Caballeros",
      hours: "Lun – Vie · 8:00 – 6:00",
      phone: "+1 (849) 000-0000",
    },
  ];

  return (
    <section id="contacto" ref={sectionRef} className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      {/* ========== FONDO (igual que sección anterior) ========== */}
      {/* Gradiente base */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-primary/5" />

      {/* Patrón de puntos (opacidad 3%) */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial decorativo */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,85,255,0.05) 0%, transparent 50%)' }}
      />

      {/* ========== LÍNEA DIVISORIA SUPERIOR ========== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ========== CONTENEDOR PRINCIPAL ========== */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ========== CABECERA ========== */}
        <div className="mb-16 text-center lg:text-left">
          {/* Badge (igual que en el hero) */}
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Contáctenos
          </span>

          <h2 className="mt-12 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            ¿Listo para <span className="italic font-bold text-primary">transformar</span> su clínica?
          </h2>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nuestro equipo de expertos está disponible para asesorarle en la elección de equipos y
            materiales que llevarán su práctica al siguiente nivel.
          </p>
        </div>

        {/* ========== GRID PRINCIPAL: formulario + ubicaciones ========== */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">

          {/* ---------- COLUMNA IZQUIERDA: Formulario + Stats ---------- */}
          <div className="space-y-10">

            {/* Formulario */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Envíenos un mensaje
              </h3>

              <div className="mt-6 space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="sr-only">Nombre completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                      type="text"
                      id="name"
                      placeholder="Nombre completo"
                      className="w-full rounded-xl border border-border bg-background/50 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">Correo electrónico</label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Correo electrónico"
                      className="w-full rounded-xl border border-border bg-background/50 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="sr-only">Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Teléfono"
                      className="w-full rounded-xl border border-border bg-background/50 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="¿En qué podemos ayudarle?"
                      className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 resize-y"
                    />
                  </div>
                </div>

                {/* Botón enviar */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(0,85,255,0.15)] transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(0,85,255,0.25)] hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Enviar mensaje
                </button>
              </div>
            </form>

            {/* ===== STATS (igual que en la propuesta) ===== */}
            <div className="grid grid-cols-3 gap-8 sm:gap-10 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
              {[
                { label: "Clínicas atendidas", value: 500, suffix: "+" },
                { label: "Equipos instalados", value: 2300, suffix: "" },
                { label: "Satisfacción", value: 98, suffix: "%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-semibold text-primary sm:text-3xl">
                    <Counter
                      key={`${stat.label}-${isVisible}`}
                      target={stat.value}
                      duration={5000}   // ← Cambiado de 2500 a 4000
                      animate={isVisible}
                    />
                    {stat.suffix}
                  </div>
                  <div className="text-[10px] whitespace-nowrap font-bold sm:text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- COLUMNA DERECHA: Contacto directo + Ubicaciones ---------- */}
          <div className="space-y-12">

            {/* Tarjeta "Atención directa" */}
            <div className=" rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-soft">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                Atención directa
              </h3>
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+18090000000"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 transition-all hover:border-primary/40 hover:bg-primary/5"
                  aria-label="Llamar al +1 (809) 000-0000"
                >
                  <Phone className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium text-foreground">+1 (809) 000-0000</span>
                </a>
                <a
                  href="mailto:hola@rocedental.com"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 transition-all hover:border-primary/40 hover:bg-primary/5"
                  aria-label="Enviar correo a hola@rocedental.com"
                >
                  <Mail className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium text-foreground">hola@rocedental.com</span>
                </a>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-background/50 px-4 py-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Av. 27 de Febrero, Santo Domingo, RD</span>
                </div>
              </div>
            </div>

            {/* Tarjetas de ubicación */}
            <div className="grid gap-12 sm:grid-cols-2">
              {locations.map((l, index) => (
                <article
                  key={l.city}
                  className={cn(
                    "group relative flex flex-col rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:-translate-y-1",
                    "hover:bg-gradient-to-b hover:from-card hover:to-primary/5"
                  )}
                >
                  {/* Badge tipo "Oficina principal" */}
                  <div className="absolute -top-2 -right-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary/70 border border-primary/20 backdrop-blur-sm">
                    {index === 0 ? "Oficina principal" : "Centro de distribución"}
                  </div>

                  <div className="mb-4 flex items-center gap-2 text-primary">
                    <Building2 className="h-4 w-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                      {l.role}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{l.city}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{l.address}</p>

                  <div className="mt-auto space-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2.5">
                      <Clock className="mt-0.5 h-4 w-4 text-primary/70" />
                      <span>{l.hours}</span>
                    </p>
                    <a
                      href={`tel:${l.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2.5 transition-colors hover:text-primary"
                      aria-label={`Llamar a ${l.city}: ${l.phone}`}
                    >
                      <Phone className="h-4 w-4 text-primary/70" />
                      <span>{l.phone}</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ========== BOTONES FINALES ========== */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(0,85,255,0.15)] transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(0,85,255,0.25)] hover:scale-105"
          >
            <Calendar className="h-4 w-4" />
            Agendar Asesoría
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <Globe className="h-4 w-4" />
            Ver ubicación
          </a>
        </div>

        {/* Texto adicional (opcional) */}
        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          También puede escribirnos por{" "}
          <a href="#" className="text-primary hover:underline">
            WhatsApp
          </a>{" "}
          o visitar nuestras tiendas en Santo Domingo y Santiago.
        </p>
      </div>
    </section>
  );
}