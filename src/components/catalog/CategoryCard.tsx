import { Category } from '@/data/types';

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <div className="group border border-gray-200 rounded-xl p-3 hover:border-primary hover:shadow-md transition-all bg-white cursor-pointer">
            {/* Área de Imagen (Placeholder con color) */}
            <div className="aspect-[4/3] bg-sky-100 text-sky-600 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-xl font-bold opacity-80 text-center px-2">
                    {category.nombre}
                </span>
            </div>

            {/* Contenido */}
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {category.nombre}
            </h3>

            {/* Link "Ver productos ->" */}
            <div className="flex items-center text-xs text-primary font-medium group-hover:underline">
                Ver productos
                <svg
                    className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    );
}