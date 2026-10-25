import confetti from 'canvas-confetti';
import { triggerHaptic } from './haptics';

// Custom event identifier for cross-component blessing showers
export const BLESSING_EVENT_NAME = 'wedding:blessing-shower';

// Vector SVG petal path for high-performance native 2D canvas Path2D rendering
const PETAL_SVG_PATH = 'M12 0 C20 8, 24 16, 12 28 C0 16, 4 8, 12 0 Z';
const HEART_SVG_PATH = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

/**
 * Triggers a rich, multi-layered blessing animation:
 * 1. Dispatches an event to render DOM-based high-res falling flower petals / emojis (guaranteed 100% visible on all mobile webviews & iOS Safari)
 * 2. Fires GPU-accelerated canvas-confetti with flower colors and petal vector shapes
 * 3. Triggers mobile haptic vibration
 */
export function triggerBlessingShower(type = 'flowers') {
  // 1. Dispatch custom event for floating flower petals overlay
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(BLESSING_EVENT_NAME, { detail: { type } }));
  }

  // 2. Mobile tactile feedback
  try {
    triggerHaptic('pop');
  } catch (_) {}

  // 3. GPU Canvas-confetti explosion
  try {
    if (type === 'flowers') {
      let petalShape;
      try {
        if (typeof confetti.shapeFromPath === 'function') {
          petalShape = confetti.shapeFromPath({ path: PETAL_SVG_PATH });
        }
      } catch (_) {}

      const shapes = petalShape ? [petalShape, 'circle'] : ['circle'];
      const colors = ['#FF69B4', '#FFD700', '#FF1493', '#FFA500', '#E11D48', '#FFF8E7'];

      // Left and right synchronized petal cannons
      confetti({
        particleCount: 50,
        spread: 95,
        origin: { x: 0.25, y: 0.65 },
        colors,
        shapes,
        scalar: 1.6,
        ticks: 230,
        gravity: 0.8,
        drift: 0.1,
        zIndex: 99999,
      });

      confetti({
        particleCount: 50,
        spread: 95,
        origin: { x: 0.75, y: 0.65 },
        colors,
        shapes,
        scalar: 1.6,
        ticks: 230,
        gravity: 0.8,
        drift: -0.1,
        zIndex: 99999,
      });
    } else if (type === 'hearts') {
      let heartShape;
      try {
        if (typeof confetti.shapeFromPath === 'function') {
          heartShape = confetti.shapeFromPath({ path: HEART_SVG_PATH });
        }
      } catch (_) {}

      confetti({
        particleCount: 65,
        spread: 100,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#E11D48', '#FB7185', '#FFD700', '#F43F5E', '#FDA4AF'],
        shapes: heartShape ? [heartShape, 'circle'] : ['circle'],
        scalar: 1.6,
        ticks: 230,
        gravity: 0.8,
        zIndex: 99999,
      });
    } else {
      // Akshatalu - Sacred golden turmeric grains & divine sparkles
      confetti({
        particleCount: 75,
        spread: 110,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#FFD700', '#D4AF37', '#FFF8E7', '#FBBF24', '#F59E0B'],
        shapes: ['circle', 'star'],
        scalar: 1.5,
        ticks: 220,
        gravity: 0.85,
        zIndex: 99999,
      });
    }
  } catch (err) {
    console.warn('Confetti blessing error:', err);
  }
}
