// src/components/sections/Hero.tsx
import React from "react";
import { CircleUserRound, BookOpen, ShieldCheck, Headphones, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAnimate } from "@/components/landing/HeroAnimate";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/roce.png";
import rocehero1 from "@/assets/roce-hero1.png";

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

export function Hero({
  microTitulo = "Suministros Odontológicos",
  titulo = "Elevando la excelencia",
  tituloHighlight = "Odontológica",
  subtitulo = "en cada consulta.",
  descripcion = "Equipos de vanguardia, materiales de precisión y asesoría especializada para profesionales odontológicos que buscan lo mejor para sus pacientes.",
  rating = "4.9",
  reviewsText = "más de 150 clínicas atendidas",
  ctaText = "Ver Catálogo",
  ctaLink = "/catalogo",
  phoneLink = "tel:+18090000000",
  phoneDisplay = "+1 (809) 000-0000",
  fallbackImage = heroImage,
}: HeroProps) {

  return (
    <HeroAnimate>
      {(showEffects) => (
        <section
          id="top"
          className="relative isolate overflow-hidden w-full pt-12 pb-12 md:min-h-screen md:pt-10 md:pb-5 bg-background flex items-center"
        >
          {/* 🖼️ Background Layer - SÓLO MÓVIL */}
          <div className="absolute inset-0 -z-30 w-full h-full overflow-hidden md:hidden">
            <img
              src={fallbackImage}
              alt="Background"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out animate-zoom-out-dramatic max-md:animate-none",
                showEffects ? "blur-0 opacity-95" : "blur-[6px] opacity-80"
              )}
            />
          </div>
          {/* ✅ Background Layer PC — Imagen a sangre con Ken Burns + gradiente sofisticado */}
          <div className="absolute inset-0 -z-30 w-full h-full hidden md:block overflow-hidden">
            <img
              src={rocehero1}
              alt="Consultorio Dental ROCE"
              className="w-full h-full object-cover object-center animate-zoom-out-pc"
            />
            {/* Gradiente diagonal suave — blanco puro a la izquierda, se desvanece hacia el centro */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-30% to-white/0 to-[55%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
          </div>

          {/* Overlay Oscuro Premium Suavizado (SOLO MÓVIL) */}
          <div className="absolute inset-0 -z-20 bg-slate-950/50 md:bg-transparent" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85 md:opacity-0" />

          <div className="mx-auto lg:mx-0 max-w-7xl lg:max-w-[1600px] xl:max-w-none w-full px-6 lg:pl-16 lg:pr-16 xl:pl-24 xl:pr-24 relative z-10">
            {/* GRID PRINCIPAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:items-start">

              {/* ==========================================
                  COLUMNA IZQUIERDA: Contenido Principal
                 ========================================== */}
              <div
                className={cn(
                  "flex flex-col will-change-[transform,opacity] backface-hidden transition-all duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  showEffects
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-6 opacity-0 scale-[0.98]"
                )}
              >
                {/* Etiqueta microtitulo */}
                <div className="mb-8 md:mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-md md:bg-blue-50 md:text-blue-600 md:border-blue-100">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                    </span>
                    {microTitulo}
                  </span>
                </div>

                {/* Título Principal — 2 líneas Móvil / 4 líneas PC */}
                <h1 className="font-serif text-3xl sm:text-5xl md:text-[3.8rem] lg:text-[4.5rem] font-bold leading-[1.1] md:leading-[0.9] tracking-tight text-white md:text-slate-900 mb-6 md:mb-12">
                  <span className="md:hidden">
                    {titulo} <br />
                    <span className="italic font-normal text-blue-400">{tituloHighlight}</span> {subtitulo}
                  </span>
                  <span className="hidden md:inline">
                    Elevando <br />
                    la excelencia <br />
                    <span className="italic font-normal text-blue-600">odontológica</span> en <br />
                    cada consulta.
                  </span>
                </h1>

                {/* ⭐ BLOQUE DE VALORACIÓN */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-medium text-slate-100 md:text-slate-600">
                    <span className="font-bold text-white md:text-slate-900">{rating}</span> · {reviewsText}
                  </p>
                </div>

                <p className="max-w-lg text-base sm:text-lg text-slate-100 md:text-slate-600 leading-relaxed mb-8 md:mb-10">
                  {descripcion}
                </p>

                {/* Botones — Más grandes y espaciados en PC */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-8 md:mb-16">

                  {/* Botón Principal */}
                  <div className="relative overflow-hidden rounded-xl mt-2 mb-2 active:scale-95 transition-transform duration-200 w-full sm:w-auto">
                    <div className="destello-movil absolute inset-0 z-10 block" />
                    <Button
                      asChild
                      size="lg"
                      // Cambios clave en desktop: px-10 py-6 (más ancho/alto), text-sm (más legible)
                      className="w-full sm:w-auto relative z-0 rounded-none md:rounded-xl px-7 py-5 md:px-10 md:py-6 text-sm md:text-sm font-bold tracking-widest uppercase bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 border-0"
                    >
                      <a href={ctaLink} className="flex items-center justify-center gap-2">
                        {ctaText}
                        <BookOpen className="h-4 w-4 md:!h-5 md:!w-5" />
                      </a>
                    </Button>
                  </div>

                  {/* Botón Secundario */}
                  <div className="bg-white/10 relative overflow-hidden rounded-xl active:scale-95 transition-transform duration-200 w-full sm:w-auto ">
                    <div className="destello-movil-invertido absolute inset-0 z-10 block" />
                    <Button
                      asChild
                      size="lg"
                      // Mismos ajustes de tamaño aplicados al botón secundario
                      className="w-full sm:w-auto relative z-0 rounded-none md:rounded-xl px-7 py-5 md:px-10 md:py-6 text-sm md:text-sm font-bold tracking-widest uppercase bg-white/5 md:bg-white text-white md:text-slate-900 border border-white/10 md:border-slate-200 hover:bg-white/10 md:hover:bg-slate-50 transition-all duration-300 backdrop-blur-sm md:backdrop-blur-none shadow-sm"
                    >
                      <a href="#asesoria" className="flex items-center justify-center gap-2">
                        Asesoría
                        <CircleUserRound className="h-4 w-4 text-blue-400 md:text-blue-600 md:!h-6 md:!w-6" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* ✅ BLOQUE DE FEATURES — Solo Desktop */}
                <div className="hidden md:grid grid-cols-3 gap-5 mb-12 max-w-2xl">
                  {[
                    { icon: ShieldCheck, title: "Productos de alta calidad", desc: "Marcas líderes internacionales" },
                    { icon: Headphones, title: "Soporte técnico especializado", desc: "Acompañamiento en cada paso" },
                    { icon: Truck, title: "Entrega rápida en todo el Cibao", desc: "Logística eficiente y confiable" },
                  ].map((f) => (
                    <div key={f.title} className="group flex items-start gap-3 p-3 -m-3 rounded-xl transition-all hover:bg-blue-50/50">
                      <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                        <f.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-0.5">{f.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ✅ TARJETA DE ESTADÍSTICAS CON BORDE ANIMADO */}
                <div className="hidden md:block relative rounded-xl p-[2px] bg-[conic-gradient(from_var(--border-angle),transparent_85%,#2563eb)] animate-border-draw mb-8 max-w-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow">

                  {/* Capa interior (el fondo blanco de la tarjeta) */}
                  <div className="relative z-10 h-full w-full rounded-[10px] bg-white p-5">
                    <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200">

                      {/* Stat 1 */}
                      {[
                        { label: "Clínicas equipadas", value: "300+", icon: "users" },
                        { label: "Marcas líderes", value: "Distribuidor autorizado", icon: "award" },
                        { label: "Cobertura amplia", value: "Toda R.D.", icon: "map" },
                      ].map((s) => (
                        <div key={s.label} className="flex flex-col items-center text-center px-3 group/stat">
                          <div className="w-8 h-8 mb-2 rounded-lg bg-blue-50 flex items-center justify-center group-hover/stat:bg-blue-100 transition-colors">
                            {s.icon === "users" ? (
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            ) : s.icon === "award" ? (
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            )}
                          </div>
                          <p className="text-xs font-bold text-slate-900 mb-0.5">{s.value}</p>
                          <p className="text-[11px] text-slate-500 font-medium">{s.label}</p>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
                {/* Indicador de soporte - SOLO MÓVIL */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-white tracking-wide md:hidden">
                  <span className="relative flex h-2 w-2 rounded-full bg-emerald-500">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Soporte y pedidos activos en línea</span>
                </div>

              </div>
              {/* FIN COLUMNA IZQUIERDA */}

              {/* COLUMNA DERECHA (Vacía para dejar espacio a la imagen de fondo) */}
              <div className="hidden md:block"></div>

            </div> {/* FIN DEL GRID */}
          </div>
        </section>
      )}
    </HeroAnimate>
  );
}