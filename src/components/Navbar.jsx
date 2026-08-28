import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Sparkles, Flame } from 'lucide-react';

export default function Navbar({ isMuted, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('blue'); // 'blue' | 'maroon'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);

      // Detect when #story section comes into view
      const storyEl = document.getElementById('story');
      if (storyEl) {
        const storyTop = storyEl.getBoundingClientRect().top;
        // Until #story reaches near top of screen (100px threshold), header remains BLUE.
        // From #story onwards, header switches to MAROON / BROWN.
        if (storyTop <= 100) {
          setHeaderTheme('maroon');
        } else {
          setHeaderTheme('blue');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Invitation', href: '#invite' },
    { name: 'Groom & Bride', href: '#varmala' },
    { name: 'Ceremonies', href: '#events' },
    { name: 'Live Stream 🔴', href: '#live' },
    { name: 'Our Story', href: '#story' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Travel', href: '#travel' },
  ];

  const isBlue = headerTheme === 'blue';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? isBlue
            ? 'bg-[#1E60BF]/90 backdrop-blur-md border-b border-amber-200/40 py-3.5 shadow-xl'
            : 'bg-[#3A0303]/95 backdrop-blur-md border-b border-[#D4AF37]/40 py-3.5 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="font-heading-devanagari text-2xl sm:text-3xl text-amber-300 tracking-wider group-hover:text-white transition-colors duration-300">
            Vivek & Varshini
          </span>
          <Flame className="w-4 h-4 text-amber-300 animate-flame" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans-clean text-xs uppercase tracking-[0.2em] text-white hover:text-amber-300 transition-colors duration-300 relative group py-1 font-semibold"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Audio Toggle Button */}
          <button
            onClick={toggleAudio}
            className={`p-2.5 rounded-full border transition-all duration-500 shadow-md ${
              isBlue
                ? 'border-amber-200/60 bg-[#1E60BF] text-amber-200 hover:bg-white hover:text-[#1E60BF]'
                : 'border-[#D4AF37]/60 bg-[#3A0303] text-[#FFD700] hover:bg-[#D4AF37] hover:text-[#3A0303]'
            }`}
            title={isMuted ? 'Unmute Shehnai & Flute Music' : 'Mute Music'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* RSVP Desktop Button */}
          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full royal-gold-button font-sans-clean text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Send Blessings / RSVP</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-amber-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b px-6 py-6 shadow-2xl transition-colors duration-500 ${
              isBlue
                ? 'bg-[#1E60BF] border-amber-200/30'
                : 'bg-[#3A0303] border-[#D4AF37]/30'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans-clean text-sm uppercase tracking-[0.2em] text-white hover:text-amber-300 transition-colors py-2 border-b border-white/10"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-full royal-gold-button font-sans-clean text-xs uppercase tracking-[0.2em] font-bold"
              >
                Send Blessings / RSVP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
