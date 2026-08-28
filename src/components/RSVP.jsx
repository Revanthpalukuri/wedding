import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, Phone, Users, Utensils, MessageSquare, Flame } from 'lucide-react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'attending',
    guests: '2',
    meal: 'Traditional South Indian Satvik Sadhya (Pure Veg)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Golden Marigold & Crimson Confetti Explosion
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#D4AF37', '#8B0000', '#FFA500', '#FFF8E7'],
      });

      try {
        localStorage.setItem('wedding_rsvp_indian', JSON.stringify(formData));
      } catch (err) {
        console.error('Storage error', err);
      }
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="rsvp" className="py-24 px-6 bg-[#3A0303] text-[#FFF8E7] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10">
              <Flame className="w-5 h-5 text-[#FFD700] animate-flame" />
            </div>

            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-[#FFD700] block mb-2 font-semibold">
              Shubh Aagaman & Blessings
            </span>
            <h2 className="font-heading-devanagari text-4xl sm:text-6xl text-[#FFF8E7] font-bold">
              Confirm RSVP & Blessings
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />
            <p className="font-serif italic text-lg text-[#FFD700]">
              Kindly respond by November 15, 2026 to help us make traditional arrangements.
            </p>
          </motion.div>
        </div>

        {/* Glassmorphism Panel */}
        <div className="royal-maroon-panel rounded-3xl p-8 sm:p-14 border-2 border-[#D4AF37]/50 shadow-2xl mandap-arch-border">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/20 border-2 border-[#FFD700] flex items-center justify-center diya-glow">
                  <CheckCircle2 className="w-10 h-10 text-[#FFD700]" />
                </div>

                <h3 className="font-heading-devanagari text-4xl text-[#FFF8E7] font-bold">
                  Dhanyavaad, {formData.name}!
                </h3>

                <p className="font-serif italic text-xl text-[#FFD700] max-w-md mx-auto">
                  {formData.attendance === 'attending'
                    ? "We are immensely blessed & overjoyed to welcome you and your family to Amalapuram, Andhra Pradesh!"
                    : "We will miss your presence, but thank you warmly for your divine blessings!"}
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 rounded-full border-2 border-[#D4AF37] text-[#FFD700] hover:bg-[#D4AF37] hover:text-[#3A0303] font-sans-clean text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    Edit RSVP Response
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Attendance Toggle */}
                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-[#2B0404] rounded-2xl border border-[#D4AF37]/30">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                    className={`flex-1 py-4 px-6 rounded-xl font-sans-clean text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                      formData.attendance === 'attending'
                        ? 'royal-gold-button text-[#210202] shadow-lg'
                        : 'text-[#FFF8E7]/60 hover:text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current text-rose-800" />
                    <span>Joyfully Attending with Family</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'declining' })}
                    className={`flex-1 py-4 px-6 rounded-xl font-sans-clean text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                      formData.attendance === 'declining'
                        ? 'bg-[#3A0303] text-[#FFF8E7] border border-[#D4AF37] shadow-lg'
                        : 'text-[#FFF8E7]/60 hover:text-white'
                    }`}
                  >
                    <span>Regretfully Declining</span>
                  </button>
                </div>

                {/* Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-sans-clean text-xs uppercase tracking-wider text-[#FFD700] flex items-center gap-2 font-semibold">
                      <User className="w-3.5 h-3.5" /> Full Name / Family Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh & Family"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2B0404] border border-[#D4AF37]/40 focus:border-[#FFD700] text-[#FFF8E7] placeholder-[#FFF8E7]/30 outline-none font-sans-clean text-sm transition-colors"
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs font-sans-clean flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-sans-clean text-xs uppercase tracking-wider text-[#FFD700] flex items-center gap-2 font-semibold">
                      <Mail className="w-3.5 h-3.5" /> Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2B0404] border border-[#D4AF37]/40 focus:border-[#FFD700] text-[#FFF8E7] placeholder-[#FFF8E7]/30 outline-none font-sans-clean text-sm transition-colors"
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs font-sans-clean flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="font-sans-clean text-xs uppercase tracking-wider text-[#FFD700] flex items-center gap-2 font-semibold">
                      <Phone className="w-3.5 h-3.5" /> WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2B0404] border border-[#D4AF37]/40 focus:border-[#FFD700] text-[#FFF8E7] placeholder-[#FFF8E7]/30 outline-none font-sans-clean text-sm transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-rose-400 text-xs font-sans-clean flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-2">
                    <label className="font-sans-clean text-xs uppercase tracking-wider text-[#FFD700] flex items-center gap-2 font-semibold">
                      <Users className="w-3.5 h-3.5" /> Number of Family Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#2B0404] border border-[#D4AF37]/40 focus:border-[#FFD700] text-[#FFF8E7] outline-none font-sans-clean text-sm transition-colors"
                    >
                      <option value="1" className="bg-[#2B0404]">1 Guest (Solo)</option>
                      <option value="2" className="bg-[#2B0404]">2 Guests (Couple)</option>
                      <option value="3" className="bg-[#2B0404]">3 Guests (Family)</option>
                      <option value="4" className="bg-[#2B0404]">4 Guests (Family)</option>
                      <option value="5" className="bg-[#2B0404]">5+ Guests (Extended Family)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-sans-clean text-xs uppercase tracking-wider text-[#FFD700] flex items-center gap-2 font-semibold">
                    <MessageSquare className="w-3.5 h-3.5" /> Divine Blessings & Best Wishes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your heartful blessings and best wishes for Vivek & Varshini..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#2B0404] border border-[#D4AF37]/40 focus:border-[#FFD700] text-[#FFF8E7] placeholder-[#FFF8E7]/30 outline-none font-sans-clean text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full royal-gold-button font-sans-clean text-xs uppercase tracking-[0.25em] font-bold shadow-2xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#210202]" />
                      <span>Sending RSVP & Blessings...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#210202]" />
                      <span>Send RSVP & Blessings</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
