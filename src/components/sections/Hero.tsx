// src/components/sections/Hero.tsx
import React from "react";
import { Star, CircleUserRound, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAnimate } from "@/components/ui/HeroAnimate";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/roce.png";

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
  tituloHighlight = "médica",
  subtitulo = "en cada consulta.",
  descripcion = "Equipos de vanguardia, materiales de precisión y asesoría especializada para profesionales odontológicos que buscan lo mejor para sus pacientes.",
  rating = "4.9",
  reviewsText = "de más de 150 clínicas",
  ctaText = "Ver Catálogo",
  ctaLink = "#equipos",
  phoneLink = "tel:+18090000000",
  phoneDisplay = "+1 (809) 000-0000",
  fallbackImage = heroImage,
}: HeroProps) {

  return (
    <HeroAnimate>
      {(showEffects) => (
        <section
          id="top"
          className="relative isolate overflow-hidden w-full pt-16 pb-12 md:pt-40 md:pb-24 bg-background"
        >
          {/* 🖼️ Background Layer (Solo Imagen) - ¡ILUMINADO! */}
          <div className="absolute inset-0 -z-30 w-full h-full overflow-hidden">
            <img
              src={fallbackImage}
              alt="Background"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out",
                // Modificado para que la imagen resalte mucho más
                showEffects ? "blur-0 scale-100 opacity-95" : "blur-[6px] scale-105 opacity-80"
              )}
            />
          </div>

          {/* Overlay Oscuro Premium Suavizado */}
          {/* Bajado de /80 a /50 para quitar el efecto de "lente oscuro" pesado */}
          <div className="absolute inset-0 -z-20 bg-slate-950/50" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />

          <div className="mx-auto max-w-7xl w-full px-6 relative z-10">
            <div
              className={cn(
                "max-w-3xl flex flex-col will-change-[transform,opacity] backface-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                showEffects
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-6 opacity-0 scale-[0.98]"
              )}
            >
              {/* Etiqueta microtitulo */}
              <div className="mb-10 md:mb-12"> {/* Ajustado a mb-10 para el respiro perfecto en móvil */}
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                  </span>
                  {microTitulo}
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="font-serif text-[42px] sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8 md:mb-12">
                {titulo}
                <br />
                <span className="italic font-normal text-blue-400">{tituloHighlight}</span> {subtitulo}
              </h1>

              {/* Descripción */}
              <p className="max-w-xl text-base sm:text-lg text-slate-100 leading-relaxed mb-10 md:mb-10">
                {descripcion}
              </p>

              {/* Botones Estilizados con Proporciones Optimizadas */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center mb-8">

                {/* Botón Principal (Ver Catálogo) - Más estilizado */}
                <div className="relative overflow-hidden rounded-xl active:scale-95 transition-transform duration-200 w-full sm:w-auto">
                  <div className="destello-movil absolute inset-0 z-10 block" />
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto relative z-0 rounded-none px-7 py-5 text-xs font-bold tracking-widest uppercase bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/10 transition-all duration-300 border-0"
                  >
                    <a href="#" className="flex items-center justify-center gap-2">
                      {ctaText}
                      <BookOpen className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Botón Secundario (Agendar Asesoría) - Más estilizado */}
                <div className="relative overflow-hidden rounded-xl active:scale-95 transition-transform duration-200 w-full sm:w-auto">
                  <div className="destello-movil-invertido absolute inset-0 z-10 block" />
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto relative z-0 rounded-none px-7 py-5 text-xs font-bold tracking-widest uppercase bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href="#asesoria" className="flex items-center justify-center gap-2">
                      Asesoría
                      <CircleUserRound className="h-4 w-4 text-blue-400" />
                    </a>
                  </Button>
                </div>

              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-white tracking-wide">
                <span className="relative flex h-2 w-2 rounded-full bg-emerald-500">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Soporte y pedidos activos en línea</span>
              </div>

            </div>
          </div>
        </section>
      )}
    </HeroAnimate>
  );
}