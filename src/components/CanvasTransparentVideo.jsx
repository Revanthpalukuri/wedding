import React, { useEffect, useRef } from 'react';

export default function CanvasTransparentVideo({ src, className, style }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isMounted = true;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const playVideo = () => {
      if (video && video.paused && isMounted) {
        video.play().catch(() => {});
      }
    };

    // Auto-resume if browser tries to pause or stall
    video.addEventListener('pause', playVideo);
    video.addEventListener('ended', playVideo);
    video.addEventListener('stalled', playVideo);
    video.addEventListener('waiting', playVideo);

    const renderFrame = () => {
      if (video && video.readyState >= 2 && !video.paused) {
        const vWidth = video.videoWidth || 480;
        const vHeight = video.videoHeight || 270;

        if (canvas.width !== vWidth || canvas.height !== vHeight) {
          canvas.width = vWidth;
          canvas.height = vHeight;
        }

        ctx.drawImage(video, 0, 0, vWidth, vHeight);
        const frame = ctx.getImageData(0, 0, vWidth, vHeight);
        const data = frame.data;
        const len = data.length;

        // High-performance chroma-key processing for checkerboard removal
        for (let i = 0; i < len; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const maxC = r > g ? (r > b ? r : b) : (g > b ? g : b);
          const minC = r < g ? (r < b ? r : b) : (g < b ? g : b);
          const diff = maxC - minC;

          // Remove neutral white/grey background tiles
          if (diff < 22 && maxC > 80) {
            if (diff < 12) {
              data[i + 3] = 0; // Transparent
            } else {
              data[i + 3] = ((diff - 12) * 25.5) | 0; // Smooth feather
            }
          }
        }

        ctx.putImageData(frame, 0, 0);
      } else if (video && video.paused && isMounted) {
        video.play().catch(() => {});
      }

      if (isMounted) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    playVideo();
    animationFrameId = requestAnimationFrame(renderFrame);

    return () => {
      isMounted = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      video.removeEventListener('pause', playVideo);
      video.removeEventListener('ended', playVideo);
      video.removeEventListener('stalled', playVideo);
      video.removeEventListener('waiting', playVideo);
    };
  }, [src]);

  return (
    <>
      {/* Off-screen active video (not display:none so browser does not freeze video decoder) */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed -top-[9999px] -left-[9999px] w-2 h-2 opacity-0 pointer-events-none"
      />
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          backgroundColor: 'transparent',
          ...style,
        }}
      />
    </>
  );
}
