import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventsList = [
    {
      title: 'Haldi Ceremony',
      date: '17 December 2026',
      time: '10:00 AM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu',
      description: 'Join us as we celebrate this beautiful auspicious occasion with turmeric blessings, love, and joyful folk music.',
      image: 'https://framerusercontent.com/images/AiodKv9zJ0BlEmWhyX3vawMBKn4.webp?width=1086&height=1448',
    },
    {
      title: 'Sangeet Night',
      date: '18 December 2026',
      time: '06:30 PM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu',
      description: 'An evening filled with energetic family dance performances, classical fusion melodies, and delightful dinner.',
      image: 'https://framerusercontent.com/images/zjqtpqy1i6UVkVV7j0yqT92xg.webp?width=1086&height=1448',
    },
    {
      title: 'Wedding Ceremony',
      date: '19 December 2026',
      time: '03:35 AM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu',
      description: 'Witness our sacred Vedic vows, Jeelakarra Bellam, and traditional Mangalsutra rituals in the presence of loved ones.',
      image: 'https://framerusercontent.com/images/89YF55J2ugFQJf4BGdUezGe9VYo.webp?width=1086&height=1448',
    },
    {
      title: 'Grand Reception',
      date: '19 December 2026',
      time: '07:00 PM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu',
      description: 'Celebrate our holy union with authentic traditional royal feast, warm blessings, and live musical orchestra.',
      image: 'https://framerusercontent.com/images/R1S7l0vmwR8QKFU0cqM6naz69g.webp?width=1086&height=1448',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventsList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventsList.length) % eventsList.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [eventsList.length]);

  const activeEvent = eventsList[currentSlide];

  return (
    <section id="events" className="relative min-h-screen py-16 sm:py-24 px-4 flex items-center justify-center overflow-hidden">
      {/* Full-Bleed Background Image matching Framer PAGE 3 */}
      <img
        decoding="auto"
        loading="lazy"
        src="https://framerusercontent.com/images/D4pzTjtAOLwhyi0UPGweoWoztA.webp?width=3008&height=2080"
        srcSet="https://framerusercontent.com/images/D4pzTjtAOLwhyi0UPGweoWoztA.webp?scale-down-to=512&width=3008&height=2080 512w, https://framerusercontent.com/images/D4pzTjtAOLwhyi0UPGweoWoztA.webp?scale-down-to=1024&width=3008&height=2080 1024w, https://framerusercontent.com/images/D4pzTjtAOLwhyi0UPGweoWoztA.webp?scale-down-to=2048&width=3008&height=2080 2048w, https://framerusercontent.com/images/D4pzTjtAOLwhyi0UPGweoWoztA.webp?width=3008&height=2080 3008w"
        alt="Wedding Events Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable="false"
      />

      {/* Outer Royal Mandap Shell matching Framer PAGE 3 */}
      <div className="relative w-full max-w-[1100px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[36px] sm:rounded-[40px] p-3 sm:p-6 shadow-[0_12px_40px_rgba(45,28,10,0.2)] overflow-hidden bg-[rgb(82,72,48)]"
        >
          {/* Inner Texture Background */}
          <div
            className="absolute inset-0 bg-cover bg-top opacity-100 pointer-events-none"
            style={{ backgroundImage: 'url(https://framerusercontent.com/images/tCmbsmXAUth2weao58tGilF28.webp?width=941&height=1672)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-[#FFFDF7]/90 pointer-events-none" />

          {/* Inner Card with Double Gold/Blue Borders & 4 Corner Ornaments */}
          <div
            className="relative z-10 grid grid-cols-1 gap-4 sm:gap-6 rounded-[28px] sm:rounded-[32px] p-4 sm:p-8 bg-gradient-to-b from-white/95 to-[#FFFAF2]/95 border-2 border-[rgb(7,95,203)]"
            style={{
              boxShadow: 'inset 0 0 0 4px rgb(215, 162, 42), inset 0 0 0 6px rgb(10, 48, 127)',
            }}
          >
            {/* 4 Corner Ornaments from Framer reference */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute top-2 left-2 w-6 h-6 pointer-events-none">
              <path d="M3 12C8 12 12 8 12 3C12 8 16 12 21 12C16 12 12 16 12 21C12 16 8 12 3 12Z" fill="rgb(215, 162, 42)" />
              <circle cx="12" cy="12" r="2" fill="rgb(10, 48, 127)" />
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute top-2 right-2 w-6 h-6 pointer-events-none rotate-90">
              <path d="M3 12C8 12 12 8 12 3C12 8 16 12 21 12C16 12 12 16 12 21C12 16 8 12 3 12Z" fill="rgb(7, 95, 203)" />
              <circle cx="12" cy="12" r="2" fill="rgb(10, 48, 127)" />
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute bottom-2 left-2 w-6 h-6 pointer-events-none -rotate-90">
              <path d="M3 12C8 12 12 8 12 3C12 8 16 12 21 12C16 12 12 16 12 21C12 16 8 12 3 12Z" fill="rgb(7, 95, 203)" />
              <circle cx="12" cy="12" r="2" fill="rgb(10, 48, 127)" />
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute bottom-2 right-2 w-6 h-6 pointer-events-none rotate-180">
              <path d="M3 12C8 12 12 8 12 3C12 8 16 12 21 12C16 12 12 16 12 21C12 16 8 12 3 12Z" fill="rgb(215, 162, 42)" />
              <circle cx="12" cy="12" r="2" fill="rgb(10, 48, 127)" />
            </svg>

            {/* Subtitle */}
            <div className="text-left px-1">
              <span className="font-sans-clean text-sm font-semibold tracking-normal text-[rgb(7,95,203)] opacity-90">
                Vivek &amp; VARSHINI
              </span>
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,0.82fr)_minmax(0,1fr)] gap-6 sm:gap-8 items-start">
              
              {/* Photo Box with Controls */}
              <div className="relative w-full rounded-[20px] overflow-hidden bg-[#F5F5F5] p-3 border-2 border-[rgb(7,95,203)] shadow-[inset_0_0_0_2px_rgb(215,162,42),inset_0_0_0_4px_rgba(255,255,255,0.92),0_8px_18px_rgba(0,0,0,0.08)]">
                <div className="relative w-full aspect-[4/5] rounded-[14px] overflow-hidden bg-white/80">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeEvent.title}
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      loading="lazy"
                      initial={{ opacity: 0.1, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.1, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-contain block hover:scale-105 transition-transform duration-350"
                    />
                  </AnimatePresence>
                </div>

                {/* Arrow Buttons & Dot Indicators */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex gap-2 pointer-events-auto">
                    <button
                      onClick={prevSlide}
                      type="button"
                      aria-label="Previous slide"
                      className="w-10 h-10 rounded-full border-none cursor-pointer bg-white/90 text-[rgb(7,95,203)] inline-flex items-center justify-center text-2xl font-bold shadow-[0_3px_12px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgb(82,72,48)] hover:scale-110 transition-transform"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextSlide}
                      type="button"
                      aria-label="Next slide"
                      className="w-10 h-10 rounded-full border-none cursor-pointer bg-white/90 text-[rgb(7,95,203)] inline-flex items-center justify-center text-2xl font-bold shadow-[0_3px_12px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgb(82,72,48)] hover:scale-110 transition-transform"
                    >
                      ›
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="flex gap-2 pointer-events-auto bg-black/20 backdrop-blur-xs px-2.5 py-1.5 rounded-full">
                    {eventsList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        type="button"
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx
                            ? 'w-5 bg-[rgb(10,48,127)]'
                            : 'w-2.5 bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Text Details */}
              <div className="flex flex-col gap-3.5 text-left px-1 sm:px-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEvent.title}
                    initial={{ opacity: 0.1, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0.1, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3.5"
                  >
                    <h2 className="m-0 font-heading-devanagari text-3xl sm:text-5xl lg:text-6xl text-[rgb(47,36,23)] font-bold tracking-tight leading-none">
                      {activeEvent.title}
                    </h2>

                    {/* Meta Chips */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 items-center text-xs sm:text-sm font-sans-clean text-[rgb(47,36,23)] opacity-90">
                      {/* Date */}
                      <div className="inline-flex items-center gap-1.5">
                        <span className="inline-flex text-[rgb(7,95,203)]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M8 3V7M16 3V7M3 10H21" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                        </span>
                        <span className="font-medium text-[rgb(47,36,23)]">{activeEvent.date}</span>
                      </div>

                      {/* Time */}
                      <div className="inline-flex items-center gap-1.5">
                        <span className="inline-flex text-[rgb(7,95,203)]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M12 7V12L15.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span className="font-medium text-[rgb(47,36,23)]">{activeEvent.time}</span>
                      </div>

                      {/* Venue */}
                      <div className="inline-flex items-center gap-1.5">
                        <span className="inline-flex text-[rgb(7,95,203)]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 21C12 21 19 14.5 19 9.8C19 6.1 15.9 3 12 3C8.1 3 5 6.1 5 9.8C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
                            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                        </span>
                        <span className="font-medium text-[rgb(47,36,23)]">{activeEvent.venue}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="m-0 text-xs sm:text-sm leading-relaxed text-[rgb(47,36,23)] opacity-85 font-sans-clean">
                      {activeEvent.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <a
                        href={activeEvent.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-full no-underline bg-[rgb(10,48,127)] text-white border border-[rgb(215,162,42)] text-xs font-semibold uppercase tracking-wider shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer"
                      >
                        View Location
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
