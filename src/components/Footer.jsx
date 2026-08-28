import React from 'react';
import { Heart, MessageCircle, MapPin, ArrowUp, Camera, Flame } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D0202] text-[#FFF8E7] py-16 px-6 border-t-2 border-[#D4AF37]/40 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Shree Ganeshay Namah & Monogram */}
        <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/15 diya-glow">
          <Flame className="w-7 h-7 text-[#FFD700] animate-flame" />
        </div>

        <span className="font-serif text-lg text-[#FFD700] tracking-widest block font-bold">
          ॥ శుభం భవతు ॥
        </span>

        {/* Couple Names & Hashtag */}
        <div>
          <h3 className="font-heading-devanagari text-4xl sm:text-5xl font-bold tracking-wide text-[#FFF8E7]">
            Vivek Weds Varshini
          </h3>
          <p className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#FFD700] mt-2 font-bold">
            #VivekWedsVarshini2026
          </p>
        </div>

        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-4" />

        {/* Social & Maps Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans-clean text-xs uppercase tracking-widest text-[#FFF8E7]/90 font-medium">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FFD700] transition-colors"
          >
            <Camera className="w-4 h-4 text-[#FFD700]" />
            <span>#VivekWedsVarshini2026</span>
          </a>

          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FFD700] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD700]" />
            <span>Guest WhatsApp Concierge</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FFD700] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#FFD700]" />
            <span>Kshatriya Kalyana Mandapam, Amalapuram</span>
          </a>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="mt-6 p-3.5 rounded-full border-2 border-[#D4AF37] text-[#FFD700] hover:bg-[#D4AF37] hover:text-[#210202] transition-all duration-300 shadow-xl"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Copyright */}
        <p className="font-sans-clean text-[11px] text-[#FFF8E7]/50 tracking-wider">
          With Devotion & Blessings • December 19, 2026 • Kshatriya Kalyana Mandapam, Amalapuram, AP
        </p>
      </div>
    </footer>
  );
}
