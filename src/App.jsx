import React, { useState, useEffect, lazy, Suspense } from 'react';
import EnvelopeGate from './components/EnvelopeGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoupleIllustration from './components/CoupleIllustration';
import InvitationCard from './components/InvitationCard';
import Events from './components/Events';
import OurStory from './components/OurStory';
import MusicPlayer from './components/MusicPlayer';
import MouseFollower from './components/MouseFollower';
import FestivePopAnimation from './components/FestivePopAnimation';
import FloatingMusiciansBanner from './components/FloatingMusiciansBanner';
import BlessingShower from './components/BlessingShower';

// Lazy-loaded Below-the-Fold Components (Drastically reduces initial JavaScript load)
const LiveStream = lazy(() => import('./components/LiveStream'));
const JoinUsInstagram = lazy(() => import('./components/JoinUsInstagram'));
const Schedule = lazy(() => import('./components/Schedule'));
const Gallery = lazy(() => import('./components/Gallery'));
const CountingDaysMagic = lazy(() => import('./components/CountingDaysMagic'));

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [triggerPop, setTriggerPop] = useState(0);

  // Clear any past session storage so Envelope page always appears on fresh load
  useEffect(() => {
    try {
      sessionStorage.removeItem('wedding_opened');
    } catch (_) {}
  }, []);

  // Ensure body and html overflow styles are completely clear for native scrolling
  useEffect(() => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, [isOpened]);

  // If gate is closed, scrolling with mouse wheel down or pressing down/space opens the invitation
  useEffect(() => {
    if (isOpened) return;

    const handleInitialWheel = (e) => {
      if (e.deltaY > 15) {
        handleOpenEnvelope();
      }
    };

    const handleInitialKey = (e) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        handleOpenEnvelope();
      }
    };

    window.addEventListener('wheel', handleInitialWheel, { passive: true });
    window.addEventListener('keydown', handleInitialKey);

    return () => {
      window.removeEventListener('wheel', handleInitialWheel);
      window.removeEventListener('keydown', handleInitialKey);
    };
  }, [isOpened]);

  // Sync mobile browser address bar theme-color on scroll
  useEffect(() => {
    const metaThemeColor = document.getElementById('meta-theme-color');
    if (!metaThemeColor) return;

    const handleScrollTheme = () => {
      const storyEl = document.getElementById('story');
      if (storyEl && storyEl.getBoundingClientRect().top <= 80) {
        metaThemeColor.setAttribute('content', '#3A0303');
      } else {
        metaThemeColor.setAttribute('content', '#257CE6');
      }
    };

    window.addEventListener('scroll', handleScrollTheme, { passive: true });
    handleScrollTheme();

    return () => {
      window.removeEventListener('scroll', handleScrollTheme);
    };
  }, []);

  // Strictly prevent overscroll and dragging past the end of the page on mobile
  useEffect(() => {
    let touchStartY = 0;

    const getMaxScroll = () => {
      return Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) - window.innerHeight;
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isOpened) return;
      if (!e.touches || e.touches.length !== 1) return;

      const currentY = e.touches[0].clientY;
      const deltaY = currentY - touchStartY;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const maxScroll = getMaxScroll();

      // At bottom ending boundary: strictly lock upward dragging (deltaY < 0), preventing rubber-banding or movement beyond the page
      if (scrollTop >= maxScroll - 1 && deltaY < 0) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }

      // Continuously update touchStartY so reversals (dragging down to scroll up) react instantaneously
      touchStartY = currentY;
    };

    const handleWheel = (e) => {
      if (!isOpened) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const maxScroll = getMaxScroll();
      if (scrollTop >= maxScroll - 1 && e.deltaY > 0) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    const handleScrollClamp = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const maxScroll = getMaxScroll();
      if (maxScroll > 0 && scrollTop > maxScroll) {
        window.scrollTo({ top: maxScroll, left: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScrollClamp, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScrollClamp);
    };
  }, [isOpened]);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setIsMuted(false);
    setTriggerPop((prev) => prev + 1);
  };

  const toggleAudio = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#340406] text-[#FFF8E7] relative selection:bg-[#FFD700] selection:text-[#1E293B]">
      {/* Luxury Mouse Follower */}
      <MouseFollower />

      {/* Initial Gate Invitation Card - Shown on start */}
      <EnvelopeGate onOpen={handleOpenEnvelope} isOpen={isOpened} />

      {/* Floating Shehnai/Flute Audio Player (Initialized early, UI shown when opened) */}
      <MusicPlayer isMuted={isMuted} toggleAudio={toggleAudio} isOpened={isOpened} />

      {/* Main Website Invitation Content - Pre-mounted so images & components load instantly */}
      <div className={isOpened ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 pointer-events-none'}>
        {/* Festive Party Pop Cannon & Ambient Floating Sparkles */}
        <FestivePopAnimation triggerOnOpen={triggerPop} />

        {/* Dynamic Falling Blessing Shower (Flowers, Hearts & Akshatalu) */}
        <BlessingShower />

        {/* Floating Navbar */}
        <Navbar isMuted={isMuted} toggleAudio={toggleAudio} />

        {/* Main Temple Theme Sections */}
        <main>
          <Hero />
          <InvitationCard />
          <CoupleIllustration />
          <Events />
          <OurStory />
          
          {/* Below-the-fold sections */}
          <Suspense fallback={<div className="w-full h-40 bg-transparent" />}>
            <LiveStream />
            <Schedule />
            <Gallery />
            <JoinUsInstagram />
            <CountingDaysMagic />
          </Suspense>
        </main>

        {/* Persistent Floating Cartoon Musicians Video Overlay Throughout Page */}
        <FloatingMusiciansBanner />
      </div>
    </div>
  );
}
