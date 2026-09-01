import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);
  // Scroll-linked parallax: temple drifts slower than the page while
  // scrolling through the hero, giving the layered depth of the reference site
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const templeParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full h-[max(100svh,151vw)] overflow-hidden bg-[#2D68C4]"
    >
      {/* Layer 1: Blue Sky with Clouds — slow drifting zoom */}
      <motion.img
        src="/images/hero/cloud.webp"
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Layer 2: Temple Gopuram — rises up slowly from below, then gently floats */}
      <motion.div
        initial={{ opacity: 0, y: 160, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute inset-x-0 bottom-0 top-[18%] flex items-end justify-center"
      >
        <motion.div style={{ y: templeParallaxY }} className="h-full flex items-end justify-center">
          <motion.img
            src="/images/hero/hero_temple.webp"
            alt="Meenakshi Amman Temple Gopuram"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            draggable="false"
          />
        </motion.div>
      </motion.div>

      {/* Layer 3: Foreground Trees — frame the temple through the canopy opening */}
      <motion.img
        src="/images/hero/trees.avif"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none z-10"
        draggable="false"
      />

      {/* Layer 4: Couple Names Overlay */}
      <div className="absolute inset-x-0 top-[8%] z-20 text-center space-y-1.5 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -24, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
        >
          VIVEK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="font-script-calligraphy text-2xl sm:text-3xl md:text-4xl text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          weds
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
          transition={{ duration: 1.4, delay: 1.4, ease: 'easeOut' }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
        >
          VARSHINI
        </motion.h2>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="block font-sans-clean text-[9px] sm:text-xs uppercase tracking-[0.35em] text-white/95 font-semibold pt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          December 19, 2026 • 03:35 AM • Are Getting Married
        </motion.span>
      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.a
        href="#invite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="absolute bottom-5 inset-x-0 z-20 flex flex-col items-center gap-1 text-white/90 hover:text-amber-200 transition-colors cursor-pointer"
      >
        <span className="font-sans-clean text-[10px] uppercase tracking-[0.3em] font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">Scroll to View</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-amber-300" />
      </motion.a>
    </section>
  );
}
