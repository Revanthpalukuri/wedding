import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flame } from 'lucide-react';

export default function CoupleProfile() {
  return (
    <section id="couple" className="py-24 px-6 bg-[#2B0404] text-[#FFF8E7] relative overflow-hidden">
      {/* Decorative Ornate Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10">
              <Flame className="w-5 h-5 text-[#FFD700] animate-flame" />
            </div>

            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#FFD700] block mb-2 font-semibold">
              The Auspicious Union
            </span>
            <h2 className="font-heading-devanagari text-4xl sm:text-6xl text-[#FFF8E7] font-bold">
              Groom & Bride
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />
            <p className="font-serif italic text-lg text-[#FFD700]">
              “Two souls bound by sacred Vedic vows, destined to walk life’s journey together.”
            </p>
          </motion.div>
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-maroon-panel rounded-3xl p-8 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl mandap-arch-border text-center group"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                alt="Rahul - Groom in Traditional Silk Sherwani"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0404]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-[#2B0404] font-sans-clean text-xs font-bold uppercase tracking-widest">
                The Groom
              </span>
            </div>

            <h3 className="font-heading-devanagari text-3xl font-bold text-[#FFD700] mb-2">
              Vivek Palukuri
            </h3>
            <p className="font-serif text-sm italic text-[#FFF8E7]/80 mb-4">
              Son of Mrs. Sunita & Mr. Ramesh Palukuri
            </p>
            <p className="font-sans-clean text-xs sm:text-sm text-[#FFF8E7]/90 leading-relaxed max-w-md mx-auto">
              Senior Software Architect & Tech Innovator. A passionate traveler and lover of classical music who brings warmth, humor, and devotion into every aspect of life.
            </p>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-maroon-panel rounded-3xl p-8 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl mandap-arch-border text-center group"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                alt="Varshini - Bride in Traditional Kanjivaram Silk Saree"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0404]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-[#2B0404] font-sans-clean text-xs font-bold uppercase tracking-widest">
                The Bride
              </span>
            </div>

            <h3 className="font-heading-devanagari text-3xl font-bold text-[#FFD700] mb-2">
              Varshini
            </h3>
            <p className="font-serif text-sm italic text-[#FFF8E7]/80 mb-4">
              Daughter of Mrs. Lakshmi & Mr. Anant Verma
            </p>
            <p className="font-sans-clean text-xs sm:text-sm text-[#FFF8E7]/90 leading-relaxed max-w-md mx-auto">
              Creative Designer & Classical Dancer. Known for her infectious smile, grace, and deep reverence for cultural traditions, family, and art.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
