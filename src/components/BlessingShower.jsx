import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLESSING_EVENT_NAME } from '../utils/blessings';

const FLOWER_SYMBOLS = ['🌸', '🪷', '🌺', '🌼', '🌹', '🪷', '🌸', '💐'];
const HEART_SYMBOLS = ['💖', '💕', '❤️', '🥰', '💐', '💗', '💓'];
const GOLD_SYMBOLS = ['✨', '🌟', '💛', '🌾', '💫', '⭐', '✨'];

export default function BlessingShower() {
  const [activeShowers, setActiveShowers] = useState([]);

  useEffect(() => {
    const handleShower = (e) => {
      const type = e.detail?.type || 'flowers';
      const symbols = type === 'flowers' ? FLOWER_SYMBOLS : type === 'hearts' ? HEART_SYMBOLS : GOLD_SYMBOLS;

      // Spawn 32 richly styled falling particles across the viewport width
      const showerId = Date.now() + Math.random();
      const particles = Array.from({ length: 32 }, (_, i) => ({
        id: `${showerId}-${i}`,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 90 + 5, // 5vw to 95vw
        size: Math.floor(Math.random() * 16) + 24, // 24px to 40px (prominent on mobile)
        duration: Math.random() * 1.2 + 2.8, // 2.8s to 4.0s
        delay: Math.random() * 0.6, // Staggered drop
        sway: (Math.random() - 0.5) * 50, // Gentle sinusoidal sway
        initialRotate: Math.floor(Math.random() * 360),
        rotationDelta: (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 260) + 120),
      }));

      setActiveShowers((prev) => [...prev, { id: showerId, particles }]);

      // Remove shower after animation concludes
      setTimeout(() => {
        setActiveShowers((prev) => prev.filter((s) => s.id !== showerId));
      }, 4800);
    };

    window.addEventListener(BLESSING_EVENT_NAME, handleShower);
    return () => window.removeEventListener(BLESSING_EVENT_NAME, handleShower);
  }, []);

  if (activeShowers.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {activeShowers.map((shower) => (
          <React.Fragment key={shower.id}>
            {shower.particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  y: '-12vh',
                  x: `${p.left}vw`,
                  rotate: p.initialRotate,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  y: '112vh',
                  x: [
                    `${p.left}vw`,
                    `${p.left + p.sway * 0.6}vw`,
                    `${p.left - p.sway * 0.4}vw`,
                    `${p.left}vw`,
                  ],
                  rotate: p.initialRotate + p.rotationDelta,
                  opacity: [0, 1, 1, 0.95, 0],
                  scale: [0.5, 1.2, 1, 0.95, 0.7],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                style={{
                  fontSize: `${p.size}px`,
                  lineHeight: 1,
                  willChange: 'transform, opacity',
                }}
              >
                {p.symbol}
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
}
