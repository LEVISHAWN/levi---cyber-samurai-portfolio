import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const HeroMorph = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full flex justify-center items-center">
      <div 
        className="relative w-full max-w-[400px] aspect-[5/7] cursor-crosshair group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Hover to reveal character's specialized identity"
      >
        {/* Liquid Glass Shine Effect on Hover */}
        <div className="absolute inset-0 z-10 rounded-[2.5rem] overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg]"
            animate={{ left: isHovered ? '150%' : '-150%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/*
          Layer 1: The BASE ("Standard" Identity)
          This layer is always present but its opacity will change.
        */}
        <motion.img 
          src="/hero-standard.png" 
          onError={(e) => {
            // Fallback to a cyberpunk portrait from Unsplash if the local file isn't uploaded yet
            e.currentTarget.src = "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop";
          }}
          alt="Standard Hero Identity"
          className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border border-white/20 shadow-2xl"
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1, filter: isHovered ? 'blur(4px)' : 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          referrerPolicy="no-referrer"
        />

        {/*
          Layer 2: The OVERLAY ("Cyber-Samurai" Masked Identity)
          This layer sits exactly on top and fades in.
        */}
        <motion.img 
          src="/hero-samurai.png" 
          onError={(e) => {
            // Fallback to a neon masked portrait from Unsplash
            e.currentTarget.src = "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop";
          }}
          alt="Cyber-Samurai Masked Identity"
          className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.05, filter: isHovered ? 'blur(0px)' : 'blur(4px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          referrerPolicy="no-referrer"
        />
        
        {/* Example: A Socratic AI Mentor Hint (triggered by Samurai state) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute -bottom-8 -right-4 md:-right-12 p-5 rounded-[2rem] z-20 max-w-[280px]
                         bg-gradient-to-br from-white/[0.08] to-transparent
                         backdrop-blur-[6px] border border-white/[0.2]
                         shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2)]
                         overflow-hidden"
            >
              {/* Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.15] pointer-events-none" />
              
              <p className="relative z-10 font-sans text-sm text-liquid-glass-subtle leading-relaxed font-medium drop-shadow-md">
                "The path is secure, but the destination is guarded... Think: IAM roles."
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroMorph;
