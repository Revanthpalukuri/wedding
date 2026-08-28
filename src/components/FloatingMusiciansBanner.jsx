import React from 'react';
import { motion } from 'framer-motion';
import CanvasTransparentVideo from './CanvasTransparentVideo';

export default function FloatingMusiciansBanner() {
  return (
    <div className="fixed bottom-2 left-2 sm:left-6 z-30 pointer-events-none flex items-end transform-gpu">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-56 sm:w-72 md:w-88 lg:w-96 pointer-events-none transform-gpu will-change-transform"
      >
        <CanvasTransparentVideo
          src="/CartoonVideo.mp4"
          className="w-full h-auto max-h-56 sm:max-h-72 md:max-h-84 lg:max-h-96 object-contain bg-transparent pointer-events-none select-none drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]"
        />
      </motion.div>
    </div>
  );
}
