import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

export default function TempleScrollGuide({ isOpened = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    if (!isOpened) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      if (scrollPos > 60) {
        setIsScrolled(true);
        setShowDemo(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Show gentle mini swipe hint after 2s of inactivity
    const timer = setTimeout(() => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (currentScroll < 25) {
        setShowDemo(true);
      }
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isOpened]);

  if (!isOpened) return null;

  const handleClick = (e) => {
    triggerHaptic('light');
    const target = document.getElementById('invite');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Scroll Guide"
      className={`fixed inset-x-0 bottom-2.5 sm:bottom-5 z-40 flex flex-col items-center pointer-events-none pb-[max(0.25rem,env(safe-area-inset-bottom))] px-3 select-none transition-all duration-300 ease-out ${
        isScrolled ? 'opacity-0 translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* 1. Subtle, Compact Demo Chip (Only pops up gently on inactivity) */}
      <div
        onClick={handleClick}
        className={`pointer-events-auto cursor-pointer mb-1 px-3 py-0.5 rounded-full bg-[#350307]/90 border border-[#FFD700]/70 text-[#FFE58F] font-sans-clean text-[9px] sm:text-[10px] font-semibold tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all duration-300 ${
          showDemo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <span className="animate-swipe-hand inline-block">👆</span>
        <span>Swipe up to explore details</span>
      </div>

      {/* 2. Compact, Sleek Temple Scroll Pill */}
      <a
        href="#invite"
        onClick={handleClick}
        aria-label="Scroll down to view wedding invitation details"
        className="pointer-events-auto group inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#4A050B]/90 hover:bg-[#680A15] active:scale-95 text-[#FFF8E7] border border-[#FFD700]/85 animate-temple-glow animate-temple-scroll transition-transform duration-200 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.8),0_0_10px_rgba(255,215,0,0.4)] backdrop-blur-xs"
      >
        {/* Lotus Motif */}
        <span className="text-xs sm:text-sm text-[#FFD700] drop-shadow-[0_0_6px_#FFD700] shrink-0">
          🪷
        </span>

        {/* Text */}
        <span className="font-sans-clean text-[9px] sm:text-[10.5px] uppercase font-bold tracking-[0.14em] text-[#FFD700] group-hover:text-white transition-colors leading-none whitespace-nowrap">
          SCROLL DOWN FOR INVITATION
        </span>

        {/* Mini Chevron Circle */}
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#2E0206] border border-[#FFD700]/70 flex items-center justify-center text-[#FFD700] shrink-0 group-hover:bg-[#FFD700] group-hover:text-[#580B1A] transition-colors">
          <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3] animate-bounce" />
        </div>
      </a>
    </aside>
  );
}
