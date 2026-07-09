import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { brands } from '@/data/brands';
import { CategoryGrid } from '@/components/catalog/CategoryGrid';
import { BrandGrid } from '@/components/catalog/BrandGrid';
import { CatalogHero } from '@/components/catalog/CatalogHero';

export const Route = createFileRoute('/catalogo')({
  component: CatalogoPage,
});

function CatalogoPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar productos destacados
  const featuredProducts = products.filter(p => p.destacado === true);

  // Filtrar productos por búsqueda
  const filteredProducts = searchQuery
    ? products.filter(p =>
      p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.marca.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.codigoInterno.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : products;

  return (
    <div className="flex flex-col">
      {/* Hero - Full width sin container */}
      <CatalogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Resto del contenido - Con container */}
      <div className="container mx-auto px-4 py-12">
        <CategoryGrid categories={categories} />
        <BrandGrid brands={brands} />

        {/* Sección de Productos Destacados (solo si no hay búsqueda) */}
        {!searchQuery && featuredProducts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Productos destacados
              </h2>
              <button className="text-sm text-primary font-medium hover:underline">
                Ver todos →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map(product => (
                <div key={product.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow bg-white">
                  {product.badge && (
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded mb-2 ${product.badge === 'nuevo'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                      }`}>
                      {product.badge.toUpperCase()}
                    </span>
                  )}

                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Imagen</span>
                  </div>

                  <h3 className="font-semibold text-sm mb-1">{product.nombre}</h3>
                  <p className="text-xs text-gray-500 mb-2">{product.marca}</p>
                  <p className="text-lg font-bold text-primary">
                    RD$ {product.precio.toLocaleString('es-DO')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Todos los productos (o resultados de búsqueda) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            {searchQuery
              ? `Resultados de búsqueda (${filteredProducts.length})`
              : `Todos los productos (${filteredProducts.length})`
            }
          </h2>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No se encontraron productos</p>
              <p className="text-gray-400 text-sm">Intenta con otros términos de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow bg-white">
                  <h3 className="font-semibold text-lg mb-2">{product.nombre}</h3>
                  <p className="text-xl font-bold text-primary mb-2">
                    RD$ {product.precio.toLocaleString('es-DO')}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{product.marca}</p>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Ver detalles
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}