import { Category } from '@/data/types';
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <div className="group border border-slate-200 rounded-xl md:rounded-2xl p-3 md:p-5 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all bg-white cursor-pointer">
            {/* Área de Imagen (Placeholder con color) */}
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-lg md:text-2xl font-bold opacity-80 text-center px-2 leading-tight">
                    {category.nombre}
                </span>
            </div>

            {/* Contenido */}
            <h3 className="text-xs md:text-sm font-bold text-slate-900 mb-1.5 md:mb-2 line-clamp-1">
                {category.nombre}
            </h3>

            <p className="text-[10px] md:text-xs text-slate-500 mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                {category.descripcion || "Equipos y materiales odontológicos"}
            </p>

            {/* Link con flecha animada */}
            <div className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-primary group/link">
                <span>Ver productos</span>
                <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 transition-all group-hover/link:translate-x-1" />
            </div>
        </div>
    );
}
