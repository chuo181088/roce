import { Brand } from '@/data/types';

interface BrandCardProps {
    brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
    return (
        <div className="group flex-shrink-0 border border-slate-200 rounded-xl p-3 md:p-5 bg-white hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer flex flex-col items-center justify-center w-[100px] md:w-[140px] min-h-[70px] md:min-h-[100px] active:scale-95 md:active:scale-100 select-none">
            <img
                src={brand.logo}
                alt={brand.nombre}
                className="max-h-7 md:max-h-11 w-auto object-contain scale-90 group-hover:scale-100 transition-all pointer-events-none"
                draggable={false}
            />
            <span className="mt-1.5 md:mt-2 text-[9px] md:text-[10px] font-medium text-slate-500 group-hover:text-primary transition-colors text-center leading-tight pointer-events-none">
                {brand.nombre}
            </span>
        </div>
    );
}