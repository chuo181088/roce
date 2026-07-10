import { Category } from '@/data/types';
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    const sharedStyles = {
        backgroundImage: `url(${category.imagen})`,
        backgroundSize: 'cover' as const,
        backgroundPosition: 'center' as const,
    };

    return (
        <div className="group border border-slate-200 rounded-xl md:rounded-2xl hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all bg-white cursor-pointer overflow-hidden">
            {/* ═══ VERSIÓN MÓVIL (compacta, con imagen de fondo) ═══ */}
            <div
                className="md:hidden flex flex-col items-center justify-center gap-1 p-3 min-h-[80px] relative"
                style={sharedStyles}
            >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />
                <h3 className="relative text-[11px] font-bold text-white text-center leading-tight drop-shadow-sm">
                    {category.nombre}
                </h3>
                <ArrowRight className="relative w-3 h-3 text-white/70" />
            </div>

            {/* ═══ VERSIÓN DESKTOP (con imagen de fondo en el header) ═══ */}
            <div className="hidden md:block">
                {/* Área de imagen con la imagen real de fondo */}
                <div
                    className="aspect-[4/3] rounded-t-xl flex items-end justify-center relative overflow-hidden"
                    style={sharedStyles}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative text-lg font-bold text-white text-center px-3 pb-3 drop-shadow-md leading-tight">
                        {category.nombre}
                    </span>
                </div>

                {/* Contenido desktop */}
                <div className="p-4">
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">
                        {category.descripcion || "Equipos y materiales odontológicos"}
                    </p>

                    {/* Link con flecha animada */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group/link">
                        <span>Ver productos</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-all group-hover/link:translate-x-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
