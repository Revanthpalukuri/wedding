import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section id="story" className="relative min-h-screen text-[#FFF8E7] py-16 sm:py-24 px-4 overflow-hidden border-y-4 border-[#D4AF37] flex items-center justify-center bg-[#210202]">
      {/* Full-Bleed Full Screen Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?scale-down-to=2048&width=2048&height=3072"
          alt="Our Story Background"
          className="w-full h-full object-cover object-center opacity-100 transition-all duration-700"
        />
        {/* Soft edge vignetting for smooth border transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#210202]/30 via-transparent to-[#210202]/40 pointer-events-none" />
      </div>

      {/* Main Center Content Overlay Container */}
      <div className="max-w-xl md:max-w-3xl lg:max-w-4xl w-full mx-auto text-center relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-transparent text-[#FFF8E7] p-2 sm:p-4 relative"
        >
          {/* Calligraphy Header */}
          <span className="font-script-calligraphy text-2xl sm:text-3xl md:text-4xl text-[#FFD700] block mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Our Story
          </span>
          <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-3 sm:mb-4 shadow-md" />

          {/* Plain Story Context Paragraph */}
          <p className="font-serif text-[10px] sm:text-xs md:text-sm text-[#FFF8E7] leading-relaxed max-w-md md:max-w-lg mx-auto italic font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,1)] px-2">
            “Some souls are destined to find each other, no matter how long the journey. Vivek and Varshini's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever on December 19, 2026, they carry with them the blessings of everyone who has been part of their journey.”
          </p>

          {/* Larger Ornate Frame with Photo Fitted Inside */}
          <div className="mt-5 sm:mt-8 max-w-[340px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[580px] mx-auto relative p-1 sm:p-2">
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
      </div>
    </section>
  );
}
