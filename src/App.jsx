import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnvelopeGate from './components/EnvelopeGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoupleIllustration from './components/CoupleIllustration';
import InvitationCard from './components/InvitationCard';
import Events from './components/Events';
import LiveStream from './components/LiveStream';
import OurStory from './components/OurStory';
import JoinUsInstagram from './components/JoinUsInstagram';
import CountingDaysMagic from './components/CountingDaysMagic';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import MouseFollower from './components/MouseFollower';
import FestivePopAnimation from './components/FestivePopAnimation';
import FloatingMusiciansBanner from './components/FloatingMusiciansBanner';

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
    <div className="min-h-screen bg-[#2D68C4] text-[#FFF8E7] relative selection:bg-[#FFD700] selection:text-[#1E293B]">
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
          <LiveStream />
          <OurStory />
          <JoinUsInstagram />
          <Schedule />
          <Gallery />
          <CountingDaysMagic />
        </main>

        {/* Persistent Floating Cartoon Musicians Video Overlay Throughout Page */}
        <FloatingMusiciansBanner />
      </div>
    </div>
  );
}
