'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function DuasPage() {
  const duas = [
    { title: 'Upon Waking Up', ar: 'الحَمْدُ للهِ الذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا' },
    { title: 'Before Sleeping', ar: 'بِاسْمِكَ اللهمَّ أَمُوتُ وَأَحْيَا' },
    { title: 'For Knowledge', ar: 'رَبِّ زِدْنِي عِلْمًا' },
    { title: 'Seeking Forgiveness', ar: 'أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">Remembrance of Allah</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Duas & Adhkar</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Essential daily supplications for a life centered around the Creator.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto space-y-12">
        {duas.map((dua, index) => (
          <AnimateIn key={dua.title} delay={0.1 * index} direction={index % 2 === 0 ? 'left' : 'right'}>
            <div className="bg-white border border-accent/10 p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-right">
                <div className="font-arabic-display text-3xl md:text-4xl text-primary leading-loose mb-4">
                  {dua.ar}
                </div>
              </div>
              <div className="w-px h-24 bg-accent/20 hidden md:block"></div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl text-accent mb-2">{dua.title}</h3>
                <p className="font-sans text-sm text-primary/40 uppercase tracking-widest">Daily Supplication</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </section>
    </div>
  );
}
