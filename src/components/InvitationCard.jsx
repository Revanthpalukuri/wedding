import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function InvitationCard() {
  return (
    <section id="invite" className="relative min-h-screen temple-gopuram-pattern-bg py-24 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full relative z-10">
        {/* Carved Temple Arch Portal Card (Screenshot 3 Exact Framing) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="temple-arch-container p-6 sm:p-14 text-center relative overflow-hidden"
        >
          {/* Top Temple Arch Header Ornament */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-amber-500 bg-amber-100 flex items-center justify-center shadow-md">
              <Flame className="w-8 h-8 text-amber-600 animate-flame" />
            </div>
            <span className="font-serif text-lg text-amber-700 tracking-widest font-bold block">
              ॥ శ్రీ గణేశాయ నమః ॥
            </span>
            <p className="font-serif text-xs uppercase tracking-[0.25em] text-slate-600 mt-1">
              With the blessings of God and our beloved parents, we cordially
            </p>
          </div>

          {/* Large Calligraphic 'Invite' */}
          <h2 className="font-script-calligraphy text-4xl sm:text-6xl md:text-8xl text-sky-700 my-2 font-normal">
            Invite
          </h2>

          {/* Lineage Text */}
          <div className="max-w-xl mx-auto space-y-3 font-serif text-xs sm:text-base text-slate-800 leading-relaxed my-6">
            <p className="text-slate-600 italic">
              With the blessings of the Almighty and our beloved elders & grandparents,
            </p>
            
            <div className="py-2 border-y border-amber-300/60">
              <p className="font-bold text-amber-900 text-sm sm:text-lg">
                Mr. Nageswara Rao & Mrs. Neeraja
              </p>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-sans-clean">
                Cordially invite you to grace the wedding of their beloved son
              </span>
            </div>

            {/* Couple Names in Gold */}
            <div className="py-4 sm:py-6">
              <h1 className="font-cinzel text-2xl sm:text-4xl md:text-6xl font-bold tracking-wider text-amber-600 drop-shadow-sm">
                VIVEK
              </h1>
              <span className="font-serif italic text-lg sm:text-2xl text-sky-600 my-1 block">&</span>
              <h1 className="font-cinzel text-2xl sm:text-4xl md:text-6xl font-bold tracking-wider text-amber-600 drop-shadow-sm">
                VARSHINI
              </h1>
            </div>

            <div className="py-2 border-y border-amber-300/60">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-sans-clean">
                Beloved daughter of
              </span>
              <p className="font-bold text-amber-900 text-base sm:text-lg">
                Mr. B.S.V.N.V.S Murthu & Mrs. Ratnamala
              </p>
            </div>
          </div>

          <p className="font-sans-clean text-xs font-bold uppercase tracking-[0.3em] text-sky-700 mt-8">
            On the following auspicious events
          </p>
        </motion.div>
      </div>
    </section>
  );
}
