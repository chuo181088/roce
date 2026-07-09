import { Category } from '@/data/types';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
    categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Explora por categoría
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
}