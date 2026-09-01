import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Dynamically load all images placed in src/images/our_story/
const storyImagesMap = import.meta.glob('../images/our_story/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' });
const storyPhotos = Object.values(storyImagesMap);

export default function OurStory() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (storyPhotos.length === 0) return;
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % storyPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [storyPhotos.length]);

  return (
    <section
      id="story"
      className="relative w-full aspect-[2/3] min-h-[calc(100vw*1.5)] bg-[#210202] text-[#FFF8E7] overflow-hidden select-none"
    >
      {/* Full-Bleed Artwork Image displaying complete uncropped 2048:3072 (2:3) aspect ratio */}
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
        className="absolute top-[6%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <span className="font-serif text-[clamp(10px,1.8vw,26px)] uppercase tracking-[0.24em] text-[#EAD7BD] font-bold drop-shadow-sm">
          Meet The
        </span>
      </motion.div>

      {/* 2. Bride & Groom Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-[9.5%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <span className="font-script-calligraphy text-[clamp(22px,4.5vw,62px)] text-[#D7B480] drop-shadow-sm leading-tight">
          Bride &amp; Groom
        </span>
      </motion.div>

      {/* 3. Our Story Large Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-[23%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <h2 className="font-script-calligraphy text-[clamp(34px,6.8vw,90px)] text-[#D1B17A] leading-none drop-shadow-md">
          Our Story
        </h2>
      </motion.div>

      {/* 4. Story Paragraph - Perfectly bounded within the cream arch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[62%] sm:w-[58%] max-w-[640px] text-center pointer-events-none z-10 px-2"
      >
        <p className="font-serif text-[clamp(7.5px,1.05vw,13.5px)] text-[rgb(70,1,1)] leading-[1.6] sm:leading-[1.75] italic font-semibold drop-shadow-xs text-center">
          Some souls are destined to find each other, no matter how long the journey. Vivek and Varshini's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever on December 19, 2026, they carry with them not only dreams of a beautiful future but also the blessings of everyone who has been part of their journey. With hearts full of love and gratitude, they invite you to celebrate the beginning of their forever.
        </p>
      </motion.div>

      {/* 5. Center Golden Frame with Changing Photos matching Framer exact portrait ratio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[73%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] sm:w-[40%] md:w-[38%] pointer-events-auto z-10"
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
              sizes="(max-width: 768px) 60vw, 420px"
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
