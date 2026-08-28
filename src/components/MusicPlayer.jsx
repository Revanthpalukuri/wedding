import React from 'react';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer({ isMuted, toggleAudio }) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5 sm:gap-2 bg-[#3A0303]/90 backdrop-blur-md border border-[#D4AF37]/80 text-[#FFF8E7] p-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-xl transition-all hover:scale-105 diya-glow">
      {/* Background Audio Source (YouTube Video m-RiOAOfCGs) */}
      <iframe
        src={`https://www.youtube.com/embed/m-RiOAOfCGs?autoplay=1&mute=${isMuted ? '1' : '0'}&loop=1&playlist=m-RiOAOfCGs&controls=0&modestbranding=1&rel=0&enablejsapi=1`}
        title="Wedding Celebration Song"
        allow="autoplay"
        className="hidden w-0 h-0 border-0 pointer-events-none"
      />

      {/* Mini Animated Equalizer Bar */}
      <div className="flex items-end gap-0.5 h-3 w-3 ml-1">
        <span
          className={`w-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${
            !isMuted ? 'h-3 animate-bounce' : 'h-1'
          }`}
        />
        <span
          className={`w-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${
            !isMuted ? 'h-2 animate-bounce' : 'h-1.5'
          }`}
          style={{ animationDelay: '0.2s' }}
        />
        <span
          className={`w-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${
            !isMuted ? 'h-3 animate-bounce' : 'h-1'
          }`}
          style={{ animationDelay: '0.4s' }}
        />
      </div>

      {/* Song Label (Hidden on mobile for ultra-compact small button) */}
      <div className="hidden sm:flex flex-col text-left pr-1">
        <span className="font-sans-clean text-[9px] uppercase tracking-wider text-[#FFD700] font-bold leading-tight">
          Wedding Song
        </span>
        <span className="font-serif italic text-[10px] text-[#FFF8E7]/90 leading-tight">
          {isMuted ? 'Paused' : 'Playing Track'}
        </span>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={toggleAudio}
        className="p-1.5 sm:p-2 rounded-full royal-gold-button text-[#210202] hover:scale-110 transition-transform"
        title={isMuted ? 'Play Music' : 'Pause Music'}
      >
        {isMuted ? (
          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
        ) : (
          <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
        )}
      </button>
    </div>
  );
}
