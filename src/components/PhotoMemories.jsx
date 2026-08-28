import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';

export default function PhotoMemories() {
  const polaroids = [
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      caption: 'Sunset in Como • 2024',
      rotate: '-rotate-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      caption: 'First coffee in Paris • 2021',
      rotate: 'rotate-3',
    },
    {
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
      caption: 'Amalfi Coast proposal • 2023',
      rotate: '-rotate-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
      caption: 'Villa garden tour • 2025',
      rotate: 'rotate-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      caption: 'Lakeside picnic • 2025',
      rotate: '-rotate-3',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#C6A664] block mb-3">
              Cherished Keepsakes
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#3B312B] font-light">
              Polaroid Memories
            </h2>
            <div className="w-16 h-[1px] bg-[#C6A664] mx-auto my-6" />
            <p className="font-serif italic text-lg text-[#3B312B]/70">
              Unfiltered moments of joy captured along the way.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll / Grid Container */}
        <div className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 snap-x scrollbar-none justify-start md:justify-center">
          {polaroids.map((item, idx) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`shrink-0 w-72 sm:w-80 polaroid-card rounded-lg snap-center ${item.rotate} hover:rotate-0 hover:z-20 transition-all duration-500`}
            >
              <div className="h-72 w-full overflow-hidden rounded bg-gray-100 mb-4">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="font-serif italic text-base text-[#3B312B]">
                  {item.caption}
                </span>
                <Heart className="w-4 h-4 text-[#C6A664] fill-[#C6A664]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
