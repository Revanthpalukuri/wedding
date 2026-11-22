import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Video, Camera, Sparkles } from 'lucide-react';
import { weddingConfig, getYouTubeEmbedUrl } from '../utils/config';

// Dynamically load all images placed in src/images/pre_wedding/
const preWeddingImagesMap = import.meta.glob('../images/pre_wedding/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' });

const configPhotos = weddingConfig.preWeddingPhotos || [];

const preWeddingPhotos = Object.values(preWeddingImagesMap).map((url, idx) => {
  const itemConfig = configPhotos[idx] || {};
  const caption = typeof itemConfig === 'string' ? itemConfig : (itemConfig.caption || `Moment of Love ${idx + 1} ✨`);
  const title = typeof itemConfig === 'object' && itemConfig.title ? itemConfig.title : `Moment of Love ${idx + 1}`;

  return {
    url,
    title,
    caption,
    category: 'Pre-Wedding Photos',
  };
});

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto detect active slide while scrolling
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth > 640 ? 334 : 270; // card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    const boundedIndex = Math.max(0, Math.min(preWeddingPhotos.length - 1, index));
    if (boundedIndex !== currentSlide) {
      setCurrentSlide(boundedIndex);
    }
  };

  const scrollToSlide = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth > 640 ? 334 : 270;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setCurrentSlide(index);
  };

  // Automatically advance photos every 3.5 seconds in a continuous loop
  useEffect(() => {
    if (isPaused || activeImageIndex !== null || preWeddingPhotos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % preWeddingPhotos.length;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cardWidth = container.offsetWidth > 640 ? 334 : 270;
          container.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth',
          });
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, activeImageIndex, preWeddingPhotos.length]);

  const scrollPrev = () => {
    const nextIndex = currentSlide === 0 ? preWeddingPhotos.length - 1 : currentSlide - 1;
    scrollToSlide(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = (currentSlide + 1) % preWeddingPhotos.length;
    scrollToSlide(nextIndex);
  };

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightboxImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % preWeddingPhotos.length);
  };

  const prevLightboxImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + preWeddingPhotos.length) % preWeddingPhotos.length);
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 bg-[#2B0404] text-[#FFF8E7] relative overflow-hidden">
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
              Photo &amp; Video Gallery
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

          {/* YouTube Video Player / Coming Soon Placeholder */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-black">
            {weddingConfig.isPreWeddingVideoAvailable ? (
              <iframe
                src={getYouTubeEmbedUrl(weddingConfig.preWeddingVideoUrl, 'autoplay=1&mute=1&enablejsapi=1')}
                title="Pre-Wedding Video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 bg-gradient-to-b from-[#250306] via-[#38060c] to-[#160103] overflow-hidden select-none">
                {/* Cinematic background with romantic couple photo */}
                <img
                  src="/images/pre_wedding/prewedding_4.jpg"
                  alt="Vivek & Varshini Pre-Wedding Cinema"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[1px] pointer-events-none scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/70 pointer-events-none" />

                {/* Animated Gold Glowing Film Icon */}
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF8E7] to-[#AA771C] p-0.5 shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-2 sm:mb-3 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#200305] flex items-center justify-center">
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFD700] drop-shadow-md" />
                  </div>
                </div>

                {/* Status Pill */}
                <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-[#D4AF37]/15 border border-[#FFD700]/50 mb-1.5 sm:mb-2">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
                  <span className="font-sans-clean font-bold text-[10px] sm:text-xs uppercase tracking-widest text-[#FFD700]">
                    Cinematic Teaser Coming Soon
                  </span>
                </div>

                {/* Title */}
                <h4 className="relative z-10 font-heading-devanagari text-lg sm:text-2xl md:text-3xl font-bold text-[#FFF8E7] drop-shadow-md">
                  Vivek &amp; Varshini
                </h4>
                <p className="relative z-10 font-script-calligraphy text-xl sm:text-2xl md:text-3xl text-[#FFD700] drop-shadow-sm mt-0.5">
                  A Tale of Forever
                </p>

                {/* Description */}
                <p className="relative z-10 text-[10px] sm:text-xs md:text-sm font-serif italic text-stone-200/90 max-w-md sm:max-w-lg mt-1 sm:mt-2 px-4 leading-relaxed">
                  Our official pre-wedding cinematic film is currently being crafted with love. The premiere video will be released right here soon!
                </p>

                {/* Romantic Tag */}
                <div className="relative z-10 mt-2 sm:mt-3 inline-flex items-center gap-2 text-[10px] sm:text-xs font-sans-clean font-semibold text-amber-300/80">
                  <span>🌸 Stay Tuned for the Magic 🌸</span>
                </div>
              </div>
            )}
          </div>
          <p className="font-serif italic text-sm text-[#FFD700]/90 text-center mt-4">
            {weddingConfig.isPreWeddingVideoAvailable
              ? '🎬 Direct YouTube Teaser • Playing directly for your enjoyment'
              : '🎬 Official Cinematic Premiere • Releasing soon for all our loved ones ✨'}
          </p>
        </motion.div>

        {/* SECTION 2: Animated Horizontal Moments of Love Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Header matching animated style */}
          <div className="text-center mb-6">
            <p className="font-serif text-xs text-[#FFD700] tracking-[0.25em] uppercase font-semibold">
              CAPTURED MOMENTS
            </p>
            <h2 className="font-script-calligraphy text-5xl sm:text-6xl text-[#FFF8E7] mt-2 drop-shadow-md">
              Moments of Love
            </h2>
            <div className="my-4 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#D4AF37]/40"></span>
              <span className="text-[#FFD700] text-lg">❀</span>
              <span className="h-px w-16 bg-[#D4AF37]/40"></span>
            </div>
          </div>

          {/* Animated Carousel Track & Navigation Buttons */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="relative mt-4"
          >
            {/* Left Chevron Button */}
            <button
              onClick={scrollPrev}
              aria-label="Scroll left"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#3A0303]/90 hover:bg-[#580B1A] text-[#FFD700] border border-[#D4AF37]/60 items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={scrollNext}
              aria-label="Scroll right"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#3A0303]/90 hover:bg-[#580B1A] text-[#FFD700] border border-[#D4AF37]/60 items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-5 sm:gap-6 snap-x snap-mandatory py-10 px-4 sm:px-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {preWeddingPhotos.map((photo, idx) => {
                const isActive = currentSlide === idx;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={photo.url}
                    onClick={() => {
                      if (isActive) {
                        openLightbox(idx);
                      } else {
                        scrollToSlide(idx);
                      }
                    }}
                    className={`gallery-card shrink-0 snap-center w-[250px] sm:w-[310px] aspect-[3/4] cursor-pointer transition-all duration-500 ease-out transform ${
                      isActive
                        ? 'scale-105 opacity-100 z-10 shadow-[0_20px_45px_rgba(0,0,0,0.7)] rotate-0'
                        : isEven
                        ? 'rotate-2 scale-95 opacity-60 hover:opacity-90'
                        : '-rotate-2 scale-95 opacity-60 hover:opacity-90'
                    }`}
                  >
                    <div className="w-full h-full rounded-[1.8rem] overflow-hidden border-4 border-white bg-white p-[4px] shadow-2xl transition-shadow duration-300">
                      <div className="w-full h-full rounded-[1.4rem] overflow-hidden relative group bg-black/40">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          loading="lazy"
                          className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                        />
                        {/* Hover Overlay with Search / Zoom Icon */}
                        <div className="absolute inset-0 bg-[#2B0404]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="w-12 h-12 rounded-full bg-white/95 text-[#580B1A] flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform duration-300 text-lg">
                            🔍
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Romantic Caption */}
          <div className="text-center mt-2 min-h-[44px] px-4">
            <p
              key={currentSlide}
              className="font-script-calligraphy text-3xl sm:text-4xl text-[#FFD700] transition-opacity duration-500 drop-shadow-sm"
            >
              {preWeddingPhotos[currentSlide]?.caption || 'With you, every place is magical ✨'}
            </p>
          </div>

          {/* Pagination Pill Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-6 pb-4">
            {preWeddingPhotos.map((_, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                    isActive
                      ? 'w-7 bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.6)]'
                      : 'w-2.5 bg-[#FFD700]/30 hover:bg-[#FFD700]/60'
                  }`}
                />
              );
            })}
          </div>
        </div>

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
                className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevLightboxImage}
                className="absolute left-4 sm:left-8 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextLightboxImage}
                className="absolute right-4 sm:right-8 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="max-w-4xl max-h-[85vh] text-center">
                <img
                  src={preWeddingPhotos[activeImageIndex].url}
                  alt={preWeddingPhotos[activeImageIndex].title}
                  className="max-w-full max-h-[70vh] mx-auto object-contain rounded-2xl border-4 border-white shadow-2xl"
                />
                <div className="mt-6 text-[#FFF8E7]">
                  <span className="font-sans-clean text-xs uppercase tracking-widest text-[#FFD700] font-bold block mb-1">
                    {preWeddingPhotos[activeImageIndex].category}
                  </span>
                  <h3 className="font-script-calligraphy text-4xl text-[#FFD700] drop-shadow-md">
                    {preWeddingPhotos[activeImageIndex].caption}
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
