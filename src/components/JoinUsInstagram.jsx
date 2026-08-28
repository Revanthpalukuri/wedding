import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera } from 'lucide-react';

export default function JoinUsInstagram() {
  const whatsappUrl = 'https://wa.me/?text=Hi%20Vivek%20%26%20Varshini,%20I%20would%20love%20to%20attend%20your%20wedding!';
  const instagramUrl = 'https://instagram.com';

  return (
    <section className="relative bg-[#210202] text-[#FFF8E7] py-12 sm:py-20 px-4 overflow-hidden border-b-4 border-[#D4AF37] flex items-center justify-center min-h-screen">
      {/* Full-Bleed Full Screen Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/6f9AxarIs54UBYT1Lrm4ws9V764.webp?scale-down-to=2048&width=3008&height=2080"
          alt="Will You Join Us & Instagram Background"
          className="w-full h-full object-cover object-center opacity-100 transition-all duration-700"
        />
        {/* Soft edge vignetting for smooth border transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#210202]/30 via-transparent to-[#210202]/40 pointer-events-none" />
      </div>

      <div className="max-w-xl mx-auto space-y-6 sm:space-y-10 relative z-10 w-full my-auto text-center">
        {/* Card 1: Will You Join Us? (WhatsApp RSVP) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-transparent text-[#FFF8E7] p-2 relative"
        >
          {/* Calligraphic Heading */}
          <span className="font-script-calligraphy text-xl sm:text-3xl md:text-4xl text-[#FFD700] block mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Will You Join Us?
          </span>

          <p className="font-serif text-[10px] sm:text-xs md:text-sm text-[#FFF8E7] leading-relaxed max-w-sm sm:max-w-md mx-auto italic font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,1)] mb-4">
            “We would be truly honoured to celebrate this day with you. Please let us know if you'll be joining the festivities — your presence is the only gift we need.”
          </p>

          {/* WhatsApp Button */}
          <div className="flex flex-col items-center gap-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-[#3A0303]/90 text-[#FFD700] border-2 border-[#FFD700] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform duration-300 group backdrop-blur-md"
              title="RSVP via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 fill-current text-[#FFD700] group-hover:rotate-12 transition-transform" />
            </a>
            <span className="font-sans-clean text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] pt-0.5">
              TAP TO RSVP VIA WHATSAPP
            </span>
          </div>
        </motion.div>

        {/* Card 2: Instagram #VivekWedsVarshini */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-transparent text-[#FFF8E7] p-2 relative"
        >
          {/* Script Instagram Heading */}
          <span className="font-script-calligraphy text-xl sm:text-3xl md:text-4xl text-[#FFD700] block mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Instagram
          </span>

          {/* Hashtag */}
          <h2 className="font-cinzel text-base sm:text-2xl md:text-3xl font-extrabold text-white tracking-wider mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            #VivekWedsVarshini
          </h2>

          {/* Instagram Button */}
          <div className="flex flex-col items-center gap-1">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white border-2 border-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform duration-300 group"
              title="View Wedding Hashtag on Instagram"
            >
              <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:rotate-12 transition-transform" />
            </a>
            <span className="font-sans-clean text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFD700] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              TAP HERE
            </span>
          </div>

          {/* Tagline */}
          <div className="mt-4 pt-2 border-t border-[#FFD700]/30 flex justify-center text-[9px] sm:text-xs text-amber-100 font-sans-clean font-semibold uppercase tracking-widest drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <span>🏛️ Tag your memories with #VivekWedsVarshini</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
