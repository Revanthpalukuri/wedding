import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Flame } from 'lucide-react';

export default function LoveQuotes() {
  const indianQuotes = [
    {
      text: "With seven sacred steps around the holy fire, two souls become bound together for seven lifetimes.",
      author: "Saptapadi Vedic Tradition",
    },
    {
      text: "May the divine grace of Lord Venkateswara fill your home with boundless peace, prosperity, and eternal love.",
      author: "Ancient Vedic Blessing",
    },
    {
      text: "Love is not just looking at each other, but walking together in the same direction towards dharma and joy.",
      author: "Indian Traditional Wisdom",
    },
    {
      text: "Where there is love and harmony between husband and wife, divine blessings naturally abide.",
      author: "Subhashita Wisdom",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % indianQuotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-[#210202] text-[#FFF8E7] relative overflow-hidden border-y border-[#D4AF37]/30">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Flame className="w-10 h-10 text-[#FFD700] mx-auto mb-6 animate-flame" />

        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="space-y-4"
            >
              <p className="font-heading-devanagari text-2xl sm:text-4xl text-[#FFF8E7] leading-relaxed font-bold">
                “{indianQuotes[currentIndex].text}”
              </p>
              <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-[#FFD700] block font-bold">
                — {indianQuotes[currentIndex].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {indianQuotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx ? 'w-8 bg-[#FFD700]' : 'w-2 bg-[#D4AF37]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
