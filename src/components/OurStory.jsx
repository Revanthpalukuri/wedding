import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurStory() {
  const [photoIndex, setPhotoIndex] = useState(0);

  // Changing couple photos matching Framer reference
  const storyPhotos = [
    'https://framerusercontent.com/images/mpTuXe92kxp4o8MtgrakEGpuQPA.jpeg?width=768&height=1376',
    'https://framerusercontent.com/images/123OKdea8oPhNCq0uetsHB8OcDw.jpeg?width=768&height=1376',
    'https://framerusercontent.com/images/Hroe8U2N75359CjJrk9AA0WAFk.jpeg?width=768&height=1376',
    'https://framerusercontent.com/images/HHhvRybKYYn0bwE2ivhhQVsGc5A.jpeg?width=768&height=1376',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % storyPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [storyPhotos.length]);

  return (
    <section
      id="story"
      className="relative w-full aspect-[2048/3072] min-h-[max(100svh,calc(100vw*3072/2048))] bg-[#210202] text-[#FFF8E7] overflow-hidden select-none"
    >
      {/* Full-Bleed Artwork Image displaying complete uncropped 2048:3072 aspect ratio in a scrolling way */}
      <img
        src="https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?scale-down-to=2048&width=2048&height=3072"
        alt="Our Story Temple Background Artwork"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable="false"
      />

      {/* 1. MEET THE Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[6.5%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <span className="font-serif text-[11px] sm:text-lg md:text-2xl lg:text-3xl uppercase tracking-[0.24em] text-[#EAD7BD] font-bold drop-shadow-sm">
          Meet The
        </span>
      </motion.div>

      {/* 2. Bride & Groom Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-[10.2%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <span className="font-script-calligraphy text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#D7B480] drop-shadow-sm">
          Bride &amp; Groom
        </span>
      </motion.div>

      {/* 3. Our Story Large Header (Moved down) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-[25.5%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <h2 className="font-script-calligraphy text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#D1B17A] leading-none drop-shadow-md">
          Our Story
        </h2>
      </motion.div>

      {/* 4. Story Paragraph (Moved down into the cream parchment arch) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="absolute top-[35.5%] left-1/2 -translate-x-1/2 w-[82%] sm:w-[75%] md:w-[70%] max-w-[660px] text-center pointer-events-none z-10 px-3"
      >
        <p className="font-serif text-[8.5px] sm:text-xs md:text-sm lg:text-[15px] text-[rgb(70,1,1)] leading-relaxed italic font-semibold drop-shadow-xs">
          Some souls are destined to find each other, no matter how long the journey. Vivek and Varshini's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever on December 19, 2026, they carry with them not only dreams of a beautiful future but also the blessings of everyone who has been part of their journey. With hearts full of love and gratitude, they invite you to celebrate the beginning of their forever.
        </p>
      </motion.div>

      {/* 5. Center Golden Frame with Changing Photos matching Framer exact portrait ratio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] sm:w-[50%] md:w-[42%] max-w-[420px] pointer-events-auto z-10"
      >
        {/* Frame Outer Shell with Framer's exact 0.74 (1492/2016) portrait aspect ratio */}
        <div className="relative w-full aspect-[1492/2016] flex items-center justify-center">
          
          {/* Inner Photo Container (Centered inside the golden frame opening) */}
          <div className="absolute top-[12%] bottom-[12%] left-[13%] right-[13%] rounded-[6px] overflow-hidden bg-black/90 shadow-2xl z-0">
            {storyPhotos.map((photoUrl, idx) => (
              <img
                key={photoUrl}
                src={photoUrl}
                alt={`Vivek & Varshini Portrait ${idx + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out pointer-events-none ${
                  photoIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.8s ease' }}
              />
            ))}
          </div>

          {/* Decorative Gold Frame PNG Overlay (Rotated -90deg to form vertical portrait frame, matching Framer) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
            <img
              decoding="auto"
              loading="lazy"
              width="1998"
              height="1492"
              src="https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?width=1998&height=1492"
              srcSet="https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?scale-down-to=512&width=1998&height=1492 512w, https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?scale-down-to=1024&width=1998&height=1492 1024w, https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?width=1998&height=1492 1998w"
              sizes="calc(100vw * 0.4938)"
              alt="Gold ornate location frame overlay"
              className="w-[135%] h-[135%] max-w-none object-contain -rotate-90 drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
              draggable="false"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
