import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

interface FilmStripLayoutProps {
  children: React.ReactNode;
}

export const FilmStripLayout: React.FC<FilmStripLayoutProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Transform velocity into distortion values
  // High velocity = more skew and slight x-axis shake
  const skewY = useTransform(smoothVelocity, [-1000, 0, 1000], [-2, 0, 2]);
  const x = useTransform(smoothVelocity, [-2000, 0, 2000], [-5, 0, 5]);
  
  // Burn effect opacity based on speed
  const burnOpacity = useTransform(smoothVelocity, (v) => Math.min(Math.abs(v) / 3000, 0.3));

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden font-mono selection:bg-red-700 selection:text-white">
      {/* Global Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08]" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* Film Sprockets - Left */}
      <div className="fixed left-0 top-0 bottom-0 w-8 md:w-16 z-40 border-r border-neutral-800 bg-black flex flex-col justify-between py-4 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-4 h-6 md:w-8 md:h-12 bg-neutral-900 mx-auto rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      {/* Film Sprockets - Right */}
      <div className="fixed right-0 top-0 bottom-0 w-8 md:w-16 z-40 border-l border-neutral-800 bg-black flex flex-col justify-between py-4 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-4 h-6 md:w-8 md:h-12 bg-neutral-900 mx-auto rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      {/* Main Content Projector */}
      <motion.div 
        className="relative z-10 px-8 md:px-20 py-12"
        style={{ skewY, x }}
      >
        {children}
      </motion.div>

      {/* Dynamic Film Burn Overlay (appears on fast scroll) */}
      <motion.div 
        className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-b from-orange-900/20 via-transparent to-orange-900/20 mix-blend-color-dodge"
        style={{ opacity: burnOpacity }}
      />
      
      {/* Vertical Lines (Scanlines) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" 
           style={{ backgroundSize: "100% 2px, 3px 100%" }} />
    </div>
  );
};
