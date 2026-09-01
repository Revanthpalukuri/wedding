import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
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
} from 'lucide-react';
import { weddingConfig, getYouTubeId, getYouTubeWatchUrl, getYouTubeEmbedUrl } from '../utils/config';

export default function LiveStream() {
  const videoId = getYouTubeId(weddingConfig.liveWeddingStreamUrl);
  const [copied, setCopied] = useState(false);
  const [blessingCount, setBlessingCount] = useState(108);

  const youtubeWatchUrl = getYouTubeWatchUrl(weddingConfig.liveWeddingStreamUrl);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(weddingConfig.liveWeddingStreamUrl, 'autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(youtubeWatchUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShowerBlessings = (type) => {
    setBlessingCount((prev) => prev + 1);

    if (type === 'flowers') {
      // Pushpa Vrishti - Flower Petals & Bloom Sprinkles
      const f1 = confetti.shapeFromText({ text: '🌸', scalar: 2.2 });
      const f2 = confetti.shapeFromText({ text: '🪷', scalar: 2.2 });
      const f3 = confetti.shapeFromText({ text: '🌺', scalar: 2.2 });
      const f4 = confetti.shapeFromText({ text: '🌼', scalar: 2.2 });
      const f5 = confetti.shapeFromText({ text: '🌹', scalar: 2.2 });

      confetti({
        shapes: [f1, f2, f3, f4, f5],
        scalar: 2.2,
        particleCount: 45,
        spread: 100,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#FF69B4', '#FFD700', '#FF1493', '#FFA500', '#FF4500'],
        ticks: 220,
        gravity: 0.85,
        drift: 0,
      });
    } else if (type === 'hearts') {
      // Love & Blessings - Romantic Heart & Love Symbol Sprinkles
      const h1 = confetti.shapeFromText({ text: '❤️', scalar: 2.2 });
      const h2 = confetti.shapeFromText({ text: '💖', scalar: 2.2 });
      const h3 = confetti.shapeFromText({ text: '💕', scalar: 2.2 });
      const h4 = confetti.shapeFromText({ text: '🥰', scalar: 2.2 });
      const h5 = confetti.shapeFromText({ text: '💐', scalar: 2.2 });

      confetti({
        shapes: [h1, h2, h3, h4, h5],
        scalar: 2.2,
        particleCount: 45,
        spread: 90,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#E11D48', '#FB7185', '#FFD700', '#F43F5E'],
        ticks: 220,
        gravity: 0.85,
        drift: 0,
      });
    } else {
      // Akshatalu - Sacred Golden Sparkles
      const s1 = confetti.shapeFromText({ text: '✨', scalar: 2 });
      const s2 = confetti.shapeFromText({ text: '🌟', scalar: 2 });

      confetti({
        shapes: [s1, s2, 'circle'],
        scalar: 1.8,
        particleCount: 50,
        spread: 100,
        origin: { x: 0.5, y: 0.65 },
        colors: ['#FFD700', '#D4AF37', '#FFF8E7', '#FBBF24'],
        ticks: 200,
        gravity: 0.9,
      });
    }
  };

  return (
    <section id="live" className="py-8 sm:py-14 px-3 sm:px-6 bg-[#260305] text-[#FFF8E7] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Full Background Image */}
      <img
        src="/images/live_stream/WatchWeddingLive.png"
        alt="Watch Wedding Live Background"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        draggable="false"
      />

      {/* Content Container - Compact & Centered */}
      <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-[1000px] mx-auto relative z-10 pt-2 sm:pt-4">
        {/* Main Video Broadcast Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-maroon-panel p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative"
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
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                <Radio className="w-3 h-3 text-red-400 animate-pulse" />
                <span>Live Stream</span>
              </span>
            </div>
          </div>

          {/* Compact 16:9 YouTube Video Embed Container */}
          <div className="relative w-full aspect-video max-h-[220px] sm:max-h-[300px] md:max-h-[350px] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-300/40 shadow-2xl bg-black mx-auto">
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
            {/* Stream Event Details (Only Date & Time) */}
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
              </div>
            </div>

            {/* Action Buttons: Watch on YouTube & Share Stream */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-sans-clean text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-stone-900/90 border border-[#D4AF37] hover:border-[#FFD700] hover:bg-stone-800 text-amber-300 font-sans-clean text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105 cursor-pointer"
                title="Copy Live Stream Link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-amber-400" />}
                <span>{copied ? 'Link Copied!' : 'Share Stream'}</span>
              </button>
            </div>
          </div>

          {/* Virtual Blessings / Flower Shower Interactive Reaction Bar */}
          <div className="mt-2.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1D0204]/90 via-[#340508]/80 to-[#1D0204]/90 border border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400 animate-flame" />
              <span className="font-sans-clean text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
                Virtual Blessings &amp; Reactions ({blessingCount})
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
                <span>Love &amp; Blessings</span>
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
