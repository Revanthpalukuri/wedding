import React from 'react';
import { motion } from 'framer-motion';

export default function CoupleIllustration() {
  return (
    <section
      id="varmala"
      className="relative w-full aspect-[2/3] min-h-[calc(100vw*1.5)] overflow-hidden flex items-center justify-center select-none bg-[#1E60BF]"
    >
      {/* Edge-to-Edge Full Canvas Artwork with pre-rendered typography */}
      <img
        src="/images/meet_the_bride_groom_bg.jpg"
        alt="Meet The Bride & Bridegroom Artwork"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable="false"
      />

      {/* Top-Left Corner Cascading Floral Garland */}
      <img
        src="/images/TopLeftCorner.png"
        alt="Top Left Floral Corner"
        className="absolute top-0 left-0 w-[42%] sm:w-[38%] md:w-[34%] pointer-events-none z-20 drop-shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
        draggable="false"
      />

      {/* 1. Top Section: THE BRIDE (Left: Photo, Right: Lineage Box) */}
      <div className="absolute top-[32%] left-[16%] right-[16%] h-[24%] flex items-center justify-between z-10">
        {/* Bride Photo Frame (Aligned in background slot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[45%] h-full flex items-center justify-center relative pl-0 sm:pl-1"
        >
          <div className="relative w-[84%] sm:w-[88%] h-[88%] sm:h-[94%] rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#D4AF37] shadow-[0_8px_20px_rgba(0,0,0,0.25)] bg-[#102A4E]">
            <img
              src="/images/bride_portrait.jpg"
              alt="The Bride"
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl"
            />
            {/* Floral Cluster Ornament on Bottom-Left Corner (+50% Enlarged) */}
            <img
              src="/images/BackgroundFlower.png"
              alt="Floral Ornament"
              className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 md:-bottom-12 md:-left-12 w-[110px] sm:w-[160px] md:w-[210px] lg:w-[240px] max-w-none pointer-events-none z-20 drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)]"
              draggable="false"
            />
          </div>
        </motion.div>

        {/* Bride Lineage Box (Larger font, shifted down into the box center) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[55%] h-full flex flex-col items-center justify-center text-center pl-0 sm:pl-0 pt-15 sm:pt-50 md:pt-50"
        >
          <div className="w-full max-w-[280px] text-center bg-transparent flex flex-col items-center justify-center space-y-0.5 sm:space-y-1.5">
            <p className="font-serif text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#6B3E11] italic font-semibold leading-tight">
              Daughter of
            </p>
            <p className="font-serif text-[13px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-[#0E2A54] leading-snug tracking-tight">
              S V N V S Murthy and<br />Ratnamala
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. Bottom Section: THE GROOM (Left: Lineage Box, Right: Photo) */}
      <div className="absolute top-[60%] left-[16%] right-[16%] h-[24%] flex items-center justify-between z-10">
        {/* Groom Lineage Box (Larger font, shifted down into the box center) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-[55%] h-full flex flex-col items-center justify-center text-center pr-0 sm:pr-0 pt-5 sm:pt-30 md:pt-30"
        >
          <div className="w-full max-w-[280px] text-center bg-transparent flex flex-col items-center justify-center space-y-0.5 sm:space-y-1.5">
            <p className="font-serif text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#6B3E11] italic font-semibold leading-tight">
              Son of
            </p>
            <p className="font-serif text-[13px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-[#0E2A54] leading-snug tracking-tight">
              Nageswara Rao and<br />Neeraja
            </p>
          </div>
        </motion.div>

        {/* Groom Photo Frame (Shifted left to align with background frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-[45%] h-full flex items-center justify-center relative pr-0 sm:pr-2 md:pr-4 -translate-x-1 sm:-translate-x-2"
        >
          <div className="relative w-[84%] sm:w-[88%] h-[88%] sm:h-[94%] rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#D4AF37] shadow-[0_8px_20px_rgba(0,0,0,0.25)] bg-[#102A4E]">
            <img
              src="/images/groom_portrait.jpg"
              alt="The Bridegroom"
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl"
            />
            {/* Floral Cluster Ornament on Bottom-Right Corner (+50% Enlarged) */}
            <img
              src="/images/BackgroundFlower.png"
              alt="Floral Ornament"
              className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 md:-bottom-12 md:-right-12 w-[110px] sm:w-[160px] md:w-[210px] lg:w-[240px] max-w-none pointer-events-none z-20 drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)] -scale-x-100"
              draggable="false"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Full-Width Decorative Diyas & Floral Railing Ornament */}
      <img
        src="/images/BottomImage.png"
        alt="Bottom Floral & Diya Ornament"
        className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 object-contain drop-shadow-[0_-6px_16px_rgba(0,0,0,0.18)]"
        draggable="false"
      />
    </section>
  );
}
