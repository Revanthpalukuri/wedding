import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { PartyPopper, Sparkles } from 'lucide-react';

export default function FestivePopAnimation({ triggerOnOpen }) {
  // Fire a multi-cannon festive pop blast
  const fireFestiveBlast = () => {
    // 1. Center burst
    confetti({
      particleCount: 70,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#FFD700', '#D4AF37', '#8B0000', '#FFA500', '#FFF8E7', '#E11D48'],
      disableForReducedMotion: true,
    });

    // 2. Left side cannon
    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.7 },
        colors: ['#FFD700', '#D4AF37', '#FFA500', '#FF4500'],
      });
    }, 150);

    // 3. Right side cannon
    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.7 },
        colors: ['#FFD700', '#D4AF37', '#FFA500', '#FF4500'],
      });
    }, 300);
  };

  // Trigger on initial component mount and whenever envelope is opened
  useEffect(() => {
    const timer = setTimeout(() => {
      fireFestiveBlast();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (triggerOnOpen) {
      fireFestiveBlast();
    }
  }, [triggerOnOpen]);

  // Periodic minimal pop every 15 seconds throughout the page
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 25,
        spread: 70,
        origin: { x: Math.random() * 0.8 + 0.1, y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#FFA500'],
        ticks: 150,
        gravity: 0.8,
        scalar: 0.9,
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Ambient Falling Golden Petals / Confetti (Throughout Page) */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60 animate-float-particle"
            style={{
              left: `${(i * 6.5) % 100}%`,
              top: `-${(i * 10) % 20}%`,
              width: `${(i % 3) * 3 + 4}px`,
              height: `${(i % 3) * 4 + 5}px`,
              backgroundColor: i % 2 === 0 ? '#FFD700' : '#FFA500',
              boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Floating Party Popper Button (Matches Music Player Button Size) */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <button
          onClick={fireFestiveBlast}
          className="group flex items-center gap-1.5 sm:gap-2 bg-[#3A0303]/90 backdrop-blur-md border border-[#D4AF37]/80 text-[#FFF8E7] p-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-xl transition-all hover:scale-105 diya-glow"
          title="Tap for Celebration Party Blast!"
        >
          <div className="p-1.5 sm:p-2 rounded-full royal-gold-button text-[#210202] group-hover:scale-110 transition-transform flex items-center justify-center">
            <PartyPopper className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="hidden sm:inline font-sans-clean text-[9px] uppercase tracking-wider text-[#FFD700] font-bold leading-tight pr-1">
            Celebrate!
          </span>
        </button>
      </div>
    </>
  );
}
