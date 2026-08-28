import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function CountdownSection() {
  const targetDate = new Date('2026-12-19T03:35:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#251F1C] text-[#FAF7F2] relative overflow-hidden">
      {/* Background glow & subtle ambient graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A664]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#C6A664]/40 flex items-center justify-center bg-[#C6A664]/10">
            <Heart className="w-5 h-5 text-[#C6A664]" />
          </div>

          <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#C6A664] block mb-3">
            Counting Down The Moments
          </span>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF7F2] font-light mb-4">
            Until We Say “I Do”
          </h2>

          <p className="font-serif italic text-lg text-[#E8DCCB] mb-14 max-w-xl mx-auto">
            December 19, 2026 • 03:35 AM • Kshatriya Kalyana Mandapam, Amalapuram
          </p>
        </motion.div>

        {/* Large Animated Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1E1916]/80 backdrop-blur-md border border-[#C6A664]/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:border-[#C6A664]/60 transition-colors"
            >
              <span className="font-serif text-5xl sm:text-7xl font-light text-[#FAF7F2] tracking-tight transition-transform duration-300 group-hover:scale-110">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-[#C6A664] mt-3">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
