import React, { useEffect, useState, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function MouseFollower() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [heartBursts, setHeartBursts] = useState([]);
  const requestRef = useRef();

  // Smooth trailing follower animation
  useEffect(() => {
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.18,
        y: prev.y + (mousePos.y - prev.y) * 0.18,
      }));
      requestRef.current = requestAnimationFrame(followCursor);
    };

    requestRef.current = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect if hovering over clickable elements
      const target = e.target;
      const isClickable =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHoveringClickable(!!isClickable);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);

      // Spawn a burst of 6-8 romantic mini hearts and sparkles on click
      const newBurst = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        particles: Array.from({ length: 7 }).map((_, i) => {
          const angle = (i / 7) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
          const distance = Math.random() * 45 + 35;
          return {
            id: i,
            dx: Math.cos(angle) * distance,
            dy: Math.sin(angle) * distance - 20, // Float slightly upwards
            size: Math.random() * 10 + 12,
            type: i % 3 === 0 ? 'sparkle' : 'heart',
            color: ['#FFD700', '#FF4D6D', '#FFB703', '#E63946', '#FFF0F5'][i % 5],
            rotation: Math.random() * 60 - 30,
          };
        }),
      };

      setHeartBursts((prev) => [...prev.slice(-6), newBurst]);

      // Remove after animation completes
      setTimeout(() => {
        setHeartBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
      }, 900);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Trailing Heart Halo Glow */}
      <div
        className="fixed pointer-events-none z-50 hidden md:block transition-transform duration-75 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHoveringClickable
              ? 'w-10 h-10 bg-[#FFD700]/25 blur-md scale-125'
              : 'w-7 h-7 bg-[#FF4D6D]/20 blur-sm scale-100'
          }`}
        />
      </div>

      {/* 2. Main Glowing Love Heart Pointer Symbol */}
      <div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHoveringClickable ? 1.35 : 1})`,
          transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Heart Icon SVG */}
          <Heart
            className={`transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(255,77,109,0.8)] ${
              isHoveringClickable
                ? 'w-5 h-5 fill-[#FFD700] text-[#3A0303] animate-pulse'
                : 'w-4 h-4 fill-[#FF2A55] text-[#FFE5EC]'
            }`}
          />

          {/* Tiny Golden Sparkle Badge on Hover */}
          {isHoveringClickable && (
            <Sparkles className="w-2.5 h-2.5 text-[#FFD700] absolute -top-1.5 -right-1.5 animate-spin" style={{ animationDuration: '3s' }} />
          )}
        </div>
      </div>

      {/* 3. Click Love Burst Particles */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
        {heartBursts.map((burst) => (
          <div key={burst.id} className="absolute" style={{ left: burst.x, top: burst.y }}>
            {burst.particles.map((p) => (
              <div
                key={p.id}
                className="absolute animate-heart-pop"
                style={{
                  '--dx': `${p.dx}px`,
                  '--dy': `${p.dy}px`,
                  '--rot': `${p.rotation}deg`,
                  color: p.color,
                }}
              >
                {p.type === 'sparkle' ? (
                  <Sparkles style={{ width: p.size, height: p.size, fill: 'currentColor' }} />
                ) : (
                  <Heart style={{ width: p.size, height: p.size, fill: 'currentColor' }} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
