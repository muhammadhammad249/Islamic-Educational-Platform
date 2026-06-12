'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimateIn from '@/components/ui/AnimateIn';

// Custom Islamic geometric pattern component for watermarks
const IslamicPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute pointer-events-none select-none text-accent/5 ${className}`} 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="0.3"
  >
    <defs>
      <pattern id="islamicGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" />
        <path d="M 0 0 L 20 20 M 20 0 L 0 20" strokeWidth="0.15" strokeDasharray="1,1" />
        <circle cx="10" cy="10" r="3.5" strokeWidth="0.2" />
        <circle cx="10" cy="10" r="1.5" strokeWidth="0.2" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#islamicGrid)" />
  </svg>
);

// Custom rotating 8-pointed star graphic
const IslamicStar = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`pointer-events-none select-none text-accent/15 ${className}`} 
    viewBox="0 0 200 200" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="0.75"
  >
    <motion.g 
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    >
      <circle cx="100" cy="100" r="95" strokeDasharray="3,3" />
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="50" strokeDasharray="5,5" />
      <circle cx="100" cy="100" r="25" />
      <rect x="50" y="50" width="100" height="100" rx="1" transform="rotate(0 100 100)" />
      <rect x="50" y="50" width="100" height="100" rx="1" transform="rotate(45 100 100)" />
    </motion.g>
  </svg>
);

export default function ContactPage() {
  const t = useTranslations('Teachings.support.contact');

  return (
    <div className="bg-primary min-h-screen text-white pt-12 relative overflow-hidden selection:bg-accent/30 selection:text-white">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Islamic background pattern layer */}
      <IslamicPattern className="inset-0 w-full h-full opacity-[0.03] text-accent pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">
        
        {/* Decorative central star behind hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] opacity-[0.02] pointer-events-none">
          <IslamicStar className="w-full h-full text-accent" />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-20 max-w-2xl mx-auto relative z-10">
          <AnimateIn direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Inquire & Learn
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-white mb-6 drop-shadow-md">
              {t('title')}
            </h1>
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent" />
              <span className="material-symbols-outlined text-accent text-xs select-none">star</span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-accent to-transparent" />
            </div>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed px-4">
              {t('subtitle')}
            </p>
          </AnimateIn>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start relative z-10 max-w-5xl lg:max-w-none mx-auto">
          
          {/* Support Channels */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <div className="space-y-6">
              <h2 className="font-sans text-[10px] uppercase font-bold text-accent tracking-[0.3em] pl-1">
                Direct Channels
              </h2>
              
              <AnimateIn direction="left" delay={0.1}>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#1C1C1C]/60 to-[#0F0F0F]/80 border border-accent/15 rounded-2xl hover:border-accent/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl text-accent select-none">chat</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-white mb-1 group-hover:text-accent transition-colors duration-200">
                      WhatsApp
                    </h3>
                    <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest">
                      {t('whatsapp')}
                    </p>
                  </div>
                </a>
              </AnimateIn>

              <AnimateIn direction="left" delay={0.2}>
                <a 
                  href="mailto:support@al-madrasa.com" 
                  className="flex items-center gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#1C1C1C]/60 to-[#0F0F0F]/80 border border-accent/15 rounded-2xl hover:border-accent/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl text-accent select-none">mail</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-white mb-1 group-hover:text-accent transition-colors duration-200">
                      Support Email
                    </h3>
                    <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest">
                      {t('email')}
                    </p>
                  </div>
                </a>
              </AnimateIn>
            </div>

            <AnimateIn direction="up" delay={0.3}>
              <div className="p-6 sm:p-8 border-l-2 border-accent/30 bg-[#1C1C1C]/20 backdrop-blur-sm rounded-r-2xl italic font-sans text-white/70 text-xs sm:text-sm leading-relaxed">
                "The seeking of knowledge is obligatory for every Muslim."
              </div>
            </AnimateIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <AnimateIn direction="right" delay={0.15}>
              <div className="bg-gradient-to-br from-[#1C1C1C]/50 to-[#0D0D0D]/70 border border-accent/15 p-8 sm:p-12 rounded-3xl shadow-xl shadow-black/30 backdrop-blur-md relative overflow-hidden">
                {/* Form geometric watermark background */}
                <div className="absolute inset-0 opacity-[0.015] text-accent pointer-events-none">
                  <IslamicPattern className="w-full h-full" />
                </div>

                <form className="space-y-6 sm:space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Name Input */}
                    <div className="space-y-2 group">
                      <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors">
                        {t('form.name')}
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg" 
                      />
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2 group">
                      <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors">
                        {t('form.email')}
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg" 
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 group">
                    <label className="font-sans text-[10px] uppercase font-bold text-white/40 group-focus-within:text-accent transition-colors">
                      {t('form.message')}
                    </label>
                    <textarea 
                      rows={5} 
                      required
                      className="w-full bg-[#0D0D0D]/40 border-b border-accent/25 focus:border-accent text-white px-4 py-3 focus:bg-[#0D0D0D]/60 outline-none font-sans transition-all duration-300 rounded-t-lg resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-accent to-[#B8922E] text-primary hover:shadow-accent/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 cursor-pointer shadow-lg transition-all"
                  >
                    {t('form.submit')}
                  </Button>
                </form>
              </div>
            </AnimateIn>
          </div>

        </div>
      </main>
    </div>
  );
}
