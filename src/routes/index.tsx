import { createFileRoute } from "@tanstack/react-router";
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
    <main className="pt-16 sm:pt-[68px]">
      <Hero />
      <BrandsMarquee />
      <Solutions />
      <ValueProposition />
      <Contact />
    </main>
  );
}
