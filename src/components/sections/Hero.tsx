// src/components/sections/Hero.tsx
import React from "react";
import { Phone, ArrowRight, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAnimate } from "@/components/ui/HeroAnimate";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-dental.jpg";

type HeroProps = {
  microTitulo?: string;
  titulo?: string;
  tituloHighlight?: string;
  subtitulo?: string;
  descripcion?: string;
  rating?: string | number;
  reviewsText?: string;
  ctaText?: string;
  ctaLink?: string;
  phoneLink?: string;
  phoneDisplay?: string;
  videoUrl?: string;
  fallbackImage?: string;
};

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Hero({
  microTitulo = "Suministros Odontológicos",
  titulo = "Elevando la excelencia",
  tituloHighlight = "clínica",
  subtitulo = "en el Cibao.",
  descripcion = "Suministros odontológicos de precisión con soporte técnico directo en Santiago. Equipos, materiales y asesoría especializada para la práctica clínica moderna.",
  rating = "4.9",
  reviewsText = "de más de 150 clínicas",
  ctaText = "Ver Catálogo",
  ctaLink = "#equipos",
  phoneLink = "tel:+18090000000",
  phoneDisplay = "+1 (809) 000-0000",
  videoUrl = "videos/roce.mp4",
  fallbackImage = heroImage,
}: HeroProps) {

  return (
    <HeroAnimate>
      {(showEffects) => (
        <section
          id="top"
          className="relative isolate overflow-hidden min-h-screen min-h-[100dvh] flex items-start md:items-center pt-8 md:pt-0 pb-12 md:py-0 bg-background"
        >
          {/* 🎥 Background Layer */}
          <div className="absolute inset-0 -z-30 w-full h-full overflow-hidden">
            {videoUrl && (
              <video
                autoPlay loop muted playsInline preload="auto"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out",
                  showEffects ? "blur-0 scale-100 opacity-60" : "blur-[6px] scale-105 opacity-30"
                )}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
            <img
              src={fallbackImage}
              alt="Background"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out",
                videoUrl
                  ? "opacity-0"
                  : (showEffects ? "blur-0 scale-100 opacity-60" : "blur-[6px] scale-105 opacity-40")
              )}
            />
          </div>

          {/* Overlay Oscuro Premium */}
          <div className="absolute inset-0 -z-20 bg-slate-950/80" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

          <div className="mx-auto max-w-7xl w-full px-6 relative z-10">
            <div
              className={cn(
                "max-w-3xl flex flex-col will-change-[transform,opacity] backface-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                showEffects
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-[0.98]"
              )}
            >
              {/* Etiqueta Soporte Técnico - Separada del título principal */}
              <div className="mb-24 md:mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {microTitulo}
                </span>
              </div>

              {/* Título Principal - Separado de la descripción */}
              <h1 className="font-serif text-[42px] sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8 md:mb-12">
                {titulo}
                <br />
                <span className="italic font-normal text-primary">{tituloHighlight}</span> {subtitulo}
              </h1>

              {/* Descripción - Separada de los botones */}
              <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed mb-10 md:mb-10">
                {descripcion}
              </p>

              {/* Botones */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-8">
                {/* Botón Principal */}
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-md px-8 py-7 text-sm tracking-wide uppercase bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(0,85,255,0.3)] transition-all border-0"
                >
                  <a href={ctaLink} className="flex items-center justify-center">
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                {/* Botón Secundario */}
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto rounded-md px-8 py-7 text-sm tracking-wide uppercase text-white hover:bg-white/10 border-0"
                >
                  <a href="#asesoria" className="flex items-center justify-center">
                    Agendar Asesoría
                    <Calendar className="ml-2 h-4 w-4 text-primary" />
                  </a>
                </Button>
              </div>

              {/* Teléfono y Rating */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-white/10">
                <a href={phoneLink} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{phoneDisplay}</span>
                </a>

                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <span>{rating} ({reviewsText})</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}
    </HeroAnimate>
  );
}