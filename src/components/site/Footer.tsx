import { Logo } from "./Logo";
import {
  Phone, Mail, MapPin, Facebook, Instagram, Youtube,
  Linkedin, ChevronUp
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-background border-t border-border/40">
      {/* Fondos con gradientes sutiles y texturas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-primary/[0.01]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Bloque de Identidad (Logo + Redes con mayor presencia) */}
          <div className="flex flex-col items-start gap-5 shrink-0 w-full sm:w-auto">
            <div className="transition-transform duration-300 hover:scale-[1.02]">
              <Logo className="h-9 w-auto text-foreground" />
            </div>

            {/* Redes Sociales: SVGs nativos optimizados para rendimiento prémium */}
            <div className="flex flex-wrap gap-2.5">
              {[
                {
                  name: "Facebook",
                  href: "#",
                  svg: <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                },
                {
                  name: "Instagram",
                  href: "#",
                  svg: <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                },
                {
                  name: "Youtube",
                  href: "#",
                  svg: <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg>
                },
                {
                  name: "Linkedin",
                  href: "#",
                  svg: <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.name}
                  className="group relative rounded-xl border border-primary/10 bg-primary/[0.03] backdrop-blur-sm p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-sm hover:shadow-primary/5 active:scale-95"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {social.svg}
                  </div>
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Bloque de Contacto: Estilo Badge Premium con Escala y Legibilidad Mejorada */}
          <div className="flex flex-col items-start gap-3 w-full max-w-sm md:flex-row md:max-w-none md:gap-4">
            <a
              href="tel:+18090000000"
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/[0.02] hover:text-foreground"
            >
              {/* Contenedor del Icono + Micro Ping Animado */}
              <div className="relative flex h-4 w-4 items-center justify-center shrink-0">
                <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-primary/40 opacity-75"></span>
                <Phone className="relative h-4 w-4 text-primary/70" />
              </div>
              <span>Llamar al soporte</span>
            </a>

            <a
              href="mailto:hola@rocedental.com"
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/[0.02] hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary/70 shrink-0" />
              <span>hola@rocedental.com</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/30 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/[0.02] hover:text-foreground"
            >
              <MapPin className="h-4 w-4 text-primary/70 shrink-0" />
              <span>Santiago · Santo Domingo</span>
            </a>
          </div>

        </div>

      </div>

      {/* ===== FOOTER INFERIOR (Créditos Centrados en Móvil) ===== */}
      <div className="border-t border-border/10 bg-secondary/[0.02] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3.5 text-center text-xs sm:flex-row sm:justify-between sm:text-left lg:px-2">
          {/* Copyright nítido y centrado */}
          <span className="text-muted-foreground/70">
            © {currentYear} ROCE Dental. Todos los derechos reservados.
          </span>

          {/* Enlaces legales con tracking sutil */}
          <div className="flex justify-center gap-5 font-medium tracking-wide text-muted-foreground/50">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Términos
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTÓN VOLVER ARRIBA ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 rounded-xl bg-primary/95 p-2.5 text-primary-foreground shadow-lg transition-all hover:bg-primary active:scale-95"
        aria-label="Volver arriba"
      >
        <ChevronUp className="h-4 w-4" />
      </button>
    </footer>
  );
}