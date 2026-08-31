import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CountingDaysMagic() {
  // Target Wedding Muhurtham: 19th December 2026 at 03:35 AM early morning
  const targetDate = new Date('2026-12-19T03:35:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [spawnedPhotos, setSpawnedPhotos] = useState([]);
  const nextPhotoRef = useRef(0);
  const spawnIdRef = useRef(0);
  const lastSpawnPosRef = useRef(null);
  const sectionRef = useRef(null);

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isMarried: false,
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isMarried: true };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Magic deck photos
  const magicPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      caption: 'Lakeside Pre-wedding Blessing',
    },
    {
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      caption: 'Traditional Ethnic Elegance',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      caption: 'Kshatriya Kalyana Mandapam Courtyard',
    },
    {
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
      caption: 'Ring Ceremony Memories',
    },
  ];

  // Spawn the next photo at the cursor point with a subtle random tilt.
  // Each photo fades away smoothly after lingering.
  const spawnPhotoAt = (clientX, clientY, target) => {
    const rect = target.getBoundingClientRect();
    const photo = magicPhotos[nextPhotoRef.current % magicPhotos.length];
    nextPhotoRef.current += 1;
    spawnIdRef.current += 1;
    const id = spawnIdRef.current;
    lastSpawnPosRef.current = { x: clientX, y: clientY };
    const entry = {
      id,
      url: photo.url,
      caption: photo.caption,
      x: clientX - rect.left,
      y: clientY - rect.top,
      rotate: Math.random() * 20 - 10,
    };
    setSpawnedPhotos((prev) => [...prev.slice(-5), entry]);
    setTimeout(() => {
      setSpawnedPhotos((prev) => prev.filter((p) => p.id !== id));
    }, 1100);
  };

  // Photos appear ONLY when the mouse/touch is moving (no spawn when idle)
  const handlePointerMove = (e) => {
    const last = lastSpawnPosRef.current;
    if (!last) {
      spawnPhotoAt(e.clientX, e.clientY, e.currentTarget);
      return;
    }
    const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y);
    if (dist > 65) {
      spawnPhotoAt(e.clientX, e.clientY, e.currentTarget);
    }
  };

  // Touch support for mobile: spawn photos only while actively dragging/moving
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    if (!touch || !sectionRef.current) return;
    const last = lastSpawnPosRef.current;
    if (!last || Math.hypot(touch.clientX - last.x, touch.clientY - last.y) > 65) {
      spawnPhotoAt(touch.clientX, touch.clientY, sectionRef.current);
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    if (!touch || !sectionRef.current) return;
    spawnPhotoAt(touch.clientX, touch.clientY, sectionRef.current);
  };

  const stopTrail = () => {
    lastSpawnPosRef.current = null;
  };

  const formatDigits = (val) => String(val).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={stopTrail}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={stopTrail}
      onTouchCancel={stopTrail}
      className="relative w-full aspect-[1872/3344] min-h-[max(100svh,calc(100vw*3344/1872))] overflow-hidden bg-[#F7F2E7] select-none"
    >
      {/* Full Artwork Image — rendered with full natural 1872:3344 portrait aspect ratio so full artwork is scrollable */}
      <img
        src="/countdown_bg.png"
        alt="Countdown Temple Artwork Background"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        draggable="false"
      />

      {/* Magic Photo Trail — photos with NO border appear only when moving cursor/touch */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {spawnedPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.4, rotate: photo.rotate * 1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: photo.rotate }}
              exit={{ opacity: 0, scale: 0.6, y: 15 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="absolute w-32 h-44 sm:w-44 sm:h-60 md:w-56 md:h-72 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-none border-0"
              style={{ left: photo.x, top: photo.y, x: '-50%', y: '-50%' }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                draggable="false"
                className="w-full h-full object-cover rounded-2xl border-0 outline-none"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Content Layout Pinned to the Cream Arch Panel */}
      <div className="absolute inset-x-0 top-0 bottom-[45%] flex flex-col items-center justify-start text-center px-4 z-20 pointer-events-none">
        
        {/* Title: Counting the Days */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-[14%] sm:pt-[12%] md:pt-[10%]"
        >
          <h2 className="font-script-calligraphy text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#580B1A] font-normal leading-tight drop-shadow-sm">
            {timeLeft.isMarried ? 'Celebrating Our Holy Union' : 'Counting the Days'}
          </h2>
          <p className="font-sans-clean text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8B0000] font-bold mt-1 sm:mt-2">
            {timeLeft.isMarried
              ? '✨ Vivek & Varshini are Now Married! ✨'
              : 'Towards Shubh Muhurtham • 19th Dec 2026, 03:35 AM'}
          </p>
        </motion.div>

        {/* Framer-Style Luxury White Countdown Cards (D : H : M : S) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-[6%] sm:mt-[5%] md:mt-[4%] flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-2xl px-2"
        >
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#580B1A]/10 w-[clamp(46px,11vw,84px)] h-[clamp(50px,12vw,92px)] flex items-center justify-center">
              <span className="font-serif font-bold text-[#1A1A1A] text-[clamp(18px,4.5vw,36px)] tracking-tight tabular-nums">
                {formatDigits(timeLeft.days)}
              </span>
            </div>
            <span className="font-sans-clean font-semibold uppercase text-[clamp(9px,2vw,14px)] text-[#580B1A]/80 tracking-widest mt-1.5 sm:mt-2">
              D
            </span>
          </div>

          <span className="text-[clamp(16px,3.5vw,26px)] font-light text-[#580B1A]/50 self-start mt-[clamp(12px,3vw,26px)]">
            :
          </span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#580B1A]/10 w-[clamp(46px,11vw,84px)] h-[clamp(50px,12vw,92px)] flex items-center justify-center">
              <span className="font-serif font-bold text-[#1A1A1A] text-[clamp(18px,4.5vw,36px)] tracking-tight tabular-nums">
                {formatDigits(timeLeft.hours)}
              </span>
            </div>
            <span className="font-sans-clean font-semibold uppercase text-[clamp(9px,2vw,14px)] text-[#580B1A]/80 tracking-widest mt-1.5 sm:mt-2">
              H
            </span>
          </div>

          <span className="text-[clamp(16px,3.5vw,26px)] font-light text-[#580B1A]/50 self-start mt-[clamp(12px,3vw,26px)]">
            :
          </span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#580B1A]/10 w-[clamp(46px,11vw,84px)] h-[clamp(50px,12vw,92px)] flex items-center justify-center">
              <span className="font-serif font-bold text-[#1A1A1A] text-[clamp(18px,4.5vw,36px)] tracking-tight tabular-nums">
                {formatDigits(timeLeft.minutes)}
              </span>
            </div>
            <span className="font-sans-clean font-semibold uppercase text-[clamp(9px,2vw,14px)] text-[#580B1A]/80 tracking-widest mt-1.5 sm:mt-2">
              M
            </span>
          </div>

          <span className="text-[clamp(16px,3.5vw,26px)] font-light text-[#580B1A]/50 self-start mt-[clamp(12px,3vw,26px)]">
            :
          </span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#580B1A]/10 w-[clamp(46px,11vw,84px)] h-[clamp(50px,12vw,92px)] flex items-center justify-center">
              <span className="font-serif font-bold text-[#1A1A1A] text-[clamp(18px,4.5vw,36px)] tracking-tight tabular-nums">
                {formatDigits(timeLeft.seconds)}
              </span>
            </div>
            <span className="font-sans-clean font-semibold uppercase text-[clamp(9px,2vw,14px)] text-[#580B1A]/80 tracking-widest mt-1.5 sm:mt-2">
              S
            </span>
          </div>
        </motion.div>

        {/* Touch here for magic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-[6%] sm:mt-[5%] md:mt-[4%]"
        >
          <h3 className="font-script-calligraphy text-3xl sm:text-5xl md:text-6xl text-[#580B1A] font-normal drop-shadow-sm">
            Touch here for magic
          </h3>
          <p className="font-sans-clean text-[9px] sm:text-xs tracking-widest text-[#8B0000]/80 uppercase font-semibold mt-1">
            ✨ Move your cursor or swipe around to reveal memories ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
