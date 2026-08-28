import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section
      id="story"
      className="relative w-full h-screen bg-[#210202] text-[#FFF8E7] overflow-hidden border-y-4 border-[#D4AF37]"
    >
      {/* Full-Screen Artwork — stretched to match the exact screen size.
          Content below is pinned by percentages, so it tracks the arch
          wherever it lands on any screen shape. */}
      <img
        src="https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?scale-down-to=2048&width=2048&height=3072"
        alt="Our Story Background"
        className="absolute inset-0 w-full h-full object-fill"
        draggable="false"
      />

      {/* Content pinned inside the arch of the artwork */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="absolute left-[19%] right-[19%] top-[18%] sm:top-[15%] bottom-[22%] flex flex-col items-center text-center"
      >
        {/* Calligraphy Header */}
        <span className="font-script-calligraphy text-xl sm:text-3xl md:text-4xl text-[#8B0000] block mb-1">
          Our Story
        </span>
        <div className="w-14 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mb-2 sm:mb-4" />

        {/* Story Quote — sits on the cream arch panel, so dark ink reads best */}
        <p className="font-serif text-[8px] sm:text-[10px] md:text-xs text-[#3A0303] leading-relaxed italic font-semibold max-w-[58%] sm:max-w-md md:max-w-lg mx-auto">
          “Some souls are destined to find each other, no matter how long the journey. Vivek and Varshini's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever on December 19, 2026, they carry with them the blessings of everyone who has been part of their journey.”
        </p>

        {/* Ornate Frame with Photo Fitted Inside — floats over the temple sky */}
        <div className="mt-3 sm:mt-5 w-[62%] max-w-[420px] relative">
          <div className="relative w-full aspect-[1998/1492] flex items-center justify-center">
            {/* Photo Fitted Perfectly Inside the Frame Cutout */}
            <div className="absolute top-[9%] bottom-[9%] left-[10%] right-[10%] rounded-lg overflow-hidden bg-black shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                alt="Vivek & Varshini Couple Portrait"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative PNG Frame Overlay */}
            <img
              src="https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?scale-down-to=1024&width=1998&height=1492"
              alt="Ornate Decorative Gold Frame"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] z-10"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
