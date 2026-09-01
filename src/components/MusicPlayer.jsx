import React, { useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { weddingConfig, getYouTubeId } from '../utils/config';

export default function MusicPlayer({ isMuted, toggleAudio, isOpened = false }) {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const videoId = getYouTubeId(weddingConfig.backgroundMusicUrl);

  useEffect(() => {
    // Send postMessage command to iframe if available
    const sendCommand = (func, args = []) => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      }
    };

    if (isOpened && !isMuted) {
      sendCommand('unMute');
      sendCommand('setVolume', [90]);
      sendCommand('playVideo');
    } else {
      sendCommand('pauseVideo');
      sendCommand('mute');
    }

    // Control via YT.Player instance if initialized
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      if (isOpened && !isMuted) {
        try {
          playerRef.current.unMute();
          playerRef.current.setVolume(90);
          playerRef.current.playVideo();
        } catch (e) {}
      } else {
        try {
          playerRef.current.pauseVideo();
        } catch (e) {}
      }
    }
  }, [isMuted, isOpened]);

  useEffect(() => {
    if (!isOpened) return;

    // Initialize YouTube iframe API for direct interaction
    const initYT = () => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        playerRef.current = new window.YT.Player('wedding-bg-music-player', {
          events: {
            onReady: (event) => {
              if (isOpened && !isMuted) {
                event.target.unMute();
                event.target.setVolume(90);
                event.target.playVideo();
              }
            },
            onStateChange: (event) => {
              if (event.data === 0) {
                // Loop video when ended
                event.target.playVideo();
              }
            },
          },
        });
      }
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initYT;
    } else {
      initYT();
    }
  }, [isOpened]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Background Audio Source - ONLY active and loaded when invitation is opened */}
      {isOpened && (
        <div className="fixed -bottom-[800px] -right-[800px] w-64 h-64 opacity-0 pointer-events-none overflow-hidden">
          <iframe
            id="wedding-bg-music-player"
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
            title="Wedding Celebration Song"
            allow="autoplay; encrypted-media"
            className="w-full h-full border-0"
          />
        </div>
      )}

      {/* Unified Clickable Music Player Pill Button (Visible after invitation is opened) */}
      {isOpened && (
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
      )}
    </div>
  );
}
