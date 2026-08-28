import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function CoupleIllustration() {
  return (
    <section id="varmala" className="relative min-h-screen sky-gopuram-bg flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Clouds Background */}
      <div className="absolute top-8 left-10 w-48 h-20 bg-white/30 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-16 right-10 w-64 h-24 bg-white/30 rounded-full blur-xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-amber-200 block mb-2 font-bold">
            The Auspicious Couple
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-bold tracking-wider">
            Meet The Bridegroom & Bride
          </h2>
          <div className="w-20 h-[2px] bg-amber-300 mx-auto my-4" />
        </motion.div>

        {/* Stacked Groom & Bride Cards */}
        <div className="space-y-12 max-w-2xl mx-auto">
          {/* Meet the Bridegroom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-amber-50/95 rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-2xl overflow-hidden text-slate-800"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-600 text-white font-sans-clean text-xs font-bold uppercase tracking-widest mb-4">
              The Groom
            </span>
            <h3 className="font-cinzel text-3xl sm:text-4xl text-amber-900 font-bold mb-4">
              Meet the Bridegroom
            </h3>

            {/* Groom Photo */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                alt="Meet the Bridegroom - Vivek"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />
            </div>

            {/* Groom Lineage Details */}
            <div className="bg-amber-100/70 p-4 rounded-xl border border-amber-300/80">
              <p className="font-serif text-lg sm:text-xl text-amber-950 font-semibold">
                Son of Nageswara Rao and Neeraja
              </p>
            </div>
          </motion.div>

          {/* Meet the Bride */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-amber-50/95 rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-2xl overflow-hidden text-slate-800"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-600 text-white font-sans-clean text-xs font-bold uppercase tracking-widest mb-4">
              The Bride
            </span>
            <h3 className="font-cinzel text-3xl sm:text-4xl text-amber-900 font-bold mb-4">
              Meet the Bride
            </h3>

            {/* Bride Photo */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85"
                alt="Meet the Bride - Varshini"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />
            </div>

            {/* Bride Lineage Details */}
            <div className="bg-amber-100/70 p-4 rounded-xl border border-amber-300/80">
              <p className="font-serif text-lg sm:text-xl text-amber-950 font-semibold">
                Daughter of B.S.V.N.V.S Murthu and Ratnamala
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
