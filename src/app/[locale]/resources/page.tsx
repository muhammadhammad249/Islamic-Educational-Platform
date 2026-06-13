'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/ui/AnimateIn';

const IslamicPattern = ({ className = '' }: { className?: string }) => (
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
    {
      id: 1,
      title: 'Tajweed Rules — Complete Guide',
      category: 'quran',
      type: 'PDF Guide',
      pages: 86,
      icon: 'picture_as_pdf',
      href: '/teachings/tajweed',
    },
    {
      id: 2,
      title: 'Introduction to Hadith Sciences',
      category: 'hadith',
      type: 'PDF Guide',
      pages: 124,
      icon: 'auto_stories',
      href: '/teachings',
    },
    {
      id: 3,
      title: 'Foundations of Aqidah',
      category: 'fiqh',
      type: 'Reference Text',
      pages: 210,
      icon: 'description',
      href: '/teachings/iman',
    },
    {
      id: 4,
      title: 'Arabic Grammar Notes',
      category: 'arabic',
      type: 'Study Notes',
      pages: 48,
      icon: 'note',
      href: '/teachings/quran-intro',
    },
    {
      id: 5,
      title: 'Purification of the Heart',
      category: 'spirituality',
      type: 'Classical Text',
      pages: 160,
      icon: 'favorite',
      href: '/teachings/manners',
    },
    {
      id: 6,
      title: 'Quran Memorization Schedule',
      category: 'quran',
      type: 'Worksheet',
      pages: 12,
      icon: 'calendar_month',
      href: '/quran/hifz',
    },
    {
      id: 7,
      title: '40 Hadith Collection',
      category: 'hadith',
      type: 'Classical Text',
      pages: 92,
      icon: 'auto_stories',
      href: '/teachings/seerah',
    },
    {
      id: 8,
      title: 'Fiqh Analysis',
      category: 'fiqh',
      type: 'Commentary',
      pages: 180,
      icon: 'gavel',
      href: '/teachings/pillars',
    },
    {
      id: 9,
      title: 'Daily Adhkar Collection',
      category: 'spirituality',
      type: 'PDF Guide',
      pages: 34,
      icon: 'prayer_times',
      href: '/teachings/duas',
    },
  ];

  const filteredResources = resources.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary min-h-screen text-white pt-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[150px]" />
      <IslamicPattern className="inset-0 w-full h-full opacity-[0.03]" />

      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center relative z-10">
        <AnimateIn direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Scholar Library
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-5">
            Islamic Resources
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-10">
            Search and explore premium Islamic study resources, guides, references,
            and learning materials.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="w-full max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search resources..."
              className="w-full bg-[#1C1C1C]/50 border border-accent/20 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent transition"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-accent/60">
              search
            </span>
          </div>
        </AnimateIn>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border transition ${
                  activeCategory === cat.id
                    ? 'bg-accent text-primary border-accent'
                    : 'border-white/10 text-white/50 hover:text-accent hover:border-accent/40'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, idx) => (
            <AnimateIn key={resource.id} delay={idx * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full rounded-2xl border border-accent/15 bg-gradient-to-br from-[#151515]/80 to-[#0A0A0A]/90 overflow-hidden hover:border-accent/40 transition"
              >
                <div className="h-1.5 bg-accent" />

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent">
                        {resource.icon}
                      </span>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="font-display text-lg text-white mb-3 group-hover:text-accent transition">
                    {resource.title}
                  </h3>

                  <div className="flex items-center gap-3 text-white/40 text-[10px] mb-5">
                    <span>{resource.pages} pages</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="capitalize">{resource.category}</span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={resource.href}
                      className="flex-1 text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30 rounded-lg hover:bg-accent hover:text-primary transition"
                    >
                      View
                    </Link>

                    <Link
                      href="/contact"
                      className="flex-1 text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-primary bg-accent rounded-lg hover:opacity-90 transition"
                    >
                      Request
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16 text-white/40 text-sm">
            <span className="material-symbols-outlined text-4xl text-white/15 block mb-4">
              search_off
            </span>
            No resources found.
          </div>
        )}

        <section className="mt-20">
          <AnimateIn>
            <div className="text-center bg-gradient-to-br from-[#1C1C1C]/50 to-[#0D0D0D]/70 border border-accent/15 rounded-3xl p-10 sm:p-14">
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
                Begin Your Scholarly Journey
              </h2>

              <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
                Access structured Islamic learning, teachers, and premium study material.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-accent text-primary font-bold rounded-full text-xs uppercase tracking-widest"
                >
                  Explore Packages
                </Link>

                <Link
                  href="/teachers"
                  className="px-8 py-4 border border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition text-xs uppercase tracking-widest"
                >
                  Meet Our Scholars
                </Link>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>
    </div>
  );
}