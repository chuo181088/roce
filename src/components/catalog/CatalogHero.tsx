import { Search } from "lucide-react";

interface CatalogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function CatalogHero({ searchQuery, onSearchChange }: CatalogHeroProps) {
  return (
    <section className="relative w-full">
      {/* Hero Container - Full width */}
      <div className="relative bg-white min-h-[400px] md:min-h-[620px] overflow-hidden">

        {/* Imagen de fondo a la derecha */}
        <div className="absolute right-0 top-0 w-full md:w-3/5 h-full">
          <img
            src="/images/hero/dental-office.jpg"
            alt="Equipo dental"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradiente overlay: más suave y elegante en desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/65 via-[65%] to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex min-h-[400px] md:min-h-[620px] items-center px-5 md:px-12 lg:px-20">
          <div className="max-w-2xl w-full">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                Catálogo completo
              </span>
            </div>

            {/* Breadcrumbs */}
            <nav className="mb-4 md:mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li><a href="/" className="text-slate-500 hover:text-primary transition-colors font-medium">Inicio</a></li>
                <li className="text-slate-300">/</li>
                <li className="text-slate-800 font-semibold">Catálogo</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight tracking-tight">
              Equipos y materiales <span className="text-primary">odontológicos</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Soluciones de alta calidad para cada área de tu clínica. Explora nuestro
              catálogo completo con cientos de productos certificados.
            </p>

            {/* Barra de búsqueda premium */}
            <div className="relative w-full max-w-xl">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-primary" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Buscar productos, marcas o categorías..."
                  className="w-full pl-12 pr-16 py-3.5 md:py-4 text-sm md:text-base bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-lg shadow-slate-900/5"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
