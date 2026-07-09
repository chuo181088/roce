interface CatalogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function CatalogHero({ searchQuery, onSearchChange }: CatalogHeroProps) {
  return (
    <section className="relative w-full">
      {/* Hero Container - Full width, fondo blanco */}
      <div className="relative bg-white min-h-[500px] md:min-h-[600px] overflow-hidden">

        {/* Imagen de fondo a la derecha - Full width */}
        <div className="absolute right-0 top-0 w-full md:w-3/5 h-full">
          <img
            src="/images/hero/dental-office.jpg"
            alt="Equipo dental"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradiente overlay: blanco a transparente */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/60 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 px-6 py-16 md:py-20 md:px-12 lg:px-20 max-w-3xl">
          {/* Breadcrumbs DENTRO del hero */}
          <nav className="mb-8">
            <ol className="flex items-center text-sm">
              <li><a href="/" className="text-gray-500 hover:text-primary transition-colors">Inicio</a></li>
              <li className="mx-2 text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Catálogo</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Catálogo de equipos y materiales odontológicos
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Soluciones de alta calidad para cada área de tu clínica.
          </p>

          {/* Barra de búsqueda */}
          <div className="relative w-full max-w-2xl">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar productos, marcas o categorías..."
                className="w-full pl-12 pr-14 py-4 text-base bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}