import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerBlessingShower } from '../utils/blessings';
import {
  Video,
  Radio,
  ExternalLink,
  Share2,
  Sparkles,
  Heart,
  Flame,
  Check,
  Calendar,
  Clock,
  Tv,
  Bell,
} from 'lucide-react';
import { weddingConfig, getYouTubeId, getYouTubeWatchUrl, getYouTubeEmbedUrl } from '../utils/config';

export default function LiveStream() {
  const videoId = getYouTubeId(weddingConfig.liveWeddingStreamUrl);
  const [copied, setCopied] = useState(false);
  const [blessingCount, setBlessingCount] = useState(108);

  const youtubeWatchUrl = getYouTubeWatchUrl(weddingConfig.liveWeddingStreamUrl);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(weddingConfig.liveWeddingStreamUrl, 'autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1');

  // Real-time countdown to wedding auspicious muhurtham
  const targetDate = new Date('2026-12-19T03:44:00+05:30');
  const calculateTimeLeft = () => {
    const diff = +targetDate - +new Date();
    if (diff > 0) {
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(youtubeWatchUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const [reactionBadge, setReactionBadge] = useState(null);

  const handleShowerBlessings = (type) => {
    setBlessingCount((prev) => prev + 1);

    const badgeLabel =
      type === 'flowers'
        ? '+1 🪷 Pushpa Vrishti!'
        : type === 'hearts'
        ? '+1 💖 Love & Blessings!'
        : '+1 ✨ Akshatalu!';

    setReactionBadge({ text: badgeLabel, id: Date.now() });
    setTimeout(() => {
      setReactionBadge((curr) => (curr?.text === badgeLabel ? null : curr));
    }, 1800);

    triggerBlessingShower(type);
  };

  return (
    <section
      id="live"
      className="w-full bg-[#210202] text-[#FFF8E7] relative overflow-hidden flex flex-col items-center justify-center select-none pb-5 sm:pb-6"
    >
      {/* 1. Full-Width Edge-to-Edge 1672:941 Live Broadcast Frame (No side empty gaps) */}
      <div className="relative w-full aspect-[1672/941] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-y border-[#D4AF37]/50">
        {/* Edge-to-Edge Background Artwork (Zero Zoom, Zero Crop, 100% Full Width) */}
        <img
          src="/images/live_stream/WatchWeddingLive.png"
          alt="Watch Wedding Live Broadcast Frame"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          draggable="false"
        />

        {/* Video Player Fitted Exactly in the Inner Gold Screen Opening */}
        <div className="absolute top-[13.6%] bottom-[20.8%] left-[17.4%] right-[17.4%] rounded-[3px] sm:rounded-lg md:rounded-xl overflow-hidden z-10 bg-black shadow-2xl">
          {weddingConfig.isLiveStreamAvailable ? (
            <iframe
              src={youtubeEmbedUrl}
              title="Vivek & Varshini Wedding Live YouTube Stream"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-2 sm:p-4 md:p-6 bg-gradient-to-b from-[#210204] via-[#330408] to-[#120103] overflow-hidden select-none">
              {/* Romantic couple background image with low opacity & soft gradient */}
              <img
                src="/images/pre_wedding/prewedding_1.jpg"
                alt="Vivek & Varshini"
                className="absolute inset-0 w-full h-full object-cover opacity-15 filter blur-[1px] pointer-events-none scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

              {/* Glowing Live Soon Badge */}
              <div className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-red-950/80 border border-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.3)] mb-1 sm:mb-2">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500"></span>
                </span>
                <span className="font-sans-clean font-extrabold text-[8px] sm:text-xs uppercase tracking-wider text-red-200">
                  Live Broadcast Available Soon
                </span>
              </div>

              {/* Main Heading */}
              <h3 className="relative z-10 font-heading-devanagari text-xs sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#FFF8E7] drop-shadow-md leading-tight">
                Vivek Weds Varshini
              </h3>

              {/* Auspicious Muhurtham Tag */}
              <p className="relative z-10 font-serif italic text-[8px] sm:text-xs md:text-sm text-[#FFD700] mt-0.5 sm:mt-1">
                Auspicious Muhurtham: 19 December 2026 • 03:44 AM IST
              </p>

              {/* Mini Countdown Timer Boxes */}
              <div className="relative z-10 flex items-center justify-center gap-1 sm:gap-2.5 md:gap-3 mt-1 sm:mt-2.5">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-8 sm:w-12 md:w-16 py-0.5 sm:py-1.5 rounded sm:rounded-lg bg-black/60 border border-[#D4AF37]/40 shadow-inner backdrop-blur-xs"
                  >
                    <span className="font-sans-clean font-black text-[10px] sm:text-sm md:text-xl text-[#FFF8E7] leading-none">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="font-sans-clean text-[6px] sm:text-[9px] uppercase tracking-wider text-[#FFD700]/80 mt-0.5 leading-none">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Inviting Subtext */}
              <p className="relative z-10 text-[8px] sm:text-[11px] md:text-xs font-sans-clean text-stone-300/90 max-w-md mt-1 sm:mt-2.5 hidden xs:block">
                Streaming will commence on the wedding morning. Join us to bestow your sacred blessings.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Interactive Action Bar & Virtual Blessings (Centered neatly with symmetrical spacing) */}
      <div className="w-full max-w-5xl px-4 sm:px-6 mt-5 sm:mt-6 space-y-3 sm:space-y-4">
        {/* Stream Details & Action Buttons Bar */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#340508]/90 border border-[#D4AF37]/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Stream Schedule Details */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-sans-clean text-amber-200">
            <span className="flex items-center gap-1.5 font-semibold">
              <Calendar className="w-4 h-4 text-amber-400" />
              19 December 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-bold text-white">
              <Clock className="w-4 h-4 text-amber-400" />
              03:44 AM IST (Early Morning)
            </span>
          </div>

          {/* Action Buttons: Watch on YouTube & Share Stream */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open wedding broadcast stream directly on YouTube"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-sans-clean text-[10px] sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{weddingConfig.isLiveStreamAvailable ? 'Watch on YouTube' : 'Set YouTube Reminder'}</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80" />
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copy live wedding broadcast link to clipboard"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-stone-900/90 border border-[#D4AF37] hover:border-[#FFD700] hover:bg-stone-800 text-amber-300 font-sans-clean text-[10px] sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105 cursor-pointer"
              title="Copy Live Stream Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />}
              <span>{copied ? 'Link Copied!' : 'Share Stream'}</span>
            </button>
          </div>
        </div>

        {/* Virtual Blessings / Flower Shower Reaction Bar */}
        <div className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1D0204]/95 via-[#3A0303]/90 to-[#1D0204]/95 border border-[#D4AF37]/50 shadow-xl flex flex-wrap items-center justify-between gap-3">
          {/* Floating Reaction Confirmation Badge */}
          <AnimatePresence>
            {reactionBadge && (
              <motion.div
                key={reactionBadge.id}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -26, scale: 1 }}
                exit={{ opacity: 0, y: -38, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute -top-3 right-4 sm:right-6 pointer-events-none z-30 px-3 py-1 rounded-full bg-amber-400 text-stone-950 font-sans-clean text-xs font-black shadow-[0_4px_12px_rgba(255,215,0,0.5)] border border-yellow-200"
              >
                {reactionBadge.text}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400 animate-flame" />
            <span className="font-sans-clean text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300">
              Virtual Blessings &amp; Reactions ({blessingCount})
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleShowerBlessings('flowers')}
              aria-label="Shower Pushpa Vrishti flower petals blessing animation"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/25 border border-amber-400/60 hover:bg-amber-500 hover:text-stone-950 text-amber-200 text-xs font-sans-clean font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer touch-manipulation shadow-md"
            >
              <span>🪷 Pushpa Vrishti</span>
            </button>

            <button
              onClick={() => handleShowerBlessings('hearts')}
              aria-label="Shower love and romantic blessings animation"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/25 border border-rose-400/60 hover:bg-rose-600 hover:text-white text-rose-200 text-xs font-sans-clean font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer touch-manipulation shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
              <span>Love &amp; Blessings</span>
            </button>

            <button
              onClick={() => handleShowerBlessings('gold')}
              aria-label="Shower sacred Akshatalu golden sparkles blessing animation"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-yellow-500/25 border border-yellow-400/60 hover:bg-yellow-400 hover:text-stone-950 text-yellow-200 text-xs font-sans-clean font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer touch-manipulation shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Akshatalu</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
