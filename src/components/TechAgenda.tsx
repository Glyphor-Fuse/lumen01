import { motion } from 'framer-motion';

const SCHEDULE = [
  { time: "09:00", title: "THE ARCHITECTURE OF SUSPENSE", speaker: "Dr. Dario A.", track: "Main Hall" },
  { time: "10:30", title: "MICRO-LITHOGRAPHY IN 35MM", speaker: "Elena V.", track: "Cleanroom B" },
  { time: "13:00", title: "SILICON VALLEY NOIR", speaker: "Panel Discussion", track: "Auditorium" },
  { time: "15:45", title: "COLOR GRADING FOR CIRCUITRY", speaker: "Mario B.", track: "Lab 01" },
];

export const TechAgenda = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-neutral-800 pb-4">
        <h2 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter">
          Schematics
        </h2>
        <div className="font-mono text-red-500 text-sm mb-2">
          // SYS.ROOT.SCHEDULE_V2
        </div>
      </div>

      <div className="grid gap-px bg-neutral-800 border border-neutral-800">
        {SCHEDULE.map((item, index) => (
          <motion.div 
            key={index}
            className="group relative bg-neutral-950 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-neutral-900 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Hover Effect Border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
              <span className="font-mono text-red-500 text-xl md:text-2xl font-bold">{item.time}</span>
              <h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight text-neutral-100 group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <div className="text-right">
                <div className="font-mono text-sm text-neutral-500 uppercase tracking-wider">{item.track}</div>
                <div className="font-bold text-neutral-300">{item.speaker}</div>
              </div>
              <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors">
                 <span className="text-xs">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechAgenda;
