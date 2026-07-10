import { Category } from '@/data/types';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
    categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <section className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                    Explora por categoría
                </h2>
                <button className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Ver todas
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
                {categories.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
}
