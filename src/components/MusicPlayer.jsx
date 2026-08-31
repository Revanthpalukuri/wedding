import React from 'react';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer({ isMuted, toggleAudio }) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Background Audio Source (YouTube Video m-RiOAOfCGs) */}
      <iframe
        src={`https://www.youtube.com/embed/m-RiOAOfCGs?autoplay=1&mute=${isMuted ? '1' : '0'}&loop=1&playlist=m-RiOAOfCGs&controls=0&modestbranding=1&rel=0&enablejsapi=1`}
        title="Wedding Celebration Song"
        allow="autoplay"
        className="hidden w-0 h-0 border-0 pointer-events-none"
      />

      {/* Unified Clickable Music Player Pill Button */}
      <button
        onClick={toggleAudio}
        type="button"
        className="group flex items-center gap-2 sm:gap-2.5 bg-[#3A0303]/95 hover:bg-[#4E0404] backdrop-blur-md border-2 border-[#FFD700] text-[#FFF8E7] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all hover:scale-105 active:scale-95 cursor-pointer select-none"
        title={isMuted ? 'Click to Play Wedding Song' : 'Click to Pause Wedding Song'}
        aria-label={isMuted ? 'Play Wedding Song' : 'Pause Wedding Song'}
      >
        {/* Animated Equalizer Bars */}
        <div className="flex items-end gap-0.5 h-3.5 w-3.5">
          <span
            className={`w-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${
              !isMuted ? 'h-3.5 animate-bounce' : 'h-1.5 opacity-60'
            }`}
          />
          <span
            className={`w-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${
              !isMuted ? 'h-2.5 animate-bounce' : 'h-2 opacity-60'
            }`}
            style={{ animationDelay: '0.2s' }}
          />
          <span
            className={`w-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${
              !isMuted ? 'h-3.5 animate-bounce' : 'h-1 opacity-60'
            }`}
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        {/* Text Block: Wedding Song & Status */}
        <div className="flex flex-col text-left pr-1">
          <span className="font-sans-clean text-[9px] sm:text-[10px] uppercase tracking-wider text-[#FFD700] font-bold leading-tight">
            Wedding Song
          </span>
          <span className="font-serif italic text-[10px] sm:text-[11px] text-[#FFF8E7]/90 leading-tight">
            {isMuted ? 'Paused' : 'Playing Track'}
          </span>
        </div>

        {/* Play/Pause Icon Pill */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFD700] text-[#3A0303] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          {isMuted ? (
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current translate-x-0.5" />
          ) : (
            <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
          )}
        </div>
      </button>
    </div>
  );
}
