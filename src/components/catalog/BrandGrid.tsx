import { Brand } from '@/data/types';
import { BrandCard } from './BrandCard';

interface BrandGridProps {
    brands: Brand[];
}

export function BrandGrid({ brands }: BrandGridProps) {
    return (
        <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Explora por marca
            </h2>

            {/* Grid responsive: 4 columnas en móvil, 8 en desktop */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {brands.map(brand => (
                    <BrandCard key={brand.id} brand={brand} />
                ))}
            </div>

            {/* Botón "Ver todas las marcas" */}
            <div className="mt-4 text-center">
                <button className="text-sm text-primary font-medium hover:underline">
                    Ver todas las marcas →
                </button>
            </div>
        </section>
    );
}