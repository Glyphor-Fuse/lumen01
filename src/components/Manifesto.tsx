import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export const Manifesto = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 mix-blend-multiply skew-x-12 -z-10" />

      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          className="border-l-2 border-red-600 pl-8 md:pl-16 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight text-white">
            We reject the <span className="text-red-600 line-through decoration-2">generic future</span>.
          </h2>
          <p className="text-xl md:text-2xl font-mono text-neutral-400 leading-relaxed max-w-2xl">
            LUMEN:01 is not a conference. It is a live cut of the bleeding edge. 
            Imagine the stark, high-contrast lighting of a 35mm suspense film applied 
            to the sterile world of hardware engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            icon={<Disc className="w-8 h-8 text-red-500" />}
            title="ANALOG TENSION"
            desc="Physical friction in a digital world. Grain, jitters, and imperfections are features, not bugs."
          />
          <Card 
            icon={<Microchip className="w-8 h-8 text-red-500" />}
            title="CLEANROOM PRECISION"
            desc="Data structures presented with the clinical detachment of a laboratory report."
          />
        </div>

        <div className="flex justify-center pt-12">
           <button className="group relative px-12 py-4 bg-transparent border border-neutral-700 text-white font-mono uppercase tracking-widest hover:border-red-600 hover:bg-red-600/10 transition-all duration-300">
             <span className="relative z-10 flex items-center gap-2">
               Access Mainframe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
             {/* Glitch effect bg */}
             <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-0 opacity-10" />
           </button>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    className="bg-neutral-900/50 p-8 border border-neutral-800 hover:border-red-900/50 transition-colors"
    whileHover={{ y: -5 }}
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">{title}</h3>
    <p className="font-mono text-sm text-neutral-500 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default Manifesto;
