import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

import ScratchCardCountdown from './ScratchCardCountdown';

export default function CountingDaysMagic() {
  // Target Wedding Muhurtham: 19th December 2026 at 03:35 AM early morning
  const targetDate = new Date('2026-12-19T03:35:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isMarried: false,
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isMarried: true };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Stacked Polaroid Deck photos
  const magicPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      caption: 'Lakeside Pre-wedding Blessing',
    },
    {
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      caption: 'Traditional Ethnic Elegance',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      caption: 'Kshatriya Kalyana Mandapam Courtyard',
    },
    {
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
      caption: 'Ring Ceremony Memories',
    },
  ];

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % magicPhotos.length);
  };

  return (
    <section className="relative min-h-screen bg-[#F7F2E7] text-[#3A0303] py-20 px-4 flex flex-col justify-between overflow-hidden">
      {/* Carved Sandstone Relief Pattern Texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8B0000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Title: Counting the Days / Happily Married */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="font-script-calligraphy text-4xl sm:text-6xl text-[#660B14] block mb-2 font-normal">
            {timeLeft.isMarried ? 'Celebrating Our Holy Union' : 'Counting the Days'}
          </span>
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-[#8B0000] font-bold">
            {timeLeft.isMarried
              ? '✨ Vivek & Varshini are Now Married! ✨'
              : 'Towards Shubh Muhurtham • 19th Dec 2026, 03:35 AM'}
          </p>

          {/* Royal Mandap Double Arch Doors Countdown */}
          <ScratchCardCountdown
            days={timeLeft.days}
            hours={timeLeft.hours}
            minutes={timeLeft.minutes}
            seconds={timeLeft.seconds}
            isMarried={timeLeft.isMarried}
          />
        </motion.div>

        {/* Section: Touch here for Magic (New Screenshot 2 Interactive Polaroid Deck) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="my-12 relative max-w-sm mx-auto"
        >
          <span className="font-script-calligraphy text-3xl sm:text-5xl text-[#660B14] block mb-6 font-normal">
            Touch here for Magic
          </span>

          {/* Stacked Tilted Polaroid Photo Deck */}
          <div
            onClick={handleNextPhoto}
            className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto cursor-pointer group select-none"
            title="Click/Touch to see next photo"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhotoIndex}
                initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
                animate={{ opacity: 1, rotate: -3, scale: 1 }}
                exit={{ opacity: 0, rotate: 12, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white p-3 pb-8 rounded-2xl shadow-2xl border-2 border-amber-300 transform group-hover:rotate-0 transition-transform"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src={magicPhotos[activePhotoIndex].url}
                    alt={magicPhotos[activePhotoIndex].caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-sans-clean text-white uppercase tracking-widest font-bold text-center">
                    {magicPhotos[activePhotoIndex].caption}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tap Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#660B14] text-[#FFD700] text-[10px] font-sans-clean uppercase tracking-widest font-bold border border-[#D4AF37] shadow-xl flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FFD700]" />
              <span>Tap to Flip Photo</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Red Sandstone Mountains & Golden Temple Gopuram Artwork Footer (New Screenshot 2 Bottom) */}
      <div className="relative w-full max-w-5xl mx-auto mt-16 pt-8 text-center border-t-2 border-[#D4AF37]/40">
        <div className="relative h-48 sm:h-64 rounded-t-3xl overflow-hidden border-t-4 border-[#D4AF37] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
            alt="Red Mountain Peaks and Temple Gopuram Tower Artwork"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#660B14] via-[#660B14]/40 to-transparent" />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans-clean text-xs uppercase tracking-[0.3em] text-[#FFD700] font-bold">
            #VivekWedsVarshini • Amalapuram, AP
          </span>
        </div>
      </div>
    </section>
  );
}
