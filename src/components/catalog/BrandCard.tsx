import { Brand } from '@/data/types';

interface BrandCardProps {
    brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
    return (
        <div className="group border border-gray-200 rounded-lg p-4 bg-white hover:border-primary hover:shadow-md transition-all cursor-pointer flex items-center justify-center min-h-[80px]">
            <img
                src={brand.logo}
                alt={brand.nombre}
                className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
        </div>
    );
}