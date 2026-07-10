import { Brand } from '@/data/types';
import { BrandCard } from './BrandCard';

interface BrandGridProps {
    brands: Brand[];
}

export function BrandGrid({ brands }: BrandGridProps) {
    return (
        <section className="mb-12 md:mb-16">
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

            <div className="grid grid-cols-3 md:grid-cols-8 gap-3 md:gap-4">
                {brands.map(brand => (
                    <BrandCard key={brand.id} brand={brand} />
                ))}
            </div>

            <div className="mt-6 text-center md:hidden">
                <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Ver todas las marcas →
                </button>
            </div>
        </section>
    );
}
