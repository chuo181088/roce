import { createFileRoute } from '@tanstack/react-router';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

export const Route = createFileRoute('/catalogo')({
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Catálogo de Productos</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Categorías ({categories.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(category => (
            <div key={category.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold">{category.nombre}</h3>
              <p className="text-sm text-gray-600">{category.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Productos ({products.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg">{product.nombre}</h3>
              <p className="text-sm text-gray-600 mb-2">Código: {product.codigoInterno}</p>
              <p className="text-sm text-gray-600 mb-2">Marca: {product.marca}</p>
              <p className="text-xl font-bold text-primary mb-2">
                RD$ {product.precio.toLocaleString('es-DO')}
              </p>
              <p className="text-sm text-gray-700 line-clamp-2">{product.descripcion}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                  Agregar al carrito
                </button>
                <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10">
                  Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}