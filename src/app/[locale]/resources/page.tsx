'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/ui/AnimateIn';
import Button from '@/components/ui/Button';

// Islamic geometric pattern watermark
const IslamicPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute pointer-events-none select-none text-accent/5 ${className}`} 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="0.3"
  >
    <defs>
      <pattern id="resGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" />
        <circle cx="10" cy="10" r="3.5" strokeWidth="0.2" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#resGrid)" />
  </svg>
);

export default function ResourcesPage() {
  const t = useTranslations('Teachings.resources');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: 'apps' },
    { id: 'quran', label: 'Quranic Sciences', icon: 'menu_book' },
    { id: 'hadith', label: 'Hadith Studies', icon: 'auto_stories' },
    { id: 'fiqh', label: 'Fiqh & Law', icon: 'gavel' },
    { id: 'arabic', label: 'Arabic Language', icon: 'translate' },
    { id: 'spirituality', label: 'Spirituality', icon: 'self_improvement' },
  ];

  const resources = [
    { id: 1, title: 'Tajweed Rules — Complete Guide', category: 'quran', type: 'PDF Guide', pages: 86, icon: 'picture_as_pdf', color: 'from-red-500/10 to-red-900/5' },
    { id: 2, title: 'Introduction to Hadith Sciences', category: 'hadith', type: 'PDF Guide', pages: 124, icon: 'picture_as_pdf', color: 'from-blue-500/10 to-blue-900/5' },
    { id: 3, title: 'Foundations of Aqidah', category: 'fiqh', type: 'Reference Text', pages: 210, icon: 'description', color: 'from-purple-500/10 to-purple-900/5' },
    { id: 4, title: 'Arabic Grammar — Al-Ajurrumiyya Notes', category: 'arabic', type: 'Study Notes', pages: 48, icon: 'note', color: 'from-green-500/10 to-green-900/5' },
    { id: 5, title: 'Purification of the Heart', category: 'spirituality', type: 'Classical Text', pages: 160, icon: 'favorite', color: 'from-amber-500/10 to-amber-900/5' },
    { id: 6, title: 'Quran Memorization Schedule Template', category: 'quran', type: 'Worksheet', pages: 12, icon: 'calendar_month', color: 'from-teal-500/10 to-teal-900/5' },
    { id: 7, title: '40 Hadith of Imam An-Nawawi', category: 'hadith', type: 'Classical Text', pages: 92, icon: 'auto_stories', color: 'from-indigo-500/10 to-indigo-900/5' },
    { id: 8, title: 'Ethics in Modern Commerce — Fiqh Analysis', category: 'fiqh', type: 'Commentary', pages: 180, icon: 'description', color: 'from-orange-500/10 to-orange-900/5' },
    { id: 9, title: 'Daily Adhkar & Supplications Collection', category: 'spirituality', type: 'PDF Guide', pages: 34, icon: 'picture_as_pdf', color: 'from-pink-500/10 to-pink-900/5' },
  ];

  const filteredResources = resources.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch = searchQuery === '' || r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary min-h-screen text-white pt-12 relative overflow-hidden selection:bg-accent/30 selection:text-white">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />
      <IslamicPattern className="inset-0 w-full h-full opacity-[0.03] text-accent pointer-events-none" />

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14 text-center flex flex-col items-center relative z-10">
        <AnimateIn direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Scholar&apos;s Library
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 drop-shadow-md">
            {t('hero.title')}
          </h1>
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent" />
            <span className="material-symbols-outlined text-accent text-xs select-none">star</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-accent to-transparent" />
          </div>
          <p className="font-sans text-sm sm:text-base text-white/70 max-w-2xl mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </AnimateIn>

        {/* Search Bar */}
        <AnimateIn delay={0.15}>
          <div className="w-full max-w-xl relative">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('hero.search')}
              className="w-full bg-[#1C1C1C]/50 backdrop-blur-md border border-accent/20 rounded-2xl py-4 pl-12 pr-4 font-sans text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent transition-all duration-300 shadow-lg"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-accent/60 select-none">
              search
            </span>
          </div>
        </AnimateIn>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 relative z-10">

        {/* Category Filter Tabs */}
        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-accent/15 border-accent/40 text-accent shadow-sm'
                    : 'border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
                }`}
              >
                <span className="material-symbols-outlined text-sm select-none">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, idx) => (
            <AnimateIn key={resource.id} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col h-full rounded-2xl border border-accent/15 bg-gradient-to-br from-[#151515]/80 to-[#0A0A0A]/90 overflow-hidden hover:border-accent/35 hover:shadow-[0_0_25px_rgba(212,175,55,0.06)] transition-all duration-300"
              >
                {/* Header strip */}
                <div className={`h-1.5 bg-gradient-to-r ${resource.color}`} />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Icon and type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      <span className="material-symbols-outlined text-accent text-lg select-none">{resource.icon}</span>
                    </div>
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-white/40 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md">
                      {resource.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base sm:text-lg text-white mb-3 group-hover:text-accent transition-colors duration-200 leading-snug flex-grow">
                    {resource.title}
                  </h3>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-white/40 text-[10px] font-sans mb-5">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs select-none">description</span>
                      {resource.pages} pages
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="capitalize">{resource.category}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30 rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer">
                      View
                    </button>
                    <button className="flex-1 py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-primary bg-gradient-to-r from-accent to-[#B8922E] rounded-lg hover:shadow-accent/20 hover:shadow-md transition-all duration-300 cursor-pointer">
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 text-white/40 font-sans text-sm">
            <span className="material-symbols-outlined text-4xl text-white/15 block mb-4 select-none">search_off</span>
            No resources match your current filters. Try adjusting your search or category.
          </div>
        )}

        {/* Featured Spotlight Section */}
        <section className="mt-16 sm:mt-20">
          <AnimateIn>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-3 drop-shadow-md">
                Featured Collections
              </h2>
              <p className="font-sans text-white/60 text-xs sm:text-sm max-w-xl mx-auto">
                Curated selections from our scholarly archives, chosen by senior faculty for their pedagogical significance.
              </p>
            </div>
          </AnimateIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn direction="left" delay={0.1}>
              <div className="group relative rounded-2xl border border-accent/15 bg-gradient-to-br from-[#1C1C1C]/60 to-[#0F0F0F]/80 p-7 sm:p-8 overflow-hidden hover:border-accent/35 transition-all duration-300">
                <span className="font-sans text-[9px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t('theology.label')}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                  {t('theology.featuredTitle')}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed mb-5">
                  {t('theology.featuredDesc')}
                </p>
                <Link href="#" className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-accent uppercase tracking-widest hover:text-white transition-colors">
                  {t('theology.viewAll')}
                  <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15}>
              <div className="group relative rounded-2xl border border-accent/15 bg-gradient-to-br from-[#1C1C1C]/60 to-[#0F0F0F]/80 p-7 sm:p-8 overflow-hidden hover:border-accent/35 transition-all duration-300">
                <span className="font-sans text-[9px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t('law.label')}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                  {t('law.featuredTitle')}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed mb-5">
                  {t('law.featuredDesc')}
                </p>
                <Link href="#" className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-accent uppercase tracking-widest hover:text-white transition-colors">
                  {t('law.viewAll')}
                  <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 sm:mt-20">
          <AnimateIn>
            <div className="text-center bg-gradient-to-br from-[#1C1C1C]/50 to-[#0D0D0D]/70 border border-accent/15 rounded-3xl p-10 sm:p-14 relative overflow-hidden">
              <IslamicPattern className="inset-0 w-full h-full opacity-[0.02] text-accent pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 drop-shadow-md">
                  Begin Your Scholarly Journey
                </h2>
                <p className="font-sans text-white/60 text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                  Access premium scholarly materials, live seminars, and direct mentorship from certified Islamic scholars.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => { window.location.href = `/${document.documentElement.lang || 'en'}/pricing`; }}
                    className="cursor-pointer shadow-xl"
                  >
                    Explore Packages
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => { window.location.href = `/${document.documentElement.lang || 'en'}/teachers`; }}
                    className="cursor-pointer"
                  >
                    Meet Our Scholars
                  </Button>
                </div>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>
    </div>
  );
}
