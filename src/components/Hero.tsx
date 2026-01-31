import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center border-b-2 border-red-700/50 mb-20 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-40 grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/lumen01/main/public/images/hero-circuit-red.png" 
          alt="Macro circuit board in red light" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="z-10 text-center space-y-2 mix-blend-hard-light">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <span className="inline-block bg-red-700 text-black px-4 py-1 text-sm font-bold tracking-[0.2em] mb-4 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            CONFERENCE_SEQ_01
          </span>
        </motion.div>

        <motion.h1 
          className="text-[12vw] leading-[0.85] font-black font-display text-white uppercase tracking-tighter mix-blend-difference"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          LUMEN<span className="text-red-600">:</span>01
        </motion.h1>

        <motion.p 
          className="max-w-xl mx-auto text-lg md:text-2xl font-mono text-neutral-300 mt-8 border-l-4 border-red-600 pl-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The intersection of avant-garde cinema and micro-engineering. 
          <br/>
          <span className="text-red-500 font-bold">ROME // OCT 24 // 2024</span>
        </motion.p>
      </div>

      {/* Decorative Technical overlay */}
      <div className="absolute bottom-4 left-4 font-mono text-xs text-red-500/80">
        ISO 1600 <br/> APERTURE f/1.4
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-xs text-red-500/80 text-right">
        SHUTTER 1/50 <br/> REEL 04
      </div>
    </section>
  );
};

export default Hero;
