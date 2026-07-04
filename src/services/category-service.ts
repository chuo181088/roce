import { products } from '@/data/products';
import { Product, ProductFilters } from '@/data/types';

export class ProductService {
    async getAll(filters?: ProductFilters): Promise<Product[]> {
        return products;
    }

    async getById(id: string): Promise<Product | null> {
        return products.find(p => p.id === id) || null;
    }
}

export const productService = new ProductService();