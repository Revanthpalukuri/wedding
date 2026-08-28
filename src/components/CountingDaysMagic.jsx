import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ScratchCardCountdown from './ScratchCardCountdown';

export default function CountingDaysMagic() {
  // Target Wedding Muhurtham: 19th December 2026 at 03:35 AM early morning
  const targetDate = new Date('2026-12-19T03:35:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [spawnedPhotos, setSpawnedPhotos] = useState([]);
  const [isCursorInside, setIsCursorInside] = useState(false);
  const nextPhotoRef = useRef(0);
  const spawnIdRef = useRef(0);
  const lastSpawnPosRef = useRef(null);
  const cursorPosRef = useRef(null);
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

  // Stacked Polaroid Deck photos
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

  // Spawn the next photo of the set at the cursor point with a random tilt.
  // Each photo lingers briefly, then fades away on its own (image-trail effect).
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
      rotate: Math.random() * 32 - 16,
    };
    setSpawnedPhotos((prev) => [...prev.slice(-5), entry]);
    setTimeout(() => {
      setSpawnedPhotos((prev) => prev.filter((p) => p.id !== id));
    }, 1000);
  };

  // Photos appear automatically wherever the cursor moves — no click needed.
  // A new one drops every ~70px of cursor travel inside this section.
  const handlePointerMove = (e) => {
    cursorPosRef.current = { x: e.clientX, y: e.clientY };
    setIsCursorInside(true);
    const last = lastSpawnPosRef.current;
    if (!last) {
      spawnPhotoAt(e.clientX, e.clientY, e.currentTarget);
      return;
    }
    const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y);
    if (dist > 70) {
      spawnPhotoAt(e.clientX, e.clientY, e.currentTarget);
    }
  };

  // Even with the cursor resting still inside the section, keep the magic
  // flowing — a fresh photo pops at the cursor position every 350ms
  useEffect(() => {
    if (!isCursorInside) return;
    const autoSpawn = setInterval(() => {
      const pos = cursorPosRef.current;
      if (pos && sectionRef.current) {
        spawnPhotoAt(pos.x, pos.y, sectionRef.current);
      }
    }, 350);
    return () => clearInterval(autoSpawn);
  }, [isCursorInside]);

  // Touch support: touchmove keeps firing even while the page scrolls
  // (pointermove gets cancelled by scrolling), so the trail follows the finger
  const handleTouch = (e) => {
    const touch = e.touches[0];
    if (!touch || !sectionRef.current) return;
    cursorPosRef.current = { x: touch.clientX, y: touch.clientY };
    setIsCursorInside(true);
    const last = lastSpawnPosRef.current;
    if (!last || Math.hypot(touch.clientX - last.x, touch.clientY - last.y) > 70) {
      spawnPhotoAt(touch.clientX, touch.clientY, sectionRef.current);
    }
  };

  const stopTrail = () => {
    setIsCursorInside(false);
    cursorPosRef.current = null;
    lastSpawnPosRef.current = null;
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={stopTrail}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={stopTrail}
      onTouchCancel={stopTrail}
      className="relative min-h-screen bg-[#F7F2E7] text-[#3A0303] py-20 px-4 flex flex-col justify-between overflow-hidden"
    >
      {/* Carved Sandstone Relief Pattern Texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8B0000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Magic Photo Trail — photos follow the cursor across this whole section */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {spawnedPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.3, rotate: photo.rotate * 1.6 }}
              animate={{ opacity: 1, scale: 1, rotate: photo.rotate }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute w-32 h-40 sm:w-40 sm:h-52 bg-white p-2 pb-5 rounded-xl shadow-2xl border border-amber-300"
              style={{ left: photo.x, top: photo.y, x: '-50%', y: '-50%' }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                draggable="false"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Title: Counting the Days / Happily Married */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="font-script-calligraphy text-4xl sm:text-6xl text-[#660B14] block mb-2 font-normal">
            {timeLeft.isMarried ? 'Celebrating Our Holy Union' : 'Counting the Days'}
          </span>
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-[#8B0000] font-bold">
            {timeLeft.isMarried
              ? '✨ Vivek & Varshini are Now Married! ✨'
              : 'Towards Shubh Muhurtham • 19th Dec 2026, 03:35 AM'}
          </p>

          {/* Royal Mandap Double Arch Doors Countdown */}
          <ScratchCardCountdown
            days={timeLeft.days}
            hours={timeLeft.hours}
            minutes={timeLeft.minutes}
            seconds={timeLeft.seconds}
            isMarried={timeLeft.isMarried}
          />
        </motion.div>

        {/* Section: Touch here for Magic — move the cursor anywhere in this slide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="my-12 relative w-full"
        >
          <span className="font-script-calligraphy text-3xl sm:text-5xl text-[#660B14] block mb-4 font-normal">
            Touch here for Magic
          </span>
        </motion.div>
      </div>
    </section>
  );
}
