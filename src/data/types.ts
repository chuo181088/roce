export interface Product {
    id: string;
    codigoInterno: string;
    nombre: string;
    referencia: string;
    marca: string;
    precio: number;
    imagenes: string[];
    descripcion: string;
    caracteristicas: string[];
    especificaciones: Record<string, string>;
    categoria: string;
    relacionadoIds: string[];
    stock?: number;
    destacado?: boolean;
    badge?: 'nuevo' | 'oferta' | null;
    descuento?: number;
}

export interface Category {
    id: string;
    nombre: string;
    slug: string;
    descripcion: string;
    imagen: string;
    orden?: number;
}

export interface Brand {
    id: string;
    nombre: string;
    logo: string;
    slug: string;
    descripcion?: string;
}

export interface ProductFilters {
    category?: string;
    brand?: string;
    priceRange?: [number, number];
    search?: string;
}