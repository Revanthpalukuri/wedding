import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Default Story Slide Photos
const defaultStoryImages = [
  'https://framerusercontent.com/images/mpTuXe92kxp4o8MtgrakEGpuQPA.jpeg?width=768&height=1376',
  'https://framerusercontent.com/images/123OKdea8oPhNCq0uetsHB8OcDw.jpeg?width=768&height=1376',
  'https://framerusercontent.com/images/Hroe8U2N75359CjJrk9AA0WAFk.jpeg?width=768&height=1376',
  'https://framerusercontent.com/images/HHhvRybKYYn0bwE2ivhhQVsGc5A.jpeg?width=768&height=1376',
];

// Dynamically load any local images placed in src/images/our_story/
const storyImagesMap = import.meta.glob('../images/our_story/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' });
const localPhotos = Object.values(storyImagesMap);
const storyPhotos = localPhotos.length > 0 ? localPhotos : defaultStoryImages;

export default function OurStory() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (storyPhotos.length <= 1) return;
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % storyPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [storyPhotos.length]);

  return (
    <section
      id="story"
      className="relative w-full aspect-[2/3] sm:aspect-[0.562061] min-h-[calc(100vw*1.5)] sm:min-h-0 bg-[#210202] text-[#FFF8E7] overflow-hidden select-none"
      data-framer-name="PAGE 5"
    >
      {/* 1. Full-Bleed Artwork Image (Complete Uncropped 2048x3072 Temple Arch Background) */}
      <img
        src="https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?width=2048&height=3072"
        srcSet="https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?scale-down-to=1024&width=2048&height=3072 682w, https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?scale-down-to=2048&width=2048&height=3072 1365w, https://framerusercontent.com/images/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp?width=2048&height=3072 2048w"
        sizes="(min-width: 1920px) 100vw, (min-width: 1200px) 100vw, 100vw"
        alt="Our Story Background Artwork"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable="false"
      />

      {/* 2. MEET THE Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[5.8%] sm:top-[6%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <span
          className="uppercase tracking-[0.24em] font-bold drop-shadow-sm text-[#EAD7BD]"
          style={{
            fontFamily: '"Elsie Swash Caps", "Marcellus", serif',
            fontSize: 'clamp(11px, 1.9vw, 26px)',
          }}
        >
          Meet The
        </span>
      </motion.div>

      {/* 3. Bride & Groom Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-[9.2%] sm:top-[9.6%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <span
          className="text-[#D7B480] drop-shadow-sm leading-tight"
          style={{
            fontFamily: '"Luxurious Script", "Great Vibes", cursive',
            fontSize: 'clamp(24px, 4.4vw, 60px)',
          }}
        >
          Bride &amp; Groom
        </span>
      </motion.div>

      {/* 4. Our Story Large Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-[21.5%] sm:top-[22.5%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none z-10 px-2"
      >
        <h2
          className="text-[#D1B17A] leading-none drop-shadow-md"
          style={{
            fontFamily: '"Luxurious Script", "Great Vibes", cursive',
            fontSize: 'clamp(36px, 6.8vw, 92px)',
          }}
        >
          Our Story
        </h2>
      </motion.div>

      {/* 5. Story Paragraph Content - Nested inside the cream temple arch window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="absolute top-[32%] sm:top-[33%] left-1/2 -translate-x-1/2 w-[62%] sm:w-[56%] md:w-[52%] max-w-[640px] text-center pointer-events-none z-10 px-2"
      >
        <p
          className="font-serif italic font-semibold text-center drop-shadow-xs"
          style={{
            fontSize: 'clamp(7.5px, 1.1vw, 14.5px)',
            color: 'rgb(70, 1, 1)',
            lineHeight: 1.6,
          }}
        >
          Some souls are destined to find each other, no matter how long the journey. Vivek and Varshini's story wasn't just about falling in love—it was about finding peace in each other's presence, strength in every challenge, and a home in each other's hearts. Through every smile, every tear, and every moment in between, their love only grew deeper. Today, as they take the sacred vows of forever on December 19, 2026, they carry with them not only dreams of a beautiful future but also the blessings of everyone who has been part of their journey. With hearts full of love and gratitude, they invite you to celebrate the beginning of their forever.
        </p>
      </motion.div>

      {/* 6. Center Golden Frame & Responsive Rotating Photo Slideshow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[73%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] sm:w-[40%] md:w-[36%] max-w-[450px] pointer-events-auto z-10"
      >
        {/* Frame Outer Shell maintaining Framer's exact portrait proportion (1492/2016) */}
        <div className="relative w-full aspect-[1492/2016] flex items-center justify-center">
          
          {/* Inner Photo Container (Centered perfectly inside the golden frame window) */}
          <div className="absolute top-[12%] bottom-[12%] left-[13%] right-[13%] rounded-[6px] overflow-hidden bg-black/90 shadow-2xl z-0">
            {storyPhotos.map((photoUrl, idx) => (
              <img
                key={photoUrl + idx}
                src={photoUrl}
                alt={`Vivek & Varshini Portrait ${idx + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out pointer-events-none ${
                  photoIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transition: 'opacity 0.8s ease',
                  willChange: 'opacity',
                }}
              />
            ))}
          </div>

          {/* Decorative Gold Frame PNG Overlay (Rotated -90deg to form vertical portrait frame) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
            <img
              decoding="auto"
              loading="lazy"
              width="1998"
              height="1492"
              src="https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?width=1998&height=1492"
              srcSet="https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?scale-down-to=512&width=1998&height=1492 512w, https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?scale-down-to=1024&width=1998&height=1492 1024w, https://framerusercontent.com/images/a6l8leK3Q1bKzvdCCwf3nSzy7E.png?width=1998&height=1492 1998w"
              sizes="(max-width: 768px) 54vw, 450px"
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
