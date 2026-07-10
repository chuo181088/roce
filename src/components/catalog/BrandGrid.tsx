import { Brand } from '@/data/types';
import { BrandCard } from './BrandCard';

interface BrandGridProps {
    brands: Brand[];
}

export function BrandGrid({ brands }: BrandGridProps) {
    return (
        <section className="mb-12 md:mb-16 overflow-hidden">
            {/* Encabezado */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                    Explora por marca
                </h2>
                <button className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Ver todas
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>

            {/* ═══ VERSIÓN MÓVIL: Scroll nativo horizontal con loop infinito ═══ */}
            <MobileMarquee brands={brands} />

            {/* ═══ VERSIÓN DESKTOP: Animación CSS pura ═══ */}
            <DesktopMarquee brands={brands} />
        </section>
    );
}

/* ────────────── DESKTOP: Animación CSS ────────────── */

function DesktopMarquee({ brands }: BrandGridProps) {
    return (
        <div className="hidden md:flex flex-col gap-5">
            {/* Fila 1 → izquierda */}
            <div className="relative overflow-hidden rounded-xl group">
                {/* Gradiente spotlight en bordes */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_600px_300px_at_center,transparent_0%,transparent_30%,rgba(248,250,252,0.4)_45%,rgba(248,250,252,0.8)_65%)]" />

                <div className="flex overflow-hidden">
                    <div className="animate-marquee-medium flex w-max items-center py-2 select-none hover:[animation-play-state:paused]">
                        <div className="flex shrink-0 items-center justify-around gap-5 pr-5">
                            {brands.map(brand => (
                                <div key={`d1-${brand.id}`} className="w-[140px] flex-shrink-0">
                                    <BrandCard brand={brand} />
                                </div>
                            ))}
                        </div>
                        <div className="flex shrink-0 items-center justify-around gap-5 pr-5" aria-hidden="true">
                            {brands.map(brand => (
                                <div key={`d1-dup-${brand.id}`} className="w-[140px] flex-shrink-0">
                                    <BrandCard brand={brand} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fila 2 → derecha */}
            <div className="relative overflow-hidden rounded-xl group">
                {/* Gradiente spotlight en bordes */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_600px_300px_at_center,transparent_0%,transparent_30%,rgba(248,250,252,0.4)_45%,rgba(248,250,252,0.8)_65%)]" />

                <div className="flex overflow-hidden">
                    <div className="animate-marquee-medium-reverse flex w-max items-center py-2 select-none hover:[animation-play-state:paused]">
                        <div className="flex shrink-0 items-center justify-around gap-5 pr-5">
                            {brands.map(brand => (
                                <div key={`d2-${brand.id}`} className="w-[140px] flex-shrink-0">
                                    <BrandCard brand={brand} />
                                </div>
                            ))}
                        </div>
                        <div className="flex shrink-0 items-center justify-around gap-5 pr-5" aria-hidden="true">
                            {brands.map(brand => (
                                <div key={`d2-dup-${brand.id}`} className="w-[140px] flex-shrink-0">
                                    <BrandCard brand={brand} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ────────────── MOBILE: Scroll nativo con loop infinito ────────────── */

function MobileMarquee({ brands }: BrandGridProps) {
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const maxScroll = el.scrollWidth / 2; // la mitad es contenido original

        // Si se pasa del contenido original, reinicia
        if (el.scrollLeft >= maxScroll) {
            el.scrollLeft = 0;
        } else if (el.scrollLeft < 0) {
            el.scrollLeft = maxScroll;
        }
    };

    return (
        <div className="md:hidden relative">
            {/* Gradientes en los bordes */}
            <div className="absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Contenedor con scroll nativo horizontal */}
            <div
                onScroll={handleScroll}
                className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            >
                <div className="flex gap-3 w-max">
                    {/* Items originales */}
                    {brands.map(brand => (
                        <div key={brand.id} className="w-[100px] flex-shrink-0">
                            <BrandCard brand={brand} />
                        </div>
                    ))}
                    {/* Duplicados para loop infinito visual */}
                    {brands.map(brand => (
                        <div key={`dup-${brand.id}`} className="w-[100px] flex-shrink-0" aria-hidden="true">
                            <BrandCard brand={brand} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicador sutil de scroll */}
            <div className="flex justify-center gap-1 mt-3">
                <div className="h-1 w-8 rounded-full bg-primary/30" />
                <div className="h-1 w-8 rounded-full bg-slate-200" />
            </div>
        </div>
    );
}