import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowRight, Package } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Equipos", href: "/#equipos" },
  { label: "Materiales", href: "/#materiales" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al hacer clic en un link
  const handleNavClick = () => setOpen(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/20 bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_rgb(0,0,0,0.08)]"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 h-[2.5px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-32px)] ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center justify-end gap-2">
          {/* Botón Catálogo Rápido - solo desktop */}
          <Link
            to="/catalogo"
            className={`group hidden items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:inline-flex ${
              scrolled
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-600/30"
                : "bg-blue-600 text-white shadow-md shadow-blue-600/15 hover:bg-blue-500"
            }`}
          >
            <Package className="h-4 w-4" />
            Catálogo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Botón menú mobile */}
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-300 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

    </header>

      {/* Menú Móvil — Portal a document.body */}
      {open && mounted &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-fade-in"
              onClick={() => setOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 z-[70] w-72 max-w-[85vw] bg-white shadow-2xl animate-slide-in-right">
              <div className="flex h-full min-h-screen flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
                  <span className="text-sm font-bold text-slate-900">Menú</span>
                  <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={() => setOpen(false)}
                    className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-3 py-5">
                  <nav className="space-y-1">
                    {NAV.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className="block rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="border-t border-slate-100 my-6" />
                  <Link
                    to="/catalogo"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500"
                  >
                    <Package className="h-4 w-4" />
                    Explorar Catálogo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="border-t border-slate-100 px-5 py-4 shrink-0">
                  <p className="text-[11px] text-slate-400 text-center">
                    ROCE Dental © {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}