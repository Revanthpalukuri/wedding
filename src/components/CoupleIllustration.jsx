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
        src="/images/meet_couple/meet_the_bride_groom_bg.png"
        alt="Meet The Bride & Bridegroom Artwork"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable="false"
      />

      {/* Top-Left Corner Cascading Floral Garland */}
      <img
        src="/images/decorations/TopLeftCorner.png"
        alt="Top Left Floral Corner"
        className="absolute top-0 left-0 w-[42%] sm:w-[38%] md:w-[34%] pointer-events-none z-20 drop-shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
        draggable="false"
      />

      {/* 1. GROOM PHOTO (Top-Left Background Frame Slot) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[32.2%] left-[19.2%] w-[27.6%] h-[24.4%] z-10 flex items-center justify-center"
      >
        <div className="w-full h-full rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#D4AF37] shadow-[0_8px_20px_rgba(0,0,0,0.25)] bg-[#102A4E] relative overflow-hidden">
          <img
            src="/images/meet_couple/groom_portrait.jpg"
            alt="The Groom - Vivek"
            className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl"
          />
        </div>
        {/* Floral Cluster Ornament on Bottom-Left Corner */}
        <img
          src="/images/decorations/BackgroundFlower.png"
          alt="Floral Ornament"
          className="absolute -bottom-4 -left-4 sm:-bottom-7 sm:-left-7 md:-bottom-9 md:-left-9 w-[75px] sm:w-[125px] md:w-[165px] pointer-events-none z-20 drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)]"
          draggable="false"
        />
      </motion.div>

      {/* 2. GROOM LINEAGE (Top-Right Background Box Slot under 'THE GROOM') */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[42.6%] left-[49.2%] w-[31.6%] h-[14.4%] z-10 flex flex-col items-center justify-center text-center px-1 sm:px-2"
      >
        <p className="font-serif text-[clamp(8px,1.15vw,16px)] text-[#6B3E11] italic font-semibold leading-tight">
          Son of
        </p>
        <p className="font-serif text-[clamp(10px,1.45vw,22px)] font-extrabold text-[#0E2A54] leading-tight tracking-tight mt-0.5">
          Nageswara Rao and<br />Neeraja
        </p>
      </motion.div>

      {/* 3. BRIDE LINEAGE (Bottom-Left Background Box Slot under 'THE BRIDE') */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-[70.4%] left-[19.2%] w-[31.6%] h-[14.4%] z-10 flex flex-col items-center justify-center text-center px-1 sm:px-2"
      >
        <p className="font-serif text-[clamp(8px,1.15vw,16px)] text-[#6B3E11] italic font-semibold leading-tight">
          Daughter of
        </p>
        <p className="font-serif text-[clamp(10px,1.45vw,22px)] font-extrabold text-[#0E2A54] leading-tight tracking-tight mt-0.5">
          S V N V S Murthy and<br />Ratnamala
        </p>
      </motion.div>

      {/* 4. BRIDE PHOTO (Bottom-Right Background Frame Slot) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-[61.0%] left-[53.2%] w-[27.6%] h-[24.4%] z-10 flex items-center justify-center"
      >
        <div className="w-full h-full rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#D4AF37] shadow-[0_8px_20px_rgba(0,0,0,0.25)] bg-[#102A4E] relative overflow-hidden">
          <img
            src="/images/meet_couple/bride_portrait.jpg"
            alt="The Bride - Varshini"
            className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl"
          />
        </div>
        {/* Floral Cluster Ornament on Bottom-Right Corner */}
        <img
          src="/images/decorations/BackgroundFlower.png"
          alt="Floral Ornament"
          className="absolute -bottom-4 -right-4 sm:-bottom-7 sm:-right-7 md:-bottom-9 md:-right-9 w-[75px] sm:w-[125px] md:w-[165px] pointer-events-none z-20 drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)] -scale-x-100"
          draggable="false"
        />
      </motion.div>

      {/* Bottom Full-Width Decorative Diyas & Floral Railing Ornament */}
      <img
        src="/images/decorations/BottomImage.png"
        alt="Bottom Floral & Diya Ornament"
        className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 object-contain drop-shadow-[0_-6px_16px_rgba(0,0,0,0.18)]"
        draggable="false"
      />
    </section>
  );
}
