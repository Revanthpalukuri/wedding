import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, Coffee, Utensils, Sparkles, Disc, Clock, Flame } from 'lucide-react';

export default function Schedule() {
  const weddingDayTimeline = [
    {
      time: '01:30 AM IST (Early Morning)',
      title: 'Suprabhatam & Mangala Snanam',
      desc: 'Holy herbal Mangala Snanam and traditional Nadaswaram auspicious melody.',
      icon: Sun,
    },
    {
      time: '02:30 AM IST',
      title: 'Gauri Puja & Kashi Yatra',
      desc: 'Bride’s Gauri Puja invocation for lifelong marital bliss & Groom’s traditional Kashi Yatra procession.',
      icon: Heart,
    },
    {
      time: '03:35 AM IST (Early Morning)',
      title: 'Sumuhurtham & Mangalsutra Dharana',
      desc: 'The divine moment of Jeelakarra Bellam & sacred Mangalsutra knot tying amidst Vedic mantras.',
      icon: Flame,
    },
    {
      time: '04:45 AM IST',
      title: 'Talambralu & Saptapadi (Seven Pheras)',
      desc: 'Joyous shower of golden rice pearls (Talambralu) and seven sacred vows around the Agni fire.',
      icon: Sparkles,
    },
    {
      time: '12:30 PM IST',
      title: 'Traditional Royal Kalyana Bhojanam',
      desc: 'Authentic 21-item traditional banana leaf wedding feast served with pure ghee, sweets, and payasam.',
      icon: Utensils,
    },
    {
      time: '07:00 PM IST',
      title: 'Grand Evening Reception & Concert',
      desc: 'Evening formal reception, classical sitar fusion orchestra, flower shower, and photo sessions.',
      icon: Disc,
    },
  ];

  return (
    <section id="schedule" className="py-24 px-6 bg-[#3A0303] text-[#FFF8E7] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#FFD700] block mb-2 font-semibold">
              Auspicious Timeline
            </span>
            <h2 className="font-heading-devanagari text-4xl sm:text-6xl text-[#FFF8E7] font-bold">
              Wedding Day Schedule
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />
            <p className="font-serif italic text-lg text-[#FFD700]">
              Sacred Vedic Muhurtham timeline for Saturday, December 19, 2026 at Kshatriya Kalyana Mandapam.
            </p>
          </motion.div>
        </div>

        {/* Schedule Timeline */}
        <div className="relative pl-6 sm:pl-0">
          {/* Animated Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {weddingDayTimeline.map((item, idx) => {
              const IconComp = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse text-left sm:text-right' : 'text-left'
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-12">
                    <div className="royal-maroon-panel p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/40 shadow-xl hover:border-[#FFD700] transition-colors">
                      <span className="inline-flex items-center gap-1.5 font-sans-clean text-xs font-bold uppercase tracking-widest text-[#FFD700] mb-2">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </span>
                      <h3 className="font-heading-devanagari text-2xl text-[#FFF8E7] mb-2 font-bold">
                        {item.title}
                      </h3>
                      <p className="font-sans-clean text-xs sm:text-sm text-[#FFF8E7]/85 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node Center */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-4 sm:top-auto w-12 h-12 rounded-full bg-[#3A0303] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg z-10 diya-glow">
                    <IconComp className="w-5 h-5 text-[#FFD700]" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
