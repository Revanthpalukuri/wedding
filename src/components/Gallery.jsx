import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Video, Camera, Play } from 'lucide-react';
import { weddingConfig, getYouTubeEmbedUrl } from '../utils/config';

// Dynamically load all images placed in src/images/pre_wedding/
const preWeddingImagesMap = import.meta.glob('../images/pre_wedding/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' });
const preWeddingPhotos = Object.values(preWeddingImagesMap).map((url, idx) => ({
  url,
  title: `Pre-Wedding Moment ${idx + 1}`,
  category: 'Pre-Wedding Photos',
  aspect: idx % 2 === 0 ? 'h-80' : 'h-96',
}));

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % preWeddingPhotos.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + preWeddingPhotos.length) % preWeddingPhotos.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-[#2B0404] text-[#FFF8E7] relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#FFD700] block mb-2 font-semibold">
              Cherished Memories
            </span>
            <h2 className="font-heading-devanagari text-4xl sm:text-6xl text-[#FFF8E7] font-bold">
              Photo & Video Gallery
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />
            <p className="font-serif italic text-lg text-[#FFD700]">
              Relive our romantic pre-wedding story through video and photo memories.
            </p>
          </motion.div>
        </div>

        {/* SECTION 1: Pre-Wedding Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-maroon-panel rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl mandap-arch-border max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#FFD700] flex items-center justify-center">
              <Video className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div>
              <span className="font-sans-clean text-xs uppercase tracking-widest text-[#FFD700] font-bold block">
                Featured Cinema
              </span>
              <h3 className="font-heading-devanagari text-3xl font-bold text-[#FFF8E7]">
                Pre-Wedding Video
              </h3>
            </div>
          </div>

          {/* YouTube Video Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-black">
            <iframe
              src={getYouTubeEmbedUrl(weddingConfig.preWeddingVideoUrl, 'autoplay=1&mute=1&enablejsapi=1')}
              title="Pre-Wedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
          <p className="font-serif italic text-sm text-[#FFD700]/90 text-center mt-4">
            🎬 Direct YouTube Teaser • Playing directly for your enjoyment
          </p>
        </motion.div>

        {/* SECTION 2: Pre-Wedding Photos (Shown under the video) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-[#D4AF37]/30 pb-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#FFD700] flex items-center justify-center">
              <Camera className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div>
              <span className="font-sans-clean text-xs uppercase tracking-widest text-[#FFD700] font-bold block">
                Captured Moments
              </span>
              <h3 className="font-heading-devanagari text-3xl font-bold text-[#FFF8E7]">
                Pre-Wedding Photos
              </h3>
            </div>
          </div>

          {/* Photos Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {preWeddingPhotos.map((img, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={img.url}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl bg-[#3A0303]"
              >
                <div className={`w-full ${img.aspect} relative overflow-hidden`}>
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0404] via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FFF8E7]">
                    <span className="font-sans-clean text-[10px] uppercase tracking-widest text-[#FFD700] font-bold block mb-1">
                      {img.category}
                    </span>
                    <h4 className="font-heading-devanagari text-2xl font-bold">{img.title}</h4>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#FFD700] font-sans-clean font-semibold">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>View Fullscreen</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="max-w-4xl max-h-[85vh] text-center">
                <img
                  src={preWeddingPhotos[activeImageIndex].url}
                  alt={preWeddingPhotos[activeImageIndex].title}
                  className="max-w-full max-h-[70vh] mx-auto object-contain rounded-2xl border-2 border-[#D4AF37] shadow-2xl"
                />
                <div className="mt-6 text-[#FFF8E7]">
                  <span className="font-sans-clean text-xs uppercase tracking-widest text-[#FFD700] font-bold block mb-1">
                    {preWeddingPhotos[activeImageIndex].category}
                  </span>
                  <h3 className="font-heading-devanagari text-3xl font-bold">
                    {preWeddingPhotos[activeImageIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
