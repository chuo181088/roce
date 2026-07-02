import { useRef, useState, useEffect } from "react";
import { Counter } from "@/components/ui/Counter";
import { Phone, Mail, MapPin, Clock, ArrowRight, Calendar, Building2, Globe, Send, User, AtSign, MessageSquare, Shield, Award, Zap } from "lucide-react";
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
        rootMargin: '0px 0px -50px 0px'
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
      {/* ========== FONDO ========== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-primary/5" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,85,255,0.05) 0%, transparent 50%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ========== CONTENEDOR PRINCIPAL ========== */}
      <div className="relative mx-auto lg:mx-0 max-w-7xl lg:max-w-[1600px] xl:max-w-none px-5 lg:px-12 xl:px-20">

        {/* ========== CABECERA ========== */}
        <div className="mb-16 text-center lg:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Contáctenos
          </span>

          <h2 className="mt-12 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:whitespace-nowrap">
            ¿Listo para <span className="italic font-bold text-primary">transformar</span> su clínica?
          </h2>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nuestro equipo de expertos está disponible para asesorarle en la elección de equipos y
            materiales que llevarán su práctica al siguiente nivel.
          </p>
        </div>

        {/* ========== GRID PRINCIPAL ========== */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">

          {/* ---------- COLUMNA IZQUIERDA: Formulario Premium ---------- */}
          <div className="space-y-8">

            {/* Formulario con diseño premium */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-border/60 bg-card/90 backdrop-blur-md p-8 lg:p-10 shadow-xl shadow-primary/5 relative overflow-hidden"
            >
              {/* Efecto de brillo superior */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Envíenos un mensaje</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Respuesta garantizada en menos de 24 horas</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Nombre y Email en grid 2 columnas en PC */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="sr-only">Nombre completo</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-primary" />
                      <input
                        type="text"
                        id="name"
                        placeholder="Nombre completo"
                        className="w-full rounded-xl border border-border/60 bg-background/50 pl-11 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="sr-only">Correo electrónico</label>
                    <div className="relative group">
                      <AtSign className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-primary" />
                      <input
                        type="email"
                        id="email"
                        placeholder="Correo electrónico"
                        className="w-full rounded-xl border border-border/60 bg-background/50 pl-11 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="sr-only">Teléfono</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-primary" />
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Teléfono"
                      className="w-full rounded-xl border border-border/60 bg-background/50 pl-11 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="¿En qué podemos ayudarle? Cuéntenos sobre su clínica y necesidades..."
                      className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background resize-none"
                    />
                  </div>
                </div>

                {/* Botón enviar premium */}
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span>Enviar mensaje</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>

            {/* ===== STATS INTEGRADOS ===== */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm">
              {[
                { label: "Clínicas atendidas", value: 500, suffix: "+", icon: Building2 },
                { label: "Equipos instalados", value: 2300, suffix: "", icon: Zap },
                { label: "Satisfacción", value: 98, suffix: "%", icon: Award },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-semibold text-primary sm:text-3xl">
                    <Counter
                      key={`${stat.label}-${isVisible}`}
                      target={stat.value}
                      duration={5000}
                      animate={isVisible}
                    />
                    {stat.suffix}
                  </div>
                  <div className="text-[10px] whitespace-nowrap font-bold sm:text-xs text-muted-foreground mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- COLUMNA DERECHA: Contacto + Ubicaciones ---------- */}
          <div className="space-y-6">

            {/* Tarjeta "Atención directa" premium */}
            <div className="rounded-3xl border border-border/60 bg-card/90 backdrop-blur-md p-6 lg:p-8 shadow-lg shadow-primary/5 relative overflow-hidden">
              {/* Efecto de brillo */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Atención directa</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Estamos disponibles para usted</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+18090000000"
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 px-5 py-4 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                  aria-label="Llamar al +1 (809) 000-0000"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium">Llamar ahora</p>
                    <p className="text-sm font-bold text-foreground mt-0.5">+1 (809) 000-0000</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="mailto:hola@rocedental.com"
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 px-5 py-4 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                  aria-label="Enviar correo a hola@rocedental.com"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium">Escribir correo</p>
                    <p className="text-sm font-bold text-foreground mt-0.5">hola@rocedental.com</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium">Horario de atención</p>
                    <p className="text-sm font-bold text-foreground mt-0.5">Lun – Vie · 8:00 – 6:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjetas de ubicación premium */}
            <div className="grid gap-4">
              {locations.map((l, index) => (
                <article
                  key={l.city}
                  className="group relative flex flex-col rounded-2xl border border-border/60 bg-card/90 p-5 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Efecto de brillo */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                        {l.role}
                      </span>
                    </div>
                    <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary/70 border border-primary/20">
                      {index === 0 ? "Principal" : "Distribución"}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-foreground">{l.city}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.address}</p>

                  <div className="mt-auto space-y-3 border-t border-border/60 pt-4 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2.5">
                      <Clock className="mt-0.5 h-4 w-4 text-primary/70 flex-shrink-0" />
                      <span className="text-xs">{l.hours}</span>
                    </p>
                    <a
                      href={`tel:${l.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2.5 transition-colors hover:text-primary group/link"
                      aria-label={`Llamar a ${l.city}: ${l.phone}`}
                    >
                      <Phone className="h-4 w-4 text-primary/70 flex-shrink-0" />
                      <span className="text-xs font-semibold">{l.phone}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary/60" />
                <span className="font-medium">Datos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary/60" />
                <span className="font-medium">Respuesta garantizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== BOTONES FINALES ========== */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <Calendar className="h-4 w-4" />
            Agendar Asesoría
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <Globe className="h-4 w-4" />
            Ver ubicación
          </a>
        </div>

        {/* Texto adicional */}
        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          También puede escribirnos por{" "}
          <a href="#" className="text-primary hover:underline font-semibold">
            WhatsApp
          </a>{" "}
          o visitar nuestras tiendas en Santo Domingo y Santiago.
        </p>
      </div>
    </section>
  );
} 