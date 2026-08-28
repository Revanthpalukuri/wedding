import React, { useEffect, useRef } from 'react';

export default function CanvasTransparentVideo({ src, className, style }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const renderFrame = () => {
      if (video && video.readyState >= 2 && !video.paused) {
        const vWidth = video.videoWidth || 500;
        const vHeight = video.videoHeight || 300;

        if (canvas.width !== vWidth || canvas.height !== vHeight) {
          canvas.width = vWidth;
          canvas.height = vHeight;
        }

        ctx.drawImage(video, 0, 0, vWidth, vHeight);
        const frame = ctx.getImageData(0, 0, vWidth, vHeight);
        const data = frame.data;
        const len = data.length;

        // Chroma-key out the encoded grey & white checkerboard background grid
        for (let i = 0; i < len; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const maxC = Math.max(r, g, b);
          const minC = Math.min(r, g, b);
          const diff = maxC - minC;

          // Checkerboard pattern detector:
          // Grid tiles consist of neutral grey (#808080 - #CCCCCC) and white (#FFFFFF) pixels
          // where Red, Green, and Blue values are virtually identical (low saturation: diff < 22)
          // and brightness is medium-high (maxC > 85).
          if (diff < 22 && maxC > 85) {
            if (diff < 12) {
              data[i + 3] = 0; // Completely transparent
            } else {
              // Smooth alpha feathering on edges
              const alphaFactor = (diff - 12) / 10;
              data[i + 3] = Math.floor(alphaFactor * 255);
            }
          }
        }

        ctx.putImageData(frame, 0, 0);
      }
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    // Ensure video plays automatically
    video.play().catch(() => {});

    animationFrameId = requestAnimationFrame(renderFrame);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden"
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
