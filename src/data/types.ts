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
}

export interface Category {
    id: string;
    nombre: string;
    slug: string;
    descripcion: string;
    imagen: string;
}

export interface ProductFilters {
    category?: string;
    brand?: string;
    priceRange?: [number, number];
    search?: string;
}