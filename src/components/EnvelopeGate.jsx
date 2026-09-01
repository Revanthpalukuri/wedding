import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Music, Flame, Heart } from 'lucide-react';

export default function EnvelopeGate({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    onOpen();
    setIsOpen(true);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4A0404] via-[#230202] to-[#0D0000] text-[#FFF8E7] p-4 overflow-hidden"
        >
          {/* Animated Background Lights & Marigold Aura */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

          {/* Floating Subtle Sparkles Background Decorative Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

          {/* Main Royal Card Frame */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#3A0303]/95 border-4 border-[#D4AF37] rounded-[36px] p-8 sm:p-12 shadow-[0_0_60px_rgba(212,175,55,0.3)] text-center backdrop-blur-2xl mandap-arch-border overflow-hidden"
          >
            {/* Corner Gold Floral Ornaments */}
            <div className="absolute top-3 left-3 text-[#D4AF37] opacity-70 text-lg">🪷</div>
            <div className="absolute top-3 right-3 text-[#D4AF37] opacity-70 text-lg">🪷</div>
            <div className="absolute bottom-3 left-3 text-[#D4AF37] opacity-70 text-lg">🪷</div>
            <div className="absolute bottom-3 right-3 text-[#D4AF37] opacity-70 text-lg">🪷</div>

            {/* Telugu Ganesha Mantram Header */}
            <div className="mb-6">
              <span className="font-serif text-2xl sm:text-3xl text-[#FFD700] tracking-widest block font-bold drop-shadow-md">
                ॥ శ్రీ గణేశాయ నమః ॥
              </span>
              <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#FFD700]/90 mt-2 font-medium">
                With the divine blessings of Lord Ganesha & Almighty
              </p>
            </div>

            {/* Glowing Diya Lamp Icon */}
            <div className="relative w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#FFD700] flex items-center justify-center bg-gradient-to-tr from-[#660B14] to-[#2B0404] shadow-[0_0_30px_rgba(255,215,0,0.5)] diya-glow">
              <Flame className="w-10 h-10 text-[#FFD700] animate-flame drop-shadow-lg" />
              <div className="absolute -inset-1 rounded-full border border-[#FFD700]/40 animate-ping opacity-40" />
            </div>

            {/* Section Tagline */}
            <p className="font-sans-clean text-xs uppercase tracking-[0.35em] text-[#FFD700] mb-2 font-bold">
              Royal Wedding Invitation
            </p>

            {/* Couple Names */}
            <h1 className="font-heading-devanagari text-4xl sm:text-6xl font-bold tracking-wide text-[#FFF8E7] my-3 drop-shadow-lg">
              Vivek <span className="font-script-calligraphy text-4xl sm:text-5xl text-[#FFD700]">&</span> Varshini
            </h1>

            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto my-5" />

            {/* Invitation Request Sentence */}
            <p className="font-serif text-base sm:text-lg text-[#FFF8E7]/95 italic mb-6 leading-relaxed max-w-sm mx-auto">
              Together with their families, cordially invite you to celebrate the holy union of matrimony
            </p>

            {/* Date & Venue Badge */}
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#2B0404] border border-[#FFD700]/60 shadow-md mb-8">
              <p className="font-sans-clean text-xs sm:text-sm tracking-widest text-[#FFD700] uppercase font-bold">
                December 19, 2026 • 03:35 AM • Kshatriya Kalyana Mandapam, Amalapuram
              </p>
            </div>

            {/* Open Button with Pulse Glow */}
            <div className="pt-2">
              <button
                onClick={handleOpen}
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full royal-gold-button font-sans-clean text-xs sm:text-sm tracking-[0.2em] uppercase font-extrabold shadow-[0_10px_35px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#210202] group-hover:rotate-45 transition-transform duration-300" />
                <span>Open Traditional Invitation</span>
                <Music className="w-4 h-4 text-[#210202] opacity-80" />
              </button>
            </div>

            <p className="mt-5 text-[11px] sm:text-xs text-[#FFF8E7]/70 tracking-wider font-sans-clean flex items-center justify-center gap-1.5">
              🪔 Tap to listen to traditional Shehnai & Divine Flute instrumental
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
