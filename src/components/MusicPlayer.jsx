import React, { useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { weddingConfig, getYouTubeId } from '../utils/config';

export default function MusicPlayer({ isMuted, toggleAudio, isOpened }) {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  // Extract valid 11-char YouTube ID from config
  const videoId = getYouTubeId(weddingConfig.backgroundMusicUrl) || 'm-RiOAOfCGs';

  const sendIframeCommand = (command, args = []) => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: command, args }),
          '*'
        );
      } catch (e) {}
    }
  };

  const playMusic = () => {
    sendIframeCommand('unMute');
    sendIframeCommand('setVolume', [90]);
    sendIframeCommand('playVideo');

    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(90);
        playerRef.current.playVideo();
      } catch (e) {}
    }
  };

  const pauseMusic = () => {
    sendIframeCommand('pauseVideo');

    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {}
    }
  };

  // Sync with isMuted and isOpened state changes
  useEffect(() => {
    if (isOpened && !isMuted) {
      playMusic();
    } else if (isOpened && isMuted) {
      pauseMusic();
    }
  }, [isMuted, isOpened]);

  // Lifecycle audio management: Pause playback when tab is hidden, resume when visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        pauseMusic();
      } else if (document.visibilityState === 'visible' && isOpened && !isMuted) {
        playMusic();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isOpened, isMuted]);

  // Pre-load YouTube iframe API only once the invitation is opened
  useEffect(() => {
    if (!isOpened) return;

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
    <>
      {/* Background Audio Source - Mounted when invitation is opened */}
      {isOpened && (
        <div className="fixed top-0 left-0 w-1 h-1 opacity-0 pointer-events-none overflow-hidden z-[-1]">
          <iframe
            id="wedding-bg-music-player"
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}&widget_referrer=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
            title="Wedding Celebration Song"
            allow="autoplay; encrypted-media"
            className="w-full h-full border-0"
          />
        </div>
      )}

      {/* Interactive Floating Animated Golden Equalizer Pill Button */}
      {isOpened && (
        <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-6 z-40">
          <button
            onClick={toggleAudio}
            type="button"
            className="group flex items-center justify-between gap-2.5 bg-[#3A0303]/95 hover:bg-[#4E0404] backdrop-blur-md border-2 border-[#FFD700] text-[#FFF8E7] px-3 py-2 sm:px-3.5 sm:py-2 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.7),0_0_15px_rgba(255,215,0,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer select-none"
            title={isMuted ? 'Click to Play Wedding Music' : 'Click to Pause Wedding Music'}
            aria-label={isMuted ? 'Play Wedding Music' : 'Pause Wedding Music'}
          >
            {/* Animated Golden Soundwave Equalizer Container */}
            <div className="flex items-center justify-center gap-[3px] h-5 w-6 shrink-0">
              {!isMuted ? (
                <>
                  <span className="w-[3px] rounded-full bg-gradient-to-t from-[#FFD700] to-[#FFF5C0] animate-wave-1 drop-shadow-[0_0_4px_#FFD700]" />
                  <span className="w-[3px] rounded-full bg-gradient-to-t from-[#FFD700] to-[#FFF5C0] animate-wave-2 drop-shadow-[0_0_4px_#FFD700]" />
                  <span className="w-[3px] rounded-full bg-gradient-to-t from-[#FFD700] to-[#FFF5C0] animate-wave-3 drop-shadow-[0_0_4px_#FFD700]" />
                  <span className="w-[3px] rounded-full bg-gradient-to-t from-[#FFD700] to-[#FFF5C0] animate-wave-4 drop-shadow-[0_0_4px_#FFD700]" />
                </>
              ) : (
                <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
              )}
            </div>

            {/* Label and Status */}
            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-sans-clean text-[8.5px] uppercase tracking-wider text-[#FFD700] font-extrabold">
                {isMuted ? 'MUSIC OFF' : 'NOW PLAYING'}
              </span>
              <span className="font-serif text-[11px] text-[#FFF8E7] font-semibold mt-0.5">
                {isMuted ? 'Tap to Play ▶' : 'Shehnai 🎶'}
              </span>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
