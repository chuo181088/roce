import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROCE Dental — Excelencia clínica en el Cibao" },
      {
        name: "description",
        content:
          "Suministros odontológicos de precisión, equipos de última generación y soporte técnico directo en Santiago y Santo Domingo.",
      },
      { property: "og:title", content: "ROCE Dental — Excelencia clínica en el Cibao" },
      {
        property: "og:description",
        content: "Suministros odontológicos de precisión con soporte técnico directo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 sm:pt-[68px]">
        <Hero />
        <BrandsMarquee />
        <Solutions />
        <ValueProposition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
