"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLogoExploded, setIsLogoExploded] = useState(false);
  
  // Terminal Typewriter State
  const codeText = "// OVERTHROWING STANDARD PUBLICATION LOGIC VIA AUTONOMOUS ENGINEERING CODE.";
  const [displayedCode, setDisplayedCode] = useState("");
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    // Trigger typewriter right after layout finishes animations
    const timer = setTimeout(() => setStartTypewriter(true), 1200);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!startTypewriter) return;
    if (displayedCode.length < codeText.length) {
      const i = displayedCode.length;
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeText[i]);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [displayedCode, startTypewriter]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-6">
      
      {/* Deep Matrix Vector Grid System */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[750px] h-[750px] bg-rose-600/5 rounded-full blur-[180px]" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" 
          style={{
            maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 60%)`
          }}
        />
      </div>

      {/* Rotating Wireframe Vector Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: isLogoExploded ? 1.25 : 1
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 50, ease: "linear" },
            scale: { duration: 0.5, ease: "easeOut" }
          }}
          className="relative opacity-[0.03] filter grayscale invert scale-[1.7] md:scale-[2.2]"
        >
          <img src="/logo.png" alt="Background Matrix Graphic" className="w-[400px] h-auto object-contain" />
        </motion.div>
      </div>

      {/* Central Wrapper */}
      <div className="relative z-10 max-w-5xl w-full mx-auto space-y-10 flex flex-col items-center">
        
        {/* Fixed Circularized Glowing Logo Core */}
        <motion.div 
          whileHover={{ scale: 1.08, rotate: -8 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsLogoExploded(true)}
          onHoverEnd={() => setIsLogoExploded(false)}
          className="cursor-pointer relative p-1.5 group"
        >
          <div className="absolute inset-0 bg-rose-600 rounded-full blur-2xl opacity-20 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-[-4px] bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600 rounded-full opacity-0 group-hover:opacity-40 animate-spin transition-opacity duration-500" style={{ animationDuration: '6s' }} />
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="relative p-3 bg-[#07070a] border border-rose-500/20 group-hover:border-rose-500 rounded-full shadow-[0_0_40px_rgba(225,29,72,0.2)] transition-all duration-300"
          >
            <img 
              src="/logo.png" 
              alt="Central Base Logo Core" 
              className="w-20 h-20 md:w-26 md:h-26 rounded-full object-cover p-1.5 bg-black/50"
            />
          </motion.div>
        </motion.div>

        {/* Text Stack */}
        <div className="w-full flex flex-col items-center space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#0e0e14] border border-white/10 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-rose-500 font-black shadow-inner"
          >
            <Sparkles size={11} className="text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span>ST. PETER'S MEDIA HQ NETWORK</span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase select-none text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500/70 drop-shadow-2xl">
            SPEC NEWS
          </h1>

          {/* Upscaled Left-Aligned Quote Container Frame */}
          <div className="w-full max-w-2xl text-left mt-4 space-y-5 px-4 md:px-0">
            
            <div className="flex gap-5 items-stretch">
              {/* Vertical Accent Expanding Line */}
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-[3px] bg-gradient-to-b from-rose-500 to-amber-500 origin-top shrink-0 shadow-[0_0_15px_rgba(225,29,72,0.5)]"
              />
              
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-xl italic font-light tracking-wide text-neutral-100 leading-relaxed drop-shadow"
              >
                "True prestige is not about standing out from the crowd; it is about setting a standard so distinct that others define themselves by your absence."
              </motion.p>
            </div>

            {/* Typewriter Terminal Node */}
            <p className={`text-[11px] md:text-xs font-mono tracking-[0.16em] text-rose-500/80 uppercase pl-[23px] min-h-[1.5rem] leading-relaxed ${displayedCode.length < codeText.length ? "terminal-cursor" : ""}`}>
              {displayedCode}
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}