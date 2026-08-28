import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, EyeOff, Eye } from 'lucide-react';

export default function CartoonVideoWidget() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-40 bg-[#1D0202]/80 text-[#FFD700] border border-[#FFD700]/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-sans-clean flex items-center gap-1.5 shadow-lg hover:bg-[#FFD700] hover:text-black transition-colors"
        title="Show Cartoon Video"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
        <span>Show Video</span>
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 left-4 sm:left-6 z-40 flex flex-col items-start pointer-events-auto group"
    >
      {/* Video Outer Container with Transparent Background */}
      <div className="relative bg-transparent flex flex-col items-center">
        {/* Hover Action Overlay Badge */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 left-0 flex items-center gap-1 bg-[#1D0202]/90 border border-[#FFD700]/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-sans-clean font-bold text-[#FFD700] shadow-md z-10">
          <button
            onClick={togglePlay}
            className="hover:text-white transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={toggleMute}
            className="hover:text-white transition-colors ml-1"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="hover:text-rose-400 transition-colors ml-1"
            title="Hide"
          >
            <EyeOff className="w-3 h-3" />
          </button>
        </div>

        {/* Transparent Background Video Player */}
        <div className="w-40 sm:w-52 md:w-64 max-h-72 bg-transparent rounded-2xl overflow-hidden pointer-events-auto">
          <video
            ref={videoRef}
            src="/CartoonVideo.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-contain bg-transparent mix-blend-screen"
            style={{
              backgroundColor: 'transparent',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
