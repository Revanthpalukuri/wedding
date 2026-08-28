import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Bell, Lock, Unlock, Heart } from 'lucide-react';

export default function ScratchCardCountdown({ days, hours, minutes, seconds, isMarried }) {
  const [isOpen, setIsOpen] = useState(false);

  const triggerShowerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 120,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#FFD700', '#D4AF37', '#FF1493', '#FFA500', '#FFF8E7', '#FF4500'],
    });
  };

  const toggleDoors = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      triggerShowerConfetti();
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto select-none my-8">
      {/* Ornate Sandstone & Gold Arch Outer Frame */}
      <div className="relative p-3 sm:p-5 rounded-t-[100px] sm:rounded-t-[130px] rounded-b-3xl bg-gradient-to-b from-[#660B14] via-[#3A0303] to-[#1D0202] border-4 border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Hanging Bells Accent along Top Arch */}
        <div className="absolute top-2 left-6 right-6 flex justify-between items-center z-10 pointer-events-none opacity-90">
          <motion.div
            animate={{ rotate: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <div className="w-0.5 h-6 bg-[#D4AF37]" />
            <Bell className="w-5 h-5 text-[#FFD700] fill-[#FFD700]/30 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
          </motion.div>
          <div className="text-center font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#FFD700] font-bold bg-[#1D0202]/80 px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-md">
            {isMarried ? '✨ Vivaah Sanctum • Just Married ✨' : 'Shubh Muhurtham Gate'}
          </div>
          <motion.div
            animate={{ rotate: [6, -6, 6] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <div className="w-0.5 h-6 bg-[#D4AF37]" />
            <Bell className="w-5 h-5 text-[#FFD700] fill-[#FFD700]/30 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
          </motion.div>
        </div>

        {/* 3D Perspective Container for Mandap Doors & Inside Chamber */}
        <div className="relative w-full aspect-[4/3.8] sm:aspect-[4/3.4] rounded-t-[80px] sm:rounded-t-[100px] rounded-b-2xl overflow-hidden border-2 border-[#FFD700]/40 shadow-inner perspective-[1200px] mt-7">
          
          {/* Revealed Countdown Inner Sanctum (Behind Doors) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B0407] via-[#1D0204] to-[#120102] text-[#FFF8E7] p-5 sm:p-7 flex flex-col justify-between items-center text-center overflow-hidden">
            {/* Subtle Gold Background Texture Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            
            {/* Inner Glow Light Rays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.25)_0%,transparent_70%)] pointer-events-none" />

            {isMarried ? (
              /* Celebratory Married View when Countdown is Crossed / Completed */
              <div className="relative z-10 w-full my-auto flex flex-col items-center justify-center space-y-3 py-2">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-[#FFD700] animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="font-sans-clean text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700] font-extrabold bg-[#660B14]/80 px-3 py-1 rounded-full border border-[#D4AF37]">
                    ॥ శుభం భవతు ॥
                  </span>
                  <Sparkles className="w-5 h-5 text-[#FFD700] animate-spin" style={{ animationDuration: '4s' }} />
                </motion.div>

                <h3 className="font-heading-devanagari text-2xl sm:text-4xl text-[#FFD700] font-extrabold drop-shadow-[0_2px_10px_rgba(255,215,0,0.5)]">
                  They are Now Married! ❤️
                </h3>

                <p className="font-script-calligraphy text-2xl sm:text-3xl text-amber-200 drop-shadow-md">
                  Vivek & Varshini
                </p>

                <p className="font-sans-clean text-[11px] sm:text-xs text-[#FFF8E7]/90 max-w-xs mx-auto leading-relaxed">
                  Sacred vows, Jeelakarra Bellam & Mangalsutra tying rituals are completed at Kshatriya Kalyana Mandapam.
                </p>

                <div className="pt-1">
                  <button
                    onClick={triggerShowerConfetti}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-[#1A0204] font-sans-clean text-[10px] sm:text-xs uppercase font-extrabold tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-800" />
                    <span>Shower Blessings (Pushpa Vrishti)</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Countdown View */
              <>
                <div className="relative z-10 w-full pt-2">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Heart className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                    <span className="font-sans-clean text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#FFD700] font-extrabold">
                      Countdown to Wedding
                    </span>
                    <Heart className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                  </div>
                  <h3 className="font-script-calligraphy text-3xl sm:text-4xl text-[#FFD700] drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)]">
                    19th December 2026
                  </h3>
                  <p className="font-sans-clean text-[10px] text-amber-200 uppercase tracking-widest -mt-1 font-semibold">
                    03:35 AM Early Morning • Kshatriya Kalyana Mandapam
                  </p>
                </div>

                {/* Live Countdown Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full my-auto relative z-10 max-w-sm">
                  {[
                    { label: 'DAYS', val: days },
                    { label: 'HOURS', val: hours },
                    { label: 'MINS', val: minutes },
                    { label: 'SECS', val: seconds },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="bg-gradient-to-b from-[#3D060B] to-[#1F0204] rounded-2xl p-2 sm:p-3 border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform"
                    >
                      <span className="font-heading-devanagari text-2xl sm:text-4xl font-extrabold text-[#FFD700] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {String(t.val ?? 0).padStart(2, '0')}
                      </span>
                      <span className="font-sans-clean text-[8px] sm:text-[10px] font-bold text-amber-200 uppercase tracking-wider mt-0.5">
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Inside Sanctum Bottom Blessing Motif */}
                <div className="relative z-10 text-[10px] font-sans-clean tracking-widest text-[#FFD700]/80 uppercase font-semibold">
                  ✨ Shubh Vivaah Celebrations • Kshatriya Kalyana Mandapam ✨
                </div>
              </>
            )}
          </div>

          {/* Royal Animated Double Temple Doors Overlay */}
          <div
            onClick={toggleDoors}
            className={`absolute inset-0 z-20 flex cursor-pointer ${
              isOpen ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
            title="Click to Open/Close Mandap Doors!"
          >
            {/* Left Temple Wooden Door Leaf */}
            <motion.div
              animate={isOpen ? { rotateY: -115 } : { rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="w-1/2 h-full bg-gradient-to-r from-[#200305] via-[#4A0A0F] to-[#340508] border-r border-[#FFD700]/60 p-3 sm:p-4 flex flex-col justify-between items-end relative shadow-[10px_0_30px_rgba(0,0,0,0.8)] overflow-hidden rounded-tl-[75px] sm:rounded-tl-[95px]"
            >
              {/* Wood Grain Texture Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

              {/* Inlaid Carved Rectangular Panels (Left Door) */}
              <div className="w-full h-full border-2 border-[#D4AF37]/70 rounded-tl-[60px] sm:rounded-tl-[75px] rounded-br-lg p-2.5 flex flex-col justify-between bg-black/20 shadow-inner relative">
                
                {/* Brass Studs Row (Top & Left) */}
                <div className="flex justify-between w-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                </div>

                {/* Inner Carved Motif Box */}
                <div className="w-full h-20 sm:h-28 border border-[#D4AF37]/50 rounded-xl bg-[#2A0508]/80 flex flex-col items-center justify-center p-2 shadow-md">
                  <div className="w-8 h-8 rounded-full border border-[#FFD700]/70 flex items-center justify-center bg-[#1A0204]">
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  </div>
                  <span className="text-[9px] font-sans-clean uppercase tracking-widest text-[#FFD700]/80 mt-1 font-bold">
                    SHUBH
                  </span>
                </div>

                {/* Bottom Brass Studs */}
                <div className="flex justify-between w-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                </div>
              </div>

              {/* Central Heavy Brass Knocker Plate (Left Half) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-16 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#D4AF37] rounded-l-2xl border-l-2 border-y-2 border-[#FFE89C] flex items-center justify-center shadow-2xl z-30">
                <div className="w-7 h-7 rounded-full border-2 border-[#660B14] bg-[#2A0508] flex items-center justify-center">
                  <div className="w-4 h-6 border-2 border-[#FFD700] rounded-t-full rounded-b-sm bg-gradient-to-b from-[#FFD700] to-[#B8860B] shadow-lg" />
                </div>
              </div>
            </motion.div>

            {/* Right Temple Wooden Door Leaf */}
            <motion.div
              animate={isOpen ? { rotateY: 115 } : { rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="w-1/2 h-full bg-gradient-to-l from-[#200305] via-[#4A0A0F] to-[#340508] border-l border-[#FFD700]/60 p-3 sm:p-4 flex flex-col justify-between items-start relative shadow-[-10px_0_30px_rgba(0,0,0,0.8)] overflow-hidden rounded-tr-[75px] sm:rounded-tr-[95px]"
            >
              {/* Wood Grain Texture Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

              {/* Inlaid Carved Rectangular Panels (Right Door) */}
              <div className="w-full h-full border-2 border-[#D4AF37]/70 rounded-tr-[60px] sm:rounded-tr-[75px] rounded-bl-lg p-2.5 flex flex-col justify-between bg-black/20 shadow-inner relative">
                
                {/* Brass Studs Row (Top & Right) */}
                <div className="flex justify-between w-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                </div>

                {/* Inner Carved Motif Box */}
                <div className="w-full h-20 sm:h-28 border border-[#D4AF37]/50 rounded-xl bg-[#2A0508]/80 flex flex-col items-center justify-center p-2 shadow-md">
                  <div className="w-8 h-8 rounded-full border border-[#FFD700]/70 flex items-center justify-center bg-[#1A0204]">
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  </div>
                  <span className="text-[9px] font-sans-clean uppercase tracking-widest text-[#FFD700]/80 mt-1 font-bold">
                    LABH
                  </span>
                </div>

                {/* Bottom Brass Studs */}
                <div className="flex justify-between w-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE89C] via-[#FFD700] to-[#997406] shadow-md border border-[#8B5A00]" />
                </div>
              </div>

              {/* Central Heavy Brass Knocker Plate (Right Half) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-16 bg-gradient-to-l from-[#B8860B] via-[#FFD700] to-[#D4AF37] rounded-r-2xl border-r-2 border-y-2 border-[#FFE89C] flex items-center justify-center shadow-2xl z-30">
                <div className="w-7 h-7 rounded-full border-2 border-[#660B14] bg-[#2A0508] flex items-center justify-center">
                  <div className="w-4 h-6 border-2 border-[#FFD700] rounded-t-full rounded-b-sm bg-gradient-to-b from-[#FFD700] to-[#B8860B] shadow-lg" />
                </div>
              </div>
            </motion.div>

            {/* Floating Royal Door Seal / Tap to Open Badge (Shown when doors closed) */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
                >
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="px-5 py-3 rounded-full bg-[#1D0204]/95 text-[#FFD700] border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.7)] backdrop-blur-md flex items-center gap-2.5 text-xs font-sans-clean uppercase tracking-widest font-extrabold"
                  >
                    <Unlock className="w-4 h-4 text-[#FFD700] animate-pulse" />
                    <span>Tap to Open Mandap Doors</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* External Control Button below Archway */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={toggleDoors}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#660B14] via-[#8B0000] to-[#660B14] text-[#FFD700] text-xs font-sans-clean uppercase tracking-widest font-bold border-2 border-[#D4AF37] shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          {isOpen ? (
            <>
              <Lock className="w-4 h-4 text-[#FFD700]" />
              <span>Close Mandap Doors</span>
            </>
          ) : (
            <>
              <Unlock className="w-4 h-4 text-[#FFD700]" />
              <span>Open Mandap Doors</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

