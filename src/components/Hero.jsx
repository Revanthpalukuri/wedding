import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { weddingConfig } from '../utils/config';

export default function Hero() {
  const sectionRef = useRef(null);

  // Responsive scroll distance: very gentle and slow on mobile & tablet
  const [scrollDistance, setScrollDistance] = useState(520);

  useEffect(() => {
    const updateScrollDistance = () => {
      const width = window.innerWidth;
      if (width < 810) {
        // Very slow and gentle scroll movement on mobile
        setScrollDistance(180);
      } else if (width < 1200) {
        // Smooth gentle movement on tablet
        setScrollDistance(300);
      } else {
        // Desktop
        setScrollDistance(520);
      }
    };

    updateScrollDistance();
    window.addEventListener('resize', updateScrollDistance, { passive: true });
    return () => window.removeEventListener('resize', updateScrollDistance);
  }, []);

  // Track page scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Inertial spring physics smoothing: transforms abrupt wheel/touch ticks into buttery fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 22,
    mass: 0.35,
    restDelta: 0.0001,
  });

  // Names translate down smoothly with spring inertia as the user scrolls
  const namesTranslateY = useTransform(smoothProgress, [0, 1], [0, scrollDistance]);

  const groomName = (weddingConfig.couple?.groom || 'VIVEK').toUpperCase();
  const brideName = (weddingConfig.couple?.bride || 'VARSHINI').toUpperCase();

  return (
    <>
      <style>{`
        /* --- HERO (PAGE 1) STYLES --- */
        .hero-page-1 {
          aspect-ratio: 0.567913;
          overflow: clip;
          overflow: hidden;
          background-color: #2D68C4;
          width: 100%;
          position: relative;
        }

        .hero-sky {
          aspect-ratio: 0.57877;
          width: 100%;
          position: absolute;
          top: 46%;
          left: 50%;
          overflow: visible;
          transform: translate(-50%, -50%);
          will-change: transform;
        }

        /* Unified Names Container - Equidistant gaps & responsive typography */
        .hero-names-wrapper {
          position: absolute;
          top: 10.5%;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.8vw, 24px);
          z-index: 1;
          pointer-events: none;
          text-align: center;
        }

        /* Couple Names Typography */
        .hero-name-text {
          font-family: "Asul", "Asul Placeholder", serif;
          font-size: clamp(36px, 6.8vw, 115px);
          line-height: 1.05;
          letter-spacing: 0.04em;
          text-align: center;
          color: rgb(255, 255, 255);
          text-transform: uppercase;
          margin: 0;
          padding: 0 16px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          width: 100%;
        }

        /* WEDS Typography */
        .hero-weds-text {
          font-family: "Jost", "Jost Placeholder", sans-serif;
          font-size: clamp(15px, 2vw, 30px);
          line-height: 1;
          color: rgb(255, 235, 186);
          letter-spacing: 0.15em;
          text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.35);
          margin: 0;
          padding: 0;
          text-align: center;
        }

        /* Temple Gopuram - Layered ON TOP of names (z-index: 5) */
        .hero-temple {
          aspect-ratio: 0.549028;
          width: 76%;
          position: absolute;
          top: 67%;
          left: 50%;
          overflow: visible;
          transform: translate(-50%, -50%);
          z-index: 5;
        }

        /* Tree - Sits at forefront (z-index: 10) */
        .hero-tree {
          aspect-ratio: 0.661458;
          position: absolute;
          bottom: -560px;
          left: 0;
          right: 0;
          width: 100%;
          overflow: visible;
          pointer-events: none;
          z-index: 10;
        }

        /* --- BREAKPOINTS --- */
        @media (min-width: 1440px) {
          .hero-tree {
            bottom: -560px;
          }
        }

        @media (min-width: 810px) and (max-width: 1199.98px) {
          .hero-names-wrapper {
            top: 10%;
            gap: clamp(10px, 1.6vw, 20px);
          }
          .hero-temple {
            left: 50%;
          }
          .hero-tree {
            aspect-ratio: 0.661801;
            bottom: unset;
            left: 50%;
            right: unset;
            width: 101%;
            top: 75%;
            transform: translate(-50%, -50%);
          }
        }

        @media (max-width: 809.98px) {
          .hero-names-wrapper {
            top: 10%;
            gap: 12px;
          }
          .hero-name-text {
            font-size: clamp(34px, 10vw, 56px);
            line-height: 1.1;
          }
          .hero-weds-text {
            font-size: 16px;
            letter-spacing: 0.12em;
          }
          .hero-temple {
            width: 76%;
            top: 67%;
            left: 50%;
          }
          .hero-tree {
            aspect-ratio: 0.661801;
            bottom: unset;
            left: 50%;
            right: unset;
            width: 101%;
            top: 75%;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>

      {/* PAGE 1 FRAME */}
      <section id="home" ref={sectionRef} className="framer-1v6qekl hero-page-1" data-framer-name="PAGE 1">
        {/* SKY LAYER */}
        <div className="framer-k9a895 hero-sky" data-framer-name="SKY">
          {/* Sky background image wrapper */}
          <div
            style={{
              position: 'absolute',
              borderRadius: 'inherit',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 0,
            }}
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="auto"
              width="2032"
              height="3072"
              src="/images/hero/hero_sky.webp"
              alt="Sky Background"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center',
                objectFit: 'cover',
              }}
              draggable="false"
            />
          </div>

          {/* UNIFIED NAMES CONTAINER (Strictly Equal Spacing & Responsive Mobile Typography) */}
          <motion.div
            style={{ y: namesTranslateY }}
            className="hero-names-wrapper"
            data-framer-name="NAMES CONTAINER"
          >
            {/* GROOM NAME */}
            <div className="framer-qqlkw5 w-full flex justify-center" data-framer-name="GROOM NAME">
              <h1 className="hero-name-text">
                {groomName}
              </h1>
            </div>

            {/* WEDS */}
            <div className="framer-1pwvksq w-full flex justify-center" data-framer-name="WEDS">
              <span className="hero-weds-text">
                WEDS
              </span>
            </div>

            {/* BRIDE NAME */}
            <div className="framer-1jgx9kw w-full flex justify-center" data-framer-name="BRIDE NAME">
              <h1 className="hero-name-text">
                {brideName}
              </h1>
            </div>
          </motion.div>

          {/* TEMPLE GOPURAM (Positioned on top of names on z-index 5) */}
          <div className="framer-zrqetc hero-temple" data-framer-name="TEMPLE">
            <div
              style={{
                position: 'absolute',
                borderRadius: 'inherit',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              data-framer-background-image-wrapper="true"
            >
              <img
                decoding="auto"
                width="2032"
                height="3072"
                src="/images/hero/hero_temple.webp"
                alt="Meenakshi Temple"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'inherit',
                  objectPosition: 'center',
                  objectFit: 'cover',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))',
                }}
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* TREE (Forefront layer on z-index 10) */}
        <div className="framer-1bt2sc7 hero-tree" data-framer-name="Tree">
          <div
            style={{
              position: 'absolute',
              borderRadius: 'inherit',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="auto"
              width="2032"
              height="3072"
              src="/images/hero/hero_trees.webp"
              alt="Tree Frame"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center',
                objectFit: 'cover',
              }}
              draggable="false"
            />
          </div>
        </div>
      </section>
    </>
  );
}
