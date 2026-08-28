import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles, Navigation } from 'lucide-react';

export default function Events() {
  const eventsList = [
    {
      title: 'Haldi & Mehendi',
      subtitle: 'Saffron & Henna',
      date: '17 December 2026',
      time: '10:00 AM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      address: 'Kshatriya Kalyana Mandapam, Amalapuram, Andhra Pradesh',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
      description: 'Join us for a bright morning of turmeric blessings, intricate henna, and folk dance.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Sangeet & Musical Night',
      subtitle: 'Dance & Festivities',
      date: '18 December 2026',
      time: '06:30 PM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      address: 'Kshatriya Kalyana Mandapam, Amalapuram, Andhra Pradesh',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
      description: 'An evening filled with family dance performances, live classical fusion music, and feast.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Wedding Ceremony (Sumuhurtham)',
      subtitle: 'Vivek & Varshini',
      date: '19 December 2026',
      time: '03:35 AM IST (Early Morning)',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      address: 'Kshatriya Kalyana Mandapam, Amalapuram, Andhra Pradesh',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
      description: 'Witness our sacred Vedic vows, Jeelakarra Bellam, and traditional wedding rituals in the presence of loved ones.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Grand Reception',
      subtitle: 'Evening Feast',
      date: '19 December 2026',
      time: '07:00 PM IST',
      venue: 'KSHATRIYA KALYANA MANDAPAM',
      address: 'Kshatriya Kalyana Mandapam, Amalapuram, Andhra Pradesh',
      mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
      description: 'Celebrate our holy union with gourmet South & North Indian cuisine and musical orchestra.',
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section id="events" className="relative min-h-screen temple-gopuram-pattern-bg py-24 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-amber-300 block mb-2 font-bold">
              Sacred Occasions
            </span>
            <h2 className="font-cinzel text-4xl sm:text-6xl text-white font-bold drop-shadow-md">
              Wedding Functions
            </h2>
            <div className="w-20 h-[2px] bg-amber-400 mx-auto my-4" />
          </motion.div>
        </div>

        {/* Floating Cards Grid (Screenshot 4 Exact Framing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsList.map((evt, idx) => (
            <motion.div
              key={evt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="temple-floating-card p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Inner Card Carousel / Header */}
              <div>
                <div className="flex items-center justify-between text-sky-700 font-sans-clean text-xs uppercase tracking-widest font-bold mb-3">
                  <span>{evt.subtitle || 'Vivek & Varshini'}</span>
                  <Sparkles className="w-4 h-4 text-sky-600" />
                </div>

                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border-2 border-sky-100 shadow-md">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent" />
                </div>

                <h3 className="font-sans-clean text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {evt.title}
                </h3>

                <div className="space-y-2 text-sm font-sans-clean text-slate-700 font-semibold mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sky-600" />
                    <span>{evt.date}</span>
                    <span className="mx-2 text-slate-300">•</span>
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span>{evt.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-900 font-bold pt-1">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                <p className="font-sans-clean text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {evt.description}
                </p>
              </div>

              {/* View Location Pill Button (Screenshot 4 Exact Button) */}
              <div className="pt-2">
                <a
                  href={evt.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-900 text-white hover:bg-blue-800 font-sans-clean text-xs uppercase tracking-wider font-bold shadow-lg transition-all hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>View Location</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
