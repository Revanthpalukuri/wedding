import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2, Bookmark } from 'lucide-react';

export default function JoinUsInstagram() {
  const whatsappUrl = 'https://wa.me/?text=Hi%20Vivek%20%26%20Varshini,%20I%20would%20love%20to%20attend%20your%20wedding!';
  const instagramUrl = 'https://instagram.com';

  return (
    <div className="w-full flex flex-col select-none">
      {/* PAGE 6: RSVP - Will You Join Us? (Maintains original 3008:2080 aspect ratio, no vertical stretching) */}
      <section
        id="rsvp"
        className="relative w-full aspect-[3008/2080] min-h-[calc(100vw*2080/3008)] bg-[#210202] text-[#FFF8E7] overflow-hidden flex items-center justify-center text-center"
      >
        {/* Full Bleed Background Artwork maintaining natural aspect ratio */}
        <img
          src="https://framerusercontent.com/images/6f9AxarIs54UBYT1Lrm4ws9V764.webp?scale-down-to=2048&width=3008&height=2080"
          alt="RSVP Will You Join Us Artwork"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable="false"
        />

        {/* Content pinned proportionally inside the artwork panel */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center justify-center max-w-[85%] sm:max-w-xl text-center space-y-1 sm:space-y-3 md:space-y-4"
          >
            {/* Top RSVP Tag */}
            <span className="font-sans-clean text-[8px] sm:text-xs md:text-sm font-bold tracking-[0.25em] text-[#580B1A] uppercase">
              RSVP
            </span>

            {/* Calligraphic Title */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#580B1A] font-normal leading-none">
              <span className="font-script-calligraphy text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#580B1A]">W</span>
              ill You Join Us?
            </h2>

            {/* Note */}
            <p className="font-serif text-[7.5px] sm:text-[11px] md:text-xs lg:text-sm text-[#580B1A] leading-relaxed max-w-xs sm:max-w-md mx-auto italic font-medium">
              We would be truly honoured to celebrate this day with you. Please let us know if you'll be joining the festivities — your presence is the only gift we need.
            </p>

            {/* WhatsApp RSVP Button */}
            <div className="pt-1 sm:pt-2 flex flex-col items-center gap-1 pointer-events-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg sm:rounded-xl bg-[rgb(88,11,26)] text-white font-sans-clean text-[9px] sm:text-xs md:text-sm uppercase font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current text-white" />
                <span>RSVP on WhatsApp</span>
              </a>
              <span className="font-sans-clean text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-[#580B1A] font-bold">
                TAP HERE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAGE 7 Top: Instagram Section (Maintains original 3008:2080 aspect ratio, no vertical stretching) */}
      <section
        id="instagram"
        className="relative w-full aspect-[3008/2080] min-h-[calc(100vw*2080/3008)] bg-[#210202] text-[#FFF8E7] overflow-hidden flex items-center justify-center text-center"
      >
        {/* Full Bleed Background Artwork */}
        <img
          src="https://framerusercontent.com/images/f7X3FcEZ4muD31rwPB6wnsMnmsw.webp?scale-down-to=2048&width=3008&height=2080"
          alt="Instagram Artwork"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable="false"
        />

        {/* Content pinned proportionally inside the Instagram panel */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center justify-center max-w-[85%] sm:max-w-xl text-center space-y-1 sm:space-y-3 md:space-y-4"
          >
            {/* Instagram Heading */}
            <span className="font-script-calligraphy text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#580B1A] block font-normal leading-none">
              Instagram
            </span>

            {/* Hashtag */}
            <h3 className="font-serif text-xl sm:text-3xl md:text-4xl text-[#580B1A] font-bold tracking-tight">
              #VivekWedsVarshini
            </h3>

            {/* 3 Luxury Angled Instagram Cards */}
            <div className="relative w-48 sm:w-72 md:w-80 h-24 sm:h-36 md:h-40 my-1 flex items-center justify-center">
              {/* Left Card */}
              <div className="absolute left-2 sm:left-4 w-14 sm:w-20 md:w-24 aspect-[3/4] bg-white p-0.5 sm:p-1 rounded sm:rounded-lg shadow-xl -rotate-6 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
                  alt="Memory 1"
                  className="w-full h-[78%] object-cover rounded-sm sm:rounded-md"
                />
                <div className="flex items-center justify-between px-0.5 sm:px-1 pt-0.5 text-slate-700">
                  <Heart className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-rose-500 text-rose-500" />
                  <Share2 className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                  <Bookmark className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                </div>
              </div>

              {/* Middle Card */}
              <div className="relative z-10 w-16 sm:w-24 md:w-28 aspect-[3/4] bg-white p-0.5 sm:p-1 rounded sm:rounded-lg shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80"
                  alt="Memory 2"
                  className="w-full h-[78%] object-cover rounded-sm sm:rounded-md"
                />
                <div className="flex items-center justify-between px-0.5 sm:px-1 pt-0.5 text-slate-700">
                  <Heart className="w-2 sm:w-3 h-2 sm:h-3 fill-rose-500 text-rose-500" />
                  <Share2 className="w-2 sm:w-3 h-2 sm:h-3" />
                  <Bookmark className="w-2 sm:w-3 h-2 sm:h-3" />
                </div>
              </div>

              {/* Right Card */}
              <div className="absolute right-2 sm:right-4 w-14 sm:w-20 md:w-24 aspect-[3/4] bg-white p-0.5 sm:p-1 rounded sm:rounded-lg shadow-xl rotate-6 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80"
                  alt="Memory 3"
                  className="w-full h-[78%] object-cover rounded-sm sm:rounded-md"
                />
                <div className="flex items-center justify-between px-0.5 sm:px-1 pt-0.5 text-slate-700">
                  <Heart className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-rose-500 text-rose-500" />
                  <Share2 className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                  <Bookmark className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                </div>
              </div>
            </div>

            {/* Instagram Button */}
            <div className="pt-1 flex flex-col items-center gap-1 pointer-events-auto">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-1.5 sm:py-2.5 rounded-full bg-[rgb(88,11,26)] text-white font-sans-clean text-[9px] sm:text-xs uppercase font-bold tracking-wider shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 transition-all duration-300 cursor-pointer"
              >
                <span>instagram</span>
              </a>
              <span className="font-sans-clean text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-[#580B1A] font-bold">
                TAP HERE
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
