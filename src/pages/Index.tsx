import { FilmStripLayout } from "@/components/FilmStripLayout";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { TechAgenda } from "@/components/TechAgenda";
import { Speakers } from "@/components/Speakers";

const Index = () => {
  return (
    <FilmStripLayout>
      <Hero />
      <Manifesto />
      <TechAgenda />
      <Speakers />
      
      {/* Footer / Credits */}
      <footer className="py-20 text-center font-mono text-xs text-neutral-600 border-t border-neutral-900 mt-20">
        <p>LUMEN:01 // CONF_ID_9923 // DO NOT DISTRIBUTE</p>
        <p className="mt-2">© 2024 GLYPHOR PRODUCTIONS</p>
      </footer>
    </FilmStripLayout>
  );
};

export default Index;