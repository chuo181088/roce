import { Brand } from '@/data/types';

interface BrandCardProps {
    brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
    return (
        <div className="group border border-slate-200 rounded-xl p-4 md:p-5 bg-white hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[80px] md:min-h-[100px]">
            <img
                src={brand.logo}
                alt={brand.nombre}
                className="max-h-10 md:max-h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100"
            />
            <span className="mt-2 text-[10px] font-medium text-slate-400 group-hover:text-primary transition-colors">
                {brand.nombre}
            </span>
        </div>
    );
}
