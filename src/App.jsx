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
import TravelStay from './components/TravelStay';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import MouseFollower from './components/MouseFollower';
import FestivePopAnimation from './components/FestivePopAnimation';
import FloatingMusiciansBanner from './components/FloatingMusiciansBanner';

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [triggerPop, setTriggerPop] = useState(0);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setIsMuted(false);
    setTriggerPop((prev) => prev + 1);
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

      {/* Main Website Invitation Content - Displayed ONLY after clicking Open Invitation */}
      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
            <CountingDaysMagic />
            <Schedule />
            <Gallery />
            <TravelStay />
            <RSVP />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Shehnai/Flute Audio Player */}
          <MusicPlayer isMuted={isMuted} toggleAudio={toggleAudio} />

          {/* Persistent Floating Cartoon Musicians Video Overlay Throughout Page */}
          <FloatingMusiciansBanner />
        </motion.div>
      )}
    </div>
  );
}
