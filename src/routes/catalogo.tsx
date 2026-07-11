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
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <CategoryGrid categories={categories} />
        <BrandGrid brands={brands} />

        {/* Sección de Productos Destacados (solo si no hay búsqueda) */}
        {!searchQuery && featuredProducts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Productos destacados
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Lo más vendido de nuestro catálogo
                </p>
              </div>
              <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5">
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredProducts.slice(0, 4).map(product => (
                <div key={product.id} className="group relative bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full shadow-sm ${
                        product.badge === 'nuevo'
                          ? 'bg-blue-500 text-white'
                          : 'bg-emerald-500 text-white'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          product.badge === 'nuevo' ? 'bg-blue-200' : 'bg-emerald-200'
                        }`} />
                        {product.badge === 'nuevo' ? 'NUEVO' : 'OFERTA'}
                      </span>
                    </div>
                  )}

                  {/* Área de imagen */}
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden p-3">
                    {product.imagenes?.[0] ? (
                      <img
                        src={product.imagenes[0]}
                        alt={product.nombre}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-inner">
                        <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Contenido */}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-slate-900 mb-1 line-clamp-1 leading-snug">
                      {product.nombre}
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      {product.marca}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-bold text-primary">
                          RD$ {product.precio.toLocaleString('es-DO')}
                        </p>
                        {product.descuento && (
                          <p className="text-[10px] text-emerald-600 font-medium">
                            {product.descuento}% de descuento
                          </p>
                        )}
                      </div>
                      <button className="w-9 h-9 rounded-full border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center text-slate-400 group-hover:border-primary/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
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
                <div key={product.id} className="flex gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow bg-white">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 shrink-0 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center p-1.5">
                    {product.imagenes?.[0] ? (
                      <img
                        src={product.imagenes[0]}
                        alt={product.nombre}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-slate-900 mb-1 line-clamp-1">{product.nombre}</h3>
                    <p className="text-xs text-slate-400 mb-2">{product.marca}</p>
                    <p className="text-lg font-bold text-primary mb-2">
                      RD$ {product.precio.toLocaleString('es-DO')}
                    </p>
                    <button className="w-full bg-primary text-white px-3 py-1.5 text-sm rounded-lg hover:bg-primary/90 transition-colors">
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}