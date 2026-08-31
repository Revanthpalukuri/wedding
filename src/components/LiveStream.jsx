import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Video,
  Radio,
  ExternalLink,
  Share2,
  Sparkles,
  Heart,
  Flame,
  Settings,
  Check,
  Calendar,
  Clock,
  MapPin,
  Tv,
} from 'lucide-react';

export default function LiveStream({ initialVideoId = 'jfKfPfyJRdk' }) {
  const [videoId, setVideoId] = useState(initialVideoId);
  const [tempId, setTempId] = useState(initialVideoId);
  const [showConfig, setShowConfig] = useState(false);
  const [copied, setCopied] = useState(false);
  const [blessingCount, setBlessingCount] = useState(108);

  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(youtubeWatchUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShowerBlessings = (type) => {
    setBlessingCount((prev) => prev + 1);

    if (type === 'flowers') {
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#FF69B4', '#FF4500', '#FFF8E7'],
      });
    } else if (type === 'hearts') {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#E11D48', '#FB7185', '#FFD700', '#F43F5E'],
      });
    } else {
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#FFF8E7'],
      });
    }
  };

  const handleSaveVideoId = (e) => {
    e.preventDefault();
    // Extract video ID if full URL pasted
    let cleanId = tempId.trim();
    if (cleanId.includes('v=')) {
      cleanId = cleanId.split('v=')[1].split('&')[0];
    } else if (cleanId.includes('youtu.be/')) {
      cleanId = cleanId.split('youtu.be/')[1].split('?')[0];
    } else if (cleanId.includes('live/')) {
      cleanId = cleanId.split('live/')[1].split('?')[0];
    }
    setVideoId(cleanId);
    setShowConfig(false);
  };

  return (
    <section id="live" className="py-8 sm:py-14 px-3 sm:px-6 bg-[#260305] text-[#FFF8E7] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Full Background Image (100% fit, zero cropping) */}
      <img
        src="/WatchWeddingLive.png"
        alt="Watch Wedding Live Background"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        draggable="false"
      />

      {/* Content Container (Expanded width left & right, compact bottom) */}
      <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-[1100px] mx-auto relative z-10 pt-2 sm:pt-4">
        {/* Main Video Broadcast Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-maroon-panel p-2.5 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative"
        >
          {/* Top Bar above player */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D4AF37]/30 text-xs font-sans-clean font-semibold">
            <div className="flex items-center gap-2 text-amber-300">
              <Tv className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="uppercase tracking-widest font-bold text-[10px] sm:text-xs">Sumuhurtham Broadcast</span>
              <span className="text-[#FFF8E7]/40">•</span>
              <span className="text-white/80 text-[10px] sm:text-xs">Kshatriya Kalyana Mandapam</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Change Stream URL / Video ID Button */}
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 border border-[#D4AF37]/40 text-amber-300 hover:text-white hover:border-[#FFD700] transition-colors text-[10px] sm:text-[11px]"
                title="Configure YouTube Stream Link"
              >
                <Settings className="w-3 h-3" />
                <span>Stream Settings</span>
              </button>

              {/* Share / Copy Link */}
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 border border-[#D4AF37]/40 text-amber-300 hover:text-white hover:border-[#FFD700] transition-colors text-[10px] sm:text-[11px]"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Share2 className="w-3 h-3" />}
                <span>{copied ? 'Link Copied!' : 'Share Stream'}</span>
              </button>
            </div>
          </div>

          {/* YouTube Video ID Config Drawer */}
          <AnimatePresence>
            {showConfig && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSaveVideoId}
                className="mb-2 p-2.5 rounded-xl bg-black/70 border border-amber-400/50 flex flex-col sm:flex-row items-center gap-2 overflow-hidden text-xs"
              >
                <div className="flex-1 w-full text-left">
                  <label className="block text-amber-300 font-bold mb-0.5 text-[11px]">
                    YouTube Video ID or Live Stream Link:
                  </label>
                  <input
                    type="text"
                    value={tempId}
                    onChange={(e) => setTempId(e.target.value)}
                    placeholder="e.g. jfKfPfyJRdk or https://youtube.com/live/..."
                    className="w-full px-2.5 py-1 rounded-lg bg-stone-900 border border-amber-300/40 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto pt-1">
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-lg bg-amber-500 text-stone-950 font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors cursor-pointer text-xs"
                  >
                    Update Stream
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowConfig(false)}
                    className="px-2 py-1 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Compact 16:9 YouTube Video Embed Container */}
          <div className="relative w-full aspect-video max-h-[260px] sm:max-h-[340px] md:max-h-[390px] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-300/40 shadow-2xl bg-black mx-auto">
            <iframe
              src={youtubeEmbedUrl}
              title="Vivek & Varshini Wedding Live YouTube Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Bottom Interactive Bar */}
          <div className="mt-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-[#D4AF37]/30">
            {/* Stream Event Details */}
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-[11px] sm:text-xs font-sans-clean text-amber-200">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  19 December 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-bold text-white">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  03:35 AM IST (Early Morning)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Kshatriya Kalyana Mandapam
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#FFF8E7]/70 font-sans-clean">
                Click Play above or watch on YouTube app with live chat & celebrations.
              </p>
            </div>

            {/* Direct Watch on YouTube Button */}
            <div className="flex items-center gap-2">
              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-sans-clean text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Virtual Blessings / Flower Shower Interactive Reaction Bar (Streamlined) */}
          <div className="mt-2.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1D0204]/90 via-[#340508]/80 to-[#1D0204]/90 border border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400 animate-flame" />
              <span className="font-sans-clean text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
                Virtual Blessings & Reactions ({blessingCount})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => handleShowerBlessings('flowers')}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 hover:bg-amber-500 hover:text-stone-950 text-amber-200 text-[10px] sm:text-xs font-sans-clean font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>🪷 Pushpa Vrishti</span>
              </button>

              <button
                onClick={() => handleShowerBlessings('hearts')}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/50 hover:bg-rose-600 hover:text-white text-rose-200 text-[10px] sm:text-xs font-sans-clean font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Heart className="w-3 h-3 fill-current text-rose-400" />
                <span>Love & Blessings</span>
              </button>

              <button
                onClick={() => handleShowerBlessings('gold')}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/50 hover:bg-yellow-400 hover:text-stone-950 text-yellow-200 text-[10px] sm:text-xs font-sans-clean font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span>Akshatalu</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
