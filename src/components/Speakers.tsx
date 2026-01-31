import { motion } from 'framer-motion';

export const Speakers = () => {
  const speakers = [
    { name: "VERONICA X", role: "Quantum Optics", img: "https://raw.githubusercontent.com/Glyphor-Fuse/lumen01/main/public/images/speaker-1.png" },
    { name: "MARCUS Z", role: "Neural Lace", img: "https://raw.githubusercontent.com/Glyphor-Fuse/lumen01/main/public/images/speaker-2.png" },
    { name: "UNIT 734", role: "AI Ethics", img: "https://raw.githubusercontent.com/Glyphor-Fuse/lumen01/main/public/images/speaker-3.png" },
  ];

  return (
    <section className="py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-16 text-center">
          Cast & Crew
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((s, i) => (
            <motion.div 
              key={i}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border-2 border-neutral-800 group-hover:border-red-600 transition-colors duration-500">
                <img 
                  src={s.img} 
                  alt={s.name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-3xl font-display uppercase text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">
                    {s.name}
                  </h3>
                  <p className="font-mono text-red-500 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {s.role}
                  </p>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-neutral-600 group-hover:border-red-500 transition-colors" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-neutral-600 group-hover:border-red-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
