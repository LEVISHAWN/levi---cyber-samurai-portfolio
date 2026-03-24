import { motion } from 'motion/react';
import bgImage from '../../images/WhatsApp Image 2026-03-23 at 9.19.11 PM.jpeg';
import fgImage from '../../images/WhatsApp Image 2026-03-23 at 9.25.19 PM.jpeg';

const CarGlassmorphism = () => {
  return (
    <div className="group relative w-full h-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700">
      
      {/* 1. BASE LAYER: Image 1 (Normal) - Removed scaling to ensure perfect 1:1 frame match */}
      <div className="absolute inset-0 w-full h-full z-0 transition-all duration-700 group-hover:blur-[6px] group-hover:opacity-0">
        <img 
          src={bgImage} 
          alt="Base" 
          className="w-full h-full object-cover"
        />
        {/* Shadow darkening overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700" />
      </div>

      {/* Subtle Liquid Glow that follows hover centrally */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:animate-pulse z-0 pointer-events-none" />

      {/* 2. LIQUID GLASS PANEL (Reveals on Hover) - Full Width & Height */}
      <motion.div 
        className="relative z-10 w-full h-full rounded-[2.5rem] 
                   opacity-0 group-hover:opacity-100
                   transition-all duration-700 ease-out
                   /* Liquid Glass Refraction */
                   bg-transparent
                   backdrop-blur-[16px] 
                   /* Light Catcher Borders */
                   border border-white/[0.25] border-b-white/[0.05] border-r-white/[0.05]
                   /* Depth & Shadow */
                   shadow-[inset_0_1px_4px_rgba(255,255,255,0.4)]
                   flex items-center justify-center overflow-hidden"
      >
        {/* Glossy Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/[0.25] pointer-events-none z-30" />

        {/* 3. FRONT LAYER: Image 2 (Mask) blending with the glass */}
        <div className="absolute inset-0 z-20 overflow-hidden opacity-100">
            <img 
              src={fgImage} 
              alt="Mask Reveal" 
              className="w-full h-full object-cover"
            />
        </div>
        
        {/* Text/Label to add Cyberpunk flair */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-40 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300 pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter drop-shadow-lg text-white">
            ONI <span className="text-red-500">AWAKENED</span>
          </h2>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest drop-shadow-md text-white/70 mt-1">
            Liquid Glass Panel // Multi-Layered Depth Active
          </p>
        </div>

      </motion.div>

      {/* 4. AESTHETIC SCANLINES */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] z-50 bg-[length:100%_4px] opacity-40" />
    </div>
  );
};

export default CarGlassmorphism;
