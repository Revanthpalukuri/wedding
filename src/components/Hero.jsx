import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  // Target Wedding Muhurtham: December 19, 2026 at 03:35 AM IST
  const targetDate = new Date('2026-12-19T03:35:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen sky-gopuram-bg flex flex-col items-center justify-between pt-20 pb-12 px-4 overflow-hidden">
      {/* Animated Soft White Clouds Background */}
      <div className="absolute top-10 left-0 right-0 h-40 pointer-events-none opacity-80 animate-cloud-slow">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full text-white/40 fill-current">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Top Title Overlay */}
      <div className="relative z-10 text-center space-y-1.5 mt-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-cinzel text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-white drop-shadow-md"
        >
          VIVEK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif italic text-base sm:text-xl md:text-2xl tracking-widest text-amber-200 font-semibold uppercase"
        >
          WEDS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cinzel text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] text-white drop-shadow-md"
        >
          VARSHINI
        </motion.h2>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="block font-sans-clean text-[9px] sm:text-xs uppercase tracking-[0.35em] text-blue-100 font-semibold pt-1"
        >
          DECEMBER 19, 2026 • 03:35 AM • ARE GETTING MARRIED
        </motion.span>
      </div>

      {/* Main Temple Gopuram Tower Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="relative z-10 w-full max-w-2xl mx-auto my-auto flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-[450px] sm:h-[580px] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200/40">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85"
            alt="South Indian Temple Gopuram Tower"
            className="w-full h-full object-cover object-top scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 via-transparent to-sky-900/20" />

          {/* Date & Temple Spire Badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/90 backdrop-blur-md border border-amber-400 text-sky-950 text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>19th December 2026 • Kshatriya Kalyana Mandapam</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Scroll Down Arrow */}
      <motion.a
        href="#invite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-20 flex flex-col items-center gap-1 text-white/90 hover:text-amber-200 transition-colors pointer-events-auto cursor-pointer mb-2"
      >
        <span className="font-sans-clean text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll to View</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-amber-300" />
      </motion.a>
    </section>
  );
}
