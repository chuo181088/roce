import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="ROCE Dental">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-soft">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3c-2.5 0-4.5 2-4.5 4.5 0 2 .8 3.8 1.6 6.5.7 2.4 1.4 6 2.9 6 1.1 0 1.5-2 2-4 .3-1.2.7-2 2-2s1.7.8 2 2c.5 2 .9 4 2 4 1.5 0 2.2-3.6 2.9-6 .8-2.7 1.6-4.5 1.6-6.5C20.5 5 18.5 3 16 3c-1.6 0-2.8.7-4 .7S9.6 3 8 3z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight text-foreground">ROCE Dental</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Cibao · RD</span>
      </span>
    </Link>
  );
}