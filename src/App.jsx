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

  // Disable browser automatic scroll restoration and force top: 0 on start
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Lock scroll while gate is closed and strictly reset scroll to top on open
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpened]);

  // Dynamic overscroll control: allow top pull-down to reload, lock bottom ending page, and sync theme-color
  useEffect(() => {
    let touchStartY = 0;
    const metaThemeColor = document.getElementById('meta-theme-color');

    const getMaxScroll = () => {
      return Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) - window.innerHeight;
    };

    const handleScrollThemeAndLock = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const maxScroll = getMaxScroll();
      const storyEl = document.getElementById('story');

      // Theme color for mobile address bar
      if (metaThemeColor) {
        if (storyEl && storyEl.getBoundingClientRect().top <= 80) {
          metaThemeColor.setAttribute('content', '#3A0303');
        } else {
          metaThemeColor.setAttribute('content', '#257CE6');
        }
      }

      // Dynamic overscroll-behavior-y:
      // At the top of page: 'auto' so user can pull down to reload
      // Scrolled down: 'none' so mobile browser cannot bounce or overscroll past the ending page!
      if (scrollY < 120) {
        document.documentElement.style.overscrollBehaviorY = 'auto';
        document.body.style.overscrollBehaviorY = 'auto';
      } else {
        document.documentElement.style.overscrollBehaviorY = 'none';
        document.body.style.overscrollBehaviorY = 'none';
      }

      // Hard clamp: strictly prevent scrolling beyond ending page
      if (scrollY > maxScroll && maxScroll > 0) {
        window.scrollTo({ top: maxScroll, left: 0, behavior: 'instant' });
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isOpened) {
        if (e.cancelable) e.preventDefault();
        return;
      }

      if (!e.touches || e.touches.length !== 1) return;
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - touchStartY;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const maxScroll = getMaxScroll();

      // At bottom boundary: strictly lock upward dragging (prevents rubber-banding/overflow past the ending page)
      if (scrollTop >= maxScroll - 2 && deltaY < 0) {
        if (e.cancelable) e.preventDefault();
      }
    };

    const handleWheel = (e) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const maxScroll = getMaxScroll();
      if (scrollTop >= maxScroll - 1 && e.deltaY > 0) {
        if (e.cancelable) e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScrollThemeAndLock, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });

    handleScrollThemeAndLock();

    return () => {
      window.removeEventListener('scroll', handleScrollThemeAndLock);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpened]);

  const handleOpenEnvelope = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsOpened(true);
    setIsMuted(false);
    setTriggerPop((prev) => prev + 1);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  };

  const toggleAudio = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#340406] text-[#FFF8E7] relative selection:bg-[#FFD700] selection:text-[#1E293B]">
      {/* Luxury Mouse Follower */}
      <MouseFollower />

      {/* Initial Gate Invitation Card - Shown on start */}
      <EnvelopeGate onOpen={handleOpenEnvelope} />

      {/* Floating Shehnai/Flute Audio Player (Initialized early, UI shown when opened) */}
      <MusicPlayer isMuted={isMuted} toggleAudio={toggleAudio} isOpened={isOpened} />

      {/* Main Website Invitation Content - Pre-mounted so images & components load instantly */}
      <div className={isOpened ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 pointer-events-none'}>
        {/* Festive Party Pop Cannon & Ambient Floating Sparkles */}
        <FestivePopAnimation triggerOnOpen={triggerPop} />

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
