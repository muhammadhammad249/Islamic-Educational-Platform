'use client';

import React from 'react';
import AnimateIn from '@/components/ui/AnimateIn';

export default function QuranIntroPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <section className="relative py-24 px-8 bg-primary text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimateIn direction="down">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent block mb-4">The Final Revelation</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8">Introduction to the Quran</h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Understanding the miraculous nature, history, and message of the Word of Allah.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto space-y-24">
        <AnimateIn>
          <div className="space-y-6">
            <h2 className="font-display text-4xl text-primary">The Word of Allah</h2>
            <p className="font-sans text-lg text-primary/70 leading-relaxed">
              The Quran is not a book authored by humans, but the literal speech of Allah revealed to the Prophet Muhammad ﷺ. It is the final guidance for humanity, preserved perfectly in its original Arabic for over 1,400 years.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border-l-4 border-accent bg-background-warm">
              <h3 className="font-display text-xl mb-4">Structure</h3>
              <p className="font-sans text-sm text-primary/60">
                114 Chapters (Surahs) composed of 6,236 Verses (Ayats). Divided into 30 parts (Juz) for easy recitation.
              </p>
            </div>
            <div className="p-8 border-l-4 border-accent bg-background-warm">
              <h3 className="font-display text-xl mb-4">Themes</h3>
              <p className="font-sans text-sm text-primary/60">
                Tawhid (Oneness of God), Prophethood, the Afterlife, Morality, Law, and stories of previous nations.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
