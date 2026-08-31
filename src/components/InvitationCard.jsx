import React from 'react';
import { motion } from 'framer-motion';

export default function InvitationCard() {
  return (
    <section id="invite" className="relative w-full h-[max(100svh,150vw)] overflow-hidden bg-[#dce6f5]">
      {/* Full-Screen Temple Arch Frame Artwork — stretched to the exact screen size */}
      <img
        src="/temple2.webp"
        alt="Ornate Temple Arch Invitation Frame"
        className="absolute inset-0 w-full h-full object-fill"
        draggable="false"
      />

      {/* Invitation Content pinned inside the cream arch panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-[25%] right-[25%] top-[21%] bottom-[15%] flex flex-col items-center justify-center text-center"
      >
        {/* Top Blessing Ornament */}
        <div className="mb-2 sm:mb-3">
          <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-1.5 sm:mb-2">
            <img
              decoding="auto"
              loading="lazy"
              src="https://framerusercontent.com/images/7Jc7F5U6LjAzdX4ypVkjja74nO8.webp?scale-down-to=512&width=2500&height=2500"
              alt="Lord Ganesha"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <span className="font-serif text-xs sm:text-base md:text-xl lg:text-2xl text-amber-700 tracking-widest font-bold block">
            ॥ శ్రీ గణేశాయ నమః ॥
          </span>
        </div>

        {/* Large Calligraphic 'Invite' */}
        <h2 className="font-script-calligraphy text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-sky-700 my-1 font-normal">
          Invite
        </h2>

        {/* Lineage Text */}
        <div className="w-full space-y-1.5 sm:space-y-2.5 font-serif text-slate-800 leading-snug my-2 sm:my-3">
          <p className="text-slate-600 italic text-[8px] sm:text-[11px] md:text-sm lg:text-base">
            With the blessings of the Almighty and our beloved elders & grandparents,
          </p>

          <div className="py-1 sm:py-2 border-y border-amber-300/60">
            <p className="font-bold text-amber-900 text-[10px] sm:text-sm md:text-lg lg:text-xl">
              Mr. Nageswara Rao & Mrs. Neeraja
            </p>
            <span className="text-[7px] sm:text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-sans-clean">
              Cordially invite you to grace the wedding of their beloved son
            </span>
          </div>

          {/* Couple Names in Gold */}
          <div className="py-2 sm:py-3">
            <h1 className="font-cinzel text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-amber-600 drop-shadow-sm">
              VIVEK
            </h1>
            <span className="font-serif italic text-sm sm:text-xl md:text-2xl text-sky-600 block">&</span>
            <h1 className="font-cinzel text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-amber-600 drop-shadow-sm">
              VARSHINI
            </h1>
          </div>

          <div className="py-1 sm:py-2 border-y border-amber-300/60">
            <span className="text-[7px] sm:text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-sans-clean">
              Beloved daughter of
            </span>
            <p className="font-bold text-amber-900 text-[10px] sm:text-sm md:text-lg lg:text-xl">
              Mr. B.S.V.N.V.S Murthu & Mrs. Ratnamala
            </p>
          </div>
        </div>

        <p className="font-sans-clean text-[7px] sm:text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-sky-700 mt-1 sm:mt-2">
          On the following auspicious events
        </p>
      </motion.div>
    </section>
  );
}
