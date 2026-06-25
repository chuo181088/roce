import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Suministros odontológicos de precisión y soporte técnico directo en la
            República Dominicana.
          </p>
        </div>
        <FooterCol title="Compañía" items={["Nuestra Empresa", "Equipos", "Materiales", "Soporte Técnico"]} />
        <FooterCol title="Contacto" items={["Santiago", "Santo Domingo", "+1 (809) 000-0000", "hola@rocedental.com"]} />
        <FooterCol title="Horario" items={["Lun – Vie · 8:00 – 6:00", "Sáb · 9:00 – 1:00", "Soporte 24/7 técnico"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center lg:px-8">
          <p>© {new Date().getFullYear()} ROCE Dental. Todos los derechos reservados.</p>
          <p>Santiago de los Caballeros · República Dominicana</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="transition-colors hover:text-foreground">{i}</li>
        ))}
      </ul>
    </div>
  );
}