// Safe Native Mobile Vibration / Haptic Feedback Utility
export const triggerHaptic = (pattern = 20) => {
  try {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  } catch (e) {
    // Fail silently on browsers where vibration is blocked or unsupported
  }
};
